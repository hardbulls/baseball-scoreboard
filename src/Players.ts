import { html } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

interface Props {
borderSize: string;
batterName: string;
pitcherName: string;
borderColor: string;
awayGradient: Gradient;
backgroundGradient: Gradient;
fontColor: string;
battingTeam: 'home'|'away';
homeGradient: Gradient;
}

export const Players = ({
  borderSize,
  batterName,
  pitcherName,
  borderColor,
  battingTeam,
  fontColor,
  homeGradient,
  backgroundGradient,
  awayGradient
}: Props) => {
  return html`
    <style>
    .container {
      border: ${borderSize} solid ${borderColor};
      font-size: 0.9em;
      border-top: 0;
      color: ${fontColor};
      width: max-content;
      display: flex;
      flex-direction: column;
      row-gap: var(--space);
      background: ${generateGradient(backgroundGradient)};
      height: max-content;
    }

    .pitcher-row {
      animation: slideDownAnimation 0.9s 1;
    }

    .batter-row {
      animation: slideDownAnimation 0.9s 1;
    }

    @keyframes slideDownAnimation {
      0% {
        margin-top: -200px;
      }
  
      100% {
        margin-top: 0;
      }
    }

    </style>
    <div class="container">
    <div class="pitcher-row" style="display: flex; background: ${generateGradient(battingTeam === 'home' ? awayGradient : homeGradient)}">
      <div>
      P:
      </div>

      <div>
       ${pitcherName}
      </div>
    </div>
    <div class="batter-row" style="display: flex; background: ${generateGradient(battingTeam === 'away' ? awayGradient : homeGradient)}"">
    <div>
    B:
    </div>

    <div>
     ${batterName}
    </div>
  </div>
  </div>
  `;
};
