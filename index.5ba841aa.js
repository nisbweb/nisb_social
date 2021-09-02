var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,n)};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function n(t,e,n,i){return new(n||(n=Promise))((function(r,s){function o(t){try{h(i.next(t))}catch(t){s(t)}}function a(t){try{h(i.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}h((i=i.apply(t,e||[])).next())}))}function i(t,e){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}Object.create;function r(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,r,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(t){r={error:t}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return o}function o(t,e,n){if(n||2===arguments.length)for(var i,r=0,s=e.length;r<s;r++)!i&&r in e||(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}Object.create;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var a=function(t){for(var e=[],n=0,i=0;i<t.length;i++){var r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var h=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,i){n?e.reject(n):e.resolve(i),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,i))}},t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function c(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var l=function(t){function n(e,i,r){var s=t.call(this,i)||this;return s.code=e,s.customData=r,s.name="FirebaseError",Object.setPrototypeOf(s,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,u.prototype.create),s}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}(n,t),n}(Error),u=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i=e[0]||{},r=this.service+"/"+t,s=this.errors[t],o=s?f(s,i):"Error",a=this.serviceName+": "+o+" ("+r+").",h=new l(r,a,i);return h},t}();function f(t,e){return t.replace(d,(function(t,n){var i=e[n];return null!=i?String(i):"<"+n+"?>"}))}var d=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,e){if(t===e)return!0;for(var n=Object.keys(t),i=Object.keys(e),r=0,s=n;r<s.length;r++){var o=s[r];if(!i.includes(o))return!1;var a=t[o],h=e[o];if(g(a)&&g(h)){if(!p(a,h))return!1}else if(a!==h)return!1}for(var c=0,l=i;c<l.length;c++){o=l[c];if(!n.includes(o))return!1}return!0}function g(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"==typeof t)for(var i=0;i<16;i++)n[i]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(i=0;i<16;i++)n[i]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(i=16;i<80;i++){var r=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(r<<1|r>>>31)}var s,o,a=this.chain_[0],h=this.chain_[1],c=this.chain_[2],l=this.chain_[3],u=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(s=l^h&(c^l),o=1518500249):(s=h^c^l,o=1859775393):i<60?(s=h&c|l&(h|c),o=2400959708):(s=h^c^l,o=3395469782);r=(a<<5|a>>>27)+s+u+o+n[i]&4294967295;u=l,l=c,c=4294967295&(h<<30|h>>>2),h=a,a=r}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+h&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;i<e;){if(0===s)for(;i<=n;)this.compress_(t,i),i+=this.blockSize;if("string"==typeof t){for(;i<e;)if(r[s]=t.charCodeAt(i),++i,++s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<e;)if(r[s]=t[i],++i,++s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var i=0;for(n=0;n<5;n++)for(var r=24;r>=0;r-=8)t[i]=this.chain_[n]>>r&255,++i;return t}}();!function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var i,r=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(i=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,i=e;n<i.length;n++){var r=i[n];if(r in t&&"function"==typeof t[r])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(i.next=m),void 0===i.error&&(i.error=m),void 0===i.complete&&(i.complete=m);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{r.finalError?i.error(r.finalError):i.complete()}catch(t){}})),this.observers.push(i),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))}}();function m(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(t){return t&&t._delegate?t._delegate:t}var v=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),w=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new h;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:e});i&&n.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}try{for(var i=r(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=s(o.value,2),h=a[0],c=a[1],l=this.normalizeInstanceIdentifier(h);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch(t){}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return n(this,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(o(o([],s(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),s(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t="[DEFAULT]"),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,o=void 0===i?{}:i,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(this.name+"("+a+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var h=this.getOrInitializeService({instanceIdentifier:a,options:o});try{for(var c=r(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=s(l.value,2),f=u[0],d=u[1];a===this.normalizeInstanceIdentifier(f)&&d.resolve(h)}}catch(t){e={error:t}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return h},t.prototype.onInit=function(t,e){var n,i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);var s=this.instances.get(i);return s&&t(s,i),function(){r.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,s=this.onInitCallbacks.get(e);if(s)try{for(var o=r(s),a=o.next();!a.done;a=o.next()){var h=a.value;try{h(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,i=t.options,r=void 0===i?{}:i,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:r}),this.instances.set(n,s),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(t){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t="[DEFAULT]"),this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b,E=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new w(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function T(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),r=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I,A,S=[];(A=I||(I={}))[A.DEBUG=0]="DEBUG",A[A.VERBOSE=1]="VERBOSE",A[A.INFO=2]="INFO",A[A.WARN=3]="WARN",A[A.ERROR=4]="ERROR",A[A.SILENT=5]="SILENT";var N={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},_=I.INFO,D=((b={})[I.DEBUG]="log",b[I.VERBOSE]="log",b[I.INFO]="info",b[I.WARN]="warn",b[I.ERROR]="error",b),C=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var r=(new Date).toISOString(),s=D[e];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[s].apply(console,T(["["+r+"]  "+t.name+":"],n))}},R=function(){function t(t){this.name=t,this._logLevel=_,this._logHandler=C,this._userLogHandler=null,S.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in I))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?N[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,T([this,I.DEBUG],t)),this._logHandler.apply(this,T([this,I.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,T([this,I.VERBOSE],t)),this._logHandler.apply(this,T([this,I.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,T([this,I.INFO],t)),this._logHandler.apply(this,T([this,I.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,T([this,I.WARN],t)),this._logHandler.apply(this,T([this,I.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,T([this,I.ERROR],t)),this._logHandler.apply(this,T([this,I.ERROR],t))},t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const L=new R("@firebase/app"),k={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},x=new Map,P=new Map;function F(t,e){try{t.container.addComponent(e)}catch(n){L.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function M(t){const e=t.name;if(P.has(e))return L.debug(`There were multiple attempts to register component ${e}.`),!1;P.set(e,t);for(const e of x.values())F(e,t);return!0}function U(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const V=new u("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new v("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e,n){var i;let r=null!==(i=k[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void L.warn(t.join(" "))}M(new v(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var H;M(new v("platform-logger",(t=>new O(t)),"PRIVATE")),B("@firebase/app","0.7.0",H),B("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
B("firebase","9.0.1","app");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var q=function(t,e){return(q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function $(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var K,G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},z=z||{},X=G||self;function W(){}function Q(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Y(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var J="closure_uid_"+(1e9*Math.random()>>>0),Z=0;function tt(t,e,n){return t.call.apply(t.bind,arguments)}function et(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return(nt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tt:et).apply(null,arguments)}function it(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function rt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function st(){this.s=this.s,this.o=this.o}var ot={};st.prototype.s=!1,st.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,J)&&t[J]||(t[J]=++Z)}(this);delete ot[t]}},st.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var at=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ht=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var i=t.length,r="string"==typeof t?t.split(""):t,s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function ct(t){return Array.prototype.concat.apply([],arguments)}function lt(t){var e=t.length;if(0<e){for(var n=Array(e),i=0;i<e;i++)n[i]=t[i];return n}return[]}function ut(t){return/^[\s\xa0]*$/.test(t)}var ft,dt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function pt(t,e){return-1!=t.indexOf(e)}function gt(t,e){return t<e?-1:t>e?1:0}t:{var mt=X.navigator;if(mt){var yt=mt.userAgent;if(yt){ft=yt;break t}}ft=""}function vt(t,e,n){for(var i in t)e.call(n,t[i],i,t)}function wt(t){var e={};for(var n in t)e[n]=t[n];return e}var bt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Et(t,e){for(var n,i,r=1;r<arguments.length;r++){for(n in i=arguments[r])t[n]=i[n];for(var s=0;s<bt.length;s++)n=bt[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Tt(t){return Tt[" "](t),t}Tt[" "]=W;var It,At,St=pt(ft,"Opera"),Nt=pt(ft,"Trident")||pt(ft,"MSIE"),_t=pt(ft,"Edge"),Dt=_t||Nt,Ct=pt(ft,"Gecko")&&!(pt(ft.toLowerCase(),"webkit")&&!pt(ft,"Edge"))&&!(pt(ft,"Trident")||pt(ft,"MSIE"))&&!pt(ft,"Edge"),Rt=pt(ft.toLowerCase(),"webkit")&&!pt(ft,"Edge");function Ot(){var t=X.document;return t?t.documentMode:void 0}t:{var Lt="",kt=(At=ft,Ct?/rv:([^\);]+)(\)|;)/.exec(At):_t?/Edge\/([\d\.]+)/.exec(At):Nt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(At):Rt?/WebKit\/(\S+)/.exec(At):St?/(?:Version)[ \/]?(\S+)/.exec(At):void 0);if(kt&&(Lt=kt?kt[1]:""),Nt){var xt=Ot();if(null!=xt&&xt>parseFloat(Lt)){It=String(xt);break t}}It=Lt}var Pt,Ft={};function Mt(){return function(t){var e=Ft;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=dt(String(It)).split("."),n=dt("9").split("."),i=Math.max(e.length,n.length),r=0;0==t&&r<i;r++){var s=e[r]||"",o=n[r]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=gt(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||gt(0==s[2].length,0==o[2].length)||gt(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(X.document&&Nt){var Ut=Ot();Pt=Ut||(parseInt(It,10)||void 0)}else Pt=void 0;var Vt=Pt,jt=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",W,e),X.removeEventListener("test",W,e)}catch(t){}return t}();function Bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ht(t,e){if(Bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ct){t:{try{Tt(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:qt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ht.Z.h.call(this)}}Bt.prototype.h=function(){this.defaultPrevented=!0},rt(Ht,Bt);var qt={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $t="closure_listenable_"+(1e6*Math.random()|0),Kt=0;function Gt(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++Kt,this.ca=this.fa=!1}function zt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Xt(t){this.src=t,this.g={},this.h=0}function Wt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=at(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(zt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Qt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}Xt.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Qt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Gt(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var Yt="closure_lm_"+(1e6*Math.random()|0),Jt={};function Zt(t,e,n,i,r){if(i&&i.once)return ee(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zt(t,e[s],n,i,r);return null}return n=he(n),t&&t[$t]?t.N(e,n,Y(i)?!!i.capture:!!i,r):te(t,e,n,!1,i,r)}function te(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Y(r)?!!r.capture:!!r,a=oe(t);if(a||(t[Yt]=a=new Xt(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=se;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)jt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(re(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ee(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ee(t,e[s],n,i,r);return null}return n=he(n),t&&t[$t]?t.O(e,n,Y(i)?!!i.capture:!!i,r):te(t,e,n,!0,i,r)}function ne(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ne(t,e[s],n,i,r);else i=Y(i)?!!i.capture:!!i,n=he(n),t&&t[$t]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Qt(s=t.g[e],n,i,r))&&(zt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=oe(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qt(e,n,i,r)),(n=-1<t?e[t]:null)&&ie(n))}function ie(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[$t])Wt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(re(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=oe(e))?(Wt(n,t),0==n.h&&(n.src=null,e[Yt]=null)):zt(t)}}}function re(t){return t in Jt?Jt[t]:Jt[t]="on"+t}function se(t,e){if(t.ca)t=!0;else{e=new Ht(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&ie(t),t=n.call(i,e)}return t}function oe(t){return(t=t[Yt])instanceof Xt?t:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(t){return"function"==typeof t?t:(t[ae]||(t[ae]=function(e){return t.handleEvent(e)}),t[ae])}function ce(){st.call(this),this.i=new Xt(this),this.P=this,this.I=null}function le(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Bt(e,t);else if(e instanceof Bt)e.target=e.target||t;else{var r=e;Et(e=new Bt(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=ue(o,i,!0,e)&&r}if(r=ue(o=e.g=t,i,!0,e)&&r,r=ue(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=ue(o=e.g=n[s],i,!1,e)&&r}function ue(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&Wt(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}rt(ce,st),ce.prototype[$t]=!0,ce.prototype.removeEventListener=function(t,e,n,i){ne(this,t,e,n,i)},ce.prototype.M=function(){if(ce.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)zt(n[i]);delete e.g[t],e.h--}}this.I=null},ce.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ce.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var fe=X.JSON.stringify;function de(){var t=Ee,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var pe,ge=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=me.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),me=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new ye}),(function(t){return t.reset()})),ye=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function ve(t){X.setTimeout((function(){throw t}),0)}function we(t,e){pe||function(){var t=X.Promise.resolve(void 0);pe=function(){t.then(Te)}}(),be||(pe(),be=!0),Ee.add(t,e)}var be=!1,Ee=new ge;function Te(){for(var t;t=de();){try{t.h.call(t.g)}catch(t){ve(t)}var e=me;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}be=!1}function Ie(t,e){ce.call(this),this.h=t||1,this.g=e||X,this.j=nt(this.kb,this),this.l=Date.now()}function Ae(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Se(t,e,n){if("function"==typeof t)n&&(t=nt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=nt(t.handleEvent,t)}return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Ne(t){t.g=Se((function(){t.g=null,t.i&&(t.i=!1,Ne(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}rt(Ie,ce),(K=Ie.prototype).da=!1,K.S=null,K.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),le(this,"tick"),this.da&&(Ae(this),this.start()))}},K.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},K.M=function(){Ie.Z.M.call(this),Ae(this),delete this.g};var _e=function(t){function e(e,n){var i=t.call(this)||this;return i.m=e,i.j=n,i.h=null,i.i=!1,i.g=null,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}q(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Ne(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(st);function De(t){st.call(this),this.h=t,this.g={}}rt(De,st);var Ce=[];function Re(t,e,n,i){Array.isArray(n)||(n&&(Ce[0]=n.toString()),n=Ce);for(var r=0;r<n.length;r++){var s=Zt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Oe(t){vt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ie(t)}),t),t.g={}}function Le(){this.g=!0}function ke(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return fe(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}De.prototype.M=function(){De.Z.M.call(this),Oe(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Le.prototype.Aa=function(){this.g=!1},Le.prototype.info=function(){};var xe={},Pe=null;function Fe(){return Pe=Pe||new ce}function Me(t){Bt.call(this,xe.Ma,t)}function Ue(t){var e=Fe();le(e,new Me(e,t))}function Ve(t,e){Bt.call(this,xe.STAT_EVENT,t),this.stat=e}function je(t){var e=Fe();le(e,new Ve(e,t))}function Be(t,e){Bt.call(this,xe.Na,t),this.size=e}function He(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return X.setTimeout((function(){t()}),e)}xe.Ma="serverreachability",rt(Me,Bt),xe.STAT_EVENT="statevent",rt(Ve,Bt),xe.Na="timingevent",rt(Be,Bt);var qe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},$e={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Ke(){}function Ge(t){return t.h||(t.h=t.i())}function ze(){}Ke.prototype.h=null;var Xe,We={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Qe(){Bt.call(this,"d")}function Ye(){Bt.call(this,"c")}function Je(){}function Ze(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new De(this),this.P=en,t=Dt?125:void 0,this.W=new Ie(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new tn}function tn(){this.i=null,this.g="",this.h=!1}rt(Qe,Bt),rt(Ye,Bt),rt(Je,Ke),Je.prototype.g=function(){return new XMLHttpRequest},Je.prototype.i=function(){return{}},Xe=new Je;var en=45e3,nn={},rn={};function sn(t,e,n){t.K=1,t.v=Dn(Tn(e)),t.s=n,t.U=!0,on(t,null)}function on(t,e){t.F=Date.now(),ln(t),t.A=Tn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Bn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new tn,t.g=Hi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new _e(nt(t.Ia,t,t.g),t.O)),Re(t.V,t.g,"readystatechange",t.gb),e=t.H?wt(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ue(1),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var l=c[0];c=c[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function an(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function hn(t,e,n){for(var i,r=!0;!t.I&&t.C<n.length;){if((i=cn(t,n))==rn){4==e&&(t.o=4,je(14),r=!1),ke(t.j,t.m,null,"[Incomplete Response]");break}if(i==nn){t.o=4,je(15),ke(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}ke(t.j,t.m,i,null),gn(t,i)}an(t)&&i!=rn&&i!=nn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),xi(e),e.L=!0,je(11))):(ke(t.j,t.m,n,"[Invalid Chunked Response]"),pn(t),dn(t))}function cn(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?rn:(n=Number(e.substring(n,i)),isNaN(n)?nn:(i+=1)+n>e.length?rn:(e=e.substr(i,n),t.C=i+n,e))}function ln(t){t.Y=Date.now()+t.P,un(t,t.P)}function un(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=He(nt(t.eb,t),e)}function fn(t){t.B&&(X.clearTimeout(t.B),t.B=null)}function dn(t){0==t.l.G||t.I||Mi(t.l,t)}function pn(t){fn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ae(t.W),Oe(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gn(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Xn(n.i,t)))if(n.I=t.N,!t.J&&Xn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(s){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0])t:if(n.u)n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=He(nt(n.ab,n),6e3));else{if(n.g){if(!(n.g.F+3e3<t.F))break t;Fi(n),Si(n)}ki(n),je(18)}if(1>=zn(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else Vi(n,11)}else if((t.J||n.g==t)&&Fi(n),!ut(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){var s=r[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var h=s[5];null!=h&&"number"==typeof h&&0<h&&(i=1.5*h,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;var c=t.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var u=i.i;!u.g&&(pt(l,"spdy")||pt(l,"quic")||pt(l,"h2"))&&(u.j=u.l,u.g=new Set,u.h&&(Wn(u,u.h),u.h=null))}if(i.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(i.sa=f,_n(i.F,i.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var d=t;if((i=n).oa=Bi(i,i.H?i.la:null,i.W),d.J){Qn(i.i,d);var p=d,g=i.K;g&&p.setTimeout(g),p.B&&(fn(p),ln(p)),i.g=d}else Li(i);0<n.l.length&&Di(n)}else"stop"!=s[0]&&"close"!=s[0]||Vi(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Vi(n,7):Ai(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Ue(4)}catch(s){}}function mn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Q(t)||"string"==typeof t)ht(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Q(t)||"string"==typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;r=(i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Q(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t)).length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function yn(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof yn)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function vn(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];wn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)wn(r,i=t.g[e])||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function wn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(K=Ze.prototype).setTimeout=function(t){this.P=t},K.gb=function(t){t=t.target;var e=this.L;e&&3==wi(t)?e.l():this.Ia(t)},K.Ia=function(t){try{if(t==this.g)t:{var e=wi(this.g),n=this.g.Da(),i=this.g.ba();if(!(3>e)&&(3!=e||Dt||this.g&&(this.h.h||this.g.ga()||bi(this.g)))){this.I||4!=e||7==n||Ue(8==n||0>=i?3:2),fn(this);var r=this.g.ba();this.N=r;e:if(an(this)){var s=bi(this.g);t="";var o=s.length,a=4==wi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){pn(this),dn(this);var h="";break e}this.h.i=new X.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,h=this.h.g}else h=this.g.ga();if(this.i=200==r,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,r),this.i){if(this.$&&!this.J){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ut(c)){var u=c;break e}}u=null}if(!(r=u)){this.i=!1,this.o=3,je(12),pn(this),dn(this);break t}ke(this.j,this.m,r,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gn(this,r)}this.U?(hn(this,e,h),Dt&&this.i&&3==e&&(Re(this.V,this.W,"tick",this.fb),this.W.start())):(ke(this.j,this.m,h,null),gn(this,h)),4==e&&pn(this),this.i&&!this.I&&(4==e?Mi(this.l,this):(this.i=!1,ln(this)))}else 400==r&&0<h.indexOf("Unknown SID")?(this.o=3,je(12)):(this.o=0,je(13)),pn(this),dn(this)}}}catch(e){}},K.fb=function(){if(this.g){var t=wi(this.g),e=this.g.ga();this.C<e.length&&(fn(this),hn(this,t,e),this.i&&4!=t&&ln(this))}},K.cancel=function(){this.I=!0,pn(this)},K.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Ue(3),je(17)),pn(this),this.o=2,dn(this)):un(this,this.Y-t)},(K=yn.prototype).R=function(){vn(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},K.T=function(){return vn(this),this.g.concat()},K.get=function(t,e){return wn(this.h,t)?this.h[t]:e},K.set=function(t,e){wn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},K.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var bn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function En(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof En){this.g=void 0!==e?e:t.g,In(this,t.j),this.s=t.s,An(this,t.i),Sn(this,t.m),this.l=t.l,e=t.h;var n=new Mn;n.i=e.i,e.g&&(n.g=new yn(e.g),n.h=e.h),Nn(this,n),this.o=t.o}else t&&(n=String(t).match(bn))?(this.g=!!e,In(this,n[1]||"",!0),this.s=Cn(n[2]||""),An(this,n[3]||"",!0),Sn(this,n[4]),this.l=Cn(n[5]||"",!0),Nn(this,n[6]||"",!0),this.o=Cn(n[7]||"")):(this.g=!!e,this.h=new Mn(null,this.g))}function Tn(t){return new En(t)}function In(t,e,n){t.j=n?Cn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function An(t,e,n){t.i=n?Cn(e,!0):e}function Sn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nn(t,e,n){e instanceof Mn?(t.h=e,function(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Vn(this,e),Bn(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Rn(e,Pn)),t.h=new Mn(e,t.g))}function _n(t,e,n){t.h.set(e,n)}function Dn(t){return _n(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,On),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function On(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}En.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rn(e,Ln,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Rn(e,Ln,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Rn(n,"/"==n.charAt(0)?xn:kn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rn(n,Fn)),t.join("")};var Ln=/[#\/\?@]/g,kn=/[#\?:]/g,xn=/[#\?]/g,Pn=/[#\?@]/g,Fn=/#/g;function Mn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new yn,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Vn(t,e){Un(t),e=Hn(t,e),wn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,wn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&vn(t)))}function jn(t,e){return Un(t),e=Hn(t,e),wn(t.g.h,e)}function Bn(t,e,n){Vn(t,e),0<n.length&&(t.i=null,t.g.set(Hn(t,e),lt(n)),t.h+=n.length)}function Hn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(K=Mn.prototype).add=function(t,e){Un(this),this.i=null,t=Hn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},K.forEach=function(t,e){Un(this),this.g.forEach((function(n,i){ht(n,(function(n){t.call(e,n,i,this)}),this)}),this)},K.T=function(){Un(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},K.R=function(t){Un(this);var e=[];if("string"==typeof t)jn(this,t)&&(e=ct(e,this.g.get(Hn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ct(e,t[n])}return e},K.set=function(t,e){return Un(this),this.i=null,jn(this,t=Hn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},K.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},K.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var qn=function(t,e){this.h=t,this.g=e};function $n(t){this.l=t||Kn,X.PerformanceNavigationTiming?t=0<(t=X.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(X.g&&X.g.Ea&&X.g.Ea()&&X.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kn=10;function Gn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function zn(t){return t.h?1:t.g?t.g.size:0}function Xn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Wn(t,e){t.g?t.g.add(e):t.h=e}function Qn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Yn(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var i=t.i;try{for(var r=$(t.g.values()),s=r.next();!s.done;s=r.next()){var o=s.value;i=i.concat(o.D)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return i}return lt(t.i)}function Jn(){}function Zn(){this.g=new Jn}function ti(t,e,n){var i=n||"";try{mn(t,(function(t,n){var r=t;Y(t)&&(r=fe(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ei(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function ni(t){this.l=t.$b||null,this.j=t.ib||!1}function ii(t,e){ce.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ri,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$n.prototype.cancel=function(){var t,e;if(this.i=Yn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=$(this.g.values()),i=n.next();!i.done;i=n.next()){i.value.cancel()}}catch(e){t={error:e}}finally{try{i&&!i.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},Jn.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)},Jn.prototype.parse=function(t){return X.JSON.parse(t,void 0)},rt(ni,Ke),ni.prototype.g=function(){return new ii(this.l,this.j)},ni.prototype.i=function(t){return function(){return t}}({}),rt(ii,ce);var ri=0;function si(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function oi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ai(t)}function ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(K=ii.prototype).open=function(t,e){if(this.readyState!=ri)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ai(this)},K.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,oi(this)),this.readyState=ri},K.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==X.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;si(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},K.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oi(this):ai(this),3==this.readyState&&si(this)}},K.Ua=function(t){this.g&&(this.response=this.responseText=t,oi(this))},K.Ta=function(t){this.g&&(this.response=t,oi(this))},K.ha=function(){this.g&&oi(this)},K.setRequestHeader=function(t,e){this.v.append(t,e)},K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},K.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ii.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var hi=X.JSON.parse;function ci(t){ce.call(this),this.headers=new yn,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=li,this.K=this.L=!1}rt(ci,ce);var li="",ui=/^https?$/i,fi=["POST","PUT"];function di(t){return"content-type"==t.toLowerCase()}function pi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gi(t),yi(t)}function gi(t){t.D||(t.D=!0,le(t,"complete"),le(t,"error"))}function mi(t){if(t.h&&void 0!==z&&(!t.C[1]||4!=wi(t)||2!=t.ba()))if(t.v&&4==wi(t))Se(t.Fa,0,t);else if(le(t,"readystatechange"),4==wi(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}if(!(e=i)){var r;if(r=0===n){var s=String(t.H).match(bn)[1]||null;if(!s&&X.self&&X.self.location){var o=X.self.location.protocol;s=o.substr(0,o.length-1)}r=!ui.test(s?s.toLowerCase():"")}e=r}if(e)le(t,"complete"),le(t,"success");else{t.m=6;try{var a=2<wi(t)?t.g.statusText:""}catch(t){a=""}t.j=a+" ["+t.ba()+"]",gi(t)}}finally{yi(t)}}}function yi(t,e){if(t.g){vi(t);var n=t.g,i=t.C[0]?W:null;t.g=null,t.C=null,e||le(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function vi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function wi(t){return t.g?t.g.readyState:0}function bi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case li:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ei(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){var e="";return vt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):_n(t,e,n))}function Ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ii(t){this.za=0,this.l=[],this.h=new Le,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ti("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ti("baseRetryDelayMs",5e3,t),this.$a=Ti("retryDelaySeedMs",1e4,t),this.Ya=Ti("forwardChannelMaxRetries",2,t),this.ra=Ti("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new $n(t&&t.concurrentRequestLimit),this.Ca=new Zn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ai(t){if(Ni(t),3==t.G){var e=t.V++,n=Tn(t.F);_n(n,"SID",t.J),_n(n,"RID",e),_n(n,"TYPE","terminate"),Ri(t,n),(e=new Ze(t,t.h,e,void 0)).K=2,e.v=Dn(Tn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&((new Image).src=e.v,n=!0),n||(e.g=Hi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ln(e)}ji(t)}function Si(t){t.g&&(xi(t),t.g.cancel(),t.g=null)}function Ni(t){Si(t),t.u&&(X.clearTimeout(t.u),t.u=null),Fi(t),t.i.cancel(),t.m&&("number"==typeof t.m&&X.clearTimeout(t.m),t.m=null)}function _i(t,e){t.l.push(new qn(t.Za++,e)),3==t.G&&Di(t)}function Di(t){Gn(t.i)||t.m||(t.m=!0,we(t.Ha,t),t.C=0)}function Ci(t,e){var n;n=e?e.m:t.V++;var i=Tn(t.F);_n(i,"SID",t.J),_n(i,"RID",n),_n(i,"AID",t.U),Ri(t,i),t.o&&t.s&&Ei(i,t.o,t.s),n=new Ze(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Oi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Wn(t.i,n),sn(n,i,e)}function Ri(t,e){t.j&&mn({},(function(t,n){_n(e,n,t)}))}function Oi(t,e,n){n=Math.min(t.l.length,n);var i=t.j?nt(t.j.Oa,t.j,t):null;t:for(var r=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,h=0;h<n;h++){var c=r[h].h,l=r[h].g;if(0>(c-=s))s=Math.max(0,r[h].h-100),a=!1;else try{ti(l,o,"req"+c+"_")}catch(t){i&&i(l)}}if(a){i=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,i}function Li(t){t.g||t.u||(t.Y=1,we(t.Ga,t),t.A=0)}function ki(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=He(nt(t.Ga,t),Ui(t,t.A)),t.A++,!0)}function xi(t){null!=t.B&&(X.clearTimeout(t.B),t.B=null)}function Pi(t){t.g=new Ze(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Tn(t.oa);_n(e,"RID","rpc"),_n(e,"SID",t.J),_n(e,"CI",t.N?"0":"1"),_n(e,"AID",t.U),Ri(t,e),_n(e,"TYPE","xmlhttp"),t.o&&t.s&&Ei(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Dn(Tn(e)),n.s=null,n.U=!0,on(n,t)}function Fi(t){null!=t.v&&(X.clearTimeout(t.v),t.v=null)}function Mi(t,e){var n=null;if(t.g==e){Fi(t),xi(t),t.g=null;var i=2}else{if(!Xn(t.i,e))return;n=e.D,Qn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;le(i=Fe(),new Be(i,n,e,r)),Di(t)}else Li(t);else if(3==(r=e.o)||0==r&&0<t.I||!(1==i&&function(t,e){return!(zn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=He(nt(t.Ha,t,e),Ui(t,t.C)),t.C++,0)))}(t,e)||2==i&&ki(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Vi(t,5);break;case 4:Vi(t,10);break;case 3:Vi(t,6);break;default:Vi(t,2)}}function Ui(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Vi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=nt(t.jb,t);n||(n=new En("//www.google.com/images/cleardot.gif"),X.location&&"http"==X.location.protocol||In(n,"https"),Dn(n)),function(t,e){var n=new Le;if(X.Image){var i=new Image;i.onload=it(ei,n,i,"TestLoadImage: loaded",!0,e),i.onerror=it(ei,n,i,"TestLoadImage: error",!1,e),i.onabort=it(ei,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=it(ei,n,i,"TestLoadImage: timeout",!1,e),X.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else je(2);t.G=0,t.j&&t.j.va(e),ji(t),Ni(t)}function ji(t){t.G=0,t.I=-1,t.j&&(0==Yn(t.i).length&&0==t.l.length||(t.i.i.length=0,lt(t.l),t.l.length=0),t.j.ua())}function Bi(t,e,n){var i=function(t){return t instanceof En?Tn(t):new En(t,void 0)}(n);if(""!=i.i)e&&An(i,e+"."+i.i),Sn(i,i.m);else{var r=X.location;i=function(t,e,n,i){var r=new En(null,void 0);return t&&In(r,t),e&&An(r,e),n&&Sn(r,n),i&&(r.l=i),r}(r.protocol,e?e+"."+r.hostname:r.hostname,+r.port,n)}return t.aa&&vt(t.aa,(function(t,e){_n(i,e,t)})),e=t.D,n=t.sa,e&&n&&_n(i,e,n),_n(i,"VER",t.ma),Ri(t,i),i}function Hi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new ci(new ni({ib:!0})):new ci(t.qa)).L=t.H,e}function qi(){}function $i(){if(Nt&&!(10<=Number(Vt)))throw Error("Environmental error: no available transport.")}function Ki(t,e){ce.call(this),this.g=new Ii(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!ut(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ut(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Xi(this)}function Gi(t){Qe.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function zi(){Ye.call(this),this.status=1}function Xi(t){this.g=t}(K=ci.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xe.g(),this.C=this.u?Ge(this.u):Ge(Xe),this.g.onreadystatechange=nt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void pi(this,t)}t=n||"";var r=new yn(this.headers);i&&mn(i,(function(t,e){r.set(e,t)})),i=function(t){t:{for(var e=di,n=t.length,i="string"==typeof t?t.split(""):t,r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(r.T()),n=X.FormData&&t instanceof X.FormData,!(0<=at(fi,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{vi(this),0<this.B&&((this.K=function(t){return Nt&&Mt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.pa,this)):this.A=Se(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){pi(this,t)}},K.pa=function(){void 0!==z&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))},K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,le(this,"complete"),le(this,"abort"),yi(this))},K.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yi(this,!0)),ci.Z.M.call(this)},K.Fa=function(){this.s||(this.F||this.v||this.l?mi(this):this.cb())},K.cb=function(){mi(this)},K.ba=function(){try{return 2<wi(this)?this.g.status:-1}catch(t){return-1}},K.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},K.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),hi(e)}},K.Da=function(){return this.m},K.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(K=Ii.prototype).ma=8,K.G=1,K.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},K.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new Ze(this,this.h,t,void 0),n=this.s;if(this.P&&(n?Et(n=wt(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var i=0,r=0;r<this.l.length;r++){var s=this.l[r];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(i+=s)){i=r;break t}if(4096===i||r===this.l.length-1){i=r+1;break t}}i=1e3}else i=1e3;i=Oi(this,e,i),_n(r=Tn(this.F),"RID",t),_n(r,"CVER",22),this.D&&_n(r,"X-HTTP-Session-Id",this.D),Ri(this,r),this.o&&n&&Ei(r,this.o,n),Wn(this.i,e),this.Ra&&_n(r,"TYPE","init"),this.ja?(_n(r,"$req",i),_n(r,"SID","null"),e.$=!0,sn(e,r,null)):sn(e,r,i),this.G=2}}else 3==this.G&&(t?Ci(this,t):0==this.l.length||Gn(this.i)||Ci(this))},K.Ga=function(){if(this.u=null,Pi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=He(nt(this.bb,this),t)}},K.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,je(10),Si(this),Pi(this))},K.ab=function(){null!=this.v&&(this.v=null,Si(this),ki(this),je(19))},K.jb=function(t){t?(this.h.info("Successfully pinged google.com"),je(2)):(this.h.info("Failed to ping google.com"),je(1))},(K=qi.prototype).xa=function(){},K.wa=function(){},K.va=function(){},K.ua=function(){},K.Oa=function(){},$i.prototype.g=function(t,e){return new Ki(t,e)},rt(Ki,ce),Ki.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),we(nt(t.hb,t,e))),je(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Bi(t,null,t.W),Di(t)},Ki.prototype.close=function(){Ai(this.g)},Ki.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,_i(this.g,e)}else this.v?((e={}).__data__=fe(t),_i(this.g,e)):_i(this.g,t)},Ki.prototype.M=function(){this.g.j=null,delete this.j,Ai(this.g),delete this.g,Ki.Z.M.call(this)},rt(Gi,Qe),rt(zi,Ye),rt(Xi,qi),Xi.prototype.xa=function(){le(this.g,"a")},Xi.prototype.wa=function(t){le(this.g,new Gi(t))},Xi.prototype.va=function(t){le(this.g,new zi(t))},Xi.prototype.ua=function(){le(this.g,"b")},$i.prototype.createWebChannel=$i.prototype.g,Ki.prototype.send=Ki.prototype.u,Ki.prototype.open=Ki.prototype.m,Ki.prototype.close=Ki.prototype.close,qe.NO_ERROR=0,qe.TIMEOUT=8,qe.HTTP_ERROR=6,$e.COMPLETE="complete",ze.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",ce.prototype.listen=ce.prototype.N,ci.prototype.listenOnce=ci.prototype.O,ci.prototype.getLastError=ci.prototype.La,ci.prototype.getLastErrorCode=ci.prototype.Da,ci.prototype.getStatus=ci.prototype.ba,ci.prototype.getResponseJson=ci.prototype.Qa,ci.prototype.getResponseText=ci.prototype.ga,ci.prototype.send=ci.prototype.ea;var Wi,Qi,Yi=function(){return new $i},Ji=function(){return Fe()},Zi=qe,tr=$e,er=xe,nr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ir=ni,rr=ze,sr=ci,or={};function ar(){throw new Error("setTimeout has not been defined")}function hr(){throw new Error("clearTimeout has not been defined")}function cr(t){if(Wi===setTimeout)return setTimeout(t,0);if((Wi===ar||!Wi)&&setTimeout)return Wi=setTimeout,setTimeout(t,0);try{return Wi(t,0)}catch(e){try{return Wi.call(null,t,0)}catch(e){return Wi.call(this,t,0)}}}!function(){try{Wi="function"==typeof setTimeout?setTimeout:ar}catch(t){Wi=ar}try{Qi="function"==typeof clearTimeout?clearTimeout:hr}catch(t){Qi=hr}}();var lr,ur=[],fr=!1,dr=-1;function pr(){fr&&lr&&(fr=!1,lr.length?ur=lr.concat(ur):dr=-1,ur.length&&gr())}function gr(){if(!fr){var t=cr(pr);fr=!0;for(var e=ur.length;e;){for(lr=ur,ur=[];++dr<e;)lr&&lr[dr].run();dr=-1,e=ur.length}lr=null,fr=!1,function(t){if(Qi===clearTimeout)return clearTimeout(t);if((Qi===hr||!Qi)&&clearTimeout)return Qi=clearTimeout,clearTimeout(t);try{Qi(t)}catch(e){try{return Qi.call(null,t)}catch(e){return Qi.call(this,t)}}}(t)}}function mr(t,e){this.fun=t,this.array=e}function yr(){}or.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];ur.push(new mr(t,e)),1!==ur.length||fr||cr(gr)},mr.prototype.run=function(){this.fun.apply(null,this.array)},or.title="browser",or.browser=!0,or.env={},or.argv=[],or.version="",or.versions={},or.on=yr,or.addListener=yr,or.once=yr,or.off=yr,or.removeListener=yr,or.removeAllListeners=yr,or.emit=yr,or.prependListener=yr,or.prependOnceListener=yr,or.listeners=function(t){return[]},or.binding=function(t){throw new Error("process.binding is not supported")},or.cwd=function(){return"/"},or.chdir=function(t){throw new Error("process.chdir is not supported")},or.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vr.UNAUTHENTICATED=new vr(null),vr.GOOGLE_CREDENTIALS=new vr("google-credentials-uid"),vr.FIRST_PARTY=new vr("first-party-uid"),vr.MOCK_USER=new vr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let wr="9.0.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new R("@firebase/firestore");function Er(){return br.logLevel}function Tr(t,...e){if(br.logLevel<=I.DEBUG){const n=e.map(Sr);br.debug(`Firestore (${wr}): ${t}`,...n)}}function Ir(t,...e){if(br.logLevel<=I.ERROR){const n=e.map(Sr);br.error(`Firestore (${wr}): ${t}`,...n)}}function Ar(t,...e){if(br.logLevel<=I.WARN){const n=e.map(Sr);br.warn(`Firestore (${wr}): ${t}`,...n)}}function Sr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t="Unexpected state"){const e=`FIRESTORE (${wr}) INTERNAL ASSERTION FAILED: `+t;throw Ir(e),new Error(e)}function _r(t,e){t||Nr()}function Dr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Rr extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${t}`}}class kr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(vr.UNAUTHENTICATED)))}shutdown(){}}class xr{constructor(t){this.t=t,this.currentUser=vr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Or,t.enqueueRetryable((()=>i(this.currentUser)))};const s=e=>{t.enqueueRetryable((async()=>{Tr("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),await r.promise,await i(this.currentUser)}))};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Tr("FirebaseCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Or)}}),0),t.enqueueRetryable((async()=>{0===this.i&&(await r.promise,await i(this.currentUser))}))}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Tr("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(_r("string"==typeof e.accessToken),new Lr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _r(null===t||"string"==typeof t),new vr(t)}}class Pr{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=vr.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class Fr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Pr(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(vr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mr.T=-1;class Vr{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Ur(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function jr(t,e){return t<e?-1:t>e?1:0}function Br(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Rr(Cr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Rr(Cr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Rr(Cr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Rr(Cr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Hr.fromMillis(Date.now())}static fromDate(t){return Hr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Hr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?jr(this.nanoseconds,t.nanoseconds):jr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new qr(t)}static min(){return new qr(new Hr(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Nr(),void 0===n?n=t.length-e:n>t.length-e&&Nr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===zr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Xr extends zr{construct(t,e,n){return new Xr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Rr(Cr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Xr(e)}static emptyPath(){return new Xr([])}}const Wr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qr extends zr{construct(t,e,n){return new Qr(t,e,n)}static isValidIdentifier(t){return Wr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Qr(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Rr(Cr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Rr(Cr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Rr(Cr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Rr(Cr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qr(e)}static emptyPath(){return new Qr([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.fields=t,t.sort(Qr.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Br(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Jr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Jr(e)}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return jr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jr.EMPTY_BYTE_STRING=new Jr("");const Zr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ts(t){if(_r(!!t),"string"==typeof t){let e=0;const n=Zr.exec(t);if(_r(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:es(t.seconds),nanos:es(t.nanos)}}function es(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ns(t){return"string"==typeof t?Jr.fromBase64String(t):Jr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function rs(t){const e=ts(t.mapValue.fields.__local_write_time__.timestampValue);return new Hr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){return null==t}function os(t){return 0===t&&1/t==-1/0}function as(t){return"number"==typeof t&&Number.isInteger(t)&&!os(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t){this.path=t}static fromPath(t){return new hs(Xr.fromString(t))}static fromName(t){return new hs(Xr.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Xr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Xr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new hs(new Xr(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?is(t)?4:10:Nr()}function ls(t,e){const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rs(t).isEqual(rs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ts(t.timestampValue),i=ts(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,ns(t.bytesValue).isEqual(ns(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return es(t.geoPointValue.latitude)===es(e.geoPointValue.latitude)&&es(t.geoPointValue.longitude)===es(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return es(t.integerValue)===es(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=es(t.doubleValue),i=es(e.doubleValue);return n===i?os(n)===os(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Br(t.arrayValue.values||[],e.arrayValue.values||[],ls);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if($r(n)!==$r(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!ls(n[t],i[t])))return!1;return!0}(t,e);default:return Nr()}var i}function us(t,e){return void 0!==(t.values||[]).find((t=>ls(t,e)))}function fs(t,e){const n=cs(t),i=cs(e);if(n!==i)return jr(n,i);switch(n){case 0:return 0;case 1:return jr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=es(t.integerValue||t.doubleValue),i=es(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return ds(t.timestampValue,e.timestampValue);case 4:return ds(rs(t),rs(e));case 5:return jr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ns(t),i=ns(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=jr(n[t],i[t]);if(0!==e)return e}return jr(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=jr(es(t.latitude),es(e.latitude));return 0!==n?n:jr(es(t.longitude),es(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=fs(n[t],i[t]);if(e)return e}return jr(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=jr(i[t],s[t]);if(0!==e)return e;const o=fs(n[i[t]],r[s[t]]);if(0!==o)return o}return jr(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Nr()}}function ds(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return jr(t,e);const n=ts(t),i=ts(e),r=jr(n.seconds,i.seconds);return 0!==r?r:jr(n.nanos,i.nanos)}function ps(t){return gs(t)}function gs(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ts(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,hs.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=gs(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${gs(t.fields[r])}`;return n+"}"}(t.mapValue):Nr()}function ms(t){return!!t&&"integerValue"in t}function ys(t){return!!t&&"arrayValue"in t}function vs(t){return!!t&&"mapValue"in t}function ws(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ws(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ws(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t){this.value=t}static empty(){return new bs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!vs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ws(e)}setAll(t){let e=Qr.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=ws(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());vs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ls(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];vs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Kr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new bs(ws(this.value))}}function Es(t){const e=[];return Kr(t.fields,((t,n)=>{const i=new Qr([t]);if(vs(n)){const t=Es(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Yr(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ts{constructor(t,e,n,i,r){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Ts(t,0,qr.min(),bs.empty(),0)}static newFoundDocument(t,e,n){return new Ts(t,1,e,n,0)}static newNoDocument(t,e){return new Ts(t,2,e,bs.empty(),0)}static newUnknownDocument(t,e){return new Ts(t,3,e,bs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Ts&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Ts(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.A=null}}function As(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Is(t,e,n,i,r,s,o)}function Ss(t){const e=Dr(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+ps(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),ss(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Ms(e.startAt)),e.endAt&&(t+="|ub:",t+=Ms(e.endAt)),e.A=t}return e.A}function Ns(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(n=t.orderBy[r],i=e.orderBy[r],n.dir!==i.dir||!n.field.isEqual(i.field))return!1;var n,i,r,s;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(r=t.filters[n],s=e.filters[n],r.op!==s.op||!r.field.isEqual(s.field)||!ls(r.value,s.value))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!js(t.startAt,e.startAt)&&js(t.endAt,e.endAt)}class _s extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Ds(t,e,n):"array-contains"===e?new Ls(t,n):"in"===e?new ks(t,n):"not-in"===e?new xs(t,n):"array-contains-any"===e?new Ps(t,n):new _s(t,e,n)}static R(t,e,n){return"in"===e?new Cs(t,n):new Rs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(fs(e,this.value)):null!==e&&cs(this.value)===cs(e)&&this.P(fs(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Nr()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Ds extends _s{constructor(t,e,n){super(t,e,n),this.key=hs.fromName(n.referenceValue)}matches(t){const e=hs.comparator(t.key,this.key);return this.P(e)}}class Cs extends _s{constructor(t,e){super(t,"in",e),this.keys=Os("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Rs extends _s{constructor(t,e){super(t,"not-in",e),this.keys=Os("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Os(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>hs.fromName(t.referenceValue)))}class Ls extends _s{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ys(e)&&us(e.arrayValue,this.value)}}class ks extends _s{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&us(this.value.arrayValue,e)}}class xs extends _s{constructor(t,e){super(t,"not-in",e)}matches(t){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!us(this.value.arrayValue,e)}}class Ps extends _s{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>us(this.value.arrayValue,t)))}}class Fs{constructor(t,e){this.position=t,this.before=e}}function Ms(t){return`${t.before?"b":"a"}:${t.position.map((t=>ps(t))).join(",")}`}class Us{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vs(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?hs.comparator(hs.fromName(o.referenceValue),n.key):fs(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function js(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ls(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Hs(t,e,n,i,r,s,o,a){return new Bs(t,e,n,i,r,s,o,a)}function qs(t){return new Bs(t)}function $s(t){return!ss(t.limit)&&"F"===t.limitType}function Ks(t){return!ss(t.limit)&&"L"===t.limitType}function Gs(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zs(t){for(const e of t.filters)if(e.v())return e.field;return null}function Xs(t){return null!==t.collectionGroup}function Ws(t){const e=Dr(t);if(null===e.V){e.V=[];const t=zs(e),n=Gs(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Us(t)),e.V.push(new Us(Qr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Us(Qr.keyField(),t))}}}return e.V}function Qs(t){const e=Dr(t);if(!e.S)if("F"===e.limitType)e.S=As(e.path,e.collectionGroup,Ws(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ws(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Us(n.field,e))}const n=e.endAt?new Fs(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Fs(e.startAt.position,!e.startAt.before):null;e.S=As(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.S}function Ys(t,e,n){return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Js(t,e){return Ns(Qs(t),Qs(e))&&t.limitType===e.limitType}function Zs(t){return`${Ss(Qs(t))}|lt:${t.limitType}`}function to(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${ps(e.value)}`})).join(", ")}]`),ss(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ms(t.startAt)),t.endAt&&(e+=", endAt: "+Ms(t.endAt)),`Target(${e})`}(Qs(t))}; limitType=${t.limitType})`}function eo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):hs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!Vs(n.startAt,Ws(n),i)||n.endAt&&Vs(n.endAt,Ws(n),i)));var n,i}function no(t){return(e,n)=>{let i=!1;for(const r of Ws(t)){const t=io(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function io(t,e,n){const i=t.field.isKeyField()?hs.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?fs(i,r):Nr()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Nr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(e)?"-0":e}}function so(t){return{integerValue:""+t}}function oo(t,e){return as(e)?so(e):ro(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this._=void 0}}function ho(t,e){var n,i;return t instanceof go?ms(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class co extends ao{}class lo extends ao{constructor(t){super(),this.elements=t}}function uo(t,e){const n=yo(e);for(const e of t.elements)n.some((t=>ls(t,e)))||n.push(e);return{arrayValue:{values:n}}}class fo extends ao{constructor(t){super(),this.elements=t}}function po(t,e){let n=yo(e);for(const e of t.elements)n=n.filter((t=>!ls(t,e)));return{arrayValue:{values:n}}}class go extends ao{constructor(t,e){super(),this.N=t,this.C=e}}function mo(t){return es(t.integerValue||t.doubleValue)}function yo(t){return ys(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e){this.version=t,this.transformResults=e}}class wo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new wo}static exists(t){return new wo(void 0,t)}static updateTime(t){return new wo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Eo{}function To(t,e,n){var i;t instanceof No?function(t,e,n){if(!bo(t.precondition,e))return;const i=t.value.clone(),r=Ro(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(So(e),i).setHasLocalMutations()}(t,e,n):t instanceof _o?function(t,e,n){if(!bo(t.precondition,e))return;const i=Ro(t.fieldTransforms,n,e),r=e.data;r.setAll(Do(t)),r.setAll(i),e.convertToFoundDocument(So(e),r).setHasLocalMutations()}(t,e,n):(i=e,bo(t.precondition,i)&&i.convertToNoDocument(qr.min()))}function Io(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=ho(i.transform,t||null);null!=r&&(null==n&&(n=bs.empty()),n.set(i.field,r))}return n||null}function Ao(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Br(n,i,((t,e)=>{return i=e,(n=t).field.isEqual(i.field)&&(r=n.transform,s=i.transform,r instanceof lo&&s instanceof lo||r instanceof fo&&s instanceof fo?Br(r.elements,s.elements,ls):r instanceof go&&s instanceof go?ls(r.C,s.C):r instanceof co&&s instanceof co);var n,i,r,s}))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}function So(t){return t.isFoundDocument()?t.version:qr.min()}class No extends Eo{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class _o extends Eo{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function Do(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Co(t,e,n){const i=new Map;_r(t.length===n.length);for(let a=0;a<n.length;a++){const h=t[a],c=h.transform,l=e.data.field(h.field);i.set(h.field,(r=c,s=l,o=n[a],r instanceof lo?uo(r,s):r instanceof fo?po(r,s):o))}var r,s,o;return i}function Ro(t,e,n){const i=new Map;for(const a of t){const t=a.transform,h=n.data.field(a.field);i.set(a.field,(s=h,o=e,(r=t)instanceof co?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):r instanceof lo?uo(r,s):r instanceof fo?po(r,s):function(t,e){const n=ho(t,e),i=mo(n)+mo(t.C);return ms(n)&&ms(t.C)?so(i):ro(t.N,i)}(r,s)))}var r,s,o;return i}class Oo extends Eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Lo extends Eo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ko,xo;function Po(t){switch(t){case Cr.OK:return Nr();case Cr.CANCELLED:case Cr.UNKNOWN:case Cr.DEADLINE_EXCEEDED:case Cr.RESOURCE_EXHAUSTED:case Cr.INTERNAL:case Cr.UNAVAILABLE:case Cr.UNAUTHENTICATED:return!1;case Cr.INVALID_ARGUMENT:case Cr.NOT_FOUND:case Cr.ALREADY_EXISTS:case Cr.PERMISSION_DENIED:case Cr.FAILED_PRECONDITION:case Cr.ABORTED:case Cr.OUT_OF_RANGE:case Cr.UNIMPLEMENTED:case Cr.DATA_LOSS:return!0;default:return Nr()}}function Fo(t){if(void 0===t)return Ir("GRPC error has no .code"),Cr.UNKNOWN;switch(t){case ko.OK:return Cr.OK;case ko.CANCELLED:return Cr.CANCELLED;case ko.UNKNOWN:return Cr.UNKNOWN;case ko.DEADLINE_EXCEEDED:return Cr.DEADLINE_EXCEEDED;case ko.RESOURCE_EXHAUSTED:return Cr.RESOURCE_EXHAUSTED;case ko.INTERNAL:return Cr.INTERNAL;case ko.UNAVAILABLE:return Cr.UNAVAILABLE;case ko.UNAUTHENTICATED:return Cr.UNAUTHENTICATED;case ko.INVALID_ARGUMENT:return Cr.INVALID_ARGUMENT;case ko.NOT_FOUND:return Cr.NOT_FOUND;case ko.ALREADY_EXISTS:return Cr.ALREADY_EXISTS;case ko.PERMISSION_DENIED:return Cr.PERMISSION_DENIED;case ko.FAILED_PRECONDITION:return Cr.FAILED_PRECONDITION;case ko.ABORTED:return Cr.ABORTED;case ko.OUT_OF_RANGE:return Cr.OUT_OF_RANGE;case ko.UNIMPLEMENTED:return Cr.UNIMPLEMENTED;case ko.DATA_LOSS:return Cr.DATA_LOSS;default:return Nr()}}(xo=ko||(ko={}))[xo.OK=0]="OK",xo[xo.CANCELLED=1]="CANCELLED",xo[xo.UNKNOWN=2]="UNKNOWN",xo[xo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xo[xo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xo[xo.NOT_FOUND=5]="NOT_FOUND",xo[xo.ALREADY_EXISTS=6]="ALREADY_EXISTS",xo[xo.PERMISSION_DENIED=7]="PERMISSION_DENIED",xo[xo.UNAUTHENTICATED=16]="UNAUTHENTICATED",xo[xo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xo[xo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xo[xo.ABORTED=10]="ABORTED",xo[xo.OUT_OF_RANGE=11]="OUT_OF_RANGE",xo[xo.UNIMPLEMENTED=12]="UNIMPLEMENTED",xo[xo.INTERNAL=13]="INTERNAL",xo[xo.UNAVAILABLE=14]="UNAVAILABLE",xo[xo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mo{constructor(t,e){this.comparator=t,this.root=e||Vo.EMPTY}insert(t,e){return new Mo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Vo.BLACK,null,null))}remove(t){return new Mo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Uo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Uo(this.root,t,this.comparator,!0)}}class Uo{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vo{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Vo.RED,this.left=null!=i?i:Vo.EMPTY,this.right=null!=r?r:Vo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Vo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Vo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Vo.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Nr();if(this.right.isRed())throw Nr();const t=this.left.check();if(t!==this.right.check())throw Nr();return t+(this.isRed()?0:1)}}Vo.EMPTY=null,Vo.RED=!0,Vo.BLACK=!1,Vo.EMPTY=new class{constructor(){this.size=0}get key(){throw Nr()}get value(){throw Nr()}get color(){throw Nr()}get left(){throw Nr()}get right(){throw Nr()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Vo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t){this.comparator=t,this.data=new Mo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Bo(this.data.getIterator())}getIteratorFrom(t){return new Bo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof jo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new jo(this.comparator);return e.data=t,e}}class Bo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Mo(hs.comparator);function qo(){return Ho}const $o=new Mo(hs.comparator);function Ko(){return $o}const Go=new Mo(hs.comparator);function zo(){return Go}const Xo=new jo(hs.comparator);function Wo(...t){let e=Xo;for(const n of t)e=e.add(n);return e}const Qo=new jo(jr);function Yo(){return Qo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e){this.databaseId=t,this.D=e}}function Zo(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ta(t,e){return t.D?e.toBase64():e.toUint8Array()}function ea(t,e){return Zo(t,e.toTimestamp())}function na(t){return _r(!!t),qr.fromTimestamp(function(t){const e=ts(t);return new Hr(e.seconds,e.nanos)}(t))}function ia(t,e){return(n=t,new Xr(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function ra(t){const e=Xr.fromString(t);return _r(va(e)),e}function sa(t,e){return ia(t.databaseId,e.path)}function oa(t){const e=ra(t);return 4===e.length?Xr.emptyPath():ha(e)}function aa(t){return new Xr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ha(t){return _r(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ca(t,e,n){return{name:sa(t,e),fields:n.value.mapValue.fields}}function la(t,e){let n;if(e instanceof No)n={update:ca(t,e.key,e.value)};else if(e instanceof Oo)n={delete:sa(t,e.key)};else if(e instanceof _o)n={update:ca(t,e.key,e.data),updateMask:ya(e.fieldMask)};else{if(!(e instanceof Lo))return Nr();n={verify:sa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof co)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof lo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof fo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof go)return{fieldPath:e.field.canonicalString(),increment:n.C};throw Nr()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(r=e.precondition).updateTime?{updateTime:ea(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Nr())),n;var i,r}function ua(t){let e=oa(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){_r(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=fa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Us(pa((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ss(e)?null:e}(n.limit));let h=null;n.startAt&&(h=da(n.startAt));let c=null;return n.endAt&&(c=da(n.endAt)),Hs(e,r,o,s,a,"F",h,c)}function fa(t){return t?void 0!==t.unaryFilter?[ma(t)]:void 0!==t.fieldFilter?[ga(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>fa(t))).reduce(((t,e)=>t.concat(e))):Nr():[]}function da(t){const e=!!t.before,n=t.values||[];return new Fs(n,e)}function pa(t){return Qr.fromServerFormat(t.fieldPath)}function ga(t){return _s.create(pa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return Nr()}}(t.fieldFilter.op),t.fieldFilter.value)}function ma(t){switch(t.unaryFilter.op){case"IS_NAN":const e=pa(t.unaryFilter.field);return _s.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=pa(t.unaryFilter.field);return _s.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pa(t.unaryFilter.field);return _s.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=pa(t.unaryFilter.field);return _s.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return Nr()}}function ya(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function va(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ea(e)),e=ba(t.get(n),e);return Ea(e)}function ba(t,e){let n=e;const i=t.length;for(let e=0;e<i;e++){const i=t.charAt(e);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Ea(t){return t+""}class Ta{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Ta.store="owner",Ta.key="owner";class Ia{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}Ia.store="mutationQueues",Ia.keyPath="userId";class Aa{constructor(t,e,n,i,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=r}}Aa.store="mutations",Aa.keyPath="batchId",Aa.userMutationsIndex="userMutationsIndex",Aa.userMutationsKeyPath=["userId","batchId"];class Sa{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,wa(e)]}static key(t,e,n){return[t,wa(e),n]}}Sa.store="documentMutations",Sa.PLACEHOLDER=new Sa;class Na{constructor(t,e,n,i,r,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=s}}Na.store="remoteDocuments",Na.readTimeIndex="readTimeIndex",Na.readTimeIndexPath="readTime",Na.collectionReadTimeIndex="collectionReadTimeIndex",Na.collectionReadTimeIndexPath=["parentPath","readTime"];class _a{constructor(t){this.byteSize=t}}_a.store="remoteDocumentGlobal",_a.key="remoteDocumentGlobalKey";class Da{constructor(t,e,n,i,r,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Da.store="targets",Da.keyPath="targetId",Da.queryTargetsIndexName="queryTargetsIndex",Da.queryTargetsKeyPath=["canonicalId","targetId"];class Ca{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}Ca.store="targetDocuments",Ca.keyPath=["targetId","path"],Ca.documentTargetsIndex="documentTargetsIndex",Ca.documentTargetsKeyPath=["path","targetId"];class Ra{constructor(t,e,n,i){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}Ra.key="targetGlobalKey",Ra.store="targetGlobal";class Oa{constructor(t,e){this.collectionId=t,this.parent=e}}Oa.store="collectionParents",Oa.keyPath=["collectionId","parent"];class La{constructor(t,e,n,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=i}}La.store="clientMetadata",La.keyPath="clientId";class ka{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}ka.store="bundles",ka.keyPath="bundleId";class xa{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}xa.store="namedQueries",xa.keyPath="name";Ia.store,Aa.store,Sa.store,Na.store,Da.store,Ta.store,Ra.store,Ca.store,La.store,_a.store,Oa.store,ka.store,xa.store;const Pa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Nr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ma(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ma?e:Ma.resolve(e)}catch(t){return Ma.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ma.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ma.reject(e)}static resolve(t){return new Ma(((e,n)=>{e(t)}))}static reject(t){return new Ma(((e,n)=>{n(t)}))}static waitFor(t){return new Ma(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=Ma.resolve(!1);for(const n of t)e=e.next((t=>t?Ma.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const a=this.mutations[e];a.key.isEqual(t.key)&&(i=a,r=t,s=n[e],o=void 0,i instanceof No?function(t,e,n){const i=t.value.clone(),r=Co(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,r,s):i instanceof _o?function(t,e,n){if(!bo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Co(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Do(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,r,s):(o=s,r.convertToNoDocument(o.version).setHasCommittedMutations()))}var i,r,s,o}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&To(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&To(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(qr.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Wo())}isEqual(t){return this.batchId===t.batchId&&Br(this.mutations,t.mutations,((t,e)=>Ao(t,e)))&&Br(this.baseMutations,t.baseMutations,((t,e)=>Ao(t,e)))}}class ja{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){_r(t.mutations.length===n.length);let i=zo();const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new ja(t,e,n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this.Wt=t}}function Ha(t){const e=ua({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ys(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa{constructor(){this.Gt=new $a}addToCollectionParentIndex(t,e){return this.Gt.add(e),Ma.resolve()}getCollectionParents(t,e){return Ma.resolve(this.Gt.getEntries(e))}}class $a{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new jo(Xr.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new jo(Xr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ka(t,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ka.DEFAULT_COLLECTION_PERCENTILE=10,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ka.DEFAULT=new Ka(41943040,Ka.DEFAULT_COLLECTION_PERCENTILE,Ka.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ka.DISABLED=new Ka(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new Ga(0)}static ie(){return new Ga(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function za(t){if(t.code!==Cr.FAILED_PRECONDITION||t.message!==Pa)throw t;Tr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){Kr(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Gr(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.changes=new Xa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:qr.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Ts.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ma.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Rn(t,e,n)))}Rn(t,e,n){return this.He.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}Pn(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}bn(t,e){return this.He.getEntries(t,e).next((e=>this.vn(t,e).next((()=>e))))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.Pn(e,t)))}getDocumentsMatchingQuery(t,e,n){return i=e,hs.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.Vn(t,e.path):Xs(e)?this.Sn(t,e,n):this.Dn(t,e,n);var i}Vn(t,e){return this.An(t,new hs(e)).next((t=>{let e=Ko();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Sn(t,e,n){const i=e.collectionGroup;let r=Ko();return this.Ht.getCollectionParents(t,i).next((s=>Ma.forEach(s,(s=>{const o=(a=e,h=s.child(i),new Bs(h,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,h;return this.Dn(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}Dn(t,e,n){let i,r;return this.He.getDocumentsMatchingQuery(t,e,n).next((n=>(i=n,this.In.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(r=e,this.Cn(t,r,i).next((t=>{i=t;for(const t of r)for(const e of t.mutations){const n=e.key;let r=i.get(n);null==r&&(r=Ts.newInvalidDocument(n),i=i.insert(n,r)),To(e,r,t.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))))).next((()=>(i.forEach(((t,n)=>{eo(e,n)||(i=i.remove(t))})),i)))}Cn(t,e,n){let i=Wo();for(const t of e)for(const e of t.mutations)e instanceof _o&&null===n.get(e.key)&&(i=i.add(e.key));let r=n;return this.He.getEntries(t,i).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=i}static kn(t,e){let n=Wo(),i=Wo();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Ya(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,i){return 0===(r=e).filters.length&&null===r.limit&&null==r.startAt&&null==r.endAt&&(0===r.explicitOrderBy.length||1===r.explicitOrderBy.length&&r.explicitOrderBy[0].field.isKeyField())||n.isEqual(qr.min())?this.Fn(t,e):this.On.bn(t,i).next((r=>{const s=this.Mn(e,r);return($s(e)||Ks(e))&&this.Ln(e.limitType,s,i,n)?this.Fn(t,e):(Er()<=I.DEBUG&&Tr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),to(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(s.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var r}Mn(t,e){let n=new jo(no(t));return e.forEach(((e,i)=>{eo(t,i)&&(n=n.add(i))})),n}Ln(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,e){return Er()<=I.DEBUG&&Tr("QueryEngine","Using full collection scan to execute query:",to(e)),this.On.getDocumentsMatchingQuery(t,e,qr.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,e,n,i){this.persistence=t,this.Bn=e,this.N=i,this.Un=new Mo(jr),this.qn=new Xa((t=>Ss(t)),Ns),this.Kn=qr.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new Qa(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Un)))}}function th(t,e,n,i){return new Za(t,e,n,i)}async function eh(t,e){const n=Dr(t);let i=n.In,r=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.In.getAllMutationBatches(t).next((o=>(s=o,i=n.persistence.getMutationQueue(e),r=new Qa(n.jn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t)))).next((e=>{const n=[],i=[];let o=Wo();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.bn(t,o).next((t=>({Wn:t,removedBatchIds:n,addedBatchIds:i})))}))}));return n.In=i,n.Qn=r,n.Bn.$n(n.Qn),s}function nh(t){const e=Dr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.ze.getLastRemoteSnapshotVersion(t)))}function ih(t,e){const n=Dr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rh{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Ma.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:na(n.createTime)}),Ma.resolve()}getNamedQuery(t,e){return Ma.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,{name:(n=e).name,query:Ha(n.bundledQuery),readTime:na(n.readTime)}),Ma.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.Zn=new jo(oh.ts),this.es=new jo(oh.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new oh(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new oh(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}cs(t){const e=new hs(new Xr([])),n=new oh(e,t),i=new oh(e,t+1),r=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),r.push(t.key)})),r}us(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new hs(new Xr([])),n=new oh(e,t),i=new oh(e,t+1);let r=Wo();return this.es.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new oh(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class oh{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return hs.comparator(t.key,e.key)||jr(t.ls,e.ls)}static ns(t,e){return jr(t.ls,e.ls)||hs.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new jo(oh.ts)}checkEmpty(t){return Ma.resolve(0===this.In.length)}addMutationBatch(t,e,n,i){const r=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Va(r,e,n,i);this.In.push(s);for(const e of i)this.ds=this.ds.add(new oh(e.key,r)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return Ma.resolve(s)}lookupMutationBatch(t,e){return Ma.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this._s(n),r=i<0?0:i;return Ma.resolve(this.In.length>r?this.In[r]:null)}getHighestUnacknowledgedBatchId(){return Ma.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Ma.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new oh(e,0),i=new oh(e,Number.POSITIVE_INFINITY),r=[];return this.ds.forEachInRange([n,i],(t=>{const e=this.ws(t.ls);r.push(e)})),Ma.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new jo(jr);return e.forEach((t=>{const e=new oh(t,0),i=new oh(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),Ma.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;hs.isDocumentKey(r)||(r=r.child(""));const s=new oh(new hs(r),0);let o=new jo(jr);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),s),Ma.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this.ws(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){_r(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Ma.forEach(e.mutations,(i=>{const r=new oh(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}te(t){}containsKey(t,e){const n=new oh(e,0),i=this.ds.firstAfterOrEqual(n);return Ma.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.In.length,Ma.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Mo(hs.comparator),this.size=0}addEntry(t,e,n){const i=e.key,r=this.docs.get(i),s=r?r.size:0,o=this.ps(e);return this.docs=this.docs.insert(i,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ma.resolve(n?n.document.clone():Ts.newInvalidDocument(e))}getEntries(t,e){let n=qo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Ts.newInvalidDocument(t))})),Ma.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=qo();const r=new hs(e.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||eo(e,r)&&(i=i.insert(r.key,r.clone()))}return Ma.resolve(i)}Es(t,e){return Ma.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ch(this)}getSize(t){return Ma.resolve(this.size)}}class ch extends Wa{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.document.isValidDocument()?e.push(this.Se.addEntry(t,i.document,this.getReadTime(n))):this.Se.removeEntry(n)})),Ma.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.persistence=t,this.Ts=new Xa((t=>Ss(t)),Ns),this.lastRemoteSnapshotVersion=qr.min(),this.highestTargetId=0,this.Is=0,this.As=new sh,this.targetCount=0,this.Rs=Ga.se()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Ma.resolve()}getLastRemoteSnapshotVersion(t){return Ma.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ma.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ma.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Ma.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ga(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Ma.resolve()}updateTargetData(t,e){return this.ae(e),Ma.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Ma.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Ma.waitFor(r).next((()=>i))}getTargetCount(t){return Ma.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ma.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ma.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),Ma.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Ma.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ma.resolve(n)}containsKey(t,e){return Ma.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e){var n;this.Ps={},this.Le=new Mr(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new lh(this),this.Ht=new qa,this.He=(n=this.Ht,new hh(n,(t=>this.referenceDelegate.bs(t)))),this.N=new Ba(e),this.Je=new rh(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new ah(this.Ht,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){Tr("MemoryPersistence","Starting transaction:",t);const i=new fh(this.Le.next());return this.referenceDelegate.vs(),n(i).next((t=>this.referenceDelegate.Vs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ss(t,e){return Ma.or(Object.values(this.Ps).map((n=>()=>n.containsKey(t,e))))}}class fh extends Fa{constructor(t){super(),this.currentSequenceNumber=t}}class dh{constructor(t){this.persistence=t,this.Ds=new sh,this.Cs=null}static Ns(t){return new dh(t)}get xs(){if(this.Cs)return this.Cs;throw Nr()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Ma.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Ma.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Ma.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ma.forEach(this.xs,(n=>{const i=hs.fromPath(n);return this.ks(t,i).next((t=>{t||e.removeEntry(i)}))})).next((()=>(this.Cs=null,e.apply(t))))}updateLimboDocument(t,e){return this.ks(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}bs(t){return 0}ks(t,e){return Ma.or([()=>Ma.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.activeTargetIds=Yo()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class gh{constructor(){this.yi=new ph,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new ph,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.Pi=[],this.bi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}bi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){Tr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}Ri(){Tr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,i){const r=this.Bi(t,e);Tr("RestConnection","Sending: ",r,n);const s={};return this.Ui(s,i),this.qi(t,r,s,n).then((t=>(Tr("RestConnection","Received: ",t),t)),(e=>{throw Ar("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}Ki(t,e,n,i){return this.Li(t,e,n,i)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+wr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=vh[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,i){return new Promise(((r,s)=>{const o=new sr;o.listenOnce(tr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Zi.NO_ERROR:const e=o.getResponseJson();Tr("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Zi.TIMEOUT:Tr("Connection",'RPC "'+t+'" timed out'),s(new Rr(Cr.DEADLINE_EXCEEDED,"Request time out"));break;case Zi.HTTP_ERROR:const n=o.getStatus();if(Tr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Cr).indexOf(e)>=0?e:Cr.UNKNOWN}(t.status);s(new Rr(e,t.message))}else s(new Rr(Cr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Rr(Cr.UNAVAILABLE,"Connection failed."));break;default:Nr()}}finally{Tr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Yi(),r=Ji(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};var o,a;this.useFetchStreams&&(s.xmlHttpFactory=new ir({})),this.Ui(s.initMessageHeaders,e),"undefined"!=typeof window&&(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(c())||"object"==typeof navigator&&"ReactNative"===navigator.product||c().indexOf("Electron/")>=0||((a=c()).indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0)||c().indexOf("MSAppHost/")>=0||"object"==typeof(o="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==o.id||(s.httpHeadersOverwriteParam="$httpHeaders");const h=n.join("");Tr("Connection","Creating WebChannel: "+h,s);const l=i.createWebChannel(h,s);let u=!1,f=!1;const d=new wh({vi:t=>{f?Tr("Connection","Not sending because WebChannel is closed:",t):(u||(Tr("Connection","Opening WebChannel transport."),l.open(),u=!0),Tr("Connection","WebChannel sending:",t),l.send(t))},Vi:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,rr.EventType.OPEN,(()=>{f||Tr("Connection","WebChannel transport opened.")})),p(l,rr.EventType.CLOSE,(()=>{f||(f=!0,Tr("Connection","WebChannel transport closed"),d.$i())})),p(l,rr.EventType.ERROR,(t=>{f||(f=!0,Ar("Connection","WebChannel transport errored:",t),d.$i(new Rr(Cr.UNAVAILABLE,"The operation could not be completed")))})),p(l,rr.EventType.MESSAGE,(t=>{var e;if(!f){const n=t.data[0];_r(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){Tr("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=ko[t];if(void 0!==e)return Fo(e)}(t),n=r.message;void 0===e&&(e=Cr.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),f=!0,d.$i(new Rr(e,n)),l.close()}else Tr("Connection","WebChannel received:",n),d.Oi(n)}})),p(r,er.STAT_EVENT,(t=>{t.stat===nr.PROXY?Tr("Connection","Detected buffering proxy"):t.stat===nr.NOPROXY&&Tr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.ki()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){return new Jo(t,!0)}class Ih{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=i,this.Gi=r,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),i=Math.max(0,e-n);i>0&&Tr("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,(()=>(this.Ji=Date.now(),t()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,n,i,r,s){this.Oe=t,this.er=n,this.nr=i,this.credentialsProvider=r,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Ih(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===Cr.RESOURCE_EXHAUSTED?(Ir(e.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===Cr.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then((t=>{this.sr===e&&this.yr(t)}),(e=>{t((()=>{const t=new Rr(Cr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)}))}))}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si((()=>{e((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((t=>{e((()=>this.pr(t)))})),this.stream.onMessage((t=>{e((()=>this.onMessage(t)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(t){return Tr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget((()=>this.sr===t?e():(Tr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Sh extends Ah{constructor(t,e,n,i,r){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,r),this.N=i,this.Rr=!1}get Pr(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.br([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(_r(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(_r(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?na(t.updateTime):na(e);return n.isEqual(qr.min())&&(n=na(e)),new vo(n,t.transformResults||[])}(t,n)))):[]),r=na(t.commitTime);return this.listener.vr(r,i)}var e,n;return _r(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=aa(this.N),this.wr(t)}br(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>la(this.N,t)))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new Rr(Cr.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then((i=>this.nr.Li(t,e,n,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Cr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Rr(Cr.UNKNOWN,t.toString())}))}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then((i=>this.nr.Ki(t,e,n,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Cr.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new Rr(Cr.UNKNOWN,t.toString())}))}terminate(){this.Dr=!0}}class _h{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(Ir(e),this.$r=!1):Tr("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=r,this.Qr.Ei((t=>{n.enqueueAndForget((async()=>{Oh(this)&&(Tr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Dr(t);e.Kr.add(4),await Rh(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Ch(e)}(this))}))})),this.Wr=new _h(n,i)}}async function Ch(t){if(Oh(t))for(const e of t.jr)await e(!0)}async function Rh(t){for(const e of t.jr)await e(!1)}function Oh(t){return 0===Dr(t).Kr.size}async function Lh(t,e,n){if(!Ua(e))throw e;t.Kr.add(1),await Rh(t),t.Wr.set("Offline"),n||(n=()=>nh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Tr("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Ch(t)}))}function kh(t,e){return e().catch((n=>Lh(t,n,e)))}async function xh(t){const e=Dr(t),n=$h(e);let i=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;Ph(e);)try{const t=await ih(e.localStore,i);if(null===t){0===e.Ur.length&&n.lr();break}i=t.batchId,Fh(e,t)}catch(t){await Lh(e,t)}Mh(e)&&Uh(e)}function Ph(t){return Oh(t)&&t.Ur.length<10}function Fh(t,e){t.Ur.push(e);const n=$h(t);n.cr()&&n.Pr&&n.br(e.mutations)}function Mh(t){return Oh(t)&&!$h(t).ar()&&t.Ur.length>0}function Uh(t){$h(t).start()}async function Vh(t){$h(t).Sr()}async function jh(t){const e=$h(t);for(const n of t.Ur)e.br(n.mutations)}async function Bh(t,e,n){const i=t.Ur.shift(),r=ja.from(i,e,n);await kh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await xh(t)}async function Hh(t,e){e&&$h(t).Pr&&await async function(t,e){if(Po(n=e.code)&&n!==Cr.ABORTED){const n=t.Ur.shift();$h(t).hr(),await kh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await xh(t)}var n}(t,e),Mh(t)&&Uh(t)}async function qh(t,e){const n=Dr(t);e?(n.Kr.delete(2),await Ch(n)):e||(n.Kr.add(2),await Rh(n),n.Wr.set("Unknown"))}function $h(t){return t.Hr||(t.Hr=function(t,e,n){const i=Dr(t);return i.Cr(),new Sh(e,i.nr,i.credentials,i.N,n)}(t.datastore,t.asyncQueue,{Si:Vh.bind(null,t),Ci:Hh.bind(null,t),Vr:jh.bind(null,t),vr:Bh.bind(null,t)}),t.jr.push((async e=>{e?(t.Hr.hr(),await xh(t)):(await t.Hr.stop(),t.Ur.length>0&&(Tr("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))}))),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Kh{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Kh(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Rr(Cr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gh(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),Ua(t))return new Rr(Cr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.queries=new Xa((t=>Zs(t)),Js),this.onlineState="Unknown",this.Zr=new Set}}function Xh(t){t.Zr.forEach((t=>{t.next()}))}class Wh{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new Xa((t=>Zs(t)),Js),this.ko=new Map,this.$o=new Set,this.Oo=new Mo(hs.comparator),this.Fo=new Map,this.Mo=new sh,this.Lo={},this.Bo=new Map,this.Uo=Ga.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}function Qh(t,e,n){const i=Dr(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.xo.forEach(((n,i)=>{const r=i.view.eo(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Dr(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.eo(e)&&(i=!0)})),i&&Xh(n)}(i.eventManager,e),t.length&&i.No.Tr(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Yh(t,e){const n=Dr(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Dr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=Ma.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);_r(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&i.addEntry(e,n.commitVersion))}))})),o.next((()=>t.In.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.bn(t,i)))}))}(n.localStore,e);tc(n,i,null),Zh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ec(n,t)}catch(t){await za(t)}}async function Jh(t,e,n){const i=Dr(t);try{const t=await function(t,e){const n=Dr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.In.lookupMutationBatch(t,e).next((e=>(_r(null!==e),i=e.keys(),n.In.removeMutationBatch(t,e)))).next((()=>n.In.performConsistencyCheck(t))).next((()=>n.Qn.bn(t,i)))}))}(i.localStore,e);tc(i,e,n),Zh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ec(i,t)}catch(t){await za(t)}}function Zh(t,e){(t.Bo.get(e)||[]).forEach((t=>{t.resolve()})),t.Bo.delete(e)}function tc(t,e,n){const i=Dr(t);let r=i.Lo[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Lo[i.currentUser.toKey()]=r}}async function ec(t,e,n){const i=Dr(t),r=[],s=[],o=[];i.xo.isEmpty()||(i.xo.forEach(((t,a)=>{o.push(i.Ko(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Ya.kn(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.No.Tr(r),await async function(t,e){const n=Dr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ma.forEach(e,(e=>Ma.forEach(e.Nn,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Ma.forEach(e.xn,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Ua(t))throw t;Tr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Un=n.Un.insert(e,r)}}}(i.localStore,s))}async function nc(t,e){const n=Dr(t);if(!n.currentUser.isEqual(e)){Tr("SyncEngine","User change. New user:",e.toKey());const t=await eh(n.localStore,e);n.currentUser=e,(i=n).Bo.forEach((t=>{t.forEach((t=>{t.reject(new Rr(Cr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Bo.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ec(n,t.Wn)}var i}function ic(t){const e=Dr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jh.bind(null,e),e}class rc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Th(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return th(this.persistence,new Ja,t.initialUser,this.N)}Go(t){return new uh(dh.Ns,this.N)}Wo(t){return new gh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Qh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=nc.bind(null,this.syncEngine),await qh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new zh}createDatastore(t){const e=Th(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new bh(i));var i,r;return r=t.credentials,new Nh(r,n,e)}createRemoteStore(t){var e,n,i,r,s;return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>Qh(this.syncEngine,t,0),s=yh.Pt()?new yh:new mh,new Dh(e,n,i,r,s)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Wh(t,e,n,i,r,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Dr(t);Tr("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await Rh(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=vr.UNAUTHENTICATED,this.clientId=Vr.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,(async t=>{Tr("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Rr(Cr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Gh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ac(t,e){t.asyncQueue.verifyOperationInProgress(),Tr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await eh(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function hc(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cc(t);Tr("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>async function(t,e){const n=Dr(t);n.asyncQueue.verifyOperationInProgress(),Tr("RemoteStore","RemoteStore received new credentials");const i=Oh(n);n.Kr.add(3),await Rh(n),i&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Ch(n)}(e.remoteStore,t))),t.onlineComponents=e}async function cc(t){return t.offlineComponents||(Tr("FirestoreClient","Using default OfflineComponentProvider"),await ac(t,new rc)),t.offlineComponents}async function lc(t){return t.onlineComponents||(Tr("FirestoreClient","Using default OnlineComponentProvider"),await hc(t,new sc)),t.onlineComponents}function uc(t){return lc(t).then((t=>t.syncEngine))}class fc{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class dc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof dc&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t,e,n){if(!n)throw new Rr(Cr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mc(t){if(!hs.isDocumentKey(t))throw new Rr(Cr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yc(t){if(hs.isDocumentKey(t))throw new Rr(Cr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Nr()}function wc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Rr(Cr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vc(t);throw new Rr(Cr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Rr(Cr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Rr(Cr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Rr(Cr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bc({}),this._settingsFrozen=!1,t instanceof dc?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Rr(Cr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dc(t.options.projectId)}(t))}get app(){if(!this._app)throw new Rr(Cr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Rr(Cr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bc(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new kr;switch(t.type){case"gapi":const e=t.client;return _r(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Fr(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Rr(Cr.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pc.get(t);e&&(Tr("ComponentProvider","Removing Datastore"),pc.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ac(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Tc(this.firestore,t,this._key)}}class Ic{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ic(this.firestore,t,this._query)}}class Ac extends Ic{constructor(t,e,n){super(t,e,qs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Tc(this.firestore,null,new hs(t))}withConverter(t){return new Ac(this.firestore,t,this._path)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Ih(this,"async_queue_retry"),this.Ea=()=>{const t=Eh();t&&Tr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Eh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Eh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise((()=>{}));const e=new Or;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.da.push(t),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Ua(t))throw t;Tr("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(t){const e=this.fa.then((()=>(this.ga=!0,t().catch((t=>{throw this.ma=t,this.ga=!1,Ir("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.ga=!1,t))))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const i=Kh.createAndSchedule(this,t,e,n,(t=>this.Ra(t)));return this._a.push(i),i}Ta(){this.ma&&Nr()}verifyOperationInProgress(){}async Pa(){let t;do{t=this.fa,await t}while(t!==this.fa)}ba(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.Pa().then((()=>{this._a.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Pa()}))}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}class Nc extends Ec{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Sc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Dc(this),this._firestoreClient.terminate()}}function _c(t){return t._firestoreClient||Dc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dc(t){var e;const n=t._freezeSettings(),i=(r=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new fc(r,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,s,o,a;t._firestoreClient=new oc(t._credentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Rr(Cr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rc(Jr.fromBase64String(t))}catch(t){throw new Rr(Cr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Rc(Jr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Rr(Cr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Rr(Cr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return jr(this._lat,t._lat)||jr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=/^__.*__$/;class xc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new _o(t,this.data,this.fieldMask,e,this.fieldTransforms):new No(t,this.data,e,this.fieldTransforms)}}function Pc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Nr()}}class Fc{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Sa(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(t){return new Fc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Ca({path:n,xa:!1});return i.ka(t),i}$a(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Ca({path:n,xa:!1});return i.Sa(),i}Oa(t){return this.Ca({path:void 0,xa:!0})}Fa(t){return zc(t,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Sa(){if(this.path)for(let t=0;t<this.path.length;t++)this.ka(this.path.get(t))}ka(t){if(0===t.length)throw this.Fa("Document fields must not be empty");if(Pc(this.Da)&&kc.test(t))throw this.Fa('Document fields cannot begin and end with "__"')}}class Mc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||Th(t)}Ba(t,e,n,i=!1){return new Fc({Da:t,methodName:e,La:n,path:Qr.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function Uc(t){const e=t._freezeSettings(),n=Th(t._databaseId);return new Mc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vc(t,e,n,i,r,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,r);qc("Data must be an object, but it was:",o,i);const a=Bc(i,o);let h,c;if(s.merge)h=new Yr(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=$c(e,i,n);if(!o.contains(r))throw new Rr(Cr.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Xc(t,r)||t.push(r)}h=new Yr(t),c=o.fieldTransforms.filter((t=>h.covers(t.field)))}else h=null,c=o.fieldTransforms;return new xc(new bs(a),h,c)}function jc(t,e){if(Hc(t=y(t)))return qc("Unsupported field value:",e,t),Bc(t,e);if(t instanceof Oc)return function(t,e){if(!Pc(e.Da))throw e.Fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&4!==e.Da)throw e.Fa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=jc(r,e.Oa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=y(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return oo(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Hr.fromDate(t);return{timestampValue:Zo(e.N,n)}}if(t instanceof Hr){const n=new Hr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Zo(e.N,n)}}if(t instanceof Lc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Rc)return{bytesValue:ta(e.N,t._byteString)};if(t instanceof Tc){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ia(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Fa(`Unsupported field value: ${vc(t)}`)}(t,e)}function Bc(t,e){const n={};return Gr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,((t,i)=>{const r=jc(i,e.Na(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Hc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Hr||t instanceof Lc||t instanceof Rc||t instanceof Tc||t instanceof Oc)}function qc(t,e,n){if(!Hc(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=vc(n);throw"an object"===i?e.Fa(t+" a custom object"):e.Fa(t+" "+i)}var i}function $c(t,e,n){if((e=y(e))instanceof Cc)return e._internalPath;if("string"==typeof e)return Gc(t,e);throw zc("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Kc=new RegExp("[~\\*/\\[\\]]");function Gc(t,e,n){if(e.search(Kc)>=0)throw zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cc(...e.split("."))._internalPath}catch(i){throw zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zc(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(s||o)&&(h+=" (found",s&&(h+=` in field ${i}`),o&&(h+=` in document ${r}`),h+=")"),new Rr(Cr.INVALID_ARGUMENT,a+t+h)}function Xc(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Wc(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function Qc(t,e){const n=wc(t.firestore,Nc),i=function(t,e,...n){if(t=y(t),1===arguments.length&&(e=Vr.I()),gc("doc","path",e),t instanceof Ec){const i=Xr.fromString(e,...n);return mc(i),new Tc(t,null,new hs(i))}{if(!(t instanceof Tc||t instanceof Ac))throw new Rr(Cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Xr.fromString(e,...n));return mc(i),new Tc(t.firestore,t instanceof Ac?t.converter:null,new hs(i))}}(t),r=Wc(t.converter,e);return Yc(n,[Vc(Uc(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,wo.exists(!1))]).then((()=>i))}function Yc(t,e){return function(t,e){const n=new Or;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=ic(t);try{const t=await function(t,e){const n=Dr(t),i=Hr.now(),r=e.reduce(((t,e)=>t.add(e.key)),Wo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Qn.bn(t,r).next((r=>{s=r;const o=[];for(const t of e){const e=Io(t,s.get(t.key));null!=e&&o.push(new _o(t.key,e,Es(e.value.mapValue),wo.exists(!0)))}return n.In.addMutationBatch(t,i,o,e)})))).then((t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Lo[t.currentUser.toKey()];i||(i=new Mo(jr)),i=i.insert(e,n),t.Lo[t.currentUser.toKey()]=i}(i,t.batchId,n),await ec(i,t.changes),await xh(i.remoteStore)}catch(t){const e=Gh(t,"Failed to persist write");n.reject(e)}}(await uc(t),e,n))),n.promise}(_c(t),e)}wr="9.0.0",M(new v("firestore",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=new Nc(n,new xr(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),i._setSettings(e),i}),"PUBLIC")),B("@firebase/firestore","3.0.1",undefined);!function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw V.create("bad-app-name",{appName:String(i)});const r=x.get(i);if(r){if(p(t,r.options)&&p(n,r.config))return r;throw V.create("duplicate-app",{appName:i})}const s=new E(i);for(const t of P.values())s.addComponent(t);const o=new j(t,n,s);x.set(i,o)}({apiKey:"AIzaSyDhfTomFg03nXW2cD1RIysGXydVHHUNC0c",authDomain:"nisb-website.firebaseapp.com",projectId:"nisb-website",storageBucket:"nisb-website.appspot.com",messagingSenderId:"30096523025",appId:"1:30096523025:web:8485960da3344cf73cd6b0",measurementId:"G-5RMDTP6Q8R"});const Jc=function(t=function(t="[DEFAULT]"){const e=x.get(t);if(!e)throw V.create("no-app",{appName:t});return e}()){return U(t,"firestore").getImmediate()}();var Zc=null;fetch("https://ipapi.co/json/").then((t=>t.json())).then((t=>Zc=t)).catch((t=>console.error(t)));const tl=t=>{Qc(function(t,e,...n){if(t=y(t),gc("collection","path",e),t instanceof Ec){const i=Xr.fromString(e,...n);return yc(i),new Ac(t,null,i)}{if(!(t instanceof Tc||t instanceof Ac))throw new Rr(Cr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=Xr.fromString(t.path,...n).child(Xr.fromString(e));return yc(i),new Ac(t.firestore,null,i)}}(Jc,"analytics"),{name:t.target.getAttribute("data-name"),link:t.target.getAttribute("data-url"),time:new Date,loc:Zc}),window.open(t.target.getAttribute("data-url"),"_blank")};for(var el=document.getElementsByClassName("link"),nl=0;nl<el.length;nl++)el[nl].addEventListener("click",tl,!1);
//# sourceMappingURL=index.5ba841aa.js.map
