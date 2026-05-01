import { useState, useEffect, useCallback, useRef } from 'react';
import { CarListing, FilterState } from '../types/car';
import { api } from '../services/api';
import { MAX_PRICE, MIN_PRICE } from '../constants/data';

export const DEFAULT_FILTERS: FilterState = {
  search: '',
  city: 'All Cities',
  make: 'All Makes',
  model: 'All Models',
  minPrice: MIN_PRICE,
  maxPrice: MAX_PRICE,
};

export type LoadState = 'idle' | 'loading' | 'loadingMore' | 'error' | 'done';

export function useListings() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [listings, setListings] = useState<CarListing[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [loadState, setLoadState] = useState<LoadState>('idle');
  const [error, setError] = useState<string | null>(null);

  // Ref to cancel stale requests when filters change
  const requestIdRef = useRef(0);

  const fetchListings = useCallback(async (currentFilters: FilterState, currentPage: number, append: boolean) => {
    const requestId = ++requestIdRef.current;

    setLoadState(append ? 'loadingMore' : 'loading');
    setError(null);

    try {
      const data = await api.getListings(currentFilters, currentPage);

      // Discard if a newer request was started
      if (requestId !== requestIdRef.current) return;

      setListings(prev => append ? [...prev, ...data.listings] : data.listings);
      setHasMore(data.hasMore);
      setTotal(data.total);
      setLoadState('done');
    } catch (err: any) {
      if (requestId !== requestIdRef.current) return;
      console.error('[useListings] fetch error:', err.message);
      setError(err.message || 'Failed to load listings');
      setLoadState('error');
    }
  }, []);

  // Initial fetch + refetch on filter change
  useEffect(() => {
    setPage(1);
    setListings([]);
    fetchListings(filters, 1, false);
  }, [filters, fetchListings]);

  function applyFilters(newFilters: FilterState) {
    setFilters(newFilters);
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  function setSearch(search: string) {
    setFilters(f => ({ ...f, search }));
  }

  function loadMore() {
    if (loadState === 'loading' || loadState === 'loadingMore' || !hasMore) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchListings(filters, nextPage, true);
  }

  function retry() {
    fetchListings(filters, page, false);
  }

  const activeFilterCount = [
    filters.city !== 'All Cities',
    filters.make !== 'All Makes',
    filters.model !== 'All Models',
    filters.minPrice > MIN_PRICE || filters.maxPrice < MAX_PRICE,
  ].filter(Boolean).length;

  return {
    listings,
    total,
    filters,
    loadState,
    error,
    hasMore,
    activeFilterCount,
    applyFilters,
    resetFilters,
    setSearch,
    loadMore,
    retry,
  };
}
