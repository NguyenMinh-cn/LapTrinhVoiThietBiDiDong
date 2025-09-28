import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={{ fontSize: 16}}>Thông báo</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fff" },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
});
