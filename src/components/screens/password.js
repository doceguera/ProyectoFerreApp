<<<<<<< HEAD
import React, { Component } from 'react'
import { Text, View, TouchTabletOpacity, StyleSheet } from 'react-native';
import theme from "../../theme";
import Logo from "../shared/Logo";
import PasswordForm from "../forms/PasswordForm";
import Alert from "../shared/Alert";
import * as AppAuth from 'expo-app-auth';
import firebase from "firebase/app";
import { colors } from 'react-native-elements';
const { URLSchemes } = AppAuth;
var provider = new firebase.auth.GoogleAuthProvider();

const recover = ({navigation, route}) => {


    return (
      <View style={styles.container}>
         <Text style={styles.texto}>Recuperar Contraseña</Text>
        <PasswordForm navigation = {navigation}/>
      </View>
    );
  
}


const styles = StyleSheet.create({
    container: {
      flex: 1, 
 
      backgroundColor: theme.colors.blue,
     
    },
    texto:{
      justifyContent: "flex-start",
      textAlign: "center",
      fontWeight: 'bold',
      fontSize: 40,
      color: theme.colors.logocolor,
      
    }
    
  });

export default recover;
=======

>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784

