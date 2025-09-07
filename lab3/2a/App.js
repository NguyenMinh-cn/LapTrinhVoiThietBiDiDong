import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={['#FBCB00','#BF9A00']}
        start={{x: 0.5, y: 0}}
        end={{x:0.5, y:1}}>

      <View style={[styles.row, {flex: 1}]} >
        <Text style={styles.title}>LOGIN</Text>
      </View>


      <View style={{flex: 1}} >
         <View style={styles.inputContainer}>
          <Image source={require("./assets/user.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>
          <TextInput style={styles.input} placeholder="Name"/>
        </View> 

        <View style={styles.inputContainer}>
          <Image source={require("./assets/1_b.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>
          <TextInput style={styles.input} placeholder="Password"/>
          <TouchableOpacity>
            <Image source={require("./assets/eye.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>
          </TouchableOpacity>
        </View> 
      </View>

      <View style={{flex:1, margin: 10}}>
        <TouchableOpacity style={{backgroundColor:"black", padding: 10, borderRadius: 5}}>
          <Text style={{fontSize: 20,fontWeight: "bold",textAlign: "center",color: "white"}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 30}}>
          <Text style={{fontSize: 20,fontWeight: "bold",textAlign: "center"}}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>

      </LinearGradient>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,// tự phủ toàn màn hình
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 20,
  },

  row: {
    margin:10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    margin: 20,
    paddingHorizontal: 10,
    backgroundColor: "#C4C4C44D",
  },
  input: {
    flex: 1,
    height: 40,
  },
});
