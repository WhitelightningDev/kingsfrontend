import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

// Types
export type WashType = 'everyday' | 'suv-bakkie' | 'bike' | 'luxury';

export interface Option {
  id: string;
  name: string;
  desc: string;
  price: number; // ZAR
}

export interface AddOn {
  id: string;
  label: string;
  price: number; // ZAR
}

@Component({
  selector: 'app-book-wash',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './book-wash.html',
  styleUrl: './book-wash.css'
})
export class BookWash {
  // Query-param driven type
  type = signal<WashType>('everyday');

  // User selections
  optionId = signal<string>('');
  addOns = signal<string[]>([]);
  date = signal<string>('');
  time = signal<string>('');

  // Catalogs per type
  optionsMap: Record<WashType, Option[]> = {
    everyday: [
      { id: 'express', name: 'Express Wash', desc: 'Exterior rinse, foam, dry', price: 120 },
      { id: 'standard', name: 'Standard Wash', desc: 'Exterior + wheels + windows', price: 150 },
      { id: 'full', name: 'Full Wash', desc: 'Interior vacuum + wipe-down', price: 220 },
      { id: 'deep', name: 'Deep Clean', desc: 'Seats, mats, plastics detailed', price: 320 },
    ],
    'suv-bakkie': [
      { id: 'express', name: 'Express Wash', desc: 'Exterior rinse, foam, dry', price: 160 },
      { id: 'standard', name: 'Standard Wash', desc: 'Exterior + wheels + windows', price: 190 },
      { id: 'full', name: 'Full Wash', desc: 'Interior vacuum + wipe-down', price: 280 },
      { id: 'deep', name: 'Deep Clean', desc: 'Seats, mats, plastics detailed', price: 380 },
    ],
    bike: [
      { id: 'express', name: 'Express Rinse', desc: 'Foam + dry', price: 90 },
      { id: 'standard', name: 'Standard Bike Wash', desc: 'Frame, wheels, plastics', price: 120 },
      { id: 'detail', name: 'Detail + Protect', desc: 'Degrease, dress plastics', price: 200 },
    ],
    luxury: [
      { id: 'touchless', name: 'Touchless Hand Wash', desc: 'Soft mitts, pH-neutral', price: 450 },
      { id: 'premium', name: 'Premium Detail', desc: 'Interior + exterior finish', price: 950 },
      { id: 'enhance', name: 'Paint Enhancement', desc: 'Machine polish', price: 2200 },
      { id: 'ceramic', name: 'Ceramic Coating', desc: 'Long-term protection', price: 5500 },
    ],
  };

  addOnCatalog: AddOn[] = [
    { id: 'engine', label: 'Engine bay clean', price: 150 },
    { id: 'pet', label: 'Pet hair removal', price: 120 },
    { id: 'headlight', label: 'Headlight restoration', price: 250 },
    { id: 'odor', label: 'Odor neutralizer', price: 90 },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    const qp = this.route.snapshot.queryParamMap.get('type') as WashType | null;
    if (qp && ['everyday', 'suv-bakkie', 'bike', 'luxury'].includes(qp)) {
      this.type.set(qp);
    }
    const first = this.optionsMap[this.type()].at(0);
    this.optionId.set(first?.id ?? '');
  }

  optionsForType() {
    return this.optionsMap[this.type()];
  }

  toggleAddon(id: string, checked: boolean) {
    const set = new Set(this.addOns());
    if (checked) set.add(id); else set.delete(id);
    this.addOns.set([...set]);
  }

  get total(): number {
    const base = this.optionsForType().find(o => o.id === this.optionId())?.price ?? 0;
    const extras = this.addOnCatalog
      .filter(a => this.addOns().includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return base + extras;
  }

  submit() {
    const payload = {
      type: this.type(),
      option: this.optionId(),
      addOns: this.addOns(),
      date: this.date(),
      time: this.time(),
      amount: this.total,
    };
    console.log('BOOKING_PAYLOAD', payload);
    this.router.navigate(['/Book-a-wash/details-form'], { state: payload });
  }
}
