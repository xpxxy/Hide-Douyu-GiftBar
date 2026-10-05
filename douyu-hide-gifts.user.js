// ==UserScript==
// @name         斗鱼隐藏礼物栏并扩展播放器
// @namespace    douyu-personal
// @version      1.0.0
// @description  隐藏观看页下方的礼物栏，让播放器填满空出的区域，支持普通模式和网页全屏。
// @match        https://www.douyu.com/*
// @match        https://douyu.com/*
// @run-at       document-start
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    // 房间号和自定义房间地址都是一级路径；首页、分区等多级路径不运行。
    if (!/^\/[a-zA-Z0-9_-]+\/?$/.test(location.pathname)) return;

    GM_addStyle(`
        /* 匹配完整 class token 的前缀，不依赖构建时生成的哈希后缀。 */
        [class^="interactive__"],
        [class*=" interactive__"] {
            display: none !important;
        }

        [class^="stream__"],
        [class*=" stream__"] {
            bottom: 0 !important;
        }
    `);

    // CSS 会自动应用到之后挂载或更换 class 的节点，切换网页全屏无需重新执行。
})();
