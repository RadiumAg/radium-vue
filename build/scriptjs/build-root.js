/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const vue = require('rollup-plugin-vue');
const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { rollup } = require('rollup');
const pkg = require('../../package.json');
const { noPreFixFile } = require('./common');

const deps = Object.keys(pkg.dependencies);

/**
 *
 * @param {*} format "amd", "cjs", "system", "es", "iife" or "umd".
 * @param {*} pakName
 * @returns
 */
const getOutputOptions = format => {
  return {
    format,
    file: format === 'es' ? `es/index.js` : `lib/index.js`,
    exports: 'named',
    paths(id) {
      if (id.startsWith('@radium-vue')) {
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
    return (
      id.startsWith('@radium-vue') || id.startsWith('vue') || deps.includes(id)
    );
  },
};

async function build() {
  const bundle = await rollup(inputOptions);
  await bundle.write(getOutputOptions('es'));
  await bundle.write(getOutputOptions('cjs'));
}

build().catch(console.log);
