
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const SAMPLE = [
  { id: 1, title: 'Haripath – Pravachan (USB)', price: '₹499' },
  { id: 2, title: 'Dnyaneshwari Saptaham (Book)', price: '₹250' },
];

export default function Publications() {
  const handleAdd = (p) => alert('Add to cart: ' + p.title);
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {SAMPLE.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={handleAdd} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
});
