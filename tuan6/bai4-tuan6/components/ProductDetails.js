import React from "react";
import { View, Text, StyleSheet } from "react-native";

const products = [
  { id: 1, name: "Laptop", price: 500000, description: "N5095 Laptop with 15.6 IPS Display, 16GB RAM, Powered by Intel Celeron 11th Gen N5095A, Portable Netbook Running Windows 10/11" },
  { id: 2, name: "Phone", price: 8000, description: "Điện thoại iPhone 17 Pro Max 256GB" },
  { id: 3, name: "Headphones", price: 1000000, description: "Sponsored Ad - defean Cloud 3 Earpads Coolig Gel Replacement Cloud Alpha Ear Cushions Pads Compatible with HyperX Cloud St" },
];

export default function ProductDetails({ route }) {
  const { id } = route.params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Không tìm thấy sản phẩm</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}đ</Text>
      <Text style={styles.desc}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: "#fff" },
  name: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 8 },
  price: { 
    fontSize: 18, 
    color: "tomato", 
    marginBottom: 8 },
  desc: { 
    fontSize: 16, 
    color: "#555" },
});
