import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
            <p>A forward-thinking digital product agency that transforms ambitious ideas into powerful, scalable technology solutions. We don't just write code — we build businesses.</p>
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
              <p>Conceptra Labs was founded with a singular vision: to bridge the gap between cutting-edge technology and real business value. We are a team of passionate engineers, designers, and strategists who believe that great software changes lives.</p>
              <p>From startups disrupting industries to enterprises undergoing digital transformation — we've been the trusted technology partner behind their success. Our team brings expertise across the full digital spectrum, from elegant UI/UX design to complex AI-powered backend systems.</p>
              <div class="intro-highlights">
                <div class="ih-item" *ngFor="let item of highlights">
                  <div class="ih-icon">{{ item.icon }}</div>
                  <div>
                    <strong>{{ item.title }}</strong>
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="intro-visual reveal-right">
              <div class="about-card-grid">
                <div class="about-stat-card" *ngFor="let stat of aboutStats">
                  <div class="asc-icon">{{ stat.icon }}</div>
                  <div class="asc-value gradient-text">{{ stat.value }}</div>
                  <div class="asc-label">{{ stat.label }}</div>
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
              <div class="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To empower businesses of all sizes with world-class digital solutions that drive growth, efficiency, and innovation — making premium technology accessible to everyone.</p>
            </div>
            <div class="mv-card vision reveal">
              <div class="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To become the most trusted digital transformation partner for businesses across India and globally, recognized for excellence, integrity, and measurable business impact.</p>
            </div>
            <div class="mv-card values reveal">
              <div class="mv-icon">💎</div>
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
            <div class="trust-card reveal" *ngFor="let item of trustReasons; let i = index"
                 [style.animation-delay]="(i * 0.08) + 's'">
              <div class="tc-num">{{ ('0' + (i+1)).slice(-2) }}</div>
              <div class="tc-icon">{{ item.icon }}</div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
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
  highlights = [
    { icon: '🚀', title: '150+ Projects Delivered', desc: 'Successfully completed across multiple industries' },
    { icon: '🤝', title: 'Long-term Partnerships', desc: 'Most clients return for multiple projects' },
    { icon: '⚡', title: 'Agile Delivery', desc: 'Fast iterations, consistent quality' }
  ];

  aboutStats = [
    { icon: '🌍', value: '15+', label: 'Countries Reached' },
    { icon: '🚀', value: '150+', label: 'Projects Delivered' },
    { icon: '⭐', value: '98%', label: 'Client Satisfaction' },
    { icon: '💡', value: '30+', label: 'Technologies' }
  ];

  techStack = [
    { category: 'Frontend', techs: ['Angular', 'React', 'Next.js', 'Vue.js', 'TypeScript', 'SCSS'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'Django', 'FastAPI', 'Express', 'NestJS'] },
    { category: 'Mobile', techs: ['Flutter', 'React Native', 'Ionic', 'Android', 'iOS'] },
    { category: 'Database', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { category: 'AI / ML', techs: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face'] },
    { category: 'Cloud & DevOps', techs: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'CI/CD'] }
  ];

  trustReasons = [
    { icon: '🎯', title: 'Results-Driven', desc: 'Every decision is aligned with your business goals and measurable outcomes.' },
    { icon: '🔒', title: 'Security-First', desc: 'Enterprise-grade security built into every layer of your application.' },
    { icon: '📞', title: 'Dedicated Support', desc: '24/7 post-deployment support ensures your systems run flawlessly.' },
    { icon: '💰', title: 'ROI-Focused', desc: 'We optimize every feature for maximum return on your technology investment.' },
    { icon: '🔄', title: 'Iterative Process', desc: 'Agile sprints with regular demos keep you in full control.' },
    { icon: '📈', title: 'Scale-Ready', desc: 'Architecture designed to handle 10x to 100x growth seamlessly.' }
  ];

  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }
}
