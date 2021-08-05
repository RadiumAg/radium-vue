/* eslint-disable @typescript-eslint/no-var-requires */

const rollup = require('rollup');
const path = require('path');
const pkg = require('../../package.json');
const vue = require('rollup-plugin-vue');
const typescript = require('rollup-plugin-typescript2');
const { getPackages } = require('@lerna/project');
const { noPreFixDir, noPreFixFile } = require('../common');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const deps = Object.keys(pkg.dependencies);
const excludeFiles = ['radium-theme-chalk', 'utils'];

const getOutFileName = name => {
  if (noPreFixDir.test(name)) {
    return name;
  }
  return 'ra-' + name;
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
              baseUrl: '../',
            },
            exclude: ['node_modules', '__tests__', ''],
          },
          abortOnError: false,
        }),
      ],
      external(id) {
        return /^vue/.test(id) || /^@radium-vue/.test(id) || deps.includes(id);
      },
    };

    const outputOptions = {
      format: 'esm',
      file: `lib/${getOutFileName(pakName)}/index.js`,
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
    const bundle = await rollup.rollup(inputOptions);
    await bundle.write(outputOptions);
  }
}

build();
