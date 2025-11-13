export type WashType = 'everyday' | 'suv-bakkie' | 'bike' | 'luxury';

export interface Option {
  id: string;
  name: string;
  desc: string;
  price: number;
}

export interface AddOn {
  id: string;
  label: string;
  price: number;
}

export const OPTIONS_MAP: Record<WashType, Option[]> = {
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

export const ADD_ON_CATALOG: AddOn[] = [
  { id: 'interior', label: 'Interior Cleans Only – Vacuum, air vents, dashboard shine, door panels', price: 100 },
  { id: 'leather', label: 'Leather Clean – Nourish & protect leather surfaces', price: 50 },
  { id: 'ceramic', label: 'Ceramic Infused Spray – Hydrophobic shine & protection', price: 150 },
  { id: 'headlight', label: 'Headlight Restoration – Restores clarity to headlights', price: 200 },
  { id: 'bodygloss', label: 'Body Gloss – Enhances depth & glossy finish', price: 100 },
];

