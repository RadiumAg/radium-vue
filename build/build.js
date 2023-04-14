/* eslint-disable @typescript-eslint/no-var-requires */
const cp = require('child_process');
const path = require('path');
const ora = require('ora');
const chalk = require('chalk');

const scriptList = [
  path.resolve(__dirname, './scriptjs/build-component.js'),
  path.resolve(__dirname, './scriptjs/build-root.js'),
  path.resolve(__dirname, './scriptjs/build-utils.js'),
  path.resolve(__dirname, './scriptjs/gen-types.js'),
];

function build(scriptName) {
  const spinner = ora().start('Building...');
  const ps = cp.spawn('node', [scriptName]);

  ps.on('close', code => {
    spinner.succeed('builder done');
    console.log(`ps process exited with code ${code}`);
    scriptList.length && build(scriptList.shift());
  });

  ps.stderr.on('data', data => {
    spinner.warn(`${chalk.red(data)}`);
  });

  ps.stdout.on('data', data => {
    spinner.info(`${chalk.blue(data)}`);
  });
}

build(scriptList.shift());
