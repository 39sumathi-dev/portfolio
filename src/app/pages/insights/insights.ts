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

  categories = ['All', 'AI & Automation', 'ERP Architecture', 'Web Engineering', 'Cloud & DevOps'];

  articles: Article[] = [
    {
      id: 'rag-llm-guide',
      title: 'Building Production-Grade RAG Chatbots with LangChain & Node.js',
      slug: 'building-production-rag-chatbots-langchain-nodejs',
      category: 'AI & Automation',
      date: 'August 24, 2026',
      readTime: '6 min read',
      author: 'Karthik Raja — Head of AI Systems',
      gradient: 'linear-gradient(135deg, rgba(139,92,246,0.2) 0%, rgba(6,182,212,0.1) 100%)',
      featured: true,
      summary: 'How to architect enterprise vector search databases, handle document chunking strategies, and optimize context window trimming to achieve 99.4% factual precision.',
      tags: ['LangChain', 'Node.js', 'Vector DB', 'RAG', 'LLMs'],
      content: [
        'Retrieval-Augmented Generation (RAG) has emerged as the industry standard for eliminating LLM hallucinations in enterprise web applications.',
        'At Conceptra Labs, when building knowledge assistants for enterprise clients, we implement a hybrid vector-keyword retrieval approach using Pinecone / PostgreSQL pgvector alongsideBM25 keyword re-ranking.',
        'Document Chunking Strategy: Rather than arbitrary character-length splits, we split documents hierarchically by semantic headers and markdown structure. This preserves document context for embedding vectors.',
        'Context Trimming & Re-Ranking: Feeding 50 search results directly into an OpenAI or Claude prompt inflates token latency. We use Cohere ReRank to select only the top 3-5 most pertinent chunks before inference.',
        'System Verification: By implementing strict threshold scores and source attribution links, client chatbots can state "Information not present in knowledge base" instead of inventing answers.'
      ]
    },
    {
      id: 'school-erp-microservices',
      title: 'Modernizing Legacy School Systems: A Microservices Approach',
      slug: 'modernizing-legacy-school-systems-microservices',
      category: 'ERP Architecture',
      date: 'July 18, 2026',
      readTime: '8 min read',
      author: 'Suraj PS — Lead Architect',
      gradient: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(245,158,11,0.1) 100%)',
      featured: false,
      summary: 'Migrating legacy monolithic school software to cloud-native PostgreSQL clusters with real-time automated WhatsApp payment triggers.',
      tags: ['School ERP', 'Microservices', 'PostgreSQL', 'WhatsApp API', 'Node.js'],
      content: [
        'Educational institutions frequently operate on legacy desktop software or fragile PHP monoliths that freeze during annual fee collection peak rushes.',
        'We redesigned traditional school management into decoupled microservices: Fee & Billing Service, Attendance Tracker, Student Exam Records, and Communication Engine.',
        'High-Availability PostgreSQL: Fee transactions run on isolated PostgreSQL read-replica clusters, ensuring fee payments complete even during high-concurrency admission deadlines.',
        'Automated WhatsApp API Notifications: Replacing costly SMS gateways, fee receipts, daily attendance alerts, and exam report cards are pushed instantly to parents\' mobile WhatsApp apps.',
        'Result: Zero system downtime during quarterly fee collection peaks and 94% faster parent query resolution.'
      ]
    },
    {
      id: 'angular-ssr-performance',
      title: 'Sub-Second Angular SSR Performance Optimization Guide',
      slug: 'sub-second-angular-ssr-performance-optimization-guide',
      category: 'Web Engineering',
      date: 'June 12, 2026',
      readTime: '5 min read',
      author: 'Ananya Sen — Lead Product Engineer',
      gradient: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(99,102,241,0.1) 100%)',
      featured: false,
      summary: 'Key architectural techniques for achieving 95+ Google Lighthouse Core Web Vitals on complex B2B web applications.',
      tags: ['Angular', 'SSR', 'Core Web Vitals', 'PageSpeed', 'Performance'],
      content: [
        'Heavy client-side Javascript bundles slow down Time-To-Interactive (TTI) and undermine SEO rankings on search engines.',
        'By combining Angular Server-Side Rendering (SSR) with hydration strategies, public pages render complete static HTML in sub-100ms while retaining dynamic interactivity.',
        'Asset Edge Caching: Deleting heavy image payloads from main servers and delivering WebP formats through Cloudflare R2 / Cloudinary reduces Time-To-First-Byte (TTFB) dramatically.',
        'Font & Critical CSS Inlining: Inlining Google Fonts and critical styling directly into the initial HTML payload prevents FOIT (Flash of Unstyled Text) and cumulative layout shifts.',
        'Result: 98% Google PageSpeed scores across mobile and desktop devices, directly boosting search conversion metrics.'
      ]
    },
    {
      id: 'cloud-devops-security',
      title: 'OWASP Security & Automated CI/CD Pipelines for B2B Apps',
      slug: 'owasp-security-automated-cicd-pipelines-b2b',
      category: 'Cloud & DevOps',
      date: 'May 28, 2026',
      readTime: '7 min read',
      author: 'Vikram Sundaram — Cloud Ops Lead',
      gradient: 'linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(139,92,246,0.1) 100%)',
      featured: false,
      summary: 'Implementing automated Docker container vulnerability scans, TLS 1.3 encryption, and GitHub Actions CI/CD workflows.',
      tags: ['Docker', 'CI/CD', 'OWASP', 'DevOps', 'Security'],
      content: [
        'Security should never be an afterthought bolted on right before launching a product. In modern software engineering, automated security checks must gate every code commit.',
        'We enforce automated GitHub Actions workflows that run static code analysis (SonarQube) and container vulnerability scanning (Trivy) before any staging or production build.',
        'Zero-Downtime Deployments: Containerized Docker services run on AWS Elastic Container Service (ECS) with rolling updates, ensuring continuous zero-downtime releases.',
        'Data Encryption Standards: AES-256 encryption at rest for databases and TLS 1.3 in transit prevent unauthorized eavesdropping or token leakage.'
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
