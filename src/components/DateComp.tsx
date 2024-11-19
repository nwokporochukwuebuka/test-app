import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import generateUniqueKey from "../utils/generate-key";
import colors from "../constants/colors";

const { fontScale, height, width } = Dimensions.get("window");

interface ItemProps {
  active: boolean;
  day: string;
  date: string;
}

const DateComp: React.FC<ItemProps> = (item: ItemProps) => {
  return (
    <View
      key={generateUniqueKey()}
      style={[
        styles.weekdays,
        {
          backgroundColor: item.active ? colors.WHITE_TEXT : "transparent",
        },
      ]}
    >
      <Text
        key={generateUniqueKey()}
        style={[
          styles.day,
          {
            color: item.active ? colors.BLACK_TEXT : colors.WHITE_TEXT,
          },
        ]}
      >
        {item.day}
      </Text>
      <Text
        key={generateUniqueKey()}
        style={[
          styles.date,
          {
            color: item.active ? colors.BLACK_TEXT : colors.GREY_TEXT,
          },
        ]}
      >
        {item.date}
      </Text>
    </View>
  );
};

export default DateComp;

const styles = StyleSheet.create({
  weekdays: {
    marginHorizontal: width * 0.01,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.025,
    borderRadius: fontScale * 20,
  },
  day: {
    fontSize: fontScale * 14,
    marginVertical: 5,
    fontFamily: "RedHatDisplay_500Medium",
  },
  date: {
    fontFamily: "RedHatDisplay_500Medium",
    fontWeight: "condensed",
    marginVertical: 5,
    fontSize: fontScale * 14,
  },
});
