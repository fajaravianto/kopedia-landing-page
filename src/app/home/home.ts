import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar'; 
import { Hero } from '../components/hero/hero'; 
// 1. Import fungsi registrasi Swiper
import { register } from 'swiper/element/bundle';
import AOS from 'aos';

// 2. Jalankan fungsi registrasinya
register();
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Hero, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit { // ⬅️ IMPLEMENTS ONINIT
  title = 'kopedia-landing-page';

  // ⬅️ JALANKAN INIT AOS DI SINI
  ngOnInit() {
    AOS.init({
      duration: 1000, // Durasi animasi 1 detik
      once: true,     // Animasi hanya jalan sekali saat di-scroll turun
      offset: 100,    // Animasi mulai 100px sebelum elemen terlihat
    });  
  }
 digitalProducts = [
    {
      id: 'simantek',
      name: 'Simantek Biller System',
      logo: '/simantek-logo.png', 
      desc: 'Simantek is a cloud-based platform that provides mobile phone credit server services and serves as a solution for digital product businesses. With a fast, secure, and efficient system, Simantek helps entrepreneurs manage digital product transactions easily.'
    },
    {
      id: 'irsmarket',
      name: 'IRS Market',
      logo: '/irsmarket-logo.png',
      desc: 'B2B Digital Marketplace. A new era of secure and trusted H2H transactions. Connecting reseller and supplier ecosystems in a single, integrated portal for efficient national digital product distribution.'
    },
    {
      id: 'digicore',
      name: 'DigiCore',
      logo: '/digicore-logo.png',
      desc: 'Core infrastructure for thousands of digital product services. Providing competitive pricing without compromising on the quality of technical support to help our partners businesses thrive.'
    }
  ];

  // 2. State untuk melacak produk yang sedang diklik (Default: Simantek)
  activeProduct = this.digitalProducts[0];

  // 3. Fungsi yang dipanggil saat logo di klik
  selectProduct(product: any) {
    this.activeProduct = product;
  }

  faqs = [
    {
      q: 'What is Kopedia?',
      a: 'Kopedia by Kohinoor is an integrated digital ecosystem specifically designed to revolutionize your digital product business management. More than just a platform, Kopedia is an intelligent "Super-Dashboard" that brings together server infrastructure, software licensing, and digital product distribution (PPOB) into one efficient and scalable portal.',
      open: false
    },
    {
      q: 'Is Kopedia safe to use?',
      a: 'Security is the DNA of our ecosystem. Kopedia is built on an enterprise-grade cloud architecture with a 99.9% uptime guarantee. We implement end-to-end data encryption, real-time transaction monitoring 24/7, and integrated backup-restore modules to ensure every byte of your business data is absolutely protected.',
      open: false
    },
    {
      q: 'What features does Kopedia offer?',
      a: 'Kopedia is equipped with complete ammunition for business acceleration: starting from high-speed routing capabilities capable of handling millions of transactions per day, B2B Marketplace access for the widest H2H connectivity, seamless API integration, to real-time transaction analytics, all orchestrated in one smart dashboard.',
      open: false
    },
    {
      q: 'Is Kopedia accessible on all electronic devices?',
      a: 'Of course. The Kopedia ecosystem is designed with a cloud-native approach and a high-level responsive interface (cross-platform). You have full control over your business operations anytime and anywhere—whether through a desktop PC in the office, a tablet during presentations, or directly from your smartphone in your hand.',
      open: false
    }
  ];

  // Toggle FAQ
  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
 
}