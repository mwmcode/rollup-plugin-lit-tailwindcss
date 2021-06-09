import { createFilter } from '@rollup/pluginutils';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

function postcssTw(purgeFile) {
  const processors = [
    tailwindcss({
      config: { mode: 'jit', purge: [purgeFile], separator: '_' },
    }),
    autoprefixer,
  ];
  return postcss(processors).process('@tailwind utilities;', {
    from: undefined,
    to: undefined,
  });
}

const defaultOptions = {
  include: undefined,
  exclude: undefined,
  placeholderKeyword: 'TW_CLASSES_PLACEHOLDER',
};

export default function litTailwindcss(options = defaultOptions) {
  if (!options.include) throw new Error('missing "include" option');
  const filter = createFilter(options.include, options.exclude);
  const twPlaceholder =
    options.placeholderKeyword || defaultOptions.placeholderKeyword;

  return {
    name: 'lit-tailwindcss',

    transform(code, id) {
      if (!filter(id)) return;

      if (code.includes(twPlaceholder)) {
        return postcssTw(id).then((result) =>
          result.css ? code.replace(twPlaceholder, result.css) : null,
        );
      }
      return null;
    },
  };
}
