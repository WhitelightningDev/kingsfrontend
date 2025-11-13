// src/app/pages/booking-details/booking-details.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './booking-details.html'
})
export class BookingDetailsComponent {
  state = signal<any>(null);
  fullName = signal('');
  phone = signal('');
  email = signal('');
  notes = signal('');
   vehicle = signal('');
   address = signal('');

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const incoming = nav?.extras?.state ?? (typeof history !== 'undefined' ? history.state : null);
    this.state.set(incoming);
  }

  next() {
    const payload = {
      ...this.state(),
      fullName: this.fullName(),
      phone: this.phone(),
      email: this.email(),
      notes: this.notes(),
      vehicle: this.vehicle(),
      address: this.address(),
    };
    this.router.navigate(['/Book-a-wash/confirm'], { state: payload });
  }
}
