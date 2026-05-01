import React, { useState } from 'react';
import {
  FlatList, View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
} from 'react-native';
import { Stack } from 'expo-router';
import { CarCard } from '../components/CarCard';
import { SearchBar } from '../components/SearchBar';
import { FilterModal } from '../components/FilterModal';
import { EmptyState } from '../components/EmptyState';
import { LoadingList } from '../components/LoadingCard';
import { useListings } from '../hooks/useListings';
import { COLORS } from '../constants/data';

export default function HomeScreen() {
  const [filterVisible, setFilterVisible] = useState(false);
  const {
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
  } = useListings();

  const isLoading = loadState === 'loading';
  const isLoadingMore = loadState === 'loadingMore';

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'PakCar',
          headerRight: () => (
            <TouchableOpacity
              style={[styles.filterBtn, activeFilterCount > 0 && styles.filterBtnActive]}
              onPress={() => setFilterVisible(true)}
            >
              <Text style={styles.filterBtnText}>
                ⚙ Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />

      <FlatList
        data={isLoading ? [] : listings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <CarCard car={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <SearchBar value={filters.search} onChangeText={setSearch} />
            {!isLoading && (
              <Text style={styles.countText}>
                {error ? '⚠ Could not reach server' : `${total} listings found`}
              </Text>
            )}
          </View>
        }
        ListEmptyComponent={
          isLoading ? (
            <LoadingList count={5} />
          ) : error ? (
            <ErrorState message={error} onRetry={retry} />
          ) : (
            <EmptyState
              hasFilters={activeFilterCount > 0 || filters.search.length > 0}
              onReset={resetFilters}
            />
          )
        }
        ListFooterComponent={
          isLoadingMore ? (
            <View style={styles.loadingMore}>
              <Text style={styles.loadingMoreText}>Loading more listings...</Text>
            </View>
          ) : hasMore && listings.length > 0 ? (
            <TouchableOpacity style={styles.loadMoreBtn} onPress={loadMore}>
              <Text style={styles.loadMoreText}>Load More Listings</Text>
            </TouchableOpacity>
          ) : listings.length > 0 ? (
            <Text style={styles.endText}>All listings loaded · {total} total</Text>
          ) : null
        }
      />

      <FilterModal
        visible={filterVisible}
        filters={filters}
        onApply={f => { applyFilters(f); setFilterVisible(false); }}
        onClose={() => setFilterVisible(false)}
        onReset={() => { resetFilters(); setFilterVisible(false); }}
      />
    </SafeAreaView>
  );
}

function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <View style={styles.errorBox}>
      <Text style={styles.errorEmoji}>📡</Text>
      <Text style={styles.errorTitle}>Cannot reach PakCar API</Text>
      <Text style={styles.errorDetail}>{message}</Text>
      <Text style={styles.errorHint}>Make sure the API server is running and EXPO_PUBLIC_API_URL is set to your PC's local IP.</Text>
      <TouchableOpacity style={styles.retryBtn} onPress={onRetry}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  list: { paddingHorizontal: 16, paddingBottom: 32 },
  header: { paddingTop: 14, paddingBottom: 4 },
  countText: { fontSize: 13, color: COLORS.textSecondary, marginTop: 10, marginBottom: 6, fontWeight: '500' },
  filterBtn: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 12, paddingVertical: 7, borderRadius: 18, marginRight: 4,
  },
  filterBtnActive: { backgroundColor: 'rgba(255,255,255,0.35)' },
  filterBtnText: { color: '#fff', fontWeight: '600', fontSize: 13 },
  loadMoreBtn: { backgroundColor: COLORS.primary, margin: 16, padding: 15, borderRadius: 10, alignItems: 'center' },
  loadMoreText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  loadingMore: { alignItems: 'center', paddingVertical: 20 },
  loadingMoreText: { color: COLORS.textSecondary, fontSize: 14 },
  endText: { textAlign: 'center', color: COLORS.textSecondary, fontSize: 13, paddingVertical: 20 },
  errorBox: { alignItems: 'center', paddingVertical: 48, paddingHorizontal: 28 },
  errorEmoji: { fontSize: 52, marginBottom: 16 },
  errorTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 8 },
  errorDetail: { fontSize: 13, color: COLORS.danger, textAlign: 'center', marginBottom: 12, fontFamily: 'monospace' },
  errorHint: { fontSize: 13, color: COLORS.textSecondary, textAlign: 'center', lineHeight: 20, marginBottom: 24 },
  retryBtn: { backgroundColor: COLORS.primary, paddingHorizontal: 28, paddingVertical: 13, borderRadius: 10 },
  retryText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
