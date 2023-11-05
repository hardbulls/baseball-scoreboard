import { css } from "lit";

export const Style = css`
  :host {
    --space: 3px;
    --half-height: 47px;
  }

  @keyframes opacityAnimation {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
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

  .league-logo img {
    max-height: calc(var(--half-height) * 2);
  }

  .team-logo-row {
    height: var(--half-height);
    display: flex;
    flex-direction: column;
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
  }

  .score-row {
    height: var(--half-height);
  }

  .score-name {
    width: 100%;
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
