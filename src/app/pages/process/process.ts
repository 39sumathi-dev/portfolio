import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
                <div class="phase-icon">{{ phase.icon }}</div>
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
              <div class="cc-icon">{{ c.icon }}</div>
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
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }
}
