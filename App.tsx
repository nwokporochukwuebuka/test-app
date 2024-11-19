import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  RedHatDisplay_700Bold,
  RedHatDisplay_500Medium,
  RedHatDisplay_600SemiBold,
} from "@expo-google-fonts/red-hat-display";
import colors from "./src/constants/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "@rneui/themed";
import getMonth from "./src/utils/get-month";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import generateUniqueKey from "./src/utils/generate-key";
import getWeekDays from "./src/utils/get-days-of-the-week";
import DateComp from "./src/components/DateComp";
import ButtonComp from "./src/components/ButtonComp";
import CustomText from "./src/components/CustomText";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomBottomSheet, {
  BottomSheetMethods,
} from "./src/components/CustomBottomSheet";
import DetailSheet from "./src/modals/DetailSheet";

const { fontScale, height, width, scale } = Dimensions.get("window");

export default function App() {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);
  const [fontsLoaded] = useFonts({
    RedHatDisplay_700Bold,
    RedHatDisplay_500Medium,
    RedHatDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          {/* ========== TOP SECTION ========== */}
          <View style={styles.top}>
            <View style={styles.avatar}>
              <Avatar
                rounded
                source={require("./assets/avatar.png")}
                size={width * 0.11}
                containerStyle={{
                  borderColor: colors.WHITE_TEXT,
                  borderWidth: 2,
                }}
              />
            </View>
            <View style={styles.hamburger}>
              <View style={styles.hamburgerLine}></View>
              <View style={styles.hamburgerLine}></View>
              <View style={styles.hamburgerLine}></View>
            </View>
          </View>

          {/* ========== CALENDAR ============= */}
          <View style={styles.calendar}>
            <View style={styles.month}>
              <Text style={styles.monthText}>{getMonth()}</Text>
              <AntDesign
                name="down"
                style={styles.monthDropDown}
                onPress={() =>
                  console.log("====== Doing nothing for now =========")
                }
              />
            </View>
            <View style={styles.week}>
              {getWeekDays().map((item) => (
                <DateComp
                  active={item.active}
                  day={item.day}
                  date={item.date}
                  key={generateUniqueKey()}
                />
              ))}
            </View>
          </View>

          <View style={styles.cards}>
            <View style={styles.cardOne}>
              <View>
                <Text style={styles.cardOneHeaderText}>Team Meeting</Text>
                <Text style={styles.cardOneSubHeaderText}>
                  Discussing new hires
                </Text>
              </View>
              <View style={styles.cardOneIcontainer}>
                <Ionicons
                  name="checkmark-sharp"
                  size={fontScale * 24}
                  color={colors.WHITE_TEXT}
                />
              </View>
            </View>
            <View style={styles.cardTwo}>
              <View>
                <View>
                  <CustomText
                    text="12:00 - 1:00 PM"
                    style={styles.cardTwoTimeText}
                  />
                  <CustomText
                    text="Design Call"
                    style={styles.cardTwoHeaderText}
                  />
                  <CustomText
                    text="Repeats every two weeks"
                    style={styles.cardTwoTimeText}
                  />
                </View>
                <View style={styles.buttonContainers}>
                  <ButtonComp text="Today" key={generateUniqueKey()} />
                  <ButtonComp text="1h" key={generateUniqueKey()} />
                </View>
              </View>
              <View
                style={{
                  gap: height * 0.05,
                }}
              >
                <View style={styles.avatarContainers}>
                  <View style={{ marginLeft: -width * 0.06 }}>
                    <Avatar
                      source={require("./assets/avatar-one.png")}
                      size={scale * 13}
                    />
                  </View>
                  <View style={{ marginLeft: -width * 0.05, zIndex: 1 }}>
                    <Avatar
                      source={require("./assets/avatar-two.png")}
                      size={scale * 13}
                    />
                  </View>
                  <View style={{ marginLeft: -20, zIndex: 2 }}>
                    <Avatar
                      source={require("./assets/avatar-three.png")}
                      size={scale * 13}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#070707",
                    borderRadius: width,
                    padding: width * 0.065,
                    alignItems: "center",
                    transform: [{ scale: scale * 0.25 }],
                  }}
                >
                  <Feather
                    name="arrow-up-right"
                    color={colors.WHITE_TEXT}
                    style={{ fontWeight: "bold" }}
                    size={fontScale * 24}
                  />
                </View>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => bottomSheetRef.current?.expand()}
              style={[
                styles.cardTwo,
                {
                  backgroundColor: colors.BACKGROUND_COLOR_VARIANT.GREEN,
                },
              ]}
            >
              <View>
                <View>
                  <CustomText
                    text="1:00 - 2:30 PM"
                    style={styles.cardTwoTimeText}
                  />
                  <CustomText
                    text="PM Meeting"
                    style={styles.cardTwoHeaderText}
                  />
                  <CustomText
                    text="Repeats every two weeks"
                    style={styles.cardTwoTimeText}
                  />
                </View>
                <View style={styles.buttonContainers}>
                  <ButtonComp text="Today" key={generateUniqueKey()} />
                  <ButtonComp text="1h" key={generateUniqueKey()} />
                </View>
              </View>
              <View
                style={{
                  gap: height * 0.07,
                }}
              >
                <View style={styles.avatarContainers}>
                  <View style={{ marginLeft: -width * 0.06 }}>
                    <Avatar
                      source={require("./assets/avatar-one.png")}
                      size={scale * 13}
                    />
                  </View>
                  <View style={{ marginLeft: -width * 0.05, zIndex: 1 }}>
                    <Avatar
                      source={require("./assets/avatar-two.png")}
                      size={scale * 13}
                    />
                  </View>
                  <View style={{ marginLeft: -20, zIndex: 2 }}>
                    <Avatar
                      title="+4"
                      rounded
                      containerStyle={{
                        backgroundColor: colors.BACKGROUND_COLOR_VARIANT.PURPLE,
                      }}
                      size={scale * 13}
                    />
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#070707",
                    borderRadius: width,
                    padding: width * 0.065,
                    alignItems: "center",
                    transform: [{ scale: scale * 0.25 }],
                  }}
                >
                  <Feather
                    name="arrow-up-right"
                    color={colors.WHITE_TEXT}
                    style={{ fontWeight: "bold" }}
                    size={fontScale * 24}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <StatusBar style="light" />
        </SafeAreaView>
        <CustomBottomSheet
          backgroundColor={colors.WHITE_TEXT}
          snapTo="91%"
          ref={bottomSheetRef}
        >
          <DetailSheet ref={bottomSheetRef} />
        </CustomBottomSheet>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND_COLOR_VARIANT.BLACK,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.035,
  },
  avatar: {
    marginTop: height * 0.01,
  },
  hamburger: {
    alignSelf: "center",
  },
  hamburgerLine: {
    borderWidth: 2,
    borderColor: colors.WHITE_TEXT,
    marginTop: height * 0.01,
    width: width * 0.1,
  },
  calendar: {
    marginVertical: height * 0.015,
    paddingHorizontal: width * 0.035,
  },
  month: {
    flexDirection: "row",
    width: width * 0.45,
    justifyContent: "space-between",
    alignItems: "center",
  },
  monthText: {
    color: colors.WHITE_TEXT,
    fontFamily: "RedHatDisplay_700Bold",
    fontSize: fontScale * 30,
  },
  monthDropDown: {
    color: colors.WHITE_TEXT,
    fontSize: fontScale * 20,
  },
  week: {
    flexDirection: "row",
    marginVertical: height * 0.015,
  },
  cards: {
    // marginTop: height * 0.001,
  },
  cardOne: {
    backgroundColor: colors.BACKGROUND_COLOR_VARIANT.GOLD,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    borderRadius: (width * 0.05 + height * 0.04) / 1.2,
    marginVertical: height * 0.002,
  },
  cardOneHeaderText: {
    color: colors.BLACK_TEXT,
    fontFamily: "RedHatDisplay_700Bold",
    fontSize: fontScale * 24,
  },
  cardOneSubHeaderText: {
    color: colors.BLACK_TEXT,
    fontFamily: "RedHatDisplay_500Medium",
    fontSize: fontScale * 14,
  },
  cardOneIcontainer: {
    backgroundColor: "#070707",
    borderRadius: "50%",
    padding: width * 0.03,
  },
  cardTwo: {
    backgroundColor: colors.WHITE_TEXT,
    marginVertical: height * 0.0025,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
    borderRadius: (width * 0.05 + height * 0.03) / 1.2,
  },
  cardTwoTimeText: {
    fontFamily: "RedHatDisplay_500Medium",
    fontSize: fontScale * 14,
  },
  cardTwoHeaderText: {
    fontFamily: "RedHatDisplay_700Bold",
    fontSize: fontScale * 24,
  },
  buttonContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.05,
    alignItems: "center",
    gap: width * 0.05,
  },
  avatarContainers: {
    flexDirection: "row",
  },
  cardThree: {},
});
