
(function(){function l(p,g){var m=document.createElement("div");m.className="notyf__toast";var u=document.createElement("div");u.className="notyf__wrapper";var A=document.createElement("div");A.className="notyf__icon";var E=document.createElement("i");E.className=g;var B=document.createElement("div");B.className="notyf__message";B.innerHTML=p;A.appendChild(E);u.appendChild(A);u.appendChild(B);m.appendChild(u);var C=this;return setTimeout(function(){m.className+=" notyf--disappear";m.addEventListener(C.animationEnd,
function(G){G.target==m&&C.container.removeChild(m)});var L=C.notifications.indexOf(m);C.notifications.splice(L,1)},C.options.delay),m}this.Notyf=function(p){this.notifications=[];var g={delay:2E3,alertIcon:"notyf__icon--alert",confirmIcon:"notyf__icon--confirm"};if(p&&"object"==typeof p)for(property in p)p.hasOwnProperty(property)&&(g[property]=p[property]);this.options=g;p=document.createDocumentFragment();g=document.createElement("div");g.className="notyf";p.appendChild(g);document.body.appendChild(p);
this.container=g;var m;a:{var u;p=document.createElement("fake");g={transition:"animationend",OTransition:"oAnimationEnd",MozTransition:"animationend",WebkitTransition:"webkitAnimationEnd"};for(u in g)if(void 0!==p.style[u]){m=g[u];break a}}this.animationEnd=m};this.Notyf.prototype.alert=function(p){p=l.call(this,p,this.options.alertIcon);p.className+=" notyf--alert";this.container.appendChild(p);this.notifications.push(p)};this.Notyf.prototype.confirm=function(p){p=l.call(this,p,this.options.confirmIcon);
p.className+=" notyf--confirm";this.container.appendChild(p);this.notifications.push(p)}})();(function(){"function"==typeof define&&define.amd?define("Notyf",function(){return Notyf}):"undefined"!=typeof module&&module.exports?module.exports=Notyf:window.Notyf=Notyf})();[].forEach.call(document.querySelectorAll(".form-group input.form-field"),function(l){l.addEventListener("focus",function(){l.parentNode.classList.add("focus")});l.addEventListener("blur",function(){l.parentNode.classList.remove("focus")})});
[].forEach.call(document.querySelectorAll(".form-file-field input"),function(l){l.addEventListener("change",function(){var p=l.files.length;if(p===1)l.parentNode.querySelectorAll(".file-msg")[0].textContent=l.value.split("\\").pop();else{var g="files selected";if(l.parentNode.querySelectorAll(".file-msg")[0].dataset.selected)g=l.parentNode.querySelectorAll(".file-msg")[0].dataset.selected;l.parentNode.querySelectorAll(".file-msg")[0].textContent=p+" "+g}l.parentNode.classList.add("active")})});
[].forEach.call(document.querySelectorAll(".password .icon-view"),function(l){l.addEventListener("click",function(){var p=l.parentNode.getElementsByTagName("input")[0];p.type=l.classList.contains("active")?"password":"text";p.focus();l.classList.toggle("active")})});[].forEach.call(document.querySelectorAll("textarea.autoexpand"),function(l){l.addEventListener("keydown",function(){var p=this;setTimeout(function(){p.style.cssText="min-height: "+p.scrollHeight+"px"},0)})});
[].forEach.call(document.querySelectorAll("select.form-select"),function(l){var p=l.classList.value,g=l.options[l.selectedIndex].textContent,m,u=document.createElement("div"),A="<span>"+g+"</span>";A+="<div>";for(m=0;m<l.options.length;m++){var E="";if(g==l.options[m].innerHTML)E="active";A+='<span class="'+l.options[m].classList.value+" "+E+'" data-value="'+l.options[m].value+'">'+l.options[m].innerHTML+"</span>"}A+="</div>";u.className=p;u.innerHTML=A;l.style.display="none";l.parentNode.insertBefore(u,
l)});[].forEach.call(document.querySelectorAll(".form-select:not(.disabled) > span"),function(l){l.addEventListener("click",function(p){document.addEventListener("click",function(){[].forEach.call(document.querySelectorAll(".form-select"),function(g){g.classList.remove("open")})});l.parentNode.classList.toggle("open");p.stopPropagation()})});
[].forEach.call(document.querySelectorAll(".form-select > div > span"),function(l){l.addEventListener("click",function(){var p=l.parentNode.parentNode,g=p.nextSibling;g.value=l.dataset.value;g.dispatchEvent(new Event("change"));g=l.parentNode.getElementsByTagName("span");for(i=0;i<g.length;i++)g[i].classList.remove("active");setTimeout(function(){l.classList.add("active")},300);p.classList.remove("open");p.getElementsByTagName("span")[0].textContent=l.textContent})});
(function(){function l(g){this.element=g}var p=function(g,m,u){for(var A=0;A<g.length;A++)m.call(u,g[A])};l.prototype={add:function(){p(arguments,function(g){this.contains(g)||(this.element.className+=" "+g)},this)},remove:function(){p(arguments,function(g){this.element.className=this.element.className.replace(RegExp("(^| )"+g+"( |$)"),"")},this)},toggle:function(g){return this.contains(g)?(this.remove(g),false):(this.add(g),true)},contains:function(g){return RegExp("(^| )"+g+"( |$)").test(this.element.className)},
replace:function(g,m){this.remove(g);this.add(m)}};"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new l(this)}});if(window.DOMTokenList&&DOMTokenList.prototype.replace==null)DOMTokenList.prototype.replace=l.prototype.replace})();
(function(l,p){"function"==typeof define&&define.amd?define(function(){return p(l)}):p(l)})(this,function(l){var p=function(){function g(a){return null==a?String(a):aa[ia.call(a)]||"object"}function m(a){return"function"==g(a)}function u(a){return null!=a&&a==a.window}function A(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function E(a){return"object"==g(a)}function B(a){return E(a)&&!u(a)&&Object.getPrototypeOf(a)==Object.prototype}function C(a){var b=!!a&&"length"in a&&a.length,d=j.type(a);return"function"!=
d&&!u(a)&&("array"==d||0===b||"number"==typeof b&&b>0&&b-1 in a)}function L(a){return r.call(a,function(b){return null!=b})}function G(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function Y(a){return a in n?n[a]:n[a]=RegExp("(^|\\s)"+a+"(\\s|$)")}function Q(a){return"children"in a?w.call(a.children):j.map(a.childNodes,function(b){return 1==b.nodeType?b:void 0})}function S(a,b){var d,k=a?a.length:0;for(d=
0;k>d;d++)this[d]=a[d];this.length=k;this.selector=b||""}function J(a,b,d){for(v in b)d&&(B(b[v])||Z(b[v]))?(B(b[v])&&!B(a[v])&&(a[v]={}),Z(b[v])&&!Z(a[v])&&(a[v]=[]),J(a[v],b[v],d)):b[v]!==D&&(a[v]=b[v])}function H(a,b){return null==b?j(a):j(a).filter(b)}function I(a,b,d,k){return m(b)?b.call(a,d,k):b}function N(a,b,d){null==d?a.removeAttribute(b):a.setAttribute(b,d)}function M(a,b){var d=a.className||"",k=d&&d.baseVal!==D;return b===D?k?d.baseVal:d:void(k?d.baseVal=b:a.className=b)}function U(a){try{return a?
"true"==a||("false"==a?false:"null"==a?null:+a+""==a?+a:/^[\[\{]/.test(a)?j.parseJSON(a):a):a}catch(b){return a}}function W(a,b){b(a);for(var d=0,k=a.childNodes.length;k>d;d++)W(a.childNodes[d],b)}var D,v,j,c,f,h,e=[],o=e.concat,r=e.filter,w=e.slice,q=l.document,F={},n={},s={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},K=/^\s*<(\w+|!)[^>]*>/,y=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ca=/^(?:body|html)$/i,
ja=/([A-Z])/g,ka=["val","css","html","text","data","width","height","offset"],ba=q.createElement("table"),da=q.createElement("tr"),ea={tr:q.createElement("tbody"),tbody:ba,thead:ba,tfoot:ba,td:da,th:da,"*":q.createElement("div")},la=/complete|loaded|interactive/,ma=/^[\w-]*$/,aa={},ia=aa.toString,x={},fa=q.createElement("div"),ga={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",
colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Z=Array.isArray||function(a){return a instanceof Array};return x.matches=function(a,b){if(!b||!a||1!==a.nodeType)return false;var d=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(d)return d.call(a,b);var k;d=a.parentNode;var t=!d;return t&&(d=fa).appendChild(a),k=~x.qsa(d,b).indexOf(a),t&&fa.removeChild(a),k},f=function(a){return a.replace(/-+(.)?/g,function(b,
d){return d?d.toUpperCase():""})},h=function(a){return r.call(a,function(b,d){return a.indexOf(b)==d})},x.fragment=function(a,b,d){var k,t,z;return y.test(a)&&(k=j(q.createElement(RegExp.$1))),k||(a.replace&&(a=a.replace(R,"<$1></$2>")),b===D&&(b=K.test(a)&&RegExp.$1),b in ea||(b="*"),z=ea[b],z.innerHTML=""+a,k=j.each(w.call(z.childNodes),function(){z.removeChild(this)})),B(d)&&(t=j(k),j.each(d,function(T,P){ka.indexOf(T)>-1?t[T](P):t.attr(T,P)})),k},x.Z=function(a,b){return new S(a,b)},x.isZ=function(a){return a instanceof
x.Z},x.init=function(a,b){var d;if(!a)return x.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&K.test(a)){d=x.fragment(a,RegExp.$1,b);a=null}else{if(b!==D)return j(b).find(a);d=x.qsa(q,a)}else{if(m(a))return j(q).ready(a);if(x.isZ(a))return a;if(Z(a))d=L(a);else if(E(a)){d=[a];a=null}else if(K.test(a)){d=x.fragment(a.trim(),RegExp.$1,b);a=null}else{if(b!==D)return j(b).find(a);d=x.qsa(q,a)}}return x.Z(d,a)},j=function(a,b){return x.init(a,b)},j.extend=function(a){var b,d=w.call(arguments,1);return"boolean"==
typeof a&&(b=a,a=d.shift()),d.forEach(function(k){J(a,k,b)}),a},x.qsa=function(a,b){var d,k="#"==b[0],t=!k&&"."==b[0],z=k||t?b.slice(1):b,T=ma.test(z);return a.getElementById&&T&&k?(d=a.getElementById(z))?[d]:[]:1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType?[]:w.call(T&&!k&&a.getElementsByClassName?t?a.getElementsByClassName(z):a.getElementsByTagName(b):a.querySelectorAll(b))},j.contains=q.documentElement.contains?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b&&(b=b.parentNode);)if(b===
a)return true;return false},j.type=g,j.isFunction=m,j.isWindow=u,j.isArray=Z,j.isPlainObject=B,j.isEmptyObject=function(a){for(var b in a)return false;return true},j.isNumeric=function(a){var b=Number(a),d=typeof a;return null!=a&&"boolean"!=d&&("string"!=d||a.length)&&!isNaN(b)&&isFinite(b)||false},j.inArray=function(a,b,d){return e.indexOf.call(b,a,d)},j.camelCase=f,j.trim=function(a){return null==a?"":String.prototype.trim.call(a)},j.uuid=0,j.support={},j.expr={},j.noop=function(){},j.map=function(a,
b){var d,k,t=[];if(C(a))for(k=0;k<a.length;k++){d=b(a[k],k);null!=d&&t.push(d)}else for(k in a){d=b(a[k],k);null!=d&&t.push(d)}return t.length>0?j.fn.concat.apply([],t):t},j.each=function(a,b){var d;if(C(a))for(d=0;d<a.length;d++){if(b.call(a[d],d,a[d])===false)break}else for(d in a)if(b.call(a[d],d,a[d])===false)break;return a},j.grep=function(a,b){return r.call(a,b)},l.JSON&&(j.parseJSON=JSON.parse),j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){aa["[object "+
b+"]"]=b.toLowerCase()}),j.fn={constructor:x.Z,length:0,forEach:e.forEach,reduce:e.reduce,push:e.push,sort:e.sort,splice:e.splice,indexOf:e.indexOf,concat:function(){var a,b,d=[];for(a=0;a<arguments.length;a++){b=arguments[a];d[a]=x.isZ(b)?b.toArray():b}return o.apply(x.isZ(this)?this.toArray():this,d)},map:function(a){return j(j.map(this,function(b,d){return a.call(b,d,b)}))},slice:function(){return j(w.apply(this,arguments))},ready:function(a){return la.test(q.readyState)&&q.body?a(j):q.addEventListener("DOMContentLoaded",
function(){a(j)},false),this},get:function(a){return a===D?w.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return e.every.call(this,function(b,d){return a.call(b,d,b)!==false}),this},filter:function(a){return m(a)?this.not(this.not(a)):j(r.call(this,function(b){return x.matches(b,a)}))},add:function(a,b){return j(h(this.concat(j(a,
b))))},is:function(a){return this.length>0&&x.matches(this[0],a)},not:function(a){var b=[];if(m(a)&&a.call!==D)this.each(function(k){a.call(this,k)||b.push(this)});else{var d="string"==typeof a?this.filter(a):C(a)&&m(a.item)?w.call(a):j(a);this.forEach(function(k){d.indexOf(k)<0&&b.push(k)})}return j(b)},has:function(a){return this.filter(function(){return E(a)?j.contains(this,a):j(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];
return a&&!E(a)?a:j(a)},last:function(){var a=this[this.length-1];return a&&!E(a)?a:j(a)},find:function(a){var b=this;return a?"object"==typeof a?j(a).filter(function(){var d=this;return e.some.call(b,function(k){return j.contains(k,d)})}):1==this.length?j(x.qsa(this[0],a)):this.map(function(){return x.qsa(this,a)}):j()},closest:function(a,b){var d=[],k="object"==typeof a&&j(a);return this.each(function(t,z){for(;z&&!(k?k.indexOf(z)>=0:x.matches(z,a));)z=z!==b&&!A(z)&&z.parentNode;z&&d.indexOf(z)<
0&&d.push(z)}),j(d)},parents:function(a){for(var b=[],d=this;d.length>0;)d=j.map(d,function(k){return(k=k.parentNode)&&!A(k)&&b.indexOf(k)<0?(b.push(k),k):void 0});return H(b,a)},parent:function(a){return H(h(this.pluck("parentNode")),a)},children:function(a){return H(this.map(function(){return Q(this)}),a)},contents:function(){return this.map(function(){return this.contentDocument||w.call(this.childNodes)})},siblings:function(a){return H(this.map(function(b,d){return r.call(Q(d.parentNode),function(k){return k!==
d})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return j.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display="");if("none"==getComputedStyle(this,"").getPropertyValue("display")){var a=this.style,b;b=this.nodeName;var d,k;b=(F[b]||(d=q.createElement(b),q.body.appendChild(d),k=getComputedStyle(d,"").getPropertyValue("display"),d.parentNode.removeChild(d),"none"==k&&(k="block"),
F[b]=k),F[b]);a.display=b}})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var b=m(a);if(this[0]&&!b)var d=j(a).get(0),k=d.parentNode||this.length>1;return this.each(function(t){j(this).wrapAll(b?a.call(this,t):k?d.cloneNode(true):d)})},wrapAll:function(a){if(this[0]){j(this[0]).before(a=j(a));for(var b;(b=a.children()).length;)a=b.first();j(a).append(this)}return this},wrapInner:function(a){var b=m(a);return this.each(function(d){var k=j(this),t=k.contents();d=b?a.call(this,
d):a;t.length?t.wrapAll(d):k.append(d)})},unwrap:function(){return this.parent().each(function(){j(this).replaceWith(j(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(true)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=j(this);(a===D?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return j(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return j(this.pluck("nextElementSibling")).filter(a||
"*")},html:function(a){return 0 in arguments?this.each(function(b){var d=this.innerHTML;j(this).empty().append(I(this,a,b,d))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(b){b=I(this,a,b,this.textContent);this.textContent=null==b?"":""+b}):0 in this?this.pluck("textContent").join(""):null},attr:function(a,b){var d;return"string"!=typeof a||1 in arguments?this.each(function(k){if(1===this.nodeType)if(E(a))for(v in a)N(this,v,a[v]);else N(this,a,I(this,
b,k,this.getAttribute(a)))}):0 in this&&1==this[0].nodeType&&null!=(d=this[0].getAttribute(a))?d:D},removeAttr:function(a){return this.each(function(){1===this.nodeType&&a.split(" ").forEach(function(b){N(this,b)},this)})},prop:function(a,b){return a=ga[a]||a,1 in arguments?this.each(function(d){this[a]=I(this,b,d,this[a])}):this[0]&&this[0][a]},removeProp:function(a){return a=ga[a]||a,this.each(function(){delete this[a]})},data:function(a,b){var d="data-"+a.replace(ja,"-$1").toLowerCase();d=1 in
arguments?this.attr(d,b):this.attr(d);return null!==d?U(d):D},val:function(a){return 0 in arguments?(null==a&&(a=""),this.each(function(b){this.value=I(this,a,b,this.value)})):this[0]&&(this[0].multiple?j(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(a){if(a)return this.each(function(d){var k=j(this);d=I(this,a,d,k.offset());var t=k.offsetParent().offset();d={top:d.top-t.top,left:d.left-t.left};"static"==k.css("position")&&(d.position=
"relative");k.css(d)});if(!this.length)return null;if(q.documentElement!==this[0]&&!j.contains(q.documentElement,this[0]))return{top:0,left:0};var b=this[0].getBoundingClientRect();return{left:b.left+l.pageXOffset,top:b.top+l.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(a,b){if(arguments.length<2){var d=this[0];if("string"==typeof a){if(!d)return;return d.style[f(a)]||getComputedStyle(d,"").getPropertyValue(a)}if(Z(a)){if(!d)return;var k={},t=getComputedStyle(d,
"");return j.each(a,function(T,P){k[P]=d.style[f(P)]||t.getPropertyValue(P)}),k}}var z="";if("string"==g(a))b||0===b?z=G(a)+":"+("number"!=typeof b||s[G(a)]?b:b+"px"):this.each(function(){this.style.removeProperty(G(a))});else for(v in a)a[v]||0===a[v]?z+=G(v)+":"+("number"!=typeof a[v]||s[G(v)]?a[v]:a[v]+"px")+";":this.each(function(){this.style.removeProperty(G(v))});return this.each(function(){this.style.cssText+=";"+z})},index:function(a){return a?this.indexOf(j(a)[0]):this.parent().children().indexOf(this[0])},
hasClass:function(a){return a?e.some.call(this,function(b){return this.test(M(b))},Y(a)):false},addClass:function(a){return a?this.each(function(b){if("className"in this){c=[];var d=M(this);I(this,a,b,d).split(/\s+/g).forEach(function(k){j(this).hasClass(k)||c.push(k)},this);c.length&&M(this,d+(d?" ":"")+c.join(" "))}}):this},removeClass:function(a){return this.each(function(b){if("className"in this){if(a===D)return M(this,"");c=M(this);I(this,a,b,c).split(/\s+/g).forEach(function(d){c=c.replace(Y(d),
" ")});M(this,c.trim())}})},toggleClass:function(a,b){return a?this.each(function(d){var k=j(this);I(this,a,d,M(this)).split(/\s+/g).forEach(function(t){(b===D?!k.hasClass(t):b)?k.addClass(t):k.removeClass(t)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===D?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===
D?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),d=this.offset(),k=ca.test(b[0].nodeName)?{top:0,left:0}:b.offset();return d.top-=parseFloat(j(a).css("margin-top"))||0,d.left-=parseFloat(j(a).css("margin-left"))||0,k.top+=parseFloat(j(b[0]).css("border-top-width"))||0,k.left+=parseFloat(j(b[0]).css("border-left-width"))||0,{top:d.top-k.top,left:d.left-
k.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||q.body;a&&!ca.test(a.nodeName)&&"static"==j(a).css("position");)a=a.offsetParent;return a})}},j.fn.detach=j.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(d){return d[0].toUpperCase()});j.fn[a]=function(d){var k,t=this[0];return d===D?u(t)?t["inner"+b]:A(t)?t.documentElement["scroll"+b]:(k=this.offset())&&k[a]:this.each(function(z){t=j(this);t.css(a,I(this,d,z,t[a]()))})}}),["after",
"prepend","before","append"].forEach(function(a,b){var d=b%2;j.fn[a]=function(){var k,t,z=j.map(arguments,function(P){var O=[];return k=g(P),"array"==k?(P.forEach(function(X){return X.nodeType!==D?O.push(X):j.zepto.isZ(X)?O=O.concat(X.get()):void(O=O.concat(x.fragment(X)))}),O):"object"==k||null==P?P:x.fragment(P)}),T=this.length>1;return z.length<1?this:this.each(function(P,O){t=d?O:O.parentNode;O=0==b?O.nextSibling:1==b?O.firstChild:2==b?O:null;var X=j.contains(q.documentElement,t);z.forEach(function($){if(T)$=
$.cloneNode(true);else if(!t)return j($).remove();t.insertBefore($,O);X&&W($,function(V){if(!(null==V.nodeName||"SCRIPT"!==V.nodeName.toUpperCase()||V.type&&"text/javascript"!==V.type||V.src)){var ha=V.ownerDocument?V.ownerDocument.defaultView:l;ha.eval.call(ha,V.innerHTML)}})})})};j.fn[d?a+"To":"insert"+(b?"Before":"After")]=function(k){return j(k)[a](this),this}}),x.Z.prototype=S.prototype=j.fn,x.uniq=h,x.deserializeValue=U,j.zepto=x,j}();return l.Zepto=p,void 0===l.$&&(l.$=p),function(g){function m(c){return c._zid||
(c._zid=Y++)}function u(c,f,h,e){if(f=A(f),f.ns)var o=RegExp("(?:^| )"+f.ns.replace(" "," .* ?")+"(?: |$)");return(H[m(c)]||[]).filter(function(r){return r&&(!f.e||r.e==f.e)&&(!f.ns||o.test(r.ns))&&(!h||m(r.fn)===m(h))&&(!e||r.sel==e)})}function A(c){c=(""+c).split(".");return{e:c[0],ns:c.slice(1).sort().join(" ")}}function E(c,f,h,e,o,r,w){var q=m(c),F=H[q]||(H[q]=[]);f.split(/\s/).forEach(function(n){if("ready"==n)return g(document).ready(h);var s=A(n);s.fn=h;s.sel=o;s.e in U&&(h=function(y){var R=
y.relatedTarget;return!R||R!==this&&!g.contains(this,R)?s.fn.apply(this,arguments):void 0});var K=(s.del=r)||h;s.proxy=function(y){if(y=C(y),!y.isImmediatePropagationStopped()){y.data=e;var R=K.apply(c,y._args==G?[y]:[y].concat(y._args));return R===false&&(y.preventDefault(),y.stopPropagation()),R}};s.i=F.length;F.push(s);"addEventListener"in c&&c.addEventListener(U[s.e]||N&&M[s.e]||s.e,s.proxy,s.del&&!N&&s.e in M||!!w)})}function B(c,f,h,e,o){var r=m(c);(f||"").split(/\s/).forEach(function(w){u(c,
w,h,e).forEach(function(q){delete H[r][q.i];"removeEventListener"in c&&c.removeEventListener(U[q.e]||N&&M[q.e]||q.e,q.proxy,q.del&&!N&&q.e in M||!!o)})})}function C(c,f){return(f||!c.isDefaultPrevented)&&(f||(f=c),g.each(j,function(h,e){var o=f[h];c[h]=function(){return this[e]=W,o&&o.apply(f,arguments)};c[e]=D}),c.timeStamp||(c.timeStamp=Date.now()),(f.defaultPrevented!==G?f.defaultPrevented:"returnValue"in f?f.returnValue===false:f.getPreventDefault&&f.getPreventDefault())&&(c.isDefaultPrevented=
W)),c}function L(c){var f,h={originalEvent:c};for(f in c)v.test(f)||c[f]===G||(h[f]=c[f]);return C(h,c)}var G,Y=1,Q=Array.prototype.slice,S=g.isFunction,J=function(c){return"string"==typeof c},H={},I={},N="onfocusin"in l,M={focus:"focusin",blur:"focusout"},U={mouseenter:"mouseover",mouseleave:"mouseout"};I.click=I.mousedown=I.mouseup=I.mousemove="MouseEvents";g.event={add:E,remove:B};g.proxy=function(c,f){var h=2 in arguments&&Q.call(arguments,2);if(S(c)){var e=function(){return c.apply(f,h?h.concat(Q.call(arguments)):
arguments)};return e._zid=m(c),e}if(J(f))return h?(h.unshift(c[f],c),g.proxy.apply(null,h)):g.proxy(c[f],c);throw new TypeError("expected function");};g.fn.bind=function(c,f,h){return this.on(c,f,h)};g.fn.unbind=function(c,f){return this.off(c,f)};g.fn.one=function(c,f,h,e){return this.on(c,f,h,e,1)};var W=function(){return true},D=function(){return false},v=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",
stopPropagation:"isPropagationStopped"};g.fn.delegate=function(c,f,h){return this.on(f,c,h)};g.fn.undelegate=function(c,f,h){return this.off(f,c,h)};g.fn.live=function(c,f){return g(document.body).delegate(this.selector,c,f),this};g.fn.die=function(c,f){return g(document.body).undelegate(this.selector,c,f),this};g.fn.on=function(c,f,h,e,o){var r,w,q=this;return c&&!J(c)?(g.each(c,function(F,n){q.on(F,f,h,n,o)}),q):(J(f)||S(e)||e===false||(e=h,h=f,f=G),(e===G||h===false)&&(e=h,h=G),e===false&&(e=D),
q.each(function(F,n){o&&(r=function(s){return B(n,s.type,e),e.apply(this,arguments)});f&&(w=function(s){var K,y=g(s.target).closest(f,n).get(0);return y&&y!==n?(K=g.extend(L(s),{currentTarget:y,liveFired:n}),(r||e).apply(y,[K].concat(Q.call(arguments,1)))):void 0});E(n,c,e,h,f,w||r)}))};g.fn.off=function(c,f,h){var e=this;return c&&!J(c)?(g.each(c,function(o,r){e.off(o,f,r)}),e):(J(f)||S(h)||h===false||(h=f,f=G),h===false&&(h=D),e.each(function(){B(this,c,h,f)}))};g.fn.trigger=function(c,f){return c=
J(c)||g.isPlainObject(c)?g.Event(c):C(c),c._args=f,this.each(function(){c.type in M&&"function"==typeof this[c.type]?this[c.type]():"dispatchEvent"in this?this.dispatchEvent(c):g(this).triggerHandler(c,f)})};g.fn.triggerHandler=function(c,f){var h,e;return this.each(function(o,r){h=L(J(c)?g.Event(c):c);h._args=f;h.target=r;g.each(u(r,c.type||c),function(w,q){return e=q.proxy(h),h.isImmediatePropagationStopped()?false:void 0})}),e};"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(c){g.fn[c]=
function(f){return 0 in arguments?this.bind(c,f):this.trigger(c)}});g.Event=function(c,f){J(c)||(f=c,c=f.type);var h=document.createEvent(I[c]||"Events"),e=true;if(f)for(var o in f)"bubbles"==o?e=!!f[o]:h[o]=f[o];return h.initEvent(c,e,true),C(h)}}(p),function(g){function m(c,f,h,e){if(c.global){c=f||N;h=g.Event(h);e=(g(c).trigger(h,e),!h.isDefaultPrevented())}else e=void 0;return e}function u(c){c.global&&0===g.active++&&m(c,null,"ajaxStart")}function A(c,f){var h=f.context;return f.beforeSend.call(h,
c,f)===false||m(f,h,"ajaxBeforeSend",[c,f])===false?false:void m(f,h,"ajaxSend",[c,f])}function E(c,f,h,e){var o=h.context;h.success.call(o,c,"success",f);e&&e.resolveWith(o,[c,"success",f]);m(h,o,"ajaxSuccess",[f,h,c]);C("success",f,h)}function B(c,f,h,e,o){var r=e.context;e.error.call(r,h,f,c);o&&o.rejectWith(r,[h,f,c]);m(e,r,"ajaxError",[h,e,c||f]);C(f,h,e)}function C(c,f,h){var e=h.context;h.complete.call(e,f,c);m(h,e,"ajaxComplete",[f,h]);h.global&&!--g.active&&m(h,null,"ajaxStop")}function L(){}
function G(c,f){return""==f?c:(c+"&"+f).replace(/[&?]{1,2}/,"?")}function Y(c){c.processData&&c.data&&"string"!=g.type(c.data)&&(c.data=g.param(c.data,c.traditional));!c.data||c.type&&"GET"!=c.type.toUpperCase()&&"jsonp"!=c.dataType||(c.url=G(c.url,c.data),c.data=void 0)}function Q(c,f,h,e){return g.isFunction(f)&&(h=f,f=void 0),g.isFunction(h)||(e=h,h=void 0),{url:c,data:f,success:h,dataType:e}}function S(c,f,h,e){var o,r=g.isArray(f),w=g.isPlainObject(f);g.each(f,function(q,F){o=g.type(F);e&&(q=
h?e:e+"["+(w||"object"==o||"array"==o?q:"")+"]");!e&&r?c.add(F.name,F.value):"array"==o||!h&&"object"==o?S(c,F,h,q):c.add(q,F)})}var J,H,I=+new Date,N=l.document,M=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,U=/^(?:text|application)\/javascript/i,W=/^(?:text|application)\/xml/i,D=/^\s*$/,v=N.createElement("a");v.href=l.location.href;g.active=0;g.ajaxJSONP=function(c,f){if(!("type"in c))return g.ajax(c);var h,e,o=c.jsonpCallback,r=(g.isFunction(o)?o():o)||"Zepto"+I++,w=N.createElement("script"),
q=l[r],F=function(s){g(w).triggerHandler("error",s||"abort")},n={abort:F};return f&&f.promise(n),g(w).on("load error",function(s,K){clearTimeout(e);g(w).off().remove();"error"!=s.type&&h?E(h[0],n,c,f):B(null,K||"error",n,c,f);l[r]=q;h&&g.isFunction(q)&&q(h[0]);q=h=void 0}),A(n,c)===false?(F("abort"),n):(l[r]=function(){h=arguments},w.src=c.url.replace(/\?(.+)=\?/,"?$1="+r),N.head.appendChild(w),c.timeout>0&&(e=setTimeout(function(){F("timeout")},c.timeout)),n)};g.ajaxSettings={type:"GET",beforeSend:L,
success:L,error:L,complete:L,context:null,global:true,xhr:function(){return new l.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},crossDomain:false,timeout:0,processData:true,cache:true,dataFilter:L};g.ajax=function(c){var f,h,e=g.extend({},c||{}),o=g.Deferred&&g.Deferred();for(J in g.ajaxSettings)void 0===e[J]&&(e[J]=g.ajaxSettings[J]);u(e);e.crossDomain||
(f=N.createElement("a"),f.href=e.url,f.href=f.href,e.crossDomain=v.protocol+"//"+v.host!=f.protocol+"//"+f.host);e.url||(e.url=l.location.toString());(h=e.url.indexOf("#"))>-1&&(e.url=e.url.slice(0,h));Y(e);var r=e.dataType;f=/\?.+=\?/.test(e.url);if(f&&(r="jsonp"),e.cache!==false&&(c&&c.cache===true||"script"!=r&&"jsonp"!=r)||(e.url=G(e.url,"_="+Date.now())),"jsonp"==r)return f||(e.url=G(e.url,e.jsonp?e.jsonp+"=?":e.jsonp===false?"":"callback=?")),g.ajaxJSONP(e,o);var w;c=e.accepts[r];var q={};f=
function(s,K){q[s.toLowerCase()]=[s,K]};var F=/^([\w-]+:)\/\//.test(e.url)?RegExp.$1:l.location.protocol,n=e.xhr();h=n.setRequestHeader;if(o&&o.promise(n),e.crossDomain||f("X-Requested-With","XMLHttpRequest"),f("Accept",c||"*/*"),(c=e.mimeType||c)&&(c.indexOf(",")>-1&&(c=c.split(",",2)[0]),n.overrideMimeType&&n.overrideMimeType(c)),(e.contentType||e.contentType!==false&&e.data&&"GET"!=e.type.toUpperCase())&&f("Content-Type",e.contentType||"application/x-www-form-urlencoded"),e.headers)for(H in e.headers)f(H,
e.headers[H]);if(n.setRequestHeader=f,n.onreadystatechange=function(){if(4==n.readyState){n.onreadystatechange=L;clearTimeout(w);var s,K=false;if(n.status>=200&&n.status<300||304==n.status||0==n.status&&"file:"==F){if(!(s=r)){var y=e.mimeType||n.getResponseHeader("content-type");s=(y&&(y=y.split(";",2)[0]),y&&(y=="text/html"?"html":y=="application/json"?"json":U.test(y)?"script":W.test(y)&&"xml")||"text")}if(r=s,"arraybuffer"==n.responseType||"blob"==n.responseType)s=n.response;else{s=n.responseText;
try{if(e.dataFilter!=L)s=e.dataFilter.call(e.context,s,r);"script"==r?(0,eval)(s):"xml"==r?s=n.responseXML:"json"==r&&(s=D.test(s)?null:g.parseJSON(s))}catch(R){K=R}if(K)return B(K,"parsererror",n,e,o)}E(s,n,e,o)}else B(n.statusText||null,n.status?"error":"abort",n,e,o)}},A(n,e)===false)return n.abort(),B(null,"abort",n,e,o),n;if(n.open(e.type,e.url,"async"in e?e.async:true,e.username,e.password),e.xhrFields)for(H in e.xhrFields)n[H]=e.xhrFields[H];for(H in q)h.apply(n,q[H]);return e.timeout>0&&(w=
setTimeout(function(){n.onreadystatechange=L;n.abort();B(null,"timeout",n,e,o)},e.timeout)),n.send(e.data?e.data:null),n};g.get=function(){return g.ajax(Q.apply(null,arguments))};g.post=function(){var c=Q.apply(null,arguments);return c.type="POST",g.ajax(c)};g.getJSON=function(){var c=Q.apply(null,arguments);return c.dataType="json",g.ajax(c)};g.fn.load=function(c,f,h){if(!this.length)return this;var e,o=this,r=c.split(/\s/);c=Q(c,f,h);var w=c.success;return r.length>1&&(c.url=r[0],e=r[1]),c.success=
function(q){o.html(e?g("<div>").html(q.replace(M,"")).find(e):q);w&&w.apply(o,arguments)},g.ajax(c),this};var j=encodeURIComponent;g.param=function(c,f){var h=[];return h.add=function(e,o){g.isFunction(o)&&(o=o());null==o&&(o="");this.push(j(e)+"="+j(o))},S(h,c,f),h.join("&").replace(/%20/g,"+")}}(p),function(g){g.fn.serializeArray=function(){var m,u,A=[],E=function(B){return B.forEach?B.forEach(E):void A.push({name:m,value:B})};return this[0]&&g.each(this[0].elements,function(B,C){u=C.type;(m=C.name)&&
"fieldset"!=C.nodeName.toLowerCase()&&!C.disabled&&"submit"!=u&&"reset"!=u&&"button"!=u&&"file"!=u&&("radio"!=u&&"checkbox"!=u||C.checked)&&E(g(C).val())}),A};g.fn.serialize=function(){var m=[];return this.serializeArray().forEach(function(u){m.push(encodeURIComponent(u.name)+"="+encodeURIComponent(u.value))}),m.join("&")};g.fn.submit=function(m){if(0 in arguments)this.bind("submit",m);else if(this.length){var u=g.Event("submit");this.eq(0).trigger(u);u.isDefaultPrevented()||this.get(0).submit()}return this}}(p),
function(){try{getComputedStyle(void 0)}catch(g){var m=getComputedStyle;l.getComputedStyle=function(u,A){try{return m(u,A)}catch(E){return null}}}}(),p});
