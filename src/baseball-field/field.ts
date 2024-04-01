import "./field.css";
import { Player } from "../model/Player.ts";
import { Position } from "../model/Position.ts";
import { FieldPlayer } from "./field-player.ts";

type FieldState = {
  players: Player[];
};

export class Field {
  constructor(private state: FieldState) {}

  setState(state: FieldState) {
    this.state = state;
  }

  private getPositionStyle(position: Position): string {
    if (position === Position.FIRST_BASE) {
      return "bottom: 32%; left: 64%;";
    }

    if (position === Position.SECOND_BASE) {
      return "bottom: 44%; left: 58%;";
    }

    if (position === Position.CATCHER) {
      return "bottom: 0%; left: 50%;";
    }

    if (position === Position.RIGHT_FIELD) {
      return "bottom: 57%; left: 75%;";
    }

    if (position === Position.SHORTSTOP) {
      return "bottom: 44%; left: 41%;";
    }

    if (position === Position.CENTER_FIELD) {
     return "bottom: 72%; left: 50%;";
    }

    if (position === Position.THIRD_BASE) {
      return "bottom: 32%; left: 36%;";
    }

    if (position === Position.LEFT_FIELD) {
      return "bottom: 57%; left: 25%;";
    }

    if (position === Position.PITCHER) {
      return "bottom: 21%; left: 50%;";
    }

    return "";
  }

  private renderPlayer(player: Player): string {
    return `
      <div class="marker" style="${this.getPositionStyle(player.position)}">
        ${new FieldPlayer(player)}
      </div>
    `;
  }

  public toString(): string {
    return `
<div class="box-score-field">
   <div class="field-image-container">
      <div class="field-background-container">
        <img class="field-image" src="https://static.wbsc.org/public/wbsc/images/baseball-field.svg" alt="field">
      </div>
      ${
        this.state.players.map(player => {
          return this.renderPlayer(player);
        }).join('')
      }
   </div>
</div>`;
  }
}
