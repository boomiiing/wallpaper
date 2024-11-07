"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_commen_title2 = common_vendor.resolveComponent("commen-title");
  const _easycom_theme_box2 = common_vendor.resolveComponent("theme-box");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_commen_title2 + _easycom_theme_box2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_commen_title = () => "../../components/commen-title/commen-title.js";
const _easycom_theme_box = () => "../../components/theme-box/theme-box.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_commen_title + _easycom_theme_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_vendor.p({
      type: "sound-filled",
      size: "25",
      color: "$uni-icon-color"
    }),
    e: common_vendor.p({
      type: "right",
      size: "20",
      color: "#000"
    }),
    f: common_vendor.p({
      type: "right",
      size: "20",
      color: "#000"
    }),
    g: common_vendor.p({
      type: "calendar-filled",
      size: "20"
    }),
    h: common_vendor.p({
      date: Date.now(),
      format: "dd号"
    }),
    i: common_assets._imports_0$1,
    j: common_assets._imports_0$1,
    k: common_assets._imports_0$1,
    l: common_assets._imports_0$1,
    m: common_assets._imports_0$1,
    n: common_assets._imports_0$1,
    o: common_assets._imports_0$1,
    p: common_vendor.f(8, (item, k0, i0) => {
      return {
        a: "1cf27b2a-7-" + i0
      };
    }),
    q: common_vendor.p({
      imageSrc: "../../common/images/preview_small.webp"
    }),
    r: common_vendor.p({
      imageSrc: "../../common/images/preview_small.webp",
      isMore: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
