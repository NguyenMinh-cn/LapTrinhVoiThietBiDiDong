import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { useState, useEffect } from "react";

export default function App() {
  const [sl, setSL] = useState(1);
  const [tamtinh, setTamTinh] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tt = sl * 141800;
    setTamTinh(tt);
    setTotal(tt);
  }, [sl]);

  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={{backgroundColor:"white", padding:8, marginBottom: 20}}>
          <View style={[styles.product,{flex:1}]}>
            <Image style={styles.img} source={require("./assets/book.png")} />
            <View>
              <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
              <Text style={styles.title}>Cung cấp bởi Tiki Trading</Text>
              <Text style={styles.pricenew}>141.800 đ</Text>
              <Text style={styles.priceold}>150.000 đ</Text>
              <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <TouchableOpacity style={styles.btnQty} onPress={() => sl > 1 && setSL(sl-1)}>
                    <Text style={{fontSize:18}}>-</Text>
                  </TouchableOpacity>
                  <Text style={{marginHorizontal:10, fontSize:16}}>{sl}</Text>
                  <TouchableOpacity style={styles.btnQty} onPress={() => setSL(sl+1)}>
                    <Text style={{fontSize:18}}>+</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Text style={{color:"#134FEC"}}>Mua sau</Text> 
                </View>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={{fontSize:12, fontWeight:"bold", marginRight:10}}>Mã giảm giá đã lưu</Text>
            <Text style={{fontSize:12, fontWeight:"bold", color:"#134FEC"}}>Xem tại đây</Text>
          </View>
          <View style={styles.row}>
            <TextInput style={styles.input} placeholder="Mã giảm giá" />
            <TouchableOpacity style={{backgroundColor:"#0A5EB7", padding:10,  borderRadius:4}}>
              <Text style={{color:"#fff", fontWeight:"bold"}}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height:51, padding:10, backgroundColor:"white", marginBottom:10}}>
          <Text>
            Bạn có phiếu quà tặng Tiki/Got it/Urbox? <Text style={{color:"blue"}}>Nhập tại đây?</Text>
          </Text>
        </View>
      </View>

      <View style={styles.footerBox}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{fontSize:16}}>Tạm tính</Text>
          <Text style={{fontSize:16, color:"red"}}>{tamtinh.toLocaleString()} đ</Text>
        </View>
        <View style={styles.footer}>
          <Text style={{fontWeight:"bold", fontSize:16}}>Thành tiền</Text>
          <Text style={{fontWeight:"bold", fontSize:18, color:"red"}}>{total.toLocaleString()} đ</Text>
          <TouchableOpacity style={styles.checkout}>
            <Text style={{color:"white", fontWeight:"bold"}}>TIẾN HÀNH ĐẶT HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#C4C4C4",
  },
  product:{
    flexDirection:"row",
  },
  img:{
    width:100,
    height:120,
    marginRight:10
  },
  title:{
    fontSize:12,
    fontWeight:"bold"
  },
  pricenew:{
    fontSize:18,
    color:"red",
    fontWeight:"bold"
  },
  priceold:{
    fontSize:14,
    color:"#808080",
    textDecorationLine:"line-through"
  },
  btnQty:{
    borderWidth:1,
    padding:8
  },
  row:{
    flexDirection:"row",
    alignItems:"center",
    marginVertical:10
  },
  input:{
    flex:1,
    borderWidth:1,
    borderColor:"#ccc",
    padding:8,
    marginRight:10
  },
  footerBox:{
    backgroundColor:"white",
    padding:10
  },
  footer:{
    marginTop:10,
    borderTopWidth:1,
    borderColor:"#ccc",
    paddingTop:10
  },
  checkout:{
    marginTop:15,
    backgroundColor:"red",
    padding:15,
    alignItems:"center",
    borderRadius:4
  }
});
