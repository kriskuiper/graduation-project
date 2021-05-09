import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs', exports: 'auto' },
    { file: pkg.module, format: 'esm', exports: 'auto' },
  ],
  plugins: [
    external(),
    postcss({
      extract: true,
      sourceMap: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
