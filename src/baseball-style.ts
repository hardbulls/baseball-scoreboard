import { css, unsafeCSS } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { DisplayConfig } from "./Attributes/DisplayConfig.ts";

export const BaseballStyle = (
  transparentBackgrounds: boolean,
  display: DisplayConfig,
) => {
  let backgroundAwayCss = "background: none";
  let backgroundHomeCss = "background: none";
  let backgroundLightCss = "background: none";
  let backgroundDarkCss = "background: none";
  let shadowOutDotCss = "filter: none";
  let shadowHomeCss = "filter: none";
  let shadowAwayCss = "filter: none";

  if (!transparentBackgrounds) {
    backgroundAwayCss = `background: ${generateGradient(display.awayGradient)}`;
    backgroundHomeCss = `background: ${generateGradient(display.homeGradient)}`;
    backgroundLightCss = `background: ${generateGradient(
      display.layoutGradient,
    )}`;
    backgroundDarkCss = `background: ${generateGradient(
      display.backgroundGradient,
    )}`;

    shadowOutDotCss = `
      filter: drop-shadow(
        0px 0px 1px
        color-mix(in srgb, ${display.activeOutColor} 50%, black)
      )
    `;

    shadowHomeCss = `
      filter: drop-shadow(2px 2px 0px ${display.homeLogoShadow}88) drop-shadow(0px 0px 3px ${display.homeLogoShadow})
    `;

    shadowAwayCss = `
      filter: drop-shadow(2px 2px 0px ${display.awayLogoShadow}88) drop-shadow(0px 0px 3px ${display.awayLogoShadow})
    `;
  }

  return css`
    .background-away {
      ${unsafeCSS(backgroundAwayCss)};
    }

    .background-home {
      ${unsafeCSS(backgroundHomeCss)};
    }

    .background-light {
      ${unsafeCSS(backgroundLightCss)};
    }

    .background-dark {
      ${unsafeCSS(backgroundDarkCss)};
    }

    .shadow-out-dot {
      ${unsafeCSS(shadowOutDotCss)};
    }

    .shadow-home {
      ${unsafeCSS(shadowHomeCss)};
    }

    .shadow-away {
      ${unsafeCSS(shadowAwayCss)};
    }

    .font-color-dark {
      color: ${unsafeCSS(display.fontColorDark)};
    }

    .font-color-light {
      color: ${unsafeCSS(display.fontColorLight)};
    }

    .out-dot-on::after {
      content: "";
      height: 25px;
      width: 25px;
      border-radius: 50%;
      display: ${unsafeCSS(transparentBackgrounds ? "none" : "inline-block")};

      margin-left: -1px;
      margin-top: -1px;

      filter: blur(3px);
      border: 1px solid ${unsafeCSS(display.activeOutColor)};
      animation: opacityAnimation 0.9s 1;
      opacity: 0;
    }
  `;
};
