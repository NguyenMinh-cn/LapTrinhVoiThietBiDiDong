import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelected } from '../App';
import { BsChevronRight } from "react-icons/bs";

export default function HomeScreen({ navigation }) {
  const { selected } = useSelected();
  const displayImage = selected ? selected.image : require('../assets/vs_blue.png');
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerBar}>
      <Text style={styles.headerTitle}>Chi tiết sản phẩm</Text>
    </View>


    <View style={styles.content}>
      <Image source={displayImage} style={styles.phoneImage} resizeMode="contain" />

<Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
        <Image source={require("../assets/vote.png")} style={{height: 20, width: 130, margin:10, flex: 1}} />
        <Text style={{flex: 1}}>(Xem 828 đánh giá)</Text>
      </View>
      
      <View style={{flexDirection: "row",alignItems: "center"}}>
        <Text style={[styles.price, {flex: 1}]}>1.790.000 đ</Text>
        <Text style={{flex: 1, fontSize:14, color:"#808080", textDecorationLine:"line-through"}}>1.790.000 đ</Text>
      </View>
      
      <View style={{flexDirection: "row",alignItems: "center"}}>
        <Text style={{flex: 1, fontSize: 14, marginTop: 6,color: "red", fontWeight: "bold"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        
      </View >
      <TouchableOpacity style={styles.pickButton} onPress={() => navigation.navigate('ColorPicker')}>
        <Text>4 MÀU - CHỌN LOẠI:
        </Text><BsChevronRight />
      </TouchableOpacity>

      
    </View>
    <TouchableOpacity style={[styles.pickButton,{backgroundColor: "red"}]}>
        <Text style={{color: "white", fontSize: 17, fontWeight: "bold"}}>Chọn mua</Text>
      </TouchableOpacity>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: { 
    flex: 1,
     marginTop: StatusBar.currentHeight || 0, 
     backgroundColor: '#f3f3f3' },
  headerBar: { 
    padding: 12, 
    backgroundColor: '#FFFFFF', 
    borderBottomWidth: 1, 
    borderBottomColor: '#e0e0e0' },
  headerTitle: { 
    fontSize: 16, 
    fontWeight: '600' },
  content: { 
    flex: 1, 
    padding: 16, 
     },
  phoneImage: { 
    width: 300, 
    height: 300 },
  productTitle: { 
    marginTop: 12, 
    fontSize: 14, 
    fontWeight: '600', 
  },
  price: { 
    fontSize: 16, 
    marginTop: 6,
    color: "red",
    },
  pickButton: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10, 
    borderWidth: 1, 
    borderColor: '#ccc',
    width: '100%', 
    borderRadius: 8, 
    backgroundColor: '#fff' },
  
  
  
  
  
  
  
  
  
  pickButtonText: { color: '#333', fontWeight: '600' },
  buyButton: { marginTop: 12, width: '80%', padding: 12, borderRadius: 8, backgroundColor: '#E53935', alignItems: 'center' },
  buyButtonText: { color: '#fff', fontWeight: '700' },
});