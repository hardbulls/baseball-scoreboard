import { html } from "lit";

export enum ArrowDirection {
  UP,
  DOWN,
}

export const InningArrow = (direction: ArrowDirection, isCurrent: boolean) => {
  let classes = isCurrent ? "active-inning" : "inactive-inning";

  if (direction === ArrowDirection.UP) {
    classes += isCurrent ? " active-inning-top" : " inactive-inning-top";
  } else {
    classes += isCurrent ? " active-inning-bottom" : " inactive-inning-bottom";
  }

  return html` <div class="inning-indicator-arrow ${classes}"></div> `;
};
