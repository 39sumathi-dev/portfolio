import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
  image?: string;
  type?: string;
  url?: string;
  schema?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultKeywords = 'web development, app development, AI automation, ERP systems, digital agency, UI UX design, Conceptra Labs, software developers Chennai, software developers Bangalore';
  private defaultImage = 'assets/og-image.png';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  updateMeta(config: SeoMetadata) {
    // 1. Set page title
    this.titleService.setTitle(config.title);

    // 2. Set search engine tags
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'keywords', content: config.keywords || this.defaultKeywords });
    this.metaService.updateTag({ name: 'robots', content: config.robots || 'index, follow' });
    this.metaService.updateTag({ name: 'author', content: 'Conceptra Labs' });

    // 3. Set Open Graph tags
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });
    this.metaService.updateTag({ property: 'og:site_name', content: 'Conceptra Labs' });
    
    const imageUrl = config.image || this.defaultImage;
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://conceptralabs.in/${imageUrl}`;
    this.metaService.updateTag({ property: 'og:image', content: fullImageUrl });

    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    // 4. Set Twitter Card tags (Platform Preview Compatibility)
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: fullImageUrl });

    // 5. Update Canonical URL Link
    if (config.url) {
      // Strip query parameters and fragment identifier for a clean canonical link
      const cleanUrl = config.url.split('?')[0].split('#')[0];
      this.updateCanonicalUrl(cleanUrl);
    }

    // 6. Update Route-Specific JSON-LD Schema
    if (config.schema) {
      this.updateSchema(config.schema);
    }
  }

  private updateCanonicalUrl(url: string) {
    let link: HTMLLinkElement | null = this.doc.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private updateSchema(schema: any) {
    let script = this.doc.querySelector('script#route-schema') as HTMLScriptElement;
    if (!script) {
      script = this.doc.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('id', 'route-schema');
      this.doc.head.appendChild(script);
    }

    if (schema) {
      script.textContent = JSON.stringify(schema);
    } else {
      script.textContent = '';
    }
  }

  private getDefaultSchema() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': 'https://conceptralabs.in/#organization',
          'name': 'Conceptra Labs',
          'url': 'https://conceptralabs.in',
          'logo': 'https://conceptralabs.in/assets/conceptra-logo.jpeg',
          'image': 'https://conceptralabs.in/assets/og-image.png',
          'email': 'contact@conceptralabs.in',
          'telephone': '+91-97107-59208',
          'priceRange': '₹₹ - ₹₹₹',
          'currenciesAccepted': 'INR, USD, AED, GBP',
          'paymentAccepted': 'Cash, Credit Card, Bank Transfer, Razorpay, UPI',
          'openingHours': 'Mo-Sa 09:00-20:00',
          'description': 'Conceptra Labs is a premier custom software and web development company in Chennai and Bengaluru, specializing in high-speed web apps, School ERP software, mobile applications, and AI automation.',
          'areaServed': [
            { '@type': 'City', 'name': 'Chennai' },
            { '@type': 'City', 'name': 'Bengaluru' },
            { '@type': 'State', 'name': 'Tamil Nadu' },
            { '@type': 'State', 'name': 'Karnataka' },
            { '@type': 'Country', 'name': 'India' }
          ],
          'address': [
            {
              '@type': 'PostalAddress',
              'addressLocality': 'Chennai',
              'addressRegion': 'Tamil Nadu',
              'addressCountry': 'IN'
            },
            {
              '@type': 'PostalAddress',
              'addressLocality': 'Bengaluru',
              'addressRegion': 'Karnataka',
              'addressCountry': 'IN'
            }
          ],
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '5.0',
            'reviewCount': '9',
            'bestRating': '5',
            'worstRating': '1'
          },
          'knowsAbout': [
            'Web Development',
            'Mobile App Development',
            'School ERP Software',
            'Custom Software Engineering',
            'AI Automation',
            'Angular SSR',
            'PostgreSQL',
            'Flutter'
          ],
          'sameAs': [
            'https://www.linkedin.com/company/conceptra-labs/',
            'https://instagram.com/conceptralabs'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://conceptralabs.in/#website',
          'url': 'https://conceptralabs.in',
          'name': 'Conceptra Labs',
          'publisher': {
            '@id': 'https://conceptralabs.in/#organization'
          }
        }
      ]
    };
  }
}
