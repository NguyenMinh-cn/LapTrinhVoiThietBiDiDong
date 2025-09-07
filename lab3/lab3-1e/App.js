import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image,} from "react-native";
import { RadioButton} from 'react-native-paper';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:"center"}}>
        <Text style={{fontSize: 24,fontWeight: "bold",textAlign: "center"}}>REGISTER</Text>
      </View>
      

      <View style={{flex:3}}>
        <TextInput placeholder="Name" style={styles.input}/>
        <TextInput placeholder="Phone" style={styles.input}/>
        <TextInput placeholder="Email" style={styles.input}/>

        <View style={styles.passwordContainer}>
          <TextInput placeholder="Password" style={{flex: 1, padding: 15}}/>
          <TouchableOpacity>
            <Image source={require("./assets/eye.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>
          </TouchableOpacity>
        </View>
        
        <TextInput placeholder="Birthday" style={styles.input}/>

        <RadioButton.Group >
          <View style={{ flexDirection: "row",justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginRight: 20 }}>
              <RadioButton value="male" />
              <Text>Male</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="female" />
              <Text>Female</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      <View style={{flex:1, justifyContent:"center"}}>
        <TouchableOpacity style={{backgroundColor:"#c34e3b", padding: 10, borderRadius: 5}}>
          <Text style={{fontSize: 24,fontWeight: "bold",textAlign: "center",color: "#d8efdf"}}>REGISTER</Text>
        </TouchableOpacity>
        <Text  style={{textAlign: "center", marginVertical: 10}}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efdf',
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: "#cae1d1",
    padding: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#cae1d1",
    marginBottom: 15,
  },
  
});
