import React from 'react';
import {Text, Dimensions, TouchableOpacity, View, StyleSheet} from 'react-native';
<<<<<<< HEAD
import theme from "../../theme";
=======
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
const { width, height } = Dimensions.get("screen");
 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
const Botones = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
<<<<<<< HEAD
      style={[styles.buttonContainer, {backgroundColor: theme.colors.yellow}]}
=======
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
      </View>
      <View style={styles.btnTxtWrapper}>
<<<<<<< HEAD
        <Text style={[styles.buttonText, {color: theme.colors.orange}]}>{buttonTitle}</Text>
=======
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
>>>>>>> f8a71d0c0a79eec148685dc617b7020d4b446784
      </View>
    </TouchableOpacity>
  );
};
 
export default Botones;
 
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: height / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});