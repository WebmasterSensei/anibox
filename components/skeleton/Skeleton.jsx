import React from "react";
import { View, StyleSheet } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonLoader = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.container}>
        <View style={styles.avatar} />
        <View style={styles.textContainer}>
          <View style={styles.title} />
          <View style={styles.subtitle} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 16,
  },
  title: {
    width: 120,
    height: 20,
    borderRadius: 4,
  },
  subtitle: {
    marginTop: 6,
    width: 80,
    height: 15,
    borderRadius: 4,
  },
});

export default SkeletonLoader;
