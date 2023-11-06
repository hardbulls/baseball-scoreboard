import { css, unsafeCSS } from "lit";
import { DisplayConfig } from "./Attributes/DisplayConfig.ts";

export const BaseballScoreboardStyle = (
  transparentBackgrounds: boolean,
  display: DisplayConfig,
) => {
  let shadowOutDotCss = "filter: none";
  let teamNameShadowCss = "filter: none";
  let outAnimationDisplayCss = "display: none";
  let leagueLogoShadowCss = "filter: none";
  let activeInningArrowShadowCss = "filter: none";
  let inactiveInningArrowShadowCss = "filter: none";

  if (!transparentBackgrounds) {
    leagueLogoShadowCss = `
      filter: drop-shadow(2px 2px 10px ${display.leagueLogoShadow}66) drop-shadow(0px 0px 13px ${display.leagueLogoShadow}22)
      `;

    activeInningArrowShadowCss = `
      filter: drop-shadow(0px 0px 1px color-mix(in srgb, ${display.activeInningColor} 50%, black));`;

    inactiveInningArrowShadowCss = `
      filter: drop-shadow(0px 0px 1px color-mix(in srgb, ${display.inactiveInningColor} 50%, black));`;

    shadowOutDotCss = `
      filter: drop-shadow(
        0px 0px 1px
        color-mix(in srgb, ${display.activeOutColor} 50%, black)
      );
    `;
    teamNameShadowCss = `
      filter: drop-shadow(2px 2px 2px black)
    `;
    outAnimationDisplayCss = "display: inline-block";
  }

  return css`
    .shadow-out-dot {
      ${unsafeCSS(shadowOutDotCss)};
    }

    .league-logo-shadow {
      ${unsafeCSS(leagueLogoShadowCss)};
    }

    .active-inning {
      ${unsafeCSS(activeInningArrowShadowCss)};
    }

    .inactive-inning {
      ${unsafeCSS(inactiveInningArrowShadowCss)};
    }

    .active-inning-top {
      border-bottom: 22px solid ${unsafeCSS(display.activeInningColor)};
    }

    .active-inning-bottom {
      border-top: 22px solid ${unsafeCSS(display.activeInningColor)};
    }

    .inactive-inning-top {
      border-bottom: 22px solid ${unsafeCSS(display.inactiveInningColor)};
    }

    .inactive-inning-bottom {
      border-top: 22px solid ${unsafeCSS(display.inactiveInningColor)};
    }

    .outs-dot {
      height: 25px;
      width: 25px;
      border-radius: 50%;
    }

    .out-dot-on {
      background-color: ${unsafeCSS(display.activeOutColor)};
    }

    .out-dot-off {
      background-color: ${unsafeCSS(display.inactiveOutColor)};
    }

    .out-dot-on::after {
      content: "";
      height: 25px;
      width: 25px;
      border-radius: 50%;

      margin-left: -1px;
      margin-top: -1px;

      filter: blur(3px);
      border: 1px solid ${unsafeCSS(display.activeOutColor)};
      animation: opacityAnimation 0.9s 1;
      opacity: 0;

      ${unsafeCSS(outAnimationDisplayCss)}
    }

    .score-name {
      width: 100%;
      ${unsafeCSS(teamNameShadowCss)};
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .score-name > span {
      padding-right: 6px;
      font-size: 1.3em;
    }
  `;
};
