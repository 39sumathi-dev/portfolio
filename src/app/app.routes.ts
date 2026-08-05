import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    data: {
      title: 'Conceptra Labs — Custom Software & Web Development Company in Chennai',
      description: 'Conceptra Labs is a premier custom software development and web development company in Chennai, India. We build high-speed web apps, mobile apps, School ERP software, and AI automation.',
      keywords: 'software company Chennai, web development company Chennai, custom software developers, school ERP Chennai, mobile app developers, AI automation agency',
      ogImage: 'assets/og-image.png',
      type: 'website'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    data: {
      title: 'About Us — Conceptra Labs Software Company Chennai',
      description: 'Learn more about Conceptra Labs, our mission, values, experienced software development team in Chennai & Bengaluru, and cutting-edge tech stack.',
      keywords: 'about Conceptra Labs, software development team, technology partner, digital agency India, developers Chennai, developers Bangalore',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'AboutPage',
            '@id': 'https://conceptralabs.in/about/#webpage',
            'url': 'https://conceptralabs.in/about',
            'name': 'About Us — Conceptra Labs',
            'description': 'Learn more about Conceptra Labs, our mission, values, and our tech stack.'
          },
          {
            '@type': 'SoftwareCompany',
            '@id': 'https://conceptralabs.in/#organization',
            'name': 'Conceptra Labs',
            'url': 'https://conceptralabs.in',
            'logo': 'https://conceptralabs.in/assets/conceptra-logo.jpeg',
            'image': 'https://conceptralabs.in/assets/og-image.png',
            'email': 'contact@conceptralabs.in',
            'telephone': '+91-97107-59208',
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
            ]
          }
        ]
      }
    }
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent),
    data: {
      title: 'Digital Services — Web, App, AI & ERP Solutions | Conceptra Labs',
      description: 'Discover our core digital engineering services: website development, custom software engineering, School ERP systems, mobile app development, and AI business automation.',
      keywords: 'web development services, mobile app development, custom ERP software, AI automation agency, business intelligence dashboards, software developers Chennai, software developers Bangalore',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareCompany',
            '@id': 'https://conceptralabs.in/#organization',
            'name': 'Conceptra Labs'
          },
          {
            '@type': 'Service',
            'name': 'Web Development Services',
            'provider': { '@id': 'https://conceptralabs.in/#organization' },
            'description': 'We craft stunning, high-performance websites that load fast, rank well, and convert visitors into customers.'
          },
          {
            '@type': 'Service',
            'name': 'Mobile App Development',
            'provider': { '@id': 'https://conceptralabs.in/#organization' },
            'description': 'Cross-platform mobile applications that deliver native-like performance across iOS and Android.'
          },
          {
            '@type': 'Service',
            'name': 'ERP Systems & Portals',
            'provider': { '@id': 'https://conceptralabs.in/#organization' },
            'description': 'Custom ERP systems that unify operations — inventory, HR, finance, procurement, and more.'
          },
          {
            '@type': 'Service',
            'name': 'AI Automation Services',
            'provider': { '@id': 'https://conceptralabs.in/#organization' },
            'description': 'Automate repetitive tasks, make smarter decisions, and unlock new efficiencies with custom AI workflows.'
          }
        ]
      }
    }
  },
  {
    path: 'services/website-development',
    loadComponent: () => import('./pages/services/subpages/website-development').then(m => m.WebsiteDevelopmentComponent),
    data: {
      title: 'Website Development Company in Chennai | Custom Web Applications',
      description: 'Top-rated website development company in Chennai. We engineer high-speed, custom web applications, e-commerce stores, and PWAs with sub-1.2s load speeds and built-in SEO.',
      keywords: 'website development company Chennai, web developer Chennai, custom web application development, e-commerce website development Chennai, Angular web developers',
      ogImage: 'assets/og-image.png',
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://conceptralabs.in/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://conceptralabs.in/services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Website Development', 'item': 'https://conceptralabs.in/services/website-development' }
            ]
          },
          {
            '@type': 'Service',
            'name': 'Website Development Services',
            'provider': { '@type': 'SoftwareCompany', 'name': 'Conceptra Labs', 'url': 'https://conceptralabs.in' },
            'areaServed': 'Chennai',
            'description': 'High-speed, custom web application development, e-commerce platforms, and SEO-optimized web portals.'
          }
        ]
      }
    }
  },
  {
    path: 'services/custom-software-development',
    loadComponent: () => import('./pages/services/subpages/custom-software-development').then(m => m.CustomSoftwareDevelopmentComponent),
    data: {
      title: 'Custom Software Development Company in Chennai | Conceptra Labs',
      description: 'Leading custom software development company in Chennai. We build enterprise SaaS platforms, microservices architectures, custom databases, and secure REST APIs for growing businesses.',
      keywords: 'custom software development company Chennai, enterprise software developers Chennai, SaaS product development India, custom API development, cloud software engineering',
      ogImage: 'assets/og-image.png',
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://conceptralabs.in/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://conceptralabs.in/services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Custom Software Development', 'item': 'https://conceptralabs.in/services/custom-software-development' }
            ]
          },
          {
            '@type': 'Service',
            'name': 'Custom Software Development',
            'provider': { '@type': 'SoftwareCompany', 'name': 'Conceptra Labs', 'url': 'https://conceptralabs.in' },
            'areaServed': 'Chennai',
            'description': 'Enterprise custom software engineering, SaaS multi-tenant platform architecture, and cloud database solutions.'
          }
        ]
      }
    }
  },
  {
    path: 'services/school-erp-development',
    loadComponent: () => import('./pages/services/subpages/school-erp-development').then(m => m.SchoolErpDevelopmentComponent),
    data: {
      title: 'School ERP Software Development Company in Chennai | Conceptra Labs',
      description: 'Premier School ERP software development company in Chennai. Automate fee collection, biometric attendance, CCE report cards, parent mobile app, and GPS bus tracking.',
      keywords: 'school ERP Chennai, school management software Chennai, CBSE report card software, school fee collection software India, parent teacher mobile app',
      ogImage: 'assets/og-image.png',
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://conceptralabs.in/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://conceptralabs.in/services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'School ERP Development', 'item': 'https://conceptralabs.in/services/school-erp-development' }
            ]
          },
          {
            '@type': 'Service',
            'name': 'School ERP Software Development',
            'provider': { '@type': 'SoftwareCompany', 'name': 'Conceptra Labs', 'url': 'https://conceptralabs.in' },
            'areaServed': 'Chennai',
            'description': 'Complete cloud School ERP management software for fees, attendance, report cards, and parent apps.'
          }
        ]
      }
    }
  },
  {
    path: 'services/mobile-app-development',
    loadComponent: () => import('./pages/services/subpages/mobile-app-development').then(m => m.MobileAppDevelopmentComponent),
    data: {
      title: 'Mobile App Development Company in Chennai | iOS & Android Apps',
      description: 'Top mobile app development company in Chennai. We build high-performance Flutter and React Native cross-platform mobile applications for iOS and Android with 60fps native performance.',
      keywords: 'mobile app development company Chennai, Flutter app developers Chennai, iOS Android mobile app developers India, cross platform mobile apps, React Native app development',
      ogImage: 'assets/og-image.png',
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://conceptralabs.in/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://conceptralabs.in/services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Mobile App Development', 'item': 'https://conceptralabs.in/services/mobile-app-development' }
            ]
          },
          {
            '@type': 'Service',
            'name': 'Mobile App Development Services',
            'provider': { '@type': 'SoftwareCompany', 'name': 'Conceptra Labs', 'url': 'https://conceptralabs.in' },
            'areaServed': 'Chennai',
            'description': 'Cross-platform mobile applications for iOS and Android built with Flutter and React Native.'
          }
        ]
      }
    }
  },
  {
    path: 'services/ai-automation',
    loadComponent: () => import('./pages/services/subpages/ai-automation').then(m => m.AiAutomationComponent),
    data: {
      title: 'AI Automation & LLM Integration Services Chennai | Conceptra Labs',
      description: 'Enterprise AI automation company in Chennai. We integrate custom ChatGPT/Gemini APIs, RAG chatbots, automated PDF document parsing, and predictive analytics into business workflows.',
      keywords: 'AI automation services Chennai, LLM integration agency India, ChatGPT API integration, RAG AI chatbot development, automated document parsing software',
      ogImage: 'assets/og-image.png',
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://conceptralabs.in/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://conceptralabs.in/services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'AI Automation', 'item': 'https://conceptralabs.in/services/ai-automation' }
            ]
          },
          {
            '@type': 'Service',
            'name': 'AI Automation Services',
            'provider': { '@type': 'SoftwareCompany', 'name': 'Conceptra Labs', 'url': 'https://conceptralabs.in' },
            'areaServed': 'Chennai',
            'description': 'Enterprise AI agent development, RAG knowledge base chatbots, document parsing, and predictive analytics.'
          }
        ]
      }
    }
  },
  {
    path: 'services/business-automation',
    loadComponent: () => import('./pages/services/subpages/business-automation').then(m => m.BusinessAutomationComponent),
    data: {
      title: 'Business Process Automation Software Company India | Conceptra Labs',
      description: 'Business process automation company in Chennai. Streamline manual operations with automated ERP accounting sync, digital approval workflows, automated invoicing, and WhatsApp notifications.',
      keywords: 'business automation software India, business process automation Chennai, workflow automation agency, Tally ERP API integration, WhatsApp business billing automation',
      ogImage: 'assets/og-image.png',
      type: 'article',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://conceptralabs.in/' },
              { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://conceptralabs.in/services' },
              { '@type': 'ListItem', 'position': 3, 'name': 'Business Automation', 'item': 'https://conceptralabs.in/services/business-automation' }
            ]
          },
          {
            '@type': 'Service',
            'name': 'Business Automation Services',
            'provider': { '@type': 'SoftwareCompany', 'name': 'Conceptra Labs', 'url': 'https://conceptralabs.in' },
            'areaServed': 'Chennai',
            'description': 'Workflow automation pipelines connecting CRM, ERP, accounting, inventory, and payment gateways.'
          }
        ]
      }
    }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent),
    data: {
      title: 'Our Portfolio & Client Projects — Conceptra Labs',
      description: 'Explore our featured projects and client case studies, including e-commerce platforms, industrial ERP systems, logistics management portals, and AI/Robotics solutions.',
      keywords: 'software development portfolio, client projects, e-commerce case studies, custom app development examples, software agency portfolio',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Conceptra Labs Featured Projects',
        'description': 'Explore client projects built by Conceptra Labs, including clothing e-commerce, enterprise ERP systems, and robotics apps.',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Myha Couture',
            'description': 'A fully functional clothing e-commerce platform with Razorpay payment processing.'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'The Wooden Castle',
            'description': 'A modern responsive furniture e-commerce site with dynamic pricing customization.'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'CCTC Industrial ERP & Logistics Portal',
            'description': 'A secure cloud ERP and logistics supply chain portal built for Coimbatore Cotton & Textiles Consortium.'
          }
        ]
      }
    }
  },
  {
    path: 'why-us',
    loadComponent: () => import('./pages/why-us/why-us').then(m => m.WhyUsComponent),
    data: {
      title: 'Why Choose Conceptra Labs — The Smart Choice for Technology',
      description: 'See why ambitious businesses partner with Conceptra Labs instead of hiring freelancers. We focus on business growth, scaling, and high ROI.',
      keywords: 'why choose Conceptra Labs, agency vs freelancer, software development ROI, custom software benefits',
      ogImage: 'assets/og-image.png',
      type: 'website'
    }
  },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process').then(m => m.ProcessComponent),
    data: {
      title: 'Our Development Process & Timeline — Conceptra Labs',
      description: 'Learn about our structured development process from Discovery and Planning to Design, Development, Testing, and Deployment.',
      keywords: 'software development life cycle, agile software agency, design to deployment, development timeline',
      ogImage: 'assets/og-image.png',
      type: 'website'
    }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    data: {
      title: 'Contact Us & Book a Free Consultation — Conceptra Labs',
      description: 'Get in touch with Conceptra Labs today. Book a free 30-minute consultation to discuss your project requirements and digital strategy.',
      keywords: 'contact Conceptra Labs, hire software developers, software agency Chennai contact, digital product agency phone number, software developers Bangalore',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact Us — Conceptra Labs',
        'description': 'Contact Conceptra Labs to discuss your project requirements and digital strategy.',
        'mainEntity': {
          '@type': 'SoftwareCompany',
          'name': 'Conceptra Labs',
          'telephone': '+91-97107-59208',
          'email': 'contact@conceptralabs.in',
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
          ]
        }
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
