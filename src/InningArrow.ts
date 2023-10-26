import { html } from "lit";

export enum ArrowDirection {
  UP,
  DOWN,
}

export const InningArrow = (
  direction: ArrowDirection,
  isCurrent: boolean,
  activeColor: string,
  inactiveColor: string,
) => {
  const color = isCurrent ? activeColor : inactiveColor;
  let style = `filter: drop-shadow(0px 0px 1px color-mix(in srgb, ${color} 50%, black));`;

  if (direction === ArrowDirection.UP) {
    style += ` border-bottom: 22px solid ${color};`;
  } else {
    style += ` border-top: 22px solid ${color};`;
  }

  return html`<div class="inning-indicator-arrow" style=${style}></div>`;
};
