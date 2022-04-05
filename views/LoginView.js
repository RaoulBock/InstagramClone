import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Button } from "../components/Buttons/Button";
import { Input } from "../components/Inputs/Input";

export const LoginView = () => {
  return (
    <>
      <SafeAreaView style={styles.topSection}>
        <View>
          <Image
            source={require("../assets/Instagram_logo.svg-removebg-preview.png")}
            style={styles.logo}
          />
        </View>
        <View style={{ marginTop: 28 }}>
          <Input placeholder="Phone number, email or username" />
        </View>
        <View style={{ marginTop: 18 }}>
          <Input placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={{ marginTop: 18 }}>
          <Button title="Login" />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "gray" }}>
            Forgot your login details?{" "}
            <Text style={{ fontWeight: "bold" }}>Get help signing in.</Text>
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>or</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "gray" }}>
            Don't have an account?{" "}
            <Text style={{ fontWeight: "bold" }}>Sign up.</Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSection: {
    marginTop: "40%",
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 100
  }
});
