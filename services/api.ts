import { CarListing, FilterState } from '../types/car';

// Update this to your machine's local IP when testing on a physical device.
// Run `ipconfig` (Windows) to find your IPv4 address (e.g. 192.168.1.5).
export const API_BASE = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';

export interface ListingsResponse {
  listings: CarListing[];
  total: number;
  page: number;
  hasMore: boolean;
  sources: { pakwheels: number; olx: number };
}

export interface DetailExtra {
  images: string[];
  description: string;
  sellerName: string;
  color: string;
  transmission: string;
  fuel: string;
}

async function apiFetch<T>(path: string): Promise<T> {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`API ${res.status}: ${body}`);
  }
  return res.json() as Promise<T>;
}

export function buildListingsQuery(filters: FilterState, page: number): string {
  const params = new URLSearchParams();
  if (filters.search) params.set('search', filters.search);
  if (filters.city && filters.city !== 'All Cities') params.set('city', filters.city);
  if (filters.make && filters.make !== 'All Makes') params.set('make', filters.make);
  if (filters.model && filters.model !== 'All Models') params.set('model', filters.model);
  if (filters.minPrice > 0) params.set('minPrice', String(filters.minPrice));
  if (filters.maxPrice < 20000000) params.set('maxPrice', String(filters.maxPrice));
  params.set('page', String(page));
  params.set('limit', '15');
  return params.toString();
}

export const api = {
  getListings: (filters: FilterState, page: number) =>
    apiFetch<ListingsResponse>(`/api/listings?${buildListingsQuery(filters, page)}`),

  getListingDetail: (id: string, sourceUrl: string) =>
    apiFetch<DetailExtra>(`/api/listings/${id}?url=${encodeURIComponent(sourceUrl)}`),

  health: () =>
    apiFetch<{ status: string }>('/health'),
};
