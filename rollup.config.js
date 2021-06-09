import buble from '@rollup/plugin-buble';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  plugins: [buble()],
  output: [
    { file: pkg.main, format: 'cjs', exports: 'auto' },
    { file: pkg.module, format: 'es' }
  ]
};