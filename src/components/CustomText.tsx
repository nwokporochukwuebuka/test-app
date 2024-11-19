import { StyleSheet, Text, TextProps, View } from "react-native";
import React from "react";

interface CustomTextProps extends TextProps {
  text: string;
}

const CustomText: React.FC<CustomTextProps> = (props: CustomTextProps) => {
  return <Text {...props}>{props.text}</Text>;
};

export default CustomText;
