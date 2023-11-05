import { html } from "lit";

interface Props {
  outs: number;
  activeOutColor: string;
  inactiveOutColor: string;
}

export const OutsDots = ({ outs, activeOutColor, inactiveOutColor }: Props) => {
  const out1Color =
    outs === 1 || outs === 2 ? activeOutColor : inactiveOutColor;
  const out2Color = outs === 2 ? activeOutColor : inactiveOutColor;

  return html`
    <div class="counts-bottom background-light">
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
