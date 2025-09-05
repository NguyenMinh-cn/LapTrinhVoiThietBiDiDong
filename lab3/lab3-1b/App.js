import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
         style={styles.background}
        colors={['#FFFFFF','#37D6F8']}
        start={{x: 0.5, y: 0}}
        end={{x:0.5, y:1}}>

      <View style={[styles.row, {flex: 2}]} >
      <Image source={require('./assets/1_b.png')} />
      </View>

      <View style={ {flex: 2}} >
        <Text style={styles.title}>FORGET</Text>
        <Text style={styles.title}>PASSWORD</Text>
        <Text style={styles.subtitle}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      
      <View style={styles.inputEmail}>
          <Image source={require('./assets/iconmail.png')} />
          <TextInput
            placeholder="Email"
          />
      </View>

      <View style={[styles.row, {flex: 1}]} >
        <TouchableOpacity >
          <View style={styles.button}>
            <Text  style={styles.buttonText}>NEXT</Text>
          </View>
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
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    fontWeight: '500',
  },
  button: {
    width: 305,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E3C000',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputEmail: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    height: 45,
    marginHorizontal: 20,
  },
});
