import { html } from "lit";
import { OutsText } from "./OutsText.ts";
import { OutsDots } from "./OutsDots.ts";

type Props = {
  balls: number;
  strikes: number;
  outs: number;
  outsStyle: string;
  fontClass: string;
};
export const Counts = ({
  balls,
  strikes,
  outs,
  outsStyle,
  fontClass,
}: Props) => {
  return html`
    <div class="counts-container ${fontClass}">
      <div class="counts-top background-light">
        <span>${balls}</span>
        <span class="count-separator">-</span>
        <span>${strikes}</span>
      </div>
      ${outsStyle === "text" ? OutsText({ outs }) : OutsDots({ outs })}
    </div>
  `;
};
