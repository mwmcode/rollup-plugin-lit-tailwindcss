import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

export class SimpleComponent extends LitElement {
  static styles = css`tw_placeholder`;

  render() {
    return html`<h1 class="text-purple-400 hover_text-green-500">
      Hello, world!
    </h1>`;
  }
}

customElements.define('simple-component', SimpleComponent);