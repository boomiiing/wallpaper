"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "commen-title",
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.r("title", {
      class: "title"
    }),
    b: common_vendor.r("infos", {
      class: "infos"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2177a356"]]);
wx.createComponent(Component);
