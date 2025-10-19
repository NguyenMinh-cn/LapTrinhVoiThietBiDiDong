import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function IndexScreen() {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push({ pathname: "/home", params: { name } })}
      >
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#fff" },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#8B5CF6", 
    marginBottom: 20 },
  input: { 
    width: "80%", 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 10, 
    padding: 10 },
  button: { 
    marginTop: 20, 
    backgroundColor: "#06B6D4", 
    padding: 12, 
    borderRadius: 10, 
    width: "60%" },
  buttonText: { 
    color: "#fff", 
    textAlign: "center", 
    fontWeight: "bold" },
});
