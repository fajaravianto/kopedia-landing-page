import { Component, HostListener } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  
  isMobileCategoryOpen = false;
  activeCategoryName = 'CATEGORIES'; 

  constructor(private router: Router) {}

  // ==============================================================
  // Struktur Data Lengkap (100% English Version)
  // ==============================================================
  productCategories = [
    {
      id: 'commerce',
      name: 'Commerce',
      products: [
        {
          name: 'Simantek',
          description: 'Integrated E-Commerce platform to digitize your business operations easily and securely.',
          url: 'https://simantek.id/'
        },
        {
          name: 'IRS Market',
          description: 'B2B Marketplace featuring the widest H2H connectivity for your digital product needs.',
          url: 'https://irsmarket.com/'
        }
      ]
    },
    {
      id: 'sales',
      name: 'Sales',
      products: [
        { name: 'Kopedia CRM', description: 'Comprehensive CRM platform designed specifically for customer-facing teams.', url: '#' },
        { name: 'Kopedia SalesIQ', description: 'Live chat application to engage and convert your website visitors in real-time.', url: '#' }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing',
      products: [
        { name: 'Kopedia Campaigns', description: 'Create, send, and effortlessly track effective email marketing campaigns.', url: '#' },
        { name: 'Kopedia Social', description: 'All-in-one social media management tool tailored for growing businesses.', url: '#' }
      ]
    },
    {
      id: 'service',
      name: 'Service',
      products: [
        { name: 'Kopedia Desk', description: 'Advanced help desk software to deliver top-tier customer support experiences.', url: '#' },
        { name: 'Kopedia Assist', description: 'Secure remote support and access software engineered for IT teams.', url: '#' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      products: [
        { name: 'Kopedia Books', description: 'Powerful and intuitive accounting platform for modern, growing businesses.', url: '#' },
        { name: 'Kopedia Invoice', description: 'Hassle-free invoicing, automated billing, and swift payment collection.', url: '#' }
      ]
    },
    {
      id: 'collaboration',
      name: 'Email & Collaboration',
      products: [
        { name: 'Kopedia Mail', description: 'Highly secure, ad-free business email service designed for professional teams.', url: '#' },
        { name: 'Kopedia WorkDrive', description: 'Cloud-based file management system enabling seamless team collaboration.', url: '#' }
      ]
    },
    {
      id: 'hr',
      name: 'Human Resources',
      products: [
        { name: 'Kopedia People', description: 'Organize, automate, and simplify all your complex HR processes from one dashboard.', url: '#' },
        { name: 'Kopedia Recruit', description: 'Intelligent applicant tracking system to help you source and hire the right talent.', url: '#' }
      ]
    },
    {
      id: 'legal',
      name: 'Legal',
      products: [
        { name: 'Kopedia Contracts', description: 'Comprehensive contract lifecycle management software for legal compliance.', url: '#' }
      ]
    },
    {
      id: 'security',
      name: 'Security & IT',
      products: [
        { name: 'Kopedia Vault', description: 'Enterprise-grade secure password manager for remote teams and organizations.', url: '#' },
        { name: 'Kopedia MDM', description: 'Robust Mobile Device Management solutions for modern and hybrid workplaces.', url: '#' }
      ]
    },
    {
      id: 'analytics',
      name: 'BI & Analytics',
      products: [
        { name: 'Kopedia Analytics', description: 'Modern self-service Business Intelligence and interactive data analytics platform.', url: '#' }
      ]
    },
    {
      id: 'projects',
      name: 'Project Management',
      products: [
        { name: 'Kopedia Projects', description: 'Plan, track, and collaborate on complex projects efficiently and on schedule.', url: '#' },
        { name: 'Kopedia Sprints', description: 'Agile project management ecosystem built specifically for software development teams.', url: '#' }
      ]
    },
    {
      id: 'developer',
      name: 'Developer Platforms',
      products: [
        {
          name: 'SoftwarePulsa IRSX',
          description: 'The most reliable credit server and PPOB management software ensuring 99.9% uptime.',
          url: 'https://softwarepulsairsx.com/'
        },
        { name: 'Kopedia Creator', description: 'Intuitive low-code platform empowering you to build custom business applications.', url: '#' }
      ]
    },
    {
      id: 'iot',
      name: 'IoT',
      products: [
        { name: 'Kopedia IoT Hub', description: 'Connect, manage, and scale your IoT devices securely across the global network.', url: '#' }
      ]
    }
  ];

  toggleMobileCategory() {
    this.isMobileCategoryOpen = !this.isMobileCategoryOpen;
  }

  scrollToCategory(id: string) {
    this.isMobileCategoryOpen = false;
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollTo(sectionId: string) {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentActive = 'CATEGORIES';
    const scrollOffset = 250; 

    for (const cat of this.productCategories) {
      const element = document.getElementById(cat.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= scrollOffset && rect.bottom >= scrollOffset) {
          currentActive = cat.name;
          break; 
        }
      }
    }
    this.activeCategoryName = currentActive;
  }
}