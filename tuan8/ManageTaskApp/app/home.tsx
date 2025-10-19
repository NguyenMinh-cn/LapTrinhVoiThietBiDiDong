import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import JobItem from "../components/JobItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
interface Job {
  id: string;
  name: string;
}

const API_URL = "https://6830912f6205ab0d6c399b60.mockapi.io/job";

export default function HomeScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState<string>("");

  const getJobs = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setJobs(data);
  };
  const updateJob = async (id: string, newName: string) => {
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    });
    getJobs();
  };

  const deleteJob = async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    getJobs();
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        <Image
          source={{ uri: "https://i.pinimg.com/736x/d4/92/e2/d492e2e24f062340335c4c59f1f18d81.jpg" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Hi {name || "Twinkle"}</Text>
          <Text style={styles.subtitle}>Have a great day ahead</Text>
        </View>
      </View>

      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={jobs.filter((job) => job.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={({ item }) => (
          <JobItem job={item} onUpdate={updateJob} onDelete={() => deleteJob(item.id)} />
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push({ pathname: "/add", params: { name } })}
      >
        <Text style={styles.addText}>＋</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  backBtn: { marginBottom: 10 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 18 },
  subtitle: { color: "gray" },
  search: { borderWidth: 1, borderColor: "#ccc", borderRadius: 10, padding: 10, marginBottom: 10 },
  addButton: {
    backgroundColor: "#06B6D4",
    position: "absolute",
    bottom: 30,
    right: 30,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: { color: "#fff", fontSize: 28 },
});
