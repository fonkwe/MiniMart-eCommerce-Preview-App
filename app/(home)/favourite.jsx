import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../redux/store';

const Favorites = () => {
  const { state } = useCart();
  
  const favorites = state?.favorites || []; // Safely access favorites

  if (favorites.length === 0) {
    return <Text style={styles.empty}>No favorites yet.</Text>;
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  empty: { padding: 20, textAlign: 'center' },
  card: { marginBottom: 20, flexDirection: 'row', alignItems: 'center' },
  image: { width: 60, height: 60, marginRight: 10 },
});

export default Favorites;