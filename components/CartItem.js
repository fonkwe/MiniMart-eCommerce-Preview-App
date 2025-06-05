import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const CartItem = ({ item, dispatch }) => {
  const handleRemove = () => {
    dispatch({ type: 'REMOVE', payload: item.id });
  };

  const handleIncrease = () => {
    dispatch({ type: 'INCREASE', payload: item.id });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREASE', payload: item.id });
  };

  return (
    <ScrollView style={styles.cartList}>
    <View style={styles.card}>
         <Image source={item.image} style={styles.image} />
       <View style={styles.info}>
           <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${parseFloat(item.price).toFixed(2)}</Text>
          <Text style={styles.stock}>In stock</Text>
     
        <View style={styles.controls}>
          <TouchableOpacity onPress={handleDecrease} style={styles.qtyButton}>
            <Text style={styles.qtySymbol}>−</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{item.quantity}</Text>
          <TouchableOpacity onPress={handleIncrease} style={styles.qtyButton}>
              <Text style={styles.qtySymbol}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRemove} style={styles.trash}>
            <Feather name="trash-2" size={20} color="#999" />
          </TouchableOpacity>
        </View>
       </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F6F5F8',
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
  },
  cartList: { flex: 1 },
  image: {
    width: 102,
    height: 106,
    resizeMode: 'contain',
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 12,
    fontWeight: '400',
    color: '#334155',
    fontFamily: 'IBM Plex Mono',
  },
  price: {
    fontSize: 17,
    fontWeight: '600',
    color: '#334155',
    fontFamily: 'IBM Plex Mono'
  },
  stock: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '400',
    marginVertical: 4,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 8,
  },
  qtyButton: {
    backgroundColor: '#ffffff',
    width: 36,
    height: 36,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center'
  },
  qtySymbol: {
    fontSize: 15,
    color: '#334155',
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'IBM Plex Mono'
  },
  trash: {
    marginLeft: 20,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 32,  },
});

export default CartItem;