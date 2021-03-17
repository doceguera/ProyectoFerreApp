import React from "react";
import { StyleSheet, Button, View, Text, StatusBar,  } from "react-native";
import { colors } from "react-native-elements";
import darkColors from "react-native-elements/dist/config/colorsDark";
import { color } from "react-native-reanimated";
import theme from "../../theme";

=======
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
const Home = ({ navigation }) => {
 
      return (
        <View  style={styles.container}>
          <StatusBar barStyle= {theme.colors.blue? "light-content" : "dark-content" }/>
            <Text style={{color: colors.text}}>Home Screen</Text>

            <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("")}
      />
        </View>
      );
};

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
=======
  container:{
    backgroundColor: theme.colors.blue,
  }

  
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
});
export default Home;
