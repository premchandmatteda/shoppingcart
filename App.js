import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cart from './screens/cart';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cart">

        <Stack.Screen name="Cart" component={Cart}
            options={{
                headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

