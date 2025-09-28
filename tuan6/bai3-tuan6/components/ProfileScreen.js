import { Text, View,Image} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image 
        source={{ uri: "https://i.pinimg.com/736x/c0/98/dd/c098dd6f48f4800f4c30cd68eff78ad4.jpg" }} 
        style={{ width: 150, height: 150, borderRadius: 75, marginBottom: 12 }}
      />

      <Text style={{ fontSize: 20 }}>Alibaba</Text>
    </View>
  );
}