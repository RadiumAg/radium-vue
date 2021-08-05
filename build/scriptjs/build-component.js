/* eslint-disable @typescript-eslint/no-var-requires */

const rollup = require('rollup');
const path = require('path');
const pkg = require('../../package.json');
const vue = require('rollup-plugin-vue');
const typescript = require('rollup-plugin-typescript2');
const { getPackages } = require('@lerna/project');
const { noPreFixDir, noPreFixFile } = require('./common');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const deps = Object.keys(pkg.dependencies);
// css文件，utils,根文件不进行编译
const excludeFiles = ['radium-theme-chalk', 'utils', 'radium-vue'];

const getOutFileName = name => {
  if (noPreFixDir.test(name)) {
    return name;
  }
  return 'ra-' + name;
};

/**
 *
 * @param {*} format "amd", "cjs", "system", "es", "iife" or "umd".
 * @param {*} pakName
 * @returns
 */
const getOutputOptions = (format, pakName) => {
  return {
    format,
    exports: 'auto',
    file:
      format === 'es'
        ? `es/${getOutFileName(pakName)}/index.js`
        : `lib/${getOutFileName(pakName)}/index.js`,
    paths(id) {
      if (/^@radium-vue/.test(id)) {
        if (noPreFixFile.test(id)) {
          return id.replace('@radium-vue/', '../');
        } else {
          return id.replace('@radium-vue/', '../ra-');
        }
      }
    },
  };
};

async function build() {
  const paks = await getPackages();
  while (paks.length) {
    const pak = paks.shift();
    const pakName = pak.name.replace(/@radium-vue\//g, '');
    if (excludeFiles.some(_ => _ === pakName)) continue;
    console.log(pak.name);
    const inputOptions = {
      input: path.resolve(__dirname, `../../packages/${pakName}/index.ts`),
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
            exclude: ['node_modules', '__tests__', ''],
          },
          abortOnError: false,
        }),
      ],
      external(id) {
        return /^vue/.test(id) || deps.includes(id);
      },
    };

    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(getOutputOptions('es', pakName));
    await bundle.write(getOutputOptions('cjs', pakName));
  }
}

build().catch(console.log);
