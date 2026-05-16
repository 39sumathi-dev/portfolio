import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-glow"></div>
      <div class="container">
        <!-- Main Footer Grid -->
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a routerLink="/" class="footer-logo">
              <div class="footer-logo-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="10" fill="url(#fLogoGrad)"/>
                  <path d="M12 20C12 15.6 15.6 12 20 12C22.2 12 24.2 12.9 25.7 14.3" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                  <path d="M28 20C28 24.4 24.4 28 20 28C17.8 28 15.8 27.1 14.3 25.7" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                  <circle cx="20" cy="20" r="3" fill="white"/>
                  <circle cx="12" cy="20" r="2" fill="white" opacity="0.7"/>
                  <circle cx="28" cy="20" r="2" fill="white" opacity="0.7"/>
                  <defs>
                    <linearGradient id="fLogoGrad" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stop-color="#6366f1"/>
                      <stop offset="100%" stop-color="#06b6d4"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span class="footer-logo-name">Conceptra Labs</span>
              </div>
            </a>
            <p class="footer-tagline">"Design. Develop. Automate. Grow."</p>
            <p class="footer-desc">
              We build world-class digital products — websites, applications, ERP systems, AI automation solutions, and scalable platforms for modern businesses.
            </p>
            <!-- Social Links -->
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" class="social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-col">
            <h4 class="footer-col-title">Quick Links</h4>
            <ul class="footer-links">
              <li *ngFor="let link of quickLinks">
                <a [routerLink]="link.path" class="footer-link">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-col">
            <h4 class="footer-col-title">Our Services</h4>
            <ul class="footer-links">
              <li *ngFor="let svc of services">
                <a routerLink="/services" class="footer-link">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  {{ svc }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact & Newsletter -->
          <div class="footer-col">
            <h4 class="footer-col-title">Get In Touch</h4>
            <div class="footer-contact-list">
              <a href="mailto:hello@conceptralabs.com" class="footer-contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
                </div>
                hello&#64;conceptralabs.com
              </a>
              <a href="tel:+919999999999" class="footer-contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 9.81 19.79 19.79 0 01.33 4.18 2 2 0 012.31 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l.76-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                +91 99999 99999
              </a>
              <div class="footer-contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                Mumbai, Maharashtra, India
              </div>
            </div>

            <div class="newsletter">
              <p class="newsletter-label">Get weekly tech insights</p>
              <div class="newsletter-form">
                <input type="email" placeholder="Enter your email" class="newsletter-input"/>
                <button class="newsletter-btn btn btn-primary btn-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-divider"></div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <p class="copyright">© 2025 Conceptra Labs. All rights reserved. Crafted with ❤️ in India.</p>
          <div class="footer-bottom-links">
            <a href="#" class="bottom-link">Privacy Policy</a>
            <a href="#" class="bottom-link">Terms of Service</a>
            <a href="#" class="bottom-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/projects' },
    { label: 'Why Choose Us', path: '/why-us' },
    { label: 'How We Deliver', path: '/process' },
    { label: 'Contact', path: '/contact' }
  ];

  services = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'ERP Systems',
    'AI Automation',
    'E-Commerce Development',
    'Dashboard Development',
    'AI Web Applications'
  ];
}
