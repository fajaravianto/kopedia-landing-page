import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy';
import { EcosystemComponent } from './ecosystem/ecosystem'; // Tambahkan ini
import { ProductsComponent } from './products/products'; // Tambahkan ini

export const routes: Routes = [
  // 1. Jika URL kosong (localhost:4200 / domain utama), arahkan ke Landing Page
  { path: '', component: HomeComponent },
  
  // 2. Jika URL /privacy-policy, arahkan ke Kebijakan Privasi
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  
  // 3. Fallback (jika user mengetik URL ngawur, kembalikan ke Home)
  { path: 'ecosystem', component: EcosystemComponent },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '' }
];