import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-erp-development',
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
            <li class="breadcrumb-item active" aria-current="page">School ERP Development</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="service-hero">
        <div class="sh-bg"><div class="sh-orb sh-orb-1"></div><div class="sh-orb sh-orb-2"></div></div>
        <div class="container">
          <div class="sh-content reveal">
            <div class="sh-badge">
              <span class="badge-dot"></span> Premier School ERP Software Chennai
            </div>
            <h1>Custom School ERP Software <span class="gradient-text">Development Company</span></h1>
            <p class="sh-desc">
              Transform your school management with an all-in-one cloud ERP system. Automate fee collection, student attendance, online exam grading, report card generation, parent communication, and bus tracking in one secure portal.
            </p>
            <div class="sh-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Book Live School ERP Demo</a>
              <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%20want%20to%20see%20a%20School%20ERP%20Demo" target="_blank" rel="noopener" class="btn btn-outline btn-lg">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">EdTech Innovation</span>
            <h2>Paperless School Management <span class="gradient-text">Built for Indian Schools</span></h2>
            <p>Designed specifically for schools, CBSE institutions, colleges, and educational groups in Chennai and South India. Our School ERP unifies administrative efficiency with seamless parent-school engagement.</p>
          </div>

          <!-- Pain Points Solved -->
          <div class="pain-points-grid">
            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Manual Fee Default & Reconciliation</h3>
              </div>
              <p class="pain-desc">Paper receipts and cash payments result in uncollected fee defaults and accounting discrepancies.</p>
              <div class="solution-box"><strong>Conceptra ERP Fix:</strong> Automated Razorpay fee gateways, instant SMS/WhatsApp fee reminders, and automatic digital receipt generation.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Time-Consuming Attendance & Grading</h3>
              </div>
              <p class="pain-desc">Teachers spend 45+ minutes daily filling paper registers and manually calculating report card percentages.</p>
              <div class="solution-box"><strong>Conceptra ERP Fix:</strong> 1-click biometric/RFID attendance and automated CCE/CBSE report card generation tools.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Poor Parent Communication</h3>
              </div>
              <p class="pain-desc">Parents struggle to track student academic progress, homework assignments, and school bus arrival times.</p>
              <div class="solution-box"><strong>Conceptra ERP Fix:</strong> Dedicated Parent Mobile App with real-time push notifications, GPS bus tracking, and exam results.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Modules -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">ERP Modules</span>
            <h2>Comprehensive <span class="gradient-text">School Management Modules</span></h2>
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

      <!-- Implementation Workflow -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Implementation Plan</span>
            <h2>Seamless 4-Week <span class="gradient-text">School Onboarding</span></h2>
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
            <span class="section-label">Security & Architecture</span>
            <h2>Cloud Architecture <span class="gradient-text">For Schools</span></h2>
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
            <span class="section-label">Why Schools Choose Us</span>
            <h2>The Conceptra <span class="gradient-text">School ERP Advantage</span></h2>
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
          <h2 class="reveal">Modernize Your School Operations <span class="gradient-text">Today</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:560px; margin: 1rem auto 2rem;">Join 20+ schools that have automated fee collection, attendance, and parent communication with Conceptra School ERP.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Schedule Personalized ERP Demo</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./service-detail.scss']
})
export class SchoolErpDevelopmentComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  features = [
    { title: 'Automated Fee Management', desc: 'Online fee payments via Razorpay/UPI, automated late fee rules, split installment management, and instant digital receipts.', bgColor: 'rgba(99,102,241,0.12)', color: '#6366f1', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
    { title: 'Attendance & Biometric Sync', desc: 'RFID smart card and biometric attendance integration with instant SMS/WhatsApp alerts sent to parents upon student check-in.', bgColor: 'rgba(6,182,212,0.12)', color: '#06b6d4', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
    { title: 'Exams & CCE Report Cards', desc: 'Automated CBSE grade calculation, CCE exam evaluation, subject rank generation, and PDF report card downloads.', bgColor: 'rgba(245,158,11,0.12)', color: '#f59e0b', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' },
    { title: 'Parent Mobile App & Portal', desc: 'Real-time parent portal to track student attendance, exam marks, homework notifications, and online fee payments.', bgColor: 'rgba(16,185,129,0.12)', color: '#10b981', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
    { title: 'School Bus Live GPS Tracking', desc: 'Real-time GPS tracking for school buses with parent proximity alerts and route optimization management.', bgColor: 'rgba(139,92,246,0.12)', color: '#8b5cf6', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' },
    { title: 'Library & Staff Payroll ERP', desc: 'Book cataloging with barcode scanning, teacher leave management, salary slip generation, and bio-attendance integration.', bgColor: 'rgba(239,68,68,0.12)', color: '#ef4444', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' }
  ];

  processSteps = [
    { number: '01', title: 'Data Audit & Setup', desc: 'Importing student rosters, fee structures, class rosters, and teacher records into the ERP.' },
    { number: '02', title: 'System Configuration', desc: 'Customizing report card layouts, fee installment rules, and payment gateway credentials.' },
    { number: '03', title: 'Staff & Teacher Training', desc: 'On-site or online hands-on training sessions for teachers, accountants, and administrators.' },
    { number: '04', title: 'Go Live & Launch', desc: 'Launching parent mobile app access, fee reminders, and 24/7 dedicated technical support.' }
  ];

  techStack = ['Angular', 'Node.js', 'PostgreSQL', 'Razorpay API', 'WhatsApp Business API', 'Firebase Cloud Messaging', 'Flutter', 'AWS'];

  whyUs = [
    { title: 'Tailored to Indian School Boards', desc: 'Pre-configured for CBSE, Matriculation, ICSE, and State Board grading systems.' },
    { title: '35% Higher Fee Collection Efficiency', desc: 'Automated WhatsApp reminders reduce uncollected fee defaults significantly.' },
    { title: 'Zero Hardware Lock-In', desc: 'Cloud-based system accessible from any browser, tablet, or smartphone device.' },
    { title: 'Dedicated Local Support in Chennai', desc: 'Fast on-site and remote technical support for school management.' }
  ];

  faqs = [
    { q: 'Is Conceptra School ERP compliant with CBSE and Matriculation board report cards?', a: 'Yes! Our School ERP supports customizable CCE and CBSE grading templates, percentage calculations, and multi-term report card PDFs.', open: false },
    { q: 'Can parents pay school fees online using UPI or Credit Cards?', a: 'Absoltely. We integrate secure Indian payment gateways like Razorpay, PayU, and CCAvenue allowing instant UPI, NetBanking, and card payments.', open: false },
    { q: 'How does the automated WhatsApp fee reminder work?', a: 'The system automatically sends scheduled WhatsApp alerts to parents 5 days before fee due dates with a direct 1-click online payment link.', open: false },
    { q: 'Can we import our existing student data into the new ERP?', a: 'Yes! We handle the complete data migration process from Excel spreadsheets or legacy software into Conceptra School ERP free of charge.', open: false }
  ];

  relatedServices = [
    { title: 'Custom Software Development', desc: 'Custom web portals and enterprise software development.', path: '/services/custom-software-development' },
    { title: 'Mobile App Development', desc: 'Custom mobile applications for iOS and Android devices.', path: '/services/mobile-app-development' },
    { title: 'Website Development', desc: 'High-speed institutional school websites with online admission forms.', path: '/services/website-development' }
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
