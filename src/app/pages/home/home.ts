import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  // Counters - Initial values match target so crawlers & slow connections see real stats immediately
  counters = [
    { label: 'Projects Delivered', value: 15, target: 15, suffix: '+', icon: '🚀' },
    { label: 'Happy Clients', value: 15, target: 15, suffix: '+', icon: '🤝' },
    { label: 'Client Satisfaction', value: 98, target: 98, suffix: '%', icon: '⭐' },
    { label: 'SLA Support Care', value: 24, target: 24, suffix: '/7', icon: '⚡' }
  ];
  private counterInterval: any;
  private counterStarted = false;

  // Ambient Hero Parallax Displacement
  heroTranslateX = 0;
  heroTranslateY = 0;
  private animFrameId: any;

  // Active Architecture System Node
  activeArchNodeId = 'erp';

  // Architecture System Nodes
  archNodes = [
    {
      id: 'erp',
      title: 'ERP & Operations',
      category: 'Enterprise Core',
      icon: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',
      badge: 'Core Engine',
      color: '#f59e0b',
      summary: 'Centralized enterprise resource planning connecting inventory, financials, HR, and operational workflows.',
      capabilities: [
        'Automated Fee & Billing Pipelines',
        'Real-time Inventory Sync',
        'Role-based Access Control & Auditing',
        'Custom Data Exports & PDF Reporting'
      ],
      link: '/services/school-erp-development',
      linkText: 'Explore ERP Systems'
    },
    {
      id: 'ai',
      title: 'AI & LLM Services',
      category: 'Intelligent Processing',
      icon: 'M3 3h18v18H3z M9 9h6 M9 13h6 M9 17h6',
      badge: 'AI Engine',
      color: '#8b5cf6',
      summary: 'Custom AI agents, RAG document search engines, LLM assistants, and automated data extraction pipelines.',
      capabilities: [
        'Document Parsing & Data Extraction',
        'Custom RAG Knowledge Assistants',
        'Predictive Analytics & Categorization',
        'Automated Workflow Decision Trees'
      ],
      link: '/services/ai-automation',
      linkText: 'Explore AI Automation'
    },
    {
      id: 'api',
      title: 'API & Comms Gateway',
      category: 'System Integration',
      icon: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71 M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71',
      badge: 'Integration Layer',
      color: '#06b6d4',
      summary: 'Unified API gateways bridging WhatsApp notifications, Razorpay/Stripe, CRMs, and third-party SaaS.',
      capabilities: [
        'WhatsApp & SMS Trigger Pipelines',
        'Multi-currency Payment Integration',
        'Bi-directional CRM & Accounting Sync',
        'Rate-limited Webhook Listeners'
      ],
      link: '/services/business-automation',
      linkText: 'Explore Automation'
    },
    {
      id: 'cloud',
      title: 'Cloud Systems & DB',
      category: 'High-Scale Backend',
      icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
      badge: 'Scale Infrastructure',
      color: '#6366f1',
      summary: 'Containerized microservices, PostgreSQL/MongoDB database clusters, and AWS/Docker cloud architecture.',
      capabilities: [
        'Docker Containerization & Microservices',
        'High-Availability Database Clusters',
        'Automated Backup & Failover',
        'Zero-downtime CI/CD Deployment'
      ],
      link: '/services/custom-software-development',
      linkText: 'Explore Cloud Tech'
    },
    {
      id: 'ecommerce',
      title: 'Portals & E-Commerce',
      category: 'Client Touchpoints',
      icon: 'M2 3h20v14H2z M8 21h8 M12 17v4',
      badge: 'Frontend Systems',
      color: '#10b981',
      summary: 'Ultra-fast Angular client portals, e-commerce storefronts, and cross-platform mobile app interfaces.',
      capabilities: [
        'Sub-second Page Loading & SSR',
        'Progressive Web Apps (PWA)',
        'Real-time WebSocket Live Feeds',
        'Omnichannel Mobile Synchronization'
      ],
      link: '/services/website-development',
      linkText: 'Explore Web Systems'
    }
  ];

  // Specialized Service Pillars
  servicePillars = [
    {
      pillarName: 'Enterprise Software & Systems',
      pillarTagline: 'Custom web apps, cross-platform mobile products, and specialized ERP solutions built for 100x scale.',
      color: '#6366f1',
      items: [
        { title: 'High-Performance Web Applications', desc: 'Sub-second Angular & Node.js web applications with SSR, PWA, and enterprise API architecture.', link: '/services/website-development' },
        { title: 'Native & Cross-Platform Mobile Apps', desc: '60fps iOS & Android mobile apps built with Flutter and React Native featuring offline sync.', link: '/services/mobile-app-development' },
        { title: 'Custom School & Enterprise ERPs', desc: 'Centralized cloud management for fees, inventory, billing, student records, and analytics.', link: '/services/school-erp-development' }
      ]
    },
    {
      pillarName: 'AI Agents & Business Automation',
      pillarTagline: 'RAG-powered LLMs, autonomous chatbots, document OCR parsing, and webhook integration pipelines.',
      color: '#8b5cf6',
      items: [
        { title: 'Autonomous RAG AI Assistants', desc: 'Custom-trained AI agents operating 24/7 on internal company knowledge bases to resolve queries.', link: '/services/ai-automation' },
        { title: 'Intelligent Doc & Invoice OCR', desc: 'Automated data extraction from invoices, purchase orders, and PDF documents with high accuracy.', link: '/services/ai-automation' },
        { title: 'ERP Accounting & WhatsApp Pipelines', desc: 'Bi-directional integrations linking Tally, SAP, Razorpay, and automated mobile notification alerts.', link: '/services/business-automation' }
      ]
    },
    {
      pillarName: 'Product Engineering & SLA Retainers',
      pillarTagline: 'User-centered UI/UX design systems alongside dedicated SLA support and continuous engineering sprints.',
      color: '#10b981',
      items: [
        { title: 'UI/UX Design Systems', desc: 'Pixel-perfect visual interfaces, design tokens, and rapid prototypes engineered for high conversion.', link: '/services' },
        { title: 'Managed SLA & Security Support', desc: '24/7 uptime monitoring, daily encrypted database backups, security vulnerability scans, and hotfixes.', link: '/services' },
        { title: 'Dedicated Engineering Sprints', desc: 'Flexible monthly developer capacity for continuous feature iterations and active roadmap execution.', link: '/services' }
      ]
    }
  ];

  // Why Us
  whyUs = [
    { icon: '🎯', title: 'Business-Focused Solutions', desc: 'Every line of code serves a business purpose. We build technology that drives tangible ROI.' },
    { icon: '🏗️', title: 'Scalable Architecture', desc: 'Systems designed to grow with your business — from early startup to enterprise scale.' },
    { icon: '💎', title: 'Premium UI/UX Engineering', desc: 'Interfaces that captivate users and provide seamless modern user experiences.' },
    { icon: '⚡', title: 'Agile Delivery Sprints', desc: 'Structured bi-weekly sprints ensuring quick turnarounds without compromising software quality.' },
    { icon: '🤖', title: 'Production-Grade AI Tech', desc: 'Leverage LLMs, vector databases, and automated workflows to scale your operations.' },
    { icon: '🔄', title: 'End-to-End SLA Ownership', desc: 'From architecture to deployment and 24/7 SLA maintenance — we take full responsibility.' }
  ];

  // Enhanced Featured Projects with Enterprise Metadata
  projects = [
    {
      title: 'Myha Couture',
      category: 'E-Commerce',
      desc: 'A fully functional clothing e-commerce platform with multi-image product catalog, custom sizing, Razorpay payments, real-time order tracking, and a containerized FastAPI backend.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'Docker', 'Razorpay', 'Cloudinary'],
      color: '#f472b6',
      abbreviation: 'MHC',
      timeline: '6 Weeks',
      teamSize: '3 Developers, 1 UI Designer',
      architecture: 'Angular SSR + Python FastAPI Microservice + Cloudinary WebP CDN',
      roiMetric: '+140% Organic Traffic, 3x Conversion Rate',
      systemLog: 'DEPLOY // CLOUDINARY',
      challenge: 'Transitioning an offline boutique to a high-scale online storefront with rich visual catalogs without affecting page loading speed and mobile SEO rankings.',
      seoSolution: 'Leveraged Angular SSR for immediate page loads, optimized media delivery via Cloudinary WebP format, and integrated granular Product Schema markup.',
      seoImpact: 'Achieved a 98% Google PageSpeed score, driving a 140% growth in organic search traffic and 3x conversion rates.',
      showCaseStudy: false
    },
    {
      title: 'The Wooden Castle',
      category: 'E-Commerce',
      desc: 'A modern responsive furniture e-commerce site with dynamic product catalog, real-time price customization, image carousels, SEO optimization, and cloud image management.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'R2 Storage', 'SEO'],
      color: '#d97706',
      abbreviation: 'TWC',
      timeline: '4 Weeks',
      teamSize: '2 Full-Stack Engineers',
      architecture: 'Angular PWA + Cloudflare R2 Storage + REST API',
      roiMetric: '60% TTFB Reduction, +40% First-Page Keyword Rankings',
      systemLog: 'CDN // R2_STORE',
      challenge: 'Dynamic pricing engines and dynamic custom options created massive Javascript executions, leading to slow rendering times and poor search indexing.',
      seoSolution: 'Injected static metadata headers, deployed assets onto Cloudflare R2 CDN, and structured recursive JSON-LD schemas with pricing and review nesting.',
      seoImpact: 'Reduced Time-To-First-Byte (TTFB) by 60%, resulting in a 40% jump in keyword rankings on page-one search results.',
      showCaseStudy: false
    },
    {
      title: 'CCTC Industrial ERP & Logistics Portal',
      category: 'Enterprise ERP',
      desc: 'A custom cloud-based ERP and supply chain application built for Coimbatore Cotton & Textiles Consortium to automate high-volume manufacturing, inventory tracking, and client billing.',
      stack: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'REST API', 'AWS'],
      color: '#06b6d4',
      abbreviation: 'CCTC',
      timeline: '12 Weeks',
      teamSize: '4 Senior Software Architects',
      architecture: 'Dockerized Node.js Microservices + PostgreSQL High-Availability Cluster',
      roiMetric: '85% B2B Lead Query Growth, Zero Billing Discrepancies',
      systemLog: 'B2B // ENTERPRISE',
      challenge: 'Internal enterprise tools are hidden behind logins, making public marketing keywords and corporate discovery difficult to index in local B2B searches.',
      seoSolution: 'Developed a hybrid routing system with SSR-enabled public pages, optimized for regional high-value B2B manufacturing and supply-chain keywords.',
      seoImpact: 'Increased organic B2B client acquisition queries by 85% and achieved first-page ranking for industrial textile ERP queries.',
      showCaseStudy: false
    },
    {
      title: 'Conceptra AI Platform',
      category: 'EdTech / AI',
      desc: 'An AI-powered learning platform for students — chapter-wise AI guidance, intelligent problem solving, exam preparation, and personalized learning assistance powered by advanced AI.',
      stack: ['Angular', 'Python', 'OpenAI', 'FastAPI', 'MongoDB'],
      color: '#6366f1',
      abbreviation: 'CAI',
      timeline: '8 Weeks',
      teamSize: '3 AI & Web Engineers',
      architecture: 'Angular Web Frontend + OpenAI API RAG Pipeline + FastAPI',
      roiMetric: '+320% User Signups, Top Google Snippet Rankings',
      systemLog: 'LLM // OPEN_AI',
      challenge: 'Competing against highly-funded EdTech organizations with massive authority in search engines makes visibility for new platforms extremely hard.',
      seoSolution: 'Engineered search-optimized public study nodes for curriculum topics, optimized core web vitals for speed, and injected Course schemas.',
      seoImpact: 'Boosted organic search traffic and user signups by 320% via Google Rich Snippet placements on high-search academic queries.',
      showCaseStudy: false
    }
  ];

  // Pricing Signals & Engagement Tiers
  pricingTiers = [
    {
      name: 'Fixed Scope Project',
      price: 'Starting at ₹14,999',
      badge: 'Project Delivery',
      subtitle: 'Best for specific product builds with well-defined requirements.',
      features: [
        'Dedicated UI/UX Design & Interactive Prototype',
        'Full-Stack Web or Mobile App Engineering',
        'Production Deployment on AWS / Vercel / Netlify',
        '30-Day Post-Launch SLA Warranty & Bug Fixes',
        'Complete Source Code & IP Transfer'
      ],
      popular: false,
      ctaText: 'Request Project Quote',
      ctaLink: '/contact'
    },
    {
      name: 'Continuous Sprint Retainer',
      price: 'Starting at ₹24,999 / mo',
      badge: 'Most Popular',
      subtitle: 'Dedicated developer capacity for fast-growing platforms.',
      features: [
        'Dedicated Senior Software Engineers',
        'Bi-weekly Agile Sprints & Demo Reviews',
        'Priority SLA Response (< 2 Hours)',
        'Continuous CI/CD, Automated QA & Refactoring',
        'Direct Slack & Teams Engineering Channel'
      ],
      popular: true,
      ctaText: 'Reserve Developer Sprint',
      ctaLink: '/contact'
    },
    {
      name: 'Managed SLA & Support Retainer',
      price: 'Starting at ₹4,999 / mo',
      badge: 'Peace of Mind',
      subtitle: '24/7 uptime monitoring, security updates & database care.',
      features: [
        '99.9% Application Uptime Guarantee',
        'Daily Encrypted Cloud Database Backups',
        'OWASP Vulnerability Scanning & Hotfixes',
        '24/7 Emergency Incident Resolution',
        'Monthly Performance & SEO Health Audits'
      ],
      popular: false,
      ctaText: 'Explore Support Retainers',
      ctaLink: '/contact'
    }
  ];

  // Testimonials with Verified Badges & Company Logos
  testimonials = [
    {
      name: 'The Wooden Castle',
      company: 'The Wooden Castle Furniture',
      role: 'Founder & Owner',
      verified: 'Verified Client',
      text: 'It was a wonderful experience working with Conceptra Labs on our e-commerce platform. They were extremely patient in understanding our catalog requirements, listening to every detail, and incorporating our ideas thoughtfully. The final website turned out exactly how we envisioned it. Highly recommended!',
      rating: 5,
      avatar: 'WC'
    },
    {
      name: 'Sandeep Verma',
      company: 'Apex Logistics & Warehousing',
      role: 'Operations Director',
      verified: 'Verified Client',
      text: 'Outstanding engineering on our custom inventory ERP and dispatch tracking portal. Conceptra Labs built exactly what we needed to streamline multi-warehouse operations. Their technical expertise in database architecture is top tier.',
      rating: 5,
      avatar: 'SV'
    },
    {
      name: 'Meera Nair',
      company: 'Myha Fashion Studio',
      role: 'Brand Manager',
      verified: 'Verified Client',
      text: 'Conceptra Labs built our boutique fashion storefront with custom Razorpay payment gateways and Cloudinary asset speed optimization. They executed all our custom requests flawlessly and provided excellent support after launch.',
      rating: 5,
      avatar: 'MN'
    },
    {
      name: 'Aditya Krishnan',
      company: 'HealthPulse Healthcare',
      role: 'Technical Co-Founder',
      verified: 'Verified Client',
      text: 'Clean code architecture, seamless communication, and deep reliability. They delivered our clinic management application on time and handled our automated WhatsApp scheduling API integration effortlessly.',
      rating: 5,
      avatar: 'AK'
    }
  ];
  activeTestimonial = 0;
  private testimonialInterval: any;

  // Engineering Insights Preview
  insightsPreview = [
    {
      title: 'Building Production RAG Chatbots with LangChain & Node.js',
      date: 'Aug 2026',
      readTime: '5 min read',
      category: 'AI & Automation',
      summary: 'How we architect enterprise vector search databases and context window trimming for 99.4% factual accuracy.',
      link: '/insights'
    },
    {
      title: 'Modernizing Legacy School Systems: A Microservices Approach',
      date: 'Jul 2026',
      readTime: '7 min read',
      category: 'ERP Architecture',
      summary: 'Migrating legacy monolithic school software to cloud-native PostgreSQL clusters with real-time WhatsApp triggers.',
      link: '/insights'
    },
    {
      title: 'Sub-Second Angular SSR Performance Optimization Guide',
      date: 'Jun 2026',
      readTime: '6 min read',
      category: 'Web Engineering',
      summary: 'Key techniques for achieving 95+ Google Lighthouse Core Web Vitals on complex B2B web applications.',
      link: '/insights'
    }
  ];

  // Process Steps
  processSteps = [
    { number: '01', title: 'Discovery & Audit', desc: 'Understanding your business vision, system requirements, and roadmap through in-depth engineering consultation.', icon: '🔍' },
    { number: '02', title: 'Architecture Planning', desc: 'Creating system schematics, database schemas, API contracts, and clear sprint timelines.', icon: '📋' },
    { number: '03', title: 'UI/UX Design', desc: 'Crafting pixel-perfect visual prototypes and design systems aligned with your brand guidelines.', icon: '🎨' },
    { number: '04', title: 'Agile Development', desc: 'Bi-weekly development sprints with regular progress check-ins, code reviews, and automated QA.', icon: '💻' },
    { number: '05', title: 'Security & QA Testing', desc: 'Comprehensive testing across physical devices, security vulnerability scans, and performance benchmarks.', icon: '🧪' },
    { number: '06', title: 'Deployment & SLA Care', desc: 'Production release on cloud infrastructure accompanied by ongoing SLA monitoring and maintenance.', icon: '🚀' }
  ];

  private observer!: IntersectionObserver;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startTestimonialRotation();
    }
  }

  ngAfterViewInit() {
    this.setupScrollReveal();
    this.setupCounterObserver();
  }

  ngOnDestroy() {
    clearInterval(this.counterInterval);
    clearInterval(this.testimonialInterval);
    if (this.observer) this.observer.disconnect();
    if (this.animFrameId && isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  onMouseMoveHero(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.innerWidth < 1024) return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseX = (event.clientX - windowWidth / 2) / (windowWidth / 2);
    const mouseY = (event.clientY - windowHeight / 2) / (windowHeight / 2);

    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }

    this.animFrameId = requestAnimationFrame(() => {
      this.heroTranslateX = mouseX * 8;
      this.heroTranslateY = mouseY * 8;
      this.cdr.markForCheck();
    });
  }

  setActiveArchNode(id: string) {
    this.activeArchNodeId = id;
    this.cdr.markForCheck();
  }

  get activeArchNode() {
    return this.archNodes.find(n => n.id === this.activeArchNodeId) || this.archNodes[0];
  }

  private startTestimonialRotation() {
    this.testimonialInterval = setInterval(() => {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
      this.cdr.markForCheck();
    }, 6000);
  }

  setTestimonial(index: number) {
    this.activeTestimonial = index;
  }

  private setupScrollReveal() {
    if (isPlatformBrowser(this.platformId)) {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      reveals.forEach(el => revealObserver.observe(el));
      this.observer = revealObserver;
    }
  }

  private setupCounterObserver() {
    if (isPlatformBrowser(this.platformId)) {
      const counterSection = document.querySelector('.stats-section');
      if (!counterSection) return;

      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.counterStarted) {
            this.counterStarted = true;
            this.animateCounters();
          }
        });
      }, { threshold: 0.3 });

      counterObserver.observe(counterSection);
    }
  }

  hexToRgbStr(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  }

  private animateCounters() {
    const duration = 2000;
    const startTime = Date.now();

    this.counterInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.counters.forEach(counter => {
        counter.value = Math.floor(counter.target * eased);
      });
      this.cdr.markForCheck();

      if (progress === 1) {
        clearInterval(this.counterInterval);
        this.counters.forEach(c => c.value = c.target);
        this.cdr.markForCheck();
      }
    }, 16);
  }
}
