import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

export default function UserList({ navigation, users, setUsers }) {
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("UserForm")} >
        <Text style={{textAlign: "center"}}>Add New User</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
            <Text >Name: {item.name}</Text>
            <Text >Email: {item.email}</Text>
            </View>

            <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={styles.btn} onPress={() => handleDelete(item.id)} >
                <Text  style={{textAlign: "center"}}>delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("UserForm", { user: item })} >
                <Text  style={{textAlign: "center"}}>updated</Text>
              </TouchableOpacity>
            </View>
          </View>         
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    backgroundColor: "#9EA8FF",
    padding: 10,
    textAlign:"center",
    margin: 10
  },
  item: {
    flexDirection:"row",
    padding: 10,
    alignItems: "center",
    backgroundColor:"#EDEDFF",
    borderBottomWidth: 1,  
    
  },
  
});

