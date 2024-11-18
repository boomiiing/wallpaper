"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
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
  props: {
    title: {
      type: String,
      default: "壁纸"
    }
  },
  setup(__props) {
    const popup = common_vendor.ref(null);
    const openSearch = () => {
      popup.value.open("right");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(utils_system.statusBarHeight)() + "px",
        b: common_vendor.t(__props.title),
        c: common_vendor.p({
          type: "search",
          size: "20"
        }),
        d: common_vendor.o(openSearch),
        e: common_vendor.unref(utils_system.searchBarHeight)() + "px",
        f: common_vendor.unref(utils_system.statusFillHeight)() + "px",
        g: common_vendor.sr(popup, "412fc155-1", {
          "k": "popup"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-412fc155"]]);
wx.createComponent(Component);
