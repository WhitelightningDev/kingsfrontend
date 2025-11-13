import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ADD_ON_CATALOG, OPTIONS_MAP, Option, AddOn, WashType } from '../../booking-catalog';

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
  optionsMap: Record<WashType, Option[]> = OPTIONS_MAP;

  addOnCatalog: AddOn[] = ADD_ON_CATALOG;

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
    const selectedOption = this.optionsForType().find(o => o.id === this.optionId());
    const selectedAddOns = this.addOnCatalog.filter(a => this.addOns().includes(a.id));

    const payload = {
      type: this.type(),
      option: this.optionId(),
      optionLabel: selectedOption?.name ?? this.optionId(),
      optionPrice: selectedOption?.price ?? 0,
      addOnDetails: selectedAddOns,
      addOns: this.addOns(),
      date: this.date(),
      time: this.time(),
      amount: this.total,
    };
    console.log('BOOKING_PAYLOAD', payload);
    this.router.navigate(['/Book-a-wash/details-form'], { state: payload });
  }
}
