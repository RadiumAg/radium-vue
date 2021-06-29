const Config = require('markdown-it-chain');
const markDownAnchor = require('markdown-it-anchor');

module.exports = () => {
  const md = new Config();
  md.options
    .html(true)
    .linkify(true)
    .end()
    .plugin('achor')
    .use(markDownAnchor, [
      {
        permalink: true,
        permalinkBefore: true,
      },
    ])
    .end()
    .plugin('container')
    .use();

  return md.toMd();
};
