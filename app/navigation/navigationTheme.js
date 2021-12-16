import { DefaultTheme } from "@react-navigation/native";
import Color from "../config/Color";

export default {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: Color.primary,
      background: Color.white,
    },
  };
  