import { html } from "lit";
import { ArrowDirection, InningArrow } from "../InningArrow.ts";

interface Props {
  inning: number;
}

export const InningHorizontal = ({ inning }: Props) => {
  const isTop = inning % 1 === 0;

  return html`
    <style>
      .inning-horizontal {
        display: flex;
        flex-direction: row;
        column-gap: 6px;
        justify-content: center;
      }
    </style>

    <div class="inning-horizontal">
      <div style="padding-top: 6px">
        ${InningArrow(isTop ? ArrowDirection.UP : ArrowDirection.DOWN, true)}
      </div>
      <div>${Math.floor(inning)}</div>
    </div>
  `;
};
