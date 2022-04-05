import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import { AppContext } from "../context/AppProvider";
import { APP_PAGES } from "../context/settings";

import { Input } from "../components/Inputs/Input";
import { Button } from "../components/Buttons/Button";

export const RegisterView = () => {
  const { navPage, setNavPage } = React.useContext(AppContext);
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
          <Input placeholder="Phone number or Email" />
        </View>
        <View style={{ marginTop: 28 }}>
          <Input placeholder="Full Name" />
        </View>
        <View style={{ marginTop: 28 }}>
          <Input placeholder="Username" />
        </View>
        <View style={{ marginTop: 18 }}>
          <Input placeholder="Password" secureTextEntry={true} />
        </View>
        <View style={{ marginTop: 18 }}>
          <Button title="Sign up" />
        </View>
        <View style={{ marginTop: 10, width: 300 }}>
          <Text style={{ color: "gray", lineHeight: 20 }}>
            By signing up, you agree to our{" "}
            <Text style={{ fontWeight: "bold" }}>
              Terms, Data Policy and Cookies Policy.
            </Text>
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>or</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "gray" }}>
            Already have an account?{" "}
            <Text
              style={{ fontWeight: "bold", color: "#74b9ff" }}
              onPress={() => setNavPage(APP_PAGES.INSTAGRAM.LOGIN)}
            >
              Login.
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  topSection: {
    marginTop: "10%",
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 100
  }
});
