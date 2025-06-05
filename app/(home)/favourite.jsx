import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { useCart } from '../../redux/store';

const Favorites = () => {
  const { favorites } = useCart(); // Destructure favorites directly

  if (!favorites || favorites.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorites yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${Number(item.price).toFixed(2)}</Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    fontFamily: 'IBM Plex Mono',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 4,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: 'IBM Plex Mono',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'IBM Plex Mono',
  },
});

export default Favorites;