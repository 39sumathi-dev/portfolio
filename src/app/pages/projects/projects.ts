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
                <div class="pc-emoji">{{ p.emoji }}</div>
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
            <div class="modal-emoji">{{ selectedProject!.emoji }}</div>
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

  categories = ['All', 'E-Commerce', 'Healthcare', 'Branding & Design', 'AI & Robotics', 'AgriTech', 'EdTech / AI'];

  allProjects = [
    {
      title: 'Myha Couture', category: 'E-Commerce', year: '2025',
      emoji: '👗', gradient: 'linear-gradient(135deg, rgba(244,114,182,0.2) 0%, rgba(244,114,182,0.05) 100%)',
      desc: 'A fully functional clothing e-commerce platform with multi-image catalog, custom sizing, and Razorpay payments.',
      fullDesc: 'Developed a fully functional clothing e-commerce website with a modern, mobile-first UI. Built a product catalog with support for multiple images, custom sizing, and measurement inputs. Integrated Razorpay for secure payment processing and order confirmation. Enabled real-time order tracking using third-party tracking IDs. Designed responsive layouts for seamless UX across mobile, tablet, and desktop views. Set up backend APIs using FastAPI to handle product listings, cart management, and orders. Utilized Cloudinary for optimized image storage and fast delivery. Used MongoDB Atlas as a scalable NoSQL database. Implemented user session management and cart persistence using localStorage. Containerized the backend using Docker for CI/CD integration.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'Docker', 'Razorpay', 'Cloudinary', 'GitHub Actions'],
      liveUrl: 'https://myhacouture.com'
    },
    {
      title: 'The Wooden Castle', category: 'E-Commerce', year: '2026',
      emoji: '🪵', gradient: 'linear-gradient(135deg, rgba(217,119,6,0.2) 0%, rgba(217,119,6,0.05) 100%)',
      desc: 'A modern responsive furniture e-commerce site with dynamic catalog, price customization, and SEO optimization.',
      fullDesc: 'Developed a modern, responsive frontend using Angular and a scalable backend using FastAPI with MongoDB for product and order management. Features include a dynamic product catalog with categories, filters, and image carousels; real-time price calculation based on customizations; a responsive mobile-first UI inspired by premium fashion brands; a complete shopping cart and checkout workflow; cloud image management with Cloudflare R2; SEO optimization with schema markup; and production deployment with custom domain, SSL, and full backend/frontend integration.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'R2 Storage', 'SEO', 'Schema Markup'],
      liveUrl: 'https://thewoodencastle.com'
    },
    {
      title: 'James Multispeciality Dental Clinic', category: 'Healthcare', year: '2026',
      emoji: '🦷', gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 100%)',
      desc: 'A professional dental clinic website with online appointment booking, doctor profiles, and WhatsApp integration.',
      fullDesc: 'Built a professional web presence for James Multispeciality Dental Clinic featuring online appointment booking, detailed doctor profiles, and a comprehensive services listing. Integrated a persistent WhatsApp floating contact icon for improved patient engagement. Developed a Python Flask backend connected to MongoDB for appointment and doctor data management. Ensured responsive, clean UI across all device screens with SEO best practices for local business discovery.',
      stack: ['Angular', 'Flask', 'MongoDB', 'WhatsApp API', 'Python']
    },
    {
      title: 'Cafe Social Media Branding', category: 'Branding & Design', year: '2026',
      emoji: '☕', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)',
      desc: 'A complete social media branding package with cohesive visual identity for Instagram and Facebook.',
      fullDesc: 'Delivered a complete social media branding package for a premium café. Crafted a cohesive visual identity including brand color palette, typography, logo usage guidelines, and tone of voice. Designed ready-to-use post templates, story formats, highlight cover icons, and promotional banners tailored for Instagram and Facebook. Provided a brand style guide to ensure consistency across all future digital touchpoints.',
      stack: ['Figma', 'Adobe Photoshop', 'Canva', 'Brand Strategy', 'Social Media Design']
    },
    {
      title: 'MechaGrip App', category: 'AI & Robotics', year: '2025',
      emoji: '🤖', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)',
      desc: 'A human-robot interaction interface for physical tic-tac-toe powered by reinforcement learning and computer vision.',
      fullDesc: 'MechaGrip App is an innovative human-robot interaction system combining reinforcement learning, computer vision, and robotics to create an engaging physical gaming experience. Players compete against an AI-powered robotic arm in classic tic-tac-toe using physical game pieces. The interface bridges the digital and physical worlds, providing real-time camera feeds, game state visualization, and insights into the robot\'s decision-making process through Q-value displays. Designed for both entertainment and educational value.',
      stack: ['Python', 'Reinforcement Learning', 'Computer Vision', 'Robotics', 'Q-Learning']
    },
    {
      title: 'Plant Health App', category: 'AgriTech', year: '2025',
      emoji: '🌿', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)',
      desc: 'An advanced plant health monitoring platform with NDVI mapping, soil analytics, and multi-zone dashboards.',
      fullDesc: 'Plant Health App is an advanced agricultural monitoring platform designed for agricultural professionals, researchers, and greenhouse operators. Delivers real-time environmental data analysis, NDVI vegetation mapping, and comprehensive soil analytics through a clean, data-centric dashboard. Features an improved upload-to-report flow for plant health monitoring, multi-zone crop comparison, and clear visual indicators that translate complex sensor data into actionable insights for irrigation and nutrient management.',
      stack: ['Python', 'Data Analytics', 'NDVI Processing', 'Dashboard UI', 'Image Analysis']
    },
    {
      title: 'Conceptra AI', category: 'EdTech / AI', year: '2026',
      emoji: '🧠', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 100%)',
      desc: 'An AI-powered student learning platform with chapter-wise guidance, intelligent problem solving, and exam preparation.',
      fullDesc: 'Conceptra AI is a next-generation AI-powered learning platform built specifically for students. It leverages advanced AI to enable chapter-wise guided learning, intelligent problem-solving assistance, and AI-proctored exam preparation. Students can interact with an AI tutor that adapts to their learning pace, breaks down complex concepts, solves difficult problems step-by-step, and provides chapter-specific quizzes and revision aids. The platform supports personalized learning paths, real-time doubt resolution, and performance analytics to help students achieve academic excellence with AI guidance at every step.',
      stack: ['Angular', 'Python', 'OpenAI', 'FastAPI', 'MongoDB']
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
