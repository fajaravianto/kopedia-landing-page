import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // KUNCI: Kita harus mengimpor RouterOutlet agar sistem multi-halaman bekerja
  imports: [RouterOutlet], 
  templateUrl: './app.html' // Sesuaikan jika nama file HTML Anda app.component.html
})
export class App {
  // Class ini sekarang dibiarkan kosong saja, 
  // karena seluruh fungsi dan logika sudah kita pindahkan ke home.ts
}