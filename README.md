# rollup-plugin-lit-tailwindcss

```js
import litTailwind from 'rollup-plugin-lit-tailwindcss';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
  },
  plugins: [
    litTailwind({
      include: 'src/components/**/*.ts',
      placeholder: 'tw_placeholder',
    }),
  ],
};
```

Then in `lit` component file:

```ts
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('simple-footer')
export class SimpleComponent extends LitElement {
  static styles = css`tw_placeholder`; // 👈 classes will be injected here

  render() {
    return html`<h1
      class="text-purple-400 md:text-red-400 md:hover:text-green-500"
    >
      Hello, world!
    </h1>`;
  }
}
```

