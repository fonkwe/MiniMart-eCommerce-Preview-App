import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";



export default function NavBar() {

  return (
         <View style={styles.header}>
           <Image source={require('../assets/images/react-logo.png')} style={styles.logo} />
            <View style={styles.addressContainer}>
               <Text style={styles.deliveryText}>DELIVERY ADDRESS</Text>
               <Text style={styles.addressText}>Umuezike Road, Oyo State</Text>
            </View>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
  )
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', alignItems: 'center', padding: 10, marginTop: 40,
    justifyContent: 'space-between', fontFamily: 'IBM Plex Mono',
  },
  logo: { width: 56, height: 30, resizeMode: 'contain' },
  addressContainer: { flex: 1, marginLeft: 10 , alignItems: 'center', fontFamily: 'IBM Plex Mono' },
  deliveryText: { fontSize: 10, color: 'gray', fontWeight: '600', fontFamily: 'IBM Plex Mono' },
  addressText: { fontSize: 13, fontWeight: 'bold', fontWeight: '600',fontFamily: 'IBM Plex Mono',
  },
});