!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=0)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var o,a={},i={},c=[],s=[],u=!1;a.install=function(e,t){s=[].concat(r(t&&t.prevent?t.prevent:[])),e.directive("shortkey",{bind:function(e,t,n){var r="string"==typeof t.value?JSON.parse(t.value.replace(/\'/gi,'"')):t.value,o=!0===t.modifiers.push,a=!0===t.modifiers.avoid,i=!0===t.modifiers.focus,s=!0===t.modifiers.once;a?c.push(e):f({b:r,pushButton:o,once:s,focus:i,el:n.elm})},unbind:function(e,t){var n=[];if((n="string"==typeof t.value?JSON.parse(t.value.replace(/\'/gi,'"')):t.value)instanceof Array){var r=n.join("");i[r].el===e&&delete i[r]}else for(var o in n){var a=n[o].join("");i[a].el===e&&delete i[a]}c=c.filter(function(t){return!t===e})}})},a.decodeKey=function(e){var t="";return("Shift"===e.key||e.shiftKey)&&(t+="shift"),("Control"===e.key||e.ctrlKey)&&(t+="ctrl"),("Meta"===e.key||e.metaKey)&&(t+="meta"),("Alt"===e.key||e.altKey)&&(t+="alt"),"ArrowUp"===e.key&&(t+="arrowup"),"ArrowLeft"===e.key&&(t+="arrowleft"),"ArrowRight"===e.key&&(t+="arrowright"),"ArrowDown"===e.key&&(t+="arrowdown"),"AltGraph"===e.key&&(t+="altgraph"),"Escape"===e.key&&(t+="esc"),"Enter"===e.key&&(t+="enter"),"Tab"===e.key&&(t+="tab")," "===e.key&&(t+="space"),"PageUp"===e.key&&(t+="pageup"),"PageDown"===e.key&&(t+="pagedown"),"Home"===e.key&&(t+="home"),"End"===e.key&&(t+="end"),"Delete"===e.key&&(t+="del"),"Insert"===e.key&&(t+="insert"),"NumLock"===e.key&&(t+="numlock"),"CapsLock"===e.key&&(t+="capslock"),"Pause"===e.key&&(t+="pause"),"ContextMenu"===e.key&&(t+="contextmenu"),"ScrollLock"===e.key&&(t+="scrolllock"),"BrowserHome"===e.key&&(t+="browserhome"),"MediaSelect"===e.key&&(t+="mediaselect"),(e.key&&" "!==e.key&&1===e.key.length||/F\d{1,2}|\//g.test(e.key))&&(t+=e.key.toLowerCase()),t},a.keyDown=function(e){if(!i[e].oc&&!i[e].ps||i[e].ps&&!u){var t=new Event("shortkey",{bubbles:!1});i[e].key&&(t.srcKey=i[e].key),i[e].el.dispatchEvent(t)}},a.keyUp=function(e){var t=new Event("shortkey",{bubbles:!1});i[e].key&&(t.srcKey=i[e].key),i[e].el.dispatchEvent(t)},function(){document.addEventListener("keydown",function(e){var t=a.decodeKey(e);l(e)&&(e.preventDefault(),e.stopPropagation(),i[t].fn?(a.keyDown(t),u=!0):u||(i[t].el.focus(),u=!0))},!0),document.addEventListener("keyup",function(e){var t=a.decodeKey(e);l(e)&&(e.preventDefault(),e.stopPropagation(),(i[t].oc||i[t].ps)&&a.keyUp(t)),u=!1},!0)}();var f=function(e){var t=e.b,n=e.pushButton,r=e.once,o=e.focus,a=e.el;if(t instanceof Array){var c=t.join("");i[c]={ps:n,oc:r,fn:!o,el:a}}else for(var s in t){var u=t[s].join("");i[u]={ps:n,oc:r,fn:!o,el:a,key:s}}},l=function(e){var t=a.decodeKey(e),n=c.find(function(e){return e===document.activeElement}),r=y(),o=r.avoidedTypes,s=r.avoidedClasses,u=o.find(function(e){return e===document.activeElement&&document.activeElement.tagName.toLowerCase()}),f=s.find(function(e){return e==="."+document.activeElement&&document.activeElement.className.toLowerCase()});return!n&&i[t]&&!u&&!f},y=function(){var e=[],t=[];return s.forEach(function(n){var r=n.indexOf(".");0===r?t.push(n):r>0?(e.push(n.split(".")[0]),t.push("."+n.split(".")[1])):e.push(n)}),{avoidedTypes:e,avoidedClasses:t}};void 0!==e&&e.exports?e.exports=a:void 0!==(o=function(){return a}.call(t,n,t,e))&&(e.exports=o)}])});
//# sourceMappingURL=index.js.map