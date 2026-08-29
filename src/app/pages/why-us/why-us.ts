import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="why-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg">
          <div class="ph-orb ph-orb-1"></div>
          <div class="ph-orb ph-orb-2"></div>
        </div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">Why Choose Us</span>
            <h1>Why Ambitious Businesses Partner With <span class="gradient-text">Conceptra Labs</span></h1>
            <p>We are a specialized digital engineering agency with tech hubs in Chennai & Bengaluru. We don't just deliver code — we architect scalable systems, automate operations, and guarantee SLA reliability.</p>
          </div>
        </div>
      </section>

      <!-- Why Digital Projects Fail -->
      <section class="section fail-section">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-label">The Digital Pitfall</span>
            <h2>Why Most Software Projects <span class="gradient-text">Fail to Scale</span></h2>
            <p>Choosing the wrong technology partner leads to unscalable spaghetti code, missed launch deadlines, and costly rebuilds.</p>
          </div>

          <div class="fail-grid">
            <div class="fail-card reveal" *ngFor="let f of failReasons">
              <div class="fail-icon" style="color: #ef4444">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <h4>{{ f.title }}</h4>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Freelancer vs Offshore vs Conceptra Labs Matrix -->
      <section class="section comparison-section">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-label">Engineering Capability Matrix</span>
            <h2>Freelancer vs Offshore vs <span class="gradient-text">Conceptra Labs</span></h2>
            <p>See why scaling companies choose Conceptra Labs to eliminate single-person risk and guarantee enterprise code quality.</p>
          </div>

          <div class="comparison-table reveal">
            <div class="ct-header">
              <div class="ct-label">Capability & Metric</div>
              <div class="ct-freelancer">Solo Freelancer</div>
              <div class="ct-freelancer">Offshore Outsource</div>
              <div class="ct-agency">Conceptra Labs ✨</div>
            </div>

            <div class="ct-row reveal" *ngFor="let row of comparisonRows">
              <div class="ct-feature">{{ row.feature }}</div>
              <div class="ct-cell freelancer-cell">
                <span class="bad">✗</span> {{ row.freelancer }}
              </div>
              <div class="ct-cell freelancer-cell">
                <span class="bad">✗</span> {{ row.offshore }}
              </div>
              <div class="ct-cell agency-cell">
                <span class="good">✓</span> {{ row.conceptra }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Conceptra Advantages -->
      <section class="section">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-label">The Conceptra Engineering Advantage</span>
            <h2>Built for Speed, Security & <span class="gradient-text">High ROI</span></h2>
          </div>

          <div class="benefits-grid">
            <div class="benefit-big-card reveal" *ngFor="let b of benefits">
              <div class="bbc-icon" style="color: #10b981">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div class="bbc-content">
                <h3>{{ b.title }}</h3>
                <p>{{ b.desc }}</p>
                <div class="bbc-metric" *ngIf="b.metric">
                  <span class="metric-val gradient-text">{{ b.metric.val }}</span>
                  <span class="metric-label">{{ b.metric.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section text-center">
        <div class="container">
          <div class="why-cta-box reveal">
            <div class="wcb-badge">🚀 Ready for Production Excellence?</div>
            <h2>Choose a Technology Partner <span class="gradient-text">Built for Scale</span></h2>
            <p>Schedule a technical consultation to receive an architectural schematic, timeline, and proposal within 24 hours.</p>
            <div class="flex-center gap-sm" style="margin-top: 2rem; flex-wrap: wrap;">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Request Technical Consultation</a>
              <a routerLink="/projects" class="btn btn-outline btn-lg">Inspect Case Studies</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./why-us.scss']
})
export class WhyUsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  failReasons = [
    { title: 'Single-Person Risk', desc: 'Hiring a solo freelancer leaves your codebase vulnerable if they become unavailable or change priorities.' },
    { title: 'Spaghetti Codebase', desc: 'Building quickly without architecture standards leads to unmaintainable code that buckles under load.' },
    { title: 'Poor Mobile UX', desc: 'Clunky interfaces drive potential leads away before they convert, regardless of product quality.' },
    { title: 'Security Oversights', desc: 'Budget setups skip OWASP security scans, SSL certificates, and role-based data encryption.' },
    { title: 'Hidden Project Costs', desc: 'Unclear initial requirements lead to massive scope creep and unexpected billing surprises.' },
    { title: 'Abandoned Post-Launch', desc: 'Lack of dedicated maintenance support leaves systems vulnerable to database downtime and bugs.' }
  ];

  comparisonRows = [
    { feature: 'Team Capacity', freelancer: 'Single person, limited stack', offshore: 'High developer turnover', conceptra: 'Dedicated architects, leads & QA' },
    { feature: 'Architecture Standards', freelancer: 'Varies significantly', offshore: 'Generic boilerplate code', conceptra: 'Sub-second SSR & microservices' },
    { feature: 'Security & Encryption', freelancer: 'Basic or omitted', offshore: 'Minimal compliance checks', conceptra: 'AES-256, OWASP audits & TLS 1.3' },
    { feature: 'SLA Support Governance', freelancer: 'No guaranteed uptime SLA', offshore: 'Slow ticket response times', conceptra: '24/7 SLA care & <2hr response' },
    { feature: 'IP & Code Ownership', freelancer: 'Ambiguous IP rights', offshore: 'Shared repository code', conceptra: '100% IP ownership & clean code' },
    { feature: 'Pricing Transparency', freelancer: 'Hourly rate inflation', offshore: 'Hidden maintenance fees', conceptra: 'Clear INR pricing from ₹14,999' }
  ];

  benefits = [
    { title: 'Business Strategy First', desc: 'Every line of code is structured around your quantifiable business goals, target conversion rates, and revenue performance.', metric: { val: '140%', label: 'Average traffic growth' } },
    { title: 'Sub-Second Web Speed', desc: 'Angular SSR and edge CDN assets deliver 95+ Core Web Vitals scores across mobile and desktop browsers.', metric: { val: '< 1.0s', label: 'Page load time' } },
    { title: 'Zero Single-Person Risk', desc: 'Multi-disciplinary engineering teams ensure continuous development sprints, account oversight, and backup leads.', metric: { val: '100%', label: 'Account continuity' } },
    { title: '24/7 Managed SLA Care', desc: 'Dedicated monthly support retainers provide daily encrypted cloud backups, 99.9% uptime monitoring, and rapid hotfixes.', metric: { val: '99.9%', label: 'Uptime SLA' } },
    { title: 'Predictable Rupee Pricing', desc: 'Transparent project minimums starting at ₹14,999 and sprint retainers starting at ₹24,999/mo with zero hidden costs.', metric: { val: 'INR', label: 'Transparent pricing' } },
    { title: 'AI & Webhook Automation', desc: 'Autonomous RAG AI chatbots and WhatsApp API notification pipelines that save 100s of manual admin hours.', metric: null }
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      reveals.forEach(el => observer.observe(el));
    }
  }
}
