import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelected } from '../App';
import { BsChevronRight } from "react-icons/bs";

export default function PreviewPhone({ navigation }) {
  const { selected } = useSelected();
  const displayImage = selected ? selected.image : require('../assets/vs_blue.png');


  return (
    <View style={styles.content}>
      <Image source={displayImage} style={styles.phoneImage} resizeMode="contain" />
      <Text style={styles.productTitle} numberOfLines={2}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  content: { 
    flexDirection: "row",
    margin: 10,
     },
  phoneImage: { 
    width: 60, 
    height: 60 },
  productTitle: { 
    fontSize: 14, 
    fontWeight: '600', 
  },
});