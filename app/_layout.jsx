import { View, Text } from "react-native";
import React from "react";
import { useFonts, Poppins_200ExtraLight } from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";


const _layout = () => {
  // Load fonts
  let [fontsLoaded] = useFonts({
    "Poppins-Light": require("@expo-google-fonts/poppins/Poppins_300Light.ttf"),
  "Poppins-Regular": require("@expo-google-fonts/poppins/Poppins_400Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Or replace with a loading spinner
  }

  return (
    <Stack
      style={{ fontFamily: "Poppins-Regular" }}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;
