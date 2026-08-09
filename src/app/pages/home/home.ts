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


  // Counters
  counters = [
    { label: 'Projects Completed', value: 0, target: 15, suffix: '+', icon: '🚀' },
    { label: 'Clients Served', value: 0, target: 20, suffix: '+', icon: '🤝' },
    { label: 'Years of Experience', value: 0, target: 2, suffix: '+', icon: '⭐' },
    { label: 'Technologies Used', value: 0, target: 20, suffix: '+', icon: '💻' }
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

  // Services
  services = [
    { icon: '🌐', title: 'Web Development', desc: 'Stunning, high-performance websites built with modern frameworks and clean code.', color: '#6366f1' },
    { icon: '📱', title: 'App Development', desc: 'Cross-platform mobile applications delivering seamless user experiences.', color: '#06b6d4' },
    { icon: '⚡', title: 'Full Stack Development', desc: 'End-to-end development from database architecture to polished frontends.', color: '#8b5cf6' },
    { icon: '🏭', title: 'ERP Systems', desc: 'Custom enterprise resource planning systems for operational excellence.', color: '#f59e0b' },
    { icon: '🤖', title: 'AI Automation', desc: 'Intelligent automation solutions powered by cutting-edge AI and machine learning.', color: '#10b981' },
    { icon: '🛒', title: 'E-Commerce', desc: 'Conversion-optimized online stores with seamless payment integration.', color: '#ef4444' },
    { icon: '📊', title: 'Dashboard Development', desc: 'Real-time analytics dashboards providing actionable business insights.', color: '#06b6d4' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'User-centered designs that captivate audiences and drive conversions.', color: '#6366f1' },
    { icon: '🧠', title: 'AI Web Applications', desc: 'Smart web apps with AI capabilities — chatbots, recommendations, and more.', color: '#8b5cf6' },
    { icon: '💼', title: 'Portfolio Development', desc: 'Professional digital portfolios that make lasting first impressions.', color: '#f59e0b' }
  ];

  // Why Us
  whyUs = [
    { icon: '🎯', title: 'Business-Focused Solutions', desc: 'Every line of code serves a business purpose. We build technology that drives revenue.' },
    { icon: '🏗️', title: 'Scalable Architecture', desc: 'Systems designed to grow with your business — from startup to enterprise scale.' },
    { icon: '💎', title: 'Premium UI/UX', desc: 'Interfaces that wow users and keep them coming back for more.' },
    { icon: '⚡', title: 'Fast Delivery', desc: 'Agile methodology ensuring quick turnarounds without compromising quality.' },
    { icon: '🤖', title: 'AI-Powered Solutions', desc: 'Leverage the power of AI to automate, optimize, and scale your operations.' },
    { icon: '🔄', title: 'End-to-End Development', desc: 'From concept to deployment — we handle everything, so you can focus on business.' }
  ];

  // Featured Projects
  projects = [
    {
      title: 'Myha Couture',
      category: 'E-Commerce',
      desc: 'A fully functional clothing e-commerce platform with multi-image product catalog, custom sizing, Razorpay payments, real-time order tracking, and a containerized FastAPI backend.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'Docker', 'Razorpay', 'Cloudinary'],
      color: '#f472b6',
      abbreviation: 'MHC',
      systemLog: 'DEPLOY // CLOUDINARY',
      seoMetric: '98% SPEED',
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
      systemLog: 'CDN // R2_STORE',
      seoMetric: 'JSON-LD',
      challenge: 'Dynamic pricing engines and dynamic custom options created massive Javascript executions, leading to slow rendering times and poor search indexing.',
      seoSolution: 'Injected static metadata headers, deployed assets onto Cloudflare R2 CDN, and structured recursive JSON-LD schemas with pricing and review nesting.',
      seoImpact: 'Reduced Time-To-First-Byte (TTFB) by 60%, resulting in a 40% jump in keyword rankings on page-one search results.',
      showCaseStudy: false
    },
    {
      title: 'CCTC Industrial ERP & Logistics Portal',
      category: 'ERP Systems',
      desc: 'A custom cloud-based ERP and supply chain application built for Coimbatore Cotton & Textiles Consortium to automate high-volume manufacturing, inventory tracking, and client billing.',
      stack: ['Angular', 'Node.js', 'PostgreSQL', 'Docker', 'REST API', 'AWS'],
      color: '#06b6d4',
      abbreviation: 'CCTC',
      systemLog: 'B2B // ENTERPRISE',
      seoMetric: 'SEO TARGET',
      challenge: 'Internal enterprise tools are hidden behind logins, making public marketing keywords and corporate discovery difficult to index in local B2B searches.',
      seoSolution: 'Developed a hybrid routing system with SSR-enabled public pages, optimized for regional high-value B2B manufacturing and supply-chain keywords.',
      seoImpact: 'Increased organic B2B client acquisition queries by 85% and achieved first-page ranking for industrial textile ERP queries.',
      showCaseStudy: false
    },
    {
      title: 'Cafe Social Media Branding',
      category: 'Branding & Design',
      desc: 'A complete social media branding package for a café — cohesive visual identity, post templates, story designs, and brand guidelines crafted for Instagram and Facebook.',
      stack: ['Figma', 'Photoshop', 'Canva', 'Brand Strategy'],
      color: '#f59e0b',
      abbreviation: 'CSB',
      systemLog: 'FIGMA // BRAND',
      seoMetric: 'IMG REFER',
      challenge: 'Creative design portfolios rely almost entirely on images, leading to thin text content issues that fail to rank for branding and design queries.',
      seoSolution: 'Created rich visual case studies paired with semantic text descriptions, detailed Alt tags, and CreativeWork portfolio schema definitions.',
      seoImpact: 'Drove a 75% increase in image-search referral traffic and secured first-page rankings for local design keywords.',
      showCaseStudy: false
    },
    {
      title: 'MechaGrip App',
      category: 'AI & Robotics',
      desc: 'A human-robot interaction interface for physical tic-tac-toe gameplay powered by reinforcement learning and computer vision, with real-time Q-value visualization and multi-camera feeds.',
      stack: ['Python', 'Reinforcement Learning', 'Computer Vision', 'Robotics'],
      color: '#8b5cf6',
      abbreviation: 'MGA',
      systemLog: 'AI // ROBOTICS',
      seoMetric: 'STATIC PRE',
      challenge: 'Websocket-driven SPAs are indexed as blank pages by search bots that fail to wait for dynamic canvas rendering and physical robot feeds.',
      seoSolution: 'Built pre-rendered diagnostics zones and technical documentation nodes detailing the reinforcement learning models with deep link optimization.',
      seoImpact: 'Ranked #3 globally for "reinforcement learning physical game interfaces", sparking high B2B and research interest.',
      showCaseStudy: false
    },
    {
      title: 'Plant Health App',
      category: 'AgriTech',
      desc: 'An advanced plant health monitoring platform with NDVI vegetation mapping, real-time environmental analytics, soil analytics, and multi-zone crop health dashboards for agricultural professionals.',
      stack: ['Python', 'Data Analytics', 'NDVI', 'Dashboard UI'],
      color: '#10b981',
      abbreviation: 'PHA',
      systemLog: 'IOT // NDVI_MAP',
      seoMetric: 'FAQ SCHEMA',
      challenge: 'Dynamic vegetation dashboards are gated and use sensitive customer data, restricting open-web indexing of proprietary AgriTech innovations.',
      seoSolution: 'Created a public-facing research hub detailing crop health methodology and NDVI indicators, structured with FAQ schemas for search snippets.',
      seoImpact: 'Captured top-spot rankings for agricultural dashboards and crop health monitoring development Chennai.',
      showCaseStudy: false
    },
    {
      title: 'Conceptra AI',
      category: 'EdTech / AI',
      desc: 'An AI-powered learning platform for students — chapter-wise AI guidance, intelligent problem solving, exam preparation, and personalized learning assistance powered by advanced AI.',
      stack: ['Angular', 'Python', 'OpenAI', 'FastAPI', 'MongoDB'],
      color: '#6366f1',
      abbreviation: 'CAI',
      systemLog: 'LLM // OPEN_AI',
      seoMetric: 'RICH SNIP',
      challenge: 'Competing against highly-funded EdTech organizations with massive authority in search engines makes visibility for new platforms extremely hard.',
      seoSolution: 'Engineered search-optimized public study nodes for curriculum topics, optimized core web vitals for speed, and injected Course schemas.',
      seoImpact: 'Boosted organic search traffic and user signups by 320% via Google Rich Snippet placements on high-search academic queries.',
      showCaseStudy: false
    }
  ];

  // Process Steps
  processSteps = [
    { number: '01', title: 'Discovery', desc: 'Understanding your vision, goals, and technical requirements through in-depth consultation.', icon: '🔍' },
    { number: '02', title: 'Planning', desc: 'Creating a detailed project roadmap, tech stack selection, and timeline estimation.', icon: '📋' },
    { number: '03', title: 'Design', desc: 'Crafting stunning wireframes and pixel-perfect UI/UX designs that align with your brand.', icon: '🎨' },
    { number: '04', title: 'Development', desc: 'Agile development sprints with regular check-ins, code reviews, and quality assurance.', icon: '💻' },
    { number: '05', title: 'Testing', desc: 'Comprehensive testing across devices, browsers, and performance benchmarks.', icon: '🧪' },
    { number: '06', title: 'Deploy & Support', desc: 'Smooth deployment to production with ongoing maintenance and 24/7 support.', icon: '🚀' }
  ];

  // Testimonials
  testimonials = [
    {
      name: 'The Wooden Castle',
      role: '',
      text: 'It was a wonderful experience working with you on my website. You were extremely patient in understanding my requirements, listening to every detail, and incorporating my ideas thoughtfully. The final website turned out exactly how I envisioned it. Your professionalism, creativity, and dedication throughout the process were truly appreciated. Highly recommended!\n\nThank you',
      rating: 5,
      avatar: 'WC'
    },
    {
      name: 'Sandeep Verma',
      role: '',
      text: 'Outstanding work on our custom inventory dashboard. The team was highly professional and built exactly what we needed to keep track of our supplies. Highly recommended for any complex dashboard projects.',
      rating: 5,
      avatar: 'SV'
    },
    {
      name: 'Meera Nair',
      role: '',
      text: 'Conceptra Labs built our boutique fashion store. They listened to all of our custom requests, design ideas, and payment gateway queries, executing them flawlessly. Great support even after launch.',
      rating: 5,
      avatar: 'MN'
    },
    {
      name: 'Aditya Krishnan',
      role: '',
      text: 'Excellent communication and clean codebase. They delivered our clinic management application on time and handled our WhatsApp scheduling API integration smoothly. Very satisfied with their service.',
      rating: 5,
      avatar: 'AK'
    },
    {
      name: 'Divya Rao',
      role: '',
      text: 'We hired them for automation of our business workflows. They integrated smart bots that saved us hours of daily manual entry. Professional, patient, and very talented developers.',
      rating: 5,
      avatar: 'DR'
    }
  ];
  activeTestimonial = 0;
  private testimonialInterval: any;

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
    }, 5000);
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
