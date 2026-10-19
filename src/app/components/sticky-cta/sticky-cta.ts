import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="sticky-cta-bar" [class.visible]="isVisible" role="complementary" aria-label="Quick contact options">
      <div class="sticky-cta-inner">
        <div class="sticky-left">
          <span class="sticky-pulse-dot"></span>
          <span class="sticky-label">2 project slots open this quarter</span>
        </div>
        <div class="sticky-actions">
          <a href="tel:+919710759208"
             class="sticky-btn sticky-btn--phone"
             id="sticky-call-btn"
             aria-label="Call Conceptra Labs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.33 4.18 2 2 0 012.31 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.18 6.18l.76-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span class="hide-mobile-xs">Call</span>
          </a>
          <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%27d%20like%20to%20discuss%20a%20project!"
             target="_blank" rel="noopener noreferrer"
             class="sticky-btn sticky-btn--whatsapp"
             id="sticky-whatsapp-btn"
             aria-label="Chat on WhatsApp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span class="hide-mobile-xs">WhatsApp</span>
          </a>
          <a routerLink="/contact" class="sticky-btn sticky-btn--primary" id="sticky-quote-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sticky-cta-bar {
      position: fixed;
      bottom: -90px;
      left: 0;
      right: 0;
      z-index: 990;
      background: rgba(8, 8, 20, 0.97);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-top: 1px solid rgba(99, 102, 241, 0.25);
      box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.4);
      transition: bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      padding: 0.75rem 1.25rem;
    }
    .sticky-cta-bar.visible {
      bottom: 0;
    }
    .sticky-cta-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .sticky-left {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex: 1;
      min-width: 0;
    }
    .sticky-pulse-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10b981;
      flex-shrink: 0;
      box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
      animation: sticky-pulse 2s infinite;
    }
    @keyframes sticky-pulse {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
    .sticky-label {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.65);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sticky-actions {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-shrink: 0;
    }
    .sticky-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 1.1rem;
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 700;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      white-space: nowrap;
    }
    .sticky-btn--phone {
      background: rgba(14, 165, 233, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(14, 165, 233, 0.3);
    }
    .sticky-btn--phone:hover {
      background: rgba(14, 165, 233, 0.25);
      border-color: rgba(14, 165, 233, 0.5);
      transform: translateY(-1px);
    }
    .sticky-btn--whatsapp {
      background: rgba(37, 211, 102, 0.15);
      color: #25d366;
      border: 1px solid rgba(37, 211, 102, 0.3);
    }
    .sticky-btn--whatsapp:hover {
      background: rgba(37, 211, 102, 0.25);
      border-color: rgba(37, 211, 102, 0.5);
      transform: translateY(-1px);
    }
    .sticky-btn--primary {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #fff;
      border: 1px solid transparent;
      box-shadow: 0 4px 15px rgba(99,102,241,0.35);
    }
    .sticky-btn--primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(99,102,241,0.5);
    }
    @media (max-width: 480px) {
      .hide-mobile-xs { display: none; }
      .sticky-label { display: none; }
      .sticky-cta-inner { justify-content: flex-end; }
      .sticky-btn { padding: 0.6rem 0.85rem; }
    }
  `]
})
export class StickyCTAComponent implements OnInit, OnDestroy {
  isVisible = false;
  private scrollThreshold = 400;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isVisible = window.scrollY > this.scrollThreshold;
  }

  ngOnDestroy() {}
}
