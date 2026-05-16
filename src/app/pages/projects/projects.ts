import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
              <a href="#" class="btn btn-primary">Live Preview</a>
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
  searchQuery = '';
  activeCategory = 'All';
  selectedProject: any = null;

  categories = ['All', 'Websites', 'ERP Systems', 'Dashboards', 'AI Applications', 'E-Commerce', 'Mobile Apps', 'UI/UX'];

  allProjects = [
    {
      title: 'MediCare ERP Platform', category: 'ERP Systems', year: '2024',
      emoji: '🏥', gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 100%)',
      desc: 'Comprehensive healthcare management system with patient records, billing, and analytics.',
      fullDesc: 'A full-featured ERP for a hospital chain covering patient management, appointment scheduling, billing, pharmacy inventory, staff HR, and real-time analytics dashboard. Handles 500+ daily patients across 3 branches.',
      stack: ['Angular', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Docker']
    },
    {
      title: 'FinanceFlow AI Dashboard', category: 'Dashboards', year: '2024',
      emoji: '📈', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 100%)',
      desc: 'Real-time financial analytics with AI-powered predictions and automated reporting.',
      fullDesc: 'A sophisticated financial analytics platform integrating with multiple banking APIs, providing real-time transaction monitoring, AI-powered anomaly detection, predictive cash flow modeling, and automated compliance reporting.',
      stack: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'D3.js', 'FastAPI']
    },
    {
      title: 'LuxeShop E-Commerce', category: 'E-Commerce', year: '2024',
      emoji: '🛍️', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)',
      desc: 'Premium multi-vendor platform with AR try-on and AI product recommendations.',
      fullDesc: 'High-end fashion e-commerce platform with multi-vendor support, AR virtual try-on using device camera, personalized AI recommendations, advanced search with visual similarity, and seamless Stripe + UPI payment integration.',
      stack: ['Next.js', 'Stripe', 'Razorpay', 'Firebase', 'TensorFlow.js', 'Node.js']
    },
    {
      title: 'TalentAI Recruitment', category: 'AI Applications', year: '2024',
      emoji: '🤖', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)',
      desc: 'AI-powered recruitment platform with resume parsing, candidate matching, and interview AI.',
      fullDesc: 'An intelligent recruitment automation platform that uses NLP to parse resumes, semantic matching to rank candidates, automated interview scheduling, and an AI interviewer that conducts initial screening conversations.',
      stack: ['Angular', 'Python', 'OpenAI', 'LangChain', 'PostgreSQL', 'Docker']
    },
    {
      title: 'StyleHub Mobile App', category: 'Mobile Apps', year: '2023',
      emoji: '📱', gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.05) 100%)',
      desc: 'Fashion discovery app with personalized style feed and one-tap purchase.',
      fullDesc: 'A cross-platform fashion app with AI-curated style feeds, outfit builder, social sharing, wishlist management, and seamless in-app purchasing with multiple payment methods. 50k+ downloads on launch.',
      stack: ['Flutter', 'Firebase', 'Node.js', 'Stripe', 'TensorFlow Lite']
    },
    {
      title: 'AgriSmart Portal', category: 'Websites', year: '2023',
      emoji: '🌾', gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.05) 100%)',
      desc: 'Agricultural marketplace connecting farmers directly to buyers with logistics integration.',
      fullDesc: 'A B2B agricultural marketplace enabling direct farmer-to-buyer transactions, real-time commodity price tracking, logistics management, IoT sensor integration for crop monitoring, and government subsidy application portal.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'IoT APIs', 'Google Maps', 'Razorpay']
    },
    {
      title: 'DesignPro UI System', category: 'UI/UX', year: '2023',
      emoji: '🎨', gradient: 'linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(239,68,68,0.05) 100%)',
      desc: 'Complete design system and component library for a fintech startup.',
      fullDesc: 'A comprehensive design system with 200+ components, tokens, interaction patterns, and design guidelines for a fintech startup. Reduced design-to-development handoff time by 60% and established visual consistency across 8 products.',
      stack: ['Figma', 'Storybook', 'React', 'TypeScript', 'Chromatic']
    },
    {
      title: 'LogiTrack Operations', category: 'ERP Systems', year: '2023',
      emoji: '🚚', gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(245,158,11,0.05) 100%)',
      desc: 'End-to-end logistics management with real-time tracking and route optimization.',
      fullDesc: 'Comprehensive logistics operations platform managing fleet of 200+ vehicles, real-time GPS tracking, AI-optimized route planning, driver performance monitoring, fuel management, and automated customer delivery notifications.',
      stack: ['Angular', 'Node.js', 'MongoDB', 'Google Maps API', 'WebSockets', 'Redis']
    },
    {
      title: 'EduLearn Platform', category: 'Websites', year: '2023',
      emoji: '📚', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(99,102,241,0.05) 100%)',
      desc: 'Online learning platform with live classes, quizzes, and AI-powered tutoring.',
      fullDesc: 'Full-featured EdTech platform with live video classes, recorded content library, adaptive quizzes with AI feedback, gamification, course completion certificates, student performance analytics, and instructor dashboard.',
      stack: ['Next.js', 'WebRTC', 'Socket.io', 'PostgreSQL', 'OpenAI', 'Stripe']
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
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }
}
