"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  ThemeBox();
}
const ThemeBox = () => "../../components/theme-box/theme-box.js";
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(12, (item, k0, i0) => {
          return {
            a: "6bcfa975-0-" + i0
          };
        }),
        b: common_vendor.p({
          imageSrc: "../../common/images/preview_small.webp"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
