import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nhập từ khóa tìm kiếm..."
        value={keyword}
        onChangeText={setKeyword}
        style={styles.input}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});
