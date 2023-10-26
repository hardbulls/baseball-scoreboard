import { html } from "lit";
import { Gradient } from "./Gradient.js";
import { generateGradient } from "./generateGradient.js";
import { ArrowDirection, InningArrow } from "./InningArrow.js";

interface Props {
  inning: number;
  fontColor: string;
  inactiveInningColor: string;
  activeInningColor: string;
  layoutGradient: Gradient;
}

export const InningVertical = ({
  inning,
  fontColor,
  inactiveInningColor,
  activeInningColor,
  layoutGradient,
}: Props) => {
  const isTop = inning % 1 === 0;

  return html`
    <style>
      .inning-vertical {
        text-align: center;
        width: 38px;
        padding-inline: 6px;
        margin-left: var(--space);
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
    </style>

    <div
      class="inning-vertical"
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
