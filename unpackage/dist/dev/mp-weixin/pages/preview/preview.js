"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
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
    function submitScore() {
    }
    const goBack = () => {
      common_vendor.index.navigateBack();
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
        e: common_vendor.o(goBack),
        f: common_vendor.unref(utils_system.statusBarHeight)() + "px",
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        i: common_vendor.p({
          type: "info",
          size: "25"
        }),
        j: common_vendor.o(($event) => toggle()),
        k: common_vendor.p({
          type: "star",
          size: "25"
        }),
        l: common_vendor.o(openCountPopup),
        m: common_vendor.p({
          type: "download",
          size: "25"
        }),
        n: common_vendor.unref(showFlag),
        o: common_vendor.p({
          type: "closeempty"
        }),
        p: common_vendor.o(closeInfo),
        q: common_vendor.o(($event) => common_vendor.isRef(rateValue) ? rateValue.value = $event : rateValue = $event),
        r: common_vendor.p({
          readonly: "true",
          modelValue: common_vendor.unref(rateValue)
        }),
        s: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        t: common_vendor.sr(popupBox, "2dad6c07-6", {
          "k": "popupBox"
        }),
        v: common_vendor.p({
          type: "closeempty"
        }),
        w: common_vendor.o(closeCount),
        x: common_vendor.o(($event) => rateCount.value = $event),
        y: common_vendor.p({
          margin: "5",
          size: "30",
          modelValue: rateCount.value
        }),
        z: common_vendor.t(rateCount.value),
        A: common_vendor.o(submitScore),
        B: common_vendor.sr(setCount, "2dad6c07-9", {
          "k": "setCount"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
