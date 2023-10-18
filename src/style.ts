import { css } from "lit";

export const Style = css`
  .score-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .base-rotate-wrapper {
    position: relative;
    width: 64px;
    height: 64px;
    margin: 24px -8px 8px 54px;
    transform: translateX(-50%) rotate(45deg);
  }

  .base {
    position: absolute;
    width: 32px;
    height: 32px;
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
    justify-content: space-between;
    height: 45px;
  }

  .score-name {
    width: 100%;
    padding: 6px;
    filter: drop-shadow(2px 2px 2px black);
  }

  .score-value {
    text-align: center;
    font-weight: bolder;
    min-width: 46px;
    padding: 6px;
  }

  .inning-container {
    text-align: center;
    width: 38px;
    padding-left: 6px;
    padding-right: 6px;
    margin-left: 6px;
    margin-right: 6px;
    position: relative;
    box-sizing: revert !important;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .inning-indicator-top {
    position: absolute;
    top: 0;
    margin-left: 2px;
  }

  .inning-indicator-bottom {
    position: absolute;
    bottom: -8px;
    margin-left: 2px;
  }

  .counts-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin-left: 6px;
  }

  .counts-top {
    padding-left: 6px;
    padding-right: 6px;
    height: 45px;
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
    height: 45px;
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
  }

  .logo img {
    width: 64px;
    object-fit: scale-down;
  }
`;
