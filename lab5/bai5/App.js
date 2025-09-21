import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image, ScrollView, TouchableOpacity,} from "react-native";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGrid, setIsGrid] = useState(false); // true = GridView, false = ListView

  useEffect(() => {
    fetch("https://6830912f6205ab0d6c399b60.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi fetch:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#B0E0E6" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>

      <Text style={{fontSize: 22, fontWeight: "bold", marginBottom: 5, textAlign: "center"}}>Gallery App</Text>
    

     

      <Text style={styles.subTitle}>Ảnh nổi bật</Text>
      <FlatList
        data={images.slice(0, 5)}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.featureImage}/>
        )}
      />

       <TouchableOpacity style={styles.button}
        onPress={() => setIsGrid(!isGrid)}
      >{isGrid ? <Image source={require("./assets/img/3line.png")} style={{width: 20, height: 20 }}/>
                  :
                  <Image source={require("./assets/img/4square.png")} style={{width: 20, height: 20 }}/>
                  }
      </TouchableOpacity>

      <FlatList
        data={images}
        key={isGrid ? "GRID" : "LIST"} 
        keyExtractor={(item) => item.id}
        numColumns={isGrid ? 2 : 1}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <Text>{item.author}</Text>
          </View>
        )}
        scrollEnabled={false}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  featureImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#FFCCFF",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,

  },
});
