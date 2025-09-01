import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(private router: Router) {
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
        paid: false, // hook up real payment later
      },
    };

    console.log('CHECKOUT_SUBMIT', payload);
    // TODO: call your API here, then route to a thank-you page
    this.router.navigateByUrl('/');
  }
}