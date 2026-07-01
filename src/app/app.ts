import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button';
import { SeoService } from './services/seo.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    FooterComponent,
    WhatsappButtonComponent
  ],
  template: `
    <div class="app-wrapper">
      <app-navbar></app-navbar>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-whatsapp-button></app-whatsapp-button>
    </div>
  `,
  styles: [`
    .app-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .main-content {
      flex: 1;
    }
  `]
})
export class App implements OnInit {
  constructor(
    private router: Router,
    private seoService: SeoService,
    private themeService: ThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Update SEO Meta tags based on active route
        const currentRoute = this.router.routerState.snapshot.root;
        this.updateSeoMetadata(currentRoute);
      });
  }

  private updateSeoMetadata(route: any) {
    let child = route;
    while (child.firstChild) child = child.firstChild;
    
    const data = child.data || {};
    const title = data['title'] || 'Conceptra Labs — Design. Develop. Automate. Grow.';
    const description = data['description'] || 'Conceptra Labs is a premium digital product agency specializing in web development, app development, AI automation, ERP systems, and scalable digital solutions.';
    const keywords = data['keywords'];
    const robots = data['robots'];
    const image = data['ogImage'];
    const type = data['type'];
    const url = 'https://conceptralabs.com' + this.router.url;
    const schema = data['schema'];

    this.seoService.updateMeta({
      title,
      description,
      keywords,
      robots,
      image,
      type,
      url,
      schema
    });
  }
}
