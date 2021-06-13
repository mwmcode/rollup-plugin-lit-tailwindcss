import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

export class SimpleComponent extends LitElement {
  static styles = css`tw_placeholder`;

  render() {
    return html`<h1
      class="text-purple-400 hover:text-green-500 md:text-red-400 md:hover:text-indigo-900"
    >
      Hello, world!
    </h1>`;
  }
}

customElements.define('simple-component', SimpleComponent);
