(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/carousel.md?vue&type=template&id=a0251106

var carouselvue_type_template_id_a0251106_hoisted_1 = {
  "class": "content element-doc"
};

var carouselvue_type_template_id_a0251106_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h1", null, "走马灯", -1);

var carouselvue_type_template_id_a0251106_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "轮播组件，但是当前这个还较为简单", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "使用ra-carousel 和ra-carousel-item 形成一个走马灯")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  "class": "html"
}, "  <div class=\"block\">\n    <span class=\"demonstration\">默认设置</span>\n    <ra-carousel \n        raHeight=\"150px\" \n        :raInterval=\"1000\"     \n        :raAutoplay=\"true\">\n        <ra-carousel-item v-for=\"item in 4\" :key=\"item\" style=\"background:grey;\">\n               <h3 class=\"small\">{{ item }}</h3>\n      </ra-carousel-item>\n    </ra-carousel>\n  </div>\n")], -1);

function carouselvue_type_template_id_a0251106_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_radium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("radium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", carouselvue_type_template_id_a0251106_hoisted_1, [carouselvue_type_template_id_a0251106_hoisted_2, carouselvue_type_template_id_a0251106_hoisted_3, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [Object(vue_esm_browser["n" /* createVNode */])(_component_radium_demo0)];
    }),
    highlight: Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_5];
    }),
    "default": Object(vue_esm_browser["db" /* withCtx */])(function () {
      return [_hoisted_4];
    }),
    _: 1
  }), Object(vue_esm_browser["n" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md?vue&type=template&id=a0251106

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(440);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/carousel.md?vue&type=script&lang=ts


/* harmony default export */ var carouselvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "radium-demo0": function () {
      var _createVNode = vue_esm_browser["n" /* createVNode */],
          _renderList = vue_esm_browser["M" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */],
          _toDisplayString = vue_esm_browser["S" /* toDisplayString */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */];
      var _hoisted_1 = {
        "class": "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        "class": "demonstration"
      }, "默认设置", -1);

      var _hoisted_3 = {
        "class": "small"
      };

      function render(_ctx, _cache) {
        var _component_ra_carousel_item = _resolveComponent("ra-carousel-item");

        var _component_ra_carousel = _resolveComponent("ra-carousel");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_ra_carousel, {
          raHeight: "150px",
          raInterval: 1000,
          raAutoplay: true
        }, {
          "default": _withCtx(function () {
            return [(_openBlock(), _createBlock(_Fragment, null, _renderList(4, function (item) {
              return _createVNode(_component_ra_carousel_item, {
                key: item,
                style: {
                  "background": "grey"
                }
              }, {
                "default": _withCtx(function () {
                  return [_createVNode("h3", _hoisted_3, _toDisplayString(item), 1)];
                }),
                _: 2
              }, 1024);
            }), 64))];
          }),
          _: 1
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/carousel.md



carouselvue_type_script_lang_ts.render = carouselvue_type_template_id_a0251106_render

/* harmony default export */ var carousel = __webpack_exports__["default"] = (carouselvue_type_script_lang_ts);

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ })

}]);