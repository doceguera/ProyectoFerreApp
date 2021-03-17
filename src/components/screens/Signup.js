import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Logo from "../shared/Logo";
import SignupForm from "../forms/SignupForm";
import theme from "../../theme";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <SignupForm navigation={navigation} />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
<<<<<<< HEAD
        <Text>¿Ya tienes una cuenta?</Text>
=======
        <Text>¿Ya tienes una cuenta? Resgistrate</Text>
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.blue,
  },
});

export default Signup;
