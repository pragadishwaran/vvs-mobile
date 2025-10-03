
import React, {useState} from 'react';
import { SafeAreaView, ScrollView, Text, Button, View, StyleSheet } from 'react-native';

const SAMPLE = [
  { id: 1, title: 'Haripath – Pravachan (USB)', price: '₹499' },
  { id: 2, title: 'Dnyaneshwari Saptaham (Book)', price: '₹250' },
];

export default function Shop() {
  const [cart, setCart] = useState([]);
  const add = (p) => setCart(prev => [...prev, p]);
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {SAMPLE.map(p => (
          <View key={p.id} style={styles.product}>
            <Text style={styles.productTitle}>{p.title}</Text>
            <Text>{p.price}</Text>
            <Button title="Add" onPress={()=>add(p)} />
          </View>
        ))}

        <View style={styles.cartSection}>
          <Text style={styles.cartTitle}>Cart ({cart.length})</Text>
          {cart.map((c,i)=><Text key={i}>• {c.title} - {c.price}</Text>)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  product: { marginBottom: 12, padding: 8, borderWidth: 1, borderColor: '#ddd', borderRadius: 6 },
  productTitle: { fontWeight: '600' },
  cartSection: { marginTop: 16 },
  cartTitle: { fontSize: 16, fontWeight: '700' },
});
