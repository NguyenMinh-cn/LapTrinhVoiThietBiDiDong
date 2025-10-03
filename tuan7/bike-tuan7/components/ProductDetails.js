import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ProductDetails({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.hinh}>
        <Image source={product.img} resizeMode="contain" style={{width: 250, height: 250}}/>
      </View>
      
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.discount}>15% OFF | ${product.price - 1000}   <Text style={styles.oldPrice}>${product.price}</Text></Text>
      
      <Text style={{fontWeight:"bold", fontSize: 16,}}>Description</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity>
          <AntDesign name= "hearto" color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAdd}>
          <Text style={{color:"white", fontWeight:"bold"}}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: "white"
    },
  hinh: {
    backgroundColor: "#F7BA8326", 
    borderRadius: 20, 
    padding: 10, 
    alignItems:"center" 
    },
  title: { 
    fontSize: 22, 
    fontWeight:"bold",
    marginVertical: 10 
    },
  discount: { 
    fontSize: 18, 
    color: "#E94141", 
    marginVertical: 4 
    },
  oldPrice: { 
    textDecorationLine:"line-through", 
    color:"gray", 
    fontSize: 16 
    },
  desc: { 
    fontSize: 14,
    color: "gray", 
    marginTop: 4 
    },
  buttonRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems:"center",
    marginTop: 20 
    },
  buttonAdd:{
    width: 200,
    backgroundColor:"#E94141",
    paddingVertical: 12,
    borderRadius: 60,
    alignItems:"center"
  },
});
