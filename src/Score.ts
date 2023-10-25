import { html } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

interface Props {
  layoutGradient: Gradient;
  fontColorDark: string;
  awayScore: number;
  homeScore: number;
}

export const Score = ({
  awayScore,
  homeScore,
  fontColorDark,
  layoutGradient,
}: Props) => {
  return html`
    <div class="score-values-container">
      <div
        class="score-value"
        style="color: ${fontColorDark}; background: ${generateGradient(
          layoutGradient,
        )}"
      >
        ${awayScore}
      </div>

      <div
        class="score-value"
        style="color: ${fontColorDark}; background: ${generateGradient(
          layoutGradient,
        )}"
      >
        ${homeScore}
      </div>
    </div>
  `;
};
