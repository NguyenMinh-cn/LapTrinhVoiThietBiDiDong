import React, { useState, createContext, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './components/HomeScreen';
import ColorPickerScreen from './components/ColorPickerScreen';
import PreviewPhone from './components/PreviewPhone';


const Stack = createNativeStackNavigator();

export const SelectedContext = createContext({ selected: null, setSelected: () => {} });
export function useSelected() {
return useContext(SelectedContext);
}


export default function App() {
  const [selected, setSelected] = useState(null);


  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ColorPicker" component={ColorPickerScreen} />
            <Stack.Screen name="PreviewPhone" component={PreviewPhone} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </SelectedContext.Provider>
  );
}