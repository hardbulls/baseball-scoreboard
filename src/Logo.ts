import { html } from "lit";

interface Props {
  leagueLogoSrc?: string;
  leagueLogoShadow: string;
}

export const LeagueLogo = ({ leagueLogoSrc, leagueLogoShadow }: Props) => {
  if (!leagueLogoSrc) {
    return;
  }

  let leagueLogo;

  if (leagueLogoSrc) {
    leagueLogo = html`
      <img
        src="${leagueLogoSrc}"
        alt=""
        height="100%"
        style="filter: drop-shadow(2px 2px 10px ${leagueLogoShadow}66) drop-shadow(0px 0px 13px ${leagueLogoShadow}22)"
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
