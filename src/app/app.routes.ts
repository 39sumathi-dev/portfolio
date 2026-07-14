import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    data: {
      title: 'Conceptra Labs — Design. Develop. Automate. Grow.',
      description: 'Conceptra Labs is a premium software development agency in Chennai and Bengaluru, India. We build websites, applications, ERP systems, and AI automation solutions.',
      keywords: 'web development, app development, AI automation, ERP systems, digital agency, Conceptra Labs, software developers Chennai, software developers Bangalore, web developers near me',
      ogImage: 'assets/og-image.png',
      type: 'website'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    data: {
      title: 'About Us — Conceptra Labs',
      description: 'Learn more about Conceptra Labs, our mission, values, our experienced team of developers and designers, and our cutting-edge tech stack.',
      keywords: 'about Conceptra Labs, software development team, technology partner, digital agency India, developers Chennai, developers Bangalore',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'AboutPage',
            '@id': 'https://conceptralabs.com/about/#webpage',
            'url': 'https://conceptralabs.com/about',
            'name': 'About Us — Conceptra Labs',
            'description': 'Learn more about Conceptra Labs, our mission, values, and our tech stack.'
          },
          {
            '@type': 'ProfessionalService',
            '@id': 'https://conceptralabs.com/#organization',
            'name': 'Conceptra Labs',
            'url': 'https://conceptralabs.com',
            'logo': 'https://conceptralabs.com/assets/conceptra-logo.jpeg',
            'image': 'https://conceptralabs.com/assets/og-image.png',
            'email': 'conceptra.edu@gmail.com',
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
      title: 'Our Services — Web, App, AI & ERP Solutions | Conceptra Labs',
      description: 'Discover our premium digital services, including modern web development, cross-platform mobile apps, custom ERP systems, and AI automation.',
      keywords: 'web development services, mobile app development, custom ERP software, AI automation agency, business intelligence dashboards, software developers Chennai, software developers Bangalore',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'ProfessionalService',
            '@id': 'https://conceptralabs.com/#organization',
            'name': 'Conceptra Labs'
          },
          {
            '@type': 'Service',
            'name': 'Web Development Services',
            'provider': { '@id': 'https://conceptralabs.com/#organization' },
            'description': 'We craft stunning, high-performance websites that load fast, rank well, and convert visitors into customers.'
          },
          {
            '@type': 'Service',
            'name': 'Mobile App Development',
            'provider': { '@id': 'https://conceptralabs.com/#organization' },
            'description': 'Cross-platform mobile applications that deliver native-like performance across iOS and Android.'
          },
          {
            '@type': 'Service',
            'name': 'ERP Systems & Portals',
            'provider': { '@id': 'https://conceptralabs.com/#organization' },
            'description': 'Custom ERP systems that unify operations — inventory, HR, finance, procurement, and more.'
          },
          {
            '@type': 'Service',
            'name': 'AI Automation Services',
            'provider': { '@id': 'https://conceptralabs.com/#organization' },
            'description': 'Automate repetitive tasks, make smarter decisions, and unlock new efficiencies with custom AI workflows.'
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
          '@type': 'ProfessionalService',
          'name': 'Conceptra Labs',
          'telephone': '+91-97107-59208',
          'email': 'conceptra.edu@gmail.com',
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
