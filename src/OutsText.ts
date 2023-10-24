import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";
import { html } from "lit";

interface Props {
  outs: number;
  layoutGradient: Gradient;
}

export const OutsText = ({ outs, layoutGradient }: Props) => {
  const style = `color: state.displaySettings.fontColorDark; background: ${generateGradient(
    layoutGradient,
  )}`;

  return html`
    <div class="counts-bottom" style=${style}>
      <span class="outs-count">${outs}</span>
      <span class="outs-text">out</span>
    </div>
  `;
};
