import {
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_700Bold
} from '@expo-google-fonts/ibm-plex-sans';
import { Feather } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Tabs } from 'expo-router/tabs';
import React from "react";
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  const [fontsLoaded] = useFonts({
      IBMPlexSans_400Regular,
      IBMPlexSans_500Medium,
      IBMPlexSans_700Bold,
    });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'IBM Plex Mono',
                color: focused ? '#60B5FF' : '#333',}}
            >
              {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
            </Text>
          ),
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            switch (route.name) {
              case 'home':
                iconName = 'home';
                break;
              case 'cart':
                iconName = 'shopping-cart';
                break;
              case 'favourite':
                iconName = 'heart';
                break;
              case 'profile':
                iconName = 'user';
                break;
              default:
                iconName = 'circle';
            }

            return (
              <Feather
                name={iconName}
                size={22}
                color={focused ? '#ffffff' : '#000'}
                backgroundColor={focused ? '#60B5FF' : 'transparent'}
                borderRadius={50}
                padding={5}
              />
            );
          },
          tabBarStyle: {
            height: 70,
            paddingBottom: 8,
            paddingTop: 10,
          },
        })}
      >
        <Tabs.Screen name="home" />
        <Tabs.Screen name="cart" />
        <Tabs.Screen name="favourite" />
        <Tabs.Screen name="profile" />
      </Tabs>
    </SafeAreaProvider>
  );
}