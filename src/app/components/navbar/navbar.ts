import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

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
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="url(#logoGrad)"/>
              <path d="M12 20C12 15.6 15.6 12 20 12C22.2 12 24.2 12.9 25.7 14.3" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M28 20C28 24.4 24.4 28 20 28C17.8 28 15.8 27.1 14.3 25.7" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
              <circle cx="20" cy="20" r="3" fill="white"/>
              <circle cx="12" cy="20" r="2" fill="url(#dotGrad)"/>
              <circle cx="28" cy="20" r="2" fill="url(#dotGrad2)"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stop-color="#6366f1"/>
                  <stop offset="100%" stop-color="#06b6d4"/>
                </linearGradient>
                <linearGradient id="dotGrad" x1="0" y1="0" x2="4" y2="4">
                  <stop offset="0%" stop-color="#a5b4fc"/>
                  <stop offset="100%" stop-color="#6366f1"/>
                </linearGradient>
                <linearGradient id="dotGrad2" x1="0" y1="0" x2="4" y2="4">
                  <stop offset="0%" stop-color="#67e8f9"/>
                  <stop offset="100%" stop-color="#06b6d4"/>
                </linearGradient>
              </defs>
            </svg>
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

        <!-- CTA Button -->
        <div class="nav-actions hide-mobile">
          <a routerLink="/contact" class="btn btn-primary btn-sm nav-cta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.33 4.18 2 2 0 012.31 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l.76-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Get Free Consultation
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <button class="hamburger hide-desktop" (click)="toggleMenu()" [class.active]="menuOpen" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
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

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }
}
