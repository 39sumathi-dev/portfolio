import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="services-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg">
          <div class="ph-orb ph-orb-1"></div>
          <div class="ph-orb ph-orb-2"></div>
        </div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">What We Build</span>
            <h1>Premium <span class="gradient-text">Digital Services</span></h1>
            <p>Comprehensive technology solutions tailored for startups, SMEs, and enterprises. Each service is delivered with precision, passion, and a commitment to excellence.</p>
          </div>
        </div>
      </section>

      <!-- Services List -->
      <section class="section">
        <div class="container">
          <div class="services-detailed">
            <div class="service-detail-card reveal" *ngFor="let svc of services; let i = index"
                 [class.reverse]="i % 2 !== 0">
              <div class="sdc-visual">
                <div class="sdc-icon-bg" [style.background]="'rgba(' + svc.rgb + ', 0.1)'"
                     [style.border-color]="'rgba(' + svc.rgb + ', 0.2)'" [style.color]="svc.color">
                  <span class="sdc-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'Web Development'"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'App Development'"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'UI/UX Design'"><circle cx="12" cy="12" r="9"/><path d="M12 2v20M2 12h20"/></svg>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'ERP Systems & Portals'"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'AI Automation'"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'E-Commerce Development'"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'Custom Dashboard Development'"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" *ngIf="svc.title === 'AI Web Applications'"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
                  </span>
                </div>
                <div class="sdc-tech-badges">
                  <span class="tech-pill" *ngFor="let t of svc.tech">{{ t }}</span>
                </div>
              </div>
              <div class="sdc-content">
                <span class="section-label" [style.color]="svc.color">{{ svc.category }}</span>
                <h2>{{ svc.title }}</h2>
                <p class="sdc-desc">{{ svc.desc }}</p>
                <div class="sdc-benefits">
                  <div class="benefit-item" *ngFor="let b of svc.benefits">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" [style.color]="svc.color"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ b }}
                  </div>
                </div>
                <a routerLink="/contact" class="btn btn-primary">Get This Service</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-sm text-center">
        <div class="container">
          <h2 class="reveal">Not Sure Which Service <span class="gradient-text">You Need?</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:520px; margin: 1rem auto 2rem;">Book a free 30-minute consultation. We'll analyze your needs and recommend the perfect solution.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Book Free Consultation</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./services.scss']
})
export class ServicesComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  services = [
    {
      icon: '🌐', title: 'Web Development', category: 'Core Service',
      color: '#6366f1', rgb: '99,102,241',
      desc: 'We craft stunning, high-performance websites that load fast, rank well, and convert visitors into customers. From landing pages to complex web platforms, every pixel is intentional.',
      benefits: ['Custom design tailored to your brand', 'SEO-optimized architecture', 'Mobile-first responsive layout', 'Lightning-fast load times', 'Scalable codebase for future growth'],
      tech: ['Angular', 'React', 'Next.js', 'Node.js', 'MongoDB']
    },
    {
      icon: '📱', title: 'App Development', category: 'Mobile Solutions',
      color: '#06b6d4', rgb: '6,182,212',
      desc: 'Cross-platform mobile applications that deliver native-like performance across iOS and Android. Beautiful UX that keeps users engaged and businesses growing.',
      benefits: ['Cross-platform (iOS & Android)', 'Native performance', 'Offline capability', 'Push notifications', 'App Store optimization support'],
      tech: ['Flutter', 'React Native', 'Firebase', 'Node.js', 'Stripe']
    },
    {
      icon: '🎨', title: 'UI/UX Design', category: 'Design Excellence',
      color: '#8b5cf6', rgb: '139,92,246',
      desc: 'User-centered design that transforms complex workflows into intuitive, delightful experiences. We create interfaces that users love and that drive business results.',
      benefits: ['User research & wireframing', 'Interactive prototypes', 'Design system creation', 'Usability testing', 'Conversion rate optimization'],
      tech: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Lottie']
    },
    {
      icon: '🏭', title: 'ERP Systems & Portals', category: 'Enterprise Solutions',
      color: '#f59e0b', rgb: '245,158,11',
      desc: 'Custom ERP systems that unify your entire operation — inventory, HR, finance, procurement, and more — into one powerful, intelligent platform.',
      benefits: ['Role-based access control', 'Real-time data sync', 'Custom workflow automation', 'Advanced reporting & analytics', 'Third-party integrations'],
      tech: ['Angular', 'Python', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      icon: '🤖', title: 'AI Automation', category: 'Intelligent Systems',
      color: '#10b981', rgb: '16,185,129',
      desc: 'Automate repetitive tasks, make smarter decisions, and unlock new efficiencies with custom AI solutions built specifically for your business workflows.',
      benefits: ['Process automation (save 100s of hours)', 'AI-powered decision making', 'Natural language processing', 'Predictive analytics', 'Chatbot & virtual assistants'],
      tech: ['Python', 'OpenAI', 'LangChain', 'TensorFlow', 'FastAPI']
    },
    {
      icon: '🛒', title: 'E-Commerce Development', category: 'Online Retail',
      color: '#ef4444', rgb: '239,68,68',
      desc: 'High-converting online stores with seamless shopping experiences, secure payments, and powerful admin management — built to scale with your growth.',
      benefits: ['Conversion-optimized checkout', 'Multi-payment gateway', 'Inventory management', 'SEO & marketing tools', 'Analytics & customer insights'],
      tech: ['Next.js', 'Stripe', 'Razorpay', 'Shopify API', 'Node.js']
    },
    {
      icon: '📊', title: 'Custom Dashboard Development', category: 'Analytics & BI',
      color: '#06b6d4', rgb: '6,182,212',
      desc: 'Real-time business intelligence dashboards that turn raw data into actionable insights. Beautiful visualizations that make complex data instantly understandable.',
      benefits: ['Real-time data streaming', 'Custom KPI tracking', 'Interactive charts & graphs', 'Data export & reporting', 'Role-based data access'],
      tech: ['Angular', 'D3.js', 'Chart.js', 'WebSockets', 'PostgreSQL']
    },
    {
      icon: '🧠', title: 'AI Web Applications', category: 'AI-Powered Web',
      color: '#8b5cf6', rgb: '139,92,246',
      desc: 'Web applications supercharged with AI capabilities — from intelligent search and recommendations to generative AI features and smart content creation.',
      benefits: ['GPT-4 / Claude integration', 'Intelligent search & discovery', 'Personalization engine', 'Content generation', 'Computer vision features'],
      tech: ['React', 'OpenAI API', 'LangChain', 'Pinecone', 'Python']
    }
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
