import {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelected } from '../App';
import PreviewPhone from './PreviewPhone';

const COLORS = [
{ id: 'blue', name: 'Xanh nhạt', swatch: '#BEEBFF', image: require('../assets/vs_blue.png') },
{ id: 'red', name: 'Đỏ', swatch: '#E53935', image: require('../assets/vs_red.png') },
{ id: 'black', name: 'Đen', swatch: '#111111', image: require('../assets/vs_black.png') },
{ id: 'silver', name: 'Bạc', swatch: 'silver', image: require('../assets/vs_silver.png') },
];


export default function ColorPickerScreen({ navigation }) {
  const { setSelected } = useSelected();

  return (
    <SafeAreaView style={styles.container}>
      
      <PreviewPhone/>
    <View>
      <Text >Chọn 1 màu bên dưới:</Text>
      <FlatList
        data={COLORS}
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