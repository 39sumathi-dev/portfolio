import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  tags: string[];
  gradient: string;
  featured: boolean;
}

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './insights.html',
  styleUrls: ['./insights.scss']
})
export class InsightsComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  searchQuery = '';
  selectedCategory = 'All';
  selectedArticle: Article | null = null;

  categories = ['All', 'Web Engineering', 'Enterprise ERP', 'Business Automation', 'Cloud & Performance'];

  articles: Article[] = [
    {
      id: 'angular-ssr-architecture',
      title: 'Architecting High-Performance B2B Web Applications with Angular SSR',
      slug: 'architecting-high-performance-b2b-web-applications-angular-ssr',
      category: 'Web Engineering',
      date: '2026',
      readTime: '5 min read',
      author: 'Conceptra Technical Team',
      gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(6,182,212,0.1) 100%)',
      featured: true,
      summary: 'A technical overview of combining Angular Server-Side Rendering (SSR) with hydration strategies to deliver sub-second initial page loads and 95+ Core Web Vitals.',
      tags: ['Angular', 'SSR', 'TypeScript', 'Web Architecture', 'PageSpeed'],
      content: [
        'Client-rendered single-page applications often suffer from large JavaScript bundle sizes, leading to delayed Time-To-First-Byte (TTFB) and poor search engine indexing.',
        'At Conceptra Labs, we implement Server-Side Rendering (SSR) alongside non-destructive hydration. The server renders clean static HTML instantly for search engine crawlers and users, while Angular hydrates the DOM seamlessly in the background.',
        'Asset CDN Caching: Media assets are served through edge CDNs (Cloudflare R2 and Cloudinary) in WebP format, significantly reducing network transfer overhead.',
        'Critical CSS Inlining: Inlining essential styles prevents Flash of Unstyled Content (FOUC) and eliminates cumulative layout shifts across desktop and mobile screens.'
      ]
    },
    {
      id: 'enterprise-erp-architecture',
      title: 'Centralizing Business Operations with Custom Cloud ERP Systems',
      slug: 'centralizing-business-operations-custom-cloud-erp',
      category: 'Enterprise ERP',
      date: '2026',
      readTime: '6 min read',
      author: 'Conceptra Technical Team',
      gradient: 'linear-gradient(135deg, rgba(245,158,11,0.2) 0%, rgba(99,102,241,0.1) 100%)',
      featured: false,
      summary: 'How custom ERP architecture unifies inventory, student records, fee collection, and billing into one secure PostgreSQL database cluster.',
      tags: ['ERP Architecture', 'PostgreSQL', 'Node.js', 'Role-Based Access', 'Data Security'],
      content: [
        'Off-the-shelf ERP software often forces businesses to compromise their unique operational workflows or pay expensive per-user licensing fees.',
        'Our custom ERP solutions decouple complex business units into modular components: Fee & Billing Engines, Inventory Sync, HR & Attendance, and Custom PDF Exports.',
        'High-Availability Database Design: We utilize PostgreSQL with transactional isolation levels and role-based access control (RBAC), ensuring sensitive financial and student data remains securely audited.',
        'Automated Reporting & Exports: Automated background workers generate nightly inventory summaries, fee collection reports, and reconciliation spreadsheets without manual data entry.'
      ]
    },
    {
      id: 'business-automation-webhooks',
      title: 'Automating Enterprise Workflows with WhatsApp API & Razorpay Webhooks',
      slug: 'automating-enterprise-workflows-whatsapp-razorpay-webhooks',
      category: 'Business Automation',
      date: '2026',
      readTime: '5 min read',
      author: 'Conceptra Technical Team',
      gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(6,182,212,0.1) 100%)',
      featured: false,
      summary: 'Eliminating manual administrative tasks by building bi-directional integrations between payment gateways, accounting software, and instant messaging channels.',
      tags: ['WhatsApp API', 'Razorpay', 'Webhooks', 'Process Automation', 'Node.js'],
      content: [
        'Manual order entry and manual receipt generation consume hundreds of operational hours every month, introducing human typing errors into accounting records.',
        'We build automated webhook listener pipelines that capture payment success triggers from gateways like Razorpay and Stripe instantly.',
        'Instant Mobile Notifications: Payment confirmations, shipping updates, and fee receipts are formatted and pushed directly to customers\' WhatsApp apps via official WhatsApp API channels.',
        'Bi-directional Accounting Sync: Data payload transformations automatically sync invoices and transaction logs with backend ERP and accounting databases.'
      ]
    },
    {
      id: 'cloud-infrastructure-devops',
      title: 'Containerization & Zero-Downtime Deployment Best Practices',
      slug: 'containerization-zero-downtime-deployment-best-practices',
      category: 'Cloud & Performance',
      date: '2026',
      readTime: '6 min read',
      author: 'Conceptra Technical Team',
      gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(239,68,68,0.1) 100%)',
      featured: false,
      summary: 'Building reliable production environments using Docker containerization, automated GitHub Actions CI/CD, and SSL security configuration.',
      tags: ['Docker', 'DevOps', 'CI/CD', 'AWS', 'Security'],
      content: [
        'Inconsistent server environments create "works on my machine" bugs during production releases. Containerization standardizes code execution across local development, staging, and production.',
        'We containerize Node.js, Python FastAPI, and database microservices using Docker, orchestrating zero-downtime rolling deployments via automated CI/CD pipelines.',
        'Security & Hardening: Environment variables are managed securely via encrypted vault keys, with mandatory TLS 1.3 encryption and automated vulnerability scanning at every build step.'
      ]
    }
  ];

  filteredArticles: Article[] = [...this.articles];

  setCategory(cat: string) {
    this.selectedCategory = cat;
    this.filterArticles();
  }

  filterArticles() {
    this.filteredArticles = this.articles.filter(a => {
      const matchCat = this.selectedCategory === 'All' || a.category === this.selectedCategory;
      const matchSearch = !this.searchQuery ||
        a.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        a.summary.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(this.searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }

  openArticle(article: Article) {
    this.selectedArticle = article;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeArticle() {
    this.selectedArticle = null;
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
