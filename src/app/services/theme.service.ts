import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'dark' | 'light' = 'dark';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initializeTheme();
  }

  private initializeTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('conceptra-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.currentTheme = savedTheme;
      } else {
        // Default to dark, but check if browser explicitly prefers light
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        this.currentTheme = systemPrefersLight ? 'light' : 'dark';
      }
      this.applyTheme(this.currentTheme);
    }
  }

  getTheme(): 'dark' | 'light' {
    return this.currentTheme;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('conceptra-theme', this.currentTheme);
      this.applyTheme(this.currentTheme);
    }
  }

  private applyTheme(theme: 'dark' | 'light') {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
      } else {
        root.removeAttribute('data-theme');
      }
    }
  }
}
