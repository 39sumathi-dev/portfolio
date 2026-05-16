import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
              <div class="fail-icon">{{ f.icon }}</div>
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
              <div class="bbc-icon">{{ b.icon }}</div>
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
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }
}
