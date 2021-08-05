/* eslint-disable @typescript-eslint/no-var-requires */
const vue = require('rollup-plugin-vue');
const typescript = require('rollup-plugin-typescript2');
const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { rollup } = require('rollup');
const { noPreFixFile } = require('./common');
const pkg = require('../../package.json');

const deps = Object.keys(pkg.dependencies);

/**
 *
 * @param {*} format "amd", "cjs", "system", "es", "iife" or "umd".
 * @param {*} pakName
 * @returns
 */
const getOutputOptions = format => {
  return {
    format: format,
    file: format === 'es' ? `es/index.js` : `lib/index.js`,
    exports: 'named',
    paths(id) {
      if (/^@radium-vue/.test(id)) {
        if (noPreFixFile.test(id)) return id.replace('@radium-vue', '.');
        return id.replace('@radium-vue/', './ra-');
      }
    },
  };
};

const inputOptions = {
  input: path.resolve(__dirname, '../../packages/radium-vue/index.ts'),
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser',
      css: false,
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          target: 'es2021',
          module: 'esnext',
          lib: ['ESNext', 'DOM'],
        },
        exclude: ['node_modules', '__tests__', 'website'],
      },
      abortOnError: false,
    }),
  ],
  external(id) {
    return /^@radium-vue/.test(id) || /^vue/.test(id) || deps.includes(id);
  },
};

async function build() {
  const bundle = await rollup(inputOptions);
  await bundle.write(getOutputOptions('es'));
  await bundle.write(getOutputOptions('cjs'));
}

build().catch(console.log);
