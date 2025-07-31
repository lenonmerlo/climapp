import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter()
  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      <Image source={require("../assets/images/Logo/Logo.png")} />
      <Image source={require("../assets/images/weather.png")} />
      <Text style={style.title}>Boas-vindas!</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          router.push("/cities");
        }}
      >
        <Text style={style.buttonTitle}>Entrar</Text>
        <MaterialIcons name="arrow-forward" size={24} color={"#01080e"} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 64,
    paddingVertical: 79,
    paddingHorizontal: 32,
  },

  title: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Montserrat_400Regular",
  },

  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#7693ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    flexDirection: "row",
    gap: 8,
  },

  buttonTitle: {
    color: "#01080e",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Montserrat_600SemiBold",
  },
});
