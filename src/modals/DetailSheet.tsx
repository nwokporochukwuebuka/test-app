import React, { forwardRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Cross from "../../assets/x.svg";
import Feather from "react-native-vector-icons/Feather";
import CustomText from "../components/CustomText";
import colors from "../constants/colors";
import { BottomSheetMethods } from "../components/CustomBottomSheet";
import { Avatar } from "@rneui/themed";
import Card from "../components/Card";

const { fontScale, height, width, scale } = Dimensions.get("window");

type DetailSheetProps = {
  close?: () => void;
};

const DetailSheet = forwardRef<BottomSheetMethods, DetailSheetProps>(
  (_, ref) => {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.crossIconContainer}
            // @ts-ignore
            onPress={() => ref?.current?.close()}
          >
            <Cross fontSize={fontScale * 30} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.editContainer}>
            <Feather name="edit-3" size={fontScale * 24} color={"#404B51"} />
          </TouchableOpacity>
        </View>
        <View style={styles.timeContainer}>
          <CustomText style={styles.timeText} text="1.00 - 2.00 PM" />
        </View>
        <CustomText text="PM Meeting" style={styles.meetingTitle} />
        <CustomText
          text="Discussion for Christmas retreat 🎉"
          style={styles.meetingSubtitle}
        />
        <View style={styles.avatarContainer}>
          <View style={{ marginLeft: -width * 0.06 }}>
            <Avatar
              source={require("../../assets/avatar-one.png")}
              size={scale * 13}
            />
          </View>
          <View style={{ marginLeft: -width * 0.05, zIndex: 1 }}>
            <Avatar
              source={require("../../assets/avatar-two.png")}
              size={scale * 13}
            />
          </View>
          <View style={{ marginLeft: -width * 0.05, zIndex: 1 }}>
            <Avatar
              source={require("../../assets/avatar-three.png")}
              size={scale * 13}
            />
          </View>
          <View style={{ marginLeft: -width * 0.05, zIndex: 1 }}>
            <Avatar
              source={require("../../assets/avatar-four.png")}
              size={scale * 13}
            />
          </View>
          <View style={{ marginLeft: -width * 0.05, zIndex: 2 }}>
            <Avatar
              title="+4"
              rounded
              containerStyle={{
                backgroundColor: colors.BACKGROUND_COLOR_VARIANT.GREEN,
              }}
              size={scale * 13}
            />
          </View>
        </View>

        <CustomText text="Minutes_Plan" style={styles.meetingAgenda} />

        <Card
          leftText="Appointing the planning committee"
          rightText="1.00 - 1.30 PM"
          backgroundColor="#B3FC6A"
        />

        <Card
          leftText="Choosing an appropriate airline for all remote staff"
          rightText="1.00 - 1.45 PM"
          containerGap={width * 0.08}
          textWidth={width * 0.6}
          backgroundColor={colors.BACKGROUND_COLOR_VARIANT.GREY}
        />

        <Card
          leftText="Events and bonding session for the week"
          rightText="1.45 - 2.00 PM"
          containerGap={width * 0.08}
          textWidth={width * 0.6}
          backgroundColor={colors.BACKGROUND_COLOR_VARIANT.GREY}
        />
      </View>
    );
  }
);

export default DetailSheet;

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignSelf: "center",
    paddingHorizontal: width * 0.05,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  crossIconContainer: {
    backgroundColor: "#EDEDED",
    borderRadius: width * 0.5,
    padding: width * 0.03,
    alignSelf: "center",
  },
  editContainer: {
    backgroundColor: "#EDEDED",
    borderRadius: width * 0.5,
    padding: width * 0.03,
    alignSelf: "center",
  },
  timeContainer: {
    backgroundColor: colors.BACKGROUND_COLOR_VARIANT.BLACK,
    width: width * 0.4,
    alignSelf: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.03,
    borderRadius: width * 0.5,
  },
  timeText: {
    color: colors.WHITE_TEXT,
    textAlign: "center",
    fontFamily: "RedHatDisplay_500Medium",
  },
  meetingTitle: {
    fontFamily: "RedHatDisplay_700Bold",
    fontSize: fontScale * 24,
    alignSelf: "center",
    marginTop: height * 0.02,
  },
  meetingSubtitle: {
    fontFamily: "RedHatDisplay_500Medium",
    fontSize: fontScale * 14,
    alignSelf: "center",
    marginTop: height * 0.005,
  },
  avatarContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EDEDED",
    paddingVertical: height * 0.02,
    width: width * 0.4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingLeft: width * 0.05,
    marginTop: 10,
    borderRadius: (width * 0.5) / 2,
  },
  meetingAgenda: {
    alignSelf: "center",
    fontFamily: "RedHatDisplay_700Bold",
    fontSize: fontScale * 24,
    marginVertical: height * 0.02,
  },
});
