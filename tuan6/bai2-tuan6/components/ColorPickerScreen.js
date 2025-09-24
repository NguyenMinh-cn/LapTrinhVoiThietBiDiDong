import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelected } from '../App';
import PreviewPhone from './PreviewPhone';
import { useEffect, useState } from "react";

export default function ColorPickerScreen({ navigation }) {
  const [dataColor, setData] = useState([]);
  const { setSelected } = useSelected();
useEffect(() => {
    fetch("https://68d346ddcc7017eec54670bf.mockapi.io/phones")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.error("Lỗi:", err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      
      <PreviewPhone/>
    <View>
      <Text >Chọn 1 màu bên dưới:</Text>
      <FlatList
        data={dataColor}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.colorRow} onPress={() => { setSelected(item); navigation.navigate('HomeScreen'); }}>
            <View style={[styles.swatch, { backgroundColor: item.swatch }]} />
            <Text style={{ marginLeft: 12 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />


      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.goBack()}>
        <Text style={styles.doneButtonText}>XONG</Text>
      </TouchableOpacity>
    </View>
    
    
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
container: { 
  flex: 1,
  backgroundColor: '#f3f3f3' 
  },

colorRow: { 
  flexDirection: 'row', 
  alignItems: 'center', 
  padding: 12,
  backgroundColor: '#fff', 
  borderRadius: 8, 
  marginBottom: 12 
  },
swatch: {
  width: 48, 
  height: 48, 
  borderRadius: 6, 
  borderWidth: 1, 
  borderColor: '#ddd' 
  },
doneButton: {
  margin: 16, 
  padding: 12, 
  borderRadius: 10, 
  backgroundColor: '#5C6BC0', 
  alignItems: 'center' 
  },
doneButtonText: { 
  color: '#fff', 
  fontWeight: '700' 
  },
});