import { html } from "lit";

interface Props {
  fontClass: string;
  awayScore: number;
  homeScore: number;
}

export const Score = ({ awayScore, homeScore, fontClass }: Props) => {
  return html`
    <div class="score-values-container ${fontClass}">
      <div class="score-value background-light">${awayScore}</div>

      <div class="score-value background-light">${homeScore}</div>
    </div>
  `;
};
