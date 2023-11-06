import { Gradient } from "./Gradient.ts";
import { css, unsafeCSS } from "lit";

export const generateGradient = (gradient: Gradient) => {
  return css`
    linear-gradient(
            ${unsafeCSS(gradient.angle)}deg, 
            ${unsafeCSS(gradient.startColor)}ff ${unsafeCSS(
              gradient.startPercentage,
            )}%,
            ${unsafeCSS(gradient.endColor)}ff ${unsafeCSS(
              gradient.endPercentage,
            )}%
    )`;
};
