import { html } from "lit";

interface Props {
  outs: number;
}

export const OutsDots = ({ outs }: Props) => {
  return html`
    <div class="counts-bottom background-light">
      <div
        class="outs-dot ${outs === 1 || outs === 2
          ? "out-dot-on shadow-out-dot"
          : "out-dot-off"}"
      ></div>
      <div
        class="outs-dot ${outs === 2
          ? "out-dot-on shadow-out-dot"
          : "out-dot-off"}"
      ></div>
    </div>
  `;
};
