import { Field } from "./baseball-field/field.ts";
import { Player } from "./model/Player.ts";
import { CustomWebComponent } from "./CustomWebComponent.ts";

export class BaseballField extends CustomWebComponent {
  static observedAttributes = ["fontName", "fontLineHeight", "players"];

  public fontName = "Open Sans";

  public fontLineHeight = 1.15;

  private players: Player[] = [];

  constructor() {
    super();

    this.innerHTML = this.render();
  }

  public render(): string {
    const field = new Field({
      players: this.players
    });

    return `
      <style>
      </style>
      <div
        style="max-width: max-content; font-family: ${this
      .fontName}, sans-serif; display: flex; justify-content: center; flex-direction: column; line-height: ${this
      .fontLineHeight}"
      >
        ${field.toString()}
      </div>
    `;
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (oldValue !== newValue) {
      if (name === 'fontName') {
        this.fontName = name;
      }

      if (name === 'players') {
        this.players = JSON.parse(newValue);
      }

      this.innerHTML = this.render();
    }
  }

}

CustomWebComponent.register('baseball-field', BaseballField);
