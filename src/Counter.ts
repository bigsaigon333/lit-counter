import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-counter")
export default class MyCounter extends LitElement {
  static styles = css`
    section {
      display: flex;
      align-items: center;
      column-gap: 1rem;
    }
    .minus-button,
    .plus-button {
      width: 4rem;
      height: 3rem;
      padding: 0.25rem;
      border-radius: 0.25rem;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .count {
      font-size: 2rem;
      min-width: 3rem;
      display: flex;
      justify-content: center;
    }
  `;

  @property({ type: Number })
  count = 0;

  private _change(diff: number) {
    this.count += diff;
  }

  render() {
    return html`
      <h1>My Counter</h1>
      <section>
        <button @click="${() => this._change(-1)}" class="minus-button">
          -
        </button>
        <span class="count">${this.count} </span>
        <button @click="${() => this._change(+1)}" class="plus-button">
          +
        </button>
      </section>
    `;
  }
}
