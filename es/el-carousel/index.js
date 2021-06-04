import { defineComponent } from 'vue';

var script = defineComponent({
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

export default _Carousel;
