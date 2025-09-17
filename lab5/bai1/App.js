import React from 'react';
import {TouchableOpacity, View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Cá nấu lẩu, nấu mì',
    img:require("./assets/img/ca_nau_lau.png"),
    shop: "Devang",
  },
  {
    id: '2',
    title: '1KG KHÔ GÀ BƠ TỎI',
    img:require("./assets/img/ga_bo_toi.png"),
    shop: "LTDFOOD",
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    img:require("./assets/img/xa_can_cau.png"),
    shop: "Thế giới đồ chơi",
  },
  {
    id: '4',
    title: 'Đồ chơi đa dạng mô hình',
    img:require("./assets/img/do_choi_dang_mo_hinh.png"),
    shop: "Thế giới đồ chơi",
  },
  {
    id: '5',
    title: 'Lãnh đạo giản đơn',
    img:require("./assets/img/lanh_dao_gian_don.png"),
    shop: "Minh Long Book",
  },
  {
    id: '6',
    title: 'Hiểu lòng con trẻ',
    img:require("./assets/img/hieu_long_con_tre.png"),
    shop: "Minh Long Book",
  },
  
];

type ItemProps = {title: string, img:any, shop: string};

const Item = ({title, img, shop}: ItemProps) => (
  <View style={styles.item}>
  <Image source={img} style={{flex: 1, width: 74, height: 74 }}/>
  <View style={{flex: 2}}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.shop}>Shop {shop}</Text>
  </View>
    <TouchableOpacity style={[{flex: 1, color: "white"}, styles.button]}>Chat</TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.hb}>
        <TouchableOpacity >
          <Image source={require("./assets/img/left-outlined.png")} style={{width: 20, height: 20 }}/>
        </TouchableOpacity>
        <Text style={{color: "white", fontSize: 17, fontWeight: "bold"}}>Chat</Text>
          <Image source={require("./assets/img/cart.png")} style={{width: 20, height: 20 }}/>
      </View>

      <Text style={{fontSize: 11, marginHorizontal: 20, marginVertical: 10}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} img ={item.img} shop={item.shop}/>}
        keyExtractor={item => item.id}
      />
      <View style={styles.hb}>
        <TouchableOpacity >
          <Image source={require("./assets/img/3line.png")} style={{width: 20, height: 20 }}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Image source={require("./assets/img/home.png")} style={{width: 20, height: 20 }}/>
        </TouchableOpacity>
          <Image source={require("./assets/img/back.png")} style={{width: 20, height: 20 }}/>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
  },
  title: {
    fontSize: 15,
    marginHorizontal: 15
  },
  shop: {
    fontSize: 15,
    margin: 15,
    color: "red"
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    width: 80,
    height: 38,
    textAlign: "center",

  },
  hb: {
    flexDirection: "row",
    backgroundColor : "#1BA9FF",
    padding: 10, 
    height: 42,
    justifyContent: "space-between",
    
  }
});

export default App;