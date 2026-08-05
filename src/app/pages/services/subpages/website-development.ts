import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-website-development',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="service-detail-page">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs-bar" aria-label="Breadcrumb">
        <div class="container">
          <ol class="breadcrumbs-list">
            <li class="breadcrumb-item"><a routerLink="/">Home</a> <span class="separator">/</span></li>
            <li class="breadcrumb-item"><a routerLink="/services">Services</a> <span class="separator">/</span></li>
            <li class="breadcrumb-item active" aria-current="page">Website Development</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="service-hero">
        <div class="sh-bg"><div class="sh-orb sh-orb-1"></div><div class="sh-orb sh-orb-2"></div></div>
        <div class="container">
          <div class="sh-content reveal">
            <div class="sh-badge">
              <span class="badge-dot"></span> High-Performance Web Development Chennai
            </div>
            <h1>Custom Website & Web Application <span class="gradient-text">Development Company</span></h1>
            <p class="sh-desc">
              We engineer blazing-fast, SEO-optimized, custom web applications that load in under 1.2 seconds and turn anonymous visitors into high-value commercial leads. Engineered with Angular, React, Next.js, and Node.js.
            </p>
            <div class="sh-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Get Free Web Audit & Quote</a>
              <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%20am%20interested%20in%20Website%20Development" target="_blank" rel="noopener" class="btn btn-outline btn-lg">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Service Overview</span>
            <h2>Web Development Built for <span class="gradient-text">Speed, Conversions & Scale</span></h2>
            <p>Your website is your 24/7 digital salesperson. We build custom websites and web portals that combine modern visual aesthetics with clean code architecture and technical SEO excellence.</p>
          </div>

          <!-- Pain Points Solved -->
          <div class="pain-points-grid">
            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Slow Page Loading Speeds</h3>
              </div>
              <p class="pain-desc">Legacy WordPress sites with heavy plugins take 4–8 seconds to load, causing 50%+ visitor bounce rates.</p>
              <div class="solution-box"><strong>Conceptra Fix:</strong> Sub-second loading (<1.2s LCP) using lightweight Angular & modern SSG/SSR pipelines.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Poor Mobile Responsiveness</h3>
              </div>
              <p class="pain-desc">Unresponsive layouts break on smartphones, losing over 65% of mobile search traffic in South India.</p>
              <div class="solution-box"><strong>Conceptra Fix:</strong> Mobile-first adaptive UI/UX designed for flawless touch navigation and fast rendering.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Low Google Search Rankings</h3>
              </div>
              <p class="pain-desc">Lacking technical SEO, structured schema markup, and canonical architecture keeps your site invisible on page 3+.</p>
              <div class="solution-box"><strong>Conceptra Fix:</strong> Built-in Schema.org, Open Graph, Core Web Vitals optimization, and clean URL silos.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features & Capabilities -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Core Capabilities</span>
            <h2>Comprehensive <span class="gradient-text">Web Engineering Services</span></h2>
          </div>

          <div class="features-grid">
            <div class="feature-card reveal" *ngFor="let feat of features">
              <div class="feat-icon-wrap" [style.background]="feat.bgColor" [style.color]="feat.color">
                <span [innerHTML]="feat.iconSvg"></span>
              </div>
              <h3>{{ feat.title }}</h3>
              <p>{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Development Process -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Our Workflow</span>
            <h2>5-Step Proven <span class="gradient-text">Development Process</span></h2>
          </div>

          <div class="process-steps-grid">
            <div class="step-card reveal" *ngFor="let step of processSteps">
              <div class="step-num">{{ step.number }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="section section-sm">
        <div class="container text-center">
          <div class="section-header">
            <span class="section-label">Technologies</span>
            <h2>Powered by Modern <span class="gradient-text">Tech Stacks</span></h2>
            <p>We choose bulletproof frameworks that guarantee long-term stability and high performance.</p>
          </div>
          <div class="tech-stack-wrap reveal">
            <span class="tech-chip" *ngFor="let t of techStack">{{ t }}</span>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">The Conceptra Difference</span>
            <h2>Why Choose Us for <span class="gradient-text">Web Development</span></h2>
          </div>

          <div class="why-list">
            <div class="why-item reveal" *ngFor="let w of whyUs">
              <div class="why-check">✓</div>
              <div>
                <h4>{{ w.title }}</h4>
                <p>{{ w.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">FAQ</span>
            <h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
          </div>

          <div class="faq-list">
            <div class="faq-item reveal" *ngFor="let f of faqs; let idx = index">
              <button class="faq-question" (click)="toggleFaq(idx)" [class.active]="f.open">
                <span>{{ f.q }}</span>
                <span class="faq-icon">{{ f.open ? '▲' : '▼' }}</span>
              </button>
              <div class="faq-answer" *ngIf="f.open">
                <p>{{ f.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Services -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Explore More</span>
            <h2>Related <span class="gradient-text">Digital Services</span></h2>
          </div>

          <div class="related-services-grid">
            <div class="rel-card reveal" *ngFor="let rel of relatedServices">
              <div>
                <h4>{{ rel.title }}</h4>
                <p>{{ rel.desc }}</p>
              </div>
              <a [routerLink]="rel.path" class="rel-link">Explore Service →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section text-center">
        <div class="container">
          <h2 class="reveal">Ready to Build a High-Converting <span class="gradient-text">Website?</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:560px; margin: 1rem auto 2rem;">Partner with Conceptra Labs today. Get a free proposal and architectural plan for your project within 24 hours.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Request Web Development Proposal</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./service-detail.scss']
})
export class WebsiteDevelopmentComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  features = [
    { title: 'Custom Web App Development', desc: 'Single Page Applications (SPAs) and Progressive Web Apps (PWAs) tailored to unique business logic.', bgColor: 'rgba(99,102,241,0.12)', color: '#6366f1', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' },
    { title: 'Technical SEO & Performance', desc: 'Core Web Vitals compliance with sub-1.2s loading speeds, structured schema markup, and dynamic sitemaps.', bgColor: 'rgba(6,182,212,0.12)', color: '#06b6d4', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
    { title: 'E-Commerce Platforms', desc: 'Secure payment gateway integrations (Razorpay, Stripe), product catalogs, and automated order tracking.', bgColor: 'rgba(245,158,11,0.12)', color: '#f59e0b', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' },
    { title: 'CMS & Admin Portals', desc: 'Intuitive content management dashboards allowing non-technical staff to publish updates effortlessly.', bgColor: 'rgba(16,185,129,0.12)', color: '#10b981', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>' },
    { title: 'API & Microservices Integration', desc: 'Seamless connections with third-party CRMs, ERPs, payment processors, and WhatsApp Business APIs.', bgColor: 'rgba(139,92,246,0.12)', color: '#8b5cf6', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>' },
    { title: 'Web Maintenance & Security', desc: 'Continuous security patching, SSL configuration, automated backups, and 99.9% uptime guarantees.', bgColor: 'rgba(239,68,68,0.12)', color: '#ef4444', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' }
  ];

  processSteps = [
    { number: '01', title: 'Discovery & Requirements', desc: 'We analyze your business goals, target audience, technical specs, and SEO keyword requirements.' },
    { number: '02', title: 'UX/UI Wireframing', desc: 'We design high-fidelity interactive Figma prototypes focused on brand identity and conversion optimization.' },
    { number: '03', title: 'Frontend & Backend Engineering', desc: 'We write clean, modular code using modern frameworks like Angular, Node.js, and PostgreSQL.' },
    { number: '04', title: 'Quality Assurance & Testing', desc: 'Comprehensive cross-device, security, performance, and cross-browser testing across desktop and mobile.' },
    { number: '05', title: 'Deployment & Launch', desc: 'Deploying with automated CI/CD pipelines, SSL encryption, sitemap submission, and GSC setup.' }
  ];

  techStack = ['Angular', 'React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'MongoDB', 'TailwindCSS', 'SCSS', 'Netlify', 'AWS'];

  whyUs = [
    { title: 'Lightning Speed Performance', desc: 'Sub-1.2 second load times that maximize conversion rates and pass Google Core Web Vitals.' },
    { title: 'Built-in Technical SEO', desc: 'Pre-configured Schema.org JSON-LD, Open Graph, meta titles, and dynamic XML sitemaps.' },
    { title: 'Zero Licensing Fees', desc: '100% full source code ownership with no ongoing vendor lock-in fees.' },
    { title: 'Dedicated Support Team', desc: 'Direct access to senior developers in Chennai for rapid enhancements.' }
  ];

  faqs = [
    { q: 'How long does it take to develop a custom website?', a: 'Standard business websites take 2 to 4 weeks, while complex web applications or enterprise portals typically take 4 to 8 weeks.', open: false },
    { q: 'Will my website be search engine optimized (SEO)?', a: 'Yes! Every website we build includes baseline Technical SEO, structured data schema, mobile optimization, and fast loading speed config.', open: false },
    { q: 'What is the cost of website development in Chennai?', a: 'Website development costs vary based on features and functionality. Basic corporate sites start around ₹25,000, while custom web applications range higher.', open: false },
    { q: 'Do you provide website maintenance after launch?', a: 'Yes, we provide 30 days of complimentary post-launch support and optional ongoing monthly maintenance plans.', open: false }
  ];

  relatedServices = [
    { title: 'Custom Software Development', desc: 'Scalable cloud software systems tailored to complex enterprise workflows.', path: '/services/custom-software-development' },
    { title: 'Mobile App Development', desc: 'Cross-platform iOS and Android mobile applications built with Flutter.', path: '/services/mobile-app-development' },
    { title: 'AI Business Automation', desc: 'Automate manual processes with intelligent AI agents and APIs.', path: '/services/ai-automation' }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

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
