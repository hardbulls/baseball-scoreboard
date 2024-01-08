import { html } from "lit";

interface Props {
  fontClass: string;
  awayName: string;
  homeName: string;
}

export const TeamNames = ({ awayName, homeName, fontClass }: Props) => {
  return html`
    <div class="teams-container ${fontClass}">
      <div style="display: flex;" class="score-row background-away">
        <div class="score-name">
          ${awayName && html`<span>${awayName}</span>`}
        </div>
      </div>

      <div style="display: flex;" class="score-row background-home">
        <div class="score-name">
          ${homeName && html`<span>${homeName}</span>`}
        </div>
      </div>
    </div>
  `;
};
