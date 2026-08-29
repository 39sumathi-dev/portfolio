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
            <span class="section-label">Digital Engineering & SLAs</span>
            <h1>Capabilities & <span class="gradient-text">Engagement Models</span></h1>
            <p>Comprehensive engineering services and predictable retainer models tailored for ambitious startups, scaling SMEs, and enterprise platforms.</p>
          </div>
        </div>
      </section>

      <!-- Detailed Services List -->
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
                <a routerLink="/contact" class="btn btn-primary">Request Proposal for {{ svc.title }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Managed SLA & Support Retainers Section -->
      <section class="section retainers-section" style="background: var(--bg-card); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color);" id="retainers">
        <div class="container">
          <div class="section-header reveal text-center">
            <span class="section-label">Account Retention & Continuous Growth</span>
            <h2>Managed Engineering & <span class="gradient-text">SLA Support Retainers</span></h2>
            <p>Ensure long-term system health, guaranteed uptime response times, and continuous feature development with structured monthly SLA tiers.</p>
          </div>

          <div class="retainer-grid reveal" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2.5rem;">
            <!-- Care Tier -->
            <div style="background: var(--bg-dark-1); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.75rem; font-weight: 700; color: #10b981; text-transform: uppercase;">Essential Infrastructure</span>
                <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin: 0.5rem 0 0.25rem;">Essential SLA Care</h3>
                <div style="font-size: 1.5rem; font-weight: 800; color: #10b981; margin-bottom: 1rem;">Starting at ₹4,999 / mo</div>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.5rem;">Proactive maintenance for production websites, web applications, and database infrastructure.</p>
                <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #10b981; font-weight: bold;">✓</span> 99.9% Application Uptime Guarantee</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #10b981; font-weight: bold;">✓</span> Daily Encrypted Cloud Database Backups</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #10b981; font-weight: bold;">✓</span> OWASP Security Vulnerability Scanning & Hotfixes</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #10b981; font-weight: bold;">✓</span> Monthly Core Web Vitals & Traffic Audits</li>
                </ul>
              </div>
              <a routerLink="/contact" class="btn btn-outline" style="width: 100%; justify-content: center;">Choose SLA Care</a>
            </div>

            <!-- Sprint Tier -->
            <div style="background: var(--bg-dark-1); border: 1px solid var(--color-primary-light); border-radius: var(--radius-xl); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2); position: relative;">
              <span style="position: absolute; top: -12px; right: 24px; background: var(--gradient-primary); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.85rem; border-radius: 12px; text-transform: uppercase;">Recommended</span>
              <div>
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-primary-light); text-transform: uppercase;">Active Growth</span>
                <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin: 0.5rem 0 0.25rem;">Dedicated Sprint Retainer</h3>
                <div style="font-size: 1.5rem; font-weight: 800; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 1rem;">Starting at ₹24,999 / mo</div>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.5rem;">Dedicated developer capacity for fast feature iterations, architectural enhancements, and API scaling.</p>
                <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: var(--color-primary-light); font-weight: bold;">✓</span> Dedicated Senior Software Developers</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: var(--color-primary-light); font-weight: bold;">✓</span> Bi-Weekly Agile Sprint Planning & Live Demos</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: var(--color-primary-light); font-weight: bold;">✓</span> Priority SLA Incident Response (&lt; 2 Hours)</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: var(--color-primary-light); font-weight: bold;">✓</span> Direct Slack / Microsoft Teams Dev Channel</li>
                </ul>
              </div>
              <a routerLink="/contact" class="btn btn-primary" style="width: 100%; justify-content: center;">Reserve Sprint Capacity</a>
            </div>

            <!-- Enterprise Tier -->
            <div style="background: var(--bg-dark-1); border: 1px solid var(--border-color); border-radius: var(--radius-xl); padding: 2.5rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span style="font-size: 0.75rem; font-weight: 700; color: #8b5cf6; text-transform: uppercase;">Scale Infrastructure</span>
                <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-primary); margin: 0.5rem 0 0.25rem;">Enterprise Managed Retainer</h3>
                <div style="font-size: 1.5rem; font-weight: 800; color: #8b5cf6; margin-bottom: 1rem;">Custom Quote</div>
                <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.5rem;">Custom SLA governance for high-volume databases, ERP integrations, and AI microservice clusters.</p>
                <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #8b5cf6; font-weight: bold;">✓</span> Dedicated Chief Architect & Delivery Manager</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #8b5cf6; font-weight: bold;">✓</span> Custom Uptime & Financial Penalty SLAs</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #8b5cf6; font-weight: bold;">✓</span> 24/7 Dedicated On-Call Incident Engineer</li>
                  <li style="display: flex; gap: 0.5rem; font-size: 0.875rem; color: var(--text-secondary);"><span style="color: #8b5cf6; font-weight: bold;">✓</span> Continuous Disaster Recovery Testing</li>
                </ul>
              </div>
              <a routerLink="/contact" class="btn btn-outline" style="width: 100%; justify-content: center;">Discuss Enterprise Terms</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section-sm text-center">
        <div class="container">
          <h2 class="reveal">Need a Tailored Technical <span class="gradient-text">Solution?</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:520px; margin: 1rem auto 2rem;">Book a technical consultation with our engineering leads to outline your software roadmap and receive a detailed quote within 24 hours.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Request Technical Audit</a>
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
      desc: 'We craft stunning, high-performance websites and web platforms that load sub-second, rank on search engines, and convert visitors into loyal customers.',
      benefits: ['Custom design tailored to your brand', 'SEO-optimized Angular SSR architecture', 'Mobile-first responsive layout', 'Sub-second load times & 95+ Core Web Vitals', 'Scalable codebase built for future growth'],
      tech: ['Angular', 'React', 'Next.js', 'Node.js', 'MongoDB']
    },
    {
      icon: '📱', title: 'App Development', category: 'Mobile Solutions',
      color: '#06b6d4', rgb: '6,182,212',
      desc: 'Cross-platform mobile applications that deliver native 60fps performance across iOS and Android. Built with offline data sync, push alerts, and intuitive UX.',
      benefits: ['Cross-platform Flutter & React Native', '60fps native performance', 'Offline data sync & SQLite', 'Real-time push notifications', 'App Store & Play Store publishing support'],
      tech: ['Flutter', 'React Native', 'Firebase', 'Node.js', 'Razorpay']
    },
    {
      icon: '🎨', title: 'UI/UX Design', category: 'Design Excellence',
      color: '#8b5cf6', rgb: '139,92,246',
      desc: 'User-centered design systems that convert complex enterprise workflows into intuitive visual interfaces that users love.',
      benefits: ['User research & wireframing', 'Interactive prototypes in Figma', 'Design system token creation', 'Usability testing & feedback rounds', 'Conversion rate optimization'],
      tech: ['Figma', 'Adobe XD', 'Framer', 'Principle', 'Lottie']
    },
    {
      icon: '🏭', title: 'ERP Systems & Portals', category: 'Enterprise Solutions',
      color: '#f59e0b', rgb: '245,158,11',
      desc: 'Custom cloud ERP software unifying inventory, fee management, HR, procurement, and billing into one central platform.',
      benefits: ['Role-based access control & audits', 'Real-time database sync', 'Custom automated workflow pipelines', 'PDF report generation & exports', 'Accounting & third-party API sync'],
      tech: ['Angular', 'Python', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
      icon: '🤖', title: 'AI Automation', category: 'Intelligent Systems',
      color: '#10b981', rgb: '16,185,129',
      desc: 'Autonomous RAG chatbots, OCR document parsing, and AI agents trained on proprietary knowledge bases to automate manual work.',
      benefits: ['Process automation (save 100s of hours)', '24/7 autonomous RAG knowledge bots', 'PDF invoice & purchase order OCR parsing', 'Predictive data analytics', 'WhatsApp & CRM AI triggers'],
      tech: ['Python', 'OpenAI', 'LangChain', 'TensorFlow', 'FastAPI']
    },
    {
      icon: '🛒', title: 'E-Commerce Development', category: 'Online Retail',
      color: '#ef4444', rgb: '239,68,68',
      desc: 'High-converting online stores with fast catalogs, dynamic pricing, secure payment gateways, and inventory management.',
      benefits: ['Conversion-optimized checkout flow', 'Razorpay & Stripe multi-payment integration', 'Real-time inventory management', 'SEO & Product JSON-LD schema', 'Cloudinary / R2 asset CDN speed'],
      tech: ['Angular SSR', 'FastAPI', 'Razorpay', 'MongoDB', 'Node.js']
    },
    {
      icon: '📊', title: 'Custom Dashboard Development', category: 'Analytics & BI',
      color: '#06b6d4', rgb: '6,182,212',
      desc: 'Real-time business intelligence dashboards turning complex operational data into clean interactive charts.',
      benefits: ['Real-time WebSocket data streaming', 'Custom KPI tracking & alerts', 'Interactive D3.js & Chart.js visualizations', 'PDF/CSV data export & scheduled emails', 'Role-based view permissions'],
      tech: ['Angular', 'D3.js', 'Chart.js', 'WebSockets', 'PostgreSQL']
    },
    {
      icon: '🧠', title: 'AI Web Applications', category: 'AI-Powered Web',
      color: '#8b5cf6', rgb: '139,92,246',
      desc: 'Web applications supercharged with LLM capabilities — intelligent semantic search, automated content generation, and smart assistants.',
      benefits: ['GPT-4 & Claude LLM integration', 'Vector search database clustering', 'Personalized recommendations', 'Automated document processing', 'Computer vision features'],
      tech: ['Angular', 'OpenAI API', 'LangChain', 'Pinecone', 'Python']
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
