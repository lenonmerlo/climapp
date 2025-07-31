import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      <Image source={require("../assets/images/Logo/Logo.png")} />
      <Image source={require("../assets/images/weather.png")} />
      <Text>Boas-vindas!</Text>
      <TouchableOpacity>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    color: "#fff",
    fontSize: 20,
  },
});
