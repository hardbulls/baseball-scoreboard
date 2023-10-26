import { html } from "lit";
import { ArrowDirection, InningArrow } from "./InningArrow.ts";

interface Props {
  activeInningColor: string;
  inactiveInningColor: string;
  bases: Array<boolean>;
  activeBaseColor: string;
  inactiveBaseColor: string;
  fontColor: string;
  inning: number;
}

export const BasesAndOuts = ({
  activeBaseColor,
  inactiveBaseColor,
  fontColor,
  bases,
  inning,
  activeInningColor,
  inactiveInningColor,
}: Props) => {
  const activeBaseStyle = `background-color: ${activeBaseColor}`;
  const inactiveBaseStyle = `background-color: ${inactiveBaseColor}`;
  const isTop = inning % 1 === 0;

  return html`
    <style>
      .bases-and-outs-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .bases-display {
        width: 92px;
        height: var(--half-height);
        padding-top: 8px;
        perspective: 110px;
      }

      .counts-display {
        padding-inline: 6px;
        height: var(--half-height);
        display: flex;
        justify-content: center;
        padding-bottom: 6px;
        column-gap: 6px;
      }

      .base-3d-wrapper-internal {
        transform-style: preserve-3d;
        transform: rotateX(45deg) scale(0.6);
      }

      .outs-dot {
        transform: scale(0.8);
      }

      .inning-display {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 8px;
      }
    </style>
    <div class="bases-and-outs-container" style="color: ${fontColor}">
      <div class="bases-display">
        <div class="base-3d-wrapper-internal">
          <div class="base-rotate-wrapper">
            <div
              id="first-base"
              style="${bases[0] ? activeBaseStyle : inactiveBaseStyle}"
              class="base"
            ></div>
            <div
              id="second-base"
              style="${bases[1] ? activeBaseStyle : inactiveBaseStyle}"
              class="base"
            ></div>
            <div
              id="third-base"
              style="${bases[2] ? activeBaseStyle : inactiveBaseStyle}"
              class="base"
            ></div>
          </div>
        </div>
      </div>

      <div class="inning-display">
        <div style="padding-top: 6px;">
          ${InningArrow(
            !isTop ? ArrowDirection.DOWN : ArrowDirection.UP,
            true,
            activeInningColor,
            inactiveInningColor,
          )}
        </div>
        <div>${Math.floor(inning)}</div>
      </div>
    </div>
  `;
};
