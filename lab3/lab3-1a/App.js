import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
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
      <Image source={require('./assets/Ellipse.png')} />
      </View>

      <View style={styles.content} >
        <Text style={styles.title}>GROW</Text>
        <Text style={[styles.title, { marginBottom: 30 }]}>YOUR BUSINESS</Text>
        <Text style={styles.subtitle}>
            We will help you to grow your business using online server
        </Text>
      </View>

      <View style={[styles.row, {flex: 1}]} >
        <TouchableOpacity >
          <View style={styles.button}>
            <Text  style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity >
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
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
    ...StyleSheet.absoluteFillObject,// tự phủ toàn màn hình
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    borderRadius:10,
    width: 119,
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
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
