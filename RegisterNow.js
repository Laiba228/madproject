import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("");

  const navigation = useNavigation();

  const handleSignUp = () => {
    console.log("User Name:", userName);
    console.log("Password:", password);
    console.log("Theme:", theme);

    navigation.navigate("LoginScreen", { userName, password, theme });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Theme"
        onChangeText={(text) => setTheme(text)}
        value={theme}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
