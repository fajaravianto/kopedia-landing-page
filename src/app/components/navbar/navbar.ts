import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Penting untuk ngClass / ngIf di HTML

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  // ================= 1. FUNGSI MOBILE MENU (Yang Sempat Hilang) =================
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // ================= 2. FUNGSI ROUTING & SCROLL =================
  constructor(private router: Router) {}

  scrollTo(sectionId: string) {
    // Tutup menu mobile secara otomatis saat link diklik
    this.isMobileMenuOpen = false; 

    // Mengecek apakah URL saat ini adalah halaman Home ('/')
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Jika di halaman lain (Privacy Policy), pindah ke Home dulu
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

  goToHome() {
    this.isMobileMenuOpen = false; 
    
    if (this.router.url === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }
}