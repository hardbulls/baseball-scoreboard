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

const renderInningArrow = (
  direction: ArrowDirection,
  isCurrent: boolean,
  activeColor: string,
  inactiveColor: string,
) => {
  const color = isCurrent ? activeColor : inactiveColor;
  let style = `filter: drop-shadow(0px 0px 1px color-mix(in srgb, ${color} 50%, black));`;

  if (direction === ArrowDirection.UP) {
    style += ` border-bottom: 22px solid ${color};`;
  } else {
    style += ` border-top: 22px solid ${color};`;
  }

  return html`<div class="inning-indicator-arrow" style=${style}></div>`;
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
        ${renderInningArrow(
          ArrowDirection.UP,
          isTop,
          activeInningColor,
          inactiveInningColor,
        )}
      </div>
      <div class="inning-indicator-bottom">
        ${renderInningArrow(
          ArrowDirection.DOWN,
          !isTop,
          activeInningColor,
          inactiveInningColor,
        )}
      </div>
    </div>
  `;
};
