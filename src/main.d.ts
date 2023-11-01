import { BaseballScoreboard } from "./baseball-scoreboard.ts";
import { BaseballPlayerboard } from "./baseball-playerboard.ts";

declare global {
  interface HTMLElementTagNameMap {
    "baseball-scoreboard": BaseballScoreboard;
    "baseball-playerboard": BaseballPlayerboard;
  }
}
