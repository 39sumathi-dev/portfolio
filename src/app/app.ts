import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button';

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
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Update page title based on route data
        const currentRoute = this.router.routerState.snapshot.root;
        const title = this.getTitle(currentRoute);
        if (title) document.title = title;
      });
  }

  private getTitle(route: any): string {
    let child = route;
    while (child.firstChild) child = child.firstChild;
    return child.data?.['title'] || 'Conceptra Labs';
  }
}
