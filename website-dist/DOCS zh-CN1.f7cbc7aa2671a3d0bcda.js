(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/grid.md?vue&type=template&id=692825ee

var gridvue_type_template_id_692825ee_hoisted_1 = {
  "class": "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("h1", null, "栅格布局", -1);

var _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "栅格布局，参考了ng-zorro", -1);

var _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("p", null, "栅格布局")], -1);

var _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createVNode */])("code", {
  "class": "html"
}, "     <ra-row ra-justify=\"flex-start\" class=\"el-row\">\n       <ra-col :ra-span=\"24\" class=\"el-col\">\n           <div class=\"grid-content bg-purple\"></div>  \n       </ra-col>\n    </ra-row>\n    <ra-row ra-justify=\"flex-start\" class=\"el-row\">\n       <ra-col :ra-span=\"5\" class=\"el-col bg-purple-dark bg-purple\"></ra-col>\n       <ra-col :ra-span=\"5\" class=\"el-col\"></ra-col>\n       <ra-col :ra-span=\"5\" class=\"el-col\"></ra-col>\n    </ra-row>\n\n<style>\n  .el-row {\n    margin-bottom: 20px;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n  .el-col {\n    border-radius: 4px;\n  }\n  .bg-purple-dark {\n    background: #99a9bf;\n  }\n  .bg-purple {\n    background: #d3dce6;\n  }\n  .bg-purple-light {\n    background: #e5e9f2;\n  }\n  .grid-content {\n    border-radius: 4px;\n    min-height: 36px;\n  }\n  .row-bg {\n    padding: 10px 0;\n    background-color: #f9fafc;\n  }\n</style>\n")], -1);

function gridvue_type_template_id_692825ee_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_radium_demo0 = Object(vue_esm_browser["O" /* resolveComponent */])("radium-demo0");

  var _component_demo_block = Object(vue_esm_browser["O" /* resolveComponent */])("demo-block");

  var _component_right_nav = Object(vue_esm_browser["O" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["F" /* openBlock */])(), Object(vue_esm_browser["i" /* createBlock */])("section", gridvue_type_template_id_692825ee_hoisted_1, [_hoisted_2, _hoisted_3, Object(vue_esm_browser["n" /* createVNode */])(_component_demo_block, null, {
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
// CONCATENATED MODULE: ./website/docs/zh-CN/grid.md?vue&type=template&id=692825ee

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(440);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/zh-CN/grid.md?vue&type=script&lang=ts


/* harmony default export */ var gridvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "radium-demo0": function () {
      var _createVNode = vue_esm_browser["n" /* createVNode */],
          _resolveComponent = vue_esm_browser["O" /* resolveComponent */],
          _withCtx = vue_esm_browser["db" /* withCtx */],
          _openBlock = vue_esm_browser["F" /* openBlock */],
          _createBlock = vue_esm_browser["i" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createVNode("div", {
        "class": "grid-content bg-purple"
      }, null, -1);

      function render(_ctx, _cache) {
        var _component_ra_col = _resolveComponent("ra-col");

        var _component_ra_row = _resolveComponent("ra-row");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_ra_row, {
          "ra-justify": "flex-start",
          "class": "el-row"
        }, {
          "default": _withCtx(function () {
            return [_createVNode(_component_ra_col, {
              "ra-span": 24,
              "class": "el-col"
            }, {
              "default": _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            })];
          }),
          _: 1
        }), _createVNode(_component_ra_row, {
          "ra-justify": "flex-start",
          "class": "el-row"
        }, {
          "default": _withCtx(function () {
            return [_createVNode(_component_ra_col, {
              "ra-span": 5,
              "class": "el-col bg-purple-dark bg-purple"
            }), _createVNode(_component_ra_col, {
              "ra-span": 5,
              "class": "el-col"
            }), _createVNode(_component_ra_col, {
              "ra-span": 5,
              "class": "el-col"
            })];
          }),
          _: 1
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/zh-CN/grid.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/zh-CN/grid.md



gridvue_type_script_lang_ts.render = gridvue_type_template_id_692825ee_render

/* harmony default export */ var grid = __webpack_exports__["default"] = (gridvue_type_script_lang_ts);

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