import { html } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

interface Props {
  awayGradient: Gradient;
  homeGradient: Gradient;
  layoutGradient: Gradient;
  fontColorDark: string;
  fontColorLight: string;
  awayLogoSrc?: string;
  homeLogoSrc?: string;
  awayLogoShadow: string;
  homeLogoShadow: string;
  awayName: string;
  homeName: string;
  awayScore: number;
  homeScore: number;
}

export const ScoreContainer = ({
  awayName,
  homeName,
  awayScore,
  homeScore,
  awayLogoShadow,
  homeLogoShadow,
  awayLogoSrc,
  homeLogoSrc,
  fontColorLight,
  fontColorDark,
  awayGradient,
  homeGradient,
  layoutGradient,
}: Props) => {
  let awayLogo;

  if (awayLogoSrc) {
    awayLogo = html`
      <img
        src=${awayLogoSrc}
        alt=""
        height="100%"
        style="filter: drop-shadow(2px 2px 0px ${awayLogoShadow}88) drop-shadow(0px 0px 3px ${awayLogoShadow})"
      />
    `;
  }

  let homeLogo;

  if (homeLogoSrc) {
    homeLogo = html`
      <img
        src=${homeLogoSrc}
        alt=""
        height="100%"
        style="filter: drop-shadow(2px 2px 0px ${homeLogoShadow}88) drop-shadow(0px 0px 3px ${homeLogoShadow})"
      />
    `;
  }

  return html`
    <div class="score-container">
      <div
        style="display: flex; background: ${generateGradient(awayGradient)}"
        class="score-row"
      >
        <div class="away-logo logo">${awayLogo}</div>
        <div class=" name-away score-name" style="color: ${fontColorLight}">
          ${awayName}
        </div>
        <div
          class="score-away score-value"
          style="color: ${fontColorDark}; background: ${generateGradient(
            layoutGradient,
          )}"
        >
          ${awayScore}
        </div>
      </div>

      <div
        style="display: flex; background: ${generateGradient(homeGradient)}"
        class="score-row"
      >
        <div class="home-logo logo">${homeLogo}</div>

        <div class="name-home score-name" style="color: ${fontColorLight}">
          ${homeName}
        </div>
        <div
          class="score-home score-value"
          style="color: ${fontColorDark}; background: ${generateGradient(
            layoutGradient,
          )}"
        >
          ${homeScore}
        </div>
      </div>
    </div>
  `;
};
