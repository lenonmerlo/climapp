import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import citiesData from "../data/cities.json";
import { useEffect, useState } from "react";

const Cities = () => {
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    const normalize = (text: string) =>
      text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    const newFilteredCities = citiesData.filter((city) =>
      normalize(city.city).includes(normalize(search))
    );

    setFilteredCities(newFilteredCities);
  }, [search]);
  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Digite a cidade"
          placeholderTextColor={"#FFF"}
          style={style.input}
          value={search}
          onChangeText={(value) => setSearch(value)}
        />
        <MaterialIcons name="search" size={24} color={"#fff"} />
      </View>
      <ScrollView>
        <View style={style.scrollList}>
          {filteredCities.map((city, index) => (
            <View style={style.listItem} key={index}>
              <Image
                style={style.cityImage}
                source={require("../assets/images/Ícones/Vector.png")}
              />
              <Text style={style.cityName}>
                {city.city.replace(",", " - ")}
              </Text>
              <Text style={style.cityTemp}>{city.temp}º</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
    paddingTop: 40,
  },

  scrollList: {
    gap: 16,
  },

  listItem: {
    height: 63,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 16,
  },

  cityName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },

  cityTemp: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
  },

  cityImage: {
    width: 27,
    height: 24,
  },

  inputContainer: {
    height: 46,
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.15)",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  input: {
    color: "#FFF",
    fontFamily: "Montserrat_500Medium",
    fontSize: 16,
  },
});

export default Cities;
