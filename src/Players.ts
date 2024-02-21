import { html } from "lit";
import { Gradient } from "./Gradient.ts";

interface Props {
  batterName: string;
  pitcherName: string;
  awayGradient: Gradient;
  backgroundGradient: Gradient;
  layoutGradient: Gradient;
  battingTeam: "home" | "away";
  homeGradient: Gradient;
  batterAvg: number;
  pitcherEra: number;
  hideStats: boolean;
  minNameWidth: number;
}

export const Players = ({
  batterName,
  pitcherName,
  battingTeam,
  hideStats,
  batterAvg,
  pitcherEra,
  minNameWidth,
}: Props) => {
  return html`
    <style>
      .container {
        font-size: 0.8em;
        width: max-content;
        display: flex;
        flex-direction: column;
        row-gap: var(--space);
        height: max-content;
      }

      .type-row {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding-inline: 6px;
        padding-block: 3px;
      }

      .type-name-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        min-width: ${minNameWidth}ch;
      }

      .name-row {
        padding-inline: 6px;
        padding-block: 3px;

        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .stats-row {
        margin-left: var(--space);
        padding-inline: 6px;
        padding-block: 3px;
        display: ${hideStats ? "none" : "flex"};
      }

      .stats-row-key {
        width: 3ch;
        text-align: right;

        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .stats-row-value {
        margin-left: 1ch;
        width: 6ch;
        text-align: right;

        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    </style>
    <div class="container background-dark">
      <div
        class="row  ${battingTeam === "away"
          ? "background-away"
          : "background-home"}"
        style="display: flex; justify-content: space-between; "
      >
        <div class="type-name-container">
          <div class="type-row font-color-dark background-light">P</div>
          <div class="name-row font-color-light">${pitcherName}</div>
        </div>

        <div class="stats-row font-color-dark background-light">
          <div class="stats-row-key">ERA</div>

          <div class="stats-row-value">${pitcherEra.toFixed(1)}</div>
        </div>
      </div>
      <div
        class="row  ${battingTeam === "home"
          ? "background-away"
          : "background-home"}"
        style="display: flex; justify-content: space-between;"
      >
        <div class="type-name-container">
          <div class="type-row font-color-dark background-light">B</div>
          <div class="name-row font-color-light">${batterName}</div>
        </div>

        <div class="stats-row font-color-dark background-light">
          <div class="stats-row-key">AVG</div>

          <div class="stats-row-value">${batterAvg.toFixed(3)}</div>
        </div>
      </div>
    </div>
  `;
};
