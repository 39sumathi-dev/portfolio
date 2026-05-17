import { Component, OnInit, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(private cdr: ChangeDetectorRef) { }
  // Typewriter
  typewriterText = '';
  private texts = ['Web Development', 'AI Automation', 'ERP Systems', 'Mobile Apps', 'UI/UX Design', 'E-Commerce'];
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeInterval: any;

  // Counters
  counters = [
    { label: 'Projects Completed', value: 0, target: 15, suffix: '+', icon: '🚀' },
    { label: 'Clients Served', value: 0, target: 20, suffix: '+', icon: '🤝' },
    { label: 'Years of Experience', value: 0, target: 3, suffix: '+', icon: '⭐' },
    { label: 'Technologies Used', value: 0, target: 20, suffix: '+', icon: '💻' }
  ];
  private counterInterval: any;
  private counterStarted = false;

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
      emoji: '👗'
    },
    {
      title: 'The Wooden Castle',
      category: 'E-Commerce',
      desc: 'A modern responsive furniture e-commerce site with dynamic product catalog, real-time price customization, image carousels, SEO optimization, and cloud image management.',
      stack: ['Angular', 'FastAPI', 'MongoDB', 'R2 Storage', 'SEO'],
      color: '#d97706',
      emoji: '🪵'
    },
    {
      title: 'James Multispeciality Dental Clinic',
      category: 'Healthcare',
      desc: 'A professional dental clinic website featuring online appointment booking, doctor profiles, service listings, WhatsApp integration, and a Flask-powered backend with MongoDB.',
      stack: ['Angular', 'Flask', 'MongoDB', 'WhatsApp API'],
      color: '#06b6d4',
      emoji: '🦷'
    },
    {
      title: 'Cafe Social Media Branding',
      category: 'Branding & Design',
      desc: 'A complete social media branding package for a café — cohesive visual identity, post templates, story designs, and brand guidelines crafted for Instagram and Facebook.',
      stack: ['Figma', 'Photoshop', 'Canva', 'Brand Strategy'],
      color: '#f59e0b',
      emoji: '☕'
    },
    {
      title: 'MechaGrip App',
      category: 'AI & Robotics',
      desc: 'A human-robot interaction interface for physical tic-tac-toe gameplay powered by reinforcement learning and computer vision, with real-time Q-value visualization and multi-camera feeds.',
      stack: ['Python', 'Reinforcement Learning', 'Computer Vision', 'Robotics'],
      color: '#8b5cf6',
      emoji: '🤖'
    },
    {
      title: 'Plant Health App',
      category: 'AgriTech',
      desc: 'An advanced plant health monitoring platform with NDVI vegetation mapping, real-time environmental analytics, soil analytics, and multi-zone crop health dashboards for agricultural professionals.',
      stack: ['Python', 'Data Analytics', 'NDVI', 'Dashboard UI'],
      color: '#10b981',
      emoji: '🌿'
    },
    {
      title: 'Conceptra AI',
      category: 'EdTech / AI',
      desc: 'An AI-powered learning platform for students — chapter-wise AI guidance, intelligent problem solving, exam preparation, and personalized learning assistance powered by advanced AI.',
      stack: ['Angular', 'Python', 'OpenAI', 'FastAPI', 'MongoDB'],
      color: '#6366f1',
      emoji: '🧠'
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
    { name: 'Rahul Sharma', role: 'CEO, TechVentures India', text: 'Conceptra Labs transformed our legacy system into a modern, AI-powered platform. The team\'s expertise and attention to detail is unmatched. Our efficiency increased by 300%!', rating: 5, avatar: 'RS' },
    { name: 'Priya Patel', role: 'Founder, GreenLeaf Organics', text: 'Our e-commerce revenue tripled after they rebuilt our platform. The UX is stunning, and the checkout conversion rate jumped to 8%. Best investment ever!', rating: 5, avatar: 'PP' },
    { name: 'Arjun Mehta', role: 'CTO, FinanceFlow', text: 'The AI dashboard they built gives us real-time insights we never had before. The data visualization is incredible. Highly recommend Conceptra Labs!', rating: 5, avatar: 'AM' }
  ];
  activeTestimonial = 0;
  private testimonialInterval: any;

  private observer!: IntersectionObserver;

  ngOnInit() {
    this.startTypewriter();
    this.startTestimonialRotation();
  }

  ngAfterViewInit() {
    this.setupScrollReveal();
    this.setupCounterObserver();
  }

  ngOnDestroy() {
    clearInterval(this.typeInterval);
    clearInterval(this.counterInterval);
    clearInterval(this.testimonialInterval);
    if (this.observer) this.observer.disconnect();
  }

  private startTypewriter() {
    this.typeInterval = setInterval(() => {
      const currentText = this.texts[this.textIndex];

      if (this.isDeleting) {
        this.typewriterText = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;

        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.textIndex = (this.textIndex + 1) % this.texts.length;
        }
      } else {
        this.typewriterText = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;

        if (this.charIndex === currentText.length) {
          setTimeout(() => { this.isDeleting = true; this.cdr.markForCheck(); }, 1800);
        }
      }
      this.cdr.markForCheck();
    }, 80);
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

  private setupCounterObserver() {
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
