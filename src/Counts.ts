import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";
import { html } from "lit";

interface Props {
  balls: number;
  strikes: number;
  outs: number;
  layoutGradient: Gradient;
}
export const Counts = ({ balls, strikes, outs, layoutGradient }: Props) => {
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
      <div class="counts-bottom" style=${style}>
        <span class="outs-count">${outs}</span>
        <span class="outs-text">out</span>
      </div>
    </div>
  `;
};
