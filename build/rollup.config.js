import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import path from 'path';
import { getPackagesSync } from '@lerna/project';
import pkg from '../package.json';

const noElPrefixFile = /(utils|directives|hooks|locale)/;
const getOutFile = (name, dir = 'lib') => {
  const compName = name.split('@radium-vue/')[1];
  if (noElPrefixFile.test(name)) {
    return `${dir}/${compName}/index.js`;
  }
  return `${dir}/el-${compName}/index.js`;
};

const deps = Object.keys(pkg.dependencies);
const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name => name.includes('@radium-vue') && !name.includes('utils'));

export default inputs.map(name => ({
  input: path.resolve(
    __dirname,
    `../packages/${name.split('@radium-vue/')[1]}/index.ts`,
  ),
  output: [
    {
      format: 'es',
      file: getOutFile(name, 'es'),
      paths(id) {
        if (/^@radium-vue/.test(id)) {
          if (noElPrefixFile.test(id)) return id.replace('@radium-vue', '..');
          return id.replace('@radium-vue/', '../el-');
        }
      },
    },
    {
      format: 'cjs',
      file: getOutFile(name, 'lib'),
      exports: 'named',
      paths(id) {
        if (/^@radium-vue/.test(id)) {
          if (noElPrefixFile.test(id)) return id.replace('@radium-vue', '..');
          return id.replace('@radium-vue/', '../el-');
        }
      },
    },
  ],
  plugins: [
    css(),
    vue({
      target: 'browser',
      css: false,
    }),
    nodeResolve(),
    esbuild(),
  ],
  external(id) {
    return (
      /^vue/.test(id) ||
      /^@radium-vue/.test(id) ||
      deps.some(k => new RegExp('^' + k).test(id))
    );
  },
}));
