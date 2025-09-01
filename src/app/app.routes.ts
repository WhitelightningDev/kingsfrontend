import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { BookingPage } from './pages/booking-page/booking-page';

export const routes: Routes = [
  {
    path: '', component: Homepage
  },
  {
    path: 'Book-a-wash', component: BookingPage
  }
];
