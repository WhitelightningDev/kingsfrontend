import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingApiService } from '../../services/booking-api.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './checkout.html',
})
export class CheckoutComponent {
  // Full booking payload coming from Confirm page
  state = signal<any>(null);

  // Payment state
  paymentMethod = signal<'pay_on_site' | 'card' | 'eft'>('pay_on_site');
  termsAccepted = signal<boolean>(false);

  total = computed(() => this.state()?.amount ?? 0);

  constructor(
    private router: Router,
    private bookingApi: BookingApiService,
  ) {
    const nav = this.router.getCurrentNavigation();
    const incoming = nav?.extras?.state ?? (typeof history !== 'undefined' ? history.state : null);
    this.state.set(incoming);
  }

  get hasData() { return !!this.state(); }

  placeOrder() {
    if (!this.termsAccepted()) {
      alert('Please accept the terms to continue.');
      return;
    }

    const payload = {
      ...this.state(),
      payment: {
        method: this.paymentMethod(),
        paid: false,
      },
    };

    console.log('CHECKOUT_SUBMIT', payload);

    this.bookingApi.book(payload).subscribe({
      next: (res) => {
        if (payload.payment.method === 'card' && res?.redirectUrl) {
          window.location.href = res.redirectUrl;
          return;
        }

        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error('Booking failed', err);
        alert('Booking failed. Please try again.');
      },
    });
  }
}
