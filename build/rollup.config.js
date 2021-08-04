/* eslint-disable @typescript-eslint/no-var-requires */
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const { noPreFixFile } = require('./common');
const pkg = require('../package.json');

const deps = Object.keys(pkg.dependencies);

export default {
  input: './packages/radium-vue/index.ts',
  output: [
    {
      format: 'esm',
      file: 'lib/index.js',
      exports: 'named',
      paths(id) {
        if (/^@radium-vue/.test(id)) {
          if (noPreFixFile.test(id)) return id.replace('@radium-vue', '..');
          return id.replace('@radium-vue/', '../ra-');
        }
      },
    },
  ],
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser',
      css: false,
    }),
    terser(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          target: 'es2021',
          module: 'esnext',
          lib: ['ESNext', 'DOM'],
        },
        exclude: ['node_modules', '__tests__', 'website', 'packages'],
      },
      abortOnError: false,
    }),
  ],
  external(id) {
    return /^vue/.test(id) || deps.includes(id);
  },
};
