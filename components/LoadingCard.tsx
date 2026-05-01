import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { COLORS } from '../constants/data';

export function LoadingCard() {
  const anim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(anim, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, [anim]);

  return (
    <Animated.View style={[styles.card, { opacity: anim }]}>
      <View style={styles.image} />
      <View style={styles.body}>
        <View style={styles.titleBar} />
        <View style={styles.priceBar} />
        <View style={styles.specRow}>
          <View style={styles.specPill} />
          <View style={styles.specPill} />
          <View style={styles.specPill} />
        </View>
      </View>
    </Animated.View>
  );
}

export function LoadingList({ count = 5 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    marginBottom: 14,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 200, backgroundColor: '#E0E0E0' },
  body: { padding: 14 },
  titleBar: { height: 16, backgroundColor: '#E0E0E0', borderRadius: 4, marginBottom: 10, width: '70%' },
  priceBar: { height: 22, backgroundColor: '#E0E0E0', borderRadius: 4, marginBottom: 14, width: '40%' },
  specRow: { flexDirection: 'row', gap: 8 },
  specPill: { height: 24, backgroundColor: '#E0E0E0', borderRadius: 6, width: 80 },
});
