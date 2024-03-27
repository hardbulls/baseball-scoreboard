import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Gradient } from "./Gradient.ts";
import { Bases } from "./Bases.ts";
import { Style } from "./style.ts";
import { Counts } from "./Counts.ts";
import { InningVertical } from "./InningVertical.ts";
import { Score } from "./Score.ts";
import { LeagueLogo } from "./LeagueLogo.ts";
import { TeamLogos } from "./TeamLogos.ts";
import { TeamNames } from "./TeamNames.ts";
import { BaseballStyle } from "./baseball-style.ts";

@customElement("baseball-scoreboard")
export class BaseballScoreboard extends LitElement {
  static styles = [Style];

  @property()
  hideBases = "false";

  @property()
  hideCounts = "false";

  @property()
  hideInning = "true";

  @property({ type: Number })
  homeScore = 0;

  @property({ type: Number })
  balls = 0;

  @property({ type: Number })
  strikes = 0;

  @property({ type: Number })
  outs = 0;

  @property({ type: Number })
  awayScore = 0;

  @property({ type: Number })
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
  leagueLogoShadow = "#000000";

  @property()
  activeInningColor = "#e00000";

  @property()
  inactiveInningColor = "#b3b3b3";

  @property()
  activeOutColor = "#e00000";

  @property()
  inactiveOutColor = "#b3b3b3";

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

  @property({ type: Number })
  fontLineHeight = 1.15;

  @property()
  borderColor = "#000000";

  @property()
  borderSize = "3px";

  @property()
  backgroundImage =
    "https://www.hardbulls.com/clubdesk/fileservlet?inline=true&type=image&id=253";

  @property()
  leagueLogoSrc: string | undefined = undefined;

  @property()
  outsStyle: "dots" | "text" = "dots";

  @property()
  inningStyle: "combined" | "separate" = "combined";

  @property()
  battingTeam: "home" | "away" = "home";

  @property()
  pitcherName = "Pitcher";

  @property()
  batterName = "Batter";

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
    const hideInning = this.hideInning === "true";
    const hideCounts = this.hideCounts === "true";

    return html`
      <style>
        ${BaseballStyle(
            this.fontColorDark,
            this.fontColorLight,
            awayGradient,
            homeGradient,
            layoutGradient,
            backgroundGradient,
          )}
          .team-logo {
          display: flex;
          flex-direction: row;
          justify-content: center;
          opacity: 1;
        }

        .league-logo {
          height: calc(var(--half-height) * 2);
          opacity: 1;
        }

        .outs-dot {
          height: 25px;
          width: 25px;
          border-radius: 50%;
          display: inline-block;
        }

        .bases-component {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 1;
        }

        .out-dot-on::after {
          content: "";
          height: 25px;
          width: 25px;
          border-radius: 50%;
          display: inline-block;

          margin-left: -1px;
          margin-top: -1px;

          filter: blur(3px);
          border: 1px solid ${this.activeOutColor};
          animation: opacityAnimation 0.9s 1;
          opacity: 0;
        }

        .inning-indicator-arrow {
          width: 0;
          height: 0;
          border-left: 13px solid transparent;
          border-right: 13px solid transparent;
          display: inline-block;
        }
      </style>

      <div
        style="max-width: max-content; font-family: ${this
          .fontName}, sans-serif; font-size: 32px; display: flex; justify-content: center; flex-direction: column; line-height: ${this
          .fontLineHeight}"
      >
        <div
          class="background-dark"
          style="border: ${this.borderSize} solid ${this
            .borderColor}; display: flex; "
        >
          ${LeagueLogo({
            leagueLogoSrc: this.leagueLogoSrc,
            leagueLogoShadow: this.leagueLogoShadow,
          })}
          ${TeamLogos({
            awayLogoSrc: this.awayLogoSrc,
            homeLogoSrc: this.homeLogoSrc,
            awayLogoShadow: this.awayLogoShadow,
            homeLogoShadow: this.homeLogoShadow,
          })}
          ${TeamNames({
            fontClass: "font-color-light",
            awayName: this.awayName,
            homeName: this.homeName,
          })}
          ${Score({
            fontClass: "font-color-dark",
            homeScore: this.homeScore,
            awayScore: this.awayScore,
          })}
          ${!hideInning && (this.inningStyle === "separate" || hideBases)
            ? InningVertical({
                activeInningColor: this.activeInningColor,
                inactiveInningColor: this.inactiveInningColor,
                fontClass: "font-color-dark",
                inning: this.inning,
              })
            : ""}
          ${!hideBases
            ? Bases({
                activeBaseColor: this.activeBaseColor,
                inactiveBaseColor: this.inactiveBaseColor,
                bases: bases,
                inning: this.inning,
                activeInningColor: this.activeInningColor,
                showInnings: this.inningStyle === "combined",
                fontClass: "font-color-light",
              })
            : ""}
          ${!hideCounts
            ? Counts({
                balls: this.balls,
                strikes: this.strikes,
                outs: this.outs,
                activeOutColor: this.activeOutColor,
                inactiveOutColor: this.inactiveOutColor,
                fontClass: "font-color-dark",
                outsStyle: this.outsStyle,
              })
            : ""}
        </div>
      </div>
    `;
  }
}
