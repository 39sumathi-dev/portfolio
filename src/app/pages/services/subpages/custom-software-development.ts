import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-custom-software-development',
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
            <li class="breadcrumb-item active" aria-current="page">Custom Software Development</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="service-hero">
        <div class="sh-bg"><div class="sh-orb sh-orb-1"></div><div class="sh-orb sh-orb-2"></div></div>
        <div class="container">
          <div class="sh-content reveal">
            <div class="sh-badge">
              <span class="badge-dot"></span> Enterprise Software Engineering Chennai
            </div>
            <h1>Custom Software Development <span class="gradient-text">Company in Chennai</span></h1>
            <p class="sh-desc">
              We design and build bespoke enterprise software, cloud application platforms, SaaS products, and custom API systems tailored precisely to your unique business workflows. Built for high security, scale, and long-term reliability.
            </p>
            <div class="sh-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Request Custom Software Proposal</a>
              <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%20want%20to%20discuss%20Custom%20Software%20Development" target="_blank" rel="noopener" class="btn btn-outline btn-lg">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Enterprise Value</span>
            <h2>Bespoke Software Engineered for <span class="gradient-text">Operational Growth</span></h2>
            <p>Off-the-shelf software forces your business to compromise on workflows. Conceptra Labs develops tailored software systems that fit your operations seamlessly and scale with your enterprise.</p>
          </div>

          <!-- Pain Points Solved -->
          <div class="pain-points-grid">
            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Rigid Off-The-Shelf Bottlenecks</h3>
              </div>
              <p class="pain-desc">Generic software forces manual workarounds, high monthly per-user licensing costs, and missing operational features.</p>
              <div class="solution-box"><strong>Conceptra Solution:</strong> 100% tailor-made software architecture built exactly for your operational logic with zero ongoing user license fees.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Disconnected Data Silos</h3>
              </div>
              <p class="pain-desc">Using disparate spreadsheets, accounting software, and manual entry leads to errors and slow decision-making.</p>
              <div class="solution-box"><strong>Conceptra Solution:</strong> Unified cloud platforms with automated real-time database synchronization and API integrations.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Security & Scalability Failures</h3>
              </div>
              <p class="pain-desc">Outdated software crashes during traffic spikes and lacks enterprise-grade encryption for sensitive business data.</p>
              <div class="solution-box"><strong>Conceptra Solution:</strong> Microservices architecture, Docker containerization, PostgreSQL databases, and AES-256 data encryption.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Capabilities -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Our Expertise</span>
            <h2>Custom Software <span class="gradient-text">Engineering Capabilities</span></h2>
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

      <!-- Development Workflow -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Engineering Life Cycle</span>
            <h2>Agile Software <span class="gradient-text">Delivery Pipeline</span></h2>
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
            <span class="section-label">Technology Architecture</span>
            <h2>Robust Enterprise <span class="gradient-text">Tech Stack</span></h2>
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
            <span class="section-label">Why Partner With Us</span>
            <h2>The Conceptra <span class="gradient-text">Software Advantage</span></h2>
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
            <span class="section-label">FAQs</span>
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
            <span class="section-label">Related Services</span>
            <h2>Complementary <span class="gradient-text">Software Solutions</span></h2>
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
          <h2 class="reveal">Transform Your Operations With <span class="gradient-text">Custom Software</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:560px; margin: 1rem auto 2rem;">Schedule a technical discovery call with our senior software architects in Chennai today.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Book Technical Discovery Call</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./service-detail.scss']
})
export class CustomSoftwareDevelopmentComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  features = [
    { title: 'Enterprise Web Applications', desc: 'Robust web software platforms built with Angular, Python, and Node.js for complex enterprise workflows.', bgColor: 'rgba(99,102,241,0.12)', color: '#6366f1', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="21" x2="9" y2="9"/><line x1="15" y1="21" x2="15" y2="9"/></svg>' },
    { title: 'SaaS Multi-Tenant Platforms', desc: 'Scalable Software-as-a-Service platforms featuring subscription billing, multi-tenant databases, and admin control.', bgColor: 'rgba(6,182,212,0.12)', color: '#06b6d4', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 17 22 12"/></svg>' },
    { title: 'Legacy System Modernization', desc: 'Refactoring outdated legacy codebases into high-speed microservices architecture without operational downtime.', bgColor: 'rgba(245,158,11,0.12)', color: '#f59e0b', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>' },
    { title: 'REST & GraphQL API Architecture', desc: 'Secure, documented RESTful and GraphQL APIs allowing fast data exchange across web and mobile endpoints.', bgColor: 'rgba(16,185,129,0.12)', color: '#10b981', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>' },
    { title: 'Database & Data Warehouse Design', desc: 'High-availability SQL and NoSQL database schemas built with PostgreSQL, Redis, and automated replication.', bgColor: 'rgba(139,92,246,0.12)', color: '#8b5cf6', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3"/></svg>' },
    { title: 'Cloud Infrastructure & DevOps', desc: 'Automated CI/CD pipelines, Docker containers, Kubernetes orchestrations, and AWS/Azure deployment.', bgColor: 'rgba(239,68,68,0.12)', color: '#ef4444', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>' }
  ];

  processSteps = [
    { number: '01', title: 'System Architecture Design', desc: 'Mapping database ERDs, security roles, component boundaries, and high-level technical specs.' },
    { number: '02', title: 'Agile Sprint Engineering', desc: 'Iterative 2-week development sprints with continuous staging deployments and progress updates.' },
    { number: '03', title: 'Security & Penetration Testing', desc: 'OWASP vulnerability scanning, data encryption audits, and role-based authorization verification.' },
    { number: '04', title: 'UAT & Data Migration', desc: 'Migrating legacy data smoothly into the new system followed by User Acceptance Testing.' },
    { number: '05', title: 'Deployment & SLA Maintenance', desc: 'Production deployment with 24/7 monitoring, error tracking, and guaranteed maintenance SLAs.' }
  ];

  techStack = ['Node.js', 'Python', 'FastAPI', 'Angular', 'React', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS'];

  whyUs = [
    { title: 'Full Source Code Ownership', desc: 'You receive 100% complete IP rights and repository access with zero ongoing licensing fees.' },
    { title: 'Enterprise Security Standards', desc: 'Built-in AES-256 encryption, role-based access control (RBAC), and SSL data channels.' },
    { title: 'High Availability & Uptime', desc: 'Scalable architecture tested for peak load throughput with 99.9% uptime targets.' },
    { title: 'Experienced Engineering Team', desc: 'Senior software developers with over 5+ years of full-stack engineering experience.' }
  ];

  faqs = [
    { q: 'Why choose custom software development over commercial off-the-shelf software?', a: 'Custom software adapts 100% to your unique business workflows, eliminates recurring monthly licensing costs per user, and provides complete ownership of your proprietary data.', open: false },
    { q: 'How do you ensure data security in custom software systems?', a: 'We implement industry-standard AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, JWT token authentication, and regular vulnerability audits.', open: false },
    { q: 'Can custom software integrate with our existing accounting or ERP software?', a: 'Yes! We build secure RESTful and GraphQL APIs to seamlessly synchronize data with systems like Tally, SAP, QuickBooks, Salesforce, and custom legacy databases.', open: false },
    { q: 'Who owns the software source code after development is completed?', a: 'You do. Conceptra Labs transfers 100% full intellectual property (IP) ownership and git source repository access to your organization upon project completion.', open: false }
  ];

  relatedServices = [
    { title: 'School ERP Development', desc: 'Custom education management software for schools and colleges.', path: '/services/school-erp-development' },
    { title: 'Business Automation', desc: 'Automate manual back-office tasks and document workflows.', path: '/services/business-automation' },
    { title: 'Website Development', desc: 'High-speed, SEO-optimized custom web portals and applications.', path: '/services/website-development' }
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
