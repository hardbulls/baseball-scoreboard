import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";
import { html } from "lit";
import { OutsText } from "./OutsText.ts";
import { OutsDots } from "./OutsDots.ts";

type Props = {
  balls: number;
  strikes: number;
  outs: number;
  layoutGradient: Gradient;
  outsStyle: string;
  activeOutColor: string;
  inactiveOutColor: string;
};
export const Counts = ({
  balls,
  strikes,
  outs,
  layoutGradient,
  outsStyle,
  activeOutColor,
  inactiveOutColor,
}: Props) => {
  const style = `color: state.displaySettings.fontColorDark; background: ${generateGradient(
    layoutGradient,
  )}`;

  return html`
    <div class="counts-container">
      <div class="counts-top" style=${style}>
        <span>${balls}</span>
        <span class="count-separator">-</span>
        <span>${strikes}</span>
      </div>
      ${outsStyle === "text"
        ? OutsText({ outs, layoutGradient })
        : OutsDots({ outs, layoutGradient, activeOutColor, inactiveOutColor })}
    </div>
  `;
};
