import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/components/screens/Signin";
import Signup from "./src/components/screens/Signup";
import password from './src/components/screens/password';
import Home from "./src/components/screens/Home";
import theme from "./src/theme";
import PersistLogin from "./src/firebase/persistLogin";



const Stack = createStackNavigator();
export default function App() {

=======
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
  const [user, setUser] = useState({});

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    const userData = PersistLogin();
    setUser(userData);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Mostrar un Stack distinto dependiendo el nivel de autenticación */}            
                <Stack.Screen
                  name="Signin"
                  component={Signin}
                  initialParams={{ userCreated: false }}
                  options={{ headerShown: false }}
                />
<<<<<<< HEAD
                <Stack.Screen name="Signup" options={{headerShown: false}}  component={Signup} />
                <Stack.Screen name="password" options={{headerShown: false}} component={password} />
=======
                <Stack.Screen name="Signup" component={Signup} />
               
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={{ user: user }}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
