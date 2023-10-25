import { html } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

interface Props {
  awayGradient: Gradient;
  homeGradient: Gradient;
  layoutGradient: Gradient;
  awayLogoSrc?: string;
  homeLogoSrc?: string;
  awayLogoShadow: string;
  homeLogoShadow: string;
}

export const TeamLogos = ({
  awayLogoShadow,
  homeLogoShadow,
  awayLogoSrc,
  homeLogoSrc,
  awayGradient,
  homeGradient,
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
    <div class="team-logos-container">
      <div
        style="background: ${generateGradient(awayGradient)}"
        class="team-logo-row"
      >
        <div class="team-logo logo">${awayLogo}</div>
      </div>

      <div
        style="background: ${generateGradient(homeGradient)}"
        class="team-logo-row"
      >
        <div class="team-logo logo">${homeLogo}</div>
      </div>
    </div>
  `;
};
