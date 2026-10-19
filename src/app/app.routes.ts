import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    data: {
      title: 'Conceptra Labs — Custom Software & Web Development Company in Chennai',
      description: 'Conceptra Labs is a premier custom software development and web development company in Chennai, India. We build high-speed web apps, mobile apps, School ERP software, and AI automation.',
      keywords: 'software company Chennai, web development company Chennai, custom software developers, school ERP Chennai, mobile app developers, AI automation agency, software agency India',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
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
            'description': 'Premier custom software and web development company in Chennai specializing in web apps, School ERP software, mobile applications, and AI automation.',
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
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Software Engineering Services',
              'itemListElement': [
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Custom Website & Web App Development' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'School ERP Software Development' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Cross-Platform Mobile App Development' } },
                { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Enterprise AI Automation & RAG Chatbots' } }
              ]
            },
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
            'publisher': { '@id': 'https://conceptralabs.in/#organization' }
          }
        ]
      }
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
            '@type': 'ProfessionalService',
            '@id': 'https://conceptralabs.in/#organization',
            'name': 'Conceptra Labs',
            'url': 'https://conceptralabs.in',
            'logo': 'https://conceptralabs.in/assets/conceptra-logo.jpeg',
            'image': 'https://conceptralabs.in/assets/og-image.png',
            'email': 'contact@conceptralabs.in',
            'telephone': '+91-97107-59208',
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '5.0',
              'reviewCount': '9'
            },
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
            '@type': 'ProfessionalService',
            '@id': 'https://conceptralabs.in/#organization',
            'name': 'Conceptra Labs',
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '5.0',
              'reviewCount': '9'
            }
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
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How long does it take to develop a custom website?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Standard business websites take 2 to 4 weeks, while complex web applications or enterprise portals typically take 4 to 8 weeks.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Will my website be search engine optimized (SEO)?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! Every website we build includes baseline Technical SEO, structured data schema, mobile optimization, and fast loading speed config.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is the cost of website development in Chennai?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Website development costs vary based on features and functionality. Basic corporate sites start around ₹25,000, while custom web applications range higher.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you provide website maintenance after launch?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we provide 30 days of complimentary post-launch support and optional ongoing monthly maintenance plans.'
                }
              }
            ]
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
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Why choose custom software development over commercial off-the-shelf software?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Custom software adapts 100% to your unique business workflows, eliminates recurring monthly licensing costs per user, and provides complete ownership of your proprietary data.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How do you ensure data security in custom software systems?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'We implement industry-standard AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, JWT token authentication, and regular vulnerability audits.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can custom software integrate with our existing accounting or ERP software?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! We build secure RESTful and GraphQL APIs to seamlessly synchronize data with systems like Tally, SAP, QuickBooks, Salesforce, and custom legacy databases.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Who owns the software source code after development is completed?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'You do. Conceptra Labs transfers 100% full intellectual property (IP) ownership and git source repository access to your organization upon project completion.'
                }
              }
            ]
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
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Is Conceptra School ERP compliant with CBSE and Matriculation board report cards?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! Our School ERP supports customizable CCE and CBSE grading templates, percentage calculations, and multi-term report card PDFs.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can parents pay school fees online using UPI or Credit Cards?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Absolutely. We integrate secure Indian payment gateways like Razorpay, PayU, and CCAvenue allowing instant UPI, NetBanking, and card payments.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How does the automated WhatsApp fee reminder work?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'The system automatically sends scheduled WhatsApp alerts to parents 5 days before fee due dates with a direct 1-click online payment link.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can we import our existing student data into the new ERP?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! We handle the complete data migration process from Excel spreadsheets or legacy software into Conceptra School ERP free of charge.'
                }
              }
            ]
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
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Should I choose Flutter or separate Native iOS/Android apps?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'For 95% of business applications, Flutter provides identical 60fps native performance, half the development cost, and faster time-to-market compared to separate native apps.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How long does it take to develop a mobile application?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Standard MVP mobile apps take 4 to 6 weeks, while feature-rich enterprise applications take 8 to 12 weeks from design to store deployment.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you publish the mobile app to my App Store and Google Play accounts?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! We handle the entire preparation, screenshot design, privacy policy setup, and store submission process under your official developer accounts.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can the mobile app work offline without internet connection?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we implement offline-first database synchronization (SQLite/Hive) so users can perform actions offline, which automatically sync when connection returns.'
                }
              }
            ]
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
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Is our corporate data safe when implementing AI automation?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! We build private enterprise RAG pipelines using dedicated API keys where your data is strictly encrypted and never used for public AI model training.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is the difference between simple automation and AI automation?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Simple automation follows strict static rules (if A then B), whereas AI automation uses machine learning to understand unstructured text, read PDFs, answer complex questions, and make decisions.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How long does it take to implement a custom AI Chatbot or Document Parser?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'A prototype RAG AI chatbot or document parser can be built and integrated into your platform within 2 to 3 weeks.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can AI automation integrate with WhatsApp?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! We integrate AI models directly with the official WhatsApp Business API so your business can answer customer leads 24/7 on WhatsApp.'
                }
              }
            ]
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
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'Can you integrate custom automation with legacy software without APIs?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes! We use custom database connectors, web scraping, and automated data queues to extract and sync data even from legacy desktop software.'
                }
              },
              {
                '@type': 'Question',
                'name': 'How does WhatsApp business automation work for client invoicing?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'When a new invoice is created in your ERP or accounting system, our automation trigger immediately sends a formatted WhatsApp message to the customer with a PDF download and payment link.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is the ROI of implementing business process automation?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Most clients recover their entire software investment within 3 to 6 months through reduced labor hours, faster invoice collection, and eliminated order entry errors.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Will business automation interrupt our current daily operations during setup?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'No. We build and test all integration pipelines in a staging sandbox environment first. Live deployment occurs seamlessly without downtime.'
                }
              }
            ]
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
            'name': 'Myha Couture Clothing E-Commerce',
            'description': 'A fully functional clothing e-commerce platform with Razorpay payment processing and inventory sync.'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'The Wooden Castle Furniture Platform',
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
      title: 'Why Choose Conceptra Labs — Scalable Software & Engineering Partner',
      description: 'See why ambitious businesses and founders partner with Conceptra Labs instead of freelancers. We deliver sub-second performance, zero single-person risk, and 24/7 SLA care.',
      keywords: 'why choose Conceptra Labs, agency vs freelancer, custom software ROI, software agency Chennai, software developers Bangalore, SLA maintenance retainers',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id': 'https://conceptralabs.in/why-us/#webpage',
            'url': 'https://conceptralabs.in/why-us',
            'name': 'Why Choose Conceptra Labs — Digital Engineering & SLA Partner',
            'description': 'Discover why leading businesses partner with Conceptra Labs for web apps, mobile products, cloud ERP systems, and AI automation.'
          },
          {
            '@type': 'SoftwareCompany',
            '@id': 'https://conceptralabs.in/#organization',
            'name': 'Conceptra Labs',
            'url': 'https://conceptralabs.in'
          }
        ]
      }
    }
  },
  {
    path: 'process',
    loadComponent: () => import('./pages/process/process').then(m => m.ProcessComponent),
    data: {
      title: 'Our Development Process & Timeline — Conceptra Labs',
      description: 'Learn about our structured development process from Discovery and Planning to Design, Development, Testing, and Deployment.',
      keywords: 'software development life cycle, agile software agency, design to deployment, development timeline, software sprint planning',
      ogImage: 'assets/og-image.png',
      type: 'website',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Conceptra Labs 7-Phase Software Engineering Framework',
        'description': 'Proven agile software development lifecycle from discovery to cloud deployment and SLA maintenance.',
        'step': [
          { '@type': 'HowToStep', 'name': 'Discovery & Scoping', 'text': 'Technical requirements analysis and architecture blueprint creation.' },
          { '@type': 'HowToStep', 'name': 'Architecture & Database Design', 'text': 'Database schema design and API contract definition.' },
          { '@type': 'HowToStep', 'name': 'UI/UX Design', 'text': 'Interactive Figma wireframing and design system tokens.' },
          { '@type': 'HowToStep', 'name': 'Agile Development Sprints', 'text': 'Clean modular frontend and backend engineering.' },
          { '@type': 'HowToStep', 'name': 'Testing & Security Audit', 'text': 'OWASP vulnerability scans and cross-device QA.' },
          { '@type': 'HowToStep', 'name': 'Deployment & Launch', 'text': 'CI/CD zero-downtime deployment with SSL and analytics.' },
          { '@type': 'HowToStep', 'name': 'SLA Support & Retainer', 'text': '24/7 uptime monitoring and continuous feature upgrades.' }
        ]
      }
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
        '@graph': [
          {
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
          },
          {
            '@type': 'FAQPage',
            'mainEntity': [
              {
                '@type': 'Question',
                'name': 'How long does a typical project take?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Project timelines vary based on scope. A standard website takes 3–5 weeks, mobile apps 6–10 weeks, and ERP systems 10–16 weeks. We provide a detailed sprint roadmap in your proposal.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you work with international clients?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes — we work with clients across India, UAE, UK, and Singapore. All communication is in English and we adapt to your time zone for meetings.'
                }
              },
              {
                '@type': 'Question',
                'name': 'What is included in the SLA support retainer?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Our SLA retainers include 99.9% uptime monitoring, daily encrypted database backups, security vulnerability scans, bug fixes, and monthly performance audits. Starting at ₹4,999/month.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Who owns the source code?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': '100% IP and code ownership transfers to you upon project completion and final payment. We provide full GitHub repository access and deployment credentials.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Can you work with my existing codebase?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Absolutely. We regularly audit, refactor, and extend existing codebases. Our technical assessment will identify upgrade paths and risk areas in the first scoping call.'
                }
              },
              {
                '@type': 'Question',
                'name': 'Do you sign NDAs?',
                'acceptedAnswer': {
                  '@type': 'Answer',
                  'text': 'Yes, we sign NDAs before sharing any project details. Confidentiality of your business idea and technical implementation is treated as a priority.'
                }
              }
            ]
          }
        ]
      }
    }
  },
  {
    path: 'insights',
    loadComponent: () => import('./pages/insights/insights').then(m => m.InsightsComponent),
    data: {
      title: 'Engineering Insights & Tech Blueprints — Conceptra Labs',
      description: 'Technical insights, AI automation guides, RAG system blueprints, and ERP architecture articles written by our engineering lead architects.',
      keywords: 'AI automation articles, software architecture insights, RAG chatbots guide, Angular SSR optimization, school ERP microservices',
      ogImage: 'assets/og-image.png',
      type: 'blog',
      schema: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'Conceptra Labs Public Engineering Engine',
        'description': 'Technical write-ups, software architecture principles, and system performance benchmarks from our engineering team.',
        'url': 'https://conceptralabs.in/insights',
        'publisher': {
          '@type': 'SoftwareCompany',
          'name': 'Conceptra Labs',
          'url': 'https://conceptralabs.in'
        },
        'blogPost': [
          {
            '@type': 'BlogPosting',
            'headline': 'Architecting High-Performance B2B Web Applications with Angular SSR',
            'description': 'A technical overview of combining Angular Server-Side Rendering (SSR) with hydration strategies to deliver sub-second initial page loads and 95+ Core Web Vitals.',
            'url': 'https://conceptralabs.in/insights?article=architecting-high-performance-b2b-web-applications-angular-ssr',
            'author': { '@type': 'Organization', 'name': 'Conceptra Technical Team' },
            'datePublished': '2026-01-15'
          },
          {
            '@type': 'BlogPosting',
            'headline': 'Centralizing Business Operations with Custom Cloud ERP Systems',
            'description': 'How custom ERP architecture unifies inventory, student records, fee collection, and billing into one secure PostgreSQL database cluster.',
            'url': 'https://conceptralabs.in/insights?article=centralizing-business-operations-custom-cloud-erp',
            'author': { '@type': 'Organization', 'name': 'Conceptra Technical Team' },
            'datePublished': '2026-02-01'
          },
          {
            '@type': 'BlogPosting',
            'headline': 'Automating Enterprise Workflows with WhatsApp API & Razorpay Webhooks',
            'description': 'Eliminating manual administrative tasks by building bi-directional integrations between payment gateways, accounting software, and instant messaging channels.',
            'url': 'https://conceptralabs.in/insights?article=automating-enterprise-workflows-whatsapp-razorpay-webhooks',
            'author': { '@type': 'Organization', 'name': 'Conceptra Technical Team' },
            'datePublished': '2026-02-20'
          },
          {
            '@type': 'BlogPosting',
            'headline': 'Containerization & Zero-Downtime Deployment Best Practices',
            'description': 'Docker containerization and automated blue-green CI/CD deployment architectures for enterprise web and microservices.',
            'url': 'https://conceptralabs.in/insights?article=containerization-zero-downtime-deployment-best-practices',
            'author': { '@type': 'Organization', 'name': 'Conceptra Technical Team' },
            'datePublished': '2026-03-01'
          }
        ]
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
