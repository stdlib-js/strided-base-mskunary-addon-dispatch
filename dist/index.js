"use strict";var A=function(o,a){return function(){return a||o((a={exports:{}}).exports,a),a.exports}};var G=A(function(y,D){"use strict";var F=require("@stdlib/assert-is-function"),C=require("@stdlib/assert-is-typed-array-like"),s=require("@stdlib/strided-base-dtype-resolve-enum"),I=require("@stdlib/strided-base-reinterpret-complex64"),x=require("@stdlib/strided-base-reinterpret-complex128"),S=require("@stdlib/strided-base-reinterpret-boolean"),U=require("@stdlib/string-format"),R=s("complex64"),j=s("complex128"),z=s("bool");function M(o,a){if(!F(o))throw new TypeError(U("invalid argument. First argument must be a function. Value: `%s`.",o));if(!F(a))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",a));return V;function V(w,r,u,c,e,t,q,v,i,l){var n,m;if(!C(u)||!C(i)||!C(t))return a(w,r,u,c,e,t,q,v,i,l),i;if(r=s(r),v=s(v),e=s(e),r===null||v===null||e===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");return r===R?n=I(u,0):r===j?n=x(u,0):r===z?n=S(u,0):n=u,v===R?m=I(i,0):v===j?m=x(i,0):v===z?m=S(i,0):m=i,o(w,r,n,c,e,t,q,v,m,l),i}}D.exports=M});var f=A(function(rr,$){"use strict";var H=require("@stdlib/assert-is-function"),L=require("@stdlib/assert-is-typed-array-like"),b=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,h=require("@stdlib/strided-base-dtype-resolve-enum"),J=require("@stdlib/strided-base-reinterpret-complex64"),K=require("@stdlib/strided-base-reinterpret-complex128"),Q=require("@stdlib/strided-base-reinterpret-boolean"),p=require("@stdlib/strided-base-offset-view"),B=require("@stdlib/strided-base-min-view-buffer-index"),O=require("@stdlib/string-format"),W=h("complex64"),Z=h("complex128"),_=h("bool");function X(o,a){if(!H(o))throw new TypeError(O("invalid argument. First argument must be a function. Value: `%s`.",o));if(!H(a))throw new TypeError(O("invalid argument. Second argument must be a function. Value: `%s`.",a));return V;function V(w,r,u,c,e,t,q,v,i,l,n,m,g){var P,E,T;if(!L(u)||!L(n)||!L(q))return a(w,r,u,c,e,t,q,v,i,l,n,m,g),n;if(r=h(r),l=h(l),t=h(t),r===null||l===null||t===null)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");if(!b(e))throw new TypeError(O("invalid argument. Input array offset must be a nonnegative integer. Value: `%s`.",e));if(!b(g))throw new TypeError(O("invalid argument. Output array offset must be a nonnegative integer. Value: `%s`.",g));if(!b(i))throw new TypeError(O("invalid argument. Mask array offset must be a nonnegative integer. Value: `%s`.",i));return e=B(w,c,e),g=B(w,m,g),i=B(w,v,i),r===W?E=J(u,e):r===Z?E=K(u,e):r===_?E=Q(u,e):E=p(u,e),l===W?T=J(n,g):l===Z?T=K(n,g):l===_?T=Q(n,g):T=p(n,g),P=p(q,i),o(w,r,E,c,t,P,v,l,T,m),n}}$.exports=X});var k=require("@stdlib/utils-define-nonenumerable-read-only-property"),N=G(),d=f();k(N,"ndarray",d);module.exports=N;
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
