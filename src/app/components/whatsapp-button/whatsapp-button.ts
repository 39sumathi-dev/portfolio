import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="whatsapp-wrapper" (click)="$event.stopPropagation()">
      <!-- Conversational Drawer / Popup Card -->
      <div class="wa-chat-box" [class.open]="isOpen">
        <div class="wa-chat-header">
          <div class="wa-header-avatar">
            <span class="avatar-dot"></span>
            <img src="assets/conceptra-logo.jpeg" alt="Conceptra Tech Lead" class="avatar-img" />
          </div>
          <div class="wa-header-text">
            <strong>Conceptra Engineering</strong>
            <span>Online · Replies in ~15 mins</span>
          </div>
          <button class="wa-close-btn" (click)="toggleChat()" aria-label="Close chat popup">✕</button>
        </div>

        <div class="wa-chat-body">
          <div class="wa-msg-bubble">
            <p>👋 Hi! How can we help engineer your software or digital project?</p>
            <span class="wa-msg-time">Just now</span>
          </div>

          <div class="wa-quick-options">
            <span class="wa-options-label">Select quick inquiry:</span>
            <a
              *ngFor="let opt of quickOptions"
              [href]="getOptionUrl(opt.text)"
              target="_blank"
              rel="noopener noreferrer"
              class="wa-opt-chip"
              (click)="isOpen = false"
            >
              <span class="chip-icon">{{ opt.icon }}</span>
              <span>{{ opt.label }}</span>
            </a>
          </div>
        </div>

        <div class="wa-chat-footer">
          <a
            href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project!"
            target="_blank"
            rel="noopener noreferrer"
            class="wa-direct-link"
            (click)="isOpen = false"
          >
            Open Direct Chat on WhatsApp →
          </a>
          <a href="tel:+919710759208" class="wa-call-link">
            📞 Call Now: +91 97107 59208
          </a>
        </div>
      </div>

      <!-- Tooltip (Shown when closed) -->
      <div class="tooltip" [class.visible]="showTooltip && !isOpen">
        💬 Chat with Tech Team
      </div>

      <!-- Floating Toggle Button -->
      <button
        type="button"
        class="whatsapp-btn"
        (click)="toggleChat()"
        (mouseenter)="showTooltip = true"
        (mouseleave)="showTooltip = false"
        aria-label="Toggle WhatsApp Chat"
        id="whatsapp-float-btn"
        [class.active]="isOpen"
      >
        <div class="wa-pulse-ring" *ngIf="!isOpen"></div>
        <div class="wa-pulse-ring delay" *ngIf="!isOpen"></div>
        
        <!-- WhatsApp Icon when closed -->
        <svg *ngIf="!isOpen" viewBox="0 0 24 24" fill="currentColor" class="wa-icon">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        <!-- Close "X" when open -->
        <svg *ngIf="isOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `,
  styleUrls: ['./whatsapp-button.scss']
})
export class WhatsappButtonComponent {
  showTooltip = false;
  isOpen = false;

  quickOptions = [
    { icon: '🏫', label: 'School ERP Demo & Quote', text: 'Hi Conceptra Labs, I would like to schedule a live School ERP Demo.' },
    { icon: '🌐', label: 'Custom Website / Web App', text: 'Hi Conceptra Labs, I would like to get a quote for a custom Web App/Website.' },
    { icon: '📱', label: 'Mobile App (iOS & Android)', text: 'Hi Conceptra Labs, I want to build a cross-platform mobile application.' },
    { icon: '🤖', label: 'AI Automation & RAG Bot', text: 'Hi Conceptra Labs, I want to explore AI automation workflows.' }
  ];

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.showTooltip = false;
  }

  getOptionUrl(text: string): string {
    return `https://wa.me/919710759208?text=${encodeURIComponent(text)}`;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.isOpen = false;
  }
}
