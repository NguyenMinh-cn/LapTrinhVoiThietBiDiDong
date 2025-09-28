import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const products = [
  { id: 1, name: "Laptop", price: 500000, description: "N5095 Laptop with 15.6 IPS Display, 16GB RAM, Powered by Intel Celeron 11th Gen N5095A, Portable Netbook Running Windows 10/11" },
  { id: 2, name: "Phone", price: 8000, description: "Điện thoại iPhone 17 Pro Max 256GB" },
  { id: 3, name: "Headphones", price: 1000000, description: "Sponsored Ad - defean Cloud 3 Earpads Coolig Gel Replacement Cloud Alpha Ear Cushions Pads Compatible with HyperX Cloud St" },
];

export default function Products({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("ProductDetails", { id: item.id })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={{ color: "#555" }}>{item.price}đ</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: "#fff" },
  item: { 
    padding: 12, 
    borderBottomWidth: 1, 
    borderBottomColor: "#ccc" },
  name: { 
    fontSize: 16, 
    fontWeight: "bold" },
});
