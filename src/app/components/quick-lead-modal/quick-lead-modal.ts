import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quick-lead-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="exit-modal-backdrop" *ngIf="isOpen" (click)="closeModal()">
      <div class="exit-modal-card" (click)="$event.stopPropagation()">
        <button class="exit-close-btn" (click)="closeModal()" aria-label="Close dialog">✕</button>

        <div class="exit-header">
          <div class="exit-pill">🚀 Free Engineering Assessment</div>
          <h3>Get a Free Architecture Blueprint &amp; Milestone Cost Plan</h3>
          <p>
            Leaving without answers? Share 2 quick details and our Senior Engineering Lead will personally evaluate your requirements and send a custom 2-page tech specification within 4 hours.
          </p>
        </div>

        <div class="exit-body" *ngIf="!submitted">
          <form (ngSubmit)="submitLead()" #leadForm="ngForm">
            <div class="exit-field">
              <label for="exit-whatsapp">WhatsApp or Phone Number <span class="req">*</span></label>
              <input
                type="tel"
                id="exit-whatsapp"
                name="whatsapp"
                [(ngModel)]="whatsapp"
                placeholder="+91 98765 43210"
                required
                minlength="8"
                #waInput="ngModel"
              />
            </div>

            <div class="exit-field">
              <label for="exit-email">Work Email (Optional)</label>
              <input
                type="email"
                id="exit-email"
                name="email"
                [(ngModel)]="email"
                placeholder="name@company.com"
              />
            </div>

            <div class="exit-field">
              <label for="exit-project">What are you looking to build?</label>
              <input
                type="text"
                id="exit-project"
                name="project"
                [(ngModel)]="projectNote"
                placeholder="e.g. School ERP for 1,200 students, or iOS/Android fitness app"
                required
              />
            </div>

            <button
              type="submit"
              class="btn btn-primary exit-submit-btn"
              [disabled]="!whatsapp || !projectNote || isSubmitting"
            >
              {{ isSubmitting ? 'Generating Your Blueprint...' : 'Get My Free Architecture Plan 🚀' }}
            </button>
          </form>

          <div class="exit-alt-action">
            <span>Prefer instant WhatsApp chat?</span>
            <a [href]="directWhatsappUrl" target="_blank" rel="noopener noreferrer" class="exit-wa-link" (click)="closeModal()">
              📲 Ping Us on WhatsApp Now
            </a>
          </div>

          <div class="exit-guarantees">
            <span>✓ Strict NDA Protected</span>
            <span>✓ Zero Sales Pressure</span>
            <span>✓ 4-Hour Response</span>
          </div>
        </div>

        <!-- Success State -->
        <div class="exit-success" *ngIf="submitted">
          <div class="success-icon">🎉</div>
          <h4>We're On It!</h4>
          <p>Our senior tech architect has received your details and is reviewing your project requirements. Expect a tailored technical proposal shortly.</p>
          <a [href]="directWhatsappUrl" target="_blank" rel="noopener noreferrer" class="btn btn-primary" (click)="closeModal()">
            Speed Up: Message Tech Lead on WhatsApp →
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./quick-lead-modal.scss']
})
export class QuickLeadModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  submitted = false;
  isSubmitting = false;

  whatsapp = '';
  email = '';
  projectNote = '';

  private idleTimer: any;
  private hasTriggered = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('conceptra_exit_dismissed');
    if (dismissed) {
      this.hasTriggered = true;
      return;
    }

    // Mobile timeout trigger (45 seconds idle)
    this.idleTimer = setTimeout(() => {
      if (!this.hasTriggered) {
        this.openModal();
      }
    }, 45000);
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    if (!isPlatformBrowser(this.platformId) || this.hasTriggered) return;

    // Detect cursor leaving near top of browser viewport
    if (event.clientY <= 5) {
      this.openModal();
    }
  }

  openModal() {
    this.isOpen = true;
    this.hasTriggered = true;
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem('conceptra_exit_dismissed', 'true');
    }
  }

  closeModal() {
    this.isOpen = false;
  }

  get directWhatsappUrl(): string {
    const note = this.projectNote ? ` Project idea: ${this.projectNote}.` : '';
    const text = encodeURIComponent(`Hi Conceptra Labs! I'd like a free architecture blueprint and cost estimate for my project.${note}`);
    return `https://wa.me/919710759208?text=${text}`;
  }

  submitLead() {
    if (!this.whatsapp || !this.projectNote) return;
    this.isSubmitting = true;

    if (isPlatformBrowser(this.platformId)) {
      const formData = new FormData();
      formData.append('form-name', 'exit-intent-lead');
      formData.append('whatsapp', this.whatsapp);
      formData.append('email', this.email);
      formData.append('project', this.projectNote);

      fetch('/', {
        method: 'POST',
        body: formData
      })
        .then(() => {
          this.isSubmitting = false;
          this.submitted = true;
        })
        .catch(() => {
          this.isSubmitting = false;
          this.submitted = true;
        });
    } else {
      this.submitted = true;
    }
  }

  ngOnDestroy() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
  }
}
