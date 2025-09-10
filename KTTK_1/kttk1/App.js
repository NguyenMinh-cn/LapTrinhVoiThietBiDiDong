import {StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import {useState} from 'react';

export default function App() {
  const [input, setInput] = useState(0);
  const [textInput, setText] = useState("");
  function handle() {
      const a = document.getElementById("a");
      setInput(a);
    }
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Máy tính
      </Text>
      <TextInput style={styles.ketqua} inputMode="none" placeholder="nhập a" id="a"></TextInput>
      <TextInput style={styles.ketqua} inputMode="none" placeholder="nhập b" id="b"></TextInput>
      <Text style={styles.paragraph}>
        {textInput}
      </Text>
      <Text >
        {input}
      </Text>
      <View>
        <View style={styles.row}>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(0); setText(i => i+"0")}}>0</TouchableOpacity>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(1); setText(i => i+"1")}}>1</TouchableOpacity>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(2); setText(i => i+"2")}}>2</TouchableOpacity>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(3); setText(i => i+"3")}}>3</TouchableOpacity>
        </View>
        <View style={styles.row}>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(4); setText(i => i+"4")}}>4</TouchableOpacity>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(5); setText(i => i+"5")}}>5</TouchableOpacity>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(6); setText(i => i+"6")}}>6</TouchableOpacity>
        </View>
        <View style={styles.row}>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(7); setText(i => i+"7")}}>7</TouchableOpacity>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(8); setText(i => i+"8")}}>8</TouchableOpacity>
      <TouchableOpacity style={styles.num} onPress={e=>{setInput(9); setText(i => i+"9")}}>9</TouchableOpacity>
      </View>
        <View style={styles.row}>
      <TouchableOpacity style={styles.pheptinh} onPress={e=>{setText(i => i+"+");}}>+</TouchableOpacity>
      <TouchableOpacity style={styles.pheptinh} onPress={e=>{setText(i => i+"-")}}>-</TouchableOpacity>
      <TouchableOpacity style={styles.pheptinh} onPress={e=>{setText(i => i+"*")}}>*</TouchableOpacity>
      <TouchableOpacity style={styles.pheptinh} onPress={e=>{setText(i => i+"/")}}>/</TouchableOpacity>
      </View>
        <View style={styles.row}>
      <TouchableOpacity style={styles.tinhtoan} onPress={e=>{setText(i => i+"=")}}>=</TouchableOpacity>
      <TouchableOpacity style={styles.xoa} onPress={e=>{ setText(""); setInput(0)}}>Xóa</TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ketqua:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: "#C4C4C4"
  },
  row: {
    flexDirection: "row", 
    justifyContent: "space-around"
  },
  num: {
    backgroundColor: "#F4a4a4",
    margin: 5,
    padding: 20,
    fontSize: 20
  },
  pheptinh:{
     backgroundColor: "#F4aEF4",
      margin: 5,
      padding: 20,
      fontSize: 20
  },
  tinhtoan:{
     backgroundColor: "green",
      margin: 5,
      padding: 20,
      fontSize: 20,
      color:  "white",
      fontWeight: "bold"
  },
  xoa:{
     backgroundColor: "red",
      margin: 5,
      padding: 20,
      fontSize: 20,
      color:  "white",
      fontWeight: "bold"
  }
});
