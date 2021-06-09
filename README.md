# rollup-plugin-lit-tailwindcss

```js
import litTw from 'rollup-plugin-lit-tailwindcss';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
  },
  plugins: [
    litTw({
      include: 'src/components/**/*.ts',
      placeholder: 'tw_placeholder',
    }),
  ],
};
```

lit component

```ts
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('simple-component')
export class SimpleComponent extends LitElement {
  static styles = css`tw_placeholder`;

  render() {
    return html`<h1 class="text-purple-400 hover_text-green-500">Hello, world!</h1>`;
  }
}
```

## Todos

- is this performant???
- tailwind separator (`_` to default one `:`)
- read tailwind config, styles.css?
- ...
