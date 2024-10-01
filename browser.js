// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function n(t){return"number"==typeof t}function e(t){var r,n="";for(r=0;r<t;r++)n+="0";return n}function i(t,r,n){var i=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=n?t+e(o):e(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function a(t){var r,e,a;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,a=parseInt(e,10),!isFinite(a)){if(!n(e))throw new Error("invalid integer. Value: "+e);a=0}return a<0&&("u"===t.specifier||10!==r)&&(a=4294967295+a+1),a<0?(e=(-a).toString(r),t.precision&&(e=i(e,t.precision,t.padRight)),e="-"+e):(e=a.toString(r),a||t.precision?t.precision&&(e=i(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===u.call(t.specifier)?u.call(e):o.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,s=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,b=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function m(t){var r,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((r=t.precision)>0&&(r-=1),e=i.toExponential(r)):e=i.toPrecision(t.precision),t.alternate||(e=p.call(e,v,"$1e"),e=p.call(e,h,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=p.call(e,s,"e+0$1"),e=p.call(e,y,"e-0$1"),t.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,b,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===l.call(t.specifier)?l.call(e):f.call(e)}function w(t){var r,n="";for(r=0;r<t;r++)n+=" ";return n}var E=String.fromCharCode,j=Array.isArray;function _(t){return t!=t}function x(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function O(t){var r,n,e,o,u,c,f,l,p,s,y,g,b;if(!j(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(c="",f=1,l=0;l<t.length;l++)if("string"==typeof(e=t[l]))c+=e;else{if(r=void 0!==e.precision,!(e=x(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(o=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,_(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(r&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,_(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,r=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=r?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!_(e.arg)){if((u=parseInt(e.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=_(u)?String(e.arg):E(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(s=e.arg,y=e.width,g=e.padRight,b=void 0,(b=y-s.length)<0?s:s=g?s+w(b):w(b)+s)),c+=e.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function A(t){var r,n,e,i;for(n=[],i=0,e=T.exec(t);e;)(r=t.slice(i,T.lastIndex-e[0].length)).length&&n.push(r),n.push(S(e)),i=T.lastIndex,e=T.exec(t);return(r=t.slice(i)).length&&n.push(r),n}function F(t){var r,n;if("string"!=typeof t)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[A(t)],n=1;n<arguments.length;n++)r.push(arguments[n]);return O.apply(null,r)}var L,P=Object.prototype,k=P.toString,I=P.__defineGetter__,V=P.__defineSetter__,N=P.__lookupGetter__,B=P.__lookupSetter__;L=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,n){var e,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(N.call(t,r)||B.call(t,r)?(e=t.__proto__,t.__proto__=P,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),o="get"in n,u="set"in n,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(t,r,n.get),u&&V&&V.call(t,r,n.set),t};var R=L;function U(t,r,n){R(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var C=/./;function $(t){return"boolean"==typeof t}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return M&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,W=Object.prototype.hasOwnProperty;function X(t,r){return null!=t&&W.call(t,r)}var Z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof Z?Z.toStringTag:"",D=Y()?function(t){var r,n,e;if(null==t)return G.call(t);n=t[H],r=X(t,H);try{t[H]=void 0}catch(r){return G.call(t)}return e=G.call(t),r?t[H]=n:delete t[H],e}:function(t){return G.call(t)},z=Boolean,q=Boolean.prototype.toString,J=Y();function K(t){return"object"==typeof t&&(t instanceof z||(J?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===D(t)))}function Q(t){return $(t)||K(t)}U(Q,"isPrimitive",$),U(Q,"isObject",K);var tt="object"==typeof self?self:null,rt="object"==typeof window?window:null,nt="object"==typeof globalThis?globalThis:null,et=function(t){if(arguments.length){if(!$(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(nt)return nt;if(tt)return tt;if(rt)return rt;throw new Error("unexpected error. Unable to resolve global object.")}(),it=et.document&&et.document.childNodes,ot=Int8Array;function ut(){return/^\s*function\s*([^(]*)/i}var at=/^\s*function\s*([^(]*)/i;U(ut,"REGEXP",at);var ct=Array.isArray?Array.isArray:function(t){return"[object Array]"===D(t)};function ft(t){return null!==t&&"object"==typeof t}function lt(t){var r,n,e,i;if(("Object"===(n=D(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=at.exec(e.toString()))return r[1]}return ft(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":n}U(ft,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var n,e;if(!ct(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(ft));var pt="function"==typeof C||"object"==typeof ot||"function"==typeof it?function(t){return lt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"==(r=typeof t)?lt(t).toLowerCase():r};function st(t){return"function"===pt(t)}function yt(t){return"number"==typeof t}var gt=Number,bt=gt.prototype.toString,dt=Y();function ht(t){return"object"==typeof t&&(t instanceof gt||(dt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===D(t)))}function vt(t){return yt(t)||ht(t)}U(vt,"isPrimitive",yt),U(vt,"isObject",ht);var mt=Number.POSITIVE_INFINITY,wt=gt.NEGATIVE_INFINITY,Et=Math.floor;function jt(t){return Et(t)===t}function _t(t){return t<mt&&t>wt&&jt(t)}function xt(t){return yt(t)&&_t(t)}function Ot(t){return ht(t)&&_t(t.valueOf())}function Tt(t){return xt(t)||Ot(t)}function St(t){return xt(t)&&t>=0}function At(t){return Ot(t)&&t.valueOf()>=0}function Ft(t){return St(t)||At(t)}U(Tt,"isPrimitive",xt),U(Tt,"isObject",Ot),U(Ft,"isPrimitive",St),U(Ft,"isObject",At);var Lt=9007199254740991;function Pt(t){return null!==t&&"object"==typeof t&&St(t.length)&&t.length<=Lt&&"number"==typeof t.BYTES_PER_ELEMENT&&"number"==typeof t.byteOffset&&"number"==typeof t.byteLength}function kt(t){return Object.keys(Object(t))}var It,Vt=void 0!==Object.keys;function Nt(t){return"[object Arguments]"===D(t)}It=function(){return Nt(arguments)}();var Bt=It;function Rt(t){return"string"==typeof t}var Ut=String.prototype.valueOf,Ct=Y();function $t(t){return"object"==typeof t&&(t instanceof String||(Ct?function(t){try{return Ut.call(t),!0}catch(t){return!1}}(t):"[object String]"===D(t)))}function Mt(t){return Rt(t)||$t(t)}function Yt(t){return t!=t}function Gt(t){return yt(t)&&Yt(t)}function Wt(t){return ht(t)&&Yt(t.valueOf())}function Xt(t){return Gt(t)||Wt(t)}U(Mt,"isPrimitive",Rt),U(Mt,"isObject",$t),U(Xt,"isPrimitive",Gt),U(Xt,"isObject",Wt);var Zt=Object.prototype.propertyIsEnumerable,Ht=!Zt.call("beep","0");function Dt(t,r){var n;return null!=t&&(!(n=Zt.call(t,r))&&Ht&&Mt(t)?!Gt(r=+r)&&xt(r)&&r>=0&&r<t.length:n)}var zt=Bt?Nt:function(t){return null!==t&&"object"==typeof t&&!ct(t)&&"number"==typeof t.length&&jt(t.length)&&t.length>=0&&t.length<=4294967295&&X(t,"callee")&&!Dt(t,"callee")},qt=Array.prototype.slice,Jt=Dt((function(){}),"prototype"),Kt=!Dt({toString:null},"toString");function Qt(t,r,n){var e,i,o;if(!("object"==typeof(o=t)&&null!==o&&"number"==typeof o.length&&jt(o.length)&&o.length>=0&&o.length<=Lt||Rt(t)))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!xt(n))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=e)return-1;i=n}else(i=e+n)<0&&(i=0)}else i=0;if(Xt(r)){for(;i<e;i++)if(Xt(t[i]))return i}else for(;i<e;i++)if(t[i]===r)return i;return-1}function tr(t){return t.constructor&&t.constructor.prototype===t}var rr,nr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],er="undefined"==typeof window?void 0:window,ir=function(){var t;if("undefined"===pt(er))return!1;for(t in er)try{-1===Qt(nr,t)&&X(er,t)&&null!==er[t]&&"object"===pt(er[t])&&tr(er[t])}catch(t){return!0}return!1}(),or="undefined"!=typeof window,ur=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];rr=Vt?function(){return 2!==(kt(arguments)||"").length}(1,2)?function(t){return zt(t)?kt(qt.call(t)):kt(t)}:kt:function(t){var r,n,e,i,o,u,a;if(i=[],zt(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!X(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(0==(e="function"==typeof t)&&!ft(t))return i;n=Jt&&e}for(o in t)n&&"prototype"===o||!X(t,o)||i.push(String(o));if(Kt)for(r=function(t){if(!1===or&&!ir)return tr(t);try{return tr(t)}catch(t){return!1}}(t),a=0;a<ur.length;a++)u=ur[a],r&&"constructor"===u||!X(t,u)||i.push(String(u));return i};var ar,cr=rr,fr=Object,lr=Object.getPrototypeOf;ar=st(Object.getPrototypeOf)?lr:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===D(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var pr=ar,sr=Object.prototype;function yr(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!ct(t)}(t)&&(r=function(t){return null==t?null:(t=fr(t),pr(t))}(t),!r||!X(t,"constructor")&&X(r,"constructor")&&st(r.constructor)&&"[object Function]"===D(r.constructor)&&X(r,"isPrototypeOf")&&st(r.isPrototypeOf)&&(r===sr||function(t){var r;for(r in t)if(!X(t,r))return!1;return!0}(t)))}var gr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function br(){return gr.slice()}var dr={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function hr(){var t;return 0===arguments.length?dr.all.slice():(t=dr[arguments[0]])?t.slice():[]}function vr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function mr(t,r,n){R(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}U(hr,"enum",vr),function(t,r){var n,e,i;for(n=cr(r),i=0;i<n.length;i++)mr(t,e=n[i],r[e])}(hr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var wr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Er(){return{bool:wr.bool,int8:wr.int8,uint8:wr.uint8,uint8c:wr.uint8c,int16:wr.int16,uint16:wr.uint16,int32:wr.int32,uint32:wr.uint32,int64:wr.int64,uint64:wr.uint64,float32:wr.float32,float64:wr.float64,complex64:wr.complex64,complex128:wr.complex128,binary:wr.binary,generic:wr.generic,notype:wr.notype,userdefined_type:wr.userdefined_type}}U(br,"enum",Er),function(t,r){var n,e,i;for(n=cr(r),i=0;i<n.length;i++)mr(t,e=n[i],r[e])}(br,Er());var jr=function(t,r){var n,e,i,o,u,a,c,f=!0;if(!ft(t))throw new TypeError(F("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!yr(r))throw new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",r));if(X(r,"duplicates")&&!$(f=r.duplicates))throw new TypeError(F("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(e=(n=cr(t)).length,u={},f)for(c=0;c<e;c++)X(u,o=t[i=n[c]])?(a=u[o],ct(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(c=0;c<e;c++)u[t[i=n[c]]]=i;return u}(Er(),{duplicates:!1}),_r=Er();function xr(t){var r=typeof t;return"number"===r?function(t){var r=jr[t];return"string"==typeof r?r:null}(t)?t:null:"string"===r?function(t){var r=_r[t];return"number"==typeof r?r:null}(t):null}var Or,Tr="function"==typeof Float32Array,Sr="function"==typeof Float32Array?Float32Array:null,Ar="function"==typeof Float32Array?Float32Array:void 0;Or=function(){var t,r,n;if("function"!=typeof Sr)return!1;try{r=new Sr([1,3.14,-3.14,5e40]),n=r,t=(Tr&&n instanceof Float32Array||"[object Float32Array]"===D(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===mt}catch(r){t=!1}return t}()?Ar:function(){throw new Error("not implemented")};var Fr=Or;function Lr(t,r){return new Fr(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,2*(t.length-r))}var Pr,kr="function"==typeof Float64Array,Ir="function"==typeof Float64Array?Float64Array:null,Vr="function"==typeof Float64Array?Float64Array:void 0;Pr=function(){var t,r,n;if("function"!=typeof Ir)return!1;try{r=new Ir([1,3.14,-3.14,NaN]),n=r,t=(kr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?Vr:function(){throw new Error("not implemented")};var Nr=Pr;function Br(t,r){return new Nr(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,2*(t.length-r))}var Rr,Ur="function"==typeof Uint8Array,Cr="function"==typeof Uint8Array?Uint8Array:null,$r="function"==typeof Uint8Array?Uint8Array:void 0;Rr=function(){var t,r,n;if("function"!=typeof Cr)return!1;try{r=new Cr(r=[1,3.14,-3.14,256,257]),n=r,t=(Ur&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?$r:function(){throw new Error("not implemented")};var Mr=Rr;function Yr(t,r){return new Mr(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,t.length-r)}function Gr(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var Wr=xr("complex64"),Xr=xr("complex128"),Zr=xr("bool");function Hr(t,r){if(!st(t))throw new TypeError(Gr("1fL3c",t));if(!st(r))throw new TypeError(Gr("1fL2H",r));return function(n,e,i,o,u,a,c,f,l,p){var s,y;if(!Pt(i)||!Pt(l)||!Pt(a))return r(n,e,i,o,u,a,c,f,l,p),l;if(e=xr(e),f=xr(f),u=xr(u),null===e||null===f||null===u)throw new TypeError(Gr("1fL1L"));return s=e===Wr?Lr(i,0):e===Xr?Br(i,0):e===Zr?Yr(i,0):i,y=f===Wr?Lr(l,0):f===Xr?Br(l,0):f===Zr?Yr(l,0):l,t(n,e,s,o,u,a,c,f,y,p),l}}function Dr(t,r){return new t.constructor(t.buffer,t.byteOffset+t.BYTES_PER_ELEMENT*r,t.length-r)}function zr(t,r,n){return t>0&&r<0&&(n+=(t-1)*r),n}var qr=xr("complex64"),Jr=xr("complex128"),Kr=xr("bool");return U(Hr,"ndarray",(function(t,r){if(!st(t))throw new TypeError(Gr("1fL3c",t));if(!st(r))throw new TypeError(Gr("1fL2H",r));return function(n,e,i,o,u,a,c,f,l,p,s,y,g){var b,d,h;if(!Pt(i)||!Pt(s)||!Pt(c))return r(n,e,i,o,u,a,c,f,l,p,s,y,g),s;if(e=xr(e),p=xr(p),a=xr(a),null===e||null===p||null===a)throw new TypeError(Gr("1fL1L"));if(!St(u))throw new TypeError(Gr("1fLAG",u));if(!St(g))throw new TypeError(Gr("1fLAE",g));if(!St(l))throw new TypeError(Gr("1fLDi",l));return u=zr(n,o,u),g=zr(n,y,g),l=zr(n,f,l),d=e===qr?Lr(i,u):e===Jr?Br(i,u):e===Kr?Yr(i,u):Dr(i,u),h=p===qr?Lr(s,g):p===Jr?Br(s,g):p===Kr?Yr(s,g):Dr(s,g),b=Dr(c,l),t(n,e,d,o,a,b,f,p,h,y),s}})),Hr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).dispatch=r();
//# sourceMappingURL=browser.js.map