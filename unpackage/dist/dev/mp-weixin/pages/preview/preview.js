"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _component_uni_rate = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _component_uni_rate + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    let showFlag = common_vendor.ref(true);
    const maskShow = () => {
      showFlag.value = !showFlag.value;
    };
    let popupBox = common_vendor.ref(null);
    const toggle = () => {
      popupBox.value.open("bottom");
    };
    const closeInfo = () => {
      popupBox.value.close();
    };
    let rateValue = common_vendor.ref(3);
    const setCount = common_vendor.ref(null);
    const rateCount = common_vendor.ref(3);
    const openCountPopup = () => {
      setCount.value.open();
    };
    function closeCount() {
      setCount.value.close();
    }
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
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        g: common_vendor.p({
          type: "info",
          size: "25"
        }),
        h: common_vendor.o(($event) => toggle()),
        i: common_vendor.p({
          type: "star",
          size: "25"
        }),
        j: common_vendor.o(openCountPopup),
        k: common_vendor.p({
          type: "download",
          size: "25"
        }),
        l: common_vendor.unref(showFlag),
        m: common_vendor.p({
          type: "closeempty"
        }),
        n: common_vendor.o(closeInfo),
        o: common_vendor.o(($event) => common_vendor.isRef(rateValue) ? rateValue.value = $event : rateValue = $event),
        p: common_vendor.p({
          readonly: "true",
          modelValue: common_vendor.unref(rateValue)
        }),
        q: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        r: common_vendor.sr(popupBox, "2dad6c07-6", {
          "k": "popupBox"
        }),
        s: common_vendor.p({
          type: "closeempty"
        }),
        t: common_vendor.o(closeCount),
        v: common_vendor.o(($event) => rateCount.value = $event),
        w: common_vendor.p({
          margin: "5",
          size: "30",
          modelValue: rateCount.value
        }),
        x: common_vendor.t(rateCount.value),
        y: common_vendor.sr(setCount, "2dad6c07-9", {
          "k": "setCount"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
