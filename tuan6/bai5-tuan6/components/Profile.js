import React from "react";
import { View, Text, Image } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: "https://i.pinimg.com/1200x/5a/9f/6a/5a9f6accaff9538c2e3c52c41226e1d9.jpg" }}
        style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 12 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nguyễn Văn A</Text>
      <Text style={{ fontSize: 16, color: "#555" }}>nguyenvana@gmail.com</Text>
    </View>
  );
}
