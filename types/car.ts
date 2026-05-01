export type Source = 'pakwheels' | 'olx';

export interface CarListing {
  id: string;
  source: Source;
  sourceUrl: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  city: string;
  mileage: number;
  fuel: string;
  transmission: string;
  color: string;
  images: string[];
  description: string;
  postedAt: string;
  sellerName: string;
}

export interface FilterState {
  search: string;
  city: string;
  make: string;
  model: string;
  minPrice: number;
  maxPrice: number;
}
