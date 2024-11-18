"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  _easycom_custom_nav_bar2();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
if (!Math) {
  (_easycom_custom_nav_bar + ThemeBox)();
}
const ThemeBox = () => "../../components/theme-box/theme-box.js";
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(14, (item, k0, i0) => {
          return {
            a: "6bcfa975-1-" + i0
          };
        }),
        c: common_vendor.p({
          imageSrc: "../../common/images/preview_small.webp"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
