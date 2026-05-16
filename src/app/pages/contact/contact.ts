import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg"><div class="ph-orb ph-orb-1"></div><div class="ph-orb ph-orb-2"></div></div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">Let's Talk</span>
            <h1>Start Your <span class="gradient-text">Digital Journey</span></h1>
            <p>Ready to transform your business? Tell us about your project and we'll get back to you within 24 hours with a tailored solution.</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="section">
        <div class="container">
          <div class="contact-grid">
            <!-- Form -->
            <div class="contact-form-wrap reveal-left">
              <div class="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill in the details below and we'll craft a personalized proposal for you.</p>
              </div>

              <form class="contact-form" (submit)="submitForm($event)" *ngIf="!submitted">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Full Name *</label>
                    <input type="text" id="name" [(ngModel)]="form.name" name="name"
                           placeholder="John Sharma" required/>
                  </div>
                  <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" [(ngModel)]="form.email" name="email"
                           placeholder="john@company.com" required/>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" [(ngModel)]="form.phone" name="phone"
                           placeholder="+91 99999 99999"/>
                  </div>
                  <div class="form-group">
                    <label for="service">Service Required *</label>
                    <select id="service" [(ngModel)]="form.service" name="service" required>
                      <option value="">Select a service...</option>
                      <option *ngFor="let s of services" [value]="s">{{ s }}</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label for="budget">Project Budget</label>
                  <select id="budget" [(ngModel)]="form.budget" name="budget">
                    <option value="">Select budget range...</option>
                    <option *ngFor="let b of budgets" [value]="b">{{ b }}</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="message">Project Details *</label>
                  <textarea id="message" [(ngModel)]="form.message" name="message"
                            placeholder="Tell us about your project, goals, timeline, and any specific requirements..." required></textarea>
                </div>

                <div class="form-error" *ngIf="formError">{{ formError }}</div>

                <button type="submit" class="btn btn-primary btn-lg form-submit" [class.loading]="isLoading">
                  <span *ngIf="!isLoading">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </span>
                  <span *ngIf="isLoading" class="loading-text">
                    <div class="spinner"></div>
                    Sending...
                  </span>
                </button>
              </form>

              <!-- Success State -->
              <div class="form-success" *ngIf="submitted">
                <div class="success-icon">🎉</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out! Our team will review your project and get back to you within <strong>24 hours</strong> with a personalized proposal.</p>
                <button class="btn btn-outline" (click)="resetForm()">Send Another Message</button>
              </div>
            </div>

            <!-- Contact Info -->
            <div class="contact-info reveal-right">
              <!-- Info Cards -->
              <div class="info-cards">
                <a [href]="'mailto:hello@conceptralabs.com'" class="info-card">
                  <div class="ic-icon ic-email">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello&#64;conceptralabs.com</p>
                    <span>We reply within 2-4 hours</span>
                  </div>
                </a>

                <a href="https://wa.me/919999999999" target="_blank" class="info-card">
                  <div class="ic-icon ic-whatsapp">💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+91 99999 99999</p>
                    <span>Chat with us instantly</span>
                  </div>
                </a>

                <div class="info-card">
                  <div class="ic-icon ic-location">📍</div>
                  <div>
                    <h4>Our Location</h4>
                    <p>Mumbai, Maharashtra</p>
                    <span>India — Available globally</span>
                  </div>
                </div>

                <div class="info-card">
                  <div class="ic-icon ic-hours">🕐</div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Mon–Sat: 9 AM – 8 PM IST</p>
                    <span>Emergency support 24/7</span>
                  </div>
                </div>
              </div>

              <!-- Consultation Box -->
              <div class="consultation-box">
                <div class="cb-badge">🎯 Free Session</div>
                <h3>Book a Free 30-min Consultation</h3>
                <p>Get expert advice on your project, tech stack, and roadmap — absolutely free, no strings attached.</p>
                <a href="https://calendly.com" target="_blank" class="btn btn-primary">
                  📅 Schedule Consultation
                </a>
              </div>

              <!-- Social Links -->
              <div class="contact-social">
                <p class="social-label">Connect with us</p>
                <div class="social-links">
                  <a href="#" class="social-chip" *ngFor="let s of socials">{{ s.icon }} {{ s.label }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Map Section -->
      <section class="section-sm">
        <div class="container">
          <div class="map-wrapper reveal">
            <div class="map-header">
              <h3>📍 Find Us in Mumbai</h3>
              <p>Located in the heart of India's financial capital</p>
            </div>
            <div class="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823356!2d72.74109995709657!3d19.08253905528806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1737000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Conceptra Labs Location - Mumbai">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./contact.scss']
})
export class ContactComponent implements AfterViewInit {
  submitted = false;
  isLoading = false;
  formError = '';

  form = {
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  };

  services = [
    'Web Development', 'App Development', 'UI/UX Design',
    'Full Stack Development', 'ERP System', 'E-Commerce Development',
    'Dashboard Development', 'AI Automation', 'AI Web Application',
    'Portfolio Development', 'Branding & Logo', 'Other'
  ];

  budgets = [
    'Under ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹3,00,000',
    '₹3,00,000 – ₹10,00,000', 'Above ₹10,00,000', 'Let\'s Discuss'
  ];

  socials = [
    { icon: '💼', label: 'LinkedIn' },
    { icon: '🐦', label: 'Twitter/X' },
    { icon: '📸', label: 'Instagram' },
    { icon: '💻', label: 'GitHub' }
  ];

  submitForm(e: Event) {
    e.preventDefault();
    this.formError = '';

    if (!this.form.name || !this.form.email || !this.form.service || !this.form.message) {
      this.formError = 'Please fill in all required fields.';
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.submitted = true;
    }, 2000);
  }

  resetForm() {
    this.submitted = false;
    this.form = { name: '', email: '', phone: '', service: '', budget: '', message: '' };
  }

  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }
}
