let t,e;var n,i,r,s,a,o,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},h={},u=h={};function c(){throw Error("setTimeout has not been defined")}function f(){throw Error("clearTimeout has not been defined")}function d(t){if(tP===setTimeout)return setTimeout(t,0);// if setTimeout wasn't available but was latter defined
if((tP===c||!tP)&&setTimeout)return tP=setTimeout,setTimeout(t,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return tP(t,0)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return tP.call(null,t,0)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return tP.call(this,t,0)}}}!function(){try{tP="function"==typeof setTimeout?setTimeout:c}catch(t){tP=c}try{tF="function"==typeof clearTimeout?clearTimeout:f}catch(t){tF=f}}();var p=[],g=!1,m=-1;function y(){g&&tV&&(g=!1,tV.length?p=tV.concat(p):m=-1,p.length&&v())}function v(){if(!g){var t=d(y);g=!0;for(var e=p.length;e;){for(tV=p,p=[];++m<e;)tV&&tV[m].run();m=-1,e=p.length}tV=null,g=!1,function(t){if(tF===clearTimeout)return clearTimeout(t);// if clearTimeout wasn't available but was latter defined
if((tF===f||!tF)&&clearTimeout)return tF=clearTimeout,clearTimeout(t);try{tF(t)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return tF.call(null,t)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return tF.call(this,t)}}}(t)}}// v8 likes predictible objects
function w(t,e){this.fun=t,this.array=e}function E(){}u.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new w(t,e)),1!==p.length||g||d(v)},w.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=E,u.addListener=E,u.once=E,u.off=E,u.removeListener=E,u.removeAllListeners=E,u.emit=E,u.prependListener=E,u.prependOnceListener=E,u.listeners=function(t){return[]},u.binding=function(t){throw Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(t){throw Error("process.chdir is not supported")},u.umask=function(){return 0};/**
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
 */const b=function(t){// TODO(user): Use native implementations if/when available
let e=[],n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:(r<2048?e[n++]=r>>6|192:((64512&r)==55296&&i+1<t.length&&(64512&t.charCodeAt(i+1))==56320?(// Surrogate Pair
r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128):e[n++]=r>>12|224,e[n++]=r>>6&63|128),e[n++]=63&r|128)}return e},T=function(t){// TODO(user): Use native implementations if/when available
let e=[],n=0,i=0;for(;n<t.length;){let r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){// Surrogate Pair
let s=t[n++],a=t[n++],o=t[n++],l=((7&r)<<18|(63&s)<<12|(63&a)<<6|63&o)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{let s=t[n++],a=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return e.join("")},I={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){let r=t[e],s=e+1<t.length,a=s?t[e+1]:0,o=e+2<t.length,l=o?t[e+2]:0,h=r>>2,u=(3&r)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;o||(f=64,s||(c=64)),i.push(n[h],n[u],n[c],n[f])}return i.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(t,e){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(b(t),e))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(t,e){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!e?atob(t):T(this.decodeStringToByteArray(t,e)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){let r=n[t.charAt(e++)],s=e<t.length,a=s?n[t.charAt(e)]:0;++e;let o=e<t.length,l=o?n[t.charAt(e)]:64;++e;let h=e<t.length,u=h?n[t.charAt(e)]:64;if(++e,null==r||null==a||null==l||null==u)throw new S;let c=r<<2|a>>4;if(i.push(c),64!==l){let t=a<<4&240|l>>2;if(i.push(t),64!==u){let t=l<<6&192|u;i.push(t)}}}return i},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};/**
 * An error encountered while decoding base64 string.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const A=function(t){let e=b(t);return I.encodeByteArray(e,!0)},C=function(t){// Use base64url encoding and remove padding in the end (dot characters).
return A(t).replace(/\./g,"")},_=function(t){try{return I.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},D=()=>/**
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
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==l)return l;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,N=()=>{if(void 0===h||void 0===h.env)return;let t=void 0;if(t)return JSON.parse(t)},k=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let e=t&&_(t[1]);return e&&JSON.parse(e)},R=()=>{try{return D()||N()||k()}catch(t){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O=t=>{var e,n;return null===(n=null===(e=R())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},L=t=>{let e=O(t);if(!e)return;let n=e.lastIndexOf(":");// Finding the last since IPv6 addr also has colons.
if(n<=0||n+1===e.length)throw Error(`Invalid host ${e} with no separate hostname and port!`);// eslint-disable-next-line no-restricted-globals
let i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},x=()=>{var t;return null===(t=R())||void 0===t?void 0:t.config};/**
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
 */class M{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class P extends Error{constructor(/** The error code for this error. */t,e,/** Custom data for this error. */n){super(e),this.code=t,this.customData=n,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,F.prototype.create)}}class F{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){let n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?r.replace(V,(t,e)=>{let i=n[e];return null!=i?String(i):`<${e}?>`}):"Error",a=`${this.serviceName}: ${s} (${i}).`,o=new P(i,a,n);return o}}const V=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function U(t,e){if(t===e)return!0;let n=Object.keys(t),i=Object.keys(e);for(let r of n){if(!i.includes(r))return!1;let n=t[r],s=e[r];if(B(n)&&B(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(let t of i)if(!n.includes(t))return!1;return!0}function B(t){return null!==t&&"object"==typeof t}/**
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
 */function j(t){return t&&t._delegate?t._delegate:t}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class ${/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class z{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(t){// if multipleInstances is not supported, use the default name
let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let t=new M;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;// if multipleInstances is not supported, use the default name
let n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=t,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:H})}catch(t){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[t,e]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(t);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(t=H){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=H){return this.instances.has(t)}getOptions(t=H){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:e});// resolve any pending promise waiting for the service instance
for(let[t,e]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);n===r&&e.resolve(i)}return i}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(t,e){var n;let i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);let s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(t,e){let n=this.onInitCallbacks.get(e);if(n)for(let i of n)try{i(t,e)}catch(t){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===H?void 0:t,options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){// ignore errors in the onInstanceCreatedCallback
}return n||null}normalizeInstanceIdentifier(t=H){return this.component?this.component.multipleInstances?t:H:t// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
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
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class q{constructor(t){this.name=t,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){let e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(t){if(this.providers.has(t))return this.providers.get(t);// create a Provider for a service that hasn't registered with Firebase
let e=new z(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 * A container for all of the Logger instances
 */const G=[];(tM=tU||(tU={}))[tM.DEBUG=0]="DEBUG",tM[tM.VERBOSE=1]="VERBOSE",tM[tM.INFO=2]="INFO",tM[tM.WARN=3]="WARN",tM[tM.ERROR=4]="ERROR",tM[tM.SILENT=5]="SILENT";const K={debug:tU.DEBUG,verbose:tU.VERBOSE,info:tU.INFO,warn:tU.WARN,error:tU.ERROR,silent:tU.SILENT},Q=tU.INFO,W={[tU.DEBUG]:"log",[tU.VERBOSE]:"log",[tU.INFO]:"info",[tU.WARN]:"warn",[tU.ERROR]:"error"},X=(t,e,...n)=>{if(e<t.logLevel)return;let i=new Date().toISOString(),r=W[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Y{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(t){this.name=t,/**
         * The log level of the given Logger instance.
         */this._logLevel=Q,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=X,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */G.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tU))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}// Workaround for setter/getter having to be the same type.
setLogLevel(t){this._logLevel="string"==typeof t?K[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}/**
     * The functions below are all based on the `console` interface
     */debug(...t){this._userLogHandler&&this._userLogHandler(this,tU.DEBUG,...t),this._logHandler(this,tU.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tU.VERBOSE,...t),this._logHandler(this,tU.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tU.INFO,...t),this._logHandler(this,tU.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tU.WARN,...t),this._logHandler(this,tU.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tU.ERROR,...t),this._logHandler(this,tU.ERROR,...t)}}const J=(t,e)=>e.some(e=>t instanceof e),Z=new WeakMap,tt=new WeakMap,te=new WeakMap,tn=new WeakMap,ti=new WeakMap;let tr={get(t,e,n){if(t instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===e)return tt.get(t);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===e)return t.objectStoreNames||te.get(t);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}// Else transform whatever we get back.
return ts(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ts(n){var i;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(n instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(ts(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&Z.set(e,t);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
ti.set(e,t),e}(n);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(tn.has(n))return tn.get(n);let r="function"==typeof(i=n)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(e||(e=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...t){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
i.apply(ta(this),t),ts(Z.get(this)))}:function(...t){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return ts(i.apply(ta(this),t))}:function(t,...e){let n=i.call(ta(this),t,...e);return te.set(n,t.sort?t.sort():[t]),ts(n)}:(i instanceof IDBTransaction&&function(t){// Early bail if we've already created a done promise for this transaction.
if(tt.has(t))return;let e=new Promise((e,n)=>{let i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});// Cache it for later retrieval.
tt.set(t,e)}(i),J(i,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,tr):i;return r!==n&&(tn.set(n,r),ti.set(r,n)),r}const ta=t=>ti.get(t),to=["get","getKey","getAll","getAllKeys","count"],tl=["put","add","delete","clear"],th=new Map;function tu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(th.get(e))return th.get(e);let n=e.replace(/FromIndex$/,""),i=e!==n,r=tl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||to.includes(n)))return;let s=async function(t,...e){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let s=this.transaction(t,r?"readwrite":"readonly"),a=s.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return i&&(a=a.index(e.shift())),(await Promise.all([a[n](...e),r&&s.done]))[0]};return th.set(e,s),s}tr={...tx=tr,get:(t,e,n)=>tu(t,e)||tx.get(t,e,n),has:(t,e)=>!!tu(t,e)||tx.has(t,e)};/**
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
 */class tc{constructor(t){this.container=t}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let t=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return t.map(t=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(t){let e=t.getComponent();return(null==e?void 0:e.type)==="VERSION"/* ComponentType.VERSION */}(t))return null;{let e=t.getImmediate();return`${e.library}/${e.version}`}}).filter(t=>t).join(" ")}}const tf="@firebase/app",td="0.9.13",tp=new Y("@firebase/app"),tg="[DEFAULT]",tm={[tf]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ty=new Map,tv=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function tw(t){let e=t.name;if(tv.has(e))return tp.debug(`There were multiple attempts to register component ${e}.`),!1;// add the component to existing app instances
for(let n of(tv.set(e,t),ty.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(t,e){try{t.container.addComponent(e)}catch(n){tp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}(n,t);return!0}const tE=new F("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
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
 */class tb{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw tE.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}function tT(t,e={}){let n=t;if("object"!=typeof e){let t=e;e={name:t}}let i=Object.assign({name:tg,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw tE.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(r)});if(n||(n=x()),!n)throw tE.create("no-options"/* AppError.NO_OPTIONS */);let s=ty.get(r);if(s){// return the existing app if options and config deep equal the ones in the existing app.
if(U(n,s.options)&&U(i,s.config))return s;throw tE.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:r})}let a=new q(r);for(let t of tv.values())a.addComponent(t);let o=new tb(n,i,a);return ty.set(r,o),o}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function tI(t,e,n){var i;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let r=null!==(i=tm[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);let s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let t=[`Unable to register library "${r}" with version "${e}":`];s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tp.warn(t.join(" "));return}tw(new $(`${r}-version`,()=>({library:r,version:e}),"VERSION"/* ComponentType.VERSION */))}const tS="firebase-heartbeat-store";let tA=null;function tC(){return tA||(tA=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){let a=indexedDB.open(t,1),o=ts(a);return i&&a.addEventListener("upgradeneeded",t=>{i(ts(a.result),t.oldVersion,t.newVersion,ts(a.transaction),t)}),n&&a.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),o.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",t=>r(t.oldVersion,t.newVersion,t))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(t,e)=>{0===e&&t.createObjectStore(tS)}}).catch(t=>{throw tE.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:t.message})})),tA}async function t_(t){try{let e=await tC(),n=await e.transaction(tS).objectStore(tS).get(tN(t));return n}catch(t){if(t instanceof P)tp.warn(t.message);else{let e=tE.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==t?void 0:t.message});tp.warn(e.message)}}}async function tD(t,e){try{let n=await tC(),i=n.transaction(tS,"readwrite"),r=i.objectStore(tS);await r.put(e,tN(t)),await i.done}catch(t){if(t instanceof P)tp.warn(t.message);else{let e=tE.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==t?void 0:t.message});tp.warn(e.message)}}}function tN(t){return`${t.name}!${t.options.appId}`}class tk{constructor(t){this.container=t,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new tO(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){let t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=tR();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let e=new Date(t.date).valueOf(),n=Date.now();return n-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let t=tR(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let n=[],i=t.slice();for(let r of t){// Look for an existing entry with the same user agent.
let t=n.find(t=>t.agent===r.agent);if(t)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(t.dates.push(r.date),tL(n)>e){t.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
n.push({agent:r.agent,dates:[r.date]}),tL(n)>e){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
n.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=C(JSON.stringify({version:2,heartbeats:e}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=n,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i)}}function tR(){let t=new Date;// Returns date format 'YYYY-MM-DD'
return t.toISOString().substring(0,10)}class tO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}).then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let t=await this._canUseIndexedDBPromise;if(!t)return{heartbeats:[]};{let t=await t_(this.app);return t||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tD(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}// add heartbeats
async add(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return tD(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function tL(t){// base64 has a restricted set of characters, all of which should be 1 byte.
return C(JSON.stringify({version:2,heartbeats:t})).length}tw(new $("platform-logger",t=>new tc(t),"PRIVATE"/* ComponentType.PRIVATE */)),tw(new $("heartbeat",t=>new tk(t),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
tI(tf,td,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
tI(tf,td,"esm2017"),// Register platform SDK identifier (no version).
tI("fire-js",""),tI("firebase","9.23.0","app");var tx,tM,tP,tF,tV,tU,tB,tj="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==l?l:"undefined"!=typeof self?self:{},t$={},tH=tH||{},tz=tj||self;function tq(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function tG(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function tK(t,e,n){return t.call.apply(t.bind,arguments)}function tQ(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function tW(t,e,n){return(tW=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?tK:tQ).apply(null,arguments)}function tX(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function tY(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function tJ(){this.s=this.s,this.o=this.o}tJ.prototype.s=!1,tJ.prototype.sa=function(){this.s||(this.s=!0,this.N())},tJ.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tZ=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1};function t0(t){let e=t.length;if(0<e){let n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function t1(t,e){for(let e=1;e<arguments.length;e++){let n=arguments[e];if(tq(n)){let e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function t2(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}t2.prototype.h=function(){this.defaultPrevented=!0};var t9=function(){if(!tz.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{tz.addEventListener("test",()=>{},e),tz.removeEventListener("test",()=>{},e)}catch(t){}return t}();function t4(t){return/^[\s\xa0]*$/.test(t)}function t6(){var t=tz.navigator;return t&&(t=t.userAgent)?t:""}function t5(t){return -1!=t6().indexOf(t)}function t3(t){return t3[" "](t),t}t3[" "]=function(){};var t7=t5("Opera"),t8=t5("Trident")||t5("MSIE"),et=t5("Edge"),ee=et||t8,en=t5("Gecko")&&!(-1!=t6().toLowerCase().indexOf("webkit")&&!t5("Edge"))&&!(t5("Trident")||t5("MSIE"))&&!t5("Edge"),ei=-1!=t6().toLowerCase().indexOf("webkit")&&!t5("Edge");function er(){var t=tz.document;return t?t.documentMode:void 0}t:{var es,ea="",eo=(es=t6(),en?/rv:([^\);]+)(\)|;)/.exec(es):et?/Edge\/([\d\.]+)/.exec(es):t8?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(es):ei?/WebKit\/(\S+)/.exec(es):t7?/(?:Version)[ \/]?(\S+)/.exec(es):void 0);if(eo&&(ea=eo?eo[1]:""),t8){var el=er();if(null!=el&&el>parseFloat(ea)){i=String(el);break t}}i=ea}var eh=tz.document&&t8&&(er()||parseInt(i,10))||void 0;function eu(t,e){if(t2.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(en){t:{try{t3(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ec[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&eu.$.h.call(this)}}tY(eu,t2);var ec={2:"touch",3:"pen",4:"mouse"};eu.prototype.h=function(){eu.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ef="closure_listenable_"+(1e6*Math.random()|0),ed=0;function ep(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++ed,this.fa=this.ia=!1}function eg(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function em(t,e,n){for(let i in t)e.call(n,t[i],i,t)}function ey(t){let e={};for(let n in t)e[n]=t[n];return e}const ev="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ew(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e])t[n]=i[n];for(let e=0;e<ev.length;e++)n=ev[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function eE(t){this.src=t,this.g={},this.h=0}function eb(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=tZ(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(eg(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function eT(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&!!n==s.capture&&s.la==i)return r}return -1}eE.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var a=eT(t,e,i,r);return -1<a?(e=t[a],n||(e.ia=!1)):((e=new ep(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var eI="closure_lm_"+(1e6*Math.random()|0),eS={};function eA(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var a=tG(r)?!!r.capture:!!r,o=eN(t);if(o||(t[eI]=o=new eE(t)),(n=o.add(e,n,i,a,s)).proxy)return n;if(i=function t(e){return eD.call(t.src,t.listener,e)},n.proxy=i,i.src=t,i.listener=n,t.addEventListener)t9||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(e_(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eC(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ef])eb(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(e_(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=eN(e))?(eb(n,t),0==n.h&&(n.src=null,e[eI]=null)):eg(t)}}}function e_(t){return t in eS?eS[t]:eS[t]="on"+t}function eD(t,e){if(t.fa)t=!0;else{e=new eu(e,this);var n=t.listener,i=t.la||t.src;t.ia&&eC(t),t=n.call(i,e)}return t}function eN(t){return(t=t[eI])instanceof eE?t:null}var ek="__closure_events_fn_"+(1e9*Math.random()>>>0);function eR(t){return"function"==typeof t?t:(t[ek]||(t[ek]=function(e){return t.handleEvent(e)}),t[ek])}function eO(){tJ.call(this),this.i=new eE(this),this.S=this,this.J=null}function eL(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new t2(e,t);else if(e instanceof t2)e.target=e.target||t;else{var r=e;ew(e=new t2(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var a=e.g=n[s];r=ex(a,i,!0,e)&&r}if(r=ex(a=e.g=t,i,!0,e)&&r,r=ex(a,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=ex(a=e.g=n[s],i,!1,e)&&r}function ex(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var a=e[s];if(a&&!a.fa&&a.capture==n){var o=a.listener,l=a.la||a.src;a.ia&&eb(t.i,a),r=!1!==o.call(l,i)&&r}}return r&&!i.defaultPrevented}tY(eO,tJ),eO.prototype[ef]=!0,eO.prototype.removeEventListener=function(t,e,n,i){!function t(e,n,i,r,s){if(Array.isArray(n))for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);else(r=tG(r)?!!r.capture:!!r,i=eR(i),e&&e[ef])?(e=e.i,(n=String(n).toString())in e.g&&-1<(i=eT(a=e.g[n],i,r,s))&&(eg(a[i]),Array.prototype.splice.call(a,i,1),0==a.length&&(delete e.g[n],e.h--))):e&&(e=eN(e))&&(n=e.g[n.toString()],e=-1,n&&(e=eT(n,i,r,s)),(i=-1<e?n[e]:null)&&eC(i))}(this,t,e,n,i)},eO.prototype.N=function(){if(eO.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)eg(n[i]);delete e.g[t],e.h--}}this.J=null},eO.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},eO.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var eM=tz.JSON.stringify,eP=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new eF,t=>t.reset());class eF{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let eV,eU=!1,eB=new class{constructor(){this.h=this.g=null}add(t,e){let n=eP.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},ej=()=>{let t=tz.Promise.resolve(void 0);eV=()=>{t.then(e$)}};var e$=()=>{let t;for(var e;t=null,eB.g&&(t=eB.g,eB.g=eB.g.next,eB.g||(eB.h=null),t.next=null),e=t;){try{e.h.call(e.g)}catch(t){!function(t){tz.setTimeout(()=>{throw t},0)}(t)}eP.j(e),100>eP.h&&(eP.h++,e.next=eP.g,eP.g=e)}eU=!1};function eH(t,e){eO.call(this),this.h=t||1,this.g=e||tz,this.j=tW(this.qb,this),this.l=Date.now()}function ez(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function eq(t,e,n){if("function"==typeof t)n&&(t=tW(t,n));else if(t&&"function"==typeof t.handleEvent)t=tW(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:tz.setTimeout(t,e||0)}tY(eH,eO),(tB=eH.prototype).ga=!1,tB.T=null,tB.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),eL(this,"tick"),this.ga&&(ez(this),this.start()))}},tB.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},tB.N=function(){eH.$.N.call(this),ez(this),delete this.g};class eG extends tJ{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=eq(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);let n=e.h;e.h=null,e.m.apply(null,n)}(this)}N(){super.N(),this.g&&(tz.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eK(t){tJ.call(this),this.h=t,this.g={}}tY(eK,tJ);var eQ=[];function eW(t,e,n,i){Array.isArray(n)||(n&&(eQ[0]=n.toString()),n=eQ);for(var r=0;r<n.length;r++){var s=function t(e,n,i,r,s){if(r&&r.once)return function t(e,n,i,r,s){if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=eR(i),e&&e[ef]?e.P(n,i,tG(r)?!!r.capture:!!r,s):eA(e,n,i,!0,r,s)}(e,n,i,r,s);if(Array.isArray(n)){for(var a=0;a<n.length;a++)t(e,n[a],i,r,s);return null}return i=eR(i),e&&e[ef]?e.O(n,i,tG(r)?!!r.capture:!!r,s):eA(e,n,i,!1,r,s)}(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function eX(t){em(t.g,function(t,e){this.g.hasOwnProperty(e)&&eC(t)},t),t.g={}}function eY(){this.g=!0}function eJ(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<r.length;a++)r[a]=""}}}}return eM(n)}catch(t){return e}}(t,n)+(i?" "+i:"")})}eK.prototype.N=function(){eK.$.N.call(this),eX(this)},eK.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},eY.prototype.Ea=function(){this.g=!1},eY.prototype.info=function(){};var eZ={},e0=null;function e1(){return e0=e0||new eO}function e2(t){t2.call(this,eZ.Ta,t)}function e9(t){let e=e1();eL(e,new e2(e))}function e4(t,e){t2.call(this,eZ.STAT_EVENT,t),this.stat=e}function e6(t){let e=e1();eL(e,new e4(e,t))}function e5(t,e){t2.call(this,eZ.Ua,t),this.size=e}function e3(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return tz.setTimeout(function(){t()},e)}eZ.Ta="serverreachability",tY(e2,t2),eZ.STAT_EVENT="statevent",tY(e4,t2),eZ.Ua="timingevent",tY(e5,t2);var e7={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},e8={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function nt(){}function ne(t){return t.h||(t.h=t.i())}function nn(){}nt.prototype.h=null;var ni={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function nr(){t2.call(this,"d")}function ns(){t2.call(this,"c")}function na(){}function no(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new eK(this),this.P=nh,t=ee?125:void 0,this.V=new eH(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new nl}function nl(){this.i=null,this.g="",this.h=!1}tY(nr,t2),tY(ns,t2),tY(na,nt),na.prototype.g=function(){return new XMLHttpRequest},na.prototype.i=function(){return{}},s=new na;var nh=45e3,nu={},nc={};function nf(t,e,n){t.L=1,t.v=nk(nA(e)),t.s=n,t.S=!0,nd(t,null)}function nd(t,e){t.G=Date.now(),nm(t),t.A=nA(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),nH(n.i,"t",i),t.C=0,n=t.l.J,t.h=new nl,t.g=ix(t.l,n?e:null,!t.s),0<t.O&&(t.M=new eG(tW(t.Pa,t,t.g),t.O)),eW(t.U,t.g,"readystatechange",t.nb),e=t.I?ey(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),e9(),function(t,e,n,i,r,s){t.info(function(){if(t.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+a})}(t.j,t.u,t.A,t.m,t.W,t.s)}function np(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.l.Ha}function ng(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if((r=function(t,e){var n=t.C,i=e.indexOf("\n",n);return -1==i?nc:isNaN(n=Number(e.substring(n,i)))?nu:(i+=1)+n>e.length?nc:(e=e.slice(i,i+n),t.C=i+n,e)}(t,n))==nc){4==e&&(t.o=4,e6(14),i=!1),eJ(t.j,t.m,null,"[Incomplete Response]");break}else if(r==nu){t.o=4,e6(15),eJ(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else eJ(t.j,t.m,r,null),nb(t,r);np(t)&&r!=nc&&r!=nu&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,e6(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),iC(e),e.M=!0,e6(11))):(eJ(t.j,t.m,n,"[Invalid Chunked Response]"),nE(t),nw(t))}function nm(t){t.Y=Date.now()+t.P,ny(t,t.P)}function ny(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=e3(tW(t.lb,t),e)}function nv(t){t.B&&(tz.clearTimeout(t.B),t.B=null)}function nw(t){0==t.l.H||t.J||iN(t.l,t)}function nE(t){nv(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,ez(t.V),eX(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function nb(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||nX(n.i,t))){if(!t.K&&nX(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(n.g.G+3e3<t.G)iD(n),iv(n);else break t}iA(n),e6(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=e3(tW(n.ib,n),6e3));if(1>=nW(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else iR(n,11)}else if((t.K||n.g==t)&&iD(n),!t4(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let o=r[e];if(n.V=o[0],o=o[1],2==n.H){if("c"==o[0]){n.K=o[1],n.pa=o[2];let e=o[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));let r=o[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;let h=t.g;if(h){let t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(nY(s,s.h),s.h=null))}if(i.F){let t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,nN(i.I,i.F,t))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),(i=n).wa=iL(i,i.J?i.pa:null,i.Y),t.K){nJ(i.i,t);var a=i.L;a&&t.setTimeout(a),t.B&&(nv(t),nm(t)),i.g=t}else iS(i);0<n.j.length&&iE(n)}else"stop"!=o[0]&&"close"!=o[0]||iR(n,7)}else 3==n.H&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?iR(n,7):iy(n):"noop"!=o[0]&&n.h&&n.h.Aa(o),n.A=0)}}e9(4)}catch(t){}}function nT(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(tq(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(tq(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(let i in e=[],n=0,t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(tq(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(tB=no.prototype).setTimeout=function(t){this.P=t},tB.nb=function(t){t=t.target;let e=this.M;e&&3==iu(t)?e.l():this.Pa(t)},tB.Pa=function(t){try{if(t==this.g)t:{let u=iu(this.g);var e=this.g.Ia();let c=this.g.da();if(!(3>u)&&(3!=u||ee||this.g&&(this.h.h||this.g.ja()||ic(this.g)))){this.J||4!=u||7==e||(8==e||0>=c?e9(3):e9(2)),nv(this);var n=this.g.da();this.ca=n;e:if(np(this)){var i=ic(this.g);t="";var r=i.length,s=4==iu(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){nE(this),nw(this);var a="";break e}this.h.i=new tz.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,a){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+a})}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var o,l=this.g;if((o=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!t4(o)){var h=o;break e}}h=null}if(n=h)eJ(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nb(this,n);else{this.i=!1,this.o=3,e6(12),nE(this),nw(this);break t}}this.S?(ng(this,u,a),ee&&this.i&&3==u&&(eW(this.U,this.V,"tick",this.mb),this.V.start())):(eJ(this.j,this.m,a,null),nb(this,a)),4==u&&nE(this),this.i&&!this.J&&(4==u?iN(this.l,this):(this.i=!1,nm(this)))}else(function(t){let e={};t=(t.g&&2<=iu(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(t4(t[i]))continue;var n=function(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}(t[i]);let r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(let n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.o=3,e6(12)):(this.o=0,e6(13)),nE(this),nw(this)}}}catch(t){}finally{}},tB.mb=function(){if(this.g){var t=iu(this.g),e=this.g.ja();this.C<e.length&&(nv(this),ng(this,t,e),this.i&&4!=t&&nm(this))}},tB.cancel=function(){this.J=!0,nE(this)},tB.lb=function(){this.B=null;let t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.A),2!=this.L&&(e9(),e6(17)),nE(this),this.o=2,nw(this)):ny(this,this.Y-t)};var nI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nS(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nS){this.h=t.h,nC(this,t.j),this.s=t.s,this.g=t.g,n_(this,t.m),this.l=t.l;var e=t.i,n=new nU;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),nD(this,n),this.o=t.o}else t&&(e=String(t).match(nI))?(this.h=!1,nC(this,e[1]||"",!0),this.s=nR(e[2]||""),this.g=nR(e[3]||"",!0),n_(this,e[4]),this.l=nR(e[5]||"",!0),nD(this,e[6]||"",!0),this.o=nR(e[7]||"")):(this.h=!1,this.i=new nU(null,this.h))}function nA(t){return new nS(t)}function nC(t,e,n){t.j=n?nR(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function n_(t,e){if(e){if(isNaN(e=Number(e))||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function nD(t,e,n){var i,r;e instanceof nU?(t.i=e,i=t.i,(r=t.h)&&!i.j&&(nB(i),i.i=null,i.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(nj(this,e),nH(this,n,t))},i)),i.j=r):(n||(e=nO(e,nF)),t.i=new nU(e,t.h))}function nN(t,e,n){t.i.set(e,n)}function nk(t){return nN(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nR(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function nO(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,nL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nL(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}nS.prototype.toString=function(){var t=[],e=this.j;e&&t.push(nO(e,nx,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(nO(e,nx,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(nO(n,"/"==n.charAt(0)?nP:nM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",nO(n,nV)),t.join("")};var nx=/[#\/\?@]/g,nM=/[#\?:]/g,nP=/[#\?]/g,nF=/[#\?@]/g,nV=/#/g;function nU(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nB(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function nj(t,e){nB(t),e=nz(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function n$(t,e){return nB(t),e=nz(t,e),t.g.has(e)}function nH(t,e,n){nj(t,e),0<n.length&&(t.i=null,t.g.set(nz(t,e),t0(n)),t.h+=n.length)}function nz(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(tB=nU.prototype).add=function(t,e){nB(this),this.i=null,t=nz(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},tB.forEach=function(t,e){nB(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},tB.ta=function(){nB(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){let r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},tB.Z=function(t){nB(this);let e=[];if("string"==typeof t)n$(this,t)&&(e=e.concat(this.g.get(nz(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},tB.set=function(t,e){return nB(this),this.i=null,n$(this,t=nz(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},tB.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},tB.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];let s=encodeURIComponent(String(i)),a=this.Z(i);for(i=0;i<a.length;i++){var r=s;""!==a[i]&&(r+="="+encodeURIComponent(String(a[i]))),t.push(r)}}return this.i=t.join("&")};var nq=class{constructor(t,e){this.g=t,this.map=e}};function nG(t){this.l=t||nK,t=tz.PerformanceNavigationTiming?0<(t=tz.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(tz.g&&tz.g.Ka&&tz.g.Ka()&&tz.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nK=10;function nQ(t){return!!t.h||!!t.g&&t.g.size>=t.j}function nW(t){return t.h?1:t.g?t.g.size:0}function nX(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function nY(t,e){t.g?t.g.add(e):t.h=e}function nJ(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function nZ(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return t0(t.i)}nG.prototype.cancel=function(){if(this.i=nZ(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}};var n0=class{stringify(t){return tz.JSON.stringify(t,void 0)}parse(t){return tz.JSON.parse(t,void 0)}};function n1(){this.g=new n0}function n2(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function n9(t){this.l=t.fc||null,this.j=t.ob||!1}function n4(t,e){eO.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=n6,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tY(n9,nt),n9.prototype.g=function(){return new n4(this.l,this.j)},n9.prototype.i=(n={},function(){return n}),tY(n4,eO);var n6=0;function n5(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function n3(t){t.readyState=4,t.l=null,t.j=null,t.A=null,n7(t)}function n7(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(tB=n4.prototype).open=function(t,e){if(this.readyState!=n6)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,n7(this)},tB.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||tz).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},tB.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,n3(this)),this.readyState=n6},tB.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,n7(this)),this.g&&(this.readyState=3,n7(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==tz.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;n5(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))}},tB.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?n3(this):n7(this),3==this.readyState&&n5(this)}},tB.Za=function(t){this.g&&(this.response=this.responseText=t,n3(this))},tB.Ya=function(t){this.g&&(this.response=t,n3(this))},tB.ka=function(){this.g&&n3(this)},tB.setRequestHeader=function(t,e){this.v.append(t,e)},tB.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},tB.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)t.push((n=n.value)[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(n4.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var n8=tz.JSON.parse;function it(t){eO.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ie,this.L=this.M=!1}tY(it,eO);var ie="",ii=/^https?$/i,ir=["POST","PUT"];function is(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ia(t),il(t)}function ia(t){t.F||(t.F=!0,eL(t,"complete"),eL(t,"error"))}function io(t){if(t.h&&void 0!==tH&&(!t.C[1]||4!=iu(t)||2!=t.da())){if(t.v&&4==iu(t))eq(t.La,0,t);else if(eL(t,"readystatechange"),4==iu(t)){t.h=!1;try{let a=t.da();switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e,n,i=!0;break;default:i=!1}if(!(e=i)){if(n=0===a){var r=String(t.I).match(nI)[1]||null;!r&&tz.self&&tz.self.location&&(r=tz.self.location.protocol.slice(0,-1)),n=!ii.test(r?r.toLowerCase():"")}e=n}if(e)eL(t,"complete"),eL(t,"success");else{t.m=6;try{var s=2<iu(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",ia(t)}}finally{il(t)}}}}function il(t,e){if(t.g){ih(t);let n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||eL(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function ih(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(tz.clearTimeout(t.A),t.A=null)}function iu(t){return t.g?t.g.readyState:0}function ic(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ie:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function id(t){let e="";return em(t,function(t,n){e+=n+":"+t+"\r\n"}),e}function ip(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=id(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):nN(t,e,n))}function ig(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function im(t){this.Ga=0,this.j=[],this.l=new eY,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ig("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ig("baseRetryDelayMs",5e3,t),this.hb=ig("retryDelaySeedMs",1e4,t),this.eb=ig("forwardChannelMaxRetries",2,t),this.xa=ig("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nG(t&&t.concurrentRequestLimit),this.Ja=new n1,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function iy(t){if(iw(t),3==t.H){var e=t.W++,n=nA(t.I);if(nN(n,"SID",t.K),nN(n,"RID",e),nN(n,"TYPE","terminate"),iT(t,n),(e=new no(t,t.l,e)).L=2,e.v=nk(nA(n)),n=!1,tz.navigator&&tz.navigator.sendBeacon)try{n=tz.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&tz.Image&&((new Image).src=e.v,n=!0),n||(e.g=ix(e.l,null),e.g.ha(e.v)),e.G=Date.now(),nm(e)}iO(t)}function iv(t){t.g&&(iC(t),t.g.cancel(),t.g=null)}function iw(t){iv(t),t.u&&(tz.clearTimeout(t.u),t.u=null),iD(t),t.i.cancel(),t.m&&("number"==typeof t.m&&tz.clearTimeout(t.m),t.m=null)}function iE(t){if(!nQ(t.i)&&!t.m){t.m=!0;var e=t.Na;eV||ej(),eU||(eV(),eU=!0),eB.add(e,t),t.C=0}}function ib(t,e){var n;n=e?e.m:t.W++;let i=nA(t.I);nN(i,"SID",t.K),nN(i,"RID",n),nN(i,"AID",t.V),iT(t,i),t.o&&t.s&&ip(i,t.o,t.s),n=new no(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=iI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),nY(t.i,n),nf(n,i,e)}function iT(t,e){t.na&&em(t.na,function(t,n){nN(e,n,t)}),t.h&&nT({},function(t,n){nN(e,n,t)})}function iI(t,e,n){n=Math.min(t.j.length,n);var i=t.h?tW(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){let t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=r[a].g,o=r[a].map;if(0>(n-=e))e=Math.max(0,r[a].g-100),s=!1;else try{!function(t,e,n){let i=n||"";try{nT(t,function(t,n){let r=t;tG(t)&&(r=eM(t)),e.push(i+n+"="+encodeURIComponent(r))})}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}(o,t,"req"+n+"_")}catch(t){i&&i(o)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function iS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;eV||ej(),eU||(eV(),eU=!0),eB.add(e,t),t.A=0}}function iA(t){return!t.g&&!t.u&&!(3<=t.A)&&(t.ba++,t.u=e3(tW(t.Ma,t),ik(t,t.A)),t.A++,!0)}function iC(t){null!=t.B&&(tz.clearTimeout(t.B),t.B=null)}function i_(t){t.g=new no(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=nA(t.wa);nN(e,"RID","rpc"),nN(e,"SID",t.K),nN(e,"AID",t.V),nN(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&nN(e,"TO",t.qa),nN(e,"TYPE","xmlhttp"),iT(t,e),t.o&&t.s&&ip(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=nk(nA(e)),n.s=null,n.S=!0,nd(n,t)}function iD(t){null!=t.v&&(tz.clearTimeout(t.v),t.v=null)}function iN(t,e){var n=null;if(t.g==e){iD(t),iC(t),t.g=null;var i=2}else{if(!nX(t.i,e))return;n=e.F,nJ(t.i,e),i=1}if(0!=t.H){if(e.i){if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r,s=t.C;eL(i=e1(),new e5(i,n)),iE(t)}else iS(t)}else if(3==(s=e.o)||0==s&&0<e.ca||!(1==i&&(r=e,!(nW(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=r.F.concat(t.j),!0):1!=t.H&&2!=t.H&&!(t.C>=(t.cb?0:t.eb))&&(t.m=e3(tW(t.Na,t,r),ik(t,t.C)),t.C++,!0)))||2==i&&iA(t)))switch(n&&0<n.length&&((e=t.i).i=e.i.concat(n)),s){case 1:iR(t,5);break;case 4:iR(t,10);break;case 3:iR(t,6);break;default:iR(t,2)}}}function ik(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function iR(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=tW(t.pb,t);n||(n=new nS("//www.google.com/images/cleardot.gif"),tz.location&&"http"==tz.location.protocol||nC(n,"https"),nk(n)),function(t,e){let n=new eY;if(tz.Image){let i=new Image;i.onload=tX(n2,n,i,"TestLoadImage: loaded",!0,e),i.onerror=tX(n2,n,i,"TestLoadImage: error",!1,e),i.onabort=tX(n2,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=tX(n2,n,i,"TestLoadImage: timeout",!1,e),tz.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(n.toString(),i)}else e6(2);t.H=0,t.h&&t.h.za(e),iO(t),iw(t)}function iO(t){if(t.H=0,t.ma=[],t.h){let e=nZ(t.i);(0!=e.length||0!=t.j.length)&&(t1(t.ma,e),t1(t.ma,t.j),t.i.i.length=0,t0(t.j),t.j.length=0),t.h.ya()}}function iL(t,e,n){var i=n instanceof nS?nA(n):new nS(n);if(""!=i.g)e&&(i.g=e+"."+i.g),n_(i,i.m);else{var r=tz.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new nS(null);i&&nC(s,i),e&&(s.g=e),r&&n_(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&nN(i,n,e),nN(i,"VER",t.ra),iT(t,i),i}function ix(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new it(n&&t.Ha&&!t.va?new n9({ob:!0}):t.va)).Oa(t.J),e}function iM(){}function iP(){if(t8&&!(10<=Number(eh)))throw Error("Environmental error: no available transport.")}function iF(t,e){eO.call(this),this.g=new im(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!t4(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!t4(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new iB(this)}function iV(t){nr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(let n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function iU(){ns.call(this),this.status=1}function iB(t){this.g=t}function ij(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function i$(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],a=e+(s^n&(r^s))+i[0]+3614090360&4294967295;a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[1]+3905402710&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[2]+606105819&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[3]+3250441966&4294967295,a=e+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[4]+4118548399&4294967295,a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[5]+1200080426&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[6]+2821735955&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[7]+4249261313&4294967295,a=e+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[8]+1770035416&4294967295,a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[9]+2336552879&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[10]+4294925233&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[11]+2304563134&4294967295,a=e+(s^(n=r+(a<<22&4294967295|a>>>10))&(r^s))+i[12]+1804603682&4294967295,a=s+(r^(e=n+(a<<7&4294967295|a>>>25))&(n^r))+i[13]+4254626195&4294967295,a=r+(n^(s=e+(a<<12&4294967295|a>>>20))&(e^n))+i[14]+2792965006&4294967295,a=n+(e^(r=s+(a<<17&4294967295|a>>>15))&(s^e))+i[15]+1236535329&4294967295,n=r+(a<<22&4294967295|a>>>10),a=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(a<<20&4294967295|a>>>12),a=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(a<<5&4294967295|a>>>27),a=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(a<<9&4294967295|a>>>23),a=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(a<<14&4294967295|a>>>18),a=n+(s^e&(r^s))+i[12]+2368359562&4294967295,a=e+((n=r+(a<<20&4294967295|a>>>12))^r^s)+i[5]+4294588738&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[8]+2272392833&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[11]+1839030562&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[14]+4259657740&4294967295,a=e+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[1]+2763975236&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[4]+1272893353&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[7]+4139469664&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[10]+3200236656&4294967295,a=e+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[13]+681279174&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[0]+3936430074&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[3]+3572445317&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[6]+76029189&4294967295,a=e+((n=r+(a<<23&4294967295|a>>>9))^r^s)+i[9]+3654602809&4294967295,a=s+((e=n+(a<<4&4294967295|a>>>28))^n^r)+i[12]+3873151461&4294967295,a=r+((s=e+(a<<11&4294967295|a>>>21))^e^n)+i[15]+530742520&4294967295,a=n+((r=s+(a<<16&4294967295|a>>>16))^s^e)+i[2]+3299628645&4294967295,n=r+(a<<23&4294967295|a>>>9),a=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(a<<21&4294967295|a>>>11),a=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(a<<6&4294967295|a>>>26),a=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(a<<10&4294967295|a>>>22),a=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(a<<15&4294967295|a>>>17),a=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(a<<21&4294967295|a>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function iH(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(tB=it.prototype).Oa=function(t){this.M=t},tB.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():s.g(),this.C=this.u?ne(this.u):ne(s),this.g.onreadystatechange=tW(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){is(this,t);return}if(t=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let t of i.keys())n.set(t,i.get(t));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[s,a]of(i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=tz.FormData&&t instanceof tz.FormData,!(0<=tZ(ir,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var a;ih(this),0<this.B&&((this.L=(a=this.g,t8&&"number"==typeof a.timeout&&void 0!==a.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=tW(this.ua,this)):this.A=eq(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){is(this,t)}},tB.ua=function(){void 0!==tH&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,eL(this,"timeout"),this.abort(8))},tB.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,eL(this,"complete"),eL(this,"abort"),il(this))},tB.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),il(this,!0)),it.$.N.call(this)},tB.La=function(){this.s||(this.G||this.v||this.l?io(this):this.kb())},tB.kb=function(){io(this)},tB.isActive=function(){return!!this.g},tB.da=function(){try{return 2<iu(this)?this.g.status:-1}catch(t){return -1}},tB.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},tB.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),n8(e)}},tB.Ia=function(){return this.m},tB.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(tB=im.prototype).ra=8,tB.H=1,tB.Na=function(t){if(this.m){if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let r=new no(this,this.l,t),s=this.s;if(this.U&&(s?ew(s=ey(s),this.U):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var i=this.j[n];if("__data__"in i.map&&"string"==typeof(i=i.map.__data__)){i=i.length;break e}i=void 0}if(void 0===i)break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=iI(this,r,e),nN(n=nA(this.I),"RID",t),nN(n,"CVER",22),this.F&&nN(n,"X-HTTP-Session-Id",this.F),iT(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(id(s)))+"&"+e:this.o&&ip(n,this.o,s)),nY(this.i,r),this.bb&&nN(n,"TYPE","init"),this.P?(nN(n,"$req",e),nN(n,"SID","null"),r.aa=!0,nf(r,n,null)):nf(r,n,e),this.H=2}}else 3==this.H&&(t?ib(this,t):0==this.j.length||nQ(this.i)||ib(this))}},tB.Ma=function(){if(this.u=null,i_(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=e3(tW(this.jb,this),t)}},tB.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,e6(10),iv(this),i_(this))},tB.ib=function(){null!=this.v&&(this.v=null,iv(this),iA(this),e6(19))},tB.pb=function(t){t?(this.l.info("Successfully pinged google.com"),e6(2)):(this.l.info("Failed to ping google.com"),e6(1))},tB.isActive=function(){return!!this.h&&this.h.isActive(this)},(tB=iM.prototype).Ba=function(){},tB.Aa=function(){},tB.za=function(){},tB.ya=function(){},tB.isActive=function(){return!0},tB.Va=function(){},iP.prototype.g=function(t,e){return new iF(t,e)},tY(iF,eO),iF.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;e6(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=iL(t,null,t.Y),iE(t)},iF.prototype.close=function(){iy(this.g)},iF.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=eM(t),t=n);e.j.push(new nq(e.fb++,t)),3==e.H&&iE(e)},iF.prototype.N=function(){this.g.h=null,delete this.j,iy(this.g),delete this.g,iF.$.N.call(this)},tY(iV,nr),tY(iU,ns),tY(iB,iM),iB.prototype.Ba=function(){eL(this.g,"a")},iB.prototype.Aa=function(t){eL(this.g,new iV(t))},iB.prototype.za=function(t){eL(this.g,new iU)},iB.prototype.ya=function(){eL(this.g,"b")},tY(ij,function(){this.blockSize=-1}),ij.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ij.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)i$(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){i$(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){i$(this,i),r=0;break}}this.h=r,this.i+=e},ij.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var iz={};function iq(t){return -128<=t&&128>t?Object.prototype.hasOwnProperty.call(iz,t)?iz[t]:iz[t]=new iH([0|t],0>t?-1:0):new iH([0|t],0>t?-1:0)}function iG(t){if(isNaN(t)||!isFinite(t))return iQ;if(0>t)return iZ(iG(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=iK;return new iH(e,0)}var iK=4294967296,iQ=iq(0),iW=iq(1),iX=iq(16777216);function iY(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function iJ(t){return -1==t.h}function iZ(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new iH(n,~t.h).add(iW)}function i0(t,e){return t.add(iZ(e))}function i1(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function i2(t,e){this.g=t,this.h=e}function i9(t,e){if(iY(e))throw Error("division by zero");if(iY(t))return new i2(iQ,iQ);if(iJ(t))return e=i9(iZ(t),e),new i2(iZ(e.g),iZ(e.h));if(iJ(e))return e=i9(t,iZ(e)),new i2(iZ(e.g),e.h);if(30<t.g.length){if(iJ(t)||iJ(e))throw Error("slowDivide_ only works with positive integers.");for(var n=iW,i=e;0>=i.X(t);)n=i4(n),i=i4(i);var r=i6(n,1),s=i6(i,1);for(i=i6(i,2),n=i6(n,2);!iY(i);){var a=s.add(i);0>=a.X(t)&&(r=r.add(n),s=a),i=i6(i,1),n=i6(n,1)}return e=i0(t,r.R(e)),new i2(r,e)}for(r=iQ;0<=t.X(e);){for(i=48>=(i=Math.ceil(Math.log(n=Math.max(1,Math.floor(t.ea()/e.ea())))/Math.LN2))?1:Math.pow(2,i-48),a=(s=iG(n)).R(e);iJ(a)||0<a.X(t);)n-=i,a=(s=iG(n)).R(e);iY(s)&&(s=iW),r=r.add(s),t=i0(t,a)}return new i2(r,t)}function i4(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new iH(n,t.h)}function i6(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new iH(r,t.h)}(tB=iH.prototype).ea=function(){if(iJ(this))return-iZ(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:iK+i)*e,e*=iK}return t},tB.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(iY(this))return"0";if(iJ(this))return"-"+iZ(this).toString(t);for(var e=iG(Math.pow(t,6)),n=this,i="";;){var r=i9(n,e).g,s=((0<(n=i0(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(iY(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},tB.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},tB.X=function(t){return iJ(t=i0(this,t))?-1:iY(t)?0:1},tB.abs=function(){return iJ(this)?iZ(this):this},tB.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),a=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=a>>>16,s&=65535,a&=65535,n[r]=a<<16|s}return new iH(n,-2147483648&n[n.length-1]?-1:0)},tB.R=function(t){if(iY(this)||iY(t))return iQ;if(iJ(this))return iJ(t)?iZ(this).R(iZ(t)):iZ(iZ(this).R(t));if(iJ(t))return iZ(this.R(iZ(t)));if(0>this.X(iX)&&0>t.X(iX))return iG(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,a=65535&this.D(i),o=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=a*l,i1(n,2*i+2*r),n[2*i+2*r+1]+=s*l,i1(n,2*i+2*r+1),n[2*i+2*r+1]+=a*o,i1(n,2*i+2*r+1),n[2*i+2*r+2]+=s*o,i1(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new iH(n,0)},tB.gb=function(t){return i9(this,t).h},tB.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new iH(n,this.h&t.h)},tB.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new iH(n,this.h|t.h)},tB.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new iH(n,this.h^t.h)},iP.prototype.createWebChannel=iP.prototype.g,iF.prototype.send=iF.prototype.u,iF.prototype.open=iF.prototype.m,iF.prototype.close=iF.prototype.close,e7.NO_ERROR=0,e7.TIMEOUT=8,e7.HTTP_ERROR=6,e8.COMPLETE="complete",nn.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",eO.prototype.listen=eO.prototype.O,it.prototype.listenOnce=it.prototype.P,it.prototype.getLastError=it.prototype.Sa,it.prototype.getLastErrorCode=it.prototype.Ia,it.prototype.getStatus=it.prototype.da,it.prototype.getResponseJson=it.prototype.Wa,it.prototype.getResponseText=it.prototype.ja,it.prototype.send=it.prototype.ha,it.prototype.setWithCredentials=it.prototype.Oa,ij.prototype.digest=ij.prototype.l,ij.prototype.reset=ij.prototype.reset,ij.prototype.update=ij.prototype.j,iH.prototype.add=iH.prototype.add,iH.prototype.multiply=iH.prototype.R,iH.prototype.modulo=iH.prototype.gb,iH.prototype.compare=iH.prototype.X,iH.prototype.toNumber=iH.prototype.ea,iH.prototype.toString=iH.prototype.toString,iH.prototype.getBits=iH.prototype.D,iH.fromNumber=iG,iH.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return iZ(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=iG(Math.pow(n,8)),r=iQ,s=0;s<e.length;s+=8){var a=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+a),n);8>a?(a=iG(Math.pow(n,a)),r=r.R(a).add(iG(o))):r=(r=r.R(i)).add(iG(o))}return r};var i5=t$.createWebChannelTransport=function(){return new iP},i3=t$.getStatEventTarget=function(){return e1()},i7=t$.ErrorCode=e7,i8=t$.EventType=e8,rt=t$.Event=eZ,re=t$.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},rn=t$.FetchXmlHttpFactory=n9,ri=t$.WebChannel=nn,rr=t$.XhrIo=it;t$.Md5=ij;var rs=t$.Integer=iH;const ra="@firebase/firestore";/**
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
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */class ro{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}/**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}/** A user with a null UID. */ro.UNAUTHENTICATED=new ro(null),// non-FirebaseAuth providers.
ro.GOOGLE_CREDENTIALS=new ro("google-credentials-uid"),ro.FIRST_PARTY=new ro("first-party-uid"),ro.MOCK_USER=new ro("mock-user");/**
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
 */const rh=new Y("@firebase/firestore");// Helper methods are needed because variables can't be exported as read/write
function ru(){return rh.logLevel}function rc(t,...e){if(rh.logLevel<=tU.DEBUG){let n=e.map(rp);rh.debug(`Firestore (${rl}): ${t}`,...n)}}function rf(t,...e){if(rh.logLevel<=tU.ERROR){let n=e.map(rp);rh.error(`Firestore (${rl}): ${t}`,...n)}}/**
 * @internal
 */function rd(t,...e){if(rh.logLevel<=tU.WARN){let n=e.map(rp);rh.warn(`Firestore (${rl}): ${t}`,...n)}}/**
 * Converts an additional log parameter to a string representation.
 */function rp(t){if("string"==typeof t)return t;try{return JSON.stringify(t)}catch(e){// Converting to JSON failed, just log the object directly
return t}}/**
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
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */function rg(t="Unexpected state"){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let e=`FIRESTORE (${rl}) INTERNAL ASSERTION FAILED: `+t;// NOTE: We don't use FirestoreError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw rf(e),Error(e)}/**
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
 */const rm={// Causes are copied from:
// https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
/** Not an error; returned on success. */OK:"ok",/** The operation was cancelled (typically by the caller). */CANCELLED:"cancelled",/** Unknown error or an error from a different error domain. */UNKNOWN:"unknown",/**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */INVALID_ARGUMENT:"invalid-argument",/**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */DEADLINE_EXCEEDED:"deadline-exceeded",/** Some requested entity (e.g., file or directory) was not found. */NOT_FOUND:"not-found",/**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */ALREADY_EXISTS:"already-exists",/**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */PERMISSION_DENIED:"permission-denied",/**
     * The request does not have valid authentication credentials for the
     * operation.
     */UNAUTHENTICATED:"unauthenticated",/**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */RESOURCE_EXHAUSTED:"resource-exhausted",/**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */FAILED_PRECONDITION:"failed-precondition",/**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */ABORTED:"aborted",/**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */OUT_OF_RANGE:"out-of-range",/** Operation is not implemented or not supported/enabled in this service. */UNIMPLEMENTED:"unimplemented",/**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */INTERNAL:"internal",/**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */UNAVAILABLE:"unavailable",/** Unrecoverable data loss or corruption. */DATA_LOSS:"data-loss"};/** An error returned by a Firestore operation. */class ry extends P{/** @hideconstructor */constructor(/**
     * The backend error code associated with this error.
     */t,/**
     * A custom error description.
     */e){super(t,e),this.code=t,this.message=e,// class and so inheritance does not work correctly. We could alternatively
// do the same "back-door inheritance" trick that FirebaseError does.
this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rw{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}/**
 * A CredentialsProvider that always yields an empty token.
 * @internal
 */class rE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){// Fire with initial user.
t.enqueueRetryable(()=>e(ro.UNAUTHENTICATED))}shutdown(){}}/**
 * A CredentialsProvider that always returns a constant token. Used for
 * emulator token mocking.
 */class rb{constructor(t){this.token=t,/**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class rT{constructor(t){this.t=t,/** Tracks the current User. */this.currentUser=ro.UNAUTHENTICATED,/**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i,i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve(),r=new rv;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new rv,t.enqueueRetryable(()=>i(this.currentUser))};let s=()=>{let e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},a=t=>{rc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>a(t)),// a chance to register itself with the component framework before we
// determine whether to start up in unauthenticated mode.
setTimeout(()=>{if(!this.auth){let t=this.t.getImmediate({optional:!0});t?a(t):(rc("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new rv)}},0),s()}getToken(){// Take note of the current value of the tokenCounter so that this method
// can fail (with an ABORTED error) if there is a token change while the
// request is outstanding.
let t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>// outstanding so the response is potentially for a previous user (which
    // user, we can't be sure).
    this.i!==t?(rc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?("string"==typeof e.accessToken||rg(),new rw(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}// Auth.getUid() can return null even with a user logged in. It is because
// getUid() is synchronous, but the auth code populating Uid is asynchronous.
// This method should only be called in the AuthTokenListener callback
// to guarantee to get the actual user.
u(){let t=this.auth&&this.auth.getUid();return null===t||"string"==typeof t||rg(),new ro(t)}}/*
 * FirstPartyToken provides a fresh token each time its value
 * is requested, because if the token is too old, requests will be rejected.
 * Technically this may no longer be necessary since the SDK should gracefully
 * recover from unauthenticated errors (see b/33147818 for context), but it's
 * safer to keep the implementation as-is.
 */class rI{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ro.FIRST_PARTY,this.g=new Map}/**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);// Use array notation to prevent minification
let t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}/*
 * Provides user credentials required for the Firestore JavaScript SDK
 * to authenticate the user, using technique that is only available
 * to applications hosted by Google.
 */class rS{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new rI(this.h,this.l,this.m))}start(t,e){// Fire with initial uid.
t.enqueueRetryable(()=>e(ro.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rC{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){let n=t=>{null!=t.error&&rc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);let n=t.token!==this.T;return this.T=t.token,rc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};let i=t=>{rc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit(t=>i(t)),// a chance to register itself with the component framework.
setTimeout(()=>{if(!this.appCheck){let t=this.I.getImmediate({optional:!0});t?i(t):rc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?("string"==typeof t.token||rg(),this.T=t.token,new rA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class r_{static A(){// Alphanumeric characters
let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";for(;n.length<20;){let i=/**
 * Builds a CredentialsProvider depending on the type of
 * the credentials passed in.
 *//**
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
 *//**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */function(t){// Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
let e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}(40);for(let r=0;r<i.length;++r)// be evenly mapped to indices of `chars` via a modulo operation.
n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function rD(t,e){return t<e?-1:t>e?1:0}/** Helper to compare arrays using isEqual(). */function rN(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}/**
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
 */// The earliest date supported by Firestore timestamps (0001-01-01T00:00:00Z).
/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */class rk{/**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */constructor(/**
     * The number of seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z.
     */t,/**
     * The fractions of a second at nanosecond resolution.*
     */e){if(this.seconds=t,this.nanoseconds=e,e<0||e>=1e9)throw new ry(rm.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800||t>=253402300800)throw new ry(rm.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}/**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */static now(){return rk.fromMillis(Date.now())}/**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */static fromDate(t){return rk.fromMillis(t.getTime())}/**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */static fromMillis(t){let e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new rk(e,n)}/**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */toDate(){return new Date(this.toMillis())}/**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rD(this.nanoseconds,t.nanoseconds):rD(this.seconds,t.seconds)}/**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}/** Returns a textual representation of this `Timestamp`. */toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}/** Returns a JSON-serializable representation of this `Timestamp`. */toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}/**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */valueOf(){// This method returns a string of the form <seconds>.<nanoseconds> where
// <seconds> is translated to have a non-negative value and both <seconds>
// and <nanoseconds> are left-padded with zeroes to be a consistent length.
// Strings with this format then have a lexiographical ordering that matches
// the expected ordering. The <seconds> translation is done to avoid having
// a leading negative sign (i.e. a leading '-' character) in its string
// representation, which would affect its lexiographical ordering.
let t=this.seconds- -62135596800;// Note: Up to 12 decimal digits are required to represent all valid
// 'seconds' values.
return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */class rR{constructor(t){this.timestamp=t}static fromTimestamp(t){return new rR(t)}static min(){return new rR(new rk(0,0))}static max(){return new rR(new rk(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}/** Returns a number representation of the version for use in spec tests. */toMicroseconds(){// Convert to microseconds.
return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 * Path represents an ordered sequence of string segments.
 */class rO{constructor(t,e,n){void 0===e?e=0:e>t.length&&rg(),void 0===n?n=t.length-e:n>t.length-e&&rg(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===rO.comparator(this,t)}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof rO?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}/** The index of one past the last segment of the path. */limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let n=Math.min(t.length,e.length);for(let i=0;i<n;i++){let n=t.get(i),r=e.get(i);if(n<r)return -1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 *
 * @internal
 */class rL extends rO{construct(t,e,n){return new rL(t,e,n)}canonicalString(){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
return this.toArray().join("/")}toString(){return this.canonicalString()}/**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */static fromString(...t){// NOTE: The client is ignorant of any path segments containing escape
// sequences (e.g. __id123__) and just passes them through raw (they exist
// for legacy reasons and should not be used frequently).
let e=[];for(let n of t){if(n.indexOf("//")>=0)throw new ry(rm.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);// Strip leading and traling slashed.
e.push(...n.split("/").filter(t=>t.length>0))}return new rL(e)}static emptyPath(){return new rL([])}}const rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;/**
 * A dot-separated path for navigating sub-objects within a document.
 * @internal
 */class rM extends rO{construct(t,e,n){return new rM(t,e,n)}/**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */static isValidIdentifier(t){return rx.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rM.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}/**
     * Returns true if this field references the key of a document.
     */isKeyField(){return 1===this.length&&"__name__"===this.get(0)}/**
     * The field designating the key of a document.
     */static keyField(){return new rM(["__name__"])}/**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */static fromServerFormat(t){let e=[],n="",i=0,r=()=>{if(0===n.length)throw new ry(rm.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""},s=!1;for(;i<t.length;){let e=t[i];if("\\"===e){if(i+1===t.length)throw new ry(rm.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ry(rm.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?s=!s:"."!==e||s?n+=e:r(),i++}if(r(),s)throw new ry(rm.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rM(e)}static emptyPath(){return new rM([])}}/**
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
 * @internal
 */class rP{constructor(t){this.path=t}static fromPath(t){return new rP(rL.fromString(t))}static fromName(t){return new rP(rL.fromString(t).popFirst(5))}static empty(){return new rP(rL.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}/** Returns true if the document is in the specified collectionId. */hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}/** Returns the collection group (i.e. the name of the parent collection) for this key. */getCollectionGroup(){return this.path.get(this.path.length-2)}/** Returns the fully qualified path to the parent collection. */getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===rL.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return rL.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}/**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */static fromSegments(t){return new rP(new rL(t.slice()))}}/**
 * Stores the latest read time, document and batch ID that were processed for an
 * index.
 */class rF{constructor(/**
     * The latest read time version that has been indexed by Firestore for this
     * field index.
     */t,/**
     * The key of the last document that was indexed for this query. Use
     * `DocumentKey.empty()` if no document has been indexed.
     */e,/*
     * The largest mutation batch id that's been processed by Firestore.
     */n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}/** Returns an offset that sorts before all regular offsets. */static min(){return new rF(rR.min(),rP.empty(),-1)}/** Returns an offset that sorts after all regular offsets. */static max(){return new rF(rR.max(),rP.empty(),-1)}}/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */class rV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
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
 *//**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */class rB{constructor(t){// NOTE: next/catchCallback will always point to our own wrapper functions,
// not the user's raw next() or catch() callbacks.
this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,// chaining.
this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&// value should be defined unless T is Void, but we can't express
// that in the type system.
this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&rg(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new rB((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{let e=t();return e instanceof rB?e:rB.resolve(e)}catch(t){return rB.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):rB.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):rB.reject(e)}static resolve(t){return new rB((e,n)=>{e(t)})}static reject(t){return new rB((e,n)=>{n(t)})}static waitFor(// eslint-disable-next-line @typescript-eslint/no-explicit-any
t){return new rB((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}/**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */static or(t){let e=rB.resolve(!1);for(let n of t)e=e.next(t=>t?rB.resolve(t):n());return e}static forEach(t,e){let n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}/**
     * Concurrently map all array elements through asynchronous function.
     */static mapArray(t,e){return new rB((n,i)=>{let r=t.length,s=Array(r),a=0;for(let o=0;o<r;o++){let l=o;e(t[l]).next(t=>{s[l]=t,++a===r&&n(s)},t=>i(t))}})}/**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */static doWhile(t,e){return new rB((n,i)=>{let r=()=>{!0===t()?e().next(()=>{r()},i):n()};r()})}}/** Verifies whether `e` is an IndexedDbTransactionError. */function rj(t){// Use name equality, as instanceof checks on errors don't work with errors
// that wrap other errors.
return"IndexedDbTransactionError"===t.name}/**
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
 *//**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */class r${constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this.ut&&this.ut(t),t}}/** Returns whether the value represents -0. */function rH(t){// Detect if the value is -0.0. Based on polyfill from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
return 0===t&&1/t==-1/0}/**
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
 */// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
class rK{constructor(t,e){this.comparator=t,this.root=e||rW.EMPTY}// Returns a copy of the map, with the specified key/value added or replaced.
insert(t,e){return new rK(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rW.BLACK,null,null))}// Returns a copy of the map, with the specified key removed.
remove(t){return new rK(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rW.BLACK,null,null))}// Returns the value of the node with the given key, or null.
get(t){let e=this.root;for(;!e.isEmpty();){let n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}// Returns the index of the element in this sorted map, or -1 if it doesn't
// exist.
indexOf(t){// Number of nodes that were pruned when descending right
let e=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}// Node not found
return -1}isEmpty(){return this.root.isEmpty()}// Returns the total number of nodes in the map.
get size(){return this.root.size}// Returns the minimum key in the map.
minKey(){return this.root.minKey()}// Returns the maximum key in the map.
maxKey(){return this.root.maxKey()}// Traverses the map in key order and calls the specified action function
// for each key/value pair. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){let t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}// Traverses the map in reverse key order and calls the specified action
// function for each key/value pair. If action returns true, traversal is
// aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(t){return this.root.reverseTraversal(t)}// Returns an iterator over the SortedMap.
getIterator(){return new rQ(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rQ(this.root,t,this.comparator,!1)}getReverseIterator(){return new rQ(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rQ(this.root,t,this.comparator,!0)}}// end SortedMap
// An iterator over an LLRBNode.
class rQ{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){// This node is exactly equal to our start key. Push it on the stack,
// but stop iterating;
this.nodeStack.push(t);break}// This node is greater than our start key, add it to the stack and move
// to the next one
this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}// end SortedMapIterator
// Represents a node in a Left-leaning Red-Black tree.
class rW{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:rW.RED,this.left=null!=i?i:rW.EMPTY,this.right=null!=r?r:rW.EMPTY,this.size=this.left.size+1+this.right.size}// Returns a copy of the current node, optionally replacing pieces of it.
copy(t,e,n,i,r){return new rW(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}// Traverses the tree in key order and calls the specified action function
// for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}// Traverses the tree in reverse key order and calls the specified action
// function for each node. If action returns true, traversal is aborted.
// Returns the first truthy value returned by action, or the last falsey
// value returned by action.
reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}// Returns the minimum node in the tree.
min(){return this.left.isEmpty()?this:this.left.min()}// Returns the maximum key in the tree.
minKey(){return this.min().key}// Returns the maximum key in the tree.
maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}// Returns new tree, with the key/value added.
insert(t,e,n){let i=this,r=n(t,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n))).fixUp()}removeMin(){if(this.left.isEmpty())return rW.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),(t=t.copy(null,null,null,t.left.removeMin(),null)).fixUp()}// Returns new tree, with the specified item removed.
remove(t,e){let n,i=this;if(0>e(t,i.key))i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return rW.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}// Returns new tree after performing any needed rotations.
fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=(t=(t=t.copy(null,null,null,null,t.right.rotateRight())).rotateLeft()).colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=(t=t.rotateRight()).colorFlip()),t}rotateLeft(){let t=this.copy(null,null,rW.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,rW.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}// For testing.
checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}// In a balanced RB tree, the black-depth (number of black nodes) from root to
// leaves is equal on both sides.  This function verifies that or asserts.
check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw rg();let t=this.left.check();if(t!==this.right.check())throw rg();return t+(this.isRed()?0:1)}}// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
rW.EMPTY=null,rW.RED=!0,rW.BLACK=!1,// end LLRBEmptyNode
rW.EMPTY=new class{constructor(){this.size=0}get key(){throw rg()}get value(){throw rg()}get color(){throw rg()}get left(){throw rg()}get right(){throw rg()}// Returns a copy of the current node.
copy(t,e,n,i,r){return this}// Returns a copy of the tree, with the specified key/value added.
insert(t,e,n){return new rW(t,e)}// Returns a copy of the tree, with the specified key removed.
remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}// For testing.
checkMaxDepth(){return!0}check(){return 0}};/**
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
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */class rX{constructor(t){this.comparator=t,this.data=new rK(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}/** Iterates elements in order defined by "comparator" */forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}/** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */forEachInRange(t,e){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}/**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}/** Finds the least element greater than or equal to `elem`. */firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new rY(this.data.getIterator())}getIteratorFrom(t){return new rY(this.data.getIteratorFrom(t))}/** Inserts or updates an element */add(t){return this.copy(this.data.remove(t).insert(t,!0))}/** Deletes an element */delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;// Make sure `result` always refers to the larger one of the two sets.
return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof rX)||this.size!==t.size)return!1;let e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){let t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new rX(this.comparator);return e.data=t,e}}class rY{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 *//**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */class rJ{constructor(t){this.fields=t,// Sort the field mask to support `FieldMask.isEqual()` and assert below.
t.sort(rM.comparator)}static empty(){return new rJ([])}/**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */unionWith(t){let e=new rX(rM.comparator);for(let t of this.fields)e=e.add(t);for(let n of t)e=e.add(n);return new rJ(e.toArray())}/**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */covers(t){for(let e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return rN(this.fields,t.fields,(t,e)=>t.isEqual(e))}}/**
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
 *//**
 * An error encountered while decoding base64 string.
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
 *//**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 * @internal
 */class r0{constructor(t){this.binaryString=t}static fromBase64String(t){let e=function(t){try{return atob(t)}catch(t){// Check that `DOMException` is defined before using it to avoid
// "ReferenceError: Property 'DOMException' doesn't exist" in react-native.
// (https://github.com/firebase/firebase-js-sdk/issues/7115)
throw"undefined"!=typeof DOMException&&t instanceof DOMException?new rZ("Invalid base64 string: "+t):t}}(t);return new r0(e)}static fromUint8Array(t){// TODO(indexing); Remove the copy of the byte string here as this method
// is frequently called during indexing.
let e=/**
 * Helper function to convert an Uint8array to a binary string.
 */function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new r0(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(t){let e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rD(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}r0.EMPTY_BYTE_STRING=new r0("");const r1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */function r2(t){// The json interface (for the browser) will return an iso timestamp string,
// while the proto js library (for node) will return a
// google.protobuf.Timestamp instance.
if(t||rg(),"string"==typeof t){// The date string can have higher precision (nanos) than the Date class
// (millis), so we do some custom parsing here.
// Parse the nanos right out of the string.
let e=0,n=r1.exec(t);if(n||rg(),n[1]){// Pad the fraction out to 9 digits (nanos).
let t=n[1];e=Number(t=(t+"000000000").substr(0,9))}// Parse the date to get the seconds.
let i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:r9(t.seconds),nanos:r9(t.nanos)}}/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */function r9(t){// TODO(bjornick): Handle int64 greater than 53 bits.
return"number"==typeof t?t:"string"==typeof t?Number(t):0}/** Converts the possible Proto types for Blobs into a ByteString. */function r4(t){return"string"==typeof t?r0.fromBase64String(t):r0.fromUint8Array(t)}/**
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
 *//**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */function r6(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}/**
 * Returns the local time at which this timestamp was first set.
 */function r5(t){let e=r2(t.mapValue.fields.__local_write_time__.timestampValue);return new rk(e.seconds,e.nanos)}/**
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
 */class r3{/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param longPollingOptions Options that configure long-polling.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */constructor(t,e,n,i,r,s,a,o,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}/** The default database name for a project. *//**
 * Represents the database ID a Firestore client is associated with.
 * @internal
 */class r7{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new r7("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof r7&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const r8={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};/** Extracts the backend's type order for the provided value. */function st(t){return"nullValue"in t?0/* TypeOrder.NullValue */:"booleanValue"in t?1/* TypeOrder.BooleanValue */:"integerValue"in t||"doubleValue"in t?2/* TypeOrder.NumberValue */:"timestampValue"in t?3/* TypeOrder.TimestampValue */:"stringValue"in t?5/* TypeOrder.StringValue */:"bytesValue"in t?6/* TypeOrder.BlobValue */:"referenceValue"in t?7/* TypeOrder.RefValue */:"geoPointValue"in t?8/* TypeOrder.GeoPointValue */:"arrayValue"in t?9/* TypeOrder.ArrayValue */:"mapValue"in t?r6(t)?4/* TypeOrder.ServerTimestampValue */:su(t)?9007199254740991/* TypeOrder.MaxValue */:10/* TypeOrder.ObjectValue */:rg()}/** Tests `left` and `right` for equality based on the backend semantics. */function se(t,e){if(t===e)return!0;let n=st(t);if(n!==st(e))return!1;switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return!0;case 1/* TypeOrder.BooleanValue */:return t.booleanValue===e.booleanValue;case 4/* TypeOrder.ServerTimestampValue */:return r5(t).isEqual(r5(e));case 3/* TypeOrder.TimestampValue */:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;let n=r2(t.timestampValue),i=r2(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5/* TypeOrder.StringValue */:return t.stringValue===e.stringValue;case 6/* TypeOrder.BlobValue */:return r4(t.bytesValue).isEqual(r4(e.bytesValue));case 7/* TypeOrder.RefValue */:return t.referenceValue===e.referenceValue;case 8/* TypeOrder.GeoPointValue */:return r9(t.geoPointValue.latitude)===r9(e.geoPointValue.latitude)&&r9(t.geoPointValue.longitude)===r9(e.geoPointValue.longitude);case 2/* TypeOrder.NumberValue */:return function(t,e){if("integerValue"in t&&"integerValue"in e)return r9(t.integerValue)===r9(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){let n=r9(t.doubleValue),i=r9(e.doubleValue);return n===i?rH(n)===rH(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9/* TypeOrder.ArrayValue */:return rN(t.arrayValue.values||[],e.arrayValue.values||[],se);case 10/* TypeOrder.ObjectValue */:return function(t,e){let n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(rz(n)!==rz(i))return!1;for(let t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!se(n[t],i[t])))return!1;return!0}(t,e);default:return rg()}}function sn(t,e){return void 0!==(t.values||[]).find(t=>se(t,e))}function si(t,e){if(t===e)return 0;let n=st(t),i=st(e);if(n!==i)return rD(n,i);switch(n){case 0/* TypeOrder.NullValue */:case 9007199254740991/* TypeOrder.MaxValue */:return 0;case 1/* TypeOrder.BooleanValue */:return rD(t.booleanValue,e.booleanValue);case 2/* TypeOrder.NumberValue */:return function(t,e){let n=r9(t.integerValue||t.doubleValue),i=r9(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3/* TypeOrder.TimestampValue */:return sr(t.timestampValue,e.timestampValue);case 4/* TypeOrder.ServerTimestampValue */:return sr(r5(t),r5(e));case 5/* TypeOrder.StringValue */:return rD(t.stringValue,e.stringValue);case 6/* TypeOrder.BlobValue */:return function(t,e){let n=r4(t),i=r4(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7/* TypeOrder.RefValue */:return function(t,e){let n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){let e=rD(n[t],i[t]);if(0!==e)return e}return rD(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8/* TypeOrder.GeoPointValue */:return function(t,e){let n=rD(r9(t.latitude),r9(e.latitude));return 0!==n?n:rD(r9(t.longitude),r9(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9/* TypeOrder.ArrayValue */:return function(t,e){let n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){let e=si(n[t],i[t]);if(e)return e}return rD(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10/* TypeOrder.ObjectValue */:return function(t,e){if(t===r8.mapValue&&e===r8.mapValue)return 0;if(t===r8.mapValue)return 1;if(e===r8.mapValue)return -1;let n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);// Even though MapValues are likely sorted correctly based on their insertion
// order (e.g. when received from the backend), local modifications can bring
// elements out of order. We need to re-sort the elements to ensure that
// canonical IDs are independent of insertion order.
i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){let e=rD(i[t],s[t]);if(0!==e)return e;let a=si(n[i[t]],r[s[t]]);if(0!==a)return a}return rD(i.length,s.length)}(t.mapValue,e.mapValue);default:throw rg()}}function sr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rD(t,e);let n=r2(t),i=r2(e),r=rD(n.seconds,i.seconds);return 0!==r?r:rD(n.nanos,i.nanos)}function ss(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){let e=r2(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?r4(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,rP.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(let i of t.values||[])n?n=!1:e+=",",e+=ss(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){// Iteration order in JavaScript is not guaranteed. To ensure that we generate
// matching canonical IDs for identical maps, we need to sort the keys.
let e=Object.keys(t.fields||{}).sort(),n="{",i=!0;for(let r of e)i?i=!1:n+=",",n+=`${r}:${ss(t.fields[r])}`;return n+"}"}(t.mapValue):rg()}/** Returns true if `value` is an IntegerValue . */function sa(t){return!!t&&"integerValue"in t}/** Returns true if `value` is a DoubleValue. *//** Returns true if `value` is an ArrayValue. */function so(t){return!!t&&"arrayValue"in t}/** Returns true if `value` is a MapValue. */function sl(t){return!!t&&"mapValue"in t}/** Creates a deep copy of `source`. */function sh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return rq(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=sh(n)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=sh(t.arrayValue.values[n]);return e}return Object.assign({},t)}/** Returns true if the Value represents the canonical {@link #MAX_VALUE} . */function su(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */class sc{constructor(t){this.value=t}static empty(){return new sc({mapValue:{}})}/**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(!sl(e=(e.mapValue.fields||{})[t.get(n)]))return null;return(e=(e.mapValue.fields||{})[t.lastSegment()])||null}}/**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sh(e)}/**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */setAll(t){let e=rM.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){// Insert the accumulated changes at this parent location
let t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=sh(t):i.push(r.lastSegment())});let r=this.getFieldsMap(e);this.applyChanges(r,n,i)}/**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */delete(t){let e=this.field(t.popLast());sl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return se(this.value,t.value)}/**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];sl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}/**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */applyChanges(t,e,n){for(let i of(rq(e,(e,n)=>t[e]=n),n))delete t[i]}clone(){return new sc(sh(this.value))}}/**
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
 * Represents a document in Firestore with a key, version, data and whether it
 * has local mutations applied to it.
 *
 * Documents can transition between states via `convertToFoundDocument()`,
 * `convertToNoDocument()` and `convertToUnknownDocument()`. If a document does
 * not transition to one of these states even after all mutations have been
 * applied, `isValidDocument()` returns false and the document should be removed
 * from all views.
 */class sf{constructor(t,e,n,i,r,s,a){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=a}/**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */static newInvalidDocument(t){return new sf(t,0/* DocumentType.INVALID */,/* version */rR.min(),/* readTime */rR.min(),/* createTime */rR.min(),sc.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */static newFoundDocument(t,e,n,i){return new sf(t,1/* DocumentType.FOUND_DOCUMENT */,/* version */e,/* readTime */rR.min(),/* createTime */n,i,0/* DocumentState.SYNCED */)}/** Creates a new document that is known to not exist at the given version. */static newNoDocument(t,e){return new sf(t,2/* DocumentType.NO_DOCUMENT */,/* version */e,/* readTime */rR.min(),/* createTime */rR.min(),sc.empty(),0/* DocumentState.SYNCED */)}/**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */static newUnknownDocument(t,e){return new sf(t,3/* DocumentType.UNKNOWN_DOCUMENT */,/* version */e,/* readTime */rR.min(),/* createTime */rR.min(),sc.empty(),2/* DocumentState.HAS_COMMITTED_MUTATIONS */)}/**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */convertToFoundDocument(t,e){// If a document is switching state from being an invalid or deleted
// document to a valid (FOUND_DOCUMENT) document, either due to receiving an
// update from Watch or due to applying a local set mutation on top
// of a deleted document, our best guess about its createTime would be the
// version at which the document transitioned to a FOUND_DOCUMENT.
return this.createTime.isEqual(rR.min())&&(2/* DocumentType.NO_DOCUMENT */===this.documentType||0/* DocumentType.INVALID */===this.documentType)&&(this.createTime=t),this.version=t,this.documentType=1/* DocumentType.FOUND_DOCUMENT */,this.data=e,this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */convertToNoDocument(t){return this.version=t,this.documentType=2/* DocumentType.NO_DOCUMENT */,this.data=sc.empty(),this.documentState=0/* DocumentState.SYNCED */,this}/**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */convertToUnknownDocument(t){return this.version=t,this.documentType=3/* DocumentType.UNKNOWN_DOCUMENT */,this.data=sc.empty(),this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasCommittedMutations(){return this.documentState=2/* DocumentState.HAS_COMMITTED_MUTATIONS */,this}setHasLocalMutations(){return this.documentState=1/* DocumentState.HAS_LOCAL_MUTATIONS */,this.version=rR.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1/* DocumentState.HAS_LOCAL_MUTATIONS */===this.documentState}get hasCommittedMutations(){return 2/* DocumentState.HAS_COMMITTED_MUTATIONS */===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0/* DocumentType.INVALID */!==this.documentType}isFoundDocument(){return 1/* DocumentType.FOUND_DOCUMENT */===this.documentType}isNoDocument(){return 2/* DocumentType.NO_DOCUMENT */===this.documentType}isUnknownDocument(){return 3/* DocumentType.UNKNOWN_DOCUMENT */===this.documentType}isEqual(t){return t instanceof sf&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sf(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * Compares the value for field `field` in the provided documents. Throws if
 * the field does not exist in both documents.
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
 *//**
 * Represents a bound of a query.
 *
 * The bound is specified with the given components representing a position and
 * whether it's just before or just after the position (relative to whatever the
 * query order is).
 *
 * The position represents a logical index position for a query. It's a prefix
 * of values for the (potentially implicit) order by clauses of a query.
 *
 * Bound provides a function to determine whether a document comes before or
 * after a bound. This is influenced by whether the position is just before or
 * just after the provided values.
 */class sd{constructor(t,e){this.position=t,this.inclusive=e}}function sp(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){let s=e[r],a=t.position[r];if(i=s.field.isKeyField()?rP.comparator(rP.fromName(a.referenceValue),n.key):si(a,n.data.field(s.field)),"desc"/* Direction.DESCENDING */===s.dir&&(i*=-1),0!==i)break}return i}/**
 * Returns true if a document sorts after a bound using the provided sort
 * order.
 */function sg(t,e){if(null===t)return null===e;if(null===e||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!se(t.position[n],e.position[n]))return!1;return!0}/**
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
 *//**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */class sm{constructor(t,e="asc"/* Direction.ASCENDING */){this.field=t,this.dir=e}}/**
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
 */class sy{}class sv extends sy{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}/**
     * Creates a filter based on the provided arguments.
     */static create(t,e,n){return t.isKeyField()?"in"/* Operator.IN */===e||"not-in"/* Operator.NOT_IN */===e?this.createKeyFieldInFilter(t,e,n):new sT(t,e,n):"array-contains"/* Operator.ARRAY_CONTAINS */===e?new sC(t,n):"in"/* Operator.IN */===e?new s_(t,n):"not-in"/* Operator.NOT_IN */===e?new sD(t,n):"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */===e?new sN(t,n):new sv(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"/* Operator.IN */===e?new sI(t,n):new sS(t,n)}matches(t){let e=t.data.field(this.field);// Types do not have to match in NOT_EQUAL filters.
return"!="/* Operator.NOT_EQUAL */===this.op?null!==e&&this.matchesComparison(si(e,this.value)):null!==e&&st(this.value)===st(e)&&this.matchesComparison(si(e,this.value));// Only compare types with matching backend order (such as double and int).
}matchesComparison(t){switch(this.op){case"<"/* Operator.LESS_THAN */:return t<0;case"<="/* Operator.LESS_THAN_OR_EQUAL */:return t<=0;case"=="/* Operator.EQUAL */:return 0===t;case"!="/* Operator.NOT_EQUAL */:return 0!==t;case">"/* Operator.GREATER_THAN */:return t>0;case">="/* Operator.GREATER_THAN_OR_EQUAL */:return t>=0;default:return rg()}}isInequality(){return["<"/* Operator.LESS_THAN */,"<="/* Operator.LESS_THAN_OR_EQUAL */,">"/* Operator.GREATER_THAN */,">="/* Operator.GREATER_THAN_OR_EQUAL */,"!="/* Operator.NOT_EQUAL */,"not-in"/* Operator.NOT_IN */].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class sw extends sy{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}/**
     * Creates a filter based on the provided arguments.
     */static create(t,e){return new sw(t,e)}matches(t){return sE(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.lt}// Returns a mutable copy of `this.filters`
getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let t=this.ft(t=>t.isInequality());return null!==t?t.field:null}// Performs a depth-first search to find and return the first FieldFilter in the composite filter
// that satisfies the predicate. Returns `null` if none of the FieldFilters satisfy the
// predicate.
ft(t){for(let e of this.getFlattenedFilters())if(t(e))return e;return null}}function sE(t){return"and"/* CompositeOperator.AND */===t.op}/**
 * Returns true if this filter does not contain any composite filters. Returns false otherwise.
 */function sb(t){for(let e of t.filters)if(e instanceof sw)return!1;return!0}class sT extends sv{constructor(t,e,n){super(t,e,n),this.key=rP.fromName(n.referenceValue)}matches(t){let e=rP.comparator(t.key,this.key);return this.matchesComparison(e)}}/** Filter that matches on key fields within an array. */class sI extends sv{constructor(t,e){super(t,"in"/* Operator.IN */,e),this.keys=sA("in"/* Operator.IN */,e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}/** Filter that matches on key fields not present within an array. */class sS extends sv{constructor(t,e){super(t,"not-in"/* Operator.NOT_IN */,e),this.keys=sA("not-in"/* Operator.NOT_IN */,e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function sA(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>rP.fromName(t.referenceValue))}/** A Filter that implements the array-contains operator. */class sC extends sv{constructor(t,e){super(t,"array-contains"/* Operator.ARRAY_CONTAINS */,e)}matches(t){let e=t.data.field(this.field);return so(e)&&sn(e.arrayValue,this.value)}}/** A Filter that implements the IN operator. */class s_ extends sv{constructor(t,e){super(t,"in"/* Operator.IN */,e)}matches(t){let e=t.data.field(this.field);return null!==e&&sn(this.value.arrayValue,e)}}/** A Filter that implements the not-in operator. */class sD extends sv{constructor(t,e){super(t,"not-in"/* Operator.NOT_IN */,e)}matches(t){if(sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let e=t.data.field(this.field);return null!==e&&!sn(this.value.arrayValue,e)}}/** A Filter that implements the array-contains-any operator. */class sN extends sv{constructor(t,e){super(t,"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */,e)}matches(t){let e=t.data.field(this.field);return!(!so(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>sn(this.value.arrayValue,t))}}/**
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
 */// Visible for testing
class sk{constructor(t,e=null,n=[],i=[],r=null,s=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.dt=null}}/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */function sR(t,e=null,n=[],i=[],r=null,s=null,a=null){return new sk(t,e,n,i,r,s,a)}function sO(t){if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:"+t.filters.map(t=>(function t(e){if(e instanceof sv)// the same description, such as the int 3 and the string "3". So we should
    // add the types in here somehow, too.
    return e.field.canonicalString()+e.op.toString()+ss(e.value);if(sb(e)&&sE(e))// In the new SDK versions, the developer may use an explicit AND filter.
    // To stay consistent with the old usages, we add a special case to ensure
    // the canonical ID for these two are the same. For example:
    // `col.whereEquals("a", 1).whereEquals("b", 2)` should have the same
    // canonical ID as `col.where(and(equals("a",1), equals("b",2)))`.
    return e.filters.map(e=>t(e)).join(",");{// filter instanceof CompositeFilter
    let n=e.filters.map(e=>t(e)).join(",");return`${e.op}(${n})`}})(t)).join(",")+"|ob:"+t.orderBy.map(t=>t.field.canonicalString()+t.dir).join(","),null==t.limit||(e+="|l:"+t.limit),t.startAt&&(e+="|lb:"+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(t=>ss(t)).join(",")),t.endAt&&(e+="|ub:"+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(t=>ss(t)).join(",")),t.dt=e}return t.dt}function sL(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++){var n,i;if(n=t.orderBy[r],i=e.orderBy[r],!(n.dir===i.dir&&n.field.isEqual(i.field)))return!1}if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!function t(e,n){return e instanceof sv?n instanceof sv&&e.op===n.op&&e.field.isEqual(n.field)&&se(e.value,n.value):e instanceof sw?n instanceof sw&&e.op===n.op&&e.filters.length===n.filters.length&&e.filters.reduce((e,i,r)=>e&&t(i,n.filters[r]),!0):void rg()}(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sg(t.startAt,e.startAt)&&sg(t.endAt,e.endAt)}/** Returns the number of segments of a perfect index for this target. *//**
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
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */class sx{/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */constructor(t,e=null,n=[],i=[],r=null,s="F"/* LimitType.First */,a=null,o=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.wt=null,this._t=null,this.startAt,this.endAt}}/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 *//**
 * Returns true if this query does not specify any query constraints that
 * could remove results.
 */function sM(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */function sP(t){if(null===t.wt){t.wt=[];let e=function(t){for(let e of t.filters){let t=e.getFirstInequalityField();if(null!==t)return t}return null}(t),n=t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null;if(null!==e&&null===n)// inequality filter field for it to be a valid query.
// Note that the default inequality field and key ordering is ascending.
e.isKeyField()||t.wt.push(new sm(e)),t.wt.push(new sm(rM.keyField(),"asc"/* Direction.ASCENDING */));else{let e=!1;for(let n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){// The order of the implicit key ordering always matches the last
// explicit order by
let e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc"/* Direction.ASCENDING */;t.wt.push(new sm(rM.keyField(),e))}}}return t.wt}/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */function sF(t){if(!t._t){if("F"/* LimitType.First */===t.limitType)t._t=sR(t.path,t.collectionGroup,sP(t),t.filters,t.limit,t.startAt,t.endAt);else{// Flip the orderBy directions since we want the last results
let e=[];for(let n of sP(t)){let t="desc"/* Direction.DESCENDING */===n.dir?"asc"/* Direction.ASCENDING */:"desc"/* Direction.DESCENDING */;e.push(new sm(n.field,t))}// We need to swap the cursors to match the now-flipped query ordering.
let n=t.endAt?new sd(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new sd(t.startAt.position,t.startAt.inclusive):null;// Now return as a LimitType.First query.
t._t=sR(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}return t._t}function sV(t,e,n){return new sx(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sU(t,e){return sL(sF(t),sF(e))&&t.limitType===e.limitType}// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function sB(t){return`${sO(sF(t))}|lt:${t.limitType}`}function sj(t){var e;let n;return`Query(target=${n=(e=sF(t)).path.canonicalString(),null!==e.collectionGroup&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(t=>/** Returns a debug description for `filter`. */(function t(e){return e instanceof sv?`${e.field.canonicalString()} ${e.op} ${ss(e.value)}`:e instanceof sw?e.op.toString()+" {"+e.getFilters().map(t).join(" ,")+"}":"Filter"})(t)).join(", ")}]`),null==e.limit||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(t=>`${t.field.canonicalString()} (${t.dir})`).join(", ")}]`),e.startAt&&(n+=", startAt: "+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(t=>ss(t)).join(",")),e.endAt&&(n+=", endAt: "+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(t=>ss(t)).join(",")),`Target(${n})`}; limitType=${t.limitType})`}/** Returns whether `doc` matches the constraints of `query`. */function s$(t,e){return e.isFoundDocument()&&function(t,e){let n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):rP.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){// We must use `queryOrderBy()` to get the list of all orderBys (both implicit and explicit).
// Note that for OR queries, orderBy applies to all disjunction terms and implicit orderBys must
// be taken into account. For example, the query "a > 1 || b==1" has an implicit "orderBy a" due
// to the inequality, and is evaluated as "a > 1 orderBy a || b==1 orderBy a".
// A document with content of {b:1} matches the filters, but does not match the orderBy because
// it's missing the field 'a'.
for(let n of sP(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(let n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(!t.startAt||!!/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */function(t,e,n){let i=sp(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,sP(t),e))&&(!t.endAt||!!function(t,e,n){let i=sp(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,sP(t),e))}/**
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
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */class sH{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,/**
         * The inner map for a key/value pair. Due to the possibility of collisions we
         * keep a list of entries that we do a linear search through to find an actual
         * match. Note that collisions should be rare, so we still expect near
         * constant time lookups in practice.
         */this.inner={},/** The number of entries stored in the map */this.innerSize=0}/** Get a value for this key, or undefined if it does not exist. */get(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n){for(let[e,i]of n)if(this.equalsFn(e,t))return i}}has(t){return void 0!==this.get(t)}/** Put this key and value in the map. */set(t,e){let n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}/**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */delete(t){let e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rq(this.inner,(e,n)=>{for(let[e,i]of n)t(e,i)})}isEmpty(){return rG(this.inner)}size(){return this.innerSize}}/**
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
 *//**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */function sZ(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rH(e)?"-0":e}}/**
 * Returns an IntegerValue for `value`.
 */function s0(t){return{integerValue:""+t}}/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */function s1(t,e){return"number"==typeof e&&Number.isInteger(e)&&!rH(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER?s0(e):sZ(t,e)}/**
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
 *//** Used to represent a field transform on a mutation. */class s2{constructor(){// Make sure that the structural type of `TransformOperation` is unique.
// See https://github.com/microsoft/TypeScript/issues/5451
this._=void 0}}/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */function s9(t,e){return t instanceof s8?sa(e)||e&&"doubleValue"in e?e:{integerValue:0}:null}/** Transforms a value into a server-generated timestamp. */class s4 extends s2{}/** Transforms an array value via a union operation. */class s6 extends s2{constructor(t){super(),this.elements=t}}function s5(t,e){let n=ae(e);for(let e of t.elements)n.some(t=>se(t,e))||n.push(e);return{arrayValue:{values:n}}}/** Transforms an array value via a remove operation. */class s3 extends s2{constructor(t){super(),this.elements=t}}function s7(t,e){let n=ae(e);for(let e of t.elements)n=n.filter(t=>!se(t,e));return{arrayValue:{values:n}}}/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */class s8 extends s2{constructor(t,e){super(),this.serializer=t,this.gt=e}}function at(t){return r9(t.integerValue||t.doubleValue)}function ae(t){return so(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 *//** A field path and the TransformOperation to perform upon it. */class an{constructor(t,e){this.field=t,this.transform=e}}/** The result of successfully applying a mutation to the backend. */class ai{constructor(/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */t,/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be empty if the mutation did not contain any field transforms.
     */e){this.version=t,this.transformResults=e}}/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */class ar{constructor(t,e){this.updateTime=t,this.exists=e}/** Creates a new empty Precondition. */static none(){return new ar}/** Creates a new Precondition with an exists flag. */static exists(t){return new ar(void 0,t)}/** Creates a new Precondition based on a version a document exists at. */static updateTime(t){return new ar(t)}/** Returns whether this Precondition is empty. */get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}/** Returns true if the preconditions is valid for the given document. */function as(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        InvalidDocument(v0)   Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      InvalidDocument(v0)   UnknownDocument(v3)
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     InvalidDocument(v0)   NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we transition to an `UnknownDocument` and rely on Watch to send us
 * the updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Every type of mutation needs to implement its own applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document (see `setMutationApplyToRemoteDocument()` for an
 * example).
 */class aa{}/**
 * A utility method to calculate a `Mutation` representing the overlay from the
 * final state of the document, and a `FieldMask` representing the fields that
 * are mutated by the local mutations.
 */function ao(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;// mask is null when sets or deletes are applied to the current document.
if(null===e)return t.isNoDocument()?new ag(t.key,ar.none()):new au(t.key,t.data,ar.none());{let n=t.data,i=sc.empty(),r=new rX(rM.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);// If we are deleting a nested field, we take the immediate parent as
// the mask used to construct the resulting mutation.
// Justification: Nested fields can create parent fields implicitly. If
// only a leaf entry is deleted in later mutations, the parent field
// should still remain, but we may have lost this information.
// Consider mutation (foo.bar 1), then mutation (foo.bar delete()).
// This leaves the final result (foo, {}). Despite the fact that `doc`
// has the correct result, `foo` is not in `mask`, and the resulting
// mutation would miss `foo`.
null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new ac(t.key,i,new rJ(r.toArray()),ar.none())}}/**
 * Applies this mutation to the given document for the purposes of computing
 * the new local view of a document. If the input document doesn't match the
 * expected state, the document is not modified.
 *
 * @param mutation - The mutation to apply.
 * @param document - The document to mutate. The input document can be an
 *     invalid document if the client has no knowledge of the pre-mutation state
 *     of the document.
 * @param previousMask - The fields that have been updated before applying this mutation.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns A `FieldMask` representing the fields that are changed by applying this mutation.
 */function al(t,e,n,i){return t instanceof au?function(t,e,n,i){if(!as(t.precondition,e))// caused a name collision).
return n;let r=t.value.clone(),s=ap(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null;// SetMutation overwrites all fields.
}(t,e,n,i):t instanceof ac?function(t,e,n,i){if(!as(t.precondition,e))return n;let r=ap(t.fieldTransforms,i,e),s=e.data;return(s.setAll(af(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,i):as(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}function ah(t,e){var n,i;return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||!(!n||!i)&&rN(n,i,(t,e)=>{var n,i;return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof s6&&i instanceof s6||n instanceof s3&&i instanceof s3?rN(n.elements,i.elements,se):n instanceof s8&&i instanceof s8?se(n.gt,i.gt):n instanceof s4&&i instanceof s4)})))&&(0/* MutationType.Set */===t.type?t.value.isEqual(e.value):1/* MutationType.Patch */!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */class au extends aa{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0/* MutationType.Set */}getFieldMask(){return null}}class ac extends aa{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1/* MutationType.Patch */}getFieldMask(){return this.fieldMask}}function af(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let i=t.data.field(n);e.set(n,i)}}),e}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a mutation
 * containing transforms has been acknowledged by the server.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param mutableDocument - The current state of the document after applying all
 * previous mutations.
 * @param serverTransformResults - The transform results received by the server.
 * @returns The transform results list.
 */function ad(t,e,n){var i;let r=new Map;t.length===n.length||rg();for(let s=0;s<n.length;s++){let a=t[s],o=a.transform,l=e.data.field(a.field);r.set(a.field,(i=n[s],o instanceof s6?s5(o,l):o instanceof s3?s7(o,l):i))}return r}/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param mutableDocument - The document to apply transforms on.
 * @returns The transform results list.
 */function ap(t,e,n){let i=new Map;for(let r of t){let t=r.transform,s=n.data.field(r.field);i.set(r.field,t instanceof s4?function(t,e){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};// We should avoid storing deeply nested server timestamp map values
// because we never use the intermediate "previous values".
// For example:
// previous: 42L, add: t1, result: t1 -> 42L
// previous: t1,  add: t2, result: t2 -> 42L (NOT t2 -> t1 -> 42L)
// previous: t2,  add: t3, result: t3 -> 42L (NOT t3 -> t2 -> t1 -> 42L)
// `getPreviousValue` recursively traverses server timestamps to find the
// least recent Value.
return e&&r6(e)&&(e=/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 *//**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */function t(e){let n=e.mapValue.fields.__previous_value__;return r6(n)?t(n):n}(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(e,s):t instanceof s6?s5(t,s):t instanceof s3?s7(t,s):function(t,e){// PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
// precision and resolves overflows by reducing precision, we do not
// manually cap overflows at 2^63.
let n=s9(t,e),i=at(n)+at(t.gt);return sa(n)&&sa(t.gt)?s0(i):sZ(t.serializer,i)}(t,s))}return i}/** A mutation that deletes the document at the given key. */class ag extends aa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2/* MutationType.Delete */,this.fieldTransforms=[]}getFieldMask(){return null}}class am extends aa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3/* MutationType.Verify */,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 * A batch of mutations that will be sent as one unit to the backend.
 */class ay{/**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}/**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */applyToRemoteDocument(t,e){let n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){let r=this.mutations[e];if(r.key.isEqual(t.key)){var i;i=n[e],r instanceof au?function(t,e,n){// Unlike setMutationApplyToLocalView, if we're applying a mutation to a
// remote document the server has accepted the mutation so the precondition
// must have held.
let i=t.value.clone(),r=ad(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(r,t,i):r instanceof ac?function(t,e,n){if(!as(t.precondition,e))// matched on the backend. We therefore must not have the expected version
// of the document in our cache and convert to an UnknownDocument with a
// known updateTime.
return void e.convertToUnknownDocument(n.version);let i=ad(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(af(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(r,t,i):function(t,e,n){// Unlike applyToLocalView, if we're applying a mutation to a remote
// document the server has accepted the mutation so the precondition must
// have held.
e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,i)}}}/**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */applyToLocalView(t,e){// First, apply the base state. This allows us to apply non-idempotent
// transform against a consistent set of values.
for(let n of this.baseMutations)n.key.isEqual(t.key)&&(e=al(n,t,e,this.localWriteTime));// Second, apply all user-provided mutations.
for(let n of this.mutations)n.key.isEqual(t.key)&&(e=al(n,t,e,this.localWriteTime));return e}/**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */applyToLocalDocumentSet(t,e){// TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
// directly (as done in `applyToLocalView()`), we can reduce the complexity
// to O(n).
let n=sQ();return this.mutations.forEach(i=>{let r=t.get(i.key),s=r.overlayedDocument,a=this.applyToLocalView(s,r.mutatedFields);// Set mutatedFields to null if the document is only from local mutations.
// This creates a Set or Delete mutation, instead of trying to create a
// patch mutation as the overlay.
a=e.has(i.key)?null:a;let o=ao(s,a);null!==o&&n.set(i.key,o),s.isValidDocument()||s.convertToNoDocument(rR.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),sY())}isEqual(t){return this.batchId===t.batchId&&rN(this.mutations,t.mutations,(t,e)=>ah(t,e))&&rN(this.baseMutations,t.baseMutations,(t,e)=>ah(t,e))}}/** The result of applying a mutation batch to the backend. */class av{constructor(t,e,n,/**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}/**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */static from(t,e,n){t.mutations.length===n.length||rg();let i=sW,r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new av(t,e,n,i)}}/**
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
 *//**
 * Representation of an overlay computed by Firestore.
 *
 * Holds information about a mutation and the largest batch id in Firestore when
 * the mutation was created.
 */class aw{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */(o=a||(a={}))[o.OK=0]="OK",o[o.CANCELLED=1]="CANCELLED",o[o.UNKNOWN=2]="UNKNOWN",o[o.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",o[o.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",o[o.NOT_FOUND=5]="NOT_FOUND",o[o.ALREADY_EXISTS=6]="ALREADY_EXISTS",o[o.PERMISSION_DENIED=7]="PERMISSION_DENIED",o[o.UNAUTHENTICATED=16]="UNAUTHENTICATED",o[o.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",o[o.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",o[o.ABORTED=10]="ABORTED",o[o.OUT_OF_RANGE=11]="OUT_OF_RANGE",o[o.UNIMPLEMENTED=12]="UNIMPLEMENTED",o[o.INTERNAL=13]="INTERNAL",o[o.UNAVAILABLE=14]="UNAVAILABLE",o[o.DATA_LOSS=15]="DATA_LOSS",new rs([4294967295,4294967295],0);/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */class aE{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}/**
 * Returns a number (or null) from a google.protobuf.Int32Value proto.
 *//**
 * Returns a value for a Date that's appropriate to put into a proto.
 */function ab(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aT(t){return t||rg(),rR.fromTimestamp(function(t){let e=r2(t);return new rk(e.seconds,e.nanos)}(t))}function aI(t,e){return new rL(["projects",t.projectId,"databases",t.database]).child("documents").child(e).canonicalString()}function aS(t,e){return aI(t.databaseId,e.path)}/** Creates a Document proto from key and fields (but no create/update time) */function aA(t,e,n){return{name:aS(t,e),fields:n.value.mapValue.fields}}function aC(t){return rM.fromServerFormat(t.fieldPath)}/**
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
 *//** Serializer for values stored in the LocalStore. */class a_{constructor(t){this.fe=t}}/**
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
 */// Note: This code is copied from the backend. Code that is not used by
// Firestore was removed.
/** Firestore index value writer.  */class aD{constructor(){}// The write methods below short-circuit writing terminators for values
// containing a (terminating) truncated value.
// As an example, consider the resulting encoding for:
// ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
// ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
// ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
/** Writes an index value.  */_e(t,e){this.me(t,e),// (see go/firestore-storage-format#encodings).
e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(r9(t.integerValue));else if("doubleValue"in t){let n=r9(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),rH(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(r4(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){let n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?su(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):rg()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){let n=t.fields||{};for(let t of(this.ye(e,55),Object.keys(n)))this.Te(t,e),this.me(n[t],e)}Pe(t,e){let n=t.values||[];for(let t of(this.ye(e,50),n))this.me(t,e)}ve(t,e){this.ye(e,37),rP.fromName(t).path.forEach(t=>{this.ye(e,60),this.be(t,e)})}ye(t,e){t.pe(e)}Ee(t){// While the SDK does not implement truncation, the truncation marker is
// used to terminate all variable length values (which are strings, bytes,
// references, arrays and maps).
t.pe(2)}}aD.Ve=new aD;/**
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
 *//**
 * An in-memory implementation of IndexManager.
 */class aN{constructor(){this.rn=new ak}addToCollectionParentIndex(t,e){return this.rn.add(e),rB.resolve()}getCollectionParents(t,e){return rB.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){// Field indices are not supported with memory persistence.
return rB.resolve()}deleteFieldIndex(t,e){// Field indices are not supported with memory persistence.
return rB.resolve()}getDocumentsMatchingTarget(t,e){// Field indices are not supported with memory persistence.
return rB.resolve(null)}getIndexType(t,e){// Field indices are not supported with memory persistence.
return rB.resolve(0/* IndexType.NONE */)}getFieldIndexes(t,e){// Field indices are not supported with memory persistence.
return rB.resolve([])}getNextCollectionGroupToUpdate(t){// Field indices are not supported with memory persistence.
return rB.resolve(null)}getMinOffset(t,e){return rB.resolve(rF.min())}getMinOffsetFromCollectionGroup(t,e){return rB.resolve(rF.min())}updateCollectionGroup(t,e,n){// Field indices are not supported with memory persistence.
return rB.resolve()}updateIndexEntries(t,e){// Field indices are not supported with memory persistence.
return rB.resolve()}}/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */class ak{constructor(){this.index={}}// Returns false if the entry already existed.
add(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new rX(rL.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){let e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new rX(rL.comparator)).toArray()}}new Uint8Array(0);class aR{constructor(// threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
t,e,// us from collecting a huge number of sequence numbers if the cache has grown very large.
n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new aR(t,aR.DEFAULT_COLLECTION_PERCENTILE,aR.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 *//** A mutation queue for a specific user, backed by IndexedDB. */aR.DEFAULT_COLLECTION_PERCENTILE=10,aR.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,aR.DEFAULT=new aR(41943040,aR.DEFAULT_COLLECTION_PERCENTILE,aR.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),aR.DISABLED=new aR(-1,0,0);/**
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
 *//** Offset to ensure non-overlapping target ids. *//**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */class aO{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){// The target cache generator must return '2' in its first call to `next()`
// as there is no differentiation in the protocol layer between an unset
// number and the number '0'. If we were to sent a target with target ID
// '0', the backend would consider it unset and replace it with its own ID.
return new aO(0)}static Mn(){// Sync engine assigns target IDs for limbo document detection.
return new aO(-1)}}/**
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
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */class aL{constructor(){// A mapping of document key to the new cache entry that should be written.
this.changes=new sH(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}/**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}/**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,sf.newInvalidDocument(t).setReadTime(e))}/**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */getEntry(t,e){this.assertNotApplied();let n=this.changes.get(e);return void 0!==n?rB.resolve(n):this.getFromCache(t,e)}/**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */getEntries(t,e){return this.getAllFromCache(t,e)}/**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}/** Helper to assert this.changes is not null  */assertNotApplied(){}}/**
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
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 * 12. Add document overlays.
 * 13. Rewrite the keys of the remote document cache to allow for efficient
 *     document lookup via `getAll()`.
 * 14. Add overlays.
 * 15. Add indexing support.
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
 *//**
 * Represents a local view (overlay) of a document, and the fields that are
 * locally mutated.
 */class ax{constructor(t,/**
     * The fields that are locally mutated by patch mutations.
     *
     * If the overlayed	document is from set or delete mutations, this is `null`.
     * If there is no overlay (mutation) for the document, this is an empty `FieldMask`.
     */e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */class aM{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}/**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&al(n.mutation,t,rJ.empty(),rk.now()),t))}/**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,sY()).next(()=>e))}/**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */getLocalViewOfDocuments(t,e,n=sY()){let i=sQ();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(t=>{let e=sG();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}/**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */getOverlayedDocuments(t,e){let n=sQ();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,sY()))}/**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */populateOverlays(t,e,n){let i=[];return n.forEach(t=>{e.has(t)||i.push(t)}),this.documentOverlayCache.getOverlays(t,i).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}/**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */computeViews(t,e,n,i){let r=sz,s=sQ(),a=sQ();return e.forEach((t,e)=>{let a=n.get(e.key);// Recalculate an overlay if the document's existence state changed due to
// a remote event *and* the overlay is a PatchMutation. This is because
// document existence state can change if some patch mutation's
// preconditions are met.
// NOTE: we recalculate when `overlay` is undefined as well, because there
// might be a patch mutation whose precondition does not match before the
// change (hence overlay is undefined), but would now match.
i.has(e.key)&&(void 0===a||a.mutation instanceof ac)?r=r.insert(e.key,e):void 0!==a?(s.set(e.key,a.mutation.getFieldMask()),al(a.mutation,e,a.mutation.getFieldMask(),rk.now())):// Using EMPTY to indicate there is no overlay for the document.
s.set(e.key,rJ.empty())}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>{var n;return a.set(t,new ax(e,null!==(n=s.get(t))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(t,e){let n=sQ(),i=new rK((t,e)=>t-e),r=sY();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(let r of t)r.keys().forEach(t=>{let s=e.get(t);if(null===s)return;let a=n.get(t)||rJ.empty();a=r.applyToLocalView(s,a),n.set(t,a);let o=(i.get(r.batchId)||sY()).add(t);i=i.insert(r.batchId,o)})}).next(()=>{let s=[],a=i.getReverseIterator();// Iterate in descending order of batch IDs, and skip documents that are
// already saved.
for(;a.hasNext();){let i=a.getNext(),o=i.key,l=i.value,h=sQ();l.forEach(t=>{if(!r.has(t)){let i=ao(e.get(t),n.get(t));null!==i&&h.set(t,i),r=r.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,o,h))}return rB.waitFor(s)}).next(()=>n)}/**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}/**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     */getDocumentsMatchingQuery(t,e,n){/**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */return rP.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):null!==e.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}/**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(r=>{let s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):rB.resolve(sQ()),a=-1,o=r;return s.next(e=>rB.forEach(e,(e,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),r.get(e)?rB.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{o=o.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,o,e,sY())).next(t=>({batchId:a,changes:sK(t)})))})}getDocumentsMatchingDocumentQuery(t,e){// Just do a simple document lookup.
return this.getDocument(t,new rP(e)).next(t=>{let e=sG();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){let i=e.collectionGroup,r=sG();return this.indexManager.getCollectionParents(t,i).next(s=>rB.forEach(s,s=>{var a;let o=(a=s.child(i),new sx(a,/*collectionGroup=*/null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,e,n){// Query the remote documents and overlay mutations.
let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i))).next(t=>{// As documents might match the query because of their overlay we need to
// include documents for all overlays in the initial document set.
i.forEach((e,n)=>{let i=n.getKey();null===t.get(i)&&(t=t.insert(i,sf.newInvalidDocument(i)))});// Apply the overlays and match against the query.
let n=sG();return t.forEach((t,r)=>{let s=i.get(t);void 0!==s&&al(s.mutation,r,rJ.empty(),rk.now()),s$(e,r)&&(n=n.insert(t,r))}),n})}}/**
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
 */class aP{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return rB.resolve(this.cs.get(e))}saveBundleMetadata(t,e){return this.cs.set(e.id,{id:e.id,version:e.version,createTime:aT(e.createTime)}),rB.resolve()}getNamedQuery(t,e){return rB.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,{name:e.name,query:/**
 * A helper function for figuring out what kind of query has been stored.
 *//**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */function(t){let e=function(t){var e,n,i,r,s,a,o,l;let h,u=function(t){let e=function(t){let e=rL.fromString(t);return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)||rg(),e}(t);// In v1beta1 queries for collections at the root did not have a trailing
// "/documents". In v1 all resource paths contain "/documents". Preserve the
// ability to read the v1beta1 form for compatibility with queries persisted
// in the local target cache.
return 4===e.length?rL.emptyPath():(e.length>4&&"documents"===e.get(4)||rg(),e.popFirst(5))}(t.parent),c=t.structuredQuery,f=c.from?c.from.length:0,d=null;if(f>0){1===f||rg();let t=c.from[0];t.allDescendants?d=t.collectionId:u=u.child(t.collectionId)}let p=[];c.where&&(p=function(t){var e;let n=function t(e){return void 0!==e.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":let e=aC(t.unaryFilter.field);return sv.create(e,"=="/* Operator.EQUAL */,{doubleValue:NaN});case"IS_NULL":let n=aC(t.unaryFilter.field);return sv.create(n,"=="/* Operator.EQUAL */,{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let i=aC(t.unaryFilter.field);return sv.create(i,"!="/* Operator.NOT_EQUAL */,{doubleValue:NaN});case"IS_NOT_NULL":let r=aC(t.unaryFilter.field);return sv.create(r,"!="/* Operator.NOT_EQUAL */,{nullValue:"NULL_VALUE"});default:return rg()}}(e):void 0!==e.fieldFilter?sv.create(aC(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"=="/* Operator.EQUAL */;case"NOT_EQUAL":return"!="/* Operator.NOT_EQUAL */;case"GREATER_THAN":return">"/* Operator.GREATER_THAN */;case"GREATER_THAN_OR_EQUAL":return">="/* Operator.GREATER_THAN_OR_EQUAL */;case"LESS_THAN":return"<"/* Operator.LESS_THAN */;case"LESS_THAN_OR_EQUAL":return"<="/* Operator.LESS_THAN_OR_EQUAL */;case"ARRAY_CONTAINS":return"array-contains"/* Operator.ARRAY_CONTAINS */;case"IN":return"in"/* Operator.IN */;case"NOT_IN":return"not-in"/* Operator.NOT_IN */;case"ARRAY_CONTAINS_ANY":return"array-contains-any"/* Operator.ARRAY_CONTAINS_ANY */;default:return rg()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?sw.create(e.compositeFilter.filters.map(e=>t(e)),function(t){switch(t){case"AND":return"and"/* CompositeOperator.AND */;case"OR":return"or"/* CompositeOperator.OR */;default:return rg()}}(e.compositeFilter.op)):rg()}(t);return n instanceof sw&&sb(e=n)&&sE(e)?n.getFilters():[n]}(c.where));let g=[];c.orderBy&&(g=c.orderBy.map(t=>new sm(aC(t.field),function(t){switch(t){case"ASCENDING":return"asc"/* Direction.ASCENDING */;case"DESCENDING":return"desc"/* Direction.DESCENDING */;default:return}}(t.direction))));let m=null;c.limit&&(m=null==(h="object"==typeof(e=c.limit)?e.value:e)?null:h);let y=null;c.startAt&&(y=function(t){let e=!!t.before,n=t.values||[];return new sd(n,e)}(c.startAt));let v=null;return c.endAt&&(v=function(t){let e=!t.before,n=t.values||[];return new sd(n,e)}(c.endAt)),n=u,i=d,r=g,s=p,a=m,o=y,l=v,new sx(n,i,r,s,a,"F"/* LimitType.First */,o,l)}({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?sV(e,e.limit,"L"/* LimitType.Last */):e}(e.bundledQuery),readTime:aT(e.readTime)}),rB.resolve()}}/**
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
 *//**
 * An in-memory implementation of DocumentOverlayCache.
 */class aF{constructor(){// A map sorted by DocumentKey, whose value is a pair of the largest batch id
// for the overlay and the overlay itself.
this.overlays=new rK(rP.comparator),this.ls=new Map}getOverlay(t,e){return rB.resolve(this.overlays.get(e))}getOverlays(t,e){let n=sQ();return rB.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,i)=>{this.we(t,e,i)}),rB.resolve()}removeOverlaysForBatchId(t,e,n){let i=this.ls.get(n);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.ls.delete(n)),rB.resolve()}getOverlaysForCollection(t,e,n){let i=sQ(),r=e.length+1,s=new rP(e.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let t=a.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;// Documents from sub-collections
s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return rB.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new rK((t,e)=>t-e),s=this.overlays.getIterator();for(;s.hasNext();){let t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=sQ(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}let a=sQ(),o=r.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((t,e)=>a.set(t,e)),!(a.size()>=i)););return rB.resolve(a)}we(t,e,n){// Remove the association of the overlay to its batch id.
let i=this.overlays.get(n.key);if(null!==i){let t=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new aw(e,n));// Create the association of this overlay to the given largestBatchId.
let r=this.ls.get(e);void 0===r&&(r=sY(),this.ls.set(e,r)),this.ls.set(e,r.add(n.key))}}/**
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
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */class aV{constructor(){// A set of outstanding references to a document sorted by key.
this.fs=new rX(aU.ds),this.ws=new rX(aU._s)}/** Returns true if the reference set contains no references. */isEmpty(){return this.fs.isEmpty()}/** Adds a reference to the given document key for the given ID. */addReference(t,e){let n=new aU(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}/** Add references to the given document keys for the given ID. */gs(t,e){t.forEach(t=>this.addReference(t,e))}/**
     * Removes a reference to the given document key for the given
     * ID.
     */removeReference(t,e){this.ys(new aU(t,e))}ps(t,e){t.forEach(t=>this.removeReference(t,e))}/**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */Is(t){let e=new rP(new rL([])),n=new aU(e,t),i=new aU(e,t+1),r=[];return this.ws.forEachInRange([n,i],t=>{this.ys(t),r.push(t.key)}),r}Ts(){this.fs.forEach(t=>this.ys(t))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){let e=new rP(new rL([])),n=new aU(e,t),i=new aU(e,t+1),r=sY();return this.ws.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){let e=new aU(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class aU{constructor(t,e){this.key=t,this.As=e}/** Compare by key then by ID */static ds(t,e){return rP.comparator(t.key,e.key)||rD(t.As,e.As)}/** Compare by ID then by key */static _s(t,e){return rD(t.As,e.As)||rP.comparator(t.key,e.key)}}/**
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
 */class aB{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,/**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */this.mutationQueue=[],/** Next value to use when assigning sequential IDs to each mutation batch. */this.vs=1,/** An ordered mapping between documents and the mutations batch IDs. */this.Rs=new rX(aU.ds)}checkEmpty(t){return rB.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){let r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new ay(r,e,n,i);// Track references by document key and index collection parents.
for(let e of(this.mutationQueue.push(s),i))this.Rs=this.Rs.add(new aU(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return rB.resolve(s)}lookupMutationBatch(t,e){return rB.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){let n=this.bs(e+1),i=n<0?0:n;// The requested batchId may still be out of range so normalize it to the
// start of the queue.
return rB.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return rB.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return rB.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){let n=new aU(e,0),i=new aU(e,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,i],t=>{let e=this.Ps(t.As);r.push(e)}),rB.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new rX(rD);return e.forEach(t=>{let e=new aU(t,0),i=new aU(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,i],t=>{n=n.add(t.As)})}),rB.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){// Use the query path as a prefix for testing if a document matches the
// query.
let n=e.path,i=n.length+1,r=n;rP.isDocumentKey(r)||(r=r.child(""));let s=new aU(new rP(r),0),a=new rX(rD);return this.Rs.forEachWhile(t=>{let e=t.key.path;return!!n.isPrefixOf(e)&&// Rows with document keys more than one segment longer than the query
// path can't be matches. For example, a query on 'rooms' can't match
// the document /rooms/abc/messages/xyx.
// TODO(mcg): we'll need a different scanner when we implement
// ancestor queries.
(e.length===i&&(a=a.add(t.As)),!0)},s),rB.resolve(this.Vs(a))}Vs(t){// Construct an array of matching batches, sorted by batchID to ensure that
// multiple mutations affecting the same document key are applied in order.
let e=[];return t.forEach(t=>{let n=this.Ps(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){0===this.Ss(e.batchId,"removed")||rg(),this.mutationQueue.shift();let n=this.Rs;return rB.forEach(e.mutations,i=>{let r=new aU(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Rs=n})}Cn(t){// No-op since the memory mutation queue does not maintain a separate cache.
}containsKey(t,e){let n=new aU(e,0),i=this.Rs.firstAfterOrEqual(n);return rB.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,rB.resolve()}/**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */Ss(t,e){return this.bs(t)}/**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}/**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */Ps(t){let e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 * The memory-only RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newMemoryRemoteDocumentCache()`.
 */class aj{/**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */constructor(t){this.Ds=t,/** Underlying cache of documents and their read times. */this.docs=new rK(rP.comparator),/** Size of all cached documents. */this.size=0}setIndexManager(t){this.indexManager=t}/**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */addEntry(t,e){let n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}/**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */removeEntry(t){let e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){let n=this.docs.get(e);return rB.resolve(n?n.document.mutableCopy():sf.newInvalidDocument(e))}getEntries(t,e){let n=sz;return e.forEach(t=>{let e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():sf.newInvalidDocument(t))}),rB.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=sz,s=e.path,a=new rP(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:t,value:{document:a}}=o.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||0>=function(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:0!==(n=rP.comparator(t.documentKey,e.documentKey))?n:rD(t.largestBatchId,e.largestBatchId)}(new rF(a.readTime,a.key,-1),n)||(i.has(a.key)||s$(e,a))&&(r=r.insert(a.key,a.mutableCopy()))}return rB.resolve(r)}getAllFromCollectionGroup(t,e,n,i){// This method should only be called from the IndexBackfiller if persistence
// is enabled.
rg()}Cs(t,e){return rB.forEach(this.docs,t=>e(t))}newChangeBuffer(t){// `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
// a separate changelog and does not need special handling for removals.
return new a$(this)}getSize(t){return rB.resolve(this.size)}}/**
 * Creates a new memory-only RemoteDocumentCache.
 *
 * @param sizer - Used to assess the size of a document. For eager GC, this is
 * expected to just return 0 to avoid unnecessarily doing the work of
 * calculating the size.
 *//**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */class a$ extends aL{constructor(t){super(),this.os=t}applyChanges(t){let e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.os.addEntry(t,i)):this.os.removeEntry(n)}),rB.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}/**
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
 */class aH{constructor(t){this.persistence=t,/**
         * Maps a target to the data about that target
         */this.xs=new sH(t=>sO(t),sL),/** The last received snapshot version. */this.lastRemoteSnapshotVersion=rR.min(),/** The highest numbered target ID encountered. */this.highestTargetId=0,/** The highest sequence number encountered. */this.Ns=0,/**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */this.ks=new aV,this.targetCount=0,this.Ms=aO.kn()}forEachTarget(t,e){return this.xs.forEach((t,n)=>e(n)),rB.resolve()}getLastRemoteSnapshotVersion(t){return rB.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return rB.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),rB.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),rB.resolve()}Fn(t){this.xs.set(t.target,t);let e=t.targetId;e>this.highestTargetId&&(this.Ms=new aO(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,rB.resolve()}updateTargetData(t,e){return this.Fn(e),rB.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,rB.resolve()}removeTargets(t,e,n){let i=0,r=[];return this.xs.forEach((s,a)=>{a.sequenceNumber<=e&&null===n.get(a.targetId)&&(this.xs.delete(s),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),rB.waitFor(r).next(()=>i)}getTargetCount(t){return rB.resolve(this.targetCount)}getTargetData(t,e){let n=this.xs.get(e)||null;return rB.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),rB.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);let i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),rB.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),rB.resolve()}getMatchingKeysForTargetId(t,e){let n=this.ks.Es(e);return rB.resolve(n)}containsKey(t,e){return rB.resolve(this.ks.containsKey(e))}}/**
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
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */class az{/**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */constructor(t,e){this.$s={},this.overlays={},this.Os=new r$(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new aH(this),this.indexManager=new aN,this.remoteDocumentCache=new aj(t=>this.referenceDelegate.Ls(t)),this.serializer=new a_(e),this.qs=new aP(this.serializer)}start(){return Promise.resolve()}shutdown(){// No durable state to ensure is closed on shutdown.
return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){// No op.
}setNetworkEnabled(){// No op.
}getIndexManager(t){// We do not currently support indices for memory persistence, so we can
// return the same shared instance of the memory index manager.
return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new aF,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new aB(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){rc("MemoryPersistence","Starting transaction:",t);let i=new aq(this.Os.next());return this.referenceDelegate.Us(),n(i).next(t=>this.referenceDelegate.Ks(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Gs(t,e){return rB.or(Object.values(this.$s).map(n=>()=>n.containsKey(t,e)))}}/**
 * Memory persistence is not actually transactional, but future implementations
 * may have transaction-scoped state.
 */class aq extends rV{constructor(t){super(),this.currentSequenceNumber=t}}class aG{constructor(t){this.persistence=t,/** Tracks all documents that are active in Query views. */this.Qs=new aV,/** The list of documents that are potentially GCed after each transaction. */this.js=null}static zs(t){return new aG(t)}get Ws(){if(this.js)return this.js;throw rg()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),rB.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),rB.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),rB.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach(t=>this.Ws.add(t.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Ws.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Us(){this.js=new Set}Ks(t){// Remove newly orphaned documents.
let e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rB.forEach(this.Ws,n=>{let i=rP.fromPath(n);return this.Hs(t,i).next(t=>{t||e.removeEntry(i,rR.min())})}).next(()=>(this.js=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hs(t,e).next(t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())})}Ls(t){// For eager GC, we don't care about the document size, there are no size thresholds.
return 0}Hs(t,e){return rB.or([()=>rB.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}/**
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
 * A set of changes to what documents are currently in view and out of view for
 * a given query. These changes are sent to the LocalStore by the View (via
 * the SyncEngine) and are used to pin / unpin documents as appropriate.
 */class aK{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=i}static Li(t,e){let n=sY(),i=sY();for(let t of e.docChanges)switch(t.type){case 0/* ChangeType.Added */:n=n.add(t.doc.key);break;case 1/* ChangeType.Removed */:i=i.add(t.doc.key)}return new aK(t,e.fromCache,n,i)}}/**
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
 *//**
 * The Firestore query engine.
 *
 * Firestore queries can be executed in three modes. The Query Engine determines
 * what mode to use based on what data is persisted. The mode only determines
 * the runtime complexity of the query - the result set is equivalent across all
 * implementations.
 *
 * The Query engine will use indexed-based execution if a user has configured
 * any index that can be used to execute query (via `setIndexConfiguration()`).
 * Otherwise, the engine will try to optimize the query by re-using a previously
 * persisted query result. If that is not possible, the query will be executed
 * via a full collection scan.
 *
 * Index-based execution is the default when available. The query engine
 * supports partial indexed execution and merges the result from the index
 * lookup with documents that have not yet been indexed. The index evaluation
 * matches the backend's format and as such, the SDK can use indexing for all
 * queries that the backend supports.
 *
 * If no index exists, the query engine tries to take advantage of the target
 * document mapping in the TargetCache. These mappings exists for all queries
 * that have been synced with the backend at least once and allow the query
 * engine to only read documents that previously matched a query plus any
 * documents that were edited after the query was last listened to.
 *
 * There are some cases when this optimization is not guaranteed to produce
 * the same results as full collection scans. In these cases, query
 * processing falls back to full scans. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of limbo documents.
 */class aQ{constructor(){this.qi=!1}/** Sets the document view to query against. */initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}/** Returns all local documents matching the specified query. */getDocumentsMatchingQuery(t,e,n,i){return this.Ki(t,e).next(r=>r||this.Gi(t,e,i,n)).next(n=>n||this.Qi(t,e))}/**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */Ki(t,e){if(sM(e))// key-based lookups. It is more efficient to scan all documents in a
// collection, rather than to perform individual lookups.
return rB.resolve(null);let n=sF(e);return this.indexManager.getIndexType(t,n).next(i=>0/* IndexType.NONE */===i?null:(null!==e.limit&&1/* IndexType.PARTIAL */===i&&(n=sF(// We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    e=sV(e,null,"F"/* LimitType.First */))),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{let r=sY(...i);return this.Ui.getDocuments(t,r).next(i=>this.indexManager.getMinOffset(t,n).next(n=>{let s=this.ji(e,i);return this.zi(e,s,r,n.readTime)?this.Ki(t,sV(e,null,"F"/* LimitType.First */)):this.Wi(t,s,e,n)}))})))}/**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */Gi(t,e,n,i){return sM(e)||i.isEqual(rR.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next(r=>{let s=this.ji(e,r);return this.zi(e,s,n,i)?this.Qi(t,e):(ru()<=tU.DEBUG&&rc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sj(e)),this.Wi(t,s,e,/**
 * Creates an offset that matches all documents with a read time higher than
 * `readTime`.
 */function(t,e){// We want to create an offset that matches all documents with a read time
// greater than the provided read time. To do so, we technically need to
// create an offset for `(readTime, MAX_DOCUMENT_KEY)`. While we could use
// Unicode codepoints to generate MAX_DOCUMENT_KEY, it is much easier to use
// `(readTime + 1, DocumentKey.empty())` since `> DocumentKey.empty()` matches
// all valid document IDs.
let n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=rR.fromTimestamp(1e9===i?new rk(n+1,0):new rk(n,i));return new rF(r,rP.empty(),-1)}(i,0)))});// Queries that have never seen a snapshot without limbo free documents
// should also be run as a full collection scan.
}/** Applies the query filter and sorting to the provided documents.  */ji(t,e){// Sort the documents and re-apply the query filter since previously
// matching documents do not necessarily still match the query.
let n=new rX((e,n)=>{let i=!1;for(let r of sP(t)){let t=function(t,e,n){let i=t.field.isKeyField()?rP.comparator(e.key,n.key):function(t,e,n){let i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?si(i,r):rg()}(t.field,e,n);switch(t.dir){case"asc"/* Direction.ASCENDING */:return i;case"desc"/* Direction.DESCENDING */:return -1*i;default:return rg()}}(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0});return e.forEach((e,i)=>{s$(t,i)&&(n=n.add(i))}),n}/**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param query - The query.
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)// longer matches.
return!0;// Limit queries are not eligible for index-free query execution if there is
// a potential that an older document from cache now sorts before a document
// that was previously part of the limit. This, however, can only happen if
// the document at the edge of the limit goes out of limit.
// If a document that is not the limit boundary sorts differently,
// the boundary of the limit itself did not change and documents from cache
// will continue to be "rejected" by this boundary. Therefore, we can ignore
// any modifications that don't affect the last document.
let r="F"/* LimitType.First */===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(t,e){return ru()<=tU.DEBUG&&rc("QueryEngine","Using full collection scan to execute query:",sj(e)),this.Ui.getDocumentsMatchingQuery(t,e,rF.min())}/**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */Wi(t,e,n,i){// Retrieve all results for documents that were updated since the offset.
return this.Ui.getDocumentsMatchingQuery(t,n,i).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}/**
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
 *//**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class aW{constructor(/** Manages our in-memory or durable persistence. */t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,/**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */this.Ji=new rK(rD),/** Maps a target to its targetID. */this.Yi=new sH(t=>sO(t),sL),/**
         * A per collection group index of the last read time processed by
         * `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){// TODO(indexing): Add spec tests that test these components change after a
// user change
this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new aM(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
async function aX(t,e){return await t.persistence.runTransaction("Handle user change","readonly",n=>{// Swap out the mutation queue, grabbing the pending mutation batches
// before and after.
let i;return t.mutationQueue.getAllMutationBatches(n).next(r=>(i=r,t.tr(e),t.mutationQueue.getAllMutationBatches(n))).next(e=>{let r=[],s=[],a=sY();for(let t of i)for(let e of(r.push(t.batchId),t.mutations))a=a.add(e.key);for(let t of e)for(let e of(s.push(t.batchId),t.mutations))a=a.add(e.key);// Return the set of all (potentially) changed documents and the list
// of mutation batch IDs that were affected by change.
return t.localDocuments.getDocuments(n,a).next(t=>({er:t,removedBatchIds:r,addedBatchIds:s}))})})}/**
 * Metadata state of the local client. Unlike `RemoteClientState`, this class is
 * mutable and keeps track of all pending mutations, which allows us to
 * update the range of pending mutation batch IDs as new mutations are added or
 * removed.
 *
 * The data in `LocalClientState` is not read from WebStorage and instead
 * updated via its instance methods. The updated state can be serialized via
 * `toWebStorageJSON()`.
 */// Visible for testing.
class aY{constructor(){this.activeTargetIds=sJ}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}/**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */hr(){let t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class aJ{constructor(){this.Hr=new aY,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){// No op.
}updateMutationState(t,e,n){// No op.
}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new aY,Promise.resolve()}handleUserChange(t,e,n){// No op.
}setOnlineState(t){// No op.
}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){// No op.
}}/**
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
 */class aZ{Yr(t){// No-op.
}shutdown(){// No-op.
}}/**
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
 */// References to `window` are guarded by BrowserConnectivityMonitor.isAvailable()
/* eslint-disable no-restricted-globals *//**
 * Browser implementation of ConnectivityMonitor.
 */class a0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let t of(rc("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))t(0/* NetworkStatus.AVAILABLE */)}no(){for(let t of(rc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))t(1/* NetworkStatus.UNAVAILABLE */)}// TODO(chenbrian): Consider passing in window either into this component or
// here for testing via FakeWindow.
/** Checks that all used attributes of window are available. */static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 *//**
 * The value returned from the most recent invocation of
 * `generateUniqueDebugId()`, or null if it has never been invoked.
 */let a1=null;/**
 * Generates and returns an initial value for `lastUniqueDebugId`.
 *
 * The returned value is randomly selected from a range of integers that are
 * represented as 8 hexadecimal digits. This means that (within reason) any
 * numbers generated by incrementing the returned number by 1 will also be
 * represented by 8 hexadecimal digits. This leads to all "IDs" having the same
 * length when converted to a hexadecimal string, making reading logs containing
 * these IDs easier to follow. And since the return value is randomly selected
 * it will help to differentiate between logs from different executions.
 *//**
 * Generates and returns a unique ID as a hexadecimal string.
 *
 * The returned ID is intended to be used in debug logging messages to help
 * correlate log messages that may be spatially separated in the logs, but
 * logically related. For example, a network connection could include the same
 * "debug ID" string in all of its log messages to help trace a specific
 * connection over time.
 *
 * @return the 10-character generated ID (e.g. "0xa1b2c3d4").
 */function a2(){return null===a1?a1=268435456+Math.round(2147483648*Math.random()):a1++,"0x"+a1.toString(16)}/**
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
 * Maps RPC names to the corresponding REST endpoint name.
 *
 * We use array notation to avoid mangling.
 *//**
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
 * Provides a simple helper class that implements the Stream interface to
 * bridge to other implementations that are streams but do not implement the
 * interface. The stream callbacks are invoked with the callOn... methods.
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
 */const a6="WebChannelConnection";class a5 extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){// Both `invokeRPC()` and `invokeStreamingRPC()` use their `path` arguments to determine
// where to run the query, and expect the `request` to NOT specify the "path".
return!1}Io(t,e,n,i,r){let s=a2(),a=this.To(t,e);rc("RestConnection",`Sending RPC '${t}' ${s}:`,a,n);let o={};return this.Eo(o,i,r),this.Ao(t,a,o,n).then(e=>(rc("RestConnection",`Received RPC '${t}' ${s}: `,e),e),e=>{throw rd("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",a,"request:",n),e})}vo(t,e,n,i,r,s){// The REST API automatically aggregates all of the streamed results, so we
// can just use the normal invoke() method.
return this.Io(t,e,n,i,r)}/**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+rl,// mess with CORS and redirects by proxies. If we add custom headers
// we will need to change this code to potentially use the $httpOverwrite
// parameter supported by ESF to avoid triggering preflight requests.
t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}To(t,e){let n=a9[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,i){let r=a2();return new Promise((s,a)=>{let o=new rr;o.setWithCredentials(!0),o.listenOnce(i8.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case i7.NO_ERROR:let e=o.getResponseJson();rc(a6,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case i7.TIMEOUT:rc(a6,`RPC '${t}' ${r} timed out`),a(new ry(rm.DEADLINE_EXCEEDED,"Request time out"));break;case i7.HTTP_ERROR:let n=o.getStatus();if(rc(a6,`RPC '${t}' ${r} failed with status:`,n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);let e=null==t?void 0:t.error;if(e&&e.status&&e.message){let t=function(t){let e=t.toLowerCase().replace(/_/g,"-");return Object.values(rm).indexOf(e)>=0?e:rm.UNKNOWN}(e.status);a(new ry(t,e.message))}else a(new ry(rm.UNKNOWN,"Server responded with status "+o.getStatus()))}else // it's most probably a connection issue
a(new ry(rm.UNAVAILABLE,"Connection failed."));break;default:rg()}}finally{rc(a6,`RPC '${t}' ${r} completed.`)}});let l=JSON.stringify(i);rc(a6,`RPC '${t}' ${r} sending request:`,i),o.send(e,"POST",l,n,15)})}Ro(t,e,n){let i=a2(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=i5(),o=i3(),l={// Required for backend stickiness, routing behavior is based on this
// parameter.
httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{// This param is used to improve routing and project isolation by the
// backend and must be included in every request.
database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{// Override the default timeout (randomized between 10-20 seconds) since
// a large write batch on a slow internet connection may take a long
// time to send to the backend. Rather than have WebChannel impose a
// tight timeout which could lead to infinite timeouts and retries, we
// set it very large (5-10 minutes) and rely on the browser's builtin
// timeouts to kick in if the request isn't working.
forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new rn({})),this.Eo(l.initMessageHeaders,e,n),// (Authorization, etc.) will trigger the browser to make a CORS preflight
// request because the XHR will no longer meet the criteria for a "simple"
// CORS request:
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
// Therefore to avoid the CORS preflight request (an extra network
// roundtrip), we use the encodeInitMessageHeaders option to specify that
// the headers should instead be encoded in the request's POST payload,
// which is recognized by the webchannel backend.
l.encodeInitMessageHeaders=!0;let u=r.join("");rc(a6,`Creating RPC '${t}' stream ${i}: ${u}`,l);let c=s.createWebChannel(u,l),f=!1,d=!1,p=new a4({ro:e=>{d?rc(a6,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(f||(rc(a6,`Opening RPC '${t}' stream ${i} transport.`),c.open(),f=!0),rc(a6,`RPC '${t}' stream ${i} sending:`,e),c.send(e))},oo:()=>c.close()}),g=(t,e,n)=>{// TODO(dimond): closure typing seems broken because WebChannel does
// not implement goog.events.Listenable
t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};// Closure events are guarded and exceptions are swallowed, so catch any
// exception and rethrow using a setTimeout so they become visible again.
// Note that eventually this function could go away if we are confident
// enough the code is exception free.
return g(c,ri.EventType.OPEN,()=>{d||rc(a6,`RPC '${t}' stream ${i} transport opened.`)}),g(c,ri.EventType.CLOSE,()=>{d||(d=!0,rc(a6,`RPC '${t}' stream ${i} transport closed`),p.wo())}),g(c,ri.EventType.ERROR,e=>{d||(d=!0,rd(a6,`RPC '${t}' stream ${i} transport errored:`,e),p.wo(new ry(rm.UNAVAILABLE,"The operation could not be completed")))}),g(c,ri.EventType.MESSAGE,e=>{var n;if(!d){let r=e.data[0];r||rg();// TODO(b/35143891): There is a bug in One Platform that caused errors
// (and only errors) to be wrapped in an extra array. To be forward
// compatible with the bug we need to check either condition. The latter
// can be removed once the fix has been rolled out.
// Use any because msgData.error is not typed.
let s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){rc(a6,`RPC '${t}' stream ${i} received error:`,s);// error.status will be a string like 'OK' or 'NOT_FOUND'.
let e=s.status,n=/**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */function(t){// lookup by string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let e=a[t];if(void 0!==e)return(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 *//**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */function(t){if(void 0===t)// to send invalid proto messages) we may get an error with no GRPC code.
return rf("GRPC error has no .code"),rm.UNKNOWN;switch(t){case a.OK:return rm.OK;case a.CANCELLED:return rm.CANCELLED;case a.UNKNOWN:return rm.UNKNOWN;case a.DEADLINE_EXCEEDED:return rm.DEADLINE_EXCEEDED;case a.RESOURCE_EXHAUSTED:return rm.RESOURCE_EXHAUSTED;case a.INTERNAL:return rm.INTERNAL;case a.UNAVAILABLE:return rm.UNAVAILABLE;case a.UNAUTHENTICATED:return rm.UNAUTHENTICATED;case a.INVALID_ARGUMENT:return rm.INVALID_ARGUMENT;case a.NOT_FOUND:return rm.NOT_FOUND;case a.ALREADY_EXISTS:return rm.ALREADY_EXISTS;case a.PERMISSION_DENIED:return rm.PERMISSION_DENIED;case a.FAILED_PRECONDITION:return rm.FAILED_PRECONDITION;case a.ABORTED:return rm.ABORTED;case a.OUT_OF_RANGE:return rm.OUT_OF_RANGE;case a.UNIMPLEMENTED:return rm.UNIMPLEMENTED;case a.DATA_LOSS:return rm.DATA_LOSS;default:return rg()}}(e))}(e),r=s.message;void 0===n&&(n=rm.INTERNAL,r="Unknown error status: "+e+" with message "+s.message),d=!0,p.wo(new ry(n,r)),c.close()}else rc(a6,`RPC '${t}' stream ${i} received:`,r),p._o(r)}}),g(o,rt.STAT_EVENT,e=>{e.stat===re.PROXY?rc(a6,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===re.NOPROXY&&rc(a6,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{// Technically we could/should wait for the WebChannel opened event,
// but because we want to send the first message with the WebChannel
// handshake we pretend the channel opened here (asynchronously), and
// then delay the actual open until the first message is sent.
p.fo()},0),p}}/** The Platform's 'document' implementation or null if not available. */function a3(){// `document` is not always available, e.g. in ReactNative and WebWorkers.
// eslint-disable-next-line no-restricted-globals
return"undefined"!=typeof document?document:null}/**
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
 */function a7(t){return new aE(t,/* useProto3Json= */!0)}/**
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
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */class a8{constructor(/**
     * The AsyncQueue to run backoff operations on.
     */t,/**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */e,/**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=i,this.Vo=r,this.So=0,this.Do=null,/** The last backoff attempt, as epoch milliseconds. */this.Co=Date.now(),this.reset()}/**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */reset(){this.So=0}/**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */xo(){this.So=this.Vo}/**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */No(t){// Cancel any pending backoff operation.
this.cancel();// First schedule using the current base (which may be 0 and should be
// honored as such).
let e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,e-n);// Guard against lastAttemptTime being in the future due to a clock change.
i>0&&rc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),// bounds.
this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}/** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ko(){return(Math.random()-.5)*this.So}}/**
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
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */class ot{constructor(t,e,n,i,r,s,a,o){this.ii=t,this.$o=n,this.Oo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0/* PersistentStreamState.Initial */,/**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new a8(t,e)}/**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */Uo(){return 1/* PersistentStreamState.Starting */===this.state||5/* PersistentStreamState.Backoff */===this.state||this.Ko()}/**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */Ko(){return 2/* PersistentStreamState.Open */===this.state||3/* PersistentStreamState.Healthy */===this.state}/**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */start(){4/* PersistentStreamState.Error */!==this.state?this.auth():this.Go()}/**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */async stop(){this.Uo()&&await this.close(0/* PersistentStreamState.Initial */)}/**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */Qo(){this.state=0/* PersistentStreamState.Initial */,this.qo.reset()}/**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */jo(){// Starts the idle time if we are in state 'Open' and are not yet already
// running a timer (in which case the previous idle timeout still applies).
this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}/** Sends a message to the underlying stream. */Wo(t){this.Ho(),this.stream.send(t)}/** Called by the idle timer when the stream should close due to inactivity. */async zo(){if(this.Ko())// it restarts so set the stream state to Initial instead of Error.
return this.close(0/* PersistentStreamState.Initial */)}/** Marks the stream as active again. */Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}/** Cancels the health check delayed operation. */Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}/**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */async close(t,e){// Cancel any outstanding timers (they're guaranteed not to execute).
this.Ho(),this.Jo(),this.qo.cancel(),// underlying stream), guaranteeing they won't execute.
this.Fo++,4/* PersistentStreamState.Error */!==t?this.qo.reset():e&&e.code===rm.RESOURCE_EXHAUSTED?(rf(e.toString()),rf("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===rm.UNAUTHENTICATED&&3/* PersistentStreamState.Healthy */!==this.state&&// "unauthenticated" error means the token was rejected. This should rarely
// happen since both Auth and AppCheck ensure a sufficient TTL when we
// request a token. If a user manually resets their system clock this can
// fail, however. In this case, we should get a Code.UNAUTHENTICATED error
// before we received the first message and we need to invalidate the token
// to ensure that we fetch a new token.
(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),// inhibit backoff or otherwise manipulate the state in its non-started state.
this.state=t,await this.listener.ao(e)}/**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */Yo(){}auth(){this.state=1/* PersistentStreamState.Starting */;let t=this.Xo(this.Fo),e=this.Fo;// TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{// Stream can be stopped while waiting for authentication.
// TODO(mikelehen): We really should just use dispatchIfNotClosed
// and let this dispatch onto the queue, but that opened a spec test can
// of worms that I don't want to deal with in this PR.
this.Fo===e&&// Normally we'd have to schedule the callback on the AsyncQueue.
// However, the following calls are safe to be called outside the
// AsyncQueue since they don't chain asynchronous calls
this.Zo(t,n)},e=>{t(()=>{let t=new ry(rm.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)})})}Zo(t,e){let n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo(()=>{n(()=>(this.state=2/* PersistentStreamState.Open */,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3/* PersistentStreamState.Healthy */),Promise.resolve())),this.listener.uo()))}),this.stream.ao(t=>{n(()=>this.tu(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}Go(){this.state=5/* PersistentStreamState.Backoff */,this.qo.No(async()=>{this.state=0/* PersistentStreamState.Initial */,this.start()})}// Visible for tests
tu(t){// In theory the stream could close cleanly, however, in our current model
// we never expect this to happen because if we stop a stream ourselves,
// this callback will never be called. To prevent cases where we retry
// without a backoff accidentally, we set the stream to error in all cases.
return rc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4/* PersistentStreamState.Error */,t)}/**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.Fo===t?e():(rc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}/**
 * A Stream that implements the Write RPC.
 *
 * The Write RPC requires the caller to maintain special streamToken
 * state in between calls, to help the server understand which responses the
 * client has processed by the time the next request is made. Every response
 * will contain a streamToken; this value must be passed to the next
 * request.
 *
 * After calling start() on this stream, the next request must be a handshake,
 * containing whatever streamToken is on hand. Once a response to this
 * request is received, all pending mutations may be submitted. When
 * submitting multiple batches of mutations at the same time, it's
 * okay to use the same streamToken for the calls to writeMutations.
 *
 * TODO(b/33271235): Use proto types
 */class oe extends ot{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff"/* TimerId.WriteStreamConnectionBackoff */,"write_stream_idle"/* TimerId.WriteStreamIdle */,"health_check_timeout"/* TimerId.HealthCheckTimeout */,e,n,i,s),this.serializer=r,this.ru=!1}/**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */get ou(){return this.ru}// Override of PersistentStream.start
start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){var e,n;if(t.streamToken||rg(),this.lastStreamToken=t.streamToken,this.ru){// A successful first write response means the stream is healthy,
// Note, that we could consider a successful handshake healthy, however,
// the write itself might be causing an error we want to back off from.
this.qo.reset();let i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(void 0!==n||rg(),e.map(t=>{let e;return(e=t.updateTime?aT(t.updateTime):aT(n)).isEqual(rR.min())&&// The Firestore Emulator currently returns an update time of 0 for
// deletes of non-existing documents (rather than null). This breaks the
// test "get deleted doc while offline with source=cache" as NoDocuments
// with version 0 are filtered by IndexedDb's RemoteDocumentCache.
// TODO(#2149): Remove this when Emulator is fixed
(e=aT(n)),new ai(e,t.transformResults||[])})):[]),r=aT(t.commitTime);return this.listener.cu(r,i)}// The first response is always the handshake response
return t.writeResults&&0!==t.writeResults.length&&rg(),this.ru=!0,this.listener.au()}/**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */hu(){var t;// TODO(dimond): Support stream resumption. We intentionally do not set the
// stream token on the handshake, ignoring any stream token we might have.
let e={};e.database=(t=this.serializer,new rL(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()),this.Wo(e)}/** Sends a group of mutations to the Firestore backend to apply. */uu(t){let e={streamToken:this.lastStreamToken,writes:t.map(t=>(function(t,e){var n;let i;if(e instanceof au)i={update:aA(t,e.key,e.value)};else if(e instanceof ag)i={delete:aS(t,e.key)};else if(e instanceof ac)i={update:aA(t,e.key,e.data),updateMask:function(t){let e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}(e.fieldMask)};else{if(!(e instanceof am))return rg();i={verify:aS(t,e.key)}}return e.fieldTransforms.length>0&&(i.updateTransforms=e.fieldTransforms.map(t=>(function(t,e){let n=e.transform;if(n instanceof s4)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof s6)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof s3)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof s8)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw rg()})(0,t))),e.precondition.isNone||(i.currentDocument=void 0!==(n=e.precondition).updateTime?{updateTime:ab(t,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:rg()),i})(this.serializer,t))};this.Wo(e)}}/**
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
 * Datastore and its related methods are a wrapper around the external Google
 * Cloud Datastore grpc API, which provides an interface that is more convenient
 * for the rest of the client SDK architecture to consume.
 *//**
 * An implementation of Datastore that exposes additional state for internal
 * consumption.
 */class on extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new ry(rm.FAILED_PRECONDITION,"The client has already been terminated.")}/** Invokes the provided RPC with auth and AppCheck tokens. */Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===rm.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ry(rm.UNKNOWN,t.toString())})}/** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */vo(t,e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.vo(t,e,n,r,s,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===rm.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ry(rm.UNKNOWN,t.toString())})}terminate(){this.lu=!0}}/**
 * A component used by the RemoteStore to track the OnlineState (that is,
 * whether or not the client as a whole should be considered to be online or
 * offline), implementing the appropriate heuristics.
 *
 * In particular, when the client is trying to connect to the backend, we
 * allow up to MAX_WATCH_STREAM_FAILURES within ONLINE_STATE_TIMEOUT_MS for
 * a connection to succeed. If we have too many failures or the timeout elapses,
 * then we set the OnlineState to Offline, and the client will behave as if
 * it is offline (get()s will return cached data, etc.).
 */class oi{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,/** The current OnlineState. */this.state="Unknown"/* OnlineState.Unknown */,/**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */this.wu=0,/**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */this._u=null,/**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */this.mu=!0}/**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */gu(){0===this.wu&&(this.yu("Unknown"/* OnlineState.Unknown */),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout"/* TimerId.OnlineStateTimeout */,1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"/* OnlineState.Offline */),Promise.resolve())))}/**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */Iu(t){"Online"/* OnlineState.Online */===this.state?this.yu("Unknown"/* OnlineState.Unknown */):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline"/* OnlineState.Offline */)))}/**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */set(t){this.Tu(),this.wu=0,"Online"/* OnlineState.Online */===t&&// We've connected to watch at least once. Don't warn the developer
// about being offline going forward.
(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){let e=`Could not reach Cloud Firestore backend. ${t}
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
 */class or{constructor(/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */t,/** The client-side proxy for interacting with the backend. */e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},/**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */this.Eu=[],/**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */this.Au=new Map,/**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */this.vu=new Set,/**
         * Event handlers that get called when the network is disabled or enabled.
         *
         * PORTING NOTE: These functions are used on the Web client to create the
         * underlying streams (to support tree-shakeable streams). On Android and iOS,
         * the streams are created during construction of RemoteStore.
         */this.Ru=[],this.Pu=r,this.Pu.Yr(t=>{n.enqueueAndForget(async()=>{// Porting Note: Unlike iOS, `restartNetwork()` is called even when the
// network becomes unreachable as we don't have any other way to tear
// down our streams.
oo(this)&&(rc("RemoteStore","Restarting streams for network reachability change."),await async function(t){t.vu.add(4/* OfflineCause.ConnectivityChange */),await oa(t),t.bu.set("Unknown"/* OnlineState.Unknown */),t.vu.delete(4/* OfflineCause.ConnectivityChange */),await os(t)}(this))})}),this.bu=new oi(n,i)}}async function os(t){if(oo(t))for(let e of t.Ru)await e(/* enabled= */!0)}/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */async function oa(t){for(let e of t.Ru)await e(/* enabled= */!1)}function oo(t){return 0===t.vu.size}/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */async function ol(t,e,n){if(!rj(e))throw e;t.vu.add(1/* OfflineCause.IndexedDbFailed */),await oa(t),t.bu.set("Offline"/* OnlineState.Offline */),n||// Use a simple read operation to determine if IndexedDB recovered.
// Ideally, we would expose a health check directly on SimpleDb, but
// RemoteStore only has access to persistence through LocalStore.
(n=()=>{var e;return(e=t.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}),t.asyncQueue.enqueueRetryable(async()=>{rc("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1/* OfflineCause.IndexedDbFailed */),await os(t)})}/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */function oh(t,e){return e().catch(n=>ol(t,n,e))}async function ou(t){let e=ow(t),n=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;oo(t)&&t.Eu.length<10;)try{let i=await /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */function(t,e){return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===e&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}(t.localStore,n);if(null===i){0===t.Eu.length&&e.jo();break}n=i.batchId,/**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */function(t,e){t.Eu.push(e);let n=ow(t);n.Ko()&&n.ou&&n.uu(e.mutations)}(t,i)}catch(e){await ol(t,e)}oc(t)&&of(t)}function oc(t){return oo(t)&&!ow(t).Uo()&&t.Eu.length>0}function of(t){ow(t).start()}async function od(t){ow(t).hu()}async function op(t){let e=ow(t);// Send the write pipeline now that the stream is established.
for(let n of t.Eu)e.uu(n.mutations)}async function og(t,e,n){let i=t.Eu.shift(),r=av.from(i,e,n);await oh(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),// slot has freed up.
await ou(t)}async function om(t,e){// If the write stream closed after the write handshake completes, a write
// operation failed and we fail the pending operation.
e&&ow(t).ou&&// This error affects the actual write.
await async function(t,e){var n;// Only handle permanent errors here. If it's transient, just let the retry
// logic kick in.
if(/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */function(t){switch(t){default:return rg();case rm.CANCELLED:case rm.UNKNOWN:case rm.DEADLINE_EXCEEDED:case rm.RESOURCE_EXHAUSTED:case rm.INTERNAL:case rm.UNAVAILABLE:// Unauthenticated means something went wrong with our token and we need
// to retry with new credentials which will happen automatically.
case rm.UNAUTHENTICATED:return!1;case rm.INVALID_ARGUMENT:case rm.NOT_FOUND:case rm.ALREADY_EXISTS:case rm.PERMISSION_DENIED:case rm.FAILED_PRECONDITION:// Aborted might be retried in some scenarios, but that is dependant on
// the context and should handled individually by the calling code.
// See https://cloud.google.com/apis/design/errors.
case rm.ABORTED:case rm.OUT_OF_RANGE:case rm.UNIMPLEMENTED:case rm.DATA_LOSS:return!0}}(n=e.code)&&n!==rm.ABORTED){// This was a permanent error, the request itself was the problem
// so it's not going to succeed if we resend it.
let n=t.Eu.shift();// In this case it's also unlikely that the server itself is melting
// down -- this was just a bad request so inhibit backoff on the next
// restart.
ow(t).Qo(),await oh(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),// another slot has freed up.
await ou(t)}}(t,e),// pipeline for failed writes
oc(t)&&of(t)}async function oy(t,e){t.asyncQueue.verifyOperationInProgress(),rc("RemoteStore","RemoteStore received new credentials");let n=oo(t);// Tear down and re-create our network streams. This will ensure we get a
// fresh auth token for the new user and re-fill the write pipeline with
// new mutations from the LocalStore (since mutations are per-user).
t.vu.add(3/* OfflineCause.CredentialChange */),await oa(t),n&&// Don't set the network status to Unknown if we are offline.
t.bu.set("Unknown"/* OnlineState.Unknown */),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3/* OfflineCause.CredentialChange */),await os(t)}/**
 * Toggles the network state when the client gains or loses its primary lease.
 */async function ov(t,e){e?(t.vu.delete(2/* OfflineCause.IsSecondary */),await os(t)):e||(t.vu.add(2/* OfflineCause.IsSecondary */),await oa(t),t.bu.set("Unknown"/* OnlineState.Unknown */))}/**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */function ow(t){var e,n,i;return t.Du||// Create stream (but note that it is not started yet).
(t.Du=(e=t.datastore,n=t.asyncQueue,i={uo:od.bind(null,t),ao:om.bind(null,t),au:op.bind(null,t),cu:og.bind(null,t)},e.fu(),new oe(n,e.connection,e.authCredentials,e.appCheckCredentials,e.serializer,i)),t.Ru.push(async e=>{e?(t.Du.Qo(),await ou(t)):(await t.Du.stop(),t.Eu.length>0&&(rc("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */class oE{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new rv,this.then=this.deferred.promise.then.bind(this.deferred.promise),// and so we attach a dummy catch callback to avoid
// 'UnhandledPromiseRejectionWarning' log spam.
this.deferred.promise.catch(t=>{})}/**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */static createAndSchedule(t,e,n,i,r){let s=Date.now()+n,a=new oE(t,e,s,i,r);return a.start(n),a}/**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}/**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */skipDelay(){return this.handleDelayElapsed()}/**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ry(rm.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */function ob(t,e){if(rf("AsyncQueue",`${e}: ${t}`),rj(t))return new ry(rm.UNAVAILABLE,`${e}: ${t}`);throw t}class oT{constructor(){this.queries=new sH(t=>sB(t),sU),this.onlineState="Unknown"/* OnlineState.Unknown */,this.ku=new Set}}/**
 * An implementation of `SyncEngine` coordinating with other parts of SDK.
 *
 * The parts of SyncEngine that act as a callback to RemoteStore need to be
 * registered individually. This is done in `syncEngineWrite()` and
 * `syncEngineListen()` (as well as `applyPrimaryState()`) as these methods
 * serve as entry points to RemoteStore's functionality.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */class oI{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.dc={},this.wc=new sH(t=>sB(t),sU),this._c=new Map,/**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query. The strings in this set are the result of calling
         * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
         *
         * The `Set` type was chosen because it provides efficient lookup and removal
         * of arbitrary elements and it also maintains insertion order, providing the
         * desired queue-like FIFO semantics.
         */this.mc=new Set,/**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */this.gc=new rK(rP.comparator),/**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */this.yc=new Map,this.Ic=new aV,/** Stores user completion handlers, indexed by User and BatchId. */this.Tc={},/** Stores user callbacks waiting for all pending writes to be acknowledged. */this.Ec=new Map,this.Ac=aO.Mn(),this.onlineState="Unknown"/* OnlineState.Unknown */,// startup. In the interim, a client should only be considered primary if
// `isPrimary` is true.
this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */async function oS(t,e,n){var i;let r=(t.remoteStore.remoteSyncer.applySuccessfulWrite=oC.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=o_.bind(null,t),t);try{let t;let s=await function(t,e){let n,i;let r=rk.now(),s=e.reduce((t,e)=>t.add(e.key),sY());return t.persistence.runTransaction("Locally write mutations","readwrite",a=>{// Figure out which keys do not have a remote version in the cache, this
// is needed to create the right overlay mutation: if no remote version
// presents, we do not need to create overlays as patch mutations.
// TODO(Overlay): Is there a better way to determine this? Using the
//  document version does not work because local mutations set them back
//  to 0.
let o=sz,l=sY();return t.Zi.getEntries(a,s).next(t=>{(o=t).forEach((t,e)=>{e.isValidDocument()||(l=l.add(t))})}).next(()=>t.localDocuments.getOverlayedDocuments(a,o)).next(i=>{n=i;// For non-idempotent mutations (such as `FieldValue.increment()`),
// we record the base state in a separate patch mutation. This is
// later used to guarantee consistent values and prevents flicker
// even if the backend sends us an update that already includes our
// transform.
let s=[];for(let t of e){let e=/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */function(t,e){let n=null;for(let i of t.fieldTransforms){let t=e.data.field(i.field),r=s9(i.transform,t||null);null!=r&&(null===n&&(n=sc.empty()),n.set(i.field,r))}return n||null}(t,n.get(t.key).overlayedDocument);null!=e&&// NOTE: The base state should only be applied if there's some
// existing document to override, so use a Precondition of
// exists=true
s.push(new ac(t.key,e,/**
 * Returns a FieldMask built from all fields in a MapValue.
 */function t(e){let n=[];return rq(e.fields,(e,i)=>{let r=new rM([e]);if(sl(i)){let e=t(i.mapValue).fields;if(0===e.length)n.push(r);else // leaf nodes.
for(let t of e)n.push(r.child(t))}else // nodes.
n.push(r)}),new rJ(n)}(e.value.mapValue),ar.exists(!0)))}return t.mutationQueue.addMutationBatch(a,r,s,e)}).next(e=>{i=e;let r=e.applyToLocalDocumentSet(n,l);return t.documentOverlayCache.saveOverlays(a,e.batchId,r)})}).then(()=>({batchId:i.batchId,changes:sK(n)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(t=r.Tc[r.currentUser.toKey()])||(t=new rK(rD)),t=t.insert(i,n),r.Tc[r.currentUser.toKey()]=t,await ok(r,s.changes),await ou(r.remoteStore)}catch(e){// If we can't persist the mutation, we reject the user callback and
// don't send the mutation. The user can then retry the write.
let t=ob(e,"Failed to persist write");n.reject(t)}}/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */function oA(t,e,n){var i;// If we are the secondary client, we explicitly ignore the remote store's
// online state (the local client may go offline, even though the primary
// tab remains online) and only apply the primary tab's online state from
// SharedClientState.
if(t.isPrimaryClient&&0/* OnlineStateSource.RemoteStore */===n||!t.isPrimaryClient&&1/* OnlineStateSource.SharedClientState */===n){let n;let r=[];t.wc.forEach((t,n)=>{let i=n.view.Mu(e);i.snapshot&&r.push(i.snapshot)}),(i=t.eventManager).onlineState=e,n=!1,i.queries.forEach((t,i)=>{for(let t of i.listeners)t.Mu(e)&&(n=!0)}),n&&// Call all global snapshot listeners that have been set.
function(t){t.ku.forEach(t=>{t.next()})}(i),r.length&&t.dc.nu(r),t.onlineState=e,t.isPrimaryClient&&t.sharedClientState.setOnlineState(e)}}async function oC(t,e){var n;let i=e.batch.batchId;try{let r=await (n=t.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{let i=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return(function(t,e,n,i){let r=n.batch,s=r.keys(),a=rB.resolve();return s.forEach(t=>{a=a.next(()=>i.getEntry(e,t)).next(e=>{let s=n.docVersions.get(t);null!==s||rg(),0>e.version.compareTo(s)&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&// We use the commitVersion as the readTime rather than the
// document's updateTime since the updateTime is not advanced
// for updates that do not modify the underlying document.
(e.setReadTime(n.commitVersion),i.addEntry(e)))})}),a.next(()=>t.mutationQueue.removeMutationBatch(e,r))})(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=sY();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,i))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught
// up), so we raise user callbacks first so that they consistently happen
// before listen events.
oN(t,i,/*error=*/null),oD(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ok(t,r)}catch(t){await rU(t)}}async function o_(t,e,n){var i;try{let r=await (i=t.localStore).persistence.runTransaction("Reject batch","readwrite-primary",t=>{let n;return i.mutationQueue.lookupMutationBatch(t,e).next(e=>(null!==e||rg(),n=e.keys(),i.mutationQueue.removeMutationBatch(t,e))).next(()=>i.mutationQueue.performConsistencyCheck(t)).next(()=>i.documentOverlayCache.removeOverlaysForBatchId(t,n,e)).next(()=>i.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,n)).next(()=>i.localDocuments.getDocuments(t,n))});// The local store may or may not be able to apply the write result and
// raise events immediately (depending on whether the watcher is caught up),
// so we raise user callbacks first so that they consistently happen before
// listen events.
oN(t,e,n),oD(t,e),t.sharedClientState.updateMutationState(e,"rejected",n),await ok(t,r)}catch(t){await rU(t)}}/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */function oD(t,e){(t.Ec.get(e)||[]).forEach(t=>{t.resolve()}),t.Ec.delete(e)}/** Reject all outstanding callbacks waiting for pending writes to complete. */function oN(t,e,n){let i=t.Tc[t.currentUser.toKey()];// NOTE: Mutations restored from persistence won't have callbacks, so it's
// okay for there to be no callback for this ID.
if(i){let r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),t.Tc[t.currentUser.toKey()]=i}}async function ok(t,e,n){let i=[],r=[],s=[];t.wc.isEmpty()||(t.wc.forEach((a,o)=>{s.push(t.Rc(o,e,n).then(e=>{// Update views if there are actual changes.
if(// secondary clients to update query state.
(e||n)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(o.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);let t=aK.Li(o.targetId,e);r.push(t)}}))}),await Promise.all(s),t.dc.nu(i),await async function(t,e){try{await t.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>rB.forEach(e,e=>rB.forEach(e.Fi,i=>t.persistence.referenceDelegate.addReference(n,e.targetId,i)).next(()=>rB.forEach(e.Bi,i=>t.persistence.referenceDelegate.removeReference(n,e.targetId,i)))))}catch(t){if(!rj(t))throw t;// If `notifyLocalViewChanges` fails, we did not advance the sequence
// number for the documents that were included in this transaction.
// This might trigger them to be deleted earlier than they otherwise
// would have, but it should not invalidate the integrity of the data.
rc("LocalStore","Failed to update sequence numbers: "+t)}for(let n of e){let e=n.targetId;if(!n.fromCache){let n=t.Ji.get(e),i=n.snapshotVersion,r=n.withLastLimboFreeSnapshotVersion(i);// Advance the last limbo free snapshot version
t.Ji=t.Ji.insert(e,r)}}}(t.localStore,r))}async function oR(t,e){if(!t.currentUser.isEqual(e)){rc("SyncEngine","User change. New user:",e.toKey());let n=await aX(t.localStore,e);t.currentUser=e,t.Ec.forEach(t=>{t.forEach(t=>{t.reject(new ry(rm.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.Ec.clear(),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ok(t,n.er)}}class oO{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=a7(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){var /** Manages our in-memory or durable persistence. */e,n,i,r;return e=this.persistence,n=new aQ,i=t.initialUser,r=this.serializer,new aW(e,n,i,r)}createPersistence(t){return new az(aG.zs,this.serializer)}createSharedClientState(t){return new aJ}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}/**
 * Initializes and wires the components that are needed to interface with the
 * network.
 */class oL{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,/* startAsPrimary=*/!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>oA(this.syncEngine,t,1/* OnlineStateSource.SharedClientState */),this.remoteStore.remoteSyncer.handleCredentialChange=oR.bind(null,this.syncEngine),await ov(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new oT}createDatastore(t){var e,n,i;let r=a7(t.databaseInfo.databaseId),s=(e=t.databaseInfo,new a5(e));/** Return the Platform-specific connectivity monitor. */return n=t.authCredentials,i=t.appCheckCredentials,new on(n,i,s,r)}createRemoteStore(t){var e,n,i,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=a0.D()?new a0:new aZ,new or(e,n,i,t=>oA(this.syncEngine,t,0/* OnlineStateSource.RemoteStore */),r);/** Re-enables the network. Idempotent. */}createSyncEngine(t,e){return function(t,e,n,i,r,s,a){let o=new oI(t,e,n,i,r,s);return a&&(o.vc=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){rc("RemoteStore","RemoteStore shutting down."),t.vu.add(5/* OfflineCause.Shutdown */),await oa(t),t.Pu.shutdown(),// triggering spurious listener events with cached data, etc.
t.bu.set("Unknown"/* OnlineState.Unknown */)}(this.remoteStore)}}/**
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
 * FirestoreClient is a top-level class that constructs and owns all of the //
 * pieces of the client SDK architecture. It is responsible for creating the //
 * async queue that is shared by all of the other components in the system. //
 */class ox{constructor(t,e,/**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=ro.UNAUTHENTICATED,this.clientId=r_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{rc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(rc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}/**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ry(rm.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let t=new rv;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),// RemoteStore as it will prevent the RemoteStore from retrieving auth
// tokens.
this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){let e=ob(n,"Failed to shutdown persistence");t.reject(e)}}),t.promise}}async function oM(t,e){t.asyncQueue.verifyOperationInProgress(),rc("FirestoreClient","Initializing OfflineComponentProvider");let n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await aX(e.localStore,t),i=t)}),// need to be terminated to allow the delete to succeed.
e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oP(t,e){t.asyncQueue.verifyOperationInProgress();let n=await oF(t);rc("FirestoreClient","Initializing OnlineComponentProvider");let i=await t.getConfiguration();await e.initialize(n,i),// precedence over the offline component provider.
t.setCredentialChangeListener(t=>oy(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>oy(e.remoteStore,n)),t._onlineComponents=e}async function oF(t){if(!t._offlineComponents){if(t._uninitializedComponentsProvider){rc("FirestoreClient","Using user provided OfflineComponentProvider");try{await oM(t,t._uninitializedComponentsProvider._offline)}catch(e){if(!("FirebaseError"===e.name?e.code===rm.FAILED_PRECONDITION||e.code===rm.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||// When the browser is out of quota we could get either quota exceeded
// or an aborted error depending on whether the error happened during
// schema migration.
22===e.code||20===e.code||// Firefox Private Browsing mode disables IndexedDb and returns
// INVALID_STATE for any usage.
11===e.code))throw e;rd("Error using user provided cache. Falling back to memory cache: "+e),await oM(t,new oO)}}else rc("FirestoreClient","Using default OfflineComponentProvider"),await oM(t,new oO)}return t._offlineComponents}async function oV(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(rc("FirestoreClient","Using user provided OnlineComponentProvider"),await oP(t,t._uninitializedComponentsProvider._online)):(rc("FirestoreClient","Using default OnlineComponentProvider"),await oP(t,new oL))),t._onlineComponents}/**
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
 *//**
 * Compares two `ExperimentalLongPollingOptions` objects for equality.
 *//**
 * Creates and returns a new `ExperimentalLongPollingOptions` with the same
 * option values as the given instance.
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
 * An instance map that ensures only one Datastore exists per Firestore
 * instance.
 *//**
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
 */function oj(t,e,n){if(!n)throw new ry(rm.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */function o$(t){if(!rP.isDocumentKey(t))throw new ry(rm.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */function oH(t){if(rP.isDocumentKey(t))throw new ry(rm.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 *//** Returns a string describing the type / value of the provided input. */function oz(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{var e;let n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}return"function"==typeof t?"a function":rg()}function oq(t,e){if("_delegate"in t&&// Unwrap Compat types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ry(rm.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=oz(t);throw new ry(rm.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied `FirestoreSettings` object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */class oG{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ry(rm.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ry(rm.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}/**
 * Validates that two boolean options are not set at the same time.
 * @internal
 */(function(t,e,n,i){if(!0===e&&!0===i)throw new ry(rm.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:// the TypeScript compiler has narrowed the type to boolean already.
// noinspection PointlessBooleanExpressionJS
this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oU(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ry(rm.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ry(rm.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ry(rm.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oK{/** @hideconstructor */constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,/**
         * Whether it's a Firestore or Firestore Lite instance.
         */this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oG({}),this._settingsFrozen=!1}/**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */get app(){if(!this._app)throw new ry(rm.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ry(rm.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oG(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new rE;switch(t.type){case"firstParty":return new rS(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ry(rm.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}/** Returns a JSON-serializable representation of this `Firestore` instance. */toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}/**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */_terminate(){/**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */return function(t){let e=oB.get(t);e&&(rc("ComponentProvider","Removing Datastore"),oB.delete(t),e.terminate())}(this),Promise.resolve()}}/**
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
 *//**
 * A `DocumentReference` refers to a document location in a Firestore database
 * and can be used to write, read, or listen to the location. The document at
 * the referenced location may or may not exist.
 */class oQ{/** @hideconstructor */constructor(t,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */e,n){this.converter=e,this._key=n,/** The type of this Firestore reference. */this.type="document",this.firestore=t}get _path(){return this._key.path}/**
     * The document's identifier within its collection.
     */get id(){return this._key.path.lastSegment()}/**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */get path(){return this._key.path.canonicalString()}/**
     * The collection this `DocumentReference` belongs to.
     */get parent(){return new oX(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new oQ(this.firestore,t,this._key)}}/**
 * A `Query` refers to a query which you can read or listen to. You can also
 * construct refined `Query` objects by adding filters and ordering.
 */class oW{// This is the lite version of the Query class in the main SDK.
/** @hideconstructor protected */constructor(t,/**
     * If provided, the `FirestoreDataConverter` associated with this instance.
     */e,n){this.converter=e,this._query=n,/** The type of this Firestore reference. */this.type="query",this.firestore=t}withConverter(t){return new oW(this.firestore,t,this._query)}}/**
 * A `CollectionReference` object can be used for adding documents, getting
 * document references, and querying for documents (using {@link (query:1)}).
 */class oX extends oW{/** @hideconstructor */constructor(t,e,n){super(t,e,new sx(n)),this._path=n,/** The type of this Firestore reference. */this.type="collection"}/** The collection's identifier. */get id(){return this._query.path.lastSegment()}/**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */get path(){return this._query.path.canonicalString()}/**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */get parent(){let t=this._path.popLast();return t.isEmpty()?null:new oQ(this.firestore,/* converter= */null,new rP(t))}withConverter(t){return new oX(this.firestore,t,this._path)}}function oY(t,e,...n){if(t=j(t),// 'undefined' and 'null'.
1==arguments.length&&(e=r_.A()),oj("doc","path",e),t instanceof oK){let i=rL.fromString(e,...n);return o$(i),new oQ(t,/* converter= */null,new rP(i))}{if(!(t instanceof oQ||t instanceof oX))throw new ry(rm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(rL.fromString(e,...n));return o$(i),new oQ(t.firestore,t instanceof oX?t.converter:null,new rP(i))}}/**
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
 */class oJ{constructor(){// The last promise in the queue.
this.Gc=Promise.resolve(),// retried with backoff.
this.Qc=[],// be changed again.
this.jc=!1,// automatically removed after they are run or canceled.
this.zc=[],this.Wc=null,// assertion sanity-checks.
this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new a8(this,"async_queue_retry"/* TimerId.AsyncQueueRetry */),// operations. Meant to speed up recovery when we regain file system access
// after page comes into foreground.
this.Xc=()=>{let t=a3();t&&rc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};let t=a3();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}/**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */enqueueAndForget(t){// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;let e=a3();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise(()=>{});// Create a deferred Promise that we can return to the callee. This
// allows us to return a "hanging Promise" only to the callee and still
// advance the queue even when the operation is not run.
let e=new rv;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qc.push(t),this.ea()))}/**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!rj(t))throw t;// Failure will be handled by AsyncQueue
rc("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&// If there are additional operations, we re-schedule `retryNextOp()`.
// This is necessary to run retryable operations that failed during
// their initial attempt since we don't know whether they are already
// enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
// needs to  be re-run, we will run `op1`, `op1`, `op2` using the
// already enqueued calls to `retryNextOp()`. `op3()` will then run in the
// call scheduled here.
// Since `backoffAndRun()` cancels an existing backoff and schedules a
// new backoff on every call, there is only ever a single additional
// operation in the queue.
this.qo.No(()=>this.ea())}}ta(t){let e=this.Gc.then(()=>(this.Hc=!0,t().catch(t=>{let e;this.Wc=t,this.Hc=!1;let n=(e=t.message||"",t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e);// Re-throw the error so that this.tail becomes a rejected Promise and
    // all further attempts to chain (via .then) will just short-circuit
    // and return the rejected Promise.
    throw rf("INTERNAL UNHANDLED ERROR: ",n),t}).then(t=>(this.Hc=!1,t))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);let i=oE.createAndSchedule(this,t,e,n,t=>this.na(t));return this.zc.push(i),i}Zc(){this.Wc&&rg()}verifyOperationInProgress(){}/**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */async sa(){// Operations in the queue prior to draining may have enqueued additional
// operations. Keep draining the queue until the tail is no longer advanced,
// which indicates that no more new operations were enqueued and that all
// operations were executed.
let t;do t=this.Gc,await t;while(t!==this.Gc)}/**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */ia(t){for(let e of this.zc)if(e.timerId===t)return!0;return!1}/**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */ra(t){// Note that draining may generate more delayed ops, so we do that first.
return this.sa().then(()=>{for(let e of(// Run ops in the same order they'd run if they ran naturally.
this.zc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs),this.zc))if(e.skipDelay(),"all"/* TimerId.All */!==t&&e.timerId===t)break;return this.sa()})}/**
     * For Tests: Skip all subsequent delays for a timer id.
     */oa(t){this.Yc.push(t)}/** Called once a DelayedOperation is run or canceled. */na(t){// NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
let e=this.zc.indexOf(t);this.zc.splice(e,1)}}/**
 * The Cloud Firestore service interface.
 *
 * Do not call this constructor directly. Instead, use {@link (getFirestore:1)}.
 */class oZ extends oK{/** @hideconstructor */constructor(t,e,n,i){super(t,e,n,i),/**
         * Whether it's a {@link Firestore} or Firestore Lite instance.
         */this.type="firestore",this._queue=new oJ,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||// The client must be initialized to ensure that all subsequent API
// usage throws an exception.
o0(this),this._firestoreClient.terminate()}}function o0(t){var e,n,i,r,s,a;let o=t._freezeSettings(),l=(r=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",a=t._persistenceKey,new r3(r,s,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,oU(o.experimentalLongPollingOptions),o.useFetchStreams));t._firestoreClient=new ox(t._authCredentials,t._appCheckCredentials,t._queue,l),(null===(n=o.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=o.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.cache.kind,_offline:o.cache._offlineComponentProvider,_online:o.cache._onlineComponentProvider})}/**
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
 *//**
 * An immutable object representing an array of bytes.
 */class o1{/** @hideconstructor */constructor(t){this._byteString=t}/**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */static fromBase64String(t){try{return new o1(r0.fromBase64String(t))}catch(t){throw new ry(rm.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}/**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */static fromUint8Array(t){return new o1(r0.fromUint8Array(t))}/**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */toBase64(){return this._byteString.toBase64()}/**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */toUint8Array(){return this._byteString.toUint8Array()}/**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */toString(){return"Bytes(base64: "+this.toBase64()+")"}/**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 *//**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a
 * list of field names (referring to a nested field in the document).
 *
 * Create a `FieldPath` by providing field names. If more than one field
 * name is provided, the path will point to a nested field in a document.
 */class o2{/**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ry(rm.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rM(t)}/**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 *//**
 * Sentinel values that can be used when writing document fields with `set()`
 * or `update()`.
 */class o9{/**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */constructor(t){this._methodName=t}}/**
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
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */class o4{/**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ry(rm.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ry(rm.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}/**
     * The latitude of this `GeoPoint` instance.
     */get latitude(){return this._lat}/**
     * The longitude of this `GeoPoint` instance.
     */get longitude(){return this._long}/**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */isEqual(t){return this._lat===t._lat&&this._long===t._long}/** Returns a JSON-serializable representation of this GeoPoint. */toJSON(){return{latitude:this._lat,longitude:this._long}}/**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */_compareTo(t){return rD(this._lat,t._lat)||rD(this._long,t._long)}}/**
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
 */const o6=/^__.*__$/;/** The result of parsing document data (e.g. for a setData call). */class o5{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ac(t,this.data,this.fieldMask,e,this.fieldTransforms):new au(t,this.data,e,this.fieldTransforms)}}/** The result of parsing "update" data (i.e. for an updateData call). */class o3{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ac(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function o7(t){switch(t){case 0/* UserDataSource.Set */:// fall through
case 2/* UserDataSource.MergeSet */:// fall through
case 1/* UserDataSource.Update */:return!0;case 3/* UserDataSource.Argument */:case 4/* UserDataSource.ArrayArgument */:return!1;default:throw rg()}}/** A "context" object passed around while parsing user data. */class o8{/**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,// external call and we need to validate the entire path.
void 0===r&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}/** Returns a new context with the specified settings overwritten. */aa(t){return new o8(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.fa(t),i}da(t){var e;let n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.aa({path:n,la:!1});return i.ua(),i}wa(t){// TODO(b/34871131): We don't support array paths right now; so make path
// undefined.
return this.aa({path:void 0,la:!0})}_a(t){return lc(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}/** Returns 'true' if 'fieldPath' was traversed when creating this context. */contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ua(){// TODO(b/34871131): Remove null check once we have proper paths for fields
// within arrays.
if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(o7(this.ca)&&o6.test(t))throw this._a('Document fields cannot begin and end with "__"')}}/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */class lt{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||a7(t)}/** Creates a new top-level parse context. */ya(t,e,n,i=!1){return new o8({ca:t,methodName:e,ga:n,path:rM.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function le(t){let e=t._freezeSettings(),n=a7(t._databaseId);return new lt(t._databaseId,!!e.ignoreUndefinedProperties,n)}class ln extends o9{_toFieldTransform(t){if(2/* UserDataSource.MergeSet */!==t.ca)throw 1/* UserDataSource.Update */===t.ca?t._a(`${this._methodName}() can only appear at the top level of your update data`):t._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);// No transform to add for a delete, but we need to add it to our
// fieldMask so it gets deleted.
return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ln}}class li extends o9{constructor(t,e){super(t),this.Ia=e}_toFieldTransform(t){let e=new s8(t.serializer,s1(t.serializer,this.Ia));return new an(t.path,e)}isEqual(t){// TODO(mrschmidt): Implement isEquals
return this===t}}/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */function lr(t,e){if(la(// from firestore-exp.
t=j(t)))return lo("Unsupported field value:",e,t),ls(t,e);if(t instanceof o9)// in which case we do not want to include this field in our parsed data
// (as doing so will overwrite the field directly prior to the transform
// trying to transform it). So we don't add this location to
// context.fieldMask and we return null as our parsing result.
/**
 * "Parses" the provided FieldValueImpl, adding any necessary transforms to
 * context.fieldTransforms.
 */return function(t,e){// Sentinels are only supported with writes, and not within arrays.
if(!o7(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);let n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)// don't handle this below. If `ignoreUndefinedProperties` is false,
// `parseScalarValue` will reject an undefined value.
return null;if(// field mask paths more granular than the top-level array.
e.path&&e.fieldMask.push(e.path),t instanceof Array){// TODO(b/34871131): Include the path containing the array in the error
// message.
// In the case of IN queries, the parsed data is an array (representing
// the set of values to be included for the IN query) that may directly
// contain additional arrays (each representing an individual field
// value), so we disable this validation.
if(e.settings.la&&4/* UserDataSource.ArrayArgument */!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){let n=[],i=0;for(let r of t){let t=lr(r,e.wa(i));null==t&&// Just include nulls in the array for fields being replaced with a
// sentinel.
(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=j(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return s1(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){let n=rk.fromDate(t);return{timestampValue:ab(e.serializer,n)}}if(t instanceof rk){// Firestore backend truncates precision down to microseconds. To ensure
// offline mode works the same with regards to truncation, perform the
// truncation immediately without waiting for the backend to do that.
let n=new rk(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ab(e.serializer,n)}}if(t instanceof o4)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof o1){var n,i;return{bytesValue:(n=e.serializer,i=t._byteString,n.useProto3Json?i.toBase64():i.toUint8Array())}}if(t instanceof oQ){let n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:aI(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${oz(t)}`)}(t,e)}function ls(t,e){let n={};return rG(t)?// mask to ensure that the server creates a map entry.
e.path&&e.path.length>0&&e.fieldMask.push(e.path):rq(t,(t,i)=>{let r=lr(i,e.ha(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function la(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof rk||t instanceof o4||t instanceof o1||t instanceof oQ||t instanceof o9)}function lo(t,e,n){if(!la(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let i=oz(n);throw"an object"===i?e._a(t+" a custom object"):e._a(t+" "+i)}}/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */function ll(t,e,n){if(// FieldPath.
(e=j(e))instanceof o2)return e._internalPath;if("string"==typeof e)return lu(t,e);throw lc("Field path arguments must be of type string or ",t,/* hasConverter= */!1,/* path= */void 0,n)}/**
 * Matches any characters in a field path string that are reserved.
 */const lh=RegExp("[~\\*/\\[\\]]");/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */function lu(t,e,n){if(e.search(lh)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,/* hasConverter= */!1,/* path= */void 0,n);try{return new o2(...e.split("."))._internalPath}catch(i){throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,/* hasConverter= */!1,/* path= */void 0,n)}}function lc(t,e,n,i,r){let s=i&&!i.isEmpty(),a=void 0!==r,o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new ry(rm.INVALID_ARGUMENT,o+t+l)}/** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */function lf(t,e){return t.some(t=>t.isEqual(e))}/**
 * Locally writes `mutations` on the async queue.
 * @internal
 */function ld(t,e){return function(t,e){let n=new rv;return t.asyncQueue.enqueueAndForget(async()=>oS(await oV(t).then(t=>t.syncEngine),e,n)),n.promise}((t._firestoreClient||o0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient),e)}/**
 * Cloud Firestore
 *
 * @packageDocumentation
 */!function(t=!0){rl="9.23.0",tw(new $("firestore",(e,{instanceIdentifier:n,options:i})=>{let r=e.getProvider("app").getImmediate(),s=new oZ(new rT(e.getProvider("auth-internal")),new rC(e.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ry(rm.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new r7(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),tI(ra,"3.13.0",void 0),tI(ra,"3.13.0","esm2017")}(),tT({apiKey:"AIzaSyDhfTomFg03nXW2cD1RIysGXydVHHUNC0c",authDomain:"nisb-website.firebaseapp.com",projectId:"nisb-website",storageBucket:"nisb-website.appspot.com",messagingSenderId:"30096523025",appId:"1:30096523025:web:8485960da3344cf73cd6b0",measurementId:"G-5RMDTP6Q8R"})// eslint-disable-line no-unused-vars
;const lp=function(t,e){let n="object"==typeof t?t:/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function(t=tg){let e=ty.get(t);if(!e&&t===tg&&x())return tT();if(!e)throw tE.create("no-app"/* AppError.NO_APP */,{appName:t});return e}(),i=/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */(function(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)})(n,"firestore").getImmediate({identifier:"string"==typeof t?t:"(default)"});if(!i._initialized){let t=L("firestore");t&&/**
 * Modify this instance to communicate with the Cloud Firestore emulator.
 *
 * Note: This must be called before this instance has been used to do any
 * operations.
 *
 * @param firestore - The `Firestore` instance to configure to connect to the
 * emulator.
 * @param host - the emulator host (ex: localhost).
 * @param port - the emulator port (ex: 9000).
 * @param options.mockUserToken - the mock auth token to use for unit testing
 * Security Rules.
 */function(t,e,n,i={}){var r;let s=(t=oq(t,oK))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&rd("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=ro.MOCK_USER;else{// Let createMockUserToken validate first (catches common mistakes like
// invalid field "uid" and missing field "sub" / "user_id".)
e=/**
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
 */function(t,e){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({// Set all required fields to decent defaults
iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[C(JSON.stringify({alg:"none",type:"JWT"})),C(JSON.stringify(s)),""].join(".")}(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ry(rm.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ro(s)}t._authCredentials=new rb(new rw(e,n))}}(i,...t)}return i}();var lg=null;fetch("https://ipapi.co/json/").then(t=>t.json()).then(t=>lg=t).catch(t=>console.error(t));const lm=t=>{!/**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A `Promise` resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */function(t,e){var n,i;let r=oq(t.firestore,oZ),s=oY(t),a=(n=t.converter)?i&&(i.merge||i.mergeFields)?n.toFirestore(e,i):n.toFirestore(e):e;ld(r,[/** Parse document data from a set() call. */(function(t,e,n,i,r,s={}){let a,o;let l=t.ya(s.merge||s.mergeFields?2/* UserDataSource.MergeSet */:0/* UserDataSource.Set */,e,n,r);lo("Data must be an object, but it was:",l,i);let h=ls(i,l);if(s.merge)a=new rJ(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let t=[];for(let i of s.mergeFields){let r=ll(e,i,n);if(!l.contains(r))throw new ry(rm.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);lf(t,r)||t.push(r)}a=new rJ(t),o=l.fieldTransforms.filter(t=>a.covers(t.field))}else a=null,o=l.fieldTransforms;return new o5(new sc(h),a,o)})(le(t.firestore),"addDoc",s._key,a,null!==t.converter,{}).toMutation(s._key,ar.exists(!1))]).then(()=>s)}(function(t,e,...n){if(t=j(t),oj("collection","path",e),t instanceof oK){let i=rL.fromString(e,...n);return oH(i),new oX(t,/* converter= */null,i)}{if(!(t instanceof oQ||t instanceof oX))throw new ry(rm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let i=t._path.child(rL.fromString(e,...n));return oH(i),new oX(t.firestore,/* converter= */null,i)}}(lp,"analytics"),{name:t.target.getAttribute("data-name"),link:t.target.getAttribute("data-url"),time:new Date,loc:lg}),function(t,e,n,...i){t=oq(t,oQ);let r=oq(t.firestore,oZ),s=le(r);ld(r,[("string"==typeof// performing validation.
(e=j(e))||e instanceof o2?/** Parse update data from a list of field/value arguments. */function(t,e,n,i,r,s){let a=t.ya(1/* UserDataSource.Update */,e,n),o=[ll(e,i,n)],l=[r];if(s.length%2!=0)throw new ry(rm.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<s.length;t+=2)o.push(ll(e,s[t])),l.push(s[t+1]);let h=[],u=sc.empty();// We iterate in reverse order to pick the last value for a field if the
// user specified the field multiple times.
for(let t=o.length-1;t>=0;--t)if(!lf(h,o[t])){let e=o[t],n=l[t];// For Compat types, we have to "extract" the underlying types before
// performing validation.
n=j(n);let i=a.da(e);if(n instanceof ln)h.push(e);else{let t=lr(n,i);null!=t&&(h.push(e),u.set(e,t))}}let c=new rJ(h);return new o3(u,c,a.fieldTransforms)}(s,"updateDoc",t._key,e,void 0,i):/** Parse update data from an update() call. */function(t,e,n,i){let r=t.ya(1/* UserDataSource.Update */,e,n);lo("Data must be an object, but it was:",r,i);let s=[],a=sc.empty();rq(i,(t,i)=>{let o=lu(e,t,n);// For Compat types, we have to "extract" the underlying types before
// performing validation.
i=j(i);let l=r.da(o);if(i instanceof ln)s.push(o);else{let t=lr(i,l);null!=t&&(s.push(o),a.set(o,t))}});let o=new rJ(s);return new o3(a,o,r.fieldTransforms)}(s,"updateDoc",t._key,e)).toMutation(t._key,ar.exists(!0))])}(oY(lp,"social-links",t.target.getAttribute("data-id")),{count:new li("increment",1)}),window.open(t.target.getAttribute("data-url"),"_blank")};for(var ly=document.getElementsByClassName("link"),lv=0;lv<ly.length;lv++)ly[lv].addEventListener("click",lm,!1);//# sourceMappingURL=index.61a63c30.js.map

//# sourceMappingURL=index.61a63c30.js.map
