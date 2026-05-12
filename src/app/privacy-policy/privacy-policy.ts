import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import komponen navbar (Sesuaikan path folder jika perlu, misal: '../components/navbar/navbar.ts')
import { NavbarComponent } from '../components/navbar/navbar'; 

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  // KUNCI: Tambahkan NavbarComponent di dalam array imports ini
  imports: [CommonModule, NavbarComponent], 
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.css']
})
export class PrivacyPolicyComponent {

}