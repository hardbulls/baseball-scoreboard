import { html } from "lit";
import { Gradient } from "./Gradient.ts";
import { generateGradient } from "./generateGradient.ts";

interface Props {
  inning: number;
  fontColorDark: string;
  inactiveInningColor: string;
  activeInningColor: string;
  layoutGradient: Gradient;
}

enum ArrowDirection {
  UP,
  DOWN,
}

const renderInningSvg = (
  direction: ArrowDirection,
  isCurrent: boolean,
  activeColor: string,
  inactiveColor: string,
) => {
  const upPoints = "5,0 0,7 10,7";
  const downPoints = "5,7 10,0 0,0";

  return html`
    <svg
      viewBox="0 0 10 7"
      fill="${isCurrent ? activeColor : inactiveColor}"
      width="32"
      height="32"
    >
      <polygon
        points="${direction === ArrowDirection.UP ? upPoints : downPoints}"
      ></polygon>
    </svg>
  `;
};
export const Inning = ({
  inning,
  fontColorDark,
  inactiveInningColor,
  activeInningColor,
  layoutGradient,
}: Props) => {
  const isTop = inning % 1 === 0;

  return html`
    <div
      class="inning-container"
      style="color: ${fontColorDark}; background: ${generateGradient(
        layoutGradient,
      )}"
    >
      ${Math.floor(inning)}
      <div class="inning-indicator-top">
        ${renderInningSvg(
          ArrowDirection.UP,
          isTop,
          activeInningColor,
          inactiveInningColor,
        )}
      </div>
      <div class="inning-indicator-bottom">
        ${renderInningSvg(
          ArrowDirection.DOWN,
          !isTop,
          activeInningColor,
          inactiveInningColor,
        )}
      </div>
    </div>
  `;
};
