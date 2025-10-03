
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProductCard({product, onAdd}) {
  return (
    <View style={{padding:12, margin:8, borderWidth:1, borderRadius:8}}>
      <Text style={{fontSize:16, fontWeight:'600'}}>{product.title}</Text>
      <Text style={{marginTop:6}}>Price: {product.price}</Text>
      <Button title="Add to cart" onPress={() => onAdd(product)} />
    </View>
  );
}
