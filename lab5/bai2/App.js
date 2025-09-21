import React from 'react';
import {TextInput, TouchableOpacity, View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    img: require("./assets/product/1.png"),
    price: 69000,
    discount: 39
  },
{
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    img: require("./assets/product/2.png"),
    price: 69000,
    discount: 39
  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    img: require("./assets/product/3.png"),
    price: 69000,
    discount: 39
  },
   {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    img: require("./assets/product/4.png"),
    price: 69000,
    discount: 39
  },
   {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    img: require("./assets/product/5.png"),
    price: 69000,
    discount: 39
  },
   {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    img: require("./assets/product/6.png"),
    price: 69000,
    discount: 39
  },
];

const Item = (item) => (
  <View style={{width: 170, margin: 5, padding: 10}}>
    <Image source={item.img} style={{width: 155, height: 90 }}/>
    <Text numberOfLines={2} ellipsizeMode="tail" style={{fontSize: 15}}>{item.title}</Text>
    <View style={{flexDirection:"row", fontSize: 11}}>
    <Image source={require("./assets/img/vote.png")}/>(15)
    </View>
    

    <View style={{flexDirection: "row", justifyContent:"space-between"}}>
      <Text >{item.price} đ</Text>
      <Text style={{color:"gray"}}>-{item.discount} %</Text>
    </View>
  
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      
      <View style={styles.hb}>
        <TouchableOpacity >
          <Image source={require("./assets/img/left-outlined.png")} style={{width: 20, height: 20 }}/>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Image source={require("./assets/img/search.png")} style={{width: 20, height: 20 }}/>
          <TextInput style={styles.input} placeholder="Search"/>       
        </View> 

        <TouchableOpacity >
          <Image source={require("./assets/img/cart.png")} style={{width: 20, height: 20 }}/>
        </TouchableOpacity>

        <TouchableOpacity >
          <Image source={require("./assets/img/3dot.png")} />
        </TouchableOpacity>
      </View>

      <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({item}) => Item(item)}
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

  hb: {
    flexDirection: "row",
    backgroundColor : "#1BA9FF",
    height: 42,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  input: {
    height: 30,
    padding: 10
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 5,
    paddingHorizontal: 10
  },
});

export default App;