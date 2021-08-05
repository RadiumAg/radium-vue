//no 'ra-'
const noPreFixDir = RegExp(
  /(utils)|(radium-theme-chalk)|(locale)|(radium-vue)/,
);
const noPreFixFile = RegExp(/(utils)|(radium-theme-chalk)|(locale)/);
const rootFile = RegExp(/^radium-vue/);

module.exports.noPreFixDir = noPreFixDir;
module.exports.noPreFixFile = noPreFixFile;
module.exports.rootFile = rootFile;
