import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Gradient } from "./Gradient.ts";
import { Style } from "./style.ts";
import { Players } from "./Players.ts";
import { BaseballStyle } from "./baseball-style.ts";

@customElement("baseball-playerboard")
export class BaseballPlayerboard extends LitElement {
  static styles = [Style];

  @property({ type: Number })
  inning = 1.0;

  @property()
  awayGradient = "180,#1653af,#063376,30,50";

  @property()
  homeGradient = "180,#ff2222,#ea1010,30,50";

  @property()
  layoutGradient = "180,#ebebeb,#e0e0e0,50,50";

  @property()
  backgroundGradient = "180,#000000,#484848,0,100";

  @property()
  fontColorDark = "#292929";

  @property()
  fontColorLight = "#e8e8e8";

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

  @property({ type: Number })
  minNameWidth = 18;

  private parseGradient(value: string): Gradient {
    const awayGradientValues = value.split(",");

    return {
      angle: Number.parseInt(awayGradientValues[0]),
      startColor: awayGradientValues[1],
      endColor: awayGradientValues[2],
      startPercentage: Number.parseInt(awayGradientValues[3]),
      endPercentage: Number.parseInt(awayGradientValues[4]),
    };
  }

  render() {
    const awayGradient = this.parseGradient(this.awayGradient);
    const homeGradient = this.parseGradient(this.homeGradient);
    const layoutGradient = this.parseGradient(this.layoutGradient);
    const backgroundGradient = this.parseGradient(this.backgroundGradient);
    const battingTeam = this.inning % 1 === 0 ? "away" : "home";

    const hideStats = this.hideStats === "true";

    return html`
      <style>
        ${BaseballStyle(
          this.fontColorDark,
          this.fontColorLight,
          awayGradient,
          homeGradient,
          layoutGradient,
          backgroundGradient,
        )})
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
            backgroundGradient: backgroundGradient,
            layoutGradient: layoutGradient,
            awayGradient: awayGradient,
            battingTeam: battingTeam,
            homeGradient: homeGradient,
            batterName: this.batterName,
            pitcherName: this.pitcherName,
            batterAvg: this.batterAvg,
            pitcherEra: this.pitcherEra,
            minNameWidth: this.minNameWidth,
          })}
        </div>
      </div>
    `;
  }
}
