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
    { id: 'wash-go', name: 'Wash & Go', desc: 'Exterior wash & dry for small vehicles', price: 100 },
    { id: 'wash-vacuum', name: 'Wash & Vacuum', desc: 'Exterior wash plus interior vacuum', price: 150 },
    { id: 'interior-only', name: 'Interior Cleanse Only', desc: 'Deep interior vacuum and wipe-down', price: 80 },
    { id: 'ceramic-spray', name: 'Ceramic Infused Spray', desc: 'Exterior wash with ceramic-infused spray', price: 150 },
    { id: 'body-gloss', name: 'Body Gloss', desc: 'Gloss-enhancing exterior treatment for small vehicles', price: 120 },
  ],
  'suv-bakkie': [
    { id: 'wash-go-mini', name: 'Wash & Go (Mini Bakkies / Mini SUVs)', desc: 'Exterior wash & dry for mini bakkies and mini SUVs', price: 120 },
    { id: 'wash-vacuum-mini', name: 'Wash & Vacuum (Mini Bakkies / Mini SUVs)', desc: 'Wash plus interior vacuum for mini bakkies and mini SUVs', price: 170 },
    { id: 'interior-only-mini', name: 'Interior Cleanse Only (Mini Bakkies / Mini SUVs)', desc: 'Interior-only deep clean for mini bakkies and mini SUVs', price: 100 },
    { id: 'ceramic-spray-mini', name: 'Ceramic Infused Spray (Mini Bakkies / Mini SUVs)', desc: 'Ceramic-infused spray protection for mini bakkies and mini SUVs', price: 200 },
    { id: 'body-gloss-mini', name: 'Body Gloss (Mini Bakkies / Mini SUVs)', desc: 'Gloss-enhancing exterior treatment for mini bakkies and mini SUVs', price: 170 },
    { id: 'wash-go-large', name: 'Wash & Go (Large Bakkies / Large SUVs)', desc: 'Exterior wash & dry for large bakkies and large SUVs', price: 120 },
    { id: 'wash-vacuum-large', name: 'Wash & Vacuum (Large Bakkies / Large SUVs)', desc: 'Wash plus interior vacuum for large bakkies and large SUVs', price: 200 },
    { id: 'interior-only-large', name: 'Interior Cleanse Only (Large Bakkies / Large SUVs)', desc: 'Interior-only deep clean for large bakkies and large SUVs', price: 100 },
    { id: 'ceramic-spray-large', name: 'Ceramic Infused Spray (Large Bakkies / Large SUVs)', desc: 'Ceramic-infused spray protection for large bakkies and large SUVs', price: 250 },
    { id: 'body-gloss-large', name: 'Body Gloss (Large Bakkies / Large SUVs)', desc: 'Gloss-enhancing exterior treatment for large bakkies and large SUVs', price: 200 },
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
  { id: 'iron-removal', label: 'Iron Removal on Whole Vehicle & Wheels', price: 180 },
  { id: 'clay-bar', label: 'Clay Bar Treatment', price: 200 },
  { id: 'hand-polish-small', label: 'Hand Polish (Small Vehicles)', price: 550 },
  { id: 'hand-polish-large', label: 'Hand Polish (Large Vehicles)', price: 950 },
  { id: 'engine-bay-detail', label: 'Engine Bay Detail', price: 180 },
  { id: 'full-interior-detail', label: 'Full Interior Detail', price: 1200 },
];
