import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const { fontScale, height, width } = Dimensions.get("window");

const Card: React.FC<{
  leftText: string;
  rightText: string;
  containerGap?: number;
  textWidth?: number;
}> = ({ leftText, rightText, containerGap, textWidth }) => {
  return (
    <View
      style={[
        styles.textContainer,
        { gap: containerGap ? containerGap : width * 0.15 },
      ]}
    >
      <Text
        style={[
          styles.leftText,
          { width: textWidth ? textWidth : width * 0.5 },
        ]}
        numberOfLines={2}
      >
        {leftText}
      </Text>
      <Text style={styles.rightText}>{rightText}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width,
    justifyContent: "center",
    // gap: width * 0.15,
    paddingHorizontal: 10,
    backgroundColor: "#B3FC6A",
    paddingBottom: height * 0.05,
    borderRadius: width * 0.1,
    paddingTop: height * 0.02,
    marginVertical: 2,
  },
  leftText: {
    fontFamily: "RedHatDisplay_600SemiBold",
    fontSize: fontScale * 20,
    // width: width * 0.5,
  },
  rightText: {
    fontFamily: "RedHatDisplay_500Medium",
    fontSize: fontScale * 14,
  },
});
