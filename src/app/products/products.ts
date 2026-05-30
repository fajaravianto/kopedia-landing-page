import { Component } from '@angular/core';
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
  
  // Tambahkan variabel ini untuk mengatur status dropdown di HP
  isMobileCategoryOpen = false;

  constructor(private router: Router) {}

  // Struktur Data Lengkap (Real + Dummy ala Zoho)
  productCategories = [
    {
      id: 'commerce',
      name: 'Commerce',
      products: [
        {
          name: 'Simantek',
          description: 'Platform E-Commerce terintegrasi untuk mendigitalisasi bisnis Anda dengan mudah dan aman.',
          url: 'https://simantek.id/'
        },
        {
          name: 'IRS Market',
          description: 'Marketplace B2B dengan konektivitas H2H terluas untuk kebutuhan produk digital.',
          url: 'https://irsmarket.com/'
        }
      ]
    },
    {
      id: 'sales',
      name: 'Sales',
      products: [
        { name: 'Kopedia CRM', description: 'Comprehensive CRM platform for customer-facing teams.', url: '#' },
        { name: 'Kopedia SalesIQ', description: 'Live chat app to engage and convert website visitors.', url: '#' }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing',
      products: [
        { name: 'Kopedia Campaigns', description: 'Create, send, and track effective email marketing campaigns.', url: '#' },
        { name: 'Kopedia Social', description: 'All-in-one social media management for growing businesses.', url: '#' }
      ]
    },
    {
      id: 'service',
      name: 'Service',
      products: [
        { name: 'Kopedia Desk', description: 'Help desk software to deliver top-tier customer support.', url: '#' },
        { name: 'Kopedia Assist', description: 'Remote support and access software for IT teams.', url: '#' }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      products: [
        { name: 'Kopedia Books', description: 'Powerful accounting platform for growing businesses.', url: '#' },
        { name: 'Kopedia Invoice', description: 'Hassle-free invoicing and payment collection.', url: '#' }
      ]
    },
    {
      id: 'collaboration',
      name: 'Email & Collaboration',
      products: [
        { name: 'Kopedia Mail', description: 'Secure, ad-free business email service for teams.', url: '#' },
        { name: 'Kopedia WorkDrive', description: 'Online file management for teams to work together.', url: '#' }
      ]
    },
    {
      id: 'hr',
      name: 'Human Resources',
      products: [
        { name: 'Kopedia People', description: 'Organize, automate, and simplify your HR processes.', url: '#' },
        { name: 'Kopedia Recruit', description: 'Applicant tracking system to hire the right talent.', url: '#' }
      ]
    },
    {
      id: 'legal',
      name: 'Legal',
      products: [
        { name: 'Kopedia Contracts', description: 'Comprehensive contract lifecycle management software.', url: '#' }
      ]
    },
    {
      id: 'security',
      name: 'Security & IT',
      products: [
        { name: 'Kopedia Vault', description: 'Secure password manager for teams and enterprises.', url: '#' },
        { name: 'Kopedia MDM', description: 'Mobile Device Management for modern workplaces.', url: '#' }
      ]
    },
    {
      id: 'analytics',
      name: 'BI & Analytics',
      products: [
        { name: 'Kopedia Analytics', description: 'Modern self-service BI and data analytics platform.', url: '#' }
      ]
    },
    {
      id: 'projects',
      name: 'Project Management',
      products: [
        { name: 'Kopedia Projects', description: 'Plan, track, and collaborate on projects effectively.', url: '#' },
        { name: 'Kopedia Sprints', description: 'Agile project management for software development teams.', url: '#' }
      ]
    },
    {
      id: 'developer',
      name: 'Developer Platforms',
      products: [
        {
          name: 'SoftwarePulsa IRSX',
          description: 'Software manajemen server pulsa dan PPOB paling andal dengan uptime 99.9%.',
          url: 'https://softwarepulsairsx.com/'
        },
        { name: 'Kopedia Creator', description: 'Low-code platform to build custom business applications.', url: '#' }
      ]
    },
    {
      id: 'iot',
      name: 'IoT',
      products: [
        { name: 'Kopedia IoT Hub', description: 'Connect, manage, and scale your IoT devices securely.', url: '#' }
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
}