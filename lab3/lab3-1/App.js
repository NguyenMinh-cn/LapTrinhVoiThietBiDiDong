import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={[styles.row, {flex: 2}]} >
      <Image source={require('./assets/Ellipse.png')} />
      </View>
      
      <View style={{flex: 2, flexDirection: 'column',justifyContent: 'center', alignItems: 'center', marginHorizontal: 10}} >
      <Text style={{fontSize: 25,textAlign: 'center',fontWeight: 'bold'}}>GROW</Text>
      <Text style={{fontSize: 25,textAlign: 'center', fontWeight: 'bold', marginBottom:30}}>YOUR BUSINESS</Text>
      <Text style={{fontSize: 15,textAlign: 'center', fontWeight: 'bold' }}>We will help you to grow your business using online server</Text>
      </View>
      <View style={[styles.row, {flex: 1}]} >
       <TouchableOpacity >
        <View style={styles.button}>
          <Text style={{fontSize: 18, fontWeight: 'bold' }}>LOGIN</Text>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity >
        <View style={styles.button}>
          <Text style={{fontSize: 18, fontWeight: 'bold' }}>SIGN UP</Text>
        </View>
        
      </TouchableOpacity>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: 'linear-gradient(180deg, #00CCF9 0%, #00CCF9 100%)',
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    borderRadius:10,
    width: 119,
    height: 48,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E3C000',
  },
  row: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  

});
