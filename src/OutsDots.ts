import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";
import { html } from "lit";

interface Props {
  outs: number;
  layoutGradient: Gradient;
  activeOutColor: string;
  inactiveOutColor: string;
}

export const OutsDots = ({
  outs,
  layoutGradient,
  activeOutColor,
  inactiveOutColor,
}: Props) => {
  const out1Color =
    outs === 1 || outs === 2 ? activeOutColor : inactiveOutColor;
  const out2Color = outs === 2 ? activeOutColor : inactiveOutColor;

  const style = `color: state.displaySettings.fontColorDark; background: ${generateGradient(
    layoutGradient,
  )};`;

  return html`
    <style>
      .outs-dot {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        display: inline-block;
      }

      .out-dot-on::after {
        content: "";
        height: 25px;
        width: 25px;
        border-radius: 50%;
        display: inline-block;

        margin-left: -1px;
        margin-top: -1px;

        filter: blur(3px);
        border: 1px solid ${activeOutColor};
        animation: opacityAnimation 0.9s 1;
        opacity: 0;
      }
    </style>
    <div class="counts-bottom" style=${style}>
      <div
        class="outs-dot ${outs === 1 || outs === 2 ? "out-dot-on" : ""}"
        style="background-color: ${out1Color}; filter: drop-shadow(0px 0px 1px color-mix(in srgb, ${out1Color} 50%, black));"
      ></div>
      <div
        class="outs-dot ${outs === 2 ? "out-dot-on" : ""}"
        style="background-color: ${out2Color}; filter: drop-shadow(0px 0px 1px color-mix(in srgb, ${out2Color} 50%, black))"
      ></div>
    </div>
  `;
};
