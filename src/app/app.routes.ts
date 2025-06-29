import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { Bookingpage } from './pages/bookingpage/bookingpage';
import { Aboutus } from './pages/aboutus/aboutus';
export const routes: Routes = [
  {
    path: '',
    component: Homepage,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'make-a-booking',
    component: Bookingpage,
    data: { breadcrumb: 'Make a Booking' }
  },
  {
    path: 'about-us',
    component: Aboutus,
    data: { breadcrumb: 'About Us' }
  }
];
