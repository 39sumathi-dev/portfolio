import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ai-automation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="service-detail-page">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs-bar" aria-label="Breadcrumb">
        <div class="container">
          <ol class="breadcrumbs-list">
            <li class="breadcrumb-item"><a routerLink="/">Home</a> <span class="separator">/</span></li>
            <li class="breadcrumb-item"><a routerLink="/services">Services</a> <span class="separator">/</span></li>
            <li class="breadcrumb-item active" aria-current="page">AI Automation</li>
          </ol>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="service-hero">
        <div class="sh-bg"><div class="sh-orb sh-orb-1"></div><div class="sh-orb sh-orb-2"></div></div>
        <div class="container">
          <div class="sh-content reveal">
            <div class="sh-badge">
              <span class="badge-dot"></span> Next-Gen AI Automation Agency Chennai
            </div>
            <h1>Enterprise AI Automation & <span class="gradient-text">LLM Integration Company</span></h1>
            <p class="sh-desc">
              Transform manual corporate workflows with intelligent AI agents, custom ChatGPT/Gemini API integrations, automated document parsing, predictive analytics, and 24/7 autonomous customer support bots.
            </p>
            <div class="sh-actions">
              <a routerLink="/contact" class="btn btn-primary btn-lg">Book AI Feasibility Audit</a>
              <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%20want%20to%20explore%20AI%20Automation" target="_blank" rel="noopener" class="btn btn-outline btn-lg">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Overview Section -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">AI Advantage</span>
            <h2>Supercharge Enterprise Workflows With <span class="gradient-text">Artificial Intelligence</span></h2>
            <p>Artificial Intelligence is no longer a gimmick — it is an operational multiplier. Conceptra Labs integrates custom AI agents and Large Language Models (LLMs) into your existing software tools to save hundreds of hours monthly.</p>
          </div>

          <!-- Pain Points Solved -->
          <div class="pain-points-grid">
            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Repetitive Data Entry & Document Parsing</h3>
              </div>
              <p class="pain-desc">Staff waste hours manually reading PDF invoices, purchase orders, and customer contracts to extract numbers into ERPs.</p>
              <div class="solution-box"><strong>Conceptra AI Fix:</strong> Automated OCR & LLM document parsers that extract fields from PDFs into databases in under 2 seconds.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Slow Customer Support Response Times</h3>
              </div>
              <p class="pain-desc">Customer inquiries sit unanswered overnight, leading to lost sales and frustrated clients.</p>
              <div class="solution-box"><strong>Conceptra AI Fix:</strong> 24/7 autonomous RAG-powered Chatbots trained on your company knowledge base to instantly answer questions.</div>
            </div>

            <div class="pain-card reveal">
              <div class="pain-header">
                <div class="pain-icon">✕</div>
                <h3>Reactive Business Analytics</h3>
              </div>
              <p class="pain-desc">Making inventory or sales decisions based on outdated weekly Excel reports instead of real-time predictive insights.</p>
              <div class="solution-box"><strong>Conceptra AI Fix:</strong> Predictive ML models that forecast inventory demand, customer churn, and revenue trends automatically.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Core AI Capabilities -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">AI Capabilities</span>
            <h2>Custom Artificial Intelligence <span class="gradient-text">Solutions</span></h2>
          </div>

          <div class="features-grid">
            <div class="feature-card reveal" *ngFor="let feat of features">
              <div class="feat-icon-wrap" [style.background]="feat.bgColor" [style.color]="feat.color">
                <span [innerHTML]="feat.iconSvg"></span>
              </div>
              <h3>{{ feat.title }}</h3>
              <p>{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Integration Workflow -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">AI Deployment Lifecycle</span>
            <h2>4-Step AI Integration <span class="gradient-text">Framework</span></h2>
          </div>

          <div class="process-steps-grid">
            <div class="step-card reveal" *ngFor="let step of processSteps">
              <div class="step-num">{{ step.number }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="section section-sm">
        <div class="container text-center">
          <div class="section-header">
            <span class="section-label">AI Frameworks & Models</span>
            <h2>Engineered With State-of-the-Art <span class="gradient-text">AI Tech</span></h2>
          </div>
          <div class="tech-stack-wrap reveal">
            <span class="tech-chip" *ngFor="let t of techStack">{{ t }}</span>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Why Partner With Us</span>
            <h2>The Conceptra <span class="gradient-text">AI Advantage</span></h2>
          </div>

          <div class="why-list">
            <div class="why-item reveal" *ngFor="let w of whyUs">
              <div class="why-check">✓</div>
              <div>
                <h4>{{ w.title }}</h4>
                <p>{{ w.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQs -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">FAQs</span>
            <h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
          </div>

          <div class="faq-list">
            <div class="faq-item reveal" *ngFor="let f of faqs; let idx = index">
              <button class="faq-question" (click)="toggleFaq(idx)" [class.active]="f.open">
                <span>{{ f.q }}</span>
                <span class="faq-icon">{{ f.open ? '▲' : '▼' }}</span>
              </button>
              <div class="faq-answer" *ngIf="f.open">
                <p>{{ f.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Services -->
      <section class="section section-sm">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Related Services</span>
            <h2>Explore Complementary <span class="gradient-text">Services</span></h2>
          </div>

          <div class="related-services-grid">
            <div class="rel-card reveal" *ngFor="let rel of relatedServices">
              <div>
                <h4>{{ rel.title }}</h4>
                <p>{{ rel.desc }}</p>
              </div>
              <a [routerLink]="rel.path" class="rel-link">Explore Service →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="section text-center">
        <div class="container">
          <h2 class="reveal">Ready to Automate Your Business With <span class="gradient-text">AI?</span></h2>
          <p class="reveal" style="color: var(--text-secondary); max-width:560px; margin: 1rem auto 2rem;">Discover how AI automation can save your business 20+ hours weekly. Schedule a free AI feasibility audit today.</p>
          <a routerLink="/contact" class="btn btn-primary btn-lg reveal">Schedule Free AI Audit</a>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./service-detail.scss']
})
export class AiAutomationComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  features = [
    { title: 'RAG Knowledge Base Chatbots', desc: 'Custom AI chatbots trained securely on your company documentation, PDFs, and FAQs for instant internal and customer support.', bgColor: 'rgba(99,102,241,0.12)', color: '#6366f1', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
    { title: 'Automated Document & Invoice Parsing', desc: 'AI-powered OCR systems that automatically read, extract, and categorize data from scanned receipts, invoices, and contracts.', bgColor: 'rgba(6,182,212,0.12)', color: '#06b6d4', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>' },
    { title: 'Custom GPT-4 & Gemini API Integration', desc: 'Integrating OpenAI, Claude, and Gemini APIs directly into your custom web apps, ERP systems, and mobile applications.', bgColor: 'rgba(245,158,11,0.12)', color: '#f59e0b', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>' },
    { title: 'Predictive Analytics & Forecasting', desc: 'Machine learning algorithms that predict customer churn, demand trends, and pricing optimizations from historical data.', bgColor: 'rgba(16,185,129,0.12)', color: '#10b981', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
    { title: 'AI Voice Agents & WhatsApp Bots', desc: 'Conversational WhatsApp bots and AI voice agents for automated appointment booking and customer qualification.', bgColor: 'rgba(139,92,246,0.12)', color: '#8b5cf6', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81 19.79 19.79 0 0 1 .33 4.18 2 2 0 0 1 2.31 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 9.91a16 16 0 0 0 6.18 6.18l.76-.76a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' },
    { title: 'Automated Content & Email Generation', desc: 'AI workflows that generate personalized marketing emails, product descriptions, and automated customer notifications.', bgColor: 'rgba(239,68,68,0.12)', color: '#ef4444', iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' }
  ];

  processSteps = [
    { number: '01', title: 'Workflow Feasibility Audit', desc: 'Identifying high-ROI repetitive manual tasks across your business operations.' },
    { number: '02', title: 'Data Vectorization & RAG Pipeline', desc: 'Processing your corporate data securely into vector embeddings (Pinecone/ChromaDB).' },
    { number: '03', title: 'Agent & API Integration', desc: 'Building custom AI agents and connecting them with FastAPI, Node.js, and web frontends.' },
    { number: '04', title: 'Testing & Human-in-the-Loop', desc: 'Ensuring zero AI hallucination with strict prompt engineering and human review guardrails.' }
  ];

  techStack = ['Python', 'OpenAI GPT-4', 'Google Gemini API', 'LangChain', 'LlamaIndex', 'Pinecone', 'FastAPI', 'PostgreSQL', 'Node.js', 'Docker'];

  whyUs = [
    { title: 'Enterprise Data Privacy Guarantee', desc: 'Your company data is never used to train public AI models. 100% private vector databases.' },
    { title: 'Proven Operational ROI', desc: 'Our clients save an average of 15 to 25 hours per employee every month.' },
    { title: 'Zero AI Hallucination Guardrails', desc: 'RAG pipelines with strict context boundaries ensure accurate data output.' },
    { title: 'Full API Integration Capability', desc: 'Seamlessly connects with your CRM, WhatsApp Business, Gmail, and ERP software.' }
  ];

  faqs = [
    { q: 'Is our corporate data safe when implementing AI automation?', a: 'Yes! We build private enterprise RAG pipelines using dedicated API keys where your data is strictly encrypted and never used for public AI model training.', open: false },
    { q: 'What is the difference between simple automation and AI automation?', a: 'Simple automation follows strict static rules (if A then B), whereas AI automation uses machine learning to understand unstructured text, read PDFs, answer complex questions, and make decisions.', open: false },
    { q: 'How long does it take to implement a custom AI Chatbot or Document Parser?', a: 'A prototype RAG AI chatbot or document parser can be built and integrated into your platform within 2 to 3 weeks.', open: false },
    { q: 'Can AI automation integrate with WhatsApp?', a: 'Yes! We integrate AI models directly with the official WhatsApp Business API so your business can answer customer leads 24/7 on WhatsApp.', open: false }
  ];

  relatedServices = [
    { title: 'Business Automation', desc: 'Automate legacy back-office systems and multi-step business logic.', path: '/services/business-automation' },
    { title: 'Custom Software Development', desc: 'Custom enterprise software and database platform development.', path: '/services/custom-software-development' },
    { title: 'Website Development', desc: 'Integrate AI chatbots directly into high-speed custom web portals.', path: '/services/website-development' }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
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
