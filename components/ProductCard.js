
import React from 'react';
import { View, Text, Button } from 'react-native';
import { commonStyles } from './styles';

export default function ProductCard({product, onAdd}) {
  return (
    <View style={commonStyles.productCard}>
      <Text style={commonStyles.productTitle}>{product.title}</Text>
      <Text style={commonStyles.productPrice}>Price: {product.price}</Text>
      <Button title="Add to cart" onPress={() => onAdd(product)} />
    </View>
  );
}
