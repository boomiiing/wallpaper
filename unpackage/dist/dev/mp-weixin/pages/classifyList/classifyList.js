"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "classifyList",
  setup(__props) {
    const goPreview = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(11, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$3,
        c: common_vendor.o(goPreview)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d7121c9c"]]);
wx.createPage(MiniProgramPage);
