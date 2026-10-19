import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface ProjectTypeOption {
  id: string;
  label: string;
  icon: string;
  baseMin: number;
  baseMax: number;
  weeksMin: number;
  weeksMax: number;
  desc: string;
}

interface FeatureAddon {
  id: string;
  name: string;
  cost: number;
  weeks: number;
  icon: string;
  checked: boolean;
}

@Component({
  selector: 'app-project-calculator',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="calc-card">
      <div class="calc-header">
        <div class="calc-badge">
          <span class="calc-pulse"></span> Instant Cost & Timeline Estimator
        </div>
        <h3>Estimate Your Software Investment in 60 Seconds</h3>
        <p>Transparent, milestone-based pricing in INR. No hidden costs or surprise retainers.</p>
      </div>

      <div class="calc-body">
        <!-- 1. Select Project Type -->
        <div class="calc-section">
          <label class="calc-label"><span class="step-badge">1</span> Select What You Are Building</label>
          <div class="calc-types-grid">
            <button
              type="button"
              *ngFor="let type of projectTypes"
              class="type-pill"
              [class.active]="selectedType.id === type.id"
              (click)="selectType(type)"
            >
              <span class="type-icon">{{ type.icon }}</span>
              <span class="type-text">
                <strong>{{ type.label }}</strong>
                <small>{{ type.desc }}</small>
              </span>
            </button>
          </div>
        </div>

        <!-- 2. Select Project Scale -->
        <div class="calc-section">
          <label class="calc-label"><span class="step-badge">2</span> Select Project Scope</label>
          <div class="calc-scale-pills">
            <button
              type="button"
              *ngFor="let scale of scaleOptions"
              class="scale-pill"
              [class.active]="selectedScale === scale.id"
              (click)="selectedScale = scale.id"
            >
              <strong>{{ scale.label }}</strong>
              <small>{{ scale.desc }}</small>
            </button>
          </div>
        </div>

        <!-- 3. Feature Add-ons -->
        <div class="calc-section">
          <label class="calc-label"><span class="step-badge">3</span> Select Desired Capabilities</label>
          <div class="calc-features-grid">
            <button
              type="button"
              *ngFor="let f of featureAddons"
              class="feature-check"
              [class.checked]="f.checked"
              (click)="toggleFeature(f)"
            >
              <div class="fc-checkbox">
                <svg *ngIf="f.checked" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div class="fc-info">
                <strong>{{ f.name }}</strong>
                <span>+₹{{ f.cost | number }}</span>
              </div>
            </button>
          </div>
        </div>

        <!-- Dynamic Output Summary Bar -->
        <div class="calc-result-box">
          <div class="cr-left">
            <div class="cr-stat">
              <span class="cr-label">Estimated Investment Range</span>
              <div class="cr-price">
                <span class="currency">₹</span>{{ estimatedMin | number }} – <span class="currency">₹</span>{{ estimatedMax | number }}
                <small class="tax-note">+ GST / Milestone Releases</small>
              </div>
            </div>
            <div class="cr-stat">
              <span class="cr-label">Estimated Timeline</span>
              <div class="cr-time">
                ⏱️ {{ estimatedWeeksMin }} – {{ estimatedWeeksMax }} Weeks
              </div>
            </div>
          </div>

          <div class="cr-actions">
            <a
              [href]="whatsappUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-whatsapp-calc"
              id="calc-whatsapp-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Claim Estimate on WhatsApp
            </a>
            <a
              [routerLink]="['/contact']"
              [queryParams]="contactQueryParams"
              class="btn btn-primary"
              id="calc-proposal-btn"
            >
              Lock In Scope & Book Call →
            </a>
          </div>
        </div>

        <div class="calc-trust-footer">
          <span>🛡️ 100% Full Source Code & IP Ownership</span>
          <span>⚡ Free 30-Day Post-Launch SLA Warranty</span>
          <span>📄 Formal NDA & Fixed-Price Scope Guarantee</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./project-calculator.scss']
})
export class ProjectCalculatorComponent {
  projectTypes: ProjectTypeOption[] = [
    { id: 'website', label: 'Website / Web App', icon: '🌐', baseMin: 30000, baseMax: 65000, weeksMin: 2, weeksMax: 4, desc: 'Responsive Angular/React site or web app' },
    { id: 'school-erp', label: 'School ERP System', icon: '🏫', baseMin: 50000, baseMax: 110000, weeksMin: 3, weeksMax: 6, desc: 'Fees, attendance, parent app, exams' },
    { id: 'mobile', label: 'Cross-Platform Mobile App', icon: '📱', baseMin: 65000, baseMax: 140000, weeksMin: 4, weeksMax: 8, desc: 'Flutter/React Native for iOS & Android' },
    { id: 'ai', label: 'AI Automation & RAG Bot', icon: '🤖', baseMin: 40000, baseMax: 90000, weeksMin: 2, weeksMax: 4, desc: 'RAG knowledge bot, OCR, triggers' },
    { id: 'custom-software', label: 'Enterprise Software / SaaS', icon: '🏭', baseMin: 85000, baseMax: 220000, weeksMin: 6, weeksMax: 12, desc: 'Multi-tenant cloud architecture & APIs' }
  ];

  selectedType: ProjectTypeOption = this.projectTypes[0];

  scaleOptions = [
    { id: 'mvp', label: 'MVP Prototype', desc: 'Core workflows & launch essential' },
    { id: 'pro', label: 'Growth / Standard', desc: 'Robust full-featured implementation' },
    { id: 'enterprise', label: 'Enterprise Scale', desc: 'High concurrency & custom integrations' }
  ];

  selectedScale = 'pro';

  featureAddons: FeatureAddon[] = [
    { id: 'payment', name: 'Razorpay / UPI Payment Gateway', cost: 8000, weeks: 0.5, icon: '💳', checked: true },
    { id: 'whatsapp', name: 'Automated WhatsApp Messaging Alerts', cost: 10000, weeks: 0.5, icon: '📲', checked: true },
    { id: 'roles', name: 'Multi-Role User Auth & Permissions', cost: 12000, weeks: 1, icon: '🔐', checked: true },
    { id: 'ai-chat', name: 'Smart AI Knowledge Chatbot / OCR', cost: 20000, weeks: 1.5, icon: '🧠', checked: false },
    { id: 'tally', name: 'Accounting / Legacy ERP Sync API', cost: 15000, weeks: 1, icon: '🔄', checked: false },
    { id: 'bi', name: 'Interactive Analytics & PDF Export', cost: 10000, weeks: 0.5, icon: '📊', checked: false }
  ];

  selectType(type: ProjectTypeOption) {
    this.selectedType = type;
  }

  toggleFeature(feature: FeatureAddon) {
    feature.checked = !feature.checked;
  }

  get scaleMultiplier(): number {
    switch (this.selectedScale) {
      case 'mvp': return 0.85;
      case 'enterprise': return 1.6;
      default: return 1.15;
    }
  }

  get addedFeaturesCost(): number {
    return this.featureAddons
      .filter(f => f.checked)
      .reduce((acc, f) => acc + f.cost, 0);
  }

  get addedWeeks(): number {
    return Math.round(this.featureAddons
      .filter(f => f.checked)
      .reduce((acc, f) => acc + f.weeks, 0));
  }

  get estimatedMin(): number {
    const raw = (this.selectedType.baseMin * this.scaleMultiplier) + this.addedFeaturesCost;
    return Math.round(raw / 1000) * 1000;
  }

  get estimatedMax(): number {
    const raw = (this.selectedType.baseMax * this.scaleMultiplier) + (this.addedFeaturesCost * 1.25);
    return Math.round(raw / 1000) * 1000;
  }

  get estimatedWeeksMin(): number {
    return this.selectedType.weeksMin + Math.floor(this.addedWeeks / 2);
  }

  get estimatedWeeksMax(): number {
    return this.selectedType.weeksMax + this.addedWeeks;
  }

  get checkedFeaturesSummary(): string {
    const active = this.featureAddons.filter(f => f.checked).map(f => f.name);
    return active.length > 0 ? active.join(', ') : 'Standard Features';
  }

  get whatsappUrl(): string {
    const msg = `Hi Conceptra Labs! I just generated a project estimate on your website:%0A- Project: ${this.selectedType.label}%0A- Scope: ${this.selectedScale.toUpperCase()}%0A- Features: ${this.checkedFeaturesSummary}%0A- Estimated Range: ₹${this.estimatedMin.toLocaleString('en-IN')} - ₹${this.estimatedMax.toLocaleString('en-IN')}%0A- Timeline: ${this.estimatedWeeksMin}-${this.estimatedWeeksMax} Weeks.%0AI would love to discuss a formal proposal!`;
    return `https://wa.me/919710759208?text=${msg}`;
  }

  get contactQueryParams(): { [k: string]: string } {
    let budgetBucket = '50k-2l';
    if (this.estimatedMax <= 50000) budgetBucket = '<50k';
    else if (this.estimatedMin >= 200000) budgetBucket = '2l-10l';

    return {
      service: this.selectedType.id,
      budget: budgetBucket,
      note: `Estimated ${this.selectedType.label} (${this.selectedScale}). Desired features: ${this.checkedFeaturesSummary}. Budget target: ₹${this.estimatedMin.toLocaleString('en-IN')} - ₹${this.estimatedMax.toLocaleString('en-IN')}.`
    };
  }
}
