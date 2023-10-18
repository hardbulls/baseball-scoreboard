import { BaseballScoreboard } from "./main.ts";

declare global {
  interface HTMLElementTagNameMap {
    "baseball-scoreboard": BaseballScoreboard;
  }
}
