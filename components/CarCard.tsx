import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { CarListing } from '../types/car';
import { COLORS } from '../constants/data';
import { formatPrice, formatMileage, formatDate } from '../utils/format';

interface Props {
  car: CarListing;
}

export function CarCard({ car }: Props) {
  const isOlx = car.source === 'olx';

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push({ pathname: '/car/[id]', params: { id: car.id, data: encodeURIComponent(JSON.stringify(car)) } } as never)}
      activeOpacity={0.88}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: car.images[0] }} style={styles.image} resizeMode="cover" />
        <View style={[styles.badge, { backgroundColor: isOlx ? COLORS.olxBadge : COLORS.pakwheelsBadge }]}>
          <Text style={styles.badgeText}>{isOlx ? 'OLX' : 'PakWheels'}</Text>
        </View>
        <View style={styles.yearBadge}>
          <Text style={styles.yearText}>{car.year}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>{car.title}</Text>
        <Text style={styles.price}>PKR {formatPrice(car.price)}</Text>

        <View style={styles.specs}>
          <SpecPill icon="📍" label={car.city} />
          <SpecPill icon="🔧" label={formatMileage(car.mileage)} />
          <SpecPill icon="⚙️" label={car.transmission} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.date}>{formatDate(car.postedAt)}</Text>
          <Text style={styles.viewLink}>View details →</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function SpecPill({ icon, label }: { icon: string; label: string }) {
  return (
    <View style={styles.pill}>
      <Text style={styles.pillText}>{icon} {label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  imageContainer: { position: 'relative' },
  image: { width: '100%', height: 200 },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 5,
  },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '700', letterSpacing: 0.3 },
  yearBadge: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  yearText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  body: { padding: 14 },
  title: { fontSize: 16, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 4 },
  price: { fontSize: 20, fontWeight: '800', color: COLORS.price, marginBottom: 10 },
  specs: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 10 },
  pill: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  pillText: { fontSize: 12, color: COLORS.textSecondary },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  date: { fontSize: 12, color: COLORS.textSecondary },
  viewLink: { fontSize: 12, color: COLORS.primary, fontWeight: '600' },
});
