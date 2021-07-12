/* eslint-disable @typescript-eslint/no-var-requires */

const toComponentRender = require('./render');
const mdInstanceFactory = require('./config');
module.exports = function(source = '') {
  const [renderInstance, componentObj] = mdInstanceFactory();
  const renderResult = renderInstance.render(source);
  const result = toComponentRender(renderResult, componentObj);
  return result;
};
