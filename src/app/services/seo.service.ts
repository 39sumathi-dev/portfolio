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

    // 3. Set Open Graph (Facebook / LinkedIn / Slack) tags
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: config.type || 'website' });
    
    const imageUrl = config.image || this.defaultImage;
    const fullImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://conceptralabs.com/${imageUrl}`;
    this.metaService.updateTag({ property: 'og:image', content: fullImageUrl });

    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    // 4. Set Twitter Card tags
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

    // 6. Update JSON-LD Schema
    this.updateSchema(config.schema || this.getDefaultSchema());
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
    const existingScripts = this.doc.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    if (schema) {
      const script = this.doc.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.text = JSON.stringify(schema);
      this.doc.head.appendChild(script);
    }
  }

  private getDefaultSchema() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': 'https://conceptralabs.com/#organization',
          'name': 'Conceptra Labs',
          'url': 'https://conceptralabs.com',
          'logo': 'https://conceptralabs.com/assets/conceptra-logo.jpeg',
          'image': 'https://conceptralabs.com/assets/og-image.png',
          'email': 'conceptra.edu@gmail.com',
          'telephone': '+91-97107-59208',
          'priceRange': '$$',
          'description': 'Conceptra Labs is a premium software development agency in Chennai and Bengaluru specializing in web development, mobile apps, custom ERP systems, and AI automation.',
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
          'sameAs': [
            'https://linkedin.com/company/conceptralabs',
            'https://instagram.com/conceptralabs',
            'https://github.com/conceptralabs'
          ]
        },
        {
          '@type': 'WebSite',
          '@id': 'https://conceptralabs.com/#website',
          'url': 'https://conceptralabs.com',
          'name': 'Conceptra Labs',
          'publisher': {
            '@id': 'https://conceptralabs.com/#organization'
          }
        }
      ]
    };
  }
}
