import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_700Bold,
  useFonts,
} from '@expo-google-fonts/ibm-plex-sans';
import { Stack } from "expo-router";
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import NavbarSection from "../components/navbar/navbarSection";
import { Colors } from "../constants/Colors";
import { CartProvider, useCart } from '../redux/store';

const colors = Colors.light;

export default function App() {
  const [fontsLoaded] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_700Bold,
  });

  const CartIcon = () => {
    const { cart } = useCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    return <Text>Cart ({count})</Text>;
  };

  if (!fontsLoaded) return null; 


  return (
    <CartProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <NavbarSection />
      <Stack
        screenOptions={{
         headerShown: false, 
        }}
      >
        {/* Home Screen Group */}
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
        {/* Cart Screen */}
        <Stack.Screen name="cart" options={{
            title: 'Cart',
            tabBarLabel: 'Cart',
            tabBarBadge: () => <CartIcon />,
          }} />
      </Stack>
      <Toast />
      </SafeAreaView>
    </CartProvider>
  );
}

<CartProvider>
<SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
  <NavbarSection />
  <Stack
    screenOptions={{
      headerShown: false, 
    }}
  > 
      <Stack.Screen name="index" options={{ headerShown: false }} />
     <Stack.Screen name="(home)" options={{ headerShown: false }} />
     <Stack.Screen name="productDetailScreen" options={{ headerShown: false }} />
  </Stack>
  <Toast />
</SafeAreaView>
</CartProvider>