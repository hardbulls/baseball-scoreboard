import { css, unsafeCSS } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

export const BaseballStyle = (
  fontColorDark: string,
  fontColorLight: string,
  awayGradient: Gradient,
  homeGradient: Gradient,
  layoutGradient: Gradient,
  backgroundGradient: Gradient,
) => {
  return css`
    .background-away {
      background: ${unsafeCSS(generateGradient(awayGradient))};
    }

    .background-home {
      background: ${unsafeCSS(generateGradient(homeGradient))};
    }

    .background-light {
      background: ${unsafeCSS(generateGradient(layoutGradient))};
    }

    .background-dark {
      background: ${unsafeCSS(generateGradient(backgroundGradient))};
    }

    .font-color-dark {
      color: ${unsafeCSS(fontColorDark)};
    }

    .font-color-light {
      color: ${unsafeCSS(fontColorLight)};
    }
  `;
};
