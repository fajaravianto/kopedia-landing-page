import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './components/navbar/navbar'; 
import { Hero } from './components/hero/hero'; 
// 1. Import fungsi registrasi Swiper
import { register } from 'swiper/element/bundle';
import AOS from 'aos';

// 2. Jalankan fungsi registrasinya
register();
@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App implements OnInit { // ⬅️ IMPLEMENTS ONINIT
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
      id: 'irs',
      name: 'Integrated Reload System',
      logo: '/irs-logo.png',
      desc: 'A reliable, high-transaction management solution. Handles mobile phone data traffic with maximum stability through an integrated backup-restore module and automated terminal.'
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
 
}