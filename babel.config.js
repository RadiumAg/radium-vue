const { resolve } = require('path');

__dirname;
module.exports = {
  // ATTENTION!!
  // Preset ordering is reversed, so `@babel/typescript` will called first
  // Do not put `@babel/typescript` before `@babel/env`, otherwise will cause a compile error
  // See https://github.com/babel/babel/issues/12066
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入 polyfill
        corejs: 3,
      },
    ],
    [
      '@babel/preset-typescript', // 引用Typescript插件
      {
        allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
      },
    ],
  ],
  plugins: [
    '@vue/babel-plugin-jsx',
    '@babel/proposal-class-properties',
    '@babel/transform-runtime',
    'lodash',
    [
      'module-resolver',
      {
        alias: {
          Pages: resolve(__dirname, './website/src/pages'),
          Docs: resolve(__dirname, './website/src/docs'),
        },
      },
    ],
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ['@babel/transform-typescript'],
    },
  ],
  env: {
    utils: {
      ignore: ['**/*.test.ts', '**/*.spec.ts'],
      presets: [
        [
          '@babel/env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['radium-vue'],
            alias: {
              '@radium-vue': 'radium-vue/lib',
            },
          },
        ],
      ],
    },
  },
};
