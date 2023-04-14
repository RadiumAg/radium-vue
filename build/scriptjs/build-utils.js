/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const rollup = require('rollup');
const klawSync = require('klaw-sync');
const vue = require('rollup-plugin-vue');
const typescript = require('rollup-plugin-typescript2');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const pkg = require('../../package.json');
const { noPreFixFile } = require('./common');

const deps = Object.keys(pkg.dependencies);
const utilFiles = klawSync(path.resolve(__dirname, '../../packages/utils'), {
  nodir: true,
}).map(_ => _.path);
const excludeFile = ['package.json', 'types.ts'];

/**
 *
 * @param {*} format "amd", "cjs", "system", "es", "iife" or "umd".
 * @param {*} pakName
 * @returns
 */
const getOutputOptions = (format, filePath) => {
  return {
    format,
    exports: 'auto',
    file: path.resolve(
      __dirname,
      '../../',
      `${format === 'es' ? 'es' : 'lib'}/utils/${filePath
        .slice(filePath.lastIndexOf('\\'))
        .replace('.ts', '')}.js`,
    ),
    paths(id) {
      if (id.startsWith('@radium-vue')) {
        if (noPreFixFile.test(id)) return id.replace('@radium-vue', '..');
        return id.replace('@radium-vue/', '../ra-');
      }
    },
  };
};

async function build() {
  while (utilFiles.length > 0) {
    const filePath = utilFiles.shift();
    if (excludeFile.some(_ => filePath.includes(_))) continue;
    const inputOptions = {
      input: filePath,
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
            exclude: ['node_modules', '__tests__'],
          },
          abortOnError: false,
        }),
      ],
      external(id) {
        return (
          id.startsWith('vue') ||
          id.startsWith('@radium-vue') ||
          deps.includes(id)
        );
      },
    };

    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(getOutputOptions('es', filePath));
    await bundle.write(getOutputOptions('cjs', filePath));
  }
}

build().catch(console.log);
