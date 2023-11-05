import { css, unsafeCSS } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

export const BaseballStyle = (
  transparentBackgrounds: boolean,
  transparentFonts: boolean,
  fontColorDark: string,
  fontColorLight: string,
  awayGradient: Gradient,
  homeGradient: Gradient,
  layoutGradient: Gradient,
  backgroundGradient: Gradient,
) => {
  return css`
    .background-away {
      background: ${unsafeCSS(
        transparentBackgrounds ? "none" : generateGradient(awayGradient),
      )};
    }

    .background-home {
      background: ${unsafeCSS(
        transparentBackgrounds ? "none" : generateGradient(homeGradient),
      )};
    }

    .background-light {
      background: ${unsafeCSS(
        transparentBackgrounds ? "none" : generateGradient(layoutGradient),
      )};
    }

    .background-dark {
      background: ${unsafeCSS(
        transparentBackgrounds ? "none" : generateGradient(backgroundGradient),
      )};
    }

    .font-color-dark {
      color: ${unsafeCSS(transparentFonts ? "rgba(0,0,0,0)" : fontColorDark)};
    }

    .font-color-light {
      color: ${unsafeCSS(transparentFonts ? "rgba(0,0,0,0)" : fontColorLight)};
    }
  `;
};
