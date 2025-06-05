import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { products } from '../../product';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#CBD5E1" />
        <TextInput placeholder="Search..." style={styles.searchInput} placeholderTextColor="#6B7280" />
      </View>

      {/* Category & Title */}
      <View style={styles.categoryContainer}>
        <Text style={styles.backArrow}>{'\u2039'}</Text>
        <Text style={styles.categoryTitle}>Technology</Text>
      </View>
      <Text style={styles.subheading}>Smartphones, Laptops & Accessories</Text>

      <ScrollView contentContainerStyle={styles.productsContainer}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => router.push({ pathname: '/productDetailScreen', params: { id: product.id.toString() } })}
          >
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>${Number(product.price).toFixed(2)}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  searchContainer: {
    flexDirection: 'row', alignItems: 'center', height: 36,
    marginHorizontal: 10, borderRadius: 3, paddingHorizontal: 8, paddingVertical: 8,  borderWidth: 0.5,  borderColor: '#E2E8F0',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontFamily: 'IBM Plex Mono',
    fontSize: 14, 
    fontWeight: '400',
    color: '#000000',
  },
    categoryContainer: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginTop: 20,
  },
  backArrow: { fontSize: 20 },
  categoryTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 5, fontFamily: 'IBM Plex Mono',
  },
  subheading: {
    fontSize: 18, fontWeight: '500', paddingHorizontal: 10, marginTop: 10, fontFamily: 'IBM Plex Mono',

  },
  productsContainer: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: 162, height: 255,  backgroundColor: '#f9f9f9', marginBottom: 15,
    borderRadius: 10, gap: 10, 
  },
  productImage: {
    width: 160, height: 162, resizeMode: 'contain', marginBottom: 5, borderRadius: 8,
  },
  productName: { fontSize: 13, fontWeight: '400', fontFamily: 'IBM Plex Mono',
  },
  productPrice: { fontSize: 16, fontWeight: 'bold', marginTop: 2, fontFamily: 'IBM Plex Mono',
  },
});

export default HomeScreen;