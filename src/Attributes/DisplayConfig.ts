import { Gradient } from "../Gradient.ts";

export type DisplayConfig = {
  awayLogoShadow: string;
  homeLogoShadow: string;
  leagueLogoShadow: string;
  fontColorLight: string;
  fontColorDark: string;
  activeOutColor: string;
  inactiveOutColor: string;
  awayGradient: Gradient;
  homeGradient: Gradient;
  layoutGradient: Gradient;
  backgroundGradient: Gradient;
  activeInningColor: string;
  inactiveInningColor: string;

  activeBaseColor: string;

  inactiveBaseColor: string;
};
