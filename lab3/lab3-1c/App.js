import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
         style={styles.background}
        colors={['#C7F4F6','#D1F4F6','#E5F4F5','#00CCF9']}
        start={{x: 0.5, y: 0}}
        end={{x:0.5, y:1}}>

      <View style={[styles.row, {flex: 1,alignItems: 'flex-end'}]} >
        <Text style={{fontSize: 60, fontWeight: '700'}}>CODE</Text>
      </View>

      <View style={{flex: 2}} >
        <Text style={styles.title}>VERIFICATION</Text>
        <Text style={styles.subtitle} >Enter ontime password sent on</Text>
        <Text style={styles.subtitle}>++849092605798</Text>
        <View style={{flexDirection: "row",justifyContent:"center", marginTop: 20}}>
             {Array.from({ length: 6 }).map((_, index) => (
              <TextInput
                key={index}
                style={styles.input}
                keyboardType="number-pad"
                maxLength={1}
              />
            ))}
        </View>
      </View>
  

      <View style={[styles.row, {flex:1}]} >
        <TouchableOpacity >
          <View style={styles.button}>
            <Text  style={styles.buttonText}>VERIFY CODE</Text>
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
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
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
    marginBottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    borderWidth: 2, 
    textAlign: "center",
    width: 50,
    height: 50,
  },
});
