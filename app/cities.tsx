import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import citiesData from "../data/cities.json";

const Cities = () => {
  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      <ScrollView>
        <View style={style.scrollList}>
          {citiesData.map((city, index) => (
            <View style={style.listItem} key={index}>
              <Image
                style={style.cityImage}
                source={require("../assets/images/Ícones/Vector.png")}
              />
              <Text style={style.cityName}>{city.city}</Text>
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
});

export default Cities;
