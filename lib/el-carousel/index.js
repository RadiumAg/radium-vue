'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "carousel"
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null;
}

script.render = render;
script.__file = "packages/carousel/src/carousel.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Carousel = script;

exports.default = _Carousel;
