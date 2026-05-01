import React, { useState, useEffect } from 'react';
import {
  Modal, View, Text, TouchableOpacity, ScrollView,
  TextInput, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform,
} from 'react-native';
import { FilterState } from '../types/car';
import { CITIES, MAKES, MODELS, MAX_PRICE, MIN_PRICE, COLORS } from '../constants/data';

interface Props {
  visible: boolean;
  filters: FilterState;
  onApply: (f: FilterState) => void;
  onClose: () => void;
  onReset: () => void;
}

type Section = 'city' | 'make' | 'model' | 'price' | null;

export function FilterModal({ visible, filters, onApply, onClose, onReset }: Props) {
  const [local, setLocal] = useState<FilterState>(filters);
  const [openSection, setOpenSection] = useState<Section>(null);

  useEffect(() => {
    if (visible) {
      setLocal(filters);
      setOpenSection(null);
    }
  }, [visible, filters]);

  const modelOptions = local.make !== 'All Makes' ? (MODELS[local.make] ?? ['All Models']) : ['All Models'];

  function toggle(section: Section) {
    setOpenSection(prev => (prev === section ? null : section));
  }

  function selectCity(city: string) {
    setLocal(f => ({ ...f, city }));
    setOpenSection(null);
  }

  function selectMake(make: string) {
    setLocal(f => ({ ...f, make, model: 'All Models' }));
    setOpenSection(null);
  }

  function selectModel(model: string) {
    setLocal(f => ({ ...f, model }));
    setOpenSection(null);
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.flex}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Text style={styles.closeBtn}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Filter Cars</Text>
            <TouchableOpacity onPress={() => { onReset(); }} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Text style={styles.resetBtn}>Reset</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
            <FilterSection
              label="City"
              value={local.city}
              open={openSection === 'city'}
              onToggle={() => toggle('city')}
            >
              {CITIES.map(c => (
                <OptionItem key={c} label={c} selected={local.city === c} onSelect={() => selectCity(c)} />
              ))}
            </FilterSection>

            <FilterSection
              label="Make"
              value={local.make}
              open={openSection === 'make'}
              onToggle={() => toggle('make')}
            >
              {MAKES.map(m => (
                <OptionItem key={m} label={m} selected={local.make === m} onSelect={() => selectMake(m)} />
              ))}
            </FilterSection>

            <FilterSection
              label="Model"
              value={local.model}
              open={openSection === 'model'}
              onToggle={() => toggle('model')}
            >
              {modelOptions.map(m => (
                <OptionItem key={m} label={m} selected={local.model === m} onSelect={() => selectModel(m)} />
              ))}
            </FilterSection>

            <View style={styles.section}>
              <TouchableOpacity style={styles.sectionHeader} onPress={() => toggle('price')}>
                <Text style={styles.sectionLabel}>Price Range (PKR)</Text>
                <View style={styles.sectionRight}>
                  <Text style={styles.sectionValue}>
                    {local.minPrice > MIN_PRICE || local.maxPrice < MAX_PRICE
                      ? `${Math.round(local.minPrice / 100000)}L – ${Math.round(local.maxPrice / 100000)}L`
                      : 'Any'}
                  </Text>
                  <Text style={styles.chevron}>{openSection === 'price' ? '▲' : '▼'}</Text>
                </View>
              </TouchableOpacity>
              {openSection === 'price' && (
                <View style={styles.priceInputs}>
                  <View style={styles.priceField}>
                    <Text style={styles.priceLabel}>Min Price (Lac)</Text>
                    <TextInput
                      style={styles.priceInput}
                      keyboardType="numeric"
                      value={local.minPrice > 0 ? String(Math.round(local.minPrice / 100000)) : ''}
                      placeholder="0"
                      placeholderTextColor={COLORS.textSecondary}
                      onChangeText={t => setLocal(f => ({ ...f, minPrice: (parseInt(t) || 0) * 100000 }))}
                    />
                  </View>
                  <Text style={styles.priceDash}>–</Text>
                  <View style={styles.priceField}>
                    <Text style={styles.priceLabel}>Max Price (Lac)</Text>
                    <TextInput
                      style={styles.priceInput}
                      keyboardType="numeric"
                      value={local.maxPrice < MAX_PRICE ? String(Math.round(local.maxPrice / 100000)) : ''}
                      placeholder="200"
                      placeholderTextColor={COLORS.textSecondary}
                      onChangeText={t => setLocal(f => ({ ...f, maxPrice: (parseInt(t) || MAX_PRICE / 100000) * 100000 }))}
                    />
                  </View>
                </View>
              )}
            </View>

            <View style={{ height: 20 }} />
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.applyBtn} onPress={() => onApply(local)}>
              <Text style={styles.applyText}>Apply Filters</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}

function FilterSection({
  label, value, open, onToggle, children,
}: {
  label: string;
  value: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <TouchableOpacity style={styles.sectionHeader} onPress={onToggle}>
        <Text style={styles.sectionLabel}>{label}</Text>
        <View style={styles.sectionRight}>
          <Text style={styles.sectionValue} numberOfLines={1}>{value}</Text>
          <Text style={styles.chevron}>{open ? '▲' : '▼'}</Text>
        </View>
      </TouchableOpacity>
      {open && <View style={styles.options}>{children}</View>}
    </View>
  );
}

function OptionItem({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <TouchableOpacity
      style={[styles.option, selected && styles.optionSelected]}
      onPress={onSelect}
    >
      <Text style={[styles.optionText, selected && styles.optionTextSelected]}>{label}</Text>
      {selected && <Text style={styles.checkmark}>✓</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  closeBtn: { fontSize: 18, color: COLORS.textSecondary, padding: 4 },
  headerTitle: { fontSize: 17, fontWeight: '700', color: COLORS.textPrimary },
  resetBtn: { fontSize: 14, color: COLORS.danger, fontWeight: '600', padding: 4 },
  scroll: { flex: 1 },
  section: {
    backgroundColor: COLORS.card,
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sectionLabel: { fontSize: 15, fontWeight: '600', color: COLORS.textPrimary },
  sectionRight: { flexDirection: 'row', alignItems: 'center', gap: 8, flex: 1, justifyContent: 'flex-end' },
  sectionValue: { fontSize: 14, color: COLORS.textSecondary, maxWidth: 140 },
  chevron: { fontSize: 11, color: COLORS.textSecondary },
  options: { borderTopWidth: 1, borderTopColor: COLORS.border },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  optionSelected: { backgroundColor: '#E8F5E9' },
  optionText: { fontSize: 14, color: COLORS.textPrimary },
  optionTextSelected: { color: COLORS.primary, fontWeight: '600' },
  checkmark: { fontSize: 14, color: COLORS.primary, fontWeight: '700' },
  priceInputs: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  priceField: { flex: 1 },
  priceLabel: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    fontWeight: '600',
  },
  priceInput: {
    backgroundColor: COLORS.background,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: COLORS.textPrimary,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  priceDash: { fontSize: 20, color: COLORS.textSecondary, paddingBottom: 10 },
  footer: {
    padding: 16,
    backgroundColor: COLORS.card,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  applyBtn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  applyText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
