# rollup-plugin-lit-tailwindcss

```js
import litTw from 'rollup-plugin-lit-tailwindcss';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
  },
  plugins: [
    litTw({ include: 'src/components/**/*.ts' }),
  ],
}
```


## Todos
- is this performant?
- tw seperator slash read tailwind config, styles.css?
- ...