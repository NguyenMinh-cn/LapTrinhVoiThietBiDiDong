import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';

const products = [
  { id: "1", name: "Pinarello", price: 1800, description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.", category: "Roadbike", img: require("../assets/1.png")},
  { id: "2", name: "Pina Mountai", price: 1700, description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.", category: "Mountain", img: require("../assets/2.png") },
  { id: "3", name: "Pina Bike", price: 1500, description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.", category: "Mountain", img: require("../assets/3.png") },
  { id: "4", name: "Pinarello", price: 1900, description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.", category: "Roadbike", img: require("../assets/4.png") },
  { id: "5", name: "Pinarello", price: 2700, description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.", category: "Roadbike", img: require("../assets/5.png") },
  { id: "6", name: "Pinarello", price: 1350, description: "It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.", category: "Roadbike", img: require("../assets/6.png")}
];

export default function ProductList({navigation}) {
  const [like, setLike] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleLike = (id) => {
    setLike((prev) => ({...prev, [id]: !prev[id]}));
  };

  const filteredProducts = selectedCategory === "All" ? products: products.filter((p) => p.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setSelectedCategory("All")}>
          <Text style={{ color: selectedCategory === "All" ? "#E94141" : "gray" , textAlign: "center"}}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setSelectedCategory("Roadbike")}>
          <Text style={{ color: selectedCategory === "Roadbike" ? "#E94141" : "gray" , textAlign: "center"}}>Roadbike</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setSelectedCategory("Mountain")}>
          <Text style={{ color: selectedCategory === "Mountain" ? "#E94141" : "gray" , textAlign: "center" }}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.com}  
            onPress={() => navigation.navigate("ProductDetails", { product: item })}
          >
            <TouchableOpacity style={styles.likeBtn} onPress={() => toggleLike(item.id)}>
              <AntDesign name={like[item.id] ? "heart": "hearto"} color="#000" size={20} />
            </TouchableOpacity>
            <Image source={item.img} style={{width: 110, height: 105 }} resizeMode="contain"/>
            <Text style={{fontSize: 16, fontWeight:"500", color: "gray"}}>{item.name}</Text>
            <Text style={{fontSize: 16, fontWeight:"600"}} >${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 8 },
  com: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7BA8326",
    height: 200, 
    width: 150,
    margin: 10,
    borderRadius: 30,
    position:"relative"
  },
  likeBtn: {
    position:"absolute",
    top: 8,
    left: 8
  },
  filterBtn:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E94141",
    width: 100,
    textAlign: "center",
    padding: 5, 
    margin: 10
  },
  filterRow:{
    flexDirection:"row"
  }
});
