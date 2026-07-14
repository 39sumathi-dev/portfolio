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
            <span class="section-label">Our Portfolio</span>
            <h1>Projects That <span class="gradient-text">Define Excellence</span></h1>
            <p>Explore our portfolio of transformative digital projects — each one a testament to our commitment to quality, innovation, and business impact.</p>
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
                     placeholder="Search projects..." class="search-input" id="project-search"/>
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
                  <button class="view-btn">View Project</button>
                </div>
              </div>
              <div class="pc-content">
                <div class="pc-meta">
                  <span class="badge">{{ p.category }}</span>
                  <span class="pc-year">{{ p.year }}</span>
                </div>
                <h3 class="pc-title">{{ p.title }}</h3>
                <p class="pc-desc">{{ p.desc }}</p>
                <div class="pc-stack">
                  <span class="stack-badge" *ngFor="let t of p.stack.slice(0,3)">{{ t }}</span>
                  <span class="stack-badge" *ngIf="p.stack.length > 3">+{{ p.stack.length - 3 }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="no-results" *ngIf="filteredProjects.length === 0">
            <span class="no-results-icon">🔍</span>
            <p>No projects found. Try a different search or category.</p>
          </div>
        </div>
      </section>

      <!-- Project Modal -->
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
            <div class="modal-stack">
              <strong>Tech Stack:</strong>
              <div class="stack-row">
                <span class="stack-badge" *ngFor="let t of selectedProject!.stack">{{ t }}</span>
              </div>
            </div>
            <!-- Case Study & SEO Solution Section -->
            <div class="modal-case-study" *ngIf="selectedProject!.challenge">
              <h3>Case Study & SEO Solution</h3>
              <div class="case-study-details">
                <div class="cs-block">
                  <div class="cs-label">Challenge:</div>
                  <div class="cs-text">{{ selectedProject!.challenge }}</div>
                </div>
                <div class="cs-block">
                  <div class="cs-label">SEO Solution & Strategy:</div>
                  <div class="cs-text">{{ selectedProject!.seoSolution }}</div>
                </div>
                <div class="cs-block highlight">
                  <div class="cs-label text-accent">SEO Impact & Results:</div>
                  <div class="cs-text font-accent">{{ selectedProject!.seoImpact }}</div>
                </div>
              </div>
            </div>
            <div class="modal-actions">
              <a *ngIf="selectedProject!.liveUrl" [href]="selectedProject!.liveUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Live Preview
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:6px"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a *ngIf="!selectedProject!.liveUrl" class="btn btn-primary" style="opacity:0.45;cursor:not-allowed;pointer-events:none;">Coming Soon</a>
              <a routerLink="/contact" class="btn btn-outline" (click)="closeModal()">Similar Project?</a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <section class="section-sm text-center">
        <div class="container">
          <h2 class="reveal">Want a Project Like These? <span class="gradient-text">Let's Build It!</span></h2>
          <p class="reveal" style="color: var(--text-secondary); margin: 1rem auto 2rem; max-width: 500px;">Tell us about your project and we'll create something even better for you.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Start Your Project</a>
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
      fullDesc: 'Developed a fully functional clothing e-commerce website with a modern, mobile-first UI. Built a product catalog with support for multiple images, custom sizing, and measurement inputs. Integrated Razorpay for secure payment processing and order confirmation. Enabled real-time order tracking using third-party tracking IDs. Designed responsive layouts for seamless UX across mobile, tablet, and desktop views. Set up backend APIs using FastAPI to handle product listings, cart management, and orders. Utilized Cloudinary for optimized image storage and fast delivery. Used MongoDB Atlas as a scalable NoSQL database. Implemented user session management and cart persistence using localStorage. Containerized the backend using Docker for CI/CD integration.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'Docker', 'Razorpay', 'Cloudinary', 'GitHub Actions'],
      liveUrl: 'https://myhacouture.com',
      challenge: 'Transitioning an offline boutique to a high-scale online storefront with rich visual catalogs without affecting page loading speed and mobile SEO rankings.',
      seoSolution: 'Leveraged Angular SSR for immediate page loads, optimized media delivery via Cloudinary WebP format, and integrated granular Product Schema markup.',
      seoImpact: 'Achieved a 98% Google PageSpeed score, driving a 140% growth in organic search traffic and 3x conversion rates.'
    },
    {
      title: 'The Wooden Castle', category: 'E-Commerce', year: '2026',
      abbreviation: 'TWC', gradient: 'linear-gradient(135deg, rgba(217,119,6,0.2) 0%, rgba(217,119,6,0.05) 100%)',
      systemLog: 'CDN // R2_STORE', seoMetric: 'JSON-LD',
      desc: 'A modern responsive furniture e-commerce site with dynamic catalog, price customization, and SEO optimization.',
      fullDesc: 'Developed a modern, responsive frontend using Angular and a scalable backend using FastAPI with MongoDB for product and order management. Features include a dynamic product catalog with categories, filters, and image carousels; real-time price calculation based on customizations; a responsive mobile-first UI inspired by premium fashion brands; a complete shopping cart and checkout workflow; cloud image management with Cloudflare R2; SEO optimization with schema markup; and production deployment with custom domain, SSL, and full backend/frontend integration.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'R2 Storage', 'SEO', 'Schema Markup'],
      liveUrl: 'https://thewoodencastle.com',
      challenge: 'Dynamic pricing engines and dynamic custom options created massive Javascript executions, leading to slow rendering times and poor search indexing.',
      seoSolution: 'Injected static metadata headers, deployed assets onto Cloudflare R2 CDN, and structured recursive JSON-LD schemas with pricing and review nesting.',
      seoImpact: 'Reduced Time-To-First-Byte (TTFB) by 60%, resulting in a 40% jump in keyword rankings on page-one search results.'
    },
    {
      title: 'CCTC Industrial ERP & Logistics Portal', category: 'ERP Systems', year: '2026',
      abbreviation: 'CCTC', gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 100%)',
      systemLog: 'B2B // ENTERPRISE', seoMetric: 'SEO TARGET',
      desc: 'A custom cloud-based ERP and logistics management application built for Coimbatore Cotton & Textiles Consortium to automate high-volume manufacturing.',
      fullDesc: 'Developed CCTC Industrial ERP & Logistics Portal, a secure enterprise application built specifically for industrial supply chain optimization. The portal provides automated inventory reconciliation, material resource tracking, shipment status updates, and regional client billing. Implemented a fast public zone utilizing server-side rendering for corporate marketing and clients portal entry. The API gateway securely integrates with the main operations database, providing seamless data flows and real-time report generations. Fully optimized for high-value B2B manufacturing keywords, locally in Coimbatore and Bengaluru regions, using structured data schemas and search-engine indexable pages.',
      stack: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'REST API', 'AWS'],
      challenge: 'Internal enterprise tools are hidden behind logins, making public marketing keywords and corporate discovery difficult to index in local B2B searches.',
      seoSolution: 'Developed a hybrid routing system with SSR-enabled public pages, optimized for regional high-value B2B manufacturing and supply-chain keywords.',
      seoImpact: 'Increased organic B2B client acquisition queries by 85% and achieved first-page ranking for industrial textile ERP queries.'
    },
    {
      title: 'Cafe Social Media Branding', category: 'Branding & Design', year: '2026',
      abbreviation: 'CSB', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)',
      systemLog: 'FIGMA // BRAND', seoMetric: 'IMG REFER',
      desc: 'A complete social media branding package with cohesive visual identity for Instagram and Facebook.',
      fullDesc: 'Delivered a complete social media branding package for a premium café. Crafted a cohesive visual identity including brand color palette, typography, logo usage guidelines, and tone of voice. Designed ready-to-use post templates, story formats, highlight cover icons, and promotional banners tailored for Instagram and Facebook. Provided a brand style guide to ensure consistency across all future digital touchpoints.',
      stack: ['Figma', 'Adobe Photoshop', 'Canva', 'Brand Strategy', 'Social Media Design'],
      challenge: 'Creative design portfolios rely almost entirely on images, leading to thin text content issues that fail to rank for branding and design queries.',
      seoSolution: 'Created rich visual case studies paired with semantic text descriptions, detailed Alt tags, and CreativeWork portfolio schema definitions.',
      seoImpact: 'Drove a 75% increase in image-search referral traffic and secured first-page rankings for local design keywords.'
    },
    {
      title: 'MechaGrip App', category: 'AI & Robotics', year: '2025',
      abbreviation: 'MGA', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)',
      systemLog: 'AI // ROBOTICS', seoMetric: 'STATIC PRE',
      desc: 'A human-robot interaction interface for physical tic-tac-toe powered by reinforcement learning and computer vision.',
      fullDesc: 'MechaGrip App is an innovative human-robot interaction system combining reinforcement learning, computer vision, and robotics to create an engaging physical gaming experience. Players compete against an AI-powered robotic arm in classic tic-tac-toe using physical game pieces. The interface bridges the digital and physical worlds, providing real-time camera feeds, game state visualization, and insights into the robot\'s decision-making process through Q-value displays. Designed for both entertainment and educational value.',
      stack: ['Python', 'Reinforcement Learning', 'Computer Vision', 'Robotics', 'Q-Learning'],
      challenge: 'Websocket-driven SPAs are indexed as blank pages by search bots that fail to wait for dynamic canvas rendering and physical robot feeds.',
      seoSolution: 'Built pre-rendered diagnostics zones and technical documentation nodes detailing the reinforcement learning models with deep link optimization.',
      seoImpact: 'Ranked #3 globally for "reinforcement learning physical game interfaces", sparking high B2B and research interest.'
    },
    {
      title: 'Plant Health App', category: 'AgriTech', year: '2025',
      abbreviation: 'PHA', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)',
      systemLog: 'IOT // NDVI_MAP', seoMetric: 'FAQ SCHEMA',
      desc: 'An advanced plant health monitoring platform with NDVI mapping, soil analytics, and multi-zone dashboards.',
      fullDesc: 'Plant Health App is an advanced agricultural monitoring platform designed for agricultural professionals, researchers, and greenhouse operators. Delivers real-time environmental data analysis, NDVI vegetation mapping, and comprehensive soil analytics through a clean, data-centric dashboard. Features an improved upload-to-report flow for plant health monitoring, multi-zone crop comparison, and clear visual indicators that translate complex sensor data into actionable insights for irrigation and nutrient management.',
      stack: ['Python', 'Data Analytics', 'NDVI Processing', 'Dashboard UI', 'Image Analysis'],
      challenge: 'Dynamic vegetation dashboards are gated and use sensitive customer data, restricting open-web indexing of proprietary AgriTech innovations.',
      seoSolution: 'Created a public-facing research hub detailing crop health methodology and NDVI indicators, structured with FAQ schemas for search snippets.',
      seoImpact: 'Captured top-spot rankings for agricultural dashboards and crop health monitoring development Chennai.'
    },
    {
      title: 'Conceptra AI', category: 'EdTech / AI', year: '2026',
      abbreviation: 'CAI', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 100%)',
      systemLog: 'LLM // OPEN_AI', seoMetric: 'RICH SNIP',
      desc: 'An AI-powered student learning platform with chapter-wise guidance, intelligent problem solving, and exam preparation.',
      fullDesc: 'Conceptra AI is a next-generation AI-powered learning platform built specifically for students. It leverages advanced AI to enable chapter-wise guided learning, intelligent problem-solving assistance, and AI-proctored exam preparation. Students can interact with an AI tutor that adapts to their learning pace, breaks down complex concepts, solves difficult problems step-by-step, and provides chapter-specific quizzes and revision aids. The platform supports personalized learning paths, real-time doubt resolution, and performance analytics to help students achieve academic excellence with AI guidance at every step.',
      stack: ['Angular', 'Python', 'OpenAI', 'FastAPI', 'MongoDB'],
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
