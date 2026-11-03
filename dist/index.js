"use strict";var A=function(o,u){return function(){try{return u||o((u={exports:{}}).exports,u),u.exports}catch(E){throw u=0,E}}};var G=A(function(y,D){"use strict";var F=require("@stdlib/assert-is-function"),C=require("@stdlib/assert-is-typed-array-like"),s=require("@stdlib/strided-base-dtype-resolve-enum"),I=require("@stdlib/strided-base-reinterpret-complex64"),x=require("@stdlib/strided-base-reinterpret-complex128"),S=require("@stdlib/strided-base-reinterpret-boolean"),U=require("@stdlib/string-format"),R=s("complex64"),j=s("complex128"),z=s("bool");function M(o,u){if(!F(o))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",o));if(!F(u))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",u));return E;function E(w,r,a,c,e,t,q,v,i,l){var n,m;if(!C(a)||!C(i)||!C(t))return u(w,r,a,c,e,t,q,v,i,l),i;if(r=s(r),v=s(v),e=s(e),r===null||v===null||e===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return r===R?n=I(a,0):r===j?n=x(a,0):r===z?n=S(a,0):n=a,v===R?m=I(i,0):v===j?m=x(i,0):v===z?m=S(i,0):m=i,o(w,r,n,c,e,t,q,v,m,l),i}}D.exports=M});var f=A(function(rr,$){"use strict";var H=require("@stdlib/assert-is-function"),L=require("@stdlib/assert-is-typed-array-like"),b=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,h=require("@stdlib/strided-base-dtype-resolve-enum"),J=require("@stdlib/strided-base-reinterpret-complex64"),K=require("@stdlib/strided-base-reinterpret-complex128"),Q=require("@stdlib/strided-base-reinterpret-boolean"),p=require("@stdlib/strided-base-offset-view"),B=require("@stdlib/strided-base-min-view-buffer-index"),V=require("@stdlib/string-format"),W=h("complex64"),Z=h("complex128"),_=h("bool");function X(o,u){if(!H(o))throw new TypeError(V("invalid argument. First argument must be a function. Value: `%s`.",o));if(!H(u))throw new TypeError(V("invalid argument. Second argument must be a function. Value: `%s`.",u));return E;function E(w,r,a,c,e,t,q,v,i,l,n,m,g){var P,T,O;if(!L(a)||!L(n)||!L(q))return u(w,r,a,c,e,t,q,v,i,l,n,m,g),n;if(r=h(r),l=h(l),t=h(t),r===null||l===null||t===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!b(e))throw new TypeError(V("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",e));if(!b(g))throw new TypeError(V("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",g));if(!b(i))throw new TypeError(V("invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.",i));return e=B(w,c,e),g=B(w,m,g),i=B(w,v,i),r===W?T=J(a,e):r===Z?T=K(a,e):r===_?T=Q(a,e):T=p(a,e),l===W?O=J(n,g):l===Z?O=K(n,g):l===_?O=Q(n,g):O=p(n,g),P=p(q,i),o(w,r,T,c,t,P,v,l,O,m),n}}$.exports=X});var k=require("@stdlib/utils-define-nonenumerable-read-only-property"),N=G(),d=f();k(N,"ndarray",d);module.exports=N;
/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
