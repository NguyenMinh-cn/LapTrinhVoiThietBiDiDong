import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
const API_URL = "https://6830912f6205ab0d6c399b60.mockapi.io/job";

export default function AddJob() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const router = useRouter();
  const [job, setJob] = useState<string>("");

  const handleAdd = async () => {
    if (!job.trim()) return;
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: job }),
    });
    router.push({ pathname: "/home", params: { name } });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: 40 }}>
      <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={{ alignSelf: "flex-start" }}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: "https://i.pinimg.com/736x/d4/92/e2/d492e2e24f062340335c4c59f1f18d81.jpg" }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Hi {name || "Twinkle"}</Text>
          <Text style={styles.subtitle}>Have a great day ahead</Text>
        </View>
      </View>

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <TextInput
        placeholder="Input your job"
        style={styles.input}
        value={job}
        onChangeText={setJob}
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" }}
        style={styles.image}
      />
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", alignItems: "center" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 30, alignSelf: "flex-start" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 18 },
  subtitle: { color: "gray" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: { width: "90%", borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 10 },
  button: { marginTop: 20, backgroundColor: "#06B6D4", padding: 12, borderRadius: 10, width: "60%" },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  image: { width: 100, height: 100, marginTop: 40 },
});
