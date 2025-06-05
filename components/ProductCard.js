import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { flex: 1, margin: 5, padding: 10, borderWidth: 1, borderRadius: 8 },
  image: { height: 100, marginBottom: 10 },
  name: { fontWeight: 'bold' },
  price: { color: '#333' },
});

export default ProductCard;