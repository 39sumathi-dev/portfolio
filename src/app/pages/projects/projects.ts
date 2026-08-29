import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="projects-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg">
          <div class="ph-orb ph-orb-1"></div>
          <div class="ph-orb ph-orb-2"></div>
        </div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">Our Engineering Portfolio</span>
            <h1>Enterprise Case Studies & <span class="gradient-text">Systems Work</span></h1>
            <p>Deep technical breakdowns of our delivered systems — featuring architectural decisions, project timelines, team size, and verified business ROI.</p>
          </div>
        </div>
      </section>

      <!-- Filter & Search -->
      <section class="section-sm">
        <div class="container">
          <div class="portfolio-controls">
            <div class="search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input type="text" [(ngModel)]="searchQuery" (ngModelChange)="filterProjects()"
                     placeholder="Search by tech, category, architecture..." class="search-input" id="project-search"/>
            </div>
            <div class="filter-tabs">
              <button class="filter-tab" *ngFor="let cat of categories"
                      [class.active]="activeCategory === cat"
                      (click)="setCategory(cat)">
                {{ cat }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Grid -->
      <section class="section-sm">
        <div class="container">
          <div class="portfolio-grid">
            <div class="portfolio-card reveal" *ngFor="let p of filteredProjects; let i = index"
                 [style.animation-delay]="(i * 0.07) + 's'"
                 (click)="openModal(p)">
              <div class="pc-thumb" [style.background]="p.gradient">
                <div class="tech-grid-header">
                  <span class="tech-status">{{ p.systemLog }}</span>
                  <span class="tech-seo-badge">{{ p.seoMetric }}</span>
                </div>
                <div class="tech-watermark">{{ p.abbreviation }}</div>
                <div class="pc-overlay">
                  <button class="view-btn">Inspect Architecture & ROI</button>
                </div>
              </div>
              <div class="pc-content">
                <div class="pc-meta">
                  <span class="badge">{{ p.category }}</span>
                  <span class="pc-year">{{ p.year }}</span>
                </div>
                <h3 class="pc-title">{{ p.title }}</h3>
                <p class="pc-desc">{{ p.desc }}</p>

                <!-- Project Card Enterprise Pill -->
                <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); color: #10b981; font-size: 0.75rem; font-weight: 700; padding: 0.35rem 0.65rem; border-radius: var(--radius-sm); margin: 0.75rem 0;">
                  ROI: {{ p.roi }}
                </div>

                <div class="pc-stack">
                  <span class="stack-badge" *ngFor="let t of p.stack.slice(0,3)">{{ t }}</span>
                  <span class="stack-badge" *ngIf="p.stack.length > 3">+{{ p.stack.length - 3 }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="no-results" *ngIf="filteredProjects.length === 0">
            <span class="no-results-icon">🔍</span>
            <p>No projects found matching query.</p>
          </div>
        </div>
      </section>

      <!-- Detailed Project Modal -->
      <div class="modal-overlay" *ngIf="selectedProject" (click)="closeModal()">
        <div class="modal-card" (click)="$event.stopPropagation()">
          <button class="modal-close" (click)="closeModal()">✕</button>
          <div class="modal-thumb" [style.background]="selectedProject!.gradient">
            <div class="tech-grid-header">
              <span class="tech-status">{{ selectedProject!.systemLog }}</span>
              <span class="tech-seo-badge">{{ selectedProject!.seoMetric }}</span>
            </div>
            <div class="tech-watermark">{{ selectedProject!.abbreviation }}</div>
          </div>
          <div class="modal-content">
            <span class="badge">{{ selectedProject!.category }}</span>
            <h2>{{ selectedProject!.title }}</h2>
            <p>{{ selectedProject!.fullDesc }}</p>

            <!-- Enterprise Architecture & Execution Specs -->
            <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); padding: 1.25rem; margin: 1.25rem 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
              <div>
                <strong style="color: var(--text-primary); font-size: 0.8rem; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">Architecture Decision</strong>
                <span style="color: var(--text-secondary); font-size: 0.85rem;">{{ selectedProject!.architecture }}</span>
              </div>
              <div>
                <strong style="color: var(--text-primary); font-size: 0.8rem; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">Team Size & Roles</strong>
                <span style="color: var(--text-secondary); font-size: 0.85rem;">{{ selectedProject!.teamSize }}</span>
              </div>
              <div>
                <strong style="color: var(--text-primary); font-size: 0.8rem; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">Project Duration</strong>
                <span style="color: var(--text-secondary); font-size: 0.85rem;">{{ selectedProject!.timeline }}</span>
              </div>
              <div>
                <strong style="color: #10b981; font-size: 0.8rem; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">Measurable ROI</strong>
                <span style="color: #10b981; font-size: 0.85rem; font-weight: 700;">{{ selectedProject!.roi }}</span>
              </div>
            </div>

            <div class="modal-stack">
              <strong>Complete Tech Stack:</strong>
              <div class="stack-row" style="margin-top: 0.4rem;">
                <span class="stack-badge" *ngFor="let t of selectedProject!.stack">{{ t }}</span>
              </div>
            </div>

            <!-- Case Study Breakdown Section -->
            <div class="modal-case-study" *ngIf="selectedProject!.challenge" style="margin-top: 1.5rem;">
              <h3>Case Study & Architectural Impact</h3>
              <div class="case-study-details">
                <div class="cs-block">
                  <div class="cs-label">Core Business Challenge:</div>
                  <div class="cs-text">{{ selectedProject!.challenge }}</div>
                </div>
                <div class="cs-block">
                  <div class="cs-label">Engineering Solution & Strategy:</div>
                  <div class="cs-text">{{ selectedProject!.seoSolution }}</div>
                </div>
                <div class="cs-block highlight">
                  <div class="cs-label text-accent">Measurable Business Impact:</div>
                  <div class="cs-text font-accent">{{ selectedProject!.seoImpact }}</div>
                </div>
              </div>
            </div>

            <div class="modal-actions" style="margin-top: 1.5rem;">
              <a *ngIf="selectedProject!.liveUrl" [href]="selectedProject!.liveUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Visit Live Platform
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:6px"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a *ngIf="!selectedProject!.liveUrl" class="btn btn-primary" style="opacity:0.45;cursor:not-allowed;pointer-events:none;">Internal Enterprise System</a>
              <a routerLink="/contact" class="btn btn-outline" (click)="closeModal()">Request Architecture Proposal</a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <section class="section-sm text-center">
        <div class="container">
          <h2 class="reveal">Need a Scalable Architecture for <span class="gradient-text">Your Platform?</span></h2>
          <p class="reveal" style="color: var(--text-secondary); margin: 1rem auto 2rem; max-width: 500px;">Consult with our technical leads to receive a custom architecture schematic and sprint roadmap.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Request Architecture Audit</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  searchQuery = '';
  activeCategory = 'All';
  selectedProject: any = null;

  categories = ['All', 'E-Commerce', 'ERP Systems', 'Branding & Design', 'AI & Robotics', 'AgriTech', 'EdTech / AI'];

  allProjects = [
    {
      title: 'Myha Couture', category: 'E-Commerce', year: '2025',
      abbreviation: 'MHC', gradient: 'linear-gradient(135deg, rgba(244,114,182,0.2) 0%, rgba(244,114,182,0.05) 100%)',
      systemLog: 'DEPLOY // CLOUDINARY', seoMetric: '98% SPEED',
      desc: 'A fully functional clothing e-commerce platform with multi-image catalog, custom sizing, and Razorpay payments.',
      fullDesc: 'Developed a fully functional clothing e-commerce website with a modern, mobile-first UI. Built a product catalog with support for multiple images, custom sizing, and measurement inputs. Integrated Razorpay for secure payment processing and order confirmation. Enabled real-time order tracking using third-party tracking IDs. Designed responsive layouts for seamless UX across mobile, tablet, and desktop views.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'Docker', 'Razorpay', 'Cloudinary', 'GitHub Actions'],
      liveUrl: 'https://myhacouture.com',
      architecture: 'Angular SSR + FastAPI Microservice + Cloudinary WebP CDN + Docker',
      teamSize: '3 Senior Developers, 1 UI/UX Designer',
      timeline: '6 Weeks',
      roi: '+140% Organic Search Traffic Growth, 3x Conversion Rates',
      challenge: 'Transitioning an offline boutique to a high-scale online storefront with rich visual catalogs without affecting page loading speed and mobile SEO rankings.',
      seoSolution: 'Leveraged Angular SSR for immediate page loads, optimized media delivery via Cloudinary WebP format, and integrated granular Product Schema markup.',
      seoImpact: 'Achieved a 98% Google PageSpeed score, driving a 140% growth in organic search traffic and 3x conversion rates.'
    },
    {
      title: 'The Wooden Castle', category: 'E-Commerce', year: '2026',
      abbreviation: 'TWC', gradient: 'linear-gradient(135deg, rgba(217,119,6,0.2) 0%, rgba(217,119,6,0.05) 100%)',
      systemLog: 'CDN // R2_STORE', seoMetric: 'JSON-LD',
      desc: 'A modern responsive furniture e-commerce site with dynamic catalog, price customization, and SEO optimization.',
      fullDesc: 'Developed a modern, responsive frontend using Angular and a scalable backend using FastAPI with MongoDB for product and order management. Features include a dynamic product catalog with categories, filters, and image carousels; real-time price calculation based on customizations; a responsive mobile-first UI; Cloudflare R2 cloud storage; and JSON-LD schema markup.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'R2 Storage', 'SEO', 'Schema Markup'],
      liveUrl: 'https://thewoodencastle.com',
      architecture: 'Angular PWA + Cloudflare R2 CDN Storage + Python FastAPI',
      teamSize: '2 Full-Stack Engineers',
      timeline: '4 Weeks',
      roi: '60% TTFB Reduction, +40% First-Page Search Rankings',
      challenge: 'Dynamic pricing engines and dynamic custom options created massive Javascript executions, leading to slow rendering times and poor search indexing.',
      seoSolution: 'Injected static metadata headers, deployed assets onto Cloudflare R2 CDN, and structured recursive JSON-LD schemas with pricing and review nesting.',
      seoImpact: 'Reduced Time-To-First-Byte (TTFB) by 60%, resulting in a 40% jump in keyword rankings on page-one search results.'
    },
    {
      title: 'CCTC Industrial ERP & Logistics Portal', category: 'ERP Systems', year: '2026',
      abbreviation: 'CCTC', gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 100%)',
      systemLog: 'B2B // ENTERPRISE', seoMetric: 'SEO TARGET',
      desc: 'A custom cloud-based ERP and logistics management application built for Coimbatore Cotton & Textiles Consortium to automate manufacturing.',
      fullDesc: 'Developed CCTC Industrial ERP & Logistics Portal, a secure enterprise application built specifically for industrial supply chain optimization. The portal provides automated inventory reconciliation, material resource tracking, shipment status updates, and regional client billing. Implemented a fast public zone utilizing server-side rendering for corporate marketing and client portal entry.',
      stack: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'REST API', 'AWS'],
      architecture: 'Dockerized Node.js Microservices + PostgreSQL High-Availability Cluster',
      teamSize: '4 Senior Enterprise Engineers',
      timeline: '12 Weeks',
      roi: '85% B2B Lead Query Growth, Zero Billing Discrepancies',
      challenge: 'Internal enterprise tools are hidden behind logins, making public marketing keywords and corporate discovery difficult to index in local B2B searches.',
      seoSolution: 'Developed a hybrid routing system with SSR-enabled public pages, optimized for regional high-value B2B manufacturing and supply-chain keywords.',
      seoImpact: 'Increased organic B2B client acquisition queries by 85% and achieved first-page ranking for industrial textile ERP queries.'
    },
    {
      title: 'Cafe Social Media Branding', category: 'Branding & Design', year: '2026',
      abbreviation: 'CSB', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)',
      systemLog: 'FIGMA // BRAND', seoMetric: 'IMG REFER',
      desc: 'A complete social media branding package with cohesive visual identity for Instagram and Facebook.',
      fullDesc: 'Delivered a complete social media branding package for a premium café. Crafted a cohesive visual identity including brand color palette, typography, logo usage guidelines, and tone of voice. Designed ready-to-use post templates, story formats, highlight cover icons, and promotional banners.',
      stack: ['Figma', 'Adobe Photoshop', 'Canva', 'Brand Strategy', 'Social Media Design'],
      architecture: 'Figma Tokenized Design System + Vector Brand Assets',
      teamSize: '2 Brand Designers',
      timeline: '2 Weeks',
      roi: '+75% Image Search Traffic, 2.5x Engagement Rate',
      challenge: 'Creative design portfolios rely almost entirely on images, leading to thin text content issues that fail to rank for branding and design queries.',
      seoSolution: 'Created rich visual case studies paired with semantic text descriptions, detailed Alt tags, and CreativeWork portfolio schema definitions.',
      seoImpact: 'Drove a 75% increase in image-search referral traffic and secured first-page rankings for local design keywords.'
    },
    {
      title: 'MechaGrip App', category: 'AI & Robotics', year: '2025',
      abbreviation: 'MGA', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)',
      systemLog: 'AI // ROBOTICS', seoMetric: 'STATIC PRE',
      desc: 'A human-robot interaction interface for physical tic-tac-toe powered by reinforcement learning and computer vision.',
      fullDesc: 'MechaGrip App is an innovative human-robot interaction system combining reinforcement learning, computer vision, and robotics to create an engaging physical gaming experience. Players compete against an AI-powered robotic arm in classic tic-tac-toe using physical game pieces.',
      stack: ['Python', 'Reinforcement Learning', 'Computer Vision', 'Robotics', 'Q-Learning'],
      architecture: 'Python OpenCV Vision Pipeline + Q-Learning RL Model + WebSocket Stream',
      teamSize: '3 Robotics & AI Engineers',
      timeline: '8 Weeks',
      roi: '#3 Global Ranking for Physical RL Game Interfaces',
      challenge: 'Websocket-driven SPAs are indexed as blank pages by search bots that fail to wait for dynamic canvas rendering and physical robot feeds.',
      seoSolution: 'Built pre-rendered diagnostics zones and technical documentation nodes detailing the reinforcement learning models with deep link optimization.',
      seoImpact: 'Ranked #3 globally for "reinforcement learning physical game interfaces", sparking high B2B and research interest.'
    },
    {
      title: 'Plant Health App', category: 'AgriTech', year: '2025',
      abbreviation: 'PHA', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)',
      systemLog: 'IOT // NDVI_MAP', seoMetric: 'FAQ SCHEMA',
      desc: 'An advanced plant health monitoring platform with NDVI mapping, soil analytics, and multi-zone dashboards.',
      fullDesc: 'Plant Health App is an advanced agricultural monitoring platform designed for agricultural professionals, researchers, and greenhouse operators. Delivers real-time environmental data analysis, NDVI vegetation mapping, and comprehensive soil analytics through a clean dashboard.',
      stack: ['Python', 'Data Analytics', 'NDVI Processing', 'Dashboard UI', 'Image Analysis'],
      architecture: 'Python Geospatial Processing + Chart.js Visualization + Cloud Storage',
      teamSize: '2 Data Engineers, 1 Frontend Developer',
      timeline: '5 Weeks',
      roi: 'Top-spot Regional Ranking for AgriTech Crop Dashboards',
      challenge: 'Dynamic vegetation dashboards are gated and use sensitive customer data, restricting open-web indexing of proprietary AgriTech innovations.',
      seoSolution: 'Created a public-facing research hub detailing crop health methodology and NDVI indicators, structured with FAQ schemas for search snippets.',
      seoImpact: 'Captured top-spot rankings for agricultural dashboards and crop health monitoring development Chennai.'
    },
    {
      title: 'Conceptra AI', category: 'EdTech / AI', year: '2026',
      abbreviation: 'CAI', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 100%)',
      systemLog: 'LLM // OPEN_AI', seoMetric: 'RICH SNIP',
      desc: 'An AI-powered student learning platform with chapter-wise guidance, intelligent problem solving, and exam preparation.',
      fullDesc: 'Conceptra AI is a next-generation AI-powered learning platform built specifically for students. It leverages advanced AI to enable chapter-wise guided learning, intelligent problem-solving assistance, and AI-proctored exam preparation.',
      stack: ['Angular', 'Python', 'OpenAI', 'FastAPI', 'MongoDB'],
      architecture: 'Angular Web App + OpenAI RAG Vector Pipeline + FastAPI Backend',
      teamSize: '3 AI & Web Engineers',
      timeline: '8 Weeks',
      roi: '+320% Organic Signups Growth via Google Rich Snippets',
      challenge: 'Competing against highly-funded EdTech organizations with massive authority in search engines makes visibility for new platforms extremely hard.',
      seoSolution: 'Engineered search-optimized public study nodes for curriculum topics, optimized core web vitals for speed, and injected Course schemas.',
      seoImpact: 'Boosted organic search traffic and user signups by 320% via Google Rich Snippet placements on high-search academic queries.'
    }
  ];

  filteredProjects = [...this.allProjects];

  setCategory(cat: string) {
    this.activeCategory = cat;
    this.filterProjects();
  }

  filterProjects() {
    this.filteredProjects = this.allProjects.filter(p => {
      const matchesCat = this.activeCategory === 'All' || p.category === this.activeCategory;
      const matchesSearch = !this.searchQuery ||
        p.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.architecture.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.stack.some(t => t.toLowerCase().includes(this.searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }

  openModal(project: any) {
    this.selectedProject = project;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    this.selectedProject = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
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
