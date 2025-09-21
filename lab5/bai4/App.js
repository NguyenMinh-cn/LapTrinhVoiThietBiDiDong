import { useEffect, useState } from "react";
import {View, Text, FlatList, ActivityIndicator, StyleSheet,} from "react-native";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6830912f6205ab0d6c399b60.mockapi.io/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi:", err);
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
    <View style={styles.container}>
      <FlatList
        data={users}
        horizontal={true} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.infor}>
            <Text style={styles.name}>{item.name}</Text>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.email}>{item.email}</Text>
          </View>
        )}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infor: {
    width: 150,
    height: 100,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#B0E0E6",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold", 
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
});
