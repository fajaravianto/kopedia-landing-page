import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// KUNCI: Import Navbar agar bisa tampil di atas halaman
import { NavbarComponent } from '../components/navbar/navbar'; 
import { Router } from '@angular/router'; // KUNCI: Import Router

@Component({
  selector: 'app-ecosystem',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './ecosystem.html',
  styleUrls: ['./ecosystem.css']
})
export class EcosystemComponent {

  constructor(private router: Router) {}
  
  // Data Array untuk Sektor, Perusahaan, dan Produk
  ecosystemData = [
    {
      sector: 'Technology',
      icon: 'fa-microchip', // Menggunakan icon FontAwesome
      description: 'Digital infrastructure & SaaS solutions',
      companies: [
        {
          name: 'PT Sinar Mandala Teknologi',
          products: [
            { name: 'Simantek', url: 'https://simantek.id/' }
          ]
        },
        {
          name: 'PT Indonesia Super Exchange',
          products: [
            { name: 'IRS Market', url: 'https://irsmarket.com/' }
          ]
        },
        {
          name: 'PT Semangat Muda Sejahtera',
          products: [
            { name: 'Digicore', url: 'https://digicore.id/' }
          ]
        }
      ]
    },
    {
      sector: 'Retail & Commerce',
      icon: 'fa-store',
      description: 'B2B marketplace and retail management',
      companies: [
        {
          name: 'PT Kohinoor Retail Nusantara',
          products: [
            { name: 'Kopedia B2B', url: '#' },
            { name: 'Kohinoor POS', url: '#' }
          ]
        }
      ]
    },
    {
      sector: 'Food & Beverage',
      icon: 'fa-utensils',
      description: 'Culinary ecosystems and supply chain',
      companies: [
        {
          name: 'PT Kuliner Rasa Nusantara',
          products: [
            { name: 'Kohinoor F&B Hub', url: '#' }
          ]
        }
      ]
    }
  ];

  // 1. Fungsi Scroll Button "Learn More"
  scrollToEcosystemBody() {
    const element = document.getElementById('ecosystem-body');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 2. Fungsi Navigasi Footer
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

  goToHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}