'use strict';
/**
 * @return {undefined}
 */
function checkLinks() {
	var popnum = 1;
	
	var css = ".dltorrent_modal-window{position:fixed;background-color:rgba(255,255,255,.25);top:0;right:0;bottom:0;left:0;z-index:999;visibility:hidden;opacity:0;pointer-events:none;transition:all 0.3s}.dltorrent_modal-window:target{visibility:visible;opacity:1;pointer-events:auto}.dltorrent_modal-window>.dltorrent_container{font:600 15px/0.5 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;color:black;width:400px;box-shadow:0 1px 4px 2px rgba(0,0,0,.2);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:2em;background:#fff}.dltorrent_modal-window header{font-weight:700}.dltorrent_modal-close{color:#aaa;line-height:50px;font-size:80%;position:absolute;right:0;text-align:center;top:0;width:70px;text-decoration:none}.dltorrent_modal-close:hover{color:black}.dltorrent_modal-window .dltorrent_container:not(:last-of-type){margin-bottom:15px}.dltorrent_task{text-decoration:none}.dltorrent_task__border{border-bottom:1px solid #d2d7da;width:100%;bottom:-15px}.dltorrent_task__icon{font-size:3.5rem}.dltorrent_task__text--with-subtitle{display:inline-block;padding-left:25px;position:relative}.dltorrent_task__text{display:inline-block;padding-left:25px;vertical-align:10px}.dltorrent_task__title--with-subtitle{font-size:1.1rem;color:#4c54a4}.dltorrent_task__title{font-size:1.1rem;color:#4c54a4}.dltorrent_task__sub-title{color:#AEB6C7}#dltorrent_laptop:before{content:\"\";background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='-256 348.6 97.4 97.4' style='enable-background:new -256 348.6 97.4 97.4;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%234C54A4;%7D%0A%3C/style%3E%3Cg%3E%3Cg%3E%3Cpath class='st0' d='M-158.7,419.9c-0.1-0.1-0.2-0.2-0.4-0.2h-96.4c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.3-0.1,0.4 c0,0.1,1.5,9,12.8,9h71.9c11.3,0,12.7-8.9,12.8-9C-158.6,420.1-158.6,420-158.7,419.9z M-200.1,426.2h-14.5v-3.3h14.5V426.2z'/%3E%3Cpath class='st0' d='M-245.5,416.2h76.4c1.1,0,2-0.9,2-2v-46.9c0-1.1-0.9-2-2-2h-76.4c-1.1,0-2,0.9-2,2v46.9 C-247.5,415.3-246.6,416.2-245.5,416.2z M-240.5,372.3h66.4v36.9h-66.4C-240.5,409.2-240.5,372.3-240.5,372.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");display:inline-block;background-repeat:no-repeat;height:40px;width:40px;background-size:40px 40px}#dltorrent_play:before{content:\"\";background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='-223 315.1 163.9 163.9' style='enable-background:new -223 315.1 163.9 163.9;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%234C54A4;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M-188.1,318.8c-14.8-8.5-26.8-1.5-26.8,15.5v125.6c0,17,12,24,26.8,15.5l109.8-63c14.8-8.5,14.8-22.2,0-30.7 L-188.1,318.8z'/%3E%3C/g%3E%3C/svg%3E%0A\");display:inline-block;background-repeat:no-repeat;height:35px;width:35px;background-size:35px 35px}",
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');

	head.appendChild(style);

	style.type = 'text/css';
	if (style.styleSheet){
	  // This is required for IE8 and below.
	  style.styleSheet.cssText = css;
	} else {
	  style.appendChild(document.createTextNode(css));
	}
	
    DOMAssistant.$("body a").each(function() {
	  var url = DOMAssistant.$(this).href;
	  
      if (DOMAssistant.$(this).href.match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i) != null && 7 != DOMAssistant.$(this).href.toLowerCase().indexOf("dltorrent.com")) {

        /** @type {string} */
        DOMAssistant.$(this).setAttributes({
          href : "#dltorrent_open-modal-"+popnum
        });
		
		if(!dltorrent_online_title) {
			var dltorrent_online_title = "Online";
		}
		
		if(!dltorrent_online_description) {
			var dltorrent_online_description = "Watch & Download torrent online";
		}
		
		if(!dltorrent_offline_title) {
			var dltorrent_offline_title = "Offline";
		}
		
		if(!dltorrent_offline_description) {
			var dltorrent_offline_description = "Download from your PC";
		}
		
		if(!dltorrent_close) {
			var dltorrent_close = "Close";
		}
		
		
		var popover =  '<div id="dltorrent_open-modal-'+popnum+'" class="dltorrent_modal-window"><div class="dltorrent_container"><a href="#" title="'+dltorrent_close+'" class="dltorrent_modal-close">'+dltorrent_close+'</a><div class="dltorrent_task-list"><a class="dltorrent_task open_magnet" data-magnet="'+url+'" href="#!"><i id="dltorrent_play" class="dltorrent_task__icon"></i><div class="dltorrent_task__text--with-subtitle"><h3 class="dltorrent_task__title--with-subtitle">'+dltorrent_online_title+'</h3><h4 class="dltorrent_task__sub-title">'+dltorrent_online_description+'</h4></div><div class="dltorrent_task__border"></div></a><a class="dltorrent_task" href="'+url+'"><i id="dltorrent_laptop" class="dltorrent_task__icon" style="font-size:10px"></i><div class="dltorrent_task__text--with-subtitle"><h3 class="dltorrent_task__title--with-subtitle">'+dltorrent_offline_title+'</h3><h4 class="dltorrent_task__sub-title">'+dltorrent_offline_description+'</h4></div></a></div></div></div>';
		appendHtml(document.body, popover);

		popnum++;
      }
    });
	
	var elements = document.getElementsByClassName("open_magnet");

	var magnetSubmission = function() {
		var magnet = this.getAttribute("data-magnet");
		
		var ref_link = "";
		if(dltorrent_ref) {
			ref_link = "?ref="+dltorrent_ref;
		}

		var f = document.createElement('form');
		f.action="http://localhost/tor/play"+ref_link;
		f.method='POST';

		var i=document.createElement('input');
		i.type='hidden';
		i.name='m';
		i.value=magnet;
		f.appendChild(i);

		document.body.appendChild(f);
		f.submit();
		
	};

	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', magnetSubmission, false);
	}
	
}

function appendHtml(el, str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}
/**
 * @param {!NodeList} array
 * @param {string} results
 * @return {?}
 */

var DOMAssistant = function() {
  /**
   * @return {undefined}
   */
  var HTMLArray = function() {
  };
  /** @type {boolean} */
  var isIE = false;
  /** @type {boolean} */
  var fn = isIE && parseFloat(navigator.appVersion) < 6;
  var tagCache = {};
  var lastCache = {};
  /** @type {boolean} */
  var useCache = true;
  var camel = {
    accesskey : "accessKey",
    "class" : "className",
    colspan : "colSpan",
    "for" : "htmlFor",
    maxlength : "maxLength",
    readonly : "readOnly",
    rowspan : "rowSpan",
    tabindex : "tabIndex",
    valign : "vAlign",
    cellspacing : "cellSpacing",
    cellpadding : "cellPadding"
  };
  var regex = {
    rules : /\s*(,)\s*/g,
    selector : /^(\w+)?(#[\w\u00C0-\uFFFF\-_]+|(\*))?((\.[\w\u00C0-\uFFFF\-_]+)*)?((\[\w+\s*(\^|\$|\*|\||~)?(=\s*([\w\u00C0-\uFFFF\s\-_\.]+|"[^"]*"|'[^']*'))?\]+)*)?(((:\w+[\w\-]*)(\((odd|even|\-?\d*n?((\+|\-)\d+)?|[\w\u00C0-\uFFFF\-_\.]+|"[^"]*"|'[^']*'|((\w*\.[\w\u00C0-\uFFFF\-_]+)*)?|(\[#?\w+(\^|\$|\*|\||~)?=?[\w\u00C0-\uFFFF\s\-_\.'"]+\]+)|(:\w+[\w\-]*))\))?)*)?(>|\+|~)?/,
    id : /^#([\w\u00C0-\uFFFF\-_]+)$/,
    tag : /^(\w+)/,
    relation : /^(>|\+|~)$/,
    pseudo : /^:(\w[\w\-]*)(\((.+)\))?$/,
    pseudos : /:(\w[\w\-]*)(\(([^\)]+)\))?/g,
    attribs : /\[(\w+)\s*(\^|\$|\*|\||~)?=?\s*([\w\u00C0-\uFFFF\s\-_\.]+|"[^"]*"|'[^']*')?\]/g,
    classes : /\.([\w\u00C0-\uFFFF\-_]+)/g,
    quoted : /^["'](.*)["']$/,
    nth : /^((odd|even)|([1-9]\d*)|((([1-9]\d*)?)n([\+\-]\d+)?)|(\-(([1-9]\d*)?)n\+(\d+)))$/
  };
  /**
   * @param {!Array} set1
   * @param {!Object} set2
   * @return {?}
   */
  var pushAll = function(set1, set2) {
    return set1.push.apply(set1, [].slice.apply(set2)), set1;
  };
  if (isIE) {
    /**
     * @param {!Array} set1
     * @param {!Array} set2
     * @return {?}
     */
    pushAll = function(set1, set2) {
      if (set2.slice) {
        return set1.concat(set2);
      }
      var item;
      /** @type {number} */
      var i = 0;
      for (; item = set2[i++];) {
        set1[set1.length] = item;
      }
      return set1;
    };
  }
  /**
   * @param {!Array} array
   * @param {string} value
   * @return {?}
   */
  var contains = function(array, value) {
    if (array.indexOf) {
      return array.indexOf(value) >= 0;
    }
    /** @type {number} */
    var i = 0;
    var j = array.length;
    for (; j > i; i++) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  };
  /**
   * @param {!Node} node
   * @param {?} ancestor
   * @return {?}
   */
  var isDescendant = function(node, ancestor) {
    var parent = node.parentNode;
    return ancestor === document || parent === ancestor || parent !== document && isDescendant(parent, ancestor);
  };
  return {
    isIE : isIE,
    camel : camel,
    allMethods : [],
    publicMethods : ["cssSelect", "elmsByClass", "elmsByAttribute", "elmsByTag"],
    initCore : function() {
      this.applyMethod.call(window, "$", this.$);
      this.applyMethod.call(window, "$$", this.$$);
      window.DOMAssistant = this;
      if (isIE) {
        /** @type {function(new:Array, ...*): !Array} */
        HTMLArray = Array;
      }
      /** @type {!Array} */
      HTMLArray.prototype = [];
      /**
       * @param {!Function} callback
       * @return {?}
       */
      HTMLArray.prototype.each = function(callback) {
        /** @type {number} */
        var i = 0;
        var l = this.length;
        for (; l > i; i++) {
          callback.call(this[i]);
        }
        return this;
      };
      /**
       * @return {?}
       */
      HTMLArray.prototype.first = function() {
        return "undefined" != typeof this[0] ? DOMAssistant.addMethodsToElm(this[0]) : null;
      };
      /**
       * @return {?}
       */
      HTMLArray.prototype.end = function() {
        return this.previousSet;
      };
      this.attach(this);
    },
    addMethods : function(name, method) {
      if ("undefined" == typeof this.allMethods[name]) {
        /** @type {!Function} */
        this.allMethods[name] = method;
        this.addHTMLArrayPrototype(name, method);
      }
    },
    addMethodsToElm : function(elm) {
      var method;
      for (method in this.allMethods) {
        if ("undefined" != typeof this.allMethods[method]) {
          this.applyMethod.call(elm, method, this.allMethods[method]);
        }
      }
      return elm;
    },
    applyMethod : function(javascriptName, jsonName) {
      if ("function" != typeof this[javascriptName]) {
        this[javascriptName] = jsonName;
      }
    },
    attach : function(plugin) {
      var publicMethods = plugin.publicMethods;
      if ("undefined" == typeof publicMethods) {
        var method;
        for (method in plugin) {
          if ("init" !== method && "undefined" != typeof plugin[method]) {
            this.addMethods(method, plugin[method]);
          }
        }
      } else {
        if (publicMethods.constructor === Array) {
          var current;
          /** @type {number} */
          var prop = 0;
          for (; current = publicMethods[prop]; prop++) {
            this.addMethods(current, plugin[current]);
          }
        }
      }
      if ("function" == typeof plugin.init) {
        plugin.init();
      }
    },
    addHTMLArrayPrototype : function(name, method) {
      /**
       * @return {?}
       */
      HTMLArray.prototype[name] = function() {
        var elmsToReturn = new HTMLArray;
        elmsToReturn.previousSet = this;
        var elms;
        /** @type {number} */
        var i = 0;
        var l = this.length;
        for (; l > i; i++) {
          elms = method.apply(this[i], arguments);
          if (elms && elms.constructor === Array) {
            elmsToReturn = pushAll(elmsToReturn, elms);
          } else {
            elmsToReturn.push(elms);
          }
        }
        return elmsToReturn;
      };
    },
    clearHandlers : function() {
      var item;
      var attributes;
      var children = this.all || this.getElementsByTagName("*");
      /** @type {number} */
      var i = 0;
      for (; item = children[i++];) {
        if (attributes = item.attributes) {
          var depsType;
          /** @type {number} */
          var i = 0;
          var length = attributes.length;
          for (; length > i; i++) {
            depsType = attributes[i].nodeName.toLowerCase();
            if ("function" == typeof item[depsType]) {
              /** @type {null} */
              item[depsType] = null;
            }
          }
        }
      }
    },
    setCache : function(id) {
      /** @type {string} */
      useCache = id;
    },
    $ : function() {
      var obj = arguments[0];
      if (1 === arguments.length && ("object" == typeof obj || "function" == typeof obj && obj.nodeName)) {
        return DOMAssistant.$$(obj);
      }
      var arg;
      var falseySection;
      var elm = new HTMLArray;
      /** @type {number} */
      var i = 0;
      for (; arg = arguments[i]; i++) {
        if ("string" == typeof arg) {
          if (arg = arg.replace(/^[^#]*(#)/, "$1"), regex.id.test(arg)) {
            if (falseySection = DOMAssistant.$$(arg.substr(1), false)) {
              elm.push(falseySection);
            }
          } else {
            var doc = (document.all || document.getElementsByTagName("*")).length;
            elm = !document.querySelectorAll && useCache && lastCache.rule && lastCache.rule === arg && lastCache.doc === doc ? lastCache.elms : pushAll(elm, DOMAssistant.cssSelection.call(document, arg));
            lastCache = {
              rule : arg,
              elms : elm,
              doc : doc
            };
          }
        }
      }
      return elm;
    },
    $$ : function(id, e) {
      var elm = "object" == typeof id || "function" == typeof id && id.nodeName ? id : document.getElementById(id);
      var evt = e || true;
      if ("string" == typeof id && elm && elm.id !== id) {
        /** @type {null} */
        elm = null;
        var tmp;
        /** @type {number} */
        var i = 0;
        for (; tmp = document.all[i]; i++) {
          if (tmp.id === id) {
            elm = tmp;
            break;
          }
        }
      }
      return elm && evt && DOMAssistant.addMethodsToElm(elm), elm;
    },
    getSequence : function(left) {
      var start;
      /** @type {number} */
      var add = 2;
      /** @type {number} */
      var max = -1;
      /** @type {number} */
      var modVal = -1;
      /** @type {(Array<string>|null)} */
      var arrCorner = regex.nth.exec(left.replace(/^0n\+/, "").replace(/^2n$/, "even").replace(/^2n+1$/, "odd"));
      if (!arrCorner) {
        return null;
      }
      if (arrCorner[2]) {
        /** @type {number} */
        start = "odd" === arrCorner[2] ? 1 : 2;
        /** @type {number} */
        modVal = 1 === start ? 1 : 0;
      } else {
        if (arrCorner[3]) {
          /** @type {number} */
          start = parseInt(arrCorner[3], 10);
          /** @type {number} */
          add = 0;
          /** @type {number} */
          max = start;
        } else {
          if (arrCorner[4]) {
            /** @type {number} */
            add = arrCorner[6] ? parseInt(arrCorner[6], 10) : 1;
            /** @type {number} */
            start = arrCorner[7] ? parseInt(arrCorner[7], 10) : 0;
            for (; 1 > start;) {
              /** @type {number} */
              start = start + add;
            }
            /** @type {number} */
            modVal = start > add ? (start - add) % add : start === add ? 0 : start;
          } else {
            if (arrCorner[8]) {
              /** @type {number} */
              add = arrCorner[10] ? parseInt(arrCorner[10], 10) : 1;
              /** @type {number} */
              start = max = parseInt(arrCorner[11], 10);
              for (; start > add;) {
                /** @type {number} */
                start = start - add;
              }
              /** @type {number} */
              modVal = max > add ? (max - add) % add : max === add ? 0 : max;
            }
          }
        }
      }
      return {
        start : start,
        add : add,
        max : max,
        modVal : modVal
      };
    },
    cssByDOM : function(cssRule) {
      /**
       * @param {string} elm
       * @return {undefined}
       */
      function clearAdded(elm) {
        elm = elm || prevElm;
        /** @type {number} */
        var key = 0;
        var x = elm.length;
        for (; x > key; key++) {
          /** @type {null} */
          elm[key].added = null;
        }
      }
      /**
       * @return {undefined}
       */
      function clearChildElms() {
        /** @type {number} */
        var n = 0;
        var i = prevParents.length;
        for (; i > n; n++) {
          /** @type {null} */
          prevParents[n].childElms = null;
        }
      }
      /**
       * @param {!Object} arr1
       * @param {!Array} arr2
       * @return {?}
       */
      function subtractArray(arr1, arr2) {
        var x;
        /** @type {number} */
        var i = 0;
        for (; x = arr1[i]; i++) {
          var val;
          /** @type {boolean} */
          var r = false;
          /** @type {number} */
          var i = 0;
          for (; val = arr2[i]; i++) {
            if (val === x) {
              /** @type {boolean} */
              r = true;
              arr2.splice(i, 1);
              break;
            }
          }
          if (r) {
            arr1.splice(i--, 1);
          }
        }
        return arr1;
      }
      /**
       * @param {!Object} elm
       * @param {string} attr
       * @return {?}
       */
      function getAttr(elm, attr) {
        return isIE ? elm[camel[attr.toLowerCase()] || attr] : elm.getAttribute(attr, 2);
      }
      /**
       * @param {string} attrVal
       * @param {string} substrOperator
       * @return {?}
       */
      function attrToRegExp(attrVal, substrOperator) {
        switch(attrVal = attrVal ? attrVal.replace(regex.quoted, "$1").replace(/\./g, "\\.") : null, substrOperator) {
          case "^":
            return "^" + attrVal;
          case "$":
            return attrVal + "$";
          case "*":
            return attrVal;
          case "|":
            return "^" + attrVal + "(\\-\\w+)*$";
          case "~":
            return "\\b" + attrVal + "\\b";
          default:
            return attrVal ? "^" + attrVal + "$" : null;
        }
      }
      /**
       * @param {string} name
       * @param {!Object} context
       * @return {?}
       */
      function getTags(name, context) {
        return fn ? "*" === name ? context.all : context.all.tags(name) : context.getElementsByTagName(name);
      }
      /**
       * @param {string} tag
       * @param {!Object} parent
       * @return {?}
       */
      function getElementsByTagName(tag, parent) {
        return tag = tag || "*", parent = parent || document, parent === document || parent.lastModified ? tagCache[tag] || (tagCache[tag] = getTags(tag, document)) : getTags(tag, parent);
      }
      /**
       * @param {!Object} previousMatch
       * @param {string} pseudoClass
       * @param {string} pseudoValue
       * @return {?}
       */
      function getElementsByPseudo(previousMatch, pseudoClass, pseudoValue) {
        /**
         * @param {!Object} elm
         * @return {?}
         */
        function getPrevElm(elm) {
          var val = checkNodeName ? elm.nodeName : 1;
          for (; (elm = elm.previousSibling) && elm[prop] !== val;) {
          }
          return elm;
        }
        /**
         * @param {!Object} elm
         * @return {?}
         */
        function getNextElm(elm) {
          var val = checkNodeName ? elm.nodeName : 1;
          for (; (elm = elm.nextSibling) && elm[prop] !== val;) {
          }
          return elm;
        }
        /**
         * @param {string} key
         * @return {?}
         */
        function basicMatch(key) {
          for (; previous = previousMatch[idx++];) {
            if (match[key](previous)) {
              matchingElms[matchingElms.length] = previous;
            }
          }
          return matchingElms;
        }
        /** @type {!Array} */
        prevParents = [];
        var checkNodeName;
        var recur;
        var pseudoNames = pseudoClass.split("-");
        /** @type {!Array} */
        var matchingElms = [];
        /** @type {number} */
        var idx = 0;
        /** @type {string} */
        var prop = (checkNodeName = /\-of\-type$/.test(pseudoClass)) ? "nodeName" : "nodeType";
        var match = {
          first : function(el) {
            return !getPrevElm(el);
          },
          last : function(el) {
            return !getNextElm(el);
          },
          empty : function(elem) {
            return !elem.childNodes.length;
          },
          enabled : function() {
            return !previous.disabled && "hidden" !== previous.type;
          },
          disabled : function() {
            return previous.disabled;
          },
          checked : function() {
            return previous.checked;
          },
          contains : function() {
            return (previous.innerText || previous.textContent || "").indexOf(pseudoValue.replace(regex.quoted, "$1")) > -1;
          },
          other : function() {
            return getAttr(previous, pseudoClass) === pseudoValue;
          }
        };
        var word = pseudoNames[0] || null;
        if (word && match[word]) {
          return basicMatch(word);
        }
        switch(word) {
          case "only":
            var kParent;
            for (; previous = previousMatch[idx++];) {
              prevParent = previous.parentNode;
              if (prevParent !== kParent) {
                if (!(getPrevElm(previous) || getNextElm(previous))) {
                  matchingElms[matchingElms.length] = previous;
                }
                kParent = prevParent;
              }
            }
            break;
          case "nth":
            if (/^n$/.test(pseudoValue)) {
              /** @type {!Object} */
              matchingElms = previousMatch;
            } else {
              /** @type {!Array} */
              var direction = "last" === pseudoNames[1] ? ["lastChild", "previousSibling"] : ["firstChild", "nextSibling"];
              if (sequence = DOMAssistant.getSequence.call(this, pseudoValue)) {
                for (; previous = previousMatch[idx++];) {
                  if (prevParent = previous.parentNode, !prevParent.childElms) {
                    /** @type {number} */
                    var childCount = 0;
                    var p = previous.nodeName;
                    iteratorNext = sequence.start;
                    childElm = prevParent[direction[0]];
                    for (; childElm && (sequence.max < 0 || iteratorNext <= sequence.max);) {
                      var c = childElm.nodeName;
                      if ((checkNodeName && c === p || !checkNodeName && 1 === childElm.nodeType) && ++childCount === iteratorNext) {
                        if (c === p) {
                          matchingElms[matchingElms.length] = childElm;
                        }
                        iteratorNext = iteratorNext + sequence.add;
                      }
                      childElm = childElm[direction[1]];
                    }
                    /** @type {boolean} */
                    prevParent.childElms = true;
                    prevParents[prevParents.length] = prevParent;
                  }
                }
                clearChildElms();
              }
            }
            break;
          case "target":
            /** @type {string} */
            var hash = document.location.hash.slice(1);
            if (hash) {
              for (; previous = previousMatch[idx++];) {
                if (getAttr(previous, "name") === hash || getAttr(previous, "id") === hash) {
                  matchingElms[matchingElms.length] = previous;
                  break;
                }
              }
            }
            break;
          case "not":
            if (recur = regex.pseudo.exec(pseudoValue)) {
              matchingElms = subtractArray(previousMatch, getElementsByPseudo(previousMatch, recur[1] ? recur[1].toLowerCase() : null, recur[3] || null));
            } else {
              var re;
              for (re in regex) {
                if (regex[re].lastIndex) {
                  /** @type {number} */
                  regex[re].lastIndex = 0;
                }
              }
              pseudoValue = pseudoValue.replace(regex.id, "[id=$1]");
              /** @type {(Array<string>|null)} */
              var notTag = regex.tag.exec(pseudoValue);
              /** @type {(Array<string>|null)} */
              var notClass = regex.classes.exec(pseudoValue);
              /** @type {(Array<string>|null)} */
              var notAttr = regex.attribs.exec(pseudoValue);
              /** @type {!RegExp} */
              var notRegExp = new RegExp(notAttr ? attrToRegExp(notAttr[3], notAttr[2]) : "(^|\\s)" + (notTag ? notTag[1] : notClass ? notClass[1] : "") + "(\\s|$)", "i");
              for (; notElm = previousMatch[idx++];) {
                if (addElm = null, notTag && !notRegExp.test(notElm.nodeName)) {
                  addElm = notElm;
                } else {
                  if (notClass && !notRegExp.test(notElm.className)) {
                    addElm = notElm;
                  } else {
                    if (notAttr) {
                      var att = getAttr(notElm, notAttr[1]);
                      if (!(att && notRegExp.test(att))) {
                        addElm = notElm;
                      }
                    }
                  }
                }
                if (addElm && !addElm.added) {
                  /** @type {boolean} */
                  addElm.added = true;
                  matchingElms[matchingElms.length] = addElm;
                }
              }
            }
            break;
          default:
            return basicMatch("other");
        }
        return matchingElms;
      }
      var rx;
      var prevParents;
      var val;
      var data;
      var x;
      var value;
      var nextRegExp;
      var current;
      var previous;
      var prevParent;
      var notElm;
      var addElm;
      var iteratorNext;
      var childElm;
      var sequence;
      var steps = cssRule.replace(regex.rules, "$1").split(",");
      var elm = new HTMLArray;
      /** @type {!Array} */
      var prevElm = [];
      /** @type {!Array} */
      var matchingElms = [];
      try {
        /** @type {!RegExp} */
        rx = new RegExp("(?:\\[[^\\[]*\\]|\\(.*\\)|[^\\s\\+>~\\[\\(])+|[\\+>~]", "g");
      } catch (q) {
        /** @type {!RegExp} */
        rx = /[^\s]+/g;
      }
      /** @type {number} */
      var i = 0;
      for (; val = steps[i]; i++) {
        if (!i || !contains(steps.slice(0, i), val)) {
          /** @type {!Array} */
          prevElm = [this];
          data = val.match(rx);
          var char;
          /** @type {number} */
          var index = 0;
          for (; char = data[index]; index++) {
            if (matchingElms = [], index > 0 && regex.relation.test(char) && (x = regex.relation.exec(char))) {
              /** @type {null} */
              var idElm = null;
              var content = data[index + 1];
              if (value = regex.tag.exec(content)) {
                /** @type {string} */
                value = value[1];
                /** @type {!RegExp} */
                nextRegExp = new RegExp("(^|\\s)" + value + "(\\s|$)", "i");
              } else {
                if (regex.id.test(content)) {
                  idElm = DOMAssistant.$(content) || null;
                }
              }
              var prevRef;
              /** @type {number} */
              var j = 0;
              for (; prevRef = prevElm[j]; j++) {
                switch(x[0]) {
                  case ">":
                    var child;
                    var children = idElm || getElementsByTagName(value, prevRef);
                    /** @type {number} */
                    var j = 0;
                    for (; child = children[j]; j++) {
                      if (child.parentNode === prevRef) {
                        matchingElms[matchingElms.length] = child;
                      }
                    }
                    break;
                  case "+":
                    for (; (prevRef = prevRef.nextSibling) && 1 !== prevRef.nodeType;) {
                    }
                    if (prevRef && (idElm && idElm[0] === prevRef || !idElm && (!value || nextRegExp.test(prevRef.nodeName)))) {
                      matchingElms[matchingElms.length] = prevRef;
                    }
                    break;
                  case "~":
                    for (; (prevRef = prevRef.nextSibling) && !prevRef.added;) {
                      if (idElm && idElm[0] === prevRef || !idElm && (!value || nextRegExp.test(prevRef.nodeName))) {
                        /** @type {boolean} */
                        prevRef.added = true;
                        matchingElms[matchingElms.length] = prevRef;
                      }
                    }
                }
              }
              if (prevElm = matchingElms, clearAdded(), char = data[++index], /^\w+$/.test(char) || regex.id.test(char)) {
                continue;
              }
              /** @type {boolean} */
              prevElm.skipTag = true;
            }
            /** @type {(Array<string>|null)} */
            var cssSelector = regex.selector.exec(char);
            var splitRule = {
              tag : cssSelector[1] && "*" !== cssSelector[3] ? cssSelector[1] : "*",
              id : "*" !== cssSelector[3] ? cssSelector[2] : null,
              allClasses : cssSelector[4],
              allAttr : cssSelector[6],
              allPseudos : cssSelector[11]
            };
            if (splitRule.id) {
              /** @type {number} */
              var u = 0;
              /** @type {(Element|null)} */
              var DOMElm = document.getElementById(splitRule.id.replace(/#/, ""));
              if (DOMElm) {
                for (; prevElm[u] && !isDescendant(DOMElm, prevElm[u]);) {
                  u++;
                }
                /** @type {!Array} */
                matchingElms = u < prevElm.length ? [DOMElm] : [];
              }
              /** @type {!Array} */
              prevElm = matchingElms;
            } else {
              if (splitRule.tag && !prevElm.skipTag) {
                if (0 !== index || matchingElms.length || 1 !== prevElm.length) {
                  var nextIdLookup;
                  var addElm;
                  /** @type {number} */
                  var l = 0;
                  var ll = prevElm.length;
                  for (; ll > l; l++) {
                    nextIdLookup = getElementsByTagName(splitRule.tag, prevElm[l]);
                    /** @type {number} */
                    var indexLookupKey = 0;
                    for (; addElm = nextIdLookup[indexLookupKey]; indexLookupKey++) {
                      if (!addElm.added) {
                        /** @type {boolean} */
                        addElm.added = true;
                        matchingElms[matchingElms.length] = addElm;
                      }
                    }
                  }
                  /** @type {!Array} */
                  prevElm = matchingElms;
                  clearAdded();
                } else {
                  prevElm = matchingElms = pushAll([], getElementsByTagName(splitRule.tag, prevElm[0]));
                }
              }
            }
            if (!matchingElms.length) {
              break;
            }
            if (prevElm.skipTag = false, splitRule.allClasses) {
              /** @type {number} */
              var n = 0;
              /** @type {!Array} */
              var matchingAttributeElms = [];
              /** @type {!Array<string>} */
              var checkSet = splitRule.allClasses.split(".").slice(1);
              for (; current = prevElm[n++];) {
                /** @type {boolean} */
                var ie = true;
                var elmClass = current.className;
                if (elmClass && elmClass.length) {
                  elmClass = elmClass.split(" ");
                  /** @type {number} */
                  var i = 0;
                  /** @type {number} */
                  var l = checkSet.length;
                  for (; l > i; i++) {
                    if (!contains(elmClass, checkSet[i])) {
                      /** @type {boolean} */
                      ie = false;
                      break;
                    }
                  }
                  if (ie) {
                    matchingAttributeElms[matchingAttributeElms.length] = current;
                  }
                }
              }
              /** @type {!Array} */
              prevElm = matchingElms = matchingAttributeElms;
            }
            if (splitRule.allAttr) {
              var attributeMatch;
              var attrVal;
              /** @type {number} */
              var r = 0;
              /** @type {!Array} */
              var onCompleteBindings = [];
              /** @type {!Array} */
              var matchingAttributeElms = [];
              /** @type {(Array<string>|null)} */
              var values = splitRule.allAttr.match(/\[[^\]]+\]/g);
              /** @type {number} */
              var i = 0;
              /** @type {number} */
              var l = values.length;
              for (; l > i; i++) {
                /** @type {number} */
                regex.attribs.lastIndex = 0;
                /** @type {(Array<string>|null)} */
                attributeMatch = regex.attribs.exec(values[i]);
                attrVal = attrToRegExp(attributeMatch[3], attributeMatch[2] || null);
                /** @type {!Array} */
                onCompleteBindings[i] = [attrVal ? new RegExp(attrVal) : null, attributeMatch[1]];
              }
              for (; current = matchingElms[r++];) {
                /** @type {number} */
                var i = 0;
                /** @type {number} */
                var len = onCompleteBindings.length;
                for (; len > i; i++) {
                  /** @type {boolean} */
                  var Ae = true;
                  var NUMBERS_RE = onCompleteBindings[i][0];
                  var val = getAttr(current, onCompleteBindings[i][1]);
                  if (!(!NUMBERS_RE && val === true || (NUMBERS_RE || val && "string" == typeof val && val.length) && (!NUMBERS_RE || NUMBERS_RE.test(val)))) {
                    /** @type {boolean} */
                    Ae = false;
                    break;
                  }
                }
                if (Ae) {
                  matchingAttributeElms[matchingAttributeElms.length] = current;
                }
              }
              /** @type {!Array} */
              prevElm = matchingElms = matchingAttributeElms;
            }
            if (splitRule.allPseudos) {
              /** @type {(Array<string>|null)} */
              var formLayers = splitRule.allPseudos.match(regex.pseudos);
              /** @type {number} */
              var i = 0;
              /** @type {number} */
              var length = formLayers.length;
              for (; length > i; i++) {
                /** @type {number} */
                regex.pseudos.lastIndex = 0;
                /** @type {(Array<string>|null)} */
                var nameTmpArr = regex.pseudos.exec(formLayers[i]);
                /** @type {(null|string)} */
                var pseudoClass = nameTmpArr[1] ? nameTmpArr[1].toLowerCase() : null;
                /** @type {(null|string)} */
                var pseudoValue = nameTmpArr[3] || null;
                matchingElms = getElementsByPseudo(matchingElms, pseudoClass, pseudoValue);
                clearAdded(matchingElms);
              }
              prevElm = matchingElms;
            }
          }
          elm = pushAll(elm, prevElm);
        }
      }
      return elm;
    },
    cssByXpath : function(cssRule) {
      var ns = {
        xhtml : "http://www.w3.org/1999/xhtml"
      };
      /** @type {string} */
      var hash = document.documentElement.namespaceURI === ns.xhtml ? "xhtml:" : "";
      /**
       * @param {?} name
       * @return {?}
       */
      var p = function(name) {
        return ns[name] || null;
      };
      return DOMAssistant.cssByXpath = function(cssRule) {
        /**
         * @param {?} match
         * @param {string} p1
         * @param {?} p2
         * @param {!Object} p3
         * @return {?}
         */
        function attrToXPath(match, p1, p2, p3) {
          switch(p3 = p3 ? p3.replace(regex.quoted, "$1") : p3, p2) {
            case "^":
              return "starts-with(@" + p1 + ', "' + p3 + '")';
            case "$":
              return "substring(@" + p1 + ", (string-length(@" + p1 + ") - " + (p3.length - 1) + "), " + p3.length + ') = "' + p3 + '"';
            case "*":
              return 'contains(concat(" ", @' + p1 + ', " "), "' + p3 + '")';
            case "|":
              return "(@" + p1 + '="' + p3 + '" or starts-with(@' + p1 + ', "' + p3 + '-"))';
            case "~":
              return 'contains(concat(" ", @' + p1 + ', " "), " ' + p3 + ' ")';
            default:
              return "@" + p1 + (p3 ? '="' + p3 + '"' : "");
          }
        }
        /**
         * @param {?} match
         * @param {string} p1
         * @param {?} p2
         * @param {!Object} p3
         * @return {?}
         */
        function attrToXPathB(match, p1, p2, p3) {
          return "[" + attrToXPath(match, p1, p2, p3) + "]";
        }
        /**
         * @param {string} tag
         * @param {string} pseudoClass
         * @param {string} pseudoValue
         * @return {?}
         */
        function pseudoToXPath(tag, pseudoClass, pseudoValue) {
          tag = /\-child$/.test(pseudoClass) ? "*" : tag;
          var recur;
          /** @type {string} */
          var xpath = "";
          var pseudo = pseudoClass.split("-");
          switch(pseudo[0]) {
            case "nth":
              if (!/^n$/.test(pseudoValue)) {
                /** @type {string} */
                var position = ("last" === pseudo[1] ? "(count(following-sibling::" : "(count(preceding-sibling::") + tag + ") + 1)";
                if (sequence = DOMAssistant.getSequence.call(this, pseudoValue)) {
                  /** @type {string} */
                  xpath = sequence.start === sequence.max ? position + " = " + sequence.start : position + " mod " + sequence.add + " = " + sequence.modVal + (sequence.start > 1 ? " and " + position + " >= " + sequence.start : "") + (sequence.max > 0 ? " and " + position + " <= " + sequence.max : "");
                }
              }
              break;
            case "not":
              var c = (recur = regex.pseudo.exec(pseudoValue)) ? pseudoToXPath(tag, recur[1] ? recur[1].toLowerCase() : null, recur[3] || null) : pseudoValue.replace(regex.id, "[id=$1]").replace(regex.tag, "self::$1").replace(regex.classes, 'contains(concat(" ", @class, " "), " $1 ")').replace(regex.attribs, attrToXPath);
              /** @type {string} */
              xpath = "not(" + c + ")";
              break;
            case "first":
              return "not(preceding-sibling::" + tag + ")";
            case "last":
              return "not(following-sibling::" + tag + ")";
            case "only":
              return "not(preceding-sibling::" + tag + " or following-sibling::" + tag + ")";
            case "empty":
              return "count(child::*) = 0 and string-length(text()) = 0";
            case "contains":
              return 'contains(., "' + pseudoValue.replace(regex.quoted, "$1") + '")';
            case "enabled":
              return 'not(@disabled) and not(@type="hidden")';
            case "disabled":
              return "@disabled";
            case "target":
              /** @type {string} */
              var d = document.location.hash.slice(1);
              return '@name="' + d + '" or @id="' + d + '"';
            default:
              return "@" + pseudoClass + '="' + pseudoValue + '"';
          }
          return xpath;
        }
        if (/:checked/.test(cssRule)) {
          return DOMAssistant.cssByDOM.call(this, cssRule);
        }
        var candidate;
        var lines;
        var t;
        var cssSelector;
        var splitRule;
        var sequence;
        var parts = cssRule.replace(regex.rules, "$1").split(",");
        var elm = new HTMLArray;
        /** @type {!RegExp} */
        var text = new RegExp("(?:\\[[^\\[]*\\]|\\(.*\\)|[^\\s\\+>~\\[\\(])+|[\\+>~]", "g");
        /** @type {number} */
        var i = 0;
        for (; candidate = parts[i]; i++) {
          if (!i || !contains(parts.slice(0, i), candidate)) {
            lines = candidate.match(text);
            /** @type {string} */
            t = ".";
            /** @type {number} */
            var i = 0;
            var l = lines.length;
            for (; l > i; i++) {
              if (cssSelector = regex.selector.exec(lines[i]), splitRule = {
                tag : hash + (cssSelector[1] && "*" !== cssSelector[3] ? cssSelector[1] : "*"),
                id : "*" !== cssSelector[3] ? cssSelector[2] : null,
                allClasses : cssSelector[4],
                allAttr : cssSelector[6],
                allPseudos : cssSelector[11],
                tagRelation : cssSelector[23]
              }, splitRule.tagRelation) {
                var mapping = {
                  ">" : "/child::",
                  "+" : "/following-sibling::*[1]/self::",
                  "~" : "/following-sibling::"
                };
                t = t + (mapping[splitRule.tagRelation] || "");
              } else {
                /** @type {string} */
                t = t + (i > 0 && regex.relation.test(lines[i - 1]) ? splitRule.tag : "/descendant::" + splitRule.tag);
              }
              if (splitRule.id && (t = t + ('[@id = "' + splitRule.id.replace(/^#/, "") + '"]')), splitRule.allClasses && (t = t + splitRule.allClasses.replace(regex.classes, '[contains(concat(" ", @class, " "), " $1 ")]')), splitRule.allAttr && (t = t + splitRule.allAttr.replace(regex.attribs, attrToXPathB)), splitRule.allPseudos) {
                /** @type {(Array<string>|null)} */
                var formLayers = splitRule.allPseudos.match(regex.pseudos);
                /** @type {number} */
                var i = 0;
                /** @type {number} */
                var length = formLayers.length;
                for (; length > i; i++) {
                  /** @type {number} */
                  regex.pseudos.lastIndex = 0;
                  /** @type {(Array<string>|null)} */
                  var nameTmpArr = regex.pseudos.exec(formLayers[i]);
                  /** @type {(null|string)} */
                  var pseudoClass = nameTmpArr[1] ? nameTmpArr[1].toLowerCase() : null;
                  /** @type {(null|string)} */
                  var pseudoValue = nameTmpArr[3] || null;
                  var xpath = pseudoToXPath(splitRule.tag, pseudoClass, pseudoValue);
                  if (xpath.length) {
                    /** @type {string} */
                    t = t + ("[" + xpath + "]");
                  }
                }
              }
            }
            var falseySection;
            var res = document.evaluate(t, this, p, 0, null);
            for (; falseySection = res.iterateNext();) {
              elm.push(falseySection);
            }
          }
        }
        return elm;
      }, DOMAssistant.cssByXpath.call(this, cssRule);
    },
    cssSelection : function(cssRule) {
      if (DOMAssistant.cssSelection = document.evaluate ? DOMAssistant.cssByXpath : DOMAssistant.cssByDOM, document.querySelectorAll) {
        var cssSelectionBackup = DOMAssistant.cssSelection;
        /**
         * @param {?} cssRule
         * @return {?}
         */
        DOMAssistant.cssSelection = function(cssRule) {
          try {
            var elmsToReturn = new HTMLArray;
            return pushAll(elmsToReturn, this.querySelectorAll(cssRule));
          } catch (a) {
            return cssSelectionBackup.call(this, cssRule);
          }
        };
      }
      return DOMAssistant.cssSelection.call(this, cssRule);
    },
    cssSelect : function(selector) {
      return DOMAssistant.cssSelection.call(this, selector);
    },
    elmsByClass : function(className, tag) {
      /** @type {string} */
      var selector = (tag || "") + "." + className;
      return DOMAssistant.cssSelection.call(this, selector);
    },
    elmsByAttribute : function(allHtmlFavePages, tag, attr, attrVal) {
      /** @type {string} */
      var bubbled_sets__3355 = (attr || "") + "[" + allHtmlFavePages + (tag && "*" !== tag ? (attrVal || "") + "=" + tag + "]" : "]");
      return DOMAssistant.cssSelection.call(this, bubbled_sets__3355);
    },
    elmsByTag : function(tag) {
      return DOMAssistant.cssSelection.call(this, tag);
    }
  };
}();
DOMAssistant.initCore(), DOMAssistant.AJAX = function() {
  /** @type {null} */
  var globalXMLHttp$jscomp$0 = null;
  /** @type {number} */
  var readyState$jscomp$0 = 0;
  /** @type {number} */
  var status$jscomp$0 = -1;
  /** @type {string} */
  var statusText$jscomp$0 = "";
  /** @type {!Array} */
  var requestPool$jscomp$0 = [];
  /**
   * @param {string} url
   * @param {string} method
   * @param {!Function} callback
   * @param {string} addToContent
   * @return {?}
   */
  var createAjaxObj$jscomp$0 = function(url, method, callback, addToContent) {
    /** @type {null} */
    var media = null;
    return /POST/i.test(method) && (url = url.split("?"), media = url[1], url = url[0]), {
      url : url,
      method : method,
      callback : callback,
      params : media,
      headers : {},
      responseType : "text",
      addToContent : addToContent || false
    };
  };
  /**
   * @param {!XMLHttpRequest} xhr
   * @return {?}
   */
  var inProgress$jscomp$0 = function(xhr) {
    return !!xhr && xhr.readyState >= 1 && xhr.readyState <= 3;
  };
  return {
    publicMethods : ["ajax", "get", "post", "load"],
    initRequest : function() {
      /** @type {null} */
      var XMLHttp = null;
      if (window.XMLHttpRequest) {
        /** @type {!XMLHttpRequest} */
        XMLHttp = new XMLHttpRequest;
        /**
         * @return {?}
         */
        DOMAssistant.AJAX.initRequest = function() {
          return requestPool$jscomp$0.length ? requestPool$jscomp$0.pop() : new XMLHttpRequest;
        };
      } else {
        if (window.ActiveXObject) {
          /** @type {!Array} */
          var axs = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
          /** @type {number} */
          var i = 0;
          for (; i < axs.length; i++) {
            try {
              XMLHttp = new window.ActiveXObject(axs[i]);
              /**
               * @return {?}
               */
              DOMAssistant.AJAX.initRequest = function() {
                return requestPool$jscomp$0.length ? requestPool$jscomp$0.pop() : new window.ActiveXObject(axs[i]);
              };
              break;
            } catch (s) {
              /** @type {null} */
              XMLHttp = null;
            }
          }
        }
      }
      return XMLHttp;
    },
    ajax : function(settings) {
      if (!settings.noParse && settings.url && /\?/.test(settings.url) && settings.method && /POST/i.test(settings.method)) {
        var data = settings.url.split("?");
        settings.url = data[0];
        settings.params = data[1] + (data[1].length > 0 && settings.params ? "&" + settings.params : "");
      }
      return DOMAssistant.AJAX.makeCall.call(this, settings);
    },
    get : function(url, callback, addToContent) {
      var ajaxObj = createAjaxObj$jscomp$0(url, "GET", callback, addToContent);
      return DOMAssistant.AJAX.makeCall.call(this, ajaxObj);
    },
    post : function(url, callback) {
      var ajaxObj = createAjaxObj$jscomp$0(url, "POST", callback);
      return DOMAssistant.AJAX.makeCall.call(this, ajaxObj);
    },
    load : function(annotations, name) {
      DOMAssistant.AJAX.get.call(this, annotations, DOMAssistant.AJAX.replaceWithAJAXContent, name);
    },
    makeCall : function(ajaxObj$jscomp$0) {
      var XMLHttp$jscomp$0 = DOMAssistant.AJAX.initRequest();
      return XMLHttp$jscomp$0 && (globalXMLHttp$jscomp$0 = XMLHttp$jscomp$0, function(elm$jscomp$0) {
        var url$jscomp$22 = ajaxObj$jscomp$0.url;
        var method$jscomp$1 = ajaxObj$jscomp$0.method || "GET";
        var callback$jscomp$44 = ajaxObj$jscomp$0.callback;
        var params$jscomp$1 = ajaxObj$jscomp$0.params;
        var headers$jscomp$0 = ajaxObj$jscomp$0.headers;
        var responseType$jscomp$0 = ajaxObj$jscomp$0.responseType || "text";
        var addToContent$jscomp$0 = ajaxObj$jscomp$0.addToContent;
        var timeout$jscomp$1 = ajaxObj$jscomp$0.timeout || null;
        var ex$jscomp$0 = ajaxObj$jscomp$0.exception;
        /** @type {null} */
        var timeoutId$jscomp$0 = null;
        if (XMLHttp$jscomp$0.open(method$jscomp$1, url$jscomp$22, true), XMLHttp$jscomp$0.setRequestHeader("AJAX", "true"), XMLHttp$jscomp$0.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "POST" === method$jscomp$1) {
          var contentLength$jscomp$0 = params$jscomp$1 ? params$jscomp$1.length : 0;
          XMLHttp$jscomp$0.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          XMLHttp$jscomp$0.setRequestHeader("Content-length", contentLength$jscomp$0);
          if (XMLHttp$jscomp$0.overrideMimeType) {
            XMLHttp$jscomp$0.setRequestHeader("Connection", "close");
          }
        }
        if ("json" === responseType$jscomp$0) {
          XMLHttp$jscomp$0.setRequestHeader("Accept", "application/json, text/javascript, */*");
        }
        var i$jscomp$9;
        for (i$jscomp$9 in headers$jscomp$0) {
          if ("string" == typeof i$jscomp$9) {
            XMLHttp$jscomp$0.setRequestHeader(i$jscomp$9, headers$jscomp$0[i$jscomp$9]);
          }
        }
        if ("function" == typeof callback$jscomp$44) {
          /**
           * @return {undefined}
           */
          XMLHttp$jscomp$0.onreadystatechange = function() {
            try {
              if (4 === XMLHttp$jscomp$0.readyState) {
                if (window.clearTimeout(timeoutId$jscomp$0), status$jscomp$0 = XMLHttp$jscomp$0.status, statusText$jscomp$0 = XMLHttp$jscomp$0.statusText, readyState$jscomp$0 = 4, !status$jscomp$0 || 200 !== status$jscomp$0) {
                  throw new Error(statusText$jscomp$0);
                }
                var response$jscomp$2 = /xml/i.test(responseType$jscomp$0) ? XMLHttp$jscomp$0.responseXML : XMLHttp$jscomp$0.responseText;
                if (/json/i.test(responseType$jscomp$0)) {
                  /** @type {*} */
                  response$jscomp$2 = "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(response$jscomp$2) : eval("(" + response$jscomp$2 + ")");
                }
                /** @type {null} */
                globalXMLHttp$jscomp$0 = null;
                /**
                 * @return {undefined}
                 */
                XMLHttp$jscomp$0.onreadystatechange = function() {
                };
                requestPool$jscomp$0.push(XMLHttp$jscomp$0);
                callback$jscomp$44.call(elm$jscomp$0, response$jscomp$2, addToContent$jscomp$0);
              }
            } catch (e) {
              /** @type {null} */
              globalXMLHttp$jscomp$0 = XMLHttp$jscomp$0 = null;
              if ("function" == typeof ex$jscomp$0) {
                ex$jscomp$0.call(elm$jscomp$0, e);
                /** @type {null} */
                ex$jscomp$0 = null;
              }
            }
          };
        }
        XMLHttp$jscomp$0.send(params$jscomp$1);
        if (timeout$jscomp$1) {
          timeoutId$jscomp$0 = window.setTimeout(function() {
            if (inProgress$jscomp$0(XMLHttp$jscomp$0)) {
              XMLHttp$jscomp$0.abort();
              if ("function" == typeof ex$jscomp$0) {
                /** @type {number} */
                readyState$jscomp$0 = 0;
                /** @type {number} */
                status$jscomp$0 = 408;
                /** @type {string} */
                statusText$jscomp$0 = "Request timeout";
                /** @type {null} */
                globalXMLHttp$jscomp$0 = XMLHttp$jscomp$0 = null;
                ex$jscomp$0.call(elm$jscomp$0, new Error(statusText$jscomp$0));
                /** @type {null} */
                ex$jscomp$0 = null;
              }
            }
          }, timeout$jscomp$1);
        }
      }(this)), this;
    },
    replaceWithAJAXContent : function(content, add) {
      if (add) {
        this.innerHTML += content;
      } else {
        DOMAssistant.clearHandlers.apply(this);
        /** @type {(Object|string)} */
        this.innerHTML = content;
      }
    },
    getReadyState : function() {
      return globalXMLHttp$jscomp$0 && "undefined" != typeof globalXMLHttp$jscomp$0.readyState ? globalXMLHttp$jscomp$0.readyState : readyState$jscomp$0;
    },
    getStatus : function() {
      return status$jscomp$0;
    },
    getStatusText : function() {
      return statusText$jscomp$0;
    }
  };
}(), DOMAssistant.attach(DOMAssistant.AJAX), DOMAssistant.CSS = function() {
  return {
    addClass : function(className) {
      if (!DOMAssistant.CSS.hasClass.call(this, className)) {
        var currentClass = this.className;
        /** @type {string} */
        this.className = currentClass + (currentClass.length ? " " : "") + className;
      }
      return this;
    },
    removeClass : function(name) {
      return DOMAssistant.CSS.replaceClass.call(this, name);
    },
    replaceClass : function(to, duration) {
      /** @type {!RegExp} */
      var regex = new RegExp("(^|\\s)" + to + "(\\s|$)", "i");
      return this.className = this.className.replace(regex, function(i, delay, s) {
        var value = duration ? delay + duration + s : "";
        return /^\s+.*\s+$/.test(i) && (value = i.replace(/(\s+).+/, "$1")), value;
      }).replace(/^\s+|\s+$/g, ""), this;
    },
    hasClass : function(selector) {
      return (new RegExp("(^|\\s)" + selector + "(\\s|$)", "i")).test(this.className);
    },
    setStyle : function(data, value) {
      if (this.filters && ("string" == typeof data ? /opacity/i.test(data) : data.opacity) && (this.style.filter = "alpha(opacity=" + 100 * (value || data.opacity || 1) + ")"), "undefined" != typeof this.style.cssText) {
        var style = this.style.cssText;
        if ("object" == typeof data) {
          var type;
          for (type in data) {
            if ("string" == typeof type) {
              style = style + (";" + type + ":" + data[type]);
            }
          }
        } else {
          /** @type {string} */
          style = style + (";" + data + ":" + value);
        }
        this.style.cssText = style;
      }
      return this;
    },
    getStyle : function(cssRule) {
      /** @type {string} */
      var val = "";
      if (cssRule = cssRule.toLowerCase(), document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(this, "").getPropertyValue(cssRule);
      } else {
        if (this.currentStyle) {
          if (this.filters && /^opacity$/.test(cssRule)) {
            var _thisFunction = this.filters["DXImageTransform.Microsoft.Alpha"] || this.filters.alpha || {};
            /** @type {number} */
            val = (_thisFunction.opacity || 100) / 100;
          } else {
            cssRule = cssRule.replace(/^float$/, "styleFloat").replace(/\-(\w)/g, function(canCreateDiscussions, shortMonthName) {
              return shortMonthName.toUpperCase();
            });
            val = this.currentStyle[cssRule];
          }
          if ("auto" === val && /^(width|height)$/.test(cssRule) && "none" !== this.currentStyle.display) {
            val = this["offset" + cssRule.charAt(0).toUpperCase() + cssRule.substr(1)] + "px";
          }
        }
      }
      return val;
    }
  };
}(), DOMAssistant.attach(DOMAssistant.CSS), DOMAssistant.Content = function() {
  var $ = DOMAssistant.$;
  return {
    init : function() {
      DOMAssistant.setCache(false);
    },
    prev : function() {
      var elem = this;
      for (; (elem = elem.previousSibling) && 1 !== elem.nodeType;) {
      }
      return $(elem);
    },
    next : function() {
      var msgContainer = this;
      for (; (msgContainer = msgContainer.nextSibling) && 1 !== msgContainer.nodeType;) {
      }
      return $(msgContainer);
    },
    create : function(el, name, item, val) {
      var tag = $(document.createElement(el));
      return name && (tag = tag.setAttributes(name)), "undefined" != typeof val && tag.addContent(val), item && DOMAssistant.Content.addContent.call(this, tag), tag;
    },
    setAttributes : function(params) {
      if (DOMAssistant.isIE) {
        /**
         * @param {!Object} elem
         * @param {string} name
         * @param {string} value
         * @return {?}
         */
        var setAttr = function(elem, name, value) {
          var attLower = name.toLowerCase();
          switch(attLower) {
            case "name":
            case "type":
              return document.createElement(elem.outerHTML.replace(new RegExp(attLower + "=[a-zA-Z]+"), " ").replace(">", " " + attLower + "=" + value + ">"));
            case "style":
              return elem.style.cssText = value, elem;
            default:
              return elem[DOMAssistant.camel[attLower] || name] = value, elem;
          }
        };
        /**
         * @param {!Object} attr
         * @return {?}
         */
        DOMAssistant.Content.setAttributes = function(attr) {
          var elem = this;
          var parent = this.parentNode;
          var i;
          for (i in attr) {
            if ("string" == typeof attr[i] || "number" == typeof attr[i]) {
              var newElem = setAttr(elem, i, attr[i]);
              if (parent && /(name|type)/i.test(i)) {
                if (elem.innerHTML) {
                  newElem.innerHTML = elem.innerHTML;
                }
                parent.replaceChild(newElem, elem);
              }
              elem = newElem;
            }
          }
          return $(elem);
        };
      } else {
        /**
         * @param {!Object} attr
         * @return {?}
         */
        DOMAssistant.Content.setAttributes = function(attr) {
          var i;
          for (i in attr) {
            if (/class/i.test(i)) {
              this.className = attr[i];
            } else {
              this.setAttribute(i, attr[i]);
            }
          }
          return this;
        };
      }
      return DOMAssistant.Content.setAttributes.call(this, params);
    },
    addContent : function(obj) {
      /** @type {string} */
      var type = typeof obj;
      return "string" === type || "number" === type ? this.innerHTML += obj : ("object" === type || "function" === type && obj.nodeName) && this.appendChild(obj), this;
    },
    replaceContent : function(value) {
      return DOMAssistant.clearHandlers.apply(this), this.innerHTML = "", DOMAssistant.Content.addContent.call(this, value);
    },
    replace : function(obj, returnNew) {
      /** @type {string} */
      var type = typeof obj;
      if ("string" === type || "number" === type) {
        var parent = this.parentNode;
        var msg = $(parent).create("div", null, false, obj);
        /** @type {number} */
        var i = msg.childNodes.length - 1;
        for (; i >= 0; i--) {
          parent.insertBefore(msg.childNodes[i], this.nextSibling);
        }
        obj = this.nextSibling;
        parent.removeChild(this);
      } else {
        if ("object" === type || "function" === type && obj.nodeName) {
          this.parentNode.replaceChild(obj, this);
        }
      }
      return returnNew ? obj : this;
    },
    remove : function() {
      return this.parentNode.removeChild(this), null;
    }
  };
}(), DOMAssistant.attach(DOMAssistant.Content), DOMAssistant.Events = function() {
  /** @type {number} */
  var uniqueHandlerId = 1;
  return {
    publicMethods : ["triggerEvent", "addEvent", "removeEvent", "preventDefault", "cancelBubble"],
    init : function() {
      window.addEvent = this.addEvent;
      window.removeEvent = this.removeEvent;
      DOMAssistant.preventDefault = this.preventDefault;
      DOMAssistant.cancelBubble = this.cancelBubble;
    },
    triggerEvent : function(type, target) {
      if (this.events && this.events[type]) {
        var event = {
          type : type,
          target : target || this,
          currentTarget : this,
          bubbles : false,
          cancelable : false,
          preventDefault : function() {
          },
          stopPropagation : function() {
          },
          timeStamp : +new Date
        };
        /** @type {number} */
        var i = 0;
        var countRep = this.events[type].length;
        for (; countRep > i; i++) {
          this.events[type][i].call(this, event);
        }
      } else {
        if ("function" == typeof this["on" + type]) {
          this["on" + type].call(this, event);
        }
      }
      return this;
    },
    addEvent : function(evt, fn) {
      if (/^DOM/.test(evt)) {
        if (this.addEventListener) {
          this.addEventListener(evt, fn, false);
        }
      } else {
        if (this.uniqueHandlerId || (this.uniqueHandlerId = uniqueHandlerId++), !fn.attachedElements || !fn.attachedElements[evt + this.uniqueHandlerId]) {
          if (this.events || (this.events = {}), !this.events[evt]) {
            /** @type {!Array} */
            this.events[evt] = [];
            var falseySection = this["on" + evt];
            if (falseySection) {
              this.events[evt].push(falseySection);
            }
          }
          this.events[evt].push(fn);
          this["on" + evt] = DOMAssistant.Events.handleEvent;
          if ("object" == typeof this.window) {
            this.window["on" + evt] = DOMAssistant.Events.handleEvent;
          }
          if (!fn.attachedElements) {
            fn.attachedElements = {};
          }
          /** @type {boolean} */
          fn.attachedElements[evt + this.uniqueHandlerId] = true;
        }
      }
      return this;
    },
    handleEvent : function(evt) {
      var e = evt || event;
      var currentTarget = e.target || e.srcElement || document;
      for (; 1 !== currentTarget.nodeType && currentTarget.parentNode;) {
        currentTarget = currentTarget.parentNode;
      }
      e.eventTarget = currentTarget;
      var countRep;
      var result;
      var handledCalls = this.events[e.type].slice(0);
      if (countRep = handledCalls.length) {
        /** @type {number} */
        var i = 0;
        for (; countRep > i; i++) {
          if ("function" == typeof handledCalls[i]) {
            result = handledCalls[i].call(this, e);
          }
        }
        return result;
      }
    },
    removeEvent : function(evt, func) {
      if (this.events && this.events[evt]) {
        var fn;
        var eventColl = this.events[evt];
        /** @type {number} */
        var i = eventColl.length - 1;
        for (; i >= 0; i--) {
          fn = func || eventColl[i];
          if (eventColl[i] === fn) {
            delete eventColl[i];
            eventColl.splice(i, 1);
            if (fn.attachedElements) {
              /** @type {null} */
              fn.attachedElements[evt + this.uniqueHandlerId] = null;
            }
          }
        }
      } else {
        if (this["on" + evt] && !func) {
          /** @type {null} */
          this["on" + evt] = null;
        }
      }
      return this;
    },
    preventDefault : function(e) {
      return DOMAssistant.Events.preventDefault = e && e.preventDefault ? function(event) {
        event.preventDefault();
      } : function() {
        /** @type {boolean} */
        event.returnValue = false;
      }, DOMAssistant.Events.preventDefault(e);
    },
    cancelBubble : function(e) {
      return DOMAssistant.Events.cancelBubble = e && e.stopPropagation ? function(event) {
        event.stopPropagation();
      } : function() {
        /** @type {boolean} */
        event.cancelBubble = true;
      }, DOMAssistant.Events.cancelBubble(e);
    }
  };
}(), DOMAssistant.attach(DOMAssistant.Events), DOMAssistant.DOMLoad = function() {
  /** @type {boolean} */
  var t = false;
  /** @type {null} */
  var initializeCheckTimer = null;
  /** @type {!Array} */
  var attempts = [];
  var addedStrings = {};
  /** @type {null} */
  var value = null;
  /**
   * @return {undefined}
   */
  var call = function() {
    /** @type {number} */
    var trapId = 0;
    var attemptsLength = attempts.length;
    for (; attemptsLength > trapId; trapId++) {
      try {
        attempts[trapId]();
      } catch (which) {
        if (value && "function" == typeof value) {
          value(which);
        }
      }
    }
    /** @type {!Array} */
    attempts = [];
  };
  /**
   * @return {undefined}
   */
  var i = function() {
    if (!t) {
      /** @type {boolean} */
      t = true;
      call();
    }
  };
  return document.addEventListener && document.addEventListener("DOMContentLoaded", i, false), /KHTML|WebKit|iCab/i.test(navigator.userAgent) && (initializeCheckTimer = setInterval(function() {
    if (/loaded|complete/i.test(document.readyState)) {
      i();
      clearInterval(initializeCheckTimer);
    }
  }, 10)), window.onload = i, {
    DOMReady : function() {
      var funcRef;
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var length = arguments.length;
      for (; length > i; i++) {
        funcRef = arguments[i];
        if (!(funcRef.DOMReady || addedStrings[funcRef])) {
          if ("string" == typeof funcRef) {
            /** @type {boolean} */
            addedStrings[funcRef] = true;
            /** @type {!Function} */
            funcRef = new Function(funcRef);
          }
          /** @type {boolean} */
          funcRef.DOMReady = true;
          attempts.push(funcRef);
        }
      }
      if (t) {
        call();
      }
    },
    setErrorHandling : function(Night) {
      /** @type {!Node} */
      value = Night;
    }
  };
}(), DOMAssistant.DOMReady = DOMAssistant.DOMLoad.DOMReady;
var url;
DOMAssistant.DOMReady(checkLinks);