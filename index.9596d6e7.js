let t,e,n;var i,r,s,a,o,l,h=globalThis,u={},c=u={};function f(){throw Error("setTimeout has not been defined")}function d(){throw Error("clearTimeout has not been defined")}function p(t){if(tP===setTimeout)return setTimeout(t,0);if((tP===f||!tP)&&setTimeout)return tP=setTimeout,setTimeout(t,0);try{return tP(t,0)}catch(e){try{return tP.call(null,t,0)}catch(e){return tP.call(this,t,0)}}}!function(){try{tP="function"==typeof setTimeout?setTimeout:f}catch(t){tP=f}try{tF="function"==typeof clearTimeout?clearTimeout:d}catch(t){tF=d}}();var g=[],m=!1,y=-1;function v(){m&&tV&&(m=!1,tV.length?g=tV.concat(g):y=-1,g.length&&w())}function w(){if(!m){var t=p(v);m=!0;for(var e=g.length;e;){for(tV=g,g=[];++y<e;)tV&&tV[y].run();y=-1,e=g.length}tV=null,m=!1,function(t){if(tF===clearTimeout)return clearTimeout(t);if((tF===d||!tF)&&clearTimeout)return tF=clearTimeout,clearTimeout(t);try{tF(t)}catch(e){try{return tF.call(null,t)}catch(e){return tF.call(this,t)}}}(t)}}function E(t,e){this.fun=t,this.array=e}function b(){}c.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];g.push(new E(t,e)),1!==g.length||m||p(w)},E.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=b,c.addListener=b,c.once=b,c.off=b,c.removeListener=b,c.removeAllListeners=b,c.emit=b,c.prependListener=b,c.prependOnceListener=b,c.listeners=function(t){return[]},c.binding=function(t){throw Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw Error("process.chdir is not supported")},c.umask=function(){return 0};/**
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
 */const T=function(t){let e=[],n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:(r<2048?e[n++]=r>>6|192:((64512&r)==55296&&i+1<t.length&&(64512&t.charCodeAt(i+1))==56320?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128):e[n++]=r>>12|224,e[n++]=r>>6&63|128),e[n++]=63&r|128)}return e},I=function(t){let e=[],n=0,i=0;for(;n<t.length;){let r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){let s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{let s=t[n++],a=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return e.join("")},S={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){let r=t[e],s=e+1<t.length,a=s?t[e+1]:0,o=e+2<t.length,l=o?t[e+2]:0,h=r>>2,u=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;o||(f=64,s||(c=64)),i.push(n[h],n[u],n[c],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){let r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0,a=++e<t.length?n[t.charAt(e)]:64,o=++e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==a||null==o)throw new A;let l=r<<2|s>>4;if(i.push(l),64!==a){let t=s<<4&240|a>>2;if(i.push(t),64!==o){let t=a<<6&192|o;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x=function(t){let e=T(t);return S.encodeByteArray(e,!0)},C=function(t){return x(t).replace(/\./g,"")},_=function(t){try{return S.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},D=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==h)return h;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,N=()=>{if(void 0===u||void 0===u.env)return;let t=void 0;if(t)return JSON.parse(t)},k=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let e=t&&_(t[1]);return e&&JSON.parse(e)},R=()=>{try{return D()||N()||k()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O=t=>{var e,n;return null===(n=null===(e=R())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},L=t=>{let e=O(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},M=()=>{var t;return null===(t=R())||void 0===t?void 0:t.config};/**
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
 */class P{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}class F extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){let n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?r.replace(U,(t,e)=>{let i=n[e];return null!=i?String(i):`<${e}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new F(i,a,n)}}const U=/\{\$([^}]+)}/g;function B(t,e){if(t===e)return!0;let n=Object.keys(t),i=Object.keys(e);for(let r of n){if(!i.includes(r))return!1;let n=t[r],s=e[r];if(j(n)&&j(s)){if(!B(n,s))return!1}else if(n!==s)return!1}for(let t of i)if(!n.includes(t))return!1;return!0}function j(t){return null!==t&&"object"==typeof t}/**
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
 */function $(t){return t&&t._delegate?t._delegate:t}class H{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const z="[DEFAULT]";/**
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
 */class q{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let t=new P;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;let n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:z})}catch(t){}for(let[t,e]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(t);try{let t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=z){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=z){return this.instances.has(t)}getOptions(t=z){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(let[t,e]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(t)&&e.resolve(i);return i}onInit(t,e){var n;let i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){let n=this.onInitCallbacks.get(e);if(n)for(let i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===z?void 0:t,options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=z){return this.component?this.component.multipleInstances?t:z:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class G{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let e=new q(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const K=[];(tM=tU||(tU={}))[tM.DEBUG=0]="DEBUG",tM[tM.VERBOSE=1]="VERBOSE",tM[tM.INFO=2]="INFO",tM[tM.WARN=3]="WARN",tM[tM.ERROR=4]="ERROR",tM[tM.SILENT=5]="SILENT";const Q={debug:tU.DEBUG,verbose:tU.VERBOSE,info:tU.INFO,warn:tU.WARN,error:tU.ERROR,silent:tU.SILENT},W=tU.INFO,X={[tU.DEBUG]:"log",[tU.VERBOSE]:"log",[tU.INFO]:"info",[tU.WARN]:"warn",[tU.ERROR]:"error"},Y=(t,e,...n)=>{if(e<t.logLevel)return;let i=new Date().toISOString(),r=X[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class J{constructor(t){this.name=t,this._logLevel=W,this._logHandler=Y,this._userLogHandler=null,K.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tU))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Q[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tU.DEBUG,...t),this._logHandler(this,tU.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tU.VERBOSE,...t),this._logHandler(this,tU.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tU.INFO,...t),this._logHandler(this,tU.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tU.WARN,...t),this._logHandler(this,tU.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tU.ERROR,...t),this._logHandler(this,tU.ERROR,...t)}}const Z=(t,e)=>e.some(e=>t instanceof e),tt=new WeakMap,te=new WeakMap,tn=new WeakMap,ti=new WeakMap,tr=new WeakMap;let ts={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return te.get(t);if("objectStoreNames"===e)return t.objectStoreNames||tn.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ta(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ta(n){var i;if(n instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(ta(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&tt.set(e,t)}).catch(()=>{}),tr.set(e,t),e}(n);if(ti.has(n))return ti.get(n);let r="function"==typeof(i=n)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(e||(e=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...t){return i.apply(to(this),t),ta(tt.get(this))}:function(...t){return ta(i.apply(to(this),t))}:function(t,...e){let n=i.call(to(this),t,...e);return tn.set(n,t.sort?t.sort():[t]),ta(n)}:(i instanceof IDBTransaction&&function(t){if(te.has(t))return;let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});te.set(t,e)}(i),Z(i,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,ts):i;return r!==n&&(ti.set(n,r),tr.set(r,n)),r}const to=t=>tr.get(t),tl=["get","getKey","getAll","getAllKeys","count"],th=["put","add","delete","clear"],tu=new Map;function tc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(tu.get(e))return tu.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,r=th.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||tl.includes(n)))return;let s=async function(t,...e){let s=this.transaction(t,r?"readwrite":"readonly"),a=s.store;return i&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),r&&s.done]))[0]};return tu.set(e,s),s}ts={...n=ts,get:(t,e,i)=>tc(t,e)||n.get(t,e,i),has:(t,e)=>!!tc(t,e)||n.has(t,e)};/**
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
 */class tf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(!function(t){let e=t.getComponent();return(null==e?void 0:e.type)==="VERSION"}(t))return null;{let e=t.getImmediate();return`${e.library}/${e.version}`}}).filter(t=>t).join(" ")}}const td="@firebase/app",tp="0.9.13",tg=new J("@firebase/app"),tm="[DEFAULT]",ty={[td]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tv=new Map,tw=new Map;function tE(t){let e=t.name;if(tw.has(e))return tg.debug(`There were multiple attempts to register component ${e}.`),!1;for(let n of(tw.set(e,t),tv.values()))!function(t,e){try{t.container.addComponent(e)}catch(n){tg.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}(n,t);return!0}const tb=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class tT{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new H("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tb.create("app-deleted",{appName:this._name})}}function tI(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});let i=Object.assign({name:tm,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw tb.create("bad-app-name",{appName:String(r)});if(n||(n=M()),!n)throw tb.create("no-options");let s=tv.get(r);if(s){if(B(n,s.options)&&B(i,s.config))return s;throw tb.create("duplicate-app",{appName:r})}let a=new G(r);for(let t of tw.values())a.addComponent(t);let o=new tT(n,i,a);return tv.set(r,o),o}function tS(t,e,n){var i;let r=null!==(i=ty[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);let s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let t=[`Unable to register library "${r}" with version "${e}":`];s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tg.warn(t.join(" "));return}tE(new H(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}const tA="firebase-heartbeat-store";let tx=null;function tC(){return tx||(tx=(function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let a=indexedDB.open(t,1),o=ta(a);return i&&a.addEventListener("upgradeneeded",t=>{i(ta(a.result),t.oldVersion,t.newVersion,ta(a.transaction),t)}),n&&a.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),o.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",t=>r(t.oldVersion,t.newVersion,t))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(t,e)=>{0===e&&t.createObjectStore(tA)}}).catch(t=>{throw tb.create("idb-open",{originalErrorMessage:t.message})})),tx}async function t_(t){try{let e=await tC();return await e.transaction(tA).objectStore(tA).get(tN(t))}catch(t){if(t instanceof F)tg.warn(t.message);else{let e=tb.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});tg.warn(e.message)}}}async function tD(t,e){try{let n=(await tC()).transaction(tA,"readwrite"),i=n.objectStore(tA);await i.put(e,tN(t)),await n.done}catch(t){if(t instanceof F)tg.warn(t.message);else{let e=tb.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});tg.warn(e.message)}}}function tN(t){return`${t.name}!${t.options.appId}`}class tk{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new tO(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){let t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=tR();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===e||this._heartbeatsCache.heartbeats.some(t=>t.date===e))?void 0:(this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let e=new Date(t.date).valueOf();return Date.now()-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let t=tR(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){let n=[],i=t.slice();for(let r of t){let t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),tL(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),tL(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=C(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tR(){return new Date().toISOString().substring(0,10)}class tO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}).then(()=>!0).catch(()=>!1)}async read(){return await this._canUseIndexedDBPromise&&await t_(this.app)||{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){let n=await this.read();return tD(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){let n=await this.read();return tD(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function tL(t){return C(JSON.stringify({version:2,heartbeats:t})).length}tE(new H("platform-logger",t=>new tf(t),"PRIVATE")),tE(new H("heartbeat",t=>new tk(t),"PRIVATE")),tS(td,tp,""),tS(td,tp,"esm2017"),tS("fire-js",""),/**
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
 */tS("firebase","9.23.0","app");var tM,tP,tF,tV,tU,tB,tj={},t$=t$||{},tH=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==h?h:"undefined"!=typeof self?self:{})||self;function tz(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function tq(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function tG(t,e,n){return t.call.apply(t.bind,arguments)}function tK(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function tQ(t,e,n){return(tQ=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tG:tK).apply(null,arguments)}function tW(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function tX(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function tY(){this.s=this.s,this.o=this.o}tY.prototype.s=!1,tY.prototype.sa=function(){this.s||(this.s=!0,this.N())},tY.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tJ=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1};function tZ(t){let e=t.length;if(0<e){let n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function t0(t,e){for(let e=1;e<arguments.length;e++){let n=arguments[e];if(tz(n)){let e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function t1(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}t1.prototype.h=function(){this.defaultPrevented=!0};var t2=function(){if(!tH.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{tH.addEventListener("test",()=>{},e),tH.removeEventListener("test",()=>{},e)}catch(t){}return t}();function t3(t){return/^[\s\xa0]*$/.test(t)}function t6(){var t=tH.navigator;return t&&(t=t.userAgent)?t:""}function t4(t){return -1!=t6().indexOf(t)}function t5(t){return t5[" "](t),t}t5[" "]=function(){};var t8=t4("Opera"),t9=t4("Trident")||t4("MSIE"),t7=t4("Edge"),et=t7||t9,ee=t4("Gecko")&&!(-1!=t6().toLowerCase().indexOf("webkit")&&!t4("Edge"))&&!(t4("Trident")||t4("MSIE"))&&!t4("Edge"),en=-1!=t6().toLowerCase().indexOf("webkit")&&!t4("Edge");function ei(){var t=tH.document;return t?t.documentMode:void 0}t:{var er,es="",ea=(er=t6(),ee?/rv:([^\);]+)(\)|;)/.exec(er):t7?/Edge\/([\d\.]+)/.exec(er):t9?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(er):en?/WebKit\/(\S+)/.exec(er):t8?/(?:Version)[ \/]?(\S+)/.exec(er):void 0);if(ea&&(es=ea?ea[1]:""),t9){var eo=ei();if(null!=eo&&eo>parseFloat(es)){r=String(eo);break t}}r=es}var el=tH.document&&t9&&(ei()||parseInt(r,10))||void 0;function eh(t,e){if(t1.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ee){t:{try{t5(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:eu[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&eh.$.h.call(this)}}tX(eh,t1);var eu={2:"touch",3:"pen",4:"mouse"};eh.prototype.h=function(){eh.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ec="closure_listenable_"+(1e6*Math.random()|0),ef=0;function ed(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++ef,this.fa=this.ia=!1}function ep(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function eg(t,e,n){for(let i in t)e.call(n,t[i],i,t)}function em(t){let e={};for(let n in t)e[n]=t[n];return e}const ey="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ev(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e])t[n]=i[n];for(let e=0;e<ey.length;e++)n=ey[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ew(t){this.src=t,this.g={},this.h=0}function eE(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=tJ(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ep(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function eb(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&!!n==s.capture&&s.la==i)return r}return -1}ew.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var a=eb(t,e,i,r);return -1<a?(e=t[a],n||(e.ia=!1)):((e=new ed(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var eT="closure_lm_"+(1e6*Math.random()|0),eI={};function eS(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var a=tq(r)?!!r.capture:!!r,o=e_(t);if(o||(t[eT]=o=new ew(t)),(n=o.add(e,n,i,a,s)).proxy)return n;if(i=function t(e){return eC.call(t.src,t.listener,e)},n.proxy=i,i.src=t,i.listener=n,t.addEventListener)t2||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ex(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eA(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ec])eE(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ex(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=e_(e))?(eE(n,t),0==n.h&&(n.src=null,e[eT]=null)):ep(t)}}}function ex(t){return t in eI?eI[t]:eI[t]="on"+t}function eC(t,e){if(t.fa)t=!0;else{e=new eh(e,this);var n=t.listener,i=t.la||t.src;t.ia&&eA(t),t=n.call(i,e)}return t}function e_(t){return(t=t[eT])instanceof ew?t:null}var eD="__closure_events_fn_"+(1e9*Math.random()>>>0);function eN(t){return"function"==typeof t?t:(t[eD]||(t[eD]=function(e){return t.handleEvent(e)}),t[eD])}function ek(){tY.call(this),this.i=new ew(this),this.S=this,this.J=null}function eR(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new t1(e,t);else if(e instanceof t1)e.target=e.target||t;else{var r=e;ev(e=new t1(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=e.g=n[s];r=eO(a,i,!0,e)&&r}if(r=eO(a=e.g=t,i,!0,e)&&r,r=eO(a,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=eO(a=e.g=n[s],i,!1,e)&&r}function eO(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&eE(t.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}tX(ek,tY),ek.prototype[ec]=!0,ek.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);else(r=tq(r)?!!r.capture:!!r,i=eN(i),e&&e[ec])?(e=e.i,(n=String(n).toString())in e.g&&-1<(i=eb(a=e.g[n],i,r,s))&&(ep(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete e.g[n],e.h--))):e&&(e=e_(e))&&(n=e.g[n.toString()],e=-1,n&&(e=eb(n,i,r,s)),(i=-1<e?n[e]:null)&&eA(i))}(this,t,e,n,i)},ek.prototype.N=function(){if(ek.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)ep(n[i]);delete e.g[t],e.h--}}this.J=null},ek.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ek.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var eL=tH.JSON.stringify,eM=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new eP,t=>t.reset());class eP{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let eF,eV=!1,eU=new class{constructor(){this.h=this.g=null}add(t,e){let n=eM.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},eB=()=>{let t=tH.Promise.resolve(void 0);eF=()=>{t.then(ej)}};var ej=()=>{let t;for(var e;t=null,eU.g&&(t=eU.g,eU.g=eU.g.next,eU.g||(eU.h=null),t.next=null),e=t;){try{e.h.call(e.g)}catch(t){!function(t){tH.setTimeout(()=>{throw t},0)}(t)}eM.j(e),100>eM.h&&(eM.h++,e.next=eM.g,eM.g=e)}eV=!1};function e$(t,e){ek.call(this),this.h=t||1,this.g=e||tH,this.j=tQ(this.qb,this),this.l=Date.now()}function eH(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function ez(t,e,n){if("function"==typeof t)n&&(t=tQ(t,n));else if(t&&"function"==typeof t.handleEvent)t=tQ(t.handleEvent,t);else throw Error("Invalid listener argument");return 0x7fffffff<Number(e)?-1:tH.setTimeout(t,e||0)}tX(e$,ek),(tB=e$.prototype).ga=!1,tB.T=null,tB.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eR(this,"tick"),this.ga&&(eH(this),this.start()))}},tB.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},tB.N=function(){e$.$.N.call(this),eH(this),delete this.g};class eq extends tY{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=ez(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);let n=e.h;e.h=null,e.m.apply(null,n)}(this)}N(){super.N(),this.g&&(tH.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eG(t){tY.call(this),this.h=t,this.g={}}tX(eG,tY);var eK=[];function eQ(t,e,n,i){Array.isArray(n)||(n&&(eK[0]=n.toString()),n=eK);for(var r=0;r<n.length;r++){var s=function t(e,n,i,r,s){if(r&&r.once)return function t(e,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=eN(i),e&&e[ec]?e.P(n,i,tq(r)?!!r.capture:!!r,s):eS(e,n,i,!0,r,s)}(e,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=eN(i),e&&e[ec]?e.O(n,i,tq(r)?!!r.capture:!!r,s):eS(e,n,i,!1,r,s)}(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function eW(t){eg(t.g,function(t,e){this.g.hasOwnProperty(e)&&eA(t)},t),t.g={}}function eX(){this.g=!0}function eY(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return eL(n)}catch(t){return e}}(t,n)+(i?" "+i:"")})}eG.prototype.N=function(){eG.$.N.call(this),eW(this)},eG.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eX.prototype.Ea=function(){this.g=!1},eX.prototype.info=function(){};var eJ={},eZ=null;function e0(){return eZ=eZ||new ek}function e1(t){t1.call(this,eJ.Ta,t)}function e2(t){let e=e0();eR(e,new e1(e))}function e3(t,e){t1.call(this,eJ.STAT_EVENT,t),this.stat=e}function e6(t){let e=e0();eR(e,new e3(e,t))}function e4(t,e){t1.call(this,eJ.Ua,t),this.size=e}function e5(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return tH.setTimeout(function(){t()},e)}eJ.Ta="serverreachability",tX(e1,t1),eJ.STAT_EVENT="statevent",tX(e3,t1),eJ.Ua="timingevent",tX(e4,t1);var e8={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},e9={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function e7(){}function nt(t){return t.h||(t.h=t.i())}function ne(){}e7.prototype.h=null;var nn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ni(){t1.call(this,"d")}function nr(){t1.call(this,"c")}function ns(){}function na(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new eG(this),this.P=nl,t=et?125:void 0,this.V=new e$(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}tX(ni,t1),tX(nr,t1),tX(ns,e7),ns.prototype.g=function(){return new XMLHttpRequest},ns.prototype.i=function(){return{}},a=new ns;var nl=45e3,nh={},nu={};function nc(t,e,n){t.L=1,t.v=nD(nS(e)),t.s=n,t.S=!0,nf(t,null)}function nf(t,e){t.G=Date.now(),ng(t),t.A=nS(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),n$(n.i,"t",i),t.C=0,n=t.l.J,t.h=new no,t.g=iO(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eq(tQ(t.Pa,t,t.g),t.O)),eQ(t.U,t.g,"readystatechange",t.nb),e=t.I?em(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),e2(),function(t,e,n,i,r,s){t.info(function(){if(t.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+a})}(t.j,t.u,t.A,t.m,t.W,t.s)}function nd(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.l.Ha}function np(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if((r=function(t,e){var n=t.C,i=e.indexOf("\n",n);return -1==i?nu:isNaN(n=Number(e.substring(n,i)))?nh:(i+=1)+n>e.length?nu:(e=e.slice(i,i+n),t.C=i+n,e)}(t,n))==nu){4==e&&(t.o=4,e6(14),i=!1),eY(t.j,t.m,null,"[Incomplete Response]");break}else if(r==nh){t.o=4,e6(15),eY(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else eY(t.j,t.m,r,null),nE(t,r);nd(t)&&r!=nu&&r!=nh&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,e6(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),iA(e),e.M=!0,e6(11))):(eY(t.j,t.m,n,"[Invalid Chunked Response]"),nw(t),nv(t))}function ng(t){t.Y=Date.now()+t.P,nm(t,t.P)}function nm(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=e5(tQ(t.lb,t),e)}function ny(t){t.B&&(tH.clearTimeout(t.B),t.B=null)}function nv(t){0==t.l.H||t.J||i_(t.l,t)}function nw(t){ny(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,eH(t.V),eW(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function nE(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||nW(n.i,t))){if(!t.K&&nW(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(n.g.G+3e3<t.G)iC(n),iy(n);else break t}iS(n),e6(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=e5(tQ(n.ib,n),6e3));if(1>=nQ(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else iN(n,11)}else if((t.K||n.g==t)&&iC(n),!t3(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let o=r[e];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let e=o[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));let r=o[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=t.g;if(h){let t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(nX(s,s.h),s.h=null))}if(i.F){let t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,n_(i.I,i.F,t))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),(i=n).wa=iR(i,i.J?i.pa:null,i.Y),t.K){nY(i.i,t);var a=i.L;a&&t.setTimeout(a),t.B&&(ny(t),ng(t)),i.g=t}else iI(i);0<n.j.length&&iw(n)}else"stop"!=o[0]&&"close"!=o[0]||iN(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?iN(n,7):im(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}e2(4)}catch(t){}}function nb(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(tz(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(tz(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(let i in e=[],n=0,t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(tz(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(tB=na.prototype).setTimeout=function(t){this.P=t},tB.nb=function(t){t=t.target;let e=this.M;e&&3==ih(t)?e.l():this.Pa(t)},tB.Pa=function(t){try{if(t==this.g)t:{let u=ih(this.g);var e=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||et||this.g&&(this.h.h||this.g.ja()||iu(this.g)))){this.J||4!=u||7==e||(8==e||0>=c?e2(3):e2(2)),ny(this);var n=this.g.da();this.ca=n;e:if(nd(this)){var i=iu(this.g);t="";var r=i.length,s=4==ih(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nw(this),nv(this);var a="";break e}this.h.i=new tH.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!t3(o)){var h=o;break e}}h=null}if(n=h)eY(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nE(this,n);else{this.i=!1,this.o=3,e6(12),nw(this),nv(this);break t}}this.S?(np(this,u,a),et&&this.i&&3==u&&(eQ(this.U,this.V,"tick",this.mb),this.V.start())):(eY(this.j,this.m,a,null),nE(this,a)),4==u&&nw(this),this.i&&!this.J&&(4==u?i_(this.l,this):(this.i=!1,ng(this)))}else(function(t){let e={};t=(t.g&&2<=ih(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(t3(t[i]))continue;var n=function(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}(t[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(let n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.o=3,e6(12)):(this.o=0,e6(13)),nw(this),nv(this)}}}catch(t){}finally{}},tB.mb=function(){if(this.g){var t=ih(this.g),e=this.g.ja();this.C<e.length&&(ny(this),np(this,t,e),this.i&&4!=t&&ng(this))}},tB.cancel=function(){this.J=!0,nw(this)},tB.lb=function(){this.B=null;let t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.L&&(e2(),e6(17)),nw(this),this.o=2,nv(this)):nm(this,this.Y-t)};var nT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nI(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nI){this.h=t.h,nA(this,t.j),this.s=t.s,this.g=t.g,nx(this,t.m),this.l=t.l;var e=t.i,n=new nV;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nC(this,n),this.o=t.o}else t&&(e=String(t).match(nT))?(this.h=!1,nA(this,e[1]||"",!0),this.s=nN(e[2]||""),this.g=nN(e[3]||"",!0),nx(this,e[4]),this.l=nN(e[5]||"",!0),nC(this,e[6]||"",!0),this.o=nN(e[7]||"")):(this.h=!1,this.i=new nV(null,this.h))}function nS(t){return new nI(t)}function nA(t,e,n){t.j=n?nN(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function nx(t,e){if(e){if(isNaN(e=Number(e))||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nC(t,e,n){var i,r;e instanceof nV?(t.i=e,i=t.i,(r=t.h)&&!i.j&&(nU(i),i.i=null,i.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(nB(this,e),n$(this,n,t))},i)),i.j=r):(n||(e=nk(e,nP)),t.i=new nV(e,t.h))}function n_(t,e,n){t.i.set(e,n)}function nD(t){return n_(t,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),t}function nN(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function nk(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,nR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nR(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}nI.prototype.toString=function(){var t=[],e=this.j;e&&t.push(nk(e,nO,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(nk(e,nO,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(nk(n,"/"==n.charAt(0)?nM:nL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",nk(n,nF)),t.join("")};var nO=/[#\/\?@]/g,nL=/[#\?:]/g,nM=/[#\?]/g,nP=/[#\?@]/g,nF=/#/g;function nV(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nU(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function nB(t,e){nU(t),e=nH(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nj(t,e){return nU(t),e=nH(t,e),t.g.has(e)}function n$(t,e,n){nB(t,e),0<n.length&&(t.i=null,t.g.set(nH(t,e),tZ(n)),t.h+=n.length)}function nH(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(tB=nV.prototype).add=function(t,e){nU(this),this.i=null,t=nH(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},tB.forEach=function(t,e){nU(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},tB.ta=function(){nU(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){let r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},tB.Z=function(t){nU(this);let e=[];if("string"==typeof t)nj(this,t)&&(e=e.concat(this.g.get(nH(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},tB.set=function(t,e){return nU(this),this.i=null,nj(this,t=nH(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},tB.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},tB.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];let s=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),t.push(r)}}return this.i=t.join("&")};var nz=class{constructor(t,e){this.g=t,this.map=e}};function nq(t){this.l=t||nG,t=tH.PerformanceNavigationTiming?0<(t=tH.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(tH.g&&tH.g.Ka&&tH.g.Ka()&&tH.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nG=10;function nK(t){return!!t.h||!!t.g&&t.g.size>=t.j}function nQ(t){return t.h?1:t.g?t.g.size:0}function nW(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function nX(t,e){t.g?t.g.add(e):t.h=e}function nY(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function nJ(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return tZ(t.i)}nq.prototype.cancel=function(){if(this.i=nJ(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}};var nZ=class{stringify(t){return tH.JSON.stringify(t,void 0)}parse(t){return tH.JSON.parse(t,void 0)}};function n0(){this.g=new nZ}function n1(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function n2(t){this.l=t.fc||null,this.j=t.ob||!1}function n3(t,e){ek.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=n6,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tX(n2,e7),n2.prototype.g=function(){return new n3(this.l,this.j)},n2.prototype.i=(i={},function(){return i}),tX(n3,ek);var n6=0;function n4(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function n5(t){t.readyState=4,t.l=null,t.j=null,t.A=null,n8(t)}function n8(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(tB=n3.prototype).open=function(t,e){if(this.readyState!=n6)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,n8(this)},tB.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||tH).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},tB.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,n5(this)),this.readyState=n6},tB.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,n8(this)),this.g&&(this.readyState=3,n8(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==tH.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;n4(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))}},tB.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?n5(this):n8(this),3==this.readyState&&n4(this)}},tB.Za=function(t){this.g&&(this.response=this.responseText=t,n5(this))},tB.Ya=function(t){this.g&&(this.response=t,n5(this))},tB.ka=function(){this.g&&n5(this)},tB.setRequestHeader=function(t,e){this.v.append(t,e)},tB.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},tB.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)t.push((n=n.value)[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(n3.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var n9=tH.JSON.parse;function n7(t){ek.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=it,this.L=this.M=!1}tX(n7,ek);var it="",ie=/^https?$/i,ii=["POST","PUT"];function ir(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,is(t),io(t)}function is(t){t.F||(t.F=!0,eR(t,"complete"),eR(t,"error"))}function ia(t){if(t.h&&void 0!==t$&&(!t.C[1]||4!=ih(t)||2!=t.da())){if(t.v&&4==ih(t))ez(t.La,0,t);else if(eR(t,"readystatechange"),4==ih(t)){t.h=!1;try{let a=t.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e,n,i=!0;break;default:i=!1}if(!(e=i)){if(n=0===a){var r=String(t.I).match(nT)[1]||null;!r&&tH.self&&tH.self.location&&(r=tH.self.location.protocol.slice(0,-1)),n=!ie.test(r?r.toLowerCase():"")}e=n}if(e)eR(t,"complete"),eR(t,"success");else{t.m=6;try{var s=2<ih(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",is(t)}}finally{io(t)}}}}function io(t,e){if(t.g){il(t);let n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||eR(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function il(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(tH.clearTimeout(t.A),t.A=null)}function ih(t){return t.g?t.g.readyState:0}function iu(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case it:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ic(t){let e="";return eg(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function id(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ic(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):n_(t,e,n))}function ip(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ig(t){this.Ga=0,this.j=[],this.l=new eX,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ip("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ip("baseRetryDelayMs",5e3,t),this.hb=ip("retryDelaySeedMs",1e4,t),this.eb=ip("forwardChannelMaxRetries",2,t),this.xa=ip("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nq(t&&t.concurrentRequestLimit),this.Ja=new n0,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function im(t){if(iv(t),3==t.H){var e=t.W++,n=nS(t.I);if(n_(n,"SID",t.K),n_(n,"RID",e),n_(n,"TYPE","terminate"),ib(t,n),(e=new na(t,t.l,e)).L=2,e.v=nD(nS(n)),n=!1,tH.navigator&&tH.navigator.sendBeacon)try{n=tH.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&tH.Image&&((new Image).src=e.v,n=!0),n||(e.g=iO(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ng(e)}ik(t)}function iy(t){t.g&&(iA(t),t.g.cancel(),t.g=null)}function iv(t){iy(t),t.u&&(tH.clearTimeout(t.u),t.u=null),iC(t),t.i.cancel(),t.m&&("number"==typeof t.m&&tH.clearTimeout(t.m),t.m=null)}function iw(t){if(!nK(t.i)&&!t.m){t.m=!0;var e=t.Na;eF||eB(),eV||(eF(),eV=!0),eU.add(e,t),t.C=0}}function iE(t,e){var n;n=e?e.m:t.W++;let i=nS(t.I);n_(i,"SID",t.K),n_(i,"RID",n),n_(i,"AID",t.V),ib(t,i),t.o&&t.s&&id(i,t.o,t.s),n=new na(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nX(t.i,n),nc(n,i,e)}function ib(t,e){t.na&&eg(t.na,function(t,n){n_(e,n,t)}),t.h&&nb({},function(t,n){n_(e,n,t)})}function iT(t,e,n){n=Math.min(t.j.length,n);var i=t.h?tQ(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){let t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=r[a].g,o=r[a].map;if(0>(n-=e))e=Math.max(0,r[a].g-100),s=!1;else try{!function(t,e,n){let i=n||"";try{nb(t,function(t,n){let r=t;tq(t)&&(r=eL(t)),e.push(i+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}(o,t,"req"+n+"_")}catch(t){i&&i(o)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function iI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;eF||eB(),eV||(eF(),eV=!0),eU.add(e,t),t.A=0}}function iS(t){return!t.g&&!t.u&&!(3<=t.A)&&(t.ba++,t.u=e5(tQ(t.Ma,t),iD(t,t.A)),t.A++,!0)}function iA(t){null!=t.B&&(tH.clearTimeout(t.B),t.B=null)}function ix(t){t.g=new na(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=nS(t.wa);n_(e,"RID","rpc"),n_(e,"SID",t.K),n_(e,"AID",t.V),n_(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&n_(e,"TO",t.qa),n_(e,"TYPE","xmlhttp"),ib(t,e),t.o&&t.s&&id(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=nD(nS(e)),n.s=null,n.S=!0,nf(n,t)}function iC(t){null!=t.v&&(tH.clearTimeout(t.v),t.v=null)}function i_(t,e){var n=null;if(t.g==e){iC(t),iA(t),t.g=null;var i=2}else{if(!nW(t.i,e))return;n=e.F,nY(t.i,e),i=1}if(0!=t.H){if(e.i){if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r,s=t.C;eR(i=e0(),new e4(i,n)),iw(t)}else iI(t)}else if(3==(s=e.o)||0==s&&0<e.ca||!(1==i&&(r=e,!(nQ(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=r.F.concat(t.j),!0):1!=t.H&&2!=t.H&&!(t.C>=(t.cb?0:t.eb))&&(t.m=e5(tQ(t.Na,t,r),iD(t,t.C)),t.C++,!0)))||2==i&&iS(t)))switch(n&&0<n.length&&((e=t.i).i=e.i.concat(n)),s){case 1:iN(t,5);break;case 4:iN(t,10);break;case 3:iN(t,6);break;default:iN(t,2)}}}function iD(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function iN(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=tQ(t.pb,t);n||(n=new nI("//www.google.com/images/cleardot.gif"),tH.location&&"http"==tH.location.protocol||nA(n,"https"),nD(n)),function(t,e){let n=new eX;if(tH.Image){let i=new Image;i.onload=tW(n1,n,i,"TestLoadImage: loaded",!0,e),i.onerror=tW(n1,n,i,"TestLoadImage: error",!1,e),i.onabort=tW(n1,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=tW(n1,n,i,"TestLoadImage: timeout",!1,e),tH.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(n.toString(),i)}else e6(2);t.H=0,t.h&&t.h.za(e),ik(t),iv(t)}function ik(t){if(t.H=0,t.ma=[],t.h){let e=nJ(t.i);(0!=e.length||0!=t.j.length)&&(t0(t.ma,e),t0(t.ma,t.j),t.i.i.length=0,tZ(t.j),t.j.length=0),t.h.ya()}}function iR(t,e,n){var i=n instanceof nI?nS(n):new nI(n);if(""!=i.g)e&&(i.g=e+"."+i.g),nx(i,i.m);else{var r=tH.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new nI(null);i&&nA(s,i),e&&(s.g=e),r&&nx(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&n_(i,n,e),n_(i,"VER",t.ra),ib(t,i),i}function iO(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new n7(n&&t.Ha&&!t.va?new n2({ob:!0}):t.va)).Oa(t.J),e}function iL(){}function iM(){if(t9&&!(10<=Number(el)))throw Error("Environmental error: no available transport.")}function iP(t,e){ek.call(this),this.g=new ig(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!t3(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!t3(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new iU(this)}function iF(t){ni.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(let n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function iV(){nr.call(this),this.status=1}function iU(t){this.g=t}function iB(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ij(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],a=e+(s^n&(r^s))+i[0]+0xd76aa478&0xffffffff;a=s+(r^(e=n+(a<<7&0xffffffff|a>>>25))&(n^r))+i[1]+0xe8c7b756&0xffffffff,a=r+(n^(s=e+(a<<12&0xffffffff|a>>>20))&(e^n))+i[2]+0x242070db&0xffffffff,a=n+(e^(r=s+(a<<17&0xffffffff|a>>>15))&(s^e))+i[3]+0xc1bdceee&0xffffffff,a=e+(s^(n=r+(a<<22&0xffffffff|a>>>10))&(r^s))+i[4]+0xf57c0faf&0xffffffff,a=s+(r^(e=n+(a<<7&0xffffffff|a>>>25))&(n^r))+i[5]+0x4787c62a&0xffffffff,a=r+(n^(s=e+(a<<12&0xffffffff|a>>>20))&(e^n))+i[6]+0xa8304613&0xffffffff,a=n+(e^(r=s+(a<<17&0xffffffff|a>>>15))&(s^e))+i[7]+0xfd469501&0xffffffff,a=e+(s^(n=r+(a<<22&0xffffffff|a>>>10))&(r^s))+i[8]+0x698098d8&0xffffffff,a=s+(r^(e=n+(a<<7&0xffffffff|a>>>25))&(n^r))+i[9]+0x8b44f7af&0xffffffff,a=r+(n^(s=e+(a<<12&0xffffffff|a>>>20))&(e^n))+i[10]+0xffff5bb1&0xffffffff,a=n+(e^(r=s+(a<<17&0xffffffff|a>>>15))&(s^e))+i[11]+0x895cd7be&0xffffffff,a=e+(s^(n=r+(a<<22&0xffffffff|a>>>10))&(r^s))+i[12]+0x6b901122&0xffffffff,a=s+(r^(e=n+(a<<7&0xffffffff|a>>>25))&(n^r))+i[13]+0xfd987193&0xffffffff,a=r+(n^(s=e+(a<<12&0xffffffff|a>>>20))&(e^n))+i[14]+0xa679438e&0xffffffff,a=n+(e^(r=s+(a<<17&0xffffffff|a>>>15))&(s^e))+i[15]+0x49b40821&0xffffffff,n=r+(a<<22&0xffffffff|a>>>10),a=e+(r^s&(n^r))+i[1]+0xf61e2562&0xffffffff,e=n+(a<<5&0xffffffff|a>>>27),a=s+(n^r&(e^n))+i[6]+0xc040b340&0xffffffff,s=e+(a<<9&0xffffffff|a>>>23),a=r+(e^n&(s^e))+i[11]+0x265e5a51&0xffffffff,r=s+(a<<14&0xffffffff|a>>>18),a=n+(s^e&(r^s))+i[0]+0xe9b6c7aa&0xffffffff,n=r+(a<<20&0xffffffff|a>>>12),a=e+(r^s&(n^r))+i[5]+0xd62f105d&0xffffffff,e=n+(a<<5&0xffffffff|a>>>27),a=s+(n^r&(e^n))+i[10]+0x2441453&0xffffffff,s=e+(a<<9&0xffffffff|a>>>23),a=r+(e^n&(s^e))+i[15]+0xd8a1e681&0xffffffff,r=s+(a<<14&0xffffffff|a>>>18),a=n+(s^e&(r^s))+i[4]+0xe7d3fbc8&0xffffffff,n=r+(a<<20&0xffffffff|a>>>12),a=e+(r^s&(n^r))+i[9]+0x21e1cde6&0xffffffff,e=n+(a<<5&0xffffffff|a>>>27),a=s+(n^r&(e^n))+i[14]+0xc33707d6&0xffffffff,s=e+(a<<9&0xffffffff|a>>>23),a=r+(e^n&(s^e))+i[3]+0xf4d50d87&0xffffffff,r=s+(a<<14&0xffffffff|a>>>18),a=n+(s^e&(r^s))+i[8]+0x455a14ed&0xffffffff,n=r+(a<<20&0xffffffff|a>>>12),a=e+(r^s&(n^r))+i[13]+0xa9e3e905&0xffffffff,e=n+(a<<5&0xffffffff|a>>>27),a=s+(n^r&(e^n))+i[2]+0xfcefa3f8&0xffffffff,s=e+(a<<9&0xffffffff|a>>>23),a=r+(e^n&(s^e))+i[7]+0x676f02d9&0xffffffff,r=s+(a<<14&0xffffffff|a>>>18),a=n+(s^e&(r^s))+i[12]+0x8d2a4c8a&0xffffffff,a=e+((n=r+(a<<20&0xffffffff|a>>>12))^r^s)+i[5]+0xfffa3942&0xffffffff,a=s+((e=n+(a<<4&0xffffffff|a>>>28))^n^r)+i[8]+0x8771f681&0xffffffff,a=r+((s=e+(a<<11&0xffffffff|a>>>21))^e^n)+i[11]+0x6d9d6122&0xffffffff,a=n+((r=s+(a<<16&0xffffffff|a>>>16))^s^e)+i[14]+0xfde5380c&0xffffffff,a=e+((n=r+(a<<23&0xffffffff|a>>>9))^r^s)+i[1]+0xa4beea44&0xffffffff,a=s+((e=n+(a<<4&0xffffffff|a>>>28))^n^r)+i[4]+0x4bdecfa9&0xffffffff,a=r+((s=e+(a<<11&0xffffffff|a>>>21))^e^n)+i[7]+0xf6bb4b60&0xffffffff,a=n+((r=s+(a<<16&0xffffffff|a>>>16))^s^e)+i[10]+0xbebfbc70&0xffffffff,a=e+((n=r+(a<<23&0xffffffff|a>>>9))^r^s)+i[13]+0x289b7ec6&0xffffffff,a=s+((e=n+(a<<4&0xffffffff|a>>>28))^n^r)+i[0]+0xeaa127fa&0xffffffff,a=r+((s=e+(a<<11&0xffffffff|a>>>21))^e^n)+i[3]+0xd4ef3085&0xffffffff,a=n+((r=s+(a<<16&0xffffffff|a>>>16))^s^e)+i[6]+0x4881d05&0xffffffff,a=e+((n=r+(a<<23&0xffffffff|a>>>9))^r^s)+i[9]+0xd9d4d039&0xffffffff,a=s+((e=n+(a<<4&0xffffffff|a>>>28))^n^r)+i[12]+0xe6db99e5&0xffffffff,a=r+((s=e+(a<<11&0xffffffff|a>>>21))^e^n)+i[15]+0x1fa27cf8&0xffffffff,a=n+((r=s+(a<<16&0xffffffff|a>>>16))^s^e)+i[2]+0xc4ac5665&0xffffffff,n=r+(a<<23&0xffffffff|a>>>9),a=e+(r^(n|~s))+i[0]+0xf4292244&0xffffffff,e=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(e|~r))+i[7]+0x432aff97&0xffffffff,s=e+(a<<10&0xffffffff|a>>>22),a=r+(e^(s|~n))+i[14]+0xab9423a7&0xffffffff,r=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(r|~e))+i[5]+0xfc93a039&0xffffffff,n=r+(a<<21&0xffffffff|a>>>11),a=e+(r^(n|~s))+i[12]+0x655b59c3&0xffffffff,e=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(e|~r))+i[3]+0x8f0ccc92&0xffffffff,s=e+(a<<10&0xffffffff|a>>>22),a=r+(e^(s|~n))+i[10]+0xffeff47d&0xffffffff,r=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(r|~e))+i[1]+0x85845dd1&0xffffffff,n=r+(a<<21&0xffffffff|a>>>11),a=e+(r^(n|~s))+i[8]+0x6fa87e4f&0xffffffff,e=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(e|~r))+i[15]+0xfe2ce6e0&0xffffffff,s=e+(a<<10&0xffffffff|a>>>22),a=r+(e^(s|~n))+i[6]+0xa3014314&0xffffffff,r=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(r|~e))+i[13]+0x4e0811a1&0xffffffff,n=r+(a<<21&0xffffffff|a>>>11),a=e+(r^(n|~s))+i[4]+0xf7537e82&0xffffffff,e=n+(a<<6&0xffffffff|a>>>26),a=s+(n^(e|~r))+i[11]+0xbd3af235&0xffffffff,s=e+(a<<10&0xffffffff|a>>>22),a=r+(e^(s|~n))+i[2]+0x2ad7d2bb&0xffffffff,r=s+(a<<15&0xffffffff|a>>>17),a=n+(s^(r|~e))+i[9]+0xeb86d391&0xffffffff,t.g[0]=t.g[0]+e&0xffffffff,t.g[1]=t.g[1]+(r+(a<<21&0xffffffff|a>>>11))&0xffffffff,t.g[2]=t.g[2]+r&0xffffffff,t.g[3]=t.g[3]+s&0xffffffff}function i$(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(tB=n7.prototype).Oa=function(t){this.M=t},tB.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():a.g(),this.C=this.u?nt(this.u):nt(a),this.g.onreadystatechange=tQ(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){ir(this,t);return}if(t=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let t of i.keys())n.set(t,i.get(t));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,a]of(i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=tH.FormData&&t instanceof tH.FormData,!(0<=tJ(ii,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;il(this),0<this.B&&((this.L=(s=this.g,t9&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=tQ(this.ua,this)):this.A=ez(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ir(this,t)}},tB.ua=function(){void 0!==t$&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eR(this,"timeout"),this.abort(8))},tB.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,eR(this,"complete"),eR(this,"abort"),io(this))},tB.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),io(this,!0)),n7.$.N.call(this)},tB.La=function(){this.s||(this.G||this.v||this.l?ia(this):this.kb())},tB.kb=function(){ia(this)},tB.isActive=function(){return!!this.g},tB.da=function(){try{return 2<ih(this)?this.g.status:-1}catch(t){return -1}},tB.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},tB.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),n9(e)}},tB.Ia=function(){return this.m},tB.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(tB=ig.prototype).ra=8,tB.H=1,tB.Na=function(t){if(this.m){if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let r=new na(this,this.l,t),s=this.s;if(this.U&&(s?ev(s=em(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break e}i=void 0}if(void 0===i)break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=iT(this,r,e),n_(n=nS(this.I),"RID",t),n_(n,"CVER",22),this.F&&n_(n,"X-HTTP-Session-Id",this.F),ib(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(ic(s)))+"&"+e:this.o&&id(n,this.o,s)),nX(this.i,r),this.bb&&n_(n,"TYPE","init"),this.P?(n_(n,"$req",e),n_(n,"SID","null"),r.aa=!0,nc(r,n,null)):nc(r,n,e),this.H=2}}else 3==this.H&&(t?iE(this,t):0==this.j.length||nK(this.i)||iE(this))}},tB.Ma=function(){if(this.u=null,ix(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=e5(tQ(this.jb,this),t)}},tB.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,e6(10),iy(this),ix(this))},tB.ib=function(){null!=this.v&&(this.v=null,iy(this),iS(this),e6(19))},tB.pb=function(t){t?(this.l.info("Successfully pinged google.com"),e6(2)):(this.l.info("Failed to ping google.com"),e6(1))},tB.isActive=function(){return!!this.h&&this.h.isActive(this)},(tB=iL.prototype).Ba=function(){},tB.Aa=function(){},tB.za=function(){},tB.ya=function(){},tB.isActive=function(){return!0},tB.Va=function(){},iM.prototype.g=function(t,e){return new iP(t,e)},tX(iP,ek),iP.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;e6(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=iR(t,null,t.Y),iw(t)},iP.prototype.close=function(){im(this.g)},iP.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=eL(t),t=n);e.j.push(new nz(e.fb++,t)),3==e.H&&iw(e)},iP.prototype.N=function(){this.g.h=null,delete this.j,im(this.g),delete this.g,iP.$.N.call(this)},tX(iF,ni),tX(iV,nr),tX(iU,iL),iU.prototype.Ba=function(){eR(this.g,"a")},iU.prototype.Aa=function(t){eR(this.g,new iF(t))},iU.prototype.za=function(t){eR(this.g,new iV)},iU.prototype.ya=function(){eR(this.g,"b")},tX(iB,function(){this.blockSize=-1}),iB.prototype.reset=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.i=this.h=0},iB.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)ij(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){ij(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){ij(this,i),r=0;break}}this.h=r,this.i+=e},iB.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var iH={};function iz(t){var e;return -128<=t&&128>t?(e=function(t){return new i$([0|t],0>t?-1:0)},Object.prototype.hasOwnProperty.call(iH,t)?iH[t]:iH[t]=e(t)):new i$([0|t],0>t?-1:0)}function iq(t){if(isNaN(t)||!isFinite(t))return iK;if(0>t)return iJ(iq(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=iG;return new i$(e,0)}var iG=0x100000000,iK=iz(0),iQ=iz(1),iW=iz(0x1000000);function iX(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function iY(t){return -1==t.h}function iJ(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new i$(n,~t.h).add(iQ)}function iZ(t,e){return t.add(iJ(e))}function i0(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function i1(t,e){this.g=t,this.h=e}function i2(t,e){if(iX(e))throw Error("division by zero");if(iX(t))return new i1(iK,iK);if(iY(t))return e=i2(iJ(t),e),new i1(iJ(e.g),iJ(e.h));if(iY(e))return e=i2(t,iJ(e)),new i1(iJ(e.g),e.h);if(30<t.g.length){if(iY(t)||iY(e))throw Error("slowDivide_ only works with positive integers.");for(var n=iQ,i=e;0>=i.X(t);)n=i3(n),i=i3(i);var r=i6(n,1),s=i6(i,1);for(i=i6(i,2),n=i6(n,2);!iX(i);){var a=s.add(i);0>=a.X(t)&&(r=r.add(n),s=a),i=i6(i,1),n=i6(n,1)}return e=iZ(t,r.R(e)),new i1(r,e)}for(r=iK;0<=t.X(e);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(t.ea()/e.ea())))/Math.LN2))?1:Math.pow(2,i-48),a=(s=iq(n)).R(e);iY(a)||0<a.X(t);)n-=i,a=(s=iq(n)).R(e);iX(s)&&(s=iQ),r=r.add(s),t=iZ(t,a)}return new i1(r,t)}function i3(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new i$(n,t.h)}function i6(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new i$(r,t.h)}(tB=i$.prototype).ea=function(){if(iY(this))return-iJ(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:iG+i)*e,e*=iG}return t},tB.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(iX(this))return"0";if(iY(this))return"-"+iJ(this).toString(t);for(var e=iq(Math.pow(t,6)),n=this,i="";;){var r=i2(n,e).g,s=((0<(n=iZ(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(iX(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},tB.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},tB.X=function(t){return iY(t=iZ(this,t))?-1:iX(t)?0:1},tB.abs=function(){return iY(this)?iJ(this):this},tB.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),a=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=a>>>16,s&=65535,a&=65535,n[r]=a<<16|s}return new i$(n,-0x80000000&n[n.length-1]?-1:0)},tB.R=function(t){if(iX(this)||iX(t))return iK;if(iY(this))return iY(t)?iJ(this).R(iJ(t)):iJ(iJ(this).R(t));if(iY(t))return iJ(this.R(iJ(t)));if(0>this.X(iW)&&0>t.X(iW))return iq(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,a=65535&this.D(i),o=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=a*l,i0(n,2*i+2*r),n[2*i+2*r+1]+=s*l,i0(n,2*i+2*r+1),n[2*i+2*r+1]+=a*o,i0(n,2*i+2*r+1),n[2*i+2*r+2]+=s*o,i0(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new i$(n,0)},tB.gb=function(t){return i2(this,t).h},tB.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new i$(n,this.h&t.h)},tB.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new i$(n,this.h|t.h)},tB.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new i$(n,this.h^t.h)},iM.prototype.createWebChannel=iM.prototype.g,iP.prototype.send=iP.prototype.u,iP.prototype.open=iP.prototype.m,iP.prototype.close=iP.prototype.close,e8.NO_ERROR=0,e8.TIMEOUT=8,e8.HTTP_ERROR=6,e9.COMPLETE="complete",ne.EventType=nn,nn.OPEN="a",nn.CLOSE="b",nn.ERROR="c",nn.MESSAGE="d",ek.prototype.listen=ek.prototype.O,n7.prototype.listenOnce=n7.prototype.P,n7.prototype.getLastError=n7.prototype.Sa,n7.prototype.getLastErrorCode=n7.prototype.Ia,n7.prototype.getStatus=n7.prototype.da,n7.prototype.getResponseJson=n7.prototype.Wa,n7.prototype.getResponseText=n7.prototype.ja,n7.prototype.send=n7.prototype.ha,n7.prototype.setWithCredentials=n7.prototype.Oa,iB.prototype.digest=iB.prototype.l,iB.prototype.reset=iB.prototype.reset,iB.prototype.update=iB.prototype.j,i$.prototype.add=i$.prototype.add,i$.prototype.multiply=i$.prototype.R,i$.prototype.modulo=i$.prototype.gb,i$.prototype.compare=i$.prototype.X,i$.prototype.toNumber=i$.prototype.ea,i$.prototype.toString=i$.prototype.toString,i$.prototype.getBits=i$.prototype.D,i$.fromNumber=iq,i$.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return iJ(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=iq(Math.pow(n,8)),r=iK,s=0;s<e.length;s+=8){var a=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+a),n);8>a?(a=iq(Math.pow(n,a)),r=r.R(a).add(iq(o))):r=(r=r.R(i)).add(iq(o))}return r};var i4=tj.createWebChannelTransport=function(){return new iM},i5=tj.getStatEventTarget=function(){return e0()},i8=tj.ErrorCode=e8,i9=tj.EventType=e9,i7=tj.Event=eJ,rt=tj.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},re=tj.FetchXmlHttpFactory=n2,rn=tj.WebChannel=ne,ri=tj.XhrIo=n7;tj.Md5=iB;var rr=tj.Integer=i$;const rs="@firebase/firestore";/**
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
 */class ra{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ra.UNAUTHENTICATED=new ra(null),ra.GOOGLE_CREDENTIALS=new ra("google-credentials-uid"),ra.FIRST_PARTY=new ra("first-party-uid"),ra.MOCK_USER=new ra("mock-user");/**
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
 */let ro="9.23.0";/**
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
 */const rl=new J("@firebase/firestore");function rh(){return rl.logLevel}function ru(t,...e){if(rl.logLevel<=tU.DEBUG){let n=e.map(rd);rl.debug(`Firestore (${ro}): ${t}`,...n)}}function rc(t,...e){if(rl.logLevel<=tU.ERROR){let n=e.map(rd);rl.error(`Firestore (${ro}): ${t}`,...n)}}function rf(t,...e){if(rl.logLevel<=tU.WARN){let n=e.map(rd);rl.warn(`Firestore (${ro}): ${t}`,...n)}}function rd(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(e){return t}}/**
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
 */function rp(t="Unexpected state"){let e=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: `+t;throw rc(e),Error(e)}/**
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
 */const rg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class rm extends F{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ry{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class rv{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ra.UNAUTHENTICATED))}shutdown(){}}class rE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rb{constructor(t){this.t=t,this.currentUser=ra.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i,i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve(),r=new ry;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ry,t.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},a=t=>{ru("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>a(t)),setTimeout(()=>{if(!this.auth){let t=this.t.getImmediate({optional:!0});t?a(t):(ru("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ry)}},0),s()}getToken(){let t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(ru("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?("string"==typeof e.accessToken||rp(),new rv(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let t=this.auth&&this.auth.getUid();return null===t||"string"==typeof t||rp(),new ra(t)}}class rT{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ra.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class rI{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new rT(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(ra.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rS{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rA{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){let n=t=>{null!=t.error&&ru("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);let n=t.token!==this.T;return this.T=t.token,ru("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};let i=t=>{ru("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){let t=this.I.getImmediate({optional:!0});t?i(t):ru("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?("string"==typeof t.token||rp(),this.T=t.token,new rS(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class rx{static A(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";for(;n.length<20;){let i=/**
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
 */function(t){let e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(40);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let t=0;t<40;t++)n[t]=Math.floor(256*Math.random());return n}(0);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function rC(t,e){return t<e?-1:t>e?1:0}function r_(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}/**
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
 */class rD{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0||e>=1e9)throw new rm(rg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-0xe7791f700||t>=0x3afff44180)throw new rm(rg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rD.fromMillis(Date.now())}static fromDate(t){return rD.fromMillis(t.getTime())}static fromMillis(t){let e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new rD(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rC(this.nanoseconds,t.nanoseconds):rC(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class rN{constructor(t){this.timestamp=t}static fromTimestamp(t){return new rN(t)}static min(){return new rN(new rD(0,0))}static max(){return new rN(new rD(0x3afff4417f,0x3b9ac9ff))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class rk{constructor(t,e,n){void 0===e?e=0:e>t.length&&rp(),void 0===n?n=t.length-e:n>t.length-e&&rp(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===rk.comparator(this,t)}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof rk?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let n=Math.min(t.length,e.length);for(let i=0;i<n;i++){let n=t.get(i),r=e.get(i);if(n<r)return -1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class rR extends rk{construct(t,e,n){return new rR(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){let e=[];for(let n of t){if(n.indexOf("//")>=0)throw new rm(rg.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new rR(e)}static emptyPath(){return new rR([])}}const rO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rL extends rk{construct(t,e,n){return new rL(t,e,n)}static isValidIdentifier(t){return rO.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rL.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new rL(["__name__"])}static fromServerFormat(t){let e=[],n="",i=0,r=()=>{if(0===n.length)throw new rm(rg.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""},s=!1;for(;i<t.length;){let e=t[i];if("\\"===e){if(i+1===t.length)throw new rm(rg.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new rm(rg.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?s=!s:"."!==e||s?n+=e:r(),i++}if(r(),s)throw new rm(rg.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rL(e)}static emptyPath(){return new rL([])}}/**
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
 */class rM{constructor(t){this.path=t}static fromPath(t){return new rM(rR.fromString(t))}static fromName(t){return new rM(rR.fromString(t).popFirst(5))}static empty(){return new rM(rR.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===rR.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return rR.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new rM(new rR(t.slice()))}}class rP{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new rP(rN.min(),rM.empty(),-1)}static max(){return new rP(rN.max(),rM.empty(),-1)}}class rF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function rV(t){if(t.code!==rg.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;ru("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class rU{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rp(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new rU((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{let e=t();return e instanceof rU?e:rU.resolve(e)}catch(t){return rU.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):rU.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):rU.reject(e)}static resolve(t){return new rU((e,n)=>{e(t)})}static reject(t){return new rU((e,n)=>{n(t)})}static waitFor(t){return new rU((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=rU.resolve(!1);for(let n of t)e=e.next(t=>t?rU.resolve(t):n());return e}static forEach(t,e){let n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}static mapArray(t,e){return new rU((n,i)=>{let r=t.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;e(t[l]).next(t=>{s[l]=t,++a===r&&n(s)},t=>i(t))}})}static doWhile(t,e){return new rU((n,i)=>{let r=()=>{!0===t()?e().next(()=>{r()},i):n()};r()})}}function rB(t){return"IndexedDbTransactionError"===t.name}/**
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
 */class rj{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this.ut&&this.ut(t),t}}function r$(t){return 0===t&&1/t==-1/0}/**
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
 */function rH(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rz(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rq(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}rj.ct=-1;/**
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
 */class rG{constructor(t,e){this.comparator=t,this.root=e||rQ.EMPTY}insert(t,e){return new rG(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rQ.BLACK,null,null))}remove(t){return new rG(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rQ.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){let n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){let t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rK(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rK(this.root,t,this.comparator,!1)}getReverseIterator(){return new rK(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rK(this.root,t,this.comparator,!0)}}class rK{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rQ{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:rQ.RED,this.left=null!=i?i:rQ.EMPTY,this.right=null!=r?r:rQ.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new rQ(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this,r=n(t,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rQ.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}remove(t,e){let n,i=this;if(0>e(t,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return rQ.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,rQ.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,rQ.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw rp();let t=this.left.check();if(t!==this.right.check())throw rp();return t+(this.isRed()?0:1)}}rQ.EMPTY=null,rQ.RED=!0,rQ.BLACK=!1,rQ.EMPTY=new class{constructor(){this.size=0}get key(){throw rp()}get value(){throw rp()}get color(){throw rp()}get left(){throw rp()}get right(){throw rp()}copy(t,e,n,i,r){return this}insert(t,e,n){return new rQ(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rW{constructor(t){this.comparator=t,this.data=new rG(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new rX(this.data.getIterator())}getIteratorFrom(t){return new rX(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof rW)||this.size!==t.size)return!1;let e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){let t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new rW(this.comparator);return e.data=t,e}}class rX{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rY{constructor(t){this.fields=t,t.sort(rL.comparator)}static empty(){return new rY([])}unionWith(t){let e=new rW(rL.comparator);for(let t of this.fields)e=e.add(t);for(let n of t)e=e.add(n);return new rY(e.toArray())}covers(t){for(let e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return r_(this.fields,t.fields,(t,e)=>t.isEqual(e))}}/**
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
 */class rJ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rZ{constructor(t){this.binaryString=t}static fromBase64String(t){return new rZ(function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new rJ("Invalid base64 string: "+t):t}}(t))}static fromUint8Array(t){return new rZ(function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t))}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rC(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rZ.EMPTY_BYTE_STRING=new rZ("");const r0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function r1(t){if(t||rp(),"string"==typeof t){let e=0,n=r0.exec(t);if(n||rp(),n[1]){let t=n[1];e=Number(t=(t+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(t).getTime()/1e3),nanos:e}}return{seconds:r2(t.seconds),nanos:r2(t.nanos)}}function r2(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function r3(t){return"string"==typeof t?rZ.fromBase64String(t):rZ.fromUint8Array(t)}/**
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
 */function r6(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function r4(t){let e=r1(t.mapValue.fields.__local_write_time__.timestampValue);return new rD(e.seconds,e.nanos)}/**
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
 */class r5{constructor(t,e,n,i,r,s,a,o,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class r8{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new r8("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof r8&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const r9={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function r7(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?r6(t)?4:sh(t)?0x1fffffffffffff:10:rp()}function st(t,e){if(t===e)return!0;let n=r7(t);if(n!==r7(e))return!1;switch(n){case 0:case 0x1fffffffffffff:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return r4(t).isEqual(r4(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;let n=r1(t.timestampValue),i=r1(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r3(t.bytesValue).isEqual(r3(e.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return r2(t.geoPointValue.latitude)===r2(e.geoPointValue.latitude)&&r2(t.geoPointValue.longitude)===r2(e.geoPointValue.longitude);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return r2(t.integerValue)===r2(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){let n=r2(t.doubleValue),i=r2(e.doubleValue);return n===i?r$(n)===r$(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return r_(t.arrayValue.values||[],e.arrayValue.values||[],st);case 10:return function(t,e){let n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(rH(n)!==rH(i))return!1;for(let t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!st(n[t],i[t])))return!1;return!0}(t,e);default:return rp()}}function se(t,e){return void 0!==(t.values||[]).find(t=>st(t,e))}function sn(t,e){if(t===e)return 0;let n=r7(t),i=r7(e);if(n!==i)return rC(n,i);switch(n){case 0:case 0x1fffffffffffff:return 0;case 1:return rC(t.booleanValue,e.booleanValue);case 2:return function(t,e){let n=r2(t.integerValue||t.doubleValue),i=r2(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return si(t.timestampValue,e.timestampValue);case 4:return si(r4(t),r4(e));case 5:return rC(t.stringValue,e.stringValue);case 6:return function(t,e){let n=r3(t),i=r3(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){let n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){let e=rC(n[t],i[t]);if(0!==e)return e}return rC(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){let n=rC(r2(t.latitude),r2(e.latitude));return 0!==n?n:rC(r2(t.longitude),r2(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){let n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){let e=sn(n[t],i[t]);if(e)return e}return rC(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===r9.mapValue&&e===r9.mapValue)return 0;if(t===r9.mapValue)return 1;if(e===r9.mapValue)return -1;let n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){let e=rC(i[t],s[t]);if(0!==e)return e;let a=sn(n[i[t]],r[s[t]]);if(0!==a)return a}return rC(i.length,s.length)}(t.mapValue,e.mapValue);default:throw rp()}}function si(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rC(t,e);let n=r1(t),i=r1(e),r=rC(n.seconds,i.seconds);return 0!==r?r:rC(n.nanos,i.nanos)}function sr(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){let e=r1(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?r3(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,rM.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(let i of t.values||[])n?n=!1:e+=",",e+=sr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){let e=Object.keys(t.fields||{}).sort(),n="{",i=!0;for(let r of e)i?i=!1:n+=",",n+=`${r}:${sr(t.fields[r])}`;return n+"}"}(t.mapValue):rp()}function ss(t){return!!t&&"integerValue"in t}function sa(t){return!!t&&"arrayValue"in t}function so(t){return!!t&&"mapValue"in t}function sl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return rz(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=sl(n)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sh(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class su{constructor(t){this.value=t}static empty(){return new su({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!so(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sl(e)}setAll(t){let e=rL.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){let t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=sl(t):i.push(r.lastSegment())});let r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){let e=this.field(t.popLast());so(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return st(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];so(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){for(let i of(rz(e,(e,n)=>t[e]=n),n))delete t[i]}clone(){return new su(sl(this.value))}}/**
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
 */class sc{constructor(t,e,n,i,r,s,a){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}static newInvalidDocument(t){return new sc(t,0,rN.min(),rN.min(),rN.min(),su.empty(),0)}static newFoundDocument(t,e,n,i){return new sc(t,1,e,rN.min(),n,i,0)}static newNoDocument(t,e){return new sc(t,2,e,rN.min(),rN.min(),su.empty(),0)}static newUnknownDocument(t,e){return new sc(t,3,e,rN.min(),rN.min(),su.empty(),2)}convertToFoundDocument(t,e){return this.createTime.isEqual(rN.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=su.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=su.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rN.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof sc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sf{constructor(t,e){this.position=t,this.inclusive=e}}function sd(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){let s=e[r],a=t.position[r];if(i=s.field.isKeyField()?rM.comparator(rM.fromName(a.referenceValue),n.key):sn(a,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function sp(t,e){if(null===t)return null===e;if(null===e||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!st(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sg{constructor(t,e="asc"){this.field=t,this.dir=e}}/**
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
 */class sm{}class sy extends sm{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new sb(t,e,n):"array-contains"===e?new sA(t,n):"in"===e?new sx(t,n):"not-in"===e?new sC(t,n):"array-contains-any"===e?new s_(t,n):new sy(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new sT(t,n):new sI(t,n)}matches(t){let e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(sn(e,this.value)):null!==e&&r7(this.value)===r7(e)&&this.matchesComparison(sn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return rp()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class sv extends sm{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new sv(t,e)}matches(t){return sw(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let t=this.ft(t=>t.isInequality());return null!==t?t.field:null}ft(t){for(let e of this.getFlattenedFilters())if(t(e))return e;return null}}function sw(t){return"and"===t.op}function sE(t){for(let e of t.filters)if(e instanceof sv)return!1;return!0}class sb extends sy{constructor(t,e,n){super(t,e,n),this.key=rM.fromName(n.referenceValue)}matches(t){let e=rM.comparator(t.key,this.key);return this.matchesComparison(e)}}class sT extends sy{constructor(t,e){super(t,"in",e),this.keys=sS("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class sI extends sy{constructor(t,e){super(t,"not-in",e),this.keys=sS("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function sS(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>rM.fromName(t.referenceValue))}class sA extends sy{constructor(t,e){super(t,"array-contains",e)}matches(t){let e=t.data.field(this.field);return sa(e)&&se(e.arrayValue,this.value)}}class sx extends sy{constructor(t,e){super(t,"in",e)}matches(t){let e=t.data.field(this.field);return null!==e&&se(this.value.arrayValue,e)}}class sC extends sy{constructor(t,e){super(t,"not-in",e)}matches(t){if(se(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let e=t.data.field(this.field);return null!==e&&!se(this.value.arrayValue,e)}}class s_ extends sy{constructor(t,e){super(t,"array-contains-any",e)}matches(t){let e=t.data.field(this.field);return!(!sa(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>se(this.value.arrayValue,t))}}/**
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
 */class sD{constructor(t,e=null,n=[],i=[],r=null,s=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.dt=null}}function sN(t,e=null,n=[],i=[],r=null,s=null,a=null){return new sD(t,e,n,i,r,s,a)}function sk(t){if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(t=>(function t(e){if(e instanceof sy)return e.field.canonicalString()+e.op.toString()+sr(e.value);if(sE(e)&&sw(e))return e.filters.map(e=>t(e)).join(",");{let n=e.filters.map(e=>t(e)).join(",");return`${e.op}(${n})`}})(t)).join(","),e+="|ob:",e+=t.orderBy.map(t=>t.field.canonicalString()+t.dir).join(","),null==t.limit||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>sr(t)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>sr(t)).join(",")),t.dt=e}return t.dt}function sR(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++){var n,i;if(n=t.orderBy[r],i=e.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!function t(e,n){return e instanceof sy?n instanceof sy&&e.op===n.op&&e.field.isEqual(n.field)&&st(e.value,n.value):e instanceof sv?n instanceof sv&&e.op===n.op&&e.filters.length===n.filters.length&&e.filters.reduce((e,i,r)=>e&&t(i,n.filters[r]),!0):void rp()}(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sp(t.startAt,e.startAt)&&sp(t.endAt,e.endAt)}/**
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
 */class sO{constructor(t,e=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}function sL(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function sM(t){if(null===t.wt){t.wt=[];let e=function(t){for(let e of t.filters){let t=e.getFirstInequalityField();if(null!==t)return t}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)e.isKeyField()||t.wt.push(new sg(e)),t.wt.push(new sg(rL.keyField(),"asc"));else{let e=!1;for(let n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new sg(rL.keyField(),e))}}}return t.wt}function sP(t){if(!t._t){if("F"===t.limitType)t._t=sN(t.path,t.collectionGroup,sM(t),t.filters,t.limit,t.startAt,t.endAt);else{let e=[];for(let n of sM(t)){let t="desc"===n.dir?"asc":"desc";e.push(new sg(n.field,t))}let n=t.endAt?new sf(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new sf(t.startAt.position,t.startAt.inclusive):null;t._t=sN(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}return t._t}function sF(t,e,n){return new sO(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sV(t,e){return sR(sP(t),sP(e))&&t.limitType===e.limitType}function sU(t){return`${sk(sP(t))}|lt:${t.limitType}`}function sB(t){var e;let n;return`Query(target=${n=(e=sP(t)).path.canonicalString(),null!==e.collectionGroup&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(t=>(function t(e){return e instanceof sy?`${e.field.canonicalString()} ${e.op} ${sr(e.value)}`:e instanceof sv?e.op.toString()+" {"+e.getFilters().map(t).join(" ,")+"}":"Filter"})(t)).join(", ")}]`),null==e.limit||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(t=>`${t.field.canonicalString()} (${t.dir})`).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(t=>sr(t)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(t=>sr(t)).join(",")),`Target(${n})`}; limitType=${t.limitType})`}function sj(t,e){return e.isFoundDocument()&&function(t,e){let n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):rM.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(let n of sM(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(let n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(!t.startAt||!!function(t,e,n){let i=sd(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,sM(t),e))&&(!t.endAt||!!function(t,e,n){let i=sd(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,sM(t),e))}/**
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
 */class s${constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n){for(let[e,i]of n)if(this.equalsFn(e,t))return i}}has(t){return void 0!==this.get(t)}set(t,e){let n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rz(this.inner,(e,n)=>{for(let[e,i]of n)t(e,i)})}isEmpty(){return rq(this.inner)}size(){return this.innerSize}}/**
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
 */const sH=new rG(rM.comparator),sz=new rG(rM.comparator);function sq(...t){let e=sz;for(let n of t)e=e.insert(n.key,n);return e}function sG(t){let e=sz;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function sK(){return new s$(t=>t.toString(),(t,e)=>t.isEqual(e))}const sQ=new rG(rM.comparator),sW=new rW(rM.comparator);function sX(...t){let e=sW;for(let n of t)e=e.add(n);return e}const sY=new rW(rC);/**
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
 */function sJ(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:r$(e)?"-0":e}}function sZ(t){return{integerValue:""+t}}function s0(t,e){return"number"==typeof e&&Number.isInteger(e)&&!r$(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER?sZ(e):sJ(t,e)}/**
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
 */class s1{constructor(){this._=void 0}}function s2(t,e){return t instanceof s9?ss(e)||e&&"doubleValue"in e?e:{integerValue:0}:null}class s3 extends s1{}class s6 extends s1{constructor(t){super(),this.elements=t}}function s4(t,e){let n=at(e);for(let e of t.elements)n.some(t=>st(t,e))||n.push(e);return{arrayValue:{values:n}}}class s5 extends s1{constructor(t){super(),this.elements=t}}function s8(t,e){let n=at(e);for(let e of t.elements)n=n.filter(t=>!st(t,e));return{arrayValue:{values:n}}}class s9 extends s1{constructor(t,e){super(),this.serializer=t,this.gt=e}}function s7(t){return r2(t.integerValue||t.doubleValue)}function at(t){return sa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class ae{constructor(t,e){this.field=t,this.transform=e}}class an{constructor(t,e){this.version=t,this.transformResults=e}}class ai{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ai}static exists(t){return new ai(void 0,t)}static updateTime(t){return new ai(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ar(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class as{}function aa(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ap(t.key,ai.none()):new ah(t.key,t.data,ai.none());{let n=t.data,i=su.empty(),r=new rW(rL.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new au(t.key,i,new rY(r.toArray()),ai.none())}}function ao(t,e,n,i){return t instanceof ah?function(t,e,n,i){if(!ar(t.precondition,e))return n;let r=t.value.clone(),s=ad(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof au?function(t,e,n,i){if(!ar(t.precondition,e))return n;let r=ad(t.fieldTransforms,i,e),s=e.data;return(s.setAll(ac(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,i):ar(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}function al(t,e){var n,i;return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&r_(n,i,(t,e)=>{var n,i;return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof s6&&i instanceof s6||n instanceof s5&&i instanceof s5?r_(n.elements,i.elements,st):n instanceof s9&&i instanceof s9?st(n.gt,i.gt):n instanceof s3&&i instanceof s3)})))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ah extends as{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class au extends as{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ac(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=t.data.field(n);e.set(n,i)}}),e}function af(t,e,n){var i;let r=new Map;t.length===n.length||rp();for(let s=0;s<n.length;s++){let a=t[s],o=a.transform,l=e.data.field(a.field);r.set(a.field,(i=n[s],o instanceof s6?s4(o,l):o instanceof s5?s8(o,l):i))}return r}function ad(t,e,n){let i=new Map;for(let r of t){let t=r.transform,s=n.data.field(r.field);i.set(r.field,t instanceof s3?function(t,e){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&r6(e)&&(e=function t(e){let n=e.mapValue.fields.__previous_value__;return r6(n)?t(n):n}(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(e,s):t instanceof s6?s4(t,s):t instanceof s5?s8(t,s):function(t,e){let n=s2(t,e),i=s7(n)+s7(t.gt);return ss(n)&&ss(t.gt)?sZ(i):sJ(t.serializer,i)}(t,s))}return i}class ap extends as{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ag extends as{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class am{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){let n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){let r=this.mutations[e];if(r.key.isEqual(t.key)){var i;i=n[e],r instanceof ah?function(t,e,n){let i=t.value.clone(),r=af(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,t,i):r instanceof au?function(t,e,n){if(!ar(t.precondition,e))return void e.convertToUnknownDocument(n.version);let i=af(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(ac(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,t,i):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,i)}}}applyToLocalView(t,e){for(let n of this.baseMutations)n.key.isEqual(t.key)&&(e=ao(n,t,e,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(t.key)&&(e=ao(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){let n=sK();return this.mutations.forEach(i=>{let r=t.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields),o=aa(s,a=e.has(i.key)?null:a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(rN.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),sX())}isEqual(t){return this.batchId===t.batchId&&r_(this.mutations,t.mutations,(t,e)=>al(t,e))&&r_(this.baseMutations,t.baseMutations,(t,e)=>al(t,e))}}class ay{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){t.mutations.length===n.length||rp();let i=sQ,r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new ay(t,e,n,i)}}/**
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
 */class av{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}(l=o||(o={}))[l.OK=0]="OK",l[l.CANCELLED=1]="CANCELLED",l[l.UNKNOWN=2]="UNKNOWN",l[l.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",l[l.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",l[l.NOT_FOUND=5]="NOT_FOUND",l[l.ALREADY_EXISTS=6]="ALREADY_EXISTS",l[l.PERMISSION_DENIED=7]="PERMISSION_DENIED",l[l.UNAUTHENTICATED=16]="UNAUTHENTICATED",l[l.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",l[l.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",l[l.ABORTED=10]="ABORTED",l[l.OUT_OF_RANGE=11]="OUT_OF_RANGE",l[l.UNIMPLEMENTED=12]="UNIMPLEMENTED",l[l.INTERNAL=13]="INTERNAL",l[l.UNAVAILABLE=14]="UNAVAILABLE",l[l.DATA_LOSS=15]="DATA_LOSS",new rr([0xffffffff,0xffffffff],0);class aw{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function aE(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ab(t){return t||rp(),rN.fromTimestamp(function(t){let e=r1(t);return new rD(e.seconds,e.nanos)}(t))}function aT(t,e){return new rR(["projects",t.projectId,"databases",t.database]).child("documents").child(e).canonicalString()}function aI(t,e){return aT(t.databaseId,e.path)}function aS(t,e,n){return{name:aI(t,e),fields:n.value.mapValue.fields}}function aA(t){return rL.fromServerFormat(t.fieldPath)}/**
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
 */class ax{constructor(t){this.fe=t}}/**
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
 */class aC{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(r2(t.integerValue));else if("doubleValue"in t){let n=r2(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),r$(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(r3(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){let n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?sh(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):rp()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){let n=t.fields||{};for(let t of(this.ye(e,55),Object.keys(n)))this.Te(t,e),this.me(n[t],e)}Pe(t,e){let n=t.values||[];for(let t of(this.ye(e,50),n))this.me(t,e)}ve(t,e){this.ye(e,37),rM.fromName(t).path.forEach(t=>{this.ye(e,60),this.be(t,e)})}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}aC.Ve=new aC;/**
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
 */class a_{constructor(){this.rn=new aD}addToCollectionParentIndex(t,e){return this.rn.add(e),rU.resolve()}getCollectionParents(t,e){return rU.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return rU.resolve()}deleteFieldIndex(t,e){return rU.resolve()}getDocumentsMatchingTarget(t,e){return rU.resolve(null)}getIndexType(t,e){return rU.resolve(0)}getFieldIndexes(t,e){return rU.resolve([])}getNextCollectionGroupToUpdate(t){return rU.resolve(null)}getMinOffset(t,e){return rU.resolve(rP.min())}getMinOffsetFromCollectionGroup(t,e){return rU.resolve(rP.min())}updateCollectionGroup(t,e,n){return rU.resolve()}updateIndexEntries(t,e){return rU.resolve()}}class aD{constructor(){this.index={}}add(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new rW(rR.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new rW(rR.comparator)).toArray()}}new Uint8Array(0);class aN{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new aN(t,aN.DEFAULT_COLLECTION_PERCENTILE,aN.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */aN.DEFAULT_COLLECTION_PERCENTILE=10,aN.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,aN.DEFAULT=new aN(0x2800000,aN.DEFAULT_COLLECTION_PERCENTILE,aN.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),aN.DISABLED=new aN(-1,0,0);/**
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
 */class ak{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new ak(0)}static Mn(){return new ak(-1)}}/**
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
 */class aR{constructor(){this.changes=new s$(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,sc.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();let n=this.changes.get(e);return void 0!==n?rU.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class aO{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class aL{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&ao(n.mutation,t,rY.empty(),rD.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,sX()).next(()=>e))}getLocalViewOfDocuments(t,e,n=sX()){let i=sK();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(t=>{let e=sq();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){let n=sK();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,sX()))}populateOverlays(t,e,n){let i=[];return n.forEach(t=>{e.has(t)||i.push(t)}),this.documentOverlayCache.getOverlays(t,i).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,i){let r=sH,s=sK(),a=sK();return e.forEach((t,e)=>{let a=n.get(e.key);i.has(e.key)&&(void 0===a||a.mutation instanceof au)?r=r.insert(e.key,e):void 0!==a?(s.set(e.key,a.mutation.getFieldMask()),ao(a.mutation,e,a.mutation.getFieldMask(),rD.now())):s.set(e.key,rY.empty())}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return a.set(t,new aO(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(t,e){let n=sK(),i=new rG((t,e)=>t-e),r=sX();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(let r of t)r.keys().forEach(t=>{let s=e.get(t);if(null===s)return;let a=n.get(t)||rY.empty();a=r.applyToLocalView(s,a),n.set(t,a);let o=(i.get(r.batchId)||sX()).add(t);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,h=sK();l.forEach(t=>{if(!r.has(t)){let i=aa(e.get(t),n.get(t));null!==i&&h.set(t,i),r=r.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,o,h))}return rU.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return rM.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):null!==e.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):rU.resolve(sK()),a=-1,o=r;return s.next(e=>rU.forEach(e,(e,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(e)?rU.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{o=o.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,o,e,sX())).next(t=>({batchId:a,changes:sG(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new rM(e)).next(t=>{let e=sq();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){let i=e.collectionGroup,r=sq();return this.indexManager.getCollectionParents(t,i).next(s=>rU.forEach(s,s=>{let a=new sO(s.child(i),null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt);return this.getDocumentsMatchingCollectionQuery(t,a,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i))).next(t=>{i.forEach((e,n)=>{let i=n.getKey();null===t.get(i)&&(t=t.insert(i,sc.newInvalidDocument(i)))});let n=sq();return t.forEach((t,r)=>{let s=i.get(t);void 0!==s&&ao(s.mutation,r,rY.empty(),rD.now()),sj(e,r)&&(n=n.insert(t,r))}),n})}}/**
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
 */class aM{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return rU.resolve(this.cs.get(e))}saveBundleMetadata(t,e){return this.cs.set(e.id,{id:e.id,version:e.version,createTime:ab(e.createTime)}),rU.resolve()}getNamedQuery(t,e){return rU.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,{name:e.name,query:function(t){let e=function(t){var e;let n,i=function(t){let e=function(t){let e=rR.fromString(t);return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)||rp(),e}(t);return 4===e.length?rR.emptyPath():(e.length>4&&"documents"===e.get(4)||rp(),e.popFirst(5))}(t.parent),r=t.structuredQuery,s=r.from?r.from.length:0,a=null;if(s>0){1===s||rp();let t=r.from[0];t.allDescendants?a=t.collectionId:i=i.child(t.collectionId)}let o=[];r.where&&(o=function(t){var e;let n=function t(e){return void 0!==e.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":let e=aA(t.unaryFilter.field);return sy.create(e,"==",{doubleValue:NaN});case"IS_NULL":let n=aA(t.unaryFilter.field);return sy.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=aA(t.unaryFilter.field);return sy.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let r=aA(t.unaryFilter.field);return sy.create(r,"!=",{nullValue:"NULL_VALUE"});default:return rp()}}(e):void 0!==e.fieldFilter?sy.create(aA(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return rp()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?sv.create(e.compositeFilter.filters.map(e=>t(e)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return rp()}}(e.compositeFilter.op)):rp()}(t);return n instanceof sv&&sE(e=n)&&sw(e)?n.getFilters():[n]}(r.where));let l=[];r.orderBy&&(l=r.orderBy.map(t=>new sg(aA(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))));let h=null;r.limit&&(h=null==(n="object"==typeof(e=r.limit)?e.value:e)?null:n);let u=null;r.startAt&&(u=function(t){let e=!!t.before;return new sf(t.values||[],e)}(r.startAt));let c=null;return r.endAt&&(c=function(t){let e=!t.before;return new sf(t.values||[],e)}(r.endAt)),new sO(i,a,l,o,h,"F",u,c)}({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?sF(e,e.limit,"L"):e}(e.bundledQuery),readTime:ab(e.readTime)}),rU.resolve()}}/**
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
 */class aP{constructor(){this.overlays=new rG(rM.comparator),this.ls=new Map}getOverlay(t,e){return rU.resolve(this.overlays.get(e))}getOverlays(t,e){let n=sK();return rU.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,i)=>{this.we(t,e,i)}),rU.resolve()}removeOverlaysForBatchId(t,e,n){let i=this.ls.get(n);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.ls.delete(n)),rU.resolve()}getOverlaysForCollection(t,e,n){let i=sK(),r=e.length+1,s=new rM(e.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let t=a.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return rU.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new rG((t,e)=>t-e),s=this.overlays.getIterator();for(;s.hasNext();){let t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=sK(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}let a=sK(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((t,e)=>a.set(t,e)),!(a.size()>=i)););return rU.resolve(a)}we(t,e,n){let i=this.overlays.get(n.key);if(null!==i){let t=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new av(e,n));let r=this.ls.get(e);void 0===r&&(r=sX(),this.ls.set(e,r)),this.ls.set(e,r.add(n.key))}}/**
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
 */class aF{constructor(){this.fs=new rW(aV.ds),this.ws=new rW(aV._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){let n=new aV(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.ys(new aV(t,e))}ps(t,e){t.forEach(t=>this.removeReference(t,e))}Is(t){let e=new rM(new rR([])),n=new aV(e,t),i=new aV(e,t+1),r=[];return this.ws.forEachInRange([n,i],t=>{this.ys(t),r.push(t.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){let e=new rM(new rR([])),n=new aV(e,t),i=new aV(e,t+1),r=sX();return this.ws.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){let e=new aV(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class aV{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return rM.comparator(t.key,e.key)||rC(t.As,e.As)}static _s(t,e){return rC(t.As,e.As)||rM.comparator(t.key,e.key)}}/**
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
 */class aU{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new rW(aV.ds)}checkEmpty(t){return rU.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){let r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new am(r,e,n,i);for(let e of(this.mutationQueue.push(s),i))this.Rs=this.Rs.add(new aV(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return rU.resolve(s)}lookupMutationBatch(t,e){return rU.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){let n=this.bs(e+1),i=n<0?0:n;return rU.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rU.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return rU.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){let n=new aV(e,0),i=new aV(e,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,i],t=>{let e=this.Ps(t.As);r.push(e)}),rU.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rW(rC);return e.forEach(t=>{let e=new aV(t,0),i=new aV(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,i],t=>{n=n.add(t.As)})}),rU.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){let n=e.path,i=n.length+1,r=n;rM.isDocumentKey(r)||(r=r.child(""));let s=new aV(new rM(r),0),a=new rW(rC);return this.Rs.forEachWhile(t=>{let e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(a=a.add(t.As)),!0)},s),rU.resolve(this.Vs(a))}Vs(t){let e=[];return t.forEach(t=>{let n=this.Ps(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){0===this.Ss(e.batchId,"removed")||rp(),this.mutationQueue.shift();let n=this.Rs;return rU.forEach(e.mutations,i=>{let r=new aV(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=n})}Cn(t){}containsKey(t,e){let n=new aV(e,0),i=this.Rs.firstAfterOrEqual(n);return rU.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,rU.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){let e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class aB{constructor(t){this.Ds=t,this.docs=new rG(rM.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){let n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){let e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){let n=this.docs.get(e);return rU.resolve(n?n.document.mutableCopy():sc.newInvalidDocument(e))}getEntries(t,e){let n=sH;return e.forEach(t=>{let e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():sc.newInvalidDocument(t))}),rU.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=sH,s=e.path,a=new rM(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:t,value:{document:a}}=o.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||0>=function(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:0!==(n=rM.comparator(t.documentKey,e.documentKey))?n:rC(t.largestBatchId,e.largestBatchId)}(new rP(a.readTime,a.key,-1),n)||(i.has(a.key)||sj(e,a))&&(r=r.insert(a.key,a.mutableCopy()))}return rU.resolve(r)}getAllFromCollectionGroup(t,e,n,i){rp()}Cs(t,e){return rU.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new aj(this)}getSize(t){return rU.resolve(this.size)}}class aj extends aR{constructor(t){super(),this.os=t}applyChanges(t){let e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.os.addEntry(t,i)):this.os.removeEntry(n)}),rU.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}/**
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
 */class a${constructor(t){this.persistence=t,this.xs=new s$(t=>sk(t),sR),this.lastRemoteSnapshotVersion=rN.min(),this.highestTargetId=0,this.Ns=0,this.ks=new aF,this.targetCount=0,this.Ms=ak.kn()}forEachTarget(t,e){return this.xs.forEach((t,n)=>e(n)),rU.resolve()}getLastRemoteSnapshotVersion(t){return rU.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return rU.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),rU.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),rU.resolve()}Fn(t){this.xs.set(t.target,t);let e=t.targetId;e>this.highestTargetId&&(this.Ms=new ak(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,rU.resolve()}updateTargetData(t,e){return this.Fn(e),rU.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,rU.resolve()}removeTargets(t,e,n){let i=0,r=[];return this.xs.forEach((s,a)=>{a.sequenceNumber<=e&&null===n.get(a.targetId)&&(this.xs.delete(s),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),rU.waitFor(r).next(()=>i)}getTargetCount(t){return rU.resolve(this.targetCount)}getTargetData(t,e){let n=this.xs.get(e)||null;return rU.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),rU.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);let i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),rU.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),rU.resolve()}getMatchingKeysForTargetId(t,e){let n=this.ks.Es(e);return rU.resolve(n)}containsKey(t,e){return rU.resolve(this.ks.containsKey(e))}}/**
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
 */class aH{constructor(t,e){this.$s={},this.overlays={},this.Os=new rj(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new a$(this),this.indexManager=new a_,this.remoteDocumentCache=new aB(t=>this.referenceDelegate.Ls(t)),this.serializer=new ax(e),this.qs=new aM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new aP,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new aU(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){ru("MemoryPersistence","Starting transaction:",t);let i=new az(this.Os.next());return this.referenceDelegate.Us(),n(i).next(t=>this.referenceDelegate.Ks(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Gs(t,e){return rU.or(Object.values(this.$s).map(n=>()=>n.containsKey(t,e)))}}class az extends rF{constructor(t){super(),this.currentSequenceNumber=t}}class aq{constructor(t){this.persistence=t,this.Qs=new aF,this.js=null}static zs(t){return new aq(t)}get Ws(){if(this.js)return this.js;throw rp()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),rU.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),rU.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),rU.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach(t=>this.Ws.add(t.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ws.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Us(){this.js=new Set}Ks(t){let e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rU.forEach(this.Ws,n=>{let i=rM.fromPath(n);return this.Hs(t,i).next(t=>{t||e.removeEntry(i,rN.min())})}).next(()=>(this.js=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hs(t,e).next(t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())})}Ls(t){return 0}Hs(t,e){return rU.or([()=>rU.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}/**
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
 */class aG{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=i}static Li(t,e){let n=sX(),i=sX();for(let t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new aG(t,e.fromCache,n,i)}}/**
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
 */class aK{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ki(t,e).next(r=>r||this.Gi(t,e,i,n)).next(n=>n||this.Qi(t,e))}Ki(t,e){if(sL(e))return rU.resolve(null);let n=sP(e);return this.indexManager.getIndexType(t,n).next(i=>0===i?null:(null!==e.limit&&1===i&&(n=sP(e=sF(e,null,"F"))),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{let r=sX(...i);return this.Ui.getDocuments(t,r).next(i=>this.indexManager.getMinOffset(t,n).next(n=>{let s=this.ji(e,i);return this.zi(e,s,r,n.readTime)?this.Ki(t,sF(e,null,"F")):this.Wi(t,s,e,n)}))})))}Gi(t,e,n,i){return sL(e)||i.isEqual(rN.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next(r=>{let s=this.ji(e,r);return this.zi(e,s,n,i)?this.Qi(t,e):(rh()<=tU.DEBUG&&ru("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sB(e)),this.Wi(t,s,e,function(t,e){let n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1;return new rP(rN.fromTimestamp(1e9===i?new rD(n+1,0):new rD(n,i)),rM.empty(),-1)}(i,0)))})}ji(t,e){let n=new rW((e,n)=>{let i=!1;for(let r of sM(t)){let t=function(t,e,n){let i=t.field.isKeyField()?rM.comparator(e.key,n.key):function(t,e,n){let i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?sn(i,r):rp()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return -1*i;default:return rp()}}(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0});return e.forEach((e,i)=>{sj(t,i)&&(n=n.add(i))}),n}zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;let r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,e){return rh()<=tU.DEBUG&&ru("QueryEngine","Using full collection scan to execute query:",sB(e)),this.Ui.getDocumentsMatchingQuery(t,e,rP.min())}Wi(t,e,n,i){return this.Ui.getDocumentsMatchingQuery(t,n,i).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}/**
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
 */class aQ{constructor(t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new rG(rC),this.Yi=new s$(t=>sk(t),sR),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new aL(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}async function aW(t,e){return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,t.tr(e),t.mutationQueue.getAllMutationBatches(n))).next(e=>{let r=[],s=[],a=sX();for(let t of i)for(let e of(r.push(t.batchId),t.mutations))a=a.add(e.key);for(let t of e)for(let e of(s.push(t.batchId),t.mutations))a=a.add(e.key);return t.localDocuments.getDocuments(n,a).next(t=>({er:t,removedBatchIds:r,addedBatchIds:s}))})})}class aX{constructor(){this.activeTargetIds=sY}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class aY{constructor(){this.Hr=new aX,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new aX,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class aJ{Yr(t){}shutdown(){}}/**
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
 */class aZ{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let t of(ru("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))t(0)}no(){for(let t of(ru("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let a0=null;function a1(){return null===a0?a0=0x10000000+Math.round(0x80000000*Math.random()):a0++,"0x"+a0.toString(16)}/**
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
 */const a2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class a3{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}/**
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
 */const a6="WebChannelConnection";class a4 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,i,r){let s=a1(),a=this.To(t,e);ru("RestConnection",`Sending RPC '${t}' ${s}:`,a,n);let o={};return this.Eo(o,i,r),this.Ao(t,a,o,n).then(e=>(ru("RestConnection",`Received RPC '${t}' ${s}: `,e),e),e=>{throw rf("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",a,"request:",n),e})}vo(t,e,n,i,r,s){return this.Io(t,e,n,i,r)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ro,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}To(t,e){let n=a2[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,i){let r=a1();return new Promise((s,a)=>{let o=new ri;o.setWithCredentials(!0),o.listenOnce(i9.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case i8.NO_ERROR:let e=o.getResponseJson();ru(a6,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case i8.TIMEOUT:ru(a6,`RPC '${t}' ${r} timed out`),a(new rm(rg.DEADLINE_EXCEEDED,"Request time out"));break;case i8.HTTP_ERROR:let n=o.getStatus();if(ru(a6,`RPC '${t}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);let e=null==t?void 0:t.error;if(e&&e.status&&e.message){let t=function(t){let e=t.toLowerCase().replace(/_/g,"-");return Object.values(rg).indexOf(e)>=0?e:rg.UNKNOWN}(e.status);a(new rm(t,e.message))}else a(new rm(rg.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new rm(rg.UNAVAILABLE,"Connection failed."));break;default:rp()}}finally{ru(a6,`RPC '${t}' ${r} completed.`)}});let l=JSON.stringify(i);ru(a6,`RPC '${t}' ${r} sending request:`,i),o.send(e,"POST",l,n,15)})}Ro(t,e,n){let i=a1(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=i4(),a=i5(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new re({})),this.Eo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;let u=r.join("");ru(a6,`Creating RPC '${t}' stream ${i}: ${u}`,l);let c=s.createWebChannel(u,l),f=!1,d=!1,p=new a3({ro:e=>{d?ru(a6,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(f||(ru(a6,`Opening RPC '${t}' stream ${i} transport.`),c.open(),f=!0),ru(a6,`RPC '${t}' stream ${i} sending:`,e),c.send(e))},oo:()=>c.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(c,rn.EventType.OPEN,()=>{d||ru(a6,`RPC '${t}' stream ${i} transport opened.`)}),g(c,rn.EventType.CLOSE,()=>{d||(d=!0,ru(a6,`RPC '${t}' stream ${i} transport closed`),p.wo())}),g(c,rn.EventType.ERROR,e=>{d||(d=!0,rf(a6,`RPC '${t}' stream ${i} transport errored:`,e),p.wo(new rm(rg.UNAVAILABLE,"The operation could not be completed")))}),g(c,rn.EventType.MESSAGE,e=>{var n;if(!d){let r=e.data[0];r||rp();let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){ru(a6,`RPC '${t}' stream ${i} received error:`,s);let e=s.status,n=function(t){let e=o[t];if(void 0!==e)return function(t){if(void 0===t)return rc("GRPC error has no .code"),rg.UNKNOWN;switch(t){case o.OK:return rg.OK;case o.CANCELLED:return rg.CANCELLED;case o.UNKNOWN:return rg.UNKNOWN;case o.DEADLINE_EXCEEDED:return rg.DEADLINE_EXCEEDED;case o.RESOURCE_EXHAUSTED:return rg.RESOURCE_EXHAUSTED;case o.INTERNAL:return rg.INTERNAL;case o.UNAVAILABLE:return rg.UNAVAILABLE;case o.UNAUTHENTICATED:return rg.UNAUTHENTICATED;case o.INVALID_ARGUMENT:return rg.INVALID_ARGUMENT;case o.NOT_FOUND:return rg.NOT_FOUND;case o.ALREADY_EXISTS:return rg.ALREADY_EXISTS;case o.PERMISSION_DENIED:return rg.PERMISSION_DENIED;case o.FAILED_PRECONDITION:return rg.FAILED_PRECONDITION;case o.ABORTED:return rg.ABORTED;case o.OUT_OF_RANGE:return rg.OUT_OF_RANGE;case o.UNIMPLEMENTED:return rg.UNIMPLEMENTED;case o.DATA_LOSS:return rg.DATA_LOSS;default:return rp()}}(e)}(e),r=s.message;void 0===n&&(n=rg.INTERNAL,r="Unknown error status: "+e+" with message "+s.message),d=!0,p.wo(new rm(n,r)),c.close()}else ru(a6,`RPC '${t}' stream ${i} received:`,r),p._o(r)}}),g(a,i7.STAT_EVENT,e=>{e.stat===rt.PROXY?ru(a6,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===rt.NOPROXY&&ru(a6,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.fo()},0),p}}function a5(){return"undefined"!=typeof document?document:null}/**
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
 */function a8(t){return new aw(t,!0)}/**
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
 */class a9{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();let e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-n);i>0&&ru("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class a7{constructor(t,e,n,i,r,s,a,o){this.ii=t,this.$o=n,this.Oo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new a9(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===rg.RESOURCE_EXHAUSTED?(rc(e.toString()),rc("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===rg.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;let t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Fo===e&&this.Zo(t,n)},e=>{t(()=>{let t=new rm(rg.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)})})}Zo(t,e){let n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo(()=>{n(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(t=>{n(()=>this.tu(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(t){return ru("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.Fo===t?e():(ru("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ot extends a7{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){var e,n;if(t.streamToken||rp(),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();let i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(void 0!==n||rp(),e.map(t=>{let e;return(e=t.updateTime?ab(t.updateTime):ab(n)).isEqual(rN.min())&&(e=ab(n)),new an(e,t.transformResults||[])})):[]),r=ab(t.commitTime);return this.listener.cu(r,i)}return t.writeResults&&0!==t.writeResults.length&&rp(),this.ru=!0,this.listener.au()}hu(){var t;let e={};e.database=new rR(["projects",(t=this.serializer).databaseId.projectId,"databases",t.databaseId.database]).canonicalString(),this.Wo(e)}uu(t){let e={streamToken:this.lastStreamToken,writes:t.map(t=>(function(t,e){var n;let i;if(e instanceof ah)i={update:aS(t,e.key,e.value)};else if(e instanceof ap)i={delete:aI(t,e.key)};else if(e instanceof au)i={update:aS(t,e.key,e.data),updateMask:function(t){let e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof ag))return rp();i={verify:aI(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){let n=e.transform;if(n instanceof s3)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof s6)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof s5)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof s9)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw rp()})(0,t))),e.precondition.isNone||(i.currentDocument=void 0!==(n=e.precondition).updateTime?{updateTime:aE(t,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:rp()),i})(this.serializer,t))};this.Wo(e)}}/**
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
 */class oe extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new rm(rg.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===rg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new rm(rg.UNKNOWN,t.toString())})}vo(t,e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.vo(t,e,n,r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===rg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new rm(rg.UNKNOWN,t.toString())})}terminate(){this.lu=!0}}class on{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){let e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(rc(e),this.mu=!1):ru("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}/**
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
 */class oi{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(t=>{n.enqueueAndForget(async()=>{oa(this)&&(ru("RemoteStore","Restarting streams for network reachability change."),await async function(t){t.vu.add(4),await os(t),t.bu.set("Unknown"),t.vu.delete(4),await or(t)}(this))})}),this.bu=new on(n,i)}}async function or(t){if(oa(t))for(let e of t.Ru)await e(!0)}async function os(t){for(let e of t.Ru)await e(!1)}function oa(t){return 0===t.vu.size}async function oo(t,e,n){if(!rB(e))throw e;t.vu.add(1),await os(t),t.bu.set("Offline"),n||(n=()=>{var e;return(e=t.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}),t.asyncQueue.enqueueRetryable(async()=>{ru("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await or(t)})}function ol(t,e){return e().catch(n=>oo(t,n,e))}async function oh(t){let e=ov(t),n=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;oa(t)&&t.Eu.length<10;)try{let i=await function(t,e){return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===e&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}(t.localStore,n);if(null===i){0===t.Eu.length&&e.jo();break}n=i.batchId,function(t,e){t.Eu.push(e);let n=ov(t);n.Ko()&&n.ou&&n.uu(e.mutations)}(t,i)}catch(e){await oo(t,e)}ou(t)&&oc(t)}function ou(t){return oa(t)&&!ov(t).Uo()&&t.Eu.length>0}function oc(t){ov(t).start()}async function of(t){ov(t).hu()}async function od(t){let e=ov(t);for(let n of t.Eu)e.uu(n.mutations)}async function op(t,e,n){let i=t.Eu.shift(),r=ay.from(i,e,n);await ol(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await oh(t)}async function og(t,e){e&&ov(t).ou&&await async function(t,e){var n;if(function(t){switch(t){default:return rp();case rg.CANCELLED:case rg.UNKNOWN:case rg.DEADLINE_EXCEEDED:case rg.RESOURCE_EXHAUSTED:case rg.INTERNAL:case rg.UNAVAILABLE:case rg.UNAUTHENTICATED:return!1;case rg.INVALID_ARGUMENT:case rg.NOT_FOUND:case rg.ALREADY_EXISTS:case rg.PERMISSION_DENIED:case rg.FAILED_PRECONDITION:case rg.ABORTED:case rg.OUT_OF_RANGE:case rg.UNIMPLEMENTED:case rg.DATA_LOSS:return!0}}(n=e.code)&&n!==rg.ABORTED){let n=t.Eu.shift();ov(t).Qo(),await ol(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await oh(t)}}(t,e),ou(t)&&oc(t)}async function om(t,e){t.asyncQueue.verifyOperationInProgress(),ru("RemoteStore","RemoteStore received new credentials");let n=oa(t);t.vu.add(3),await os(t),n&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await or(t)}async function oy(t,e){e?(t.vu.delete(2),await or(t)):e||(t.vu.add(2),await os(t),t.bu.set("Unknown"))}function ov(t){var e,n,i;return t.Du||(t.Du=(e=t.datastore,n=t.asyncQueue,i={uo:of.bind(null,t),ao:og.bind(null,t),au:od.bind(null,t),cu:op.bind(null,t)},e.fu(),new ot(n,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,i)),t.Ru.push(async e=>{e?(t.Du.Qo(),await oh(t)):(await t.Du.stop(),t.Eu.length>0&&(ru("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class ow{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new ry,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,r){let s=new ow(t,e,Date.now()+n,i,r);return s.start(n),s}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new rm(rg.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oE(t,e){if(rc("AsyncQueue",`${e}: ${t}`),rB(t))return new rm(rg.UNAVAILABLE,`${e}: ${t}`);throw t}class ob{constructor(){this.queries=new s$(t=>sU(t),sV),this.onlineState="Unknown",this.ku=new Set}}class oT{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new s$(t=>sU(t),sV),this._c=new Map,this.mc=new Set,this.gc=new rG(rM.comparator),this.yc=new Map,this.Ic=new aF,this.Tc={},this.Ec=new Map,this.Ac=ak.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function oI(t,e,n){var i;let r=(t.remoteStore.remoteSyncer.applySuccessfulWrite=oA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ox.bind(null,t),t);try{let t;let s=await function(t,e){let n,i;let r=rD.now(),s=e.reduce((t,e)=>t.add(e.key),sX());return t.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=sH,l=sX();return t.Zi.getEntries(a,s).next(t=>{(o=t).forEach((t,e)=>{e.isValidDocument()||(l=l.add(t))})}).next(()=>t.localDocuments.getOverlayedDocuments(a,o)).next(i=>{n=i;let s=[];for(let t of e){let e=function(t,e){let n=null;for(let i of t.fieldTransforms){let t=e.data.field(i.field),r=s2(i.transform,t||null);null!=r&&(null===n&&(n=su.empty()),n.set(i.field,r))}return n||null}(t,n.get(t.key).overlayedDocument);null!=e&&s.push(new au(t.key,e,function t(e){let n=[];return rz(e.fields,(e,i)=>{let r=new rL([e]);if(so(i)){let e=t(i.mapValue).fields;if(0===e.length)n.push(r);else for(let t of e)n.push(r.child(t))}else n.push(r)}),new rY(n)}(e.value.mapValue),ai.exists(!0)))}return t.mutationQueue.addMutationBatch(a,r,s,e)}).next(e=>{i=e;let r=e.applyToLocalDocumentSet(n,l);return t.documentOverlayCache.saveOverlays(a,e.batchId,r)})}).then(()=>({batchId:i.batchId,changes:sG(n)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(t=r.Tc[r.currentUser.toKey()])||(t=new rG(rC)),t=t.insert(i,n),r.Tc[r.currentUser.toKey()]=t,await oD(r,s.changes),await oh(r.remoteStore)}catch(e){let t=oE(e,"Failed to persist write");n.reject(t)}}function oS(t,e,n){var i;if(t.isPrimaryClient&&0===n||!t.isPrimaryClient&&1===n){let n;let r=[];t.wc.forEach((t,n)=>{let i=n.view.Mu(e);i.snapshot&&r.push(i.snapshot)}),(i=t.eventManager).onlineState=e,n=!1,i.queries.forEach((t,i)=>{for(let t of i.listeners)t.Mu(e)&&(n=!0)}),n&&function(t){t.ku.forEach(t=>{t.next()})}(i),r.length&&t.dc.nu(r),t.onlineState=e,t.isPrimaryClient&&t.sharedClientState.setOnlineState(e)}}async function oA(t,e){var n;let i=e.batch.batchId;try{let r=await (n=t.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{let i=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return(function(t,e,n,i){let r=n.batch,s=r.keys(),a=rU.resolve();return s.forEach(t=>{a=a.next(()=>i.getEntry(e,t)).next(e=>{let s=n.docVersions.get(t);null!==s||rp(),0>e.version.compareTo(s)&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))})}),a.next(()=>t.mutationQueue.removeMutationBatch(e,r))})(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=sX();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,i))});o_(t,i,null),oC(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await oD(t,r)}catch(t){await rV(t)}}async function ox(t,e,n){var i;try{let r=await (i=t.localStore).persistence.runTransaction("Reject batch","readwrite-primary",t=>{let n;return i.mutationQueue.lookupMutationBatch(t,e).next(e=>(null!==e||rp(),n=e.keys(),i.mutationQueue.removeMutationBatch(t,e))).next(()=>i.mutationQueue.performConsistencyCheck(t)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(t,n,e)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,n)).next(()=>i.localDocuments.getDocuments(t,n))});o_(t,e,n),oC(t,e),t.sharedClientState.updateMutationState(e,"rejected",n),await oD(t,r)}catch(t){await rV(t)}}function oC(t,e){(t.Ec.get(e)||[]).forEach(t=>{t.resolve()}),t.Ec.delete(e)}function o_(t,e,n){let i=t.Tc[t.currentUser.toKey()];if(i){let r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),t.Tc[t.currentUser.toKey()]=i}}async function oD(t,e,n){let i=[],r=[],s=[];t.wc.isEmpty()||(t.wc.forEach((a,o)=>{s.push(t.Rc(o,e,n).then(e=>{if((e||n)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(o.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);let t=aG.Li(o.targetId,e);r.push(t)}}))}),await Promise.all(s),t.dc.nu(i),await async function(t,e){try{await t.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rU.forEach(e,e=>rU.forEach(e.Fi,i=>t.persistence.referenceDelegate.addReference(n,e.targetId,i)).next(()=>rU.forEach(e.Bi,i=>t.persistence.referenceDelegate.removeReference(n,e.targetId,i)))))}catch(t){if(!rB(t))throw t;ru("LocalStore","Failed to update sequence numbers: "+t)}for(let n of e){let e=n.targetId;if(!n.fromCache){let n=t.Ji.get(e),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);t.Ji=t.Ji.insert(e,r)}}}(t.localStore,r))}async function oN(t,e){var n;if(!t.currentUser.isEqual(e)){ru("SyncEngine","User change. New user:",e.toKey());let i=await aW(t.localStore,e);t.currentUser=e,n="'waitForPendingWrites' promise is rejected due to a user change.",t.Ec.forEach(t=>{t.forEach(t=>{t.reject(new rm(rg.CANCELLED,n))})}),t.Ec.clear(),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await oD(t,i.er)}}class ok{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=a8(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){var e;return e=this.persistence,new aQ(e,new aK,t.initialUser,this.serializer)}createPersistence(t){return new aH(aq.zs,this.serializer)}createSharedClientState(t){return new aY}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class oR{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>oS(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=oN.bind(null,this.syncEngine),await oy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ob}createDatastore(t){let e=a8(t.databaseInfo.databaseId),n=new a4(t.databaseInfo);return new oe(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e;return e=this.localStore,new oi(e,this.datastore,t.asyncQueue,t=>oS(this.syncEngine,t,0),aZ.D()?new aZ:new aJ)}createSyncEngine(t,e){return function(t,e,n,i,r,s,a){let o=new oT(t,e,n,i,r,s);return a&&(o.vc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){ru("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await os(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class oO{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ra.UNAUTHENTICATED,this.clientId=rx.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{ru("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(ru("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new rm(rg.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new ry;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){let e=oE(n,"Failed to shutdown persistence");t.reject(e)}}),t.promise}}async function oL(t,e){t.asyncQueue.verifyOperationInProgress(),ru("FirestoreClient","Initializing OfflineComponentProvider");let n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await aW(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oM(t,e){t.asyncQueue.verifyOperationInProgress();let n=await oP(t);ru("FirestoreClient","Initializing OnlineComponentProvider");let i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>om(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>om(e.remoteStore,n)),t._onlineComponents=e}async function oP(t){if(!t._offlineComponents){if(t._uninitializedComponentsProvider){ru("FirestoreClient","Using user provided OfflineComponentProvider");try{await oL(t,t._uninitializedComponentsProvider._offline)}catch(e){if(!("FirebaseError"===e.name?e.code===rg.FAILED_PRECONDITION||e.code===rg.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code))throw e;rf("Error using user provided cache. Falling back to memory cache: "+e),await oL(t,new ok)}}else ru("FirestoreClient","Using default OfflineComponentProvider"),await oL(t,new ok)}return t._offlineComponents}async function oF(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ru("FirestoreClient","Using user provided OnlineComponentProvider"),await oM(t,t._uninitializedComponentsProvider._online)):(ru("FirestoreClient","Using default OnlineComponentProvider"),await oM(t,new oR))),t._onlineComponents}/**
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
 */function oV(t){let e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const oU=new Map;/**
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
 */function oB(t,e,n){if(!n)throw new rm(rg.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oj(t){if(!rM.isDocumentKey(t))throw new rm(rg.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function o$(t){if(rM.isDocumentKey(t))throw new rm(rg.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oH(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var e;let n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof t?"a function":rp()}function oz(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new rm(rg.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oH(t);throw new rm(rg.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class oq{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new rm(rg.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new rm(rg.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new rm(rg.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oV(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new rm(rg.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new rm(rg.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new rm(rg.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oG{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oq({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new rm(rg.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new rm(rg.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oq(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new rw;switch(t.type){case"firstParty":return new rI(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new rm(rg.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){let e=oU.get(t);e&&(ru("ComponentProvider","Removing Datastore"),oU.delete(t),e.terminate())}(this),Promise.resolve()}}/**
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
 */class oK{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oW(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oK(this.firestore,t,this._key)}}class oQ{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new oQ(this.firestore,t,this._query)}}class oW extends oQ{constructor(t,e,n){super(t,e,new sO(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new oK(this.firestore,null,new rM(t))}withConverter(t){return new oW(this.firestore,t,this._path)}}function oX(t,e,...n){if(t=$(t),1==arguments.length&&(e=rx.A()),oB("doc","path",e),t instanceof oG){let i=rR.fromString(e,...n);return oj(i),new oK(t,null,new rM(i))}{if(!(t instanceof oK||t instanceof oW))throw new rm(rg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(rR.fromString(e,...n));return oj(i),new oK(t.firestore,t instanceof oW?t.converter:null,new rM(i))}}/**
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
 */class oY{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new a9(this,"async_queue_retry"),this.Xc=()=>{let t=a5();t&&ru("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};let t=a5();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;let e=a5();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});let e=new ry;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!rB(t))throw t;ru("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(t){let e=this.Gc.then(()=>(this.Hc=!0,t().catch(t=>{let e;throw this.Wc=t,this.Hc=!1,rc("INTERNAL UNHANDLED ERROR: ",(e=t.message||"",t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e)),t}).then(t=>(this.Hc=!1,t))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);let i=ow.createAndSchedule(this,t,e,n,t=>this.na(t));return this.zc.push(i),i}Zc(){this.Wc&&rp()}verifyOperationInProgress(){}async sa(){let t;do t=this.Gc,await t;while(t!==this.Gc)}ia(t){for(let e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then(()=>{for(let e of(this.zc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs),this.zc))if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()})}oa(t){this.Yc.push(t)}na(t){let e=this.zc.indexOf(t);this.zc.splice(e,1)}}class oJ extends oG{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new oY,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oZ(this),this._firestoreClient.terminate()}}function oZ(t){var e,n,i,r;let s=t._freezeSettings(),a=(r=t._databaseId,new r5(r,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oV(s.experimentalLongPollingOptions),s.useFetchStreams));t._firestoreClient=new oO(t._authCredentials,t._appCheckCredentials,t._queue,a),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class o0{constructor(t){this._byteString=t}static fromBase64String(t){try{return new o0(rZ.fromBase64String(t))}catch(t){throw new rm(rg.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new o0(rZ.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class o1{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new rm(rg.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rL(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class o2{constructor(t){this._methodName=t}}/**
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
 */class o3{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new rm(rg.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new rm(rg.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rC(this._lat,t._lat)||rC(this._long,t._long)}}/**
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
 */const o6=/^__.*__$/;class o4{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new au(t,this.data,this.fieldMask,e,this.fieldTransforms):new ah(t,this.data,e,this.fieldTransforms)}}class o5{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new au(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function o8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw rp()}}class o9{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new o9(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.fa(t),i}da(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.ua(),i}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return lu(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(o8(this.ca)&&o6.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class o7{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||a8(t)}ya(t,e,n,i=!1){return new o9({ca:t,methodName:e,ga:n,path:rL.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lt(t){let e=t._freezeSettings(),n=a8(t._databaseId);return new o7(t._databaseId,!!e.ignoreUndefinedProperties,n)}class le extends o2{_toFieldTransform(t){if(2!==t.ca)throw 1===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof le}}class ln extends o2{constructor(t,e){super(t),this.Ia=e}_toFieldTransform(t){let e=new s9(t.serializer,s0(t.serializer,this.Ia));return new ae(t.path,e)}isEqual(t){return this===t}}function li(t,e){if(ls(t=$(t)))return la("Unsupported field value:",e,t),lr(t,e);if(t instanceof o2)return function(t,e){if(!o8(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);let n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){let n=[],i=0;for(let r of t){let t=li(r,e.wa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=$(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return s0(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){let n=rD.fromDate(t);return{timestampValue:aE(e.serializer,n)}}if(t instanceof rD){let n=new rD(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:aE(e.serializer,n)}}if(t instanceof o3)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof o0){var n,i;return{bytesValue:(n=e.serializer,i=t._byteString,n.useProto3Json?i.toBase64():i.toUint8Array())}}if(t instanceof oK){let n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:aT(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${oH(t)}`)}(t,e)}function lr(t,e){let n={};return rq(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rz(t,(t,i)=>{let r=li(i,e.ha(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function ls(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof rD||t instanceof o3||t instanceof o0||t instanceof oK||t instanceof o2)}function la(t,e,n){if(!ls(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=oH(n);throw"an object"===i?e._a(t+" a custom object"):e._a(t+" "+i)}}function lo(t,e,n){if((e=$(e))instanceof o1)return e._internalPath;if("string"==typeof e)return lh(t,e);throw lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const ll=RegExp("[~\\*/\\[\\]]");function lh(t,e,n){if(e.search(ll)>=0)throw lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new o1(...e.split("."))._internalPath}catch(i){throw lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function lu(t,e,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new rm(rg.INVALID_ARGUMENT,o+t+l)}function lc(t,e){return t.some(t=>t.isEqual(e))}function lf(t,e){return function(t,e){let n=new ry;return t.asyncQueue.enqueueAndForget(async()=>oI(await oF(t).then(t=>t.syncEngine),e,n)),n.promise}((t._firestoreClient||oZ(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),e)}!function(t=!0){ro="9.23.0",tE(new H("firestore",(e,{instanceIdentifier:n,options:i})=>{let r=e.getProvider("app").getImmediate(),s=new oJ(new rb(e.getProvider("auth-internal")),new rA(e.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new rm(rg.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new r8(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),tS(rs,"3.13.0",void 0),tS(rs,"3.13.0","esm2017")}(),tI({apiKey:"AIzaSyDhfTomFg03nXW2cD1RIysGXydVHHUNC0c",authDomain:"nisb-website.firebaseapp.com",projectId:"nisb-website",storageBucket:"nisb-website.appspot.com",messagingSenderId:"30096523025",appId:"1:30096523025:web:8485960da3344cf73cd6b0",measurementId:"G-5RMDTP6Q8R"});const ld=function(t,e){let n=(function(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)})(function(t=tm){let e=tv.get(t);if(!e&&t===tm&&M())return tI();if(!e)throw tb.create("no-app",{appName:t});return e}(),"firestore").getImmediate({identifier:"(default)"});if(!n._initialized){let t=L("firestore");t&&function(t,e,n,i={}){var r;let s=(t=oz(t,oG))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&rf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=ra.MOCK_USER;else{e=function(t,e){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[C(JSON.stringify({alg:"none",type:"JWT"})),C(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new rm(rg.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ra(s)}t._authCredentials=new rE(new rv(e,n))}}(n,...t)}return n}();var lp=null;fetch("https://ipapi.co/json/").then(t=>t.json()).then(t=>lp=t).catch(t=>console.error(t));const lg=t=>{!function(t,e){var n;let i=oz(t.firestore,oJ),r=oX(t),s=(n=t.converter)?n.toFirestore(e):e;lf(i,[(function(t,e,n,i,r,s={}){let a,o;let l=t.ya(s.merge||s.mergeFields?2:0,e,n,r);la("Data must be an object, but it was:",l,i);let h=lr(i,l);if(s.merge)a=new rY(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let t=[];for(let i of s.mergeFields){let r=lo(e,i,n);if(!l.contains(r))throw new rm(rg.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);lc(t,r)||t.push(r)}a=new rY(t),o=l.fieldTransforms.filter(t=>a.covers(t.field))}else a=null,o=l.fieldTransforms;return new o4(new su(h),a,o)})(lt(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,ai.exists(!1))]).then(()=>r)}(function(t,e,...n){if(t=$(t),oB("collection","path",e),t instanceof oG){let i=rR.fromString(e,...n);return o$(i),new oW(t,null,i)}{if(!(t instanceof oK||t instanceof oW))throw new rm(rg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(rR.fromString(e,...n));return o$(i),new oW(t.firestore,null,i)}}(ld,"analytics"),{name:t.target.getAttribute("data-name"),link:t.target.getAttribute("data-url"),time:new Date,loc:lp}),function(t,e,n,...i){t=oz(t,oK);let r=oz(t.firestore,oJ),s=lt(r);lf(r,[("string"==typeof(e=$(e))||e instanceof o1?function(t,e,n,i,r,s){let a=t.ya(1,e,n),o=[lo(e,i,n)],l=[r];if(s.length%2!=0)throw new rm(rg.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)o.push(lo(e,s[t])),l.push(s[t+1]);let h=[],u=su.empty();for(let t=o.length-1;t>=0;--t)if(!lc(h,o[t])){let e=o[t],n=l[t];n=$(n);let i=a.da(e);if(n instanceof le)h.push(e);else{let t=li(n,i);null!=t&&(h.push(e),u.set(e,t))}}return new o5(u,new rY(h),a.fieldTransforms)}(s,"updateDoc",t._key,e,void 0,i):function(t,e,n,i){let r=t.ya(1,e,n);la("Data must be an object, but it was:",r,i);let s=[],a=su.empty();return rz(i,(t,i)=>{let o=lh(e,t,n);i=$(i);let l=r.da(o);if(i instanceof le)s.push(o);else{let t=li(i,l);null!=t&&(s.push(o),a.set(o,t))}}),new o5(a,new rY(s),r.fieldTransforms)}(s,"updateDoc",t._key,e)).toMutation(t._key,ai.exists(!0))])}(oX(ld,"social-links",t.target.getAttribute("data-id")),{count:new ln("increment",1)}),window.open(t.target.getAttribute("data-url"),"_blank")};for(var lm=document.getElementsByClassName("link"),ly=0;ly<lm.length;ly++)lm[ly].addEventListener("click",lg,!1);
//# sourceMappingURL=index.9596d6e7.js.map
