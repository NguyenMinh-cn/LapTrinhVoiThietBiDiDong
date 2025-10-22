import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
interface Props {
  name: string;
  done: boolean;
  onDelete?: () => void;
  onToggleDone?: () => void;
}

export default function JobItem({ name , done, onDelete, onToggleDone}: Props) {

  return (
    <View style={styles.item}>
      {!done && (
        <TouchableOpacity onPress={onToggleDone}>
          <AntDesign name="check-square" size={24} color="green" />
        </TouchableOpacity>
      )}
       
      

        <Text style={styles.text}>{name}</Text>
        <TouchableOpacity >
          <EvilIcons name="pencil" size={30} color="red" />
        </TouchableOpacity>

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
    backgroundColor: "#d2d5d8",
    padding: 12,
    borderRadius: 20,
    marginVertical: 6,
  },
  text: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    fontWeight: 'bold'
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
