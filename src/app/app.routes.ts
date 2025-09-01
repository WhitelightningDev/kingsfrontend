import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { BookingPage } from './pages/booking-page/booking-page';
import { BookWash } from './pages/book-wash/book-wash';

export const routes: Routes = [
  {
    path: '', component: Homepage
  },
  {
    path: 'Book-a-wash', component: BookingPage
  },
  {
    path: 'Book-a-wash/details', component: BookWash
  }
];
