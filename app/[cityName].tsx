import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

const CityDetails = () => {
  const searchParams = useLocalSearchParams();

  const handleData = async () => {
    try {
      const response = await fetch("https://climapp-api.vercel.app/api");

      const responseJSON = await response.json();
      console.log(responseJSON);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return <View></View>;
};

export default CityDetails;
