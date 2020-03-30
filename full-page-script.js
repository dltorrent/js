"use strict";function checkLinks(){var i=1,t=".dltorrent_modal-window{position:fixed;background-color:rgba(255,255,255,.25);top:0;right:0;bottom:0;left:0;z-index:999;visibility:hidden;opacity:0;pointer-events:none;transition:all 0.3s}.dltorrent_modal-window:target{visibility:visible;opacity:1;pointer-events:auto}.dltorrent_modal-window>.dltorrent_container{font:600 15px/0.5 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;color:black;width:400px;box-shadow:0 1px 4px 2px rgba(0,0,0,.2);position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:2em;background:#fff}.dltorrent_modal-window header{font-weight:700}.dltorrent_modal-close{color:#aaa;line-height:50px;font-size:80%;position:absolute;right:0;text-align:center;top:0;width:70px;text-decoration:none}.dltorrent_modal-close:hover{color:black}.dltorrent_modal-window .dltorrent_container:not(:last-of-type){margin-bottom:15px}.dltorrent_task{text-decoration:none}.dltorrent_task__border{border-bottom:1px solid #d2d7da;width:100%;bottom:-15px}.dltorrent_task__icon{font-size:3.5rem}.dltorrent_task__text--with-subtitle{display:inline-block;padding-left:25px;position:relative}.dltorrent_task__text{display:inline-block;padding-left:25px;vertical-align:10px}.dltorrent_task__title--with-subtitle{font-size:1.1rem;color:#4c54a4}.dltorrent_task__title{font-size:1.1rem;color:#4c54a4}.dltorrent_task__sub-title{color:#AEB6C7}#dltorrent_laptop:before{content:\"\";background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='-256 348.6 97.4 97.4' style='enable-background:new -256 348.6 97.4 97.4;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%234C54A4;%7D%0A%3C/style%3E%3Cg%3E%3Cg%3E%3Cpath class='st0' d='M-158.7,419.9c-0.1-0.1-0.2-0.2-0.4-0.2h-96.4c-0.1,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.3-0.1,0.4 c0,0.1,1.5,9,12.8,9h71.9c11.3,0,12.7-8.9,12.8-9C-158.6,420.1-158.6,420-158.7,419.9z M-200.1,426.2h-14.5v-3.3h14.5V426.2z'/%3E%3Cpath class='st0' d='M-245.5,416.2h76.4c1.1,0,2-0.9,2-2v-46.9c0-1.1-0.9-2-2-2h-76.4c-1.1,0-2,0.9-2,2v46.9 C-247.5,415.3-246.6,416.2-245.5,416.2z M-240.5,372.3h66.4v36.9h-66.4C-240.5,409.2-240.5,372.3-240.5,372.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");display:inline-block;background-repeat:no-repeat;height:40px;width:40px;background-size:40px 40px}#dltorrent_play:before{content:\"\";background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='-223 315.1 163.9 163.9' style='enable-background:new -223 315.1 163.9 163.9;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%234C54A4;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M-188.1,318.8c-14.8-8.5-26.8-1.5-26.8,15.5v125.6c0,17,12,24,26.8,15.5l109.8-63c14.8-8.5,14.8-22.2,0-30.7 L-188.1,318.8z'/%3E%3C/g%3E%3C/svg%3E%0A\");display:inline-block;background-repeat:no-repeat;height:35px;width:35px;background-size:35px 35px}",e=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");e.appendChild(s),s.type="text/css",s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t)),DOMAssistant.$("body a").each(function(){var t=DOMAssistant.$(this).href;if(null!=DOMAssistant.$(this).href.match(/magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i)&&7!=DOMAssistant.$(this).href.toLowerCase().indexOf("dltorrent.com")){if(DOMAssistant.$(this).setAttributes({href:"#dltorrent_open-modal-"+i}),!e)var e="Online";if(!s)var s="Watch & Download torrent online";if(!n)var n="Offline";if(!a)var a="Download from your PC";if(!o)var o="Close";var r='<div id="dltorrent_open-modal-'+i+'" class="dltorrent_modal-window"><div class="dltorrent_container"><a href="#" title="'+o+'" class="dltorrent_modal-close">'+o+'</a><div class="dltorrent_task-list"><a class="dltorrent_task open_magnet" data-magnet="'+t+'" href="#!"><i id="dltorrent_play" class="dltorrent_task__icon"></i><div class="dltorrent_task__text--with-subtitle"><h3 class="dltorrent_task__title--with-subtitle">'+e+'</h3><h4 class="dltorrent_task__sub-title">'+s+'</h4></div><div class="dltorrent_task__border"></div></a><a class="dltorrent_task" href="'+t+'"><i id="dltorrent_laptop" class="dltorrent_task__icon" style="font-size:10px"></i><div class="dltorrent_task__text--with-subtitle"><h3 class="dltorrent_task__title--with-subtitle">'+n+'</h3><h4 class="dltorrent_task__sub-title">'+a+"</h4></div></a></div></div></div>";appendHtml(document.body,r),i++}});for(var n=document.getElementsByClassName("open_magnet"),a=function(){var t=this.getAttribute("data-magnet"),e="";dltorrent_ref&&(e="?ref="+dltorrent_ref);var s=document.createElement("form");s.action="http://localhost/tor/play"+e,s.method="POST";var n=document.createElement("input");n.type="hidden",n.name="m",n.value=t,s.appendChild(n),document.body.appendChild(s),s.submit()},o=0;o<n.length;o++)n[o].addEventListener("click",a,!1)}function appendHtml(t,e){var s=document.createElement("div");for(s.innerHTML=e;0<s.children.length;)t.appendChild(s.children[0])}var DOMAssistant=function(){var ot=function(){},rt={},r={},i=!0,t={accesskey:"accessKey",class:"className",colspan:"colSpan",for:"htmlFor",maxlength:"maxLength",readonly:"readOnly",rowspan:"rowSpan",tabindex:"tabIndex",valign:"vAlign",cellspacing:"cellSpacing",cellpadding:"cellPadding"},it={rules:/\s*(,)\s*/g,selector:/^(\w+)?(#[\w\u00C0-\uFFFF\-_]+|(\*))?((\.[\w\u00C0-\uFFFF\-_]+)*)?((\[\w+\s*(\^|\$|\*|\||~)?(=\s*([\w\u00C0-\uFFFF\s\-_\.]+|"[^"]*"|'[^']*'))?\]+)*)?(((:\w+[\w\-]*)(\((odd|even|\-?\d*n?((\+|\-)\d+)?|[\w\u00C0-\uFFFF\-_\.]+|"[^"]*"|'[^']*'|((\w*\.[\w\u00C0-\uFFFF\-_]+)*)?|(\[#?\w+(\^|\$|\*|\||~)?=?[\w\u00C0-\uFFFF\s\-_\.'"]+\]+)|(:\w+[\w\-]*))\))?)*)?(>|\+|~)?/,id:/^#([\w\u00C0-\uFFFF\-_]+)$/,tag:/^(\w+)/,relation:/^(>|\+|~)$/,pseudo:/^:(\w[\w\-]*)(\((.+)\))?$/,pseudos:/:(\w[\w\-]*)(\(([^\)]+)\))?/g,attribs:/\[(\w+)\s*(\^|\$|\*|\||~)?=?\s*([\w\u00C0-\uFFFF\s\-_\.]+|"[^"]*"|'[^']*')?\]/g,classes:/\.([\w\u00C0-\uFFFF\-_]+)/g,quoted:/^["'](.*)["']$/,nth:/^((odd|even)|([1-9]\d*)|((([1-9]\d*)?)n([\+\-]\d+)?)|(\-(([1-9]\d*)?)n\+(\d+)))$/},lt=function(t,e){return t.push.apply(t,[].slice.apply(e)),t};function ct(t,e){if(t.indexOf)return 0<=t.indexOf(e);for(var s=0,n=t.length;s<n;s++)if(t[s]===e)return 1}var dt=function(t,e){var s=t.parentNode;return e===document||s===e||s!==document&&dt(s,e)};return{isIE:!1,camel:t,allMethods:[],publicMethods:["cssSelect","elmsByClass","elmsByAttribute","elmsByTag"],initCore:function(){this.applyMethod.call(window,"$",this.$),this.applyMethod.call(window,"$$",this.$$),window.DOMAssistant=this,ot.prototype=[],ot.prototype.each=function(t){for(var e=0,s=this.length;e<s;e++)t.call(this[e]);return this},ot.prototype.first=function(){return void 0!==this[0]?DOMAssistant.addMethodsToElm(this[0]):null},ot.prototype.end=function(){return this.previousSet},this.attach(this)},addMethods:function(t,e){void 0===this.allMethods[t]&&(this.allMethods[t]=e,this.addHTMLArrayPrototype(t,e))},addMethodsToElm:function(t){var e;for(e in this.allMethods)void 0!==this.allMethods[e]&&this.applyMethod.call(t,e,this.allMethods[e]);return t},applyMethod:function(t,e){"function"!=typeof this[t]&&(this[t]=e)},attach:function(t){var e,s=t.publicMethods;if(void 0===s)for(e in t)"init"!==e&&void 0!==t[e]&&this.addMethods(e,t[e]);else if(s.constructor===Array)for(var n,a=0;n=s[a];a++)this.addMethods(n,t[n]);"function"==typeof t.init&&t.init()},addHTMLArrayPrototype:function(t,a){ot.prototype[t]=function(){for(var t,e=new ot,s=0,n=(e.previousSet=this).length;s<n;s++)(t=a.apply(this[s],arguments))&&t.constructor===Array?e=lt(e,t):e.push(t);return e}},clearHandlers:function(){for(var t,e,s=this.all||this.getElementsByTagName("*"),n=0;t=s[n++];)if(e=t.attributes){n=0;for(var a,o=e.length;n<o;n++)"function"==typeof t[a=e[n].nodeName.toLowerCase()]&&(t[a]=null)}},setCache:function(t){i=t},$:function(){var t,e,s=arguments[0];if(1===arguments.length&&("object"==typeof s||"function"==typeof s&&s.nodeName))return DOMAssistant.$$(s);for(var n=new ot,a=0;t=arguments[a];a++)if("string"==typeof t)if(t=t.replace(/^[^#]*(#)/,"$1"),it.id.test(t))(e=DOMAssistant.$$(t.substr(1),!1))&&n.push(e);else{var o=(document.all||document.getElementsByTagName("*")).length;n=!document.querySelectorAll&&i&&r.rule&&r.rule===t&&r.doc===o?r.elms:lt(n,DOMAssistant.cssSelection.call(document,t)),r={rule:t,elms:n,doc:o}}return n},$$:function(t,e){var s="object"==typeof t||"function"==typeof t&&t.nodeName?t:document.getElementById(t),n=e||!0;if("string"==typeof t&&s&&s.id!==t){var a;s=null;for(var o=0;a=document.all[o];o++)if(a.id===t){s=a;break}}return s&&n&&DOMAssistant.addMethodsToElm(s),s},getSequence:function(t){var e,s=2,n=-1,a=-1,o=it.nth.exec(t.replace(/^0n\+/,"").replace(/^2n$/,"even").replace(/^2n+1$/,"odd"));if(!o)return null;if(o[2])a=1===(e="odd"===o[2]?1:2)?1:0;else if(o[3])s=0,n=e=parseInt(o[3],10);else if(o[4]){for(s=o[6]?parseInt(o[6],10):1,e=o[7]?parseInt(o[7],10):0;e<1;)e+=s;a=s<e?(e-s)%s:e===s?0:e}else if(o[8]){for(s=o[10]?parseInt(o[10],10):1,e=n=parseInt(o[11],10);s<e;)e-=s;a=s<n?(n-s)%s:n===s?0:n}return{start:e,add:s,max:n,modVal:a}},cssByDOM:function(t){function e(t){for(var e=0,s=(t=t||p).length;e<s;e++)t[e].added=null}function O(t,e){return t.getAttribute(e,2)}function C(t,e){switch(t=t?t.replace(it.quoted,"$1").replace(/\./g,"\\."):null,e){case"^":return"^"+t;case"$":return t+"$";case"*":return t;case"|":return"^"+t+"(\\-\\w+)*$";case"~":return"\\b"+t+"\\b";default:return t?"^"+t+"$":null}}function s(t,e){return e.getElementsByTagName(t)}function n(t,e){return t=t||"*",(e=e||document)===document||e.lastModified?rt[t]||(rt[t]=s(t,document)):s(t,e)}function D(e,t,s){function n(t){for(var e=r?t.nodeName:1;(t=t.previousSibling)&&t[u]!==e;);return t}function a(t){for(var e=r?t.nodeName:1;(t=t.nextSibling)&&t[u]!==e;);return t}function o(t){for(;_=e[d++];)p[t](_)&&(c[c.length]=_);return c}var r,i;E=[];var l=t.split("-"),c=[],d=0,u=(r=/\-of\-type$/.test(t))?"nodeName":"nodeType",p={first:function(t){return!n(t)},last:function(t){return!a(t)},empty:function(t){return!t.childNodes.length},enabled:function(){return!_.disabled&&"hidden"!==_.type},disabled:function(){return _.disabled},checked:function(){return _.checked},contains:function(){return-1<(_.innerText||_.textContent||"").indexOf(s.replace(it.quoted,"$1"))},other:function(){return O(_,t)===s}},h=l[0]||null;if(h&&p[h])return o(h);switch(h){case"only":for(var f;_=e[d++];)(k=_.parentNode)!==f&&(n(_)||a(_)||(c[c.length]=_),f=k);break;case"nth":if(/^n$/.test(s))c=e;else{var m="last"===l[1]?["lastChild","previousSibling"]:["firstChild","nextSibling"];if(H=DOMAssistant.getSequence.call(this,s)){for(;_=e[d++];)if(!(k=_.parentNode).childElms){var $=0,g=_.nodeName;for(L=H.start,S=k[m[0]];S&&(H.max<0||L<=H.max);){var v=S.nodeName;(r&&v===g||!r&&1===S.nodeType)&&++$===L&&(v===g&&(c[c.length]=S),L+=H.add),S=S[m[1]]}k.childElms=!0,E[E.length]=k}!function(){for(var t=0,e=E.length;t<e;t++)E[t].childElms=null}()}}break;case"target":var b=document.location.hash.slice(1);if(b)for(;_=e[d++];)if(O(_,"name")===b||O(_,"id")===b){c[c.length]=_;break}break;case"not":if(i=it.pseudo.exec(s))c=function(t,e){for(var s,n=0;s=t[n];n++){var a,o=!1;for(n=0;a=e[n];n++)if(a===s){o=!0,e.splice(n,1);break}o&&t.splice(n--,1)}return t}(e,D(e,i[1]?i[1].toLowerCase():null,i[3]||null));else{var y;for(y in it)it[y].lastIndex&&(it[y].lastIndex=0);s=s.replace(it.id,"[id=$1]");for(var M=it.tag.exec(s),j=it.classes.exec(s),x=it.attribs.exec(s),w=new RegExp(x?C(x[3],x[2]):"(^|\\s)"+(M?M[1]:j?j[1]:"")+"(\\s|$)","i");T=e[d++];){if(F=null,M&&!w.test(T.nodeName))F=T;else if(j&&!w.test(T.className))F=T;else if(x){var A=O(T,x[1]);A&&w.test(A)||(F=T)}F&&!F.added&&(F.added=!0,c[c.length]=F)}}break;default:return o("other")}return c}var a,E,o,r,i,l,c,_,k,T,L,S,H,d=t.replace(it.rules,"$1").split(","),u=new ot,p=[],h=[];try{a=new RegExp("(?:\\[[^\\[]*\\]|\\(.*\\)|[^\\s\\+>~\\[\\(])+|[\\+>~]","g")}catch(t){a=/[^\s]+/g}for(var f=0;et=d[f];f++)if(!f||!ct(d.slice(0,f),et)){var m;p=[this],o=et.match(a);for(var $=0;m=o[$];$++){if(h=[],0<$&&it.relation.test(m)&&(r=it.relation.exec(m))){var g,v=null,b=o[$+1];(i=it.tag.exec(b))?(i=i[1],l=new RegExp("(^|\\s)"+i+"(\\s|$)","i")):it.id.test(b)&&(v=DOMAssistant.$(b)||null);for(var y=0;g=p[y];y++)switch(r[0]){case">":var M,j=v||n(i,g);for(y=0;M=j[y];y++)M.parentNode===g&&(h[h.length]=M);break;case"+":for(;(g=g.nextSibling)&&1!==g.nodeType;);g&&(v&&v[0]===g||!v&&(!i||l.test(g.nodeName)))&&(h[h.length]=g);break;case"~":for(;(g=g.nextSibling)&&!g.added;)(v&&v[0]===g||!v&&(!i||l.test(g.nodeName)))&&(g.added=!0,h[h.length]=g)}if(p=h,e(),m=o[++$],/^\w+$/.test(m)||it.id.test(m))continue;p.skipTag=!0}var x=it.selector.exec(m),w={tag:x[1]&&"*"!==x[3]?x[1]:"*",id:"*"!==x[3]?x[2]:null,allClasses:x[4],allAttr:x[6],allPseudos:x[11]};if(w.id){var A=0,X=document.getElementById(w.id.replace(/#/,""));if(X){for(;p[A]&&!dt(X,p[A]);)A++;h=A<p.length?[X]:[]}p=h}else if(w.tag&&!p.skipTag)if(0!==$||h.length||1!==p.length){for(var N,F,q=0,R=p.length;q<R;q++){N=n(w.tag,p[q]);for(var B=0;F=N[B];B++)F.added||(F.added=!0,h[h.length]=F)}p=h,e()}else p=h=lt([],n(w.tag,p[0]));if(!h.length)break;if(p.skipTag=!1,w.allClasses){for(var P=0,I=[],z=w.allClasses.split(".").slice(1);c=p[P++];){var J=!0,V=c.className;if(V&&V.length){V=V.split(" ");for(f=0,q=z.length;f<q;f++)if(!ct(V,z[f])){J=!1;break}J&&(I[I.length]=c)}}p=h=I}if(w.allAttr){var U,W,K=0,G=[],Z=(I=[],w.allAttr.match(/\[[^\]]+\]/g));for(f=0,q=Z.length;f<q;f++)it.attribs.lastIndex=0,W=C((U=it.attribs.exec(Z[f]))[3],U[2]||null),G[f]=[W?new RegExp(W):null,U[1]];for(;c=h[K++];){f=0;for(var Q=G.length;f<Q;f++){var Y=!0,tt=G[f][0],et=O(c,G[f][1]);if((tt||!0!==et)&&(!(tt||et&&"string"==typeof et&&et.length)||tt&&!tt.test(et))){Y=!1;break}}Y&&(I[I.length]=c)}p=h=I}if(w.allPseudos){for(var st=w.allPseudos.match(it.pseudos),nt=(f=0,st.length);f<nt;f++){it.pseudos.lastIndex=0;var at=it.pseudos.exec(st[f]);e(h=D(h,at[1]?at[1].toLowerCase():null,at[3]||null))}p=h}}u=lt(u,p)}return u},cssByXpath:function(t){function x(t){return e[t]||null}var e={xhtml:"http://www.w3.org/1999/xhtml"},w=document.documentElement.namespaceURI===e.xhtml?"xhtml:":"";return DOMAssistant.cssByXpath=function(t){function l(t,e,s,n){switch(n=n?n.replace(it.quoted,"$1"):n,s){case"^":return"starts-with(@"+e+', "'+n+'")';case"$":return"substring(@"+e+", (string-length(@"+e+") - "+(n.length-1)+"), "+n.length+') = "'+n+'"';case"*":return'contains(concat(" ", @'+e+', " "), "'+n+'")';case"|":return"(@"+e+'="'+n+'" or starts-with(@'+e+', "'+n+'-"))';case"~":return'contains(concat(" ", @'+e+', " "), " '+n+' ")';default:return"@"+e+(n?'="'+n+'"':"")}}function e(t,e,s,n){return"["+l(0,e,s,n)+"]"}function c(t,e,s){var n;t=/\-child$/.test(e)?"*":t;var a="",o=e.split("-");switch(o[0]){case"nth":if(!/^n$/.test(s)){var r=("last"===o[1]?"(count(following-sibling::":"(count(preceding-sibling::")+t+") + 1)";(d=DOMAssistant.getSequence.call(this,s))&&(a=d.start===d.max?r+" = "+d.start:r+" mod "+d.add+" = "+d.modVal+(1<d.start?" and "+r+" >= "+d.start:"")+(0<d.max?" and "+r+" <= "+d.max:""))}break;case"not":a="not("+((n=it.pseudo.exec(s))?c(t,n[1]?n[1].toLowerCase():null,n[3]||null):s.replace(it.id,"[id=$1]").replace(it.tag,"self::$1").replace(it.classes,'contains(concat(" ", @class, " "), " $1 ")').replace(it.attribs,l))+")";break;case"first":return"not(preceding-sibling::"+t+")";case"last":return"not(following-sibling::"+t+")";case"only":return"not(preceding-sibling::"+t+" or following-sibling::"+t+")";case"empty":return"count(child::*) = 0 and string-length(text()) = 0";case"contains":return'contains(., "'+s.replace(it.quoted,"$1")+'")';case"enabled":return'not(@disabled) and not(@type="hidden")';case"disabled":return"@disabled";case"target":var i=document.location.hash.slice(1);return'@name="'+i+'" or @id="'+i+'"';default:return"@"+e+'="'+s+'"'}return a}if(/:checked/.test(t))return DOMAssistant.cssByDOM.call(this,t);for(var s,n,a,o,r,d,i=t.replace(it.rules,"$1").split(","),u=new ot,p=new RegExp("(?:\\[[^\\[]*\\]|\\(.*\\)|[^\\s\\+>~\\[\\(])+|[\\+>~]","g"),h=0;s=i[h];h++)if(!h||!ct(i.slice(0,h),s)){a=".";h=0;for(var f,m=(n=s.match(p)).length;h<m;h++){if(o=it.selector.exec(n[h]),(r={tag:w+(o[1]&&"*"!==o[3]?o[1]:"*"),id:"*"!==o[3]?o[2]:null,allClasses:o[4],allAttr:o[6],allPseudos:o[11],tagRelation:o[23]}).tagRelation){a+={">":"/child::","+":"/following-sibling::*[1]/self::","~":"/following-sibling::"}[r.tagRelation]||""}else a+=0<h&&it.relation.test(n[h-1])?r.tag:"/descendant::"+r.tag;if(r.id&&(a=a+'[@id = "'+r.id.replace(/^#/,"")+'"]'),r.allClasses&&(a+=r.allClasses.replace(it.classes,'[contains(concat(" ", @class, " "), " $1 ")]')),r.allAttr&&(a+=r.allAttr.replace(it.attribs,e)),r.allPseudos)for(var $=r.allPseudos.match(it.pseudos),g=(h=0,$.length);h<g;h++){it.pseudos.lastIndex=0;var v=it.pseudos.exec($[h]),b=v[1]?v[1].toLowerCase():null,y=v[3]||null,M=c(r.tag,b,y);M.length&&(a=a+"["+M+"]")}}for(var j=document.evaluate(a,this,x,0,null);f=j.iterateNext();)u.push(f)}return u},DOMAssistant.cssByXpath.call(this,t)},cssSelection:function(t){if(DOMAssistant.cssSelection=document.evaluate?DOMAssistant.cssByXpath:DOMAssistant.cssByDOM,document.querySelectorAll){var s=DOMAssistant.cssSelection;DOMAssistant.cssSelection=function(e){try{var t=new ot;return lt(t,this.querySelectorAll(e))}catch(t){return s.call(this,e)}}}return DOMAssistant.cssSelection.call(this,t)},cssSelect:function(t){return DOMAssistant.cssSelection.call(this,t)},elmsByClass:function(t,e){var s=(e||"")+"."+t;return DOMAssistant.cssSelection.call(this,s)},elmsByAttribute:function(t,e,s,n){var a=(s||"")+"["+t+(e&&"*"!==e?(n||"")+"="+e+"]":"]");return DOMAssistant.cssSelection.call(this,a)},elmsByTag:function(t){return DOMAssistant.cssSelection.call(this,t)}}}(),url;DOMAssistant.initCore(),DOMAssistant.AJAX=function(){var globalXMLHttp$jscomp$0=null,readyState$jscomp$0=0,status$jscomp$0=-1,statusText$jscomp$0="",requestPool$jscomp$0=[],createAjaxObj$jscomp$0=function(t,e,s,n){var a=null;return/POST/i.test(e)&&(a=(t=t.split("?"))[1],t=t[0]),{url:t,method:e,callback:s,params:a,headers:{},responseType:"text",addToContent:n||!1}},inProgress$jscomp$0=function(t){return!!t&&1<=t.readyState&&t.readyState<=3};return{publicMethods:["ajax","get","post","load"],initRequest:function(){var e=null;if(window.XMLHttpRequest)e=new XMLHttpRequest,DOMAssistant.AJAX.initRequest=function(){return requestPool$jscomp$0.length?requestPool$jscomp$0.pop():new XMLHttpRequest};else if(window.ActiveXObject)for(var t=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP"],s=0;s<t.length;s++)try{e=new window.ActiveXObject(t[s]),DOMAssistant.AJAX.initRequest=function(){return requestPool$jscomp$0.length?requestPool$jscomp$0.pop():new window.ActiveXObject(t[s])};break}catch(t){e=null}return e},ajax:function(t){if(!t.noParse&&t.url&&/\?/.test(t.url)&&t.method&&/POST/i.test(t.method)){var e=t.url.split("?");t.url=e[0],t.params=e[1]+(0<e[1].length&&t.params?"&"+t.params:"")}return DOMAssistant.AJAX.makeCall.call(this,t)},get:function(t,e,s){var n=createAjaxObj$jscomp$0(t,"GET",e,s);return DOMAssistant.AJAX.makeCall.call(this,n)},post:function(t,e){var s=createAjaxObj$jscomp$0(t,"POST",e);return DOMAssistant.AJAX.makeCall.call(this,s)},load:function(t,e){DOMAssistant.AJAX.get.call(this,t,DOMAssistant.AJAX.replaceWithAJAXContent,e)},makeCall:function(ajaxObj$jscomp$0){var XMLHttp$jscomp$0=DOMAssistant.AJAX.initRequest();return XMLHttp$jscomp$0&&(globalXMLHttp$jscomp$0=XMLHttp$jscomp$0,function(elm$jscomp$0){var url$jscomp$22=ajaxObj$jscomp$0.url,method$jscomp$1=ajaxObj$jscomp$0.method||"GET",callback$jscomp$44=ajaxObj$jscomp$0.callback,params$jscomp$1=ajaxObj$jscomp$0.params,headers$jscomp$0=ajaxObj$jscomp$0.headers,responseType$jscomp$0=ajaxObj$jscomp$0.responseType||"text",addToContent$jscomp$0=ajaxObj$jscomp$0.addToContent,timeout$jscomp$1=ajaxObj$jscomp$0.timeout||null,ex$jscomp$0=ajaxObj$jscomp$0.exception,timeoutId$jscomp$0=null,i$jscomp$9;if(XMLHttp$jscomp$0.open(method$jscomp$1,url$jscomp$22,!0),XMLHttp$jscomp$0.setRequestHeader("AJAX","true"),XMLHttp$jscomp$0.setRequestHeader("X-Requested-With","XMLHttpRequest"),"POST"===method$jscomp$1){var contentLength$jscomp$0=params$jscomp$1?params$jscomp$1.length:0;XMLHttp$jscomp$0.setRequestHeader("Content-type","application/x-www-form-urlencoded"),XMLHttp$jscomp$0.setRequestHeader("Content-length",contentLength$jscomp$0),XMLHttp$jscomp$0.overrideMimeType&&XMLHttp$jscomp$0.setRequestHeader("Connection","close")}for(i$jscomp$9 in"json"===responseType$jscomp$0&&XMLHttp$jscomp$0.setRequestHeader("Accept","application/json, text/javascript, */*"),headers$jscomp$0)"string"==typeof i$jscomp$9&&XMLHttp$jscomp$0.setRequestHeader(i$jscomp$9,headers$jscomp$0[i$jscomp$9]);"function"==typeof callback$jscomp$44&&(XMLHttp$jscomp$0.onreadystatechange=function(){try{if(4===XMLHttp$jscomp$0.readyState){if(window.clearTimeout(timeoutId$jscomp$0),status$jscomp$0=XMLHttp$jscomp$0.status,statusText$jscomp$0=XMLHttp$jscomp$0.statusText,readyState$jscomp$0=4,!status$jscomp$0||200!==status$jscomp$0)throw new Error(statusText$jscomp$0);var response$jscomp$2=/xml/i.test(responseType$jscomp$0)?XMLHttp$jscomp$0.responseXML:XMLHttp$jscomp$0.responseText;/json/i.test(responseType$jscomp$0)&&(response$jscomp$2="object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(response$jscomp$2):eval("("+response$jscomp$2+")")),globalXMLHttp$jscomp$0=null,XMLHttp$jscomp$0.onreadystatechange=function(){},requestPool$jscomp$0.push(XMLHttp$jscomp$0),callback$jscomp$44.call(elm$jscomp$0,response$jscomp$2,addToContent$jscomp$0)}}catch(t){globalXMLHttp$jscomp$0=XMLHttp$jscomp$0=null,"function"==typeof ex$jscomp$0&&(ex$jscomp$0.call(elm$jscomp$0,t),ex$jscomp$0=null)}}),XMLHttp$jscomp$0.send(params$jscomp$1),timeout$jscomp$1&&(timeoutId$jscomp$0=window.setTimeout(function(){inProgress$jscomp$0(XMLHttp$jscomp$0)&&(XMLHttp$jscomp$0.abort(),"function"==typeof ex$jscomp$0&&(readyState$jscomp$0=0,status$jscomp$0=408,statusText$jscomp$0="Request timeout",globalXMLHttp$jscomp$0=XMLHttp$jscomp$0=null,ex$jscomp$0.call(elm$jscomp$0,new Error(statusText$jscomp$0)),ex$jscomp$0=null))},timeout$jscomp$1))}(this)),this},replaceWithAJAXContent:function(t,e){e?this.innerHTML+=t:(DOMAssistant.clearHandlers.apply(this),this.innerHTML=t)},getReadyState:function(){return globalXMLHttp$jscomp$0&&void 0!==globalXMLHttp$jscomp$0.readyState?globalXMLHttp$jscomp$0.readyState:readyState$jscomp$0},getStatus:function(){return status$jscomp$0},getStatusText:function(){return statusText$jscomp$0}}}(),DOMAssistant.attach(DOMAssistant.AJAX),DOMAssistant.CSS={addClass:function(t){if(!DOMAssistant.CSS.hasClass.call(this,t)){var e=this.className;this.className=e+(e.length?" ":"")+t}return this},removeClass:function(t){return DOMAssistant.CSS.replaceClass.call(this,t)},replaceClass:function(t,a){var e=new RegExp("(^|\\s)"+t+"(\\s|$)","i");return this.className=this.className.replace(e,function(t,e,s){var n=a?e+a+s:"";return/^\s+.*\s+$/.test(t)&&(n=t.replace(/(\s+).+/,"$1")),n}).replace(/^\s+|\s+$/g,""),this},hasClass:function(t){return new RegExp("(^|\\s)"+t+"(\\s|$)","i").test(this.className)},setStyle:function(t,e){if(this.filters&&("string"==typeof t?/opacity/i.test(t):t.opacity)&&(this.style.filter="alpha(opacity="+100*(e||t.opacity||1)+")"),void 0!==this.style.cssText){var s,n=this.style.cssText;if("object"==typeof t)for(s in t)"string"==typeof s&&(n=n+";"+s+":"+t[s]);else n=n+";"+t+":"+e;this.style.cssText=n}return this},getStyle:function(t){var e="";return t=t.toLowerCase(),document.defaultView&&document.defaultView.getComputedStyle?e=document.defaultView.getComputedStyle(this,"").getPropertyValue(t):this.currentStyle&&"auto"===(e=this.filters&&/^opacity$/.test(t)?((this.filters["DXImageTransform.Microsoft.Alpha"]||this.filters.alpha||{}).opacity||100)/100:(t=t.replace(/^float$/,"styleFloat").replace(/\-(\w)/g,function(t,e){return e.toUpperCase()}),this.currentStyle[t]))&&/^(width|height)$/.test(t)&&"none"!==this.currentStyle.display&&(e=this["offset"+t.charAt(0).toUpperCase()+t.substr(1)]+"px"),e}},DOMAssistant.attach(DOMAssistant.CSS),DOMAssistant.Content=function(){var r=DOMAssistant.$;return{init:function(){DOMAssistant.setCache(!1)},prev:function(){for(var t=this;(t=t.previousSibling)&&1!==t.nodeType;);return r(t)},next:function(){for(var t=this;(t=t.nextSibling)&&1!==t.nodeType;);return r(t)},create:function(t,e,s,n){var a=r(document.createElement(t));return e&&(a=a.setAttributes(e)),void 0!==n&&a.addContent(n),s&&DOMAssistant.Content.addContent.call(this,a),a},setAttributes:function(t){if(DOMAssistant.isIE){var o=function(t,e,s){var n=e.toLowerCase();switch(n){case"name":case"type":return document.createElement(t.outerHTML.replace(new RegExp(n+"=[a-zA-Z]+")," ").replace(">"," "+n+"="+s+">"));case"style":return t.style.cssText=s,t;default:return t[DOMAssistant.camel[n]||e]=s,t}};DOMAssistant.Content.setAttributes=function(t){var e,s=this,n=this.parentNode;for(e in t)if("string"==typeof t[e]||"number"==typeof t[e]){var a=o(s,e,t[e]);n&&/(name|type)/i.test(e)&&(s.innerHTML&&(a.innerHTML=s.innerHTML),n.replaceChild(a,s)),s=a}return r(s)}}else DOMAssistant.Content.setAttributes=function(t){var e;for(e in t)/class/i.test(e)?this.className=t[e]:this.setAttribute(e,t[e]);return this};return DOMAssistant.Content.setAttributes.call(this,t)},addContent:function(t){var e=typeof t;return"string"==e||"number"==e?this.innerHTML+=t:("object"==e||"function"==e&&t.nodeName)&&this.appendChild(t),this},replaceContent:function(t){return DOMAssistant.clearHandlers.apply(this),this.innerHTML="",DOMAssistant.Content.addContent.call(this,t)},replace:function(t,e){var s=typeof t;if("string"==s||"number"==s){for(var n=this.parentNode,a=r(n).create("div",null,!1,t),o=a.childNodes.length-1;0<=o;o--)n.insertBefore(a.childNodes[o],this.nextSibling);t=this.nextSibling,n.removeChild(this)}else("object"==s||"function"==s&&t.nodeName)&&this.parentNode.replaceChild(t,this);return e?t:this},remove:function(){return this.parentNode.removeChild(this),null}}}(),DOMAssistant.attach(DOMAssistant.Content),DOMAssistant.Events=function(){var n=1;return{publicMethods:["triggerEvent","addEvent","removeEvent","preventDefault","cancelBubble"],init:function(){window.addEvent=this.addEvent,window.removeEvent=this.removeEvent,DOMAssistant.preventDefault=this.preventDefault,DOMAssistant.cancelBubble=this.cancelBubble},triggerEvent:function(t,e){if(this.events&&this.events[t])for(var s={type:t,target:e||this,currentTarget:this,bubbles:!1,cancelable:!1,preventDefault:function(){},stopPropagation:function(){},timeStamp:+new Date},n=0,a=this.events[t].length;n<a;n++)this.events[t][n].call(this,s);else"function"==typeof this["on"+t]&&this["on"+t].call(this,s);return this},addEvent:function(t,e){if(/^DOM/.test(t))this.addEventListener&&this.addEventListener(t,e,!1);else if(this.uniqueHandlerId||(this.uniqueHandlerId=n++),!e.attachedElements||!e.attachedElements[t+this.uniqueHandlerId]){if(this.events||(this.events={}),!this.events[t]){this.events[t]=[];var s=this["on"+t];s&&this.events[t].push(s)}this.events[t].push(e),this["on"+t]=DOMAssistant.Events.handleEvent,"object"==typeof this.window&&(this.window["on"+t]=DOMAssistant.Events.handleEvent),e.attachedElements||(e.attachedElements={}),e.attachedElements[t+this.uniqueHandlerId]=!0}return this},handleEvent:function(t){for(var e,s,n=t||event,a=n.target||n.srcElement||document;1!==a.nodeType&&a.parentNode;)a=a.parentNode;n.eventTarget=a;var o=this.events[n.type].slice(0);if(e=o.length){for(var r=0;r<e;r++)"function"==typeof o[r]&&(s=o[r].call(this,n));return s}},removeEvent:function(t,e){if(this.events&&this.events[t])for(var s,n=this.events[t],a=n.length-1;0<=a;a--)s=e||n[a],n[a]===s&&(delete n[a],n.splice(a,1),s.attachedElements&&(s.attachedElements[t+this.uniqueHandlerId]=null));else this["on"+t]&&!e&&(this["on"+t]=null);return this},preventDefault:function(t){return DOMAssistant.Events.preventDefault=t&&t.preventDefault?function(t){t.preventDefault()}:function(){event.returnValue=!1},DOMAssistant.Events.preventDefault(t)},cancelBubble:function(t){return DOMAssistant.Events.cancelBubble=t&&t.stopPropagation?function(t){t.stopPropagation()}:function(){event.cancelBubble=!0},DOMAssistant.Events.cancelBubble(t)}}}(),DOMAssistant.attach(DOMAssistant.Events),DOMAssistant.DOMLoad=function(){function n(){for(var t=0,e=o.length;t<e;t++)try{o[t]()}catch(t){s&&"function"==typeof s&&s(t)}o=[]}function t(){a||(a=!0,n())}var a=!1,e=null,o=[],r={},s=null;return document.addEventListener&&document.addEventListener("DOMContentLoaded",t,!1),/KHTML|WebKit|iCab/i.test(navigator.userAgent)&&(e=setInterval(function(){/loaded|complete/i.test(document.readyState)&&(t(),clearInterval(e))},10)),window.onload=t,{DOMReady:function(){for(var t,e=0,s=arguments.length;e<s;e++)(t=arguments[e]).DOMReady||r[t]||("string"==typeof t&&(r[t]=!0,t=new Function(t)),t.DOMReady=!0,o.push(t));a&&n()},setErrorHandling:function(t){s=t}}}(),DOMAssistant.DOMReady=DOMAssistant.DOMLoad.DOMReady,DOMAssistant.DOMReady(checkLinks);
