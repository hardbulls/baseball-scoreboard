import { html } from "lit";

interface Props {
  outs: number;
}

export const OutsText = ({ outs }: Props) => {
  return html`
    <div class="counts-bottom background-light">
      <span class="outs-count">${outs}</span>
      <span class="outs-text">out</span>
    </div>
  `;
};
