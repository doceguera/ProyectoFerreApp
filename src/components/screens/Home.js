import React from "react";
import { StyleSheet, View, Text } from "react-native";
import darkColors from "react-native-elements/dist/config/colorsDark";
import { color } from "react-native-reanimated";
import theme from "../../theme";
const Home = ({ navigation }) => {
  return (
    <View  style={styles.container}>
      <Text>Hello from home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: theme.colors.blue,
  }

  
});

export default Home;
