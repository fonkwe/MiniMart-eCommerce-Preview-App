import { StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const textStyles = (coloScheme = "light") => {
  const colors = Colors["light"]

  return StyleSheet.create({
    p1: {
      fontSize: 10,
      fontWeight: "normal",
      color: colors.text,
    },
    p2: {
      fontSize: 12,
      fontWeight: "normal",
      color: colors.text,
    },
    p3: {
      fontSize: 14,
      fontWeight: "normal",
      color: colors.text,
    },
    p4: {
      fontSize: 16,
      fontWeight: "normal",
      color: colors.text,
    },
    p1Grey: {
      fontSize: 10,
      fontWeight: "normal",
      color: colors.text2,
    },
    p2Grey: {
      fontSize: 12,
      fontWeight: "normal",
      color: colors.text2,
    },
    p3Grey: {
      fontSize: 14,
      fontWeight: "normal",
      color: colors.text2,
    },
    p4Grey: {
      fontSize: 16,
      fontWeight: "normal",
      color: colors.text2,
    },
    h1: {
      fontSize: 15,
      fontWeight: "bold",
      color: colors.text,
    },
    h2: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.text,
    },
    h3: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
    },
    h4: {
      fontSize: 23,
      fontWeight: "bold",
      color: colors.text,
    },
    h5: {
      fontSize: 25,
      fontWeight: "bold",
      color: colors.text,
    },
    badgeGrey1: {
      backgroundColor: colors.background3,
      borderColor: colors.badgeBorderColor,
      fontSize: 12,
      margin: 5,
      paddingHorizontal: 7,
      paddingVertical: 1,
      borderWidth: 1,
      borderRadius: 15,
    },
    badgeGrey2: {
      backgroundColor: colors.background3,
      borderColor: colors.badgeBorderColor,
      fontSize: 14,
      margin: 5,
      paddingHorizontal: 7,
      paddingVertical: 1,
      borderWidth: 1,
      borderRadius: 15,
    },
    badgeSuccess: {
      backgroundColor: colors.successColor,
      borderColor: colors.badgeBorderColor,
      color: colors.textWhite,
      fontSize: 12,
      margin: 5,
      paddingHorizontal: 7,
      paddingVertical: 1,
      borderWidth: 1,
      borderRadius: 15,
    },
    badgeDanger: {
      backgroundColor: colors.dangerColor,
      borderColor: colors.badgeBorderColor,
      color: colors.textWhite,
      fontSize: 12,
      margin: 5,
      paddingHorizontal: 7,
      paddingVertical: 1,
      borderWidth: 1,
      borderRadius: 15,
    },
    icon1: {
      fontSize: 15,
      color: "grey"
    },
    icon2: {
      fontSize: 18,
      color: "grey"
    },
    icon3: {
      fontSize: 20,
      color: "grey"
    },
    icon3: {
      fontSize: 25,
      color: "grey"
    },
    showAnswerIconCorrect: {
      fontSize: 26,
      color: colors.successColor,
      fontWeight: "bold",
    },
    showAnswerIconWrong: {
      fontSize: 28,
      color: colors.dangerColor,
      fontWeight: "bold",
    },
    selectingOptionIcon: {
      fontSize: 25,
      color: colors.secondaryColor,
      fontWeight: "bold",
    },
    textCenter: {
      textAlign: "center"
    },
    textRight: {
      textAlign: "right"
    },
    optionCircle: {
      borderRadius: 50,
      borderColor: colors.background2,
      borderWidth: 1,
      paddingHorizontal: 4,
      paddingVertical: 0,
      fontSize: 10,
      marginRight: 10,
    },
    colorWhite: {
      color: colors.textWhite,
    },
    textWrap: {
      flexShrink: 1,
    }
  }) 
}

export default textStyles;