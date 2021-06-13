import { createFilter } from '@rollup/pluginutils';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

function postcssTw(purgeFile) {
  const plugins = [
    tailwindcss({
      config: { mode: 'jit', purge: [purgeFile], separator: ':' },
    }),
    autoprefixer,
  ];
  return postcss(plugins).process('@tailwind utilities;', {
    from: undefined,
    to: undefined,
  });
}

const defaultOptions = {
  include: undefined,
  exclude: undefined,
  placeholder: undefined,
};

export default function litTailwindcss(options = defaultOptions) {
  if (!options.include || !options.placeholder) {
    throw new Error('Both "include" & "placeholder" options are required');
  }
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'lit-tailwindcss',

    transform(code, id) {
      if (!filter(id)) return;
      if (code.includes(options.placeholder)) {
        return postcssTw(id).then((result) => {
          if (result.css) {
            return code.replace(
              options.placeholder,
              result.css.replaceAll(':', '\\:'),
            );
          }
          return null;
        });
      }
      return null;
    },
  };
}
