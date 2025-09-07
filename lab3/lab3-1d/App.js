import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image,} from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={{flex:1, justifyContent:"center"}}>
        <Text style={{fontSize: 24,fontWeight: "bold",textAlign: "center"}}>LOGIN</Text>
      </View>
      

      <View style={{flex:1}}>
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address"/>

        <View style={styles.passwordContainer}>
          <TextInput placeholder="Password" style={{flex: 1, padding: 15}}/>
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image source={require("./assets/eye.png")} style={{ width: 30, height: 30, marginRight: 10 }}/>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={{flex:2}}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, textAlign: "center" }}>
          When you agree to terms and conditions
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "blue", textAlign: "center", marginVertical: 5 }}>
            For got your password?
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginVertical: 10 }}>
          Or login with
        </Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#275a8e" }]}>
          <Text style={styles.socialText}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: "#1593c6" }]}>
            <Text style={styles.socialText}>Z</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { borderWidth: 2, borderColor: "#5aaed8" }]}>
            <Image source={require("./assets/logo.webp")} style={{ width: 30, height: 30, marginVertical: 5 }}/>
          </TouchableOpacity>
        </View>
        
      </View>

      {/* Social buttons */}
      
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
  },
  loginButton: {
    backgroundColor: "#c74c3c",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  socialButton: {
    flex: 1,
    alignItems: "center",
  },
  socialText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
