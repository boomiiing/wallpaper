"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0$1,
    b: common_vendor.p({
      type: "download-filled",
      size: "20",
      color: "#28b389"
    }),
    c: common_vendor.p({
      type: "right",
      size: "20",
      color: "#28b389"
    }),
    d: common_vendor.p({
      type: "star-filled",
      size: "20",
      color: "#28b389"
    }),
    e: common_vendor.p({
      type: "right",
      size: "20",
      color: "#28b389"
    }),
    f: common_vendor.p({
      type: "chatboxes-filled",
      size: "20",
      color: "#28b389"
    }),
    g: common_vendor.p({
      type: "right",
      size: "20",
      color: "#28b389"
    }),
    h: common_vendor.p({
      type: "download-filled",
      size: "20",
      color: "#28b389"
    }),
    i: common_vendor.p({
      type: "right",
      size: "20",
      color: "#28b389"
    }),
    j: common_vendor.p({
      type: "star-filled",
      size: "20",
      color: "#28b389"
    }),
    k: common_vendor.p({
      type: "right",
      size: "20",
      color: "#28b389"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
