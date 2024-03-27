import { html } from "lit";
import { InningHorizontal } from "./Inning/InningHorizontal";

interface Props {
  activeBaseColor: string;
  inactiveBaseColor: string;
  bases: Array<boolean>;
  showInnings: boolean;
  inning: number;
  fontClass: string;
  activeInningColor: string;
}

export const Bases = ({
  activeBaseColor,
  activeInningColor,
  fontClass,
  inning,
  inactiveBaseColor,
  bases,
  showInnings = true,
}: Props) => {
  const activeBaseStyle = `background-color: ${activeBaseColor}`;
  const inactiveBaseStyle = `background-color: ${inactiveBaseColor}`;

  let inningsComponent;

  const angle = showInnings ? "45deg" : "20deg";
  const basesStyle = showInnings
    ? "transform: scale(0.8); padding-top: 4px;"
    : "padding-top: 10px;";
  const width = showInnings ? "110px" : "130px";

  if (showInnings) {
    inningsComponent = html`
      <div class="inning-row">
        ${InningHorizontal({
          inning,
          activeInningColor,
        })}
      </div>
    `;
  }

  return html`
    <style>
      .inning-row {
        height: var(--half-height);
        display: flex;
        justify-content: end;
        flex-direction: column;
      }

      .base-container {
        width: ${width};
        perspective: 190px;
        height: var(--half-height);
      }

      .base-3d-wrapper {
        transform-style: preserve-3d;
        transform: rotateX(${angle});
      }

      .base-rotate-wrapper {
        position: relative;
        transform: rotate(45deg) translateX(50%);
      }

      .base {
        position: absolute;
        width: 32px;
        height: 32px;
        box-shadow: inset 0 0 3px black;
      }

      .base-on::after {
        content: "";
        height: 32px;
        width: 32px;
        display: inline-block;

        margin-left: -1px;
        margin-top: -1px;

        filter: blur(3px);
        border: 1px solid ${activeBaseColor};
        animation: opacityAnimation 0.9s 1;
        opacity: 0;
      }

      #second-base {
        left: 0;
        top: 0;
      }

      #third-base {
        left: 0;
        top: calc(32px + 8px);
      }

      #first-base {
        left: calc(32px + 8px);
        top: 0;
      }
    </style>

    <div class="bases-component ${fontClass}">
      <div class="base-container" style="${basesStyle}">
        <div class="base-3d-wrapper">
          <div class="base-rotate-wrapper">
            <div
              id="first-base"
              style="${bases[0] ? activeBaseStyle : inactiveBaseStyle}"
              class="base ${bases[0] ? "base-on" : ""}"
            ></div>
            <div
              id="second-base"
              style="${bases[1] ? activeBaseStyle : inactiveBaseStyle}"
              class="base ${bases[1] ? "base-on" : ""}"
            ></div>
            <div
              id="third-base"
              style="${bases[2] ? activeBaseStyle : inactiveBaseStyle}"
              class="base ${bases[2] ? "base-on" : ""}"
            ></div>
          </div>
        </div>
      </div>
      ${inningsComponent}
    </div>
  `;
};
