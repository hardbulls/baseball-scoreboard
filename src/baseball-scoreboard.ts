import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Bases } from "./Bases.ts";
import { Style } from "./style.ts";
import { Counts } from "./Counts.ts";
import { InningVertical } from "./InningVertical.ts";
import { Score } from "./Score.ts";
import { LeagueLogo } from "./LeagueLogo.ts";
import { TeamLogos } from "./TeamLogos.ts";
import { TeamNames } from "./TeamNames.ts";
import { BaseballStyle } from "./baseball-style.ts";
import { DisplayConfig } from "./Attributes/DisplayConfig.ts";
import { BaseballScoreboardStyle } from "./baseball-scoreboard-style.ts";
import { DefaultDisplayConfig } from "./DefaultDisplayConfig.ts";

@customElement("baseball-scoreboard")
export class BaseballScoreboard extends LitElement {
  static styles = [Style];

  @property()
  mode: "foreground" | "normal" = "normal";

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

  @property({ type: Object })
  display: DisplayConfig = DefaultDisplayConfig;

  @property()
  awayLogoSrc: string | undefined = undefined;

  @property()
  homeLogoSrc: string | undefined = undefined;

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

  render() {
    const bases = this.bases.split(",").map((v) => v === "true");
    const hideBases = this.hideBases === "true";
    const hideInning = this.hideInning === "true";
    const hideCounts = this.hideCounts === "true";
    const displayConfig = this.display as DisplayConfig;

    return html`
      <style>
        ${BaseballStyle(this.mode === "foreground", displayConfig)} .team-logo {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        ${BaseballScoreboardStyle(this.mode === "foreground", displayConfig)}
          .league-logo {
          height: calc(var(--half-height) * 2);
        }

        .bases-component {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .inning-indicator-arrow {
          width: 0;
          height: 0;
          border-left: 13px solid transparent;
          border-right: 13px solid transparent;
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
          })}
          ${TeamLogos({
            awayLogoSrc: this.awayLogoSrc,
            homeLogoSrc: this.homeLogoSrc,
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
                fontClass: "font-color-dark",
                inning: this.inning,
              })
            : ""}
          ${!hideBases
            ? Bases({
                activeBaseColor: displayConfig.activeBaseColor,
                inactiveBaseColor: displayConfig.inactiveBaseColor,
                bases: bases,
                inning: this.inning,
                showInnings: this.inningStyle === "combined",
                fontClass: "font-color-light",
              })
            : ""}
          ${!hideCounts
            ? Counts({
                balls: this.balls,
                strikes: this.strikes,
                outs: this.outs,
                fontClass: "font-color-dark",
                outsStyle: this.outsStyle,
              })
            : ""}
        </div>
      </div>
    `;
  }
}
