import { html } from "lit";
import { ArrowDirection, InningArrow } from "./InningArrow.js";

interface Props {
  inning: number;
  fontClass: string;
  inactiveInningColor: string;
  activeInningColor: string;
}

export const InningVertical = ({
  inning,
  fontClass,
  inactiveInningColor,
  activeInningColor,
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

    <div class="inning-vertical background-light ${fontClass}">
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
