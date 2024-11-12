"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    let showFlag = common_vendor.ref(true);
    const maskShow = () => {
      console.log("asd");
      showFlag.value = !showFlag.value;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.o(maskShow),
        d: common_vendor.p({
          type: "left",
          size: "30"
        }),
        e: common_vendor.p({
          type: "info",
          size: "25"
        }),
        f: common_vendor.p({
          type: "star",
          size: "25"
        }),
        g: common_vendor.p({
          type: "download",
          size: "25"
        }),
        h: common_vendor.unref(showFlag)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
