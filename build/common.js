//no 'ra-'
const noPreFixFile = RegExp(
  /(utils)|(radium-theme-chalk)|(locale)|(radium-vue)/,
);
module.exports.noPreFixFile = noPreFixFile;
