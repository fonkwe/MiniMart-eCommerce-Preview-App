import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { products } from '../product';
import { useCart } from '../redux/store';


const { width: screenWidth } = Dimensions.get('window');

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation(); 
  const product = products.find(p => p.id === Number(id));
  const { cart, favorites, dispatch } = useCart(); 

  const [showToast, setShowToast] = useState(false);


  if (!product) return <Text>Product not found</Text>;

  const isFavorite = favorites?.some(p => p.id === product.id); // Use favorites from context

  const handleAdd = () => {
    dispatch({ type: 'ADD', payload: { ...product, quantity: 1 } });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Shortened toast duration
  };

  const toggleFavorite = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: product });
  };

  const descriptionItems = [
    "This pre-owned product is not Apple certified, but has been professionally inspected, tested, and cleaned by Amazon-qualified suppliers.",
    "There will be no visible cosmetic imperfections when held at an arm’s length.",
    "This product will have a battery which exceeds 80% capacity relative to new.",
    "Accessories will not be original, but will be compatible and fully functional. Product may come in a generic box.",
    "This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied."
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
       {/* Toast Message */}
       {showToast && (
        <View style={styles.toast}>
           <View style={styles.icon}>
             <Icon name="check" size={10} color="#22C55E" />
            </View>
          <Text style={styles.toastText}>Item has been added to cart</Text>
          <TouchableOpacity onPress={() => setShowToast(false)}>
            <Text style={styles.toastClose}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>{'\u2039'} Go Back</Text>
      </TouchableOpacity>

      <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.image} />
          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
            <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={28}
              color={isFavorite ? '#ff5b5b' : '#aaa'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${Number(product.price).toFixed(2)}</Text>
        <Text style={styles.descriptionTitle}>About this item:</Text>
        {descriptionItems.map((item, index) => (
          <Text key={index} style={styles.descriptionItem}>
            • {item}
          </Text>
        ))}
      </View>

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAdd}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
     </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingTop: 5,
  },
  imageContainer: {
    position: 'relative',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 4,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 3,
  },
  icon: {
    marginRight: 8,
    borderRadius: 20,
    borderColor: '#22C55E',
    backgroundColor: '#E0F2F1',
  },
  toast: {
    position: 'absolute',
    top: 10,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    borderLeftWidth: 4,
    borderLeftColor: '#22C55E',
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    zIndex: 999,
  },
  toastText: {
    fontSize: 14,
    fontFamily: 'IBM Plex Mono'
  },
  toastClose: {
    fontSize: 18,
    marginLeft: 10,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'IBM Plex Mono'  },
  productContainer: {
    alignItems: 'flex-start',
  },
  image: {
    width: screenWidth * 0.9,
    height: screenWidth * 0.9,
    resizeMode: 'contain',
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'IBM Plex Mono' ,
   },
  price: {
    fontSize: 33,
    fontWeight: 'bold',
    marginTop: 2,
    fontFamily: 'IBM Plex Mono'  },
  descriptionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
    fontFamily: 'IBM Plex Mono'  },
  descriptionItem: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 2,
    color: '#999999',
    textAlign: 'left',
  },
  addToCartButton: {
    backgroundColor: '#60B5FF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 20,
  },
  addToCartButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'IBM Plex Mono'  },
});

export default ProductDetailScreen;