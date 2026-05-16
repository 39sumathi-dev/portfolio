import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    data: { title: 'Conceptra Labs - Smart Digital Solutions' }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    data: { title: 'About Us - Conceptra Labs' }
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent),
    data: { title: 'Our Services - Conceptra Labs' }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent),
    data: { title: 'Portfolio & Projects - Conceptra Labs' }
  },
  {
    path: 'why-us',
    loadComponent: () => import('./pages/why-us/why-us').then(m => m.WhyUsComponent),
    data: { title: 'Why Choose Us - Conceptra Labs' }
  },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process').then(m => m.ProcessComponent),
    data: { title: 'How We Deliver - Conceptra Labs' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    data: { title: 'Contact Us - Conceptra Labs' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
