const ora = require('ora');
const chalk = require('chalk');
const cp = require('child_process');
const path = require('path');
const spinner = ora().start('Building...');
const ps = cp.spawn('node', [path.resolve(__dirname, './build-component.js')]);

ps.on('close', code => {
  spinner.succeed('builder done');
  console.log(`ps process exited with code ${code}`);
});

ps.stderr.on('data', data => {
  spinner.warn(`${chalk.red(data)}`);
});

ps.stdout.on('data', data => {
  spinner.info(`${chalk.blue(data)}`);
});
