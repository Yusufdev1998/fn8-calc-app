(()=>{"use strict";var __webpack_modules__={999:(_,e,t)=>{function r(_){Object.keys(_).forEach((function(e){document.documentElement.style.setProperty(e,_[e])}))}t.d(e,{D:()=>r,n:()=>n});const n=[{"--body-bg":"#3a4663","--board-bg":"#242d44","--equal-btn-bg":"#d03f2f","--equal-btn-shadow":"#93261a","--input-bg":"#181f33","--number-bg":"#eae3dc","--number-shadow":"#b3a497","--number-color":"#434a59","--del-btn-color":"white","--del-btn-bg":"#647198","--del-btn-shadow":"#414e73","--main-color":"#fff","--equal-btn-hover":"#f96b5b","--del-btn-hover":"#a2b2e1","--number-hover":"#fffffe"},{"--body-bg":"#E6E6E6","--main-color":"#36362C","--board-bg":"#D2CDCD","--equal-btn-bg":"#C85402","--equal-btn-shadow":"#873901","--input-bg":"#EEEEEE","--number-bg":"#E5E4E1","--number-shadow":"#A79E91","--number-color":"#36362C","--del-btn-color":"white","--del-btn-bg":"#378187","--del-btn-shadow":"#1B6066","--equal-btn-hover":"#FF8A38","--del-btn-hover":"#62B5BC","--number-hover":"#FFFFFF"}]},914:(_,e,t)=>{t.d(e,{Cj:()=>s,MP:()=>o,TX:()=>n,Z6:()=>u,bG:()=>c,cK:()=>r,m7:()=>E});const r=document.querySelector("#switch"),n=document.querySelector("#circle"),u=document.querySelector("#input"),E=document.querySelector("#del-btn"),o=document.querySelector("#equal-btn"),s=document.querySelector("#reset-btn"),c=document.querySelectorAll("#number")}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(_,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(_,t)&&Object.defineProperty(_,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(_,e)=>Object.prototype.hasOwnProperty.call(_,e);var __webpack_exports__={};(()=>{var _js_theme_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(999),_js_ui_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(914);let state={theme:0};_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.cK.addEventListener("click",(function(){0==state.theme?((0,_js_theme_js__WEBPACK_IMPORTED_MODULE_0__.D)(_js_theme_js__WEBPACK_IMPORTED_MODULE_0__.n[1]),state.theme=1,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.TX.style.transform="translateX(20px)"):1==state.theme&&((0,_js_theme_js__WEBPACK_IMPORTED_MODULE_0__.D)(_js_theme_js__WEBPACK_IMPORTED_MODULE_0__.n[0]),state.theme=0,_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.TX.style.transform="translateX(0)")})),_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.bG.forEach((function(_){_.addEventListener("click",(function(){_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Z6.value=_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Z6.value+_.textContent}))})),_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.m7.addEventListener("click",(function(){_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Z6.value=_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Z6.value.slice(0,-1)})),_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.MP.addEventListener("click",(function(){_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Z6.value=eval(_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Z6.value)})),_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Cj.addEventListener("click",(function(){_js_ui_js__WEBPACK_IMPORTED_MODULE_1__.Z6.value=""}))})()})();