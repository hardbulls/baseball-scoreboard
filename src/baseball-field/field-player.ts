import { Player } from "../model/Player.ts";

export class FieldPlayer {

  constructor(private player: Player) {
  }

  public toString(): string {
    return `
      <style>
        .field-player {
          display: flex;
          flex-direction: column;
          justify-items: center;
          width: 100%;
          height: 100%;
        }
        
        .field-player-image {
          width: 100%;
          height: 100%;
          display: flex;;
          justify-content: center;
        }
        
        .field-player-image {
          object-fit: contain;
        }
        
        .field-player-name {
          text-align: center;
        }
      </style>
      
      <div class="field-player">
        <div class="field-player-image">
          <img src="${this.player.image}"/>
        </div>
        <div class="field-player-name">
          ${this.player.name}
        </div>
      </div>
    `;
  }
}
