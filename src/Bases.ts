import { html } from "lit";

interface Props {
  activeBaseColor: string;
  inactiveBaseColor: string;
  bases: Array<boolean>;
}

export const Bases = ({ activeBaseColor, inactiveBaseColor, bases }: Props) => {
  const activeBaseStyle = `background-color: ${activeBaseColor}`;
  const inactiveBaseStyle = `background-color: ${inactiveBaseColor}`;

  return html`
    <div class="base-container">
      <div class="base-3d-wrapper">
        <div class="base-rotate-wrapper">
          <div
            id="first-base"
            style="${bases[0] ? activeBaseStyle : inactiveBaseStyle}"
            class="base"
          ></div>
          <div
            id="second-base"
            style="${bases[1] ? activeBaseStyle : inactiveBaseStyle}"
            class="base"
          ></div>
          <div
            id="third-base"
            style="${bases[2] ? activeBaseStyle : inactiveBaseStyle}"
            class="base"
          ></div>
        </div>
      </div>
    </div>
  `;
};
