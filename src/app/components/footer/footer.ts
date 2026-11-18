import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <!-- Main Grid -->
        <div class="footer-grid">

          <!-- Col 1: Brand -->
          <div class="footer-brand">
            <a routerLink="/" class="footer-logo">
              <div class="footer-logo-icon">
                <img src="assets/conceptra-logo.jpeg" alt="Conceptra Labs" class="footer-logo-img"/>
              </div>
              <span class="footer-logo-name">Conceptra Labs</span>
            </a>
            <p class="footer-tagline">Design. Develop. Automate. Grow.</p>
            <p class="footer-desc">
              Govt. of India MSME Certified digital engineering studio in Chennai &amp; Bengaluru. We build custom software,
              offline POS systems, ERP platforms, web applications, and AI integrations for Indian businesses.
            </p>
            <!-- Social -->
            <div class="footer-social">
              <a href="https://www.linkedin.com/company/conceptra-labs/"
                 target="_blank" rel="noopener noreferrer"
                 class="social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://instagram.com/conceptralabs"
                 target="_blank" rel="noopener noreferrer"
                 class="social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Col 2: Services -->
          <div class="footer-col">
            <h4 class="footer-col-title">Services</h4>
            <ul class="footer-links">
              <li *ngFor="let svc of services">
                <a [routerLink]="svc.path" class="footer-link">{{ svc.label }}</a>
              </li>
            </ul>
          </div>

          <!-- Col 3: Company -->
          <div class="footer-col">
            <h4 class="footer-col-title">Company</h4>
            <ul class="footer-links">
              <li *ngFor="let link of companyLinks">
                <a [routerLink]="link.path" class="footer-link">{{ link.label }}</a>
              </li>
            </ul>
          </div>

          <!-- Col 4: Contact -->
          <div class="footer-col">
            <h4 class="footer-col-title">Contact</h4>
            <div class="footer-contact-list">
              <a href="mailto:contact@conceptralabs.in" class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
                </svg>
                contact@conceptralabs.in
              </a>
              <a href="tel:+919710759208" class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 9.81 19.79 19.79 0 01.33 4.18 2 2 0 012.31 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l.76-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +91 97107 59208
              </a>
              <div class="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Chennai &amp; Bengaluru, India
              </div>
            </div>
            <!-- WhatsApp CTA -->
            <a href="https://wa.me/919710759208"
               target="_blank" rel="noopener noreferrer"
               class="whatsapp-btn" aria-label="Chat on WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.535 5.874L.057 23.47a.75.75 0 00.918.919l5.633-1.482A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.95 0-3.78-.524-5.355-1.44l-.383-.23-3.975 1.046 1.052-3.86-.25-.395A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
          <p class="copyright">© 2026 Conceptra Labs &bull; Govt. of India MSME Certified Enterprise. All rights reserved.</p>
          <p class="footer-seo-tag">Custom Software &amp; Web Development Company in Chennai &bull; Websites From ₹12k</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.scss']
})
export class FooterComponent {
  services = [
    { label: 'Website Development',         path: '/services/website-development' },
    { label: 'Custom Software',              path: '/services/custom-software-development' },
    { label: 'Offline POS Systems',          path: '/services/custom-software-development' },
    { label: 'School ERP',                   path: '/services/school-erp-development' },
    { label: 'Mobile Apps',                  path: '/services/mobile-app-development' },
    { label: 'AI Automation',                path: '/services/ai-automation' },
    { label: 'Business Automation',          path: '/services/business-automation' }
  ];

  companyLinks = [
    { label: 'About',    path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Why Us',   path: '/why-us' },
    { label: 'Process',  path: '/process' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact',  path: '/contact' }
  ];
}
