import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MiniMart</Text>
      <Text style={styles.subtitle}>This is an e-commerce app.</Text>
      <Link href="/(home)/home" style={styles.link}>
        <Text style={styles.link}>Click here to browse products</Text>
        </Link>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  link: {
    fontSize: 16,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
