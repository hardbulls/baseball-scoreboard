import { BaseballScoreboard } from "./baseball-scoreboard";
import { BaseballPlayerboard } from "./baseball-playerboard";

declare global {
  interface HTMLElementTagNameMap {
    "baseball-scoreboard": BaseballScoreboard;
    "baseball-playerboard": BaseballPlayerboard;
  }
}
