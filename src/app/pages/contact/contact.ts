import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-page">
      <!-- Hero -->
      <section class="page-hero">
        <div class="ph-bg"><div class="ph-orb ph-orb-1"></div><div class="ph-orb ph-orb-2"></div></div>
        <div class="container">
          <div class="ph-content reveal">
            <span class="section-label">Get In Touch</span>
            <h1>Let's Build Something <span class="gradient-text">Great Together</span></h1>
            <p>Have a project in mind? We'd love to hear from you. Reach out through any of the channels below.</p>
          </div>
        </div>
      </section>

      <!-- Contact Info Section -->
      <section class="section">
        <div class="container">
          <div class="contact-center">

            <!-- Main Cards Row -->
            <div class="contact-cards reveal">

              <!-- Phone Card -->
              <div class="contact-card">
                <div class="cc-icon cc-phone">📞</div>
                <h3>Call Us</h3>
                <a href="tel:+919710759208" class="cc-primary">+91 97107 59208</a>
                <a href="tel:+919361210187" class="cc-secondary">+91 93612 10187</a>
                <span class="cc-hint">Mon–Sat · 9 AM – 8 PM IST</span>
              </div>

              <!-- WhatsApp Card -->
              <a href="https://wa.me/919710759208" target="_blank" rel="noopener noreferrer" class="contact-card contact-card--link">
                <div class="cc-icon cc-whatsapp">💬</div>
                <h3>WhatsApp</h3>
                <p class="cc-primary">+91 97107 59208</p>
                <span class="cc-hint">Chat with us instantly</span>
              </a>

              <!-- Email Card -->
              <a href="mailto:snmsss2002@gmail.com" class="contact-card contact-card--link">
                <div class="cc-icon cc-email">📧</div>
                <h3>Email Us</h3>
                <p class="cc-primary">snmsss2002&#64;gmail.com</p>
                <span class="cc-hint">We reply within 2–4 hours</span>
              </a>

              <!-- Location Card -->
              <div class="contact-card">
                <div class="cc-icon cc-location">📍</div>
                <h3>Our Locations</h3>
                <p class="cc-primary">Chennai</p>
                <p class="cc-secondary">Bengaluru</p>
                <span class="cc-hint">Tamil Nadu &amp; Karnataka, India</span>
              </div>

            </div>

            <!-- Social Links -->
            <div class="contact-social reveal">
              <p class="social-label">Connect with us</p>
              <div class="social-links">
                <a href="#" class="social-chip">💼 LinkedIn</a>
                <a href="#" class="social-chip">📸 Instagram</a>
                <a href="#" class="social-chip">💻 GitHub</a>
                <a href="#" class="social-chip">🐦 Twitter / X</a>
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
              <h3>📍 Find Us in Chennai &amp; Bengaluru</h3>
              <p>Serving clients across India and globally</p>
            </div>
            <div class="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.9974392521!2d79.87895545!3d13.04780905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1737000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Conceptra Labs - Chennai">
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
  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  }
}
