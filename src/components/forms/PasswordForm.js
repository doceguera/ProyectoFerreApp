import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import Alert from "../shared/Alert";
import theme from "../../theme";


const PasswordForm = ({navigation}) =>{
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    

    const handleVerify = (input) => {
        if (input === "email"){
            if (!email) setEmailError(true);
            else if (!validate (email)) setEmailError(true);
            else setEmailError(false);
        }
    };

    const passwordReset = (email) =>{
        firebase.auth().sendPasswordResetEmail(email)
        .then((response) => {
            navigation.navigate("Signin");
        })
        
    }


    return(

        <View>
            {error ? <Alert title={error} type="error" /> : null}
            <Input 
                placeholder="Email"
                leftIcon={<Icon name="user" />}
                value={email}
                onChangeText={setEmail}
                onBlur={() =>{
                handleVerify("email");

                }}
               
            
              
            
            />

            <Button  style={styles.boton} type="Solid Button" title="Enviar Correo" onPress={passwordReset(email)}/>

        </View>

    );

};

const styles = StyleSheet.create({
    boton:{
        height: 50,
   
        borderWidth: 3,
        borderColor: theme.colors.botones,
        borderRadius: 35 ,
    },
});
    

export default PasswordForm;