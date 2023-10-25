import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native"; // Import the useRoute hook

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Login({ navigation }) {
  const route = useRoute(); // Initialize the route hook to access parameters
  const { userName, password, theme } = route.params; // Retrieve the parameters

  const goBack = () => {
    navigation.navigate("RegisterScreen");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          alignItems: "center", // This should be "center" for the parent container
          justifyContent: "center", // This should be "center" for the parent container
          backgroundColor: "pink",
          textAlign: "center", // To center text horizontally
          padding: 10, // Add some padding for spacing
        }}
      >
        Data from Previous Screen:{"\n"}
        User Name: {userName}
        {"\n"}
        Password: {password}
        {"\n"}
        Theme: {theme}
      </Text>

      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Text style={{ color: "white" ,margintop:10,}}> Go Back </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
  },
});
