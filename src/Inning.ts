import { html } from "lit";
import { Gradient } from "./Gradient.ts";
import { generateGradient } from "./generateGradient.ts";
import { ArrowDirection, InningArrow } from "./InningArrow.ts";

interface Props {
  inning: number;
  fontColor: string;
  inactiveInningColor: string;
  activeInningColor: string;
  layoutGradient: Gradient;
}

export const Inning = ({
  inning,
  fontColor,
  inactiveInningColor,
  activeInningColor,
  layoutGradient,
}: Props) => {
  const isTop = inning % 1 === 0;

  return html`
    <div
      class="inning-container"
      style="color: ${fontColor}; background: ${generateGradient(
        layoutGradient,
      )}"
    >
      ${Math.floor(inning)}
      <div class="inning-indicator-top">
        ${InningArrow(
          ArrowDirection.UP,
          isTop,
          activeInningColor,
          inactiveInningColor,
        )}
      </div>
      <div class="inning-indicator-bottom">
        ${InningArrow(
          ArrowDirection.DOWN,
          !isTop,
          activeInningColor,
          inactiveInningColor,
        )}
      </div>
    </div>
  `;
};
