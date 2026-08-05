import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-app-development',
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
            <li class="breadcrumb-item active" aria-current="page">Mobile App Development</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="service-hero">
        <div class="sh-bg"><div class="sh-orb sh-orb-1"></div><div class="sh-orb sh-orb-2"></div></div>
        <div class="container">
          <div class="sh-content reveal">
            <div class="sh-badge">
              <span class="badge-dot"></span> Top Mobile App Developers Chennai
            </div>
            <h1>Cross-Platform Mobile App <span class="gradient-text">Development Company</span></h1>
            <p class="sh-desc">
              We design and build high-performance mobile applications for iOS and Android using Flutter and React Native. Delivering smooth 60fps native performance, offline capabilities, and intuitive user experiences that users love.
            </p>
            <div class="sh-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Get Mobile App Quote</a>
              <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%20want%20to%20build%20a%20Mobile%20App" target="_blank" rel="noopener" class="btn btn-outline btn-lg">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Mobile Solutions</span>
            <h2>Native-Quality Apps Built with <span class="gradient-text">Single Codebase Efficiency</span></h2>
            <p>Developing separate native iOS (Swift) and Android (Kotlin) apps doubles your development timeline and cost. We leverage Flutter to deliver 100% native performance across both platforms at half the cost and time.</p>
          </div>

          <!-- Pain Points Solved -->
          <div class="pain-points-grid">
            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>High Cost of Separate iOS & Android Apps</h3>
              </div>
              <p class="pain-desc">Hiring separate Swift and Kotlin engineering teams bloats development budgets and causes feature discrepancies.</p>
              <div class="solution-box"><strong>Conceptra Solution:</strong> Single Flutter codebase powering both iOS and Android apps with 100% feature parity.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Slow App Store Approval Times</h3>
              </div>
              <p class="pain-desc">App Store guidelines rejection and unexpected store policy compliance issues delay product releases by months.</p>
              <div class="solution-box"><strong>Conceptra Solution:</strong> End-to-end Apple App Store and Google Play Store submission management with guaranteed compliance.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Janky Performance & Battery Drain</h3>
              </div>
              <p class="pain-desc">Poorly optimized web-view wrappers cause laggy UI transitions, heavy battery consumption, and bad user reviews.</p>
              <div class="solution-box"><strong>Conceptra Solution:</strong> 60fps GPU-accelerated Flutter rendering engine with lightweight background workers.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core Capabilities -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">App Capabilities</span>
            <h2>Mobile App Engineering <span class="gradient-text">Services</span></h2>
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

      <!-- Process Workflow -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Mobile Lifecycle</span>
            <h2>5-Phase Mobile <span class="gradient-text">App Development</span></h2>
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
            <span class="section-label">Mobile Tech Stack</span>
            <h2>Built With Industry-Leading <span class="gradient-text">Frameworks</span></h2>
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
            <h2>The Conceptra <span class="gradient-text">Mobile Advantage</span></h2>
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
          <h2 class="reveal">Turn Your Mobile App Idea Into <span class="gradient-text">Reality</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:560px; margin: 1rem auto 2rem;">Get an instant technical consultation and project estimation for your mobile app within 24 hours.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Request Mobile App Estimate</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./service-detail.scss']
})
export class MobileAppDevelopmentComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  features = [
    { title: 'Cross-Platform iOS & Android Apps', desc: 'Single codebase applications using Flutter delivering native compilation and performance on iOS and Android.', bgColor: 'rgba(99,102,241,0.12)', color: '#6366f1', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>' },
    { title: 'Offline-First Storage Architecture', desc: 'Local SQLite and Hive database caching allowing users to work seamlessly even without active internet connection.', bgColor: 'rgba(6,182,212,0.12)', color: '#06b6d4', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>' },
    { title: 'Push Notifications & Messaging', desc: 'Firebase Cloud Messaging (FCM) integration for targeted user re-engagement and automated push notifications.', bgColor: 'rgba(245,158,11,0.12)', color: '#f59e0b', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>' },
    { title: 'In-App Purchases & Payments', desc: 'Integration with Stripe, Razorpay, Apple Pay, and Google Pay for frictionless mobile checkout flows.', bgColor: 'rgba(16,185,129,0.12)', color: '#10b981', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>' },
    { title: 'Biometric Security & Auth', desc: 'FaceID, Fingerprint authentication, and OAuth 2.0 social sign-in integrations for enterprise-grade app security.', bgColor: 'rgba(139,92,246,0.12)', color: '#8b5cf6', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>' },
    { title: 'App Store & Play Store Publishing', desc: 'Complete management of Apple Developer Account and Google Play Console app publishing and App Store Optimization (ASO).', bgColor: 'rgba(239,68,68,0.12)', color: '#ef4444', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>' }
  ];

  processSteps = [
    { number: '01', title: 'UX & Product Strategy', desc: 'Mapping user journeys, mobile screen wireframes, and backend REST API schemas.' },
    { number: '02', title: 'UI Design & Micro-Animations', desc: 'Creating mobile design systems, custom icons, and interactive Lottie vector animations.' },
    { number: '03', title: 'Flutter App Engineering', desc: 'Coding cross-platform mobile apps with state management (Bloc/Provider) and clean architecture.' },
    { number: '04', title: 'Real-Device QA Testing', desc: 'Automated and manual testing across 20+ Android and iOS physical test devices.' },
    { number: '05', title: 'Store Deployment & Support', desc: 'Submitting apps to Apple App Store and Google Play Store with post-launch monitoring.' }
  ];

  techStack = ['Flutter', 'Dart', 'React Native', 'Firebase', 'REST APIs', 'GraphQL', 'Node.js', 'PostgreSQL', 'SQLite', 'Hive', 'App Store ASO'];

  whyUs = [
    { title: '50% Lower Development Cost', desc: 'Cross-platform Flutter codebase cuts mobile engineering costs nearly in half.' },
    { title: '60fps Native Performance', desc: 'Direct compilation to ARM native code ensures smooth animations and low memory consumption.' },
    { title: 'Guaranteed Store Approval', desc: 'Strict compliance with Apple App Store Review Guidelines and Google Play Store policies.' },
    { title: 'Full Source Code Ownership', desc: 'Complete ownership of your Flutter mobile app git repositories.' }
  ];

  faqs = [
    { q: 'Should I choose Flutter or separate Native iOS/Android apps?', a: 'For 95% of business applications, Flutter provides identical 60fps native performance, half the development cost, and faster time-to-market compared to separate native apps.', open: false },
    { q: 'How long does it take to develop a mobile application?', a: 'Standard MVP mobile apps take 4 to 6 weeks, while feature-rich enterprise applications take 8 to 12 weeks from design to store deployment.', open: false },
    { q: 'Do you publish the mobile app to my App Store and Google Play accounts?', a: 'Yes! We handle the entire preparation, screenshot design, privacy policy setup, and store submission process under your official developer accounts.', open: false },
    { q: 'Can the mobile app work offline without internet connection?', a: 'Yes, we implement offline-first database synchronization (SQLite/Hive) so users can perform actions offline, which automatically sync when connection returns.', open: false }
  ];

  relatedServices = [
    { title: 'Website Development', desc: 'High-speed web platforms and responsive web applications.', path: '/services/website-development' },
    { title: 'AI Automation', desc: 'Integrate AI chatbots and predictive algorithms into your mobile app.', path: '/services/ai-automation' },
    { title: 'Custom Software Development', desc: 'Robust backend API infrastructure to power your mobile application.', path: '/services/custom-software-development' }
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
