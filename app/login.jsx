import { wp } from "../helpers/common.js";
import React, { useState } from "react";
import BackButton from "../components/BackButton.jsx";
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper.jsx";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errCredentials, setCredentials] = useState("");

  const validCredentials = {
    username: "kenji",
    password: "123",
  };

  const handleLogin = () => {
    setErrorPassword("");
    setErrorUsername("");

    if (!username && !password) {
      setErrorPassword("Password Field is Required!");
      setErrorUsername("Username Field is Required!");
    }
    else if(!username){
      setErrorUsername("Username Field is Required!")
    }else if(!password){
      setErrorPassword("Password Field is Required!")
    }else if(
      username === validCredentials.username &&
      password === validCredentials.password
    ){
      router.push('dashboard/dashboard');
    } else{
      setCredentials("Invalid Users Credentials");
    }
  };

  return (
    <ScreenWrapper bg="white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="dark" />
        <BackButton router={router} />
        <View style={styles.innerContainer}>
          {/* Logo */}
          <Image
            source={require("../assets/images/cute.png")} // Replace with your logo
            style={styles.logo}
          />

          {/* Welcome Text */}
          <Text style={styles.welcomeText}>WELCOME BACK</Text>

          {/* Username Input */}
          {errCredentials ?  <Text style={styles.errorText}>{ errCredentials }</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
         {errorUsername ? <Text style={styles.errorText}>{ errorUsername}</Text> : null}

          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
            {errorPassword ? <Text style={styles.errorText}>{ errorPassword }</Text> : null}

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    fontSize: 16,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#28a745",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#007bff",
    fontSize: 14,
    marginTop: 12,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  signUpText: {
    color: "#666",
    fontSize: 14,
  },
  signUpLink: {
    color: "#007bff",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorText: {
    color: 'red',
  }
});
