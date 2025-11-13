import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../api.config';
import { ADD_ON_CATALOG, OPTIONS_MAP, WashType } from '../booking-catalog';

export interface CheckoutState {
  type: WashType | string;
  option: string;
  addOns: string[];
  date: string;
  time: string;
  amount: number;
  fullName?: string;
  phone?: string;
  email?: string;
  notes?: string;
  customer?: {
    fullName?: string;
    phone?: string;
    email?: string;
    notes?: string;
  };
  payment: {
    method: 'pay_on_site' | 'card' | 'eft';
    paid: boolean;
  };
}

export interface BookResponse {
  redirectUrl?: string;
  bookingId?: string;
  message?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingApiService {
  constructor(private http: HttpClient) {}

  book(state: CheckoutState): Observable<BookResponse> {
    const payload = this.mapToBackendPayload(state);
    return this.http.post<BookResponse>(`${API_BASE_URL}/api/book`, payload);
  }

  getAvailableSlots(date: string): Observable<string[]> {
    return this.http.get<string[]>(`${API_BASE_URL}/api/available-slots`, {
      params: { date },
    });
  }

  private mapToBackendPayload(state: CheckoutState) {
    const customer = state.customer ?? {
      fullName: state.fullName,
      phone: state.phone,
      email: state.email,
      notes: state.notes,
    };

    const fullName = (customer.fullName ?? '').trim();
    const [firstName, ...rest] = fullName.split(/\s+/);
    const lastName = rest.join(' ');

    const type = state.type as WashType;
    const optionList = OPTIONS_MAP[type] ?? [];
    const selectedOption = optionList.find((o) => o.id === state.option);

    const selectedAddOns = ADD_ON_CATALOG.filter((a) => state.addOns?.includes(a.id));

    return {
      firstName: firstName || '',
      lastName: lastName || '',
      carModel: '',
      washType: selectedOption
        ? {
            name: selectedOption.name,
            price: selectedOption.price,
            details: selectedOption.desc,
          }
        : {},
      additionalServices: selectedAddOns.map((a) => ({
        name: a.label,
        price: a.price,
      })),
      date: state.date,
      time: state.time,
      email: customer.email,
      subscription: 'No Subscription',
      serviceLocation: 'Branch',
      address: '',
      totalPrice: state.amount,
      payment: state.payment,
    };
  }
}
