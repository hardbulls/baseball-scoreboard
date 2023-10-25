import { css } from "lit";

export const Style = css`
  :host {
    --space: 3px;
    --half-height: 47px;
  }
  .score-container,
  .teams-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: var(--space);
  }

  .team-logos-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .league-logo-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .league-logo {
    height: calc(var(--half-height) * 2);
  }

  .league-logo img {
    max-height: calc(var(--half-height) * 2);
  }

  .team-logo-row {
    height: var(--half-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .team-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .team-logo img {
    max-height: var(--half-height);
  }

  .score-values-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: var(--space);
    margin-right: var(--space);
  }

  .base-container {
    width: 136px;
    padding-top: 8px;
    perspective: 120px;
  }

  .outs-dot {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    display: inline-block;
  }

  .base-3d-wrapper {
    transform-style: preserve-3d;
    transform: rotateX(20deg);
  }

  .base-rotate-wrapper {
    position: relative;
    transform: rotate(45deg) translateX(50%);
  }

  .base {
    position: absolute;
    width: 32px;
    height: 32px;
    box-shadow: inset 0 0 3px black;
  }

  #second-base {
    left: 0;
    top: 0;
  }

  #third-base {
    left: 0;
    top: calc(32px + 8px);
  }

  #first-base {
    left: calc(32px + 8px);
    top: 0;
  }

  .score-row {
    height: var(--half-height);
  }

  .score-name {
    filter: drop-shadow(2px 2px 2px black);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .score-name > span {
    padding-right: 6px;
    font-size: 1.3em;
  }

  .score-value {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 2ch;
    height: var(--half-height);
    padding-inline: 6px;
  }

  .inning-container {
    text-align: center;
    width: 38px;
    padding-left: 6px;
    padding-right: 6px;
    position: relative;
    box-sizing: revert !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .inning-indicator-arrow {
    width: 0;
    height: 0;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
  }

  .inning-indicator-top {
    position: absolute;
    top: 4px;
  }

  .inning-indicator-bottom {
    position: absolute;
    bottom: 4px;
  }

  .counts-container {
    display: flex;
    margin-left: var(--space);
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    row-gap: var(--space);
  }

  .counts-top {
    padding-left: 6px;
    padding-right: 6px;
    height: var(--half-height);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .counts-top > span {
    min-width: 1ch;
  }

  .counts-top > .count-separator {
    margin-left: 0.5ch;
    margin-right: 0.5ch;
  }

  .counts-bottom {
    padding-left: 6px;
    padding-right: 6px;
    height: var(--half-height);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .counts-bottom > .outs-count {
    width: 1ch;
  }

  .counts-bottom > .outs-text {
    margin-left: 0.5ch;
    width: 3ch;
  }

  .logo {
    padding: 2px;
    overflow: clip;
  }

  .logo img {
    padding-inline: 6px;
    object-fit: scale-down;
  }
`;
