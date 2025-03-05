import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/loadinganimation/loading-animation.json")} // Path to your Lottie JSON file
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default Loading;
