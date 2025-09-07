import { Text, View, StyleSheet, TouchableOpacity,Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:1, marginTop: 10, alignItems: "center", justifyContent: "center"}}>
        <Image source={require("./assets/eye.png")} style={{ width: 100, height: 100, marginRight: 10 }}/>
      </View>
      
      <View style={{flex: 1}} >
         <View style={styles.inputContainer}>
          <FontAwesome name="user" size={32} color="black" />
          <TextInput style={styles.input} placeholder="Please input user name"/>
        </View> 

        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={32} color="black" />
          <TextInput style={styles.input} placeholder="Please input password"/>
          <TouchableOpacity>
            <FontAwesome name="eye" size={32} color="black" />
          </TouchableOpacity>
        </View> 
      </View>

      <View style={{flex:1}}>
        <TouchableOpacity style={{backgroundColor:"#386ffc", padding: 10, borderRadius: 5}}>
          <Text style={{fontSize: 20,textAlign: "center",color: "white"}}>LOGIN</Text>
        </TouchableOpacity>

        <View style={{flexDirection: "row",justifyContent: "space-between", margin: 10}}>
          <TouchableOpacity>
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Forgot Password</Text>
          </TouchableOpacity>

        </View>

      </View>

      <View style={{flex:1}}>
        <View style={{flexDirection: "row",alignItems: "center", marginBottom: 20,}}>
          <View style={{flex: 1,height: 1,backgroundColor: "blue"}} />
          <Text style={{marginHorizontal: 10,fontSize: 14,}}>Other Login Methods</Text>
        <View style={{flex: 1,height: 1,backgroundColor: "blue", }} />
        </View>

        <View style={{flexDirection: "row",justifyContent: "center", marginBottom: 20}}>
         <TouchableOpacity >
            <Image source={require("./assets/adduser.png")} style={{ width: 50, height: 50, borderRadius: 10, margin:10 }}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./assets/wifi.png")} style={{ width: 50, height: 50, borderRadius: 10, margin:10 }}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./assets/FB.png")} style={{ width: 50, height: 50, borderRadius: 10, margin:10 }}/>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    margin: 5,
    paddingHorizontal: 10,
    backgroundColor: "#C4C4C44D",
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    color: "#c4c4c4"
  },
});
