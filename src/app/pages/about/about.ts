import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="about-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg">
          <div class="ph-orb ph-orb-1"></div>
          <div class="ph-orb ph-orb-2"></div>
        </div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">Who We Are</span>
            <h1>We Are <span class="gradient-text">Conceptra Labs</span></h1>
            <p>A forward-thinking software development agency with development teams in Chennai & Bengaluru, India. We transform ambitious ideas into powerful, scalable technology solutions. We don't just write code — we build businesses.</p>
          </div>
        </div>
      </section>

      <!-- Company Intro -->
      <section class="section">
        <div class="container">
          <div class="about-intro-grid">
            <div class="intro-content reveal-left">
              <span class="section-label">Our Story</span>
              <h2>Built for the <span class="gradient-text">Modern Digital Era</span></h2>
              <p>Conceptra Labs was founded with a singular vision: to bridge the gap between cutting-edge technology and real business value. Headquartered in India's top tech hubs — Chennai and Bengaluru — we are a team of passionate engineers, designers, and software developers who believe that great software changes lives.</p>
              <p>From startups disrupting industries to enterprises undergoing digital transformation — we've been the trusted technology partner behind their success. Our team brings expertise across the full digital spectrum, from elegant UI/UX design to complex AI-powered backend systems.</p>
              <div class="intro-highlights">
                <!-- Highlight 1 -->
                <div class="ih-item">
                  <div class="ih-icon" style="color: #6366f1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <strong>15+ Projects Delivered</strong>
                    <p>Successfully completed across multiple industries</p>
                  </div>
                </div>
                <!-- Highlight 2 -->
                <div class="ih-item">
                  <div class="ih-icon" style="color: #06b6d4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <strong>Long-term Partnerships</strong>
                    <p>Most clients return for multiple projects</p>
                  </div>
                </div>
                <!-- Highlight 3 -->
                <div class="ih-item">
                  <div class="ih-icon" style="color: #8b5cf6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div>
                    <strong>Agile Delivery</strong>
                    <p>Fast iterations, consistent quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="intro-visual reveal-right">
              <div class="about-card-grid">
                <!-- Stat 1 -->
                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #6366f1">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div class="asc-value gradient-text">2+</div>
                  <div class="asc-label">Countries Reached</div>
                </div>
                <!-- Stat 2 -->
                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #06b6d4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div class="asc-value gradient-text">15+</div>
                  <div class="asc-label">Projects Delivered</div>
                </div>
                <!-- Stat 3 -->
                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #8b5cf6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div class="asc-value gradient-text">98%</div>
                  <div class="asc-label">Client Satisfaction</div>
                </div>
                <!-- Stat 4 -->
                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #f59e0b">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6V2m0 20v-4m8-8h4M0 12h4m1.93-5.07L3.1 4.1a1 1 0 1 1 1.42-1.42l2.83 2.83a1 1 0 0 1-1.42 1.42zm12.73 10.14l2.83 2.83a1 1 0 0 1-1.42 1.42l-2.83-2.83a1 1 0 0 1 1.42-1.42zM6.35 17.65l-2.83 2.83a1 1 0 0 1-1.42-1.42l2.83-2.83a1 1 0 0 1 1.42 1.42zm12.73-12.73l2.83-2.83a1 1 0 1 1 1.42 1.42l-2.83 2.83a1 1 0 0 1-1.42-1.42z"/></svg>
                  </div>
                  <div class="asc-value gradient-text">30+</div>
                  <div class="asc-label">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Founder Section -->
      <section class="section founder-section">
        <div class="container">
          <div class="founder-grid">
            <div class="founder-content reveal-left">
              <span class="section-label">Leadership</span>
              <h2>Meet Our <span class="gradient-text">Founder</span></h2>
              <p class="founder-lead"><strong>Suraj PS</strong> founded Conceptra Labs in 2026 to build reliable, high-performance software systems.</p>
              <p>Before launching Conceptra Labs, Suraj worked as a software engineer in the IT industry for 2 years. During this time, he witnessed first-hand how businesses struggled with slow websites, unscalable systems, and poorly managed software agencies.</p>
              <p>Recognizing the need for a results-driven agency that treats clients as partners, he established Conceptra Labs. Today, he leads a dedicated team of frontend specialists, backend developers, and AI engineers focused on delivering premium, scalable codebases that drive real business growth.</p>
            </div>
            <div class="founder-card reveal-right">
              <div class="fc-glow"></div>
              <div class="fc-profile">
                <span class="fc-avatar-text">S</span>
                <h3>Suraj PS</h3>
                <p class="fc-sub">Founder & Lead Architect</p>
                <div class="fc-meta">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    2 Years IT Industry Experience
                  </span>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Est. 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="section mission-section">
        <div class="container">
          <div class="mv-grid">
            <div class="mv-card mission reveal">
              <div class="mv-icon" style="color: #6366f1">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3>Our Mission</h3>
              <p>To empower businesses of all sizes with world-class digital solutions that drive growth, efficiency, and innovation — making premium technology accessible to everyone.</p>
            </div>
            <div class="mv-card vision reveal">
              <div class="mv-icon" style="color: #06b6d4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76a6 6 0 1 0-8.49 8.49m8.49-8.49a6 6 0 0 0-8.49-8.49M12 12h.01"/></svg>
              </div>
              <h3>Our Vision</h3>
              <p>To become the most trusted digital transformation partner for businesses across India and globally, recognized for excellence, integrity, and measurable business impact.</p>
            </div>
            <div class="mv-card values reveal">
              <div class="mv-icon" style="color: #f59e0b">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3L8 9l4 12 4-12-3-6M2 9h20"/></svg>
              </div>
              <h3>Our Values</h3>
              <p>Quality-first development, transparent communication, client-centric approach, continuous innovation, and delivering beyond expectations — every single time.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Our Tech Stack</span>
            <h2>Technologies We <span class="gradient-text">Master</span></h2>
            <p>We use the industry's most powerful and modern technologies to build future-proof solutions.</p>
          </div>

          <div class="tech-categories">
            <div class="tech-category reveal" *ngFor="let cat of techStack">
              <h4 class="tc-title">{{ cat.category }}</h4>
              <div class="tc-pills">
                <span class="tech-pill" *ngFor="let tech of cat.techs">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Trust Us -->
      <section class="section trust-section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Why We're Different</span>
            <h2>Why Businesses <span class="gradient-text">Trust Conceptra Labs</span></h2>
          </div>
          <div class="trust-grid">
            <!-- Reason 1 -->
            <div class="trust-card reveal">
              <div class="tc-num">01</div>
              <div class="tc-icon" style="color: #6366f1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h4>Results-Driven</h4>
              <p>Every decision is aligned with your business goals and measurable outcomes.</p>
            </div>
            <!-- Reason 2 -->
            <div class="trust-card reveal">
              <div class="tc-num">02</div>
              <div class="tc-icon" style="color: #06b6d4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h4>Security-First</h4>
              <p>Enterprise-grade security built into every layer of your application.</p>
            </div>
            <!-- Reason 3 -->
            <div class="trust-card reveal">
              <div class="tc-num">03</div>
              <div class="tc-icon" style="color: #8b5cf6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h4>Dedicated Support</h4>
              <p>24/7 post-deployment support ensures your systems run flawlessly.</p>
            </div>
            <!-- Reason 4 -->
            <div class="trust-card reveal">
              <div class="tc-num">04</div>
              <div class="tc-icon" style="color: #f59e0b">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4>ROI-Focused</h4>
              <p>We optimize every feature for maximum return on your technology investment.</p>
            </div>
            <!-- Reason 5 -->
            <div class="trust-card reveal">
              <div class="tc-num">05</div>
              <div class="tc-icon" style="color: #10b981">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h4>Iterative Process</h4>
              <p>Agile sprints with regular demos keep you in full control.</p>
            </div>
            <!-- Reason 6 -->
            <div class="trust-card reveal">
              <div class="tc-num">06</div>
              <div class="tc-icon" style="color: #ef4444">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/></svg>
              </div>
              <h4>Scale-Ready</h4>
              <p>Architecture designed to handle 10x to 100x growth seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-sm text-center">
        <div class="container">
          <h2 class="reveal">Ready to Work With <span class="gradient-text">the Best?</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:520px; margin: 1rem auto 2rem;">Let's discuss how Conceptra Labs can help transform your business with technology.</p>
          <div class="flex-center gap-sm reveal">
            <a routerLink="/contact" class="btn btn-primary btn-lg">Start a Project</a>
            <a routerLink="/services" class="btn btn-outline btn-lg">Explore Services</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./about.scss']
})
export class AboutComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  techStack = [
    { category: 'Frontend', techs: ['Angular', 'React', 'Next.js', 'Vue.js', 'TypeScript', 'SCSS'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'Django', 'FastAPI', 'Express', 'NestJS'] },
    { category: 'Mobile', techs: ['Flutter', 'React Native', 'Ionic', 'Android', 'iOS'] },
    { category: 'Database', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { category: 'AI / ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face'] },
    { category: 'Cloud & DevOps', techs: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] }
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
