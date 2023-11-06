import { html } from "lit";

interface Props {
  awayLogoSrc?: string;
  homeLogoSrc?: string;
}

export const TeamLogos = ({ awayLogoSrc, homeLogoSrc }: Props) => {
  let awayLogo;

  if (awayLogoSrc) {
    awayLogo = html`
      <img src=${awayLogoSrc} alt="" class="shadow-away" height="100%" />
    `;
  }

  let homeLogo;

  if (homeLogoSrc) {
    homeLogo = html`
      <img src=${homeLogoSrc} class="shadow-home" alt="" height="100%" />
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
