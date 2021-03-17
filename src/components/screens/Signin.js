import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Logo from "../shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../shared/Alert";
import Botones from '../shared/Botones';
import * as AppAuth from 'expo-app-auth';
import firebase from "firebase/app";
const { URLSchemes } = AppAuth;
var provider = new firebase.auth.GoogleAuthProvider();

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
<<<<<<< HEAD
        buttonTitle="Iniciar con Google"
=======
        buttonTitle="Sign In with Google"
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {
          firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            navigation.navigate("Home");
          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          })

        }}
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