import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CityDetails = () => {
  const searchParams = useLocalSearchParams();
  const [cityDetails, setCityDetails] = useState(null);

  const handleData = async () => {
    try {
      const response = await fetch("https://climapp-api.vercel.app/api");
      const responseJSON = await response.json();

      const paramName = Array.isArray(searchParams.cityName)
        ? searchParams.cityName[0]
        : searchParams.cityName;

      const city = responseJSON.find(
        (cityData) => cityData.city === paramName
      );

      setCityDetails(city || {}); // evita que permaneça null
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  if (!cityDetails || !cityDetails.city) {
    return (
      <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.headerTitle}>Carregando...</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={["#00457d", "#05051f"]} style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.headerTitle}>{cityDetails.city}</Text>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  headerTitle: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
    textAlign: "center",
  },
});

export default CityDetails;
