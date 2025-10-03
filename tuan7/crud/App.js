import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";

const Stack = createNativeStackNavigator();

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList">
          {(props) => <UserList {...props} users={users} setUsers={setUsers} />}
        </Stack.Screen>
        <Stack.Screen name="UserForm">
          {(props) => <UserForm {...props} users={users} setUsers={setUsers} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
