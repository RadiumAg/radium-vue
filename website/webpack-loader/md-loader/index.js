const markDownIt = require('markdown-it')();
//plugin
const markDownAnchor = require('markdown-it-anchor');
const markDownItChain = require('markdown-it-chain');

const render = require('./render');

module.exports = function(source = '') {
  const result = markDownIt.render(source);
  let renderResult = render(result);
  console.log(renderResult);
  return renderResult;
};
