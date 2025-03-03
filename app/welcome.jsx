import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";
import theme from "../constants/theme";
import Buttons from "../components/Buttons";
import { useRouter } from "expo-router";

const Welcome = () => {

  const router = useRouter();

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/cute.png")}
        />
        <View style={{ gap: 20 }}>
          <Text style={styles.title}>LinkOut</Text>
          <Text style={styles.punchline}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            quibusdam quae quia omnis sint natus quis fugit vero repudiandae ab
          </Text>
        </View>

        <View style={styles.footer}>
          <Buttons
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push('login')}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>
                Already have an account?
            </Text>
            <Pressable>
                <Text onPress={() => router.push('login')} style={[styles.loginText, {color: theme.colors.dark, fontWeight: theme.fonts.bold}]}>
                    Logins
                </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: wp(5),
  },
  welcomeImage: {
    height: hp(30),
    width: wp(70),
    alignSelf: "center",
  },
  title: {
    color: theme.colors.primary,
    fontSize: hp(5),
    fontWeight: theme.fonts.bold,
    textAlign: "center",
  },
  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(1.7),
    color: theme.colors.secondary,
  },
  footer: {
    gap: 30,
    width: "100%",
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  loginText: {
    textAlign: 'center',
    color: theme.colors.secondary,
    fontSize: hp(1.6)
  }
});
