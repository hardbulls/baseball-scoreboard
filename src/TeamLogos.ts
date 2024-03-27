import { html } from "lit";

interface Props {
  awayLogoSrc?: string;
  homeLogoSrc?: string;
  awayLogoShadow?: string;
  homeLogoShadow?: string;
}

export const TeamLogos = ({
  awayLogoShadow,
  homeLogoShadow,
  awayLogoSrc,
  homeLogoSrc,
}: Props) => {
  let awayLogo;
  let awayStyle = "";
  let homeLogo;
  let homeStyle = "";

  if (awayLogoShadow) {
    awayStyle = `filter: drop-shadow(2px 2px 0px ${awayLogoShadow}88) drop-shadow(0px 0px 3px ${awayLogoShadow})`;
  }

  if (awayLogoSrc) {
    awayLogo = html`
      <img src=${awayLogoSrc} alt="" height="100%" style="${awayStyle}" />
    `;
  }

  if (homeLogoShadow) {
    homeStyle = `filter: drop-shadow(2px 2px 0px ${homeLogoShadow}88) drop-shadow(0px 0px 3px ${homeLogoShadow})`;
  }

  if (homeLogoSrc) {
    homeLogo = html`
      <img src=${homeLogoSrc} alt="" height="100%" style="${homeStyle}" />
    `;
  }

  return html`
    <div class="team-logos-container">
      <div class="team-logo-row background-away">
        <div class="team-logo logo">${awayLogo}</div>
      </div>

      <div class="team-logo-row background-home">
        <div class="team-logo logo">${homeLogo}</div>
      </div>
    </div>
  `;
};
