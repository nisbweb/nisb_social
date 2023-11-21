let t,e;var n,i,r,s,a,o,l=globalThis,h={},u=h={};function c(){throw Error("setTimeout has not been defined")}function f(){throw Error("clearTimeout has not been defined")}function d(t){if(tP===setTimeout)return setTimeout(t,0);if((tP===c||!tP)&&setTimeout)return tP=setTimeout,setTimeout(t,0);try{return tP(t,0)}catch(e){try{return tP.call(null,t,0)}catch(e){return tP.call(this,t,0)}}}!function(){try{tP="function"==typeof setTimeout?setTimeout:c}catch(t){tP=c}try{tF="function"==typeof clearTimeout?clearTimeout:f}catch(t){tF=f}}();var p=[],g=!1,m=-1;function y(){g&&tV&&(g=!1,tV.length?p=tV.concat(p):m=-1,p.length&&v())}function v(){if(!g){var t=d(y);g=!0;for(var e=p.length;e;){for(tV=p,p=[];++m<e;)tV&&tV[m].run();m=-1,e=p.length}tV=null,g=!1,function(t){if(tF===clearTimeout)return clearTimeout(t);if((tF===f||!tF)&&clearTimeout)return tF=clearTimeout,clearTimeout(t);try{tF(t)}catch(e){try{return tF.call(null,t)}catch(e){return tF.call(this,t)}}}(t)}}function w(t,e){this.fun=t,this.array=e}function E(){}u.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new w(t,e)),1!==p.length||g||d(v)},w.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=E,u.addListener=E,u.once=E,u.off=E,u.removeListener=E,u.removeAllListeners=E,u.emit=E,u.prependListener=E,u.prependOnceListener=E,u.listeners=function(t){return[]},u.binding=function(t){throw Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw Error("process.chdir is not supported")},u.umask=function(){return 0};/**
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
 */const b=function(t){let e=[],n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:(r<2048?e[n++]=r>>6|192:((64512&r)==55296&&i+1<t.length&&(64512&t.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128):e[n++]=r>>12|224,e[n++]=r>>6&63|128),e[n++]=63&r|128)}return e},T=function(t){let e=[],n=0,i=0;for(;n<t.length;){let r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{let s=t[n++],a=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return e.join("")},I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){let r=t[e],s=e+1<t.length,a=s?t[e+1]:0,o=e+2<t.length,l=o?t[e+2]:0,h=r>>2,u=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;o||(f=64,s||(c=64)),i.push(n[h],n[u],n[c],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):T(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){let r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0,a=++e<t.length?n[t.charAt(e)]:64,o=++e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==a||null==o)throw new S;let l=r<<2|s>>4;if(i.push(l),64!==a){let t=s<<4&240|a>>2;if(i.push(t),64!==o){let t=a<<6&192|o;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A=function(t){let e=b(t);return I.encodeByteArray(e,!0)},C=function(t){return A(t).replace(/\./g,"")},_=function(t){try{return I.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},D=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==l)return l;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,N=()=>{if(void 0===h||void 0===h.env)return;let t=void 0;if(t)return JSON.parse(t)},k=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let e=t&&_(t[1]);return e&&JSON.parse(e)},R=()=>{try{return D()||N()||k()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O=t=>{var e,n;return null===(n=null===(e=R())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},L=t=>{let e=O(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},x=()=>{var t;return null===(t=R())||void 0===t?void 0:t.config};/**
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
 */class M{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}class P extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){let n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?r.replace(V,(t,e)=>{let i=n[e];return null!=i?String(i):`<${e}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new P(i,a,n)}}const V=/\{\$([^}]+)}/g;function U(t,e){if(t===e)return!0;let n=Object.keys(t),i=Object.keys(e);for(let r of n){if(!i.includes(r))return!1;let n=t[r],s=e[r];if(B(n)&&B(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(let t of i)if(!n.includes(t))return!1;return!0}function B(t){return null!==t&&"object"==typeof t}/**
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
 */function j(t){return t&&t._delegate?t._delegate:t}class ${constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const H="[DEFAULT]";/**
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
 */class z{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let t=new M;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;let n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:H})}catch(t){}for(let[t,e]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(t);try{let t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=H){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=H){return this.instances.has(t)}getOptions(t=H){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(let[t,e]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(t)&&e.resolve(i);return i}onInit(t,e){var n;let i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){let n=this.onInitCallbacks.get(e);if(n)for(let i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===H?void 0:t,options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=H){return this.component?this.component.multipleInstances?t:H:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class q{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let e=new z(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const G=[];(tM=tU||(tU={}))[tM.DEBUG=0]="DEBUG",tM[tM.VERBOSE=1]="VERBOSE",tM[tM.INFO=2]="INFO",tM[tM.WARN=3]="WARN",tM[tM.ERROR=4]="ERROR",tM[tM.SILENT=5]="SILENT";const K={debug:tU.DEBUG,verbose:tU.VERBOSE,info:tU.INFO,warn:tU.WARN,error:tU.ERROR,silent:tU.SILENT},Q=tU.INFO,W={[tU.DEBUG]:"log",[tU.VERBOSE]:"log",[tU.INFO]:"info",[tU.WARN]:"warn",[tU.ERROR]:"error"},X=(t,e,...n)=>{if(e<t.logLevel)return;let i=new Date().toISOString(),r=W[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Y{constructor(t){this.name=t,this._logLevel=Q,this._logHandler=X,this._userLogHandler=null,G.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tU))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?K[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tU.DEBUG,...t),this._logHandler(this,tU.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tU.VERBOSE,...t),this._logHandler(this,tU.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tU.INFO,...t),this._logHandler(this,tU.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tU.WARN,...t),this._logHandler(this,tU.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tU.ERROR,...t),this._logHandler(this,tU.ERROR,...t)}}const J=(t,e)=>e.some(e=>t instanceof e),Z=new WeakMap,tt=new WeakMap,te=new WeakMap,tn=new WeakMap,ti=new WeakMap;let tr={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return tt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||te.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ts(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ts(n){var i;if(n instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(ts(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&Z.set(e,t)}).catch(()=>{}),ti.set(e,t),e}(n);if(tn.has(n))return tn.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(e||(e=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...t){return i.apply(ta(this),t),ts(Z.get(this))}:function(...t){return ts(i.apply(ta(this),t))}:function(t,...e){let n=i.call(ta(this),t,...e);return te.set(n,t.sort?t.sort():[t]),ts(n)}:(i instanceof IDBTransaction&&function(t){if(tt.has(t))return;let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});tt.set(t,e)}(i),J(i,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,tr):i;return r!==n&&(tn.set(n,r),ti.set(r,n)),r}const ta=t=>ti.get(t),to=["get","getKey","getAll","getAllKeys","count"],tl=["put","add","delete","clear"],th=new Map;function tu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(th.get(e))return th.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,r=tl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||to.includes(n)))return;let s=async function(t,...e){let s=this.transaction(t,r?"readwrite":"readonly"),a=s.store;return i&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),r&&s.done]))[0]};return th.set(e,s),s}tr={...tx=tr,get:(t,e,n)=>tu(t,e)||tx.get(t,e,n),has:(t,e)=>!!tu(t,e)||tx.has(t,e)};/**
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
 */class tc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(!function(t){let e=t.getComponent();return(null==e?void 0:e.type)==="VERSION"}(t))return null;{let e=t.getImmediate();return`${e.library}/${e.version}`}}).filter(t=>t).join(" ")}}const tf="@firebase/app",td="0.9.13",tp=new Y("@firebase/app"),tg="[DEFAULT]",tm={[tf]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ty=new Map,tv=new Map;function tw(t){let e=t.name;if(tv.has(e))return tp.debug(`There were multiple attempts to register component ${e}.`),!1;for(let n of(tv.set(e,t),ty.values()))!function(t,e){try{t.container.addComponent(e)}catch(n){tp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}(n,t);return!0}const tE=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class tb{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tE.create("app-deleted",{appName:this._name})}}function tT(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});let i=Object.assign({name:tg,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw tE.create("bad-app-name",{appName:String(r)});if(n||(n=x()),!n)throw tE.create("no-options");let s=ty.get(r);if(s){if(U(n,s.options)&&U(i,s.config))return s;throw tE.create("duplicate-app",{appName:r})}let a=new q(r);for(let t of tv.values())a.addComponent(t);let o=new tb(n,i,a);return ty.set(r,o),o}function tI(t,e,n){var i;let r=null!==(i=tm[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);let s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let t=[`Unable to register library "${r}" with version "${e}":`];s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tp.warn(t.join(" "));return}tw(new $(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}const tS="firebase-heartbeat-store";let tA=null;function tC(){return tA||(tA=(function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let a=indexedDB.open(t,1),o=ts(a);return i&&a.addEventListener("upgradeneeded",t=>{i(ts(a.result),t.oldVersion,t.newVersion,ts(a.transaction),t)}),n&&a.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),o.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",t=>r(t.oldVersion,t.newVersion,t))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(t,e)=>{0===e&&t.createObjectStore(tS)}}).catch(t=>{throw tE.create("idb-open",{originalErrorMessage:t.message})})),tA}async function t_(t){try{let e=await tC();return await e.transaction(tS).objectStore(tS).get(tN(t))}catch(t){if(t instanceof P)tp.warn(t.message);else{let e=tE.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});tp.warn(e.message)}}}async function tD(t,e){try{let n=(await tC()).transaction(tS,"readwrite"),i=n.objectStore(tS);await i.put(e,tN(t)),await n.done}catch(t){if(t instanceof P)tp.warn(t.message);else{let e=tE.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});tp.warn(e.message)}}}function tN(t){return`${t.name}!${t.options.appId}`}class tk{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new tO(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=tR();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===e||this._heartbeatsCache.heartbeats.some(t=>t.date===e))?void 0:(this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let e=new Date(t.date).valueOf();return Date.now()-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let t=tR(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){let n=[],i=t.slice();for(let r of t){let t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),tL(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tL(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=C(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tR(){return new Date().toISOString().substring(0,10)}class tO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}).then(()=>!0).catch(()=>!1)}async read(){return await this._canUseIndexedDBPromise&&await t_(this.app)||{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){let n=await this.read();return tD(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){let n=await this.read();return tD(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function tL(t){return C(JSON.stringify({version:2,heartbeats:t})).length}tw(new $("platform-logger",t=>new tc(t),"PRIVATE")),tw(new $("heartbeat",t=>new tk(t),"PRIVATE")),tI(tf,td,""),tI(tf,td,"esm2017"),tI("fire-js",""),tI("firebase","9.23.0","app");var tx,tM,tP,tF,tV,tU,tB,tj="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==l?l:"undefined"!=typeof self?self:{},t$={},tH=tH||{},tz=tj||self;function tq(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function tG(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function tK(t,e,n){return t.call.apply(t.bind,arguments)}function tQ(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function tW(t,e,n){return(tW=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tK:tQ).apply(null,arguments)}function tX(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function tY(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function tJ(){this.s=this.s,this.o=this.o}tJ.prototype.s=!1,tJ.prototype.sa=function(){this.s||(this.s=!0,this.N())},tJ.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tZ=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1};function t0(t){let e=t.length;if(0<e){let n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function t1(t,e){for(let e=1;e<arguments.length;e++){let n=arguments[e];if(tq(n)){let e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function t2(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}t2.prototype.h=function(){this.defaultPrevented=!0};var t9=function(){if(!tz.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{tz.addEventListener("test",()=>{},e),tz.removeEventListener("test",()=>{},e)}catch(t){}return t}();function t4(t){return/^[\s\xa0]*$/.test(t)}function t6(){var t=tz.navigator;return t&&(t=t.userAgent)?t:""}function t5(t){return -1!=t6().indexOf(t)}function t3(t){return t3[" "](t),t}t3[" "]=function(){};var t7=t5("Opera"),t8=t5("Trident")||t5("MSIE"),et=t5("Edge"),ee=et||t8,en=t5("Gecko")&&!(-1!=t6().toLowerCase().indexOf("webkit")&&!t5("Edge"))&&!(t5("Trident")||t5("MSIE"))&&!t5("Edge"),ei=-1!=t6().toLowerCase().indexOf("webkit")&&!t5("Edge");function er(){var t=tz.document;return t?t.documentMode:void 0}t:{var es,ea="",eo=(es=t6(),en?/rv:([^\);]+)(\)|;)/.exec(es):et?/Edge\/([\d\.]+)/.exec(es):t8?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(es):ei?/WebKit\/(\S+)/.exec(es):t7?/(?:Version)[ \/]?(\S+)/.exec(es):void 0);if(eo&&(ea=eo?eo[1]:""),t8){var el=er();if(null!=el&&el>parseFloat(ea)){i=String(el);break t}}i=ea}var eh=tz.document&&t8&&(er()||parseInt(i,10))||void 0;function eu(t,e){if(t2.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(en){t:{try{t3(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ec[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&eu.$.h.call(this)}}tY(eu,t2);var ec={2:"touch",3:"pen",4:"mouse"};eu.prototype.h=function(){eu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ef="closure_listenable_"+(1e6*Math.random()|0),ed=0;function ep(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++ed,this.fa=this.ia=!1}function eg(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function em(t,e,n){for(let i in t)e.call(n,t[i],i,t)}function ey(t){let e={};for(let n in t)e[n]=t[n];return e}const ev="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ew(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e])t[n]=i[n];for(let e=0;e<ev.length;e++)n=ev[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function eE(t){this.src=t,this.g={},this.h=0}function eb(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=tZ(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(eg(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function eT(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&!!n==s.capture&&s.la==i)return r}return -1}eE.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var a=eT(t,e,i,r);return -1<a?(e=t[a],n||(e.ia=!1)):((e=new ep(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var eI="closure_lm_"+(1e6*Math.random()|0),eS={};function eA(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var a=tG(r)?!!r.capture:!!r,o=eN(t);if(o||(t[eI]=o=new eE(t)),(n=o.add(e,n,i,a,s)).proxy)return n;if(i=function t(e){return eD.call(t.src,t.listener,e)},n.proxy=i,i.src=t,i.listener=n,t.addEventListener)t9||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(e_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eC(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ef])eb(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(e_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=eN(e))?(eb(n,t),0==n.h&&(n.src=null,e[eI]=null)):eg(t)}}}function e_(t){return t in eS?eS[t]:eS[t]="on"+t}function eD(t,e){if(t.fa)t=!0;else{e=new eu(e,this);var n=t.listener,i=t.la||t.src;t.ia&&eC(t),t=n.call(i,e)}return t}function eN(t){return(t=t[eI])instanceof eE?t:null}var ek="__closure_events_fn_"+(1e9*Math.random()>>>0);function eR(t){return"function"==typeof t?t:(t[ek]||(t[ek]=function(e){return t.handleEvent(e)}),t[ek])}function eO(){tJ.call(this),this.i=new eE(this),this.S=this,this.J=null}function eL(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new t2(e,t);else if(e instanceof t2)e.target=e.target||t;else{var r=e;ew(e=new t2(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=e.g=n[s];r=ex(a,i,!0,e)&&r}if(r=ex(a=e.g=t,i,!0,e)&&r,r=ex(a,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=ex(a=e.g=n[s],i,!1,e)&&r}function ex(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&eb(t.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}tY(eO,tJ),eO.prototype[ef]=!0,eO.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);else(r=tG(r)?!!r.capture:!!r,i=eR(i),e&&e[ef])?(e=e.i,(n=String(n).toString())in e.g&&-1<(i=eT(a=e.g[n],i,r,s))&&(eg(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete e.g[n],e.h--))):e&&(e=eN(e))&&(n=e.g[n.toString()],e=-1,n&&(e=eT(n,i,r,s)),(i=-1<e?n[e]:null)&&eC(i))}(this,t,e,n,i)},eO.prototype.N=function(){if(eO.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)eg(n[i]);delete e.g[t],e.h--}}this.J=null},eO.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},eO.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var eM=tz.JSON.stringify,eP=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new eF,t=>t.reset());class eF{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let eV,eU=!1,eB=new class{constructor(){this.h=this.g=null}add(t,e){let n=eP.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},ej=()=>{let t=tz.Promise.resolve(void 0);eV=()=>{t.then(e$)}};var e$=()=>{let t;for(var e;t=null,eB.g&&(t=eB.g,eB.g=eB.g.next,eB.g||(eB.h=null),t.next=null),e=t;){try{e.h.call(e.g)}catch(t){!function(t){tz.setTimeout(()=>{throw t},0)}(t)}eP.j(e),100>eP.h&&(eP.h++,e.next=eP.g,eP.g=e)}eU=!1};function eH(t,e){eO.call(this),this.h=t||1,this.g=e||tz,this.j=tW(this.qb,this),this.l=Date.now()}function ez(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function eq(t,e,n){if("function"==typeof t)n&&(t=tW(t,n));else if(t&&"function"==typeof t.handleEvent)t=tW(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:tz.setTimeout(t,e||0)}tY(eH,eO),(tB=eH.prototype).ga=!1,tB.T=null,tB.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eL(this,"tick"),this.ga&&(ez(this),this.start()))}},tB.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},tB.N=function(){eH.$.N.call(this),ez(this),delete this.g};class eG extends tJ{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=eq(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);let n=e.h;e.h=null,e.m.apply(null,n)}(this)}N(){super.N(),this.g&&(tz.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eK(t){tJ.call(this),this.h=t,this.g={}}tY(eK,tJ);var eQ=[];function eW(t,e,n,i){Array.isArray(n)||(n&&(eQ[0]=n.toString()),n=eQ);for(var r=0;r<n.length;r++){var s=function t(e,n,i,r,s){if(r&&r.once)return function t(e,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=eR(i),e&&e[ef]?e.P(n,i,tG(r)?!!r.capture:!!r,s):eA(e,n,i,!0,r,s)}(e,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=eR(i),e&&e[ef]?e.O(n,i,tG(r)?!!r.capture:!!r,s):eA(e,n,i,!1,r,s)}(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function eX(t){em(t.g,function(t,e){this.g.hasOwnProperty(e)&&eC(t)},t),t.g={}}function eY(){this.g=!0}function eJ(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return eM(n)}catch(t){return e}}(t,n)+(i?" "+i:"")})}eK.prototype.N=function(){eK.$.N.call(this),eX(this)},eK.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eY.prototype.Ea=function(){this.g=!1},eY.prototype.info=function(){};var eZ={},e0=null;function e1(){return e0=e0||new eO}function e2(t){t2.call(this,eZ.Ta,t)}function e9(t){let e=e1();eL(e,new e2(e))}function e4(t,e){t2.call(this,eZ.STAT_EVENT,t),this.stat=e}function e6(t){let e=e1();eL(e,new e4(e,t))}function e5(t,e){t2.call(this,eZ.Ua,t),this.size=e}function e3(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return tz.setTimeout(function(){t()},e)}eZ.Ta="serverreachability",tY(e2,t2),eZ.STAT_EVENT="statevent",tY(e4,t2),eZ.Ua="timingevent",tY(e5,t2);var e7={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},e8={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nt(){}function ne(t){return t.h||(t.h=t.i())}function nn(){}nt.prototype.h=null;var ni={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nr(){t2.call(this,"d")}function ns(){t2.call(this,"c")}function na(){}function no(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new eK(this),this.P=nh,t=ee?125:void 0,this.V=new eH(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}tY(nr,t2),tY(ns,t2),tY(na,nt),na.prototype.g=function(){return new XMLHttpRequest},na.prototype.i=function(){return{}},s=new na;var nh=45e3,nu={},nc={};function nf(t,e,n){t.L=1,t.v=nk(nA(e)),t.s=n,t.S=!0,nd(t,null)}function nd(t,e){t.G=Date.now(),nm(t),t.A=nA(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),nH(n.i,"t",i),t.C=0,n=t.l.J,t.h=new nl,t.g=ix(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eG(tW(t.Pa,t,t.g),t.O)),eW(t.U,t.g,"readystatechange",t.nb),e=t.I?ey(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),e9(),function(t,e,n,i,r,s){t.info(function(){if(t.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+a})}(t.j,t.u,t.A,t.m,t.W,t.s)}function np(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.l.Ha}function ng(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if((r=function(t,e){var n=t.C,i=e.indexOf("\n",n);return -1==i?nc:isNaN(n=Number(e.substring(n,i)))?nu:(i+=1)+n>e.length?nc:(e=e.slice(i,i+n),t.C=i+n,e)}(t,n))==nc){4==e&&(t.o=4,e6(14),i=!1),eJ(t.j,t.m,null,"[Incomplete Response]");break}else if(r==nu){t.o=4,e6(15),eJ(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else eJ(t.j,t.m,r,null),nb(t,r);np(t)&&r!=nc&&r!=nu&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,e6(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),iC(e),e.M=!0,e6(11))):(eJ(t.j,t.m,n,"[Invalid Chunked Response]"),nE(t),nw(t))}function nm(t){t.Y=Date.now()+t.P,ny(t,t.P)}function ny(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=e3(tW(t.lb,t),e)}function nv(t){t.B&&(tz.clearTimeout(t.B),t.B=null)}function nw(t){0==t.l.H||t.J||iN(t.l,t)}function nE(t){nv(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,ez(t.V),eX(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function nb(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||nX(n.i,t))){if(!t.K&&nX(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(n.g.G+3e3<t.G)iD(n),iv(n);else break t}iA(n),e6(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=e3(tW(n.ib,n),6e3));if(1>=nW(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else iR(n,11)}else if((t.K||n.g==t)&&iD(n),!t4(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let o=r[e];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let e=o[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));let r=o[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=t.g;if(h){let t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(nY(s,s.h),s.h=null))}if(i.F){let t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,nN(i.I,i.F,t))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),(i=n).wa=iL(i,i.J?i.pa:null,i.Y),t.K){nJ(i.i,t);var a=i.L;a&&t.setTimeout(a),t.B&&(nv(t),nm(t)),i.g=t}else iS(i);0<n.j.length&&iE(n)}else"stop"!=o[0]&&"close"!=o[0]||iR(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?iR(n,7):iy(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}e9(4)}catch(t){}}function nT(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(tq(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(tq(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(let i in e=[],n=0,t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(tq(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(tB=no.prototype).setTimeout=function(t){this.P=t},tB.nb=function(t){t=t.target;let e=this.M;e&&3==iu(t)?e.l():this.Pa(t)},tB.Pa=function(t){try{if(t==this.g)t:{let u=iu(this.g);var e=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||ee||this.g&&(this.h.h||this.g.ja()||ic(this.g)))){this.J||4!=u||7==e||(8==e||0>=c?e9(3):e9(2)),nv(this);var n=this.g.da();this.ca=n;e:if(np(this)){var i=ic(this.g);t="";var r=i.length,s=4==iu(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nE(this),nw(this);var a="";break e}this.h.i=new tz.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!t4(o)){var h=o;break e}}h=null}if(n=h)eJ(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nb(this,n);else{this.i=!1,this.o=3,e6(12),nE(this),nw(this);break t}}this.S?(ng(this,u,a),ee&&this.i&&3==u&&(eW(this.U,this.V,"tick",this.mb),this.V.start())):(eJ(this.j,this.m,a,null),nb(this,a)),4==u&&nE(this),this.i&&!this.J&&(4==u?iN(this.l,this):(this.i=!1,nm(this)))}else(function(t){let e={};t=(t.g&&2<=iu(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(t4(t[i]))continue;var n=function(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}(t[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(let n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.o=3,e6(12)):(this.o=0,e6(13)),nE(this),nw(this)}}}catch(t){}finally{}},tB.mb=function(){if(this.g){var t=iu(this.g),e=this.g.ja();this.C<e.length&&(nv(this),ng(this,t,e),this.i&&4!=t&&nm(this))}},tB.cancel=function(){this.J=!0,nE(this)},tB.lb=function(){this.B=null;let t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.L&&(e9(),e6(17)),nE(this),this.o=2,nw(this)):ny(this,this.Y-t)};var nI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nS(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nS){this.h=t.h,nC(this,t.j),this.s=t.s,this.g=t.g,n_(this,t.m),this.l=t.l;var e=t.i,n=new nU;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nD(this,n),this.o=t.o}else t&&(e=String(t).match(nI))?(this.h=!1,nC(this,e[1]||"",!0),this.s=nR(e[2]||""),this.g=nR(e[3]||"",!0),n_(this,e[4]),this.l=nR(e[5]||"",!0),nD(this,e[6]||"",!0),this.o=nR(e[7]||"")):(this.h=!1,this.i=new nU(null,this.h))}function nA(t){return new nS(t)}function nC(t,e,n){t.j=n?nR(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function n_(t,e){if(e){if(isNaN(e=Number(e))||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nD(t,e,n){var i,r;e instanceof nU?(t.i=e,i=t.i,(r=t.h)&&!i.j&&(nB(i),i.i=null,i.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(nj(this,e),nH(this,n,t))},i)),i.j=r):(n||(e=nO(e,nF)),t.i=new nU(e,t.h))}function nN(t,e,n){t.i.set(e,n)}function nk(t){return nN(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nR(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function nO(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,nL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nL(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}nS.prototype.toString=function(){var t=[],e=this.j;e&&t.push(nO(e,nx,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(nO(e,nx,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(nO(n,"/"==n.charAt(0)?nP:nM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",nO(n,nV)),t.join("")};var nx=/[#\/\?@]/g,nM=/[#\?:]/g,nP=/[#\?]/g,nF=/[#\?@]/g,nV=/#/g;function nU(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nB(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function nj(t,e){nB(t),e=nz(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function n$(t,e){return nB(t),e=nz(t,e),t.g.has(e)}function nH(t,e,n){nj(t,e),0<n.length&&(t.i=null,t.g.set(nz(t,e),t0(n)),t.h+=n.length)}function nz(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(tB=nU.prototype).add=function(t,e){nB(this),this.i=null,t=nz(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},tB.forEach=function(t,e){nB(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},tB.ta=function(){nB(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){let r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},tB.Z=function(t){nB(this);let e=[];if("string"==typeof t)n$(this,t)&&(e=e.concat(this.g.get(nz(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},tB.set=function(t,e){return nB(this),this.i=null,n$(this,t=nz(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},tB.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},tB.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];let s=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),t.push(r)}}return this.i=t.join("&")};var nq=class{constructor(t,e){this.g=t,this.map=e}};function nG(t){this.l=t||nK,t=tz.PerformanceNavigationTiming?0<(t=tz.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(tz.g&&tz.g.Ka&&tz.g.Ka()&&tz.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nK=10;function nQ(t){return!!t.h||!!t.g&&t.g.size>=t.j}function nW(t){return t.h?1:t.g?t.g.size:0}function nX(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function nY(t,e){t.g?t.g.add(e):t.h=e}function nJ(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function nZ(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return t0(t.i)}nG.prototype.cancel=function(){if(this.i=nZ(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}};var n0=class{stringify(t){return tz.JSON.stringify(t,void 0)}parse(t){return tz.JSON.parse(t,void 0)}};function n1(){this.g=new n0}function n2(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function n9(t){this.l=t.fc||null,this.j=t.ob||!1}function n4(t,e){eO.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=n6,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tY(n9,nt),n9.prototype.g=function(){return new n4(this.l,this.j)},n9.prototype.i=(n={},function(){return n}),tY(n4,eO);var n6=0;function n5(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function n3(t){t.readyState=4,t.l=null,t.j=null,t.A=null,n7(t)}function n7(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(tB=n4.prototype).open=function(t,e){if(this.readyState!=n6)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,n7(this)},tB.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||tz).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},tB.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,n3(this)),this.readyState=n6},tB.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,n7(this)),this.g&&(this.readyState=3,n7(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==tz.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;n5(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))}},tB.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?n3(this):n7(this),3==this.readyState&&n5(this)}},tB.Za=function(t){this.g&&(this.response=this.responseText=t,n3(this))},tB.Ya=function(t){this.g&&(this.response=t,n3(this))},tB.ka=function(){this.g&&n3(this)},tB.setRequestHeader=function(t,e){this.v.append(t,e)},tB.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},tB.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)t.push((n=n.value)[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(n4.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var n8=tz.JSON.parse;function it(t){eO.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ie,this.L=this.M=!1}tY(it,eO);var ie="",ii=/^https?$/i,ir=["POST","PUT"];function is(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ia(t),il(t)}function ia(t){t.F||(t.F=!0,eL(t,"complete"),eL(t,"error"))}function io(t){if(t.h&&void 0!==tH&&(!t.C[1]||4!=iu(t)||2!=t.da())){if(t.v&&4==iu(t))eq(t.La,0,t);else if(eL(t,"readystatechange"),4==iu(t)){t.h=!1;try{let a=t.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e,n,i=!0;break;default:i=!1}if(!(e=i)){if(n=0===a){var r=String(t.I).match(nI)[1]||null;!r&&tz.self&&tz.self.location&&(r=tz.self.location.protocol.slice(0,-1)),n=!ii.test(r?r.toLowerCase():"")}e=n}if(e)eL(t,"complete"),eL(t,"success");else{t.m=6;try{var s=2<iu(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",ia(t)}}finally{il(t)}}}}function il(t,e){if(t.g){ih(t);let n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||eL(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function ih(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(tz.clearTimeout(t.A),t.A=null)}function iu(t){return t.g?t.g.readyState:0}function ic(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ie:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function id(t){let e="";return em(t,function(t,n){e+=n+":"+t+"\r\n"}),e}function ip(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=id(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):nN(t,e,n))}function ig(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function im(t){this.Ga=0,this.j=[],this.l=new eY,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ig("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ig("baseRetryDelayMs",5e3,t),this.hb=ig("retryDelaySeedMs",1e4,t),this.eb=ig("forwardChannelMaxRetries",2,t),this.xa=ig("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nG(t&&t.concurrentRequestLimit),this.Ja=new n1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function iy(t){if(iw(t),3==t.H){var e=t.W++,n=nA(t.I);if(nN(n,"SID",t.K),nN(n,"RID",e),nN(n,"TYPE","terminate"),iT(t,n),(e=new no(t,t.l,e)).L=2,e.v=nk(nA(n)),n=!1,tz.navigator&&tz.navigator.sendBeacon)try{n=tz.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&tz.Image&&((new Image).src=e.v,n=!0),n||(e.g=ix(e.l,null),e.g.ha(e.v)),e.G=Date.now(),nm(e)}iO(t)}function iv(t){t.g&&(iC(t),t.g.cancel(),t.g=null)}function iw(t){iv(t),t.u&&(tz.clearTimeout(t.u),t.u=null),iD(t),t.i.cancel(),t.m&&("number"==typeof t.m&&tz.clearTimeout(t.m),t.m=null)}function iE(t){if(!nQ(t.i)&&!t.m){t.m=!0;var e=t.Na;eV||ej(),eU||(eV(),eU=!0),eB.add(e,t),t.C=0}}function ib(t,e){var n;n=e?e.m:t.W++;let i=nA(t.I);nN(i,"SID",t.K),nN(i,"RID",n),nN(i,"AID",t.V),iT(t,i),t.o&&t.s&&ip(i,t.o,t.s),n=new no(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nY(t.i,n),nf(n,i,e)}function iT(t,e){t.na&&em(t.na,function(t,n){nN(e,n,t)}),t.h&&nT({},function(t,n){nN(e,n,t)})}function iI(t,e,n){n=Math.min(t.j.length,n);var i=t.h?tW(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){let t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=r[a].g,o=r[a].map;if(0>(n-=e))e=Math.max(0,r[a].g-100),s=!1;else try{!function(t,e,n){let i=n||"";try{nT(t,function(t,n){let r=t;tG(t)&&(r=eM(t)),e.push(i+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}(o,t,"req"+n+"_")}catch(t){i&&i(o)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function iS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;eV||ej(),eU||(eV(),eU=!0),eB.add(e,t),t.A=0}}function iA(t){return!t.g&&!t.u&&!(3<=t.A)&&(t.ba++,t.u=e3(tW(t.Ma,t),ik(t,t.A)),t.A++,!0)}function iC(t){null!=t.B&&(tz.clearTimeout(t.B),t.B=null)}function i_(t){t.g=new no(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=nA(t.wa);nN(e,"RID","rpc"),nN(e,"SID",t.K),nN(e,"AID",t.V),nN(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&nN(e,"TO",t.qa),nN(e,"TYPE","xmlhttp"),iT(t,e),t.o&&t.s&&ip(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=nk(nA(e)),n.s=null,n.S=!0,nd(n,t)}function iD(t){null!=t.v&&(tz.clearTimeout(t.v),t.v=null)}function iN(t,e){var n=null;if(t.g==e){iD(t),iC(t),t.g=null;var i=2}else{if(!nX(t.i,e))return;n=e.F,nJ(t.i,e),i=1}if(0!=t.H){if(e.i){if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r,s=t.C;eL(i=e1(),new e5(i,n)),iE(t)}else iS(t)}else if(3==(s=e.o)||0==s&&0<e.ca||!(1==i&&(r=e,!(nW(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=r.F.concat(t.j),!0):1!=t.H&&2!=t.H&&!(t.C>=(t.cb?0:t.eb))&&(t.m=e3(tW(t.Na,t,r),ik(t,t.C)),t.C++,!0)))||2==i&&iA(t)))switch(n&&0<n.length&&((e=t.i).i=e.i.concat(n)),s){case 1:iR(t,5);break;case 4:iR(t,10);break;case 3:iR(t,6);break;default:iR(t,2)}}}function ik(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function iR(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=tW(t.pb,t);n||(n=new nS("//www.google.com/images/cleardot.gif"),tz.location&&"http"==tz.location.protocol||nC(n,"https"),nk(n)),function(t,e){let n=new eY;if(tz.Image){let i=new Image;i.onload=tX(n2,n,i,"TestLoadImage: loaded",!0,e),i.onerror=tX(n2,n,i,"TestLoadImage: error",!1,e),i.onabort=tX(n2,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=tX(n2,n,i,"TestLoadImage: timeout",!1,e),tz.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(n.toString(),i)}else e6(2);t.H=0,t.h&&t.h.za(e),iO(t),iw(t)}function iO(t){if(t.H=0,t.ma=[],t.h){let e=nZ(t.i);(0!=e.length||0!=t.j.length)&&(t1(t.ma,e),t1(t.ma,t.j),t.i.i.length=0,t0(t.j),t.j.length=0),t.h.ya()}}function iL(t,e,n){var i=n instanceof nS?nA(n):new nS(n);if(""!=i.g)e&&(i.g=e+"."+i.g),n_(i,i.m);else{var r=tz.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new nS(null);i&&nC(s,i),e&&(s.g=e),r&&n_(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&nN(i,n,e),nN(i,"VER",t.ra),iT(t,i),i}function ix(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new it(n&&t.Ha&&!t.va?new n9({ob:!0}):t.va)).Oa(t.J),e}function iM(){}function iP(){if(t8&&!(10<=Number(eh)))throw Error("Environmental error: no available transport.")}function iF(t,e){eO.call(this),this.g=new im(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!t4(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!t4(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new iB(this)}function iV(t){nr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(let n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function iU(){ns.call(this),this.status=1}function iB(t){this.g=t}function ij(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function i$(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],a=e+(s^n&(r^s))+i[0]+3614090360&4294967295;a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[1]+3905402710&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[2]+606105819&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[3]+3250441966&4294967295,a=e+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[4]+4118548399&4294967295,a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[5]+1200080426&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[6]+2821735955&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[7]+4249261313&4294967295,a=e+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[8]+1770035416&4294967295,a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[9]+2336552879&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[10]+4294925233&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[11]+2304563134&4294967295,a=e+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[12]+1804603682&4294967295,a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[13]+4254626195&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[14]+2792965006&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[15]+1236535329&4294967295,n=r+(a<<22&4294967295|a>>>10),a=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[12]+2368359562&4294967295,a=e+((n=r+(a<<20&4294967295|a>>>12))^r^s)+i[5]+4294588738&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[8]+2272392833&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[11]+1839030562&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[14]+4259657740&4294967295,a=e+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[1]+2763975236&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[4]+1272893353&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[7]+4139469664&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[10]+3200236656&4294967295,a=e+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[13]+681279174&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[0]+3936430074&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[3]+3572445317&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[6]+76029189&4294967295,a=e+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[9]+3654602809&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[12]+3873151461&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[15]+530742520&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[2]+3299628645&4294967295,n=r+(a<<23&4294967295|a>>>9),a=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function iH(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(tB=it.prototype).Oa=function(t){this.M=t},tB.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():s.g(),this.C=this.u?ne(this.u):ne(s),this.g.onreadystatechange=tW(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){is(this,t);return}if(t=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let t of i.keys())n.set(t,i.get(t));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,a]of(i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=tz.FormData&&t instanceof tz.FormData,!(0<=tZ(ir,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var a;ih(this),0<this.B&&((this.L=(a=this.g,t8&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=tW(this.ua,this)):this.A=eq(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){is(this,t)}},tB.ua=function(){void 0!==tH&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eL(this,"timeout"),this.abort(8))},tB.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,eL(this,"complete"),eL(this,"abort"),il(this))},tB.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),il(this,!0)),it.$.N.call(this)},tB.La=function(){this.s||(this.G||this.v||this.l?io(this):this.kb())},tB.kb=function(){io(this)},tB.isActive=function(){return!!this.g},tB.da=function(){try{return 2<iu(this)?this.g.status:-1}catch(t){return -1}},tB.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},tB.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),n8(e)}},tB.Ia=function(){return this.m},tB.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(tB=im.prototype).ra=8,tB.H=1,tB.Na=function(t){if(this.m){if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let r=new no(this,this.l,t),s=this.s;if(this.U&&(s?ew(s=ey(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break e}i=void 0}if(void 0===i)break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=iI(this,r,e),nN(n=nA(this.I),"RID",t),nN(n,"CVER",22),this.F&&nN(n,"X-HTTP-Session-Id",this.F),iT(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(id(s)))+"&"+e:this.o&&ip(n,this.o,s)),nY(this.i,r),this.bb&&nN(n,"TYPE","init"),this.P?(nN(n,"$req",e),nN(n,"SID","null"),r.aa=!0,nf(r,n,null)):nf(r,n,e),this.H=2}}else 3==this.H&&(t?ib(this,t):0==this.j.length||nQ(this.i)||ib(this))}},tB.Ma=function(){if(this.u=null,i_(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=e3(tW(this.jb,this),t)}},tB.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,e6(10),iv(this),i_(this))},tB.ib=function(){null!=this.v&&(this.v=null,iv(this),iA(this),e6(19))},tB.pb=function(t){t?(this.l.info("Successfully pinged google.com"),e6(2)):(this.l.info("Failed to ping google.com"),e6(1))},tB.isActive=function(){return!!this.h&&this.h.isActive(this)},(tB=iM.prototype).Ba=function(){},tB.Aa=function(){},tB.za=function(){},tB.ya=function(){},tB.isActive=function(){return!0},tB.Va=function(){},iP.prototype.g=function(t,e){return new iF(t,e)},tY(iF,eO),iF.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;e6(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=iL(t,null,t.Y),iE(t)},iF.prototype.close=function(){iy(this.g)},iF.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=eM(t),t=n);e.j.push(new nq(e.fb++,t)),3==e.H&&iE(e)},iF.prototype.N=function(){this.g.h=null,delete this.j,iy(this.g),delete this.g,iF.$.N.call(this)},tY(iV,nr),tY(iU,ns),tY(iB,iM),iB.prototype.Ba=function(){eL(this.g,"a")},iB.prototype.Aa=function(t){eL(this.g,new iV(t))},iB.prototype.za=function(t){eL(this.g,new iU)},iB.prototype.ya=function(){eL(this.g,"b")},tY(ij,function(){this.blockSize=-1}),ij.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ij.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)i$(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){i$(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){i$(this,i),r=0;break}}this.h=r,this.i+=e},ij.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var iz={};function iq(t){return -128<=t&&128>t?Object.prototype.hasOwnProperty.call(iz,t)?iz[t]:iz[t]=new iH([0|t],0>t?-1:0):new iH([0|t],0>t?-1:0)}function iG(t){if(isNaN(t)||!isFinite(t))return iQ;if(0>t)return iZ(iG(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=iK;return new iH(e,0)}var iK=4294967296,iQ=iq(0),iW=iq(1),iX=iq(16777216);function iY(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function iJ(t){return -1==t.h}function iZ(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new iH(n,~t.h).add(iW)}function i0(t,e){return t.add(iZ(e))}function i1(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function i2(t,e){this.g=t,this.h=e}function i9(t,e){if(iY(e))throw Error("division by zero");if(iY(t))return new i2(iQ,iQ);if(iJ(t))return e=i9(iZ(t),e),new i2(iZ(e.g),iZ(e.h));if(iJ(e))return e=i9(t,iZ(e)),new i2(iZ(e.g),e.h);if(30<t.g.length){if(iJ(t)||iJ(e))throw Error("slowDivide_ only works with positive integers.");for(var n=iW,i=e;0>=i.X(t);)n=i4(n),i=i4(i);var r=i6(n,1),s=i6(i,1);for(i=i6(i,2),n=i6(n,2);!iY(i);){var a=s.add(i);0>=a.X(t)&&(r=r.add(n),s=a),i=i6(i,1),n=i6(n,1)}return e=i0(t,r.R(e)),new i2(r,e)}for(r=iQ;0<=t.X(e);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(t.ea()/e.ea())))/Math.LN2))?1:Math.pow(2,i-48),a=(s=iG(n)).R(e);iJ(a)||0<a.X(t);)n-=i,a=(s=iG(n)).R(e);iY(s)&&(s=iW),r=r.add(s),t=i0(t,a)}return new i2(r,t)}function i4(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new iH(n,t.h)}function i6(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new iH(r,t.h)}(tB=iH.prototype).ea=function(){if(iJ(this))return-iZ(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:iK+i)*e,e*=iK}return t},tB.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(iY(this))return"0";if(iJ(this))return"-"+iZ(this).toString(t);for(var e=iG(Math.pow(t,6)),n=this,i="";;){var r=i9(n,e).g,s=((0<(n=i0(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(iY(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},tB.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},tB.X=function(t){return iJ(t=i0(this,t))?-1:iY(t)?0:1},tB.abs=function(){return iJ(this)?iZ(this):this},tB.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),a=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=a>>>16,s&=65535,a&=65535,n[r]=a<<16|s}return new iH(n,-2147483648&n[n.length-1]?-1:0)},tB.R=function(t){if(iY(this)||iY(t))return iQ;if(iJ(this))return iJ(t)?iZ(this).R(iZ(t)):iZ(iZ(this).R(t));if(iJ(t))return iZ(this.R(iZ(t)));if(0>this.X(iX)&&0>t.X(iX))return iG(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,a=65535&this.D(i),o=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=a*l,i1(n,2*i+2*r),n[2*i+2*r+1]+=s*l,i1(n,2*i+2*r+1),n[2*i+2*r+1]+=a*o,i1(n,2*i+2*r+1),n[2*i+2*r+2]+=s*o,i1(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new iH(n,0)},tB.gb=function(t){return i9(this,t).h},tB.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new iH(n,this.h&t.h)},tB.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new iH(n,this.h|t.h)},tB.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new iH(n,this.h^t.h)},iP.prototype.createWebChannel=iP.prototype.g,iF.prototype.send=iF.prototype.u,iF.prototype.open=iF.prototype.m,iF.prototype.close=iF.prototype.close,e7.NO_ERROR=0,e7.TIMEOUT=8,e7.HTTP_ERROR=6,e8.COMPLETE="complete",nn.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",eO.prototype.listen=eO.prototype.O,it.prototype.listenOnce=it.prototype.P,it.prototype.getLastError=it.prototype.Sa,it.prototype.getLastErrorCode=it.prototype.Ia,it.prototype.getStatus=it.prototype.da,it.prototype.getResponseJson=it.prototype.Wa,it.prototype.getResponseText=it.prototype.ja,it.prototype.send=it.prototype.ha,it.prototype.setWithCredentials=it.prototype.Oa,ij.prototype.digest=ij.prototype.l,ij.prototype.reset=ij.prototype.reset,ij.prototype.update=ij.prototype.j,iH.prototype.add=iH.prototype.add,iH.prototype.multiply=iH.prototype.R,iH.prototype.modulo=iH.prototype.gb,iH.prototype.compare=iH.prototype.X,iH.prototype.toNumber=iH.prototype.ea,iH.prototype.toString=iH.prototype.toString,iH.prototype.getBits=iH.prototype.D,iH.fromNumber=iG,iH.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return iZ(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=iG(Math.pow(n,8)),r=iQ,s=0;s<e.length;s+=8){var a=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+a),n);8>a?(a=iG(Math.pow(n,a)),r=r.R(a).add(iG(o))):r=(r=r.R(i)).add(iG(o))}return r};var i5=t$.createWebChannelTransport=function(){return new iP},i3=t$.getStatEventTarget=function(){return e1()},i7=t$.ErrorCode=e7,i8=t$.EventType=e8,rt=t$.Event=eZ,re=t$.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rn=t$.FetchXmlHttpFactory=n9,ri=t$.WebChannel=nn,rr=t$.XhrIo=it;t$.Md5=ij;var rs=t$.Integer=iH;const ra="@firebase/firestore";/**
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
 */class ro{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ro.UNAUTHENTICATED=new ro(null),ro.GOOGLE_CREDENTIALS=new ro("google-credentials-uid"),ro.FIRST_PARTY=new ro("first-party-uid"),ro.MOCK_USER=new ro("mock-user");/**
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
 */let rl="9.23.0";/**
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
 */const rh=new Y("@firebase/firestore");function ru(){return rh.logLevel}function rc(t,...e){if(rh.logLevel<=tU.DEBUG){let n=e.map(rp);rh.debug(`Firestore (${rl}): ${t}`,...n)}}function rf(t,...e){if(rh.logLevel<=tU.ERROR){let n=e.map(rp);rh.error(`Firestore (${rl}): ${t}`,...n)}}function rd(t,...e){if(rh.logLevel<=tU.WARN){let n=e.map(rp);rh.warn(`Firestore (${rl}): ${t}`,...n)}}function rp(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(e){return t}}/**
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
 */function rg(t="Unexpected state"){let e=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: `+t;throw rf(e),Error(e)}/**
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
 */const rm={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ry extends P{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rv{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class rw{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ro.UNAUTHENTICATED))}shutdown(){}}class rb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rT{constructor(t){this.t=t,this.currentUser=ro.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i,i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve(),r=new rv;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new rv,t.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},a=t=>{rc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>a(t)),setTimeout(()=>{if(!this.auth){let t=this.t.getImmediate({optional:!0});t?a(t):(rc("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new rv)}},0),s()}getToken(){let t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(rc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?("string"==typeof e.accessToken||rg(),new rw(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let t=this.auth&&this.auth.getUid();return null===t||"string"==typeof t||rg(),new ro(t)}}class rI{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ro.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class rS{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new rI(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(ro.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rC{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){let n=t=>{null!=t.error&&rc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);let n=t.token!==this.T;return this.T=t.token,rc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};let i=t=>{rc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){let t=this.I.getImmediate({optional:!0});t?i(t):rc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?("string"==typeof t.token||rg(),this.T=t.token,new rA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class r_{static A(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";for(;n.length<20;){let i=/**
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
 */function(t){let e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function rD(t,e){return t<e?-1:t>e?1:0}function rN(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}/**
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
 */class rk{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0||e>=1e9)throw new ry(rm.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800||t>=253402300800)throw new ry(rm.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rk.fromMillis(Date.now())}static fromDate(t){return rk.fromMillis(t.getTime())}static fromMillis(t){let e=Math.floor(t/1e3);return new rk(e,Math.floor(1e6*(t-1e3*e)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rD(this.nanoseconds,t.nanoseconds):rD(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class rR{constructor(t){this.timestamp=t}static fromTimestamp(t){return new rR(t)}static min(){return new rR(new rk(0,0))}static max(){return new rR(new rk(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rO{constructor(t,e,n){void 0===e?e=0:e>t.length&&rg(),void 0===n?n=t.length-e:n>t.length-e&&rg(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===rO.comparator(this,t)}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof rO?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let n=Math.min(t.length,e.length);for(let i=0;i<n;i++){let n=t.get(i),r=e.get(i);if(n<r)return -1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class rL extends rO{construct(t,e,n){return new rL(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){let e=[];for(let n of t){if(n.indexOf("//")>=0)throw new ry(rm.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new rL(e)}static emptyPath(){return new rL([])}}const rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rM extends rO{construct(t,e,n){return new rM(t,e,n)}static isValidIdentifier(t){return rx.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rM.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rM(["__name__"])}static fromServerFormat(t){let e=[],n="",i=0,r=()=>{if(0===n.length)throw new ry(rm.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""},s=!1;for(;i<t.length;){let e=t[i];if("\\"===e){if(i+1===t.length)throw new ry(rm.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ry(rm.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?s=!s:"."!==e||s?n+=e:r(),i++}if(r(),s)throw new ry(rm.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rM(e)}static emptyPath(){return new rM([])}}/**
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
 */class rP{constructor(t){this.path=t}static fromPath(t){return new rP(rL.fromString(t))}static fromName(t){return new rP(rL.fromString(t).popFirst(5))}static empty(){return new rP(rL.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===rL.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return rL.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rP(new rL(t.slice()))}}class rF{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new rF(rR.min(),rP.empty(),-1)}static max(){return new rF(rR.max(),rP.empty(),-1)}}class rV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rU(t){if(t.code!==rm.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;rc("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class rB{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rg(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new rB((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{let e=t();return e instanceof rB?e:rB.resolve(e)}catch(t){return rB.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):rB.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):rB.reject(e)}static resolve(t){return new rB((e,n)=>{e(t)})}static reject(t){return new rB((e,n)=>{n(t)})}static waitFor(t){return new rB((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=rB.resolve(!1);for(let n of t)e=e.next(t=>t?rB.resolve(t):n());return e}static forEach(t,e){let n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}static mapArray(t,e){return new rB((n,i)=>{let r=t.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;e(t[l]).next(t=>{s[l]=t,++a===r&&n(s)},t=>i(t))}})}static doWhile(t,e){return new rB((n,i)=>{let r=()=>{!0===t()?e().next(()=>{r()},i):n()};r()})}}function rj(t){return"IndexedDbTransactionError"===t.name}/**
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
 */class r${constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this.ut&&this.ut(t),t}}function rH(t){return 0===t&&1/t==-1/0}/**
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
 */function rz(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rq(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rG(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}r$.ct=-1;/**
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
 */class rK{constructor(t,e){this.comparator=t,this.root=e||rW.EMPTY}insert(t,e){return new rK(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rW.BLACK,null,null))}remove(t){return new rK(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rW.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){let n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){let t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rQ(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rQ(this.root,t,this.comparator,!1)}getReverseIterator(){return new rQ(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rQ(this.root,t,this.comparator,!0)}}class rQ{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rW{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:rW.RED,this.left=null!=i?i:rW.EMPTY,this.right=null!=r?r:rW.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new rW(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this,r=n(t,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rW.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,i=this;if(0>e(t,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return rW.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,rW.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,rW.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw rg();let t=this.left.check();if(t!==this.right.check())throw rg();return t+(this.isRed()?0:1)}}rW.EMPTY=null,rW.RED=!0,rW.BLACK=!1,rW.EMPTY=new class{constructor(){this.size=0}get key(){throw rg()}get value(){throw rg()}get color(){throw rg()}get left(){throw rg()}get right(){throw rg()}copy(t,e,n,i,r){return this}insert(t,e,n){return new rW(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rX{constructor(t){this.comparator=t,this.data=new rK(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new rY(this.data.getIterator())}getIteratorFrom(t){return new rY(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof rX)||this.size!==t.size)return!1;let e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){let t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new rX(this.comparator);return e.data=t,e}}class rY{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rJ{constructor(t){this.fields=t,t.sort(rM.comparator)}static empty(){return new rJ([])}unionWith(t){let e=new rX(rM.comparator);for(let t of this.fields)e=e.add(t);for(let n of t)e=e.add(n);return new rJ(e.toArray())}covers(t){for(let e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return rN(this.fields,t.fields,(t,e)=>t.isEqual(e))}}/**
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
 */class rZ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class r0{constructor(t){this.binaryString=t}static fromBase64String(t){return new r0(function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new rZ("Invalid base64 string: "+t):t}}(t))}static fromUint8Array(t){return new r0(function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t))}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rD(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}r0.EMPTY_BYTE_STRING=new r0("");const r1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function r2(t){if(t||rg(),"string"==typeof t){let e=0,n=r1.exec(t);if(n||rg(),n[1]){let t=n[1];e=Number(t=(t+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(t).getTime()/1e3),nanos:e}}return{seconds:r9(t.seconds),nanos:r9(t.nanos)}}function r9(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function r4(t){return"string"==typeof t?r0.fromBase64String(t):r0.fromUint8Array(t)}/**
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
 */function r6(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function r5(t){let e=r2(t.mapValue.fields.__local_write_time__.timestampValue);return new rk(e.seconds,e.nanos)}/**
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
 */class r3{constructor(t,e,n,i,r,s,a,o,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class r7{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new r7("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof r7&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const r8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function st(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?r6(t)?4:su(t)?9007199254740991:10:rg()}function se(t,e){if(t===e)return!0;let n=st(t);if(n!==st(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return r5(t).isEqual(r5(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;let n=r2(t.timestampValue),i=r2(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r4(t.bytesValue).isEqual(r4(e.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return r9(t.geoPointValue.latitude)===r9(e.geoPointValue.latitude)&&r9(t.geoPointValue.longitude)===r9(e.geoPointValue.longitude);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return r9(t.integerValue)===r9(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){let n=r9(t.doubleValue),i=r9(e.doubleValue);return n===i?rH(n)===rH(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return rN(t.arrayValue.values||[],e.arrayValue.values||[],se);case 10:return function(t,e){let n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(rz(n)!==rz(i))return!1;for(let t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!se(n[t],i[t])))return!1;return!0}(t,e);default:return rg()}}function sn(t,e){return void 0!==(t.values||[]).find(t=>se(t,e))}function si(t,e){if(t===e)return 0;let n=st(t),i=st(e);if(n!==i)return rD(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return rD(t.booleanValue,e.booleanValue);case 2:return function(t,e){let n=r9(t.integerValue||t.doubleValue),i=r9(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return sr(t.timestampValue,e.timestampValue);case 4:return sr(r5(t),r5(e));case 5:return rD(t.stringValue,e.stringValue);case 6:return function(t,e){let n=r4(t),i=r4(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){let n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){let e=rD(n[t],i[t]);if(0!==e)return e}return rD(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){let n=rD(r9(t.latitude),r9(e.latitude));return 0!==n?n:rD(r9(t.longitude),r9(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){let n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){let e=si(n[t],i[t]);if(e)return e}return rD(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===r8.mapValue&&e===r8.mapValue)return 0;if(t===r8.mapValue)return 1;if(e===r8.mapValue)return -1;let n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){let e=rD(i[t],s[t]);if(0!==e)return e;let a=si(n[i[t]],r[s[t]]);if(0!==a)return a}return rD(i.length,s.length)}(t.mapValue,e.mapValue);default:throw rg()}}function sr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rD(t,e);let n=r2(t),i=r2(e),r=rD(n.seconds,i.seconds);return 0!==r?r:rD(n.nanos,i.nanos)}function ss(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){let e=r2(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?r4(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,rP.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(let i of t.values||[])n?n=!1:e+=",",e+=ss(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){let e=Object.keys(t.fields||{}).sort(),n="{",i=!0;for(let r of e)i?i=!1:n+=",",n+=`${r}:${ss(t.fields[r])}`;return n+"}"}(t.mapValue):rg()}function sa(t){return!!t&&"integerValue"in t}function so(t){return!!t&&"arrayValue"in t}function sl(t){return!!t&&"mapValue"in t}function sh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return rq(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=sh(n)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sh(t.arrayValue.values[n]);return e}return Object.assign({},t)}function su(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class sc{constructor(t){this.value=t}static empty(){return new sc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!sl(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sh(e)}setAll(t){let e=rM.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){let t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=sh(t):i.push(r.lastSegment())});let r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){let e=this.field(t.popLast());sl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return se(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];sl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){for(let i of(rq(e,(e,n)=>t[e]=n),n))delete t[i]}clone(){return new sc(sh(this.value))}}/**
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
 */class sf{constructor(t,e,n,i,r,s,a){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}static newInvalidDocument(t){return new sf(t,0,rR.min(),rR.min(),rR.min(),sc.empty(),0)}static newFoundDocument(t,e,n,i){return new sf(t,1,e,rR.min(),n,i,0)}static newNoDocument(t,e){return new sf(t,2,e,rR.min(),rR.min(),sc.empty(),0)}static newUnknownDocument(t,e){return new sf(t,3,e,rR.min(),rR.min(),sc.empty(),2)}convertToFoundDocument(t,e){return this.createTime.isEqual(rR.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rR.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof sf&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sd{constructor(t,e){this.position=t,this.inclusive=e}}function sp(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){let s=e[r],a=t.position[r];if(i=s.field.isKeyField()?rP.comparator(rP.fromName(a.referenceValue),n.key):si(a,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function sg(t,e){if(null===t)return null===e;if(null===e||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!se(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sm{constructor(t,e="asc"){this.field=t,this.dir=e}}/**
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
 */class sy{}class sv extends sy{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new sT(t,e,n):"array-contains"===e?new sC(t,n):"in"===e?new s_(t,n):"not-in"===e?new sD(t,n):"array-contains-any"===e?new sN(t,n):new sv(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new sI(t,n):new sS(t,n)}matches(t){let e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(si(e,this.value)):null!==e&&st(this.value)===st(e)&&this.matchesComparison(si(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return rg()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class sw extends sy{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new sw(t,e)}matches(t){return sE(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let t=this.ft(t=>t.isInequality());return null!==t?t.field:null}ft(t){for(let e of this.getFlattenedFilters())if(t(e))return e;return null}}function sE(t){return"and"===t.op}function sb(t){for(let e of t.filters)if(e instanceof sw)return!1;return!0}class sT extends sv{constructor(t,e,n){super(t,e,n),this.key=rP.fromName(n.referenceValue)}matches(t){let e=rP.comparator(t.key,this.key);return this.matchesComparison(e)}}class sI extends sv{constructor(t,e){super(t,"in",e),this.keys=sA("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class sS extends sv{constructor(t,e){super(t,"not-in",e),this.keys=sA("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function sA(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>rP.fromName(t.referenceValue))}class sC extends sv{constructor(t,e){super(t,"array-contains",e)}matches(t){let e=t.data.field(this.field);return so(e)&&sn(e.arrayValue,this.value)}}class s_ extends sv{constructor(t,e){super(t,"in",e)}matches(t){let e=t.data.field(this.field);return null!==e&&sn(this.value.arrayValue,e)}}class sD extends sv{constructor(t,e){super(t,"not-in",e)}matches(t){if(sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let e=t.data.field(this.field);return null!==e&&!sn(this.value.arrayValue,e)}}class sN extends sv{constructor(t,e){super(t,"array-contains-any",e)}matches(t){let e=t.data.field(this.field);return!(!so(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>sn(this.value.arrayValue,t))}}/**
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
 */class sk{constructor(t,e=null,n=[],i=[],r=null,s=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.dt=null}}function sR(t,e=null,n=[],i=[],r=null,s=null,a=null){return new sk(t,e,n,i,r,s,a)}function sO(t){if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(t=>(function t(e){if(e instanceof sv)return e.field.canonicalString()+e.op.toString()+ss(e.value);if(sb(e)&&sE(e))return e.filters.map(e=>t(e)).join(",");{let n=e.filters.map(e=>t(e)).join(",");return`${e.op}(${n})`}})(t)).join(",")+"|ob:"+t.orderBy.map(t=>t.field.canonicalString()+t.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(t=>ss(t)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(t=>ss(t)).join(",")),t.dt=e}return t.dt}function sL(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++){var n,i;if(n=t.orderBy[r],i=e.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!function t(e,n){return e instanceof sv?n instanceof sv&&e.op===n.op&&e.field.isEqual(n.field)&&se(e.value,n.value):e instanceof sw?n instanceof sw&&e.op===n.op&&e.filters.length===n.filters.length&&e.filters.reduce((e,i,r)=>e&&t(i,n.filters[r]),!0):void rg()}(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sg(t.startAt,e.startAt)&&sg(t.endAt,e.endAt)}/**
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
 */class sx{constructor(t,e=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}function sM(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function sP(t){if(null===t.wt){t.wt=[];let e=function(t){for(let e of t.filters){let t=e.getFirstInequalityField();if(null!==t)return t}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)e.isKeyField()||t.wt.push(new sm(e)),t.wt.push(new sm(rM.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new sm(rM.keyField(),e))}}}return t.wt}function sF(t){if(!t._t){if("F"===t.limitType)t._t=sR(t.path,t.collectionGroup,sP(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of sP(t)){let t="desc"===n.dir?"asc":"desc";e.push(new sm(n.field,t))}let n=t.endAt?new sd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new sd(t.startAt.position,t.startAt.inclusive):null;t._t=sR(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}return t._t}function sV(t,e,n){return new sx(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sU(t,e){return sL(sF(t),sF(e))&&t.limitType===e.limitType}function sB(t){return`${sO(sF(t))}|lt:${t.limitType}`}function sj(t){var e;let n;return`Query(target=${n=(e=sF(t)).path.canonicalString(),null!==e.collectionGroup&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(t=>(function t(e){return e instanceof sv?`${e.field.canonicalString()} ${e.op} ${ss(e.value)}`:e instanceof sw?e.op.toString()+" {"+e.getFilters().map(t).join(" ,")+"}":"Filter"})(t)).join(", ")}]`),null==e.limit||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(t=>`${t.field.canonicalString()} (${t.dir})`).join(", ")}]`),e.startAt&&(n+=", startAt: "+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(t=>ss(t)).join(",")),e.endAt&&(n+=", endAt: "+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(t=>ss(t)).join(",")),`Target(${n})`}; limitType=${t.limitType})`}function s$(t,e){return e.isFoundDocument()&&function(t,e){let n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):rP.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(let n of sP(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(let n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(!t.startAt||!!function(t,e,n){let i=sp(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,sP(t),e))&&(!t.endAt||!!function(t,e,n){let i=sp(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,sP(t),e))}/**
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
 */class sH{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n){for(let[e,i]of n)if(this.equalsFn(e,t))return i}}has(t){return void 0!==this.get(t)}set(t,e){let n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rq(this.inner,(e,n)=>{for(let[e,i]of n)t(e,i)})}isEmpty(){return rG(this.inner)}size(){return this.innerSize}}/**
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
 */const sz=new rK(rP.comparator),sq=new rK(rP.comparator);function sG(...t){let e=sq;for(let n of t)e=e.insert(n.key,n);return e}function sK(t){let e=sq;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function sQ(){return new sH(t=>t.toString(),(t,e)=>t.isEqual(e))}const sW=new rK(rP.comparator),sX=new rX(rP.comparator);function sY(...t){let e=sX;for(let n of t)e=e.add(n);return e}const sJ=new rX(rD);/**
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
 */function sZ(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rH(e)?"-0":e}}function s0(t){return{integerValue:""+t}}function s1(t,e){return"number"==typeof e&&Number.isInteger(e)&&!rH(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER?s0(e):sZ(t,e)}/**
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
 */class s2{constructor(){this._=void 0}}function s9(t,e){return t instanceof s8?sa(e)||e&&"doubleValue"in e?e:{integerValue:0}:null}class s4 extends s2{}class s6 extends s2{constructor(t){super(),this.elements=t}}function s5(t,e){let n=ae(e);for(let e of t.elements)n.some(t=>se(t,e))||n.push(e);return{arrayValue:{values:n}}}class s3 extends s2{constructor(t){super(),this.elements=t}}function s7(t,e){let n=ae(e);for(let e of t.elements)n=n.filter(t=>!se(t,e));return{arrayValue:{values:n}}}class s8 extends s2{constructor(t,e){super(),this.serializer=t,this.gt=e}}function at(t){return r9(t.integerValue||t.doubleValue)}function ae(t){return so(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class an{constructor(t,e){this.field=t,this.transform=e}}class ai{constructor(t,e){this.version=t,this.transformResults=e}}class ar{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ar}static exists(t){return new ar(void 0,t)}static updateTime(t){return new ar(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function as(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class aa{}function ao(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ag(t.key,ar.none()):new au(t.key,t.data,ar.none());{let n=t.data,i=sc.empty(),r=new rX(rM.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new ac(t.key,i,new rJ(r.toArray()),ar.none())}}function al(t,e,n,i){return t instanceof au?function(t,e,n,i){if(!as(t.precondition,e))return n;let r=t.value.clone(),s=ap(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof ac?function(t,e,n,i){if(!as(t.precondition,e))return n;let r=ap(t.fieldTransforms,i,e),s=e.data;return(s.setAll(af(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,i):as(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}function ah(t,e){var n,i;return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&rN(n,i,(t,e)=>{var n,i;return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof s6&&i instanceof s6||n instanceof s3&&i instanceof s3?rN(n.elements,i.elements,se):n instanceof s8&&i instanceof s8?se(n.gt,i.gt):n instanceof s4&&i instanceof s4)})))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class au extends aa{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ac extends aa{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function af(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=t.data.field(n);e.set(n,i)}}),e}function ad(t,e,n){var i;let r=new Map;t.length===n.length||rg();for(let s=0;s<n.length;s++){let a=t[s],o=a.transform,l=e.data.field(a.field);r.set(a.field,(i=n[s],o instanceof s6?s5(o,l):o instanceof s3?s7(o,l):i))}return r}function ap(t,e,n){let i=new Map;for(let r of t){let t=r.transform,s=n.data.field(r.field);i.set(r.field,t instanceof s4?function(t,e){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&r6(e)&&(e=function t(e){let n=e.mapValue.fields.__previous_value__;return r6(n)?t(n):n}(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(e,s):t instanceof s6?s5(t,s):t instanceof s3?s7(t,s):function(t,e){let n=s9(t,e),i=at(n)+at(t.gt);return sa(n)&&sa(t.gt)?s0(i):sZ(t.serializer,i)}(t,s))}return i}class ag extends aa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class am extends aa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ay{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){let n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){let r=this.mutations[e];if(r.key.isEqual(t.key)){var i;i=n[e],r instanceof au?function(t,e,n){let i=t.value.clone(),r=ad(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,t,i):r instanceof ac?function(t,e,n){if(!as(t.precondition,e))return void e.convertToUnknownDocument(n.version);let i=ad(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(af(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,t,i):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,i)}}}applyToLocalView(t,e){for(let n of this.baseMutations)n.key.isEqual(t.key)&&(e=al(n,t,e,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(t.key)&&(e=al(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){let n=sQ();return this.mutations.forEach(i=>{let r=t.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields),o=ao(s,a=e.has(i.key)?null:a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(rR.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),sY())}isEqual(t){return this.batchId===t.batchId&&rN(this.mutations,t.mutations,(t,e)=>ah(t,e))&&rN(this.baseMutations,t.baseMutations,(t,e)=>ah(t,e))}}class av{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){t.mutations.length===n.length||rg();let i=sW,r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new av(t,e,n,i)}}/**
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
 */class aw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}(o=a||(a={}))[o.OK=0]="OK",o[o.CANCELLED=1]="CANCELLED",o[o.UNKNOWN=2]="UNKNOWN",o[o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",o[o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",o[o.NOT_FOUND=5]="NOT_FOUND",o[o.ALREADY_EXISTS=6]="ALREADY_EXISTS",o[o.PERMISSION_DENIED=7]="PERMISSION_DENIED",o[o.UNAUTHENTICATED=16]="UNAUTHENTICATED",o[o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",o[o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",o[o.ABORTED=10]="ABORTED",o[o.OUT_OF_RANGE=11]="OUT_OF_RANGE",o[o.UNIMPLEMENTED=12]="UNIMPLEMENTED",o[o.INTERNAL=13]="INTERNAL",o[o.UNAVAILABLE=14]="UNAVAILABLE",o[o.DATA_LOSS=15]="DATA_LOSS",new rs([4294967295,4294967295],0);class aE{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ab(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aT(t){return t||rg(),rR.fromTimestamp(function(t){let e=r2(t);return new rk(e.seconds,e.nanos)}(t))}function aI(t,e){return new rL(["projects",t.projectId,"databases",t.database]).child("documents").child(e).canonicalString()}function aS(t,e){return aI(t.databaseId,e.path)}function aA(t,e,n){return{name:aS(t,e),fields:n.value.mapValue.fields}}function aC(t){return rM.fromServerFormat(t.fieldPath)}/**
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
 */class a_{constructor(t){this.fe=t}}/**
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
 */class aD{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(r9(t.integerValue));else if("doubleValue"in t){let n=r9(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),rH(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(r4(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){let n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?su(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):rg()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){let n=t.fields||{};for(let t of(this.ye(e,55),Object.keys(n)))this.Te(t,e),this.me(n[t],e)}Pe(t,e){let n=t.values||[];for(let t of(this.ye(e,50),n))this.me(t,e)}ve(t,e){this.ye(e,37),rP.fromName(t).path.forEach(t=>{this.ye(e,60),this.be(t,e)})}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}aD.Ve=new aD;/**
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
 */class aN{constructor(){this.rn=new ak}addToCollectionParentIndex(t,e){return this.rn.add(e),rB.resolve()}getCollectionParents(t,e){return rB.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return rB.resolve()}deleteFieldIndex(t,e){return rB.resolve()}getDocumentsMatchingTarget(t,e){return rB.resolve(null)}getIndexType(t,e){return rB.resolve(0)}getFieldIndexes(t,e){return rB.resolve([])}getNextCollectionGroupToUpdate(t){return rB.resolve(null)}getMinOffset(t,e){return rB.resolve(rF.min())}getMinOffsetFromCollectionGroup(t,e){return rB.resolve(rF.min())}updateCollectionGroup(t,e,n){return rB.resolve()}updateIndexEntries(t,e){return rB.resolve()}}class ak{constructor(){this.index={}}add(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new rX(rL.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new rX(rL.comparator)).toArray()}}new Uint8Array(0);class aR{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new aR(t,aR.DEFAULT_COLLECTION_PERCENTILE,aR.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */aR.DEFAULT_COLLECTION_PERCENTILE=10,aR.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,aR.DEFAULT=new aR(41943040,aR.DEFAULT_COLLECTION_PERCENTILE,aR.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),aR.DISABLED=new aR(-1,0,0);/**
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
 */class aO{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new aO(0)}static Mn(){return new aO(-1)}}/**
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
 */class aL{constructor(){this.changes=new sH(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,sf.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();let n=this.changes.get(e);return void 0!==n?rB.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class ax{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class aM{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&al(n.mutation,t,rJ.empty(),rk.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,sY()).next(()=>e))}getLocalViewOfDocuments(t,e,n=sY()){let i=sQ();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(t=>{let e=sG();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){let n=sQ();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,sY()))}populateOverlays(t,e,n){let i=[];return n.forEach(t=>{e.has(t)||i.push(t)}),this.documentOverlayCache.getOverlays(t,i).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,i){let r=sz,s=sQ(),a=sQ();return e.forEach((t,e)=>{let a=n.get(e.key);i.has(e.key)&&(void 0===a||a.mutation instanceof ac)?r=r.insert(e.key,e):void 0!==a?(s.set(e.key,a.mutation.getFieldMask()),al(a.mutation,e,a.mutation.getFieldMask(),rk.now())):s.set(e.key,rJ.empty())}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return a.set(t,new ax(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(t,e){let n=sQ(),i=new rK((t,e)=>t-e),r=sY();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(let r of t)r.keys().forEach(t=>{let s=e.get(t);if(null===s)return;let a=n.get(t)||rJ.empty();a=r.applyToLocalView(s,a),n.set(t,a);let o=(i.get(r.batchId)||sY()).add(t);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,h=sQ();l.forEach(t=>{if(!r.has(t)){let i=ao(e.get(t),n.get(t));null!==i&&h.set(t,i),r=r.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,o,h))}return rB.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return rP.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):null!==e.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):rB.resolve(sQ()),a=-1,o=r;return s.next(e=>rB.forEach(e,(e,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(e)?rB.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{o=o.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,o,e,sY())).next(t=>({batchId:a,changes:sK(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new rP(e)).next(t=>{let e=sG();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){let i=e.collectionGroup,r=sG();return this.indexManager.getCollectionParents(t,i).next(s=>rB.forEach(s,s=>{let a=new sx(s.child(i),null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt);return this.getDocumentsMatchingCollectionQuery(t,a,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i))).next(t=>{i.forEach((e,n)=>{let i=n.getKey();null===t.get(i)&&(t=t.insert(i,sf.newInvalidDocument(i)))});let n=sG();return t.forEach((t,r)=>{let s=i.get(t);void 0!==s&&al(s.mutation,r,rJ.empty(),rk.now()),s$(e,r)&&(n=n.insert(t,r))}),n})}}/**
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
 */class aP{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return rB.resolve(this.cs.get(e))}saveBundleMetadata(t,e){return this.cs.set(e.id,{id:e.id,version:e.version,createTime:aT(e.createTime)}),rB.resolve()}getNamedQuery(t,e){return rB.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,{name:e.name,query:function(t){let e=function(t){var e;let n,i=function(t){let e=function(t){let e=rL.fromString(t);return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)||rg(),e}(t);return 4===e.length?rL.emptyPath():(e.length>4&&"documents"===e.get(4)||rg(),e.popFirst(5))}(t.parent),r=t.structuredQuery,s=r.from?r.from.length:0,a=null;if(s>0){1===s||rg();let t=r.from[0];t.allDescendants?a=t.collectionId:i=i.child(t.collectionId)}let o=[];r.where&&(o=function(t){var e;let n=function t(e){return void 0!==e.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":let e=aC(t.unaryFilter.field);return sv.create(e,"==",{doubleValue:NaN});case"IS_NULL":let n=aC(t.unaryFilter.field);return sv.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=aC(t.unaryFilter.field);return sv.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=aC(t.unaryFilter.field);return sv.create(r,"!=",{nullValue:"NULL_VALUE"});default:return rg()}}(e):void 0!==e.fieldFilter?sv.create(aC(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rg()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?sw.create(e.compositeFilter.filters.map(e=>t(e)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return rg()}}(e.compositeFilter.op)):rg()}(t);return n instanceof sw&&sb(e=n)&&sE(e)?n.getFilters():[n]}(r.where));let l=[];r.orderBy&&(l=r.orderBy.map(t=>new sm(aC(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))));let h=null;r.limit&&(h=null==(n="object"==typeof(e=r.limit)?e.value:e)?null:n);let u=null;r.startAt&&(u=function(t){let e=!!t.before;return new sd(t.values||[],e)}(r.startAt));let c=null;return r.endAt&&(c=function(t){let e=!t.before;return new sd(t.values||[],e)}(r.endAt)),new sx(i,a,l,o,h,"F",u,c)}({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?sV(e,e.limit,"L"):e}(e.bundledQuery),readTime:aT(e.readTime)}),rB.resolve()}}/**
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
 */class aF{constructor(){this.overlays=new rK(rP.comparator),this.ls=new Map}getOverlay(t,e){return rB.resolve(this.overlays.get(e))}getOverlays(t,e){let n=sQ();return rB.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,i)=>{this.we(t,e,i)}),rB.resolve()}removeOverlaysForBatchId(t,e,n){let i=this.ls.get(n);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.ls.delete(n)),rB.resolve()}getOverlaysForCollection(t,e,n){let i=sQ(),r=e.length+1,s=new rP(e.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let t=a.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return rB.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new rK((t,e)=>t-e),s=this.overlays.getIterator();for(;s.hasNext();){let t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=sQ(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}let a=sQ(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((t,e)=>a.set(t,e)),!(a.size()>=i)););return rB.resolve(a)}we(t,e,n){let i=this.overlays.get(n.key);if(null!==i){let t=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new aw(e,n));let r=this.ls.get(e);void 0===r&&(r=sY(),this.ls.set(e,r)),this.ls.set(e,r.add(n.key))}}/**
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
 */class aV{constructor(){this.fs=new rX(aU.ds),this.ws=new rX(aU._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){let n=new aU(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.ys(new aU(t,e))}ps(t,e){t.forEach(t=>this.removeReference(t,e))}Is(t){let e=new rP(new rL([])),n=new aU(e,t),i=new aU(e,t+1),r=[];return this.ws.forEachInRange([n,i],t=>{this.ys(t),r.push(t.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){let e=new rP(new rL([])),n=new aU(e,t),i=new aU(e,t+1),r=sY();return this.ws.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){let e=new aU(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class aU{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return rP.comparator(t.key,e.key)||rD(t.As,e.As)}static _s(t,e){return rD(t.As,e.As)||rP.comparator(t.key,e.key)}}/**
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
 */class aB{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new rX(aU.ds)}checkEmpty(t){return rB.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){let r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new ay(r,e,n,i);for(let e of(this.mutationQueue.push(s),i))this.Rs=this.Rs.add(new aU(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return rB.resolve(s)}lookupMutationBatch(t,e){return rB.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){let n=this.bs(e+1),i=n<0?0:n;return rB.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rB.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return rB.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){let n=new aU(e,0),i=new aU(e,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,i],t=>{let e=this.Ps(t.As);r.push(e)}),rB.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rX(rD);return e.forEach(t=>{let e=new aU(t,0),i=new aU(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,i],t=>{n=n.add(t.As)})}),rB.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){let n=e.path,i=n.length+1,r=n;rP.isDocumentKey(r)||(r=r.child(""));let s=new aU(new rP(r),0),a=new rX(rD);return this.Rs.forEachWhile(t=>{let e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(a=a.add(t.As)),!0)},s),rB.resolve(this.Vs(a))}Vs(t){let e=[];return t.forEach(t=>{let n=this.Ps(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){0===this.Ss(e.batchId,"removed")||rg(),this.mutationQueue.shift();let n=this.Rs;return rB.forEach(e.mutations,i=>{let r=new aU(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=n})}Cn(t){}containsKey(t,e){let n=new aU(e,0),i=this.Rs.firstAfterOrEqual(n);return rB.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,rB.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){let e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class aj{constructor(t){this.Ds=t,this.docs=new rK(rP.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){let n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){let e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){let n=this.docs.get(e);return rB.resolve(n?n.document.mutableCopy():sf.newInvalidDocument(e))}getEntries(t,e){let n=sz;return e.forEach(t=>{let e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():sf.newInvalidDocument(t))}),rB.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=sz,s=e.path,a=new rP(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:t,value:{document:a}}=o.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||0>=function(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:0!==(n=rP.comparator(t.documentKey,e.documentKey))?n:rD(t.largestBatchId,e.largestBatchId)}(new rF(a.readTime,a.key,-1),n)||(i.has(a.key)||s$(e,a))&&(r=r.insert(a.key,a.mutableCopy()))}return rB.resolve(r)}getAllFromCollectionGroup(t,e,n,i){rg()}Cs(t,e){return rB.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new a$(this)}getSize(t){return rB.resolve(this.size)}}class a$ extends aL{constructor(t){super(),this.os=t}applyChanges(t){let e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.os.addEntry(t,i)):this.os.removeEntry(n)}),rB.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}/**
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
 */class aH{constructor(t){this.persistence=t,this.xs=new sH(t=>sO(t),sL),this.lastRemoteSnapshotVersion=rR.min(),this.highestTargetId=0,this.Ns=0,this.ks=new aV,this.targetCount=0,this.Ms=aO.kn()}forEachTarget(t,e){return this.xs.forEach((t,n)=>e(n)),rB.resolve()}getLastRemoteSnapshotVersion(t){return rB.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return rB.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),rB.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),rB.resolve()}Fn(t){this.xs.set(t.target,t);let e=t.targetId;e>this.highestTargetId&&(this.Ms=new aO(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,rB.resolve()}updateTargetData(t,e){return this.Fn(e),rB.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,rB.resolve()}removeTargets(t,e,n){let i=0,r=[];return this.xs.forEach((s,a)=>{a.sequenceNumber<=e&&null===n.get(a.targetId)&&(this.xs.delete(s),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),rB.waitFor(r).next(()=>i)}getTargetCount(t){return rB.resolve(this.targetCount)}getTargetData(t,e){let n=this.xs.get(e)||null;return rB.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),rB.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);let i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),rB.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),rB.resolve()}getMatchingKeysForTargetId(t,e){let n=this.ks.Es(e);return rB.resolve(n)}containsKey(t,e){return rB.resolve(this.ks.containsKey(e))}}/**
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
 */class az{constructor(t,e){this.$s={},this.overlays={},this.Os=new r$(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new aH(this),this.indexManager=new aN,this.remoteDocumentCache=new aj(t=>this.referenceDelegate.Ls(t)),this.serializer=new a_(e),this.qs=new aP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new aF,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new aB(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){rc("MemoryPersistence","Starting transaction:",t);let i=new aq(this.Os.next());return this.referenceDelegate.Us(),n(i).next(t=>this.referenceDelegate.Ks(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Gs(t,e){return rB.or(Object.values(this.$s).map(n=>()=>n.containsKey(t,e)))}}class aq extends rV{constructor(t){super(),this.currentSequenceNumber=t}}class aG{constructor(t){this.persistence=t,this.Qs=new aV,this.js=null}static zs(t){return new aG(t)}get Ws(){if(this.js)return this.js;throw rg()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),rB.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),rB.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),rB.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach(t=>this.Ws.add(t.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ws.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Us(){this.js=new Set}Ks(t){let e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rB.forEach(this.Ws,n=>{let i=rP.fromPath(n);return this.Hs(t,i).next(t=>{t||e.removeEntry(i,rR.min())})}).next(()=>(this.js=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hs(t,e).next(t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())})}Ls(t){return 0}Hs(t,e){return rB.or([()=>rB.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}/**
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
 */class aK{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=i}static Li(t,e){let n=sY(),i=sY();for(let t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new aK(t,e.fromCache,n,i)}}/**
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
 */class aQ{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ki(t,e).next(r=>r||this.Gi(t,e,i,n)).next(n=>n||this.Qi(t,e))}Ki(t,e){if(sM(e))return rB.resolve(null);let n=sF(e);return this.indexManager.getIndexType(t,n).next(i=>0===i?null:(null!==e.limit&&1===i&&(n=sF(e=sV(e,null,"F"))),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{let r=sY(...i);return this.Ui.getDocuments(t,r).next(i=>this.indexManager.getMinOffset(t,n).next(n=>{let s=this.ji(e,i);return this.zi(e,s,r,n.readTime)?this.Ki(t,sV(e,null,"F")):this.Wi(t,s,e,n)}))})))}Gi(t,e,n,i){return sM(e)||i.isEqual(rR.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next(r=>{let s=this.ji(e,r);return this.zi(e,s,n,i)?this.Qi(t,e):(ru()<=tU.DEBUG&&rc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sj(e)),this.Wi(t,s,e,function(t,e){let n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1;return new rF(rR.fromTimestamp(1e9===i?new rk(n+1,0):new rk(n,i)),rP.empty(),-1)}(i,0)))})}ji(t,e){let n=new rX((e,n)=>{let i=!1;for(let r of sP(t)){let t=function(t,e,n){let i=t.field.isKeyField()?rP.comparator(e.key,n.key):function(t,e,n){let i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?si(i,r):rg()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return -1*i;default:return rg()}}(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0});return e.forEach((e,i)=>{s$(t,i)&&(n=n.add(i))}),n}zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;let r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,e){return ru()<=tU.DEBUG&&rc("QueryEngine","Using full collection scan to execute query:",sj(e)),this.Ui.getDocumentsMatchingQuery(t,e,rF.min())}Wi(t,e,n,i){return this.Ui.getDocumentsMatchingQuery(t,n,i).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}/**
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
 */class aW{constructor(t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new rK(rD),this.Yi=new sH(t=>sO(t),sL),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new aM(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}async function aX(t,e){return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,t.tr(e),t.mutationQueue.getAllMutationBatches(n))).next(e=>{let r=[],s=[],a=sY();for(let t of i)for(let e of(r.push(t.batchId),t.mutations))a=a.add(e.key);for(let t of e)for(let e of(s.push(t.batchId),t.mutations))a=a.add(e.key);return t.localDocuments.getDocuments(n,a).next(t=>({er:t,removedBatchIds:r,addedBatchIds:s}))})})}class aY{constructor(){this.activeTargetIds=sJ}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class aJ{constructor(){this.Hr=new aY,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new aY,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class aZ{Yr(t){}shutdown(){}}/**
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
 */class a0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let t of(rc("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))t(0)}no(){for(let t of(rc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let a1=null;function a2(){return null===a1?a1=268435456+Math.round(2147483648*Math.random()):a1++,"0x"+a1.toString(16)}/**
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
 */const a9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class a4{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
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
 */const a6="WebChannelConnection";class a5 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,i,r){let s=a2(),a=this.To(t,e);rc("RestConnection",`Sending RPC '${t}' ${s}:`,a,n);let o={};return this.Eo(o,i,r),this.Ao(t,a,o,n).then(e=>(rc("RestConnection",`Received RPC '${t}' ${s}: `,e),e),e=>{throw rd("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",a,"request:",n),e})}vo(t,e,n,i,r,s){return this.Io(t,e,n,i,r)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+rl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}To(t,e){let n=a9[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,i){let r=a2();return new Promise((s,a)=>{let o=new rr;o.setWithCredentials(!0),o.listenOnce(i8.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case i7.NO_ERROR:let e=o.getResponseJson();rc(a6,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case i7.TIMEOUT:rc(a6,`RPC '${t}' ${r} timed out`),a(new ry(rm.DEADLINE_EXCEEDED,"Request time out"));break;case i7.HTTP_ERROR:let n=o.getStatus();if(rc(a6,`RPC '${t}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);let e=null==t?void 0:t.error;if(e&&e.status&&e.message){let t=function(t){let e=t.toLowerCase().replace(/_/g,"-");return Object.values(rm).indexOf(e)>=0?e:rm.UNKNOWN}(e.status);a(new ry(t,e.message))}else a(new ry(rm.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new ry(rm.UNAVAILABLE,"Connection failed."));break;default:rg()}}finally{rc(a6,`RPC '${t}' ${r} completed.`)}});let l=JSON.stringify(i);rc(a6,`RPC '${t}' ${r} sending request:`,i),o.send(e,"POST",l,n,15)})}Ro(t,e,n){let i=a2(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=i5(),o=i3(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new rn({})),this.Eo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;let u=r.join("");rc(a6,`Creating RPC '${t}' stream ${i}: ${u}`,l);let c=s.createWebChannel(u,l),f=!1,d=!1,p=new a4({ro:e=>{d?rc(a6,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(f||(rc(a6,`Opening RPC '${t}' stream ${i} transport.`),c.open(),f=!0),rc(a6,`RPC '${t}' stream ${i} sending:`,e),c.send(e))},oo:()=>c.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(c,ri.EventType.OPEN,()=>{d||rc(a6,`RPC '${t}' stream ${i} transport opened.`)}),g(c,ri.EventType.CLOSE,()=>{d||(d=!0,rc(a6,`RPC '${t}' stream ${i} transport closed`),p.wo())}),g(c,ri.EventType.ERROR,e=>{d||(d=!0,rd(a6,`RPC '${t}' stream ${i} transport errored:`,e),p.wo(new ry(rm.UNAVAILABLE,"The operation could not be completed")))}),g(c,ri.EventType.MESSAGE,e=>{var n;if(!d){let r=e.data[0];r||rg();let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){rc(a6,`RPC '${t}' stream ${i} received error:`,s);let e=s.status,n=function(t){let e=a[t];if(void 0!==e)return function(t){if(void 0===t)return rf("GRPC error has no .code"),rm.UNKNOWN;switch(t){case a.OK:return rm.OK;case a.CANCELLED:return rm.CANCELLED;case a.UNKNOWN:return rm.UNKNOWN;case a.DEADLINE_EXCEEDED:return rm.DEADLINE_EXCEEDED;case a.RESOURCE_EXHAUSTED:return rm.RESOURCE_EXHAUSTED;case a.INTERNAL:return rm.INTERNAL;case a.UNAVAILABLE:return rm.UNAVAILABLE;case a.UNAUTHENTICATED:return rm.UNAUTHENTICATED;case a.INVALID_ARGUMENT:return rm.INVALID_ARGUMENT;case a.NOT_FOUND:return rm.NOT_FOUND;case a.ALREADY_EXISTS:return rm.ALREADY_EXISTS;case a.PERMISSION_DENIED:return rm.PERMISSION_DENIED;case a.FAILED_PRECONDITION:return rm.FAILED_PRECONDITION;case a.ABORTED:return rm.ABORTED;case a.OUT_OF_RANGE:return rm.OUT_OF_RANGE;case a.UNIMPLEMENTED:return rm.UNIMPLEMENTED;case a.DATA_LOSS:return rm.DATA_LOSS;default:return rg()}}(e)}(e),r=s.message;void 0===n&&(n=rm.INTERNAL,r="Unknown error status: "+e+" with message "+s.message),d=!0,p.wo(new ry(n,r)),c.close()}else rc(a6,`RPC '${t}' stream ${i} received:`,r),p._o(r)}}),g(o,rt.STAT_EVENT,e=>{e.stat===re.PROXY?rc(a6,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===re.NOPROXY&&rc(a6,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function a3(){return"undefined"!=typeof document?document:null}/**
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
 */function a7(t){return new aE(t,!0)}/**
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
 */class a8{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();let e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-n);i>0&&rc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class ot{constructor(t,e,n,i,r,s,a,o){this.ii=t,this.$o=n,this.Oo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new a8(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===rm.RESOURCE_EXHAUSTED?(rf(e.toString()),rf("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===rm.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;let t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Fo===e&&this.Zo(t,n)},e=>{t(()=>{let t=new ry(rm.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)})})}Zo(t,e){let n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(t=>{n(()=>this.tu(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return rc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.Fo===t?e():(rc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oe extends ot{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){var e,n;if(t.streamToken||rg(),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();let i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(void 0!==n||rg(),e.map(t=>{let e;return(e=t.updateTime?aT(t.updateTime):aT(n)).isEqual(rR.min())&&(e=aT(n)),new ai(e,t.transformResults||[])})):[]),r=aT(t.commitTime);return this.listener.cu(r,i)}return t.writeResults&&0!==t.writeResults.length&&rg(),this.ru=!0,this.listener.au()}hu(){var t;let e={};e.database=new rL(["projects",(t=this.serializer).databaseId.projectId,"databases",t.databaseId.database]).canonicalString(),this.Wo(e)}uu(t){let e={streamToken:this.lastStreamToken,writes:t.map(t=>(function(t,e){var n;let i;if(e instanceof au)i={update:aA(t,e.key,e.value)};else if(e instanceof ag)i={delete:aS(t,e.key)};else if(e instanceof ac)i={update:aA(t,e.key,e.data),updateMask:function(t){let e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof am))return rg();i={verify:aS(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){let n=e.transform;if(n instanceof s4)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof s6)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof s3)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof s8)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw rg()})(0,t))),e.precondition.isNone||(i.currentDocument=void 0!==(n=e.precondition).updateTime?{updateTime:ab(t,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:rg()),i})(this.serializer,t))};this.Wo(e)}}/**
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
 */class on extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new ry(rm.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===rm.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ry(rm.UNKNOWN,t.toString())})}vo(t,e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.vo(t,e,n,r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===rm.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ry(rm.UNKNOWN,t.toString())})}terminate(){this.lu=!0}}class oi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){let e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(rf(e),this.mu=!1):rc("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}/**
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
 */class or{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(t=>{n.enqueueAndForget(async()=>{oo(this)&&(rc("RemoteStore","Restarting streams for network reachability change."),await async function(t){t.vu.add(4),await oa(t),t.bu.set("Unknown"),t.vu.delete(4),await os(t)}(this))})}),this.bu=new oi(n,i)}}async function os(t){if(oo(t))for(let e of t.Ru)await e(!0)}async function oa(t){for(let e of t.Ru)await e(!1)}function oo(t){return 0===t.vu.size}async function ol(t,e,n){if(!rj(e))throw e;t.vu.add(1),await oa(t),t.bu.set("Offline"),n||(n=()=>{var e;return(e=t.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}),t.asyncQueue.enqueueRetryable(async()=>{rc("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await os(t)})}function oh(t,e){return e().catch(n=>ol(t,n,e))}async function ou(t){let e=ow(t),n=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;oo(t)&&t.Eu.length<10;)try{let i=await function(t,e){return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===e&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}(t.localStore,n);if(null===i){0===t.Eu.length&&e.jo();break}n=i.batchId,function(t,e){t.Eu.push(e);let n=ow(t);n.Ko()&&n.ou&&n.uu(e.mutations)}(t,i)}catch(e){await ol(t,e)}oc(t)&&of(t)}function oc(t){return oo(t)&&!ow(t).Uo()&&t.Eu.length>0}function of(t){ow(t).start()}async function od(t){ow(t).hu()}async function op(t){let e=ow(t);for(let n of t.Eu)e.uu(n.mutations)}async function og(t,e,n){let i=t.Eu.shift(),r=av.from(i,e,n);await oh(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ou(t)}async function om(t,e){e&&ow(t).ou&&await async function(t,e){var n;if(function(t){switch(t){default:return rg();case rm.CANCELLED:case rm.UNKNOWN:case rm.DEADLINE_EXCEEDED:case rm.RESOURCE_EXHAUSTED:case rm.INTERNAL:case rm.UNAVAILABLE:case rm.UNAUTHENTICATED:return!1;case rm.INVALID_ARGUMENT:case rm.NOT_FOUND:case rm.ALREADY_EXISTS:case rm.PERMISSION_DENIED:case rm.FAILED_PRECONDITION:case rm.ABORTED:case rm.OUT_OF_RANGE:case rm.UNIMPLEMENTED:case rm.DATA_LOSS:return!0}}(n=e.code)&&n!==rm.ABORTED){let n=t.Eu.shift();ow(t).Qo(),await oh(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await ou(t)}}(t,e),oc(t)&&of(t)}async function oy(t,e){t.asyncQueue.verifyOperationInProgress(),rc("RemoteStore","RemoteStore received new credentials");let n=oo(t);t.vu.add(3),await oa(t),n&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await os(t)}async function ov(t,e){e?(t.vu.delete(2),await os(t)):e||(t.vu.add(2),await oa(t),t.bu.set("Unknown"))}function ow(t){var e,n,i;return t.Du||(t.Du=(e=t.datastore,n=t.asyncQueue,i={uo:od.bind(null,t),ao:om.bind(null,t),au:op.bind(null,t),cu:og.bind(null,t)},e.fu(),new oe(n,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,i)),t.Ru.push(async e=>{e?(t.Du.Qo(),await ou(t)):(await t.Du.stop(),t.Eu.length>0&&(rc("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class oE{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new rv,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,r){let s=new oE(t,e,Date.now()+n,i,r);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ry(rm.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ob(t,e){if(rf("AsyncQueue",`${e}: ${t}`),rj(t))return new ry(rm.UNAVAILABLE,`${e}: ${t}`);throw t}class oT{constructor(){this.queries=new sH(t=>sB(t),sU),this.onlineState="Unknown",this.ku=new Set}}class oI{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new sH(t=>sB(t),sU),this._c=new Map,this.mc=new Set,this.gc=new rK(rP.comparator),this.yc=new Map,this.Ic=new aV,this.Tc={},this.Ec=new Map,this.Ac=aO.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function oS(t,e,n){var i;let r=(t.remoteStore.remoteSyncer.applySuccessfulWrite=oC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=o_.bind(null,t),t);try{let t;let s=await function(t,e){let n,i;let r=rk.now(),s=e.reduce((t,e)=>t.add(e.key),sY());return t.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=sz,l=sY();return t.Zi.getEntries(a,s).next(t=>{(o=t).forEach((t,e)=>{e.isValidDocument()||(l=l.add(t))})}).next(()=>t.localDocuments.getOverlayedDocuments(a,o)).next(i=>{n=i;let s=[];for(let t of e){let e=function(t,e){let n=null;for(let i of t.fieldTransforms){let t=e.data.field(i.field),r=s9(i.transform,t||null);null!=r&&(null===n&&(n=sc.empty()),n.set(i.field,r))}return n||null}(t,n.get(t.key).overlayedDocument);null!=e&&s.push(new ac(t.key,e,function t(e){let n=[];return rq(e.fields,(e,i)=>{let r=new rM([e]);if(sl(i)){let e=t(i.mapValue).fields;if(0===e.length)n.push(r);else for(let t of e)n.push(r.child(t))}else n.push(r)}),new rJ(n)}(e.value.mapValue),ar.exists(!0)))}return t.mutationQueue.addMutationBatch(a,r,s,e)}).next(e=>{i=e;let r=e.applyToLocalDocumentSet(n,l);return t.documentOverlayCache.saveOverlays(a,e.batchId,r)})}).then(()=>({batchId:i.batchId,changes:sK(n)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(t=r.Tc[r.currentUser.toKey()])||(t=new rK(rD)),t=t.insert(i,n),r.Tc[r.currentUser.toKey()]=t,await ok(r,s.changes),await ou(r.remoteStore)}catch(e){let t=ob(e,"Failed to persist write");n.reject(t)}}function oA(t,e,n){var i;if(t.isPrimaryClient&&0===n||!t.isPrimaryClient&&1===n){let n;let r=[];t.wc.forEach((t,n)=>{let i=n.view.Mu(e);i.snapshot&&r.push(i.snapshot)}),(i=t.eventManager).onlineState=e,n=!1,i.queries.forEach((t,i)=>{for(let t of i.listeners)t.Mu(e)&&(n=!0)}),n&&function(t){t.ku.forEach(t=>{t.next()})}(i),r.length&&t.dc.nu(r),t.onlineState=e,t.isPrimaryClient&&t.sharedClientState.setOnlineState(e)}}async function oC(t,e){var n;let i=e.batch.batchId;try{let r=await (n=t.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{let i=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return(function(t,e,n,i){let r=n.batch,s=r.keys(),a=rB.resolve();return s.forEach(t=>{a=a.next(()=>i.getEntry(e,t)).next(e=>{let s=n.docVersions.get(t);null!==s||rg(),0>e.version.compareTo(s)&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))})}),a.next(()=>t.mutationQueue.removeMutationBatch(e,r))})(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=sY();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,i))});oN(t,i,null),oD(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ok(t,r)}catch(t){await rU(t)}}async function o_(t,e,n){var i;try{let r=await (i=t.localStore).persistence.runTransaction("Reject batch","readwrite-primary",t=>{let n;return i.mutationQueue.lookupMutationBatch(t,e).next(e=>(null!==e||rg(),n=e.keys(),i.mutationQueue.removeMutationBatch(t,e))).next(()=>i.mutationQueue.performConsistencyCheck(t)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(t,n,e)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,n)).next(()=>i.localDocuments.getDocuments(t,n))});oN(t,e,n),oD(t,e),t.sharedClientState.updateMutationState(e,"rejected",n),await ok(t,r)}catch(t){await rU(t)}}function oD(t,e){(t.Ec.get(e)||[]).forEach(t=>{t.resolve()}),t.Ec.delete(e)}function oN(t,e,n){let i=t.Tc[t.currentUser.toKey()];if(i){let r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),t.Tc[t.currentUser.toKey()]=i}}async function ok(t,e,n){let i=[],r=[],s=[];t.wc.isEmpty()||(t.wc.forEach((a,o)=>{s.push(t.Rc(o,e,n).then(e=>{if((e||n)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(o.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);let t=aK.Li(o.targetId,e);r.push(t)}}))}),await Promise.all(s),t.dc.nu(i),await async function(t,e){try{await t.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rB.forEach(e,e=>rB.forEach(e.Fi,i=>t.persistence.referenceDelegate.addReference(n,e.targetId,i)).next(()=>rB.forEach(e.Bi,i=>t.persistence.referenceDelegate.removeReference(n,e.targetId,i)))))}catch(t){if(!rj(t))throw t;rc("LocalStore","Failed to update sequence numbers: "+t)}for(let n of e){let e=n.targetId;if(!n.fromCache){let n=t.Ji.get(e),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);t.Ji=t.Ji.insert(e,r)}}}(t.localStore,r))}async function oR(t,e){if(!t.currentUser.isEqual(e)){rc("SyncEngine","User change. New user:",e.toKey());let n=await aX(t.localStore,e);t.currentUser=e,t.Ec.forEach(t=>{t.forEach(t=>{t.reject(new ry(rm.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.Ec.clear(),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ok(t,n.er)}}class oO{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=a7(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){var e;return e=this.persistence,new aW(e,new aQ,t.initialUser,this.serializer)}createPersistence(t){return new az(aG.zs,this.serializer)}createSharedClientState(t){return new aJ}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oL{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>oA(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=oR.bind(null,this.syncEngine),await ov(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new oT}createDatastore(t){let e=a7(t.databaseInfo.databaseId),n=new a5(t.databaseInfo);return new on(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e;return e=this.localStore,new or(e,this.datastore,t.asyncQueue,t=>oA(this.syncEngine,t,0),a0.D()?new a0:new aZ)}createSyncEngine(t,e){return function(t,e,n,i,r,s,a){let o=new oI(t,e,n,i,r,s);return a&&(o.vc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){rc("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await oa(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class ox{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ro.UNAUTHENTICATED,this.clientId=r_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{rc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(rc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ry(rm.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new rv;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){let e=ob(n,"Failed to shutdown persistence");t.reject(e)}}),t.promise}}async function oM(t,e){t.asyncQueue.verifyOperationInProgress(),rc("FirestoreClient","Initializing OfflineComponentProvider");let n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await aX(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oP(t,e){t.asyncQueue.verifyOperationInProgress();let n=await oF(t);rc("FirestoreClient","Initializing OnlineComponentProvider");let i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>oy(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>oy(e.remoteStore,n)),t._onlineComponents=e}async function oF(t){if(!t._offlineComponents){if(t._uninitializedComponentsProvider){rc("FirestoreClient","Using user provided OfflineComponentProvider");try{await oM(t,t._uninitializedComponentsProvider._offline)}catch(e){if(!("FirebaseError"===e.name?e.code===rm.FAILED_PRECONDITION||e.code===rm.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code))throw e;rd("Error using user provided cache. Falling back to memory cache: "+e),await oM(t,new oO)}}else rc("FirestoreClient","Using default OfflineComponentProvider"),await oM(t,new oO)}return t._offlineComponents}async function oV(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(rc("FirestoreClient","Using user provided OnlineComponentProvider"),await oP(t,t._uninitializedComponentsProvider._online)):(rc("FirestoreClient","Using default OnlineComponentProvider"),await oP(t,new oL))),t._onlineComponents}/**
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
 */function oU(t){let e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const oB=new Map;/**
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
 */function oj(t,e,n){if(!n)throw new ry(rm.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function o$(t){if(!rP.isDocumentKey(t))throw new ry(rm.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function oH(t){if(rP.isDocumentKey(t))throw new ry(rm.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oz(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var e;let n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof t?"a function":rg()}function oq(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ry(rm.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oz(t);throw new ry(rm.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class oG{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ry(rm.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ry(rm.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new ry(rm.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oU(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ry(rm.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ry(rm.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ry(rm.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oK{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oG({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ry(rm.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ry(rm.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oG(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new rE;switch(t.type){case"firstParty":return new rS(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ry(rm.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let e=oB.get(t);e&&(rc("ComponentProvider","Removing Datastore"),oB.delete(t),e.terminate())}(this),Promise.resolve()}}/**
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
 */class oQ{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oX(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oQ(this.firestore,t,this._key)}}class oW{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new oW(this.firestore,t,this._query)}}class oX extends oW{constructor(t,e,n){super(t,e,new sx(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new oQ(this.firestore,null,new rP(t))}withConverter(t){return new oX(this.firestore,t,this._path)}}function oY(t,e,...n){if(t=j(t),1==arguments.length&&(e=r_.A()),oj("doc","path",e),t instanceof oK){let i=rL.fromString(e,...n);return o$(i),new oQ(t,null,new rP(i))}{if(!(t instanceof oQ||t instanceof oX))throw new ry(rm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(rL.fromString(e,...n));return o$(i),new oQ(t.firestore,t instanceof oX?t.converter:null,new rP(i))}}/**
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
 */class oJ{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new a8(this,"async_queue_retry"),this.Xc=()=>{let t=a3();t&&rc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};let t=a3();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;let e=a3();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});let e=new rv;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!rj(t))throw t;rc("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){let e=this.Gc.then(()=>(this.Hc=!0,t().catch(t=>{let e;throw this.Wc=t,this.Hc=!1,rf("INTERNAL UNHANDLED ERROR: ",(e=t.message||"",t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e)),t}).then(t=>(this.Hc=!1,t))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);let i=oE.createAndSchedule(this,t,e,n,t=>this.na(t));return this.zc.push(i),i}Zc(){this.Wc&&rg()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(let e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{for(let e of(this.zc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs),this.zc))if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){let e=this.zc.indexOf(t);this.zc.splice(e,1)}}class oZ extends oK{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new oJ,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||o0(this),this._firestoreClient.terminate()}}function o0(t){var e,n,i,r;let s=t._freezeSettings(),a=(r=t._databaseId,new r3(r,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oU(s.experimentalLongPollingOptions),s.useFetchStreams));t._firestoreClient=new ox(t._authCredentials,t._appCheckCredentials,t._queue,a),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class o1{constructor(t){this._byteString=t}static fromBase64String(t){try{return new o1(r0.fromBase64String(t))}catch(t){throw new ry(rm.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new o1(r0.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class o2{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ry(rm.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rM(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class o9{constructor(t){this._methodName=t}}/**
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
 */class o4{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ry(rm.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ry(rm.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rD(this._lat,t._lat)||rD(this._long,t._long)}}/**
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
 */const o6=/^__.*__$/;class o5{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ac(t,this.data,this.fieldMask,e,this.fieldTransforms):new au(t,this.data,e,this.fieldTransforms)}}class o3{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ac(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function o7(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rg()}}class o8{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new o8(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.fa(t),i}da(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return lc(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(o7(this.ca)&&o6.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class lt{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||a7(t)}ya(t,e,n,i=!1){return new o8({ca:t,methodName:e,ga:n,path:rM.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function le(t){let e=t._freezeSettings(),n=a7(t._databaseId);return new lt(t._databaseId,!!e.ignoreUndefinedProperties,n)}class ln extends o9{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ln}}class li extends o9{constructor(t,e){super(t),this.Ia=e}_toFieldTransform(t){let e=new s8(t.serializer,s1(t.serializer,this.Ia));return new an(t.path,e)}isEqual(t){return this===t}}function lr(t,e){if(la(t=j(t)))return lo("Unsupported field value:",e,t),ls(t,e);if(t instanceof o9)return function(t,e){if(!o7(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);let n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){let n=[],i=0;for(let r of t){let t=lr(r,e.wa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=j(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return s1(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){let n=rk.fromDate(t);return{timestampValue:ab(e.serializer,n)}}if(t instanceof rk){let n=new rk(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ab(e.serializer,n)}}if(t instanceof o4)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof o1){var n,i;return{bytesValue:(n=e.serializer,i=t._byteString,n.useProto3Json?i.toBase64():i.toUint8Array())}}if(t instanceof oQ){let n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:aI(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${oz(t)}`)}(t,e)}function ls(t,e){let n={};return rG(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rq(t,(t,i)=>{let r=lr(i,e.ha(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function la(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof rk||t instanceof o4||t instanceof o1||t instanceof oQ||t instanceof o9)}function lo(t,e,n){if(!la(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=oz(n);throw"an object"===i?e._a(t+" a custom object"):e._a(t+" "+i)}}function ll(t,e,n){if((e=j(e))instanceof o2)return e._internalPath;if("string"==typeof e)return lu(t,e);throw lc("Field path arguments must be of type string or ",t,!1,void 0,n)}const lh=RegExp("[~\\*/\\[\\]]");function lu(t,e,n){if(e.search(lh)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new o2(...e.split("."))._internalPath}catch(i){throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lc(t,e,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new ry(rm.INVALID_ARGUMENT,o+t+l)}function lf(t,e){return t.some(t=>t.isEqual(e))}function ld(t,e){return function(t,e){let n=new rv;return t.asyncQueue.enqueueAndForget(async()=>oS(await oV(t).then(t=>t.syncEngine),e,n)),n.promise}((t._firestoreClient||o0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),e)}!function(t=!0){rl="9.23.0",tw(new $("firestore",(e,{instanceIdentifier:n,options:i})=>{let r=e.getProvider("app").getImmediate(),s=new oZ(new rT(e.getProvider("auth-internal")),new rC(e.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ry(rm.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new r7(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),tI(ra,"3.13.0",void 0),tI(ra,"3.13.0","esm2017")}(),tT({apiKey:"AIzaSyDhfTomFg03nXW2cD1RIysGXydVHHUNC0c",authDomain:"nisb-website.firebaseapp.com",projectId:"nisb-website",storageBucket:"nisb-website.appspot.com",messagingSenderId:"30096523025",appId:"1:30096523025:web:8485960da3344cf73cd6b0",measurementId:"G-5RMDTP6Q8R"});const lp=function(t,e){let n=(function(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)})("object"==typeof t?t:function(t=tg){let e=ty.get(t);if(!e&&t===tg&&x())return tT();if(!e)throw tE.create("no-app",{appName:t});return e}(),"firestore").getImmediate({identifier:"string"==typeof t?t:"(default)"});if(!n._initialized){let t=L("firestore");t&&function(t,e,n,i={}){var r;let s=(t=oq(t,oK))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&rd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=ro.MOCK_USER;else{e=/**
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
 */function(t,e){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[C(JSON.stringify({alg:"none",type:"JWT"})),C(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ry(rm.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ro(s)}t._authCredentials=new rb(new rw(e,n))}}(n,...t)}return n}();var lg=null;fetch("https://ipapi.co/json/").then(t=>t.json()).then(t=>lg=t).catch(t=>console.error(t));const lm=t=>{!function(t,e){var n,i;let r=oq(t.firestore,oZ),s=oY(t),a=(n=t.converter)?i&&(i.merge||i.mergeFields)?n.toFirestore(e,i):n.toFirestore(e):e;ld(r,[(function(t,e,n,i,r,s={}){let a,o;let l=t.ya(s.merge||s.mergeFields?2:0,e,n,r);lo("Data must be an object, but it was:",l,i);let h=ls(i,l);if(s.merge)a=new rJ(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let t=[];for(let i of s.mergeFields){let r=ll(e,i,n);if(!l.contains(r))throw new ry(rm.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);lf(t,r)||t.push(r)}a=new rJ(t),o=l.fieldTransforms.filter(t=>a.covers(t.field))}else a=null,o=l.fieldTransforms;return new o5(new sc(h),a,o)})(le(t.firestore),"addDoc",s._key,a,null!==t.converter,{}).toMutation(s._key,ar.exists(!1))]).then(()=>s)}(function(t,e,...n){if(t=j(t),oj("collection","path",e),t instanceof oK){let i=rL.fromString(e,...n);return oH(i),new oX(t,null,i)}{if(!(t instanceof oQ||t instanceof oX))throw new ry(rm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(rL.fromString(e,...n));return oH(i),new oX(t.firestore,null,i)}}(lp,"analytics"),{name:t.target.getAttribute("data-name"),link:t.target.getAttribute("data-url"),time:new Date,loc:lg}),function(t,e,n,...i){t=oq(t,oQ);let r=oq(t.firestore,oZ),s=le(r);ld(r,[("string"==typeof(e=j(e))||e instanceof o2?function(t,e,n,i,r,s){let a=t.ya(1,e,n),o=[ll(e,i,n)],l=[r];if(s.length%2!=0)throw new ry(rm.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)o.push(ll(e,s[t])),l.push(s[t+1]);let h=[],u=sc.empty();for(let t=o.length-1;t>=0;--t)if(!lf(h,o[t])){let e=o[t],n=l[t];n=j(n);let i=a.da(e);if(n instanceof ln)h.push(e);else{let t=lr(n,i);null!=t&&(h.push(e),u.set(e,t))}}return new o3(u,new rJ(h),a.fieldTransforms)}(s,"updateDoc",t._key,e,void 0,i):function(t,e,n,i){let r=t.ya(1,e,n);lo("Data must be an object, but it was:",r,i);let s=[],a=sc.empty();return rq(i,(t,i)=>{let o=lu(e,t,n);i=j(i);let l=r.da(o);if(i instanceof ln)s.push(o);else{let t=lr(i,l);null!=t&&(s.push(o),a.set(o,t))}}),new o3(a,new rJ(s),r.fieldTransforms)}(s,"updateDoc",t._key,e)).toMutation(t._key,ar.exists(!0))])}(oY(lp,"social-links",t.target.getAttribute("data-id")),{count:new li("increment",1)}),window.open(t.target.getAttribute("data-url"),"_blank")};for(var ly=document.getElementsByClassName("link"),lv=0;lv<ly.length;lv++)ly[lv].addEventListener("click",lm,!1);
//# sourceMappingURL=index.46a634da.js.map
