import { html } from "lit";
import { generateGradient } from "./generateGradient.ts";
import { Gradient } from "./Gradient.ts";

interface Props {
  batterName: string;
  pitcherName: string;
  awayGradient: Gradient;
  backgroundGradient: Gradient;
  layoutGradient: Gradient;
  fontColorLight: string;
  fontColorDark: string;
  battingTeam: "home" | "away";
  homeGradient: Gradient;
  batterAvg: number;
  pitcherEra: number;
  hideStats: boolean;
}

export const Players = ({
  batterName,
  pitcherName,
  battingTeam,
  fontColorLight,
  fontColorDark,
  layoutGradient,
  homeGradient,
  hideStats,
  batterAvg,
  pitcherEra,
  backgroundGradient,
  awayGradient,
}: Props) => {
  return html`
    <style>
      .home-background {
        background: ${generateGradient(homeGradient)};
      }

      .away-background {
        background: ${generateGradient(awayGradient)};
      }

      .container {
        font-size: 0.8em;
        width: max-content;
        display: flex;
        flex-direction: column;
        row-gap: var(--space);
        background: ${generateGradient(backgroundGradient)};
        height: max-content;
      }

      .type-row {
        color: ${fontColorDark};
        background: ${generateGradient(layoutGradient)};
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
      }

      .name-row {
        color: ${fontColorLight};
        padding-inline: 6px;
        padding-block: 3px;

        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .stats-row {
        background: ${generateGradient(layoutGradient)};
        margin-left: var(--space);
        color: ${fontColorDark};
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
    <div class="container">
      <div
        class="row  ${battingTeam === "away"
          ? "away-background"
          : "home-background"}"
        style="display: flex; justify-content: space-between; "
      >
        <div class="type-name-container">
          <div class="type-row">P</div>
          <div class="name-row">${pitcherName}</div>
        </div>

        <div class="stats-row">
          <div class="stats-row-key">ERA</div>

          <div class="stats-row-value">${pitcherEra.toFixed(1)}</div>
        </div>
      </div>
      <div
        class="row  ${battingTeam === "home"
          ? "away-background"
          : "home-background"}"
        style="display: flex; justify-content: space-between;"
      >
        <div class="type-name-container">
          <div class="type-row">B</div>
          <div class="name-row">${batterName}</div>
        </div>

        <div class="stats-row">
          <div class="stats-row-key">AVG</div>

          <div class="stats-row-value">${batterAvg.toFixed(3)}</div>
        </div>
      </div>
    </div>
  `;
};
