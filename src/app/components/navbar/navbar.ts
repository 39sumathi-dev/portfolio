import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

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
          <li *ngFor="let link of navLinks">
            <a [routerLink]="link.path" routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: link.path === '/'}"
               class="nav-link">
              {{ link.label }}
              <span class="nav-indicator"></span>
            </a>
          </li>
        </ul>

        <!-- Actions -->
        <div class="nav-actions hide-mobile">
          <!-- Toggle Theme Button -->
          <button class="theme-toggle" (click)="toggleTheme()" [aria-label]="'Switch to ' + (currentTheme === 'dark' ? 'light' : 'dark') + ' theme'">
            <!-- Sun Icon (for dark theme) -->
            <svg *ngIf="currentTheme === 'dark'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <!-- Moon Icon (for light theme) -->
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

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'Process', path: '/process' },
    { label: 'Contact', path: '/contact' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {}

  get currentTheme(): 'dark' | 'light' {
    return this.themeService.getTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
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
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
