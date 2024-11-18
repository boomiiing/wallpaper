"use strict";
const common_vendor = require("../common/vendor.js");
const system = common_vendor.index.getSystemInfoSync();
const statusBarHeight = () => system.statusBarHeight || 0;
const {
  top,
  height
} = (() => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    return common_vendor.index.getMenuButtonBoundingClientRect();
  } else {
    return {
      top: 0,
      height: 40
    };
  }
})();
const searchBarHeight = () => height + (top - statusBarHeight()) * 2;
const statusFillHeight = () => searchBarHeight() + statusBarHeight();
exports.searchBarHeight = searchBarHeight;
exports.statusBarHeight = statusBarHeight;
exports.statusFillHeight = statusFillHeight;
