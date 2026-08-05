import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-business-automation',
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
            <li class="breadcrumb-item active" aria-current="page">Business Automation</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="service-hero">
        <div class="sh-bg"><div class="sh-orb sh-orb-1"></div><div class="sh-orb sh-orb-2"></div></div>
        <div class="container">
          <div class="sh-content reveal">
            <div class="sh-badge">
              <span class="badge-dot"></span> Business Process Automation India
            </div>
            <h1>Business Process Automation & <span class="gradient-text">Workflow Engineering</span></h1>
            <p class="sh-desc">
              Eliminate operational friction and manual tasks. We engineer automated workflow pipelines that connect your CRM, accounting software, inventory databases, payment gateways, and WhatsApp notifications into one streamlined machine.
            </p>
            <div class="sh-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Request Process Audit</a>
              <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%20want%20to%20automate%20my%20Business%20Workflows" target="_blank" rel="noopener" class="btn btn-outline btn-lg">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Operational Efficiency</span>
            <h2>Stop Doing Manually What <span class="gradient-text">Code Can Do Automatically</span></h2>
            <p>SMEs and enterprises waste millions annually on manual data transfer, paper approvals, and repetitive email follow-ups. Conceptra Labs designs custom workflow automation software that runs 24/7 with zero human error.</p>
          </div>

          <!-- Pain Points Solved -->
          <div class="pain-points-grid">
            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Double Data Entry Across Systems</h3>
              </div>
              <p class="pain-desc">Staff re-keying customer orders manually from email into billing software and inventory spreadsheets.</p>
              <div class="solution-box"><strong>Conceptra Automation:</strong> Automated webhooks & API pipelines synchronizing orders, inventory, and invoices instantly.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Delayed Approval Bottlenecks</h3>
              </div>
              <p class="pain-desc">Purchase requisitions and customer quotes sitting in email inboxes waiting for manager signatures for days.</p>
              <div class="solution-box"><strong>Conceptra Automation:</strong> Multi-tier digital approval workflows with instant 1-click WhatsApp/Email approval buttons.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Missed Payment & Quotation Follow-ups</h3>
              </div>
              <p class="pain-desc">Uncollected invoices and un-followed client proposals resulting in lost revenue and cash flow slowdowns.</p>
              <div class="solution-box"><strong>Conceptra Automation:</strong> Automated multi-touch payment reminders and quote tracking notifications via SMS and WhatsApp.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Automation Capabilities -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Automation Services</span>
            <h2>Business Automation <span class="gradient-text">Capabilities</span></h2>
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

      <!-- Automation Process -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Implementation Plan</span>
            <h2>4-Step Workflow <span class="gradient-text">Automation Blueprint</span></h2>
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
            <span class="section-label">Integration Stack</span>
            <h2>Powered by Robust <span class="gradient-text">Integration Technologies</span></h2>
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
            <h2>The Conceptra <span class="gradient-text">Automation Advantage</span></h2>
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
            <h2>Explore Related <span class="gradient-text">Solutions</span></h2>
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
          <h2 class="reveal">Eliminate Manual Bottlenecks <span class="gradient-text">Today</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:560px; margin: 1rem auto 2rem;">Let our automation engineers review your business workflows and build a custom automation prototype.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Request Workflow Automation Audit</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./service-detail.scss']
})
export class BusinessAutomationComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  features = [
    { title: 'ERP & Accounting Sync', desc: 'Automated 2-way data sync connecting custom web applications with Tally, QuickBooks, Zoho Books, and SAP.', bgColor: 'rgba(99,102,241,0.12)', color: '#6366f1', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>' },
    { title: 'Multi-Tier Approval Workflows', desc: 'Digital approval portals for purchase orders, leave requests, and budget allocations with instant mobile notification triggers.', bgColor: 'rgba(6,182,212,0.12)', color: '#06b6d4', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' },
    { title: 'WhatsApp & SMS Business Messaging', desc: 'Automated transactional WhatsApp notifications for order status updates, payment links, and delivery tracking.', bgColor: 'rgba(245,158,11,0.12)', color: '#f59e0b', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>' },
    { title: 'Inventory & Stock Syncing', desc: 'Real-time inventory deduction across e-commerce channels, physical retail POS stores, and central warehouses.', bgColor: 'rgba(16,185,129,0.12)', color: '#10b981', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>' },
    { title: 'Automated Invoice Generation', desc: 'Instant PDF invoice creation, GST tax calculation, email delivery, and payment status tracking.', bgColor: 'rgba(139,92,246,0.12)', color: '#8b5cf6', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
    { title: 'Custom Webhook Integrations', desc: 'Connecting custom web software with third-party SaaS tools like Hubspot, Salesforce, Razorpay, and AWS.', bgColor: 'rgba(239,68,68,0.12)', color: '#ef4444', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>' }
  ];

  processSteps = [
    { number: '01', title: 'Process Mapping', desc: 'Documenting current manual operational steps, bottlenecks, and software API touchpoints.' },
    { number: '02', title: 'Automation Architecture', desc: 'Designing automated event triggers, webhook schemas, and database synchronization pipelines.' },
    { number: '03', title: 'Integration Engineering', desc: 'Developing backend microservices and API connectors with Node.js, Python, and PostgreSQL.' },
    { number: '04', title: 'Deployment & Monitoring', desc: 'Testing edge cases, launching live automations, and setting up real-time error logging.' }
  ];

  techStack = ['Node.js', 'Python', 'Webhooks', 'REST APIs', 'PostgreSQL', 'Redis', 'Razorpay API', 'WhatsApp API', 'Docker', 'AWS Lambda'];

  whyUs = [
    { title: '99.9% Reduction in Manual Errors', desc: 'Automated data transfer eliminates costly human keying mistakes.' },
    { title: 'Instant Processing Speed', desc: 'Order processing and invoice generation speeds reduced from hours to milliseconds.' },
    { title: 'Scalable Microservices', desc: 'Integration software built to handle millions of monthly transaction requests easily.' },
    { title: 'Dedicated Chennai Engineering Support', desc: 'Local engineering team available for custom system additions and SLA maintenance.' }
  ];

  faqs = [
    { q: 'Can you integrate custom automation with legacy software without APIs?', a: 'Yes! We use custom database connectors, web scraping, and automated data queues to extract and sync data even from legacy desktop software.', open: false },
    { q: 'How does WhatsApp business automation work for client invoicing?', a: 'When a new invoice is created in your ERP or accounting system, our automation trigger immediately sends a formatted WhatsApp message to the customer with a PDF download and payment link.', open: false },
    { q: 'What is the ROI of implementing business process automation?', a: 'Most clients recover their entire software investment within 3 to 6 months through reduced labor hours, faster invoice collection, and eliminated order entry errors.', open: false },
    { q: 'Will business automation interrupt our current daily operations during setup?', a: 'No. We build and test all integration pipelines in a staging sandbox environment first. Live deployment occurs seamlessly without downtime.', open: false }
  ];

  relatedServices = [
    { title: 'AI Automation', desc: 'Supercharge workflows with intelligent LLM agents and chatbots.', path: '/services/ai-automation' },
    { title: 'Custom Software Development', desc: 'Custom enterprise software platforms built for scale.', path: '/services/custom-software-development' },
    { title: 'School ERP Development', desc: 'Complete educational institution management automation.', path: '/services/school-erp-development' }
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
