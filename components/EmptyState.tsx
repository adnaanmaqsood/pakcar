import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/data';

interface Props {
  hasFilters: boolean;
  onReset: () => void;
}

export function EmptyState({ hasFilters, onReset }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🚗</Text>
      <Text style={styles.title}>No listings found</Text>
      <Text style={styles.subtitle}>
        {hasFilters
          ? 'Try adjusting your filters or search term to see more results'
          : 'No cars available at the moment'}
      </Text>
      {hasFilters && (
        <TouchableOpacity style={styles.btn} onPress={onReset}>
          <Text style={styles.btnText}>Clear All Filters</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 72,
    paddingHorizontal: 32,
  },
  emoji: { fontSize: 60, marginBottom: 16 },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 10,
  },
  btnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
