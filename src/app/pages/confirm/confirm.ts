import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './confirm.html'
})
export class ConfirmComponent {
  // Booking payload passed via router state
  state = signal<any>(null);

  // Contact fields
  fullName = signal<string>('');
  phone = signal<string>('');
  email = signal<string>('');
  notes = signal<string>('');

  constructor(private router: Router) {
    // Prefer Router state; fallback to history.state if user navigates directly
    const nav = this.router.getCurrentNavigation();
    const incoming = nav?.extras?.state ?? (typeof history !== 'undefined' ? history.state : null);
    this.state.set(incoming);
    const s = this.state();
    if (s) {
      // Accept both flat fields from details page and nested from previous versions
      this.fullName.set(s.fullName ?? s.customer?.fullName ?? '');
      this.phone.set(s.phone ?? s.customer?.phone ?? '');
      this.email.set(s.email ?? s.customer?.email ?? '');
      this.notes.set(s.notes ?? s.customer?.notes ?? '');
    }
  }

  get hasData() { return !!this.state(); }

  total = computed(() => this.state()?.amount ?? 0);

  confirm() {
    const payload = {
      ...this.state(),
      customer: {
        fullName: this.fullName(),
        phone: this.phone(),
        email: this.email(),
        notes: this.notes(),
      }
    };
    console.log('CONFIRM_BOOKING', payload);
    // TODO: call your backend here
    this.router.navigate(['/Book-a-wash/checkout'], { state: this.state() });
  }
}