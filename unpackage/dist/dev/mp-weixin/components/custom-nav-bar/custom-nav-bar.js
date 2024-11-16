"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "custom-nav-bar",
  setup(__props) {
    const popup = common_vendor.ref(null);
    const openSearch = () => {
      popup.value.open("right");
    };
    const system = common_vendor.index.getSystemInfoSync();
    const statusBarHeight = common_vendor.ref(system.statusBarHeight);
    const {
      top,
      height,
      bottom
    } = common_vendor.index.getMenuButtonBoundingClientRect();
    const searchBarHeight = common_vendor.ref(height + (top - statusBarHeight.value) * 2);
    const statusFillHeight = searchBarHeight.value + statusBarHeight.value;
    return (_ctx, _cache) => {
      return {
        a: statusBarHeight.value + "px",
        b: common_vendor.p({
          type: "search",
          size: "20"
        }),
        c: common_vendor.o(openSearch),
        d: searchBarHeight.value + "px",
        e: statusFillHeight + "px",
        f: common_vendor.sr(popup, "412fc155-1", {
          "k": "popup"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-412fc155"]]);
wx.createComponent(Component);
