//plugin
const toComponentRender = require('./render');
const mdInstanceFactory = require('./config');
module.exports = function(source = '') {
  const renderResult = toComponentRender(mdInstanceFactory().render(source));
  return renderResult;
};
