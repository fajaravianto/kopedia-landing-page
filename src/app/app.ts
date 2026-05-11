import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'; 
import { Hero } from './components/hero/hero'; 
// 1. Import fungsi registrasi Swiper
import { register } from 'swiper/element/bundle';
import AOS from 'aos';

// 2. Jalankan fungsi registrasinya
register();
@Component({
  selector: 'app-root',
  imports: [Navbar, Hero],
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
}