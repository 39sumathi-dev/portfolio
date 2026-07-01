import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="process-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg"><div class="ph-orb ph-orb-1"></div><div class="ph-orb ph-orb-2"></div></div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">How We Deliver</span>
            <h1>Our Proven <span class="gradient-text">Delivery Framework</span></h1>
            <p>A battle-tested, transparent process that consistently delivers world-class digital products on time and on budget. Here's exactly how we work.</p>
          </div>
        </div>
      </section>

      <!-- Process Overview -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">The Journey</span>
            <h2>From Idea to <span class="gradient-text">Launch & Beyond</span></h2>
            <p>Every successful project follows a structured path. Here's our proven 7-phase delivery framework.</p>
          </div>

          <div class="process-phases">
            <div class="phase-card reveal" *ngFor="let phase of phases; let i = index"
                 [style.animation-delay]="(i * 0.1) + 's'">
              <div class="phase-header">
                <div class="phase-num" [style.background]="phase.gradient">{{ phase.num }}</div>
                <div class="phase-icon" style="color: var(--color-primary-light)">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="phase.num === '01'"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="phase.num === '02'"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="phase.num === '03'"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 2 12 22Z"/><circle cx="12" cy="12" r="4"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="phase.num === '04'"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="phase.num === '05'"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="phase.num === '06'"><polygon points="12 2 19 21 12 17 5 21 12 2"/></svg>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="phase.num === '07'"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
                </div>
              </div>
              <h3 class="phase-title">{{ phase.title }}</h3>
              <p class="phase-desc">{{ phase.desc }}</p>
              <div class="phase-deliverables">
                <span class="phase-label">Deliverables:</span>
                <ul>
                  <li *ngFor="let d of phase.deliverables">{{ d }}</li>
                </ul>
              </div>
              <div class="phase-duration">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {{ phase.duration }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Agile Approach -->
      <section class="section agile-section">
        <div class="container">
          <div class="agile-grid">
            <div class="agile-content reveal-left">
              <span class="section-label">Our Methodology</span>
              <h2>Agile Development, <span class="gradient-text">Real Results</span></h2>
              <p>We practice modern agile methodologies — combining speed, flexibility, and quality to deliver exactly what you need, when you need it.</p>
              <div class="agile-features">
                <div class="af-item" *ngFor="let f of agileFeatures">
                  <div class="af-check">✓</div>
                  <div>
                    <strong>{{ f.title }}</strong>
                    <p>{{ f.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="agile-visual reveal-right">
              <div class="sprint-board">
                <div class="sprint-header">
                  <span>🏃 Sprint Board</span>
                  <span class="sprint-week">Week 3</span>
                </div>
                <div class="sprint-columns">
                  <div class="sprint-col" *ngFor="let col of sprintColumns">
                    <div class="sc-title">{{ col.title }}</div>
                    <div class="sc-cards">
                      <div class="sc-task" *ngFor="let task of col.tasks">{{ task }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Communication -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Transparency First</span>
            <h2>You're Always <span class="gradient-text">In the Loop</span></h2>
            <p>We believe in radical transparency. Here's how we keep you informed at every step.</p>
          </div>
          <div class="comm-grid">
            <div class="comm-card reveal" *ngFor="let c of communication">
              <div class="cc-icon" style="color: #6366f1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="c.title === 'Weekly Progress Reports'"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="c.title === 'Sprint Demos'"><path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="c.title === 'Direct Chat Access'"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="c.title === 'Strategy Calls'"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.07 9.81 19.79 19.79 0 0 1 .33 4.18 2 2 0 0 1 2.31 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0.7 2.81 2 2 0 0 1-.45 2.11L6.91 9.91a16 16 0 0 0 6.18 6.18l.76-.76a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <h4>{{ c.title }}</h4>
              <p>{{ c.desc }}</p>
              <span class="cc-freq">{{ c.freq }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-sm text-center">
        <div class="container">
          <h2 class="reveal">Ready to Experience <span class="gradient-text">the Difference?</span></h2>
          <p class="reveal" style="color:var(--text-secondary);max-width:520px;margin:1rem auto 2rem;">Start your project today with a free consultation. We'll walk you through our process and show you exactly how we'll deliver success.</p>
          <div class="flex-center gap-sm reveal" style="flex-wrap:wrap;">
            <a routerLink="/contact" class="btn btn-primary btn-lg">Book Free Consultation</a>
            <a routerLink="/projects" class="btn btn-outline btn-lg">View Our Work</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./process.scss']
})
export class ProcessComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  phases = [
    {
      num: '01', icon: '🔍', title: 'Discovery & Requirements',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      desc: 'Deep dive into your business, goals, target audience, and technical requirements through structured workshops and stakeholder interviews.',
      deliverables: ['Project brief document', 'User personas', 'Technical requirements spec', 'Scope definition'],
      duration: '3-5 days'
    },
    {
      num: '02', icon: '📋', title: 'Research & Planning',
      gradient: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
      desc: 'Market research, competitive analysis, technology stack selection, and creation of a detailed project roadmap with milestones.',
      deliverables: ['Market research report', 'Tech stack decision', 'Project roadmap', 'Resource allocation plan'],
      duration: '3-5 days'
    },
    {
      num: '03', icon: '🎨', title: 'UI/UX Design',
      gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      desc: 'Creating wireframes, interactive prototypes, and high-fidelity designs that perfectly represent your brand and optimize user experience.',
      deliverables: ['Wireframes', 'Interactive prototypes', 'Design system', 'Final UI designs (all screens)'],
      duration: '1-2 weeks'
    },
    {
      num: '04', icon: '💻', title: 'Agile Development',
      gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
      desc: 'Iterative development in 2-week sprints with daily standups, weekly demos, and continuous integration/deployment.',
      deliverables: ['Working software increments', 'Sprint demos', 'Code repository', 'API documentation'],
      duration: '4-12 weeks'
    },
    {
      num: '05', icon: '🧪', title: 'Testing & QA',
      gradient: 'linear-gradient(135deg, #10b981, #059669)',
      desc: 'Comprehensive testing including functional, performance, security, cross-browser, and mobile device testing across real environments.',
      deliverables: ['Test reports', 'Performance benchmarks', 'Security audit', 'Bug-free release candidate'],
      duration: '1-2 weeks'
    },
    {
      num: '06', icon: '🚀', title: 'Deployment',
      gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
      desc: 'Smooth production deployment with zero-downtime strategies, CDN configuration, monitoring setup, and team training.',
      deliverables: ['Production deployment', 'CI/CD pipeline', 'Monitoring dashboard', 'Team training'],
      duration: '2-3 days'
    },
    {
      num: '07', icon: '🛡️', title: 'Maintenance & Growth',
      gradient: 'linear-gradient(135deg, #6366f1, #06b6d4)',
      desc: 'Ongoing support, regular updates, performance optimization, feature additions, and strategic guidance for continuous growth.',
      deliverables: ['Monthly reports', 'Regular updates', 'Feature additions', 'Performance optimization'],
      duration: 'Ongoing'
    }
  ];

  agileFeatures = [
    { title: '2-Week Sprints', desc: 'Focused development cycles delivering measurable progress every two weeks.' },
    { title: 'Daily Standups', desc: 'Brief daily check-ins ensuring alignment and removing blockers immediately.' },
    { title: 'Weekly Client Demos', desc: 'Real working software demonstrated to you every week — no surprises.' },
    { title: 'Continuous Deployment', desc: 'Code ships to staging daily so you can see progress in real-time.' }
  ];

  sprintColumns = [
    { title: '📋 Backlog', tasks: ['User auth flow', 'Dashboard layout', 'API integration'] },
    { title: '🔄 In Progress', tasks: ['Payment gateway', 'Analytics charts'] },
    { title: '✅ Done', tasks: ['Hero section', 'Navigation', 'DB schema', 'Login page'] }
  ];

  communication = [
    { icon: '📊', title: 'Weekly Progress Reports', desc: 'Detailed status update showing completed tasks, upcoming work, and any blockers.', freq: 'Every Monday' },
    { icon: '🎥', title: 'Sprint Demos', desc: 'Live video walkthrough of all completed features at the end of every sprint.', freq: 'Bi-weekly' },
    { icon: '💬', title: 'Direct Chat Access', desc: 'Real-time communication with your dedicated project manager on Slack or WhatsApp.', freq: 'Anytime' },
    { icon: '📞', title: 'Strategy Calls', desc: 'Monthly strategic reviews to ensure the project aligns with your evolving business goals.', freq: 'Monthly' }
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
