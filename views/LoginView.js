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
            source={require("../assets/img-removebg-preview.png")}
            style={styles.logo}
          />
        </View>
        <View style={{ marginTop: 28 }}>
          <Input placeholder="Phone number, email or username" />
        </View>
        <View style={{ marginTop: 18 }}>
          <Input placeholder="Password" />
        </View>
        <View style={{ marginTop: 18 }}>
          <Button title="Login" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSection: {
    marginTop: "50%",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100
  }
});
