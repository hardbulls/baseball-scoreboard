import { DisplayConfig } from "./Attributes/DisplayConfig.ts";

export const DefaultDisplayConfig: DisplayConfig = {
  awayGradient: {
    angle: 180,
    startColor: "#1653af",
    endColor: "#063376",
    startPercentage: 30,
    endPercentage: 50,
  },
  homeGradient: {
    angle: 180,
    startColor: "#ff2222",
    endColor: "#ea1010",
    startPercentage: 30,
    endPercentage: 50,
  },
  layoutGradient: {
    angle: 180,
    startColor: "#ebebeb",
    endColor: "#e0e0e0",
    startPercentage: 50,
    endPercentage: 50,
  },
  backgroundGradient: {
    angle: 180,
    startColor: "#000000",
    endColor: "#484848",
    startPercentage: 0,
    endPercentage: 100,
  },
  fontColorDark: "#292929",
  fontColorLight: "#e8e8e8",
  homeLogoShadow: "#000000",
  awayLogoShadow: "#575757",
  leagueLogoShadow: "#000000",
  activeInningColor: "#e00000",

  inactiveInningColor: "#b3b3b3",

  activeOutColor: "#e00000",

  inactiveOutColor: "#b3b3b3",

  activeBaseColor: "#d2a023",

  inactiveBaseColor: "#b3b3b3",
};
