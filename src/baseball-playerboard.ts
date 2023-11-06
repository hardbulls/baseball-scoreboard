import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Style } from "./style.ts";
import { Players } from "./Players.ts";
import { BaseballStyle } from "./baseball-style.ts";
import { DisplayConfig } from "./Attributes/DisplayConfig.ts";
import { DefaultDisplayConfig } from "./DefaultDisplayConfig.ts";

@customElement("baseball-playerboard")
export class BaseballPlayerboard extends LitElement {
  static styles = [Style];

  @property()
  mode: "foreground" | "background" | "normal" = "normal";

  @property({ type: Number })
  inning = 1.0;

  @property({ type: Object })
  display: DisplayConfig = DefaultDisplayConfig;

  @property()
  fontName = "Open Sans";

  @property({ type: Number })
  fontLineHeight = 1.15;

  @property()
  borderColor = "#000000";

  @property()
  borderSize = "3px";

  @property()
  battingTeam: "home" | "away" = "home";

  @property()
  pitcherName = "Pitcher";

  @property()
  batterName = "Batter";

  @property({ type: Number })
  batterAvg = 0;

  @property({ type: Number })
  pitcherEra = 0;

  @property()
  hideStats = "false";

  render() {
    const battingTeam = this.inning % 1 === 0 ? "away" : "home";

    const hideStats = this.hideStats === "true";
    const displayConfig = this.display as DisplayConfig;

    return html`
      <style>
        ${BaseballStyle(this.mode === "foreground", displayConfig)})
      </style>

      <div
        style="font-family: ${this
          .fontName}, sans-serif; font-size: 32px; display: flex; justify-content: center; max-width: max-content; flex-direction: column; line-height: ${this
          .fontLineHeight}"
      >
        <div
          style="border: ${this.borderSize} solid ${this
            .borderColor}; display: flex; "
        >
          ${Players({
            hideStats: hideStats,
            battingTeam: battingTeam,
            batterName: this.batterName,
            pitcherName: this.pitcherName,
            batterAvg: this.batterAvg,
            pitcherEra: this.pitcherEra,
          })}
        </div>
      </div>
    `;
  }
}
