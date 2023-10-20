import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ScoreContainer } from "./ScoreContainer.ts";
import { Gradient } from "./Gradient.ts";
import { Bases } from "./Bases.ts";
import { Style } from "./style.ts";
import { Counts } from "./Counts.ts";
import { generateGradient } from "./generateGradient.ts";
import { Inning } from "./Inning.ts";

@customElement("baseball-scoreboard")
export class BaseballScoreboard extends LitElement {
  static styles = [Style];

  @property()
  hideBases = "false";

  @property()
  hideCounts = "false";

  @property()
  homeScore = 0;

  @property()
  balls = 0;

  @property()
  strikes = 0;

  @property()
  outs = 0;

  @property()
  awayScore = 0;

  @property()
  inning = 1.0;

  @property()
  bases = `false,false,false`;

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
  awayLogoSrc: string | undefined = undefined;

  @property()
  homeLogoSrc: string | undefined = undefined;

  @property()
  awayLogoShadow = "#575757";

  @property()
  homeLogoShadow = "#000000";

  @property()
  activeInningColor = "#e00000";

  @property()
  inactiveInningColor = "#b3b3b3";

  @property()
  activeBaseColor = "#e00000";

  @property()
  inactiveBaseColor = "#b3b3b3";

  @property()
  awayName = "Away";

  @property()
  homeName = "Home";

  @property()
  fontName = "Open Sans";

  @property()
  fontLineHeight = 1.15;

  @property()
  borderColor = "#000000";

  @property()
  borderSize = "3px";

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
    const bases = this.bases.split(",").map((v) => v === "true");
    const hideBases = this.hideBases === "true";
    const hideCounts = this.hideCounts === "true";

    console.log(this.borderColor);
    return html`
            <div style="font-family: ${
              this.fontName
            }, sans-serif; font-size: 32px; display: flex; line-height: ${
              this.fontLineHeight
            }">
                <div style="
                  background: ${generateGradient(backgroundGradient)}; 
                border: ${this.borderSize} solid ${
                  this.borderColor
                }; display: flex">
                ${ScoreContainer({
                  homeScore: this.homeScore,
                  awayScore: this.awayScore,
                  awayGradient: awayGradient,
                  homeGradient: homeGradient,
                  layoutGradient: layoutGradient,
                  fontColorDark: this.fontColorDark,
                  fontColorLight: this.fontColorLight,
                  awayLogoSrc: this.awayLogoSrc,
                  homeLogoSrc: this.homeLogoSrc,
                  awayLogoShadow: this.awayLogoShadow,
                  homeLogoShadow: this.homeLogoShadow,
                  awayName: this.awayName,
                  homeName: this.homeName,
                })}
                ${Inning({
                  layoutGradient: layoutGradient,
                  activeInningColor: this.activeInningColor,
                  inactiveInningColor: this.inactiveInningColor,
                  fontColorDark: this.fontColorDark,
                  inning: this.inning,
                })}
                ${
                  !hideBases
                    ? Bases({
                        activeBaseColor: this.activeBaseColor,
                        inactiveBaseColor: this.inactiveBaseColor,
                        bases: bases,
                      })
                    : ""
                }
                ${
                  !hideCounts
                    ? Counts({
                        balls: this.balls,
                        strikes: this.strikes,
                        outs: this.outs,
                        layoutGradient: layoutGradient,
                      })
                    : ""
                }
                </div>
            </div
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "baseball-scoreboard": BaseballScoreboard;
  }
}
