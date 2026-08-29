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
            <p>A forward-thinking digital engineering agency with core technology hubs in Chennai & Bengaluru, India. We transform complex operational requirements into scalable software systems, AI automation pipelines, and modern web applications.</p>
          </div>
        </div>
      </section>

      <!-- Company Intro -->
      <section class="section">
        <div class="container">
          <div class="about-intro-grid">
            <div class="intro-content reveal-left">
              <span class="section-label">Our Story & Scale</span>
              <h2>Engineered for the <span class="gradient-text">Modern Enterprise</span></h2>
              <p>Conceptra Labs was established in 2025 with a singular vision: to bridge the gap between cutting-edge software architecture and real business revenue. Operating from India's primary tech capitals — Chennai and Bengaluru — we assemble dedicated multi-disciplinary teams of software architects, UI/UX engineers, and AI specialists.</p>
              <p>From high-growth B2B startups to established enterprises undergoing digital transformation, we serve as a full-service technology partner. Our delivery structure eliminates single-point-of-failure risks, ensuring continuous delivery governance, zero-downtime maintenance, and guaranteed SLA responses.</p>
              
              <div class="intro-highlights">
                <div class="ih-item">
                  <div class="ih-icon" style="color: #6366f1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <strong>15+ Projects Delivered</strong>
                    <p>Production software across ERP, AI, Web & Mobile</p>
                  </div>
                </div>

                <div class="ih-item">
                  <div class="ih-icon" style="color: #06b6d4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div>
                    <strong>Dedicated Account Management</strong>
                    <p>Direct technical lead and client success manager assigned</p>
                  </div>
                </div>

                <div class="ih-item">
                  <div class="ih-icon" style="color: #8b5cf6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  </div>
                  <div>
                    <strong>24/7 Managed SLA Support</strong>
                    <p>Proactive security patching, backups & monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="intro-visual reveal-right">
              <div class="about-card-grid">
                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #6366f1">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <div class="asc-value gradient-text">2+</div>
                  <div class="asc-label">Global Tech Hubs</div>
                </div>

                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #06b6d4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div class="asc-value gradient-text">15+</div>
                  <div class="asc-label">Projects Delivered</div>
                </div>

                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #8b5cf6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div class="asc-value gradient-text">98%</div>
                  <div class="asc-label">Client Retention</div>
                </div>

                <div class="about-stat-card">
                  <div class="asc-icon" style="color: #f59e0b">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6V2m0 20v-4m8-8h4M0 12h4m1.93-5.07L3.1 4.1a1 1 0 1 1 1.42-1.42l2.83 2.83a1 1 0 0 1-1.42 1.42zm12.73 10.14l2.83 2.83a1 1 0 0 1-1.42 1.42l-2.83-2.83a1 1 0 0 1 1.42-1.42zM6.35 17.65l-2.83 2.83a1 1 0 0 1-1.42-1.42l2.83-2.83a1 1 0 0 1 1.42 1.42zm12.73-12.73l2.83-2.83a1 1 0 1 1 1.42 1.42l-2.83 2.83a1 1 0 0 1-1.42-1.42z"/></svg>
                  </div>
                  <div class="asc-value gradient-text">30+</div>
                  <div class="asc-label">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Leadership & Team Capacity Section -->
      <section class="section founder-section">
        <div class="container">
          <div class="section-header reveal text-center">
            <span class="section-label">Engineering Capacity</span>
            <h2>Our Leadership & <span class="gradient-text">Delivery Team</span></h2>
            <p>We combine strategic architectural guidance with specialized execution roles — ensuring seamless project continuity and account oversight.</p>
          </div>

          <div class="team-grid reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2.5rem;">
            <!-- Member 1: Founder -->
            <div class="team-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2rem; text-align: center;">
              <div class="tc-avatar" style="width: 70px; height: 70px; border-radius: 50%; background: var(--gradient-primary); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; margin: 0 auto 1rem;">S</div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">Suraj PS</h3>
              <p style="color: var(--color-primary-light); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem;">Founder & Managing Director</p>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">Ex-IT enterprise engineer specializing in high-performance web architecture, product strategy, and technical system audits.</p>
              <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
                Est. 2025 • Lead Technical Architect
              </div>
            </div>

            <!-- Member 2: Co-Founder & CTO -->
            <div class="team-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2rem; text-align: center;">
              <div class="tc-avatar" style="width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #06b6d4); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; margin: 0 auto 1rem;">K</div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">Karthik Raja</h3>
              <p style="color: #8b5cf6; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem;">Co-Founder & Head of AI Systems</p>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">Directs RAG pipelines, LLM agent architectures, vector database clustering, and high-throughput Python backend services.</p>
              <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
                AI & Machine Learning Infrastructure
              </div>
            </div>

            <!-- Member 3: UI/UX Lead -->
            <div class="team-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2rem; text-align: center;">
              <div class="tc-avatar" style="width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, #f59e0b, #ef4444); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; margin: 0 auto 1rem;">A</div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">Ananya Sen</h3>
              <p style="color: #f59e0b; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem;">Lead UI/UX Product Engineer</p>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">Crafts modern design systems, micro-interactive client portals, wireframes, and conversion-focused user interfaces.</p>
              <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
                Design Systems & Prototype Engineering
              </div>
            </div>

            <!-- Member 4: Delivery & Client Success -->
            <div class="team-card" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2rem; text-align: center;">
              <div class="tc-avatar" style="width: 70px; height: 70px; border-radius: 50%; background: linear-gradient(135deg, #10b981, #3b82f6); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; margin: 0 auto 1rem;">R</div>
              <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.25rem;">Rohan Mehta</h3>
              <p style="color: #10b981; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; margin-bottom: 0.75rem;">Delivery & Client Success Lead</p>
              <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">Manages agile sprint reviews, client communication SLA compliance, requirement mapping, and release schedules.</p>
              <div style="font-size: 0.75rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
                Agile Sprint & SLA Governance
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
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3>Our Mission</h3>
              <p>To empower businesses of all sizes with world-class digital solutions that drive growth, efficiency, and operational excellence — delivering enterprise software capabilities cleanly and predictably.</p>
            </div>
            <div class="mv-card vision reveal">
              <div class="mv-icon" style="color: #06b6d4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76a6 6 0 1 0-8.49 8.49m8.49-8.49a6 6 0 0 0-8.49-8.49M12 12h.01"/></svg>
              </div>
              <h3>Our Vision</h3>
              <p>To become the premier digital engineering and AI automation partner across India and globally, recognized for technical mastery, zero-downtime reliability, and measurable client ROI.</p>
            </div>
            <div class="mv-card values reveal">
              <div class="mv-icon" style="color: #f59e0b">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3L8 9l4 12 4-12-3-6M2 9h20"/></svg>
              </div>
              <h3>Our Values</h3>
              <p>Quality-first code standards, transparent sprint communication, security-hardened deployment, continuous innovation, and dedicated SLA accountability.</p>
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
            <p>We use industry-leading software frameworks and cloud services to engineer future-proof products.</p>
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
            <div class="trust-card reveal">
              <div class="tc-num">01</div>
              <div class="tc-icon" style="color: #6366f1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h4>Results-Driven Architecture</h4>
              <p>Every engineering decision is aligned with quantifiable business goals and measurable ROI performance.</p>
            </div>

            <div class="trust-card reveal">
              <div class="tc-num">02</div>
              <div class="tc-icon" style="color: #06b6d4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h4>Security-First Infrastructure</h4>
              <p>AES-256 encryption, TLS 1.3, OWASP compliance, and role-based access control built into every product.</p>
            </div>

            <div class="trust-card reveal">
              <div class="tc-num">03</div>
              <div class="tc-icon" style="color: #8b5cf6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h4>24/7 Managed SLA Care</h4>
              <p>Guaranteed response SLAs, automated uptime monitoring, and daily database backup protection.</p>
            </div>

            <div class="trust-card reveal">
              <div class="tc-num">04</div>
              <div class="tc-icon" style="color: #f59e0b">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4>Predictable Fixed & Retainer Pricing</h4>
              <p>Clear project minimums (starting at ₹14,999) and structured sprint options with zero unexpected billing surprises.</p>
            </div>

            <div class="trust-card reveal">
              <div class="tc-num">05</div>
              <div class="tc-icon" style="color: #10b981">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              </div>
              <h4>Bi-Weekly Sprint Governance</h4>
              <p>Agile sprint demos, staging preview links, and direct developer communication via Slack and Teams.</p>
            </div>

            <div class="trust-card reveal">
              <div class="tc-num">06</div>
              <div class="tc-icon" style="color: #ef4444">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/></svg>
              </div>
              <h4>100x Scale-Ready Codebases</h4>
              <p>Decoupled microservice architecture designed to expand seamlessly from initial launch to millions of queries.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-sm text-center">
        <div class="container">
          <h2 class="reveal">Ready to Work With <span class="gradient-text">a Dedicated Engineering Team?</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:520px; margin: 1rem auto 2rem;">Let's discuss how Conceptra Labs can engineer your next digital platform with predictable scope and timelines.</p>
          <div class="flex-center gap-sm reveal">
            <a routerLink="/contact" class="btn btn-primary btn-lg">Request Consultation</a>
            <a routerLink="/services" class="btn btn-outline btn-lg">Explore Capabilities</a>
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
