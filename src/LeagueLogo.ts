import { html } from "lit";

interface Props {
  leagueLogoSrc?: string;
}

export const LeagueLogo = ({ leagueLogoSrc }: Props) => {
  if (!leagueLogoSrc) {
    return;
  }

  let leagueLogo;

  if (leagueLogoSrc) {
    leagueLogo = html`
      <img
        src="${leagueLogoSrc}"
        alt=""
        class="league-logo-shadow"
        height="100%"
      />
    `;
  }

  return html`
    <div class="league-logo-container">
      <div style="display: flex">
        <div class="league-logo logo">${leagueLogo}</div>
      </div>
    </div>
  `;
};
