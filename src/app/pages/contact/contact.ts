import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectBriefFormComponent } from '../../components/project-brief-form/project-brief-form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ProjectBriefFormComponent],
  template: `
    <div class="contact-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg"><div class="ph-orb ph-orb-1"></div><div class="ph-orb ph-orb-2"></div></div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">{{ selectedServiceTitle ? 'Dedicated Consultation' : 'Start Your Project' }}</span>
            <h1 *ngIf="selectedServiceTitle">Let's Engineer Your <span class="gradient-text">{{ selectedServiceTitle }}</span></h1>
            <h1 *ngIf="!selectedServiceTitle">Let's Engineer Your Software — <span class="gradient-text">Free Technical Consultation</span></h1>
            <p *ngIf="selectedServiceTitle">We've pre-configured your focus area below. Complete the quick 3-step brief to receive an architectural scope and fixed-price proposal within 4 hours.</p>
            <p *ngIf="!selectedServiceTitle">Fill out the brief below — our engineering lead will send a tailored architectural proposal within 4 hours. Or reach us directly via the channels listed.</p>
          </div>
        </div>
      </section>

      <!-- ===== MAIN CONTACT SECTION ===== -->
      <section class="section">
        <div class="container">
          <div class="contact-layout">

            <!-- LEFT: Project Brief Form -->
            <div class="contact-form-col reveal">
              <div class="col-header">
                <span class="section-label">Project Brief</span>
                <h2>Tell Us About <span class="gradient-text">Your Project</span></h2>
                <p>Takes under 3 minutes. No commitment required.</p>
              </div>
              <app-project-brief-form></app-project-brief-form>
            </div>

            <!-- RIGHT: Info + What Happens Next -->
            <div class="contact-info-col">

              <!-- Availability Signal -->
              <div class="availability-card reveal">
                <div class="av-dot"></div>
                <div>
                  <strong>Currently Accepting Projects</strong>
                  <span>2 sprint slots open — Q4 2026</span>
                </div>
              </div>

              <!-- What Happens Next -->
              <div class="what-next-card reveal">
                <h3>What Happens Next?</h3>
                <div class="next-steps">
                  <div class="ns-item" *ngFor="let step of nextSteps; let i = index">
                    <div class="ns-num">{{ i + 1 }}</div>
                    <div class="ns-content">
                      <strong>{{ step.title }}</strong>
                      <span>{{ step.desc }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contact Channels -->
              <div class="quick-channels reveal">
                <h3>Prefer to Reach Us Directly?</h3>
                <div class="channel-list">
                  <a href="tel:+919710759208" class="channel-item">
                    <div class="ch-icon ch-phone">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.07 9.81 19.79 19.79 0 01.33 4.18 2 2 0 012.31 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l.76-.76a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                    </div>
                    <div>
                      <strong>Call Us</strong>
                      <span>+91 97107 59208 · Mon–Sat, 9AM–8PM</span>
                    </div>
                  </a>
                  <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" class="channel-item">
                    <div class="ch-icon ch-whatsapp">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div>
                      <strong>WhatsApp</strong>
                      <span>Instant response · avg 47 min reply time</span>
                    </div>
                  </a>
                  <a href="mailto:contact@conceptralabs.in" class="channel-item">
                    <div class="ch-icon ch-email">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>contact&#64;conceptralabs.in · reply in 2–4 hrs</span>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/conceptra-labs/" target="_blank" rel="noopener noreferrer" class="channel-item">
                    <div class="ch-icon ch-linkedin">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                    <div>
                      <strong>LinkedIn</strong>
                      <span>Follow us for case studies & updates</span>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Google Rating -->
              <div class="google-rating-card reveal">
                <div class="gr-left">
                  <svg width="22" height="22" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                  <div>
                    <div class="gr-stars">★★★★★</div>
                    <strong>5.0 / 5.0</strong>
                  </div>
                </div>
                <div class="gr-right">
                  <span>9 Google Reviews</span>
                  <a href="https://g.co/kgs/conceptralabs" target="_blank" rel="noopener noreferrer" class="gr-link">View on Google →</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- ===== FAQ SECTION ===== -->
      <section class="section faq-section">
        <div class="container">
          <div class="section-header reveal text-center">
            <span class="section-label">Common Questions</span>
            <h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
          </div>
          <div class="faq-grid reveal">
            <div class="faq-item" *ngFor="let faq of faqs" [class.open]="faq.open" (click)="faq.open = !faq.open">
              <div class="faq-q">
                <span>{{ faq.q }}</span>
                <svg class="faq-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
              </div>
              <div class="faq-a" *ngIf="faq.open">{{ faq.a }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="section-sm">
        <div class="container">
          <div class="map-wrapper reveal">
            <div class="map-header">
              <h3>📍 Find Us in Chennai &amp; Bengaluru</h3>
              <p>Serving clients across India and globally</p>
            </div>
            <div class="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9974392521!2d79.87895545!3d13.04780905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1737000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Conceptra Labs - Chennai">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {
  selectedServiceTitle = '';

  constructor(
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const svc = params['service'];
      if (!svc) {
        this.selectedServiceTitle = '';
        return;
      }
      const titleMap: { [k: string]: string } = {
        'website': 'Custom Website / Web App',
        'web': 'Custom Website / Web App',
        'website-development': 'Custom Website / Web App',
        'mobile': 'Cross-Platform Mobile App',
        'mobile-app': 'Cross-Platform Mobile App',
        'mobile-app-development': 'Cross-Platform Mobile App',
        'erp': 'School ERP / Enterprise Portal',
        'school-erp': 'School ERP Management System',
        'school-erp-development': 'School ERP Management System',
        'custom-software': 'Custom Enterprise Software',
        'custom-software-development': 'Custom Enterprise Software',
        'ai': 'Enterprise AI Automation & RAG Bot',
        'ai-automation': 'Enterprise AI Automation & RAG Bot',
        'business': 'Business Process Automation',
        'business-automation': 'Business Process Automation',
        'ecommerce': 'E-Commerce Platform'
      };
      this.selectedServiceTitle = titleMap[svc.toLowerCase()] || svc;
    });
  }

  nextSteps = [
    { title: 'We review your brief', desc: 'Our tech lead personally reviews your project brief within 4 working hours.' },
    { title: 'Tailored proposal sent', desc: 'You receive a custom architectural overview and transparent cost estimate.' },
    { title: '30-min scoping call', desc: 'A brief call to align on scope, timeline, and team assignment.' },
    { title: 'Development begins', desc: 'Sprint kickoff with dedicated developers assigned to your project.' },
  ];

  faqs = [
    { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope. A standard website takes 3–5 weeks, mobile apps 6–10 weeks, and ERP systems 10–16 weeks. We\'ll provide a detailed sprint roadmap in your proposal.', open: false },
    { q: 'Do you work with international clients?', a: 'Yes — we work with clients across India, UAE, UK, and Singapore. All communication is in English and we adapt to your time zone for meetings.', open: false },
    { q: 'What\'s included in the SLA support retainer?', a: 'Our SLA retainers include 99.9% uptime monitoring, daily encrypted database backups, security vulnerability scans, bug fixes, and monthly performance audits. Starting at ₹4,999/month.', open: false },
    { q: 'Who owns the source code?', a: '100% IP and code ownership transfers to you upon project completion and final payment. We provide full GitHub repository access and deployment credentials.', open: false },
    { q: 'Can you work with my existing codebase?', a: 'Absolutely. We regularly audit, refactor, and extend existing codebases. Our technical assessment will identify upgrade paths and risk areas in the first scoping call.', open: false },
    { q: 'Do you sign NDAs?', a: 'Yes, we sign NDAs before sharing any project details. Confidentiality of your business idea and technical implementation is treated as a priority.', open: false },
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      reveals.forEach(el => observer.observe(el));
    }
  }
}
