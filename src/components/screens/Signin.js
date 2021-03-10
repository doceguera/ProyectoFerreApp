import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Logo from "../shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../shared/Alert";
import Botones from '../shared/Botones';

const Login = ({ navigation, route }) => {
  const { userCreated } = route.params;
  return (
    <View style={styles.container}>
      <Logo />
      {userCreated ? (
        <Alert type="success" title="User created! You can now sign in!" />
      ) : null}
      <SigninForm navigation={navigation} />

      <TouchableOpacity onPress={() => navigation.navigate("password")}>
        <Text style={styles.forgotPassword}>Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>No tienes cuenta? Registrate</Text>
      </TouchableOpacity>
      

      <Botones 
        buttonTitle="Inicia sesión con Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {}}
      />

   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 30,
    backgroundColor: theme.colors.blue,
  },
  forgotPassword: {
    textAlign: "right",
  },
 
});

export default Login;
//    justifyContent: "center",