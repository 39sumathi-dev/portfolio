import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-brief-form',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  template: `
    <div class="brief-form-wrapper">
      <!-- Progress Bar -->
      <div class="brief-progress">
        <div class="progress-bar" [style.width]="progressWidth"></div>
      </div>
      <div class="brief-steps-indicator">
        <div class="step-dot" *ngFor="let s of [1,2,3,4]; let i = index"
             [class.active]="currentStep === i + 1"
             [class.done]="currentStep > i + 1">
          <span *ngIf="currentStep <= i + 1">{{ i + 1 }}</span>
          <svg *ngIf="currentStep > i + 1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>

      <!-- Step 1: What are you building? -->
      <div class="brief-step" *ngIf="currentStep === 1">
        <div class="step-header">
          <span class="step-label">Step 1 of 4</span>
          <h3>What are you building?</h3>
          <p>Select the type of project you have in mind</p>
        </div>
        <div class="option-grid">
          <button class="option-card" *ngFor="let opt of projectTypes"
                  [class.selected]="briefForm.value.projectType === opt.value"
                  (click)="selectOption('projectType', opt.value)"
                  type="button">
            <span class="opt-icon">{{ opt.icon }}</span>
            <span class="opt-label">{{ opt.label }}</span>
          </button>
        </div>
        <div class="step-nav">
          <button class="btn btn-primary" [disabled]="!briefForm.value.projectType" (click)="nextStep()">
            Continue <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <!-- Step 2: Timeline -->
      <div class="brief-step" *ngIf="currentStep === 2">
        <div class="step-header">
          <span class="step-label">Step 2 of 4</span>
          <h3>What's your ideal timeline?</h3>
          <p>Help us understand your urgency so we can plan accordingly</p>
        </div>
        <div class="radio-options">
          <button class="radio-card" *ngFor="let t of timelines"
                  [class.selected]="briefForm.value.timeline === t.value"
                  (click)="selectOption('timeline', t.value)"
                  type="button">
            <div class="rc-left">
              <div class="rc-radio" [class.checked]="briefForm.value.timeline === t.value">
                <div class="rc-dot"></div>
              </div>
            </div>
            <div class="rc-content">
              <strong>{{ t.label }}</strong>
              <span>{{ t.desc }}</span>
            </div>
          </button>
        </div>
        <div class="step-nav">
          <button class="btn-back" (click)="prevStep()" type="button">← Back</button>
          <button class="btn btn-primary" [disabled]="!briefForm.value.timeline" (click)="nextStep()">
            Continue <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <!-- Step 3: Budget -->
      <div class="brief-step" *ngIf="currentStep === 3">
        <div class="step-header">
          <span class="step-label">Step 3 of 4</span>
          <h3>What's your approximate budget?</h3>
          <p>All engagements are priced transparently in INR</p>
        </div>
        <div class="radio-options">
          <button class="radio-card" *ngFor="let b of budgets"
                  [class.selected]="briefForm.value.budget === b.value"
                  (click)="selectOption('budget', b.value)"
                  type="button">
            <div class="rc-left">
              <div class="rc-radio" [class.checked]="briefForm.value.budget === b.value">
                <div class="rc-dot"></div>
              </div>
            </div>
            <div class="rc-content">
              <strong>{{ b.label }}</strong>
              <span>{{ b.desc }}</span>
            </div>
          </button>
        </div>
        <div class="step-nav">
          <button class="btn-back" (click)="prevStep()" type="button">← Back</button>
          <button class="btn btn-primary" [disabled]="!briefForm.value.budget" (click)="nextStep()">
            Continue <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <!-- Step 4: Contact Details -->
      <div class="brief-step" *ngIf="currentStep === 4 && !submitted">
        <div class="step-header">
          <span class="step-label">Step 4 of 4</span>
          <h3>Almost there!</h3>
          <p>Tell us who you are so we can send your tailored proposal</p>
        </div>
        <form [formGroup]="briefForm" (ngSubmit)="onSubmit()" class="contact-fields">
          <div class="field-row">
            <div class="field-group">
              <label for="brief-name">Your Name *</label>
              <input id="brief-name" type="text" formControlName="name" placeholder="e.g. Rahul Sharma"
                     [class.error]="briefForm.get('name')?.invalid && briefForm.get('name')?.touched"/>
              <span class="field-error" *ngIf="briefForm.get('name')?.invalid && briefForm.get('name')?.touched">Name is required</span>
            </div>
            <div class="field-group">
              <label for="brief-company">Company / Brand (optional)</label>
              <input id="brief-company" type="text" formControlName="company" placeholder="e.g. TechStartup Inc."/>
            </div>
          </div>
          <div class="field-row">
            <div class="field-group">
              <label for="brief-email">Email Address *</label>
              <input id="brief-email" type="email" formControlName="email" placeholder="you@company.com"
                     [class.error]="briefForm.get('email')?.invalid && briefForm.get('email')?.touched"/>
              <span class="field-error" *ngIf="briefForm.get('email')?.invalid && briefForm.get('email')?.touched">Valid email required</span>
            </div>
            <div class="field-group">
              <label for="brief-whatsapp">WhatsApp Number *</label>
              <input id="brief-whatsapp" type="tel" formControlName="whatsapp" placeholder="+91 98765 43210"
                     [class.error]="briefForm.get('whatsapp')?.invalid && briefForm.get('whatsapp')?.touched"/>
              <span class="field-error" *ngIf="briefForm.get('whatsapp')?.invalid && briefForm.get('whatsapp')?.touched">Phone number required</span>
            </div>
          </div>
          <div class="field-group">
            <label for="brief-message">Brief Description of Your Project *</label>
            <textarea id="brief-message" formControlName="message" rows="3"
                      placeholder="e.g. We need a multi-vendor e-commerce platform with Razorpay integration..."
                      [class.error]="briefForm.get('message')?.invalid && briefForm.get('message')?.touched"></textarea>
            <span class="field-error" *ngIf="briefForm.get('message')?.invalid && briefForm.get('message')?.touched">Please describe your project</span>
          </div>
          <div class="step-nav">
            <button class="btn-back" (click)="prevStep()" type="button">← Back</button>
            <button type="submit" class="btn btn-primary btn-submit" [disabled]="briefForm.invalid || isSubmitting">
              <svg *ngIf="!isSubmitting" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              <div *ngIf="isSubmitting" class="spinner"></div>
              {{ isSubmitting ? 'Sending...' : 'Send Project Brief' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Success State -->
      <div class="brief-success" *ngIf="submitted">
        <div class="success-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3>Brief Received! 🎉</h3>
        <p>Our engineering lead will review your project and send you a tailored proposal <strong>within 4 hours</strong>.</p>
        <div class="success-next-steps">
          <div class="sns-item">
            <span class="sns-num">1</span>
            <span>Technical lead reviews your brief</span>
          </div>
          <div class="sns-item">
            <span class="sns-num">2</span>
            <span>Tailored architectural proposal sent via email</span>
          </div>
          <div class="sns-item">
            <span class="sns-num">3</span>
            <span>30-min scoping call to align on scope & budget</span>
          </div>
        </div>
        <a href="https://wa.me/919710759208?text=Hi%20Conceptra%20Labs%2C%20I%20just%20submitted%20a%20project%20brief%20and%20would%20love%20to%20connect!"
           target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="margin-top:1.5rem">
          💬 Also ping us on WhatsApp →
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./project-brief-form.scss']
})
export class ProjectBriefFormComponent implements OnInit {
  currentStep = 1;
  isSubmitting = false;
  submitted = false;

  briefForm: FormGroup;

  projectTypes = [
    { label: 'Website / Web App', value: 'website', icon: '🌐' },
    { label: 'Mobile App', value: 'mobile', icon: '📱' },
    { label: 'ERP / Portal', value: 'erp', icon: '🏭' },
    { label: 'AI Automation', value: 'ai', icon: '🤖' },
    { label: 'E-Commerce', value: 'ecommerce', icon: '🛒' },
    { label: 'UI/UX Design', value: 'design', icon: '🎨' },
    { label: 'Dashboard / BI', value: 'dashboard', icon: '📊' },
    { label: 'Other / Not Sure', value: 'other', icon: '💡' },
  ];

  timelines = [
    { label: 'ASAP — Within 2 weeks', value: 'asap', desc: 'Urgent project requiring immediate start' },
    { label: '1–3 Months', value: '1-3m', desc: 'Well-defined scope, ready to begin planning' },
    { label: '3–6 Months', value: '3-6m', desc: 'Larger project with some planning needed' },
    { label: 'Just Exploring', value: 'exploring', desc: 'Researching options and gathering quotes' },
  ];

  budgets = [
    { label: 'Under ₹50,000', value: '<50k', desc: 'Landing pages, branding, small web projects' },
    { label: '₹50,000 – ₹2,00,000', value: '50k-2l', desc: 'Web apps, mobile apps, small ERPs' },
    { label: '₹2,00,000 – ₹10,00,000', value: '2l-10l', desc: 'Enterprise platforms, AI systems, full ERPs' },
    { label: '₹10L+ / Custom Retainer', value: '10l+', desc: 'Large-scale enterprise or ongoing sprint retainers' },
  ];

  constructor(
    private fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.briefForm = this.fb.group({
      projectType: [''],
      timeline: [''],
      budget: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      company: [''],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: ['', [Validators.required, Validators.minLength(8)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  ngOnInit() {}

  get progressWidth(): string {
    return ((this.currentStep - 1) / 3 * 100) + '%';
  }

  selectOption(field: string, value: string) {
    this.briefForm.patchValue({ [field]: value });
  }

  nextStep() {
    if (this.currentStep < 4) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  onSubmit() {
    if (this.briefForm.invalid) {
      this.briefForm.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;

    // Submit via Netlify forms (encoded for Netlify detection)
    if (isPlatformBrowser(this.platformId)) {
      const formData = new FormData();
      formData.append('form-name', 'project-brief');
      Object.entries(this.briefForm.value).forEach(([key, val]) => {
        formData.append(key, val as string || '');
      });

      fetch('/', {
        method: 'POST',
        body: formData,
      })
        .then(() => {
          this.isSubmitting = false;
          this.submitted = true;
        })
        .catch(() => {
          // Still show success — WhatsApp is always the backup
          this.isSubmitting = false;
          this.submitted = true;
        });
    }
  }
}
