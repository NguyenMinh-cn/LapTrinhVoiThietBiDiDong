import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
interface Props {
  job: { id: string; name: string };
  onDelete: () => void;
  onUpdate: (id: string, newName: string) => void;
}

export default function JobItem({ job, onDelete, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(job.name);

  const handleSave = () => {
    onUpdate(job.id, newName);
    setIsEditing(false);
  };

  return (
    <View style={styles.item}>
      <Ionicons name="checkmark-done" size={20} color="green" />

      {isEditing ? (
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
        />
      ) : (
        <Text style={styles.text}>{job.name}</Text>
      )}

      {isEditing ? (
        <TouchableOpacity onPress={handleSave}>
          <Entypo name="save" size={24} color="green" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setIsEditing(true)}>
          <EvilIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onDelete}>
        <MaterialIcons name="delete-forever" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 20,
    marginVertical: 6,
    elevation: 2,
  },
  text: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    fontSize: 15,
    paddingVertical: 2,
  },
});
