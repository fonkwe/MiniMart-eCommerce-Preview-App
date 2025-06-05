import { useNavigation } from 'expo-router';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import CartItem from '../../components/CartItem';
import { useCart } from '../../redux/store';


const CartScreen = () => {
  const { cart = [], dispatch } = useCart();
     const navigation = useNavigation(); 
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    alert(`Proceeding to checkout. Total: $${total.toFixed(2)}`);
  };

  return (
    <SafeAreaView style={styles.container}>

       {/* Title */}
       <TouchableOpacity style={styles.cartTitleRow} onPress={() => navigation.goBack()}>        
          <Text style={styles.backArrow}>{'\u2039'}</Text>
           <Text style={styles.cartTitle}>Your Cart</Text>
        </TouchableOpacity>

      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) =>
              item.id ? item.id.toString() : index.toString()
            }
            renderItem={({ item }) => (
              <CartItem item={item} dispatch={dispatch} />
            )}
            contentContainerStyle={styles.cartList}
          />

           {/* Order Info */}
      <View style={styles.orderInfo}>
        <Text style={styles.orderTitle}>Order Info</Text>
        <View style={styles.orderRow}>
          <Text>Subtotal</Text>
          <Text>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.orderRow}>
          <Text>Shipping</Text>
          <Text>${shipping.toFixed(2)}</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutText}>Checkout (${total.toFixed(2)})</Text>
      </TouchableOpacity>

        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingTop: 5,
  },
  emptyCart: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
  },
  cartList: {
    paddingBottom: 20,
  },
  cartTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  backArrow: { fontSize: 20, fontFamily: 'IBM Plex Mono' },
  cartTitle: { fontSize: 14, fontWeight: '700', marginLeft: 5, fontFamily: 'IBM Plex Mono' },
  orderInfo: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
  },
  orderTitle: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 6,
   fontFamily: 'IBM Plex Mono'
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'IBM Plex Mono'
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'IBM Plex Mono'
  },
  checkoutButton: {
    backgroundColor: '#60B5FF',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
   fontFamily: 'IBM Plex Mono'
  },
});

export default CartScreen;