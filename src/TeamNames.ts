import { html } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

interface Props {
  awayGradient: Gradient;
  homeGradient: Gradient;
  fontColor: string;
  awayName: string;
  homeName: string;
}

export const TeamNames = ({
  awayName,
  homeName,
  fontColor,
  awayGradient,
  homeGradient,
}: Props) => {
  return html`
    <div class="teams-container">
      <div
        style="display: flex; background: ${generateGradient(awayGradient)}"
        class="score-row"
      >
        <div class="score-name" style="color: ${fontColor}">
          ${awayName && html`<span>${awayName}</span>`}
        </div>
      </div>

      <div
        style="display: flex; background: ${generateGradient(homeGradient)}"
        class="score-row"
      >
        <div class="score-name" style="color: ${fontColor}">
          ${homeName && html`<span>${homeName}</span>`}
        </div>
      </div>
    </div>
  `;
};
