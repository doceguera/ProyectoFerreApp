import React from "react";
import { StyleSheet, Button, View, Text, StatusBar,  } from "react-native";
import { colors } from "react-native-elements";
import darkColors from "react-native-elements/dist/config/colorsDark";
import { color } from "react-native-reanimated";
import theme from "../../theme";

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
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
export default Home;
