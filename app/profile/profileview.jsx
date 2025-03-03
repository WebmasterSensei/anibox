import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  StatusBar,
} from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { router } from "expo-router";
import BackButton from "../../components/BackButton";
import { wp } from "../../helpers/common";

const ProfileView = () => {
  const handleSocialLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  return (
    <ScreenWrapper bg="white">
      <View style={styles.containers}>
        <StatusBar style="dark" />
        <BackButton router={router} />
        <View style={styles.container}>
          {/* Profile Picture */}
          <Image
            source={require('../../assets/images/cute.png')} // Replace with your image URL
            style={styles.profileImage}
          />

          {/* Name */}
          <Text style={styles.name}>John Doe</Text>

          {/* Bio */}
          <Text style={styles.bio}>
            Software Developer | React Native Enthusiast | Lover of all things
            tech
          </Text>

          {/* Social Media Links */}
          <View style={styles.socialLinks}>
            <TouchableOpacity
              onPress={() => handleSocialLink("https://twitter.com")}
            >
              <Text style={styles.socialLink}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSocialLink("https://github.com")}
            >
              <Text style={styles.socialLink}>GitHub</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSocialLink("https://linkedin.com")}
            >
              <Text style={styles.socialLink}>LinkedIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  container: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 5, 
    marginTop: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  socialLink: {
    fontSize: 16,
    color: "#1DA1F2", // Twitter blue color
    fontWeight: "bold",
  },
});

export default ProfileView;
