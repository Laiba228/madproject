import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login";
import Register from "./RegisterNow";



export default function App() {
  
  const Stack = createStackNavigator();
return(
 <NavigationContainer>
    
    <Stack.Navigator>

    <Stack.Screen 
      name="RegisterScreen"  // the name that we pass in navigate 
      component={Register}
      options={{
        headerShown:true
      }}
    />

    <Stack.Screen 
      name="LoginScreen" 
      component={Login}
      options={{
        headerShown:true
      }}
    />

    </Stack.Navigator>
  </NavigationContainer>)
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
  },
});
