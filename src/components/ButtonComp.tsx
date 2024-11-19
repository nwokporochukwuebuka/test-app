import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const { fontScale, width } = Dimensions.get("window");

const ButtonComp: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: colors.BACKGROUND_COLOR_VARIANT.GREY,
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.06,
    borderRadius: width * 0.4,
  },
  text: {
    textAlign: "center",
    fontFamily: "RedHatDisplay_500Medium",
    fontSize: fontScale * 14,
  },
});
