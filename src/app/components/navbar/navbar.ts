import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ThemeService } from '../../services/theme.service';

export interface ServiceSubLink {
  label: string;
  path: string;
  iconSvg: string;
  safeIconSvg?: SafeHtml;
  desc: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled" [class.menu-open]="menuOpen">
      <div class="nav-container">
        <!-- Logo -->
        <a routerLink="/" class="nav-logo" (click)="closeMenu()">
          <div class="logo-icon">
            <img src="assets/conceptra-logo.jpeg" alt="Conceptra Labs Logo" class="logo-img"/>
          </div>
          <div class="logo-text">
            <span class="logo-name">Conceptra</span>
            <span class="logo-tag">Labs</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <ul class="nav-links hide-mobile">
          <li *ngFor="let link of navLinks" class="nav-item" [class.has-dropdown]="link.hasDropdown"
              (mouseenter)="link.hasDropdown ? showDropdown() : null"
              (mouseleave)="link.hasDropdown ? hideDropdown() : null">
            
            <a [routerLink]="link.path" routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: link.path === '/' || link.path === '/services'}"
               class="nav-link">
              {{ link.label }}
              <svg *ngIf="link.hasDropdown" class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
              <span class="nav-indicator"></span>
            </a>

            <!-- Services Desktop Dropdown Menu -->
            <div *ngIf="link.hasDropdown && dropdownOpen" class="nav-dropdown">
              <div class="dropdown-grid">
                <a *ngFor="let sub of serviceSubLinks" [routerLink]="sub.path" class="dropdown-item" (click)="hideDropdown()">
                  <div class="dropdown-icon" [innerHTML]="sub.safeIconSvg"></div>
                  <div class="dropdown-text">
                    <span class="dropdown-title">{{ sub.label }}</span>
                    <span class="dropdown-desc">{{ sub.desc }}</span>
                  </div>
                </a>
              </div>
              <div class="dropdown-footer">
                <a routerLink="/services" class="dropdown-hub-link" (click)="hideDropdown()">
                  View All Services & Capabilities →
                </a>
              </div>
            </div>
          </li>
        </ul>

        <!-- Actions -->
        <div class="nav-actions hide-mobile">
          <!-- Toggle Theme Button -->
          <button class="theme-toggle" (click)="toggleTheme()" [aria-label]="'Switch to ' + (currentTheme === 'dark' ? 'light' : 'dark') + ' theme'">
            <svg *ngIf="currentTheme === 'dark'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg *ngIf="currentTheme === 'light'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>

          <a routerLink="/contact" class="btn btn-primary btn-sm nav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.33 4.18 2 2 0 012.31 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l.76-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Get Free Consultation
          </a>
        </div>

        <!-- Mobile Actions -->
        <div class="mobile-actions hide-desktop">
          <button class="theme-toggle" (click)="toggleTheme()" [aria-label]="'Switch to ' + (currentTheme === 'dark' ? 'light' : 'dark') + ' theme'">
            <svg *ngIf="currentTheme === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg *ngIf="currentTheme === 'light'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu hide-desktop" [class.open]="menuOpen">
        <ul class="mobile-nav-links">
          <li *ngFor="let link of navLinks; let i = index"
              [style.animation-delay]="menuOpen ? (i * 0.05) + 's' : '0s'">
            <a [routerLink]="link.path" routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: link.path === '/'}"
               class="mobile-nav-link" (click)="closeMenu()">
              {{ link.label }}
            </a>
            <!-- Mobile Sub-Services -->
            <div *ngIf="link.hasDropdown" class="mobile-sub-links">
              <a *ngFor="let sub of serviceSubLinks" [routerLink]="sub.path" class="mobile-sub-link" (click)="closeMenu()">
                {{ sub.label }}
              </a>
            </div>
          </li>
        </ul>
        <a routerLink="/contact" class="btn btn-primary mobile-cta" (click)="closeMenu()">
          Get Free Consultation
        </a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;
  dropdownOpen = false;

  navLinks = [
    { label: 'Home', path: '/', hasDropdown: false },
    { label: 'About', path: '/about', hasDropdown: false },
    { label: 'Services', path: '/services', hasDropdown: true },
    { label: 'Projects', path: '/projects', hasDropdown: false },
    { label: 'Why Us', path: '/why-us', hasDropdown: false },
    { label: 'Process', path: '/process', hasDropdown: false },
    { label: 'Contact', path: '/contact', hasDropdown: false }
  ];

  serviceSubLinks: ServiceSubLink[] = [
    { label: 'Website Development', path: '/services/website-development', desc: 'High-speed custom web applications & PWAs', iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
    { label: 'Custom Software Development', path: '/services/custom-software-development', desc: 'Enterprise SaaS platforms & microservices', iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 17 22 12"/></svg>' },
    { label: 'School ERP Development', path: '/services/school-erp-development', desc: 'Cloud fee, attendance & report card software', iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>' },
    { label: 'Mobile App Development', path: '/services/mobile-app-development', desc: 'Native 60fps Flutter iOS & Android apps', iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
    { label: 'AI Automation', path: '/services/ai-automation', desc: 'LLM agents, RAG chatbots & doc parsing', iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>' },
    { label: 'Business Automation', path: '/services/business-automation', desc: 'ERP accounting sync & workflow pipelines', iconSvg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>' }
  ];

  constructor(
    private themeService: ThemeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.serviceSubLinks = this.serviceSubLinks.map(sub => ({
      ...sub,
      safeIconSvg: this.sanitizer.bypassSecurityTrustHtml(sub.iconSvg)
    }));
  }

  get currentTheme(): 'dark' | 'light' {
    return this.themeService.getTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  showDropdown() {
    this.dropdownOpen = true;
  }

  hideDropdown() {
    this.dropdownOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.menuOpen ? 'hidden' : '';
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.dropdownOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
