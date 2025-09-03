import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 3, backgroundColor: 'red'}}
      >
      
      </View>
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 1, backgroundColor: 'green'}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
