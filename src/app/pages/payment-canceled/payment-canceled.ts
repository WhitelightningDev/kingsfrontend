import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment-canceled',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './payment-canceled.html',
})
export class PaymentCanceledComponent {
  bookingId = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params) => {
      this.bookingId.set(params.get('bookingId'));
    });
  }
}

