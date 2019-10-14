/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./extension/src/options.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/babel-loader/lib!/home/wsh/Documents/lesspass/node_modules/vue-loader/lib??vue-loader-options!./extension/src/components/OptionsPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "../../node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["defaultPassword"]),
  methods: {
    saveOptions: function saveOptions() {
      this.$store.commit("updateDefaultLogin", this.defaultPassword.login);
    }
  }
});

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/css-loader/dist/cjs.js!/home/wsh/Documents/lesspass/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/wsh/Documents/lesspass/node_modules/sass-loader/lib/loader.js!/home/wsh/Documents/lesspass/node_modules/vue-loader/lib??vue-loader-options!./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".full-width {\n  width: 100%;\n}\n", ""]);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../node_modules/deepmerge/dist/es.js":
/*!**********************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/deepmerge/dist/es.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ "../../node_modules/process/browser.js":
/*!********************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/process/browser.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../node_modules/setimmediate/setImmediate.js":
/*!******************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/setimmediate/setImmediate.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../node_modules/shvl/dist/shvl.es.js":
/*!**********************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/shvl/dist/shvl.es.js ***!
  \**********************************************************************/
/*! exports provided: get, set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return n; });
function t(t,n,r){return void 0===(t=(n.split?n.split("."):n).reduce(function(t,n){return t&&t[n]},t))?r:t}function n(t,n,r,e){return(n=n.split?n.split("."):n).slice(0,-1).reduce(function(t,n){return t[n]=t[n]||{}},t)[n.pop()]=r,t}
//# sourceMappingURL=shvl.es.js.map


/***/ }),

/***/ "../../node_modules/style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/style-loader!/home/wsh/Documents/lesspass/node_modules/css-loader/dist/cjs.js!/home/wsh/Documents/lesspass/node_modules/vue-loader/lib/loaders/stylePostLoader.js!/home/wsh/Documents/lesspass/node_modules/sass-loader/lib/loader.js!/home/wsh/Documents/lesspass/node_modules/vue-loader/lib??vue-loader-options!./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionsPage.vue?vue&type=style&index=0&lang=css& */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../node_modules/style-loader/lib/addStyles.js":
/*!*******************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/style-loader/lib/addStyles.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../node_modules/style-loader/lib/urls.js":
/*!**************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/style-loader/lib/urls.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../../node_modules/timers-browserify/main.js":
/*!***************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/timers-browserify/main.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=template&id=6df79bc6&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/home/wsh/Documents/lesspass/node_modules/vue-loader/lib??vue-loader-options!./extension/src/components/OptionsPage.vue?vue&type=template&id=6df79bc6& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      attrs: { id: "lesspass-options-form", novalidate: "" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.saveOptions($event)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group row full-width" }, [
        _c(
          "label",
          { staticClass: "col-sm-2 col-form-label", attrs: { for: "login" } },
          [_vm._v("Default login")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-10" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.defaultPassword.login,
                expression: "defaultPassword.login"
              }
            ],
            ref: "login",
            staticClass: "form-control",
            attrs: {
              id: "login",
              type: "text",
              name: "login",
              autocomplete: "off",
              autocorrect: "off",
              autocapitalize: "none"
            },
            domProps: { value: _vm.defaultPassword.login },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.defaultPassword, "login", $event.target.value)
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-sm-10" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Save")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!***********************************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../../node_modules/vue/dist/vue.runtime.esm.js":
/*!*****************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/vue/dist/vue.runtime.esm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "../../node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "../../node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js":
/*!****************************************************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deepmerge */ "../../node_modules/deepmerge/dist/es.js");
/* harmony import */ var shvl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shvl */ "../../node_modules/shvl/dist/shvl.es.js");
/* harmony default export */ __webpack_exports__["default"] = (function(n,o,u){function i(t,e,r){try{return(r=e.getItem(t))&&void 0!==r?JSON.parse(r):void 0}catch(t){}}if(o=(n=n||{}).storage||window&&window.localStorage,u=n.key||"vuex",!function(t){try{return t.setItem("@@",1),t.removeItem("@@"),!0}catch(t){}return!1}(o))throw new Error("Invalid storage instance given");return function(c){var a=Object(shvl__WEBPACK_IMPORTED_MODULE_1__["get"])(n,"getState",i)(u,o);"object"==typeof a&&null!==a&&c.replaceState(Object(deepmerge__WEBPACK_IMPORTED_MODULE_0__["default"])(c.state,a,{arrayMerge:n.arrayMerger||function(t,e){return e},clone:!1})),(n.subscriber||function(t){return function(e){return t.subscribe(e)}})(c)(function(t,i){(n.filter||function(){return!0})(t)&&(n.setState||function(t,e,r){return r.setItem(t,JSON.stringify(e))})(u,(n.reducer||function(t,n){return 0===n.length?t:n.reduce(function(n,o){return Object(shvl__WEBPACK_IMPORTED_MODULE_1__["set"])(n,o,Object(shvl__WEBPACK_IMPORTED_MODULE_1__["get"])(t,o))},{})})(i,n.paths||[]),o)})}});;
//# sourceMappingURL=vuex-persistedstate.es.js.map


/***/ }),

/***/ "../../node_modules/vuex/dist/vuex.esm.js":
/*!***********************************************************************!*\
  !*** /home/wsh/Documents/lesspass/node_modules/vuex/dist/vuex.esm.js ***!
  \***********************************************************************/
/*! exports provided: default, Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return result.then(function (res) {
    try {
      this$1._actionSubscribers
        .filter(function (sub) { return sub.after; })
        .forEach(function (sub) { return sub.after(action, this$1.state); });
    } catch (e) {
      if (true) {
        console.warn("[vuex] error in after action subscribers: ");
        console.error(e);
      }
    }
    return res
  })
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure enviroment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.1.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../lesspass-pure/src/store/defaultPassword.js":
/*!*****************************************************!*\
  !*** ../lesspass-pure/src/store/defaultPassword.js ***!
  \*****************************************************/
/*! exports provided: defaultOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
const defaultOptions = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  length: 16,
  counter: 1,
  version: 2
};
/* harmony default export */ __webpack_exports__["default"] = ({
  login: "",
  site: "",
  ...defaultOptions
});

/***/ }),

/***/ "./extension/src/components/OptionsPage.vue":
/*!**************************************************!*\
  !*** ./extension/src/components/OptionsPage.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptionsPage_vue_vue_type_template_id_6df79bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionsPage.vue?vue&type=template&id=6df79bc6& */ "./extension/src/components/OptionsPage.vue?vue&type=template&id=6df79bc6&");
/* harmony import */ var _OptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionsPage.vue?vue&type=script&lang=js& */ "./extension/src/components/OptionsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OptionsPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsPage.vue?vue&type=style&index=0&lang=css& */ "./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionsPage_vue_vue_type_template_id_6df79bc6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OptionsPage_vue_vue_type_template_id_6df79bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "extension/src/components/OptionsPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./extension/src/components/OptionsPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./extension/src/components/OptionsPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionsPage.vue?vue&type=script&lang=js& */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionsPage.vue?vue&type=style&index=0&lang=css& */ "../../node_modules/style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./extension/src/components/OptionsPage.vue?vue&type=template&id=6df79bc6&":
/*!*********************************************************************************!*\
  !*** ./extension/src/components/OptionsPage.vue?vue&type=template&id=6df79bc6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_template_id_6df79bc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OptionsPage.vue?vue&type=template&id=6df79bc6& */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./extension/src/components/OptionsPage.vue?vue&type=template&id=6df79bc6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_template_id_6df79bc6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionsPage_vue_vue_type_template_id_6df79bc6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./extension/src/options.js":
/*!**********************************!*\
  !*** ./extension/src/options.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _components_OptionsPage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/OptionsPage.vue */ "./extension/src/components/OptionsPage.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./extension/src/store/index.js");



new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: "#lesspass-options",
  render: function render(h) {
    return h(_components_OptionsPage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);
  },
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./extension/src/store/index.js":
/*!**************************************!*\
  !*** ./extension/src/store/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../../node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "../../node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuex_persistedstate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-persistedstate */ "../../node_modules/vuex-persistedstate/dist/vuex-persistedstate.es.js");
/* harmony import */ var _lesspass_pure_src_store_defaultPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lesspass-pure/src/store/defaultPassword */ "../lesspass-pure/src/store/defaultPassword.js");




vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
var state = {
  message: "",
  defaultPassword: _lesspass_pure_src_store_defaultPassword__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: state,
  plugins: [Object(vuex_persistedstate__WEBPACK_IMPORTED_MODULE_2__["default"])({
    key: "lesspass",
    paths: ["defaultPassword"]
  })],
  mutations: {
    updateDefaultLogin: function updateDefaultLogin(state, login) {
      state.defaultPassword.login = login;
    }
  }
}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVuc2lvbi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlLnZ1ZT83MmY2Iiwid2VicGFjazovLy8vaG9tZS93c2gvRG9jdW1lbnRzL2xlc3NwYXNzL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3dzaC9Eb2N1bWVudHMvbGVzc3Bhc3Mvbm9kZV9tb2R1bGVzL2RlZXBtZXJnZS9kaXN0L2VzLmpzIiwid2VicGFjazovLy8vaG9tZS93c2gvRG9jdW1lbnRzL2xlc3NwYXNzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3dzaC9Eb2N1bWVudHMvbGVzc3Bhc3Mvbm9kZV9tb2R1bGVzL3NldGltbWVkaWF0ZS9zZXRJbW1lZGlhdGUuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3dzaC9Eb2N1bWVudHMvbGVzc3Bhc3Mvbm9kZV9tb2R1bGVzL3NodmwvZGlzdC9zaHZsLmVzLmpzIiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS52dWU/MWRmNCIsIndlYnBhY2s6Ly8vL2hvbWUvd3NoL0RvY3VtZW50cy9sZXNzcGFzcy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL3dzaC9Eb2N1bWVudHMvbGVzc3Bhc3Mvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvd3NoL0RvY3VtZW50cy9sZXNzcGFzcy9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UudnVlPzU2NmYiLCJ3ZWJwYWNrOi8vLy9ob21lL3dzaC9Eb2N1bWVudHMvbGVzc3Bhc3Mvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvd3NoL0RvY3VtZW50cy9sZXNzcGFzcy9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLmpzIiwid2VicGFjazovLy8vaG9tZS93c2gvRG9jdW1lbnRzL2xlc3NwYXNzL25vZGVfbW9kdWxlcy92dWV4LXBlcnNpc3RlZHN0YXRlL2Rpc3QvdnVleC1wZXJzaXN0ZWRzdGF0ZS5lcy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUvd3NoL0RvY3VtZW50cy9sZXNzcGFzcy9ub2RlX21vZHVsZXMvdnVleC9kaXN0L3Z1ZXguZXNtLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL2xlc3NwYXNzLXB1cmUvc3JjL3N0b3JlL2RlZmF1bHRQYXNzd29yZC5qcyIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UudnVlIiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS52dWU/NDgwYiIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vc3JjL2NvbXBvbmVudHMvT3B0aW9uc1BhZ2UudnVlP2Y4Y2UiLCJ3ZWJwYWNrOi8vLy4vZXh0ZW5zaW9uL3NyYy9jb21wb25lbnRzL09wdGlvbnNQYWdlLnZ1ZT8xMzkxIiwid2VicGFjazovLy8uL2V4dGVuc2lvbi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9leHRlbnNpb24vc3JjL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRPcHRpb25zIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwibnVtYmVycyIsInN5bWJvbHMiLCJsZW5ndGgiLCJjb3VudGVyIiwidmVyc2lvbiIsImxvZ2luIiwic2l0ZSIsIlZ1ZSIsImVsIiwicmVuZGVyIiwiaCIsIk9wdGlvbnNQYWdlIiwic3RvcmUiLCJ1c2UiLCJWdWV4Iiwic3RhdGUiLCJtZXNzYWdlIiwiZGVmYXVsdFBhc3N3b3JkIiwiU3RvcmUiLCJwbHVnaW5zIiwiY3JlYXRlUGVyc2lzdGVkU3RhdGUiLCJrZXkiLCJwYXRocyIsIm11dGF0aW9ucyIsInVwZGF0ZURlZmF1bHRMb2dpbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFFQTtBQUNBLHNGQURBO0FBRUE7QUFDQSxlQURBLHlCQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkEsRzs7Ozs7Ozs7Ozs7QUNuQ0EsMkJBQTJCLG1CQUFPLENBQUMscUhBQTREO0FBQy9GO0FBQ0EsY0FBYyxRQUFTLGdCQUFnQixnQkFBZ0IsR0FBRzs7Ozs7Ozs7Ozs7OztBQ0Y3Qzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLElBQUk7QUFDTjs7QUFFQTs7QUFFZSwwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7QUN4RjNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEdBQUc7QUFDUjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBRVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVGQUF1RjtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQyxpQkFBaUIseUJBQXlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtCQUErQjtBQUNsQyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLG9CQUFvQjtBQUN4QyxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CLHlCQUF5QjtBQUN6QjtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBNkM7QUFDOUU7QUFDQTtBQUNBLDZDQUE2Qyw0Q0FBNEM7O0FBRXpGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsTUFBTSxFQUdOO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLLDJDQUEyQyw4QkFBOEIsRUFBRTs7QUFFaEY7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFxQztBQUNyRDtBQUNBLG9CQUFvQixTQUFJO0FBQ3hCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCOztBQUUxQixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QyxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gseUJBQXlCO0FBQ3pCO0FBQ0Esc0JBQXNCLGlDQUFpQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksS0FBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxVQUFVLElBQXFDO0FBQ3BEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsOEJBQThCO0FBQzlCLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywyQkFBMkIsRUFBRTtBQUN2RSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsNEJBQTRCLEVBQUU7QUFDeEUsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE9BQU87QUFDMUM7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0Es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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEU7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZDQUE2QyxFQUFFO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsNEJBQTRCLEVBQUU7QUFDbEYsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsK0JBQStCLEVBQUU7QUFDckYsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhOztBQUUzRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxLQUFxQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLEtBQXFDO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHFDQUFxQzs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVDQUF1QyxFQUFFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywyQ0FBMkMsRUFBRTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsOEJBQThCLEVBQUU7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFNLEVBQUUsZ0JBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLG1FQUFELENBQVI7QUFBQSxHQUZGO0FBR05DLE9BQUssRUFBTEEsOENBQUtBO0FBSEMsQ0FBUixFOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUwsMkNBQUcsQ0FBQ00sR0FBSixDQUFRQyw0Q0FBUjtBQUVBLElBQU1DLEtBQUssR0FBRztBQUNaQyxTQUFPLEVBQUUsRUFERztBQUVaQyxpQkFBZSxFQUFFQSxnRkFBZUE7QUFGcEIsQ0FBZDtBQUtlLG1FQUFJSCw0Q0FBSSxDQUFDSSxLQUFULENBQWU7QUFDNUJILE9BQUssRUFBTEEsS0FENEI7QUFFNUJJLFNBQU8sRUFBRSxDQUNQQyxtRUFBb0IsQ0FBQztBQUNuQkMsT0FBRyxFQUFFLFVBRGM7QUFFbkJDLFNBQUssRUFBRSxDQUFDLGlCQUFEO0FBRlksR0FBRCxDQURiLENBRm1CO0FBUTVCQyxXQUFTLEVBQUU7QUFDVEMsc0JBRFMsOEJBQ1VULEtBRFYsRUFDaUJWLEtBRGpCLEVBQ3dCO0FBQy9CVSxXQUFLLENBQUNFLGVBQU4sQ0FBc0JaLEtBQXRCLEdBQThCQSxLQUE5QjtBQUNEO0FBSFE7QUFSaUIsQ0FBZixDQUFmLEUiLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXh0ZW5zaW9uL3NyYy9vcHRpb25zLmpzXCIpO1xuIiwiPHN0eWxlPlxuICAuZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgPGZvcm0gaWQ9XCJsZXNzcGFzcy1vcHRpb25zLWZvcm1cIiBub3ZhbGlkYXRlIHYtb246c3VibWl0LnByZXZlbnQ9XCJzYXZlT3B0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgZnVsbC13aWR0aFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb2dpblwiIGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIj5EZWZhdWx0IGxvZ2luPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJsb2dpblwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgcmVmPVwibG9naW5cIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImRlZmF1bHRQYXNzd29yZC5sb2dpblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgbWFwU3RhdGUgfSBmcm9tIFwidnVleFwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wdXRlZDogbWFwU3RhdGUoW1wiZGVmYXVsdFBhc3N3b3JkXCJdKSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBzYXZlT3B0aW9ucygpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwidXBkYXRlRGVmYXVsdExvZ2luXCIsIHRoaXMuZGVmYXVsdFBhc3N3b3JkLmxvZ2luKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnVsbC13aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSlcblx0XHQmJiAhaXNTcGVjaWFsKHZhbHVlKVxufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsKHZhbHVlKSB7XG5cdHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cblx0cmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJ1xuXHRcdHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXSdcblx0XHR8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSlcbn1cblxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG5cdHJldHVybiAob3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpXG5cdFx0PyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9ucylcblx0XHQ6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucylcblx0fSlcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG5cdE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAoIW9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcG1lcmdlXzE7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiZnVuY3Rpb24gdCh0LG4scil7cmV0dXJuIHZvaWQgMD09PSh0PShuLnNwbGl0P24uc3BsaXQoXCIuXCIpOm4pLnJlZHVjZShmdW5jdGlvbih0LG4pe3JldHVybiB0JiZ0W25dfSx0KSk/cjp0fWZ1bmN0aW9uIG4odCxuLHIsZSl7cmV0dXJuKG49bi5zcGxpdD9uLnNwbGl0KFwiLlwiKTpuKS5zbGljZSgwLC0xKS5yZWR1Y2UoZnVuY3Rpb24odCxuKXtyZXR1cm4gdFtuXT10W25dfHx7fX0sdClbbi5wb3AoKV09cix0fWV4cG9ydHt0IGFzIGdldCxuIGFzIHNldH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaHZsLmVzLmpzLm1hcFxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IGlkOiBcImxlc3NwYXNzLW9wdGlvbnMtZm9ybVwiLCBub3ZhbGlkYXRlOiBcIlwiIH0sXG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgcmV0dXJuIF92bS5zYXZlT3B0aW9ucygkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3cgZnVsbC13aWR0aFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBcImxvZ2luXCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJEZWZhdWx0IGxvZ2luXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRlZmF1bHRQYXNzd29yZC5sb2dpbixcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlZmF1bHRQYXNzd29yZC5sb2dpblwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWY6IFwibG9naW5cIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwibG9naW5cIixcbiAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICBhdXRvY29ycmVjdDogXCJvZmZcIixcbiAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemU6IFwibm9uZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5kZWZhdWx0UGFzc3dvcmQubG9naW4gfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZGVmYXVsdFBhc3N3b3JkLCBcImxvZ2luXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgcm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTBcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiLyohXG4gKiBWdWUuanMgdjIuNi4xMFxuICogKGMpIDIwMTQtMjAxOSBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4vKiAgKi9cblxudmFyIGVtcHR5T2JqZWN0ID0gT2JqZWN0LmZyZWV6ZSh7fSk7XG5cbi8vIFRoZXNlIGhlbHBlcnMgcHJvZHVjZSBiZXR0ZXIgVk0gY29kZSBpbiBKUyBlbmdpbmVzIGR1ZSB0byB0aGVpclxuLy8gZXhwbGljaXRuZXNzIGFuZCBmdW5jdGlvbiBpbmxpbmluZy5cbmZ1bmN0aW9uIGlzVW5kZWYgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzRGVmICh2KSB7XG4gIHJldHVybiB2ICE9PSB1bmRlZmluZWQgJiYgdiAhPT0gbnVsbFxufVxuXG5mdW5jdGlvbiBpc1RydWUgKHYpIHtcbiAgcmV0dXJuIHYgPT09IHRydWVcbn1cblxuZnVuY3Rpb24gaXNGYWxzZSAodikge1xuICByZXR1cm4gdiA9PT0gZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB2YWx1ZSBpcyBwcmltaXRpdmUuXG4gKi9cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nXG4gIClcbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogR2V0IHRoZSByYXcgdHlwZSBzdHJpbmcgb2YgYSB2YWx1ZSwgZS5nLiwgW29iamVjdCBPYmplY3RdLlxuICovXG52YXIgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gdG9SYXdUeXBlICh2YWx1ZSkge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKVxufVxuXG4vKipcbiAqIFN0cmljdCBvYmplY3QgdHlwZSBjaGVjay4gT25seSByZXR1cm5zIHRydWVcbiAqIGZvciBwbGFpbiBKYXZhU2NyaXB0IG9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG9iaikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSdcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAgKHYpIHtcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKHYpID09PSAnW29iamVjdCBSZWdFeHBdJ1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbCBpcyBhIHZhbGlkIGFycmF5IGluZGV4LlxuICovXG5mdW5jdGlvbiBpc1ZhbGlkQXJyYXlJbmRleCAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdChTdHJpbmcodmFsKSk7XG4gIHJldHVybiBuID49IDAgJiYgTWF0aC5mbG9vcihuKSA9PT0gbiAmJiBpc0Zpbml0ZSh2YWwpXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiAoXG4gICAgaXNEZWYodmFsKSAmJlxuICAgIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIHR5cGVvZiB2YWwuY2F0Y2ggPT09ICdmdW5jdGlvbidcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSB0byBhIHN0cmluZyB0aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxuICovXG5mdW5jdGlvbiB0b1N0cmluZyAodmFsKSB7XG4gIHJldHVybiB2YWwgPT0gbnVsbFxuICAgID8gJydcbiAgICA6IEFycmF5LmlzQXJyYXkodmFsKSB8fCAoaXNQbGFpbk9iamVjdCh2YWwpICYmIHZhbC50b1N0cmluZyA9PT0gX3RvU3RyaW5nKVxuICAgICAgPyBKU09OLnN0cmluZ2lmeSh2YWwsIG51bGwsIDIpXG4gICAgICA6IFN0cmluZyh2YWwpXG59XG5cbi8qKlxuICogQ29udmVydCBhbiBpbnB1dCB2YWx1ZSB0byBhIG51bWJlciBmb3IgcGVyc2lzdGVuY2UuXG4gKiBJZiB0aGUgY29udmVyc2lvbiBmYWlscywgcmV0dXJuIG9yaWdpbmFsIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIgKHZhbCkge1xuICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG4pID8gdmFsIDogblxufVxuXG4vKipcbiAqIE1ha2UgYSBtYXAgYW5kIHJldHVybiBhIGZ1bmN0aW9uIGZvciBjaGVja2luZyBpZiBhIGtleVxuICogaXMgaW4gdGhhdCBtYXAuXG4gKi9cbmZ1bmN0aW9uIG1ha2VNYXAgKFxuICBzdHIsXG4gIGV4cGVjdHNMb3dlckNhc2Vcbikge1xuICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgbWFwW2xpc3RbaV1dID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZVxuICAgID8gZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfVxuICAgIDogZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHRhZyBpcyBhIGJ1aWx0LWluIHRhZy5cbiAqL1xudmFyIGlzQnVpbHRJblRhZyA9IG1ha2VNYXAoJ3Nsb3QsY29tcG9uZW50JywgdHJ1ZSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuICovXG52YXIgaXNSZXNlcnZlZEF0dHJpYnV0ZSA9IG1ha2VNYXAoJ2tleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzJyk7XG5cbi8qKlxuICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSBhbiBhcnJheS5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlIChhcnIsIGl0ZW0pIHtcbiAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBvYmplY3QgaGFzIHRoZSBwcm9wZXJ0eS5cbiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpXG59XG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWNoZWQgKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiAoZnVuY3Rpb24gY2FjaGVkRm4gKHN0cikge1xuICAgIHZhciBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKVxuICB9KVxufVxuXG4vKipcbiAqIENhbWVsaXplIGEgaHlwaGVuLWRlbGltaXRlZCBzdHJpbmcuXG4gKi9cbnZhciBjYW1lbGl6ZVJFID0gLy0oXFx3KS9nO1xudmFyIGNhbWVsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGNhbWVsaXplUkUsIGZ1bmN0aW9uIChfLCBjKSB7IHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7IH0pXG59KTtcblxuLyoqXG4gKiBDYXBpdGFsaXplIGEgc3RyaW5nLlxuICovXG52YXIgY2FwaXRhbGl6ZSA9IGNhY2hlZChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbn0pO1xuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKi9cbnZhciBoeXBoZW5hdGVSRSA9IC9cXEIoW0EtWl0pL2c7XG52YXIgaHlwaGVuYXRlID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnLSQxJykudG9Mb3dlckNhc2UoKVxufSk7XG5cbi8qKlxuICogU2ltcGxlIGJpbmQgcG9seWZpbGwgZm9yIGVudmlyb25tZW50cyB0aGF0IGRvIG5vdCBzdXBwb3J0IGl0LFxuICogZS5nLiwgUGhhbnRvbUpTIDEueC4gVGVjaG5pY2FsbHksIHdlIGRvbid0IG5lZWQgdGhpcyBhbnltb3JlXG4gKiBzaW5jZSBuYXRpdmUgYmluZCBpcyBub3cgcGVyZm9ybWFudCBlbm91Z2ggaW4gbW9zdCBicm93c2Vycy5cbiAqIEJ1dCByZW1vdmluZyBpdCB3b3VsZCBtZWFuIGJyZWFraW5nIGNvZGUgdGhhdCB3YXMgYWJsZSB0byBydW4gaW5cbiAqIFBoYW50b21KUyAxLngsIHNvIHRoaXMgbXVzdCBiZSBrZXB0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5mdW5jdGlvbiBwb2x5ZmlsbEJpbmQgKGZuLCBjdHgpIHtcbiAgZnVuY3Rpb24gYm91bmRGbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICByZXR1cm4gbFxuICAgICAgPyBsID4gMVxuICAgICAgICA/IGZuLmFwcGx5KGN0eCwgYXJndW1lbnRzKVxuICAgICAgICA6IGZuLmNhbGwoY3R4LCBhKVxuICAgICAgOiBmbi5jYWxsKGN0eClcbiAgfVxuXG4gIGJvdW5kRm4uX2xlbmd0aCA9IGZuLmxlbmd0aDtcbiAgcmV0dXJuIGJvdW5kRm5cbn1cblxuZnVuY3Rpb24gbmF0aXZlQmluZCAoZm4sIGN0eCkge1xuICByZXR1cm4gZm4uYmluZChjdHgpXG59XG5cbnZhciBiaW5kID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiAgPyBuYXRpdmVCaW5kXG4gIDogcG9seWZpbGxCaW5kO1xuXG4vKipcbiAqIENvbnZlcnQgYW4gQXJyYXktbGlrZSBvYmplY3QgdG8gYSByZWFsIEFycmF5LlxuICovXG5mdW5jdGlvbiB0b0FycmF5IChsaXN0LCBzdGFydCkge1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydDtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShpKTtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJldFtpXSA9IGxpc3RbaSArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBleHRlbmQgKHRvLCBfZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XTtcbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBNZXJnZSBhbiBBcnJheSBvZiBPYmplY3RzIGludG8gYSBzaW5nbGUgT2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCAoYXJyKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYXJyW2ldKSB7XG4gICAgICBleHRlbmQocmVzLCBhcnJbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogUGVyZm9ybSBubyBvcGVyYXRpb24uXG4gKiBTdHViYmluZyBhcmdzIHRvIG1ha2UgRmxvdyBoYXBweSB3aXRob3V0IGxlYXZpbmcgdXNlbGVzcyB0cmFuc3BpbGVkIGNvZGVcbiAqIHdpdGggLi4ucmVzdCAoaHR0cHM6Ly9mbG93Lm9yZy9ibG9nLzIwMTcvMDUvMDcvU3RyaWN0LUZ1bmN0aW9uLUNhbGwtQXJpdHkvKS5cbiAqL1xuZnVuY3Rpb24gbm9vcCAoYSwgYiwgYykge31cblxuLyoqXG4gKiBBbHdheXMgcmV0dXJuIGZhbHNlLlxuICovXG52YXIgbm8gPSBmdW5jdGlvbiAoYSwgYiwgYykgeyByZXR1cm4gZmFsc2U7IH07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBSZXR1cm4gdGhlIHNhbWUgdmFsdWUuXG4gKi9cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIChfKSB7IHJldHVybiBfOyB9O1xuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICovXG5mdW5jdGlvbiBsb29zZUVxdWFsIChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7IHJldHVybiB0cnVlIH1cbiAgdmFyIGlzT2JqZWN0QSA9IGlzT2JqZWN0KGEpO1xuICB2YXIgaXNPYmplY3RCID0gaXNPYmplY3QoYik7XG4gIGlmIChpc09iamVjdEEgJiYgaXNPYmplY3RCKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBpc0FycmF5QSA9IEFycmF5LmlzQXJyYXkoYSk7XG4gICAgICB2YXIgaXNBcnJheUIgPSBBcnJheS5pc0FycmF5KGIpO1xuICAgICAgaWYgKGlzQXJyYXlBICYmIGlzQXJyYXlCKSB7XG4gICAgICAgIHJldHVybiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICAgIHJldHVybiBsb29zZUVxdWFsKGUsIGJbaV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGEgaW5zdGFuY2VvZiBEYXRlICYmIGIgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBhLmdldFRpbWUoKSA9PT0gYi5nZXRUaW1lKClcbiAgICAgIH0gZWxzZSBpZiAoIWlzQXJyYXlBICYmICFpc0FycmF5Qikge1xuICAgICAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMoYik7XG4gICAgICAgIHJldHVybiBrZXlzQS5sZW5ndGggPT09IGtleXNCLmxlbmd0aCAmJiBrZXlzQS5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoYVtrZXldLCBiW2tleV0pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9IGVsc2UgaWYgKCFpc09iamVjdEEgJiYgIWlzT2JqZWN0Qikge1xuICAgIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBmaXJzdCBpbmRleCBhdCB3aGljaCBhIGxvb3NlbHkgZXF1YWwgdmFsdWUgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgYXJyYXkgKGlmIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGUgYXJyYXkgbXVzdFxuICogY29udGFpbiBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc2hhcGUpLCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAqL1xuZnVuY3Rpb24gbG9vc2VJbmRleE9mIChhcnIsIHZhbCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsb29zZUVxdWFsKGFycltpXSwgdmFsKSkgeyByZXR1cm4gaSB9XG4gIH1cbiAgcmV0dXJuIC0xXG59XG5cbi8qKlxuICogRW5zdXJlIGEgZnVuY3Rpb24gaXMgY2FsbGVkIG9ubHkgb25jZS5cbiAqL1xuZnVuY3Rpb24gb25jZSAoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFNTUl9BVFRSID0gJ2RhdGEtc2VydmVyLXJlbmRlcmVkJztcblxudmFyIEFTU0VUX1RZUEVTID0gW1xuICAnY29tcG9uZW50JyxcbiAgJ2RpcmVjdGl2ZScsXG4gICdmaWx0ZXInXG5dO1xuXG52YXIgTElGRUNZQ0xFX0hPT0tTID0gW1xuICAnYmVmb3JlQ3JlYXRlJyxcbiAgJ2NyZWF0ZWQnLFxuICAnYmVmb3JlTW91bnQnLFxuICAnbW91bnRlZCcsXG4gICdiZWZvcmVVcGRhdGUnLFxuICAndXBkYXRlZCcsXG4gICdiZWZvcmVEZXN0cm95JyxcbiAgJ2Rlc3Ryb3llZCcsXG4gICdhY3RpdmF0ZWQnLFxuICAnZGVhY3RpdmF0ZWQnLFxuICAnZXJyb3JDYXB0dXJlZCcsXG4gICdzZXJ2ZXJQcmVmZXRjaCdcbl07XG5cbi8qICAqL1xuXG5cblxudmFyIGNvbmZpZyA9ICh7XG4gIC8qKlxuICAgKiBPcHRpb24gbWVyZ2Ugc3RyYXRlZ2llcyAodXNlZCBpbiBjb3JlL3V0aWwvb3B0aW9ucylcbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBvcHRpb25NZXJnZVN0cmF0ZWdpZXM6IE9iamVjdC5jcmVhdGUobnVsbCksXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqL1xuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBTaG93IHByb2R1Y3Rpb24gbW9kZSB0aXAgbWVzc2FnZSBvbiBib290P1xuICAgKi9cbiAgcHJvZHVjdGlvblRpcDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byBlbmFibGUgZGV2dG9vbHNcbiAgICovXG4gIGRldnRvb2xzOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlY29yZCBwZXJmXG4gICAqL1xuICBwZXJmb3JtYW5jZTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsZXIgZm9yIHdhdGNoZXIgZXJyb3JzXG4gICAqL1xuICBlcnJvckhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIFdhcm4gaGFuZGxlciBmb3Igd2F0Y2hlciB3YXJuc1xuICAgKi9cbiAgd2FybkhhbmRsZXI6IG51bGwsXG5cbiAgLyoqXG4gICAqIElnbm9yZSBjZXJ0YWluIGN1c3RvbSBlbGVtZW50c1xuICAgKi9cbiAgaWdub3JlZEVsZW1lbnRzOiBbXSxcblxuICAvKipcbiAgICogQ3VzdG9tIHVzZXIga2V5IGFsaWFzZXMgZm9yIHYtb25cbiAgICovXG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICBrZXlDb2RlczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSB0YWcgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgcmVnaXN0ZXJlZCBhcyBhXG4gICAqIGNvbXBvbmVudC4gVGhpcyBpcyBwbGF0Zm9ybS1kZXBlbmRlbnQgYW5kIG1heSBiZSBvdmVyd3JpdHRlbi5cbiAgICovXG4gIGlzUmVzZXJ2ZWRUYWc6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgcmVzZXJ2ZWQgc28gdGhhdCBpdCBjYW5ub3QgYmUgdXNlZCBhcyBhIGNvbXBvbmVudFxuICAgKiBwcm9wLiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZEF0dHI6IG5vLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyBhbiB1bmtub3duIGVsZW1lbnQuXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIGlzVW5rbm93bkVsZW1lbnQ6IG5vLFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5hbWVzcGFjZSBvZiBhbiBlbGVtZW50XG4gICAqL1xuICBnZXRUYWdOYW1lc3BhY2U6IG5vb3AsXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSByZWFsIHRhZyBuYW1lIGZvciB0aGUgc3BlY2lmaWMgcGxhdGZvcm0uXG4gICAqL1xuICBwYXJzZVBsYXRmb3JtVGFnTmFtZTogaWRlbnRpdHksXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBtdXN0IGJlIGJvdW5kIHVzaW5nIHByb3BlcnR5LCBlLmcuIHZhbHVlXG4gICAqIFBsYXRmb3JtLWRlcGVuZGVudC5cbiAgICovXG4gIG11c3RVc2VQcm9wOiBubyxcblxuICAvKipcbiAgICogUGVyZm9ybSB1cGRhdGVzIGFzeW5jaHJvbm91c2x5LiBJbnRlbmRlZCB0byBiZSB1c2VkIGJ5IFZ1ZSBUZXN0IFV0aWxzXG4gICAqIFRoaXMgd2lsbCBzaWduaWZpY2FudGx5IHJlZHVjZSBwZXJmb3JtYW5jZSBpZiBzZXQgdG8gZmFsc2UuXG4gICAqL1xuICBhc3luYzogdHJ1ZSxcblxuICAvKipcbiAgICogRXhwb3NlZCBmb3IgbGVnYWN5IHJlYXNvbnNcbiAgICovXG4gIF9saWZlY3ljbGVIb29rczogTElGRUNZQ0xFX0hPT0tTXG59KTtcblxuLyogICovXG5cbi8qKlxuICogdW5pY29kZSBsZXR0ZXJzIHVzZWQgZm9yIHBhcnNpbmcgaHRtbCB0YWdzLCBjb21wb25lbnQgbmFtZXMgYW5kIHByb3BlcnR5IHBhdGhzLlxuICogdXNpbmcgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1My9zZW1hbnRpY3Mtc2NyaXB0aW5nLmh0bWwjcG90ZW50aWFsY3VzdG9tZWxlbWVudG5hbWVcbiAqIHNraXBwaW5nIFxcdTEwMDAwLVxcdUVGRkZGIGR1ZSB0byBpdCBmcmVlemluZyB1cCBQaGFudG9tSlNcbiAqL1xudmFyIHVuaWNvZGVSZWdFeHAgPSAvYS16QS1aXFx1MDBCN1xcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwM0YtXFx1MjA0MFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRC87XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJCBvciBfXG4gKi9cbmZ1bmN0aW9uIGlzUmVzZXJ2ZWQgKHN0cikge1xuICB2YXIgYyA9IChzdHIgKyAnJykuY2hhckNvZGVBdCgwKTtcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIERlZmluZSBhIHByb3BlcnR5LlxuICovXG5mdW5jdGlvbiBkZWYgKG9iaiwga2V5LCB2YWwsIGVudW1lcmFibGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgdmFsdWU6IHZhbCxcbiAgICBlbnVtZXJhYmxlOiAhIWVudW1lcmFibGUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFBhcnNlIHNpbXBsZSBwYXRoLlxuICovXG52YXIgYmFpbFJFID0gbmV3IFJlZ0V4cCgoXCJbXlwiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiLiRfXFxcXGRdXCIpKTtcbmZ1bmN0aW9uIHBhcnNlUGF0aCAocGF0aCkge1xuICBpZiAoYmFpbFJFLnRlc3QocGF0aCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFvYmopIHsgcmV0dXJuIH1cbiAgICAgIG9iaiA9IG9ialtzZWdtZW50c1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvYmpcbiAgfVxufVxuXG4vKiAgKi9cblxuLy8gY2FuIHdlIHVzZSBfX3Byb3RvX18/XG52YXIgaGFzUHJvdG8gPSAnX19wcm90b19fJyBpbiB7fTtcblxuLy8gQnJvd3NlciBlbnZpcm9ubWVudCBzbmlmZmluZ1xudmFyIGluQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xudmFyIGluV2VleCA9IHR5cGVvZiBXWEVudmlyb25tZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhIVdYRW52aXJvbm1lbnQucGxhdGZvcm07XG52YXIgd2VleFBsYXRmb3JtID0gaW5XZWV4ICYmIFdYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKTtcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUUgPSBVQSAmJiAvbXNpZXx0cmlkZW50Ly50ZXN0KFVBKTtcbnZhciBpc0lFOSA9IFVBICYmIFVBLmluZGV4T2YoJ21zaWUgOS4wJykgPiAwO1xudmFyIGlzRWRnZSA9IFVBICYmIFVBLmluZGV4T2YoJ2VkZ2UvJykgPiAwO1xudmFyIGlzQW5kcm9pZCA9IChVQSAmJiBVQS5pbmRleE9mKCdhbmRyb2lkJykgPiAwKSB8fCAod2VleFBsYXRmb3JtID09PSAnYW5kcm9pZCcpO1xudmFyIGlzSU9TID0gKFVBICYmIC9pcGhvbmV8aXBhZHxpcG9kfGlvcy8udGVzdChVQSkpIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdpb3MnKTtcbnZhciBpc0Nocm9tZSA9IFVBICYmIC9jaHJvbWVcXC9cXGQrLy50ZXN0KFVBKSAmJiAhaXNFZGdlO1xudmFyIGlzUGhhbnRvbUpTID0gVUEgJiYgL3BoYW50b21qcy8udGVzdChVQSk7XG52YXIgaXNGRiA9IFVBICYmIFVBLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLyk7XG5cbi8vIEZpcmVmb3ggaGFzIGEgXCJ3YXRjaFwiIGZ1bmN0aW9uIG9uIE9iamVjdC5wcm90b3R5cGUuLi5cbnZhciBuYXRpdmVXYXRjaCA9ICh7fSkud2F0Y2g7XG5cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZTtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICByZXR1cm4gJzxSb290PidcbiAgICB9XG4gICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygdm0gPT09ICdmdW5jdGlvbicgJiYgdm0uY2lkICE9IG51bGxcbiAgICAgID8gdm0ub3B0aW9uc1xuICAgICAgOiB2bS5faXNWdWVcbiAgICAgICAgPyB2bS4kb3B0aW9ucyB8fCB2bS5jb25zdHJ1Y3Rvci5vcHRpb25zXG4gICAgICAgIDogdm07XG4gICAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgfHwgb3B0aW9ucy5fY29tcG9uZW50VGFnO1xuICAgIHZhciBmaWxlID0gb3B0aW9ucy5fX2ZpbGU7XG4gICAgaWYgKCFuYW1lICYmIGZpbGUpIHtcbiAgICAgIHZhciBtYXRjaCA9IGZpbGUubWF0Y2goLyhbXi9cXFxcXSspXFwudnVlJC8pO1xuICAgICAgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAobmFtZSA/IChcIjxcIiArIChjbGFzc2lmeShuYW1lKSkgKyBcIj5cIikgOiBcIjxBbm9ueW1vdXM+XCIpICtcbiAgICAgIChmaWxlICYmIGluY2x1ZGVGaWxlICE9PSBmYWxzZSA/IChcIiBhdCBcIiArIGZpbGUpIDogJycpXG4gICAgKVxuICB9O1xuXG4gIHZhciByZXBlYXQgPSBmdW5jdGlvbiAoc3RyLCBuKSB7XG4gICAgdmFyIHJlcyA9ICcnO1xuICAgIHdoaWxlIChuKSB7XG4gICAgICBpZiAobiAlIDIgPT09IDEpIHsgcmVzICs9IHN0cjsgfVxuICAgICAgaWYgKG4gPiAxKSB7IHN0ciArPSBzdHI7IH1cbiAgICAgIG4gPj49IDE7XG4gICAgfVxuICAgIHJldHVybiByZXNcbiAgfTtcblxuICBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlID0gZnVuY3Rpb24gKHZtKSB7XG4gICAgaWYgKHZtLl9pc1Z1ZSAmJiB2bS4kcGFyZW50KSB7XG4gICAgICB2YXIgdHJlZSA9IFtdO1xuICAgICAgdmFyIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZSA9IDA7XG4gICAgICB3aGlsZSAodm0pIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLnRhcmdldCkge1xuICAgIERlcC50YXJnZXQuYWRkRGVwKHRoaXMpO1xuICB9XG59O1xuXG5EZXAucHJvdG90eXBlLm5vdGlmeSA9IGZ1bmN0aW9uIG5vdGlmeSAoKSB7XG4gIC8vIHN0YWJpbGl6ZSB0aGUgc3Vic2NyaWJlciBsaXN0IGZpcnN0XG4gIHZhciBzdWJzID0gdGhpcy5zdWJzLnNsaWNlKCk7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFjb25maWcuYXN5bmMpIHtcbiAgICAvLyBzdWJzIGFyZW4ndCBzb3J0ZWQgaW4gc2NoZWR1bGVyIGlmIG5vdCBydW5uaW5nIGFzeW5jXG4gICAgLy8gd2UgbmVlZCB0byBzb3J0IHRoZW0gbm93IHRvIG1ha2Ugc3VyZSB0aGV5IGZpcmUgaW4gY29ycmVjdFxuICAgIC8vIG9yZGVyXG4gICAgc3Vicy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG4gIH1cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzdWJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHN1YnNbaV0udXBkYXRlKCk7XG4gIH1cbn07XG5cbi8vIFRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIFRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2Ugb25seSBvbmUgd2F0Y2hlclxuLy8gY2FuIGJlIGV2YWx1YXRlZCBhdCBhIHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbDtcbnZhciB0YXJnZXRTdGFjayA9IFtdO1xuXG5mdW5jdGlvbiBwdXNoVGFyZ2V0ICh0YXJnZXQpIHtcbiAgdGFyZ2V0U3RhY2sucHVzaCh0YXJnZXQpO1xuICBEZXAudGFyZ2V0ID0gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwb3BUYXJnZXQgKCkge1xuICB0YXJnZXRTdGFjay5wb3AoKTtcbiAgRGVwLnRhcmdldCA9IHRhcmdldFN0YWNrW3RhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnMsXG4gIGFzeW5jRmFjdG9yeVxuKSB7XG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMudGV4dCA9IHRleHQ7XG4gIHRoaXMuZWxtID0gZWxtO1xuICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICggdGV4dCA9PT0gdm9pZCAwICkgdGV4dCA9ICcnO1xuXG4gIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gIG5vZGUudGV4dCA9IHRleHQ7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIC8vICM3OTc1XG4gICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgLy8gYSBjaGlsZC5cbiAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9ucyxcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgKTtcbiAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICByZXR1cm4gY2xvbmVkXG59XG5cbi8qXG4gKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGhcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICovXG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSk7XG59KTtcblxuLyogICovXG5cbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuXG4vKipcbiAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxuICovXG52YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyAodmFsdWUpIHtcbiAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgdGhpcy52bUNvdW50ID0gMDtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChoYXNQcm90bykge1xuICAgICAgcHJvdG9BdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiBvYnNlcnZlQXJyYXkgKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAudGFyZ2V0KSB7XG4gICAgICAgIGRlcC5kZXBlbmQoKTtcbiAgICAgICAgaWYgKGNoaWxkT2IpIHtcbiAgICAgICAgICBjaGlsZE9iLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGRlcGVuZEFycmF5KHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiByZWFjdGl2ZVNldHRlciAobmV3VmFsKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAobmV3VmFsID09PSB2YWx1ZSB8fCAobmV3VmFsICE9PSBuZXdWYWwgJiYgdmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjdXN0b21TZXR0ZXIpIHtcbiAgICAgICAgY3VzdG9tU2V0dGVyKCk7XG4gICAgICB9XG4gICAgICAvLyAjNzk4MTogZm9yIGFjY2Vzc29yIHByb3BlcnRpZXMgd2l0aG91dCBzZXR0ZXJcbiAgICAgIGlmIChnZXR0ZXIgJiYgIXNldHRlcikgeyByZXR1cm4gfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gIXNoYWxsb3cgJiYgb2JzZXJ2ZShuZXdWYWwpO1xuICAgICAgZGVwLm5vdGlmeSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LiBBZGRzIHRoZSBuZXcgcHJvcGVydHkgYW5kXG4gKiB0cmlnZ2VycyBjaGFuZ2Ugbm90aWZpY2F0aW9uIGlmIHRoZSBwcm9wZXJ0eSBkb2Vzbid0XG4gKiBhbHJlYWR5IGV4aXN0LlxuICovXG5mdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IHNldCByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0Lmxlbmd0aCA9IE1hdGgubWF4KHRhcmdldC5sZW5ndGgsIGtleSk7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEsIHZhbCk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmIChrZXkgaW4gdGFyZ2V0ICYmICEoa2V5IGluIE9iamVjdC5wcm90b3R5cGUpKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGFkZGluZyByZWFjdGl2ZSBwcm9wZXJ0aWVzIHRvIGEgVnVlIGluc3RhbmNlIG9yIGl0cyByb290ICRkYXRhICcgK1xuICAgICAgJ2F0IHJ1bnRpbWUgLSBkZWNsYXJlIGl0IHVwZnJvbnQgaW4gdGhlIGRhdGEgb3B0aW9uLidcbiAgICApO1xuICAgIHJldHVybiB2YWxcbiAgfVxuICBpZiAoIW9iKSB7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGRlZmluZVJlYWN0aXZlJCQxKG9iLnZhbHVlLCBrZXksIHZhbCk7XG4gIG9iLmRlcC5ub3RpZnkoKTtcbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIERlbGV0ZSBhIHByb3BlcnR5IGFuZCB0cmlnZ2VyIGNoYW5nZSBpZiBuZWNlc3NhcnkuXG4gKi9cbmZ1bmN0aW9uIGRlbCAodGFyZ2V0LCBrZXkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAoaXNVbmRlZih0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHRhcmdldCkpXG4gICkge1xuICAgIHdhcm4oKFwiQ2Fubm90IGRlbGV0ZSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiB1bmRlZmluZWQsIG51bGwsIG9yIHByaW1pdGl2ZSB2YWx1ZTogXCIgKyAoKHRhcmdldCkpKSk7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSAmJiBpc1ZhbGlkQXJyYXlJbmRleChrZXkpKSB7XG4gICAgdGFyZ2V0LnNwbGljZShrZXksIDEpO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYiA9ICh0YXJnZXQpLl9fb2JfXztcbiAgaWYgKHRhcmdldC5faXNWdWUgfHwgKG9iICYmIG9iLnZtQ291bnQpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ0F2b2lkIGRlbGV0aW5nIHByb3BlcnRpZXMgb24gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnLSBqdXN0IHNldCBpdCB0byBudWxsLidcbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICghaGFzT3duKHRhcmdldCwga2V5KSkge1xuICAgIHJldHVyblxuICB9XG4gIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgaWYgKCFvYikge1xuICAgIHJldHVyblxuICB9XG4gIG9iLmRlcC5ub3RpZnkoKTtcbn1cblxuLyoqXG4gKiBDb2xsZWN0IGRlcGVuZGVuY2llcyBvbiBhcnJheSBlbGVtZW50cyB3aGVuIHRoZSBhcnJheSBpcyB0b3VjaGVkLCBzaW5jZVxuICogd2UgY2Fubm90IGludGVyY2VwdCBhcnJheSBlbGVtZW50IGFjY2VzcyBsaWtlIHByb3BlcnR5IGdldHRlcnMuXG4gKi9cbmZ1bmN0aW9uIGRlcGVuZEFycmF5ICh2YWx1ZSkge1xuICBmb3IgKHZhciBlID0gKHZvaWQgMCksIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZSA9IHZhbHVlW2ldO1xuICAgIGUgJiYgZS5fX29iX18gJiYgZS5fX29iX18uZGVwLmRlcGVuZCgpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7XG4gICAgICBkZXBlbmRBcnJheShlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICovXG52YXIgc3RyYXRzID0gY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcblxuLyoqXG4gKiBPcHRpb25zIHdpdGggcmVzdHJpY3Rpb25zXG4gKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHN0cmF0cy5lbCA9IHN0cmF0cy5wcm9wc0RhdGEgPSBmdW5jdGlvbiAocGFyZW50LCBjaGlsZCwgdm0sIGtleSkge1xuICAgIGlmICghdm0pIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIFwib3B0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBjYW4gb25seSBiZSB1c2VkIGR1cmluZyBpbnN0YW5jZSBcIiArXG4gICAgICAgICdjcmVhdGlvbiB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0U3RyYXQocGFyZW50LCBjaGlsZClcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgdGhhdCByZWN1cnNpdmVseSBtZXJnZXMgdHdvIGRhdGEgb2JqZWN0cyB0b2dldGhlci5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhICh0bywgZnJvbSkge1xuICBpZiAoIWZyb20pIHsgcmV0dXJuIHRvIH1cbiAgdmFyIGtleSwgdG9WYWwsIGZyb21WYWw7XG5cbiAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICA/IFJlZmxlY3Qub3duS2V5cyhmcm9tKVxuICAgIDogT2JqZWN0LmtleXMoZnJvbSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0ga2V5c1tpXTtcbiAgICAvLyBpbiBjYXNlIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBvYnNlcnZlZC4uLlxuICAgIGlmIChrZXkgPT09ICdfX29iX18nKSB7IGNvbnRpbnVlIH1cbiAgICB0b1ZhbCA9IHRvW2tleV07XG4gICAgZnJvbVZhbCA9IGZyb21ba2V5XTtcbiAgICBpZiAoIWhhc093bih0bywga2V5KSkge1xuICAgICAgc2V0KHRvLCBrZXksIGZyb21WYWwpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0b1ZhbCAhPT0gZnJvbVZhbCAmJlxuICAgICAgaXNQbGFpbk9iamVjdCh0b1ZhbCkgJiZcbiAgICAgIGlzUGxhaW5PYmplY3QoZnJvbVZhbClcbiAgICApIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIERhdGFcbiAqL1xuZnVuY3Rpb24gbWVyZ2VEYXRhT3JGbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtXG4pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAoIXBhcmVudFZhbCkge1xuICAgICAgcmV0dXJuIGNoaWxkVmFsXG4gICAgfVxuICAgIC8vIHdoZW4gcGFyZW50VmFsICYgY2hpbGRWYWwgYXJlIGJvdGggcHJlc2VudCxcbiAgICAvLyB3ZSBuZWVkIHRvIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGVcbiAgICAvLyBtZXJnZWQgcmVzdWx0IG9mIGJvdGggZnVuY3Rpb25zLi4uIG5vIG5lZWQgdG9cbiAgICAvLyBjaGVjayBpZiBwYXJlbnRWYWwgaXMgYSBmdW5jdGlvbiBoZXJlIGJlY2F1c2VcbiAgICAvLyBpdCBoYXMgdG8gYmUgYSBmdW5jdGlvbiB0byBwYXNzIHByZXZpb3VzIG1lcmdlcy5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkRGF0YUZuICgpIHtcbiAgICAgIHJldHVybiBtZXJnZURhdGEoXG4gICAgICAgIHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkVmFsLmNhbGwodGhpcywgdGhpcykgOiBjaGlsZFZhbCxcbiAgICAgICAgdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcmVudFZhbC5jYWxsKHRoaXMsIHRoaXMpIDogcGFyZW50VmFsXG4gICAgICApXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbiAoKSB7XG4gICAgICAvLyBpbnN0YW5jZSBtZXJnZVxuICAgICAgdmFyIGluc3RhbmNlRGF0YSA9IHR5cGVvZiBjaGlsZFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IGNoaWxkVmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IGNoaWxkVmFsO1xuICAgICAgdmFyIGRlZmF1bHREYXRhID0gdHlwZW9mIHBhcmVudFZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHBhcmVudFZhbC5jYWxsKHZtLCB2bSlcbiAgICAgICAgOiBwYXJlbnRWYWw7XG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zdHJhdHMuZGF0YSA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgaWYgKGNoaWxkVmFsICYmIHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAnVGhlIFwiZGF0YVwiIG9wdGlvbiBzaG91bGQgYmUgYSBmdW5jdGlvbiAnICtcbiAgICAgICAgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArXG4gICAgICAgICdkZWZpbml0aW9ucy4nLFxuICAgICAgICB2bVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsKVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlRGF0YU9yRm4ocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pXG59O1xuXG4vKipcbiAqIEhvb2tzIGFuZCBwcm9wcyBhcmUgbWVyZ2VkIGFzIGFycmF5cy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VIb29rIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbFxuKSB7XG4gIHZhciByZXMgPSBjaGlsZFZhbFxuICAgID8gcGFyZW50VmFsXG4gICAgICA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXG4gICAgICAgID8gY2hpbGRWYWxcbiAgICAgICAgOiBbY2hpbGRWYWxdXG4gICAgOiBwYXJlbnRWYWw7XG4gIHJldHVybiByZXNcbiAgICA/IGRlZHVwZUhvb2tzKHJlcylcbiAgICA6IHJlc1xufVxuXG5mdW5jdGlvbiBkZWR1cGVIb29rcyAoaG9va3MpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlcy5wdXNoKGhvb2tzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5MSUZFQ1lDTEVfSE9PS1MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICBzdHJhdHNbaG9va10gPSBtZXJnZUhvb2s7XG59KTtcblxuLyoqXG4gKiBBc3NldHNcbiAqXG4gKiBXaGVuIGEgdm0gaXMgcHJlc2VudCAoaW5zdGFuY2UgY3JlYXRpb24pLCB3ZSBuZWVkIHRvIGRvXG4gKiBhIHRocmVlLXdheSBtZXJnZSBiZXR3ZWVuIGNvbnN0cnVjdG9yIG9wdGlvbnMsIGluc3RhbmNlXG4gKiBvcHRpb25zIGFuZCBwYXJlbnQgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VBc3NldHMgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsIHx8IG51bGwpO1xuICBpZiAoY2hpbGRWYWwpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICAgIHJldHVybiBleHRlbmQocmVzLCBjaGlsZFZhbClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBzdHJhdHNbdHlwZSArICdzJ10gPSBtZXJnZUFzc2V0cztcbn0pO1xuXG4vKipcbiAqIFdhdGNoZXJzLlxuICpcbiAqIFdhdGNoZXJzIGhhc2hlcyBzaG91bGQgbm90IG92ZXJ3cml0ZSBvbmVcbiAqIGFub3RoZXIsIHNvIHdlIG1lcmdlIHRoZW0gYXMgYXJyYXlzLlxuICovXG5zdHJhdHMud2F0Y2ggPSBmdW5jdGlvbiAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICAvLyB3b3JrIGFyb3VuZCBGaXJlZm94J3MgT2JqZWN0LnByb3RvdHlwZS53YXRjaC4uLlxuICBpZiAocGFyZW50VmFsID09PSBuYXRpdmVXYXRjaCkgeyBwYXJlbnRWYWwgPSB1bmRlZmluZWQ7IH1cbiAgaWYgKGNoaWxkVmFsID09PSBuYXRpdmVXYXRjaCkgeyBjaGlsZFZhbCA9IHVuZGVmaW5lZDsgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjaGlsZFZhbCkgeyByZXR1cm4gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCkgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydE9iamVjdFR5cGUoa2V5LCBjaGlsZFZhbCwgdm0pO1xuICB9XG4gIGlmICghcGFyZW50VmFsKSB7IHJldHVybiBjaGlsZFZhbCB9XG4gIHZhciByZXQgPSB7fTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZm9yICh2YXIga2V5JDEgaW4gY2hpbGRWYWwpIHtcbiAgICB2YXIgcGFyZW50ID0gcmV0W2tleSQxXTtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXkkMV07XG4gICAgaWYgKHBhcmVudCAmJiAhQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBbcGFyZW50XTtcbiAgICB9XG4gICAgcmV0W2tleSQxXSA9IHBhcmVudFxuICAgICAgPyBwYXJlbnQuY29uY2F0KGNoaWxkKVxuICAgICAgOiBBcnJheS5pc0FycmF5KGNoaWxkKSA/IGNoaWxkIDogW2NoaWxkXTtcbiAgfVxuICByZXR1cm4gcmV0XG59O1xuXG4vKipcbiAqIE90aGVyIG9iamVjdCBoYXNoZXMuXG4gKi9cbnN0cmF0cy5wcm9wcyA9XG5zdHJhdHMubWV0aG9kcyA9XG5zdHJhdHMuaW5qZWN0ID1cbnN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIGlmIChjaGlsZFZhbCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gIGlmIChjaGlsZFZhbCkgeyBleHRlbmQocmV0LCBjaGlsZFZhbCk7IH1cbiAgcmV0dXJuIHJldFxufTtcbnN0cmF0cy5wcm92aWRlID0gbWVyZ2VEYXRhT3JGbjtcblxuLyoqXG4gKiBEZWZhdWx0IHN0cmF0ZWd5LlxuICovXG52YXIgZGVmYXVsdFN0cmF0ID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsID09PSB1bmRlZmluZWRcbiAgICA/IHBhcmVudFZhbFxuICAgIDogY2hpbGRWYWxcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgY29tcG9uZW50IG5hbWVzXG4gKi9cbmZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50cyAob3B0aW9ucykge1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb21wb25lbnROYW1lIChuYW1lKSB7XG4gIGlmICghbmV3IFJlZ0V4cCgoXCJeW2EtekEtWl1bXFxcXC1cXFxcLjAtOV9cIiArICh1bmljb2RlUmVnRXhwLnNvdXJjZSkgKyBcIl0qJFwiKSkudGVzdChuYW1lKSkge1xuICAgIHdhcm4oXG4gICAgICAnSW52YWxpZCBjb21wb25lbnQgbmFtZTogXCInICsgbmFtZSArICdcIi4gQ29tcG9uZW50IG5hbWVzICcgK1xuICAgICAgJ3Nob3VsZCBjb25mb3JtIHRvIHZhbGlkIGN1c3RvbSBlbGVtZW50IG5hbWUgaW4gaHRtbDUgc3BlY2lmaWNhdGlvbi4nXG4gICAgKTtcbiAgfVxuICBpZiAoaXNCdWlsdEluVGFnKG5hbWUpIHx8IGNvbmZpZy5pc1Jlc2VydmVkVGFnKG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdEbyBub3QgdXNlIGJ1aWx0LWluIG9yIHJlc2VydmVkIEhUTUwgZWxlbWVudHMgYXMgY29tcG9uZW50ICcgK1xuICAgICAgJ2lkOiAnICsgbmFtZVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzIChvcHRpb25zLCB2bSkge1xuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICBpZiAoIXByb3BzKSB7IHJldHVybiB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGksIHZhbCwgbmFtZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBuYW1lID0gY2FtZWxpemUodmFsKTtcbiAgICAgICAgcmVzW25hbWVdID0geyB0eXBlOiBudWxsIH07XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgd2FybigncHJvcHMgbXVzdCBiZSBzdHJpbmdzIHdoZW4gdXNpbmcgYXJyYXkgc3ludGF4LicpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFsID0gcHJvcHNba2V5XTtcbiAgICAgIG5hbWUgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgcmVzW25hbWVdID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogeyB0eXBlOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwicHJvcHNcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUocHJvcHMpKSArIFwiLlwiLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIG9wdGlvbnMucHJvcHMgPSByZXM7XG59XG5cbi8qKlxuICogTm9ybWFsaXplIGFsbCBpbmplY3Rpb25zIGludG8gT2JqZWN0LWJhc2VkIGZvcm1hdFxuICovXG5mdW5jdGlvbiBub3JtYWxpemVJbmplY3QgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBpbmplY3QgPSBvcHRpb25zLmluamVjdDtcbiAgaWYgKCFpbmplY3QpIHsgcmV0dXJuIH1cbiAgdmFyIG5vcm1hbGl6ZWQgPSBvcHRpb25zLmluamVjdCA9IHt9O1xuICBpZiAoQXJyYXkuaXNBcnJheShpbmplY3QpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmplY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vcm1hbGl6ZWRbaW5qZWN0W2ldXSA9IHsgZnJvbTogaW5qZWN0W2ldIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QoaW5qZWN0KSkge1xuICAgIGZvciAodmFyIGtleSBpbiBpbmplY3QpIHtcbiAgICAgIHZhciB2YWwgPSBpbmplY3Rba2V5XTtcbiAgICAgIG5vcm1hbGl6ZWRba2V5XSA9IGlzUGxhaW5PYmplY3QodmFsKVxuICAgICAgICA/IGV4dGVuZCh7IGZyb206IGtleSB9LCB2YWwpXG4gICAgICAgIDogeyBmcm9tOiB2YWwgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oXG4gICAgICBcIkludmFsaWQgdmFsdWUgZm9yIG9wdGlvbiBcXFwiaW5qZWN0XFxcIjogZXhwZWN0ZWQgYW4gQXJyYXkgb3IgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKGluamVjdCkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgcmF3IGZ1bmN0aW9uIGRpcmVjdGl2ZXMgaW50byBvYmplY3QgZm9ybWF0LlxuICovXG5mdW5jdGlvbiBub3JtYWxpemVEaXJlY3RpdmVzIChvcHRpb25zKSB7XG4gIHZhciBkaXJzID0gb3B0aW9ucy5kaXJlY3RpdmVzO1xuICBpZiAoZGlycykge1xuICAgIGZvciAodmFyIGtleSBpbiBkaXJzKSB7XG4gICAgICB2YXIgZGVmJCQxID0gZGlyc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGlyc1trZXldID0geyBiaW5kOiBkZWYkJDEsIHVwZGF0ZTogZGVmJCQxIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydE9iamVjdFR5cGUgKG5hbWUsIHZhbHVlLCB2bSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJcIiArIG5hbWUgKyBcIlxcXCI6IGV4cGVjdGVkIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZSh2YWx1ZSkpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSB0d28gb3B0aW9uIG9iamVjdHMgaW50byBhIG5ldyBvbmUuXG4gKiBDb3JlIHV0aWxpdHkgdXNlZCBpbiBib3RoIGluc3RhbnRpYXRpb24gYW5kIGluaGVyaXRhbmNlLlxuICovXG5mdW5jdGlvbiBtZXJnZU9wdGlvbnMgKFxuICBwYXJlbnQsXG4gIGNoaWxkLFxuICB2bVxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2hlY2tDb21wb25lbnRzKGNoaWxkKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY2hpbGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjaGlsZCA9IGNoaWxkLm9wdGlvbnM7XG4gIH1cblxuICBub3JtYWxpemVQcm9wcyhjaGlsZCwgdm0pO1xuICBub3JtYWxpemVJbmplY3QoY2hpbGQsIHZtKTtcbiAgbm9ybWFsaXplRGlyZWN0aXZlcyhjaGlsZCk7XG5cbiAgLy8gQXBwbHkgZXh0ZW5kcyBhbmQgbWl4aW5zIG9uIHRoZSBjaGlsZCBvcHRpb25zLFxuICAvLyBidXQgb25seSBpZiBpdCBpcyBhIHJhdyBvcHRpb25zIG9iamVjdCB0aGF0IGlzbid0XG4gIC8vIHRoZSByZXN1bHQgb2YgYW5vdGhlciBtZXJnZU9wdGlvbnMgY2FsbC5cbiAgLy8gT25seSBtZXJnZWQgb3B0aW9ucyBoYXMgdGhlIF9iYXNlIHByb3BlcnR5LlxuICBpZiAoIWNoaWxkLl9iYXNlKSB7XG4gICAgaWYgKGNoaWxkLmV4dGVuZHMpIHtcbiAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLmV4dGVuZHMsIHZtKTtcbiAgICB9XG4gICAgaWYgKGNoaWxkLm1peGlucykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHBhcmVudCA9IG1lcmdlT3B0aW9ucyhwYXJlbnQsIGNoaWxkLm1peGluc1tpXSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge307XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIHBhcmVudCkge1xuICAgIG1lcmdlRmllbGQoa2V5KTtcbiAgfVxuICBmb3IgKGtleSBpbiBjaGlsZCkge1xuICAgIGlmICghaGFzT3duKHBhcmVudCwga2V5KSkge1xuICAgICAgbWVyZ2VGaWVsZChrZXkpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcbiAgICB2YXIgc3RyYXQgPSBzdHJhdHNba2V5XSB8fCBkZWZhdWx0U3RyYXQ7XG4gICAgb3B0aW9uc1trZXldID0gc3RyYXQocGFyZW50W2tleV0sIGNoaWxkW2tleV0sIHZtLCBrZXkpO1xuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhbiBhc3NldC5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCBiZWNhdXNlIGNoaWxkIGluc3RhbmNlcyBuZWVkIGFjY2Vzc1xuICogdG8gYXNzZXRzIGRlZmluZWQgaW4gaXRzIGFuY2VzdG9yIGNoYWluLlxuICovXG5mdW5jdGlvbiByZXNvbHZlQXNzZXQgKFxuICBvcHRpb25zLFxuICB0eXBlLFxuICBpZCxcbiAgd2Fybk1pc3Npbmdcbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBpZCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgYXNzZXRzID0gb3B0aW9uc1t0eXBlXTtcbiAgLy8gY2hlY2sgbG9jYWwgcmVnaXN0cmF0aW9uIHZhcmlhdGlvbnMgZmlyc3RcbiAgaWYgKGhhc093bihhc3NldHMsIGlkKSkgeyByZXR1cm4gYXNzZXRzW2lkXSB9XG4gIHZhciBjYW1lbGl6ZWRJZCA9IGNhbWVsaXplKGlkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIGNhbWVsaXplZElkKSkgeyByZXR1cm4gYXNzZXRzW2NhbWVsaXplZElkXSB9XG4gIHZhciBQYXNjYWxDYXNlSWQgPSBjYXBpdGFsaXplKGNhbWVsaXplZElkKTtcbiAgaWYgKGhhc093bihhc3NldHMsIFBhc2NhbENhc2VJZCkpIHsgcmV0dXJuIGFzc2V0c1tQYXNjYWxDYXNlSWRdIH1cbiAgLy8gZmFsbGJhY2sgdG8gcHJvdG90eXBlIGNoYWluXG4gIHZhciByZXMgPSBhc3NldHNbaWRdIHx8IGFzc2V0c1tjYW1lbGl6ZWRJZF0gfHwgYXNzZXRzW1Bhc2NhbENhc2VJZF07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm5NaXNzaW5nICYmICFyZXMpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ZhaWxlZCB0byByZXNvbHZlICcgKyB0eXBlLnNsaWNlKDAsIC0xKSArICc6ICcgKyBpZCxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3AgKFxuICBrZXksXG4gIHByb3BPcHRpb25zLFxuICBwcm9wc0RhdGEsXG4gIHZtXG4pIHtcbiAgdmFyIHByb3AgPSBwcm9wT3B0aW9uc1trZXldO1xuICB2YXIgYWJzZW50ID0gIWhhc093bihwcm9wc0RhdGEsIGtleSk7XG4gIHZhciB2YWx1ZSA9IHByb3BzRGF0YVtrZXldO1xuICAvLyBib29sZWFuIGNhc3RpbmdcbiAgdmFyIGJvb2xlYW5JbmRleCA9IGdldFR5cGVJbmRleChCb29sZWFuLCBwcm9wLnR5cGUpO1xuICBpZiAoYm9vbGVhbkluZGV4ID4gLTEpIHtcbiAgICBpZiAoYWJzZW50ICYmICFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gaHlwaGVuYXRlKGtleSkpIHtcbiAgICAgIC8vIG9ubHkgY2FzdCBlbXB0eSBzdHJpbmcgLyBzYW1lIG5hbWUgdG8gYm9vbGVhbiBpZlxuICAgICAgLy8gYm9vbGVhbiBoYXMgaGlnaGVyIHByaW9yaXR5XG4gICAgICB2YXIgc3RyaW5nSW5kZXggPSBnZXRUeXBlSW5kZXgoU3RyaW5nLCBwcm9wLnR5cGUpO1xuICAgICAgaWYgKHN0cmluZ0luZGV4IDwgMCB8fCBib29sZWFuSW5kZXggPCBzdHJpbmdJbmRleCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNoZWNrIGRlZmF1bHQgdmFsdWVcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICB2YWx1ZSA9IGdldFByb3BEZWZhdWx0VmFsdWUodm0sIHByb3AsIGtleSk7XG4gICAgLy8gc2luY2UgdGhlIGRlZmF1bHQgdmFsdWUgaXMgYSBmcmVzaCBjb3B5LFxuICAgIC8vIG1ha2Ugc3VyZSB0byBvYnNlcnZlIGl0LlxuICAgIHZhciBwcmV2U2hvdWxkT2JzZXJ2ZSA9IHNob3VsZE9ic2VydmU7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICAgIG9ic2VydmUodmFsdWUpO1xuICAgIHRvZ2dsZU9ic2VydmluZyhwcmV2U2hvdWxkT2JzZXJ2ZSk7XG4gIH1cbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAvLyBza2lwIHZhbGlkYXRpb24gZm9yIHdlZXggcmVjeWNsZS1saXN0IGNoaWxkIGNvbXBvbmVudCBwcm9wc1xuICAgICEoZmFsc2UpXG4gICkge1xuICAgIGFzc2VydFByb3AocHJvcCwga2V5LCB2YWx1ZSwgdm0sIGFic2VudCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvcERlZmF1bHRWYWx1ZSAodm0sIHByb3AsIGtleSkge1xuICAvLyBubyBkZWZhdWx0LCByZXR1cm4gdW5kZWZpbmVkXG4gIGlmICghaGFzT3duKHByb3AsICdkZWZhdWx0JykpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbiAgdmFyIGRlZiA9IHByb3AuZGVmYXVsdDtcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc09iamVjdChkZWYpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGRlZmF1bHQgdmFsdWUgZm9yIHByb3AgXCInICsga2V5ICsgJ1wiOiAnICtcbiAgICAgICdQcm9wcyB3aXRoIHR5cGUgT2JqZWN0L0FycmF5IG11c3QgdXNlIGEgZmFjdG9yeSBmdW5jdGlvbiAnICtcbiAgICAgICd0byByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUuJyxcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxuICAvLyB0aGUgcmF3IHByb3AgdmFsdWUgd2FzIGFsc28gdW5kZWZpbmVkIGZyb20gcHJldmlvdXMgcmVuZGVyLFxuICAvLyByZXR1cm4gcHJldmlvdXMgZGVmYXVsdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3YXRjaGVyIHRyaWdnZXJcbiAgaWYgKHZtICYmIHZtLiRvcHRpb25zLnByb3BzRGF0YSAmJlxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YVtrZXldID09PSB1bmRlZmluZWQgJiZcbiAgICB2bS5fcHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkXG4gICkge1xuICAgIHJldHVybiB2bS5fcHJvcHNba2V5XVxuICB9XG4gIC8vIGNhbGwgZmFjdG9yeSBmdW5jdGlvbiBmb3Igbm9uLUZ1bmN0aW9uIHR5cGVzXG4gIC8vIGEgdmFsdWUgaXMgRnVuY3Rpb24gaWYgaXRzIHByb3RvdHlwZSBpcyBmdW5jdGlvbiBldmVuIGFjcm9zcyBkaWZmZXJlbnQgZXhlY3V0aW9uIGNvbnRleHRcbiAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgZ2V0VHlwZShwcm9wLnR5cGUpICE9PSAnRnVuY3Rpb24nXG4gICAgPyBkZWYuY2FsbCh2bSlcbiAgICA6IGRlZlxufVxuXG4vKipcbiAqIEFzc2VydCB3aGV0aGVyIGEgcHJvcCBpcyB2YWxpZC5cbiAqL1xuZnVuY3Rpb24gYXNzZXJ0UHJvcCAoXG4gIHByb3AsXG4gIG5hbWUsXG4gIHZhbHVlLFxuICB2bSxcbiAgYWJzZW50XG4pIHtcbiAgaWYgKHByb3AucmVxdWlyZWQgJiYgYWJzZW50KSB7XG4gICAgd2FybihcbiAgICAgICdNaXNzaW5nIHJlcXVpcmVkIHByb3A6IFwiJyArIG5hbWUgKyAnXCInLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsICYmICFwcm9wLnJlcXVpcmVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHR5cGUgPSBwcm9wLnR5cGU7XG4gIHZhciB2YWxpZCA9ICF0eXBlIHx8IHR5cGUgPT09IHRydWU7XG4gIHZhciBleHBlY3RlZFR5cGVzID0gW107XG4gIGlmICh0eXBlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICB0eXBlID0gW3R5cGVdO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGUubGVuZ3RoICYmICF2YWxpZDsgaSsrKSB7XG4gICAgICB2YXIgYXNzZXJ0ZWRUeXBlID0gYXNzZXJ0VHlwZSh2YWx1ZSwgdHlwZVtpXSk7XG4gICAgICBleHBlY3RlZFR5cGVzLnB1c2goYXNzZXJ0ZWRUeXBlLmV4cGVjdGVkVHlwZSB8fCAnJyk7XG4gICAgICB2YWxpZCA9IGFzc2VydGVkVHlwZS52YWxpZDtcbiAgICB9XG4gIH1cblxuICBpZiAoIXZhbGlkKSB7XG4gICAgd2FybihcbiAgICAgIGdldEludmFsaWRUeXBlTWVzc2FnZShuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcyksXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHZhbGlkYXRvciA9IHByb3AudmFsaWRhdG9yO1xuICBpZiAodmFsaWRhdG9yKSB7XG4gICAgaWYgKCF2YWxpZGF0b3IodmFsdWUpKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcIicgKyBuYW1lICsgJ1wiLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgc2ltcGxlQ2hlY2tSRSA9IC9eKFN0cmluZ3xOdW1iZXJ8Qm9vbGVhbnxGdW5jdGlvbnxTeW1ib2wpJC87XG5cbmZ1bmN0aW9uIGFzc2VydFR5cGUgKHZhbHVlLCB0eXBlKSB7XG4gIHZhciB2YWxpZDtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGdldFR5cGUodHlwZSk7XG4gIGlmIChzaW1wbGVDaGVja1JFLnRlc3QoZXhwZWN0ZWRUeXBlKSkge1xuICAgIHZhciB0ID0gdHlwZW9mIHZhbHVlO1xuICAgIHZhbGlkID0gdCA9PT0gZXhwZWN0ZWRUeXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgLy8gZm9yIHByaW1pdGl2ZSB3cmFwcGVyIG9iamVjdHNcbiAgICBpZiAoIXZhbGlkICYmIHQgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnT2JqZWN0Jykge1xuICAgIHZhbGlkID0gaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG4gIH0gZWxzZSBpZiAoZXhwZWN0ZWRUeXBlID09PSAnQXJyYXknKSB7XG4gICAgdmFsaWQgPSBBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHZhbGlkOiB2YWxpZCxcbiAgICBleHBlY3RlZFR5cGU6IGV4cGVjdGVkVHlwZVxuICB9XG59XG5cbi8qKlxuICogVXNlIGZ1bmN0aW9uIHN0cmluZyBuYW1lIHRvIGNoZWNrIGJ1aWx0LWluIHR5cGVzLFxuICogYmVjYXVzZSBhIHNpbXBsZSBlcXVhbGl0eSBjaGVjayB3aWxsIGZhaWwgd2hlbiBydW5uaW5nXG4gKiBhY3Jvc3MgZGlmZmVyZW50IHZtcyAvIGlmcmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGdldFR5cGUgKGZuKSB7XG4gIHZhciBtYXRjaCA9IGZuICYmIGZuLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdIDogJydcbn1cblxuZnVuY3Rpb24gaXNTYW1lVHlwZSAoYSwgYikge1xuICByZXR1cm4gZ2V0VHlwZShhKSA9PT0gZ2V0VHlwZShiKVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlSW5kZXggKHR5cGUsIGV4cGVjdGVkVHlwZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVHlwZXMpKSB7XG4gICAgcmV0dXJuIGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlcywgdHlwZSkgPyAwIDogLTFcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXhwZWN0ZWRUeXBlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChpc1NhbWVUeXBlKGV4cGVjdGVkVHlwZXNbaV0sIHR5cGUpKSB7XG4gICAgICByZXR1cm4gaVxuICAgIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuZnVuY3Rpb24gZ2V0SW52YWxpZFR5cGVNZXNzYWdlIChuYW1lLCB2YWx1ZSwgZXhwZWN0ZWRUeXBlcykge1xuICB2YXIgbWVzc2FnZSA9IFwiSW52YWxpZCBwcm9wOiB0eXBlIGNoZWNrIGZhaWxlZCBmb3IgcHJvcCBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiICtcbiAgICBcIiBFeHBlY3RlZCBcIiArIChleHBlY3RlZFR5cGVzLm1hcChjYXBpdGFsaXplKS5qb2luKCcsICcpKTtcbiAgdmFyIGV4cGVjdGVkVHlwZSA9IGV4cGVjdGVkVHlwZXNbMF07XG4gIHZhciByZWNlaXZlZFR5cGUgPSB0b1Jhd1R5cGUodmFsdWUpO1xuICB2YXIgZXhwZWN0ZWRWYWx1ZSA9IHN0eWxlVmFsdWUodmFsdWUsIGV4cGVjdGVkVHlwZSk7XG4gIHZhciByZWNlaXZlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgcmVjZWl2ZWRUeXBlKTtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IGV4cGVjdGVkIHZhbHVlXG4gIGlmIChleHBlY3RlZFR5cGVzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgaXNFeHBsaWNhYmxlKGV4cGVjdGVkVHlwZSkgJiZcbiAgICAgICFpc0Jvb2xlYW4oZXhwZWN0ZWRUeXBlLCByZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIiB3aXRoIHZhbHVlIFwiICsgZXhwZWN0ZWRWYWx1ZTtcbiAgfVxuICBtZXNzYWdlICs9IFwiLCBnb3QgXCIgKyByZWNlaXZlZFR5cGUgKyBcIiBcIjtcbiAgLy8gY2hlY2sgaWYgd2UgbmVlZCB0byBzcGVjaWZ5IHJlY2VpdmVkIHZhbHVlXG4gIGlmIChpc0V4cGxpY2FibGUocmVjZWl2ZWRUeXBlKSkge1xuICAgIG1lc3NhZ2UgKz0gXCJ3aXRoIHZhbHVlIFwiICsgcmVjZWl2ZWRWYWx1ZSArIFwiLlwiO1xuICB9XG4gIHJldHVybiBtZXNzYWdlXG59XG5cbmZ1bmN0aW9uIHN0eWxlVmFsdWUgKHZhbHVlLCB0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnU3RyaW5nJykge1xuICAgIHJldHVybiAoXCJcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdOdW1iZXInKSB7XG4gICAgcmV0dXJuIChcIlwiICsgKE51bWJlcih2YWx1ZSkpKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXCJcIiArIHZhbHVlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzRXhwbGljYWJsZSAodmFsdWUpIHtcbiAgdmFyIGV4cGxpY2l0VHlwZXMgPSBbJ3N0cmluZycsICdudW1iZXInLCAnYm9vbGVhbiddO1xuICByZXR1cm4gZXhwbGljaXRUeXBlcy5zb21lKGZ1bmN0aW9uIChlbGVtKSB7IHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBlbGVtOyB9KVxufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4gKCkge1xuICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gIHJldHVybiBhcmdzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0udG9Mb3dlckNhc2UoKSA9PT0gJ2Jvb2xlYW4nOyB9KVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgLy8gRGVhY3RpdmF0ZSBkZXBzIHRyYWNraW5nIHdoaWxlIHByb2Nlc3NpbmcgZXJyb3IgaGFuZGxlciB0byBhdm9pZCBwb3NzaWJsZSBpbmZpbml0ZSByZW5kZXJpbmcuXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZXgvaXNzdWVzLzE1MDVcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIGlmICh2bSkge1xuICAgICAgdmFyIGN1ciA9IHZtO1xuICAgICAgd2hpbGUgKChjdXIgPSBjdXIuJHBhcmVudCkpIHtcbiAgICAgICAgdmFyIGhvb2tzID0gY3VyLiRvcHRpb25zLmVycm9yQ2FwdHVyZWQ7XG4gICAgICAgIGlmIChob29rcykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gaG9va3NbaV0uY2FsbChjdXIsIGVyciwgdm0sIGluZm8pID09PSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKGNhcHR1cmUpIHsgcmV0dXJuIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsSGFuZGxlRXJyb3IoZSwgY3VyLCAnZXJyb3JDYXB0dXJlZCBob29rJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGdsb2JhbEhhbmRsZUVycm9yKGVyciwgdm0sIGluZm8pO1xuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVdpdGhFcnJvckhhbmRsaW5nIChcbiAgaGFuZGxlcixcbiAgY29udGV4dCxcbiAgYXJncyxcbiAgdm0sXG4gIGluZm9cbikge1xuICB2YXIgcmVzO1xuICB0cnkge1xuICAgIHJlcyA9IGFyZ3MgPyBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3MpIDogaGFuZGxlci5jYWxsKGNvbnRleHQpO1xuICAgIGlmIChyZXMgJiYgIXJlcy5faXNWdWUgJiYgaXNQcm9taXNlKHJlcykgJiYgIXJlcy5faGFuZGxlZCkge1xuICAgICAgcmVzLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyArIFwiIChQcm9taXNlL2FzeW5jKVwiKTsgfSk7XG4gICAgICAvLyBpc3N1ZSAjOTUxMVxuICAgICAgLy8gYXZvaWQgY2F0Y2ggdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lcyB3aGVuIG5lc3RlZCBjYWxsc1xuICAgICAgcmVzLl9oYW5kbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCB2bSwgaW5mbyk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnbG9iYWxIYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAoY29uZmlnLmVycm9ySGFuZGxlcikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gY29uZmlnLmVycm9ySGFuZGxlci5jYWxsKG51bGwsIGVyciwgdm0sIGluZm8pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWYgdGhlIHVzZXIgaW50ZW50aW9uYWxseSB0aHJvd3MgdGhlIG9yaWdpbmFsIGVycm9yIGluIHRoZSBoYW5kbGVyLFxuICAgICAgLy8gZG8gbm90IGxvZyBpdCB0d2ljZVxuICAgICAgaWYgKGUgIT09IGVycikge1xuICAgICAgICBsb2dFcnJvcihlLCBudWxsLCAnY29uZmlnLmVycm9ySGFuZGxlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsb2dFcnJvcihlcnIsIHZtLCBpbmZvKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IgKGVyciwgdm0sIGluZm8pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB3YXJuKChcIkVycm9yIGluIFwiICsgaW5mbyArIFwiOiBcXFwiXCIgKyAoZXJyLnRvU3RyaW5nKCkpICsgXCJcXFwiXCIpLCB2bSk7XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKChpbkJyb3dzZXIgfHwgaW5XZWV4KSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cblxuLyogICovXG5cbnZhciBpc1VzaW5nTWljcm9UYXNrID0gZmFsc2U7XG5cbnZhciBjYWxsYmFja3MgPSBbXTtcbnZhciBwZW5kaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQ2FsbGJhY2tzICgpIHtcbiAgcGVuZGluZyA9IGZhbHNlO1xuICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICBjYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3BpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb3BpZXNbaV0oKTtcbiAgfVxufVxuXG4vLyBIZXJlIHdlIGhhdmUgYXN5bmMgZGVmZXJyaW5nIHdyYXBwZXJzIHVzaW5nIG1pY3JvdGFza3MuXG4vLyBJbiAyLjUgd2UgdXNlZCAobWFjcm8pIHRhc2tzIChpbiBjb21iaW5hdGlvbiB3aXRoIG1pY3JvdGFza3MpLlxuLy8gSG93ZXZlciwgaXQgaGFzIHN1YnRsZSBwcm9ibGVtcyB3aGVuIHN0YXRlIGlzIGNoYW5nZWQgcmlnaHQgYmVmb3JlIHJlcGFpbnRcbi8vIChlLmcuICM2ODEzLCBvdXQtaW4gdHJhbnNpdGlvbnMpLlxuLy8gQWxzbywgdXNpbmcgKG1hY3JvKSB0YXNrcyBpbiBldmVudCBoYW5kbGVyIHdvdWxkIGNhdXNlIHNvbWUgd2VpcmQgYmVoYXZpb3JzXG4vLyB0aGF0IGNhbm5vdCBiZSBjaXJjdW12ZW50ZWQgKGUuZy4gIzcxMDksICM3MTUzLCAjNzU0NiwgIzc4MzQsICM4MTA5KS5cbi8vIFNvIHdlIG5vdyB1c2UgbWljcm90YXNrcyBldmVyeXdoZXJlLCBhZ2Fpbi5cbi8vIEEgbWFqb3IgZHJhd2JhY2sgb2YgdGhpcyB0cmFkZW9mZiBpcyB0aGF0IHRoZXJlIGFyZSBzb21lIHNjZW5hcmlvc1xuLy8gd2hlcmUgbWljcm90YXNrcyBoYXZlIHRvbyBoaWdoIGEgcHJpb3JpdHkgYW5kIGZpcmUgaW4gYmV0d2VlbiBzdXBwb3NlZGx5XG4vLyBzZXF1ZW50aWFsIGV2ZW50cyAoZS5nLiAjNDUyMSwgIzY2OTAsIHdoaWNoIGhhdmUgd29ya2Fyb3VuZHMpXG4vLyBvciBldmVuIGJldHdlZW4gYnViYmxpbmcgb2YgdGhlIHNhbWUgZXZlbnQgKCM2NTY2KS5cbnZhciB0aW1lckZ1bmM7XG5cbi8vIFRoZSBuZXh0VGljayBiZWhhdmlvciBsZXZlcmFnZXMgdGhlIG1pY3JvdGFzayBxdWV1ZSwgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkXG4vLyB2aWEgZWl0aGVyIG5hdGl2ZSBQcm9taXNlLnRoZW4gb3IgTXV0YXRpb25PYnNlcnZlci5cbi8vIE11dGF0aW9uT2JzZXJ2ZXIgaGFzIHdpZGVyIHN1cHBvcnQsIGhvd2V2ZXIgaXQgaXMgc2VyaW91c2x5IGJ1Z2dlZCBpblxuLy8gVUlXZWJWaWV3IGluIGlPUyA+PSA5LjMuMyB3aGVuIHRyaWdnZXJlZCBpbiB0b3VjaCBldmVudCBoYW5kbGVycy4gSXRcbi8vIGNvbXBsZXRlbHkgc3RvcHMgd29ya2luZyBhZnRlciB0cmlnZ2VyaW5nIGEgZmV3IHRpbWVzLi4uIHNvLCBpZiBuYXRpdmVcbi8vIFByb21pc2UgaXMgYXZhaWxhYmxlLCB3ZSB3aWxsIHVzZSBpdDpcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0LCAkZmxvdy1kaXNhYmxlLWxpbmUgKi9cbmlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJvbWlzZSkpIHtcbiAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHAudGhlbihmbHVzaENhbGxiYWNrcyk7XG4gICAgLy8gSW4gcHJvYmxlbWF0aWMgVUlXZWJWaWV3cywgUHJvbWlzZS50aGVuIGRvZXNuJ3QgY29tcGxldGVseSBicmVhaywgYnV0XG4gICAgLy8gaXQgY2FuIGdldCBzdHVjayBpbiBhIHdlaXJkIHN0YXRlIHdoZXJlIGNhbGxiYWNrcyBhcmUgcHVzaGVkIGludG8gdGhlXG4gICAgLy8gbWljcm90YXNrIHF1ZXVlIGJ1dCB0aGUgcXVldWUgaXNuJ3QgYmVpbmcgZmx1c2hlZCwgdW50aWwgdGhlIGJyb3dzZXJcbiAgICAvLyBuZWVkcyB0byBkbyBzb21lIG90aGVyIHdvcmssIGUuZy4gaGFuZGxlIGEgdGltZXIuIFRoZXJlZm9yZSB3ZSBjYW5cbiAgICAvLyBcImZvcmNlXCIgdGhlIG1pY3JvdGFzayBxdWV1ZSB0byBiZSBmbHVzaGVkIGJ5IGFkZGluZyBhbiBlbXB0eSB0aW1lci5cbiAgICBpZiAoaXNJT1MpIHsgc2V0VGltZW91dChub29wKTsgfVxuICB9O1xuICBpc1VzaW5nTWljcm9UYXNrID0gdHJ1ZTtcbn0gZWxzZSBpZiAoIWlzSUUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIChcbiAgaXNOYXRpdmUoTXV0YXRpb25PYnNlcnZlcikgfHxcbiAgLy8gUGhhbnRvbUpTIGFuZCBpT1MgNy54XG4gIE11dGF0aW9uT2JzZXJ2ZXIudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgTXV0YXRpb25PYnNlcnZlckNvbnN0cnVjdG9yXSdcbikpIHtcbiAgLy8gVXNlIE11dGF0aW9uT2JzZXJ2ZXIgd2hlcmUgbmF0aXZlIFByb21pc2UgaXMgbm90IGF2YWlsYWJsZSxcbiAgLy8gZS5nLiBQaGFudG9tSlMsIGlPUzcsIEFuZHJvaWQgNC40XG4gIC8vICgjNjQ2NiBNdXRhdGlvbk9ic2VydmVyIGlzIHVucmVsaWFibGUgaW4gSUUxMSlcbiAgdmFyIGNvdW50ZXIgPSAxO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaENhbGxiYWNrcyk7XG4gIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhjb3VudGVyKSk7XG4gIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gIH0pO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgY291bnRlciA9IChjb3VudGVyICsgMSkgJSAyO1xuICAgIHRleHROb2RlLmRhdGEgPSBTdHJpbmcoY291bnRlcik7XG4gIH07XG4gIGlzVXNpbmdNaWNyb1Rhc2sgPSB0cnVlO1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgLy8gVGVjaGluaWNhbGx5IGl0IGxldmVyYWdlcyB0aGUgKG1hY3JvKSB0YXNrIHF1ZXVlLFxuICAvLyBidXQgaXQgaXMgc3RpbGwgYSBiZXR0ZXIgY2hvaWNlIHRoYW4gc2V0VGltZW91dC5cbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIHNldEltbWVkaWF0ZShmbHVzaENhbGxiYWNrcyk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBGYWxsYmFjayB0byBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGltZW91dChmbHVzaENhbGxiYWNrcywgMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrIChjYiwgY3R4KSB7XG4gIHZhciBfcmVzb2x2ZTtcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IuY2FsbChjdHgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBoYW5kbGVFcnJvcihlLCBjdHgsICduZXh0VGljaycpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlKGN0eCk7XG4gICAgfVxuICB9KTtcbiAgaWYgKCFwZW5kaW5nKSB7XG4gICAgcGVuZGluZyA9IHRydWU7XG4gICAgdGltZXJGdW5jKCk7XG4gIH1cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSlcbiAgfVxufVxuXG4vKiAgKi9cblxuLyogbm90IHR5cGUgY2hlY2tpbmcgdGhpcyBmaWxlIGJlY2F1c2UgZmxvdyBkb2Vzbid0IHBsYXkgd2VsbCB3aXRoIFByb3h5ICovXG5cbnZhciBpbml0UHJveHk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBhbGxvd2VkR2xvYmFscyA9IG1ha2VNYXAoXG4gICAgJ0luZmluaXR5LHVuZGVmaW5lZCxOYU4saXNGaW5pdGUsaXNOYU4sJyArXG4gICAgJ3BhcnNlRmxvYXQscGFyc2VJbnQsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksZW5jb2RlVVJJQ29tcG9uZW50LCcgK1xuICAgICdNYXRoLE51bWJlcixEYXRlLEFycmF5LE9iamVjdCxCb29sZWFuLFN0cmluZyxSZWdFeHAsTWFwLFNldCxKU09OLEludGwsJyArXG4gICAgJ3JlcXVpcmUnIC8vIGZvciBXZWJwYWNrL0Jyb3dzZXJpZnlcbiAgKTtcblxuICB2YXIgd2Fybk5vblByZXNlbnQgPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBvciBtZXRob2QgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIG5vdCBkZWZpbmVkIG9uIHRoZSBpbnN0YW5jZSBidXQgXCIgK1xuICAgICAgJ3JlZmVyZW5jZWQgZHVyaW5nIHJlbmRlci4gTWFrZSBzdXJlIHRoYXQgdGhpcyBwcm9wZXJ0eSBpcyByZWFjdGl2ZSwgJyArXG4gICAgICAnZWl0aGVyIGluIHRoZSBkYXRhIG9wdGlvbiwgb3IgZm9yIGNsYXNzLWJhc2VkIGNvbXBvbmVudHMsIGJ5ICcgK1xuICAgICAgJ2luaXRpYWxpemluZyB0aGUgcHJvcGVydHkuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvZ3VpZGUvcmVhY3Rpdml0eS5odG1sI0RlY2xhcmluZy1SZWFjdGl2ZS1Qcm9wZXJ0aWVzLicsXG4gICAgICB0YXJnZXRcbiAgICApO1xuICB9O1xuXG4gIHZhciB3YXJuUmVzZXJ2ZWRQcmVmaXggPSBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJQcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbXVzdCBiZSBhY2Nlc3NlZCB3aXRoIFxcXCIkZGF0YS5cIiArIGtleSArIFwiXFxcIiBiZWNhdXNlIFwiICtcbiAgICAgICdwcm9wZXJ0aWVzIHN0YXJ0aW5nIHdpdGggXCIkXCIgb3IgXCJfXCIgYXJlIG5vdCBwcm94aWVkIGluIHRoZSBWdWUgaW5zdGFuY2UgdG8gJyArXG4gICAgICAncHJldmVudCBjb25mbGljdHMgd2l0aCBWdWUgaW50ZXJuYWxzJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9hcGkvI2RhdGEnLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcbiAgfTtcblxuICB2YXIgaGFzUHJveHkgPVxuICAgIHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYXRpdmUoUHJveHkpO1xuXG4gIGlmIChoYXNQcm94eSkge1xuICAgIHZhciBpc0J1aWx0SW5Nb2RpZmllciA9IG1ha2VNYXAoJ3N0b3AscHJldmVudCxzZWxmLGN0cmwsc2hpZnQsYWx0LG1ldGEsZXhhY3QnKTtcbiAgICBjb25maWcua2V5Q29kZXMgPSBuZXcgUHJveHkoY29uZmlnLmtleUNvZGVzLCB7XG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpc0J1aWx0SW5Nb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgd2FybigoXCJBdm9pZCBvdmVyd3JpdGluZyBidWlsdC1pbiBtb2RpZmllciBpbiBjb25maWcua2V5Q29kZXM6IC5cIiArIGtleSkpO1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhc0hhbmRsZXIgPSB7XG4gICAgaGFzOiBmdW5jdGlvbiBoYXMgKHRhcmdldCwga2V5KSB7XG4gICAgICB2YXIgaGFzID0ga2V5IGluIHRhcmdldDtcbiAgICAgIHZhciBpc0FsbG93ZWQgPSBhbGxvd2VkR2xvYmFscyhrZXkpIHx8XG4gICAgICAgICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkuY2hhckF0KDApID09PSAnXycgJiYgIShrZXkgaW4gdGFyZ2V0LiRkYXRhKSk7XG4gICAgICBpZiAoIWhhcyAmJiAhaXNBbGxvd2VkKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhcyB8fCAhaXNBbGxvd2VkXG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRIYW5kbGVyID0ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0ICh0YXJnZXQsIGtleSkge1xuICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmICEoa2V5IGluIHRhcmdldCkpIHtcbiAgICAgICAgaWYgKGtleSBpbiB0YXJnZXQuJGRhdGEpIHsgd2FyblJlc2VydmVkUHJlZml4KHRhcmdldCwga2V5KTsgfVxuICAgICAgICBlbHNlIHsgd2Fybk5vblByZXNlbnQodGFyZ2V0LCBrZXkpOyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0W2tleV1cbiAgICB9XG4gIH07XG5cbiAgaW5pdFByb3h5ID0gZnVuY3Rpb24gaW5pdFByb3h5ICh2bSkge1xuICAgIGlmIChoYXNQcm94eSkge1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3h5IGhhbmRsZXIgdG8gdXNlXG4gICAgICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuICAgICAgdmFyIGhhbmRsZXJzID0gb3B0aW9ucy5yZW5kZXIgJiYgb3B0aW9ucy5yZW5kZXIuX3dpdGhTdHJpcHBlZFxuICAgICAgICA/IGdldEhhbmRsZXJcbiAgICAgICAgOiBoYXNIYW5kbGVyO1xuICAgICAgdm0uX3JlbmRlclByb3h5ID0gbmV3IFByb3h5KHZtLCBoYW5kbGVycyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IHZtO1xuICAgIH1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBzZWVuT2JqZWN0cyA9IG5ldyBfU2V0KCk7XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgYW4gb2JqZWN0IHRvIGV2b2tlIGFsbCBjb252ZXJ0ZWRcbiAqIGdldHRlcnMsIHNvIHRoYXQgZXZlcnkgbmVzdGVkIHByb3BlcnR5IGluc2lkZSB0aGUgb2JqZWN0XG4gKiBpcyBjb2xsZWN0ZWQgYXMgYSBcImRlZXBcIiBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZSAodmFsKSB7XG4gIF90cmF2ZXJzZSh2YWwsIHNlZW5PYmplY3RzKTtcbiAgc2Vlbk9iamVjdHMuY2xlYXIoKTtcbn1cblxuZnVuY3Rpb24gX3RyYXZlcnNlICh2YWwsIHNlZW4pIHtcbiAgdmFyIGksIGtleXM7XG4gIHZhciBpc0EgPSBBcnJheS5pc0FycmF5KHZhbCk7XG4gIGlmICgoIWlzQSAmJiAhaXNPYmplY3QodmFsKSkgfHwgT2JqZWN0LmlzRnJvemVuKHZhbCkgfHwgdmFsIGluc3RhbmNlb2YgVk5vZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAodmFsLl9fb2JfXykge1xuICAgIHZhciBkZXBJZCA9IHZhbC5fX29iX18uZGVwLmlkO1xuICAgIGlmIChzZWVuLmhhcyhkZXBJZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZWVuLmFkZChkZXBJZCk7XG4gIH1cbiAgaWYgKGlzQSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtpXSwgc2Vlbik7IH1cbiAgfSBlbHNlIHtcbiAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkgeyBfdHJhdmVyc2UodmFsW2tleXNbaV1dLCBzZWVuKTsgfVxuICB9XG59XG5cbnZhciBtYXJrO1xudmFyIG1lYXN1cmU7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBwZXJmID0gaW5Ccm93c2VyICYmIHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChcbiAgICBwZXJmICYmXG4gICAgcGVyZi5tYXJrICYmXG4gICAgcGVyZi5tZWFzdXJlICYmXG4gICAgcGVyZi5jbGVhck1hcmtzICYmXG4gICAgcGVyZi5jbGVhck1lYXN1cmVzXG4gICkge1xuICAgIG1hcmsgPSBmdW5jdGlvbiAodGFnKSB7IHJldHVybiBwZXJmLm1hcmsodGFnKTsgfTtcbiAgICBtZWFzdXJlID0gZnVuY3Rpb24gKG5hbWUsIHN0YXJ0VGFnLCBlbmRUYWcpIHtcbiAgICAgIHBlcmYubWVhc3VyZShuYW1lLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICAgIHBlcmYuY2xlYXJNYXJrcyhzdGFydFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3MoZW5kVGFnKTtcbiAgICAgIC8vIHBlcmYuY2xlYXJNZWFzdXJlcyhuYW1lKVxuICAgIH07XG4gIH1cbn1cblxuLyogICovXG5cbnZhciBub3JtYWxpemVFdmVudCA9IGNhY2hlZChmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFzc2l2ZSA9IG5hbWUuY2hhckF0KDApID09PSAnJic7XG4gIG5hbWUgPSBwYXNzaXZlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHZhciBvbmNlJCQxID0gbmFtZS5jaGFyQXQoMCkgPT09ICd+JzsgLy8gUHJlZml4ZWQgbGFzdCwgY2hlY2tlZCBmaXJzdFxuICBuYW1lID0gb25jZSQkMSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgY2FwdHVyZSA9IG5hbWUuY2hhckF0KDApID09PSAnISc7XG4gIG5hbWUgPSBjYXB0dXJlID8gbmFtZS5zbGljZSgxKSA6IG5hbWU7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbmFtZSxcbiAgICBvbmNlOiBvbmNlJCQxLFxuICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgcGFzc2l2ZTogcGFzc2l2ZVxuICB9XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlRm5JbnZva2VyIChmbnMsIHZtKSB7XG4gIGZ1bmN0aW9uIGludm9rZXIgKCkge1xuICAgIHZhciBhcmd1bWVudHMkMSA9IGFyZ3VtZW50cztcblxuICAgIHZhciBmbnMgPSBpbnZva2VyLmZucztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbnMpKSB7XG4gICAgICB2YXIgY2xvbmVkID0gZm5zLnNsaWNlKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsb25lZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpbnZva2VXaXRoRXJyb3JIYW5kbGluZyhjbG9uZWRbaV0sIG51bGwsIGFyZ3VtZW50cyQxLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHJldHVybiBoYW5kbGVyIHJldHVybiB2YWx1ZSBmb3Igc2luZ2xlIGhhbmRsZXJzXG4gICAgICByZXR1cm4gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoZm5zLCBudWxsLCBhcmd1bWVudHMsIHZtLCBcInYtb24gaGFuZGxlclwiKVxuICAgIH1cbiAgfVxuICBpbnZva2VyLmZucyA9IGZucztcbiAgcmV0dXJuIGludm9rZXJcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGlzdGVuZXJzIChcbiAgb24sXG4gIG9sZE9uLFxuICBhZGQsXG4gIHJlbW92ZSQkMSxcbiAgY3JlYXRlT25jZUhhbmRsZXIsXG4gIHZtXG4pIHtcbiAgdmFyIG5hbWUsIGRlZiQkMSwgY3VyLCBvbGQsIGV2ZW50O1xuICBmb3IgKG5hbWUgaW4gb24pIHtcbiAgICBkZWYkJDEgPSBjdXIgPSBvbltuYW1lXTtcbiAgICBvbGQgPSBvbGRPbltuYW1lXTtcbiAgICBldmVudCA9IG5vcm1hbGl6ZUV2ZW50KG5hbWUpO1xuICAgIGlmIChpc1VuZGVmKGN1cikpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJJbnZhbGlkIGhhbmRsZXIgZm9yIGV2ZW50IFxcXCJcIiArIChldmVudC5uYW1lKSArIFwiXFxcIjogZ290IFwiICsgU3RyaW5nKGN1ciksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoaXNVbmRlZihvbGQpKSB7XG4gICAgICBpZiAoaXNVbmRlZihjdXIuZm5zKSkge1xuICAgICAgICBjdXIgPSBvbltuYW1lXSA9IGNyZWF0ZUZuSW52b2tlcihjdXIsIHZtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1RydWUoZXZlbnQub25jZSkpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVPbmNlSGFuZGxlcihldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUpO1xuICAgICAgfVxuICAgICAgYWRkKGV2ZW50Lm5hbWUsIGN1ciwgZXZlbnQuY2FwdHVyZSwgZXZlbnQucGFzc2l2ZSwgZXZlbnQucGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKGN1ciAhPT0gb2xkKSB7XG4gICAgICBvbGQuZm5zID0gY3VyO1xuICAgICAgb25bbmFtZV0gPSBvbGQ7XG4gICAgfVxuICB9XG4gIGZvciAobmFtZSBpbiBvbGRPbikge1xuICAgIGlmIChpc1VuZGVmKG9uW25hbWVdKSkge1xuICAgICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICAgIHJlbW92ZSQkMShldmVudC5uYW1lLCBvbGRPbltuYW1lXSwgZXZlbnQuY2FwdHVyZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBtZXJnZVZOb2RlSG9vayAoZGVmLCBob29rS2V5LCBob29rKSB7XG4gIGlmIChkZWYgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIGRlZiA9IGRlZi5kYXRhLmhvb2sgfHwgKGRlZi5kYXRhLmhvb2sgPSB7fSk7XG4gIH1cbiAgdmFyIGludm9rZXI7XG4gIHZhciBvbGRIb29rID0gZGVmW2hvb2tLZXldO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZWRIb29rICgpIHtcbiAgICBob29rLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgLy8gaW1wb3J0YW50OiByZW1vdmUgbWVyZ2VkIGhvb2sgdG8gZW5zdXJlIGl0J3MgY2FsbGVkIG9ubHkgb25jZVxuICAgIC8vIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgcmVtb3ZlKGludm9rZXIuZm5zLCB3cmFwcGVkSG9vayk7XG4gIH1cblxuICBpZiAoaXNVbmRlZihvbGRIb29rKSkge1xuICAgIC8vIG5vIGV4aXN0aW5nIGhvb2tcbiAgICBpbnZva2VyID0gY3JlYXRlRm5JbnZva2VyKFt3cmFwcGVkSG9va10pO1xuICB9IGVsc2Uge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc0RlZihvbGRIb29rLmZucykgJiYgaXNUcnVlKG9sZEhvb2subWVyZ2VkKSkge1xuICAgICAgLy8gYWxyZWFkeSBhIG1lcmdlZCBpbnZva2VyXG4gICAgICBpbnZva2VyID0gb2xkSG9vaztcbiAgICAgIGludm9rZXIuZm5zLnB1c2god3JhcHBlZEhvb2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBleGlzdGluZyBwbGFpbiBob29rXG4gICAgICBpbnZva2VyID0gY3JlYXRlRm5JbnZva2VyKFtvbGRIb29rLCB3cmFwcGVkSG9va10pO1xuICAgIH1cbiAgfVxuXG4gIGludm9rZXIubWVyZ2VkID0gdHJ1ZTtcbiAgZGVmW2hvb2tLZXldID0gaW52b2tlcjtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEgKFxuICBkYXRhLFxuICBDdG9yLFxuICB0YWdcbikge1xuICAvLyB3ZSBhcmUgb25seSBleHRyYWN0aW5nIHJhdyB2YWx1ZXMgaGVyZS5cbiAgLy8gdmFsaWRhdGlvbiBhbmQgZGVmYXVsdCB2YWx1ZXMgYXJlIGhhbmRsZWQgaW4gdGhlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCBpdHNlbGYuXG4gIHZhciBwcm9wT3B0aW9ucyA9IEN0b3Iub3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzVW5kZWYocHJvcE9wdGlvbnMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgYXR0cnMgPSBkYXRhLmF0dHJzO1xuICB2YXIgcHJvcHMgPSBkYXRhLnByb3BzO1xuICBpZiAoaXNEZWYoYXR0cnMpIHx8IGlzRGVmKHByb3BzKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgdmFyIGFsdEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIGtleUluTG93ZXJDYXNlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgIT09IGtleUluTG93ZXJDYXNlICYmXG4gICAgICAgICAgYXR0cnMgJiYgaGFzT3duKGF0dHJzLCBrZXlJbkxvd2VyQ2FzZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlwKFxuICAgICAgICAgICAgXCJQcm9wIFxcXCJcIiArIGtleUluTG93ZXJDYXNlICsgXCJcXFwiIGlzIHBhc3NlZCB0byBjb21wb25lbnQgXCIgK1xuICAgICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodGFnIHx8IEN0b3IpKSArIFwiLCBidXQgdGhlIGRlY2xhcmVkIHByb3AgbmFtZSBpc1wiICtcbiAgICAgICAgICAgIFwiIFxcXCJcIiArIGtleSArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgICAgXCJOb3RlIHRoYXQgSFRNTCBhdHRyaWJ1dGVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlIGFuZCBjYW1lbENhc2VkIFwiICtcbiAgICAgICAgICAgIFwicHJvcHMgbmVlZCB0byB1c2UgdGhlaXIga2ViYWItY2FzZSBlcXVpdmFsZW50cyB3aGVuIHVzaW5nIGluLURPTSBcIiArXG4gICAgICAgICAgICBcInRlbXBsYXRlcy4gWW91IHNob3VsZCBwcm9iYWJseSB1c2UgXFxcIlwiICsgYWx0S2V5ICsgXCJcXFwiIGluc3RlYWQgb2YgXFxcIlwiICsga2V5ICsgXCJcXFwiLlwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgY2hlY2tQcm9wKHJlcywgYXR0cnMsIGtleSwgYWx0S2V5LCBmYWxzZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wIChcbiAgcmVzLFxuICBoYXNoLFxuICBrZXksXG4gIGFsdEtleSxcbiAgcHJlc2VydmVcbikge1xuICBpZiAoaXNEZWYoaGFzaCkpIHtcbiAgICBpZiAoaGFzT3duKGhhc2gsIGtleSkpIHtcbiAgICAgIHJlc1trZXldID0gaGFzaFtrZXldO1xuICAgICAgaWYgKCFwcmVzZXJ2ZSkge1xuICAgICAgICBkZWxldGUgaGFzaFtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGVsc2UgaWYgKGhhc093bihoYXNoLCBhbHRLZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hbYWx0S2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hbYWx0S2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vKiAgKi9cblxuLy8gVGhlIHRlbXBsYXRlIGNvbXBpbGVyIGF0dGVtcHRzIHRvIG1pbmltaXplIHRoZSBuZWVkIGZvciBub3JtYWxpemF0aW9uIGJ5XG4vLyBzdGF0aWNhbGx5IGFuYWx5emluZyB0aGUgdGVtcGxhdGUgYXQgY29tcGlsZSB0aW1lLlxuLy9cbi8vIEZvciBwbGFpbiBIVE1MIG1hcmt1cCwgbm9ybWFsaXphdGlvbiBjYW4gYmUgY29tcGxldGVseSBza2lwcGVkIGJlY2F1c2UgdGhlXG4vLyBnZW5lcmF0ZWQgcmVuZGVyIGZ1bmN0aW9uIGlzIGd1YXJhbnRlZWQgdG8gcmV0dXJuIEFycmF5PFZOb2RlPi4gVGhlcmUgYXJlXG4vLyB0d28gY2FzZXMgd2hlcmUgZXh0cmEgbm9ybWFsaXphdGlvbiBpcyBuZWVkZWQ6XG5cbi8vIDEuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbXBvbmVudHMgLSBiZWNhdXNlIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbi8vIG1heSByZXR1cm4gYW4gQXJyYXkgaW5zdGVhZCBvZiBhIHNpbmdsZSByb290LiBJbiB0aGlzIGNhc2UsIGp1c3QgYSBzaW1wbGVcbi8vIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkIC0gaWYgYW55IGNoaWxkIGlzIGFuIEFycmF5LCB3ZSBmbGF0dGVuIHRoZSB3aG9sZVxuLy8gdGhpbmcgd2l0aCBBcnJheS5wcm90b3R5cGUuY29uY2F0LiBJdCBpcyBndWFyYW50ZWVkIHRvIGJlIG9ubHkgMS1sZXZlbCBkZWVwXG4vLyBiZWNhdXNlIGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhbHJlYWR5IG5vcm1hbGl6ZSB0aGVpciBvd24gY2hpbGRyZW4uXG5mdW5jdGlvbiBzaW1wbGVOb3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuKVxuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRyZW5cbn1cblxuLy8gMi4gV2hlbiB0aGUgY2hpbGRyZW4gY29udGFpbnMgY29uc3RydWN0cyB0aGF0IGFsd2F5cyBnZW5lcmF0ZWQgbmVzdGVkIEFycmF5cyxcbi8vIGUuZy4gPHRlbXBsYXRlPiwgPHNsb3Q+LCB2LWZvciwgb3Igd2hlbiB0aGUgY2hpbGRyZW4gaXMgcHJvdmlkZWQgYnkgdXNlclxuLy8gd2l0aCBoYW5kLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucyAvIEpTWC4gSW4gc3VjaCBjYXNlcyBhIGZ1bGwgbm9ybWFsaXphdGlvblxuLy8gaXMgbmVlZGVkIHRvIGNhdGVyIHRvIGFsbCBwb3NzaWJsZSB0eXBlcyBvZiBjaGlsZHJlbiB2YWx1ZXMuXG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbiAoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIGlzUHJpbWl0aXZlKGNoaWxkcmVuKVxuICAgID8gW2NyZWF0ZVRleHRWTm9kZShjaGlsZHJlbildXG4gICAgOiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKVxuICAgICAgPyBub3JtYWxpemVBcnJheUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gaXNUZXh0Tm9kZSAobm9kZSkge1xuICByZXR1cm4gaXNEZWYobm9kZSkgJiYgaXNEZWYobm9kZS50ZXh0KSAmJiBpc0ZhbHNlKG5vZGUuaXNDb21tZW50KVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheUNoaWxkcmVuIChjaGlsZHJlbiwgbmVzdGVkSW5kZXgpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaSwgYywgbGFzdEluZGV4LCBsYXN0O1xuICBmb3IgKGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gY2hpbGRyZW5baV07XG4gICAgaWYgKGlzVW5kZWYoYykgfHwgdHlwZW9mIGMgPT09ICdib29sZWFuJykgeyBjb250aW51ZSB9XG4gICAgbGFzdEluZGV4ID0gcmVzLmxlbmd0aCAtIDE7XG4gICAgbGFzdCA9IHJlc1tsYXN0SW5kZXhdO1xuICAgIC8vICBuZXN0ZWRcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjKSkge1xuICAgICAgaWYgKGMubGVuZ3RoID4gMCkge1xuICAgICAgICBjID0gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjLCAoKG5lc3RlZEluZGV4IHx8ICcnKSArIFwiX1wiICsgaSkpO1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIGlmIChpc1RleHROb2RlKGNbMF0pICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyAoY1swXSkudGV4dCk7XG4gICAgICAgICAgYy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoLmFwcGx5KHJlcywgYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ByaW1pdGl2ZShjKSkge1xuICAgICAgaWYgKGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBmb3IgU1NSIGh5ZHJhdGlvbiBiZWNhdXNlIHRleHQgbm9kZXMgYXJlXG4gICAgICAgIC8vIGVzc2VudGlhbGx5IG1lcmdlZCB3aGVuIHJlbmRlcmVkIHRvIEhUTUwgc3RyaW5nc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjKTtcbiAgICAgIH0gZWxzZSBpZiAoYyAhPT0gJycpIHtcbiAgICAgICAgLy8gY29udmVydCBwcmltaXRpdmUgdG8gdm5vZGVcbiAgICAgICAgcmVzLnB1c2goY3JlYXRlVGV4dFZOb2RlKGMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzVGV4dE5vZGUoYykgJiYgaXNUZXh0Tm9kZShsYXN0KSkge1xuICAgICAgICAvLyBtZXJnZSBhZGphY2VudCB0ZXh0IG5vZGVzXG4gICAgICAgIHJlc1tsYXN0SW5kZXhdID0gY3JlYXRlVGV4dFZOb2RlKGxhc3QudGV4dCArIGMudGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkZWZhdWx0IGtleSBmb3IgbmVzdGVkIGFycmF5IGNoaWxkcmVuIChsaWtlbHkgZ2VuZXJhdGVkIGJ5IHYtZm9yKVxuICAgICAgICBpZiAoaXNUcnVlKGNoaWxkcmVuLl9pc1ZMaXN0KSAmJlxuICAgICAgICAgIGlzRGVmKGMudGFnKSAmJlxuICAgICAgICAgIGlzVW5kZWYoYy5rZXkpICYmXG4gICAgICAgICAgaXNEZWYobmVzdGVkSW5kZXgpKSB7XG4gICAgICAgICAgYy5rZXkgPSBcIl9fdmxpc3RcIiArIG5lc3RlZEluZGV4ICsgXCJfXCIgKyBpICsgXCJfX1wiO1xuICAgICAgICB9XG4gICAgICAgIHJlcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UHJvdmlkZSAodm0pIHtcbiAgdmFyIHByb3ZpZGUgPSB2bS4kb3B0aW9ucy5wcm92aWRlO1xuICBpZiAocHJvdmlkZSkge1xuICAgIHZtLl9wcm92aWRlZCA9IHR5cGVvZiBwcm92aWRlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHByb3ZpZGUuY2FsbCh2bSlcbiAgICAgIDogcHJvdmlkZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0SW5qZWN0aW9ucyAodm0pIHtcbiAgdmFyIHJlc3VsdCA9IHJlc29sdmVJbmplY3Qodm0uJG9wdGlvbnMuaW5qZWN0LCB2bSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhbiBpbmplY3RlZCB2YWx1ZSBkaXJlY3RseSBzaW5jZSB0aGUgY2hhbmdlcyB3aWxsIGJlIFwiICtcbiAgICAgICAgICAgIFwib3ZlcndyaXR0ZW4gd2hlbmV2ZXIgdGhlIHByb3ZpZGVkIGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcImluamVjdGlvbiBiZWluZyBtdXRhdGVkOiBcXFwiXCIgKyBrZXkgKyBcIlxcXCJcIixcbiAgICAgICAgICAgIHZtXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwga2V5LCByZXN1bHRba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVJbmplY3QgKGluamVjdCwgdm0pIHtcbiAgaWYgKGluamVjdCkge1xuICAgIC8vIGluamVjdCBpcyA6YW55IGJlY2F1c2UgZmxvdyBpcyBub3Qgc21hcnQgZW5vdWdoIHRvIGZpZ3VyZSBvdXQgY2FjaGVkXG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIGtleXMgPSBoYXNTeW1ib2xcbiAgICAgID8gUmVmbGVjdC5vd25LZXlzKGluamVjdClcbiAgICAgIDogT2JqZWN0LmtleXMoaW5qZWN0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAvLyAjNjU3NCBpbiBjYXNlIHRoZSBpbmplY3Qgb2JqZWN0IGlzIG9ic2VydmVkLi4uXG4gICAgICBpZiAoa2V5ID09PSAnX19vYl9fJykgeyBjb250aW51ZSB9XG4gICAgICB2YXIgcHJvdmlkZUtleSA9IGluamVjdFtrZXldLmZyb207XG4gICAgICB2YXIgc291cmNlID0gdm07XG4gICAgICB3aGlsZSAoc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuX3Byb3ZpZGVkICYmIGhhc093bihzb3VyY2UuX3Byb3ZpZGVkLCBwcm92aWRlS2V5KSkge1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gc291cmNlLl9wcm92aWRlZFtwcm92aWRlS2V5XTtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSA9IHNvdXJjZS4kcGFyZW50O1xuICAgICAgfVxuICAgICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgICAgaWYgKCdkZWZhdWx0JyBpbiBpbmplY3Rba2V5XSkge1xuICAgICAgICAgIHZhciBwcm92aWRlRGVmYXVsdCA9IGluamVjdFtrZXldLmRlZmF1bHQ7XG4gICAgICAgICAgcmVzdWx0W2tleV0gPSB0eXBlb2YgcHJvdmlkZURlZmF1bHQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgID8gcHJvdmlkZURlZmF1bHQuY2FsbCh2bSlcbiAgICAgICAgICAgIDogcHJvdmlkZURlZmF1bHQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHdhcm4oKFwiSW5qZWN0aW9uIFxcXCJcIiArIGtleSArIFwiXFxcIiBub3QgZm91bmRcIiksIHZtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbn1cblxuLyogICovXG5cblxuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZXNvbHZpbmcgcmF3IGNoaWxkcmVuIFZOb2RlcyBpbnRvIGEgc2xvdCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVTbG90cyAoXG4gIGNoaWxkcmVuLFxuICBjb250ZXh0XG4pIHtcbiAgaWYgKCFjaGlsZHJlbiB8fCAhY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgdmFyIHNsb3RzID0ge307XG4gIGZvciAodmFyIGkgPSAwLCBsID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgdmFyIGRhdGEgPSBjaGlsZC5kYXRhO1xuICAgIC8vIHJlbW92ZSBzbG90IGF0dHJpYnV0ZSBpZiB0aGUgbm9kZSBpcyByZXNvbHZlZCBhcyBhIFZ1ZSBzbG90IG5vZGVcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMuc2xvdCkge1xuICAgICAgZGVsZXRlIGRhdGEuYXR0cnMuc2xvdDtcbiAgICB9XG4gICAgLy8gbmFtZWQgc2xvdHMgc2hvdWxkIG9ubHkgYmUgcmVzcGVjdGVkIGlmIHRoZSB2bm9kZSB3YXMgcmVuZGVyZWQgaW4gdGhlXG4gICAgLy8gc2FtZSBjb250ZXh0LlxuICAgIGlmICgoY2hpbGQuY29udGV4dCA9PT0gY29udGV4dCB8fCBjaGlsZC5mbkNvbnRleHQgPT09IGNvbnRleHQpICYmXG4gICAgICBkYXRhICYmIGRhdGEuc2xvdCAhPSBudWxsXG4gICAgKSB7XG4gICAgICB2YXIgbmFtZSA9IGRhdGEuc2xvdDtcbiAgICAgIHZhciBzbG90ID0gKHNsb3RzW25hbWVdIHx8IChzbG90c1tuYW1lXSA9IFtdKSk7XG4gICAgICBpZiAoY2hpbGQudGFnID09PSAndGVtcGxhdGUnKSB7XG4gICAgICAgIHNsb3QucHVzaC5hcHBseShzbG90LCBjaGlsZC5jaGlsZHJlbiB8fCBbXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbG90LnB1c2goY2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAoc2xvdHMuZGVmYXVsdCB8fCAoc2xvdHMuZGVmYXVsdCA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgfVxuICB9XG4gIC8vIGlnbm9yZSBzbG90cyB0aGF0IGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZVxuICBmb3IgKHZhciBuYW1lJDEgaW4gc2xvdHMpIHtcbiAgICBpZiAoc2xvdHNbbmFtZSQxXS5ldmVyeShpc1doaXRlc3BhY2UpKSB7XG4gICAgICBkZWxldGUgc2xvdHNbbmFtZSQxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNsb3RzXG59XG5cbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAobm9kZSkge1xuICByZXR1cm4gKG5vZGUuaXNDb21tZW50ICYmICFub2RlLmFzeW5jRmFjdG9yeSkgfHwgbm9kZS50ZXh0ID09PSAnICdcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3RzIChcbiAgc2xvdHMsXG4gIG5vcm1hbFNsb3RzLFxuICBwcmV2U2xvdHNcbikge1xuICB2YXIgcmVzO1xuICB2YXIgaGFzTm9ybWFsU2xvdHMgPSBPYmplY3Qua2V5cyhub3JtYWxTbG90cykubGVuZ3RoID4gMDtcbiAgdmFyIGlzU3RhYmxlID0gc2xvdHMgPyAhIXNsb3RzLiRzdGFibGUgOiAhaGFzTm9ybWFsU2xvdHM7XG4gIHZhciBrZXkgPSBzbG90cyAmJiBzbG90cy4ka2V5O1xuICBpZiAoIXNsb3RzKSB7XG4gICAgcmVzID0ge307XG4gIH0gZWxzZSBpZiAoc2xvdHMuX25vcm1hbGl6ZWQpIHtcbiAgICAvLyBmYXN0IHBhdGggMTogY2hpbGQgY29tcG9uZW50IHJlLXJlbmRlciBvbmx5LCBwYXJlbnQgZGlkIG5vdCBjaGFuZ2VcbiAgICByZXR1cm4gc2xvdHMuX25vcm1hbGl6ZWRcbiAgfSBlbHNlIGlmIChcbiAgICBpc1N0YWJsZSAmJlxuICAgIHByZXZTbG90cyAmJlxuICAgIHByZXZTbG90cyAhPT0gZW1wdHlPYmplY3QgJiZcbiAgICBrZXkgPT09IHByZXZTbG90cy4ka2V5ICYmXG4gICAgIWhhc05vcm1hbFNsb3RzICYmXG4gICAgIXByZXZTbG90cy4kaGFzTm9ybWFsXG4gICkge1xuICAgIC8vIGZhc3QgcGF0aCAyOiBzdGFibGUgc2NvcGVkIHNsb3RzIHcvIG5vIG5vcm1hbCBzbG90cyB0byBwcm94eSxcbiAgICAvLyBvbmx5IG5lZWQgdG8gbm9ybWFsaXplIG9uY2VcbiAgICByZXR1cm4gcHJldlNsb3RzXG4gIH0gZWxzZSB7XG4gICAgcmVzID0ge307XG4gICAgZm9yICh2YXIga2V5JDEgaW4gc2xvdHMpIHtcbiAgICAgIGlmIChzbG90c1trZXkkMV0gJiYga2V5JDFbMF0gIT09ICckJykge1xuICAgICAgICByZXNba2V5JDFdID0gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5JDEsIHNsb3RzW2tleSQxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGV4cG9zZSBub3JtYWwgc2xvdHMgb24gc2NvcGVkU2xvdHNcbiAgZm9yICh2YXIga2V5JDIgaW4gbm9ybWFsU2xvdHMpIHtcbiAgICBpZiAoIShrZXkkMiBpbiByZXMpKSB7XG4gICAgICByZXNba2V5JDJdID0gcHJveHlOb3JtYWxTbG90KG5vcm1hbFNsb3RzLCBrZXkkMik7XG4gICAgfVxuICB9XG4gIC8vIGF2b3JpYXogc2VlbXMgdG8gbW9jayBhIG5vbi1leHRlbnNpYmxlICRzY29wZWRTbG90cyBvYmplY3RcbiAgLy8gYW5kIHdoZW4gdGhhdCBpcyBwYXNzZWQgZG93biB0aGlzIHdvdWxkIGNhdXNlIGFuIGVycm9yXG4gIGlmIChzbG90cyAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHNsb3RzKSkge1xuICAgIChzbG90cykuX25vcm1hbGl6ZWQgPSByZXM7XG4gIH1cbiAgZGVmKHJlcywgJyRzdGFibGUnLCBpc1N0YWJsZSk7XG4gIGRlZihyZXMsICcka2V5Jywga2V5KTtcbiAgZGVmKHJlcywgJyRoYXNOb3JtYWwnLCBoYXNOb3JtYWxTbG90cyk7XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5LCBmbikge1xuICB2YXIgbm9ybWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzID0gYXJndW1lbnRzLmxlbmd0aCA/IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiBmbih7fSk7XG4gICAgcmVzID0gcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlcylcbiAgICAgID8gW3Jlc10gLy8gc2luZ2xlIHZub2RlXG4gICAgICA6IG5vcm1hbGl6ZUNoaWxkcmVuKHJlcyk7XG4gICAgcmV0dXJuIHJlcyAmJiAoXG4gICAgICByZXMubGVuZ3RoID09PSAwIHx8XG4gICAgICAocmVzLmxlbmd0aCA9PT0gMSAmJiByZXNbMF0uaXNDb21tZW50KSAvLyAjOTY1OFxuICAgICkgPyB1bmRlZmluZWRcbiAgICAgIDogcmVzXG4gIH07XG4gIC8vIHRoaXMgaXMgYSBzbG90IHVzaW5nIHRoZSBuZXcgdi1zbG90IHN5bnRheCB3aXRob3V0IHNjb3BlLiBhbHRob3VnaCBpdCBpc1xuICAvLyBjb21waWxlZCBhcyBhIHNjb3BlZCBzbG90LCByZW5kZXIgZm4gdXNlcnMgd291bGQgZXhwZWN0IGl0IHRvIGJlIHByZXNlbnRcbiAgLy8gb24gdGhpcy4kc2xvdHMgYmVjYXVzZSB0aGUgdXNhZ2UgaXMgc2VtYW50aWNhbGx5IGEgbm9ybWFsIHNsb3QuXG4gIGlmIChmbi5wcm94eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShub3JtYWxTbG90cywga2V5LCB7XG4gICAgICBnZXQ6IG5vcm1hbGl6ZWQsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWRcbn1cblxuZnVuY3Rpb24gcHJveHlOb3JtYWxTbG90KHNsb3RzLCBrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNsb3RzW2tleV07IH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyB2LWZvciBsaXN0cy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyTGlzdCAoXG4gIHZhbCxcbiAgcmVuZGVyXG4pIHtcbiAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXIodmFsW2ldLCBpKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdmFsOyBpKyspIHtcbiAgICAgIHJldFtpXSA9IHJlbmRlcihpICsgMSwgaSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KHZhbCkpIHtcbiAgICBpZiAoaGFzU3ltYm9sICYmIHZhbFtTeW1ib2wuaXRlcmF0b3JdKSB7XG4gICAgICByZXQgPSBbXTtcbiAgICAgIHZhciBpdGVyYXRvciA9IHZhbFtTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgICAgICByZXQucHVzaChyZW5kZXIocmVzdWx0LnZhbHVlLCByZXQubGVuZ3RoKSk7XG4gICAgICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgICByZXQgPSBuZXcgQXJyYXkoa2V5cy5sZW5ndGgpO1xuICAgICAgZm9yIChpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHJldFtpXSA9IHJlbmRlcih2YWxba2V5XSwga2V5LCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFpc0RlZihyZXQpKSB7XG4gICAgcmV0ID0gW107XG4gIH1cbiAgKHJldCkuX2lzVkxpc3QgPSB0cnVlO1xuICByZXR1cm4gcmV0XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgPHNsb3Q+XG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNsb3QgKFxuICBuYW1lLFxuICBmYWxsYmFjayxcbiAgcHJvcHMsXG4gIGJpbmRPYmplY3Rcbikge1xuICB2YXIgc2NvcGVkU2xvdEZuID0gdGhpcy4kc2NvcGVkU2xvdHNbbmFtZV07XG4gIHZhciBub2RlcztcbiAgaWYgKHNjb3BlZFNsb3RGbikgeyAvLyBzY29wZWQgc2xvdFxuICAgIHByb3BzID0gcHJvcHMgfHwge307XG4gICAgaWYgKGJpbmRPYmplY3QpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc09iamVjdChiaW5kT2JqZWN0KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdzbG90IHYtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0JyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XG4gICAgfVxuICAgIG5vZGVzID0gc2NvcGVkU2xvdEZuKHByb3BzKSB8fCBmYWxsYmFjaztcbiAgfSBlbHNlIHtcbiAgICBub2RlcyA9IHRoaXMuJHNsb3RzW25hbWVdIHx8IGZhbGxiYWNrO1xuICB9XG5cbiAgdmFyIHRhcmdldCA9IHByb3BzICYmIHByb3BzLnNsb3Q7XG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnLCB7IHNsb3Q6IHRhcmdldCB9LCBub2RlcylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUZpbHRlciAoaWQpIHtcbiAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNLZXlOb3RNYXRjaCAoZXhwZWN0LCBhY3R1YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXhwZWN0KSkge1xuICAgIHJldHVybiBleHBlY3QuaW5kZXhPZihhY3R1YWwpID09PSAtMVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHBlY3QgIT09IGFjdHVhbFxuICB9XG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIGNoZWNraW5nIGtleUNvZGVzIGZyb20gY29uZmlnLlxuICogZXhwb3NlZCBhcyBWdWUucHJvdG90eXBlLl9rXG4gKiBwYXNzaW5nIGluIGV2ZW50S2V5TmFtZSBhcyBsYXN0IGFyZ3VtZW50IHNlcGFyYXRlbHkgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAqL1xuZnVuY3Rpb24gY2hlY2tLZXlDb2RlcyAoXG4gIGV2ZW50S2V5Q29kZSxcbiAga2V5LFxuICBidWlsdEluS2V5Q29kZSxcbiAgZXZlbnRLZXlOYW1lLFxuICBidWlsdEluS2V5TmFtZVxuKSB7XG4gIHZhciBtYXBwZWRLZXlDb2RlID0gY29uZmlnLmtleUNvZGVzW2tleV0gfHwgYnVpbHRJbktleUNvZGU7XG4gIGlmIChidWlsdEluS2V5TmFtZSAmJiBldmVudEtleU5hbWUgJiYgIWNvbmZpZy5rZXlDb2Rlc1trZXldKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2goYnVpbHRJbktleU5hbWUsIGV2ZW50S2V5TmFtZSlcbiAgfSBlbHNlIGlmIChtYXBwZWRLZXlDb2RlKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2gobWFwcGVkS2V5Q29kZSwgZXZlbnRLZXlDb2RlKVxuICB9IGVsc2UgaWYgKGV2ZW50S2V5TmFtZSkge1xuICAgIHJldHVybiBoeXBoZW5hdGUoZXZlbnRLZXlOYW1lKSAhPT0ga2V5XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIG1lcmdpbmcgdi1iaW5kPVwib2JqZWN0XCIgaW50byBhIFZOb2RlJ3MgZGF0YS5cbiAqL1xuZnVuY3Rpb24gYmluZE9iamVjdFByb3BzIChcbiAgZGF0YSxcbiAgdGFnLFxuICB2YWx1ZSxcbiAgYXNQcm9wLFxuICBpc1N5bmNcbikge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3Qgb3IgQXJyYXkgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB0b09iamVjdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgaGFzaDtcbiAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdjbGFzcycgfHxcbiAgICAgICAgICBrZXkgPT09ICdzdHlsZScgfHxcbiAgICAgICAgICBpc1Jlc2VydmVkQXR0cmlidXRlKGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaGFzaCA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMudHlwZTtcbiAgICAgICAgICBoYXNoID0gYXNQcm9wIHx8IGNvbmZpZy5tdXN0VXNlUHJvcCh0YWcsIHR5cGUsIGtleSlcbiAgICAgICAgICAgID8gZGF0YS5kb21Qcm9wcyB8fCAoZGF0YS5kb21Qcm9wcyA9IHt9KVxuICAgICAgICAgICAgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW1lbGl6ZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICBpZiAoIShjYW1lbGl6ZWRLZXkgaW4gaGFzaCkgJiYgIShoeXBoZW5hdGVkS2V5IGluIGhhc2gpKSB7XG4gICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcblxuICAgICAgICAgIGlmIChpc1N5bmMpIHtcbiAgICAgICAgICAgIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gICAgICAgICAgICBvblsoXCJ1cGRhdGU6XCIgKyBrZXkpXSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFsdWVba2V5XSA9ICRldmVudDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIGxvb3AoIGtleSApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHN0YXRpYyB0cmVlcy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU3RhdGljIChcbiAgaW5kZXgsXG4gIGlzSW5Gb3Jcbikge1xuICB2YXIgY2FjaGVkID0gdGhpcy5fc3RhdGljVHJlZXMgfHwgKHRoaXMuX3N0YXRpY1RyZWVzID0gW10pO1xuICB2YXIgdHJlZSA9IGNhY2hlZFtpbmRleF07XG4gIC8vIGlmIGhhcyBhbHJlYWR5LXJlbmRlcmVkIHN0YXRpYyB0cmVlIGFuZCBub3QgaW5zaWRlIHYtZm9yLFxuICAvLyB3ZSBjYW4gcmV1c2UgdGhlIHNhbWUgdHJlZS5cbiAgaWYgKHRyZWUgJiYgIWlzSW5Gb3IpIHtcbiAgICByZXR1cm4gdHJlZVxuICB9XG4gIC8vIG90aGVyd2lzZSwgcmVuZGVyIGEgZnJlc2ggdHJlZS5cbiAgdHJlZSA9IGNhY2hlZFtpbmRleF0gPSB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbChcbiAgICB0aGlzLl9yZW5kZXJQcm94eSxcbiAgICBudWxsLFxuICAgIHRoaXMgLy8gZm9yIHJlbmRlciBmbnMgZ2VuZXJhdGVkIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCB0ZW1wbGF0ZXNcbiAgKTtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX3N0YXRpY19fXCIgKyBpbmRleCksIGZhbHNlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3Igdi1vbmNlLlxuICogRWZmZWN0aXZlbHkgaXQgbWVhbnMgbWFya2luZyB0aGUgbm9kZSBhcyBzdGF0aWMgd2l0aCBhIHVuaXF1ZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIG1hcmtPbmNlIChcbiAgdHJlZSxcbiAgaW5kZXgsXG4gIGtleVxuKSB7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19vbmNlX19cIiArIGluZGV4ICsgKGtleSA/IChcIl9cIiArIGtleSkgOiBcIlwiKSksIHRydWUpO1xuICByZXR1cm4gdHJlZVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljIChcbiAgdHJlZSxcbiAga2V5LFxuICBpc09uY2Vcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRyZWVbaV0gJiYgdHlwZW9mIHRyZWVbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1hcmtTdGF0aWNOb2RlKHRyZWVbaV0sIChrZXkgKyBcIl9cIiArIGkpLCBpc09uY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXJrU3RhdGljTm9kZSh0cmVlLCBrZXksIGlzT25jZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpY05vZGUgKG5vZGUsIGtleSwgaXNPbmNlKSB7XG4gIG5vZGUuaXNTdGF0aWMgPSB0cnVlO1xuICBub2RlLmtleSA9IGtleTtcbiAgbm9kZS5pc09uY2UgPSBpc09uY2U7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kT2JqZWN0TGlzdGVuZXJzIChkYXRhLCB2YWx1ZSkge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LW9uIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb24gPSBkYXRhLm9uID0gZGF0YS5vbiA/IGV4dGVuZCh7fSwgZGF0YS5vbikgOiB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBvbltrZXldO1xuICAgICAgICB2YXIgb3VycyA9IHZhbHVlW2tleV07XG4gICAgICAgIG9uW2tleV0gPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgb3VycykgOiBvdXJzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVNjb3BlZFNsb3RzIChcbiAgZm5zLCAvLyBzZWUgZmxvdy92bm9kZVxuICByZXMsXG4gIC8vIHRoZSBmb2xsb3dpbmcgYXJlIGFkZGVkIGluIDIuNlxuICBoYXNEeW5hbWljS2V5cyxcbiAgY29udGVudEhhc2hLZXlcbikge1xuICByZXMgPSByZXMgfHwgeyAkc3RhYmxlOiAhaGFzRHluYW1pY0tleXMgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2xvdCA9IGZuc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90KSkge1xuICAgICAgcmVzb2x2ZVNjb3BlZFNsb3RzKHNsb3QsIHJlcywgaGFzRHluYW1pY0tleXMpO1xuICAgIH0gZWxzZSBpZiAoc2xvdCkge1xuICAgICAgLy8gbWFya2VyIGZvciByZXZlcnNlIHByb3h5aW5nIHYtc2xvdCB3aXRob3V0IHNjb3BlIG9uIHRoaXMuJHNsb3RzXG4gICAgICBpZiAoc2xvdC5wcm94eSkge1xuICAgICAgICBzbG90LmZuLnByb3h5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJlc1tzbG90LmtleV0gPSBzbG90LmZuO1xuICAgIH1cbiAgfVxuICBpZiAoY29udGVudEhhc2hLZXkpIHtcbiAgICAocmVzKS4ka2V5ID0gY29udGVudEhhc2hLZXk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZER5bmFtaWNLZXlzIChiYXNlT2JqLCB2YWx1ZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICB2YXIga2V5ID0gdmFsdWVzW2ldO1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkpIHtcbiAgICAgIGJhc2VPYmpbdmFsdWVzW2ldXSA9IHZhbHVlc1tpICsgMV07XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSAhPT0gJycgJiYga2V5ICE9PSBudWxsKSB7XG4gICAgICAvLyBudWxsIGlzIGEgc3BlaWNhbCB2YWx1ZSBmb3IgZXhwbGljaXRseSByZW1vdmluZyBhIGJpbmRpbmdcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkludmFsaWQgdmFsdWUgZm9yIGR5bmFtaWMgZGlyZWN0aXZlIGFyZ3VtZW50IChleHBlY3RlZCBzdHJpbmcgb3IgbnVsbCk6IFwiICsga2V5KSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhc2VPYmpcbn1cblxuLy8gaGVscGVyIHRvIGR5bmFtaWNhbGx5IGFwcGVuZCBtb2RpZmllciBydW50aW1lIG1hcmtlcnMgdG8gZXZlbnQgbmFtZXMuXG4vLyBlbnN1cmUgb25seSBhcHBlbmQgd2hlbiB2YWx1ZSBpcyBhbHJlYWR5IHN0cmluZywgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgY2FzdFxuLy8gdG8gc3RyaW5nIGFuZCBjYXVzZSB0aGUgdHlwZSBjaGVjayB0byBtaXNzLlxuZnVuY3Rpb24gcHJlcGVuZE1vZGlmaWVyICh2YWx1ZSwgc3ltYm9sKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3ltYm9sICsgdmFsdWUgOiB2YWx1ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5zdGFsbFJlbmRlckhlbHBlcnMgKHRhcmdldCkge1xuICB0YXJnZXQuX28gPSBtYXJrT25jZTtcbiAgdGFyZ2V0Ll9uID0gdG9OdW1iZXI7XG4gIHRhcmdldC5fcyA9IHRvU3RyaW5nO1xuICB0YXJnZXQuX2wgPSByZW5kZXJMaXN0O1xuICB0YXJnZXQuX3QgPSByZW5kZXJTbG90O1xuICB0YXJnZXQuX3EgPSBsb29zZUVxdWFsO1xuICB0YXJnZXQuX2kgPSBsb29zZUluZGV4T2Y7XG4gIHRhcmdldC5fbSA9IHJlbmRlclN0YXRpYztcbiAgdGFyZ2V0Ll9mID0gcmVzb2x2ZUZpbHRlcjtcbiAgdGFyZ2V0Ll9rID0gY2hlY2tLZXlDb2RlcztcbiAgdGFyZ2V0Ll9iID0gYmluZE9iamVjdFByb3BzO1xuICB0YXJnZXQuX3YgPSBjcmVhdGVUZXh0Vk5vZGU7XG4gIHRhcmdldC5fZSA9IGNyZWF0ZUVtcHR5Vk5vZGU7XG4gIHRhcmdldC5fdSA9IHJlc29sdmVTY29wZWRTbG90cztcbiAgdGFyZ2V0Ll9nID0gYmluZE9iamVjdExpc3RlbmVycztcbiAgdGFyZ2V0Ll9kID0gYmluZER5bmFtaWNLZXlzO1xuICB0YXJnZXQuX3AgPSBwcmVwZW5kTW9kaWZpZXI7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCAoXG4gIGRhdGEsXG4gIHByb3BzLFxuICBjaGlsZHJlbixcbiAgcGFyZW50LFxuICBDdG9yXG4pIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIC8vIGVuc3VyZSB0aGUgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbiAgLy8gZ2V0cyBhIHVuaXF1ZSBjb250ZXh0IC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNvcnJlY3QgbmFtZWQgc2xvdCBjaGVja1xuICB2YXIgY29udGV4dFZtO1xuICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xuICAgIGNvbnRleHRWbSA9IE9iamVjdC5jcmVhdGUocGFyZW50KTtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBjb250ZXh0Vm0uX29yaWdpbmFsID0gcGFyZW50O1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjb250ZXh0IHZtIHBhc3NlZCBpbiBpcyBhIGZ1bmN0aW9uYWwgY29udGV4dCBhcyB3ZWxsLlxuICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBhcmUgYWJsZSB0byBnZXQgYSBob2xkIHRvIHRoZVxuICAgIC8vIHJlYWwgY29udGV4dCBpbnN0YW5jZS5cbiAgICBjb250ZXh0Vm0gPSBwYXJlbnQ7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcGFyZW50ID0gcGFyZW50Ll9vcmlnaW5hbDtcbiAgfVxuICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XG4gIHZhciBuZWVkTm9ybWFsaXphdGlvbiA9ICFpc0NvbXBpbGVkO1xuXG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5saXN0ZW5lcnMgPSBkYXRhLm9uIHx8IGVtcHR5T2JqZWN0O1xuICB0aGlzLmluamVjdGlvbnMgPSByZXNvbHZlSW5qZWN0KG9wdGlvbnMuaW5qZWN0LCBwYXJlbnQpO1xuICB0aGlzLnNsb3RzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcyQxLiRzbG90cykge1xuICAgICAgbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIGRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHRoaXMkMS4kc2xvdHMgPSByZXNvbHZlU2xvdHMoY2hpbGRyZW4sIHBhcmVudClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzJDEuJHNsb3RzXG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzY29wZWRTbG90cycsICh7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy5zbG90cygpKVxuICAgIH1cbiAgfSkpO1xuXG4gIC8vIHN1cHBvcnQgZm9yIGNvbXBpbGVkIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGlzQ29tcGlsZWQpIHtcbiAgICAvLyBleHBvc2luZyAkb3B0aW9ucyBmb3IgcmVuZGVyU3RhdGljKClcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXG4gICAgdGhpcy4kc2xvdHMgPSB0aGlzLnNsb3RzKCk7XG4gICAgdGhpcy4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLiRzbG90cyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5fc2NvcGVJZCkge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgICAgdmFyIHZub2RlID0gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTtcbiAgICAgIGlmICh2bm9kZSAmJiAhQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgdm5vZGUuZm5TY29wZUlkID0gb3B0aW9ucy5fc2NvcGVJZDtcbiAgICAgICAgdm5vZGUuZm5Db250ZXh0ID0gcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZub2RlXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7IH07XG4gIH1cbn1cblxuaW5zdGFsbFJlbmRlckhlbHBlcnMoRnVuY3Rpb25hbFJlbmRlckNvbnRleHQucHJvdG90eXBlKTtcblxuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCAoXG4gIEN0b3IsXG4gIHByb3BzRGF0YSxcbiAgZGF0YSxcbiAgY29udGV4dFZtLFxuICBjaGlsZHJlblxuKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHByb3BPcHRpb25zID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzRGVmKHByb3BPcHRpb25zKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEgfHwgZW1wdHlPYmplY3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNEZWYoZGF0YS5hdHRycykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5hdHRycyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YS5wcm9wcykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5wcm9wcyk7IH1cbiAgfVxuXG4gIHZhciByZW5kZXJDb250ZXh0ID0gbmV3IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0KFxuICAgIGRhdGEsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgY29udGV4dFZtLFxuICAgIEN0b3JcbiAgKTtcblxuICB2YXIgdm5vZGUgPSBvcHRpb25zLnJlbmRlci5jYWxsKG51bGwsIHJlbmRlckNvbnRleHQuX2MsIHJlbmRlckNvbnRleHQpO1xuXG4gIGlmICh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGUsIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgdmFyIHZub2RlcyA9IG5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlKSB8fCBbXTtcbiAgICB2YXIgcmVzID0gbmV3IEFycmF5KHZub2Rlcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXNbaV0gPSBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2Rlc1tpXSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCAodm5vZGUsIGRhdGEsIGNvbnRleHRWbSwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCkge1xuICAvLyAjNzgxNyBjbG9uZSBub2RlIGJlZm9yZSBzZXR0aW5nIGZuQ29udGV4dCwgb3RoZXJ3aXNlIGlmIHRoZSBub2RlIGlzIHJldXNlZFxuICAvLyAoZS5nLiBpdCB3YXMgZnJvbSBhIGNhY2hlZCBub3JtYWwgc2xvdCkgdGhlIGZuQ29udGV4dCBjYXVzZXMgbmFtZWQgc2xvdHNcbiAgLy8gdGhhdCBzaG91bGQgbm90IGJlIG1hdGNoZWQgdG8gbWF0Y2guXG4gIHZhciBjbG9uZSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICBjbG9uZS5mbkNvbnRleHQgPSBjb250ZXh0Vm07XG4gIGNsb25lLmZuT3B0aW9ucyA9IG9wdGlvbnM7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgKGNsb25lLmRldnRvb2xzTWV0YSA9IGNsb25lLmRldnRvb2xzTWV0YSB8fCB7fSkucmVuZGVyQ29udGV4dCA9IHJlbmRlckNvbnRleHQ7XG4gIH1cbiAgaWYgKGRhdGEuc2xvdCkge1xuICAgIChjbG9uZS5kYXRhIHx8IChjbG9uZS5kYXRhID0ge30pKS5zbG90ID0gZGF0YS5zbG90O1xuICB9XG4gIHJldHVybiBjbG9uZVxufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0bywgZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgIHRvW2NhbWVsaXplKGtleSldID0gZnJvbVtrZXldO1xuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbmxpbmUgaG9va3MgdG8gYmUgaW52b2tlZCBvbiBjb21wb25lbnQgVk5vZGVzIGR1cmluZyBwYXRjaFxudmFyIGNvbXBvbmVudFZOb2RlSG9va3MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQgKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICBpZiAoXG4gICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJlxuICAgICAgIXZub2RlLmNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCAmJlxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmVcbiAgICApIHtcbiAgICAgIC8vIGtlcHQtYWxpdmUgY29tcG9uZW50cywgdHJlYXQgYXMgYSBwYXRjaFxuICAgICAgdmFyIG1vdW50ZWROb2RlID0gdm5vZGU7IC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICAgIGNvbXBvbmVudFZOb2RlSG9va3MucHJlcGF0Y2gobW91bnRlZE5vZGUsIG1vdW50ZWROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlKFxuICAgICAgICB2bm9kZSxcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VcbiAgICAgICk7XG4gICAgICBjaGlsZC4kbW91bnQoaHlkcmF0aW5nID8gdm5vZGUuZWxtIDogdW5kZWZpbmVkLCBoeWRyYXRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50KFxuICAgICAgY2hpbGQsXG4gICAgICBvcHRpb25zLnByb3BzRGF0YSwgLy8gdXBkYXRlZCBwcm9wc1xuICAgICAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXG4gICAgICB2bm9kZSwgLy8gbmV3IHBhcmVudCB2bm9kZVxuICAgICAgb3B0aW9ucy5jaGlsZHJlbiAvLyBuZXcgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0ICh2bm9kZSkge1xuICAgIHZhciBjb250ZXh0ID0gdm5vZGUuY29udGV4dDtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQpIHtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdtb3VudGVkJyk7XG4gICAgfVxuICAgIGlmICh2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgaWYgKGNvbnRleHQuX2lzTW91bnRlZCkge1xuICAgICAgICAvLyB2dWUtcm91dGVyIzEyMTJcbiAgICAgICAgLy8gRHVyaW5nIHVwZGF0ZXMsIGEga2VwdC1hbGl2ZSBjb21wb25lbnQncyBjaGlsZCBjb21wb25lbnRzIG1heVxuICAgICAgICAvLyBjaGFuZ2UsIHNvIGRpcmVjdGx5IHdhbGtpbmcgdGhlIHRyZWUgaGVyZSBtYXkgY2FsbCBhY3RpdmF0ZWQgaG9va3NcbiAgICAgICAgLy8gb24gaW5jb3JyZWN0IGNoaWxkcmVuLiBJbnN0ZWFkIHdlIHB1c2ggdGhlbSBpbnRvIGEgcXVldWUgd2hpY2ggd2lsbFxuICAgICAgICAvLyBiZSBwcm9jZXNzZWQgYWZ0ZXIgdGhlIHdob2xlIHBhdGNoIHByb2Nlc3MgZW5kZWQuXG4gICAgICAgIHF1ZXVlQWN0aXZhdGVkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSAodm5vZGUpIHtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgaWYgKCF2bm9kZS5kYXRhLmtlZXBBbGl2ZSkge1xuICAgICAgICBjb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVhY3RpdmF0ZUNoaWxkQ29tcG9uZW50KGNvbXBvbmVudEluc3RhbmNlLCB0cnVlIC8qIGRpcmVjdCAqLyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaG9va3NUb01lcmdlID0gT2JqZWN0LmtleXMoY29tcG9uZW50Vk5vZGVIb29rcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAoXG4gIEN0b3IsXG4gIGRhdGEsXG4gIGNvbnRleHQsXG4gIGNoaWxkcmVuLFxuICB0YWdcbikge1xuICBpZiAoaXNVbmRlZihDdG9yKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGJhc2VDdG9yID0gY29udGV4dC4kb3B0aW9ucy5fYmFzZTtcblxuICAvLyBwbGFpbiBvcHRpb25zIG9iamVjdDogdHVybiBpdCBpbnRvIGEgY29uc3RydWN0b3JcbiAgaWYgKGlzT2JqZWN0KEN0b3IpKSB7XG4gICAgQ3RvciA9IGJhc2VDdG9yLmV4dGVuZChDdG9yKTtcbiAgfVxuXG4gIC8vIGlmIGF0IHRoaXMgc3RhZ2UgaXQncyBub3QgYSBjb25zdHJ1Y3RvciBvciBhbiBhc3luYyBjb21wb25lbnQgZmFjdG9yeSxcbiAgLy8gcmVqZWN0LlxuICBpZiAodHlwZW9mIEN0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybigoXCJJbnZhbGlkIENvbXBvbmVudCBkZWZpbml0aW9uOiBcIiArIChTdHJpbmcoQ3RvcikpKSwgY29udGV4dCk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gYXN5bmMgY29tcG9uZW50XG4gIHZhciBhc3luY0ZhY3Rvcnk7XG4gIGlmIChpc1VuZGVmKEN0b3IuY2lkKSkge1xuICAgIGFzeW5jRmFjdG9yeSA9IEN0b3I7XG4gICAgQ3RvciA9IHJlc29sdmVBc3luY0NvbXBvbmVudChhc3luY0ZhY3RvcnksIGJhc2VDdG9yKTtcbiAgICBpZiAoQ3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyByZXR1cm4gYSBwbGFjZWhvbGRlciBub2RlIGZvciBhc3luYyBjb21wb25lbnQsIHdoaWNoIGlzIHJlbmRlcmVkXG4gICAgICAvLyBhcyBhIGNvbW1lbnQgbm9kZSBidXQgcHJlc2VydmVzIGFsbCB0aGUgcmF3IGluZm9ybWF0aW9uIGZvciB0aGUgbm9kZS5cbiAgICAgIC8vIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHVzZWQgZm9yIGFzeW5jIHNlcnZlci1yZW5kZXJpbmcgYW5kIGh5ZHJhdGlvbi5cbiAgICAgIHJldHVybiBjcmVhdGVBc3luY1BsYWNlaG9sZGVyKFxuICAgICAgICBhc3luY0ZhY3RvcnksXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNoaWxkcmVuLFxuICAgICAgICB0YWdcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBkYXRhID0gZGF0YSB8fCB7fTtcblxuICAvLyByZXNvbHZlIGNvbnN0cnVjdG9yIG9wdGlvbnMgaW4gY2FzZSBnbG9iYWwgbWl4aW5zIGFyZSBhcHBsaWVkIGFmdGVyXG4gIC8vIGNvbXBvbmVudCBjb25zdHJ1Y3RvciBjcmVhdGlvblxuICByZXNvbHZlQ29uc3RydWN0b3JPcHRpb25zKEN0b3IpO1xuXG4gIC8vIHRyYW5zZm9ybSBjb21wb25lbnQgdi1tb2RlbCBkYXRhIGludG8gcHJvcHMgJiBldmVudHNcbiAgaWYgKGlzRGVmKGRhdGEubW9kZWwpKSB7XG4gICAgdHJhbnNmb3JtTW9kZWwoQ3Rvci5vcHRpb25zLCBkYXRhKTtcbiAgfVxuXG4gIC8vIGV4dHJhY3QgcHJvcHNcbiAgdmFyIHByb3BzRGF0YSA9IGV4dHJhY3RQcm9wc0Zyb21WTm9kZURhdGEoZGF0YSwgQ3RvciwgdGFnKTtcblxuICAvLyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xuICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50KEN0b3IsIHByb3BzRGF0YSwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pXG4gIH1cblxuICAvLyBleHRyYWN0IGxpc3RlbmVycywgc2luY2UgdGhlc2UgbmVlZHMgdG8gYmUgdHJlYXRlZCBhc1xuICAvLyBjaGlsZCBjb21wb25lbnQgbGlzdGVuZXJzIGluc3RlYWQgb2YgRE9NIGxpc3RlbmVyc1xuICB2YXIgbGlzdGVuZXJzID0gZGF0YS5vbjtcbiAgLy8gcmVwbGFjZSB3aXRoIGxpc3RlbmVycyB3aXRoIC5uYXRpdmUgbW9kaWZpZXJcbiAgLy8gc28gaXQgZ2V0cyBwcm9jZXNzZWQgZHVyaW5nIHBhcmVudCBjb21wb25lbnQgcGF0Y2guXG4gIGRhdGEub24gPSBkYXRhLm5hdGl2ZU9uO1xuXG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmFic3RyYWN0KSkge1xuICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcbiAgICAvLyBvdGhlciB0aGFuIHByb3BzICYgbGlzdGVuZXJzICYgc2xvdFxuXG4gICAgLy8gd29yayBhcm91bmQgZmxvd1xuICAgIHZhciBzbG90ID0gZGF0YS5zbG90O1xuICAgIGRhdGEgPSB7fTtcbiAgICBpZiAoc2xvdCkge1xuICAgICAgZGF0YS5zbG90ID0gc2xvdDtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YWxsIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcbiAgaW5zdGFsbENvbXBvbmVudEhvb2tzKGRhdGEpO1xuXG4gIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG4gIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICB2YXIgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgKFwidnVlLWNvbXBvbmVudC1cIiArIChDdG9yLmNpZCkgKyAobmFtZSA/IChcIi1cIiArIG5hbWUpIDogJycpKSxcbiAgICBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LFxuICAgIHsgQ3RvcjogQ3RvciwgcHJvcHNEYXRhOiBwcm9wc0RhdGEsIGxpc3RlbmVyczogbGlzdGVuZXJzLCB0YWc6IHRhZywgY2hpbGRyZW46IGNoaWxkcmVuIH0sXG4gICAgYXN5bmNGYWN0b3J5XG4gICk7XG5cbiAgcmV0dXJuIHZub2RlXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUgKFxuICB2bm9kZSwgLy8gd2Uga25vdyBpdCdzIE1vdW50ZWRDb21wb25lbnRWTm9kZSBidXQgZmxvdyBkb2Vzbid0XG4gIHBhcmVudCAvLyBhY3RpdmVJbnN0YW5jZSBpbiBsaWZlY3ljbGUgc3RhdGVcbikge1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBfaXNDb21wb25lbnQ6IHRydWUsXG4gICAgX3BhcmVudFZub2RlOiB2bm9kZSxcbiAgICBwYXJlbnQ6IHBhcmVudFxuICB9O1xuICAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGUgcmVuZGVyIGZ1bmN0aW9uc1xuICB2YXIgaW5saW5lVGVtcGxhdGUgPSB2bm9kZS5kYXRhLmlubGluZVRlbXBsYXRlO1xuICBpZiAoaXNEZWYoaW5saW5lVGVtcGxhdGUpKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBpbmxpbmVUZW1wbGF0ZS5yZW5kZXI7XG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBpbmxpbmVUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbiAgcmV0dXJuIG5ldyB2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gaW5zdGFsbENvbXBvbmVudEhvb2tzIChkYXRhKSB7XG4gIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzVG9NZXJnZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBob29rc1RvTWVyZ2VbaV07XG4gICAgdmFyIGV4aXN0aW5nID0gaG9va3Nba2V5XTtcbiAgICB2YXIgdG9NZXJnZSA9IGNvbXBvbmVudFZOb2RlSG9va3Nba2V5XTtcbiAgICBpZiAoZXhpc3RpbmcgIT09IHRvTWVyZ2UgJiYgIShleGlzdGluZyAmJiBleGlzdGluZy5fbWVyZ2VkKSkge1xuICAgICAgaG9va3Nba2V5XSA9IGV4aXN0aW5nID8gbWVyZ2VIb29rJDEodG9NZXJnZSwgZXhpc3RpbmcpIDogdG9NZXJnZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VIb29rJDEgKGYxLCBmMikge1xuICB2YXIgbWVyZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyBmbG93IGNvbXBsYWlucyBhYm91dCBleHRyYSBhcmdzIHdoaWNoIGlzIHdoeSB3ZSB1c2UgYW55XG4gICAgZjEoYSwgYik7XG4gICAgZjIoYSwgYik7XG4gIH07XG4gIG1lcmdlZC5fbWVyZ2VkID0gdHJ1ZTtcbiAgcmV0dXJuIG1lcmdlZFxufVxuXG4vLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgaW5mbyAodmFsdWUgYW5kIGNhbGxiYWNrKSBpbnRvXG4vLyBwcm9wIGFuZCBldmVudCBoYW5kbGVyIHJlc3BlY3RpdmVseS5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsIChvcHRpb25zLCBkYXRhKSB7XG4gIHZhciBwcm9wID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5wcm9wKSB8fCAndmFsdWUnO1xuICB2YXIgZXZlbnQgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLmV2ZW50KSB8fCAnaW5wdXQnXG4gIDsoZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KSlbcHJvcF0gPSBkYXRhLm1vZGVsLnZhbHVlO1xuICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICB2YXIgZXhpc3RpbmcgPSBvbltldmVudF07XG4gIHZhciBjYWxsYmFjayA9IGRhdGEubW9kZWwuY2FsbGJhY2s7XG4gIGlmIChpc0RlZihleGlzdGluZykpIHtcbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KGV4aXN0aW5nKVxuICAgICAgICA/IGV4aXN0aW5nLmluZGV4T2YoY2FsbGJhY2spID09PSAtMVxuICAgICAgICA6IGV4aXN0aW5nICE9PSBjYWxsYmFja1xuICAgICkge1xuICAgICAgb25bZXZlbnRdID0gW2NhbGxiYWNrXS5jb25jYXQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvbltldmVudF0gPSBjYWxsYmFjaztcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIFNJTVBMRV9OT1JNQUxJWkUgPSAxO1xudmFyIEFMV0FZU19OT1JNQUxJWkUgPSAyO1xuXG4vLyB3cmFwcGVyIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYSBtb3JlIGZsZXhpYmxlIGludGVyZmFjZVxuLy8gd2l0aG91dCBnZXR0aW5nIHllbGxlZCBhdCBieSBmbG93XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGUsXG4gIGFsd2F5c05vcm1hbGl6ZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzUHJpbWl0aXZlKGRhdGEpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBjaGlsZHJlbjtcbiAgICBjaGlsZHJlbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoaXNUcnVlKGFsd2F5c05vcm1hbGl6ZSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IEFMV0FZU19OT1JNQUxJWkU7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KGNvbnRleHQsIHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlXG4pIHtcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKChkYXRhKS5fX29iX18pKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcbiAgICAgICdBbHdheXMgY3JlYXRlIGZyZXNoIHZub2RlIGRhdGEgb2JqZWN0cyBpbiBlYWNoIHJlbmRlciEnLFxuICAgICAgY29udGV4dFxuICAgICk7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmlzKSkge1xuICAgIHRhZyA9IGRhdGEuaXM7XG4gIH1cbiAgaWYgKCF0YWcpIHtcbiAgICAvLyBpbiBjYXNlIG9mIGNvbXBvbmVudCA6aXMgc2V0IHRvIGZhbHN5IHZhbHVlXG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tcHJpbWl0aXZlIGtleVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEua2V5KSAmJiAhaXNQcmltaXRpdmUoZGF0YS5rZXkpXG4gICkge1xuICAgIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCB1c2luZyBub24tcHJpbWl0aXZlIHZhbHVlIGFzIGtleSwgJyArXG4gICAgICAgICd1c2Ugc3RyaW5nL251bWJlciB2YWx1ZSBpbnN0ZWFkLicsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIHN1cHBvcnQgc2luZ2xlIGZ1bmN0aW9uIGNoaWxkcmVuIGFzIGRlZmF1bHQgc2NvcGVkIHNsb3RcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgdHlwZW9mIGNoaWxkcmVuWzBdID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIGRhdGEuc2NvcGVkU2xvdHMgPSB7IGRlZmF1bHQ6IGNoaWxkcmVuWzBdIH07XG4gICAgY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgfVxuICBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IEFMV0FZU19OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gU0lNUExFX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9XG4gIHZhciB2bm9kZSwgbnM7XG4gIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xuICAgIHZhciBDdG9yO1xuICAgIG5zID0gKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLm5zKSB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG4gICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIC8vIHBsYXRmb3JtIGJ1aWx0LWluIGVsZW1lbnRzXG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCghZGF0YSB8fCAhZGF0YS5wcmUpICYmIGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgLy8gY29tcG9uZW50XG4gICAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudChDdG9yLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdW5rbm93biBvciB1bmxpc3RlZCBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gICAgICAvLyBjaGVjayBhdCBydW50aW1lIGJlY2F1c2UgaXQgbWF5IGdldCBhc3NpZ25lZCBhIG5hbWVzcGFjZSB3aGVuIGl0c1xuICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICB0YWcsIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZGlyZWN0IGNvbXBvbmVudCBvcHRpb25zIC8gY29uc3RydWN0b3JcbiAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudCh0YWcsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICBpZiAoaXNEZWYobnMpKSB7IGFwcGx5TlModm5vZGUsIG5zKTsgfVxuICAgIGlmIChpc0RlZihkYXRhKSkgeyByZWdpc3RlckRlZXBCaW5kaW5ncyhkYXRhKTsgfVxuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseU5TICh2bm9kZSwgbnMsIGZvcmNlKSB7XG4gIHZub2RlLm5zID0gbnM7XG4gIGlmICh2bm9kZS50YWcgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgIC8vIHVzZSBkZWZhdWx0IG5hbWVzcGFjZSBpbnNpZGUgZm9yZWlnbk9iamVjdFxuICAgIG5zID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXNEZWYodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKFxuICAgICAgICBpc1VuZGVmKGNoaWxkLm5zKSB8fCAoaXNUcnVlKGZvcmNlKSAmJiBjaGlsZC50YWcgIT09ICdzdmcnKSkpIHtcbiAgICAgICAgYXBwbHlOUyhjaGlsZCwgbnMsIGZvcmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gcmVmICM1MzE4XG4vLyBuZWNlc3NhcnkgdG8gZW5zdXJlIHBhcmVudCByZS1yZW5kZXIgd2hlbiBkZWVwIGJpbmRpbmdzIGxpa2UgOnN0eWxlIGFuZFxuLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyRGVlcEJpbmRpbmdzIChkYXRhKSB7XG4gIGlmIChpc09iamVjdChkYXRhLnN0eWxlKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xuICB9XG4gIGlmIChpc09iamVjdChkYXRhLmNsYXNzKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UmVuZGVyICh2bSkge1xuICB2bS5fdm5vZGUgPSBudWxsOyAvLyB0aGUgcm9vdCBvZiB0aGUgY2hpbGQgdHJlZVxuICB2bS5fc3RhdGljVHJlZXMgPSBudWxsOyAvLyB2LW9uY2UgY2FjaGVkIHRyZWVzXG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gIHZhciBwYXJlbnRWbm9kZSA9IHZtLiR2bm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlOyAvLyB0aGUgcGxhY2Vob2xkZXIgbm9kZSBpbiBwYXJlbnQgdHJlZVxuICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiwgcmVuZGVyQ29udGV4dCk7XG4gIHZtLiRzY29wZWRTbG90cyA9IGVtcHR5T2JqZWN0O1xuICAvLyBiaW5kIHRoZSBjcmVhdGVFbGVtZW50IGZuIHRvIHRoaXMgaW5zdGFuY2VcbiAgLy8gc28gdGhhdCB3ZSBnZXQgcHJvcGVyIHJlbmRlciBjb250ZXh0IGluc2lkZSBpdC5cbiAgLy8gYXJncyBvcmRlcjogdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUsIGFsd2F5c05vcm1hbGl6ZVxuICAvLyBpbnRlcm5hbCB2ZXJzaW9uIGlzIHVzZWQgYnkgcmVuZGVyIGZ1bmN0aW9ucyBjb21waWxlZCBmcm9tIHRlbXBsYXRlc1xuICB2bS5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCBmYWxzZSk7IH07XG4gIC8vIG5vcm1hbGl6YXRpb24gaXMgYWx3YXlzIGFwcGxpZWQgZm9yIHRoZSBwdWJsaWMgdmVyc2lvbiwgdXNlZCBpblxuICAvLyB1c2VyLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucy5cbiAgdm0uJGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgdHJ1ZSk7IH07XG5cbiAgLy8gJGF0dHJzICYgJGxpc3RlbmVycyBhcmUgZXhwb3NlZCBmb3IgZWFzaWVyIEhPQyBjcmVhdGlvbi5cbiAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuICB2YXIgcGFyZW50RGF0YSA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmRhdGE7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbmRlck1peGluIChWdWUpIHtcbiAgLy8gaW5zdGFsbCBydW50aW1lIGNvbnZlbmllbmNlIGhlbHBlcnNcbiAgaW5zdGFsbFJlbmRlckhlbHBlcnMoVnVlLnByb3RvdHlwZSk7XG5cbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gbmV4dFRpY2soZm4sIHRoaXMpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHJlZiA9IHZtLiRvcHRpb25zO1xuICAgIHZhciByZW5kZXIgPSByZWYucmVuZGVyO1xuICAgIHZhciBfcGFyZW50Vm5vZGUgPSByZWYuX3BhcmVudFZub2RlO1xuXG4gICAgaWYgKF9wYXJlbnRWbm9kZSkge1xuICAgICAgdm0uJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIF9wYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICB2bS4kc2xvdHMsXG4gICAgICAgIHZtLiRzY29wZWRTbG90c1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgcGFyZW50IHZub2RlLiB0aGlzIGFsbG93cyByZW5kZXIgZnVuY3Rpb25zIHRvIGhhdmUgYWNjZXNzXG4gICAgLy8gdG8gdGhlIGRhdGEgb24gdGhlIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgdm0uJHZub2RlID0gX3BhcmVudFZub2RlO1xuICAgIC8vIHJlbmRlciBzZWxmXG4gICAgdmFyIHZub2RlO1xuICAgIHRyeSB7XG4gICAgICAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gbWFpbnRhaW4gYSBzdGFjayBiZWNhdWVzIGFsbCByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHNlcGFyYXRlbHkgZnJvbSBvbmUgYW5vdGhlci4gTmVzdGVkIGNvbXBvbmVudCdzIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gd2hlbiBwYXJlbnQgY29tcG9uZW50IGlzIHBhdGNoZWQuXG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSB2bTtcbiAgICAgIHZub2RlID0gcmVuZGVyLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyXCIpO1xuICAgICAgLy8gcmV0dXJuIGVycm9yIHJlbmRlciByZXN1bHQsXG4gICAgICAvLyBvciBwcmV2aW91cyB2bm9kZSB0byBwcmV2ZW50IHJlbmRlciBlcnJvciBjYXVzaW5nIGJsYW5rIGNvbXBvbmVudFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHZtLiRvcHRpb25zLnJlbmRlckVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdm5vZGUgPSB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQsIGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyRXJyb3JcIik7XG4gICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgcmV0dXJuZWQgYXJyYXkgY29udGFpbnMgb25seSBhIHNpbmdsZSBub2RlLCBhbGxvdyBpdFxuICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSAmJiB2bm9kZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZub2RlID0gdm5vZGVbMF07XG4gICAgfVxuICAgIC8vIHJldHVybiBlbXB0eSB2bm9kZSBpbiBjYXNlIHRoZSByZW5kZXIgZnVuY3Rpb24gZXJyb3JlZCBvdXRcbiAgICBpZiAoISh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnTXVsdGlwbGUgcm9vdCBub2RlcyByZXR1cm5lZCBmcm9tIHJlbmRlciBmdW5jdGlvbi4gUmVuZGVyIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICdzaG91bGQgcmV0dXJuIGEgc2luZ2xlIHJvb3Qgbm9kZS4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICB9XG4gICAgLy8gc2V0IHBhcmVudFxuICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICByZXR1cm4gdm5vZGVcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVuc3VyZUN0b3IgKGNvbXAsIGJhc2UpIHtcbiAgaWYgKFxuICAgIGNvbXAuX19lc01vZHVsZSB8fFxuICAgIChoYXNTeW1ib2wgJiYgY29tcFtTeW1ib2wudG9TdHJpbmdUYWddID09PSAnTW9kdWxlJylcbiAgKSB7XG4gICAgY29tcCA9IGNvbXAuZGVmYXVsdDtcbiAgfVxuICByZXR1cm4gaXNPYmplY3QoY29tcClcbiAgICA/IGJhc2UuZXh0ZW5kKGNvbXApXG4gICAgOiBjb21wXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIgKFxuICBmYWN0b3J5LFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgdmFyIG5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gIG5vZGUuYXN5bmNGYWN0b3J5ID0gZmFjdG9yeTtcbiAgbm9kZS5hc3luY01ldGEgPSB7IGRhdGE6IGRhdGEsIGNvbnRleHQ6IGNvbnRleHQsIGNoaWxkcmVuOiBjaGlsZHJlbiwgdGFnOiB0YWcgfTtcbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50IChcbiAgZmFjdG9yeSxcbiAgYmFzZUN0b3Jcbikge1xuICBpZiAoaXNUcnVlKGZhY3RvcnkuZXJyb3IpICYmIGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmVycm9yQ29tcFxuICB9XG5cbiAgaWYgKGlzRGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxuXG4gIHZhciBvd25lciA9IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZTtcbiAgaWYgKG93bmVyICYmIGlzRGVmKGZhY3Rvcnkub3duZXJzKSAmJiBmYWN0b3J5Lm93bmVycy5pbmRleE9mKG93bmVyKSA9PT0gLTEpIHtcbiAgICAvLyBhbHJlYWR5IHBlbmRpbmdcbiAgICBmYWN0b3J5Lm93bmVycy5wdXNoKG93bmVyKTtcbiAgfVxuXG4gIGlmIChpc1RydWUoZmFjdG9yeS5sb2FkaW5nKSAmJiBpc0RlZihmYWN0b3J5LmxvYWRpbmdDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdDb21wXG4gIH1cblxuICBpZiAob3duZXIgJiYgIWlzRGVmKGZhY3Rvcnkub3duZXJzKSkge1xuICAgIHZhciBvd25lcnMgPSBmYWN0b3J5Lm93bmVycyA9IFtvd25lcl07XG4gICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgIHZhciB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgIHZhciB0aW1lclRpbWVvdXQgPSBudWxsXG5cbiAgICA7KG93bmVyKS4kb24oJ2hvb2s6ZGVzdHJveWVkJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlKG93bmVycywgb3duZXIpOyB9KTtcblxuICAgIHZhciBmb3JjZVJlbmRlciA9IGZ1bmN0aW9uIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb3duZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAob3duZXJzW2ldKS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKHRpbWVyTG9hZGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lckxvYWRpbmcpO1xuICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVyVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmUgPSBvbmNlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICBmYWN0b3J5LnJlc29sdmVkID0gZW5zdXJlQ3RvcihyZXMsIGJhc2VDdG9yKTtcbiAgICAgIC8vIGludm9rZSBjYWxsYmFja3Mgb25seSBpZiB0aGlzIGlzIG5vdCBhIHN5bmNocm9ub3VzIHJlc29sdmVcbiAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgaWYgKCFzeW5jKSB7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVqZWN0ID0gb25jZShmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50OiBcIiArIChTdHJpbmcoZmFjdG9yeSkpICtcbiAgICAgICAgKHJlYXNvbiA/IChcIlxcblJlYXNvbjogXCIgKyByZWFzb24pIDogJycpXG4gICAgICApO1xuICAgICAgaWYgKGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgICAgICBmYWN0b3J5LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVzID0gZmFjdG9yeShyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgaWYgKGlzT2JqZWN0KHJlcykpIHtcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAvLyAoKSA9PiBQcm9taXNlXG4gICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UocmVzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5lcnJvcikpIHtcbiAgICAgICAgICBmYWN0b3J5LmVycm9yQ29tcCA9IGVuc3VyZUN0b3IocmVzLmVycm9yLCBiYXNlQ3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLmxvYWRpbmcpKSB7XG4gICAgICAgICAgZmFjdG9yeS5sb2FkaW5nQ29tcCA9IGVuc3VyZUN0b3IocmVzLmxvYWRpbmcsIGJhc2VDdG9yKTtcbiAgICAgICAgICBpZiAocmVzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkgJiYgaXNVbmRlZihmYWN0b3J5LmVycm9yKSkge1xuICAgICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXIoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZXMuZGVsYXkgfHwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLnRpbWVvdXQpKSB7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICAgICAgICAgICAgICAgID8gKFwidGltZW91dCAoXCIgKyAocmVzLnRpbWVvdXQpICsgXCJtcylcIilcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN5bmMgPSBmYWxzZTtcbiAgICAvLyByZXR1cm4gaW4gY2FzZSByZXNvbHZlZCBzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ1xuICAgICAgPyBmYWN0b3J5LmxvYWRpbmdDb21wXG4gICAgICA6IGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNBc3luY1BsYWNlaG9sZGVyIChub2RlKSB7XG4gIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjKSAmJiAoaXNEZWYoYy5jb21wb25lbnRPcHRpb25zKSB8fCBpc0FzeW5jUGxhY2Vob2xkZXIoYykpKSB7XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZtLl9oYXNIb29rRXZlbnQgPSBmYWxzZTtcbiAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gIHZhciBsaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICB9XG59XG5cbnZhciB0YXJnZXQ7XG5cbmZ1bmN0aW9uIGFkZCAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb24oZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlJDEgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9mZihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPbmNlSGFuZGxlciAoZXZlbnQsIGZuKSB7XG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0O1xuICByZXR1cm4gZnVuY3Rpb24gb25jZUhhbmRsZXIgKCkge1xuICAgIHZhciByZXMgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIF90YXJnZXQuJG9mZihldmVudCwgb25jZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMgKFxuICB2bSxcbiAgbGlzdGVuZXJzLFxuICBvbGRMaXN0ZW5lcnNcbikge1xuICB0YXJnZXQgPSB2bTtcbiAgdXBkYXRlTGlzdGVuZXJzKGxpc3RlbmVycywgb2xkTGlzdGVuZXJzIHx8IHt9LCBhZGQsIHJlbW92ZSQxLCBjcmVhdGVPbmNlSGFuZGxlciwgdm0pO1xuICB0YXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcbiAgdmFyIGhvb2tSRSA9IC9eaG9vazovO1xuICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdm0uJG9uKGV2ZW50W2ldLCBmbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICh2bS5fZXZlbnRzW2V2ZW50XSB8fCAodm0uX2V2ZW50c1tldmVudF0gPSBbXSkpLnB1c2goZm4pO1xuICAgICAgLy8gb3B0aW1pemUgaG9vazpldmVudCBjb3N0IGJ5IHVzaW5nIGEgYm9vbGVhbiBmbGFnIG1hcmtlZCBhdCByZWdpc3RyYXRpb25cbiAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuICAgICAgaWYgKGhvb2tSRS50ZXN0KGV2ZW50KSkge1xuICAgICAgICB2bS5faGFzSG9va0V2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIG9uICgpIHtcbiAgICAgIHZtLiRvZmYoZXZlbnQsIG9uKTtcbiAgICAgIGZuLmFwcGx5KHZtLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBvbi5mbiA9IGZuO1xuICAgIHZtLiRvbihldmVudCwgb24pO1xuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGFsbFxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gYXJyYXkgb2YgZXZlbnRzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpJDEgPCBsOyBpJDErKykge1xuICAgICAgICB2bS4kb2ZmKGV2ZW50W2kkMV0sIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBldmVudFxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWNicykge1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIGlmICghZm4pIHtcbiAgICAgIHZtLl9ldmVudHNbZXZlbnRdID0gbnVsbDtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBoYW5kbGVyXG4gICAgdmFyIGNiO1xuICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjYiA9IGNic1tpXTtcbiAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgIGNicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGxvd2VyQ2FzZUV2ZW50ICE9PSBldmVudCAmJiB2bS5fZXZlbnRzW2xvd2VyQ2FzZUV2ZW50XSkge1xuICAgICAgICB0aXAoXG4gICAgICAgICAgXCJFdmVudCBcXFwiXCIgKyBsb3dlckNhc2VFdmVudCArIFwiXFxcIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiIGJ1dCB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgeW91IGNhbm5vdCB1c2UgXCIgK1xuICAgICAgICAgIFwidi1vbiB0byBsaXN0ZW4gdG8gY2FtZWxDYXNlIGV2ZW50cyB3aGVuIHVzaW5nIGluLURPTSB0ZW1wbGF0ZXMuIFwiICtcbiAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIChoeXBoZW5hdGUoZXZlbnQpKSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGluZm8gPSBcImV2ZW50IGhhbmRsZXIgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2JzW2ldLCB2bSwgYXJncywgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBhY3RpdmVJbnN0YW5jZSA9IG51bGw7XG52YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUluc3RhbmNlKHZtKSB7XG4gIHZhciBwcmV2QWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZTtcbiAgYWN0aXZlSW5zdGFuY2UgPSB2bTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBhY3RpdmVJbnN0YW5jZSA9IHByZXZBY3RpdmVJbnN0YW5jZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TGlmZWN5Y2xlICh2bSkge1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuXG4gIC8vIGxvY2F0ZSBmaXJzdCBub24tYWJzdHJhY3QgcGFyZW50XG4gIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgaWYgKHBhcmVudCAmJiAhb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgIHdoaWxlIChwYXJlbnQuJG9wdGlvbnMuYWJzdHJhY3QgJiYgcGFyZW50LiRwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBwYXJlbnQuJGNoaWxkcmVuLnB1c2godm0pO1xuICB9XG5cbiAgdm0uJHBhcmVudCA9IHBhcmVudDtcbiAgdm0uJHJvb3QgPSBwYXJlbnQgPyBwYXJlbnQuJHJvb3QgOiB2bTtcblxuICB2bS4kY2hpbGRyZW4gPSBbXTtcbiAgdm0uJHJlZnMgPSB7fTtcblxuICB2bS5fd2F0Y2hlciA9IG51bGw7XG4gIHZtLl9pbmFjdGl2ZSA9IG51bGw7XG4gIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICB2bS5faXNNb3VudGVkID0gZmFsc2U7XG4gIHZtLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcHJldkVsID0gdm0uJGVsO1xuICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgdmFyIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSA9IHNldEFjdGl2ZUluc3RhbmNlKHZtKTtcbiAgICB2bS5fdm5vZGUgPSB2bm9kZTtcbiAgICAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAvLyBiYXNlZCBvbiB0aGUgcmVuZGVyaW5nIGJhY2tlbmQgdXNlZC5cbiAgICBpZiAoIXByZXZWbm9kZSkge1xuICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyh2bS4kZWwsIHZub2RlLCBoeWRyYXRpbmcsIGZhbHNlIC8qIHJlbW92ZU9ubHkgKi8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGVzXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18ocHJldlZub2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgIC8vIHVwZGF0ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmIChwcmV2RWwpIHtcbiAgICAgIHByZXZFbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSB2bTtcbiAgICB9XG4gICAgLy8gaWYgcGFyZW50IGlzIGFuIEhPQywgdXBkYXRlIGl0cyAkZWwgYXMgd2VsbFxuICAgIGlmICh2bS4kdm5vZGUgJiYgdm0uJHBhcmVudCAmJiB2bS4kdm5vZGUgPT09IHZtLiRwYXJlbnQuX3Zub2RlKSB7XG4gICAgICB2bS4kcGFyZW50LiRlbCA9IHZtLiRlbDtcbiAgICB9XG4gICAgLy8gdXBkYXRlZCBob29rIGlzIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIGFyZVxuICAgIC8vIHVwZGF0ZWQgaW4gYSBwYXJlbnQncyB1cGRhdGVkIGhvb2suXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVEZXN0cm95Jyk7XG4gICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gcGFyZW50XG4gICAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgcmVtb3ZlKHBhcmVudC4kY2hpbGRyZW4sIHZtKTtcbiAgICB9XG4gICAgLy8gdGVhcmRvd24gd2F0Y2hlcnNcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIHZhciBpID0gdm0uX3dhdGNoZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2bS5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlZmVyZW5jZSBmcm9tIGRhdGEgb2JcbiAgICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgICBpZiAodm0uX2RhdGEuX19vYl9fKSB7XG4gICAgICB2bS5fZGF0YS5fX29iX18udm1Db3VudC0tO1xuICAgIH1cbiAgICAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cbiAgICB2bS5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuICAgIHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIG51bGwpO1xuICAgIC8vIGZpcmUgZGVzdHJveWVkIGhvb2tcbiAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpO1xuICAgIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXG4gICAgdm0uJG9mZigpO1xuICAgIC8vIHJlbW92ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgLy8gcmVsZWFzZSBjaXJjdWxhciByZWZlcmVuY2UgKCM2NzU5KVxuICAgIGlmICh2bS4kdm5vZGUpIHtcbiAgICAgIHZtLiR2bm9kZS5wYXJlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQgKFxuICB2bSxcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIHZtLiRlbCA9IGVsO1xuICBpZiAoIXZtLiRvcHRpb25zLnJlbmRlcikge1xuICAgIHZtLiRvcHRpb25zLnJlbmRlciA9IGNyZWF0ZUVtcHR5Vk5vZGU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKCh2bS4kb3B0aW9ucy50ZW1wbGF0ZSAmJiB2bS4kb3B0aW9ucy50ZW1wbGF0ZS5jaGFyQXQoMCkgIT09ICcjJykgfHxcbiAgICAgICAgdm0uJG9wdGlvbnMuZWwgfHwgZWwpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IGFyZSB1c2luZyB0aGUgcnVudGltZS1vbmx5IGJ1aWxkIG9mIFZ1ZSB3aGVyZSB0aGUgdGVtcGxhdGUgJyArXG4gICAgICAgICAgJ2NvbXBpbGVyIGlzIG5vdCBhdmFpbGFibGUuIEVpdGhlciBwcmUtY29tcGlsZSB0aGUgdGVtcGxhdGVzIGludG8gJyArXG4gICAgICAgICAgJ3JlbmRlciBmdW5jdGlvbnMsIG9yIHVzZSB0aGUgY29tcGlsZXItaW5jbHVkZWQgYnVpbGQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnRmFpbGVkIHRvIG1vdW50IGNvbXBvbmVudDogdGVtcGxhdGUgb3IgcmVuZGVyIGZ1bmN0aW9uIG5vdCBkZWZpbmVkLicsXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuXG4gIHZhciB1cGRhdGVDb21wb25lbnQ7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgIHVwZGF0ZUNvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuYW1lID0gdm0uX25hbWU7XG4gICAgICB2YXIgaWQgPSB2bS5fdWlkO1xuICAgICAgdmFyIHN0YXJ0VGFnID0gXCJ2dWUtcGVyZi1zdGFydDpcIiArIGlkO1xuICAgICAgdmFyIGVuZFRhZyA9IFwidnVlLXBlcmYtZW5kOlwiICsgaWQ7XG5cbiAgICAgIG1hcmsoc3RhcnRUYWcpO1xuICAgICAgdmFyIHZub2RlID0gdm0uX3JlbmRlcigpO1xuICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyBuYW1lICsgXCIgcmVuZGVyXCIpLCBzdGFydFRhZywgZW5kVGFnKTtcblxuICAgICAgbWFyayhzdGFydFRhZyk7XG4gICAgICB2bS5fdXBkYXRlKHZub2RlLCBoeWRyYXRpbmcpO1xuICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyBuYW1lICsgXCIgcGF0Y2hcIiksIHN0YXJ0VGFnLCBlbmRUYWcpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdXBkYXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdm0uX3VwZGF0ZSh2bS5fcmVuZGVyKCksIGh5ZHJhdGluZyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHdlIHNldCB0aGlzIHRvIHZtLl93YXRjaGVyIGluc2lkZSB0aGUgd2F0Y2hlcidzIGNvbnN0cnVjdG9yXG4gIC8vIHNpbmNlIHRoZSB3YXRjaGVyJ3MgaW5pdGlhbCBwYXRjaCBtYXkgY2FsbCAkZm9yY2VVcGRhdGUgKGUuZy4gaW5zaWRlIGNoaWxkXG4gIC8vIGNvbXBvbmVudCdzIG1vdW50ZWQgaG9vayksIHdoaWNoIHJlbGllcyBvbiB2bS5fd2F0Y2hlciBiZWluZyBhbHJlYWR5IGRlZmluZWRcbiAgbmV3IFdhdGNoZXIodm0sIHVwZGF0ZUNvbXBvbmVudCwgbm9vcCwge1xuICAgIGJlZm9yZTogZnVuY3Rpb24gYmVmb3JlICgpIHtcbiAgICAgIGlmICh2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgICAgY2FsbEhvb2sodm0sICdiZWZvcmVVcGRhdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHRydWUgLyogaXNSZW5kZXJXYXRjaGVyICovKTtcbiAgaHlkcmF0aW5nID0gZmFsc2U7XG5cbiAgLy8gbWFudWFsbHkgbW91bnRlZCBpbnN0YW5jZSwgY2FsbCBtb3VudGVkIG9uIHNlbGZcbiAgLy8gbW91bnRlZCBpcyBjYWxsZWQgZm9yIHJlbmRlci1jcmVhdGVkIGNoaWxkIGNvbXBvbmVudHMgaW4gaXRzIGluc2VydGVkIGhvb2tcbiAgaWYgKHZtLiR2bm9kZSA9PSBudWxsKSB7XG4gICAgdm0uX2lzTW91bnRlZCA9IHRydWU7XG4gICAgY2FsbEhvb2sodm0sICdtb3VudGVkJyk7XG4gIH1cbiAgcmV0dXJuIHZtXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNoaWxkQ29tcG9uZW50IChcbiAgdm0sXG4gIHByb3BzRGF0YSxcbiAgbGlzdGVuZXJzLFxuICBwYXJlbnRWbm9kZSxcbiAgcmVuZGVyQ2hpbGRyZW5cbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCA9IHRydWU7XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgd2hldGhlciBjb21wb25lbnQgaGFzIHNsb3QgY2hpbGRyZW5cbiAgLy8gd2UgbmVlZCB0byBkbyB0aGlzIGJlZm9yZSBvdmVyd3JpdGluZyAkb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4uXG5cbiAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGR5bmFtaWMgc2NvcGVkU2xvdHMgKGhhbmQtd3JpdHRlbiBvciBjb21waWxlZCBidXQgd2l0aFxuICAvLyBkeW5hbWljIHNsb3QgbmFtZXMpLiBTdGF0aWMgc2NvcGVkIHNsb3RzIGNvbXBpbGVkIGZyb20gdGVtcGxhdGUgaGFzIHRoZVxuICAvLyBcIiRzdGFibGVcIiBtYXJrZXIuXG4gIHZhciBuZXdTY29wZWRTbG90cyA9IHBhcmVudFZub2RlLmRhdGEuc2NvcGVkU2xvdHM7XG4gIHZhciBvbGRTY29wZWRTbG90cyA9IHZtLiRzY29wZWRTbG90cztcbiAgdmFyIGhhc0R5bmFtaWNTY29wZWRTbG90ID0gISEoXG4gICAgKG5ld1Njb3BlZFNsb3RzICYmICFuZXdTY29wZWRTbG90cy4kc3RhYmxlKSB8fFxuICAgIChvbGRTY29wZWRTbG90cyAhPT0gZW1wdHlPYmplY3QgJiYgIW9sZFNjb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG5ld1Njb3BlZFNsb3RzICYmIHZtLiRzY29wZWRTbG90cy4ka2V5ICE9PSBuZXdTY29wZWRTbG90cy4ka2V5KVxuICApO1xuXG4gIC8vIEFueSBzdGF0aWMgc2xvdCBjaGlsZHJlbiBmcm9tIHRoZSBwYXJlbnQgbWF5IGhhdmUgY2hhbmdlZCBkdXJpbmcgcGFyZW50J3NcbiAgLy8gdXBkYXRlLiBEeW5hbWljIHNjb3BlZCBzbG90cyBtYXkgYWxzbyBoYXZlIGNoYW5nZWQuIEluIHN1Y2ggY2FzZXMsIGEgZm9yY2VkXG4gIC8vIHVwZGF0ZSBpcyBuZWNlc3NhcnkgdG8gZW5zdXJlIGNvcnJlY3RuZXNzLlxuICB2YXIgbmVlZHNGb3JjZVVwZGF0ZSA9ICEhKFxuICAgIHJlbmRlckNoaWxkcmVuIHx8ICAgICAgICAgICAgICAgLy8gaGFzIG5ldyBzdGF0aWMgc2xvdHNcbiAgICB2bS4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW4gfHwgIC8vIGhhcyBvbGQgc3RhdGljIHNsb3RzXG4gICAgaGFzRHluYW1pY1Njb3BlZFNsb3RcbiAgKTtcblxuICB2bS4kb3B0aW9ucy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcbiAgdm0uJHZub2RlID0gcGFyZW50Vm5vZGU7IC8vIHVwZGF0ZSB2bSdzIHBsYWNlaG9sZGVyIG5vZGUgd2l0aG91dCByZS1yZW5kZXJcblxuICBpZiAodm0uX3Zub2RlKSB7IC8vIHVwZGF0ZSBjaGlsZCB0cmVlJ3MgcGFyZW50XG4gICAgdm0uX3Zub2RlLnBhcmVudCA9IHBhcmVudFZub2RlO1xuICB9XG4gIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiA9IHJlbmRlckNoaWxkcmVuO1xuXG4gIC8vIHVwZGF0ZSAkYXR0cnMgYW5kICRsaXN0ZW5lcnMgaGFzaFxuICAvLyB0aGVzZSBhcmUgYWxzbyByZWFjdGl2ZSBzbyB0aGV5IG1heSB0cmlnZ2VyIGNoaWxkIHVwZGF0ZSBpZiB0aGUgY2hpbGRcbiAgLy8gdXNlZCB0aGVtIGR1cmluZyByZW5kZXJcbiAgdm0uJGF0dHJzID0gcGFyZW50Vm5vZGUuZGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdDtcbiAgdm0uJGxpc3RlbmVycyA9IGxpc3RlbmVycyB8fCBlbXB0eU9iamVjdDtcblxuICAvLyB1cGRhdGUgcHJvcHNcbiAgaWYgKHByb3BzRGF0YSAmJiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgIHRvZ2dsZU9ic2VydmluZyhmYWxzZSk7XG4gICAgdmFyIHByb3BzID0gdm0uX3Byb3BzO1xuICAgIHZhciBwcm9wS2V5cyA9IHZtLiRvcHRpb25zLl9wcm9wS2V5cyB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcEtleXNbaV07XG4gICAgICB2YXIgcHJvcE9wdGlvbnMgPSB2bS4kb3B0aW9ucy5wcm9wczsgLy8gd3RmIGZsb3c/XG4gICAgICBwcm9wc1trZXldID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcE9wdGlvbnMsIHByb3BzRGF0YSwgdm0pO1xuICAgIH1cbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgLy8ga2VlcCBhIGNvcHkgb2YgcmF3IHByb3BzRGF0YVxuICAgIHZtLiRvcHRpb25zLnByb3BzRGF0YSA9IHByb3BzRGF0YTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBsaXN0ZW5lcnNcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuICB2YXIgb2xkTGlzdGVuZXJzID0gdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgdm0uJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMsIG9sZExpc3RlbmVycyk7XG5cbiAgLy8gcmVzb2x2ZSBzbG90cyArIGZvcmNlIHVwZGF0ZSBpZiBoYXMgY2hpbGRyZW5cbiAgaWYgKG5lZWRzRm9yY2VVcGRhdGUpIHtcbiAgICB2bS4kc2xvdHMgPSByZXNvbHZlU2xvdHMocmVuZGVyQ2hpbGRyZW4sIHBhcmVudFZub2RlLmNvbnRleHQpO1xuICAgIHZtLiRmb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luSW5hY3RpdmVUcmVlICh2bSkge1xuICB3aGlsZSAodm0gJiYgKHZtID0gdm0uJHBhcmVudCkpIHtcbiAgICBpZiAodm0uX2luYWN0aXZlKSB7IHJldHVybiB0cnVlIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSBpZiAodm0uX2RpcmVjdEluYWN0aXZlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZtLl9pbmFjdGl2ZSB8fCB2bS5faW5hY3RpdmUgPT09IG51bGwpIHtcbiAgICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZtLiRjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2FjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCAodm0sIGRpcmVjdCkge1xuICBpZiAoZGlyZWN0KSB7XG4gICAgdm0uX2RpcmVjdEluYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoaXNJbkluYWN0aXZlVHJlZSh2bSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBpZiAoIXZtLl9pbmFjdGl2ZSkge1xuICAgIHZtLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlYWN0aXZhdGVDaGlsZENvbXBvbmVudCh2bS4kY2hpbGRyZW5baV0pO1xuICAgIH1cbiAgICBjYWxsSG9vayh2bSwgJ2RlYWN0aXZhdGVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbEhvb2sgKHZtLCBob29rKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBsaWZlY3ljbGUgaG9va3NcbiAgcHVzaFRhcmdldCgpO1xuICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgdmFyIGluZm8gPSBob29rICsgXCIgaG9va1wiO1xuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoaGFuZGxlcnNbaV0sIHZtLCBudWxsLCB2bSwgaW5mbyk7XG4gICAgfVxuICB9XG4gIGlmICh2bS5faGFzSG9va0V2ZW50KSB7XG4gICAgdm0uJGVtaXQoJ2hvb2s6JyArIGhvb2spO1xuICB9XG4gIHBvcFRhcmdldCgpO1xufVxuXG4vKiAgKi9cblxudmFyIE1BWF9VUERBVEVfQ09VTlQgPSAxMDA7XG5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGFjdGl2YXRlZENoaWxkcmVuID0gW107XG52YXIgaGFzID0ge307XG52YXIgY2lyY3VsYXIgPSB7fTtcbnZhciB3YWl0aW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBpbmRleCA9IDA7XG5cbi8qKlxuICogUmVzZXQgdGhlIHNjaGVkdWxlcidzIHN0YXRlLlxuICovXG5mdW5jdGlvbiByZXNldFNjaGVkdWxlclN0YXRlICgpIHtcbiAgaW5kZXggPSBxdWV1ZS5sZW5ndGggPSBhY3RpdmF0ZWRDaGlsZHJlbi5sZW5ndGggPSAwO1xuICBoYXMgPSB7fTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaXJjdWxhciA9IHt9O1xuICB9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGZhbHNlO1xufVxuXG4vLyBBc3luYyBlZGdlIGNhc2UgIzY1NjYgcmVxdWlyZXMgc2F2aW5nIHRoZSB0aW1lc3RhbXAgd2hlbiBldmVudCBsaXN0ZW5lcnMgYXJlXG4vLyBhdHRhY2hlZC4gSG93ZXZlciwgY2FsbGluZyBwZXJmb3JtYW5jZS5ub3coKSBoYXMgYSBwZXJmIG92ZXJoZWFkIGVzcGVjaWFsbHlcbi8vIGlmIHRoZSBwYWdlIGhhcyB0aG91c2FuZHMgb2YgZXZlbnQgbGlzdGVuZXJzLiBJbnN0ZWFkLCB3ZSB0YWtlIGEgdGltZXN0YW1wXG4vLyBldmVyeSB0aW1lIHRoZSBzY2hlZHVsZXIgZmx1c2hlcyBhbmQgdXNlIHRoYXQgZm9yIGFsbCBldmVudCBsaXN0ZW5lcnNcbi8vIGF0dGFjaGVkIGR1cmluZyB0aGF0IGZsdXNoLlxudmFyIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IDA7XG5cbi8vIEFzeW5jIGVkZ2UgY2FzZSBmaXggcmVxdWlyZXMgc3RvcmluZyBhbiBldmVudCBsaXN0ZW5lcidzIGF0dGFjaCB0aW1lc3RhbXAuXG52YXIgZ2V0Tm93ID0gRGF0ZS5ub3c7XG5cbi8vIERldGVybWluZSB3aGF0IGV2ZW50IHRpbWVzdGFtcCB0aGUgYnJvd3NlciBpcyB1c2luZy4gQW5ub3lpbmdseSwgdGhlXG4vLyB0aW1lc3RhbXAgY2FuIGVpdGhlciBiZSBoaS1yZXMgKHJlbGF0aXZlIHRvIHBhZ2UgbG9hZCkgb3IgbG93LXJlc1xuLy8gKHJlbGF0aXZlIHRvIFVOSVggZXBvY2gpLCBzbyBpbiBvcmRlciB0byBjb21wYXJlIHRpbWUgd2UgaGF2ZSB0byB1c2UgdGhlXG4vLyBzYW1lIHRpbWVzdGFtcCB0eXBlIHdoZW4gc2F2aW5nIHRoZSBmbHVzaCB0aW1lc3RhbXAuXG4vLyBBbGwgSUUgdmVyc2lvbnMgdXNlIGxvdy1yZXMgZXZlbnQgdGltZXN0YW1wcywgYW5kIGhhdmUgcHJvYmxlbWF0aWMgY2xvY2tcbi8vIGltcGxlbWVudGF0aW9ucyAoIzk2MzIpXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcbiAgaWYgKFxuICAgIHBlcmZvcm1hbmNlICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGdldE5vdygpID4gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50JykudGltZVN0YW1wXG4gICkge1xuICAgIC8vIGlmIHRoZSBldmVudCB0aW1lc3RhbXAsIGFsdGhvdWdoIGV2YWx1YXRlZCBBRlRFUiB0aGUgRGF0ZS5ub3coKSwgaXNcbiAgICAvLyBzbWFsbGVyIHRoYW4gaXQsIGl0IG1lYW5zIHRoZSBldmVudCBpcyB1c2luZyBhIGhpLXJlcyB0aW1lc3RhbXAsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gdXNlIHRoZSBoaS1yZXMgdmVyc2lvbiBmb3IgZXZlbnQgbGlzdGVuZXIgdGltZXN0YW1wcyBhc1xuICAgIC8vIHdlbGwuXG4gICAgZ2V0Tm93ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7IH07XG4gIH1cbn1cblxuLyoqXG4gKiBGbHVzaCBib3RoIHF1ZXVlcyBhbmQgcnVuIHRoZSB3YXRjaGVycy5cbiAqL1xuZnVuY3Rpb24gZmx1c2hTY2hlZHVsZXJRdWV1ZSAoKSB7XG4gIGN1cnJlbnRGbHVzaFRpbWVzdGFtcCA9IGdldE5vdygpO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIHZhciB3YXRjaGVyLCBpZDtcblxuICAvLyBTb3J0IHF1ZXVlIGJlZm9yZSBmbHVzaC5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQ6XG4gIC8vIDEuIENvbXBvbmVudHMgYXJlIHVwZGF0ZWQgZnJvbSBwYXJlbnQgdG8gY2hpbGQuIChiZWNhdXNlIHBhcmVudCBpcyBhbHdheXNcbiAgLy8gICAgY3JlYXRlZCBiZWZvcmUgdGhlIGNoaWxkKVxuICAvLyAyLiBBIGNvbXBvbmVudCdzIHVzZXIgd2F0Y2hlcnMgYXJlIHJ1biBiZWZvcmUgaXRzIHJlbmRlciB3YXRjaGVyIChiZWNhdXNlXG4gIC8vICAgIHVzZXIgd2F0Y2hlcnMgYXJlIGNyZWF0ZWQgYmVmb3JlIHRoZSByZW5kZXIgd2F0Y2hlcilcbiAgLy8gMy4gSWYgYSBjb21wb25lbnQgaXMgZGVzdHJveWVkIGR1cmluZyBhIHBhcmVudCBjb21wb25lbnQncyB3YXRjaGVyIHJ1bixcbiAgLy8gICAgaXRzIHdhdGNoZXJzIGNhbiBiZSBza2lwcGVkLlxuICBxdWV1ZS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmlkIC0gYi5pZDsgfSk7XG5cbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBxdWV1ZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICB3YXRjaGVyID0gcXVldWVbaW5kZXhdO1xuICAgIGlmICh3YXRjaGVyLmJlZm9yZSkge1xuICAgICAgd2F0Y2hlci5iZWZvcmUoKTtcbiAgICB9XG4gICAgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gTUFYX1VQREFURV9DT1VOVCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgbWF5IGhhdmUgYW4gaW5maW5pdGUgdXBkYXRlIGxvb3AgJyArIChcbiAgICAgICAgICAgIHdhdGNoZXIudXNlclxuICAgICAgICAgICAgICA/IChcImluIHdhdGNoZXIgd2l0aCBleHByZXNzaW9uIFxcXCJcIiArICh3YXRjaGVyLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpXG4gICAgICAgICAgICAgIDogXCJpbiBhIGNvbXBvbmVudCByZW5kZXIgZnVuY3Rpb24uXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIHdhdGNoZXIudm1cbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBrZWVwIGNvcGllcyBvZiBwb3N0IHF1ZXVlcyBiZWZvcmUgcmVzZXR0aW5nIHN0YXRlXG4gIHZhciBhY3RpdmF0ZWRRdWV1ZSA9IGFjdGl2YXRlZENoaWxkcmVuLnNsaWNlKCk7XG4gIHZhciB1cGRhdGVkUXVldWUgPSBxdWV1ZS5zbGljZSgpO1xuXG4gIHJlc2V0U2NoZWR1bGVyU3RhdGUoKTtcblxuICAvLyBjYWxsIGNvbXBvbmVudCB1cGRhdGVkIGFuZCBhY3RpdmF0ZWQgaG9va3NcbiAgY2FsbEFjdGl2YXRlZEhvb2tzKGFjdGl2YXRlZFF1ZXVlKTtcbiAgY2FsbFVwZGF0ZWRIb29rcyh1cGRhdGVkUXVldWUpO1xuXG4gIC8vIGRldnRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzICYmIGNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xzLmVtaXQoJ2ZsdXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsbFVwZGF0ZWRIb29rcyAocXVldWUpIHtcbiAgdmFyIGkgPSBxdWV1ZS5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB2YXIgd2F0Y2hlciA9IHF1ZXVlW2ldO1xuICAgIHZhciB2bSA9IHdhdGNoZXIudm07XG4gICAgaWYgKHZtLl93YXRjaGVyID09PSB3YXRjaGVyICYmIHZtLl9pc01vdW50ZWQgJiYgIXZtLl9pc0Rlc3Ryb3llZCkge1xuICAgICAgY2FsbEhvb2sodm0sICd1cGRhdGVkJyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUXVldWUgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCB0aGF0IHdhcyBhY3RpdmF0ZWQgZHVyaW5nIHBhdGNoLlxuICogVGhlIHF1ZXVlIHdpbGwgYmUgcHJvY2Vzc2VkIGFmdGVyIHRoZSBlbnRpcmUgdHJlZSBoYXMgYmVlbiBwYXRjaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZUFjdGl2YXRlZENvbXBvbmVudCAodm0pIHtcbiAgLy8gc2V0dGluZyBfaW5hY3RpdmUgdG8gZmFsc2UgaGVyZSBzbyB0aGF0IGEgcmVuZGVyIGZ1bmN0aW9uIGNhblxuICAvLyByZWx5IG9uIGNoZWNraW5nIHdoZXRoZXIgaXQncyBpbiBhbiBpbmFjdGl2ZSB0cmVlIChlLmcuIHJvdXRlci12aWV3KVxuICB2bS5faW5hY3RpdmUgPSBmYWxzZTtcbiAgYWN0aXZhdGVkQ2hpbGRyZW4ucHVzaCh2bSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZWRIb29rcyAocXVldWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLl9pbmFjdGl2ZSA9IHRydWU7XG4gICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChxdWV1ZVtpXSwgdHJ1ZSAvKiB0cnVlICovKTtcbiAgfVxufVxuXG4vKipcbiAqIFB1c2ggYSB3YXRjaGVyIGludG8gdGhlIHdhdGNoZXIgcXVldWUuXG4gKiBKb2JzIHdpdGggZHVwbGljYXRlIElEcyB3aWxsIGJlIHNraXBwZWQgdW5sZXNzIGl0J3NcbiAqIHB1c2hlZCB3aGVuIHRoZSBxdWV1ZSBpcyBiZWluZyBmbHVzaGVkLlxuICovXG5mdW5jdGlvbiBxdWV1ZVdhdGNoZXIgKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIGhhc1tpZF0gPSB0cnVlO1xuICAgIGlmICghZmx1c2hpbmcpIHtcbiAgICAgIHF1ZXVlLnB1c2god2F0Y2hlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGFscmVhZHkgZmx1c2hpbmcsIHNwbGljZSB0aGUgd2F0Y2hlciBiYXNlZCBvbiBpdHMgaWRcbiAgICAgIC8vIGlmIGFscmVhZHkgcGFzdCBpdHMgaWQsIGl0IHdpbGwgYmUgcnVuIG5leHQgaW1tZWRpYXRlbHkuXG4gICAgICB2YXIgaSA9IHF1ZXVlLmxlbmd0aCAtIDE7XG4gICAgICB3aGlsZSAoaSA+IGluZGV4ICYmIHF1ZXVlW2ldLmlkID4gd2F0Y2hlci5pZCkge1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgICBxdWV1ZS5zcGxpY2UoaSArIDEsIDAsIHdhdGNoZXIpO1xuICAgIH1cbiAgICAvLyBxdWV1ZSB0aGUgZmx1c2hcbiAgICBpZiAoIXdhaXRpbmcpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhY29uZmlnLmFzeW5jKSB7XG4gICAgICAgIGZsdXNoU2NoZWR1bGVyUXVldWUoKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBuZXh0VGljayhmbHVzaFNjaGVkdWxlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogICovXG5cblxuXG52YXIgdWlkJDIgPSAwO1xuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICovXG52YXIgV2F0Y2hlciA9IGZ1bmN0aW9uIFdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgY2IsXG4gIG9wdGlvbnMsXG4gIGlzUmVuZGVyV2F0Y2hlclxuKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgaWYgKGlzUmVuZGVyV2F0Y2hlcikge1xuICAgIHZtLl93YXRjaGVyID0gdGhpcztcbiAgfVxuICB2bS5fd2F0Y2hlcnMucHVzaCh0aGlzKTtcbiAgLy8gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwO1xuICAgIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyO1xuICAgIHRoaXMubGF6eSA9ICEhb3B0aW9ucy5sYXp5O1xuICAgIHRoaXMuc3luYyA9ICEhb3B0aW9ucy5zeW5jO1xuICAgIHRoaXMuYmVmb3JlID0gb3B0aW9ucy5iZWZvcmU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kZWVwID0gdGhpcy51c2VyID0gdGhpcy5sYXp5ID0gdGhpcy5zeW5jID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IFtdO1xuICB0aGlzLm5ld0RlcHMgPSBbXTtcbiAgdGhpcy5kZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLm5ld0RlcElkcyA9IG5ldyBfU2V0KCk7XG4gIHRoaXMuZXhwcmVzc2lvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICA/IGV4cE9yRm4udG9TdHJpbmcoKVxuICAgIDogJyc7XG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlclxuICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBwYXJzZVBhdGgoZXhwT3JGbik7XG4gICAgaWYgKCF0aGlzLmdldHRlcikge1xuICAgICAgdGhpcy5nZXR0ZXIgPSBub29wO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIkZhaWxlZCB3YXRjaGluZyBwYXRoOiBcXFwiXCIgKyBleHBPckZuICsgXCJcXFwiIFwiICtcbiAgICAgICAgJ1dhdGNoZXIgb25seSBhY2NlcHRzIHNpbXBsZSBkb3QtZGVsaW1pdGVkIHBhdGhzLiAnICtcbiAgICAgICAgJ0ZvciBmdWxsIGNvbnRyb2wsIHVzZSBhIGZ1bmN0aW9uIGluc3RlYWQuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHRoaXMudmFsdWUgPSB0aGlzLmxhenlcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogdGhpcy5nZXQoKTtcbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKCkge1xuICBwdXNoVGFyZ2V0KHRoaXMpO1xuICB2YXIgdmFsdWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAodGhpcy51c2VyKSB7XG4gICAgICBoYW5kbGVFcnJvcihlLCB2bSwgKFwiZ2V0dGVyIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICAvLyBcInRvdWNoXCIgZXZlcnkgcHJvcGVydHkgc28gdGhleSBhcmUgYWxsIHRyYWNrZWQgYXNcbiAgICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgICBpZiAodGhpcy5kZWVwKSB7XG4gICAgICB0cmF2ZXJzZSh2YWx1ZSk7XG4gICAgfVxuICAgIHBvcFRhcmdldCgpO1xuICAgIHRoaXMuY2xlYW51cERlcHMoKTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn07XG5cbi8qKlxuICogQWRkIGEgZGVwZW5kZW5jeSB0byB0aGlzIGRpcmVjdGl2ZS5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuYWRkRGVwID0gZnVuY3Rpb24gYWRkRGVwIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhpZCkpIHtcbiAgICB0aGlzLm5ld0RlcElkcy5hZGQoaWQpO1xuICAgIHRoaXMubmV3RGVwcy5wdXNoKGRlcCk7XG4gICAgaWYgKCF0aGlzLmRlcElkcy5oYXMoaWQpKSB7XG4gICAgICBkZXAuYWRkU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5jbGVhbnVwRGVwcyA9IGZ1bmN0aW9uIGNsZWFudXBEZXBzICgpIHtcbiAgdmFyIGkgPSB0aGlzLmRlcHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXTtcbiAgICBpZiAoIXRoaXMubmV3RGVwSWRzLmhhcyhkZXAuaWQpKSB7XG4gICAgICBkZXAucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgfVxuICB2YXIgdG1wID0gdGhpcy5kZXBJZHM7XG4gIHRoaXMuZGVwSWRzID0gdGhpcy5uZXdEZXBJZHM7XG4gIHRoaXMubmV3RGVwSWRzID0gdG1wO1xuICB0aGlzLm5ld0RlcElkcy5jbGVhcigpO1xuICB0bXAgPSB0aGlzLmRlcHM7XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbiAgdGhpcy5uZXdEZXBzID0gdG1wO1xuICB0aGlzLm5ld0RlcHMubGVuZ3RoID0gMDtcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKCkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy5sYXp5KSB7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gIH0gZWxzZSBpZiAodGhpcy5zeW5jKSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgfSBlbHNlIHtcbiAgICBxdWV1ZVdhdGNoZXIodGhpcyk7XG4gIH1cbn07XG5cbi8qKlxuICogU2NoZWR1bGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiBydW4gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmdldCgpO1xuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCB3YXRjaGVycyBvbiBPYmplY3QvQXJyYXlzIHNob3VsZCBmaXJlIGV2ZW5cbiAgICAgIC8vIHdoZW4gdGhlIHZhbHVlIGlzIHRoZSBzYW1lLCBiZWNhdXNlIHRoZSB2YWx1ZSBtYXlcbiAgICAgIC8vIGhhdmUgbXV0YXRlZC5cbiAgICAgIGlzT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgdGhpcy5kZWVwXG4gICAgKSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2IuY2FsbCh0aGlzLnZtLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdGhpcy52bSwgKFwiY2FsbGJhY2sgZm9yIHdhdGNoZXIgXFxcIlwiICsgKHRoaXMuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIHZhbHVlIG9mIHRoZSB3YXRjaGVyLlxuICogVGhpcyBvbmx5IGdldHMgY2FsbGVkIGZvciBsYXp5IHdhdGNoZXJzLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uIGV2YWx1YXRlICgpIHtcbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gIHRoaXMuZGlydHkgPSBmYWxzZTtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uIGRlcGVuZCAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuZGVwc1tpXS5kZXBlbmQoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgc2VsZiBmcm9tIGFsbCBkZXBlbmRlbmNpZXMnIHN1YnNjcmliZXIgbGlzdC5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudGVhcmRvd24gPSBmdW5jdGlvbiB0ZWFyZG93biAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gdm0ncyB3YXRjaGVyIGxpc3RcbiAgICAvLyB0aGlzIGlzIGEgc29tZXdoYXQgZXhwZW5zaXZlIG9wZXJhdGlvbiBzbyB3ZSBza2lwIGl0XG4gICAgLy8gaWYgdGhlIHZtIGlzIGJlaW5nIGRlc3Ryb3llZC5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIHJlbW92ZSh0aGlzLnZtLl93YXRjaGVycywgdGhpcyk7XG4gICAgfVxuICAgIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG4vKiAgKi9cblxudmFyIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbiA9IHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IG5vb3AsXG4gIHNldDogbm9vcFxufTtcblxuZnVuY3Rpb24gcHJveHkgKHRhcmdldCwgc291cmNlS2V5LCBrZXkpIHtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IGZ1bmN0aW9uIHByb3h5R2V0dGVyICgpIHtcbiAgICByZXR1cm4gdGhpc1tzb3VyY2VLZXldW2tleV1cbiAgfTtcbiAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICB0aGlzW3NvdXJjZUtleV1ba2V5XSA9IHZhbDtcbiAgfTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBpbml0U3RhdGUgKHZtKSB7XG4gIHZtLl93YXRjaGVycyA9IFtdO1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zO1xuICBpZiAob3B0cy5wcm9wcykgeyBpbml0UHJvcHModm0sIG9wdHMucHJvcHMpOyB9XG4gIGlmIChvcHRzLm1ldGhvZHMpIHsgaW5pdE1ldGhvZHModm0sIG9wdHMubWV0aG9kcyk7IH1cbiAgaWYgKG9wdHMuZGF0YSkge1xuICAgIGluaXREYXRhKHZtKTtcbiAgfSBlbHNlIHtcbiAgICBvYnNlcnZlKHZtLl9kYXRhID0ge30sIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG4gIH1cbiAgaWYgKG9wdHMuY29tcHV0ZWQpIHsgaW5pdENvbXB1dGVkKHZtLCBvcHRzLmNvbXB1dGVkKTsgfVxuICBpZiAob3B0cy53YXRjaCAmJiBvcHRzLndhdGNoICE9PSBuYXRpdmVXYXRjaCkge1xuICAgIGluaXRXYXRjaCh2bSwgb3B0cy53YXRjaCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzICh2bSwgcHJvcHNPcHRpb25zKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB2bS4kb3B0aW9ucy5wcm9wc0RhdGEgfHwge307XG4gIHZhciBwcm9wcyA9IHZtLl9wcm9wcyA9IHt9O1xuICAvLyBjYWNoZSBwcm9wIGtleXMgc28gdGhhdCBmdXR1cmUgcHJvcHMgdXBkYXRlcyBjYW4gaXRlcmF0ZSB1c2luZyBBcnJheVxuICAvLyBpbnN0ZWFkIG9mIGR5bmFtaWMgb2JqZWN0IGtleSBlbnVtZXJhdGlvbi5cbiAgdmFyIGtleXMgPSB2bS4kb3B0aW9ucy5fcHJvcEtleXMgPSBbXTtcbiAgdmFyIGlzUm9vdCA9ICF2bS4kcGFyZW50O1xuICAvLyByb290IGluc3RhbmNlIHByb3BzIHNob3VsZCBiZSBjb252ZXJ0ZWRcbiAgaWYgKCFpc1Jvb3QpIHtcbiAgICB0b2dnbGVPYnNlcnZpbmcoZmFsc2UpO1xuICB9XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVQcm9wKGtleSwgcHJvcHNPcHRpb25zLCBwcm9wc0RhdGEsIHZtKTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgaWYgKGlzUmVzZXJ2ZWRBdHRyaWJ1dGUoaHlwaGVuYXRlZEtleSkgfHxcbiAgICAgICAgICBjb25maWcuaXNSZXNlcnZlZEF0dHIoaHlwaGVuYXRlZEtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAoXCJcXFwiXCIgKyBoeXBoZW5hdGVkS2V5ICsgXCJcXFwiIGlzIGEgcmVzZXJ2ZWQgYXR0cmlidXRlIGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBjb21wb25lbnQgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHByb3BzLCBrZXksIHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSb290ICYmICFpc1VwZGF0aW5nQ2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgXCJBdm9pZCBtdXRhdGluZyBhIHByb3AgZGlyZWN0bHkgc2luY2UgdGhlIHZhbHVlIHdpbGwgYmUgXCIgK1xuICAgICAgICAgICAgXCJvdmVyd3JpdHRlbiB3aGVuZXZlciB0aGUgcGFyZW50IGNvbXBvbmVudCByZS1yZW5kZXJzLiBcIiArXG4gICAgICAgICAgICBcIkluc3RlYWQsIHVzZSBhIGRhdGEgb3IgY29tcHV0ZWQgcHJvcGVydHkgYmFzZWQgb24gdGhlIHByb3AncyBcIiArXG4gICAgICAgICAgICBcInZhbHVlLiBQcm9wIGJlaW5nIG11dGF0ZWQ6IFxcXCJcIiArIGtleSArIFwiXFxcIlwiLFxuICAgICAgICAgICAgdm1cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmaW5lUmVhY3RpdmUkJDEocHJvcHMsIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICAvLyBzdGF0aWMgcHJvcHMgYXJlIGFscmVhZHkgcHJveGllZCBvbiB0aGUgY29tcG9uZW50J3MgcHJvdG90eXBlXG4gICAgLy8gZHVyaW5nIFZ1ZS5leHRlbmQoKS4gV2Ugb25seSBuZWVkIHRvIHByb3h5IHByb3BzIGRlZmluZWQgYXRcbiAgICAvLyBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgcHJveHkodm0sIFwiX3Byb3BzXCIsIGtleSk7XG4gICAgfVxuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBwcm9wc09wdGlvbnMpIGxvb3AoIGtleSApO1xuICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhICh2bSkge1xuICB2YXIgZGF0YSA9IHZtLiRvcHRpb25zLmRhdGE7XG4gIGRhdGEgPSB2bS5fZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nXG4gICAgPyBnZXREYXRhKGRhdGEsIHZtKVxuICAgIDogZGF0YSB8fCB7fTtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGRhdGEpKSB7XG4gICAgZGF0YSA9IHt9O1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICdkYXRhIGZ1bmN0aW9ucyBzaG91bGQgcmV0dXJuIGFuIG9iamVjdDpcXG4nICtcbiAgICAgICdodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9jb21wb25lbnRzLmh0bWwjZGF0YS1NdXN0LUJlLWEtRnVuY3Rpb24nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcbiAgdmFyIHByb3BzID0gdm0uJG9wdGlvbnMucHJvcHM7XG4gIHZhciBtZXRob2RzID0gdm0uJG9wdGlvbnMubWV0aG9kcztcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAobWV0aG9kcyAmJiBoYXNPd24obWV0aG9kcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgZGF0YSBwcm9wZXJ0eS5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICBcIlRoZSBkYXRhIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlY2xhcmVkIGFzIGEgcHJvcC4gXCIgK1xuICAgICAgICBcIlVzZSBwcm9wIGRlZmF1bHQgdmFsdWUgaW5zdGVhZC5cIixcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICBwcm94eSh2bSwgXCJfZGF0YVwiLCBrZXkpO1xuICAgIH1cbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgb2JzZXJ2ZShkYXRhLCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xufVxuXG5mdW5jdGlvbiBnZXREYXRhIChkYXRhLCB2bSkge1xuICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgZGF0YSBnZXR0ZXJzXG4gIHB1c2hUYXJnZXQoKTtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGF0YS5jYWxsKHZtLCB2bSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBcImRhdGEoKVwiKTtcbiAgICByZXR1cm4ge31cbiAgfSBmaW5hbGx5IHtcbiAgICBwb3BUYXJnZXQoKTtcbiAgfVxufVxuXG52YXIgY29tcHV0ZWRXYXRjaGVyT3B0aW9ucyA9IHsgbGF6eTogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQgKHZtLCBjb21wdXRlZCkge1xuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgdmFyIHdhdGNoZXJzID0gdm0uX2NvbXB1dGVkV2F0Y2hlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAvLyBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBqdXN0IGdldHRlcnMgZHVyaW5nIFNTUlxuICB2YXIgaXNTU1IgPSBpc1NlcnZlclJlbmRlcmluZygpO1xuXG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIHZhciB1c2VyRGVmID0gY29tcHV0ZWRba2V5XTtcbiAgICB2YXIgZ2V0dGVyID0gdHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicgPyB1c2VyRGVmIDogdXNlckRlZi5nZXQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgZ2V0dGVyID09IG51bGwpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkdldHRlciBpcyBtaXNzaW5nIGZvciBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuXCIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzU1NSKSB7XG4gICAgICAvLyBjcmVhdGUgaW50ZXJuYWwgd2F0Y2hlciBmb3IgdGhlIGNvbXB1dGVkIHByb3BlcnR5LlxuICAgICAgd2F0Y2hlcnNba2V5XSA9IG5ldyBXYXRjaGVyKFxuICAgICAgICB2bSxcbiAgICAgICAgZ2V0dGVyIHx8IG5vb3AsXG4gICAgICAgIG5vb3AsXG4gICAgICAgIGNvbXB1dGVkV2F0Y2hlck9wdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gY29tcG9uZW50LWRlZmluZWQgY29tcHV0ZWQgcHJvcGVydGllcyBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZVxuICAgIC8vIGNvbXBvbmVudCBwcm90b3R5cGUuIFdlIG9ubHkgbmVlZCB0byBkZWZpbmUgY29tcHV0ZWQgcHJvcGVydGllcyBkZWZpbmVkXG4gICAgLy8gYXQgaW5zdGFudGlhdGlvbiBoZXJlLlxuICAgIGlmICghKGtleSBpbiB2bSkpIHtcbiAgICAgIGRlZmluZUNvbXB1dGVkKHZtLCBrZXksIHVzZXJEZWYpO1xuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGtleSBpbiB2bS4kZGF0YSkge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGluIGRhdGEuXCIpLCB2bSk7XG4gICAgICB9IGVsc2UgaWYgKHZtLiRvcHRpb25zLnByb3BzICYmIGtleSBpbiB2bS4kb3B0aW9ucy5wcm9wcykge1xuICAgICAgICB3YXJuKChcIlRoZSBjb21wdXRlZCBwcm9wZXJ0eSBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgYWxyZWFkeSBkZWZpbmVkIGFzIGEgcHJvcC5cIiksIHZtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lQ29tcHV0ZWQgKFxuICB0YXJnZXQsXG4gIGtleSxcbiAgdXNlckRlZlxuKSB7XG4gIHZhciBzaG91bGRDYWNoZSA9ICFpc1NlcnZlclJlbmRlcmluZygpO1xuICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uZ2V0ID0gc2hvdWxkQ2FjaGVcbiAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYpO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBub29wO1xuICB9IGVsc2Uge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgPyBzaG91bGRDYWNoZSAmJiB1c2VyRGVmLmNhY2hlICE9PSBmYWxzZVxuICAgICAgICA/IGNyZWF0ZUNvbXB1dGVkR2V0dGVyKGtleSlcbiAgICAgICAgOiBjcmVhdGVHZXR0ZXJJbnZva2VyKHVzZXJEZWYuZ2V0KVxuICAgICAgOiBub29wO1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSB1c2VyRGVmLnNldCB8fCBub29wO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID09PSBub29wKSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiB3YXMgYXNzaWduZWQgdG8gYnV0IGl0IGhhcyBubyBzZXR0ZXIuXCIpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wdXRlZEdldHRlciAoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbiBjb21wdXRlZEdldHRlciAoKSB7XG4gICAgdmFyIHdhdGNoZXIgPSB0aGlzLl9jb21wdXRlZFdhdGNoZXJzICYmIHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnNba2V5XTtcbiAgICBpZiAod2F0Y2hlcikge1xuICAgICAgaWYgKHdhdGNoZXIuZGlydHkpIHtcbiAgICAgICAgd2F0Y2hlci5ldmFsdWF0ZSgpO1xuICAgICAgfVxuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgd2F0Y2hlci5kZXBlbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdldHRlckludm9rZXIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0aGlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIHR5cGUgXFxcIlwiICsgKHR5cGVvZiBtZXRob2RzW2tleV0pICsgXCJcXFwiIGluIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbi4gXCIgK1xuICAgICAgICAgIFwiRGlkIHlvdSByZWZlcmVuY2UgdGhlIGZ1bmN0aW9uIGNvcnJlY3RseT9cIixcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY29uZmxpY3RzIHdpdGggYW4gZXhpc3RpbmcgVnVlIGluc3RhbmNlIG1ldGhvZC4gXCIgK1xuICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2bVtrZXldID0gdHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJyA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXYXRjaCAodm0sIHdhdGNoKSB7XG4gIGZvciAodmFyIGtleSBpbiB3YXRjaCkge1xuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgaGFuZGxlcixcbiAgb3B0aW9uc1xuKSB7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHJldHVybiB2bS4kd2F0Y2goZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gc3RhdGVNaXhpbiAoVnVlKSB7XG4gIC8vIGZsb3cgc29tZWhvdyBoYXMgcHJvYmxlbXMgd2l0aCBkaXJlY3RseSBkZWNsYXJlZCBkZWZpbml0aW9uIG9iamVjdFxuICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgLy8gdGhlIG9iamVjdCBoZXJlLlxuICB2YXIgZGF0YURlZiA9IHt9O1xuICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgdmFyIHByb3BzRGVmID0ge307XG4gIHByb3BzRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Byb3BzIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgK1xuICAgICAgICAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcIiRwcm9wcyBpcyByZWFkb25seS5cIiwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRkYXRhJywgZGF0YURlZik7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHByb3BzJywgcHJvcHNEZWYpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgVnVlLnByb3RvdHlwZS4kZGVsZXRlID0gZGVsO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKFxuICAgIGV4cE9yRm4sXG4gICAgY2IsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGNiKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKVxuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnVzZXIgPSB0cnVlO1xuICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwodm0sIHdhdGNoZXIudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHZtLCAoXCJjYWxsYmFjayBmb3IgaW1tZWRpYXRlIHdhdGNoZXIgXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICAgIHdhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkJDMgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGEgdWlkXG4gICAgdm0uX3VpZCA9IHVpZCQzKys7XG5cbiAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgKHZtLl91aWQpO1xuICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICB9XG5cbiAgICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICAgIHZtLl9pc1Z1ZSA9IHRydWU7XG4gICAgLy8gbWVyZ2Ugb3B0aW9uc1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAvLyBvcHRpbWl6ZSBpbnRlcm5hbCBjb21wb25lbnQgaW5zdGFudGlhdGlvblxuICAgICAgLy8gc2luY2UgZHluYW1pYyBvcHRpb25zIG1lcmdpbmcgaXMgcHJldHR5IHNsb3csIGFuZCBub25lIG9mIHRoZVxuICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICBpbml0SW50ZXJuYWxDb21wb25lbnQodm0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgICAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyh2bS5jb25zdHJ1Y3RvciksXG4gICAgICAgIG9wdGlvbnMgfHwge30sXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbml0UHJveHkodm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gICAgLy8gZXhwb3NlIHJlYWwgc2VsZlxuICAgIHZtLl9zZWxmID0gdm07XG4gICAgaW5pdExpZmVjeWNsZSh2bSk7XG4gICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgaW5pdFJlbmRlcih2bSk7XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVDcmVhdGUnKTtcbiAgICBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wc1xuICAgIGluaXRTdGF0ZSh2bSk7XG4gICAgaW5pdFByb3ZpZGUodm0pOyAvLyByZXNvbHZlIHByb3ZpZGUgYWZ0ZXIgZGF0YS9wcm9wc1xuICAgIGNhbGxIb29rKHZtLCAnY3JlYXRlZCcpO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLnBlcmZvcm1hbmNlICYmIG1hcmspIHtcbiAgICAgIHZtLl9uYW1lID0gZm9ybWF0Q29tcG9uZW50TmFtZSh2bSwgZmFsc2UpO1xuICAgICAgbWFyayhlbmRUYWcpO1xuICAgICAgbWVhc3VyZSgoXCJ2dWUgXCIgKyAodm0uX25hbWUpICsgXCIgaW5pdFwiKSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgfVxuXG4gICAgaWYgKHZtLiRvcHRpb25zLmVsKSB7XG4gICAgICB2bS4kbW91bnQodm0uJG9wdGlvbnMuZWwpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdEludGVybmFsQ29tcG9uZW50ICh2bSwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IHZtLiRvcHRpb25zID0gT2JqZWN0LmNyZWF0ZSh2bS5jb25zdHJ1Y3Rvci5vcHRpb25zKTtcbiAgLy8gZG9pbmcgdGhpcyBiZWNhdXNlIGl0J3MgZmFzdGVyIHRoYW4gZHluYW1pYyBlbnVtZXJhdGlvbi5cbiAgdmFyIHBhcmVudFZub2RlID0gb3B0aW9ucy5fcGFyZW50Vm5vZGU7XG4gIG9wdHMucGFyZW50ID0gb3B0aW9ucy5wYXJlbnQ7XG4gIG9wdHMuX3BhcmVudFZub2RlID0gcGFyZW50Vm5vZGU7XG5cbiAgdmFyIHZub2RlQ29tcG9uZW50T3B0aW9ucyA9IHBhcmVudFZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gIG9wdHMucHJvcHNEYXRhID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnByb3BzRGF0YTtcbiAgb3B0cy5fcGFyZW50TGlzdGVuZXJzID0gdm5vZGVDb21wb25lbnRPcHRpb25zLmxpc3RlbmVycztcbiAgb3B0cy5fcmVuZGVyQ2hpbGRyZW4gPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMuY2hpbGRyZW47XG4gIG9wdHMuX2NvbXBvbmVudFRhZyA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy50YWc7XG5cbiAgaWYgKG9wdGlvbnMucmVuZGVyKSB7XG4gICAgb3B0cy5yZW5kZXIgPSBvcHRpb25zLnJlbmRlcjtcbiAgICBvcHRzLnN0YXRpY1JlbmRlckZucyA9IG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIGlmIChDdG9yLnN1cGVyKSB7XG4gICAgdmFyIHN1cGVyT3B0aW9ucyA9IHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvci5zdXBlcik7XG4gICAgdmFyIGNhY2hlZFN1cGVyT3B0aW9ucyA9IEN0b3Iuc3VwZXJPcHRpb25zO1xuICAgIGlmIChzdXBlck9wdGlvbnMgIT09IGNhY2hlZFN1cGVyT3B0aW9ucykge1xuICAgICAgLy8gc3VwZXIgb3B0aW9uIGNoYW5nZWQsXG4gICAgICAvLyBuZWVkIHRvIHJlc29sdmUgbmV3IG9wdGlvbnMuXG4gICAgICBDdG9yLnN1cGVyT3B0aW9ucyA9IHN1cGVyT3B0aW9ucztcbiAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgbGF0ZS1tb2RpZmllZC9hdHRhY2hlZCBvcHRpb25zICgjNDk3NilcbiAgICAgIHZhciBtb2RpZmllZE9wdGlvbnMgPSByZXNvbHZlTW9kaWZpZWRPcHRpb25zKEN0b3IpO1xuICAgICAgLy8gdXBkYXRlIGJhc2UgZXh0ZW5kIG9wdGlvbnNcbiAgICAgIGlmIChtb2RpZmllZE9wdGlvbnMpIHtcbiAgICAgICAgZXh0ZW5kKEN0b3IuZXh0ZW5kT3B0aW9ucywgbW9kaWZpZWRPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoc3VwZXJPcHRpb25zLCBDdG9yLmV4dGVuZE9wdGlvbnMpO1xuICAgICAgaWYgKG9wdGlvbnMubmFtZSkge1xuICAgICAgICBvcHRpb25zLmNvbXBvbmVudHNbb3B0aW9ucy5uYW1lXSA9IEN0b3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zXG59XG5cbmZ1bmN0aW9uIHJlc29sdmVNb2RpZmllZE9wdGlvbnMgKEN0b3IpIHtcbiAgdmFyIG1vZGlmaWVkO1xuICB2YXIgbGF0ZXN0ID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgc2VhbGVkID0gQ3Rvci5zZWFsZWRPcHRpb25zO1xuICBmb3IgKHZhciBrZXkgaW4gbGF0ZXN0KSB7XG4gICAgaWYgKGxhdGVzdFtrZXldICE9PSBzZWFsZWRba2V5XSkge1xuICAgICAgaWYgKCFtb2RpZmllZCkgeyBtb2RpZmllZCA9IHt9OyB9XG4gICAgICBtb2RpZmllZFtrZXldID0gbGF0ZXN0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBtb2RpZmllZFxufVxuXG5mdW5jdGlvbiBWdWUgKG9wdGlvbnMpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAhKHRoaXMgaW5zdGFuY2VvZiBWdWUpXG4gICkge1xuICAgIHdhcm4oJ1Z1ZSBpcyBhIGNvbnN0cnVjdG9yIGFuZCBzaG91bGQgYmUgY2FsbGVkIHdpdGggdGhlIGBuZXdgIGtleXdvcmQnKTtcbiAgfVxuICB0aGlzLl9pbml0KG9wdGlvbnMpO1xufVxuXG5pbml0TWl4aW4oVnVlKTtcbnN0YXRlTWl4aW4oVnVlKTtcbmV2ZW50c01peGluKFZ1ZSk7XG5saWZlY3ljbGVNaXhpbihWdWUpO1xucmVuZGVyTWl4aW4oVnVlKTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRVc2UgKFZ1ZSkge1xuICBWdWUudXNlID0gZnVuY3Rpb24gKHBsdWdpbikge1xuICAgIHZhciBpbnN0YWxsZWRQbHVnaW5zID0gKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgfHwgKHRoaXMuX2luc3RhbGxlZFBsdWdpbnMgPSBbXSkpO1xuICAgIGlmIChpbnN0YWxsZWRQbHVnaW5zLmluZGV4T2YocGx1Z2luKSA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8vIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICBpZiAodHlwZW9mIHBsdWdpbi5pbnN0YWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uaW5zdGFsbC5hcHBseShwbHVnaW4sIGFyZ3MpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGx1Z2luLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBpbnN0YWxsZWRQbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdE1peGluJDEgKFZ1ZSkge1xuICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnModGhpcy5vcHRpb25zLCBtaXhpbik7XG4gICAgcmV0dXJuIHRoaXNcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRFeHRlbmQgKFZ1ZSkge1xuICAvKipcbiAgICogRWFjaCBpbnN0YW5jZSBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIFZ1ZSwgaGFzIGEgdW5pcXVlXG4gICAqIGNpZC4gVGhpcyBlbmFibGVzIHVzIHRvIGNyZWF0ZSB3cmFwcGVkIFwiY2hpbGRcbiAgICogY29uc3RydWN0b3JzXCIgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UgYW5kIGNhY2hlIHRoZW0uXG4gICAqL1xuICBWdWUuY2lkID0gMDtcbiAgdmFyIGNpZCA9IDE7XG5cbiAgLyoqXG4gICAqIENsYXNzIGluaGVyaXRhbmNlXG4gICAqL1xuICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgU3VwZXIgPSB0aGlzO1xuICAgIHZhciBTdXBlcklkID0gU3VwZXIuY2lkO1xuICAgIHZhciBjYWNoZWRDdG9ycyA9IGV4dGVuZE9wdGlvbnMuX0N0b3IgfHwgKGV4dGVuZE9wdGlvbnMuX0N0b3IgPSB7fSk7XG4gICAgaWYgKGNhY2hlZEN0b3JzW1N1cGVySWRdKSB7XG4gICAgICByZXR1cm4gY2FjaGVkQ3RvcnNbU3VwZXJJZF1cbiAgICB9XG5cbiAgICB2YXIgbmFtZSA9IGV4dGVuZE9wdGlvbnMubmFtZSB8fCBTdXBlci5vcHRpb25zLm5hbWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgbmFtZSkge1xuICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIHZhciBTdWIgPSBmdW5jdGlvbiBWdWVDb21wb25lbnQgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX2luaXQob3B0aW9ucyk7XG4gICAgfTtcbiAgICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpO1xuICAgIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWI7XG4gICAgU3ViLmNpZCA9IGNpZCsrO1xuICAgIFN1Yi5vcHRpb25zID0gbWVyZ2VPcHRpb25zKFxuICAgICAgU3VwZXIub3B0aW9ucyxcbiAgICAgIGV4dGVuZE9wdGlvbnNcbiAgICApO1xuICAgIFN1Ylsnc3VwZXInXSA9IFN1cGVyO1xuXG4gICAgLy8gRm9yIHByb3BzIGFuZCBjb21wdXRlZCBwcm9wZXJ0aWVzLCB3ZSBkZWZpbmUgdGhlIHByb3h5IGdldHRlcnMgb25cbiAgICAvLyB0aGUgVnVlIGluc3RhbmNlcyBhdCBleHRlbnNpb24gdGltZSwgb24gdGhlIGV4dGVuZGVkIHByb3RvdHlwZS4gVGhpc1xuICAgIC8vIGF2b2lkcyBPYmplY3QuZGVmaW5lUHJvcGVydHkgY2FsbHMgZm9yIGVhY2ggaW5zdGFuY2UgY3JlYXRlZC5cbiAgICBpZiAoU3ViLm9wdGlvbnMucHJvcHMpIHtcbiAgICAgIGluaXRQcm9wcyQxKFN1Yik7XG4gICAgfVxuICAgIGlmIChTdWIub3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgaW5pdENvbXB1dGVkJDEoU3ViKTtcbiAgICB9XG5cbiAgICAvLyBhbGxvdyBmdXJ0aGVyIGV4dGVuc2lvbi9taXhpbi9wbHVnaW4gdXNhZ2VcbiAgICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kO1xuICAgIFN1Yi5taXhpbiA9IFN1cGVyLm1peGluO1xuICAgIFN1Yi51c2UgPSBTdXBlci51c2U7XG5cbiAgICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXG4gICAgLy8gY2FuIGhhdmUgdGhlaXIgcHJpdmF0ZSBhc3NldHMgdG9vLlxuICAgIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdO1xuICAgIH0pO1xuICAgIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgICBpZiAobmFtZSkge1xuICAgICAgU3ViLm9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IFN1YjtcbiAgICB9XG5cbiAgICAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBzdXBlciBvcHRpb25zIGF0IGV4dGVuc2lvbiB0aW1lLlxuICAgIC8vIGxhdGVyIGF0IGluc3RhbnRpYXRpb24gd2UgY2FuIGNoZWNrIGlmIFN1cGVyJ3Mgb3B0aW9ucyBoYXZlXG4gICAgLy8gYmVlbiB1cGRhdGVkLlxuICAgIFN1Yi5zdXBlck9wdGlvbnMgPSBTdXBlci5vcHRpb25zO1xuICAgIFN1Yi5leHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucztcbiAgICBTdWIuc2VhbGVkT3B0aW9ucyA9IGV4dGVuZCh7fSwgU3ViLm9wdGlvbnMpO1xuXG4gICAgLy8gY2FjaGUgY29uc3RydWN0b3JcbiAgICBjYWNoZWRDdG9yc1tTdXBlcklkXSA9IFN1YjtcbiAgICByZXR1cm4gU3ViXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9wcyQxIChDb21wKSB7XG4gIHZhciBwcm9wcyA9IENvbXAub3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgcHJveHkoQ29tcC5wcm90b3R5cGUsIFwiX3Byb3BzXCIsIGtleSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdENvbXB1dGVkJDEgKENvbXApIHtcbiAgdmFyIGNvbXB1dGVkID0gQ29tcC5vcHRpb25zLmNvbXB1dGVkO1xuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWQpIHtcbiAgICBkZWZpbmVDb21wdXRlZChDb21wLnByb3RvdHlwZSwga2V5LCBjb21wdXRlZFtrZXldKTtcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEFzc2V0UmVnaXN0ZXJzIChWdWUpIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhc3NldCByZWdpc3RyYXRpb24gbWV0aG9kcy5cbiAgICovXG4gIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBWdWVbdHlwZV0gPSBmdW5jdGlvbiAoXG4gICAgICBpZCxcbiAgICAgIGRlZmluaXRpb25cbiAgICApIHtcbiAgICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zW3R5cGUgKyAncyddW2lkXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgICAgICAgdmFsaWRhdGVDb21wb25lbnROYW1lKGlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgaXNQbGFpbk9iamVjdChkZWZpbml0aW9uKSkge1xuICAgICAgICAgIGRlZmluaXRpb24ubmFtZSA9IGRlZmluaXRpb24ubmFtZSB8fCBpZDtcbiAgICAgICAgICBkZWZpbml0aW9uID0gdGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChkZWZpbml0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2RpcmVjdGl2ZScgJiYgdHlwZW9mIGRlZmluaXRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkZWZpbml0aW9uID0geyBiaW5kOiBkZWZpbml0aW9uLCB1cGRhdGU6IGRlZmluaXRpb24gfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdID0gZGVmaW5pdGlvbjtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25cbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbn1cblxuLyogICovXG5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lIChvcHRzKSB7XG4gIHJldHVybiBvcHRzICYmIChvcHRzLkN0b3Iub3B0aW9ucy5uYW1lIHx8IG9wdHMudGFnKVxufVxuXG5mdW5jdGlvbiBtYXRjaGVzIChwYXR0ZXJuLCBuYW1lKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4uaW5kZXhPZihuYW1lKSA+IC0xXG4gIH0gZWxzZSBpZiAodHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4uc3BsaXQoJywnKS5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmIChpc1JlZ0V4cChwYXR0ZXJuKSkge1xuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobmFtZSlcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gcHJ1bmVDYWNoZSAoa2VlcEFsaXZlSW5zdGFuY2UsIGZpbHRlcikge1xuICB2YXIgY2FjaGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5jYWNoZTtcbiAgdmFyIGtleXMgPSBrZWVwQWxpdmVJbnN0YW5jZS5rZXlzO1xuICB2YXIgX3Zub2RlID0ga2VlcEFsaXZlSW5zdGFuY2UuX3Zub2RlO1xuICBmb3IgKHZhciBrZXkgaW4gY2FjaGUpIHtcbiAgICB2YXIgY2FjaGVkTm9kZSA9IGNhY2hlW2tleV07XG4gICAgaWYgKGNhY2hlZE5vZGUpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjYWNoZWROb2RlLmNvbXBvbmVudE9wdGlvbnMpO1xuICAgICAgaWYgKG5hbWUgJiYgIWZpbHRlcihuYW1lKSkge1xuICAgICAgICBwcnVuZUNhY2hlRW50cnkoY2FjaGUsIGtleSwga2V5cywgX3Zub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJ1bmVDYWNoZUVudHJ5IChcbiAgY2FjaGUsXG4gIGtleSxcbiAga2V5cyxcbiAgY3VycmVudFxuKSB7XG4gIHZhciBjYWNoZWQkJDEgPSBjYWNoZVtrZXldO1xuICBpZiAoY2FjaGVkJCQxICYmICghY3VycmVudCB8fCBjYWNoZWQkJDEudGFnICE9PSBjdXJyZW50LnRhZykpIHtcbiAgICBjYWNoZWQkJDEuY29tcG9uZW50SW5zdGFuY2UuJGRlc3Ryb3koKTtcbiAgfVxuICBjYWNoZVtrZXldID0gbnVsbDtcbiAgcmVtb3ZlKGtleXMsIGtleSk7XG59XG5cbnZhciBwYXR0ZXJuVHlwZXMgPSBbU3RyaW5nLCBSZWdFeHAsIEFycmF5XTtcblxudmFyIEtlZXBBbGl2ZSA9IHtcbiAgbmFtZTogJ2tlZXAtYWxpdmUnLFxuICBhYnN0cmFjdDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIGluY2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBleGNsdWRlOiBwYXR0ZXJuVHlwZXMsXG4gICAgbWF4OiBbU3RyaW5nLCBOdW1iZXJdXG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5rZXlzID0gW107XG4gIH0sXG5cbiAgZGVzdHJveWVkOiBmdW5jdGlvbiBkZXN0cm95ZWQgKCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICBwcnVuZUNhY2hlRW50cnkodGhpcy5jYWNoZSwga2V5LCB0aGlzLmtleXMpO1xuICAgIH1cbiAgfSxcblxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIHRoaXMuJHdhdGNoKCdpbmNsdWRlJywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICAgIHRoaXMuJHdhdGNoKCdleGNsdWRlJywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcHJ1bmVDYWNoZSh0aGlzJDEsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhbWF0Y2hlcyh2YWwsIG5hbWUpOyB9KTtcbiAgICB9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoKSB7XG4gICAgdmFyIHNsb3QgPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgIHZhciB2bm9kZSA9IGdldEZpcnN0Q29tcG9uZW50Q2hpbGQoc2xvdCk7XG4gICAgdmFyIGNvbXBvbmVudE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICAgIGlmIChjb21wb25lbnRPcHRpb25zKSB7XG4gICAgICAvLyBjaGVjayBwYXR0ZXJuXG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICB2YXIgcmVmID0gdGhpcztcbiAgICAgIHZhciBpbmNsdWRlID0gcmVmLmluY2x1ZGU7XG4gICAgICB2YXIgZXhjbHVkZSA9IHJlZi5leGNsdWRlO1xuICAgICAgaWYgKFxuICAgICAgICAvLyBub3QgaW5jbHVkZWRcbiAgICAgICAgKGluY2x1ZGUgJiYgKCFuYW1lIHx8ICFtYXRjaGVzKGluY2x1ZGUsIG5hbWUpKSkgfHxcbiAgICAgICAgLy8gZXhjbHVkZWRcbiAgICAgICAgKGV4Y2x1ZGUgJiYgbmFtZSAmJiBtYXRjaGVzKGV4Y2x1ZGUsIG5hbWUpKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB2bm9kZVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVmJDEgPSB0aGlzO1xuICAgICAgdmFyIGNhY2hlID0gcmVmJDEuY2FjaGU7XG4gICAgICB2YXIga2V5cyA9IHJlZiQxLmtleXM7XG4gICAgICB2YXIga2V5ID0gdm5vZGUua2V5ID09IG51bGxcbiAgICAgICAgLy8gc2FtZSBjb25zdHJ1Y3RvciBtYXkgZ2V0IHJlZ2lzdGVyZWQgYXMgZGlmZmVyZW50IGxvY2FsIGNvbXBvbmVudHNcbiAgICAgICAgLy8gc28gY2lkIGFsb25lIGlzIG5vdCBlbm91Z2ggKCMzMjY5KVxuICAgICAgICA/IGNvbXBvbmVudE9wdGlvbnMuQ3Rvci5jaWQgKyAoY29tcG9uZW50T3B0aW9ucy50YWcgPyAoXCI6OlwiICsgKGNvbXBvbmVudE9wdGlvbnMudGFnKSkgOiAnJylcbiAgICAgICAgOiB2bm9kZS5rZXk7XG4gICAgICBpZiAoY2FjaGVba2V5XSkge1xuICAgICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IGNhY2hlW2tleV0uY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICAgIC8vIG1ha2UgY3VycmVudCBrZXkgZnJlc2hlc3RcbiAgICAgICAgcmVtb3ZlKGtleXMsIGtleSk7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IHZub2RlO1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgLy8gcHJ1bmUgb2xkZXN0IGVudHJ5XG4gICAgICAgIGlmICh0aGlzLm1heCAmJiBrZXlzLmxlbmd0aCA+IHBhcnNlSW50KHRoaXMubWF4KSkge1xuICAgICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5c1swXSwga2V5cywgdGhpcy5fdm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZub2RlLmRhdGEua2VlcEFsaXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlIHx8IChzbG90ICYmIHNsb3RbMF0pXG4gIH1cbn07XG5cbnZhciBidWlsdEluQ29tcG9uZW50cyA9IHtcbiAgS2VlcEFsaXZlOiBLZWVwQWxpdmVcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0R2xvYmFsQVBJIChWdWUpIHtcbiAgLy8gY29uZmlnXG4gIHZhciBjb25maWdEZWYgPSB7fTtcbiAgY29uZmlnRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbmZpZzsgfTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25maWdEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgJ0RvIG5vdCByZXBsYWNlIHRoZSBWdWUuY29uZmlnIG9iamVjdCwgc2V0IGluZGl2aWR1YWwgZmllbGRzIGluc3RlYWQuJ1xuICAgICAgKTtcbiAgICB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUsICdjb25maWcnLCBjb25maWdEZWYpO1xuXG4gIC8vIGV4cG9zZWQgdXRpbCBtZXRob2RzLlxuICAvLyBOT1RFOiB0aGVzZSBhcmUgbm90IGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgcHVibGljIEFQSSAtIGF2b2lkIHJlbHlpbmcgb25cbiAgLy8gdGhlbSB1bmxlc3MgeW91IGFyZSBhd2FyZSBvZiB0aGUgcmlzay5cbiAgVnVlLnV0aWwgPSB7XG4gICAgd2Fybjogd2FybixcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICBtZXJnZU9wdGlvbnM6IG1lcmdlT3B0aW9ucyxcbiAgICBkZWZpbmVSZWFjdGl2ZTogZGVmaW5lUmVhY3RpdmUkJDFcbiAgfTtcblxuICBWdWUuc2V0ID0gc2V0O1xuICBWdWUuZGVsZXRlID0gZGVsO1xuICBWdWUubmV4dFRpY2sgPSBuZXh0VGljaztcblxuICAvLyAyLjYgZXhwbGljaXQgb2JzZXJ2YWJsZSBBUElcbiAgVnVlLm9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgb2JzZXJ2ZShvYmopO1xuICAgIHJldHVybiBvYmpcbiAgfTtcblxuICBWdWUub3B0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIEFTU0VUX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBWdWUub3B0aW9uc1t0eXBlICsgJ3MnXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIH0pO1xuXG4gIC8vIHRoaXMgaXMgdXNlZCB0byBpZGVudGlmeSB0aGUgXCJiYXNlXCIgY29uc3RydWN0b3IgdG8gZXh0ZW5kIGFsbCBwbGFpbi1vYmplY3RcbiAgLy8gY29tcG9uZW50cyB3aXRoIGluIFdlZXgncyBtdWx0aS1pbnN0YW5jZSBzY2VuYXJpb3MuXG4gIFZ1ZS5vcHRpb25zLl9iYXNlID0gVnVlO1xuXG4gIGV4dGVuZChWdWUub3B0aW9ucy5jb21wb25lbnRzLCBidWlsdEluQ29tcG9uZW50cyk7XG5cbiAgaW5pdFVzZShWdWUpO1xuICBpbml0TWl4aW4kMShWdWUpO1xuICBpbml0RXh0ZW5kKFZ1ZSk7XG4gIGluaXRBc3NldFJlZ2lzdGVycyhWdWUpO1xufVxuXG5pbml0R2xvYmFsQVBJKFZ1ZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGlzU2VydmVyJywge1xuICBnZXQ6IGlzU2VydmVyUmVuZGVyaW5nXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckc3NyQ29udGV4dCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQgKCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgcmV0dXJuIHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHRcbiAgfVxufSk7XG5cbi8vIGV4cG9zZSBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCBmb3Igc3NyIHJ1bnRpbWUgaGVscGVyIGluc3RhbGxhdGlvblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ0Z1bmN0aW9uYWxSZW5kZXJDb250ZXh0Jywge1xuICB2YWx1ZTogRnVuY3Rpb25hbFJlbmRlckNvbnRleHRcbn0pO1xuXG5WdWUudmVyc2lvbiA9ICcyLjYuMTAnO1xuXG4vKiAgKi9cblxuLy8gdGhlc2UgYXJlIHJlc2VydmVkIGZvciB3ZWIgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSBjb21waWxlZCBhd2F5XG4vLyBkdXJpbmcgdGVtcGxhdGUgY29tcGlsYXRpb25cbnZhciBpc1Jlc2VydmVkQXR0ciA9IG1ha2VNYXAoJ3N0eWxlLGNsYXNzJyk7XG5cbi8vIGF0dHJpYnV0ZXMgdGhhdCBzaG91bGQgYmUgdXNpbmcgcHJvcHMgZm9yIGJpbmRpbmdcbnZhciBhY2NlcHRWYWx1ZSA9IG1ha2VNYXAoJ2lucHV0LHRleHRhcmVhLG9wdGlvbixzZWxlY3QscHJvZ3Jlc3MnKTtcbnZhciBtdXN0VXNlUHJvcCA9IGZ1bmN0aW9uICh0YWcsIHR5cGUsIGF0dHIpIHtcbiAgcmV0dXJuIChcbiAgICAoYXR0ciA9PT0gJ3ZhbHVlJyAmJiBhY2NlcHRWYWx1ZSh0YWcpKSAmJiB0eXBlICE9PSAnYnV0dG9uJyB8fFxuICAgIChhdHRyID09PSAnc2VsZWN0ZWQnICYmIHRhZyA9PT0gJ29wdGlvbicpIHx8XG4gICAgKGF0dHIgPT09ICdjaGVja2VkJyAmJiB0YWcgPT09ICdpbnB1dCcpIHx8XG4gICAgKGF0dHIgPT09ICdtdXRlZCcgJiYgdGFnID09PSAndmlkZW8nKVxuICApXG59O1xuXG52YXIgaXNFbnVtZXJhdGVkQXR0ciA9IG1ha2VNYXAoJ2NvbnRlbnRlZGl0YWJsZSxkcmFnZ2FibGUsc3BlbGxjaGVjaycpO1xuXG52YXIgaXNWYWxpZENvbnRlbnRFZGl0YWJsZVZhbHVlID0gbWFrZU1hcCgnZXZlbnRzLGNhcmV0LHR5cGluZyxwbGFpbnRleHQtb25seScpO1xuXG52YXIgY29udmVydEVudW1lcmF0ZWRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJ1xuICAgID8gJ2ZhbHNlJ1xuICAgIC8vIGFsbG93IGFyYml0cmFyeSBzdHJpbmcgdmFsdWUgZm9yIGNvbnRlbnRlZGl0YWJsZVxuICAgIDoga2V5ID09PSAnY29udGVudGVkaXRhYmxlJyAmJiBpc1ZhbGlkQ29udGVudEVkaXRhYmxlVmFsdWUodmFsdWUpXG4gICAgICA/IHZhbHVlXG4gICAgICA6ICd0cnVlJ1xufTtcblxudmFyIGlzQm9vbGVhbkF0dHIgPSBtYWtlTWFwKFxuICAnYWxsb3dmdWxsc2NyZWVuLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjaGVja2VkLGNvbXBhY3QsY29udHJvbHMsZGVjbGFyZSwnICtcbiAgJ2RlZmF1bHQsZGVmYXVsdGNoZWNrZWQsZGVmYXVsdG11dGVkLGRlZmF1bHRzZWxlY3RlZCxkZWZlcixkaXNhYmxlZCwnICtcbiAgJ2VuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsJyArXG4gICdtdXRlZCxub2hyZWYsbm9yZXNpemUsbm9zaGFkZSxub3ZhbGlkYXRlLG5vd3JhcCxvcGVuLHBhdXNlb25leGl0LHJlYWRvbmx5LCcgK1xuICAncmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNvcnRhYmxlLHRyYW5zbGF0ZSwnICtcbiAgJ3RydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGUnXG4pO1xuXG52YXIgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcblxudmFyIGlzWGxpbmsgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gbmFtZS5jaGFyQXQoNSkgPT09ICc6JyAmJiBuYW1lLnNsaWNlKDAsIDUpID09PSAneGxpbmsnXG59O1xuXG52YXIgZ2V0WGxpbmtQcm9wID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGlzWGxpbmsobmFtZSkgPyBuYW1lLnNsaWNlKDYsIG5hbWUubGVuZ3RoKSA6ICcnXG59O1xuXG52YXIgaXNGYWxzeUF0dHJWYWx1ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsIHx8IHZhbCA9PT0gZmFsc2Vcbn07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBnZW5DbGFzc0ZvclZub2RlICh2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gIHZhciBjaGlsZE5vZGUgPSB2bm9kZTtcbiAgd2hpbGUgKGlzRGVmKGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZSkpIHtcbiAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlO1xuICAgIGlmIChjaGlsZE5vZGUgJiYgY2hpbGROb2RlLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBtZXJnZUNsYXNzRGF0YShjaGlsZE5vZGUuZGF0YSwgZGF0YSk7XG4gICAgfVxuICB9XG4gIHdoaWxlIChpc0RlZihwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnQpKSB7XG4gICAgaWYgKHBhcmVudE5vZGUgJiYgcGFyZW50Tm9kZS5kYXRhKSB7XG4gICAgICBkYXRhID0gbWVyZ2VDbGFzc0RhdGEoZGF0YSwgcGFyZW50Tm9kZS5kYXRhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlbmRlckNsYXNzKGRhdGEuc3RhdGljQ2xhc3MsIGRhdGEuY2xhc3MpXG59XG5cbmZ1bmN0aW9uIG1lcmdlQ2xhc3NEYXRhIChjaGlsZCwgcGFyZW50KSB7XG4gIHJldHVybiB7XG4gICAgc3RhdGljQ2xhc3M6IGNvbmNhdChjaGlsZC5zdGF0aWNDbGFzcywgcGFyZW50LnN0YXRpY0NsYXNzKSxcbiAgICBjbGFzczogaXNEZWYoY2hpbGQuY2xhc3MpXG4gICAgICA/IFtjaGlsZC5jbGFzcywgcGFyZW50LmNsYXNzXVxuICAgICAgOiBwYXJlbnQuY2xhc3NcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJDbGFzcyAoXG4gIHN0YXRpY0NsYXNzLFxuICBkeW5hbWljQ2xhc3Ncbikge1xuICBpZiAoaXNEZWYoc3RhdGljQ2xhc3MpIHx8IGlzRGVmKGR5bmFtaWNDbGFzcykpIHtcbiAgICByZXR1cm4gY29uY2F0KHN0YXRpY0NsYXNzLCBzdHJpbmdpZnlDbGFzcyhkeW5hbWljQ2xhc3MpKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBjb25jYXQgKGEsIGIpIHtcbiAgcmV0dXJuIGEgPyBiID8gKGEgKyAnICcgKyBiKSA6IGEgOiAoYiB8fCAnJylcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5Q2xhc3MgKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzdHJpbmdpZnlBcnJheSh2YWx1ZSlcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeU9iamVjdCh2YWx1ZSlcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlBcnJheSAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICB2YXIgc3RyaW5naWZpZWQ7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGlzRGVmKHN0cmluZ2lmaWVkID0gc3RyaW5naWZ5Q2xhc3ModmFsdWVbaV0pKSAmJiBzdHJpbmdpZmllZCAhPT0gJycpIHtcbiAgICAgIGlmIChyZXMpIHsgcmVzICs9ICcgJzsgfVxuICAgICAgcmVzICs9IHN0cmluZ2lmaWVkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeU9iamVjdCAodmFsdWUpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAodmFsdWVba2V5XSkge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbi8qICAqL1xuXG52YXIgbmFtZXNwYWNlTWFwID0ge1xuICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gIG1hdGg6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJ1xufTtcblxudmFyIGlzSFRNTFRhZyA9IG1ha2VNYXAoXG4gICdodG1sLGJvZHksYmFzZSxoZWFkLGxpbmssbWV0YSxzdHlsZSx0aXRsZSwnICtcbiAgJ2FkZHJlc3MsYXJ0aWNsZSxhc2lkZSxmb290ZXIsaGVhZGVyLGgxLGgyLGgzLGg0LGg1LGg2LGhncm91cCxuYXYsc2VjdGlvbiwnICtcbiAgJ2RpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLCcgK1xuICAnYSxiLGFiYnIsYmRpLGJkbyxicixjaXRlLGNvZGUsZGF0YSxkZm4sZW0saSxrYmQsbWFyayxxLHJwLHJ0LHJ0YyxydWJ5LCcgK1xuICAncyxzYW1wLHNtYWxsLHNwYW4sc3Ryb25nLHN1YixzdXAsdGltZSx1LHZhcix3YnIsYXJlYSxhdWRpbyxtYXAsdHJhY2ssdmlkZW8sJyArXG4gICdlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucywnICtcbiAgJ2NhcHRpb24sY29sLGNvbGdyb3VwLHRhYmxlLHRoZWFkLHRib2R5LHRkLHRoLHRyLCcgK1xuICAnYnV0dG9uLGRhdGFsaXN0LGZpZWxkc2V0LGZvcm0saW5wdXQsbGFiZWwsbGVnZW5kLG1ldGVyLG9wdGdyb3VwLG9wdGlvbiwnICtcbiAgJ291dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsJyArXG4gICdkZXRhaWxzLGRpYWxvZyxtZW51LG1lbnVpdGVtLHN1bW1hcnksJyArXG4gICdjb250ZW50LGVsZW1lbnQsc2hhZG93LHRlbXBsYXRlLGJsb2NrcXVvdGUsaWZyYW1lLHRmb290J1xuKTtcblxuLy8gdGhpcyBtYXAgaXMgaW50ZW50aW9uYWxseSBzZWxlY3RpdmUsIG9ubHkgY292ZXJpbmcgU1ZHIGVsZW1lbnRzIHRoYXQgbWF5XG4vLyBjb250YWluIGNoaWxkIGVsZW1lbnRzLlxudmFyIGlzU1ZHID0gbWFrZU1hcChcbiAgJ3N2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQtZmFjZSwnICtcbiAgJ2ZvcmVpZ25PYmplY3QsZyxnbHlwaCxpbWFnZSxsaW5lLG1hcmtlcixtYXNrLG1pc3NpbmctZ2x5cGgscGF0aCxwYXR0ZXJuLCcgK1xuICAncG9seWdvbixwb2x5bGluZSxyZWN0LHN3aXRjaCxzeW1ib2wsdGV4dCx0ZXh0cGF0aCx0c3Bhbix1c2UsdmlldycsXG4gIHRydWVcbik7XG5cbnZhciBpc1Jlc2VydmVkVGFnID0gZnVuY3Rpb24gKHRhZykge1xuICByZXR1cm4gaXNIVE1MVGFnKHRhZykgfHwgaXNTVkcodGFnKVxufTtcblxuZnVuY3Rpb24gZ2V0VGFnTmFtZXNwYWNlICh0YWcpIHtcbiAgaWYgKGlzU1ZHKHRhZykpIHtcbiAgICByZXR1cm4gJ3N2ZydcbiAgfVxuICAvLyBiYXNpYyBzdXBwb3J0IGZvciBNYXRoTUxcbiAgLy8gbm90ZSBpdCBkb2Vzbid0IHN1cHBvcnQgb3RoZXIgTWF0aE1MIGVsZW1lbnRzIGJlaW5nIGNvbXBvbmVudCByb290c1xuICBpZiAodGFnID09PSAnbWF0aCcpIHtcbiAgICByZXR1cm4gJ21hdGgnXG4gIH1cbn1cblxudmFyIHVua25vd25FbGVtZW50Q2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuZnVuY3Rpb24gaXNVbmtub3duRWxlbWVudCAodGFnKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWluQnJvd3Nlcikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKGlzUmVzZXJ2ZWRUYWcodGFnKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHRhZyA9IHRhZy50b0xvd2VyQ2FzZSgpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHVua25vd25FbGVtZW50Q2FjaGVbdGFnXVxuICB9XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgaWYgKHRhZy5pbmRleE9mKCctJykgPiAtMSkge1xuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI4MjEwMzY0LzEwNzAyNDRcbiAgICByZXR1cm4gKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IChcbiAgICAgIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTFVua25vd25FbGVtZW50IHx8XG4gICAgICBlbC5jb25zdHJ1Y3RvciA9PT0gd2luZG93LkhUTUxFbGVtZW50XG4gICAgKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHVua25vd25FbGVtZW50Q2FjaGVbdGFnXSA9IC9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZWwudG9TdHJpbmcoKSkpXG4gIH1cbn1cblxudmFyIGlzVGV4dElucHV0VHlwZSA9IG1ha2VNYXAoJ3RleHQsbnVtYmVyLHBhc3N3b3JkLHNlYXJjaCxlbWFpbCx0ZWwsdXJsJyk7XG5cbi8qICAqL1xuXG4vKipcbiAqIFF1ZXJ5IGFuIGVsZW1lbnQgc2VsZWN0b3IgaWYgaXQncyBub3QgYW4gZWxlbWVudCBhbHJlYWR5LlxuICovXG5mdW5jdGlvbiBxdWVyeSAoZWwpIHtcbiAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcbiAgICBpZiAoIXNlbGVjdGVkKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdDYW5ub3QgZmluZCBlbGVtZW50OiAnICsgZWxcbiAgICAgICk7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGVsXG4gIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQkMSAodGFnTmFtZSwgdm5vZGUpIHtcbiAgdmFyIGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gIGlmICh0YWdOYW1lICE9PSAnc2VsZWN0Jykge1xuICAgIHJldHVybiBlbG1cbiAgfVxuICAvLyBmYWxzZSBvciBudWxsIHdpbGwgcmVtb3ZlIHRoZSBhdHRyaWJ1dGUgYnV0IHVuZGVmaW5lZCB3aWxsIG5vdFxuICBpZiAodm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLmF0dHJzICYmIHZub2RlLmRhdGEuYXR0cnMubXVsdGlwbGUgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ211bHRpcGxlJywgJ211bHRpcGxlJyk7XG4gIH1cbiAgcmV0dXJuIGVsbVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50TlMgKG5hbWVzcGFjZSwgdGFnTmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZU1hcFtuYW1lc3BhY2VdLCB0YWdOYW1lKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUZXh0Tm9kZSAodGV4dCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dClcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudCAodGV4dCkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh0ZXh0KVxufVxuXG5mdW5jdGlvbiBpbnNlcnRCZWZvcmUgKHBhcmVudE5vZGUsIG5ld05vZGUsIHJlZmVyZW5jZU5vZGUpIHtcbiAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmZXJlbmNlTm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoaWxkIChub2RlLCBjaGlsZCkge1xuICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ2hpbGQgKG5vZGUsIGNoaWxkKSB7XG4gIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuXG5mdW5jdGlvbiBwYXJlbnROb2RlIChub2RlKSB7XG4gIHJldHVybiBub2RlLnBhcmVudE5vZGVcbn1cblxuZnVuY3Rpb24gbmV4dFNpYmxpbmcgKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUubmV4dFNpYmxpbmdcbn1cblxuZnVuY3Rpb24gdGFnTmFtZSAobm9kZSkge1xuICByZXR1cm4gbm9kZS50YWdOYW1lXG59XG5cbmZ1bmN0aW9uIHNldFRleHRDb250ZW50IChub2RlLCB0ZXh0KSB7XG4gIG5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5mdW5jdGlvbiBzZXRTdHlsZVNjb3BlIChub2RlLCBzY29wZUlkKSB7XG4gIG5vZGUuc2V0QXR0cmlidXRlKHNjb3BlSWQsICcnKTtcbn1cblxudmFyIG5vZGVPcHMgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnQkMSxcbiAgY3JlYXRlRWxlbWVudE5TOiBjcmVhdGVFbGVtZW50TlMsXG4gIGNyZWF0ZVRleHROb2RlOiBjcmVhdGVUZXh0Tm9kZSxcbiAgY3JlYXRlQ29tbWVudDogY3JlYXRlQ29tbWVudCxcbiAgaW5zZXJ0QmVmb3JlOiBpbnNlcnRCZWZvcmUsXG4gIHJlbW92ZUNoaWxkOiByZW1vdmVDaGlsZCxcbiAgYXBwZW5kQ2hpbGQ6IGFwcGVuZENoaWxkLFxuICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxuICBuZXh0U2libGluZzogbmV4dFNpYmxpbmcsXG4gIHRhZ05hbWU6IHRhZ05hbWUsXG4gIHNldFRleHRDb250ZW50OiBzZXRUZXh0Q29udGVudCxcbiAgc2V0U3R5bGVTY29wZTogc2V0U3R5bGVTY29wZVxufSk7XG5cbi8qICAqL1xuXG52YXIgcmVmID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZSAoXywgdm5vZGUpIHtcbiAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gIH0sXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgICBpZiAob2xkVm5vZGUuZGF0YS5yZWYgIT09IHZub2RlLmRhdGEucmVmKSB7XG4gICAgICByZWdpc3RlclJlZihvbGRWbm9kZSwgdHJ1ZSk7XG4gICAgICByZWdpc3RlclJlZih2bm9kZSk7XG4gICAgfVxuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHJlZ2lzdGVyUmVmKHZub2RlLCB0cnVlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJSZWYgKHZub2RlLCBpc1JlbW92YWwpIHtcbiAgdmFyIGtleSA9IHZub2RlLmRhdGEucmVmO1xuICBpZiAoIWlzRGVmKGtleSkpIHsgcmV0dXJuIH1cblxuICB2YXIgdm0gPSB2bm9kZS5jb250ZXh0O1xuICB2YXIgcmVmID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgfHwgdm5vZGUuZWxtO1xuICB2YXIgcmVmcyA9IHZtLiRyZWZzO1xuICBpZiAoaXNSZW1vdmFsKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xuICAgICAgcmVtb3ZlKHJlZnNba2V5XSwgcmVmKTtcbiAgICB9IGVsc2UgaWYgKHJlZnNba2V5XSA9PT0gcmVmKSB7XG4gICAgICByZWZzW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh2bm9kZS5kYXRhLnJlZkluRm9yKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVmc1trZXldKSkge1xuICAgICAgICByZWZzW2tleV0gPSBbcmVmXTtcbiAgICAgIH0gZWxzZSBpZiAocmVmc1trZXldLmluZGV4T2YocmVmKSA8IDApIHtcbiAgICAgICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgICAgIHJlZnNba2V5XS5wdXNoKHJlZik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZnNba2V5XSA9IHJlZjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBWaXJ0dWFsIERPTSBwYXRjaGluZyBhbGdvcml0aG0gYmFzZWQgb24gU25hYmJkb20gYnlcbiAqIFNpbW9uIEZyaWlzIFZpbmR1bSAoQHBhbGRlcGluZClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGRlcGluZC9zbmFiYmRvbS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKlxuICogbW9kaWZpZWQgYnkgRXZhbiBZb3UgKEB5eXg5OTA4MDMpXG4gKlxuICogTm90IHR5cGUtY2hlY2tpbmcgdGhpcyBiZWNhdXNlIHRoaXMgZmlsZSBpcyBwZXJmLWNyaXRpY2FsIGFuZCB0aGUgY29zdFxuICogb2YgbWFraW5nIGZsb3cgdW5kZXJzdGFuZCBpdCBpcyBub3Qgd29ydGggaXQuXG4gKi9cblxudmFyIGVtcHR5Tm9kZSA9IG5ldyBWTm9kZSgnJywge30sIFtdKTtcblxudmFyIGhvb2tzID0gWydjcmVhdGUnLCAnYWN0aXZhdGUnLCAndXBkYXRlJywgJ3JlbW92ZScsICdkZXN0cm95J107XG5cbmZ1bmN0aW9uIHNhbWVWbm9kZSAoYSwgYikge1xuICByZXR1cm4gKFxuICAgIGEua2V5ID09PSBiLmtleSAmJiAoXG4gICAgICAoXG4gICAgICAgIGEudGFnID09PSBiLnRhZyAmJlxuICAgICAgICBhLmlzQ29tbWVudCA9PT0gYi5pc0NvbW1lbnQgJiZcbiAgICAgICAgaXNEZWYoYS5kYXRhKSA9PT0gaXNEZWYoYi5kYXRhKSAmJlxuICAgICAgICBzYW1lSW5wdXRUeXBlKGEsIGIpXG4gICAgICApIHx8IChcbiAgICAgICAgaXNUcnVlKGEuaXNBc3luY1BsYWNlaG9sZGVyKSAmJlxuICAgICAgICBhLmFzeW5jRmFjdG9yeSA9PT0gYi5hc3luY0ZhY3RvcnkgJiZcbiAgICAgICAgaXNVbmRlZihiLmFzeW5jRmFjdG9yeS5lcnJvcilcbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuZnVuY3Rpb24gc2FtZUlucHV0VHlwZSAoYSwgYikge1xuICBpZiAoYS50YWcgIT09ICdpbnB1dCcpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaTtcbiAgdmFyIHR5cGVBID0gaXNEZWYoaSA9IGEuZGF0YSkgJiYgaXNEZWYoaSA9IGkuYXR0cnMpICYmIGkudHlwZTtcbiAgdmFyIHR5cGVCID0gaXNEZWYoaSA9IGIuZGF0YSkgJiYgaXNEZWYoaSA9IGkuYXR0cnMpICYmIGkudHlwZTtcbiAgcmV0dXJuIHR5cGVBID09PSB0eXBlQiB8fCBpc1RleHRJbnB1dFR5cGUodHlwZUEpICYmIGlzVGV4dElucHV0VHlwZSh0eXBlQilcbn1cblxuZnVuY3Rpb24gY3JlYXRlS2V5VG9PbGRJZHggKGNoaWxkcmVuLCBiZWdpbklkeCwgZW5kSWR4KSB7XG4gIHZhciBpLCBrZXk7XG4gIHZhciBtYXAgPSB7fTtcbiAgZm9yIChpID0gYmVnaW5JZHg7IGkgPD0gZW5kSWR4OyArK2kpIHtcbiAgICBrZXkgPSBjaGlsZHJlbltpXS5rZXk7XG4gICAgaWYgKGlzRGVmKGtleSkpIHsgbWFwW2tleV0gPSBpOyB9XG4gIH1cbiAgcmV0dXJuIG1hcFxufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXRjaEZ1bmN0aW9uIChiYWNrZW5kKSB7XG4gIHZhciBpLCBqO1xuICB2YXIgY2JzID0ge307XG5cbiAgdmFyIG1vZHVsZXMgPSBiYWNrZW5kLm1vZHVsZXM7XG4gIHZhciBub2RlT3BzID0gYmFja2VuZC5ub2RlT3BzO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7ICsraSkge1xuICAgIGNic1tob29rc1tpXV0gPSBbXTtcbiAgICBmb3IgKGogPSAwOyBqIDwgbW9kdWxlcy5sZW5ndGg7ICsraikge1xuICAgICAgaWYgKGlzRGVmKG1vZHVsZXNbal1baG9va3NbaV1dKSkge1xuICAgICAgICBjYnNbaG9va3NbaV1dLnB1c2gobW9kdWxlc1tqXVtob29rc1tpXV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtcHR5Tm9kZUF0IChlbG0pIHtcbiAgICByZXR1cm4gbmV3IFZOb2RlKG5vZGVPcHMudGFnTmFtZShlbG0pLnRvTG93ZXJDYXNlKCksIHt9LCBbXSwgdW5kZWZpbmVkLCBlbG0pXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVSbUNiIChjaGlsZEVsbSwgbGlzdGVuZXJzKSB7XG4gICAgZnVuY3Rpb24gcmVtb3ZlJCQxICgpIHtcbiAgICAgIGlmICgtLXJlbW92ZSQkMS5saXN0ZW5lcnMgPT09IDApIHtcbiAgICAgICAgcmVtb3ZlTm9kZShjaGlsZEVsbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlbW92ZSQkMS5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgcmV0dXJuIHJlbW92ZSQkMVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTm9kZSAoZWwpIHtcbiAgICB2YXIgcGFyZW50ID0gbm9kZU9wcy5wYXJlbnROb2RlKGVsKTtcbiAgICAvLyBlbGVtZW50IG1heSBoYXZlIGFscmVhZHkgYmVlbiByZW1vdmVkIGR1ZSB0byB2LWh0bWwgLyB2LXRleHRcbiAgICBpZiAoaXNEZWYocGFyZW50KSkge1xuICAgICAgbm9kZU9wcy5yZW1vdmVDaGlsZChwYXJlbnQsIGVsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1Vua25vd25FbGVtZW50JCQxICh2bm9kZSwgaW5WUHJlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICFpblZQcmUgJiZcbiAgICAgICF2bm9kZS5ucyAmJlxuICAgICAgIShcbiAgICAgICAgY29uZmlnLmlnbm9yZWRFbGVtZW50cy5sZW5ndGggJiZcbiAgICAgICAgY29uZmlnLmlnbm9yZWRFbGVtZW50cy5zb21lKGZ1bmN0aW9uIChpZ25vcmUpIHtcbiAgICAgICAgICByZXR1cm4gaXNSZWdFeHAoaWdub3JlKVxuICAgICAgICAgICAgPyBpZ25vcmUudGVzdCh2bm9kZS50YWcpXG4gICAgICAgICAgICA6IGlnbm9yZSA9PT0gdm5vZGUudGFnXG4gICAgICAgIH0pXG4gICAgICApICYmXG4gICAgICBjb25maWcuaXNVbmtub3duRWxlbWVudCh2bm9kZS50YWcpXG4gICAgKVxuICB9XG5cbiAgdmFyIGNyZWF0aW5nRWxtSW5WUHJlID0gMDtcblxuICBmdW5jdGlvbiBjcmVhdGVFbG0gKFxuICAgIHZub2RlLFxuICAgIGluc2VydGVkVm5vZGVRdWV1ZSxcbiAgICBwYXJlbnRFbG0sXG4gICAgcmVmRWxtLFxuICAgIG5lc3RlZCxcbiAgICBvd25lckFycmF5LFxuICAgIGluZGV4XG4gICkge1xuICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XG4gICAgICAvLyBUaGlzIHZub2RlIHdhcyB1c2VkIGluIGEgcHJldmlvdXMgcmVuZGVyIVxuICAgICAgLy8gbm93IGl0J3MgdXNlZCBhcyBhIG5ldyBub2RlLCBvdmVyd3JpdGluZyBpdHMgZWxtIHdvdWxkIGNhdXNlXG4gICAgICAvLyBwb3RlbnRpYWwgcGF0Y2ggZXJyb3JzIGRvd24gdGhlIHJvYWQgd2hlbiBpdCdzIHVzZWQgYXMgYW4gaW5zZXJ0aW9uXG4gICAgICAvLyByZWZlcmVuY2Ugbm9kZS4gSW5zdGVhZCwgd2UgY2xvbmUgdGhlIG5vZGUgb24tZGVtYW5kIGJlZm9yZSBjcmVhdGluZ1xuICAgICAgLy8gYXNzb2NpYXRlZCBET00gZWxlbWVudCBmb3IgaXQuXG4gICAgICB2bm9kZSA9IG93bmVyQXJyYXlbaW5kZXhdID0gY2xvbmVWTm9kZSh2bm9kZSk7XG4gICAgfVxuXG4gICAgdm5vZGUuaXNSb290SW5zZXJ0ID0gIW5lc3RlZDsgLy8gZm9yIHRyYW5zaXRpb24gZW50ZXIgY2hlY2tcbiAgICBpZiAoY3JlYXRlQ29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIHBhcmVudEVsbSwgcmVmRWxtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuICAgIHZhciB0YWcgPSB2bm9kZS50YWc7XG4gICAgaWYgKGlzRGVmKHRhZykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEucHJlKSB7XG4gICAgICAgICAgY3JlYXRpbmdFbG1JblZQcmUrKztcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNVbmtub3duRWxlbWVudCQkMSh2bm9kZSwgY3JlYXRpbmdFbG1JblZQcmUpKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgICdVbmtub3duIGN1c3RvbSBlbGVtZW50OiA8JyArIHRhZyArICc+IC0gZGlkIHlvdSAnICtcbiAgICAgICAgICAgICdyZWdpc3RlciB0aGUgY29tcG9uZW50IGNvcnJlY3RseT8gRm9yIHJlY3Vyc2l2ZSBjb21wb25lbnRzLCAnICtcbiAgICAgICAgICAgICdtYWtlIHN1cmUgdG8gcHJvdmlkZSB0aGUgXCJuYW1lXCIgb3B0aW9uLicsXG4gICAgICAgICAgICB2bm9kZS5jb250ZXh0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2bm9kZS5lbG0gPSB2bm9kZS5uc1xuICAgICAgICA/IG5vZGVPcHMuY3JlYXRlRWxlbWVudE5TKHZub2RlLm5zLCB0YWcpXG4gICAgICAgIDogbm9kZU9wcy5jcmVhdGVFbGVtZW50KHRhZywgdm5vZGUpO1xuICAgICAgc2V0U2NvcGUodm5vZGUpO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIHtcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgICBpbnZva2VDcmVhdGVIb29rcyh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGRhdGEgJiYgZGF0YS5wcmUpIHtcbiAgICAgICAgY3JlYXRpbmdFbG1JblZQcmUtLTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVHJ1ZSh2bm9kZS5pc0NvbW1lbnQpKSB7XG4gICAgICB2bm9kZS5lbG0gPSBub2RlT3BzLmNyZWF0ZUNvbW1lbnQodm5vZGUudGV4dCk7XG4gICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZub2RlLmVsbSA9IG5vZGVPcHMuY3JlYXRlVGV4dE5vZGUodm5vZGUudGV4dCk7XG4gICAgICBpbnNlcnQocGFyZW50RWxtLCB2bm9kZS5lbG0sIHJlZkVsbSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkge1xuICAgIHZhciBpID0gdm5vZGUuZGF0YTtcbiAgICBpZiAoaXNEZWYoaSkpIHtcbiAgICAgIHZhciBpc1JlYWN0aXZhdGVkID0gaXNEZWYodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpICYmIGkua2VlcEFsaXZlO1xuICAgICAgaWYgKGlzRGVmKGkgPSBpLmhvb2spICYmIGlzRGVmKGkgPSBpLmluaXQpKSB7XG4gICAgICAgIGkodm5vZGUsIGZhbHNlIC8qIGh5ZHJhdGluZyAqLyk7XG4gICAgICB9XG4gICAgICAvLyBhZnRlciBjYWxsaW5nIHRoZSBpbml0IGhvb2ssIGlmIHRoZSB2bm9kZSBpcyBhIGNoaWxkIGNvbXBvbmVudFxuICAgICAgLy8gaXQgc2hvdWxkJ3ZlIGNyZWF0ZWQgYSBjaGlsZCBpbnN0YW5jZSBhbmQgbW91bnRlZCBpdC4gdGhlIGNoaWxkXG4gICAgICAvLyBjb21wb25lbnQgYWxzbyBoYXMgc2V0IHRoZSBwbGFjZWhvbGRlciB2bm9kZSdzIGVsbS5cbiAgICAgIC8vIGluIHRoYXQgY2FzZSB3ZSBjYW4ganVzdCByZXR1cm4gdGhlIGVsZW1lbnQgYW5kIGJlIGRvbmUuXG4gICAgICBpZiAoaXNEZWYodm5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgICAgIGluaXRDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICAgIGluc2VydChwYXJlbnRFbG0sIHZub2RlLmVsbSwgcmVmRWxtKTtcbiAgICAgICAgaWYgKGlzVHJ1ZShpc1JlYWN0aXZhdGVkKSkge1xuICAgICAgICAgIHJlYWN0aXZhdGVDb21wb25lbnQodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdENvbXBvbmVudCAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGlmIChpc0RlZih2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQpKSB7XG4gICAgICBpbnNlcnRlZFZub2RlUXVldWUucHVzaC5hcHBseShpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmRhdGEucGVuZGluZ0luc2VydCk7XG4gICAgICB2bm9kZS5kYXRhLnBlbmRpbmdJbnNlcnQgPSBudWxsO1xuICAgIH1cbiAgICB2bm9kZS5lbG0gPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS4kZWw7XG4gICAgaWYgKGlzUGF0Y2hhYmxlKHZub2RlKSkge1xuICAgICAgaW52b2tlQ3JlYXRlSG9va3Modm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICBzZXRTY29wZSh2bm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVtcHR5IGNvbXBvbmVudCByb290LlxuICAgICAgLy8gc2tpcCBhbGwgZWxlbWVudC1yZWxhdGVkIG1vZHVsZXMgZXhjZXB0IGZvciByZWYgKCMzNDU1KVxuICAgICAgcmVnaXN0ZXJSZWYodm5vZGUpO1xuICAgICAgLy8gbWFrZSBzdXJlIHRvIGludm9rZSB0aGUgaW5zZXJ0IGhvb2tcbiAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKHZub2RlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFjdGl2YXRlQ29tcG9uZW50ICh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIHJlZkVsbSkge1xuICAgIHZhciBpO1xuICAgIC8vIGhhY2sgZm9yICM0MzM5OiBhIHJlYWN0aXZhdGVkIGNvbXBvbmVudCB3aXRoIGlubmVyIHRyYW5zaXRpb25cbiAgICAvLyBkb2VzIG5vdCB0cmlnZ2VyIGJlY2F1c2UgdGhlIGlubmVyIG5vZGUncyBjcmVhdGVkIGhvb2tzIGFyZSBub3QgY2FsbGVkXG4gICAgLy8gYWdhaW4uIEl0J3Mgbm90IGlkZWFsIHRvIGludm9sdmUgbW9kdWxlLXNwZWNpZmljIGxvZ2ljIGluIGhlcmUgYnV0XG4gICAgLy8gdGhlcmUgZG9lc24ndCBzZWVtIHRvIGJlIGEgYmV0dGVyIHdheSB0byBkbyBpdC5cbiAgICB2YXIgaW5uZXJOb2RlID0gdm5vZGU7XG4gICAgd2hpbGUgKGlubmVyTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgaW5uZXJOb2RlID0gaW5uZXJOb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICAgIGlmIChpc0RlZihpID0gaW5uZXJOb2RlLmRhdGEpICYmIGlzRGVmKGkgPSBpLnRyYW5zaXRpb24pKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuYWN0aXZhdGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjYnMuYWN0aXZhdGVbaV0oZW1wdHlOb2RlLCBpbm5lck5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGluc2VydGVkVm5vZGVRdWV1ZS5wdXNoKGlubmVyTm9kZSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVubGlrZSBhIG5ld2x5IGNyZWF0ZWQgY29tcG9uZW50LFxuICAgIC8vIGEgcmVhY3RpdmF0ZWQga2VlcC1hbGl2ZSBjb21wb25lbnQgZG9lc24ndCBpbnNlcnQgaXRzZWxmXG4gICAgaW5zZXJ0KHBhcmVudEVsbSwgdm5vZGUuZWxtLCByZWZFbG0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0IChwYXJlbnQsIGVsbSwgcmVmJCQxKSB7XG4gICAgaWYgKGlzRGVmKHBhcmVudCkpIHtcbiAgICAgIGlmIChpc0RlZihyZWYkJDEpKSB7XG4gICAgICAgIGlmIChub2RlT3BzLnBhcmVudE5vZGUocmVmJCQxKSA9PT0gcGFyZW50KSB7XG4gICAgICAgICAgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50LCBlbG0sIHJlZiQkMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQocGFyZW50LCBlbG0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkcmVuICh2bm9kZSwgY2hpbGRyZW4sIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY2hlY2tEdXBsaWNhdGVLZXlzKGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY3JlYXRlRWxtKGNoaWxkcmVuW2ldLCBpbnNlcnRlZFZub2RlUXVldWUsIHZub2RlLmVsbSwgbnVsbCwgdHJ1ZSwgY2hpbGRyZW4sIGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUodm5vZGUudGV4dCkpIHtcbiAgICAgIG5vZGVPcHMuYXBwZW5kQ2hpbGQodm5vZGUuZWxtLCBub2RlT3BzLmNyZWF0ZVRleHROb2RlKFN0cmluZyh2bm9kZS50ZXh0KSkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGF0Y2hhYmxlICh2bm9kZSkge1xuICAgIHdoaWxlICh2bm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgdm5vZGUgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGU7XG4gICAgfVxuICAgIHJldHVybiBpc0RlZih2bm9kZS50YWcpXG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VDcmVhdGVIb29rcyAodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSkge1xuICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNicy5jcmVhdGUubGVuZ3RoOyArK2kkMSkge1xuICAgICAgY2JzLmNyZWF0ZVtpJDFdKGVtcHR5Tm9kZSwgdm5vZGUpO1xuICAgIH1cbiAgICBpID0gdm5vZGUuZGF0YS5ob29rOyAvLyBSZXVzZSB2YXJpYWJsZVxuICAgIGlmIChpc0RlZihpKSkge1xuICAgICAgaWYgKGlzRGVmKGkuY3JlYXRlKSkgeyBpLmNyZWF0ZShlbXB0eU5vZGUsIHZub2RlKTsgfVxuICAgICAgaWYgKGlzRGVmKGkuaW5zZXJ0KSkgeyBpbnNlcnRlZFZub2RlUXVldWUucHVzaCh2bm9kZSk7IH1cbiAgICB9XG4gIH1cblxuICAvLyBzZXQgc2NvcGUgaWQgYXR0cmlidXRlIGZvciBzY29wZWQgQ1NTLlxuICAvLyB0aGlzIGlzIGltcGxlbWVudGVkIGFzIGEgc3BlY2lhbCBjYXNlIHRvIGF2b2lkIHRoZSBvdmVyaGVhZFxuICAvLyBvZiBnb2luZyB0aHJvdWdoIHRoZSBub3JtYWwgYXR0cmlidXRlIHBhdGNoaW5nIHByb2Nlc3MuXG4gIGZ1bmN0aW9uIHNldFNjb3BlICh2bm9kZSkge1xuICAgIHZhciBpO1xuICAgIGlmIChpc0RlZihpID0gdm5vZGUuZm5TY29wZUlkKSkge1xuICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhbmNlc3RvciA9IHZub2RlO1xuICAgICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChpc0RlZihpID0gYW5jZXN0b3IuY29udGV4dCkgJiYgaXNEZWYoaSA9IGkuJG9wdGlvbnMuX3Njb3BlSWQpKSB7XG4gICAgICAgICAgbm9kZU9wcy5zZXRTdHlsZVNjb3BlKHZub2RlLmVsbSwgaSk7XG4gICAgICAgIH1cbiAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZvciBzbG90IGNvbnRlbnQgdGhleSBzaG91bGQgYWxzbyBnZXQgdGhlIHNjb3BlSWQgZnJvbSB0aGUgaG9zdCBpbnN0YW5jZS5cbiAgICBpZiAoaXNEZWYoaSA9IGFjdGl2ZUluc3RhbmNlKSAmJlxuICAgICAgaSAhPT0gdm5vZGUuY29udGV4dCAmJlxuICAgICAgaSAhPT0gdm5vZGUuZm5Db250ZXh0ICYmXG4gICAgICBpc0RlZihpID0gaS4kb3B0aW9ucy5fc2NvcGVJZClcbiAgICApIHtcbiAgICAgIG5vZGVPcHMuc2V0U3R5bGVTY29wZSh2bm9kZS5lbG0sIGkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFZub2RlcyAocGFyZW50RWxtLCByZWZFbG0sIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKSB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgY3JlYXRlRWxtKHZub2Rlc1tzdGFydElkeF0sIGluc2VydGVkVm5vZGVRdWV1ZSwgcGFyZW50RWxtLCByZWZFbG0sIGZhbHNlLCB2bm9kZXMsIHN0YXJ0SWR4KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VEZXN0cm95SG9vayAodm5vZGUpIHtcbiAgICB2YXIgaSwgajtcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGRhdGEpKSB7XG4gICAgICBpZiAoaXNEZWYoaSA9IGRhdGEuaG9vaykgJiYgaXNEZWYoaSA9IGkuZGVzdHJveSkpIHsgaSh2bm9kZSk7IH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMuZGVzdHJveS5sZW5ndGg7ICsraSkgeyBjYnMuZGVzdHJveVtpXSh2bm9kZSk7IH1cbiAgICB9XG4gICAgaWYgKGlzRGVmKGkgPSB2bm9kZS5jaGlsZHJlbikpIHtcbiAgICAgIGZvciAoaiA9IDA7IGogPCB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7ICsraikge1xuICAgICAgICBpbnZva2VEZXN0cm95SG9vayh2bm9kZS5jaGlsZHJlbltqXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVm5vZGVzIChwYXJlbnRFbG0sIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgIHZhciBjaCA9IHZub2Rlc1tzdGFydElkeF07XG4gICAgICBpZiAoaXNEZWYoY2gpKSB7XG4gICAgICAgIGlmIChpc0RlZihjaC50YWcpKSB7XG4gICAgICAgICAgcmVtb3ZlQW5kSW52b2tlUmVtb3ZlSG9vayhjaCk7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2soY2gpO1xuICAgICAgICB9IGVsc2UgeyAvLyBUZXh0IG5vZGVcbiAgICAgICAgICByZW1vdmVOb2RlKGNoLmVsbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rICh2bm9kZSwgcm0pIHtcbiAgICBpZiAoaXNEZWYocm0pIHx8IGlzRGVmKHZub2RlLmRhdGEpKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBjYnMucmVtb3ZlLmxlbmd0aCArIDE7XG4gICAgICBpZiAoaXNEZWYocm0pKSB7XG4gICAgICAgIC8vIHdlIGhhdmUgYSByZWN1cnNpdmVseSBwYXNzZWQgZG93biBybSBjYWxsYmFja1xuICAgICAgICAvLyBpbmNyZWFzZSB0aGUgbGlzdGVuZXJzIGNvdW50XG4gICAgICAgIHJtLmxpc3RlbmVycyArPSBsaXN0ZW5lcnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkaXJlY3RseSByZW1vdmluZ1xuICAgICAgICBybSA9IGNyZWF0ZVJtQ2Iodm5vZGUuZWxtLCBsaXN0ZW5lcnMpO1xuICAgICAgfVxuICAgICAgLy8gcmVjdXJzaXZlbHkgaW52b2tlIGhvb2tzIG9uIGNoaWxkIGNvbXBvbmVudCByb290IG5vZGVcbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UpICYmIGlzRGVmKGkgPSBpLl92bm9kZSkgJiYgaXNEZWYoaS5kYXRhKSkge1xuICAgICAgICByZW1vdmVBbmRJbnZva2VSZW1vdmVIb29rKGksIHJtKTtcbiAgICAgIH1cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMucmVtb3ZlLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNicy5yZW1vdmVbaV0odm5vZGUsIHJtKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5yZW1vdmUpKSB7XG4gICAgICAgIGkodm5vZGUsIHJtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZU5vZGUodm5vZGUuZWxtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDaGlsZHJlbiAocGFyZW50RWxtLCBvbGRDaCwgbmV3Q2gsIGluc2VydGVkVm5vZGVRdWV1ZSwgcmVtb3ZlT25seSkge1xuICAgIHZhciBvbGRTdGFydElkeCA9IDA7XG4gICAgdmFyIG5ld1N0YXJ0SWR4ID0gMDtcbiAgICB2YXIgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICB2YXIgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIHZhciBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgdmFyIG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICB2YXIgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIHZhciBvbGRLZXlUb0lkeCwgaWR4SW5PbGQsIHZub2RlVG9Nb3ZlLCByZWZFbG07XG5cbiAgICAvLyByZW1vdmVPbmx5IGlzIGEgc3BlY2lhbCBmbGFnIHVzZWQgb25seSBieSA8dHJhbnNpdGlvbi1ncm91cD5cbiAgICAvLyB0byBlbnN1cmUgcmVtb3ZlZCBlbGVtZW50cyBzdGF5IGluIGNvcnJlY3QgcmVsYXRpdmUgcG9zaXRpb25zXG4gICAgLy8gZHVyaW5nIGxlYXZpbmcgdHJhbnNpdGlvbnNcbiAgICB2YXIgY2FuTW92ZSA9ICFyZW1vdmVPbmx5O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhuZXdDaCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgIGlmIChpc1VuZGVmKG9sZFN0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTsgLy8gVm5vZGUgaGFzIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgfSBlbHNlIGlmIChpc1VuZGVmKG9sZEVuZFZub2RlKSkge1xuICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgIHBhdGNoVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgcGF0Y2hWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgbmV3Q2gsIG5ld0VuZElkeCk7XG4gICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgIH0gZWxzZSBpZiAoc2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKSkgeyAvLyBWbm9kZSBtb3ZlZCByaWdodFxuICAgICAgICBwYXRjaFZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdFbmRJZHgpO1xuICAgICAgICBjYW5Nb3ZlICYmIG5vZGVPcHMuaW5zZXJ0QmVmb3JlKHBhcmVudEVsbSwgb2xkU3RhcnRWbm9kZS5lbG0sIG5vZGVPcHMubmV4dFNpYmxpbmcob2xkRW5kVm5vZGUuZWxtKSk7XG4gICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICB9IGVsc2UgaWYgKHNhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHsgLy8gVm5vZGUgbW92ZWQgbGVmdFxuICAgICAgICBwYXRjaFZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG5ld0NoLCBuZXdTdGFydElkeCk7XG4gICAgICAgIGNhbk1vdmUgJiYgbm9kZU9wcy5pbnNlcnRCZWZvcmUocGFyZW50RWxtLCBvbGRFbmRWbm9kZS5lbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtKTtcbiAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpc1VuZGVmKG9sZEtleVRvSWR4KSkgeyBvbGRLZXlUb0lkeCA9IGNyZWF0ZUtleVRvT2xkSWR4KG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTsgfVxuICAgICAgICBpZHhJbk9sZCA9IGlzRGVmKG5ld1N0YXJ0Vm5vZGUua2V5KVxuICAgICAgICAgID8gb2xkS2V5VG9JZHhbbmV3U3RhcnRWbm9kZS5rZXldXG4gICAgICAgICAgOiBmaW5kSWR4SW5PbGQobmV3U3RhcnRWbm9kZSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgICAgICBpZiAoaXNVbmRlZihpZHhJbk9sZCkpIHsgLy8gTmV3IGVsZW1lbnRcbiAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bm9kZVRvTW92ZSA9IG9sZENoW2lkeEluT2xkXTtcbiAgICAgICAgICBpZiAoc2FtZVZub2RlKHZub2RlVG9Nb3ZlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgcGF0Y2hWbm9kZSh2bm9kZVRvTW92ZSwgbmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBuZXdDaCwgbmV3U3RhcnRJZHgpO1xuICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2FuTW92ZSAmJiBub2RlT3BzLmluc2VydEJlZm9yZShwYXJlbnRFbG0sIHZub2RlVG9Nb3ZlLmVsbSwgb2xkU3RhcnRWbm9kZS5lbG0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzYW1lIGtleSBidXQgZGlmZmVyZW50IGVsZW1lbnQuIHRyZWF0IGFzIG5ldyBlbGVtZW50XG4gICAgICAgICAgICBjcmVhdGVFbG0obmV3U3RhcnRWbm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBwYXJlbnRFbG0sIG9sZFN0YXJ0Vm5vZGUuZWxtLCBmYWxzZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgIHJlZkVsbSA9IGlzVW5kZWYobmV3Q2hbbmV3RW5kSWR4ICsgMV0pID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLmVsbTtcbiAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIHJlZkVsbSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgfSBlbHNlIGlmIChuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgcmVtb3ZlVm5vZGVzKHBhcmVudEVsbSwgb2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRHVwbGljYXRlS2V5cyAoY2hpbGRyZW4pIHtcbiAgICB2YXIgc2VlbktleXMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdm5vZGUgPSBjaGlsZHJlbltpXTtcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXk7XG4gICAgICBpZiAoaXNEZWYoa2V5KSkge1xuICAgICAgICBpZiAoc2VlbktleXNba2V5XSkge1xuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAoXCJEdXBsaWNhdGUga2V5cyBkZXRlY3RlZDogJ1wiICsga2V5ICsgXCInLiBUaGlzIG1heSBjYXVzZSBhbiB1cGRhdGUgZXJyb3IuXCIpLFxuICAgICAgICAgICAgdm5vZGUuY29udGV4dFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VlbktleXNba2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5kSWR4SW5PbGQgKG5vZGUsIG9sZENoLCBzdGFydCwgZW5kKSB7XG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHZhciBjID0gb2xkQ2hbaV07XG4gICAgICBpZiAoaXNEZWYoYykgJiYgc2FtZVZub2RlKG5vZGUsIGMpKSB7IHJldHVybiBpIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYXRjaFZub2RlIChcbiAgICBvbGRWbm9kZSxcbiAgICB2bm9kZSxcbiAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgb3duZXJBcnJheSxcbiAgICBpbmRleCxcbiAgICByZW1vdmVPbmx5XG4gICkge1xuICAgIGlmIChvbGRWbm9kZSA9PT0gdm5vZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0RlZih2bm9kZS5lbG0pICYmIGlzRGVmKG93bmVyQXJyYXkpKSB7XG4gICAgICAvLyBjbG9uZSByZXVzZWQgdm5vZGVcbiAgICAgIHZub2RlID0gb3duZXJBcnJheVtpbmRleF0gPSBjbG9uZVZOb2RlKHZub2RlKTtcbiAgICB9XG5cbiAgICB2YXIgZWxtID0gdm5vZGUuZWxtID0gb2xkVm5vZGUuZWxtO1xuXG4gICAgaWYgKGlzVHJ1ZShvbGRWbm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIpKSB7XG4gICAgICBpZiAoaXNEZWYodm5vZGUuYXN5bmNGYWN0b3J5LnJlc29sdmVkKSkge1xuICAgICAgICBoeWRyYXRlKG9sZFZub2RlLmVsbSwgdm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2bm9kZS5pc0FzeW5jUGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gcmV1c2UgZWxlbWVudCBmb3Igc3RhdGljIHRyZWVzLlxuICAgIC8vIG5vdGUgd2Ugb25seSBkbyB0aGlzIGlmIHRoZSB2bm9kZSBpcyBjbG9uZWQgLVxuICAgIC8vIGlmIHRoZSBuZXcgbm9kZSBpcyBub3QgY2xvbmVkIGl0IG1lYW5zIHRoZSByZW5kZXIgZnVuY3Rpb25zIGhhdmUgYmVlblxuICAgIC8vIHJlc2V0IGJ5IHRoZSBob3QtcmVsb2FkLWFwaSBhbmQgd2UgbmVlZCB0byBkbyBhIHByb3BlciByZS1yZW5kZXIuXG4gICAgaWYgKGlzVHJ1ZSh2bm9kZS5pc1N0YXRpYykgJiZcbiAgICAgIGlzVHJ1ZShvbGRWbm9kZS5pc1N0YXRpYykgJiZcbiAgICAgIHZub2RlLmtleSA9PT0gb2xkVm5vZGUua2V5ICYmXG4gICAgICAoaXNUcnVlKHZub2RlLmlzQ2xvbmVkKSB8fCBpc1RydWUodm5vZGUuaXNPbmNlKSlcbiAgICApIHtcbiAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gb2xkVm5vZGUuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgaTtcbiAgICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gICAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnByZXBhdGNoKSkge1xuICAgICAgaShvbGRWbm9kZSwgdm5vZGUpO1xuICAgIH1cblxuICAgIHZhciBvbGRDaCA9IG9sZFZub2RlLmNoaWxkcmVuO1xuICAgIHZhciBjaCA9IHZub2RlLmNoaWxkcmVuO1xuICAgIGlmIChpc0RlZihkYXRhKSAmJiBpc1BhdGNoYWJsZSh2bm9kZSkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjYnMudXBkYXRlLmxlbmd0aDsgKytpKSB7IGNicy51cGRhdGVbaV0ob2xkVm5vZGUsIHZub2RlKTsgfVxuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnVwZGF0ZSkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgfVxuICAgIGlmIChpc1VuZGVmKHZub2RlLnRleHQpKSB7XG4gICAgICBpZiAoaXNEZWYob2xkQ2gpICYmIGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAob2xkQ2ggIT09IGNoKSB7IHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2gsIGNoLCBpbnNlcnRlZFZub2RlUXVldWUsIHJlbW92ZU9ubHkpOyB9XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKGNoKSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNoZWNrRHVwbGljYXRlS2V5cyhjaCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSB7IG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCAnJyk7IH1cbiAgICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgY2gsIDAsIGNoLmxlbmd0aCAtIDEsIGluc2VydGVkVm5vZGVRdWV1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZENoKSkge1xuICAgICAgICByZW1vdmVWbm9kZXMoZWxtLCBvbGRDaCwgMCwgb2xkQ2gubGVuZ3RoIC0gMSk7XG4gICAgICB9IGVsc2UgaWYgKGlzRGVmKG9sZFZub2RlLnRleHQpKSB7XG4gICAgICAgIG5vZGVPcHMuc2V0VGV4dENvbnRlbnQoZWxtLCAnJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvbGRWbm9kZS50ZXh0ICE9PSB2bm9kZS50ZXh0KSB7XG4gICAgICBub2RlT3BzLnNldFRleHRDb250ZW50KGVsbSwgdm5vZGUudGV4dCk7XG4gICAgfVxuICAgIGlmIChpc0RlZihkYXRhKSkge1xuICAgICAgaWYgKGlzRGVmKGkgPSBkYXRhLmhvb2spICYmIGlzRGVmKGkgPSBpLnBvc3RwYXRjaCkpIHsgaShvbGRWbm9kZSwgdm5vZGUpOyB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlSW5zZXJ0SG9vayAodm5vZGUsIHF1ZXVlLCBpbml0aWFsKSB7XG4gICAgLy8gZGVsYXkgaW5zZXJ0IGhvb2tzIGZvciBjb21wb25lbnQgcm9vdCBub2RlcywgaW52b2tlIHRoZW0gYWZ0ZXIgdGhlXG4gICAgLy8gZWxlbWVudCBpcyByZWFsbHkgaW5zZXJ0ZWRcbiAgICBpZiAoaXNUcnVlKGluaXRpYWwpICYmIGlzRGVmKHZub2RlLnBhcmVudCkpIHtcbiAgICAgIHZub2RlLnBhcmVudC5kYXRhLnBlbmRpbmdJbnNlcnQgPSBxdWV1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBxdWV1ZVtpXS5kYXRhLmhvb2suaW5zZXJ0KHF1ZXVlW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaHlkcmF0aW9uQmFpbGVkID0gZmFsc2U7XG4gIC8vIGxpc3Qgb2YgbW9kdWxlcyB0aGF0IGNhbiBza2lwIGNyZWF0ZSBob29rIGR1cmluZyBoeWRyYXRpb24gYmVjYXVzZSB0aGV5XG4gIC8vIGFyZSBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBjbGllbnQgb3IgaGFzIG5vIG5lZWQgZm9yIGluaXRpYWxpemF0aW9uXG4gIC8vIE5vdGU6IHN0eWxlIGlzIGV4Y2x1ZGVkIGJlY2F1c2UgaXQgcmVsaWVzIG9uIGluaXRpYWwgY2xvbmUgZm9yIGZ1dHVyZVxuICAvLyBkZWVwIHVwZGF0ZXMgKCM3MDYzKS5cbiAgdmFyIGlzUmVuZGVyZWRNb2R1bGUgPSBtYWtlTWFwKCdhdHRycyxjbGFzcyxzdGF0aWNDbGFzcyxzdGF0aWNTdHlsZSxrZXknKTtcblxuICAvLyBOb3RlOiB0aGlzIGlzIGEgYnJvd3Nlci1vbmx5IGZ1bmN0aW9uIHNvIHdlIGNhbiBhc3N1bWUgZWxtcyBhcmUgRE9NIG5vZGVzLlxuICBmdW5jdGlvbiBoeWRyYXRlIChlbG0sIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIGluVlByZSkge1xuICAgIHZhciBpO1xuICAgIHZhciB0YWcgPSB2bm9kZS50YWc7XG4gICAgdmFyIGRhdGEgPSB2bm9kZS5kYXRhO1xuICAgIHZhciBjaGlsZHJlbiA9IHZub2RlLmNoaWxkcmVuO1xuICAgIGluVlByZSA9IGluVlByZSB8fCAoZGF0YSAmJiBkYXRhLnByZSk7XG4gICAgdm5vZGUuZWxtID0gZWxtO1xuXG4gICAgaWYgKGlzVHJ1ZSh2bm9kZS5pc0NvbW1lbnQpICYmIGlzRGVmKHZub2RlLmFzeW5jRmFjdG9yeSkpIHtcbiAgICAgIHZub2RlLmlzQXN5bmNQbGFjZWhvbGRlciA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvLyBhc3NlcnQgbm9kZSBtYXRjaFxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoIWFzc2VydE5vZGVNYXRjaChlbG0sIHZub2RlLCBpblZQcmUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgIGlmIChpc0RlZihpID0gZGF0YS5ob29rKSAmJiBpc0RlZihpID0gaS5pbml0KSkgeyBpKHZub2RlLCB0cnVlIC8qIGh5ZHJhdGluZyAqLyk7IH1cbiAgICAgIGlmIChpc0RlZihpID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UpKSB7XG4gICAgICAgIC8vIGNoaWxkIGNvbXBvbmVudC4gaXQgc2hvdWxkIGhhdmUgaHlkcmF0ZWQgaXRzIG93biB0cmVlLlxuICAgICAgICBpbml0Q29tcG9uZW50KHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNEZWYodGFnKSkge1xuICAgICAgaWYgKGlzRGVmKGNoaWxkcmVuKSkge1xuICAgICAgICAvLyBlbXB0eSBlbGVtZW50LCBhbGxvdyBjbGllbnQgdG8gcGljayB1cCBhbmQgcG9wdWxhdGUgY2hpbGRyZW5cbiAgICAgICAgaWYgKCFlbG0uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgICAgY3JlYXRlQ2hpbGRyZW4odm5vZGUsIGNoaWxkcmVuLCBpbnNlcnRlZFZub2RlUXVldWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHYtaHRtbCBhbmQgZG9tUHJvcHM6IGlubmVySFRNTFxuICAgICAgICAgIGlmIChpc0RlZihpID0gZGF0YSkgJiYgaXNEZWYoaSA9IGkuZG9tUHJvcHMpICYmIGlzRGVmKGkgPSBpLmlubmVySFRNTCkpIHtcbiAgICAgICAgICAgIGlmIChpICE9PSBlbG0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgICFoeWRyYXRpb25CYWlsZWRcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaHlkcmF0aW9uQmFpbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BhcmVudDogJywgZWxtKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3NlcnZlciBpbm5lckhUTUw6ICcsIGkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignY2xpZW50IGlubmVySFRNTDogJywgZWxtLmlubmVySFRNTCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgYW5kIGNvbXBhcmUgY2hpbGRyZW4gbGlzdHNcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbk1hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBjaGlsZE5vZGUgPSBlbG0uZmlyc3RDaGlsZDtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IGNoaWxkcmVuLmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGUgfHwgIWh5ZHJhdGUoY2hpbGROb2RlLCBjaGlsZHJlbltpJDFdLCBpbnNlcnRlZFZub2RlUXVldWUsIGluVlByZSkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbk1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBjaGlsZE5vZGUgaXMgbm90IG51bGwsIGl0IG1lYW5zIHRoZSBhY3R1YWwgY2hpbGROb2RlcyBsaXN0IGlzXG4gICAgICAgICAgICAvLyBsb25nZXIgdGhhbiB0aGUgdmlydHVhbCBjaGlsZHJlbiBsaXN0LlxuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbk1hdGNoIHx8IGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAhaHlkcmF0aW9uQmFpbGVkXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGh5ZHJhdGlvbkJhaWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdQYXJlbnQ6ICcsIGVsbSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdNaXNtYXRjaGluZyBjaGlsZE5vZGVzIHZzLiBWTm9kZXM6ICcsIGVsbS5jaGlsZE5vZGVzLCBjaGlsZHJlbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNEZWYoZGF0YSkpIHtcbiAgICAgICAgdmFyIGZ1bGxJbnZva2UgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICBpZiAoIWlzUmVuZGVyZWRNb2R1bGUoa2V5KSkge1xuICAgICAgICAgICAgZnVsbEludm9rZSA9IHRydWU7XG4gICAgICAgICAgICBpbnZva2VDcmVhdGVIb29rcyh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZnVsbEludm9rZSAmJiBkYXRhWydjbGFzcyddKSB7XG4gICAgICAgICAgLy8gZW5zdXJlIGNvbGxlY3RpbmcgZGVwcyBmb3IgZGVlcCBjbGFzcyBiaW5kaW5ncyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgICB0cmF2ZXJzZShkYXRhWydjbGFzcyddKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZWxtLmRhdGEgIT09IHZub2RlLnRleHQpIHtcbiAgICAgIGVsbS5kYXRhID0gdm5vZGUudGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzc2VydE5vZGVNYXRjaCAobm9kZSwgdm5vZGUsIGluVlByZSkge1xuICAgIGlmIChpc0RlZih2bm9kZS50YWcpKSB7XG4gICAgICByZXR1cm4gdm5vZGUudGFnLmluZGV4T2YoJ3Z1ZS1jb21wb25lbnQnKSA9PT0gMCB8fCAoXG4gICAgICAgICFpc1Vua25vd25FbGVtZW50JCQxKHZub2RlLCBpblZQcmUpICYmXG4gICAgICAgIHZub2RlLnRhZy50b0xvd2VyQ2FzZSgpID09PSAobm9kZS50YWdOYW1lICYmIG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbm9kZS5ub2RlVHlwZSA9PT0gKHZub2RlLmlzQ29tbWVudCA/IDggOiAzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBwYXRjaCAob2xkVm5vZGUsIHZub2RlLCBoeWRyYXRpbmcsIHJlbW92ZU9ubHkpIHtcbiAgICBpZiAoaXNVbmRlZih2bm9kZSkpIHtcbiAgICAgIGlmIChpc0RlZihvbGRWbm9kZSkpIHsgaW52b2tlRGVzdHJveUhvb2sob2xkVm5vZGUpOyB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgaXNJbml0aWFsUGF0Y2ggPSBmYWxzZTtcbiAgICB2YXIgaW5zZXJ0ZWRWbm9kZVF1ZXVlID0gW107XG5cbiAgICBpZiAoaXNVbmRlZihvbGRWbm9kZSkpIHtcbiAgICAgIC8vIGVtcHR5IG1vdW50IChsaWtlbHkgYXMgY29tcG9uZW50KSwgY3JlYXRlIG5ldyByb290IGVsZW1lbnRcbiAgICAgIGlzSW5pdGlhbFBhdGNoID0gdHJ1ZTtcbiAgICAgIGNyZWF0ZUVsbSh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlzUmVhbEVsZW1lbnQgPSBpc0RlZihvbGRWbm9kZS5ub2RlVHlwZSk7XG4gICAgICBpZiAoIWlzUmVhbEVsZW1lbnQgJiYgc2FtZVZub2RlKG9sZFZub2RlLCB2bm9kZSkpIHtcbiAgICAgICAgLy8gcGF0Y2ggZXhpc3Rpbmcgcm9vdCBub2RlXG4gICAgICAgIHBhdGNoVm5vZGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUsIG51bGwsIG51bGwsIHJlbW92ZU9ubHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGlzUmVhbEVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBtb3VudGluZyB0byBhIHJlYWwgZWxlbWVudFxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgc2VydmVyLXJlbmRlcmVkIGNvbnRlbnQgYW5kIGlmIHdlIGNhbiBwZXJmb3JtXG4gICAgICAgICAgLy8gYSBzdWNjZXNzZnVsIGh5ZHJhdGlvbi5cbiAgICAgICAgICBpZiAob2xkVm5vZGUubm9kZVR5cGUgPT09IDEgJiYgb2xkVm5vZGUuaGFzQXR0cmlidXRlKFNTUl9BVFRSKSkge1xuICAgICAgICAgICAgb2xkVm5vZGUucmVtb3ZlQXR0cmlidXRlKFNTUl9BVFRSKTtcbiAgICAgICAgICAgIGh5ZHJhdGluZyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc1RydWUoaHlkcmF0aW5nKSkge1xuICAgICAgICAgICAgaWYgKGh5ZHJhdGUob2xkVm5vZGUsIHZub2RlLCBpbnNlcnRlZFZub2RlUXVldWUpKSB7XG4gICAgICAgICAgICAgIGludm9rZUluc2VydEhvb2sodm5vZGUsIGluc2VydGVkVm5vZGVRdWV1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIHJldHVybiBvbGRWbm9kZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICAgICAgJ1RoZSBjbGllbnQtc2lkZSByZW5kZXJlZCB2aXJ0dWFsIERPTSB0cmVlIGlzIG5vdCBtYXRjaGluZyAnICtcbiAgICAgICAgICAgICAgICAnc2VydmVyLXJlbmRlcmVkIGNvbnRlbnQuIFRoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBpbmNvcnJlY3QgJyArXG4gICAgICAgICAgICAgICAgJ0hUTUwgbWFya3VwLCBmb3IgZXhhbXBsZSBuZXN0aW5nIGJsb2NrLWxldmVsIGVsZW1lbnRzIGluc2lkZSAnICtcbiAgICAgICAgICAgICAgICAnPHA+LCBvciBtaXNzaW5nIDx0Ym9keT4uIEJhaWxpbmcgaHlkcmF0aW9uIGFuZCBwZXJmb3JtaW5nICcgK1xuICAgICAgICAgICAgICAgICdmdWxsIGNsaWVudC1zaWRlIHJlbmRlci4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVpdGhlciBub3Qgc2VydmVyLXJlbmRlcmVkLCBvciBoeWRyYXRpb24gZmFpbGVkLlxuICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBub2RlIGFuZCByZXBsYWNlIGl0XG4gICAgICAgICAgb2xkVm5vZGUgPSBlbXB0eU5vZGVBdChvbGRWbm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXBsYWNpbmcgZXhpc3RpbmcgZWxlbWVudFxuICAgICAgICB2YXIgb2xkRWxtID0gb2xkVm5vZGUuZWxtO1xuICAgICAgICB2YXIgcGFyZW50RWxtID0gbm9kZU9wcy5wYXJlbnROb2RlKG9sZEVsbSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIG5ldyBub2RlXG4gICAgICAgIGNyZWF0ZUVsbShcbiAgICAgICAgICB2bm9kZSxcbiAgICAgICAgICBpbnNlcnRlZFZub2RlUXVldWUsXG4gICAgICAgICAgLy8gZXh0cmVtZWx5IHJhcmUgZWRnZSBjYXNlOiBkbyBub3QgaW5zZXJ0IGlmIG9sZCBlbGVtZW50IGlzIGluIGFcbiAgICAgICAgICAvLyBsZWF2aW5nIHRyYW5zaXRpb24uIE9ubHkgaGFwcGVucyB3aGVuIGNvbWJpbmluZyB0cmFuc2l0aW9uICtcbiAgICAgICAgICAvLyBrZWVwLWFsaXZlICsgSE9Dcy4gKCM0NTkwKVxuICAgICAgICAgIG9sZEVsbS5fbGVhdmVDYiA/IG51bGwgOiBwYXJlbnRFbG0sXG4gICAgICAgICAgbm9kZU9wcy5uZXh0U2libGluZyhvbGRFbG0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHBhcmVudCBwbGFjZWhvbGRlciBub2RlIGVsZW1lbnQsIHJlY3Vyc2l2ZWx5XG4gICAgICAgIGlmIChpc0RlZih2bm9kZS5wYXJlbnQpKSB7XG4gICAgICAgICAgdmFyIGFuY2VzdG9yID0gdm5vZGUucGFyZW50O1xuICAgICAgICAgIHZhciBwYXRjaGFibGUgPSBpc1BhdGNoYWJsZSh2bm9kZSk7XG4gICAgICAgICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNicy5kZXN0cm95Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgIGNicy5kZXN0cm95W2ldKGFuY2VzdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuY2VzdG9yLmVsbSA9IHZub2RlLmVsbTtcbiAgICAgICAgICAgIGlmIChwYXRjaGFibGUpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gMDsgaSQxIDwgY2JzLmNyZWF0ZS5sZW5ndGg7ICsraSQxKSB7XG4gICAgICAgICAgICAgICAgY2JzLmNyZWF0ZVtpJDFdKGVtcHR5Tm9kZSwgYW5jZXN0b3IpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vICM2NTEzXG4gICAgICAgICAgICAgIC8vIGludm9rZSBpbnNlcnQgaG9va3MgdGhhdCBtYXkgaGF2ZSBiZWVuIG1lcmdlZCBieSBjcmVhdGUgaG9va3MuXG4gICAgICAgICAgICAgIC8vIGUuZy4gZm9yIGRpcmVjdGl2ZXMgdGhhdCB1c2VzIHRoZSBcImluc2VydGVkXCIgaG9vay5cbiAgICAgICAgICAgICAgdmFyIGluc2VydCA9IGFuY2VzdG9yLmRhdGEuaG9vay5pbnNlcnQ7XG4gICAgICAgICAgICAgIGlmIChpbnNlcnQubWVyZ2VkKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgYXQgaW5kZXggMSB0byBhdm9pZCByZS1pbnZva2luZyBjb21wb25lbnQgbW91bnRlZCBob29rXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQyID0gMTsgaSQyIDwgaW5zZXJ0LmZucy5sZW5ndGg7IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgICBpbnNlcnQuZm5zW2kkMl0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlZ2lzdGVyUmVmKGFuY2VzdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlc3Ryb3kgb2xkIG5vZGVcbiAgICAgICAgaWYgKGlzRGVmKHBhcmVudEVsbSkpIHtcbiAgICAgICAgICByZW1vdmVWbm9kZXMocGFyZW50RWxtLCBbb2xkVm5vZGVdLCAwLCAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0RlZihvbGRWbm9kZS50YWcpKSB7XG4gICAgICAgICAgaW52b2tlRGVzdHJveUhvb2sob2xkVm5vZGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlSW5zZXJ0SG9vayh2bm9kZSwgaW5zZXJ0ZWRWbm9kZVF1ZXVlLCBpc0luaXRpYWxQYXRjaCk7XG4gICAgcmV0dXJuIHZub2RlLmVsbVxuICB9XG59XG5cbi8qICAqL1xuXG52YXIgZGlyZWN0aXZlcyA9IHtcbiAgY3JlYXRlOiB1cGRhdGVEaXJlY3RpdmVzLFxuICB1cGRhdGU6IHVwZGF0ZURpcmVjdGl2ZXMsXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIHVuYmluZERpcmVjdGl2ZXMgKHZub2RlKSB7XG4gICAgdXBkYXRlRGlyZWN0aXZlcyh2bm9kZSwgZW1wdHlOb2RlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdXBkYXRlRGlyZWN0aXZlcyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmIChvbGRWbm9kZS5kYXRhLmRpcmVjdGl2ZXMgfHwgdm5vZGUuZGF0YS5kaXJlY3RpdmVzKSB7XG4gICAgX3VwZGF0ZShvbGRWbm9kZSwgdm5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgaXNDcmVhdGUgPSBvbGRWbm9kZSA9PT0gZW1wdHlOb2RlO1xuICB2YXIgaXNEZXN0cm95ID0gdm5vZGUgPT09IGVtcHR5Tm9kZTtcbiAgdmFyIG9sZERpcnMgPSBub3JtYWxpemVEaXJlY3RpdmVzJDEob2xkVm5vZGUuZGF0YS5kaXJlY3RpdmVzLCBvbGRWbm9kZS5jb250ZXh0KTtcbiAgdmFyIG5ld0RpcnMgPSBub3JtYWxpemVEaXJlY3RpdmVzJDEodm5vZGUuZGF0YS5kaXJlY3RpdmVzLCB2bm9kZS5jb250ZXh0KTtcblxuICB2YXIgZGlyc1dpdGhJbnNlcnQgPSBbXTtcbiAgdmFyIGRpcnNXaXRoUG9zdHBhdGNoID0gW107XG5cbiAgdmFyIGtleSwgb2xkRGlyLCBkaXI7XG4gIGZvciAoa2V5IGluIG5ld0RpcnMpIHtcbiAgICBvbGREaXIgPSBvbGREaXJzW2tleV07XG4gICAgZGlyID0gbmV3RGlyc1trZXldO1xuICAgIGlmICghb2xkRGlyKSB7XG4gICAgICAvLyBuZXcgZGlyZWN0aXZlLCBiaW5kXG4gICAgICBjYWxsSG9vayQxKGRpciwgJ2JpbmQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgaWYgKGRpci5kZWYgJiYgZGlyLmRlZi5pbnNlcnRlZCkge1xuICAgICAgICBkaXJzV2l0aEluc2VydC5wdXNoKGRpcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGV4aXN0aW5nIGRpcmVjdGl2ZSwgdXBkYXRlXG4gICAgICBkaXIub2xkVmFsdWUgPSBvbGREaXIudmFsdWU7XG4gICAgICBkaXIub2xkQXJnID0gb2xkRGlyLmFyZztcbiAgICAgIGNhbGxIb29rJDEoZGlyLCAndXBkYXRlJywgdm5vZGUsIG9sZFZub2RlKTtcbiAgICAgIGlmIChkaXIuZGVmICYmIGRpci5kZWYuY29tcG9uZW50VXBkYXRlZCkge1xuICAgICAgICBkaXJzV2l0aFBvc3RwYXRjaC5wdXNoKGRpcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoSW5zZXJ0Lmxlbmd0aCkge1xuICAgIHZhciBjYWxsSW5zZXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aEluc2VydC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoSW5zZXJ0W2ldLCAnaW5zZXJ0ZWQnLCB2bm9kZSwgb2xkVm5vZGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGlzQ3JlYXRlKSB7XG4gICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGNhbGxJbnNlcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsSW5zZXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcnNXaXRoUG9zdHBhdGNoLmxlbmd0aCkge1xuICAgIG1lcmdlVk5vZGVIb29rKHZub2RlLCAncG9zdHBhdGNoJywgZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJzV2l0aFBvc3RwYXRjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjYWxsSG9vayQxKGRpcnNXaXRoUG9zdHBhdGNoW2ldLCAnY29tcG9uZW50VXBkYXRlZCcsIHZub2RlLCBvbGRWbm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIWlzQ3JlYXRlKSB7XG4gICAgZm9yIChrZXkgaW4gb2xkRGlycykge1xuICAgICAgaWYgKCFuZXdEaXJzW2tleV0pIHtcbiAgICAgICAgLy8gbm8gbG9uZ2VyIHByZXNlbnQsIHVuYmluZFxuICAgICAgICBjYWxsSG9vayQxKG9sZERpcnNba2V5XSwgJ3VuYmluZCcsIG9sZFZub2RlLCBvbGRWbm9kZSwgaXNEZXN0cm95KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGVtcHR5TW9kaWZpZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuZnVuY3Rpb24gbm9ybWFsaXplRGlyZWN0aXZlcyQxIChcbiAgZGlycyxcbiAgdm1cbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKCFkaXJzKSB7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcmV0dXJuIHJlc1xuICB9XG4gIHZhciBpLCBkaXI7XG4gIGZvciAoaSA9IDA7IGkgPCBkaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGlyID0gZGlyc1tpXTtcbiAgICBpZiAoIWRpci5tb2RpZmllcnMpIHtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgZGlyLm1vZGlmaWVycyA9IGVtcHR5TW9kaWZpZXJzO1xuICAgIH1cbiAgICByZXNbZ2V0UmF3RGlyTmFtZShkaXIpXSA9IGRpcjtcbiAgICBkaXIuZGVmID0gcmVzb2x2ZUFzc2V0KHZtLiRvcHRpb25zLCAnZGlyZWN0aXZlcycsIGRpci5uYW1lLCB0cnVlKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBnZXRSYXdEaXJOYW1lIChkaXIpIHtcbiAgcmV0dXJuIGRpci5yYXdOYW1lIHx8ICgoZGlyLm5hbWUpICsgXCIuXCIgKyAoT2JqZWN0LmtleXMoZGlyLm1vZGlmaWVycyB8fCB7fSkuam9pbignLicpKSlcbn1cblxuZnVuY3Rpb24gY2FsbEhvb2skMSAoZGlyLCBob29rLCB2bm9kZSwgb2xkVm5vZGUsIGlzRGVzdHJveSkge1xuICB2YXIgZm4gPSBkaXIuZGVmICYmIGRpci5kZWZbaG9va107XG4gIGlmIChmbikge1xuICAgIHRyeSB7XG4gICAgICBmbih2bm9kZS5lbG0sIGRpciwgdm5vZGUsIG9sZFZub2RlLCBpc0Rlc3Ryb3kpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGhhbmRsZUVycm9yKGUsIHZub2RlLmNvbnRleHQsIChcImRpcmVjdGl2ZSBcIiArIChkaXIubmFtZSkgKyBcIiBcIiArIGhvb2sgKyBcIiBob29rXCIpKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGJhc2VNb2R1bGVzID0gW1xuICByZWYsXG4gIGRpcmVjdGl2ZXNcbl07XG5cbi8qICAqL1xuXG5mdW5jdGlvbiB1cGRhdGVBdHRycyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIHZhciBvcHRzID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgaWYgKGlzRGVmKG9wdHMpICYmIG9wdHMuQ3Rvci5vcHRpb25zLmluaGVyaXRBdHRycyA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoaXNVbmRlZihvbGRWbm9kZS5kYXRhLmF0dHJzKSAmJiBpc1VuZGVmKHZub2RlLmRhdGEuYXR0cnMpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIGtleSwgY3VyLCBvbGQ7XG4gIHZhciBlbG0gPSB2bm9kZS5lbG07XG4gIHZhciBvbGRBdHRycyA9IG9sZFZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gIHZhciBhdHRycyA9IHZub2RlLmRhdGEuYXR0cnMgfHwge307XG4gIC8vIGNsb25lIG9ic2VydmVkIG9iamVjdHMsIGFzIHRoZSB1c2VyIHByb2JhYmx5IHdhbnRzIHRvIG11dGF0ZSBpdFxuICBpZiAoaXNEZWYoYXR0cnMuX19vYl9fKSkge1xuICAgIGF0dHJzID0gdm5vZGUuZGF0YS5hdHRycyA9IGV4dGVuZCh7fSwgYXR0cnMpO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gYXR0cnMpIHtcbiAgICBjdXIgPSBhdHRyc1trZXldO1xuICAgIG9sZCA9IG9sZEF0dHJzW2tleV07XG4gICAgaWYgKG9sZCAhPT0gY3VyKSB7XG4gICAgICBzZXRBdHRyKGVsbSwga2V5LCBjdXIpO1xuICAgIH1cbiAgfVxuICAvLyAjNDM5MTogaW4gSUU5LCBzZXR0aW5nIHR5cGUgY2FuIHJlc2V0IHZhbHVlIGZvciBpbnB1dFt0eXBlPXJhZGlvXVxuICAvLyAjNjY2NjogSUUvRWRnZSBmb3JjZXMgcHJvZ3Jlc3MgdmFsdWUgZG93biB0byAxIGJlZm9yZSBzZXR0aW5nIGEgbWF4XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoKGlzSUUgfHwgaXNFZGdlKSAmJiBhdHRycy52YWx1ZSAhPT0gb2xkQXR0cnMudmFsdWUpIHtcbiAgICBzZXRBdHRyKGVsbSwgJ3ZhbHVlJywgYXR0cnMudmFsdWUpO1xuICB9XG4gIGZvciAoa2V5IGluIG9sZEF0dHJzKSB7XG4gICAgaWYgKGlzVW5kZWYoYXR0cnNba2V5XSkpIHtcbiAgICAgIGlmIChpc1hsaW5rKGtleSkpIHtcbiAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKHhsaW5rTlMsIGdldFhsaW5rUHJvcChrZXkpKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEF0dHIgKGVsLCBrZXksIHZhbHVlKSB7XG4gIGlmIChlbC50YWdOYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGlzQm9vbGVhbkF0dHIoa2V5KSkge1xuICAgIC8vIHNldCBhdHRyaWJ1dGUgZm9yIGJsYW5rIHZhbHVlXG4gICAgLy8gZS5nLiA8b3B0aW9uIGRpc2FibGVkPlNlbGVjdCBvbmU8L29wdGlvbj5cbiAgICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0ZWNobmljYWxseSBhbGxvd2Z1bGxzY3JlZW4gaXMgYSBib29sZWFuIGF0dHJpYnV0ZSBmb3IgPGlmcmFtZT4sXG4gICAgICAvLyBidXQgRmxhc2ggZXhwZWN0cyBhIHZhbHVlIG9mIFwidHJ1ZVwiIHdoZW4gdXNlZCBvbiA8ZW1iZWQ+IHRhZ1xuICAgICAgdmFsdWUgPSBrZXkgPT09ICdhbGxvd2Z1bGxzY3JlZW4nICYmIGVsLnRhZ05hbWUgPT09ICdFTUJFRCdcbiAgICAgICAgPyAndHJ1ZSdcbiAgICAgICAgOiBrZXk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzRW51bWVyYXRlZEF0dHIoa2V5KSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIGNvbnZlcnRFbnVtZXJhdGVkVmFsdWUoa2V5LCB2YWx1ZSkpO1xuICB9IGVsc2UgaWYgKGlzWGxpbmsoa2V5KSkge1xuICAgIGlmIChpc0ZhbHN5QXR0clZhbHVlKHZhbHVlKSkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlTlMoeGxpbmtOUywgZ2V0WGxpbmtQcm9wKGtleSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYmFzZVNldEF0dHIoZWwsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2VTZXRBdHRyIChlbCwga2V5LCB2YWx1ZSkge1xuICBpZiAoaXNGYWxzeUF0dHJWYWx1ZSh2YWx1ZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAjNzEzODogSUUxMCAmIDExIGZpcmVzIGlucHV0IGV2ZW50IHdoZW4gc2V0dGluZyBwbGFjZWhvbGRlciBvblxuICAgIC8vIDx0ZXh0YXJlYT4uLi4gYmxvY2sgdGhlIGZpcnN0IGlucHV0IGV2ZW50IGFuZCByZW1vdmUgdGhlIGJsb2NrZXJcbiAgICAvLyBpbW1lZGlhdGVseS5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoXG4gICAgICBpc0lFICYmICFpc0lFOSAmJlxuICAgICAgZWwudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJyAmJlxuICAgICAga2V5ID09PSAncGxhY2Vob2xkZXInICYmIHZhbHVlICE9PSAnJyAmJiAhZWwuX19pZXBoXG4gICAgKSB7XG4gICAgICB2YXIgYmxvY2tlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYmxvY2tlcik7XG4gICAgICB9O1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBibG9ja2VyKTtcbiAgICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgICAgZWwuX19pZXBoID0gdHJ1ZTsgLyogSUUgcGxhY2Vob2xkZXIgcGF0Y2hlZCAqL1xuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxudmFyIGF0dHJzID0ge1xuICBjcmVhdGU6IHVwZGF0ZUF0dHJzLFxuICB1cGRhdGU6IHVwZGF0ZUF0dHJzXG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gdXBkYXRlQ2xhc3MgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG4gIHZhciBkYXRhID0gdm5vZGUuZGF0YTtcbiAgdmFyIG9sZERhdGEgPSBvbGRWbm9kZS5kYXRhO1xuICBpZiAoXG4gICAgaXNVbmRlZihkYXRhLnN0YXRpY0NsYXNzKSAmJlxuICAgIGlzVW5kZWYoZGF0YS5jbGFzcykgJiYgKFxuICAgICAgaXNVbmRlZihvbGREYXRhKSB8fCAoXG4gICAgICAgIGlzVW5kZWYob2xkRGF0YS5zdGF0aWNDbGFzcykgJiZcbiAgICAgICAgaXNVbmRlZihvbGREYXRhLmNsYXNzKVxuICAgICAgKVxuICAgIClcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY2xzID0gZ2VuQ2xhc3NGb3JWbm9kZSh2bm9kZSk7XG5cbiAgLy8gaGFuZGxlIHRyYW5zaXRpb24gY2xhc3Nlc1xuICB2YXIgdHJhbnNpdGlvbkNsYXNzID0gZWwuX3RyYW5zaXRpb25DbGFzc2VzO1xuICBpZiAoaXNEZWYodHJhbnNpdGlvbkNsYXNzKSkge1xuICAgIGNscyA9IGNvbmNhdChjbHMsIHN0cmluZ2lmeUNsYXNzKHRyYW5zaXRpb25DbGFzcykpO1xuICB9XG5cbiAgLy8gc2V0IHRoZSBjbGFzc1xuICBpZiAoY2xzICE9PSBlbC5fcHJldkNsYXNzKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNscyk7XG4gICAgZWwuX3ByZXZDbGFzcyA9IGNscztcbiAgfVxufVxuXG52YXIga2xhc3MgPSB7XG4gIGNyZWF0ZTogdXBkYXRlQ2xhc3MsXG4gIHVwZGF0ZTogdXBkYXRlQ2xhc3Ncbn07XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbiBzb21lIGNhc2VzLCB0aGUgZXZlbnQgdXNlZCBoYXMgdG8gYmUgZGV0ZXJtaW5lZCBhdCBydW50aW1lXG4vLyBzbyB3ZSB1c2VkIHNvbWUgcmVzZXJ2ZWQgdG9rZW5zIGR1cmluZyBjb21waWxlLlxudmFyIFJBTkdFX1RPS0VOID0gJ19fcic7XG52YXIgQ0hFQ0tCT1hfUkFESU9fVE9LRU4gPSAnX19jJztcblxuLyogICovXG5cbi8vIG5vcm1hbGl6ZSB2LW1vZGVsIGV2ZW50IHRva2VucyB0aGF0IGNhbiBvbmx5IGJlIGRldGVybWluZWQgYXQgcnVudGltZS5cbi8vIGl0J3MgaW1wb3J0YW50IHRvIHBsYWNlIHRoZSBldmVudCBhcyB0aGUgZmlyc3QgaW4gdGhlIGFycmF5IGJlY2F1c2Vcbi8vIHRoZSB3aG9sZSBwb2ludCBpcyBlbnN1cmluZyB0aGUgdi1tb2RlbCBjYWxsYmFjayBnZXRzIGNhbGxlZCBiZWZvcmVcbi8vIHVzZXItYXR0YWNoZWQgaGFuZGxlcnMuXG5mdW5jdGlvbiBub3JtYWxpemVFdmVudHMgKG9uKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYob25bUkFOR0VfVE9LRU5dKSkge1xuICAgIC8vIElFIGlucHV0W3R5cGU9cmFuZ2VdIG9ubHkgc3VwcG9ydHMgYGNoYW5nZWAgZXZlbnRcbiAgICB2YXIgZXZlbnQgPSBpc0lFID8gJ2NoYW5nZScgOiAnaW5wdXQnO1xuICAgIG9uW2V2ZW50XSA9IFtdLmNvbmNhdChvbltSQU5HRV9UT0tFTl0sIG9uW2V2ZW50XSB8fCBbXSk7XG4gICAgZGVsZXRlIG9uW1JBTkdFX1RPS0VOXTtcbiAgfVxuICAvLyBUaGlzIHdhcyBvcmlnaW5hbGx5IGludGVuZGVkIHRvIGZpeCAjNDUyMSBidXQgbm8gbG9uZ2VyIG5lY2Vzc2FyeVxuICAvLyBhZnRlciAyLjUuIEtlZXBpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBnZW5lcmF0ZWQgY29kZSBmcm9tIDwgMi40XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYob25bQ0hFQ0tCT1hfUkFESU9fVE9LRU5dKSkge1xuICAgIG9uLmNoYW5nZSA9IFtdLmNvbmNhdChvbltDSEVDS0JPWF9SQURJT19UT0tFTl0sIG9uLmNoYW5nZSB8fCBbXSk7XG4gICAgZGVsZXRlIG9uW0NIRUNLQk9YX1JBRElPX1RPS0VOXTtcbiAgfVxufVxuXG52YXIgdGFyZ2V0JDE7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9uY2VIYW5kbGVyJDEgKGV2ZW50LCBoYW5kbGVyLCBjYXB0dXJlKSB7XG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0JDE7IC8vIHNhdmUgY3VycmVudCB0YXJnZXQgZWxlbWVudCBpbiBjbG9zdXJlXG4gIHJldHVybiBmdW5jdGlvbiBvbmNlSGFuZGxlciAoKSB7XG4gICAgdmFyIHJlcyA9IGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICByZW1vdmUkMihldmVudCwgb25jZUhhbmRsZXIsIGNhcHR1cmUsIF90YXJnZXQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAjOTQ0NjogRmlyZWZveCA8PSA1MyAoaW4gcGFydGljdWxhciwgRVNSIDUyKSBoYXMgaW5jb3JyZWN0IEV2ZW50LnRpbWVTdGFtcFxuLy8gaW1wbGVtZW50YXRpb24gYW5kIGRvZXMgbm90IGZpcmUgbWljcm90YXNrcyBpbiBiZXR3ZWVuIGV2ZW50IHByb3BhZ2F0aW9uLCBzb1xuLy8gc2FmZSB0byBleGNsdWRlLlxudmFyIHVzZU1pY3JvdGFza0ZpeCA9IGlzVXNpbmdNaWNyb1Rhc2sgJiYgIShpc0ZGICYmIE51bWJlcihpc0ZGWzFdKSA8PSA1Myk7XG5cbmZ1bmN0aW9uIGFkZCQxIChcbiAgbmFtZSxcbiAgaGFuZGxlcixcbiAgY2FwdHVyZSxcbiAgcGFzc2l2ZVxuKSB7XG4gIC8vIGFzeW5jIGVkZ2UgY2FzZSAjNjU2NjogaW5uZXIgY2xpY2sgZXZlbnQgdHJpZ2dlcnMgcGF0Y2gsIGV2ZW50IGhhbmRsZXJcbiAgLy8gYXR0YWNoZWQgdG8gb3V0ZXIgZWxlbWVudCBkdXJpbmcgcGF0Y2gsIGFuZCB0cmlnZ2VyZWQgYWdhaW4uIFRoaXNcbiAgLy8gaGFwcGVucyBiZWNhdXNlIGJyb3dzZXJzIGZpcmUgbWljcm90YXNrIHRpY2tzIGJldHdlZW4gZXZlbnQgcHJvcGFnYXRpb24uXG4gIC8vIHRoZSBzb2x1dGlvbiBpcyBzaW1wbGU6IHdlIHNhdmUgdGhlIHRpbWVzdGFtcCB3aGVuIGEgaGFuZGxlciBpcyBhdHRhY2hlZCxcbiAgLy8gYW5kIHRoZSBoYW5kbGVyIHdvdWxkIG9ubHkgZmlyZSBpZiB0aGUgZXZlbnQgcGFzc2VkIHRvIGl0IHdhcyBmaXJlZFxuICAvLyBBRlRFUiBpdCB3YXMgYXR0YWNoZWQuXG4gIGlmICh1c2VNaWNyb3Rhc2tGaXgpIHtcbiAgICB2YXIgYXR0YWNoZWRUaW1lc3RhbXAgPSBjdXJyZW50Rmx1c2hUaW1lc3RhbXA7XG4gICAgdmFyIG9yaWdpbmFsID0gaGFuZGxlcjtcbiAgICBoYW5kbGVyID0gb3JpZ2luYWwuX3dyYXBwZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBubyBidWJibGluZywgc2hvdWxkIGFsd2F5cyBmaXJlLlxuICAgICAgICAvLyB0aGlzIGlzIGp1c3QgYSBzYWZldHkgbmV0IGluIGNhc2UgZXZlbnQudGltZVN0YW1wIGlzIHVucmVsaWFibGUgaW5cbiAgICAgICAgLy8gY2VydGFpbiB3ZWlyZCBlbnZpcm9ubWVudHMuLi5cbiAgICAgICAgZS50YXJnZXQgPT09IGUuY3VycmVudFRhcmdldCB8fFxuICAgICAgICAvLyBldmVudCBpcyBmaXJlZCBhZnRlciBoYW5kbGVyIGF0dGFjaG1lbnRcbiAgICAgICAgZS50aW1lU3RhbXAgPj0gYXR0YWNoZWRUaW1lc3RhbXAgfHxcbiAgICAgICAgLy8gYmFpbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgaGF2ZSBidWdneSBldmVudC50aW1lU3RhbXAgaW1wbGVtZW50YXRpb25zXG4gICAgICAgIC8vICM5NDYyIGlPUyA5IGJ1ZzogZXZlbnQudGltZVN0YW1wIGlzIDAgYWZ0ZXIgaGlzdG9yeS5wdXNoU3RhdGVcbiAgICAgICAgLy8gIzk2ODEgUXRXZWJFbmdpbmUgZXZlbnQudGltZVN0YW1wIGlzIG5lZ2F0aXZlIHZhbHVlXG4gICAgICAgIGUudGltZVN0YW1wIDw9IDAgfHxcbiAgICAgICAgLy8gIzk0NDggYmFpbCBpZiBldmVudCBpcyBmaXJlZCBpbiBhbm90aGVyIGRvY3VtZW50IGluIGEgbXVsdGktcGFnZVxuICAgICAgICAvLyBlbGVjdHJvbi9udy5qcyBhcHAsIHNpbmNlIGV2ZW50LnRpbWVTdGFtcCB3aWxsIGJlIHVzaW5nIGEgZGlmZmVyZW50XG4gICAgICAgIC8vIHN0YXJ0aW5nIHJlZmVyZW5jZVxuICAgICAgICBlLnRhcmdldC5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICB0YXJnZXQkMS5hZGRFdmVudExpc3RlbmVyKFxuICAgIG5hbWUsXG4gICAgaGFuZGxlcixcbiAgICBzdXBwb3J0c1Bhc3NpdmVcbiAgICAgID8geyBjYXB0dXJlOiBjYXB0dXJlLCBwYXNzaXZlOiBwYXNzaXZlIH1cbiAgICAgIDogY2FwdHVyZVxuICApO1xufVxuXG5mdW5jdGlvbiByZW1vdmUkMiAoXG4gIG5hbWUsXG4gIGhhbmRsZXIsXG4gIGNhcHR1cmUsXG4gIF90YXJnZXRcbikge1xuICAoX3RhcmdldCB8fCB0YXJnZXQkMSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICBuYW1lLFxuICAgIGhhbmRsZXIuX3dyYXBwZXIgfHwgaGFuZGxlcixcbiAgICBjYXB0dXJlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTUxpc3RlbmVycyAob2xkVm5vZGUsIHZub2RlKSB7XG4gIGlmIChpc1VuZGVmKG9sZFZub2RlLmRhdGEub24pICYmIGlzVW5kZWYodm5vZGUuZGF0YS5vbikpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgb24gPSB2bm9kZS5kYXRhLm9uIHx8IHt9O1xuICB2YXIgb2xkT24gPSBvbGRWbm9kZS5kYXRhLm9uIHx8IHt9O1xuICB0YXJnZXQkMSA9IHZub2RlLmVsbTtcbiAgbm9ybWFsaXplRXZlbnRzKG9uKTtcbiAgdXBkYXRlTGlzdGVuZXJzKG9uLCBvbGRPbiwgYWRkJDEsIHJlbW92ZSQyLCBjcmVhdGVPbmNlSGFuZGxlciQxLCB2bm9kZS5jb250ZXh0KTtcbiAgdGFyZ2V0JDEgPSB1bmRlZmluZWQ7XG59XG5cbnZhciBldmVudHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NTGlzdGVuZXJzLFxuICB1cGRhdGU6IHVwZGF0ZURPTUxpc3RlbmVyc1xufTtcblxuLyogICovXG5cbnZhciBzdmdDb250YWluZXI7XG5cbmZ1bmN0aW9uIHVwZGF0ZURPTVByb3BzIChvbGRWbm9kZSwgdm5vZGUpIHtcbiAgaWYgKGlzVW5kZWYob2xkVm5vZGUuZGF0YS5kb21Qcm9wcykgJiYgaXNVbmRlZih2bm9kZS5kYXRhLmRvbVByb3BzKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBrZXksIGN1cjtcbiAgdmFyIGVsbSA9IHZub2RlLmVsbTtcbiAgdmFyIG9sZFByb3BzID0gb2xkVm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgdmFyIHByb3BzID0gdm5vZGUuZGF0YS5kb21Qcm9wcyB8fCB7fTtcbiAgLy8gY2xvbmUgb2JzZXJ2ZWQgb2JqZWN0cywgYXMgdGhlIHVzZXIgcHJvYmFibHkgd2FudHMgdG8gbXV0YXRlIGl0XG4gIGlmIChpc0RlZihwcm9wcy5fX29iX18pKSB7XG4gICAgcHJvcHMgPSB2bm9kZS5kYXRhLmRvbVByb3BzID0gZXh0ZW5kKHt9LCBwcm9wcyk7XG4gIH1cblxuICBmb3IgKGtleSBpbiBvbGRQcm9wcykge1xuICAgIGlmICghKGtleSBpbiBwcm9wcykpIHtcbiAgICAgIGVsbVtrZXldID0gJyc7XG4gICAgfVxuICB9XG5cbiAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICBjdXIgPSBwcm9wc1trZXldO1xuICAgIC8vIGlnbm9yZSBjaGlsZHJlbiBpZiB0aGUgbm9kZSBoYXMgdGV4dENvbnRlbnQgb3IgaW5uZXJIVE1MLFxuICAgIC8vIGFzIHRoZXNlIHdpbGwgdGhyb3cgYXdheSBleGlzdGluZyBET00gbm9kZXMgYW5kIGNhdXNlIHJlbW92YWwgZXJyb3JzXG4gICAgLy8gb24gc3Vic2VxdWVudCBwYXRjaGVzICgjMzM2MClcbiAgICBpZiAoa2V5ID09PSAndGV4dENvbnRlbnQnIHx8IGtleSA9PT0gJ2lubmVySFRNTCcpIHtcbiAgICAgIGlmICh2bm9kZS5jaGlsZHJlbikgeyB2bm9kZS5jaGlsZHJlbi5sZW5ndGggPSAwOyB9XG4gICAgICBpZiAoY3VyID09PSBvbGRQcm9wc1trZXldKSB7IGNvbnRpbnVlIH1cbiAgICAgIC8vICM2NjAxIHdvcmsgYXJvdW5kIENocm9tZSB2ZXJzaW9uIDw9IDU1IGJ1ZyB3aGVyZSBzaW5nbGUgdGV4dE5vZGVcbiAgICAgIC8vIHJlcGxhY2VkIGJ5IGlubmVySFRNTC90ZXh0Q29udGVudCByZXRhaW5zIGl0cyBwYXJlbnROb2RlIHByb3BlcnR5XG4gICAgICBpZiAoZWxtLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChlbG0uY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ3ZhbHVlJyAmJiBlbG0udGFnTmFtZSAhPT0gJ1BST0dSRVNTJykge1xuICAgICAgLy8gc3RvcmUgdmFsdWUgYXMgX3ZhbHVlIGFzIHdlbGwgc2luY2VcbiAgICAgIC8vIG5vbi1zdHJpbmcgdmFsdWVzIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAgICAgIGVsbS5fdmFsdWUgPSBjdXI7XG4gICAgICAvLyBhdm9pZCByZXNldHRpbmcgY3Vyc29yIHBvc2l0aW9uIHdoZW4gdmFsdWUgaXMgdGhlIHNhbWVcbiAgICAgIHZhciBzdHJDdXIgPSBpc1VuZGVmKGN1cikgPyAnJyA6IFN0cmluZyhjdXIpO1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZVZhbHVlKGVsbSwgc3RyQ3VyKSkge1xuICAgICAgICBlbG0udmFsdWUgPSBzdHJDdXI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbm5lckhUTUwnICYmIGlzU1ZHKGVsbS50YWdOYW1lKSAmJiBpc1VuZGVmKGVsbS5pbm5lckhUTUwpKSB7XG4gICAgICAvLyBJRSBkb2Vzbid0IHN1cHBvcnQgaW5uZXJIVE1MIGZvciBTVkcgZWxlbWVudHNcbiAgICAgIHN2Z0NvbnRhaW5lciA9IHN2Z0NvbnRhaW5lciB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHN2Z0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxzdmc+XCIgKyBjdXIgKyBcIjwvc3ZnPlwiO1xuICAgICAgdmFyIHN2ZyA9IHN2Z0NvbnRhaW5lci5maXJzdENoaWxkO1xuICAgICAgd2hpbGUgKGVsbS5maXJzdENoaWxkKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChlbG0uZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICB3aGlsZSAoc3ZnLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZWxtLmFwcGVuZENoaWxkKHN2Zy5maXJzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgLy8gc2tpcCB0aGUgdXBkYXRlIGlmIG9sZCBhbmQgbmV3IFZET00gc3RhdGUgaXMgdGhlIHNhbWUuXG4gICAgICAvLyBgdmFsdWVgIGlzIGhhbmRsZWQgc2VwYXJhdGVseSBiZWNhdXNlIHRoZSBET00gdmFsdWUgbWF5IGJlIHRlbXBvcmFyaWx5XG4gICAgICAvLyBvdXQgb2Ygc3luYyB3aXRoIFZET00gc3RhdGUgZHVlIHRvIGZvY3VzLCBjb21wb3NpdGlvbiBhbmQgbW9kaWZpZXJzLlxuICAgICAgLy8gVGhpcyAgIzQ1MjEgYnkgc2tpcHBpbmcgdGhlIHVubmVjZXNhcnJ5IGBjaGVja2VkYCB1cGRhdGUuXG4gICAgICBjdXIgIT09IG9sZFByb3BzW2tleV1cbiAgICApIHtcbiAgICAgIC8vIHNvbWUgcHJvcGVydHkgdXBkYXRlcyBjYW4gdGhyb3dcbiAgICAgIC8vIGUuZy4gYHZhbHVlYCBvbiA8cHJvZ3Jlc3M+IHcvIG5vbi1maW5pdGUgdmFsdWVcbiAgICAgIHRyeSB7XG4gICAgICAgIGVsbVtrZXldID0gY3VyO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gIH1cbn1cblxuLy8gY2hlY2sgcGxhdGZvcm1zL3dlYi91dGlsL2F0dHJzLmpzIGFjY2VwdFZhbHVlXG5cblxuZnVuY3Rpb24gc2hvdWxkVXBkYXRlVmFsdWUgKGVsbSwgY2hlY2tWYWwpIHtcbiAgcmV0dXJuICghZWxtLmNvbXBvc2luZyAmJiAoXG4gICAgZWxtLnRhZ05hbWUgPT09ICdPUFRJT04nIHx8XG4gICAgaXNOb3RJbkZvY3VzQW5kRGlydHkoZWxtLCBjaGVja1ZhbCkgfHxcbiAgICBpc0RpcnR5V2l0aE1vZGlmaWVycyhlbG0sIGNoZWNrVmFsKVxuICApKVxufVxuXG5mdW5jdGlvbiBpc05vdEluRm9jdXNBbmREaXJ0eSAoZWxtLCBjaGVja1ZhbCkge1xuICAvLyByZXR1cm4gdHJ1ZSB3aGVuIHRleHRib3ggKC5udW1iZXIgYW5kIC50cmltKSBsb3NlcyBmb2N1cyBhbmQgaXRzIHZhbHVlIGlzXG4gIC8vIG5vdCBlcXVhbCB0byB0aGUgdXBkYXRlZCB2YWx1ZVxuICB2YXIgbm90SW5Gb2N1cyA9IHRydWU7XG4gIC8vICM2MTU3XG4gIC8vIHdvcmsgYXJvdW5kIElFIGJ1ZyB3aGVuIGFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluIGFuIGlmcmFtZVxuICB0cnkgeyBub3RJbkZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gZWxtOyB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gbm90SW5Gb2N1cyAmJiBlbG0udmFsdWUgIT09IGNoZWNrVmFsXG59XG5cbmZ1bmN0aW9uIGlzRGlydHlXaXRoTW9kaWZpZXJzIChlbG0sIG5ld1ZhbCkge1xuICB2YXIgdmFsdWUgPSBlbG0udmFsdWU7XG4gIHZhciBtb2RpZmllcnMgPSBlbG0uX3ZNb2RpZmllcnM7IC8vIGluamVjdGVkIGJ5IHYtbW9kZWwgcnVudGltZVxuICBpZiAoaXNEZWYobW9kaWZpZXJzKSkge1xuICAgIGlmIChtb2RpZmllcnMubnVtYmVyKSB7XG4gICAgICByZXR1cm4gdG9OdW1iZXIodmFsdWUpICE9PSB0b051bWJlcihuZXdWYWwpXG4gICAgfVxuICAgIGlmIChtb2RpZmllcnMudHJpbSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKSAhPT0gbmV3VmFsLnRyaW0oKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdmFsdWUgIT09IG5ld1ZhbFxufVxuXG52YXIgZG9tUHJvcHMgPSB7XG4gIGNyZWF0ZTogdXBkYXRlRE9NUHJvcHMsXG4gIHVwZGF0ZTogdXBkYXRlRE9NUHJvcHNcbn07XG5cbi8qICAqL1xuXG52YXIgcGFyc2VTdHlsZVRleHQgPSBjYWNoZWQoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgbGlzdERlbGltaXRlciA9IC87KD8hW14oXSpcXCkpL2c7XG4gIHZhciBwcm9wZXJ0eURlbGltaXRlciA9IC86KC4rKS87XG4gIGNzc1RleHQuc3BsaXQobGlzdERlbGltaXRlcikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICB2YXIgdG1wID0gaXRlbS5zcGxpdChwcm9wZXJ0eURlbGltaXRlcik7XG4gICAgICB0bXAubGVuZ3RoID4gMSAmJiAocmVzW3RtcFswXS50cmltKCldID0gdG1wWzFdLnRyaW0oKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8vIG1lcmdlIHN0YXRpYyBhbmQgZHluYW1pYyBzdHlsZSBkYXRhIG9uIHRoZSBzYW1lIHZub2RlXG5mdW5jdGlvbiBub3JtYWxpemVTdHlsZURhdGEgKGRhdGEpIHtcbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKGRhdGEuc3R5bGUpO1xuICAvLyBzdGF0aWMgc3R5bGUgaXMgcHJlLXByb2Nlc3NlZCBpbnRvIGFuIG9iamVjdCBkdXJpbmcgY29tcGlsYXRpb25cbiAgLy8gYW5kIGlzIGFsd2F5cyBhIGZyZXNoIG9iamVjdCwgc28gaXQncyBzYWZlIHRvIG1lcmdlIGludG8gaXRcbiAgcmV0dXJuIGRhdGEuc3RhdGljU3R5bGVcbiAgICA/IGV4dGVuZChkYXRhLnN0YXRpY1N0eWxlLCBzdHlsZSlcbiAgICA6IHN0eWxlXG59XG5cbi8vIG5vcm1hbGl6ZSBwb3NzaWJsZSBhcnJheSAvIHN0cmluZyB2YWx1ZXMgaW50byBPYmplY3RcbmZ1bmN0aW9uIG5vcm1hbGl6ZVN0eWxlQmluZGluZyAoYmluZGluZ1N0eWxlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGJpbmRpbmdTdHlsZSkpIHtcbiAgICByZXR1cm4gdG9PYmplY3QoYmluZGluZ1N0eWxlKVxuICB9XG4gIGlmICh0eXBlb2YgYmluZGluZ1N0eWxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZVN0eWxlVGV4dChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgcmV0dXJuIGJpbmRpbmdTdHlsZVxufVxuXG4vKipcbiAqIHBhcmVudCBjb21wb25lbnQgc3R5bGUgc2hvdWxkIGJlIGFmdGVyIGNoaWxkJ3NcbiAqIHNvIHRoYXQgcGFyZW50IGNvbXBvbmVudCdzIHN0eWxlIGNvdWxkIG92ZXJyaWRlIGl0XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlICh2bm9kZSwgY2hlY2tDaGlsZCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBzdHlsZURhdGE7XG5cbiAgaWYgKGNoZWNrQ2hpbGQpIHtcbiAgICB2YXIgY2hpbGROb2RlID0gdm5vZGU7XG4gICAgd2hpbGUgKGNoaWxkTm9kZS5jb21wb25lbnRJbnN0YW5jZSkge1xuICAgICAgY2hpbGROb2RlID0gY2hpbGROb2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtcbiAgICAgIGlmIChcbiAgICAgICAgY2hpbGROb2RlICYmIGNoaWxkTm9kZS5kYXRhICYmXG4gICAgICAgIChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEoY2hpbGROb2RlLmRhdGEpKVxuICAgICAgKSB7XG4gICAgICAgIGV4dGVuZChyZXMsIHN0eWxlRGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKChzdHlsZURhdGEgPSBub3JtYWxpemVTdHlsZURhdGEodm5vZGUuZGF0YSkpKSB7XG4gICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgfVxuXG4gIHZhciBwYXJlbnROb2RlID0gdm5vZGU7XG4gIHdoaWxlICgocGFyZW50Tm9kZSA9IHBhcmVudE5vZGUucGFyZW50KSkge1xuICAgIGlmIChwYXJlbnROb2RlLmRhdGEgJiYgKHN0eWxlRGF0YSA9IG5vcm1hbGl6ZVN0eWxlRGF0YShwYXJlbnROb2RlLmRhdGEpKSkge1xuICAgICAgZXh0ZW5kKHJlcywgc3R5bGVEYXRhKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxudmFyIGNzc1ZhclJFID0gL14tLS87XG52YXIgaW1wb3J0YW50UkUgPSAvXFxzKiFpbXBvcnRhbnQkLztcbnZhciBzZXRQcm9wID0gZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWwpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChjc3NWYXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsKTtcbiAgfSBlbHNlIGlmIChpbXBvcnRhbnRSRS50ZXN0KHZhbCkpIHtcbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShoeXBoZW5hdGUobmFtZSksIHZhbC5yZXBsYWNlKGltcG9ydGFudFJFLCAnJyksICdpbXBvcnRhbnQnKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbm9ybWFsaXplZE5hbWUgPSBub3JtYWxpemUobmFtZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgLy8gU3VwcG9ydCB2YWx1ZXMgYXJyYXkgY3JlYXRlZCBieSBhdXRvcHJlZml4ZXIsIGUuZy5cbiAgICAgIC8vIHtkaXNwbGF5OiBbXCItd2Via2l0LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiZmxleFwiXX1cbiAgICAgIC8vIFNldCB0aGVtIG9uZSBieSBvbmUsIGFuZCB0aGUgYnJvd3NlciB3aWxsIG9ubHkgc2V0IHRob3NlIGl0IGNhbiByZWNvZ25pemVcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB2YWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWwuc3R5bGVbbm9ybWFsaXplZE5hbWVdID0gdmFsW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZVtub3JtYWxpemVkTmFtZV0gPSB2YWw7XG4gICAgfVxuICB9XG59O1xuXG52YXIgdmVuZG9yTmFtZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnXTtcblxudmFyIGVtcHR5U3R5bGU7XG52YXIgbm9ybWFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChwcm9wKSB7XG4gIGVtcHR5U3R5bGUgPSBlbXB0eVN0eWxlIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xuICBwcm9wID0gY2FtZWxpemUocHJvcCk7XG4gIGlmIChwcm9wICE9PSAnZmlsdGVyJyAmJiAocHJvcCBpbiBlbXB0eVN0eWxlKSkge1xuICAgIHJldHVybiBwcm9wXG4gIH1cbiAgdmFyIGNhcE5hbWUgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZW5kb3JOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuYW1lID0gdmVuZG9yTmFtZXNbaV0gKyBjYXBOYW1lO1xuICAgIGlmIChuYW1lIGluIGVtcHR5U3R5bGUpIHtcbiAgICAgIHJldHVybiBuYW1lXG4gICAgfVxuICB9XG59KTtcblxuZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgZGF0YSA9IHZub2RlLmRhdGE7XG4gIHZhciBvbGREYXRhID0gb2xkVm5vZGUuZGF0YTtcblxuICBpZiAoaXNVbmRlZihkYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKGRhdGEuc3R5bGUpICYmXG4gICAgaXNVbmRlZihvbGREYXRhLnN0YXRpY1N0eWxlKSAmJiBpc1VuZGVmKG9sZERhdGEuc3R5bGUpXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGN1ciwgbmFtZTtcbiAgdmFyIGVsID0gdm5vZGUuZWxtO1xuICB2YXIgb2xkU3RhdGljU3R5bGUgPSBvbGREYXRhLnN0YXRpY1N0eWxlO1xuICB2YXIgb2xkU3R5bGVCaW5kaW5nID0gb2xkRGF0YS5ub3JtYWxpemVkU3R5bGUgfHwgb2xkRGF0YS5zdHlsZSB8fCB7fTtcblxuICAvLyBpZiBzdGF0aWMgc3R5bGUgZXhpc3RzLCBzdHlsZWJpbmRpbmcgYWxyZWFkeSBtZXJnZWQgaW50byBpdCB3aGVuIGRvaW5nIG5vcm1hbGl6ZVN0eWxlRGF0YVxuICB2YXIgb2xkU3R5bGUgPSBvbGRTdGF0aWNTdHlsZSB8fCBvbGRTdHlsZUJpbmRpbmc7XG5cbiAgdmFyIHN0eWxlID0gbm9ybWFsaXplU3R5bGVCaW5kaW5nKHZub2RlLmRhdGEuc3R5bGUpIHx8IHt9O1xuXG4gIC8vIHN0b3JlIG5vcm1hbGl6ZWQgc3R5bGUgdW5kZXIgYSBkaWZmZXJlbnQga2V5IGZvciBuZXh0IGRpZmZcbiAgLy8gbWFrZSBzdXJlIHRvIGNsb25lIGl0IGlmIGl0J3MgcmVhY3RpdmUsIHNpbmNlIHRoZSB1c2VyIGxpa2VseSB3YW50c1xuICAvLyB0byBtdXRhdGUgaXQuXG4gIHZub2RlLmRhdGEubm9ybWFsaXplZFN0eWxlID0gaXNEZWYoc3R5bGUuX19vYl9fKVxuICAgID8gZXh0ZW5kKHt9LCBzdHlsZSlcbiAgICA6IHN0eWxlO1xuXG4gIHZhciBuZXdTdHlsZSA9IGdldFN0eWxlKHZub2RlLCB0cnVlKTtcblxuICBmb3IgKG5hbWUgaW4gb2xkU3R5bGUpIHtcbiAgICBpZiAoaXNVbmRlZihuZXdTdHlsZVtuYW1lXSkpIHtcbiAgICAgIHNldFByb3AoZWwsIG5hbWUsICcnKTtcbiAgICB9XG4gIH1cbiAgZm9yIChuYW1lIGluIG5ld1N0eWxlKSB7XG4gICAgY3VyID0gbmV3U3R5bGVbbmFtZV07XG4gICAgaWYgKGN1ciAhPT0gb2xkU3R5bGVbbmFtZV0pIHtcbiAgICAgIC8vIGllOSBzZXR0aW5nIHRvIG51bGwgaGFzIG5vIGVmZmVjdCwgbXVzdCB1c2UgZW1wdHkgc3RyaW5nXG4gICAgICBzZXRQcm9wKGVsLCBuYW1lLCBjdXIgPT0gbnVsbCA/ICcnIDogY3VyKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHN0eWxlID0ge1xuICBjcmVhdGU6IHVwZGF0ZVN0eWxlLFxuICB1cGRhdGU6IHVwZGF0ZVN0eWxlXG59O1xuXG4vKiAgKi9cblxudmFyIHdoaXRlc3BhY2VSRSA9IC9cXHMrLztcblxuLyoqXG4gKiBBZGQgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBTVkcgc2luY2UgY2xhc3NMaXN0IGlzIG5vdCBzdXBwb3J0ZWQgb25cbiAqIFNWRyBlbGVtZW50cyBpbiBJRVxuICovXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWwsIGNscykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNscy5zcGxpdCh3aGl0ZXNwYWNlUkUpLmZvckVhY2goZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoYyk7IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgIH1cbiAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgIGlmIChjdXIpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVHJhbnNpdGlvbiAoZGVmJCQxKSB7XG4gIGlmICghZGVmJCQxKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJlcyA9IHt9O1xuICAgIGlmIChkZWYkJDEuY3NzICE9PSBmYWxzZSkge1xuICAgICAgZXh0ZW5kKHJlcywgYXV0b0Nzc1RyYW5zaXRpb24oZGVmJCQxLm5hbWUgfHwgJ3YnKSk7XG4gICAgfVxuICAgIGV4dGVuZChyZXMsIGRlZiQkMSk7XG4gICAgcmV0dXJuIHJlc1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWYkJDEgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGF1dG9Dc3NUcmFuc2l0aW9uKGRlZiQkMSlcbiAgfVxufVxuXG52YXIgYXV0b0Nzc1RyYW5zaXRpb24gPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlckNsYXNzOiAobmFtZSArIFwiLWVudGVyXCIpLFxuICAgIGVudGVyVG9DbGFzczogKG5hbWUgKyBcIi1lbnRlci10b1wiKSxcbiAgICBlbnRlckFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWVudGVyLWFjdGl2ZVwiKSxcbiAgICBsZWF2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlXCIpLFxuICAgIGxlYXZlVG9DbGFzczogKG5hbWUgKyBcIi1sZWF2ZS10b1wiKSxcbiAgICBsZWF2ZUFjdGl2ZUNsYXNzOiAobmFtZSArIFwiLWxlYXZlLWFjdGl2ZVwiKVxuICB9XG59KTtcblxudmFyIGhhc1RyYW5zaXRpb24gPSBpbkJyb3dzZXIgJiYgIWlzSUU5O1xudmFyIFRSQU5TSVRJT04gPSAndHJhbnNpdGlvbic7XG52YXIgQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG5cbi8vIFRyYW5zaXRpb24gcHJvcGVydHkvZXZlbnQgc25pZmZpbmdcbnZhciB0cmFuc2l0aW9uUHJvcCA9ICd0cmFuc2l0aW9uJztcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSAndHJhbnNpdGlvbmVuZCc7XG52YXIgYW5pbWF0aW9uUHJvcCA9ICdhbmltYXRpb24nO1xudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ2FuaW1hdGlvbmVuZCc7XG5pZiAoaGFzVHJhbnNpdGlvbikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJlxuICAgIHdpbmRvdy5vbndlYmtpdHRyYW5zaXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICB0cmFuc2l0aW9uUHJvcCA9ICdXZWJraXRUcmFuc2l0aW9uJztcbiAgICB0cmFuc2l0aW9uRW5kRXZlbnQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCc7XG4gIH1cbiAgaWYgKHdpbmRvdy5vbmFuaW1hdGlvbmVuZCA9PT0gdW5kZWZpbmVkICYmXG4gICAgd2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgYW5pbWF0aW9uUHJvcCA9ICdXZWJraXRBbmltYXRpb24nO1xuICAgIGFuaW1hdGlvbkVuZEV2ZW50ID0gJ3dlYmtpdEFuaW1hdGlvbkVuZCc7XG4gIH1cbn1cblxuLy8gYmluZGluZyB0byB3aW5kb3cgaXMgbmVjZXNzYXJ5IHRvIG1ha2UgaG90IHJlbG9hZCB3b3JrIGluIElFIGluIHN0cmljdCBtb2RlXG52YXIgcmFmID0gaW5Ccm93c2VyXG4gID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgID8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdylcbiAgICA6IHNldFRpbWVvdXRcbiAgOiAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmdW5jdGlvbiAoZm4pIHsgcmV0dXJuIGZuKCk7IH07XG5cbmZ1bmN0aW9uIG5leHRGcmFtZSAoZm4pIHtcbiAgcmFmKGZ1bmN0aW9uICgpIHtcbiAgICByYWYoZm4pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkVHJhbnNpdGlvbkNsYXNzIChlbCwgY2xzKSB7XG4gIHZhciB0cmFuc2l0aW9uQ2xhc3NlcyA9IGVsLl90cmFuc2l0aW9uQ2xhc3NlcyB8fCAoZWwuX3RyYW5zaXRpb25DbGFzc2VzID0gW10pO1xuICBpZiAodHJhbnNpdGlvbkNsYXNzZXMuaW5kZXhPZihjbHMpIDwgMCkge1xuICAgIHRyYW5zaXRpb25DbGFzc2VzLnB1c2goY2xzKTtcbiAgICBhZGRDbGFzcyhlbCwgY2xzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUcmFuc2l0aW9uQ2xhc3MgKGVsLCBjbHMpIHtcbiAgaWYgKGVsLl90cmFuc2l0aW9uQ2xhc3Nlcykge1xuICAgIHJlbW92ZShlbC5fdHJhbnNpdGlvbkNsYXNzZXMsIGNscyk7XG4gIH1cbiAgcmVtb3ZlQ2xhc3MoZWwsIGNscyk7XG59XG5cbmZ1bmN0aW9uIHdoZW5UcmFuc2l0aW9uRW5kcyAoXG4gIGVsLFxuICBleHBlY3RlZFR5cGUsXG4gIGNiXG4pIHtcbiAgdmFyIHJlZiA9IGdldFRyYW5zaXRpb25JbmZvKGVsLCBleHBlY3RlZFR5cGUpO1xuICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICB2YXIgdGltZW91dCA9IHJlZi50aW1lb3V0O1xuICB2YXIgcHJvcENvdW50ID0gcmVmLnByb3BDb3VudDtcbiAgaWYgKCF0eXBlKSB7IHJldHVybiBjYigpIH1cbiAgdmFyIGV2ZW50ID0gdHlwZSA9PT0gVFJBTlNJVElPTiA/IHRyYW5zaXRpb25FbmRFdmVudCA6IGFuaW1hdGlvbkVuZEV2ZW50O1xuICB2YXIgZW5kZWQgPSAwO1xuICB2YXIgZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbiAgICBjYigpO1xuICB9O1xuICB2YXIgb25FbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgIGlmICgrK2VuZGVkID49IHByb3BDb3VudCkge1xuICAgICAgICBlbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbmRlZCA8IHByb3BDb3VudCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9LCB0aW1lb3V0ICsgMSk7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIG9uRW5kKTtcbn1cblxudmFyIHRyYW5zZm9ybVJFID0gL1xcYih0cmFuc2Zvcm18YWxsKSgsfCQpLztcblxuZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbkluZm8gKGVsLCBleHBlY3RlZFR5cGUpIHtcbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgLy8gSlNET00gbWF5IHJldHVybiB1bmRlZmluZWQgZm9yIHRyYW5zaXRpb24gcHJvcGVydGllc1xuICB2YXIgdHJhbnNpdGlvbkRlbGF5cyA9IChzdHlsZXNbdHJhbnNpdGlvblByb3AgKyAnRGVsYXknXSB8fCAnJykuc3BsaXQoJywgJyk7XG4gIHZhciB0cmFuc2l0aW9uRHVyYXRpb25zID0gKHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIHRyYW5zaXRpb25UaW1lb3V0ID0gZ2V0VGltZW91dCh0cmFuc2l0aW9uRGVsYXlzLCB0cmFuc2l0aW9uRHVyYXRpb25zKTtcbiAgdmFyIGFuaW1hdGlvbkRlbGF5cyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEZWxheSddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvbkR1cmF0aW9ucyA9IChzdHlsZXNbYW5pbWF0aW9uUHJvcCArICdEdXJhdGlvbiddIHx8ICcnKS5zcGxpdCgnLCAnKTtcbiAgdmFyIGFuaW1hdGlvblRpbWVvdXQgPSBnZXRUaW1lb3V0KGFuaW1hdGlvbkRlbGF5cywgYW5pbWF0aW9uRHVyYXRpb25zKTtcblxuICB2YXIgdHlwZTtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICB2YXIgcHJvcENvdW50ID0gMDtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChleHBlY3RlZFR5cGUgPT09IFRSQU5TSVRJT04pIHtcbiAgICBpZiAodHJhbnNpdGlvblRpbWVvdXQgPiAwKSB7XG4gICAgICB0eXBlID0gVFJBTlNJVElPTjtcbiAgICAgIHRpbWVvdXQgPSB0cmFuc2l0aW9uVGltZW91dDtcbiAgICAgIHByb3BDb3VudCA9IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09IEFOSU1BVElPTikge1xuICAgIGlmIChhbmltYXRpb25UaW1lb3V0ID4gMCkge1xuICAgICAgdHlwZSA9IEFOSU1BVElPTjtcbiAgICAgIHRpbWVvdXQgPSBhbmltYXRpb25UaW1lb3V0O1xuICAgICAgcHJvcENvdW50ID0gYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZW91dCA9IE1hdGgubWF4KHRyYW5zaXRpb25UaW1lb3V0LCBhbmltYXRpb25UaW1lb3V0KTtcbiAgICB0eXBlID0gdGltZW91dCA+IDBcbiAgICAgID8gdHJhbnNpdGlvblRpbWVvdXQgPiBhbmltYXRpb25UaW1lb3V0XG4gICAgICAgID8gVFJBTlNJVElPTlxuICAgICAgICA6IEFOSU1BVElPTlxuICAgICAgOiBudWxsO1xuICAgIHByb3BDb3VudCA9IHR5cGVcbiAgICAgID8gdHlwZSA9PT0gVFJBTlNJVElPTlxuICAgICAgICA/IHRyYW5zaXRpb25EdXJhdGlvbnMubGVuZ3RoXG4gICAgICAgIDogYW5pbWF0aW9uRHVyYXRpb25zLmxlbmd0aFxuICAgICAgOiAwO1xuICB9XG4gIHZhciBoYXNUcmFuc2Zvcm0gPVxuICAgIHR5cGUgPT09IFRSQU5TSVRJT04gJiZcbiAgICB0cmFuc2Zvcm1SRS50ZXN0KHN0eWxlc1t0cmFuc2l0aW9uUHJvcCArICdQcm9wZXJ0eSddKTtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgcHJvcENvdW50OiBwcm9wQ291bnQsXG4gICAgaGFzVHJhbnNmb3JtOiBoYXNUcmFuc2Zvcm1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaW1lb3V0IChkZWxheXMsIGR1cmF0aW9ucykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB3aGlsZSAoZGVsYXlzLmxlbmd0aCA8IGR1cmF0aW9ucy5sZW5ndGgpIHtcbiAgICBkZWxheXMgPSBkZWxheXMuY29uY2F0KGRlbGF5cyk7XG4gIH1cblxuICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgZHVyYXRpb25zLm1hcChmdW5jdGlvbiAoZCwgaSkge1xuICAgIHJldHVybiB0b01zKGQpICsgdG9NcyhkZWxheXNbaV0pXG4gIH0pKVxufVxuXG4vLyBPbGQgdmVyc2lvbnMgb2YgQ2hyb21pdW0gKGJlbG93IDYxLjAuMzE2My4xMDApIGZvcm1hdHMgZmxvYXRpbmcgcG9pbnRlciBudW1iZXJzXG4vLyBpbiBhIGxvY2FsZS1kZXBlbmRlbnQgd2F5LCB1c2luZyBhIGNvbW1hIGluc3RlYWQgb2YgYSBkb3QuXG4vLyBJZiBjb21tYSBpcyBub3QgcmVwbGFjZWQgd2l0aCBhIGRvdCwgdGhlIGlucHV0IHdpbGwgYmUgcm91bmRlZCBkb3duIChpLmUuIGFjdGluZ1xuLy8gYXMgYSBmbG9vciBmdW5jdGlvbikgY2F1c2luZyB1bmV4cGVjdGVkIGJlaGF2aW9yc1xuZnVuY3Rpb24gdG9NcyAocykge1xuICByZXR1cm4gTnVtYmVyKHMuc2xpY2UoMCwgLTEpLnJlcGxhY2UoJywnLCAnLicpKSAqIDEwMDBcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVudGVyICh2bm9kZSwgdG9nZ2xlRGlzcGxheSkge1xuICB2YXIgZWwgPSB2bm9kZS5lbG07XG5cbiAgLy8gY2FsbCBsZWF2ZSBjYWxsYmFjayBub3dcbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIGVsLl9sZWF2ZUNiLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgZWwuX2xlYXZlQ2IoKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcmVzb2x2ZVRyYW5zaXRpb24odm5vZGUuZGF0YS50cmFuc2l0aW9uKTtcbiAgaWYgKGlzVW5kZWYoZGF0YSkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpIHx8IGVsLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgY3NzID0gZGF0YS5jc3M7XG4gIHZhciB0eXBlID0gZGF0YS50eXBlO1xuICB2YXIgZW50ZXJDbGFzcyA9IGRhdGEuZW50ZXJDbGFzcztcbiAgdmFyIGVudGVyVG9DbGFzcyA9IGRhdGEuZW50ZXJUb0NsYXNzO1xuICB2YXIgZW50ZXJBY3RpdmVDbGFzcyA9IGRhdGEuZW50ZXJBY3RpdmVDbGFzcztcbiAgdmFyIGFwcGVhckNsYXNzID0gZGF0YS5hcHBlYXJDbGFzcztcbiAgdmFyIGFwcGVhclRvQ2xhc3MgPSBkYXRhLmFwcGVhclRvQ2xhc3M7XG4gIHZhciBhcHBlYXJBY3RpdmVDbGFzcyA9IGRhdGEuYXBwZWFyQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVFbnRlciA9IGRhdGEuYmVmb3JlRW50ZXI7XG4gIHZhciBlbnRlciA9IGRhdGEuZW50ZXI7XG4gIHZhciBhZnRlckVudGVyID0gZGF0YS5hZnRlckVudGVyO1xuICB2YXIgZW50ZXJDYW5jZWxsZWQgPSBkYXRhLmVudGVyQ2FuY2VsbGVkO1xuICB2YXIgYmVmb3JlQXBwZWFyID0gZGF0YS5iZWZvcmVBcHBlYXI7XG4gIHZhciBhcHBlYXIgPSBkYXRhLmFwcGVhcjtcbiAgdmFyIGFmdGVyQXBwZWFyID0gZGF0YS5hZnRlckFwcGVhcjtcbiAgdmFyIGFwcGVhckNhbmNlbGxlZCA9IGRhdGEuYXBwZWFyQ2FuY2VsbGVkO1xuICB2YXIgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uO1xuXG4gIC8vIGFjdGl2ZUluc3RhbmNlIHdpbGwgYWx3YXlzIGJlIHRoZSA8dHJhbnNpdGlvbj4gY29tcG9uZW50IG1hbmFnaW5nIHRoaXNcbiAgLy8gdHJhbnNpdGlvbi4gT25lIGVkZ2UgY2FzZSB0byBjaGVjayBpcyB3aGVuIHRoZSA8dHJhbnNpdGlvbj4gaXMgcGxhY2VkXG4gIC8vIGFzIHRoZSByb290IG5vZGUgb2YgYSBjaGlsZCBjb21wb25lbnQuIEluIHRoYXQgY2FzZSB3ZSBuZWVkIHRvIGNoZWNrXG4gIC8vIDx0cmFuc2l0aW9uPidzIHBhcmVudCBmb3IgYXBwZWFyIGNoZWNrLlxuICB2YXIgY29udGV4dCA9IGFjdGl2ZUluc3RhbmNlO1xuICB2YXIgdHJhbnNpdGlvbk5vZGUgPSBhY3RpdmVJbnN0YW5jZS4kdm5vZGU7XG4gIHdoaWxlICh0cmFuc2l0aW9uTm9kZSAmJiB0cmFuc2l0aW9uTm9kZS5wYXJlbnQpIHtcbiAgICBjb250ZXh0ID0gdHJhbnNpdGlvbk5vZGUuY29udGV4dDtcbiAgICB0cmFuc2l0aW9uTm9kZSA9IHRyYW5zaXRpb25Ob2RlLnBhcmVudDtcbiAgfVxuXG4gIHZhciBpc0FwcGVhciA9ICFjb250ZXh0Ll9pc01vdW50ZWQgfHwgIXZub2RlLmlzUm9vdEluc2VydDtcblxuICBpZiAoaXNBcHBlYXIgJiYgIWFwcGVhciAmJiBhcHBlYXIgIT09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3RhcnRDbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhckNsYXNzXG4gICAgPyBhcHBlYXJDbGFzc1xuICAgIDogZW50ZXJDbGFzcztcbiAgdmFyIGFjdGl2ZUNsYXNzID0gaXNBcHBlYXIgJiYgYXBwZWFyQWN0aXZlQ2xhc3NcbiAgICA/IGFwcGVhckFjdGl2ZUNsYXNzXG4gICAgOiBlbnRlckFjdGl2ZUNsYXNzO1xuICB2YXIgdG9DbGFzcyA9IGlzQXBwZWFyICYmIGFwcGVhclRvQ2xhc3NcbiAgICA/IGFwcGVhclRvQ2xhc3NcbiAgICA6IGVudGVyVG9DbGFzcztcblxuICB2YXIgYmVmb3JlRW50ZXJIb29rID0gaXNBcHBlYXJcbiAgICA/IChiZWZvcmVBcHBlYXIgfHwgYmVmb3JlRW50ZXIpXG4gICAgOiBiZWZvcmVFbnRlcjtcbiAgdmFyIGVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAodHlwZW9mIGFwcGVhciA9PT0gJ2Z1bmN0aW9uJyA/IGFwcGVhciA6IGVudGVyKVxuICAgIDogZW50ZXI7XG4gIHZhciBhZnRlckVudGVySG9vayA9IGlzQXBwZWFyXG4gICAgPyAoYWZ0ZXJBcHBlYXIgfHwgYWZ0ZXJFbnRlcilcbiAgICA6IGFmdGVyRW50ZXI7XG4gIHZhciBlbnRlckNhbmNlbGxlZEhvb2sgPSBpc0FwcGVhclxuICAgID8gKGFwcGVhckNhbmNlbGxlZCB8fCBlbnRlckNhbmNlbGxlZClcbiAgICA6IGVudGVyQ2FuY2VsbGVkO1xuXG4gIHZhciBleHBsaWNpdEVudGVyRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24uZW50ZXJcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBleHBsaWNpdEVudGVyRHVyYXRpb24gIT0gbnVsbCkge1xuICAgIGNoZWNrRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uLCAnZW50ZXInLCB2bm9kZSk7XG4gIH1cblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgoZW50ZXJIb29rKTtcblxuICB2YXIgY2IgPSBlbC5fZW50ZXJDYiA9IG9uY2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIHRvQ2xhc3MpO1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgc3RhcnRDbGFzcyk7XG4gICAgICB9XG4gICAgICBlbnRlckNhbmNlbGxlZEhvb2sgJiYgZW50ZXJDYW5jZWxsZWRIb29rKGVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJFbnRlckhvb2sgJiYgYWZ0ZXJFbnRlckhvb2soZWwpO1xuICAgIH1cbiAgICBlbC5fZW50ZXJDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmICghdm5vZGUuZGF0YS5zaG93KSB7XG4gICAgLy8gcmVtb3ZlIHBlbmRpbmcgbGVhdmUgZWxlbWVudCBvbiBlbnRlciBieSBpbmplY3RpbmcgYW4gaW5zZXJ0IGhvb2tcbiAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ2luc2VydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgdmFyIHBlbmRpbmdOb2RlID0gcGFyZW50ICYmIHBhcmVudC5fcGVuZGluZyAmJiBwYXJlbnQuX3BlbmRpbmdbdm5vZGUua2V5XTtcbiAgICAgIGlmIChwZW5kaW5nTm9kZSAmJlxuICAgICAgICBwZW5kaW5nTm9kZS50YWcgPT09IHZub2RlLnRhZyAmJlxuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2JcbiAgICAgICkge1xuICAgICAgICBwZW5kaW5nTm9kZS5lbG0uX2xlYXZlQ2IoKTtcbiAgICAgIH1cbiAgICAgIGVudGVySG9vayAmJiBlbnRlckhvb2soZWwsIGNiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHN0YXJ0IGVudGVyIHRyYW5zaXRpb25cbiAgYmVmb3JlRW50ZXJIb29rICYmIGJlZm9yZUVudGVySG9vayhlbCk7XG4gIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICBhZGRUcmFuc2l0aW9uQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlVHJhbnNpdGlvbkNsYXNzKGVsLCBzdGFydENsYXNzKTtcbiAgICAgIGlmICghY2IuY2FuY2VsbGVkKSB7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgdG9DbGFzcyk7XG4gICAgICAgIGlmICghdXNlcldhbnRzQ29udHJvbCkge1xuICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRFbnRlckR1cmF0aW9uKSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChjYiwgZXhwbGljaXRFbnRlckR1cmF0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAodm5vZGUuZGF0YS5zaG93KSB7XG4gICAgdG9nZ2xlRGlzcGxheSAmJiB0b2dnbGVEaXNwbGF5KCk7XG4gICAgZW50ZXJIb29rICYmIGVudGVySG9vayhlbCwgY2IpO1xuICB9XG5cbiAgaWYgKCFleHBlY3RzQ1NTICYmICF1c2VyV2FudHNDb250cm9sKSB7XG4gICAgY2IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsZWF2ZSAodm5vZGUsIHJtKSB7XG4gIHZhciBlbCA9IHZub2RlLmVsbTtcblxuICAvLyBjYWxsIGVudGVyIGNhbGxiYWNrIG5vd1xuICBpZiAoaXNEZWYoZWwuX2VudGVyQ2IpKSB7XG4gICAgZWwuX2VudGVyQ2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICBlbC5fZW50ZXJDYigpO1xuICB9XG5cbiAgdmFyIGRhdGEgPSByZXNvbHZlVHJhbnNpdGlvbih2bm9kZS5kYXRhLnRyYW5zaXRpb24pO1xuICBpZiAoaXNVbmRlZihkYXRhKSB8fCBlbC5ub2RlVHlwZSAhPT0gMSkge1xuICAgIHJldHVybiBybSgpXG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzRGVmKGVsLl9sZWF2ZUNiKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGNzcyA9IGRhdGEuY3NzO1xuICB2YXIgdHlwZSA9IGRhdGEudHlwZTtcbiAgdmFyIGxlYXZlQ2xhc3MgPSBkYXRhLmxlYXZlQ2xhc3M7XG4gIHZhciBsZWF2ZVRvQ2xhc3MgPSBkYXRhLmxlYXZlVG9DbGFzcztcbiAgdmFyIGxlYXZlQWN0aXZlQ2xhc3MgPSBkYXRhLmxlYXZlQWN0aXZlQ2xhc3M7XG4gIHZhciBiZWZvcmVMZWF2ZSA9IGRhdGEuYmVmb3JlTGVhdmU7XG4gIHZhciBsZWF2ZSA9IGRhdGEubGVhdmU7XG4gIHZhciBhZnRlckxlYXZlID0gZGF0YS5hZnRlckxlYXZlO1xuICB2YXIgbGVhdmVDYW5jZWxsZWQgPSBkYXRhLmxlYXZlQ2FuY2VsbGVkO1xuICB2YXIgZGVsYXlMZWF2ZSA9IGRhdGEuZGVsYXlMZWF2ZTtcbiAgdmFyIGR1cmF0aW9uID0gZGF0YS5kdXJhdGlvbjtcblxuICB2YXIgZXhwZWN0c0NTUyA9IGNzcyAhPT0gZmFsc2UgJiYgIWlzSUU5O1xuICB2YXIgdXNlcldhbnRzQ29udHJvbCA9IGdldEhvb2tBcmd1bWVudHNMZW5ndGgobGVhdmUpO1xuXG4gIHZhciBleHBsaWNpdExlYXZlRHVyYXRpb24gPSB0b051bWJlcihcbiAgICBpc09iamVjdChkdXJhdGlvbilcbiAgICAgID8gZHVyYXRpb24ubGVhdmVcbiAgICAgIDogZHVyYXRpb25cbiAgKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0RlZihleHBsaWNpdExlYXZlRHVyYXRpb24pKSB7XG4gICAgY2hlY2tEdXJhdGlvbihleHBsaWNpdExlYXZlRHVyYXRpb24sICdsZWF2ZScsIHZub2RlKTtcbiAgfVxuXG4gIHZhciBjYiA9IGVsLl9sZWF2ZUNiID0gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUgJiYgZWwucGFyZW50Tm9kZS5fcGVuZGluZykge1xuICAgICAgZWwucGFyZW50Tm9kZS5fcGVuZGluZ1t2bm9kZS5rZXldID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGV4cGVjdHNDU1MpIHtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgfVxuICAgIGlmIChjYi5jYW5jZWxsZWQpIHtcbiAgICAgIGlmIChleHBlY3RzQ1NTKSB7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVDbGFzcyk7XG4gICAgICB9XG4gICAgICBsZWF2ZUNhbmNlbGxlZCAmJiBsZWF2ZUNhbmNlbGxlZChlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgICBhZnRlckxlYXZlICYmIGFmdGVyTGVhdmUoZWwpO1xuICAgIH1cbiAgICBlbC5fbGVhdmVDYiA9IG51bGw7XG4gIH0pO1xuXG4gIGlmIChkZWxheUxlYXZlKSB7XG4gICAgZGVsYXlMZWF2ZShwZXJmb3JtTGVhdmUpO1xuICB9IGVsc2Uge1xuICAgIHBlcmZvcm1MZWF2ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGVyZm9ybUxlYXZlICgpIHtcbiAgICAvLyB0aGUgZGVsYXllZCBsZWF2ZSBtYXkgaGF2ZSBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkXG4gICAgaWYgKGNiLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHJlY29yZCBsZWF2aW5nIGVsZW1lbnRcbiAgICBpZiAoIXZub2RlLmRhdGEuc2hvdyAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyB8fCAoZWwucGFyZW50Tm9kZS5fcGVuZGluZyA9IHt9KSlbKHZub2RlLmtleSldID0gdm5vZGU7XG4gICAgfVxuICAgIGJlZm9yZUxlYXZlICYmIGJlZm9yZUxlYXZlKGVsKTtcbiAgICBpZiAoZXhwZWN0c0NTUykge1xuICAgICAgYWRkVHJhbnNpdGlvbkNsYXNzKGVsLCBsZWF2ZUNsYXNzKTtcbiAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVBY3RpdmVDbGFzcyk7XG4gICAgICBuZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIGxlYXZlQ2xhc3MpO1xuICAgICAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbGVhdmVUb0NsYXNzKTtcbiAgICAgICAgICBpZiAoIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRHVyYXRpb24oZXhwbGljaXRMZWF2ZUR1cmF0aW9uKSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNiLCBleHBsaWNpdExlYXZlRHVyYXRpb24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2hlblRyYW5zaXRpb25FbmRzKGVsLCB0eXBlLCBjYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgbGVhdmUgJiYgbGVhdmUoZWwsIGNiKTtcbiAgICBpZiAoIWV4cGVjdHNDU1MgJiYgIXVzZXJXYW50c0NvbnRyb2wpIHtcbiAgICAgIGNiKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIG9ubHkgdXNlZCBpbiBkZXYgbW9kZVxuZnVuY3Rpb24gY2hlY2tEdXJhdGlvbiAodmFsLCBuYW1lLCB2bm9kZSkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gJ251bWJlcicpIHtcbiAgICB3YXJuKFxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgbm90IGEgdmFsaWQgbnVtYmVyIC0gXCIgK1xuICAgICAgXCJnb3QgXCIgKyAoSlNPTi5zdHJpbmdpZnkodmFsKSkgKyBcIi5cIixcbiAgICAgIHZub2RlLmNvbnRleHRcbiAgICApO1xuICB9IGVsc2UgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICB3YXJuKFxuICAgICAgXCI8dHJhbnNpdGlvbj4gZXhwbGljaXQgXCIgKyBuYW1lICsgXCIgZHVyYXRpb24gaXMgTmFOIC0gXCIgK1xuICAgICAgJ3RoZSBkdXJhdGlvbiBleHByZXNzaW9uIG1pZ2h0IGJlIGluY29ycmVjdC4nLFxuICAgICAgdm5vZGUuY29udGV4dFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZER1cmF0aW9uICh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFpc05hTih2YWwpXG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdHJhbnNpdGlvbiBob29rJ3MgYXJndW1lbnQgbGVuZ3RoLiBUaGUgaG9vayBtYXkgYmU6XG4gKiAtIGEgbWVyZ2VkIGhvb2sgKGludm9rZXIpIHdpdGggdGhlIG9yaWdpbmFsIGluIC5mbnNcbiAqIC0gYSB3cmFwcGVkIGNvbXBvbmVudCBtZXRob2QgKGNoZWNrIC5fbGVuZ3RoKVxuICogLSBhIHBsYWluIGZ1bmN0aW9uICgubGVuZ3RoKVxuICovXG5mdW5jdGlvbiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoIChmbikge1xuICBpZiAoaXNVbmRlZihmbikpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICB2YXIgaW52b2tlckZucyA9IGZuLmZucztcbiAgaWYgKGlzRGVmKGludm9rZXJGbnMpKSB7XG4gICAgLy8gaW52b2tlclxuICAgIHJldHVybiBnZXRIb29rQXJndW1lbnRzTGVuZ3RoKFxuICAgICAgQXJyYXkuaXNBcnJheShpbnZva2VyRm5zKVxuICAgICAgICA/IGludm9rZXJGbnNbMF1cbiAgICAgICAgOiBpbnZva2VyRm5zXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoZm4uX2xlbmd0aCB8fCBmbi5sZW5ndGgpID4gMVxuICB9XG59XG5cbmZ1bmN0aW9uIF9lbnRlciAoXywgdm5vZGUpIHtcbiAgaWYgKHZub2RlLmRhdGEuc2hvdyAhPT0gdHJ1ZSkge1xuICAgIGVudGVyKHZub2RlKTtcbiAgfVxufVxuXG52YXIgdHJhbnNpdGlvbiA9IGluQnJvd3NlciA/IHtcbiAgY3JlYXRlOiBfZW50ZXIsXG4gIGFjdGl2YXRlOiBfZW50ZXIsXG4gIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlJCQxICh2bm9kZSwgcm0pIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmICh2bm9kZS5kYXRhLnNob3cgIT09IHRydWUpIHtcbiAgICAgIGxlYXZlKHZub2RlLCBybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJtKCk7XG4gICAgfVxuICB9XG59IDoge307XG5cbnZhciBwbGF0Zm9ybU1vZHVsZXMgPSBbXG4gIGF0dHJzLFxuICBrbGFzcyxcbiAgZXZlbnRzLFxuICBkb21Qcm9wcyxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb25cbl07XG5cbi8qICAqL1xuXG4vLyB0aGUgZGlyZWN0aXZlIG1vZHVsZSBzaG91bGQgYmUgYXBwbGllZCBsYXN0LCBhZnRlciBhbGxcbi8vIGJ1aWx0LWluIG1vZHVsZXMgaGF2ZSBiZWVuIGFwcGxpZWQuXG52YXIgbW9kdWxlcyA9IHBsYXRmb3JtTW9kdWxlcy5jb25jYXQoYmFzZU1vZHVsZXMpO1xuXG52YXIgcGF0Y2ggPSBjcmVhdGVQYXRjaEZ1bmN0aW9uKHsgbm9kZU9wczogbm9kZU9wcywgbW9kdWxlczogbW9kdWxlcyB9KTtcblxuLyoqXG4gKiBOb3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgbGlrZSBhdHRhY2hpbmdcbiAqIHByb3BlcnRpZXMgdG8gRWxlbWVudHMuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoaXNJRTkpIHtcbiAgLy8gaHR0cDovL3d3dy5tYXR0czQxMS5jb20vcG9zdC9pbnRlcm5ldC1leHBsb3Jlci05LW9uaW5wdXQvXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChlbCAmJiBlbC52bW9kZWwpIHtcbiAgICAgIHRyaWdnZXIoZWwsICdpbnB1dCcpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBkaXJlY3RpdmUgPSB7XG4gIGluc2VydGVkOiBmdW5jdGlvbiBpbnNlcnRlZCAoZWwsIGJpbmRpbmcsIHZub2RlLCBvbGRWbm9kZSkge1xuICAgIGlmICh2bm9kZS50YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICAvLyAjNjkwM1xuICAgICAgaWYgKG9sZFZub2RlLmVsbSAmJiAhb2xkVm5vZGUuZWxtLl92T3B0aW9ucykge1xuICAgICAgICBtZXJnZVZOb2RlSG9vayh2bm9kZSwgJ3Bvc3RwYXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkaXJlY3RpdmUuY29tcG9uZW50VXBkYXRlZChlbCwgYmluZGluZywgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIH1cbiAgICAgIGVsLl92T3B0aW9ucyA9IFtdLm1hcC5jYWxsKGVsLm9wdGlvbnMsIGdldFZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHZub2RlLnRhZyA9PT0gJ3RleHRhcmVhJyB8fCBpc1RleHRJbnB1dFR5cGUoZWwudHlwZSkpIHtcbiAgICAgIGVsLl92TW9kaWZpZXJzID0gYmluZGluZy5tb2RpZmllcnM7XG4gICAgICBpZiAoIWJpbmRpbmcubW9kaWZpZXJzLmxhenkpIHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY29tcG9zaXRpb25zdGFydCcsIG9uQ29tcG9zaXRpb25TdGFydCk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBvc2l0aW9uZW5kJywgb25Db21wb3NpdGlvbkVuZCk7XG4gICAgICAgIC8vIFNhZmFyaSA8IDEwLjIgJiBVSVdlYlZpZXcgZG9lc24ndCBmaXJlIGNvbXBvc2l0aW9uZW5kIHdoZW5cbiAgICAgICAgLy8gc3dpdGNoaW5nIGZvY3VzIGJlZm9yZSBjb25maXJtaW5nIGNvbXBvc2l0aW9uIGNob2ljZVxuICAgICAgICAvLyB0aGlzIGFsc28gZml4ZXMgdGhlIGlzc3VlIHdoZXJlIHNvbWUgYnJvd3NlcnMgZS5nLiBpT1MgQ2hyb21lXG4gICAgICAgIC8vIGZpcmVzIFwiY2hhbmdlXCIgaW5zdGVhZCBvZiBcImlucHV0XCIgb24gYXV0b2NvbXBsZXRlLlxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNvbXBvc2l0aW9uRW5kKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChpc0lFOSkge1xuICAgICAgICAgIGVsLnZtb2RlbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50VXBkYXRlZDogZnVuY3Rpb24gY29tcG9uZW50VXBkYXRlZCAoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgaWYgKHZub2RlLnRhZyA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgIHNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bm9kZS5jb250ZXh0KTtcbiAgICAgIC8vIGluIGNhc2UgdGhlIG9wdGlvbnMgcmVuZGVyZWQgYnkgdi1mb3IgaGF2ZSBjaGFuZ2VkLFxuICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IHRoZSB2YWx1ZSBpcyBvdXQtb2Ytc3luYyB3aXRoIHRoZSByZW5kZXJlZCBvcHRpb25zLlxuICAgICAgLy8gZGV0ZWN0IHN1Y2ggY2FzZXMgYW5kIGZpbHRlciBvdXQgdmFsdWVzIHRoYXQgbm8gbG9uZ2VyIGhhcyBhIG1hdGNoaW5nXG4gICAgICAvLyBvcHRpb24gaW4gdGhlIERPTS5cbiAgICAgIHZhciBwcmV2T3B0aW9ucyA9IGVsLl92T3B0aW9ucztcbiAgICAgIHZhciBjdXJPcHRpb25zID0gZWwuX3ZPcHRpb25zID0gW10ubWFwLmNhbGwoZWwub3B0aW9ucywgZ2V0VmFsdWUpO1xuICAgICAgaWYgKGN1ck9wdGlvbnMuc29tZShmdW5jdGlvbiAobywgaSkgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgcHJldk9wdGlvbnNbaV0pOyB9KSkge1xuICAgICAgICAvLyB0cmlnZ2VyIGNoYW5nZSBldmVudCBpZlxuICAgICAgICAvLyBubyBtYXRjaGluZyBvcHRpb24gZm91bmQgZm9yIGF0IGxlYXN0IG9uZSB2YWx1ZVxuICAgICAgICB2YXIgbmVlZFJlc2V0ID0gZWwubXVsdGlwbGVcbiAgICAgICAgICA/IGJpbmRpbmcudmFsdWUuc29tZShmdW5jdGlvbiAodikgeyByZXR1cm4gaGFzTm9NYXRjaGluZ09wdGlvbih2LCBjdXJPcHRpb25zKTsgfSlcbiAgICAgICAgICA6IGJpbmRpbmcudmFsdWUgIT09IGJpbmRpbmcub2xkVmFsdWUgJiYgaGFzTm9NYXRjaGluZ09wdGlvbihiaW5kaW5nLnZhbHVlLCBjdXJPcHRpb25zKTtcbiAgICAgICAgaWYgKG5lZWRSZXNldCkge1xuICAgICAgICAgIHRyaWdnZXIoZWwsICdjaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0U2VsZWN0ZWQgKGVsLCBiaW5kaW5nLCB2bSkge1xuICBhY3R1YWxseVNldFNlbGVjdGVkKGVsLCBiaW5kaW5nLCB2bSk7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaXNJRSB8fCBpc0VkZ2UpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdHVhbGx5U2V0U2VsZWN0ZWQoZWwsIGJpbmRpbmcsIHZtKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY3R1YWxseVNldFNlbGVjdGVkIChlbCwgYmluZGluZywgdm0pIHtcbiAgdmFyIHZhbHVlID0gYmluZGluZy52YWx1ZTtcbiAgdmFyIGlzTXVsdGlwbGUgPSBlbC5tdWx0aXBsZTtcbiAgaWYgKGlzTXVsdGlwbGUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCI8c2VsZWN0IG11bHRpcGxlIHYtbW9kZWw9XFxcIlwiICsgKGJpbmRpbmcuZXhwcmVzc2lvbikgKyBcIlxcXCI+IFwiICtcbiAgICAgIFwiZXhwZWN0cyBhbiBBcnJheSB2YWx1ZSBmb3IgaXRzIGJpbmRpbmcsIGJ1dCBnb3QgXCIgKyAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSkpLFxuICAgICAgdm1cbiAgICApO1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWxlY3RlZCwgb3B0aW9uO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb3B0aW9uID0gZWwub3B0aW9uc1tpXTtcbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgc2VsZWN0ZWQgPSBsb29zZUluZGV4T2YodmFsdWUsIGdldFZhbHVlKG9wdGlvbikpID4gLTE7XG4gICAgICBpZiAob3B0aW9uLnNlbGVjdGVkICE9PSBzZWxlY3RlZCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxvb3NlRXF1YWwoZ2V0VmFsdWUob3B0aW9uKSwgdmFsdWUpKSB7XG4gICAgICAgIGlmIChlbC5zZWxlY3RlZEluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgZWwuc2VsZWN0ZWRJbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICghaXNNdWx0aXBsZSkge1xuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNOb01hdGNoaW5nT3B0aW9uICh2YWx1ZSwgb3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5ldmVyeShmdW5jdGlvbiAobykgeyByZXR1cm4gIWxvb3NlRXF1YWwobywgdmFsdWUpOyB9KVxufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSAob3B0aW9uKSB7XG4gIHJldHVybiAnX3ZhbHVlJyBpbiBvcHRpb25cbiAgICA/IG9wdGlvbi5fdmFsdWVcbiAgICA6IG9wdGlvbi52YWx1ZVxufVxuXG5mdW5jdGlvbiBvbkNvbXBvc2l0aW9uU3RhcnQgKGUpIHtcbiAgZS50YXJnZXQuY29tcG9zaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25Db21wb3NpdGlvbkVuZCAoZSkge1xuICAvLyBwcmV2ZW50IHRyaWdnZXJpbmcgYW4gaW5wdXQgZXZlbnQgZm9yIG5vIHJlYXNvblxuICBpZiAoIWUudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm4gfVxuICBlLnRhcmdldC5jb21wb3NpbmcgPSBmYWxzZTtcbiAgdHJpZ2dlcihlLnRhcmdldCwgJ2lucHV0Jyk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXIgKGVsLCB0eXBlKSB7XG4gIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgZS5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSk7XG4gIGVsLmRpc3BhdGNoRXZlbnQoZSk7XG59XG5cbi8qICAqL1xuXG4vLyByZWN1cnNpdmVseSBzZWFyY2ggZm9yIHBvc3NpYmxlIHRyYW5zaXRpb24gZGVmaW5lZCBpbnNpZGUgdGhlIGNvbXBvbmVudCByb290XG5mdW5jdGlvbiBsb2NhdGVOb2RlICh2bm9kZSkge1xuICByZXR1cm4gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgJiYgKCF2bm9kZS5kYXRhIHx8ICF2bm9kZS5kYXRhLnRyYW5zaXRpb24pXG4gICAgPyBsb2NhdGVOb2RlKHZub2RlLmNvbXBvbmVudEluc3RhbmNlLl92bm9kZSlcbiAgICA6IHZub2RlXG59XG5cbnZhciBzaG93ID0ge1xuICBiaW5kOiBmdW5jdGlvbiBiaW5kIChlbCwgcmVmLCB2bm9kZSkge1xuICAgIHZhciB2YWx1ZSA9IHJlZi52YWx1ZTtcblxuICAgIHZub2RlID0gbG9jYXRlTm9kZSh2bm9kZSk7XG4gICAgdmFyIHRyYW5zaXRpb24kJDEgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEudHJhbnNpdGlvbjtcbiAgICB2YXIgb3JpZ2luYWxEaXNwbGF5ID0gZWwuX192T3JpZ2luYWxEaXNwbGF5ID1cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyA/ICcnIDogZWwuc3R5bGUuZGlzcGxheTtcbiAgICBpZiAodmFsdWUgJiYgdHJhbnNpdGlvbiQkMSkge1xuICAgICAgdm5vZGUuZGF0YS5zaG93ID0gdHJ1ZTtcbiAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbERpc3BsYXk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gb3JpZ2luYWxEaXNwbGF5IDogJ25vbmUnO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSAoZWwsIHJlZiwgdm5vZGUpIHtcbiAgICB2YXIgdmFsdWUgPSByZWYudmFsdWU7XG4gICAgdmFyIG9sZFZhbHVlID0gcmVmLm9sZFZhbHVlO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCF2YWx1ZSA9PT0gIW9sZFZhbHVlKSB7IHJldHVybiB9XG4gICAgdm5vZGUgPSBsb2NhdGVOb2RlKHZub2RlKTtcbiAgICB2YXIgdHJhbnNpdGlvbiQkMSA9IHZub2RlLmRhdGEgJiYgdm5vZGUuZGF0YS50cmFuc2l0aW9uO1xuICAgIGlmICh0cmFuc2l0aW9uJCQxKSB7XG4gICAgICB2bm9kZS5kYXRhLnNob3cgPSB0cnVlO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVudGVyKHZub2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWF2ZSh2bm9kZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyBlbC5fX3ZPcmlnaW5hbERpc3BsYXkgOiAnbm9uZSc7XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kIChcbiAgICBlbCxcbiAgICBiaW5kaW5nLFxuICAgIHZub2RlLFxuICAgIG9sZFZub2RlLFxuICAgIGlzRGVzdHJveVxuICApIHtcbiAgICBpZiAoIWlzRGVzdHJveSkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fdk9yaWdpbmFsRGlzcGxheTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBwbGF0Zm9ybURpcmVjdGl2ZXMgPSB7XG4gIG1vZGVsOiBkaXJlY3RpdmUsXG4gIHNob3c6IHNob3dcbn07XG5cbi8qICAqL1xuXG52YXIgdHJhbnNpdGlvblByb3BzID0ge1xuICBuYW1lOiBTdHJpbmcsXG4gIGFwcGVhcjogQm9vbGVhbixcbiAgY3NzOiBCb29sZWFuLFxuICBtb2RlOiBTdHJpbmcsXG4gIHR5cGU6IFN0cmluZyxcbiAgZW50ZXJDbGFzczogU3RyaW5nLFxuICBsZWF2ZUNsYXNzOiBTdHJpbmcsXG4gIGVudGVyVG9DbGFzczogU3RyaW5nLFxuICBsZWF2ZVRvQ2xhc3M6IFN0cmluZyxcbiAgZW50ZXJBY3RpdmVDbGFzczogU3RyaW5nLFxuICBsZWF2ZUFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhckNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhckFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gIGFwcGVhclRvQ2xhc3M6IFN0cmluZyxcbiAgZHVyYXRpb246IFtOdW1iZXIsIFN0cmluZywgT2JqZWN0XVxufTtcblxuLy8gaW4gY2FzZSB0aGUgY2hpbGQgaXMgYWxzbyBhbiBhYnN0cmFjdCBjb21wb25lbnQsIGUuZy4gPGtlZXAtYWxpdmU+XG4vLyB3ZSB3YW50IHRvIHJlY3Vyc2l2ZWx5IHJldHJpZXZlIHRoZSByZWFsIGNvbXBvbmVudCB0byBiZSByZW5kZXJlZFxuZnVuY3Rpb24gZ2V0UmVhbENoaWxkICh2bm9kZSkge1xuICB2YXIgY29tcE9wdGlvbnMgPSB2bm9kZSAmJiB2bm9kZS5jb21wb25lbnRPcHRpb25zO1xuICBpZiAoY29tcE9wdGlvbnMgJiYgY29tcE9wdGlvbnMuQ3Rvci5vcHRpb25zLmFic3RyYWN0KSB7XG4gICAgcmV0dXJuIGdldFJlYWxDaGlsZChnZXRGaXJzdENvbXBvbmVudENoaWxkKGNvbXBPcHRpb25zLmNoaWxkcmVuKSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0VHJhbnNpdGlvbkRhdGEgKGNvbXApIHtcbiAgdmFyIGRhdGEgPSB7fTtcbiAgdmFyIG9wdGlvbnMgPSBjb21wLiRvcHRpb25zO1xuICAvLyBwcm9wc1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucy5wcm9wc0RhdGEpIHtcbiAgICBkYXRhW2tleV0gPSBjb21wW2tleV07XG4gIH1cbiAgLy8gZXZlbnRzLlxuICAvLyBleHRyYWN0IGxpc3RlbmVycyBhbmQgcGFzcyB0aGVtIGRpcmVjdGx5IHRvIHRoZSB0cmFuc2l0aW9uIG1ldGhvZHNcbiAgdmFyIGxpc3RlbmVycyA9IG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztcbiAgZm9yICh2YXIga2V5JDEgaW4gbGlzdGVuZXJzKSB7XG4gICAgZGF0YVtjYW1lbGl6ZShrZXkkMSldID0gbGlzdGVuZXJzW2tleSQxXTtcbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBwbGFjZWhvbGRlciAoaCwgcmF3Q2hpbGQpIHtcbiAgaWYgKC9cXGQta2VlcC1hbGl2ZSQvLnRlc3QocmF3Q2hpbGQudGFnKSkge1xuICAgIHJldHVybiBoKCdrZWVwLWFsaXZlJywge1xuICAgICAgcHJvcHM6IHJhd0NoaWxkLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBoYXNQYXJlbnRUcmFuc2l0aW9uICh2bm9kZSkge1xuICB3aGlsZSAoKHZub2RlID0gdm5vZGUucGFyZW50KSkge1xuICAgIGlmICh2bm9kZS5kYXRhLnRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzU2FtZUNoaWxkIChjaGlsZCwgb2xkQ2hpbGQpIHtcbiAgcmV0dXJuIG9sZENoaWxkLmtleSA9PT0gY2hpbGQua2V5ICYmIG9sZENoaWxkLnRhZyA9PT0gY2hpbGQudGFnXG59XG5cbnZhciBpc05vdFRleHROb2RlID0gZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudGFnIHx8IGlzQXN5bmNQbGFjZWhvbGRlcihjKTsgfTtcblxudmFyIGlzVlNob3dEaXJlY3RpdmUgPSBmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5uYW1lID09PSAnc2hvdyc7IH07XG5cbnZhciBUcmFuc2l0aW9uID0ge1xuICBuYW1lOiAndHJhbnNpdGlvbicsXG4gIHByb3BzOiB0cmFuc2l0aW9uUHJvcHMsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyIChoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0O1xuICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGZpbHRlciBvdXQgdGV4dCBub2RlcyAocG9zc2libGUgd2hpdGVzcGFjZXMpXG4gICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoaXNOb3RUZXh0Tm9kZSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdhcm4gbXVsdGlwbGUgZWxlbWVudHNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnPHRyYW5zaXRpb24+IGNhbiBvbmx5IGJlIHVzZWQgb24gYSBzaW5nbGUgZWxlbWVudC4gVXNlICcgK1xuICAgICAgICAnPHRyYW5zaXRpb24tZ3JvdXA+IGZvciBsaXN0cy4nLFxuICAgICAgICB0aGlzLiRwYXJlbnRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIG1vZGUgPSB0aGlzLm1vZGU7XG5cbiAgICAvLyB3YXJuIGludmFsaWQgbW9kZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBtb2RlICYmIG1vZGUgIT09ICdpbi1vdXQnICYmIG1vZGUgIT09ICdvdXQtaW4nXG4gICAgKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnaW52YWxpZCA8dHJhbnNpdGlvbj4gbW9kZTogJyArIG1vZGUsXG4gICAgICAgIHRoaXMuJHBhcmVudFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgcmF3Q2hpbGQgPSBjaGlsZHJlblswXTtcblxuICAgIC8vIGlmIHRoaXMgaXMgYSBjb21wb25lbnQgcm9vdCBub2RlIGFuZCB0aGUgY29tcG9uZW50J3NcbiAgICAvLyBwYXJlbnQgY29udGFpbmVyIG5vZGUgYWxzbyBoYXMgdHJhbnNpdGlvbiwgc2tpcC5cbiAgICBpZiAoaGFzUGFyZW50VHJhbnNpdGlvbih0aGlzLiR2bm9kZSkpIHtcbiAgICAgIHJldHVybiByYXdDaGlsZFxuICAgIH1cblxuICAgIC8vIGFwcGx5IHRyYW5zaXRpb24gZGF0YSB0byBjaGlsZFxuICAgIC8vIHVzZSBnZXRSZWFsQ2hpbGQoKSB0byBpZ25vcmUgYWJzdHJhY3QgY29tcG9uZW50cyBlLmcuIGtlZXAtYWxpdmVcbiAgICB2YXIgY2hpbGQgPSBnZXRSZWFsQ2hpbGQocmF3Q2hpbGQpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghY2hpbGQpIHtcbiAgICAgIHJldHVybiByYXdDaGlsZFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9sZWF2aW5nKSB7XG4gICAgICByZXR1cm4gcGxhY2Vob2xkZXIoaCwgcmF3Q2hpbGQpXG4gICAgfVxuXG4gICAgLy8gZW5zdXJlIGEga2V5IHRoYXQgaXMgdW5pcXVlIHRvIHRoZSB2bm9kZSB0eXBlIGFuZCB0byB0aGlzIHRyYW5zaXRpb25cbiAgICAvLyBjb21wb25lbnQgaW5zdGFuY2UuIFRoaXMga2V5IHdpbGwgYmUgdXNlZCB0byByZW1vdmUgcGVuZGluZyBsZWF2aW5nIG5vZGVzXG4gICAgLy8gZHVyaW5nIGVudGVyaW5nLlxuICAgIHZhciBpZCA9IFwiX190cmFuc2l0aW9uLVwiICsgKHRoaXMuX3VpZCkgKyBcIi1cIjtcbiAgICBjaGlsZC5rZXkgPSBjaGlsZC5rZXkgPT0gbnVsbFxuICAgICAgPyBjaGlsZC5pc0NvbW1lbnRcbiAgICAgICAgPyBpZCArICdjb21tZW50J1xuICAgICAgICA6IGlkICsgY2hpbGQudGFnXG4gICAgICA6IGlzUHJpbWl0aXZlKGNoaWxkLmtleSlcbiAgICAgICAgPyAoU3RyaW5nKGNoaWxkLmtleSkuaW5kZXhPZihpZCkgPT09IDAgPyBjaGlsZC5rZXkgOiBpZCArIGNoaWxkLmtleSlcbiAgICAgICAgOiBjaGlsZC5rZXk7XG5cbiAgICB2YXIgZGF0YSA9IChjaGlsZC5kYXRhIHx8IChjaGlsZC5kYXRhID0ge30pKS50cmFuc2l0aW9uID0gZXh0cmFjdFRyYW5zaXRpb25EYXRhKHRoaXMpO1xuICAgIHZhciBvbGRSYXdDaGlsZCA9IHRoaXMuX3Zub2RlO1xuICAgIHZhciBvbGRDaGlsZCA9IGdldFJlYWxDaGlsZChvbGRSYXdDaGlsZCk7XG5cbiAgICAvLyBtYXJrIHYtc2hvd1xuICAgIC8vIHNvIHRoYXQgdGhlIHRyYW5zaXRpb24gbW9kdWxlIGNhbiBoYW5kIG92ZXIgdGhlIGNvbnRyb2wgdG8gdGhlIGRpcmVjdGl2ZVxuICAgIGlmIChjaGlsZC5kYXRhLmRpcmVjdGl2ZXMgJiYgY2hpbGQuZGF0YS5kaXJlY3RpdmVzLnNvbWUoaXNWU2hvd0RpcmVjdGl2ZSkpIHtcbiAgICAgIGNoaWxkLmRhdGEuc2hvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgb2xkQ2hpbGQgJiZcbiAgICAgIG9sZENoaWxkLmRhdGEgJiZcbiAgICAgICFpc1NhbWVDaGlsZChjaGlsZCwgb2xkQ2hpbGQpICYmXG4gICAgICAhaXNBc3luY1BsYWNlaG9sZGVyKG9sZENoaWxkKSAmJlxuICAgICAgLy8gIzY2ODcgY29tcG9uZW50IHJvb3QgaXMgYSBjb21tZW50IG5vZGVcbiAgICAgICEob2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UgJiYgb2xkQ2hpbGQuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlLmlzQ29tbWVudClcbiAgICApIHtcbiAgICAgIC8vIHJlcGxhY2Ugb2xkIGNoaWxkIHRyYW5zaXRpb24gZGF0YSB3aXRoIGZyZXNoIG9uZVxuICAgICAgLy8gaW1wb3J0YW50IGZvciBkeW5hbWljIHRyYW5zaXRpb25zIVxuICAgICAgdmFyIG9sZERhdGEgPSBvbGRDaGlsZC5kYXRhLnRyYW5zaXRpb24gPSBleHRlbmQoe30sIGRhdGEpO1xuICAgICAgLy8gaGFuZGxlIHRyYW5zaXRpb24gbW9kZVxuICAgICAgaWYgKG1vZGUgPT09ICdvdXQtaW4nKSB7XG4gICAgICAgIC8vIHJldHVybiBwbGFjZWhvbGRlciBub2RlIGFuZCBxdWV1ZSB1cGRhdGUgd2hlbiBsZWF2ZSBmaW5pc2hlc1xuICAgICAgICB0aGlzLl9sZWF2aW5nID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VWTm9kZUhvb2sob2xkRGF0YSwgJ2FmdGVyTGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcyQxLl9sZWF2aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcyQxLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBsYWNlaG9sZGVyKGgsIHJhd0NoaWxkKVxuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAnaW4tb3V0Jykge1xuICAgICAgICBpZiAoaXNBc3luY1BsYWNlaG9sZGVyKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiBvbGRSYXdDaGlsZFxuICAgICAgICB9XG4gICAgICAgIHZhciBkZWxheWVkTGVhdmU7XG4gICAgICAgIHZhciBwZXJmb3JtTGVhdmUgPSBmdW5jdGlvbiAoKSB7IGRlbGF5ZWRMZWF2ZSgpOyB9O1xuICAgICAgICBtZXJnZVZOb2RlSG9vayhkYXRhLCAnYWZ0ZXJFbnRlcicsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKGRhdGEsICdlbnRlckNhbmNlbGxlZCcsIHBlcmZvcm1MZWF2ZSk7XG4gICAgICAgIG1lcmdlVk5vZGVIb29rKG9sZERhdGEsICdkZWxheUxlYXZlJywgZnVuY3Rpb24gKGxlYXZlKSB7IGRlbGF5ZWRMZWF2ZSA9IGxlYXZlOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmF3Q2hpbGRcbiAgfVxufTtcblxuLyogICovXG5cbnZhciBwcm9wcyA9IGV4dGVuZCh7XG4gIHRhZzogU3RyaW5nLFxuICBtb3ZlQ2xhc3M6IFN0cmluZ1xufSwgdHJhbnNpdGlvblByb3BzKTtcblxuZGVsZXRlIHByb3BzLm1vZGU7XG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSB7XG4gIHByb3BzOiBwcm9wcyxcblxuICBiZWZvcmVNb3VudDogZnVuY3Rpb24gYmVmb3JlTW91bnQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdmFyIHVwZGF0ZSA9IHRoaXMuX3VwZGF0ZTtcbiAgICB0aGlzLl91cGRhdGUgPSBmdW5jdGlvbiAodm5vZGUsIGh5ZHJhdGluZykge1xuICAgICAgdmFyIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSA9IHNldEFjdGl2ZUluc3RhbmNlKHRoaXMkMSk7XG4gICAgICAvLyBmb3JjZSByZW1vdmluZyBwYXNzXG4gICAgICB0aGlzJDEuX19wYXRjaF9fKFxuICAgICAgICB0aGlzJDEuX3Zub2RlLFxuICAgICAgICB0aGlzJDEua2VwdCxcbiAgICAgICAgZmFsc2UsIC8vIGh5ZHJhdGluZ1xuICAgICAgICB0cnVlIC8vIHJlbW92ZU9ubHkgKCFpbXBvcnRhbnQsIGF2b2lkcyB1bm5lY2Vzc2FyeSBtb3ZlcylcbiAgICAgICk7XG4gICAgICB0aGlzJDEuX3Zub2RlID0gdGhpcyQxLmtlcHQ7XG4gICAgICByZXN0b3JlQWN0aXZlSW5zdGFuY2UoKTtcbiAgICAgIHVwZGF0ZS5jYWxsKHRoaXMkMSwgdm5vZGUsIGh5ZHJhdGluZyk7XG4gICAgfTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlciAoaCkge1xuICAgIHZhciB0YWcgPSB0aGlzLnRhZyB8fCB0aGlzLiR2bm9kZS5kYXRhLnRhZyB8fCAnc3Bhbic7XG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHByZXZDaGlsZHJlbiA9IHRoaXMucHJldkNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICB2YXIgcmF3Q2hpbGRyZW4gPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdO1xuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB2YXIgdHJhbnNpdGlvbkRhdGEgPSBleHRyYWN0VHJhbnNpdGlvbkRhdGEodGhpcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhd0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IHJhd0NoaWxkcmVuW2ldO1xuICAgICAgaWYgKGMudGFnKSB7XG4gICAgICAgIGlmIChjLmtleSAhPSBudWxsICYmIFN0cmluZyhjLmtleSkuaW5kZXhPZignX192bGlzdCcpICE9PSAwKSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjKTtcbiAgICAgICAgICBtYXBbYy5rZXldID0gY1xuICAgICAgICAgIDsoYy5kYXRhIHx8IChjLmRhdGEgPSB7fSkpLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRGF0YTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdmFyIG9wdHMgPSBjLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgICAgICAgdmFyIG5hbWUgPSBvcHRzID8gKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcgfHwgJycpIDogYy50YWc7XG4gICAgICAgICAgd2FybigoXCI8dHJhbnNpdGlvbi1ncm91cD4gY2hpbGRyZW4gbXVzdCBiZSBrZXllZDogPFwiICsgbmFtZSArIFwiPlwiKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJldkNoaWxkcmVuKSB7XG4gICAgICB2YXIga2VwdCA9IFtdO1xuICAgICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkkMSA9IDA7IGkkMSA8IHByZXZDaGlsZHJlbi5sZW5ndGg7IGkkMSsrKSB7XG4gICAgICAgIHZhciBjJDEgPSBwcmV2Q2hpbGRyZW5baSQxXTtcbiAgICAgICAgYyQxLmRhdGEudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25EYXRhO1xuICAgICAgICBjJDEuZGF0YS5wb3MgPSBjJDEuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAobWFwW2MkMS5rZXldKSB7XG4gICAgICAgICAga2VwdC5wdXNoKGMkMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVtb3ZlZC5wdXNoKGMkMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMua2VwdCA9IGgodGFnLCBudWxsLCBrZXB0KTtcbiAgICAgIHRoaXMucmVtb3ZlZCA9IHJlbW92ZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGgodGFnLCBudWxsLCBjaGlsZHJlbilcbiAgfSxcblxuICB1cGRhdGVkOiBmdW5jdGlvbiB1cGRhdGVkICgpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByZXZDaGlsZHJlbjtcbiAgICB2YXIgbW92ZUNsYXNzID0gdGhpcy5tb3ZlQ2xhc3MgfHwgKCh0aGlzLm5hbWUgfHwgJ3YnKSArICctbW92ZScpO1xuICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoIHx8ICF0aGlzLmhhc01vdmUoY2hpbGRyZW5bMF0uZWxtLCBtb3ZlQ2xhc3MpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB3ZSBkaXZpZGUgdGhlIHdvcmsgaW50byB0aHJlZSBsb29wcyB0byBhdm9pZCBtaXhpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXNcbiAgICAvLyBpbiBlYWNoIGl0ZXJhdGlvbiAtIHdoaWNoIGhlbHBzIHByZXZlbnQgbGF5b3V0IHRocmFzaGluZy5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNhbGxQZW5kaW5nQ2JzKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKHJlY29yZFBvc2l0aW9uKTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGFwcGx5VHJhbnNsYXRpb24pO1xuXG4gICAgLy8gZm9yY2UgcmVmbG93IHRvIHB1dCBldmVyeXRoaW5nIGluIHBvc2l0aW9uXG4gICAgLy8gYXNzaWduIHRvIHRoaXMgdG8gYXZvaWQgYmVpbmcgcmVtb3ZlZCBpbiB0cmVlLXNoYWtpbmdcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0aGlzLl9yZWZsb3cgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgIGlmIChjLmRhdGEubW92ZWQpIHtcbiAgICAgICAgdmFyIGVsID0gYy5lbG07XG4gICAgICAgIHZhciBzID0gZWwuc3R5bGU7XG4gICAgICAgIGFkZFRyYW5zaXRpb25DbGFzcyhlbCwgbW92ZUNsYXNzKTtcbiAgICAgICAgcy50cmFuc2Zvcm0gPSBzLldlYmtpdFRyYW5zZm9ybSA9IHMudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZEV2ZW50LCBlbC5fbW92ZUNiID0gZnVuY3Rpb24gY2IgKGUpIHtcbiAgICAgICAgICBpZiAoZSAmJiBlLnRhcmdldCAhPT0gZWwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWUgfHwgL3RyYW5zZm9ybSQvLnRlc3QoZS5wcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRyYW5zaXRpb25FbmRFdmVudCwgY2IpO1xuICAgICAgICAgICAgZWwuX21vdmVDYiA9IG51bGw7XG4gICAgICAgICAgICByZW1vdmVUcmFuc2l0aW9uQ2xhc3MoZWwsIG1vdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFzTW92ZTogZnVuY3Rpb24gaGFzTW92ZSAoZWwsIG1vdmVDbGFzcykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoIWhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh0aGlzLl9oYXNNb3ZlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNNb3ZlXG4gICAgICB9XG4gICAgICAvLyBEZXRlY3Qgd2hldGhlciBhbiBlbGVtZW50IHdpdGggdGhlIG1vdmUgY2xhc3MgYXBwbGllZCBoYXNcbiAgICAgIC8vIENTUyB0cmFuc2l0aW9ucy4gU2luY2UgdGhlIGVsZW1lbnQgbWF5IGJlIGluc2lkZSBhbiBlbnRlcmluZ1xuICAgICAgLy8gdHJhbnNpdGlvbiBhdCB0aGlzIHZlcnkgbW9tZW50LCB3ZSBtYWtlIGEgY2xvbmUgb2YgaXQgYW5kIHJlbW92ZVxuICAgICAgLy8gYWxsIG90aGVyIHRyYW5zaXRpb24gY2xhc3NlcyBhcHBsaWVkIHRvIGVuc3VyZSBvbmx5IHRoZSBtb3ZlIGNsYXNzXG4gICAgICAvLyBpcyBhcHBsaWVkLlxuICAgICAgdmFyIGNsb25lID0gZWwuY2xvbmVOb2RlKCk7XG4gICAgICBpZiAoZWwuX3RyYW5zaXRpb25DbGFzc2VzKSB7XG4gICAgICAgIGVsLl90cmFuc2l0aW9uQ2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHsgcmVtb3ZlQ2xhc3MoY2xvbmUsIGNscyk7IH0pO1xuICAgICAgfVxuICAgICAgYWRkQ2xhc3MoY2xvbmUsIG1vdmVDbGFzcyk7XG4gICAgICBjbG9uZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy4kZWwuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgdmFyIGluZm8gPSBnZXRUcmFuc2l0aW9uSW5mbyhjbG9uZSk7XG4gICAgICB0aGlzLiRlbC5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICByZXR1cm4gKHRoaXMuX2hhc01vdmUgPSBpbmZvLmhhc1RyYW5zZm9ybSlcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGNhbGxQZW5kaW5nQ2JzIChjKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoYy5lbG0uX21vdmVDYikge1xuICAgIGMuZWxtLl9tb3ZlQ2IoKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGMuZWxtLl9lbnRlckNiKSB7XG4gICAgYy5lbG0uX2VudGVyQ2IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWNvcmRQb3NpdGlvbiAoYykge1xuICBjLmRhdGEubmV3UG9zID0gYy5lbG0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5VHJhbnNsYXRpb24gKGMpIHtcbiAgdmFyIG9sZFBvcyA9IGMuZGF0YS5wb3M7XG4gIHZhciBuZXdQb3MgPSBjLmRhdGEubmV3UG9zO1xuICB2YXIgZHggPSBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0O1xuICB2YXIgZHkgPSBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcDtcbiAgaWYgKGR4IHx8IGR5KSB7XG4gICAgYy5kYXRhLm1vdmVkID0gdHJ1ZTtcbiAgICB2YXIgcyA9IGMuZWxtLnN0eWxlO1xuICAgIHMudHJhbnNmb3JtID0gcy5XZWJraXRUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIGR4ICsgXCJweCxcIiArIGR5ICsgXCJweClcIjtcbiAgICBzLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XG4gIH1cbn1cblxudmFyIHBsYXRmb3JtQ29tcG9uZW50cyA9IHtcbiAgVHJhbnNpdGlvbjogVHJhbnNpdGlvbixcbiAgVHJhbnNpdGlvbkdyb3VwOiBUcmFuc2l0aW9uR3JvdXBcbn07XG5cbi8qICAqL1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHNwZWNpZmljIHV0aWxzXG5WdWUuY29uZmlnLm11c3RVc2VQcm9wID0gbXVzdFVzZVByb3A7XG5WdWUuY29uZmlnLmlzUmVzZXJ2ZWRUYWcgPSBpc1Jlc2VydmVkVGFnO1xuVnVlLmNvbmZpZy5pc1Jlc2VydmVkQXR0ciA9IGlzUmVzZXJ2ZWRBdHRyO1xuVnVlLmNvbmZpZy5nZXRUYWdOYW1lc3BhY2UgPSBnZXRUYWdOYW1lc3BhY2U7XG5WdWUuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQgPSBpc1Vua25vd25FbGVtZW50O1xuXG4vLyBpbnN0YWxsIHBsYXRmb3JtIHJ1bnRpbWUgZGlyZWN0aXZlcyAmIGNvbXBvbmVudHNcbmV4dGVuZChWdWUub3B0aW9ucy5kaXJlY3RpdmVzLCBwbGF0Zm9ybURpcmVjdGl2ZXMpO1xuZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIHBsYXRmb3JtQ29tcG9uZW50cyk7XG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gaW5Ccm93c2VyID8gcGF0Y2ggOiBub29wO1xuXG4vLyBwdWJsaWMgbW91bnQgbWV0aG9kXG5WdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChcbiAgZWwsXG4gIGh5ZHJhdGluZ1xuKSB7XG4gIGVsID0gZWwgJiYgaW5Ccm93c2VyID8gcXVlcnkoZWwpIDogdW5kZWZpbmVkO1xuICByZXR1cm4gbW91bnRDb21wb25lbnQodGhpcywgZWwsIGh5ZHJhdGluZylcbn07XG5cbi8vIGRldnRvb2xzIGdsb2JhbCBob29rXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuaWYgKGluQnJvd3Nlcikge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY29uZmlnLmRldnRvb2xzKSB7XG4gICAgICBpZiAoZGV2dG9vbHMpIHtcbiAgICAgICAgZGV2dG9vbHMuZW1pdCgnaW5pdCcsIFZ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCdcbiAgICAgICkge1xuICAgICAgICBjb25zb2xlW2NvbnNvbGUuaW5mbyA/ICdpbmZvJyA6ICdsb2cnXShcbiAgICAgICAgICAnRG93bmxvYWQgdGhlIFZ1ZSBEZXZ0b29scyBleHRlbnNpb24gZm9yIGEgYmV0dGVyIGRldmVsb3BtZW50IGV4cGVyaWVuY2U6XFxuJyArXG4gICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUtZGV2dG9vbHMnXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICBjb25maWcucHJvZHVjdGlvblRpcCAhPT0gZmFsc2UgJiZcbiAgICAgIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJ1xuICAgICkge1xuICAgICAgY29uc29sZVtjb25zb2xlLmluZm8gPyAnaW5mbycgOiAnbG9nJ10oXG4gICAgICAgIFwiWW91IGFyZSBydW5uaW5nIFZ1ZSBpbiBkZXZlbG9wbWVudCBtb2RlLlxcblwiICtcbiAgICAgICAgXCJNYWtlIHN1cmUgdG8gdHVybiBvbiBwcm9kdWN0aW9uIG1vZGUgd2hlbiBkZXBsb3lpbmcgZm9yIHByb2R1Y3Rpb24uXFxuXCIgK1xuICAgICAgICBcIlNlZSBtb3JlIHRpcHMgYXQgaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvZGVwbG95bWVudC5odG1sXCJcbiAgICAgICk7XG4gICAgfVxuICB9LCAwKTtcbn1cblxuLyogICovXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZTtcbiIsImltcG9ydCB0IGZyb21cImRlZXBtZXJnZVwiO2ltcG9ydHtzZXQgYXMgZSxnZXQgYXMgcn1mcm9tXCJzaHZsXCI7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obixvLHUpe2Z1bmN0aW9uIGkodCxlLHIpe3RyeXtyZXR1cm4ocj1lLmdldEl0ZW0odCkpJiZ2b2lkIDAhPT1yP0pTT04ucGFyc2Uocik6dm9pZCAwfWNhdGNoKHQpe319aWYobz0obj1ufHx7fSkuc3RvcmFnZXx8d2luZG93JiZ3aW5kb3cubG9jYWxTdG9yYWdlLHU9bi5rZXl8fFwidnVleFwiLCFmdW5jdGlvbih0KXt0cnl7cmV0dXJuIHQuc2V0SXRlbShcIkBAXCIsMSksdC5yZW1vdmVJdGVtKFwiQEBcIiksITB9Y2F0Y2godCl7fXJldHVybiExfShvKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0b3JhZ2UgaW5zdGFuY2UgZ2l2ZW5cIik7cmV0dXJuIGZ1bmN0aW9uKGMpe3ZhciBhPXIobixcImdldFN0YXRlXCIsaSkodSxvKTtcIm9iamVjdFwiPT10eXBlb2YgYSYmbnVsbCE9PWEmJmMucmVwbGFjZVN0YXRlKHQoYy5zdGF0ZSxhLHthcnJheU1lcmdlOm4uYXJyYXlNZXJnZXJ8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGV9LGNsb25lOiExfSkpLChuLnN1YnNjcmliZXJ8fGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC5zdWJzY3JpYmUoZSl9fSkoYykoZnVuY3Rpb24odCxpKXsobi5maWx0ZXJ8fGZ1bmN0aW9uKCl7cmV0dXJuITB9KSh0KSYmKG4uc2V0U3RhdGV8fGZ1bmN0aW9uKHQsZSxyKXtyZXR1cm4gci5zZXRJdGVtKHQsSlNPTi5zdHJpbmdpZnkoZSkpfSkodSwobi5yZWR1Y2VyfHxmdW5jdGlvbih0LG4pe3JldHVybiAwPT09bi5sZW5ndGg/dDpuLnJlZHVjZShmdW5jdGlvbihuLG8pe3JldHVybiBlKG4sbyxyKHQsbykpfSx7fSl9KShpLG4ucGF0aHN8fFtdKSxvKX0pfX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD12dWV4LXBlcnNpc3RlZHN0YXRlLmVzLmpzLm1hcFxuIiwiLyoqXG4gKiB2dWV4IHYzLjEuMVxuICogKGMpIDIwMTkgRXZhbiBZb3VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBhcHBseU1peGluIChWdWUpIHtcbiAgdmFyIHZlcnNpb24gPSBOdW1iZXIoVnVlLnZlcnNpb24uc3BsaXQoJy4nKVswXSk7XG5cbiAgaWYgKHZlcnNpb24gPj0gMikge1xuICAgIFZ1ZS5taXhpbih7IGJlZm9yZUNyZWF0ZTogdnVleEluaXQgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gb3ZlcnJpZGUgaW5pdCBhbmQgaW5qZWN0IHZ1ZXggaW5pdCBwcm9jZWR1cmVcbiAgICAvLyBmb3IgMS54IGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgIHZhciBfaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXQ7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAgICAgb3B0aW9ucy5pbml0ID0gb3B0aW9ucy5pbml0XG4gICAgICAgID8gW3Z1ZXhJbml0XS5jb25jYXQob3B0aW9ucy5pbml0KVxuICAgICAgICA6IHZ1ZXhJbml0O1xuICAgICAgX2luaXQuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZ1ZXggaW5pdCBob29rLCBpbmplY3RlZCBpbnRvIGVhY2ggaW5zdGFuY2VzIGluaXQgaG9va3MgbGlzdC5cbiAgICovXG5cbiAgZnVuY3Rpb24gdnVleEluaXQgKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcbiAgICAvLyBzdG9yZSBpbmplY3Rpb25cbiAgICBpZiAob3B0aW9ucy5zdG9yZSkge1xuICAgICAgdGhpcy4kc3RvcmUgPSB0eXBlb2Ygb3B0aW9ucy5zdG9yZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9wdGlvbnMuc3RvcmUoKVxuICAgICAgICA6IG9wdGlvbnMuc3RvcmU7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC4kc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gb3B0aW9ucy5wYXJlbnQuJHN0b3JlO1xuICAgIH1cbiAgfVxufVxuXG52YXIgdGFyZ2V0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgPyB3aW5kb3dcbiAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJ1xuICAgID8gZ2xvYmFsXG4gICAgOiB7fTtcbnZhciBkZXZ0b29sSG9vayA9IHRhcmdldC5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG5mdW5jdGlvbiBkZXZ0b29sUGx1Z2luIChzdG9yZSkge1xuICBpZiAoIWRldnRvb2xIb29rKSB7IHJldHVybiB9XG5cbiAgc3RvcmUuX2RldnRvb2xIb29rID0gZGV2dG9vbEhvb2s7XG5cbiAgZGV2dG9vbEhvb2suZW1pdCgndnVleDppbml0Jywgc3RvcmUpO1xuXG4gIGRldnRvb2xIb29rLm9uKCd2dWV4OnRyYXZlbC10by1zdGF0ZScsIGZ1bmN0aW9uICh0YXJnZXRTdGF0ZSkge1xuICAgIHN0b3JlLnJlcGxhY2VTdGF0ZSh0YXJnZXRTdGF0ZSk7XG4gIH0pO1xuXG4gIHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAobXV0YXRpb24sIHN0YXRlKSB7XG4gICAgZGV2dG9vbEhvb2suZW1pdCgndnVleDptdXRhdGlvbicsIG11dGF0aW9uLCBzdGF0ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgaXRlbSB0aGF0IHBhc3MgdGhlIHRlc3RcbiAqIGJ5IHNlY29uZCBhcmd1bWVudCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuLyoqXG4gKiBmb3JFYWNoIGZvciBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbHVlIChvYmosIGZuKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihvYmpba2V5XSwga2V5KTsgfSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbXNnKSB7XG4gIGlmICghY29uZGl0aW9uKSB7IHRocm93IG5ldyBFcnJvcigoXCJbdnVleF0gXCIgKyBtc2cpKSB9XG59XG5cbmZ1bmN0aW9uIHBhcnRpYWwgKGZuLCBhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZm4oYXJnKVxuICB9XG59XG5cbi8vIEJhc2UgZGF0YSBzdHJ1Y3QgZm9yIHN0b3JlJ3MgbW9kdWxlLCBwYWNrYWdlIHdpdGggc29tZSBhdHRyaWJ1dGUgYW5kIG1ldGhvZFxudmFyIE1vZHVsZSA9IGZ1bmN0aW9uIE1vZHVsZSAocmF3TW9kdWxlLCBydW50aW1lKSB7XG4gIHRoaXMucnVudGltZSA9IHJ1bnRpbWU7XG4gIC8vIFN0b3JlIHNvbWUgY2hpbGRyZW4gaXRlbVxuICB0aGlzLl9jaGlsZHJlbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIFN0b3JlIHRoZSBvcmlnaW4gbW9kdWxlIG9iamVjdCB3aGljaCBwYXNzZWQgYnkgcHJvZ3JhbW1lclxuICB0aGlzLl9yYXdNb2R1bGUgPSByYXdNb2R1bGU7XG4gIHZhciByYXdTdGF0ZSA9IHJhd01vZHVsZS5zdGF0ZTtcblxuICAvLyBTdG9yZSB0aGUgb3JpZ2luIG1vZHVsZSdzIHN0YXRlXG4gIHRoaXMuc3RhdGUgPSAodHlwZW9mIHJhd1N0YXRlID09PSAnZnVuY3Rpb24nID8gcmF3U3RhdGUoKSA6IHJhd1N0YXRlKSB8fCB7fTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IG5hbWVzcGFjZWQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLm5hbWVzcGFjZWQuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISF0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZFxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5hZGRDaGlsZCA9IGZ1bmN0aW9uIGFkZENoaWxkIChrZXksIG1vZHVsZSkge1xuICB0aGlzLl9jaGlsZHJlbltrZXldID0gbW9kdWxlO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkIChrZXkpIHtcbiAgZGVsZXRlIHRoaXMuX2NoaWxkcmVuW2tleV07XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQgKGtleSkge1xuICByZXR1cm4gdGhpcy5fY2hpbGRyZW5ba2V5XVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUgKHJhd01vZHVsZSkge1xuICB0aGlzLl9yYXdNb2R1bGUubmFtZXNwYWNlZCA9IHJhd01vZHVsZS5uYW1lc3BhY2VkO1xuICBpZiAocmF3TW9kdWxlLmFjdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucyA9IHJhd01vZHVsZS5hY3Rpb25zO1xuICB9XG4gIGlmIChyYXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucyA9IHJhd01vZHVsZS5tdXRhdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgdGhpcy5fcmF3TW9kdWxlLmdldHRlcnMgPSByYXdNb2R1bGUuZ2V0dGVycztcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQ2hpbGQgPSBmdW5jdGlvbiBmb3JFYWNoQ2hpbGQgKGZuKSB7XG4gIGZvckVhY2hWYWx1ZSh0aGlzLl9jaGlsZHJlbiwgZm4pO1xufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoR2V0dGVyID0gZnVuY3Rpb24gZm9yRWFjaEdldHRlciAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5nZXR0ZXJzLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaEFjdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hBY3Rpb24gKGZuKSB7XG4gIGlmICh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUuYWN0aW9ucywgZm4pO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hNdXRhdGlvbiA9IGZ1bmN0aW9uIGZvckVhY2hNdXRhdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucywgZm4pO1xuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggTW9kdWxlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBNb2R1bGVDb2xsZWN0aW9uID0gZnVuY3Rpb24gTW9kdWxlQ29sbGVjdGlvbiAocmF3Um9vdE1vZHVsZSkge1xuICAvLyByZWdpc3RlciByb290IG1vZHVsZSAoVnVleC5TdG9yZSBvcHRpb25zKVxuICB0aGlzLnJlZ2lzdGVyKFtdLCByYXdSb290TW9kdWxlLCBmYWxzZSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQgKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChtb2R1bGUsIGtleSkge1xuICAgIHJldHVybiBtb2R1bGUuZ2V0Q2hpbGQoa2V5KVxuICB9LCB0aGlzLnJvb3QpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5nZXROYW1lc3BhY2UgPSBmdW5jdGlvbiBnZXROYW1lc3BhY2UgKHBhdGgpIHtcbiAgdmFyIG1vZHVsZSA9IHRoaXMucm9vdDtcbiAgcmV0dXJuIHBhdGgucmVkdWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGtleSkge1xuICAgIG1vZHVsZSA9IG1vZHVsZS5nZXRDaGlsZChrZXkpO1xuICAgIHJldHVybiBuYW1lc3BhY2UgKyAobW9kdWxlLm5hbWVzcGFjZWQgPyBrZXkgKyAnLycgOiAnJylcbiAgfSwgJycpXG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUkMSAocmF3Um9vdE1vZHVsZSkge1xuICB1cGRhdGUoW10sIHRoaXMucm9vdCwgcmF3Um9vdE1vZHVsZSk7XG59O1xuXG5Nb2R1bGVDb2xsZWN0aW9uLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uIHJlZ2lzdGVyIChwYXRoLCByYXdNb2R1bGUsIHJ1bnRpbWUpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcbiAgICBpZiAoIHJ1bnRpbWUgPT09IHZvaWQgMCApIHJ1bnRpbWUgPSB0cnVlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0UmF3TW9kdWxlKHBhdGgsIHJhd01vZHVsZSk7XG4gIH1cblxuICB2YXIgbmV3TW9kdWxlID0gbmV3IE1vZHVsZShyYXdNb2R1bGUsIHJ1bnRpbWUpO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICB0aGlzLnJvb3QgPSBuZXdNb2R1bGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBwYXJlbnQuYWRkQ2hpbGQocGF0aFtwYXRoLmxlbmd0aCAtIDFdLCBuZXdNb2R1bGUpO1xuICB9XG5cbiAgLy8gcmVnaXN0ZXIgbmVzdGVkIG1vZHVsZXNcbiAgaWYgKHJhd01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yRWFjaFZhbHVlKHJhd01vZHVsZS5tb2R1bGVzLCBmdW5jdGlvbiAocmF3Q2hpbGRNb2R1bGUsIGtleSkge1xuICAgICAgdGhpcyQxLnJlZ2lzdGVyKHBhdGguY29uY2F0KGtleSksIHJhd0NoaWxkTW9kdWxlLCBydW50aW1lKTtcbiAgICB9KTtcbiAgfVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudW5yZWdpc3RlciA9IGZ1bmN0aW9uIHVucmVnaXN0ZXIgKHBhdGgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0KHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgdmFyIGtleSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgaWYgKCFwYXJlbnQuZ2V0Q2hpbGQoa2V5KS5ydW50aW1lKSB7IHJldHVybiB9XG5cbiAgcGFyZW50LnJlbW92ZUNoaWxkKGtleSk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGUgKHBhdGgsIHRhcmdldE1vZHVsZSwgbmV3TW9kdWxlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0UmF3TW9kdWxlKHBhdGgsIG5ld01vZHVsZSk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGFyZ2V0IG1vZHVsZVxuICB0YXJnZXRNb2R1bGUudXBkYXRlKG5ld01vZHVsZSk7XG5cbiAgLy8gdXBkYXRlIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChuZXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvciAodmFyIGtleSBpbiBuZXdNb2R1bGUubW9kdWxlcykge1xuICAgICAgaWYgKCF0YXJnZXRNb2R1bGUuZ2V0Q2hpbGQoa2V5KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIFwiW3Z1ZXhdIHRyeWluZyB0byBhZGQgYSBuZXcgbW9kdWxlICdcIiArIGtleSArIFwiJyBvbiBob3QgcmVsb2FkaW5nLCBcIiArXG4gICAgICAgICAgICAnbWFudWFsIHJlbG9hZCBpcyBuZWVkZWQnXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHVwZGF0ZShcbiAgICAgICAgcGF0aC5jb25jYXQoa2V5KSxcbiAgICAgICAgdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSksXG4gICAgICAgIG5ld01vZHVsZS5tb2R1bGVzW2tleV1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBmdW5jdGlvbkFzc2VydCA9IHtcbiAgYXNzZXJ0OiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJzsgfSxcbiAgZXhwZWN0ZWQ6ICdmdW5jdGlvbidcbn07XG5cbnZhciBvYmplY3RBc3NlcnQgPSB7XG4gIGFzc2VydDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUuaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJyk7IH0sXG4gIGV4cGVjdGVkOiAnZnVuY3Rpb24gb3Igb2JqZWN0IHdpdGggXCJoYW5kbGVyXCIgZnVuY3Rpb24nXG59O1xuXG52YXIgYXNzZXJ0VHlwZXMgPSB7XG4gIGdldHRlcnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBtdXRhdGlvbnM6IGZ1bmN0aW9uQXNzZXJ0LFxuICBhY3Rpb25zOiBvYmplY3RBc3NlcnRcbn07XG5cbmZ1bmN0aW9uIGFzc2VydFJhd01vZHVsZSAocGF0aCwgcmF3TW9kdWxlKSB7XG4gIE9iamVjdC5rZXlzKGFzc2VydFR5cGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIXJhd01vZHVsZVtrZXldKSB7IHJldHVybiB9XG5cbiAgICB2YXIgYXNzZXJ0T3B0aW9ucyA9IGFzc2VydFR5cGVzW2tleV07XG5cbiAgICBmb3JFYWNoVmFsdWUocmF3TW9kdWxlW2tleV0sIGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgICAgYXNzZXJ0KFxuICAgICAgICBhc3NlcnRPcHRpb25zLmFzc2VydCh2YWx1ZSksXG4gICAgICAgIG1ha2VBc3NlcnRpb25NZXNzYWdlKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGFzc2VydE9wdGlvbnMuZXhwZWN0ZWQpXG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZUFzc2VydGlvbk1lc3NhZ2UgKHBhdGgsIGtleSwgdHlwZSwgdmFsdWUsIGV4cGVjdGVkKSB7XG4gIHZhciBidWYgPSBrZXkgKyBcIiBzaG91bGQgYmUgXCIgKyBleHBlY3RlZCArIFwiIGJ1dCBcXFwiXCIgKyBrZXkgKyBcIi5cIiArIHR5cGUgKyBcIlxcXCJcIjtcbiAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgIGJ1ZiArPSBcIiBpbiBtb2R1bGUgXFxcIlwiICsgKHBhdGguam9pbignLicpKSArIFwiXFxcIlwiO1xuICB9XG4gIGJ1ZiArPSBcIiBpcyBcIiArIChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpICsgXCIuXCI7XG4gIHJldHVybiBidWZcbn1cblxudmFyIFZ1ZTsgLy8gYmluZCBvbiBpbnN0YWxsXG5cbnZhciBTdG9yZSA9IGZ1bmN0aW9uIFN0b3JlIChvcHRpb25zKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICAvLyBBdXRvIGluc3RhbGwgaWYgaXQgaXMgbm90IGRvbmUgeWV0IGFuZCBgd2luZG93YCBoYXMgYFZ1ZWAuXG4gIC8vIFRvIGFsbG93IHVzZXJzIHRvIGF2b2lkIGF1dG8taW5zdGFsbGF0aW9uIGluIHNvbWUgY2FzZXMsXG4gIC8vIHRoaXMgY29kZSBzaG91bGQgYmUgcGxhY2VkIGhlcmUuIFNlZSAjNzMxXG4gIGlmICghVnVlICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICBpbnN0YWxsKHdpbmRvdy5WdWUpO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoVnVlLCBcIm11c3QgY2FsbCBWdWUudXNlKFZ1ZXgpIGJlZm9yZSBjcmVhdGluZyBhIHN0b3JlIGluc3RhbmNlLlwiKTtcbiAgICBhc3NlcnQodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnLCBcInZ1ZXggcmVxdWlyZXMgYSBQcm9taXNlIHBvbHlmaWxsIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgYXNzZXJ0KHRoaXMgaW5zdGFuY2VvZiBTdG9yZSwgXCJzdG9yZSBtdXN0IGJlIGNhbGxlZCB3aXRoIHRoZSBuZXcgb3BlcmF0b3IuXCIpO1xuICB9XG5cbiAgdmFyIHBsdWdpbnMgPSBvcHRpb25zLnBsdWdpbnM7IGlmICggcGx1Z2lucyA9PT0gdm9pZCAwICkgcGx1Z2lucyA9IFtdO1xuICB2YXIgc3RyaWN0ID0gb3B0aW9ucy5zdHJpY3Q7IGlmICggc3RyaWN0ID09PSB2b2lkIDAgKSBzdHJpY3QgPSBmYWxzZTtcblxuICAvLyBzdG9yZSBpbnRlcm5hbCBzdGF0ZVxuICB0aGlzLl9jb21taXR0aW5nID0gZmFsc2U7XG4gIHRoaXMuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycyA9IFtdO1xuICB0aGlzLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB0aGlzLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX21vZHVsZXMgPSBuZXcgTW9kdWxlQ29sbGVjdGlvbihvcHRpb25zKTtcbiAgdGhpcy5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX3dhdGNoZXJWTSA9IG5ldyBWdWUoKTtcblxuICAvLyBiaW5kIGNvbW1pdCBhbmQgZGlzcGF0Y2ggdG8gc2VsZlxuICB2YXIgc3RvcmUgPSB0aGlzO1xuICB2YXIgcmVmID0gdGhpcztcbiAgdmFyIGRpc3BhdGNoID0gcmVmLmRpc3BhdGNoO1xuICB2YXIgY29tbWl0ID0gcmVmLmNvbW1pdDtcbiAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIGJvdW5kRGlzcGF0Y2ggKHR5cGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2guY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZClcbiAgfTtcbiAgdGhpcy5jb21taXQgPSBmdW5jdGlvbiBib3VuZENvbW1pdCAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21taXQuY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZCwgb3B0aW9ucylcbiAgfTtcblxuICAvLyBzdHJpY3QgbW9kZVxuICB0aGlzLnN0cmljdCA9IHN0cmljdDtcblxuICB2YXIgc3RhdGUgPSB0aGlzLl9tb2R1bGVzLnJvb3Quc3RhdGU7XG5cbiAgLy8gaW5pdCByb290IG1vZHVsZS5cbiAgLy8gdGhpcyBhbHNvIHJlY3Vyc2l2ZWx5IHJlZ2lzdGVycyBhbGwgc3ViLW1vZHVsZXNcbiAgLy8gYW5kIGNvbGxlY3RzIGFsbCBtb2R1bGUgZ2V0dGVycyBpbnNpZGUgdGhpcy5fd3JhcHBlZEdldHRlcnNcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCBzdGF0ZSwgW10sIHRoaXMuX21vZHVsZXMucm9vdCk7XG5cbiAgLy8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgdm0sIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgcmVhY3Rpdml0eVxuICAvLyAoYWxzbyByZWdpc3RlcnMgX3dyYXBwZWRHZXR0ZXJzIGFzIGNvbXB1dGVkIHByb3BlcnRpZXMpXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCBzdGF0ZSk7XG5cbiAgLy8gYXBwbHkgcGx1Z2luc1xuICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikgeyByZXR1cm4gcGx1Z2luKHRoaXMkMSk7IH0pO1xuXG4gIHZhciB1c2VEZXZ0b29scyA9IG9wdGlvbnMuZGV2dG9vbHMgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMuZGV2dG9vbHMgOiBWdWUuY29uZmlnLmRldnRvb2xzO1xuICBpZiAodXNlRGV2dG9vbHMpIHtcbiAgICBkZXZ0b29sUGx1Z2luKHRoaXMpO1xuICB9XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDEgPSB7IHN0YXRlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnN0YXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3ZtLl9kYXRhLiQkc3RhdGVcbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycyQxLnN0YXRlLnNldCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KGZhbHNlLCBcInVzZSBzdG9yZS5yZXBsYWNlU3RhdGUoKSB0byBleHBsaWNpdCByZXBsYWNlIHN0b3JlIHN0YXRlLlwiKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIGNvbW1pdCAoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBjb21taXRcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgdmFyIHR5cGUgPSByZWYudHlwZTtcbiAgICB2YXIgcGF5bG9hZCA9IHJlZi5wYXlsb2FkO1xuICAgIHZhciBvcHRpb25zID0gcmVmLm9wdGlvbnM7XG5cbiAgdmFyIG11dGF0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX211dGF0aW9uc1t0eXBlXTtcbiAgaWYgKCFlbnRyeSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICBlbnRyeS5mb3JFYWNoKGZ1bmN0aW9uIGNvbW1pdEl0ZXJhdG9yIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIobXV0YXRpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuXG4gIGlmIChcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgb3B0aW9ucyAmJiBvcHRpb25zLnNpbGVudFxuICApIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIlt2dWV4XSBtdXRhdGlvbiB0eXBlOiBcIiArIHR5cGUgKyBcIi4gU2lsZW50IG9wdGlvbiBoYXMgYmVlbiByZW1vdmVkLiBcIiArXG4gICAgICAnVXNlIHRoZSBmaWx0ZXIgZnVuY3Rpb25hbGl0eSBpbiB0aGUgdnVlLWRldnRvb2xzJ1xuICAgICk7XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS5kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoIChfdHlwZSwgX3BheWxvYWQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAvLyBjaGVjayBvYmplY3Qtc3R5bGUgZGlzcGF0Y2hcbiAgdmFyIHJlZiA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG5cbiAgdmFyIGFjdGlvbiA9IHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcGF5bG9hZCB9O1xuICB2YXIgZW50cnkgPSB0aGlzLl9hY3Rpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gYWN0aW9uIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIHRyeSB7XG4gICAgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnNcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHN1YikgeyByZXR1cm4gc3ViLmJlZm9yZTsgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi5iZWZvcmUoYWN0aW9uLCB0aGlzJDEuc3RhdGUpOyB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbdnVleF0gZXJyb3IgaW4gYmVmb3JlIGFjdGlvbiBzdWJzY3JpYmVyczogXCIpO1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gZW50cnkubGVuZ3RoID4gMVxuICAgID8gUHJvbWlzZS5hbGwoZW50cnkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBoYW5kbGVyKHBheWxvYWQpOyB9KSlcbiAgICA6IGVudHJ5WzBdKHBheWxvYWQpO1xuXG4gIHJldHVybiByZXN1bHQudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMkMS5fYWN0aW9uU3Vic2NyaWJlcnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIuYWZ0ZXI7IH0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1Yi5hZnRlcihhY3Rpb24sIHRoaXMkMS5zdGF0ZSk7IH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlt2dWV4XSBlcnJvciBpbiBhZnRlciBhY3Rpb24gc3Vic2NyaWJlcnM6IFwiKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9KVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZSAoZm4pIHtcbiAgcmV0dXJuIGdlbmVyaWNTdWJzY3JpYmUoZm4sIHRoaXMuX3N1YnNjcmliZXJzKVxufTtcblxuU3RvcmUucHJvdG90eXBlLnN1YnNjcmliZUFjdGlvbiA9IGZ1bmN0aW9uIHN1YnNjcmliZUFjdGlvbiAoZm4pIHtcbiAgdmFyIHN1YnMgPSB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyB7IGJlZm9yZTogZm4gfSA6IGZuO1xuICByZXR1cm4gZ2VuZXJpY1N1YnNjcmliZShzdWJzLCB0aGlzLl9hY3Rpb25TdWJzY3JpYmVycylcbn07XG5cblN0b3JlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIHdhdGNoIChnZXR0ZXIsIGNiLCBvcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIGdldHRlciA9PT0gJ2Z1bmN0aW9uJywgXCJzdG9yZS53YXRjaCBvbmx5IGFjY2VwdHMgYSBmdW5jdGlvbi5cIik7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX3dhdGNoZXJWTS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gZ2V0dGVyKHRoaXMkMS5zdGF0ZSwgdGhpcyQxLmdldHRlcnMpOyB9LCBjYiwgb3B0aW9ucylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiByZXBsYWNlU3RhdGUgKHN0YXRlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLl92bS5fZGF0YS4kJHN0YXRlID0gc3RhdGU7XG4gIH0pO1xufTtcblxuU3RvcmUucHJvdG90eXBlLnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gcmVnaXN0ZXJNb2R1bGUgKHBhdGgsIHJhd01vZHVsZSwgb3B0aW9ucykge1xuICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gICAgYXNzZXJ0KHBhdGgubGVuZ3RoID4gMCwgJ2Nhbm5vdCByZWdpc3RlciB0aGUgcm9vdCBtb2R1bGUgYnkgdXNpbmcgcmVnaXN0ZXJNb2R1bGUuJyk7XG4gIH1cblxuICB0aGlzLl9tb2R1bGVzLnJlZ2lzdGVyKHBhdGgsIHJhd01vZHVsZSk7XG4gIGluc3RhbGxNb2R1bGUodGhpcywgdGhpcy5zdGF0ZSwgcGF0aCwgdGhpcy5fbW9kdWxlcy5nZXQocGF0aCksIG9wdGlvbnMucHJlc2VydmVTdGF0ZSk7XG4gIC8vIHJlc2V0IHN0b3JlIHRvIHVwZGF0ZSBnZXR0ZXJzLi4uXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCB0aGlzLnN0YXRlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS51bnJlZ2lzdGVyTW9kdWxlID0gZnVuY3Rpb24gdW5yZWdpc3Rlck1vZHVsZSAocGF0aCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXTsgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocGF0aCksIFwibW9kdWxlIHBhdGggbXVzdCBiZSBhIHN0cmluZyBvciBhbiBBcnJheS5cIik7XG4gIH1cblxuICB0aGlzLl9tb2R1bGVzLnVucmVnaXN0ZXIocGF0aCk7XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHRoaXMkMS5zdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIFZ1ZS5kZWxldGUocGFyZW50U3RhdGUsIHBhdGhbcGF0aC5sZW5ndGggLSAxXSk7XG4gIH0pO1xuICByZXNldFN0b3JlKHRoaXMpO1xufTtcblxuU3RvcmUucHJvdG90eXBlLmhvdFVwZGF0ZSA9IGZ1bmN0aW9uIGhvdFVwZGF0ZSAobmV3T3B0aW9ucykge1xuICB0aGlzLl9tb2R1bGVzLnVwZGF0ZShuZXdPcHRpb25zKTtcbiAgcmVzZXRTdG9yZSh0aGlzLCB0cnVlKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5fd2l0aENvbW1pdCA9IGZ1bmN0aW9uIF93aXRoQ29tbWl0IChmbikge1xuICB2YXIgY29tbWl0dGluZyA9IHRoaXMuX2NvbW1pdHRpbmc7XG4gIHRoaXMuX2NvbW1pdHRpbmcgPSB0cnVlO1xuICBmbigpO1xuICB0aGlzLl9jb21taXR0aW5nID0gY29tbWl0dGluZztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBTdG9yZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyQxICk7XG5cbmZ1bmN0aW9uIGdlbmVyaWNTdWJzY3JpYmUgKGZuLCBzdWJzKSB7XG4gIGlmIChzdWJzLmluZGV4T2YoZm4pIDwgMCkge1xuICAgIHN1YnMucHVzaChmbik7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaSA9IHN1YnMuaW5kZXhPZihmbik7XG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgc3Vicy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmUgKHN0b3JlLCBob3QpIHtcbiAgc3RvcmUuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbXV0YXRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgc3RhdGUgPSBzdG9yZS5zdGF0ZTtcbiAgLy8gaW5pdCBhbGwgbW9kdWxlc1xuICBpbnN0YWxsTW9kdWxlKHN0b3JlLCBzdGF0ZSwgW10sIHN0b3JlLl9tb2R1bGVzLnJvb3QsIHRydWUpO1xuICAvLyByZXNldCB2bVxuICByZXNldFN0b3JlVk0oc3RvcmUsIHN0YXRlLCBob3QpO1xufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlVk0gKHN0b3JlLCBzdGF0ZSwgaG90KSB7XG4gIHZhciBvbGRWbSA9IHN0b3JlLl92bTtcblxuICAvLyBiaW5kIHN0b3JlIHB1YmxpYyBnZXR0ZXJzXG4gIHN0b3JlLmdldHRlcnMgPSB7fTtcbiAgdmFyIHdyYXBwZWRHZXR0ZXJzID0gc3RvcmUuX3dyYXBwZWRHZXR0ZXJzO1xuICB2YXIgY29tcHV0ZWQgPSB7fTtcbiAgZm9yRWFjaFZhbHVlKHdyYXBwZWRHZXR0ZXJzLCBmdW5jdGlvbiAoZm4sIGtleSkge1xuICAgIC8vIHVzZSBjb21wdXRlZCB0byBsZXZlcmFnZSBpdHMgbGF6eS1jYWNoaW5nIG1lY2hhbmlzbVxuICAgIC8vIGRpcmVjdCBpbmxpbmUgZnVuY3Rpb24gdXNlIHdpbGwgbGVhZCB0byBjbG9zdXJlIHByZXNlcnZpbmcgb2xkVm0uXG4gICAgLy8gdXNpbmcgcGFydGlhbCB0byByZXR1cm4gZnVuY3Rpb24gd2l0aCBvbmx5IGFyZ3VtZW50cyBwcmVzZXJ2ZWQgaW4gY2xvc3VyZSBlbnZpcm9tZW50LlxuICAgIGNvbXB1dGVkW2tleV0gPSBwYXJ0aWFsKGZuLCBzdG9yZSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0b3JlLmdldHRlcnMsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5fdm1ba2V5XTsgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUgLy8gZm9yIGxvY2FsIGdldHRlcnNcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gdXNlIGEgVnVlIGluc3RhbmNlIHRvIHN0b3JlIHRoZSBzdGF0ZSB0cmVlXG4gIC8vIHN1cHByZXNzIHdhcm5pbmdzIGp1c3QgaW4gY2FzZSB0aGUgdXNlciBoYXMgYWRkZWRcbiAgLy8gc29tZSBmdW5reSBnbG9iYWwgbWl4aW5zXG4gIHZhciBzaWxlbnQgPSBWdWUuY29uZmlnLnNpbGVudDtcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSB0cnVlO1xuICBzdG9yZS5fdm0gPSBuZXcgVnVlKHtcbiAgICBkYXRhOiB7XG4gICAgICAkJHN0YXRlOiBzdGF0ZVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IGNvbXB1dGVkXG4gIH0pO1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHNpbGVudDtcblxuICAvLyBlbmFibGUgc3RyaWN0IG1vZGUgZm9yIG5ldyB2bVxuICBpZiAoc3RvcmUuc3RyaWN0KSB7XG4gICAgZW5hYmxlU3RyaWN0TW9kZShzdG9yZSk7XG4gIH1cblxuICBpZiAob2xkVm0pIHtcbiAgICBpZiAoaG90KSB7XG4gICAgICAvLyBkaXNwYXRjaCBjaGFuZ2VzIGluIGFsbCBzdWJzY3JpYmVkIHdhdGNoZXJzXG4gICAgICAvLyB0byBmb3JjZSBnZXR0ZXIgcmUtZXZhbHVhdGlvbiBmb3IgaG90IHJlbG9hZGluZy5cbiAgICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2xkVm0uX2RhdGEuJCRzdGF0ZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9sZFZtLiRkZXN0cm95KCk7IH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGxNb2R1bGUgKHN0b3JlLCByb290U3RhdGUsIHBhdGgsIG1vZHVsZSwgaG90KSB7XG4gIHZhciBpc1Jvb3QgPSAhcGF0aC5sZW5ndGg7XG4gIHZhciBuYW1lc3BhY2UgPSBzdG9yZS5fbW9kdWxlcy5nZXROYW1lc3BhY2UocGF0aCk7XG5cbiAgLy8gcmVnaXN0ZXIgaW4gbmFtZXNwYWNlIG1hcFxuICBpZiAobW9kdWxlLm5hbWVzcGFjZWQpIHtcbiAgICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdID0gbW9kdWxlO1xuICB9XG5cbiAgLy8gc2V0IHN0YXRlXG4gIGlmICghaXNSb290ICYmICFob3QpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZShyb290U3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICB2YXIgbW9kdWxlTmFtZSA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcbiAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICBWdWUuc2V0KHBhcmVudFN0YXRlLCBtb2R1bGVOYW1lLCBtb2R1bGUuc3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGxvY2FsID0gbW9kdWxlLmNvbnRleHQgPSBtYWtlTG9jYWxDb250ZXh0KHN0b3JlLCBuYW1lc3BhY2UsIHBhdGgpO1xuXG4gIG1vZHVsZS5mb3JFYWNoTXV0YXRpb24oZnVuY3Rpb24gKG11dGF0aW9uLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJNdXRhdGlvbihzdG9yZSwgbmFtZXNwYWNlZFR5cGUsIG11dGF0aW9uLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQWN0aW9uKGZ1bmN0aW9uIChhY3Rpb24sIGtleSkge1xuICAgIHZhciB0eXBlID0gYWN0aW9uLnJvb3QgPyBrZXkgOiBuYW1lc3BhY2UgKyBrZXk7XG4gICAgdmFyIGhhbmRsZXIgPSBhY3Rpb24uaGFuZGxlciB8fCBhY3Rpb247XG4gICAgcmVnaXN0ZXJBY3Rpb24oc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hHZXR0ZXIoZnVuY3Rpb24gKGdldHRlciwga2V5KSB7XG4gICAgdmFyIG5hbWVzcGFjZWRUeXBlID0gbmFtZXNwYWNlICsga2V5O1xuICAgIHJlZ2lzdGVyR2V0dGVyKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgZ2V0dGVyLCBsb2NhbCk7XG4gIH0pO1xuXG4gIG1vZHVsZS5mb3JFYWNoQ2hpbGQoZnVuY3Rpb24gKGNoaWxkLCBrZXkpIHtcbiAgICBpbnN0YWxsTW9kdWxlKHN0b3JlLCByb290U3RhdGUsIHBhdGguY29uY2F0KGtleSksIGNoaWxkLCBob3QpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBtYWtlIGxvY2FsaXplZCBkaXNwYXRjaCwgY29tbWl0LCBnZXR0ZXJzIGFuZCBzdGF0ZVxuICogaWYgdGhlcmUgaXMgbm8gbmFtZXNwYWNlLCBqdXN0IHVzZSByb290IG9uZXNcbiAqL1xuZnVuY3Rpb24gbWFrZUxvY2FsQ29udGV4dCAoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCkge1xuICB2YXIgbm9OYW1lc3BhY2UgPSBuYW1lc3BhY2UgPT09ICcnO1xuXG4gIHZhciBsb2NhbCA9IHtcbiAgICBkaXNwYXRjaDogbm9OYW1lc3BhY2UgPyBzdG9yZS5kaXNwYXRjaCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX2FjdGlvbnNbdHlwZV0pIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGxvY2FsIGFjdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2godHlwZSwgcGF5bG9hZClcbiAgICB9LFxuXG4gICAgY29tbWl0OiBub05hbWVzcGFjZSA/IHN0b3JlLmNvbW1pdCA6IGZ1bmN0aW9uIChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgICB2YXIgYXJncyA9IHVuaWZ5T2JqZWN0U3R5bGUoX3R5cGUsIF9wYXlsb2FkLCBfb3B0aW9ucyk7XG4gICAgICB2YXIgcGF5bG9hZCA9IGFyZ3MucGF5bG9hZDtcbiAgICAgIHZhciBvcHRpb25zID0gYXJncy5vcHRpb25zO1xuICAgICAgdmFyIHR5cGUgPSBhcmdzLnR5cGU7XG5cbiAgICAgIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5yb290KSB7XG4gICAgICAgIHR5cGUgPSBuYW1lc3BhY2UgKyB0eXBlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhc3RvcmUuX211dGF0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgbXV0YXRpb24gdHlwZTogXCIgKyAoYXJncy50eXBlKSArIFwiLCBnbG9iYWwgdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RvcmUuY29tbWl0KHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXR0ZXJzIGFuZCBzdGF0ZSBvYmplY3QgbXVzdCBiZSBnb3R0ZW4gbGF6aWx5XG4gIC8vIGJlY2F1c2UgdGhleSB3aWxsIGJlIGNoYW5nZWQgYnkgdm0gdXBkYXRlXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxvY2FsLCB7XG4gICAgZ2V0dGVyczoge1xuICAgICAgZ2V0OiBub05hbWVzcGFjZVxuICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlTG9jYWxHZXR0ZXJzKHN0b3JlLCBuYW1lc3BhY2UpOyB9XG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2NhbFxufVxuXG5mdW5jdGlvbiBtYWtlTG9jYWxHZXR0ZXJzIChzdG9yZSwgbmFtZXNwYWNlKSB7XG4gIHZhciBnZXR0ZXJzUHJveHkgPSB7fTtcblxuICB2YXIgc3BsaXRQb3MgPSBuYW1lc3BhY2UubGVuZ3RoO1xuICBPYmplY3Qua2V5cyhzdG9yZS5nZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgLy8gc2tpcCBpZiB0aGUgdGFyZ2V0IGdldHRlciBpcyBub3QgbWF0Y2ggdGhpcyBuYW1lc3BhY2VcbiAgICBpZiAodHlwZS5zbGljZSgwLCBzcGxpdFBvcykgIT09IG5hbWVzcGFjZSkgeyByZXR1cm4gfVxuXG4gICAgLy8gZXh0cmFjdCBsb2NhbCBnZXR0ZXIgdHlwZVxuICAgIHZhciBsb2NhbFR5cGUgPSB0eXBlLnNsaWNlKHNwbGl0UG9zKTtcblxuICAgIC8vIEFkZCBhIHBvcnQgdG8gdGhlIGdldHRlcnMgcHJveHkuXG4gICAgLy8gRGVmaW5lIGFzIGdldHRlciBwcm9wZXJ0eSBiZWNhdXNlXG4gICAgLy8gd2UgZG8gbm90IHdhbnQgdG8gZXZhbHVhdGUgdGhlIGdldHRlcnMgaW4gdGhpcyB0aW1lLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnZXR0ZXJzUHJveHksIGxvY2FsVHlwZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5nZXR0ZXJzW3R5cGVdOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZ2V0dGVyc1Byb3h5XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTXV0YXRpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fbXV0YXRpb25zW3R5cGVdIHx8IChzdG9yZS5fbXV0YXRpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRNdXRhdGlvbkhhbmRsZXIgKHBheWxvYWQpIHtcbiAgICBoYW5kbGVyLmNhbGwoc3RvcmUsIGxvY2FsLnN0YXRlLCBwYXlsb2FkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQWN0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpIHtcbiAgdmFyIGVudHJ5ID0gc3RvcmUuX2FjdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9hY3Rpb25zW3R5cGVdID0gW10pO1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRBY3Rpb25IYW5kbGVyIChwYXlsb2FkLCBjYikge1xuICAgIHZhciByZXMgPSBoYW5kbGVyLmNhbGwoc3RvcmUsIHtcbiAgICAgIGRpc3BhdGNoOiBsb2NhbC5kaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogbG9jYWwuY29tbWl0LFxuICAgICAgZ2V0dGVyczogbG9jYWwuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBsb2NhbC5zdGF0ZSxcbiAgICAgIHJvb3RHZXR0ZXJzOiBzdG9yZS5nZXR0ZXJzLFxuICAgICAgcm9vdFN0YXRlOiBzdG9yZS5zdGF0ZVxuICAgIH0sIHBheWxvYWQsIGNiKTtcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XG4gICAgICByZXMgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcbiAgICB9XG4gICAgaWYgKHN0b3JlLl9kZXZ0b29sSG9vaykge1xuICAgICAgcmV0dXJuIHJlcy5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0b3JlLl9kZXZ0b29sSG9vay5lbWl0KCd2dWV4OmVycm9yJywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJHZXR0ZXIgKHN0b3JlLCB0eXBlLCByYXdHZXR0ZXIsIGxvY2FsKSB7XG4gIGlmIChzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gZHVwbGljYXRlIGdldHRlciBrZXk6IFwiICsgdHlwZSkpO1xuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBzdG9yZS5fd3JhcHBlZEdldHRlcnNbdHlwZV0gPSBmdW5jdGlvbiB3cmFwcGVkR2V0dGVyIChzdG9yZSkge1xuICAgIHJldHVybiByYXdHZXR0ZXIoXG4gICAgICBsb2NhbC5zdGF0ZSwgLy8gbG9jYWwgc3RhdGVcbiAgICAgIGxvY2FsLmdldHRlcnMsIC8vIGxvY2FsIGdldHRlcnNcbiAgICAgIHN0b3JlLnN0YXRlLCAvLyByb290IHN0YXRlXG4gICAgICBzdG9yZS5nZXR0ZXJzIC8vIHJvb3QgZ2V0dGVyc1xuICAgIClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlU3RyaWN0TW9kZSAoc3RvcmUpIHtcbiAgc3RvcmUuX3ZtLiR3YXRjaChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9kYXRhLiQkc3RhdGUgfSwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiZG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpO1xuICAgIH1cbiAgfSwgeyBkZWVwOiB0cnVlLCBzeW5jOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRTdGF0ZSAoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgPyBwYXRoLnJlZHVjZShmdW5jdGlvbiAoc3RhdGUsIGtleSkgeyByZXR1cm4gc3RhdGVba2V5XTsgfSwgc3RhdGUpXG4gICAgOiBzdGF0ZVxufVxuXG5mdW5jdGlvbiB1bmlmeU9iamVjdFN0eWxlICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gIGlmIChpc09iamVjdCh0eXBlKSAmJiB0eXBlLnR5cGUpIHtcbiAgICBvcHRpb25zID0gcGF5bG9hZDtcbiAgICBwYXlsb2FkID0gdHlwZTtcbiAgICB0eXBlID0gdHlwZS50eXBlO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnLCAoXCJleHBlY3RzIHN0cmluZyBhcyB0aGUgdHlwZSwgYnV0IGZvdW5kIFwiICsgKHR5cGVvZiB0eXBlKSArIFwiLlwiKSk7XG4gIH1cblxuICByZXR1cm4geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkLCBvcHRpb25zOiBvcHRpb25zIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbCAoX1Z1ZSkge1xuICBpZiAoVnVlICYmIF9WdWUgPT09IFZ1ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnW3Z1ZXhdIGFscmVhZHkgaW5zdGFsbGVkLiBWdWUudXNlKFZ1ZXgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLidcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIFZ1ZSA9IF9WdWU7XG4gIGFwcGx5TWl4aW4oVnVlKTtcbn1cblxuLyoqXG4gKiBSZWR1Y2UgdGhlIGNvZGUgd2hpY2ggd3JpdHRlbiBpbiBWdWUuanMgZm9yIGdldHRpbmcgdGhlIHN0YXRlLlxuICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lc3BhY2VdIC0gTW9kdWxlJ3MgbmFtZXNwYWNlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gc3RhdGVzICMgT2JqZWN0J3MgaXRlbSBjYW4gYmUgYSBmdW5jdGlvbiB3aGljaCBhY2NlcHQgc3RhdGUgYW5kIGdldHRlcnMgZm9yIHBhcmFtLCB5b3UgY2FuIGRvIHNvbWV0aGluZyBmb3Igc3RhdGUgYW5kIGdldHRlcnMgaW4gaXQuXG4gKiBAcGFyYW0ge09iamVjdH1cbiAqL1xudmFyIG1hcFN0YXRlID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIHN0YXRlcykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChzdGF0ZXMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRTdGF0ZSAoKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLiRzdG9yZS5zdGF0ZTtcbiAgICAgIHZhciBnZXR0ZXJzID0gdGhpcy4kc3RvcmUuZ2V0dGVycztcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwU3RhdGUnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN0YXRlID0gbW9kdWxlLmNvbnRleHQuc3RhdGU7XG4gICAgICAgIGdldHRlcnMgPSBtb2R1bGUuY29udGV4dC5nZXR0ZXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCBzdGF0ZSwgZ2V0dGVycylcbiAgICAgICAgOiBzdGF0ZVt2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8qKlxuICogUmVkdWNlIHRoZSBjb2RlIHdoaWNoIHdyaXR0ZW4gaW4gVnVlLmpzIGZvciBjb21taXR0aW5nIHRoZSBtdXRhdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lc3BhY2VdIC0gTW9kdWxlJ3MgbmFtZXNwYWNlXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gbXV0YXRpb25zICMgT2JqZWN0J3MgaXRlbSBjYW4gYmUgYSBmdW5jdGlvbiB3aGljaCBhY2NlcHQgYGNvbW1pdGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IHBhcmFtLCBpdCBjYW4gYWNjZXB0IGFudGhvciBwYXJhbXMuIFlvdSBjYW4gY29tbWl0IG11dGF0aW9uIGFuZCBkbyBhbnkgb3RoZXIgdGhpbmdzIGluIHRoaXMgZnVuY3Rpb24uIHNwZWNpYWxseSwgWW91IG5lZWQgdG8gcGFzcyBhbnRob3IgcGFyYW1zIGZyb20gdGhlIG1hcHBlZCBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIG1hcE11dGF0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBtdXRhdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAobXV0YXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkTXV0YXRpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIC8vIEdldCB0aGUgY29tbWl0IG1ldGhvZCBmcm9tIHN0b3JlXG4gICAgICB2YXIgY29tbWl0ID0gdGhpcy4kc3RvcmUuY29tbWl0O1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBNdXRhdGlvbnMnLCBuYW1lc3BhY2UpO1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbW1pdCA9IG1vZHVsZS5jb250ZXh0LmNvbW1pdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtjb21taXRdLmNvbmNhdChhcmdzKSlcbiAgICAgICAgOiBjb21taXQuYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8qKlxuICogUmVkdWNlIHRoZSBjb2RlIHdoaWNoIHdyaXR0ZW4gaW4gVnVlLmpzIGZvciBnZXR0aW5nIHRoZSBnZXR0ZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gW25hbWVzcGFjZV0gLSBNb2R1bGUncyBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBnZXR0ZXJzXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbnZhciBtYXBHZXR0ZXJzID0gbm9ybWFsaXplTmFtZXNwYWNlKGZ1bmN0aW9uIChuYW1lc3BhY2UsIGdldHRlcnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAoZ2V0dGVycykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICAvLyBUaGUgbmFtZXNwYWNlIGhhcyBiZWVuIG11dGF0ZWQgYnkgbm9ybWFsaXplTmFtZXNwYWNlXG4gICAgdmFsID0gbmFtZXNwYWNlICsgdmFsO1xuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkR2V0dGVyICgpIHtcbiAgICAgIGlmIChuYW1lc3BhY2UgJiYgIWdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwR2V0dGVycycsIG5hbWVzcGFjZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhKHZhbCBpbiB0aGlzLiRzdG9yZS5nZXR0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGdldHRlcjogXCIgKyB2YWwpKTtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1t2YWxdXG4gICAgfTtcbiAgICAvLyBtYXJrIHZ1ZXggZ2V0dGVyIGZvciBkZXZ0b29sc1xuICAgIHJlc1trZXldLnZ1ZXggPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbi8qKlxuICogUmVkdWNlIHRoZSBjb2RlIHdoaWNoIHdyaXR0ZW4gaW4gVnVlLmpzIGZvciBkaXNwYXRjaCB0aGUgYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gW25hbWVzcGFjZV0gLSBNb2R1bGUncyBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBhY3Rpb25zICMgT2JqZWN0J3MgaXRlbSBjYW4gYmUgYSBmdW5jdGlvbiB3aGljaCBhY2NlcHQgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgcGFyYW0sIGl0IGNhbiBhY2NlcHQgYW50aG9yIHBhcmFtcy4gWW91IGNhbiBkaXNwYXRjaCBhY3Rpb24gYW5kIGRvIGFueSBvdGhlciB0aGluZ3MgaW4gdGhpcyBmdW5jdGlvbi4gc3BlY2lhbGx5LCBZb3UgbmVlZCB0byBwYXNzIGFudGhvciBwYXJhbXMgZnJvbSB0aGUgbWFwcGVkIGZ1bmN0aW9uLlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG52YXIgbWFwQWN0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBhY3Rpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRBY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIC8vIGdldCBkaXNwYXRjaCBmdW5jdGlvbiBmcm9tIHN0b3JlXG4gICAgICB2YXIgZGlzcGF0Y2ggPSB0aGlzLiRzdG9yZS5kaXNwYXRjaDtcbiAgICAgIGlmIChuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIG1vZHVsZSA9IGdldE1vZHVsZUJ5TmFtZXNwYWNlKHRoaXMuJHN0b3JlLCAnbWFwQWN0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZGlzcGF0Y2ggPSBtb2R1bGUuY29udGV4dC5kaXNwYXRjaDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsLmFwcGx5KHRoaXMsIFtkaXNwYXRjaF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGRpc3BhdGNoLmFwcGx5KHRoaXMuJHN0b3JlLCBbdmFsXS5jb25jYXQoYXJncykpXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG4vKipcbiAqIFJlYmluZGluZyBuYW1lc3BhY2UgcGFyYW0gZm9yIG1hcFhYWCBmdW5jdGlvbiBpbiBzcGVjaWFsIHNjb3BlZCwgYW5kIHJldHVybiB0aGVtIGJ5IHNpbXBsZSBvYmplY3RcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSkgeyByZXR1cm4gKHtcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycy5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcE11dGF0aW9uczogbWFwTXV0YXRpb25zLmJpbmQobnVsbCwgbmFtZXNwYWNlKSxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucy5iaW5kKG51bGwsIG5hbWVzcGFjZSlcbn0pOyB9O1xuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgbWFwXG4gKiBub3JtYWxpemVNYXAoWzEsIDIsIDNdKSA9PiBbIHsga2V5OiAxLCB2YWw6IDEgfSwgeyBrZXk6IDIsIHZhbDogMiB9LCB7IGtleTogMywgdmFsOiAzIH0gXVxuICogbm9ybWFsaXplTWFwKHthOiAxLCBiOiAyLCBjOiAzfSkgPT4gWyB7IGtleTogJ2EnLCB2YWw6IDEgfSwgeyBrZXk6ICdiJywgdmFsOiAyIH0sIHsga2V5OiAnYycsIHZhbDogMyB9IF1cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBtYXBcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplTWFwIChtYXApIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFwKVxuICAgID8gbWFwLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBrZXkgfSk7IH0pXG4gICAgOiBPYmplY3Qua2V5cyhtYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBtYXBba2V5XSB9KTsgfSlcbn1cblxuLyoqXG4gKiBSZXR1cm4gYSBmdW5jdGlvbiBleHBlY3QgdHdvIHBhcmFtIGNvbnRhaW5zIG5hbWVzcGFjZSBhbmQgbWFwLiBpdCB3aWxsIG5vcm1hbGl6ZSB0aGUgbmFtZXNwYWNlIGFuZCB0aGVuIHRoZSBwYXJhbSdzIGZ1bmN0aW9uIHdpbGwgaGFuZGxlIHRoZSBuZXcgbmFtZXNwYWNlIGFuZCB0aGUgbWFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVOYW1lc3BhY2UgKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobmFtZXNwYWNlLCBtYXApIHtcbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG1hcCA9IG5hbWVzcGFjZTtcbiAgICAgIG5hbWVzcGFjZSA9ICcnO1xuICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlLmNoYXJBdChuYW1lc3BhY2UubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgICAgbmFtZXNwYWNlICs9ICcvJztcbiAgICB9XG4gICAgcmV0dXJuIGZuKG5hbWVzcGFjZSwgbWFwKVxuICB9XG59XG5cbi8qKlxuICogU2VhcmNoIGEgc3BlY2lhbCBtb2R1bGUgZnJvbSBzdG9yZSBieSBuYW1lc3BhY2UuIGlmIG1vZHVsZSBub3QgZXhpc3QsIHByaW50IGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RvcmVcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWxwZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gZ2V0TW9kdWxlQnlOYW1lc3BhY2UgKHN0b3JlLCBoZWxwZXIsIG5hbWVzcGFjZSkge1xuICB2YXIgbW9kdWxlID0gc3RvcmUuX21vZHVsZXNOYW1lc3BhY2VNYXBbbmFtZXNwYWNlXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIW1vZHVsZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIG1vZHVsZSBuYW1lc3BhY2Ugbm90IGZvdW5kIGluIFwiICsgaGVscGVyICsgXCIoKTogXCIgKyBuYW1lc3BhY2UpKTtcbiAgfVxuICByZXR1cm4gbW9kdWxlXG59XG5cbnZhciBpbmRleF9lc20gPSB7XG4gIFN0b3JlOiBTdG9yZSxcbiAgaW5zdGFsbDogaW5zdGFsbCxcbiAgdmVyc2lvbjogJzMuMS4xJyxcbiAgbWFwU3RhdGU6IG1hcFN0YXRlLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucyxcbiAgbWFwR2V0dGVyczogbWFwR2V0dGVycyxcbiAgbWFwQWN0aW9uczogbWFwQWN0aW9ucyxcbiAgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnM6IGNyZWF0ZU5hbWVzcGFjZWRIZWxwZXJzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleF9lc207XG5leHBvcnQgeyBTdG9yZSwgaW5zdGFsbCwgbWFwU3RhdGUsIG1hcE11dGF0aW9ucywgbWFwR2V0dGVycywgbWFwQWN0aW9ucywgY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgdXBwZXJjYXNlOiB0cnVlLFxuICBsb3dlcmNhc2U6IHRydWUsXG4gIG51bWJlcnM6IHRydWUsXG4gIHN5bWJvbHM6IHRydWUsXG4gIGxlbmd0aDogMTYsXG4gIGNvdW50ZXI6IDEsXG4gIHZlcnNpb246IDJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9naW46IFwiXCIsXG4gIHNpdGU6IFwiXCIsXG4gIC4uLmRlZmF1bHRPcHRpb25zXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9PcHRpb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRmNzliYzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9PcHRpb25zUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL3dzaC9Eb2N1bWVudHMvbGVzc3Bhc3Mvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZkZjc5YmM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZkZjc5YmM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9PcHRpb25zUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRmNzliYzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmRmNzliYzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImV4dGVuc2lvbi9zcmMvY29tcG9uZW50cy9PcHRpb25zUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09wdGlvbnNQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3B0aW9uc1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZjc5YmM2JlwiIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgT3B0aW9uc1BhZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9PcHRpb25zUGFnZS52dWVcIlxuaW1wb3J0IHN0b3JlIGZyb20gXCIuL3N0b3JlXCI7XG5cbm5ldyBWdWUoe1xuICBlbDogXCIjbGVzc3Bhc3Mtb3B0aW9uc1wiLFxuICByZW5kZXI6IChoKSA9PiBoKE9wdGlvbnNQYWdlKSxcbiAgc3RvcmVcbn0pO1xuIiwiaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVnVleCBmcm9tIFwidnVleFwiO1xuaW1wb3J0IGNyZWF0ZVBlcnNpc3RlZFN0YXRlIGZyb20gXCJ2dWV4LXBlcnNpc3RlZHN0YXRlXCI7XG5pbXBvcnQgZGVmYXVsdFBhc3N3b3JkIGZyb20gXCIuLi8uLi8uLi8uLi9sZXNzcGFzcy1wdXJlL3NyYy9zdG9yZS9kZWZhdWx0UGFzc3dvcmRcIjtcblxuVnVlLnVzZShWdWV4KTtcblxuY29uc3Qgc3RhdGUgPSB7XG4gIG1lc3NhZ2U6IFwiXCIsXG4gIGRlZmF1bHRQYXNzd29yZDogZGVmYXVsdFBhc3N3b3JkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZXguU3RvcmUoe1xuICBzdGF0ZSxcbiAgcGx1Z2luczogW1xuICAgIGNyZWF0ZVBlcnNpc3RlZFN0YXRlKHtcbiAgICAgIGtleTogXCJsZXNzcGFzc1wiLFxuICAgICAgcGF0aHM6IFtcImRlZmF1bHRQYXNzd29yZFwiXVxuICAgIH0pXG4gIF0sXG4gIG11dGF0aW9uczoge1xuICAgIHVwZGF0ZURlZmF1bHRMb2dpbihzdGF0ZSwgbG9naW4pIHtcbiAgICAgIHN0YXRlLmRlZmF1bHRQYXNzd29yZC5sb2dpbiA9IGxvZ2luO1xuICAgIH1cbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9