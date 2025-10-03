import { useState} from "react";
import { View, TextInput, Button } from "react-native";

export default function UserForm({ navigation, route, users, setUsers }) {
  const user = route.params?.user;
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleSave = () => {
    if (user) {
      const updated = users.map((u) => u.id === user.id ? { ...u, name, email } : u);
      setUsers(updated);
    } else {
      const newUser = {id: Date.now(), name, email,};
      setUsers([...users, newUser]);
    }
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}/>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, padding: 8, marginVertical: 8 }}/>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
