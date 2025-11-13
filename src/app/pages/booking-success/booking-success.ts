import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../../api.config';

@Component({
  selector: 'app-booking-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './booking-success.html',
})
export class BookingSuccessComponent {
  message = signal('Confirming your booking...');
  error = signal('');
  bookingId = signal<string | null>(null);

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.queryParamMap.subscribe((params) => {
      const id = params.get('bookingId');
      this.bookingId.set(id);

      if (!id) {
        this.error.set('Missing booking reference.');
        this.message.set('');
        return;
      }

      this.http
        .post(`${API_BASE_URL}/api/bookings/send-confirmation`, { bookingId: id })
        .subscribe({
          next: () => {
            this.message.set(
              'Your booking was confirmed successfully! A confirmation email has been sent.',
            );
          },
          error: () => {
            this.error.set(
              'Failed to send confirmation email. Please contact support.',
            );
            this.message.set('');
          },
        });
    });
  }
}

