// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(t){return"number"==typeof t}function r(t){var e,n="";for(e=0;e<t;e++)n+="0";return n}function i(t,e,n){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+r(o):r(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var e,r,u;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,u=parseInt(r,10),!isFinite(u)){if(!n(r))throw new Error("invalid integer. Value: "+r);u=0}return u<0&&("u"===t.specifier||10!==e)&&(u=4294967295+u+1),u<0?(r=(-u).toString(e),t.precision&&(r=i(r,t.precision,t.padRight)),r="-"+r):(r=u.toString(e),u||t.precision?t.precision&&(r=i(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===a.call(t.specifier)?a.call(r):o.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function c(t){return"string"==typeof t}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,m=/\.0*e/,v=/(\..*[^0])0*e/;function w(t){var e,r,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+r);i=t.arg}switch(t.specifier){case"e":case"E":r=i.toExponential(t.precision);break;case"f":case"F":r=i.toFixed(t.precision);break;case"g":case"G":l(i)<1e-4?((e=t.precision)>0&&(e-=1),r=i.toExponential(e)):r=i.toPrecision(t.precision),t.alternate||(r=p.call(r,v,"$1e"),r=p.call(r,m,"e"),r=p.call(r,h,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=p.call(r,g,"e+0$1"),r=p.call(r,y,"e-0$1"),t.alternate&&(r=p.call(r,d,"$1."),r=p.call(r,b,"$1.e")),i>=0&&t.sign&&(r=t.sign+r),r=t.specifier===s.call(t.specifier)?s.call(r):f.call(r)}function E(t){var e,n="";for(e=0;e<t;e++)n+=" ";return n}function j(t,e,n){var r=e-t.length;return r<0?t:t=n?t+E(r):E(r)+t}var _=String.fromCharCode,x=isNaN,O=Array.isArray;function T(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function S(t){var e,n,r,o,a,l,f,s,p;if(!O(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(l="",f=1,s=0;s<t.length;s++)if(c(r=t[s]))l+=r;else{if(e=void 0!==r.precision,!(r=T(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+r+"`.");for(r.mapping&&(f=r.mapping),n=r.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===r.width){if(r.width=parseInt(arguments[f],10),f+=1,x(r.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(e&&"*"===r.precision){if(r.precision=parseInt(arguments[f],10),f+=1,x(r.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,e=!1)}switch(r.arg=arguments[f],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(r.padZeros=!1),r.arg=u(r);break;case"s":r.maxWidth=e?r.precision:-1;break;case"c":if(!x(r.arg)){if((a=parseInt(r.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=x(a)?String(r.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(r.precision=6),r.arg=w(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=i(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=j(r.arg,r.width,r.padRight)),l+=r.arg||"",f+=1}return l}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function V(t){var e,n,r,i;for(n=[],i=0,r=A.exec(t);r;)(e=t.slice(i,A.lastIndex-r[0].length)).length&&n.push(e),n.push(F(r)),i=A.lastIndex,r=A.exec(t);return(e=t.slice(i)).length&&n.push(e),n}function k(t){return"string"==typeof t}function P(t){var e,n,r;if(!k(t))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=V(t),(n=new Array(arguments.length))[0]=e,r=1;r<n.length;r++)n[r]=arguments[r];return S.apply(null,n)}var I,N=Object.prototype,L=N.toString,B=N.__defineGetter__,R=N.__defineSetter__,$=N.__lookupGetter__,C=N.__lookupSetter__;I=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,n){var r,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===L.call(n))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(t,e)||C.call(t,e)?(r=t.__proto__,t.__proto__=N,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&B&&B.call(t,e,n.get),a&&R&&R.call(t,e,n.set),t};var M=I;function Y(t,e,n){M(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var G=/./;function W(t){return"boolean"==typeof t}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,H=Object.prototype.hasOwnProperty;function z(t,e){return null!=t&&H.call(t,e)}var D="function"==typeof Symbol?Symbol:void 0,q="function"==typeof D?D.toStringTag:"",J=X()?function(t){var e,n,r;if(null==t)return Z.call(t);n=t[q],e=z(t,q);try{t[q]=void 0}catch(e){return Z.call(t)}return r=Z.call(t),e?t[q]=n:delete t[q],r}:function(t){return Z.call(t)},K=Boolean,Q=Boolean.prototype.toString,tt=X();function et(t){return"object"==typeof t&&(t instanceof K||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===J(t)))}function nt(t){return W(t)||et(t)}function rt(){return new Function("return this;")()}Y(nt,"isPrimitive",W),Y(nt,"isObject",et);var it="object"==typeof self?self:null,ot="object"==typeof window?window:null,at="object"==typeof globalThis?globalThis:null,ut=function(t){if(arguments.length){if(!W(t))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return rt()}if(at)return at;if(it)return it;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")}(),ct=ut.document&&ut.document.childNodes,lt=Int8Array;function ft(){return/^\s*function\s*([^(]*)/i}var st=/^\s*function\s*([^(]*)/i;Y(ft,"REGEXP",st);var pt=Array.isArray?Array.isArray:function(t){return"[object Array]"===J(t)};function gt(t){return null!==t&&"object"==typeof t}function yt(t){var e,n,r,i;if(("Object"===(n=J(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=st.exec(r.toString()))return e[1]}return gt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}Y(gt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var n,r;if(!pt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(gt));var dt="function"==typeof G||"object"==typeof lt||"function"==typeof ct?function(t){return yt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?yt(t).toLowerCase():e};function bt(t){return"function"===dt(t)}function ht(t){return"number"==typeof t}var mt=Number,vt=mt.prototype.toString,wt=X();function Et(t){return"object"==typeof t&&(t instanceof mt||(wt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===J(t)))}function jt(t){return ht(t)||Et(t)}Y(jt,"isPrimitive",ht),Y(jt,"isObject",Et);var _t=Number.POSITIVE_INFINITY,xt=mt.NEGATIVE_INFINITY,Ot=Math.floor;function Tt(t){return Ot(t)===t}function St(t){return t<_t&&t>xt&&Tt(t)}function At(t){return ht(t)&&St(t)}function Ft(t){return Et(t)&&St(t.valueOf())}function Vt(t){return At(t)||Ft(t)}function kt(t){return At(t)&&t>=0}function Pt(t){return Ft(t)&&t.valueOf()>=0}function It(t){return kt(t)||Pt(t)}Y(Vt,"isPrimitive",At),Y(Vt,"isObject",Ft),Y(It,"isPrimitive",kt),Y(It,"isObject",Pt);var Nt=9007199254740991;function Lt(t){return null!==t&&"object"==typeof t&&kt(t.length)&&t.length<=Nt&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength}function Bt(t){return Object.keys(Object(t))}var Rt,$t=void 0!==Object.keys;function Ct(t){return"[object Arguments]"===J(t)}Rt=function(){return Ct(arguments)}();var Mt=Rt;function Yt(t){return"string"==typeof t}var Gt=String.prototype.valueOf,Wt=X();function Ut(t){return"object"==typeof t&&(t instanceof String||(Wt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object String]"===J(t)))}function Xt(t){return Yt(t)||Ut(t)}function Zt(t){return t!=t}function Ht(t){return ht(t)&&Zt(t)}function zt(t){return Et(t)&&Zt(t.valueOf())}function Dt(t){return Ht(t)||zt(t)}Y(Xt,"isPrimitive",Yt),Y(Xt,"isObject",Ut),Y(Dt,"isPrimitive",Ht),Y(Dt,"isObject",zt);var qt=Object.prototype.propertyIsEnumerable,Jt=!qt.call("beep","0");function Kt(t,e){var n;return null!=t&&(!(n=qt.call(t,e))&&Jt&&Xt(t)?!Ht(e=+e)&&At(e)&&e>=0&&e<t.length:n)}var Qt=Mt?Ct:function(t){return null!==t&&"object"==typeof t&&!pt(t)&&"number"==typeof t.length&&Tt(t.length)&&t.length>=0&&t.length<=4294967295&&z(t,"callee")&&!Kt(t,"callee")},te=Array.prototype.slice,ee=Kt((function(){}),"prototype"),ne=!Kt({toString:null},"toString");function re(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Tt(t.length)&&t.length>=0&&t.length<=Nt}function ie(t,e,n){var r,i;if(!re(t)&&!Yt(t))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!At(n))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=r)return-1;i=n}else(i=r+n)<0&&(i=0)}else i=0;if(Dt(e)){for(;i<r;i++)if(Dt(t[i]))return i}else for(;i<r;i++)if(t[i]===e)return i;return-1}function oe(t){return t.constructor&&t.constructor.prototype===t}var ae,ue=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ce="undefined"==typeof window?void 0:window,le=function(){var t;if("undefined"===dt(ce))return!1;for(t in ce)try{-1===ie(ue,t)&&z(ce,t)&&null!==ce[t]&&"object"===dt(ce[t])&&oe(ce[t])}catch(t){return!0}return!1}(),fe="undefined"!=typeof window,se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ae=$t?function(){return 2!==(Bt(arguments)||"").length}(1,2)?function(t){return Qt(t)?Bt(te.call(t)):Bt(t)}:Bt:function(t){var e,n,r,i,o,a,u;if(i=[],Qt(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!z(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(0==(r="function"==typeof t)&&!gt(t))return i;n=ee&&r}for(o in t)n&&"prototype"===o||!z(t,o)||i.push(String(o));if(ne)for(e=function(t){if(!1===fe&&!le)return oe(t);try{return oe(t)}catch(t){return!1}}(t),u=0;u<se.length;u++)a=se[u],e&&"constructor"===a||!z(t,a)||i.push(String(a));return i};var pe,ge=ae,ye=Object,de=Object.getPrototypeOf;pe=bt(Object.getPrototypeOf)?de:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===J(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var be=pe,he=Object.prototype;function me(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!pt(t)}(t)&&(e=function(t){return null==t?null:(t=ye(t),be(t))}(t),!e||!z(t,"constructor")&&z(e,"constructor")&&bt(e.constructor)&&"[object Function]"===J(e.constructor)&&z(e,"isPrototypeOf")&&bt(e.isPrototypeOf)&&(e===he||function(t){var e;for(e in t)if(!z(t,e))return!1;return!0}(t)))}var ve=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function we(){return ve.slice()}var Ee={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function je(){var t;return 0===arguments.length?Ee.all.slice():(t=Ee[arguments[0]])?t.slice():[]}function _e(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function xe(t,e,n){M(t,e,{configurable:!1,enumerable:!0,writable:!1,value:n})}Y(je,"enum",_e),function(t,e){var n,r,i;for(n=ge(e),i=0;i<n.length;i++)xe(t,r=n[i],e[r])}(je,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Oe={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Te(){return{bool:Oe.bool,int8:Oe.int8,uint8:Oe.uint8,uint8c:Oe.uint8c,int16:Oe.int16,uint16:Oe.uint16,int32:Oe.int32,uint32:Oe.uint32,int64:Oe.int64,uint64:Oe.uint64,float32:Oe.float32,float64:Oe.float64,complex64:Oe.complex64,complex128:Oe.complex128,binary:Oe.binary,generic:Oe.generic,notype:Oe.notype,userdefined_type:Oe.userdefined_type}}Y(we,"enum",Te),function(t,e){var n,r,i;for(n=ge(e),i=0;i<n.length;i++)xe(t,r=n[i],e[r])}(we,Te());var Se=function(t,e){var n,r,i,o,a,u,c,l=!0;if(!gt(t))throw new TypeError(P("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!me(e))throw new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",e));if(z(e,"duplicates")&&!W(l=e.duplicates))throw new TypeError(P("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",l))}if(r=(n=ge(t)).length,a={},l)for(c=0;c<r;c++)z(a,o=t[i=n[c]])?(u=a[o],pt(u)?a[o].push(i):a[o]=[u,i]):a[o]=i;else for(c=0;c<r;c++)a[t[i=n[c]]]=i;return a}(Te(),{duplicates:!1}),Ae=Te();function Fe(t){var e=typeof t;return"number"===e?function(t){var e=Se[t];return"string"==typeof e?e:null}(t)?t:null:"string"===e?function(t){var e=Ae[t];return"number"==typeof e?e:null}(t):null}var Ve,ke="function"==typeof Float32Array,Pe="function"==typeof Float32Array?Float32Array:null,Ie="function"==typeof Float32Array?Float32Array:void 0;Ve=function(){var t,e,n;if("function"!=typeof Pe)return!1;try{e=new Pe([1,3.14,-3.14,5e40]),n=e,t=(ke&&n instanceof Float32Array||"[object Float32Array]"===J(n))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===_t}catch(e){t=!1}return t}()?Ie:function(){throw new Error("not implemented")};var Ne=Ve;function Le(t,e){return new Ne(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*e,2*(t.length-e))}var Be,Re="function"==typeof Float64Array,$e="function"==typeof Float64Array?Float64Array:null,Ce="function"==typeof Float64Array?Float64Array:void 0;Be=function(){var t,e,n;if("function"!=typeof $e)return!1;try{e=new $e([1,3.14,-3.14,NaN]),n=e,t=(Re&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Ce:function(){throw new Error("not implemented")};var Me=Be;function Ye(t,e){return new Me(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*e,2*(t.length-e))}var Ge=Fe("complex64"),We=Fe("complex128");function Ue(t,e){if(!bt(t))throw new TypeError(P("invalid argument. First argument must be a function. Value: `%s`.",t));if(!bt(e))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",e));return function(n,r,i,o,a,u,c,l,f,s){var p,g;if(!Lt(i)||!Lt(f)||!Lt(u))return e(n,r,i,o,a,u,c,l,f,s),f;if(r=Fe(r),l=Fe(l),a=Fe(a),null===r||null===l||null===a)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return p=r===Ge?Le(i,0):r===We?Ye(i,0):i,g=l===Ge?Le(f,0):l===We?Ye(f,0):f,t(n,r,p,o,a,u,c,l,g,s),f}}function Xe(t,e){return new t.constructor(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*e,t.length-e)}function Ze(t,e,n){return t>0&&e<0&&(n+=(t-1)*e),n}var He=Fe("complex64"),ze=Fe("complex128");return Y(Ue,"ndarray",(function(t,e){if(!bt(t))throw new TypeError(P("invalid argument. First argument must be a function. Value: `%s`.",t));if(!bt(e))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",e));return function(n,r,i,o,a,u,c,l,f,s,p,g,y){var d,b,h;if(!Lt(i)||!Lt(p)||!Lt(c))return e(n,r,i,o,a,u,c,l,f,s,p,g,y),p;if(r=Fe(r),s=Fe(s),u=Fe(u),null===r||null===s||null===u)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!kt(a))throw new TypeError(P("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",a));if(!kt(y))throw new TypeError(P("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",y));if(!kt(f))throw new TypeError(P("invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.",f));return a=Ze(n,o,a),y=Ze(n,g,y),f=Ze(n,l,f),b=r===He?Le(i,a):r===ze?Ye(i,a):Xe(i,a),h=s===He?Le(p,y):s===ze?Ye(p,y):Xe(p,y),d=Xe(c,f),t(n,r,b,o,u,d,l,s,h,g),p}})),Ue},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dispatch=e();
//# sourceMappingURL=browser.js.map
