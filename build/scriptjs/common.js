//no 'ra-'
const noPreFixDir = new RegExp(
  /(utils)|(radium-theme-chalk)|(locale)|(radium-vue)/,
);
const noPreFixFile = new RegExp(/(utils)|(radium-theme-chalk)|(locale)/);
const rootFile = new RegExp(/^radium-vue/);

module.exports.noPreFixDir = noPreFixDir;
module.exports.noPreFixFile = noPreFixFile;
module.exports.rootFile = rootFile;
