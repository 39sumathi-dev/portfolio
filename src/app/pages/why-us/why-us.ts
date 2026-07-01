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
        <div class="ph-bg"><div class="ph-orb ph-orb-1"></div><div class="ph-orb ph-orb-2"></div></div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">Why Choose Us</span>
            <h1>Why Smart Businesses Choose <span class="gradient-text">Conceptra Labs</span></h1>
            <p>The technology partner that doesn't just deliver code — we deliver business transformation, ROI, and long-term competitive advantage.</p>
          </div>
        </div>
      </section>

      <!-- Why businesses fail -->
      <section class="section fail-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">The Problem</span>
            <h2>Why Businesses <span class="gradient-text">Fail Digitally</span></h2>
            <p>Most digital projects fail not because of lack of effort, but because of wrong choices at the beginning.</p>
          </div>
          <div class="fail-grid">
            <div class="fail-card reveal" *ngFor="let f of failReasons">
              <div class="fail-icon" style="color: #ef4444">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="f.title === 'Wrong Tech Partner'"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="f.title === 'No Clear Strategy'"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="f.title === 'Poor UX Design'"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="f.title === 'Slow & Unscalable'"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="f.title === 'Security Vulnerabilities'"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="f.title === 'No Post-Launch Support'"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="23" y2="14"/><line x1="23" y1="8" x2="17" y2="14"/></svg>
              </div>
              <h4>{{ f.title }}</h4>
              <p>{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Comparison Section -->
      <section class="section comparison-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">The Smart Choice</span>
            <h2>Freelancer vs <span class="gradient-text">Professional Agency</span></h2>
            <p>See why businesses that choose wisely grow faster and build stronger digital foundations.</p>
          </div>
          <div class="comparison-table">
            <div class="ct-header">
              <div class="ct-label">Feature</div>
              <div class="ct-freelancer">Freelancer</div>
              <div class="ct-agency">Conceptra Labs ✨</div>
            </div>
            <div class="ct-row reveal" *ngFor="let row of comparisonRows; let i = index"
                 [style.animation-delay]="(i * 0.06) + 's'">
              <div class="ct-feature">{{ row.feature }}</div>
              <div class="ct-cell freelancer-cell">
                <span [class]="row.freelancer.good ? 'good' : 'bad'">{{ row.freelancer.good ? '✓' : '✗' }}</span>
                {{ row.freelancer.text }}
              </div>
              <div class="ct-cell agency-cell">
                <span class="good">✓</span>
                {{ row.agency }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">The Conceptra Advantage</span>
            <h2>Benefits of Working <span class="gradient-text">With Us</span></h2>
          </div>
          <div class="benefits-grid">
            <div class="benefit-big-card reveal" *ngFor="let b of benefits">
              <div class="bbc-icon" style="color: #10b981">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="b.title === 'Proven ROI'"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="b.title === 'Speed Without Compromise'"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="b.title === 'Long-term Scalability'"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="b.title === 'Dedicated Support'"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="b.title === 'AI-Powered Advantage'"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="b.title === 'Business Strategy First'"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
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
            <div class="wcb-badge">🚀 Let's Create Something Remarkable</div>
            <h2>Stop Settling for Average. <span class="gradient-text">Choose Excellence.</span></h2>
            <p>Your business deserves a technology partner that's as ambitious as you are. Let's build something extraordinary together.</p>
            <div class="flex-center gap-sm" style="margin-top: 2rem; flex-wrap: wrap;">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Start Your Project Today</a>
              <a routerLink="/projects" class="btn btn-outline btn-lg">See Our Work First</a>
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
    { icon: '❌', title: 'Wrong Tech Partner', desc: 'Choosing based on price alone leads to poor quality, missed deadlines, and costly rework.' },
    { icon: '🔄', title: 'No Clear Strategy', desc: 'Building technology without a clear digital strategy results in wasted investment and fragmented systems.' },
    { icon: '📉', title: 'Poor UX Design', desc: 'A bad user experience drives customers away before they ever convert, regardless of your product quality.' },
    { icon: '🐌', title: 'Slow & Unscalable', desc: 'Poorly architected systems buckle under load, creating downtime during your most critical growth moments.' },
    { icon: '🔒', title: 'Security Vulnerabilities', desc: 'Cheap development often skips security best practices, leaving your data and customers at serious risk.' },
    { icon: '👻', title: 'No Post-Launch Support', desc: 'Abandoned by developers after launch, businesses struggle with bugs, updates, and scaling alone.' }
  ];

  comparisonRows = [
    { feature: 'Team & Expertise', freelancer: { good: false, text: 'Single person, limited skills' }, agency: 'Full team — design, dev, QA, strategy' },
    { feature: 'Project Management', freelancer: { good: false, text: 'Often unstructured' }, agency: 'Agile methodology, PM dedicated' },
    { feature: 'Quality Assurance', freelancer: { good: false, text: 'Usually self-tested only' }, agency: 'Dedicated QA team, automated testing' },
    { feature: 'Availability', freelancer: { good: false, text: 'May take on other clients' }, agency: 'Committed bandwidth guaranteed' },
    { feature: 'Code Standards', freelancer: { good: false, text: 'Varies significantly' }, agency: 'Industry best practices always' },
    { feature: 'Post-Launch Support', freelancer: { good: false, text: 'Often unreliable' }, agency: '24/7 dedicated support team' },
    { feature: 'Scalability Planning', freelancer: { good: false, text: 'Rarely considered' }, agency: 'Built-in from day one' },
    { feature: 'Design Capability', freelancer: { good: false, text: 'Code-first, design secondary' }, agency: 'Premium UI/UX team included' },
    { feature: 'Long-term Partnership', freelancer: { good: true, text: 'Possible but risky' }, agency: 'Structured, contractual commitment' },
    { feature: 'Innovation & AI', freelancer: { good: false, text: 'Limited to individual skills' }, agency: 'Cutting-edge AI & tech expertise' }
  ];

  benefits = [
    { icon: '💰', title: 'Proven ROI', desc: 'Our clients see average revenue increases of 40-200% within 6 months of launch through better UX, faster performance, and smarter automation.', metric: { val: '150%', label: 'Average client revenue growth' } },
    { icon: '⚡', title: 'Speed Without Compromise', desc: 'Agile sprints deliver working software faster. Our average project launches in 6-12 weeks, not months. Speed without sacrificing quality.', metric: { val: '6-12wk', label: 'Average delivery timeline' } },
    { icon: '🔄', title: 'Long-term Scalability', desc: 'We architect systems for 100x growth. Your technology investment today becomes the foundation for tomorrow\'s expansion.', metric: null },
    { icon: '🛡️', title: 'Dedicated Support', desc: 'Post-launch, our team remains your partner. Monthly retainers available for ongoing maintenance, feature additions, and growth support.', metric: { val: '24/7', label: 'Post-launch support' } },
    { icon: '🤖', title: 'AI-Powered Advantage', desc: 'We integrate AI capabilities into your business that give you an unfair competitive advantage — automating tasks that competitors still do manually.', metric: null },
    { icon: '🎯', title: 'Business Strategy First', desc: 'We don\'t just code — we think about your business goals, target users, and market position before writing a single line of code.', metric: null }
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
