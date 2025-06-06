import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



export default function NavBar() {

  return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.logoContainer}>
            <Text style={styles.logoText}>Full Logo</Text>
         </TouchableOpacity>
         <View style={styles.addressContainer}>
            <Text style={styles.addressLabel}>DELIVERY ADDRESS</Text>
            <Text style={styles.address}>Umuezikе Road, Oyo State</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>    
  )
}




const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  logoContainer: {
    backgroundColor: '#93C5FD', // Light blue background
    borderWidth: 1,
    borderColor: '#2563EB', // Light steel blue border
    padding: 2,
    borderRadius: 2,
  },
  logoText: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 10,
  },
  addressContainer: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addressLabel: {
    fontSize: 10,
    color: '#334155',
    fontFamily: 'IBM Plex Sans',
    fontWeight: '600',
  },
  address: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
    fontFamily: 'IBM Plex Sans',
  },
});