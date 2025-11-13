import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { BookingPage } from './pages/booking-page/booking-page';
import { BookWash } from './pages/book-wash/book-wash';
import { ConfirmComponent } from './pages/confirm/confirm';
import { BookingDetailsComponent } from './pages/booking-details/booking-details';
import { CheckoutComponent } from './pages/checkout/checkout';
import { Packages } from './pages/packages/packages';
import { FaqPage } from './pages/faq/faq';
import { GalleryPage } from './pages/gallery/gallery';

export const routes: Routes = [
  {
    path: 'packages', component: Packages
  },
  {
    path: '', component: Homepage
  },
  {
    path: 'Book-a-wash', component: BookingPage
  },
  { path: 'Book-a-wash/details-form', component: BookingDetailsComponent },
  {
    path: 'Book-a-wash/details', component: BookWash
  },
  { path: 'Book-a-wash/confirm', component: ConfirmComponent },
   { path: 'Book-a-wash/checkout', component: CheckoutComponent },
   { path: 'faq', component: FaqPage },
   { path: 'gallery', component: GalleryPage },
];
