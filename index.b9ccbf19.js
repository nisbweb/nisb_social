var t,e,n,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=t={};
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
 */function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var c,h=[],l=!1,u=-1;function f(){l&&c&&(l=!1,c.length?h=c.concat(h):u=-1,h.length&&d())}function d(){if(!l){var t=a(f);l=!0;for(var e=h.length;e;){for(c=h,h=[];++u<e;)c&&c[u].run();u=-1,e=h.length}c=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new p(t,e)),1!==h.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0};const m=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,h=i>>2,l=(3&i)<<4|o>>4;let u=(15&o)<<2|c>>6,f=63&c;a||(f=64,r||(u=64)),s.push(n[h],n[l],n[u],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw new v;const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
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
 */class v extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w=function(t){return function(t){const e=m(t);return y.encodeByteArray(e,!0)}(t).replace(/\./g,"")},E=function(t){try{return y.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
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
const b=()=>
/**
 * @license
 * Copyright 2022 Google LLC
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,T=()=>{try{return b()||(()=>{if(void 0===t||void 0===t.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&E(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},I=t=>{const e=(t=>{var e,n;return null===(n=null===(e=T())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},A=()=>{var t;return null===(t=T())||void 0===t?void 0:t.config};
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
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[w(JSON.stringify({alg:"none",type:"JWT"})),w(JSON.stringify(r)),""].join(".")}
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
 */function D(){try{return"object"==typeof indexedDB}catch(t){return!1}}class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(k,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new _(s,o,n)}}const k=/\{\$([^}]+)}/g;
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
 */function O(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(R(n)&&R(r)){if(!O(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function R(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
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
function L(t){return t&&t._delegate?t._delegate:t}class x{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const M="[DEFAULT]";
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
 */class P{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new C;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:M})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=M){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=M){return this.instances.has(t)}getOptions(t=M){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===M?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=M){return this.component?this.component.multipleInstances?t:M:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class F{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new P(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */const V=[];var U,B;(B=U||(U={}))[B.DEBUG=0]="DEBUG",B[B.VERBOSE=1]="VERBOSE",B[B.INFO=2]="INFO",B[B.WARN=3]="WARN",B[B.ERROR=4]="ERROR",B[B.SILENT=5]="SILENT";const j={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},$=U.INFO,H={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},q=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=H[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class K{constructor(t){this.name=t,this._logLevel=$,this._logHandler=q,this._userLogHandler=null,V.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?j[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const G=(t,e)=>e.some((e=>t instanceof e));let z,Q;const W=new WeakMap,X=new WeakMap,Y=new WeakMap,J=new WeakMap,Z=new WeakMap;let tt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return X.get(t);if("objectStoreNames"===e)return t.objectStoreNames||Y.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function et(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(it(this),e),st(W.get(this))}:function(...e){return st(t.apply(it(this),e))}:function(e,...n){const s=t.call(it(this),e,...n);return Y.set(s,e.sort?e.sort():[e]),st(s)}}function nt(t){return"function"==typeof t?et(t):(t instanceof IDBTransaction&&function(t){if(X.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));X.set(t,e)}(t),G(t,z||(z=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,tt):t)}function st(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(st(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&W.set(e,t)})).catch((()=>{})),Z.set(e,t),e}(t);if(J.has(t))return J.get(t);const e=nt(t);return e!==t&&(J.set(t,e),Z.set(e,t)),e}const it=t=>Z.get(t);function rt(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=st(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(st(o.result),t.oldVersion,t.newVersion,st(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const ot=["get","getKey","getAll","getAllKeys","count"],at=["put","add","delete","clear"],ct=new Map;function ht(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(ct.get(e))return ct.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=at.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!ot.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return ct.set(e,r),r}tt=(t=>({...t,get:(e,n,s)=>ht(e,n)||t.get(e,n,s),has:(e,n)=>!!ht(e,n)||t.has(e,n)}))(tt);
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
class lt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ut="@firebase/app",ft="0.9.4",dt=new K("@firebase/app"),pt="[DEFAULT]",gt={[ut]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},mt=new Map,yt=new Map;function vt(t,e){try{t.container.addComponent(e)}catch(n){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wt(t){const e=t.name;if(yt.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;yt.set(e,t);for(const e of mt.values())vt(e,t);return!0}function Et(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const bt=new N("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Tt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new x("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}
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
 */function It(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:pt,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=A()),!n)throw bt.create("no-options");const r=mt.get(i);if(r){if(O(n,r.options)&&O(s,r.config))return r;throw bt.create("duplicate-app",{appName:i})}const o=new F(i);for(const t of yt.values())o.addComponent(t);const a=new Tt(n,s,o);return mt.set(i,a),a}function At(t=pt){const e=mt.get(t);if(!e&&t===pt)return It();if(!e)throw bt.create("no-app",{appName:t});return e}function Ct(t,e,n){var s;let i=null!==(s=gt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void dt.warn(t.join(" "))}wt(new x(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
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
const St="firebase-heartbeat-database",Dt=1,_t="firebase-heartbeat-store";let Nt=null;function kt(){return Nt||(Nt=rt(St,Dt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(_t)}}).catch((t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})}))),Nt}async function Ot(t,e){try{const n=(await kt()).transaction(_t,"readwrite"),s=n.objectStore(_t);return await s.put(e,Rt(t)),n.done}catch(t){if(t instanceof _)dt.warn(t.message);else{const e=bt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});dt.warn(e.message)}}}function Rt(t){return`${t.name}!${t.options.appId}`}
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
 */const Lt=1024;class xt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Mt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=Lt){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ft(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ft(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=w(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Mt(){return(new Date).toISOString().substring(0,10)}class Pt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!D()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await kt()).transaction(_t).objectStore(_t).get(Rt(t))}catch(t){if(t instanceof _)dt.warn(t.message);else{const e=bt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});dt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ot(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ft(t){return w(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Vt;Vt="",wt(new x("platform-logger",(t=>new lt(t)),"PRIVATE")),wt(new x("heartbeat",(t=>new xt(t)),"PRIVATE")),Ct(ut,ft,Vt),Ct(ut,ft,"esm2017"),Ct("fire-js","");
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
Ct("firebase","9.17.2","app");var Ut,Bt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s?s:"undefined"!=typeof self?self:{},jt={},$t=$t||{},Ht=Bt||self;function qt(){}function Kt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Gt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var zt="closure_uid_"+(1e9*Math.random()>>>0),Qt=0;function Wt(t,e,n){return t.call.apply(t.bind,arguments)}function Xt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Yt(t,e,n){return(Yt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wt:Xt).apply(null,arguments)}function Jt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Zt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function te(){this.s=this.s,this.o=this.o}te.prototype.s=!1,te.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,zt)&&t[zt]||(t[zt]=++Qt))},te.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ee=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ne(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function se(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Kt(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function ie(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var re=function(){if(!Ht.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ht.addEventListener("test",qt,e),Ht.removeEventListener("test",qt,e)}catch(t){}return t}();function oe(t){return/^[\s\xa0]*$/.test(t)}var ae=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ce(t,e){return t<e?-1:t>e?1:0}function he(){var t=Ht.navigator;return t&&(t=t.userAgent)?t:""}function le(t){return-1!=he().indexOf(t)}function ue(t){return ue[" "](t),t}ue[" "]=qt;var fe,de,pe=le("Opera"),ge=le("Trident")||le("MSIE"),me=le("Edge"),ye=me||ge,ve=le("Gecko")&&!(-1!=he().toLowerCase().indexOf("webkit")&&!le("Edge"))&&!(le("Trident")||le("MSIE"))&&!le("Edge"),we=-1!=he().toLowerCase().indexOf("webkit")&&!le("Edge");function Ee(){var t=Ht.document;return t?t.documentMode:void 0}t:{var be="",Te=(de=he(),ve?/rv:([^\);]+)(\)|;)/.exec(de):me?/Edge\/([\d\.]+)/.exec(de):ge?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(de):we?/WebKit\/(\S+)/.exec(de):pe?/(?:Version)[ \/]?(\S+)/.exec(de):void 0);if(Te&&(be=Te?Te[1]:""),ge){var Ie=Ee();if(null!=Ie&&Ie>parseFloat(be)){fe=String(Ie);break t}}fe=be}var Ae,Ce={};function Se(){return function(t){var e=Ce;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ae(String(fe)).split("."),n=ae("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ce(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ce(0==i[2].length,0==r[2].length)||ce(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Ht.document&&ge){var De=Ee();Ae=De||(parseInt(fe,10)||void 0)}else Ae=void 0;var _e=Ae;function Ne(t,e){if(ie.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ve){t:{try{ue(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ke[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ne.X.h.call(this)}}Zt(Ne,ie);var ke={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Re=0;function Le(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Re,this.ba=this.ea=!1}function xe(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Me(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Pe(t){const e={};for(const n in t)e[n]=t[n];return e}const Fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ve(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Fe.length;e++)n=Fe[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ue(t){this.src=t,this.g={},this.h=0}function Be(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=ee(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(xe(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function je(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}Ue.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=je(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Le(e,this.src,r,!!s,i)).ea=n,t.push(e)),e};var $e="closure_lm_"+(1e6*Math.random()|0),He={};function qe(t,e,n,s,i){if(s&&s.once)return Ge(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qe(t,e[r],n,s,i);return null}return n=Ze(n),t&&t[Oe]?t.N(e,n,Gt(s)?!!s.capture:!!s,i):Ke(t,e,n,!1,s,i)}function Ke(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Gt(i)?!!i.capture:!!i,a=Ye(t);if(a||(t[$e]=a=new Ue(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Xe;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)re||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(We(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Ge(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ge(t,e[r],n,s,i);return null}return n=Ze(n),t&&t[Oe]?t.O(e,n,Gt(s)?!!s.capture:!!s,i):Ke(t,e,n,!0,s,i)}function ze(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ze(t,e[r],n,s,i);else s=Gt(s)?!!s.capture:!!s,n=Ze(n),t&&t[Oe]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=je(r=t.g[e],n,s,i))&&(xe(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Ye(t))&&(e=t.g[e.toString()],t=-1,e&&(t=je(e,n,s,i)),(n=-1<t?e[t]:null)&&Qe(n))}function Qe(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Oe])Be(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(We(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ye(e))?(Be(n,t),0==n.h&&(n.src=null,e[$e]=null)):xe(t)}}}function We(t){return t in He?He[t]:He[t]="on"+t}function Xe(t,e){if(t.ba)t=!0;else{e=new Ne(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Qe(t),t=n.call(s,e)}return t}function Ye(t){return(t=t[$e])instanceof Ue?t:null}var Je="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ze(t){return"function"==typeof t?t:(t[Je]||(t[Je]=function(e){return t.handleEvent(e)}),t[Je])}function tn(){te.call(this),this.i=new Ue(this),this.P=this,this.I=null}function en(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new ie(e,t);else if(e instanceof ie)e.target=e.target||t;else{var i=e;Ve(e=new ie(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=nn(o,s,!0,e)&&i}if(i=nn(o=e.g=t,s,!0,e)&&i,i=nn(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=nn(o=e.g=n[r],s,!1,e)&&i}function nn(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Be(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}Zt(tn,te),tn.prototype[Oe]=!0,tn.prototype.removeEventListener=function(t,e,n,s){ze(this,t,e,n,s)},tn.prototype.M=function(){if(tn.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)xe(n[s]);delete e.g[t],e.h--}}this.I=null},tn.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},tn.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var sn=Ht.JSON.stringify;function rn(){var t=fn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var on,an=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new cn),(t=>t.reset()));class cn{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function hn(t){Ht.setTimeout((()=>{throw t}),0)}function ln(t,e){on||function(){var t=Ht.Promise.resolve(void 0);on=function(){t.then(dn)}}(),un||(on(),un=!0),fn.add(t,e)}var un=!1,fn=new class{constructor(){this.h=this.g=null}add(t,e){const n=an.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function dn(){for(var t;t=rn();){try{t.h.call(t.g)}catch(t){hn(t)}var e=an;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}un=!1}function pn(t,e){tn.call(this),this.h=t||1,this.g=e||Ht,this.j=Yt(this.lb,this),this.l=Date.now()}function gn(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function mn(t,e,n){if("function"==typeof t)n&&(t=Yt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Yt(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ht.setTimeout(t,e||0)}function yn(t){t.g=mn((()=>{t.g=null,t.i&&(t.i=!1,yn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Zt(pn,tn),(Ut=pn.prototype).ca=!1,Ut.R=null,Ut.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),en(this,"tick"),this.ca&&(gn(this),this.start()))}},Ut.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ut.M=function(){pn.X.M.call(this),gn(this),delete this.g};class vn extends te{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:yn(this)}M(){super.M(),this.g&&(Ht.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(t){te.call(this),this.h=t,this.g={}}Zt(wn,te);var En=[];function bn(t,e,n,s){Array.isArray(n)||(n&&(En[0]=n.toString()),n=En);for(var i=0;i<n.length;i++){var r=qe(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Tn(t){Me(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Qe(t)}),t),t.g={}}function In(){this.g=!0}function An(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return sn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}wn.prototype.M=function(){wn.X.M.call(this),Tn(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},In.prototype.Aa=function(){this.g=!1},In.prototype.info=function(){};var Cn={},Sn=null;function Dn(){return Sn=Sn||new tn}function _n(t){ie.call(this,Cn.Pa,t)}function Nn(t){const e=Dn();en(e,new _n(e))}function kn(t,e){ie.call(this,Cn.STAT_EVENT,t),this.stat=e}function On(t){const e=Dn();en(e,new kn(e,t))}function Rn(t,e){ie.call(this,Cn.Qa,t),this.size=e}function Ln(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ht.setTimeout((function(){t()}),e)}Cn.Pa="serverreachability",Zt(_n,ie),Cn.STAT_EVENT="statevent",Zt(kn,ie),Cn.Qa="timingevent",Zt(Rn,ie);var xn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Mn={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Pn(){}function Fn(t){return t.h||(t.h=t.i())}function Vn(){}Pn.prototype.h=null;var Un,Bn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function jn(){ie.call(this,"d")}function $n(){ie.call(this,"c")}function Hn(){}function qn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new wn(this),this.O=Gn,t=ye?125:void 0,this.T=new pn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Kn}function Kn(){this.i=null,this.g="",this.h=!1}Zt(jn,ie),Zt($n,ie),Zt(Hn,Pn),Hn.prototype.g=function(){return new XMLHttpRequest},Hn.prototype.i=function(){return{}},Un=new Hn;var Gn=45e3,zn={},Qn={};function Wn(t,e,n){t.K=1,t.v=ps(hs(e)),t.s=n,t.P=!0,Xn(t,null)}function Xn(t,e){t.F=Date.now(),ts(t),t.A=hs(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ds(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Kn,t.g=Si(t.l,n?e:null,!t.s),0<t.N&&(t.L=new vn(Yt(t.La,t,t.g),t.N)),bn(t.S,t.g,"readystatechange",t.ib),e=t.H?Pe(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Nn(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var l=h[0];h=h[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+h+"&":o+(l+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function Yn(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Jn(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Zn(t,n),s==Qn){4==e&&(t.o=4,On(14),i=!1),An(t.j,t.m,null,"[Incomplete Response]");break}if(s==zn){t.o=4,On(15),An(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}An(t.j,t.m,s,null),rs(t,s)}Yn(t)&&s!=Qn&&s!=zn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,On(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vi(e),e.K=!0,On(11))):(An(t.j,t.m,n,"[Invalid Chunked Response]"),is(t),ss(t))}function Zn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Qn:(n=Number(e.substring(n,s)),isNaN(n)?zn:(s+=1)+n>e.length?Qn:(e=e.substr(s,n),t.C=s+n,e))}function ts(t){t.V=Date.now()+t.O,es(t,t.O)}function es(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ln(Yt(t.gb,t),e)}function ns(t){t.B&&(Ht.clearTimeout(t.B),t.B=null)}function ss(t){0==t.l.G||t.I||bi(t.l,t)}function is(t){ns(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,gn(t.T),Tn(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function rs(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ls(n.h,t)))if(!t.J&&Ls(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ei(n),li(n)}yi(n),On(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=Ln(Yt(n.cb,n),6e3));if(1>=Rs(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Ii(n,11)}else if((t.J||n.g==t)&&Ei(n),!oe(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.T=h[0],h=h[1],2==n.G)if("c"==h[0]){n.I=h[1],n.ka=h[2];const e=h[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=h[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=h[5];null!=l&&"number"==typeof l&&0<l&&(s=1.5*l,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(xs(r,r.h),r.h=null))}if(s.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,ds(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=Ci(s,s.H?s.ka:null,s.V),o.J){Ms(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ns(a),ts(a)),s.g=o}else mi(s);0<n.i.length&&fi(n)}else"stop"!=h[0]&&"close"!=h[0]||Ii(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Ii(n,7):hi(n):"noop"!=h[0]&&n.l&&n.l.wa(h),n.A=0)}Nn()}catch(t){}}function os(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Kt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Kt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Kt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(Ut=qn.prototype).setTimeout=function(t){this.O=t},Ut.ib=function(t){t=t.target;const e=this.L;e&&3==si(t)?e.l():this.La(t)},Ut.La=function(t){try{if(t==this.g)t:{const l=si(this.g);var e=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||ye||this.g&&(this.h.h||this.g.fa()||ii(this.g)))){this.I||4!=l||7==e||Nn(),ns(this);var n=this.g.aa();this.Y=n;e:if(Yn(this)){var s=ii(this.g);t="";var i=s.length,r=4==si(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){is(this),ss(this);var o="";break e}this.h.i=new Ht.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oe(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,On(12),is(this),ss(this);break t}An(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rs(this,n)}this.P?(Jn(this,l,o),ye&&this.i&&3==l&&(bn(this.S,this.T,"tick",this.hb),this.T.start())):(An(this.j,this.m,o,null),rs(this,o)),4==l&&is(this),this.i&&!this.I&&(4==l?bi(this.l,this):(this.i=!1,ts(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,On(12)):(this.o=0,On(13)),is(this),ss(this)}}}catch(t){}},Ut.hb=function(){if(this.g){var t=si(this.g),e=this.g.fa();this.C<e.length&&(ns(this),Jn(this,t,e),this.i&&4!=t&&ts(this))}},Ut.cancel=function(){this.I=!0,is(this)},Ut.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Nn(),On(17)),is(this),this.o=2,ss(this)):es(this,this.V-t)};var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof cs){this.h=void 0!==e?e:t.h,ls(this,t.j),this.s=t.s,this.g=t.g,us(this,t.m),this.l=t.l,e=t.i;var n=new Is;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fs(this,n),this.o=t.o}else t&&(n=String(t).match(as))?(this.h=!!e,ls(this,n[1]||"",!0),this.s=gs(n[2]||""),this.g=gs(n[3]||"",!0),us(this,n[4]),this.l=gs(n[5]||"",!0),fs(this,n[6]||"",!0),this.o=gs(n[7]||"")):(this.h=!!e,this.i=new Is(null,this.h))}function hs(t){return new cs(t)}function ls(t,e,n){t.j=n?gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function us(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fs(t,e,n){e instanceof Is?(t.i=e,function(t,e){e&&!t.j&&(As(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Cs(this,e),Ds(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ms(e,bs)),t.i=new Is(e,t.h))}function ds(t,e,n){t.i.set(e,n)}function ps(t){return ds(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ms(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ys),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ys(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}cs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ms(e,vs,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ms(e,vs,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ms(n,"/"==n.charAt(0)?Es:ws,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ms(n,Ts)),t.join("")};var vs=/[#\/\?@]/g,ws=/[#\?:]/g,Es=/[#\?]/g,bs=/[#\?@]/g,Ts=/#/g;function Is(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function As(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Cs(t,e){As(t),e=_s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ss(t,e){return As(t),e=_s(t,e),t.g.has(e)}function Ds(t,e,n){Cs(t,e),0<n.length&&(t.i=null,t.g.set(_s(t,e),ne(n)),t.h+=n.length)}function _s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ut=Is.prototype).add=function(t,e){As(this),this.i=null,t=_s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ut.forEach=function(t,e){As(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Ut.oa=function(){As(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},Ut.W=function(t){As(this);let e=[];if("string"==typeof t)Ss(this,t)&&(e=e.concat(this.g.get(_s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ut.set=function(t,e){return As(this),this.i=null,Ss(this,t=_s(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ut.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Ut.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ns(t){this.l=t||ks,Ht.PerformanceNavigationTiming?t=0<(t=Ht.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ht.g&&Ht.g.Ga&&Ht.g.Ga()&&Ht.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ks=10;function Os(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Rs(t){return t.h?1:t.g?t.g.size:0}function Ls(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function xs(t,e){t.g?t.g.add(e):t.h=e}function Ms(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Ps(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ne(t.i)}function Fs(){}function Vs(){this.g=new Fs}function Us(t,e,n){const s=n||"";try{os(t,(function(t,n){let i=t;Gt(t)&&(i=sn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Bs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function js(t){this.l=t.ac||null,this.j=t.jb||!1}function $s(t,e){tn.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ns.prototype.cancel=function(){if(this.i=Ps(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Fs.prototype.stringify=function(t){return Ht.JSON.stringify(t,void 0)},Fs.prototype.parse=function(t){return Ht.JSON.parse(t,void 0)},Zt(js,Pn),js.prototype.g=function(){return new $s(this.l,this.j)},js.prototype.i=function(t){return function(){return t}}({}),Zt($s,tn);var Hs=0;function qs(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Gs(t)}function Gs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ut=$s.prototype).open=function(t,e){if(this.readyState!=Hs)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Gs(this)},Ut.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ht).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Ut.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ks(this)),this.readyState=Hs},Ut.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gs(this)),this.g&&(this.readyState=3,Gs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Ht.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qs(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Ut.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):Gs(this),3==this.readyState&&qs(this)}},Ut.Va=function(t){this.g&&(this.response=this.responseText=t,Ks(this))},Ut.Ua=function(t){this.g&&(this.response=t,Ks(this))},Ut.ga=function(){this.g&&Ks(this)},Ut.setRequestHeader=function(t,e){this.v.append(t,e)},Ut.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ut.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty($s.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var zs=Ht.JSON.parse;function Qs(t){tn.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ws,this.K=this.L=!1}Zt(Qs,tn);var Ws="",Xs=/^https?$/i,Ys=["POST","PUT"];function Js(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zs(t),ei(t)}function Zs(t){t.D||(t.D=!0,en(t,"complete"),en(t,"error"))}function ti(t){if(t.h&&void 0!==$t&&(!t.C[1]||4!=si(t)||2!=t.aa()))if(t.v&&4==si(t))mn(t.Ha,0,t);else if(en(t,"readystatechange"),4==si(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(as)[1]||null;if(!i&&Ht.self&&Ht.self.location){var r=Ht.self.location.protocol;i=r.substr(0,r.length-1)}s=!Xs.test(i?i.toLowerCase():"")}n=s}if(n)en(t,"complete"),en(t,"success");else{t.m=6;try{var o=2<si(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Zs(t)}}finally{ei(t)}}}function ei(t,e){if(t.g){ni(t);const n=t.g,s=t.C[0]?qt:null;t.g=null,t.C=null,e||en(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function ni(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ht.clearTimeout(t.A),t.A=null)}function si(t){return t.g?t.g.readyState:0}function ii(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ws:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ri(t){let e="";return Me(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function oi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ri(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ds(t,e,n))}function ai(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ci(t){this.Ca=0,this.i=[],this.j=new In,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ai("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ai("baseRetryDelayMs",5e3,t),this.bb=ai("retryDelaySeedMs",1e4,t),this.$a=ai("forwardChannelMaxRetries",2,t),this.ta=ai("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ns(t&&t.concurrentRequestLimit),this.Fa=new Vs,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function hi(t){if(ui(t),3==t.G){var e=t.U++,n=hs(t.F);ds(n,"SID",t.I),ds(n,"RID",e),ds(n,"TYPE","terminate"),pi(t,n),(e=new qn(t,t.j,e,void 0)).K=2,e.v=ps(hs(n)),n=!1,Ht.navigator&&Ht.navigator.sendBeacon&&(n=Ht.navigator.sendBeacon(e.v.toString(),"")),!n&&Ht.Image&&((new Image).src=e.v,n=!0),n||(e.g=Si(e.l,null),e.g.da(e.v)),e.F=Date.now(),ts(e)}Ai(t)}function li(t){t.g&&(vi(t),t.g.cancel(),t.g=null)}function ui(t){li(t),t.u&&(Ht.clearTimeout(t.u),t.u=null),Ei(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Ht.clearTimeout(t.m),t.m=null)}function fi(t){Os(t.h)||t.m||(t.m=!0,ln(t.Ja,t),t.C=0)}function di(t,e){var n;n=e?e.m:t.U++;const s=hs(t.F);ds(s,"SID",t.I),ds(s,"RID",n),ds(s,"AID",t.T),pi(t,s),t.o&&t.s&&oi(s,t.o,t.s),n=new qn(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=gi(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xs(t.h,n),Wn(n,s,e)}function pi(t,e){t.ia&&Me(t.ia,(function(t,n){ds(e,n,t)})),t.l&&os({},(function(t,n){ds(e,n,t)}))}function gi(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Yt(t.l.Ra,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Us(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function mi(t){t.g||t.u||(t.Z=1,ln(t.Ia,t),t.A=0)}function yi(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Ln(Yt(t.Ia,t),Ti(t,t.A)),t.A++,!0)}function vi(t){null!=t.B&&(Ht.clearTimeout(t.B),t.B=null)}function wi(t){t.g=new qn(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=hs(t.sa);ds(e,"RID","rpc"),ds(e,"SID",t.I),ds(e,"CI",t.L?"0":"1"),ds(e,"AID",t.T),ds(e,"TYPE","xmlhttp"),pi(t,e),t.o&&t.s&&oi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ps(hs(e)),n.s=null,n.P=!0,Xn(n,t)}function Ei(t){null!=t.v&&(Ht.clearTimeout(t.v),t.v=null)}function bi(t,e){var n=null;if(t.g==e){Ei(t),vi(t),t.g=null;var s=2}else{if(!Ls(t.h,e))return;n=e.D,Ms(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;en(s=Dn(),new Rn(s,n)),fi(t)}else mi(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==s&&function(t,e){return!(Rs(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Ln(Yt(t.Ja,t,e),Ti(t,t.C)),t.C++,0)))}(t,e)||2==s&&yi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ii(t,5);break;case 4:Ii(t,10);break;case 3:Ii(t,6);break;default:Ii(t,2)}}function Ti(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ii(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=Yt(t.kb,t);n||(n=new cs("//www.google.com/images/cleardot.gif"),Ht.location&&"http"==Ht.location.protocol||ls(n,"https"),ps(n)),function(t,e){const n=new In;if(Ht.Image){const s=new Image;s.onload=Jt(Bs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Jt(Bs,n,s,"TestLoadImage: error",!1,e),s.onabort=Jt(Bs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Jt(Bs,n,s,"TestLoadImage: timeout",!1,e),Ht.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else On(2);t.G=0,t.l&&t.l.va(e),Ai(t),ui(t)}function Ai(t){if(t.G=0,t.la=[],t.l){const e=Ps(t.h);0==e.length&&0==t.i.length||(se(t.la,e),se(t.la,t.i),t.h.i.length=0,ne(t.i),t.i.length=0),t.l.ua()}}function Ci(t,e,n){var s=n instanceof cs?hs(n):new cs(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),us(s,s.m);else{var i=Ht.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new cs(null,void 0);s&&ls(r,s),e&&(r.g=e),i&&us(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&ds(s,n,e),ds(s,"VER",t.ma),pi(t,s),s}function Si(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new Qs(new js({jb:!0})):new Qs(t.ra)).Ka(t.H),e}function Di(){}function _i(){if(ge&&!(10<=Number(_e)))throw Error("Environmental error: no available transport.")}function Ni(t,e){tn.call(this),this.g=new ci(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!oe(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!oe(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ri(this)}function ki(t){jn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Oi(){$n.call(this),this.status=1}function Ri(t){this.g=t}(Ut=Qs.prototype).Ka=function(t){this.L=t},Ut.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Un.g(),this.C=this.u?Fn(this.u):Fn(Un),this.g.onreadystatechange=Yt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Js(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=Ht.FormData&&t instanceof Ht.FormData,!(0<=ee(Ys,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ni(this),0<this.B&&((this.K=function(t){return ge&&Se()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yt(this.qa,this)):this.A=mn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Js(this,t)}},Ut.qa=function(){void 0!==$t&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,en(this,"timeout"),this.abort(8))},Ut.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,en(this,"complete"),en(this,"abort"),ei(this))},Ut.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ei(this,!0)),Qs.X.M.call(this)},Ut.Ha=function(){this.s||(this.F||this.v||this.l?ti(this):this.fb())},Ut.fb=function(){ti(this)},Ut.aa=function(){try{return 2<si(this)?this.g.status:-1}catch(t){return-1}},Ut.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ut.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),zs(e)}},Ut.Ea=function(){return this.m},Ut.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ut=ci.prototype).ma=8,Ut.G=1,Ut.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new qn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=Pe(r),Ve(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=gi(this,i,e),ds(n=hs(this.F),"RID",t),ds(n,"CVER",22),this.D&&ds(n,"X-HTTP-Session-Id",this.D),pi(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(ri(r)))+"&"+e:this.o&&oi(n,this.o,r)),xs(this.h,i),this.Ya&&ds(n,"TYPE","init"),this.O?(ds(n,"$req",e),ds(n,"SID","null"),i.Z=!0,Wn(i,n,null)):Wn(i,n,e),this.G=2}}else 3==this.G&&(t?di(this,t):0==this.i.length||Os(this.h)||di(this))},Ut.Ia=function(){if(this.u=null,wi(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ln(Yt(this.eb,this),t)}},Ut.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,On(10),li(this),wi(this))},Ut.cb=function(){null!=this.v&&(this.v=null,li(this),yi(this),On(19))},Ut.kb=function(t){t?(this.j.info("Successfully pinged google.com"),On(2)):(this.j.info("Failed to ping google.com"),On(1))},(Ut=Di.prototype).xa=function(){},Ut.wa=function(){},Ut.va=function(){},Ut.ua=function(){},Ut.Ra=function(){},_i.prototype.g=function(t,e){return new Ni(t,e)},Zt(Ni,tn),Ni.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;On(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ci(t,null,t.V),fi(t)},Ni.prototype.close=function(){hi(this.g)},Ni.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=sn(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&fi(e)},Ni.prototype.M=function(){this.g.l=null,delete this.j,hi(this.g),delete this.g,Ni.X.M.call(this)},Zt(ki,jn),Zt(Oi,$n),Zt(Ri,Di),Ri.prototype.xa=function(){en(this.g,"a")},Ri.prototype.wa=function(t){en(this.g,new ki(t))},Ri.prototype.va=function(t){en(this.g,new Oi)},Ri.prototype.ua=function(){en(this.g,"b")},_i.prototype.createWebChannel=_i.prototype.g,Ni.prototype.send=Ni.prototype.u,Ni.prototype.open=Ni.prototype.m,Ni.prototype.close=Ni.prototype.close,xn.NO_ERROR=0,xn.TIMEOUT=8,xn.HTTP_ERROR=6,Mn.COMPLETE="complete",Vn.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",tn.prototype.listen=tn.prototype.N,Qs.prototype.listenOnce=Qs.prototype.O,Qs.prototype.getLastError=Qs.prototype.Oa,Qs.prototype.getLastErrorCode=Qs.prototype.Ea,Qs.prototype.getStatus=Qs.prototype.aa,Qs.prototype.getResponseJson=Qs.prototype.Sa,Qs.prototype.getResponseText=Qs.prototype.fa,Qs.prototype.send=Qs.prototype.da,Qs.prototype.setWithCredentials=Qs.prototype.Ka;var Li=jt.createWebChannelTransport=function(){return new _i},xi=jt.getStatEventTarget=function(){return Dn()},Mi=jt.ErrorCode=xn,Pi=jt.EventType=Mn,Fi=jt.Event=Cn,Vi=jt.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ui=jt.FetchXmlHttpFactory=js,Bi=jt.WebChannel=Vn,ji=jt.XhrIo=Qs;const $i="@firebase/firestore";
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
 */class Hi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Hi.UNAUTHENTICATED=new Hi(null),Hi.GOOGLE_CREDENTIALS=new Hi("google-credentials-uid"),Hi.FIRST_PARTY=new Hi("first-party-uid"),Hi.MOCK_USER=new Hi("mock-user");
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
let qi="9.17.2";
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
 */const Ki=new K("@firebase/firestore");function Gi(){return Ki.logLevel}function zi(t,...e){if(Ki.logLevel<=U.DEBUG){const n=e.map(Xi);Ki.debug(`Firestore (${qi}): ${t}`,...n)}}function Qi(t,...e){if(Ki.logLevel<=U.ERROR){const n=e.map(Xi);Ki.error(`Firestore (${qi}): ${t}`,...n)}}function Wi(t,...e){if(Ki.logLevel<=U.WARN){const n=e.map(Xi);Ki.warn(`Firestore (${qi}): ${t}`,...n)}}function Xi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Yi(t="Unexpected state"){const e=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: `+t;throw Qi(e),new Error(e)}function Ji(t,e){t||Yi()}function Zi(t,e){return t}
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
 */const tr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class er extends _{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class nr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class sr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ir{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Hi.UNAUTHENTICATED)))}shutdown(){}}class rr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class or{constructor(t){this.t=t,this.currentUser=Hi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{zi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(zi("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(zi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ji("string"==typeof e.accessToken),new sr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ji(null===t||"string"==typeof t),new Hi(t)}}class ar{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=Hi.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ji(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class cr{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new ar(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Hi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lr{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&zi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,zi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{zi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):zi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ji("string"==typeof t.token),this.A=t.token,new hr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function ur(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class fr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=ur(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function dr(t,e){return t<e?-1:t>e?1:0}function pr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class gr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new er(tr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new er(tr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new er(tr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new er(tr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return gr.fromMillis(Date.now())}static fromDate(t){return gr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new gr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?dr(this.nanoseconds,t.nanoseconds):dr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class mr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new mr(t)}static min(){return new mr(new gr(0,0))}static max(){return new mr(new gr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class yr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Yi(),void 0===n?n=t.length-e:n>t.length-e&&Yi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===yr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class vr extends yr{construct(t,e,n){return new vr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new er(tr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new vr(e)}static emptyPath(){return new vr([])}}const wr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Er extends yr{construct(t,e,n){return new Er(t,e,n)}static isValidIdentifier(t){return wr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Er.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Er(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new er(tr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new er(tr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new er(tr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new er(tr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Er(e)}static emptyPath(){return new Er([])}}
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
 */class br{constructor(t){this.path=t}static fromPath(t){return new br(vr.fromString(t))}static fromName(t){return new br(vr.fromString(t).popFirst(5))}static empty(){return new br(vr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===vr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return vr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new br(new vr(t.slice()))}}
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
 */class Tr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Tr.UNKNOWN_ID=-1;function Ir(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=mr.fromTimestamp(1e9===s?new gr(n+1,0):new gr(n,s));return new Cr(i,br.empty(),e)}function Ar(t){return new Cr(t.readTime,t.key,-1)}class Cr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Cr(mr.min(),br.empty(),-1)}static max(){return new Cr(mr.max(),br.empty(),-1)}}function Sr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=br.comparator(t.documentKey,e.documentKey),0!==n?n:dr(t.largestBatchId,e.largestBatchId))}
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
 */const Dr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _r{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function Nr(t){if(t.code!==tr.FAILED_PRECONDITION||t.message!==Dr)throw t;zi("LocalStore","Unexpectedly lost primary lease")}
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
 */class kr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Yi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new kr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof kr?e:kr.resolve(e)}catch(t){return kr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):kr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):kr.reject(e)}static resolve(t){return new kr(((e,n)=>{e(t)}))}static reject(t){return new kr(((e,n)=>{n(t)}))}static waitFor(t){return new kr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=kr.resolve(!1);for(const n of t)e=e.next((t=>t?kr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new kr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new kr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
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
 */function Or(t){return"IndexedDbTransactionError"===t.name}
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
 */
class Rr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Rr.at=-1;
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
class Lr{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class xr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof xr&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Mr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function Vr(t){return null==t}function Ur(t){return 0===t&&1/t==-1/0}function Br(t){return"number"==typeof t&&Number.isInteger(t)&&!Ur(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2023 Google LLC
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
 */class jr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
class $r{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw t instanceof DOMException?new jr("Invalid base64 string: "+t):t}}(t);return new $r(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new $r(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$r.EMPTY_BYTE_STRING=new $r("");const Hr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qr(t){if(Ji(!!t),"string"==typeof t){let e=0;const n=Hr.exec(t);if(Ji(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Kr(t.seconds),nanos:Kr(t.nanos)}}function Kr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Gr(t){return"string"==typeof t?$r.fromBase64String(t):$r.fromUint8Array(t)}
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
 */function zr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Qr(t){const e=qr(t.mapValue.fields.__local_write_time__.timestampValue);return new gr(e.seconds,e.nanos)}
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
 */const Wr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zr(t)?4:ao(t)?9007199254740991:10:Yi()}function Yr(t,e){if(t===e)return!0;const n=Xr(t);if(n!==Xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qr(t).isEqual(Qr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=qr(t.timestampValue),s=qr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Gr(t.bytesValue).isEqual(Gr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Kr(t.geoPointValue.latitude)===Kr(e.geoPointValue.latitude)&&Kr(t.geoPointValue.longitude)===Kr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Kr(t.integerValue)===Kr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Kr(t.doubleValue),s=Kr(e.doubleValue);return n===s?Ur(n)===Ur(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return pr(t.arrayValue.values||[],e.arrayValue.values||[],Yr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Mr(n)!==Mr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Yr(n[t],s[t])))return!1;return!0}(t,e);default:return Yi()}}function Jr(t,e){return void 0!==(t.values||[]).find((t=>Yr(t,e)))}function Zr(t,e){if(t===e)return 0;const n=Xr(t),s=Xr(e);if(n!==s)return dr(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return dr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Kr(t.integerValue||t.doubleValue),s=Kr(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return to(t.timestampValue,e.timestampValue);case 4:return to(Qr(t),Qr(e));case 5:return dr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Gr(t),s=Gr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=dr(n[t],s[t]);if(0!==e)return e}return dr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=dr(Kr(t.latitude),Kr(e.latitude));return 0!==n?n:dr(Kr(t.longitude),Kr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Zr(n[t],s[t]);if(e)return e}return dr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Wr.mapValue&&e===Wr.mapValue)return 0;if(t===Wr.mapValue)return 1;if(e===Wr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=dr(s[t],r[t]);if(0!==e)return e;const o=Zr(n[s[t]],i[r[t]]);if(0!==o)return o}return dr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Yi()}}function to(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return dr(t,e);const n=qr(t),s=qr(e),i=dr(n.seconds,s.seconds);return 0!==i?i:dr(n.nanos,s.nanos)}function eo(t){return no(t)}function no(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=qr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Gr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,br.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=no(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${no(t.fields[i])}`;return n+"}"}(t.mapValue):Yi()}function so(t){return!!t&&"integerValue"in t}function io(t){return!!t&&"arrayValue"in t}function ro(t){return!!t&&"mapValue"in t}function oo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Pr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=oo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ao(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
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
class co{constructor(t,e){this.position=t,this.inclusive=e}}function ho(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?br.comparator(br.fromName(o.referenceValue),n.key):Zr(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function lo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class uo{}class fo extends uo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new bo(t,e,n):"array-contains"===e?new Co(t,n):"in"===e?new So(t,n):"not-in"===e?new Do(t,n):"array-contains-any"===e?new _o(t,n):new fo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new To(t,n):new Io(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Zr(e,this.value)):null!==e&&Xr(this.value)===Xr(e)&&this.matchesComparison(Zr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Yi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class po extends uo{constructor(t,e){super(),this.filters=t,this.op=e,this.ft=null}static create(t,e){return new po(t,e)}matches(t){return go(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt((t=>t.isInequality()));return null!==t?t.field:null}dt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function go(t){return"and"===t.op}function mo(t){return yo(t)&&go(t)}function yo(t){for(const e of t.filters)if(e instanceof po)return!1;return!0}function vo(t){if(t instanceof fo)return t.field.canonicalString()+t.op.toString()+eo(t.value);if(mo(t))return t.filters.map((t=>vo(t))).join(",");{const e=t.filters.map((t=>vo(t))).join(",");return`${t.op}(${e})`}}function wo(t,e){return t instanceof fo?function(t,e){return e instanceof fo&&t.op===e.op&&t.field.isEqual(e.field)&&Yr(t.value,e.value)}(t,e):t instanceof po?function(t,e){return e instanceof po&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&wo(n,e.filters[s])),!0)}(t,e):void Yi()}function Eo(t){return t instanceof fo?function(t){return`${t.field.canonicalString()} ${t.op} ${eo(t.value)}`}(t):t instanceof po?function(t){return t.op.toString()+" {"+t.getFilters().map(Eo).join(" ,")+"}"}(t):"Filter"}class bo extends fo{constructor(t,e,n){super(t,e,n),this.key=br.fromName(n.referenceValue)}matches(t){const e=br.comparator(t.key,this.key);return this.matchesComparison(e)}}class To extends fo{constructor(t,e){super(t,"in",e),this.keys=Ao("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Io extends fo{constructor(t,e){super(t,"not-in",e),this.keys=Ao("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ao(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>br.fromName(t.referenceValue)))}class Co extends fo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return io(e)&&Jr(e.arrayValue,this.value)}}class So extends fo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Jr(this.value.arrayValue,e)}}class Do extends fo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Jr(this.value.arrayValue,e)}}class _o extends fo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!io(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Jr(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class No{constructor(t,e="asc"){this.field=t,this.dir=e}}function ko(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class Oo{constructor(t,e){this.comparator=t,this.root=e||Lo.EMPTY}insert(t,e){return new Oo(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lo.BLACK,null,null))}remove(t){return new Oo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ro(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ro(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ro(this.root,t,this.comparator,!0)}}class Ro{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Lo{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:Lo.RED,this.left=null!=s?s:Lo.EMPTY,this.right=null!=i?i:Lo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new Lo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Lo.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Lo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Lo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Yi();if(this.right.isRed())throw Yi();const t=this.left.check();if(t!==this.right.check())throw Yi();return t+(this.isRed()?0:1)}}Lo.EMPTY=null,Lo.RED=!0,Lo.BLACK=!1,Lo.EMPTY=new class{constructor(){this.size=0}get key(){throw Yi()}get value(){throw Yi()}get color(){throw Yi()}get left(){throw Yi()}get right(){throw Yi()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Lo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class xo{constructor(t){this.comparator=t,this.data=new Oo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mo(this.data.getIterator())}getIteratorFrom(t){return new Mo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof xo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new xo(this.comparator);return e.data=t,e}}class Mo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Po{constructor(t){this.fields=t,t.sort(Er.comparator)}static empty(){return new Po([])}unionWith(t){let e=new xo(Er.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Po(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return pr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class Fo{constructor(t){this.value=t}static empty(){return new Fo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ro(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=oo(e)}setAll(t){let e=Er.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=oo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());ro(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Yr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Pr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Fo(oo(this.value))}}function Vo(t){const e=[];return Pr(t.fields,((t,n)=>{const s=new Er([t]);if(ro(n)){const t=Vo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Po(e)
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
 */}class Uo{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new Uo(t,0,mr.min(),mr.min(),mr.min(),Fo.empty(),0)}static newFoundDocument(t,e,n,s){return new Uo(t,1,e,mr.min(),n,s,0)}static newNoDocument(t,e){return new Uo(t,2,e,mr.min(),mr.min(),Fo.empty(),0)}static newUnknownDocument(t,e){return new Uo(t,3,e,mr.min(),mr.min(),Fo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(mr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Fo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Fo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=mr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Uo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Uo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Bo{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this._t=null}}function jo(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Bo(t,e,n,s,i,r,o)}function $o(t){const e=Zi(t);if(null===e._t){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>vo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>eo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>eo(t))).join(",")),e._t=t}return e._t}function Ho(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ko(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wo(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lo(t.startAt,e.startAt)&&lo(t.endAt,e.endAt)}
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
class qo{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Ko(t,e,n,s,i,r,o,a){return new qo(t,e,n,s,i,r,o,a)}function Go(t){return new qo(t)}function zo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Qo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wo(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Xo(t){return null!==t.collectionGroup}function Yo(t){const e=Zi(t);if(null===e.wt){e.wt=[];const t=Wo(e),n=Qo(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new No(t)),e.wt.push(new No(Er.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new No(Er.keyField(),t))}}}return e.wt}function Jo(t){const e=Zi(t);if(!e.gt)if("F"===e.limitType)e.gt=jo(e.path,e.collectionGroup,Yo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Yo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new No(n.field,e))}const n=e.endAt?new co(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new co(e.startAt.position,e.startAt.inclusive):null;e.gt=jo(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.gt}function Zo(t,e,n){return new qo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ta(t,e){return Ho(Jo(t),Jo(e))&&t.limitType===e.limitType}function ea(t){return`${$o(Jo(t))}|lt:${t.limitType}`}function na(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Eo(t))).join(", ")}]`),Vr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>eo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>eo(t))).join(",")),`Target(${e})`}(Jo(t))}; limitType=${t.limitType})`}function sa(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):br.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Yo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=ho(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Yo(t),e))&&!(t.endAt&&!function(t,e,n){const s=ho(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Yo(t),e))}(t,e)}function ia(t){return(e,n)=>{let s=!1;for(const i of Yo(t)){const t=ra(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function ra(t,e,n){const s=t.field.isKeyField()?br.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Zr(s,i):Yi()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Yi()}}
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
 */function oa(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ur(e)?"-0":e}}function aa(t){return{integerValue:""+t}}function ca(t,e){return Br(e)?aa(e):oa(t,e)}
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
 */class ha{constructor(){this._=void 0}}function la(t,e,n){return t instanceof da?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof pa?ga(t,e):t instanceof ma?ya(t,e):function(t,e){const n=fa(t,e),s=wa(n)+wa(t.It);return so(n)&&so(t.It)?aa(s):oa(t.Tt,s)}(t,e)}function ua(t,e,n){return t instanceof pa?ga(t,e):t instanceof ma?ya(t,e):n}function fa(t,e){var n;return t instanceof va?so(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class da extends ha{}class pa extends ha{constructor(t){super(),this.elements=t}}function ga(t,e){const n=Ea(e);for(const e of t.elements)n.some((t=>Yr(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ma extends ha{constructor(t){super(),this.elements=t}}function ya(t,e){let n=Ea(e);for(const e of t.elements)n=n.filter((t=>!Yr(t,e)));return{arrayValue:{values:n}}}class va extends ha{constructor(t,e){super(),this.Tt=t,this.It=e}}function wa(t){return Kr(t.integerValue||t.doubleValue)}function Ea(t){return io(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class ba{constructor(t,e){this.field=t,this.transform=e}}class Ta{constructor(t,e){this.version=t,this.transformResults=e}}class Ia{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ia}static exists(t){return new Ia(void 0,t)}static updateTime(t){return new Ia(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Aa(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ca{}function Sa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Pa(t.key,Ia.none()):new Oa(t.key,t.data,Ia.none());{const n=t.data,s=Fo.empty();let i=new xo(Er.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new Ra(t.key,s,new Po(i.toArray()),Ia.none())}}function Da(t,e,n){t instanceof Oa?function(t,e,n){const s=t.value.clone(),i=xa(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Ra?function(t,e,n){if(!Aa(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=xa(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(La(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n,s){return t instanceof Oa?function(t,e,n,s){if(!Aa(t.precondition,e))return n;const i=t.value.clone(),r=Ma(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ra?function(t,e,n,s){if(!Aa(t.precondition,e))return n;const i=Ma(t.fieldTransforms,s,e),r=e.data;return r.setAll(La(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Aa(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Na(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=fa(s.transform,t||null);null!=i&&(null===n&&(n=Fo.empty()),n.set(s.field,i))}return n||null}function ka(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&pr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof pa&&e instanceof pa||t instanceof ma&&e instanceof ma?pr(t.elements,e.elements,Yr):t instanceof va&&e instanceof va?Yr(t.It,e.It):t instanceof da&&e instanceof da}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oa extends Ca{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ra extends Ca{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function La(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function xa(t,e,n){const s=new Map;Ji(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ua(o,a,n[i]))}return s}function Ma(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,la(t,r,e))}return s}class Pa extends Ca{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fa extends Ca{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
var Va,Ua;function Ba(t){switch(t){default:return Yi();case tr.CANCELLED:case tr.UNKNOWN:case tr.DEADLINE_EXCEEDED:case tr.RESOURCE_EXHAUSTED:case tr.INTERNAL:case tr.UNAVAILABLE:case tr.UNAUTHENTICATED:return!1;case tr.INVALID_ARGUMENT:case tr.NOT_FOUND:case tr.ALREADY_EXISTS:case tr.PERMISSION_DENIED:case tr.FAILED_PRECONDITION:case tr.ABORTED:case tr.OUT_OF_RANGE:case tr.UNIMPLEMENTED:case tr.DATA_LOSS:return!0}}function ja(t){if(void 0===t)return Qi("GRPC error has no .code"),tr.UNKNOWN;switch(t){case Va.OK:return tr.OK;case Va.CANCELLED:return tr.CANCELLED;case Va.UNKNOWN:return tr.UNKNOWN;case Va.DEADLINE_EXCEEDED:return tr.DEADLINE_EXCEEDED;case Va.RESOURCE_EXHAUSTED:return tr.RESOURCE_EXHAUSTED;case Va.INTERNAL:return tr.INTERNAL;case Va.UNAVAILABLE:return tr.UNAVAILABLE;case Va.UNAUTHENTICATED:return tr.UNAUTHENTICATED;case Va.INVALID_ARGUMENT:return tr.INVALID_ARGUMENT;case Va.NOT_FOUND:return tr.NOT_FOUND;case Va.ALREADY_EXISTS:return tr.ALREADY_EXISTS;case Va.PERMISSION_DENIED:return tr.PERMISSION_DENIED;case Va.FAILED_PRECONDITION:return tr.FAILED_PRECONDITION;case Va.ABORTED:return tr.ABORTED;case Va.OUT_OF_RANGE:return tr.OUT_OF_RANGE;case Va.UNIMPLEMENTED:return tr.UNIMPLEMENTED;case Va.DATA_LOSS:return tr.DATA_LOSS;default:return Yi()}}(Ua=Va||(Va={}))[Ua.OK=0]="OK",Ua[Ua.CANCELLED=1]="CANCELLED",Ua[Ua.UNKNOWN=2]="UNKNOWN",Ua[Ua.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ua[Ua.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ua[Ua.NOT_FOUND=5]="NOT_FOUND",Ua[Ua.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ua[Ua.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ua[Ua.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ua[Ua.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ua[Ua.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ua[Ua.ABORTED=10]="ABORTED",Ua[Ua.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ua[Ua.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ua[Ua.INTERNAL=13]="INTERNAL",Ua[Ua.UNAVAILABLE=14]="UNAVAILABLE",Ua[Ua.DATA_LOSS=15]="DATA_LOSS";
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
class $a{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Pr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Fr(this.inner)}size(){return this.innerSize}}
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
 */const Ha=new Oo(br.comparator);function qa(){return Ha}const Ka=new Oo(br.comparator);function Ga(...t){let e=Ka;for(const n of t)e=e.insert(n.key,n);return e}function za(t){let e=Ka;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Qa(){return Xa()}function Wa(){return Xa()}function Xa(){return new $a((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ya=new Oo(br.comparator),Ja=new xo(br.comparator);function Za(...t){let e=Ja;for(const n of t)e=e.add(n);return e}const tc=new xo(dr);function ec(){return tc}
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
 */class nc{constructor(t,e){this.databaseId=t,this.yt=e}}function sc(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ic(t,e){return t.yt?e.toBase64():e.toUint8Array()}function rc(t,e){return sc(t,e.toTimestamp())}function oc(t){return Ji(!!t),mr.fromTimestamp(function(t){const e=qr(t);return new gr(e.seconds,e.nanos)}(t))}function ac(t,e){return function(t){return new vr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function cc(t){const e=vr.fromString(t);return Ji(wc(e)),e}function hc(t,e){return ac(t.databaseId,e.path)}function lc(t){const e=cc(t);return 4===e.length?vr.emptyPath():fc(e)}function uc(t){return new vr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fc(t){return Ji(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function dc(t,e,n){return{name:hc(t,e),fields:n.value.mapValue.fields}}function pc(t,e){let n;if(e instanceof Oa)n={update:dc(t,e.key,e.value)};else if(e instanceof Pa)n={delete:hc(t,e.key)};else if(e instanceof Ra)n={update:dc(t,e.key,e.data),updateMask:vc(e.fieldMask)};else{if(!(e instanceof Fa))return Yi();n={verify:hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof da)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pa)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ma)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof va)return{fieldPath:e.field.canonicalString(),increment:n.It};throw Yi()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:rc(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Yi()}(t,e.precondition)),n}function gc(t){let e=lc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Ji(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=mc(t);return e instanceof po&&mo(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new No(yc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Vr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new co(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new co(n,e)}(n.endAt)),Ko(e,i,o,r,a,"F",c,h)}function mc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=yc(t.unaryFilter.field);return fo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=yc(t.unaryFilter.field);return fo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=yc(t.unaryFilter.field);return fo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=yc(t.unaryFilter.field);return fo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Yi()}}(t):void 0!==t.fieldFilter?function(t){return fo.create(yc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Yi()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return po.create(t.compositeFilter.filters.map((t=>mc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Yi()}}(t.compositeFilter.op))}(t):Yi()}function yc(t){return Er.fromServerFormat(t.fieldPath)}function vc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function wc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const Ec=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Tc=bc;
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
class Ic{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Da(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=_a(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=_a(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Wa();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Sa(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(mr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Za())}isEqual(t){return this.batchId===t.batchId&&pr(this.mutations,t.mutations,((t,e)=>ka(t,e)))&&pr(this.baseMutations,t.baseMutations,((t,e)=>ka(t,e)))}}class Ac{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Ji(t.mutations.length===n.length);let s=Ya;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Ac(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Cc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class Sc{constructor(t){this.oe=t}}function Dc(t){const e=gc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Zo(e,e.limit,"L"):e}
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
 */class _c{constructor(){}ae(t,e){this.he(t,e),e.le()}he(t,e){if("nullValue"in t)this.fe(e,5);else if("booleanValue"in t)this.fe(e,10),e.de(t.booleanValue?1:0);else if("integerValue"in t)this.fe(e,15),e.de(Kr(t.integerValue));else if("doubleValue"in t){const n=Kr(t.doubleValue);isNaN(n)?this.fe(e,13):(this.fe(e,15),Ur(n)?e.de(0):e.de(n))}else if("timestampValue"in t){const n=t.timestampValue;this.fe(e,20),"string"==typeof n?e._e(n):(e._e(`${n.seconds||""}`),e.de(n.nanos||0))}else if("stringValue"in t)this.we(t.stringValue,e),this.me(e);else if("bytesValue"in t)this.fe(e,30),e.ge(Gr(t.bytesValue)),this.me(e);else if("referenceValue"in t)this.ye(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.fe(e,45),e.de(n.latitude||0),e.de(n.longitude||0)}else"mapValue"in t?ao(t)?this.fe(e,Number.MAX_SAFE_INTEGER):(this.pe(t.mapValue,e),this.me(e)):"arrayValue"in t?(this.Ie(t.arrayValue,e),this.me(e)):Yi()}we(t,e){this.fe(e,25),this.Te(t,e)}Te(t,e){e._e(t)}pe(t,e){const n=t.fields||{};this.fe(e,55);for(const t of Object.keys(n))this.we(t,e),this.he(n[t],e)}Ie(t,e){const n=t.values||[];this.fe(e,50);for(const t of n)this.he(t,e)}ye(t,e){this.fe(e,37),br.fromName(t).path.forEach((t=>{this.fe(e,60),this.Te(t,e)}))}fe(t,e){t.de(e)}me(t){t.de(2)}}_c.Ee=new _c;
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
class Nc{constructor(){this.Ze=new kc}addToCollectionParentIndex(t,e){return this.Ze.add(e),kr.resolve()}getCollectionParents(t,e){return kr.resolve(this.Ze.getEntries(e))}addFieldIndex(t,e){return kr.resolve()}deleteFieldIndex(t,e){return kr.resolve()}getDocumentsMatchingTarget(t,e){return kr.resolve(null)}getIndexType(t,e){return kr.resolve(0)}getFieldIndexes(t,e){return kr.resolve([])}getNextCollectionGroupToUpdate(t){return kr.resolve(null)}getMinOffset(t,e){return kr.resolve(Cr.min())}getMinOffsetFromCollectionGroup(t,e){return kr.resolve(Cr.min())}updateCollectionGroup(t,e,n){return kr.resolve()}updateIndexEntries(t,e){return kr.resolve()}}class kc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new xo(vr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new xo(vr.comparator)).toArray()}}
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
 */new Uint8Array(0);class Oc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Oc(t,Oc.DEFAULT_COLLECTION_PERCENTILE,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Oc.DEFAULT_COLLECTION_PERCENTILE=10,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oc.DEFAULT=new Oc(41943040,Oc.DEFAULT_COLLECTION_PERCENTILE,Oc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oc.DISABLED=new Oc(-1,0,0);
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
class Rc{constructor(t){this.Pn=t}next(){return this.Pn+=2,this.Pn}static Vn(){return new Rc(0)}static Sn(){return new Rc(-1)}}
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
class Lc{constructor(){this.changes=new $a((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Uo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?kr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
/**
 * @license
 * Copyright 2022 Google LLC
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
class xc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Mc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&_a(n.mutation,t,Po.empty(),gr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Za()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Za()){const s=Qa();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Ga();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Qa();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Za())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=qa();const r=Xa(),o=Xa();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Ra)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),_a(o.mutation,e,o.mutation.getFieldMask(),gr.now())):r.set(e.key,Po.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new xc(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Xa();let s=new Oo(((t,e)=>t-e)),i=Za();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Po.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||Za()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,h=Wa();c.forEach((t=>{if(!i.has(t)){const s=Sa(e.get(t),n.get(t));null!==s&&h.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return kr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return br.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Xo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):kr.resolve(Qa());let o=-1,a=i;return r.next((e=>kr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?kr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Za()))).next((t=>({batchId:o,changes:za(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new br(e)).next((t=>{let e=Ga();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Ga();return this.indexManager.getCollectionParents(t,s).next((r=>kr.forEach(r,(r=>{const o=function(t,e){return new qo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Uo.newInvalidDocument(s)))}));let n=Ga();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&_a(r.mutation,i,Po.empty(),gr.now()),sa(e,i)&&(n=n.insert(t,i))})),n}))}}
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
 */class Pc{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,e){return kr.resolve(this.es.get(e))}saveBundleMetadata(t,e){var n;return this.es.set(e.id,{id:(n=e).id,version:n.version,createTime:oc(n.createTime)}),kr.resolve()}getNamedQuery(t,e){return kr.resolve(this.ns.get(e))}saveNamedQuery(t,e){return this.ns.set(e.name,function(t){return{name:t.name,query:Dc(t.bundledQuery),readTime:oc(t.readTime)}}(e)),kr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Fc{constructor(){this.overlays=new Oo(br.comparator),this.ss=new Map}getOverlay(t,e){return kr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Qa();return kr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ce(t,e,s)})),kr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ss.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ss.delete(n)),kr.resolve()}getOverlaysForCollection(t,e,n){const s=Qa(),i=e.length+1,r=new br(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return kr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Oo(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Qa(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Qa(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return kr.resolve(o)}ce(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ss.get(s.largestBatchId).delete(n.key);this.ss.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Cc(e,n));let i=this.ss.get(e);void 0===i&&(i=Za(),this.ss.set(e,i)),this.ss.set(e,i.add(n.key))}}
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
 */class Vc{constructor(){this.rs=new xo(Uc.os),this.us=new xo(Uc.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,e){const n=new Uc(t,e);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ls(new Uc(t,e))}fs(t,e){t.forEach((t=>this.removeReference(t,e)))}ds(t){const e=new br(new vr([])),n=new Uc(e,t),s=new Uc(e,t+1),i=[];return this.us.forEachInRange([n,s],(t=>{this.ls(t),i.push(t.key)})),i}_s(){this.rs.forEach((t=>this.ls(t)))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const e=new br(new vr([])),n=new Uc(e,t),s=new Uc(e,t+1);let i=Za();return this.us.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Uc(t,0),n=this.rs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Uc{constructor(t,e){this.key=t,this.gs=e}static os(t,e){return br.comparator(t.key,e.key)||dr(t.gs,e.gs)}static cs(t,e){return dr(t.gs,e.gs)||br.comparator(t.key,e.key)}}
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
 */class Bc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ys=1,this.ps=new xo(Uc.os)}checkEmpty(t){return kr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Ic(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.ps=this.ps.add(new Uc(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return kr.resolve(r)}lookupMutationBatch(t,e){return kr.resolve(this.Is(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Ts(n),i=s<0?0:s;return kr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return kr.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(t){return kr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Uc(e,0),s=new Uc(e,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([n,s],(t=>{const e=this.Is(t.gs);i.push(e)})),kr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new xo(dr);return e.forEach((t=>{const e=new Uc(t,0),s=new Uc(t,Number.POSITIVE_INFINITY);this.ps.forEachInRange([e,s],(t=>{n=n.add(t.gs)}))})),kr.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;br.isDocumentKey(i)||(i=i.child(""));const r=new Uc(new br(i),0);let o=new xo(dr);return this.ps.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.gs)),!0)}),r),kr.resolve(this.Es(o))}Es(t){const e=[];return t.forEach((t=>{const n=this.Is(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ji(0===this.As(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ps;return kr.forEach(e.mutations,(s=>{const i=new Uc(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ps=n}))}bn(t){}containsKey(t,e){const n=new Uc(e,0),s=this.ps.firstAfterOrEqual(n);return kr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,kr.resolve()}As(t,e){return this.Ts(t)}Ts(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Is(t){const e=this.Ts(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class jc{constructor(t){this.Rs=t,this.docs=new Oo(br.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Rs(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return kr.resolve(n?n.document.mutableCopy():Uo.newInvalidDocument(e))}getEntries(t,e){let n=qa();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Uo.newInvalidDocument(t))})),kr.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=qa();const r=e.path,o=new br(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Sr(Ar(o),n)<=0||(s.has(o.key)||sa(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return kr.resolve(i)}getAllFromCollectionGroup(t,e,n,s){Yi()}bs(t,e){return kr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new $c(this)}getSize(t){return kr.resolve(this.size)}}class $c extends Lc{constructor(t){super(),this.Xn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Xn.addEntry(t,s)):this.Xn.removeEntry(n)})),kr.waitFor(e)}getFromCache(t,e){return this.Xn.getEntry(t,e)}getAllFromCache(t,e){return this.Xn.getEntries(t,e)}}
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
 */class Hc{constructor(t){this.persistence=t,this.vs=new $a((t=>$o(t)),Ho),this.lastRemoteSnapshotVersion=mr.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Vc,this.targetCount=0,this.Ss=Rc.Vn()}forEachTarget(t,e){return this.vs.forEach(((t,n)=>e(n))),kr.resolve()}getLastRemoteSnapshotVersion(t){return kr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return kr.resolve(this.Ps)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),kr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ps&&(this.Ps=e),kr.resolve()}xn(t){this.vs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ss=new Rc(e),this.highestTargetId=e),t.sequenceNumber>this.Ps&&(this.Ps=t.sequenceNumber)}addTargetData(t,e){return this.xn(e),this.targetCount+=1,kr.resolve()}updateTargetData(t,e){return this.xn(e),kr.resolve()}removeTargetData(t,e){return this.vs.delete(e.target),this.Vs.ds(e.targetId),this.targetCount-=1,kr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.vs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.vs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),kr.waitFor(i).next((()=>s))}getTargetCount(t){return kr.resolve(this.targetCount)}getTargetData(t,e){const n=this.vs.get(e)||null;return kr.resolve(n)}addMatchingKeys(t,e,n){return this.Vs.hs(e,n),kr.resolve()}removeMatchingKeys(t,e,n){this.Vs.fs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),kr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Vs.ds(e),kr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Vs.ws(e);return kr.resolve(n)}containsKey(t,e){return kr.resolve(this.Vs.containsKey(e))}}
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
 */class qc{constructor(t,e){this.Ds={},this.overlays={},this.Cs=new Rr(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new Hc(this),this.indexManager=new Nc,this.remoteDocumentCache=function(t){return new jc(t)}((t=>this.referenceDelegate.ks(t))),this.Tt=new Sc(e),this.Os=new Pc(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ds[t.toKey()];return n||(n=new Bc(e,this.referenceDelegate),this.Ds[t.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(t,e,n){zi("MemoryPersistence","Starting transaction:",t);const s=new Kc(this.Cs.next());return this.referenceDelegate.Ms(),n(s).next((t=>this.referenceDelegate.Fs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}$s(t,e){return kr.or(Object.values(this.Ds).map((n=>()=>n.containsKey(t,e))))}}class Kc extends _r{constructor(t){super(),this.currentSequenceNumber=t}}class Gc{constructor(t){this.persistence=t,this.Bs=new Vc,this.Ls=null}static qs(t){return new Gc(t)}get Us(){if(this.Ls)return this.Ls;throw Yi()}addReference(t,e,n){return this.Bs.addReference(n,e),this.Us.delete(n.toString()),kr.resolve()}removeReference(t,e,n){return this.Bs.removeReference(n,e),this.Us.add(n.toString()),kr.resolve()}markPotentiallyOrphaned(t,e){return this.Us.add(e.toString()),kr.resolve()}removeTarget(t,e){this.Bs.ds(e.targetId).forEach((t=>this.Us.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Us.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ms(){this.Ls=new Set}Fs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return kr.forEach(this.Us,(n=>{const s=br.fromPath(n);return this.Ks(t,s).next((t=>{t||e.removeEntry(s,mr.min())}))})).next((()=>(this.Ls=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ks(t,e).next((t=>{t?this.Us.delete(e.toString()):this.Us.add(e.toString())}))}ks(t){return 0}Ks(t,e){return kr.or([()=>kr.resolve(this.Bs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.$s(t,e)])}}
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
class zc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ci=n,this.xi=s}static Ni(t,e){let n=Za(),s=Za();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new zc(t,e.fromCache,n,s)}}
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
 */class Qc{constructor(){this.ki=!1}initialize(t,e){this.Oi=t,this.indexManager=e,this.ki=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Mi(t,e).next((i=>i||this.Fi(t,e,s,n))).next((n=>n||this.$i(t,e)))}Mi(t,e){if(zo(e))return kr.resolve(null);let n=Jo(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Zo(e,null,"F"),n=Jo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=Za(...s);return this.Oi.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Bi(e,s);return this.Li(e,r,i,n.readTime)?this.Mi(t,Zo(e,null,"F")):this.qi(t,r,e,n)}))))})))))}Fi(t,e,n,s){return zo(e)||s.isEqual(mr.min())?this.$i(t,e):this.Oi.getDocuments(t,n).next((i=>{const r=this.Bi(e,i);return this.Li(e,r,n,s)?this.$i(t,e):(Gi()<=U.DEBUG&&zi("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),na(e)),this.qi(t,r,e,Ir(s,-1)))}))}Bi(t,e){let n=new xo(ia(t));return e.forEach(((e,s)=>{sa(t,s)&&(n=n.add(s))})),n}Li(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}$i(t,e){return Gi()<=U.DEBUG&&zi("QueryEngine","Using full collection scan to execute query:",na(e)),this.Oi.getDocumentsMatchingQuery(t,e,Cr.min())}qi(t,e,n,s){return this.Oi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Wc{constructor(t,e,n,s){this.persistence=t,this.Ui=e,this.Tt=s,this.Ki=new Oo(dr),this.Gi=new $a((t=>$o(t)),Ho),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.Os=t.getBundleCache(),this.zi(n)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mc(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ki)))}}function Xc(t,e,n,s){return new Wc(t,e,n,s)}async function Yc(t,e){const n=Zi(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.zi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Za();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Wi:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Jc(t){const e=Zi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ns.getLastRemoteSnapshotVersion(t)))}function Zc(t,e){const n=Zi(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class th{constructor(){this.activeTargetIds=ec()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eh{constructor(){this.Ur=new th,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,e,n){this.Kr[t]=e}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new th,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class nh{Gr(t){}shutdown(){}}
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
 */class sh{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){zi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){zi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const ih={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class rh{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}
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
 */class oh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.co=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,e,n,s,i){const r=this.fo(t,e);zi("RestConnection","Sending: ",r,n);const o={};return this._o(o,s,i),this.wo(t,r,o,n).then((t=>(zi("RestConnection","Received: ",t),t)),(e=>{throw Wi("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}mo(t,e,n,s,i,r){return this.lo(t,e,n,s,i)}_o(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+qi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}fo(t,e){const n=ih[t];return`${this.co}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,e,n,s){return new Promise(((i,r)=>{const o=new ji;o.setWithCredentials(!0),o.listenOnce(Pi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Mi.NO_ERROR:const e=o.getResponseJson();zi("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Mi.TIMEOUT:zi("Connection",'RPC "'+t+'" timed out'),r(new er(tr.DEADLINE_EXCEEDED,"Request time out"));break;case Mi.HTTP_ERROR:const n=o.getStatus();if(zi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(tr).indexOf(e)>=0?e:tr.UNKNOWN}(e.status);r(new er(t,e.message))}else r(new er(tr.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new er(tr.UNAVAILABLE,"Connection failed."));break;default:Yi()}}finally{zi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}yo(t,e,n){const s=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Li(),r=xi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Ui({})),this._o(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");zi("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let h=!1,l=!1;const u=new rh({Yr:t=>{l?zi("Connection","Not sending because WebChannel is closed:",t):(h||(zi("Connection","Opening WebChannel transport."),c.open(),h=!0),zi("Connection","WebChannel sending:",t),c.send(t))},Zr:()=>c.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(c,Bi.EventType.OPEN,(()=>{l||zi("Connection","WebChannel transport opened.")})),f(c,Bi.EventType.CLOSE,(()=>{l||(l=!0,zi("Connection","WebChannel transport closed"),u.oo())})),f(c,Bi.EventType.ERROR,(t=>{l||(l=!0,Wi("Connection","WebChannel transport errored:",t),u.oo(new er(tr.UNAVAILABLE,"The operation could not be completed")))})),f(c,Bi.EventType.MESSAGE,(t=>{var e;if(!l){const n=t.data[0];Ji(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){zi("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Va[t];if(void 0!==e)return ja(e)}(t),n=i.message;void 0===e&&(e=tr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),l=!0,u.oo(new er(e,n)),c.close()}else zi("Connection","WebChannel received:",n),u.uo(n)}})),f(r,Fi.STAT_EVENT,(t=>{t.stat===Vi.PROXY?zi("Connection","Detected buffering proxy"):t.stat===Vi.NOPROXY&&zi("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.ro()}),0),u}}
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
 */function ah(){return"undefined"!=typeof document?document:null}
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
 */function ch(t){return new nc(t,!0)}
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
 */class hh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ys=t,this.timerId=e,this.po=n,this.Io=s,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(t){this.cancel();const e=Math.floor(this.Eo+this.Po()),n=Math.max(0,Date.now()-this.Ro),s=Math.max(0,e-n);s>0&&zi("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,(()=>(this.Ro=Date.now(),t()))),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}
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
 */class lh{constructor(t,e,n,s,i,r,o,a){this.Ys=t,this.So=n,this.Do=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new hh(t,e)}Oo(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,(()=>this.Lo())))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,e){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==t?this.ko.reset():e&&e.code===tr.RESOURCE_EXHAUSTED?(Qi(e.toString()),Qi("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):e&&e.code===tr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(e)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),e=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Co===e&&this.jo(t,n)}),(e=>{t((()=>{const t=new er(tr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.zo(t)}))}))}jo(t,e){const n=this.Qo(this.Co);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.no((t=>{n((()=>this.zo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Fo(){this.state=5,this.ko.vo((async()=>{this.state=0,this.start()}))}zo(t){return zi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return e=>{this.Ys.enqueueAndForget((()=>this.Co===t?e():(zi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uh extends lh{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,e){return this.connection.yo("Write",t,e)}onMessage(t){if(Ji(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const e=function(t,e){return t&&t.length>0?(Ji(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?oc(t.updateTime):oc(e);return n.isEqual(mr.min())&&(n=oc(e)),new Ta(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=oc(t.commitTime);return this.listener.eu(n,e)}return Ji(!t.writeResults||0===t.writeResults.length),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=uc(this.Tt),this.qo(t)}tu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>pc(this.Tt,t)))};this.qo(e)}}
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
 */class fh extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.Tt=s,this.iu=!1}ru(){if(this.iu)throw new er(tr.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,e,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.lo(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new er(tr.UNKNOWN,t.toString())}))}mo(t,e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.mo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new er(tr.UNKNOWN,t.toString())}))}terminate(){this.iu=!0}}class dh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve()))))}fu(t){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,"Online"===t&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Qi(e),this.cu=!1):zi("OnlineStateTracker",e)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}}
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
 */class ph{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr((t=>{n.enqueueAndForget((async()=>{yh(this)&&(zi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Zi(t);e.mu.add(4),await mh(e),e.pu.set("Unknown"),e.mu.delete(4),await gh(e)}(this))}))})),this.pu=new dh(n,s)}}async function gh(t){if(yh(t))for(const e of t.gu)await e(!0)}async function mh(t){for(const e of t.gu)await e(!1)}function yh(t){return 0===Zi(t).mu.size}async function vh(t,e,n){if(!Or(e))throw e;t.mu.add(1),await mh(t),t.pu.set("Offline"),n||(n=()=>Jc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{zi("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await gh(t)}))}function wh(t,e){return e().catch((n=>vh(t,n,e)))}async function Eh(t){const e=Zi(t),n=Oh(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;bh(e);)try{const t=await Zc(e.localStore,s);if(null===t){0===e._u.length&&n.Bo();break}s=t.batchId,Th(e,t)}catch(t){await vh(e,t)}Ih(e)&&Ah(e)}function bh(t){return yh(t)&&t._u.length<10}function Th(t,e){t._u.push(e);const n=Oh(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Ih(t){return yh(t)&&!Oh(t).Oo()&&t._u.length>0}function Ah(t){Oh(t).start()}async function Ch(t){Oh(t).su()}async function Sh(t){const e=Oh(t);for(const n of t._u)e.tu(n.mutations)}async function Dh(t,e,n){const s=t._u.shift(),i=Ac.from(s,e,n);await wh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await Eh(t)}async function _h(t,e){e&&Oh(t).Xo&&await async function(t,e){if(Ba(n=e.code)&&n!==tr.ABORTED){const n=t._u.shift();Oh(t).$o(),await wh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Eh(t)}var n}(t,e),Ih(t)&&Ah(t)}async function Nh(t,e){const n=Zi(t);n.asyncQueue.verifyOperationInProgress(),zi("RemoteStore","RemoteStore received new credentials");const s=yh(n);n.mu.add(3),await mh(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await gh(n)}async function kh(t,e){const n=Zi(t);e?(n.mu.delete(2),await gh(n)):e||(n.mu.add(2),await mh(n),n.pu.set("Unknown"))}function Oh(t){return t.Eu||(t.Eu=function(t,e,n){const s=Zi(t);return s.ru(),new uh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,n)}(t.datastore,t.asyncQueue,{Xr:Ch.bind(null,t),no:_h.bind(null,t),nu:Sh.bind(null,t),eu:Dh.bind(null,t)}),t.gu.push((async e=>{e?(t.Eu.$o(),await Eh(t)):(await t.Eu.stop(),t._u.length>0&&(zi("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))}))),t.Eu
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
 */}class Rh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Rh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new er(tr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lh(t,e){if(Qi("AsyncQueue",`${e}: ${t}`),Or(t))return new er(tr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class xh{constructor(){this.queries=new $a((t=>ea(t)),ta),this.onlineState="Unknown",this.vu=new Set}}function Mh(t){t.vu.forEach((t=>{t.next()}))}class Ph{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.rc={},this.oc=new $a((t=>ea(t)),ta),this.uc=new Map,this.cc=new Set,this.ac=new Oo(br.comparator),this.hc=new Map,this.lc=new Vc,this.fc={},this.dc=new Map,this._c=Rc.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return!0===this.wc}}function Fh(t,e,n){const s=Zi(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.oc.forEach(((n,s)=>{const i=s.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Zi(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Pu(e)&&(s=!0)})),s&&Mh(n)}(s.eventManager,e),t.length&&s.rc.Ho(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Vh(t,e){const n=Zi(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Zi(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=kr.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Ji(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Za();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);jh(n,s,null),Bh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await $h(n,t)}catch(t){await Nr(t)}}async function Uh(t,e,n){const s=Zi(t);try{const t=await function(t,e){const n=Zi(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ji(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);jh(s,e,n),Bh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await $h(s,t)}catch(n){await Nr(n)}}function Bh(t,e){(t.dc.get(e)||[]).forEach((t=>{t.resolve()})),t.dc.delete(e)}function jh(t,e,n){const s=Zi(t);let i=s.fc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}async function $h(t,e,n){const s=Zi(t),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach(((t,a)=>{o.push(s.mc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=zc.Ni(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.rc.Ho(i),await async function(t,e){const n=Zi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>kr.forEach(e,(e=>kr.forEach(e.Ci,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>kr.forEach(e.xi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Or(t))throw t;zi("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ki.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ki=n.Ki.insert(e,i)}}}(s.localStore,r))}async function Hh(t,e){const n=Zi(t);if(!n.currentUser.isEqual(e)){zi("SyncEngine","User change. New user:",e.toKey());const t=await Yc(n.localStore,e);n.currentUser=e,function(t,e){t.dc.forEach((t=>{t.forEach((t=>{t.reject(new er(tr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.dc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await $h(n,t.Wi)}}function qh(t){const e=Zi(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Uh.bind(null,e),e}class Kh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=ch(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,e){return null}Rc(t,e){return null}Ec(t){return Xc(this.persistence,new Qc,t.initialUser,this.Tt)}Tc(t){return new qc(Gc.qs,this.Tt)}Ic(t){return new eh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gh{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Fh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hh.bind(null,this.syncEngine),await kh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new xh}createDatastore(t){const e=ch(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new oh(s));var s;return function(t,e,n,s){return new fh(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Fh(this.syncEngine,t,0),r=sh.C()?new sh:new nh,new ph(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Ph(t,e,n,s,i,r);return o&&(a.wc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Zi(t);zi("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await mh(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}
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
class zh{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Hi.UNAUTHENTICATED,this.clientId=fr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{zi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(zi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new er(tr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Lh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Qh(t,e){t.asyncQueue.verifyOperationInProgress(),zi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Yc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Wh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xh(t);zi("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Nh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Nh(e.remoteStore,n))),t.onlineComponents=e}async function Xh(t){return t.offlineComponents||(zi("FirestoreClient","Using default OfflineComponentProvider"),await Qh(t,new Kh)),t.offlineComponents}async function Yh(t){return t.onlineComponents||(zi("FirestoreClient","Using default OnlineComponentProvider"),await Wh(t,new Gh)),t.onlineComponents}function Jh(t){return Yh(t).then((t=>t.syncEngine))}const Zh=new Map;
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
 */function tl(t,e,n){if(!n)throw new er(tr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function el(t){if(!br.isDocumentKey(t))throw new er(tr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nl(t){if(br.isDocumentKey(t))throw new er(tr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Yi()}function il(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new er(tr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sl(t);throw new er(tr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class rl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new er(tr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new er(tr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new er(tr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class ol{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new er(tr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new er(tr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ir;switch(t.type){case"gapi":const e=t.client;return new cr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new er(tr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zh.get(t);e&&(zi("ComponentProvider","Removing Datastore"),Zh.delete(t),e.terminate())}(this),Promise.resolve()}}function al(t,e,n,s={}){var i;const r=(t=il(t,ol))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&Wi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Hi.MOCK_USER;else{e=S(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new er(tr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Hi(r)}t._authCredentials=new rr(new sr(e,n))}}
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
 */class cl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ll(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cl(this.firestore,t,this._key)}}class hl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hl(this.firestore,t,this._query)}}class ll extends hl{constructor(t,e,n){super(t,e,Go(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cl(this.firestore,null,new br(t))}withConverter(t){return new ll(this.firestore,t,this._path)}}function ul(t,e,...n){if(t=L(t),tl("collection","path",e),t instanceof ol){const s=vr.fromString(e,...n);return nl(s),new ll(t,null,s)}{if(!(t instanceof cl||t instanceof ll))throw new er(tr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(vr.fromString(e,...n));return nl(s),new ll(t.firestore,null,s)}}function fl(t,e,...n){if(t=L(t),1===arguments.length&&(e=fr.R()),tl("doc","path",e),t instanceof ol){const s=vr.fromString(e,...n);return el(s),new cl(t,null,new br(s))}{if(!(t instanceof cl||t instanceof ll))throw new er(tr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(vr.fromString(e,...n));return el(s),new cl(t.firestore,t instanceof ll?t.converter:null,new br(s))}}
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
class dl{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new hh(this,"async_queue_retry"),this.Hc=()=>{const t=ah();t&&zi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const t=ah();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const e=ah();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise((()=>{}));const e=new nr;return this.Yc((()=>this.Kc&&this.zc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Uc.push(t),this.Zc())))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!Or(t))throw t;zi("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo((()=>this.Zc()))}}Yc(t){const e=this.qc.then((()=>(this.jc=!0,t().catch((t=>{this.Qc=t,this.jc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw Qi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.jc=!1,t))))));return this.qc=e,e}enqueueAfterDelay(t,e,n){this.Jc(),this.Wc.indexOf(t)>-1&&(e=0);const s=Rh.createAndSchedule(this,t,e,n,(t=>this.Xc(t)));return this.Gc.push(s),s}Jc(){this.Qc&&Yi()}verifyOperationInProgress(){}async ta(){let t;do{t=this.qc,await t}while(t!==this.qc)}ea(t){for(const e of this.Gc)if(e.timerId===t)return!0;return!1}na(t){return this.ta().then((()=>{this.Gc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Gc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ta()}))}sa(t){this.Wc.push(t)}Xc(t){const e=this.Gc.indexOf(t);this.Gc.splice(e,1)}}class pl extends ol{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new dl,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ml(this),this._firestoreClient.terminate()}}function gl(t){return t._firestoreClient||ml(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ml(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Lr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new zh(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
class yl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new yl($r.fromBase64String(t))}catch(t){throw new er(tr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new yl($r.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class vl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new er(tr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Er(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class wl{constructor(t){this._methodName=t}}
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
 */class El{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new er(tr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new er(tr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return dr(this._lat,t._lat)||dr(this._long,t._long)}}
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
 */const bl=/^__.*__$/;class Tl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ra(t,this.data,this.fieldMask,e,this.fieldTransforms):new Oa(t,this.data,e,this.fieldTransforms)}}class Il{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Ra(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Al(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Yi()}}class Cl{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.Tt=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new Cl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.oa({path:n,ca:!1});return s.aa(t),s}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.oa({path:n,ca:!1});return s.ia(),s}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return Bl(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(0===t.length)throw this.fa("Document fields must not be empty");if(Al(this.ra)&&bl.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class Sl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.Tt=n||ch(t)}wa(t,e,n,s=!1){return new Cl({ra:t,methodName:e,_a:n,path:Er.emptyPath(),ca:!1,da:s},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Dl(t){const e=t._freezeSettings(),n=ch(t._databaseId);return new Sl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _l(t,e,n,s,i,r={}){const o=t.wa(r.merge||r.mergeFields?2:0,e,n,i);Pl("Data must be an object, but it was:",o,s);const a=xl(s,o);let c,h;if(r.merge)c=new Po(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Fl(e,s,n);if(!o.contains(i))throw new er(tr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);jl(t,i)||t.push(i)}c=new Po(t),h=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,h=o.fieldTransforms;return new Tl(new Fo(a),c,h)}class Nl extends wl{_toFieldTransform(t){if(2!==t.ra)throw 1===t.ra?t.fa(`${this._methodName}() can only appear at the top level of your update data`):t.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Nl}}class kl extends wl{constructor(t,e){super(t),this.ga=e}_toFieldTransform(t){const e=new va(t.Tt,ca(t.Tt,this.ga));return new ba(t.path,e)}isEqual(t){return this===t}}function Ol(t,e,n,s){const i=t.wa(1,e,n);Pl("Data must be an object, but it was:",i,s);const r=[],o=Fo.empty();Pr(s,((t,s)=>{const a=Ul(e,t,n);s=L(s);const c=i.ha(a);if(s instanceof Nl)r.push(a);else{const t=Ll(s,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new Po(r);return new Il(o,a,i.fieldTransforms)}function Rl(t,e,n,s,i,r){const o=t.wa(1,e,n),a=[Fl(e,s,n)],c=[i];if(r.length%2!=0)throw new er(tr.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(Fl(e,r[t])),c.push(r[t+1]);const h=[],l=Fo.empty();for(let t=a.length-1;t>=0;--t)if(!jl(h,a[t])){const e=a[t];let n=c[t];n=L(n);const s=o.ha(e);if(n instanceof Nl)h.push(e);else{const t=Ll(n,s);null!=t&&(h.push(e),l.set(e,t))}}const u=new Po(h);return new Il(l,u,o.fieldTransforms)}function Ll(t,e){if(Ml(t=L(t)))return Pl("Unsupported field value:",e,t),xl(t,e);if(t instanceof wl)return function(t,e){if(!Al(e.ra))throw e.fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&4!==e.ra)throw e.fa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Ll(i,e.la(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=L(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ca(e.Tt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=gr.fromDate(t);return{timestampValue:sc(e.Tt,n)}}if(t instanceof gr){const n=new gr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:sc(e.Tt,n)}}if(t instanceof El)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof yl)return{bytesValue:ic(e.Tt,t._byteString)};if(t instanceof cl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ac(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fa(`Unsupported field value: ${sl(t)}`)}(t,e)}function xl(t,e){const n={};return Fr(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pr(t,((t,s)=>{const i=Ll(s,e.ua(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Ml(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof gr||t instanceof El||t instanceof yl||t instanceof cl||t instanceof wl)}function Pl(t,e,n){if(!Ml(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=sl(n);throw"an object"===s?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function Fl(t,e,n){if((e=L(e))instanceof vl)return e._internalPath;if("string"==typeof e)return Ul(t,e);throw Bl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vl=new RegExp("[~\\*/\\[\\]]");function Ul(t,e,n){if(e.search(Vl)>=0)throw Bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch(s){throw Bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bl(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new er(tr.INVALID_ARGUMENT,a+t+c)}function jl(t,e){return t.some((t=>t.isEqual(e)))}
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
function $l(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}function Hl(t,e,n,...s){t=il(t,cl);const i=il(t.firestore,pl),r=Dl(i);let o;return o="string"==typeof(e=L(e))||e instanceof vl?Rl(r,"updateDoc",t._key,e,n,s):Ol(r,"updateDoc",t._key,e),Kl(i,[o.toMutation(t._key,Ia.exists(!0))])}function ql(t,e){const n=il(t.firestore,pl),s=fl(t),i=$l(t.converter,e);return Kl(n,[_l(Dl(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,Ia.exists(!1))]).then((()=>s))}function Kl(t,e){return function(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=qh(t);try{const t=await function(t,e){const n=Zi(t),s=gr.now(),i=e.reduce(((t,e)=>t.add(e.key)),Za());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=qa(),c=Za();return n.ji.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=Na(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Ra(t.key,e,Vo(e.value.mapValue),Ia.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:za(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.fc[t.currentUser.toKey()];s||(s=new Oo(dr)),s=s.insert(e,n),t.fc[t.currentUser.toKey()]=s}(s,t.batchId,n),await $h(s,t.changes),await Eh(s.remoteStore)}catch(t){const e=Lh(t,"Failed to persist write");n.reject(e)}}(await Jh(t),e,n))),n.promise}(gl(t),e)}!function(t,e=!0){qi="9.17.2",wt(new x("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new pl(new or(t.getProvider("auth-internal")),new lr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new er(tr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xr(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),Ct($i,"3.8.4",t),Ct($i,"3.8.4","esm2017")}();It({apiKey:"AIzaSyDhfTomFg03nXW2cD1RIysGXydVHHUNC0c",authDomain:"nisb-website.firebaseapp.com",projectId:"nisb-website",storageBucket:"nisb-website.appspot.com",messagingSenderId:"30096523025",appId:"1:30096523025:web:8485960da3344cf73cd6b0",measurementId:"G-5RMDTP6Q8R"});const Gl=function(t,e){const n="string"==typeof t?t:e||"(default)",s=Et("object"==typeof t?t:At(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=I("firestore");t&&al(s,...t)}return s}();var zl=null;fetch("https://ipapi.co/json/").then((t=>t.json())).then((t=>zl=t)).catch((t=>console.error(t)));const Ql=t=>{var e;
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
 */ql(ul(Gl,"analytics"),{name:t.target.getAttribute("data-name"),link:t.target.getAttribute("data-url"),time:new Date,loc:zl}),Hl(fl(Gl,"social-links",t.target.getAttribute("data-id")),{count:(e=1,new kl("increment",e))}),window.open(t.target.getAttribute("data-url"),"_blank")};for(var Wl=document.getElementsByClassName("link"),Xl=0;Xl<Wl.length;Xl++)Wl[Xl].addEventListener("click",Ql,!1);
//# sourceMappingURL=index.b9ccbf19.js.map
