import React, { useEffect, useState } from 'react';
import {
  ScrollView, View, Text, TouchableOpacity, StyleSheet,
  Image, Dimensions, Linking, Alert, ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { COLORS } from '../../constants/data';
import { formatPrice, formatMileage, formatDate } from '../../utils/format';
import { api, DetailExtra } from '../../services/api';
import { CarListing } from '../../types/car';

const { width } = Dimensions.get('window');

export default function CarDetailScreen() {
  const { id, data: rawData } = useLocalSearchParams<{ id: string; data: string }>();

  // Listing passed from the home screen as serialized JSON
  const car: CarListing | null = rawData ? JSON.parse(decodeURIComponent(rawData)) : null;

  const [extra, setExtra] = useState<DetailExtra | null>(null);
  const [detailLoading, setDetailLoading] = useState(true);

  useEffect(() => {
    if (!car?.sourceUrl) return;
    api.getListingDetail(id!, car.sourceUrl)
      .then(d => { setExtra(d); setDetailLoading(false); })
      .catch(() => setDetailLoading(false)); // non-fatal: base card still shows
  }, [id, car?.sourceUrl]);

  if (!car) {
    return (
      <View style={styles.notFound}>
        <Text style={styles.notFoundEmoji}>🔍</Text>
        <Text style={styles.notFoundText}>Listing not found</Text>
      </View>
    );
  }

  const isOlx = car.source === 'olx';
  const sourceColor = isOlx ? COLORS.olxBadge : COLORS.pakwheelsBadge;
  const sourceName = isOlx ? 'OLX' : 'PakWheels';

  // Merge base images with any extra images fetched from detail page
  const allImages = extra?.images?.length
    ? extra.images
    : car.images.length ? car.images : [];

  const description = extra?.description || car.description;
  const sellerName = extra?.sellerName || car.sellerName;
  const color = extra?.color || car.color;
  const transmission = extra?.transmission || car.transmission;
  const fuel = extra?.fuel || car.fuel;

  async function openListing() {
    const supported = await Linking.canOpenURL(car.sourceUrl);
    if (supported) {
      await Linking.openURL(car.sourceUrl);
    } else {
      Alert.alert('Cannot open link', 'Unable to open the listing URL.');
    }
  }

  const specs = [
    { label: 'City', value: car.city },
    { label: 'Year', value: car.year ? String(car.year) : '—' },
    { label: 'Mileage', value: car.mileage ? formatMileage(car.mileage) : '—' },
    { label: 'Fuel', value: fuel || '—' },
    { label: 'Transmission', value: transmission || '—' },
    { label: 'Color', value: color || '—' },
  ];

  return (
    <>
      <Stack.Screen options={{ title: `${car.make || ''} ${car.model || ''}`.trim() || car.title, headerBackTitle: 'Back' }} />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Image gallery */}
        {allImages.length > 0 ? (
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.gallery}>
            {allImages.map((img, i) => (
              <Image key={i} source={{ uri: img }} style={styles.image} resizeMode="cover" />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>🚗</Text>
          </View>
        )}

        <View style={styles.body}>
          {/* Source badge + date */}
          <View style={styles.metaRow}>
            <View style={[styles.sourceBadge, { backgroundColor: sourceColor }]}>
              <Text style={styles.sourceText}>{sourceName}</Text>
            </View>
            <Text style={styles.postedAt}>Posted {formatDate(car.postedAt)}</Text>
          </View>

          <Text style={styles.title}>{car.title}</Text>
          {car.price > 0 && <Text style={styles.price}>PKR {formatPrice(car.price)}</Text>}

          {/* Specs grid */}
          <View style={styles.specsCard}>
            {specs.map(spec => (
              <View key={spec.label} style={styles.specItem}>
                <Text style={styles.specLabel}>{spec.label}</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>

          {/* Seller */}
          {sellerName ? (
            <View style={styles.sellerCard}>
              <View>
                <Text style={styles.sellerLabel}>Listed by</Text>
                <Text style={styles.sellerName}>{sellerName}</Text>
              </View>
              <View style={[styles.sourcePill, { backgroundColor: sourceColor }]}>
                <Text style={styles.sourcePillText}>via {sourceName}</Text>
              </View>
            </View>
          ) : null}

          {/* Detail fetch indicator */}
          {detailLoading && (
            <View style={styles.detailLoading}>
              <ActivityIndicator size="small" color={COLORS.primary} />
              <Text style={styles.detailLoadingText}>Loading full details...</Text>
            </View>
          )}

          {/* Description */}
          {description ? (
            <>
              <Text style={styles.sectionTitle}>Description</Text>
              <View style={styles.descCard}>
                <Text style={styles.description}>{description}</Text>
              </View>
            </>
          ) : null}

          <View style={{ height: 100 }} />
        </View>
      </ScrollView>

      {/* Sticky CTA */}
      <View style={styles.ctaContainer}>
        <TouchableOpacity
          style={[styles.ctaButton, { backgroundColor: sourceColor }]}
          onPress={openListing}
          activeOpacity={0.85}
        >
          <Text style={styles.ctaText}>View Full Listing on {sourceName} →</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  notFound: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  notFoundEmoji: { fontSize: 48 },
  notFoundText: { fontSize: 16, color: COLORS.textSecondary },
  gallery: { backgroundColor: '#000' },
  image: { width, height: 270 },
  imagePlaceholder: { width, height: 200, backgroundColor: '#E0E0E0', alignItems: 'center', justifyContent: 'center' },
  imagePlaceholderText: { fontSize: 64 },
  body: { padding: 16 },
  metaRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, marginTop: 2 },
  sourceBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 5 },
  sourceText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  postedAt: { fontSize: 12, color: COLORS.textSecondary },
  title: { fontSize: 20, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 6, lineHeight: 26 },
  price: { fontSize: 28, fontWeight: '800', color: COLORS.price, marginBottom: 18 },
  specsCard: { flexDirection: 'row', flexWrap: 'wrap', backgroundColor: COLORS.card, borderRadius: 14, marginBottom: 14, overflow: 'hidden' },
  specItem: { width: '50%', padding: 14, borderBottomWidth: 1, borderBottomColor: COLORS.border, borderRightWidth: 1, borderRightColor: COLORS.border },
  specLabel: { fontSize: 11, color: COLORS.textSecondary, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.6, fontWeight: '600' },
  specValue: { fontSize: 14, fontWeight: '700', color: COLORS.textPrimary },
  sellerCard: { backgroundColor: COLORS.card, borderRadius: 14, padding: 16, marginBottom: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sellerLabel: { fontSize: 11, color: COLORS.textSecondary, marginBottom: 3 },
  sellerName: { fontSize: 15, fontWeight: '700', color: COLORS.textPrimary },
  sourcePill: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
  sourcePillText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  detailLoading: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  detailLoadingText: { fontSize: 13, color: COLORS.textSecondary },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: COLORS.textPrimary, marginBottom: 10 },
  descCard: { backgroundColor: COLORS.card, borderRadius: 14, padding: 16, marginBottom: 16 },
  description: { fontSize: 14, color: COLORS.textSecondary, lineHeight: 23 },
  ctaContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 12, paddingBottom: 24, backgroundColor: COLORS.background, borderTopWidth: 1, borderTopColor: COLORS.border },
  ctaButton: { padding: 17, borderRadius: 13, alignItems: 'center' },
  ctaText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
