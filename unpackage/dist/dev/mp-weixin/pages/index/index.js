"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + CommenTitle + ThemeBox)();
}
const CommenTitle = () => "../../components/commen-title/commen-title.js";
const ThemeBox = () => "../../components/theme-box/theme-box.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const goPreview = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_assets._imports_0,
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: common_vendor.p({
          type: "sound-filled",
          size: "25",
          color: "$uni-icon-color"
        }),
        f: common_vendor.p({
          type: "right",
          size: "20",
          color: "#000"
        }),
        g: common_vendor.p({
          type: "right",
          size: "20",
          color: "#000"
        }),
        h: common_vendor.p({
          type: "calendar-filled",
          size: "20"
        }),
        i: common_vendor.p({
          date: Date.now(),
          format: "dd号"
        }),
        j: common_vendor.f(8, (item, k0, i0) => {
          return {};
        }),
        k: common_assets._imports_0$1,
        l: common_vendor.o(goPreview),
        m: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: "1cf27b2a-8-" + i0
          };
        }),
        n: common_vendor.p({
          imageSrc: "../../common/images/preview_small.webp"
        }),
        o: common_vendor.p({
          imageSrc: "../../common/images/preview_small.webp",
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
