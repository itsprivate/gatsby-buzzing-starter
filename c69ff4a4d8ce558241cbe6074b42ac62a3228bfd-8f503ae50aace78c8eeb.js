(self.webpackChunkexample=self.webpackChunkexample||[]).push([[986],{6479:function(t,e,n){var r=n(7316);t.exports=function(t,e){if(null==t)return{};var n,o,a=r(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a},t.exports.default=t.exports,t.exports.__esModule=!0},4070:function(t){"use strict";function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function n(t,e){for(var n,r="",o=0,a=-1,i=0,l=0;l<=t.length;++l){if(l<t.length)n=t.charCodeAt(l);else{if(47===n)break;n=47}if(47===n){if(a===l-1||1===i);else if(a!==l-1&&2===i){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var u=r.lastIndexOf("/");if(u!==r.length-1){-1===u?(r="",o=0):o=(r=r.slice(0,u)).length-1-r.lastIndexOf("/"),a=l,i=0;continue}}else if(2===r.length||1===r.length){r="",o=0,a=l,i=0;continue}e&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+t.slice(a+1,l):r=t.slice(a+1,l),o=l-a-1;a=l,i=0}else 46===n&&-1!==i?++i:i=-1}return r}var r={resolve:function(){for(var t,r="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i;a>=0?i=arguments[a]:(void 0===t&&(t=process.cwd()),i=t),e(i),0!==i.length&&(r=i+"/"+r,o=47===i.charCodeAt(0))}return r=n(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(t){if(e(t),0===t.length)return".";var r=47===t.charCodeAt(0),o=47===t.charCodeAt(t.length-1);return 0!==(t=n(t,!r)).length||r||(t="."),t.length>0&&o&&(t+="/"),r?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,n=0;n<arguments.length;++n){var o=arguments[n];e(o),o.length>0&&(void 0===t?t=o:t+="/"+o)}return void 0===t?".":r.normalize(t)},relative:function(t,n){if(e(t),e(n),t===n)return"";if((t=r.resolve(t))===(n=r.resolve(n)))return"";for(var o=1;o<t.length&&47===t.charCodeAt(o);++o);for(var a=t.length,i=a-o,l=1;l<n.length&&47===n.charCodeAt(l);++l);for(var u=n.length-l,c=i<u?i:u,s=-1,f=0;f<=c;++f){if(f===c){if(u>c){if(47===n.charCodeAt(l+f))return n.slice(l+f+1);if(0===f)return n.slice(l+f)}else i>c&&(47===t.charCodeAt(o+f)?s=f:0===f&&(s=0));break}var p=t.charCodeAt(o+f);if(p!==n.charCodeAt(l+f))break;47===p&&(s=f)}var d="";for(f=o+s+1;f<=a;++f)f!==a&&47!==t.charCodeAt(f)||(0===d.length?d+="..":d+="/..");return d.length>0?d+n.slice(l+s):(l+=s,47===n.charCodeAt(l)&&++l,n.slice(l))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return".";for(var n=t.charCodeAt(0),r=47===n,o=-1,a=!0,i=t.length-1;i>=1;--i)if(47===(n=t.charCodeAt(i))){if(!a){o=i;break}}else a=!1;return-1===o?r?"/":".":r&&1===o?"//":t.slice(0,o)},basename:function(t,n){if(void 0!==n&&"string"!=typeof n)throw new TypeError('"ext" argument must be a string');e(t);var r,o=0,a=-1,i=!0;if(void 0!==n&&n.length>0&&n.length<=t.length){if(n.length===t.length&&n===t)return"";var l=n.length-1,u=-1;for(r=t.length-1;r>=0;--r){var c=t.charCodeAt(r);if(47===c){if(!i){o=r+1;break}}else-1===u&&(i=!1,u=r+1),l>=0&&(c===n.charCodeAt(l)?-1==--l&&(a=r):(l=-1,a=u))}return o===a?a=u:-1===a&&(a=t.length),t.slice(o,a)}for(r=t.length-1;r>=0;--r)if(47===t.charCodeAt(r)){if(!i){o=r+1;break}}else-1===a&&(i=!1,a=r+1);return-1===a?"":t.slice(o,a)},extname:function(t){e(t);for(var n=-1,r=0,o=-1,a=!0,i=0,l=t.length-1;l>=0;--l){var u=t.charCodeAt(l);if(47!==u)-1===o&&(a=!1,o=l+1),46===u?-1===n?n=l:1!==i&&(i=1):-1!==n&&(i=-1);else if(!a){r=l+1;break}}return-1===n||-1===o||0===i||1===i&&n===o-1&&n===r+1?"":t.slice(n,o)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var n=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return n?n===e.root?n+r:n+t+r:r}("/",t)},parse:function(t){e(t);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return n;var r,o=t.charCodeAt(0),a=47===o;a?(n.root="/",r=1):r=0;for(var i=-1,l=0,u=-1,c=!0,s=t.length-1,f=0;s>=r;--s)if(47!==(o=t.charCodeAt(s)))-1===u&&(c=!1,u=s+1),46===o?-1===i?i=s:1!==f&&(f=1):-1!==i&&(f=-1);else if(!c){l=s+1;break}return-1===i||-1===u||0===f||1===f&&i===u-1&&i===l+1?-1!==u&&(n.base=n.name=0===l&&a?t.slice(1,u):t.slice(l,u)):(0===l&&a?(n.name=t.slice(1,i),n.base=t.slice(1,u)):(n.name=t.slice(l,i),n.base=t.slice(l,u)),n.ext=t.slice(i,u)),l>0?n.dir=t.slice(0,l-1):a&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,t.exports=r},3048:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(7294),i=(r=a)&&r.__esModule?r:{default:r};function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=function(t){function e(){return l(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"render",value:function(){return i.default.createElement("div",{className:"adsbybaidu"},"TODO")}}]),e}(i.default.Component);e.default=c},7388:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=i(n(7294)),a=i(n(5697));function i(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var c=function(t){function e(){return l(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){window&&(window.adsbygoogle=window.adsbygoogle||[]).push({})}},{key:"render",value:function(){return o.default.createElement("ins",{className:this.props.className+" adsbygoogle",style:this.props.style,"data-ad-client":this.props.client,"data-ad-slot":this.props.slot,"data-ad-layout":this.props.layout,"data-ad-layout-key":this.props.layoutKey,"data-ad-format":this.props.format,"data-full-width-responsive":this.props.responsive})}}]),e}(o.default.Component);e.default=c,c.propTypes={className:a.default.string,style:a.default.object,client:a.default.string.isRequired,slot:a.default.string.isRequired,layout:a.default.string,layoutKey:a.default.string,format:a.default.string,responsive:a.default.string},c.defaultProps={className:"",style:{display:"block"},format:"auto",layout:"",layoutKey:"",responsive:"false"}},3911:function(t,e,n){"use strict";var r=a(n(7388)),o=a(n(3048));function a(t){return t&&t.__esModule?t:{default:t}}var i={Google:r.default,Baidu:o.default};e.Z=i},8730:function(t,e,n){"use strict";n.d(e,{c:function(){return U}});var r=n(6479),o=n.n(r),a=n(8),i=n.n(a),l=n(9713),u=n.n(l),c=n(7294),s=n(8262),f=n.n(s),p=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function d(t){var e={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=t.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(e.name=n[1],(f()[n[1]]||"/"===t.charAt(t.length-2))&&(e.voidElement=!0),e.name.startsWith("!--"))){var r=t.indexOf("--\x3e");return{type:"comment",comment:-1!==r?t.slice(4,r):""}}for(var o=new RegExp(p),a=null;null!==(a=o.exec(t));)if(a[0].trim())if(a[1]){var i=a[1].trim(),l=[i,""];i.indexOf("=")>-1&&(l=i.split("=")),e.attrs[l[0]]=l[1],o.lastIndex--}else a[2]&&(e.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return e}var h=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,g=/^\s*$/,v=Object.create(null);function m(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(t){var e=[];for(var n in t)e.push(n+'="'+t[n]+'"');return e.length?" "+e.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(m,"")+"</"+e.name+">";case"comment":return t+"\x3c!--"+e.comment+"--\x3e"}}var y={parse:function(t,e){e||(e={}),e.components||(e.components=v);var n,r=[],o=[],a=-1,i=!1;if(0!==t.indexOf("<")){var l=t.indexOf("<");r.push({type:"text",content:-1===l?t:t.substring(0,l)})}return t.replace(h,(function(l,u){if(i){if(l!=="</"+n.name+">")return;i=!1}var c,s="/"!==l.charAt(1),f=l.startsWith("\x3c!--"),p=u+l.length,h=t.charAt(p);if(f){var v=d(l);return a<0?(r.push(v),r):((c=o[a]).children.push(v),r)}if(s&&(a++,"tag"===(n=d(l)).type&&e.components[n.name]&&(n.type="component",i=!0),n.voidElement||i||!h||"<"===h||n.children.push({type:"text",content:t.slice(p,t.indexOf("<",p))}),0===a&&r.push(n),(c=o[a-1])&&c.children.push(n),o[a]=n),(!s||n.voidElement)&&(a>-1&&(n.voidElement||n.name===l.slice(2,-1))&&(a--,n=-1===a?r:o[a]),!i&&"<"!==h&&h)){c=-1===a?r:o[a].children;var m=t.indexOf("<",p),y=t.slice(p,-1===m?void 0:m);g.test(y)&&(y=" "),(m>-1&&a+c.length>=0||" "!==y)&&c.push({type:"text",content:y})}})),r},stringify:function(t){return t.reduce((function(t,e){return t+m("",e)}),"")}},b=n(1322);function x(){if(console&&console.warn){for(var t,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(t=console).warn.apply(t,n)}}var Z={};function w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];"string"==typeof e[0]&&Z[e[0]]||("string"==typeof e[0]&&(Z[e[0]]=new Date),x.apply(void 0,e))}var O=["format"],j=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){u()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e){if(!t)return!1;var n=t.props?t.props.children:t.children;return e?n.length>0:!!n}function _(t){return t?t&&t.children?t.children:t.props&&t.props.children:[]}function P(t){return Array.isArray(t)?t:[t]}function C(t,e){if(!t)return"";var n="",r=P(t),a=e.transKeepBasicHtmlNodesFor||[];return r.forEach((function(t,r){if("string"==typeof t)n+="".concat(t);else if(c.isValidElement(t)){var l=Object.keys(t.props).length,u=a.indexOf(t.type)>-1,s=t.props.children;if(!s&&u&&0===l)n+="<".concat(t.type,"/>");else if(s||u&&0===l)if(t.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(u&&1===l&&"string"==typeof s)n+="<".concat(t.type,">").concat(s,"</").concat(t.type,">");else{var f=C(s,e);n+="<".concat(r,">").concat(f,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===t)x("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===i()(t)){var p=t.format,d=o()(t,O),h=Object.keys(d);if(1===h.length){var g=p?"".concat(h[0],", ").concat(p):h[0];n+="{{".concat(g,"}}")}else x("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",t)}else x("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",t)})),n}function z(t,e,n,r,o){if(""===e)return[];var a=r.transKeepBasicHtmlNodesFor||[],l=e&&new RegExp(a.join("|")).test(e);if(!t&&!l)return[e];var u={};!function t(e){P(e).forEach((function(e){"string"!=typeof e&&(A(e)?t(_(e)):"object"!==i()(e)||c.isValidElement(e)||Object.assign(u,e))}))}(t);var s=n.services.interpolator.interpolate(e,E(E({},u),o),n.language),f=y.parse("<0>".concat(s,"</0>"));function p(t,e,n){var r=_(t),o=h(r,e.children,n);return function(t){return"[object Array]"===Object.prototype.toString.call(t)&&t.every((function(t){return c.isValidElement(t)}))}(r)&&0===o.length?r:o}function d(t,e,n,r,o){t.dummy&&(t.children=e),n.push(c.cloneElement(t,E(E({},t.props),{},{key:r}),o?void 0:e))}function h(e,n,o){var u=P(e);return P(n).reduce((function(e,n,s){var f,g,v,m=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var y=u[parseInt(n.name,10)];!y&&1===o.length&&o[0][n.name]&&(y=o[0][n.name]),y||(y={});var b=0!==Object.keys(n.attrs).length?(f={props:n.attrs},(v=E({},g=y)).props=Object.assign(f.props,g.props),v):y,x=c.isValidElement(b),Z=x&&A(n,!0)&&!n.voidElement,w=l&&"object"===i()(b)&&b.dummy&&!x,O="object"===i()(t)&&null!==t&&Object.hasOwnProperty.call(t,n.name);if("string"==typeof b)e.push(b);else if(A(b)||Z){d(b,p(b,n,o),e,s)}else if(w){var j=h(u,n.children,o);e.push(c.cloneElement(b,E(E({},b.props),{},{key:s}),j))}else if(Number.isNaN(parseFloat(n.name))){if(O)d(b,p(b,n,o),e,s,n.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)e.push(c.createElement(n.name,{key:"".concat(n.name,"-").concat(s)}));else{var k=h(u,n.children,o);e.push(c.createElement(n.name,{key:"".concat(n.name,"-").concat(s)},k))}else if(n.voidElement)e.push("<".concat(n.name," />"));else{var _=h(u,n.children,o);e.push("<".concat(n.name,">").concat(_,"</").concat(n.name,">"))}}else if("object"!==i()(b)||x)1===n.children.length&&m?e.push(c.cloneElement(b,E(E({},b.props),{},{key:s}),m)):e.push(c.cloneElement(b,E(E({},b.props),{},{key:s})));else{var P=n.children[0]?m:null;P&&e.push(P)}}else if("text"===n.type){var C=r.transWrapTextNodes;C?e.push(c.createElement(C,{key:"".concat(n.name,"-").concat(s)},n.content)):e.push(n.content)}return e}),[])}return _(h([{dummy:!0,children:t}],f,P(t||[]))[0])}function U(t){var e=t.children,n=t.count,r=t.parent,a=t.i18nKey,i=t.tOptions,l=void 0===i?{}:i,u=t.values,s=t.defaults,f=t.components,p=t.ns,d=t.i18n,h=t.t,g=o()(t,j),v=(0,c.useContext)(b.OO)||{},m=v.i18n,y=v.defaultNS,x=d||m||(0,b.nI)();if(!x)return w("You will need to pass in an i18next instance by using i18nextReactModule"),e;var Z=h||x.t.bind(x)||function(t){return t},O=E(E({},(0,b.JP)()),x.options&&x.options.react),k=p||Z.ns||y||x.options&&x.options.defaultNS;k="string"==typeof k?[k]:k||["translation"];var A=s||C(e,O)||O.transEmptyNodeValue||a,_=O.hashTransKey,P=a||(_?_(A):A),U=u?l.interpolation:{interpolation:E(E({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},S=E(E(E(E({},l),{},{count:n},u),U),{},{defaultValue:A,ns:k}),T=z(f||e,P?Z(P,S):A,x,O,S),M=void 0!==r?r:O.defaultTransParent;return M?c.createElement(M,g,T):T}},977:function(t,e,n){"use strict";n.d(e,{tZ:function(){return r}});var r=n(5512).tZ},413:function(t,e,n){"use strict";n.d(e,{xu:function(){return y},kC:function(){return b},rj:function(){return O},rU:function(){return j},OL:function(){return S},Ph:function(){return U},xv:function(){return k}});var r=n(1253),o=n(7329),a=n(9114),i=n(6994),l=n(3631),u=n(5484),c=n(9526),s=n(7294),f=n(3431),p=["width","columns","gap","repeat"],d=["size"],h=["arrow"];var g=[].concat((0,o.Z)(u.ZP.propNames),(0,o.Z)(c.Z.propNames)),v=function(t){return g.includes(t)},m=(0,l.MS)(g),y=(0,a.Z)("div",{shouldForwardProp:m})({boxSizing:"border-box",margin:0,minWidth:0},(function(t){return(0,i.iv)(t.__css)(t.theme)}),(function(t){var e=t.theme,n=t.variant,r=t.__themeKey,o=void 0===r?"variants":r;return(0,i.iv)((0,i.U2)(e,o+"."+n,(0,i.U2)(e,n)))}),u.ZP,c.Z,(function(t){return(0,i.iv)(t.sx)(t.theme)}),(function(t){return t.css}));y.displayName="Box";var b=(0,a.Z)(y)({display:"flex"});function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}b.displayName="Flex";var Z=function t(e,n){return Array.isArray(e)?e.map((function(e){return t(e,n)})):!!e&&"repeat(auto-".concat(n,", minmax(").concat("number"==typeof(r=e)?r+"px":r,", 1fr))");var r},w=function t(e){return Array.isArray(e)?e.map(t):!!e&&("number"==typeof e?"repeat(".concat(e,", 1fr)"):e)},O=s.forwardRef((function(t,e){var n=t.width,o=t.columns,a=t.gap,i=void 0===a?3:a,l=t.repeat,u=void 0===l?"fit":l,c=(0,r.Z)(t,p),f=n?Z(n,u):w(o);return s.createElement(y,x({ref:e},c,{__themeKey:"grids",__css:{display:"grid",gridGap:i,gridTemplateColumns:f}}))})),j=s.forwardRef((function(t,e){return s.createElement(y,x({ref:e,as:"a",variant:"styles.a"},t,{__themeKey:"links"}))})),k=s.forwardRef((function(t,e){return s.createElement(y,x({as:"span",ref:e,variant:"default"},t,{__themeKey:"text"}))})),E=function(t){var e=t.size,n=void 0===e?24:e,o=(0,r.Z)(t,d);return s.createElement(y,x({as:"svg",xmlns:"http://www.w3.org/2000/svg",width:n+"",height:n+"",viewBox:"0 0 24 24",fill:"currentcolor"},o))};E.displayName="SVG";var A=function(t){return function(e){var n={};for(var r in e)t(r||"")&&(n[r]=e[r]);return n}},_=/^m[trblxy]?$/,P=A((function(t){return _.test(t)})),C=A((function(t){return!_.test(t)})),z=function(t){return s.createElement(E,t,s.createElement("path",{d:"M7 10l5 5 5-5z"}))},U=s.forwardRef((function(t,e){var n=t.arrow,o=(0,r.Z)(t,h);return s.createElement(y,x({},P(o),{sx:{display:"flex"}}),s.createElement(y,x({ref:e,as:"select",variant:"select"},C(o),{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",backgroundColor:function(t){return(0,i.U2)(t,"colors.background",null)}}})),n||s.createElement(z,{sx:{ml:-28,alignSelf:"center",pointerEvents:"none"}}))})),S=((0,f.F4)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}}),A(v),A((function(t){return!v(t)})),s.forwardRef((function(t,e){return s.createElement(j,x({ref:e,variant:"nav"},t,{__css:{color:"inherit",textDecoration:"none",fontWeight:"bold",display:"inline-block","&:hover, &:focus, &.active":{color:"primary"}}}))})))},8594:function(t,e,n){var r,o,a;a=function(){function t(t){var e=[];if(0===t.length)return"";if("string"!=typeof t[0])throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var n=t.shift();t[0]=n+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<t.length;r++){var o=t[r];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<t.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),e.push(o))}var a=e.join("/"),i=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return t("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},t.exports?t.exports=a():void 0===(o="function"==typeof(r=a)?r.call(e,n,e,t):r)||(t.exports=o)},8262:function(t){t.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},8780:function(t,e,n){"use strict";n.d(e,{Z:function(){return M}});var r=n(977),o=n(1679),a=n(5444),i=n(3401),l=n(9935),u=n(2877),c=n(7294),s=n(8730),f=n(413),p=n(6994),d=n(5302),h=n(3431);function g(){return(0,h.tZ)(c.Fragment,null,(0,h.tZ)(s.c,null,"See what's buzzing on"," ",(0,h.tZ)(f.rU,{href:"https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB",target:"_blank",rel:"noopener noreferrer",sx:(0,p.iv)({lineHeight:2})},"Google World News")," ","in your native language on"," ",(0,h.tZ)(f.rU,{as:d.UE,to:"/"},"news.buzzing.cc")))}var v=function(t){var e=t.basePath,n=t.siteMetadata;return e=e||"/",(0,i.tZ)(l.kC,{"data-test":"bio",sx:{mb:4,alignItems:"center"}},(0,i.tZ)(l.rU,{sx:{minWidth:"56px",pr:2,pt:1},as:a.Link,to:(0,a.withPrefix)(e)},n.iconUrl?(0,i.tZ)(l.Ee,{src:n.iconUrl,alt:"logo",sx:{mb:0,borderRadius:"full",width:"48px",height:"48px"}}):(0,i.tZ)("div",{sx:{mb:0,width:"48px",minWidth:"48px",borderRadius:"full"},role:"presentation"})),(0,i.tZ)(u.Ge.div,null,(0,i.tZ)(g,null)))},m=n(1804),y=n.n(m);function b(t){var e=t.children,n=t.to,o=t.count;return(0,r.tZ)(f.rU,{sx:{bg:"gray.1",mr:3,mb:2,color:"textMuted",px:2,py:1,":hover":{bg:"gray.2"}},as:d.UE,to:n},(0,r.tZ)(s.c,{ns:"translation-tag"},e),o&&"("+o+")")}var x=n(4070);function Z(){return(0,r.tZ)(o.Ge.h4,null,(0,r.tZ)(s.c,null,"Tags"))}var w=function(t){var e=t.basePath,n=t.group;return(0,i.tZ)(l.xu,{"data-test":"tags-container"},(0,i.tZ)(Z,null),(0,i.tZ)(l.kC,{sx:{mb:3,flexWrap:"wrap"}},n.map((function(t,n){var r=t.fieldValue,o=t.totalCount;return(0,i.tZ)(b,{key:"tag-list-"+n,count:o,to:(0,a.withPrefix)((0,x.join)(e,"/tags/"+y()(r)))},r)}))))},O=n(2122);function j(){return(0,r.tZ)(o.Ge.h4,null,(0,r.tZ)(s.c,null,"Links"))}var k=function(t){var e=t.links;return(0,i.tZ)(l.xu,{"data-test":"links-container"},(0,i.tZ)(j,null),(0,i.tZ)(u.Ge.ul,null,e?e.map((function(t,e){var n={};return t.external&&(n.target="_blank",n.rel="noopener noreferrer"),(0,i.tZ)("li",{key:"links-"+e},(0,i.tZ)(l.rU,(0,O.Z)({},n,{href:t.url}),t.name))})):null))},E=n(9756),A=n(6473),_=["href","language"],P=function(t){var e=t.href,n=t.language,r=(0,E.Z)(t,_),o=(0,d.ql)(),a=o.defaultLang,i=o.locale,l=n||i;return(0,h.tZ)(f.rU,(0,O.Z)({},r,{href:(0,A.Mg)(a,l,e)}))},C=function(t){var e=t.pageContext,n=(e.locale,e.basePath,(0,a.useStaticQuery)("3025052997").site.siteMetadata.subscriptions);return(0,r.tZ)(f.xu,{"data-test":"subscription-container"},(0,r.tZ)(o.Ge.h4,{"data-test":"subscription-title"},(0,r.tZ)(s.c,null,"Subscription")),(0,r.tZ)(o.Ge.p,{sx:{color:"textMuted",fontSize:1}},(0,r.tZ)(s.c,null,"Subscribe to us in the following ways:")),(0,r.tZ)(o.Ge.ul,null,(0,r.tZ)("li",null,(0,r.tZ)(f.rU,{target:"_blank",rel:"noopener noreferrer",href:"https://t.me/joinchat/GVK5UiDwPUAwMjkx"},"Telegram Group")),n?n.map((function(t,e){var n={};return t.external?(n.target="_blank",n.rel="noopener noreferrer",(0,r.tZ)("li",{key:"links-"+e},(0,r.tZ)(f.rU,(0,O.Z)({},n,{href:t.url}),t.name))):(0,r.tZ)("li",{key:"links-"+e},(0,r.tZ)(f.rU,(0,O.Z)({as:P},n,{href:t.url}),t.name))})):null))},z=function(){return(0,r.tZ)(f.xu,{"data-test":"subscription-container"},(0,r.tZ)(o.Ge.h4,{"data-test":"subscription-title"},(0,r.tZ)(s.c,null,"Who is behind this?")),(0,r.tZ)(o.Ge.ul,null,(0,r.tZ)("li",null,(0,r.tZ)(f.rU,{href:"https://twitter.com/theowenyoung"},"Owen Young"))))},U=n(3911),S=function(){return(0,r.tZ)(f.xu,{"data-test":"ad-container"},(0,r.tZ)(U.Z.Google,{client:"ca-pub-5211209136530011",slot:"9469977903",style:{display:"block"},format:"auto",responsive:"true"}))},T=function(){return(0,r.tZ)(f.xu,{"data-test":"subscription-container"},(0,r.tZ)(o.Ge.h4,{"data-test":"subscription-title"},(0,r.tZ)(s.c,null,"Archive")),(0,r.tZ)(o.Ge.ul,null,(0,r.tZ)("li",null,(0,r.tZ)(f.rU,{href:"/archive/"},"Archive"))))},M=function(t){var e=t.data,n=t.pageContext,a=t.siteMetadata,i=n.basePath,l=e.tagsGroup.group,u=a.social;return(0,r.tZ)(o.Ge.div,{"data-test":"aside",as:"aside",sx:{height:[null,null,"full"]}},(0,r.tZ)(o.Ge.div,{sx:{top:[null,null,4],position:[null,null,"sticky"],overflowY:[null,null,"auto"],height:[null,null,"calc(100vh - 32px)"],overscrollBehavior:[null,null,"contain"],px:[null,null,4]}},(0,r.tZ)(v,{siteMetadata:a,basePath:i}),(0,r.tZ)(C,{pageContext:n}),(0,r.tZ)(S,null),(0,r.tZ)(T,{pageContext:n}),(0,r.tZ)(k,{siteMetadata:a,links:u}),(0,r.tZ)(z,{pageContext:n}),(0,r.tZ)(w,{basePath:i,group:l})))}},4128:function(t,e,n){"use strict";n(7294);var r=n(6994),o=n(413),a=n(3431);e.Z=function(){return(0,a.tZ)("footer",{css:(0,r.iv)({mt:4,pt:3,textAlign:"center"})},"© ",(new Date).getFullYear(),(0,a.tZ)(o.rU,{sx:{ml:4,mr:2},"data-test":"main-site-link",href:"https://www.buzzing.cc"},"Buzzing.cc"),(0,a.tZ)(o.rU,{sx:{mx:2,color:"textMuted"},"data-test":"privacy-link",href:"https://www.buzzing.cc/privacy"},"Privacy"),(0,a.tZ)(o.rU,{sx:{mx:2,color:"textMuted"},"data-test":"terms-link",href:"https://www.buzzing.cc/terms"},"Terms of Service")," ")}},8284:function(t,e,n){"use strict";n.d(e,{Z:function(){return v}});n(7294);var r=n(6156),o=n(5414),a=n(5444),i=n(5302),l=n(8594),u=n.n(l),c=n(6473),s=n(3431);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t){var e=t.description,n=t.lang,r=t.meta,l=t.title,f=t.authorImage,d=t.imageSource,h=t.imageAlt,g=t.location,v=t.pageType,m=t.item,y=t.siteMetadata,b=(0,i.ql)().locale,x=(0,c.t)("description",y.localize,y.description,b),Z=e||x,w=y.telegram,O=(0,c.t)("author",y.localize,y.author,b),j=y.siteUrl,k=(0,c.t)("keywords",y.localize,y.keywords,b),E=f||y.iconUrl,A=function(t){return t.match("(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]")?t:u()(j,(0,a.withPrefix)(t))},_=d?A(d):y.defaultSocialImageUrl,P=h||Z,C=(0,c.t)("title",y.localize,y.title,b),z=l+" - "+C,U={"@type":"Person",name:O},S={"@type":"ImageObject",url:E?A(E):null,"@id":u()(j,(0,a.withPrefix)("#logo")),caption:C+" Logo"},T=[{"@context":"http://schema.org","@type":"WebSite","@id":u()(j,(0,a.withPrefix)("#website")),url:(0,a.withPrefix)(j),name:C,image:S}];if("detail"===v){var M=u()(j,g.pathname),N=new Date(m.date);T.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":M,name:l,image:_}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:M,name:l,headline:l,image:{"@type":"ImageObject",url:_},author:U,publisher:p(p({},U),{},{"@type":"Organization",logo:S}),datePublished:N,description:Z})}return(0,s.tZ)(o.Z,{htmlAttributes:{lang:n||b},title:z,meta:[{name:"description",content:Z},{name:"keywords",content:k.join(",")},{property:"og:title",content:l},{property:"og:description",content:Z},{property:"og:type",content:"website"},{name:"twitter:creator",content:O},{name:"twitter:title",content:l},{name:"twitter:description",content:Z}].concat(_?[{name:"og:image",content:_},{name:"og:image:alt",content:P},{name:"twitter:image",content:_},{name:"twitter:image:alt",content:P},{name:"twitter:card",content:"summary_large_image"}]:[{name:"twitter:card",content:"summary"}]).concat(w?[{name:"telegram:channel",content:w}]:[]).concat(r)},(0,s.tZ)("script",{type:"application/ld+json"},JSON.stringify(T)))}d.defaultProps={meta:[]};var h=d,g=n(7031),v=function(t){var e=t.pageContext,n=t.siteMetadata,r=t.image,o=e.pageType,a=e.tag,i=e.currentPage,l=e.date,u=i,f=(0,c.t)("description",n.localize,n.description,e.locale),p="",d=(0,c.t)("title",n.localize,n.title,e.locale);if("tag"===o){var v=g.Z.t("translation-tag__::::__"+a);f=v,p=g.Z.t("See all posts about {{tag}} at {{siteTitle}}",{tag:v,siteTitle:d})}else if("issues"===o)f=g.Z.t("Weekly Selection"),p=g.Z.t("{{siteTitle}} selects the most popular content for you each week",{siteTitle:d});else if("issue"===o){var m=" · "+l;f=g.Z.t("Weekly Selection")+"-"+g.Z.t("Issue {{issueNumber}}","Issue "+u,{issueNumber:u})+m+" - "+d,p=g.Z.t("Click to view Issue {{issueNumber}} of {{siteTitle}}",{siteTitle:d,issueNumber:u})}return(0,s.tZ)(h,{title:f,description:p,imageSource:"home"===o?null:r,siteMetadata:n})}},3181:function(t,e,n){"use strict";var r=n(977),o=n(1679),a=n(413),i=n(5444),l=n(5302),u=n(8730),c=n(4070),s=n.n(c);e.Z=function(t){var e=t.pageContext,n=e.pageType,c=e.tag,f=e.basePath,p=e.currentPage,d=e.date,h=e.title,g=p;if("tag"===n)return(0,r.tZ)(o.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},(0,r.tZ)(a.rU,{sx:{color:"text"},as:l.UE,to:(0,i.withPrefix)(f)},(0,r.tZ)(u.c,null,"All posts")),(0,r.tZ)("span",{sx:{color:"textMuted"}}," / "),(0,r.tZ)("span",{sx:{color:"textMuted"}},(0,r.tZ)(u.c,{ns:"translation-tag"},c)),p>1&&(0,r.tZ)("span",{sx:{color:"textMuted"}}," / "),p>1&&(0,r.tZ)("span",{sx:{color:"textMuted"}},(0,r.tZ)(u.c,{page:p},"page ",{page:g})));var v="Latest",m=f;"issues"===n||"issue"===n?(v="Weekly Selection",m=s().join(f,"issues")):"archives"!==n&&"archive"!==n||(v="Archive",m=s().join(f,"archive"));var y=g;return(0,r.tZ)(o.Ge.h4,{"data-test":"list-title",sx:{fontWeight:"normal",mb:"1.5rem"}},p>1?(0,r.tZ)(a.rU,{sx:{color:"text"},as:l.UE,to:(0,i.withPrefix)(m)},(0,r.tZ)(u.c,null,v)):(0,r.tZ)(u.c,null,v),(p>1||"issue"===n||"archive"===n)&&(0,r.tZ)("span",{sx:{color:"textMuted"}}," / "),(p>1||"issue"===n||"archive"===n)&&(0,r.tZ)("span",{sx:{color:"textMuted"}},"issue"===n?(0,r.tZ)(u.c,{page:p},"Issue ",{issueNumber:y}):"archive"===n?(0,r.tZ)("span",null,h):(0,r.tZ)(u.c,{page:p},"page ",{page:g})),"issue"===n?(0,r.tZ)("span",{sx:{color:"textMuted"}}," · "+d):null)}},6473:function(t,e,n){"use strict";n.d(e,{t:function(){return r.t},YQ:function(){return r.YQ},L9:function(){return r.L9},nZ:function(){return r.nZ},Mg:function(){return o}});var r=n(7260);function o(t,e,n){return function(t,e){return t===e}(e,t)||n.split("/")[1]===e?n:"/"+e+n}},7260:function(t,e){var n=function(t,e,n,r){void 0===r&&(r="zh");var o=n;if(e&&Array.isArray(e))for(var a=0;a<e.length;a++){var i=e[a];if(r===i.locale&&i[t])return o=i[t]}return o};e.t=n;e.YQ=function(t,e){void 0===e&&(e="zh");var r=t.title,o=[];t.parent&&t.parent.localize&&(o=t.parent.localize);var a=t.provider;if("Product Hunt"===a){var i=r.split(" - "),l=i[0],u=i[1];r=l+" - "+n("tagline",o,u,e)}else if("Twitter"===a){var c=t.sharedContent,s="full_text";c&&c.title&&r.startsWith("RT @")&&(s="retweeted_status_full_text",r=c.title),r=n(s,o,r,e)}else r=n("title",o,r,e);return r};e.nZ=function(t,e){void 0===e&&(e="zh");var r=t.sharedContent;if(!r||!r.title)return null;var o=r.title,a=[];return t.parent&&t.parent.localize&&(a=t.parent.localize),o=n("quoted_status_full_text",a,o,e)};e.L9=function(t,e){void 0===e&&(e="zh");var r=t.excerpt,o=[];t.parent&&t.parent.localize&&(o=t.parent.localize);var a=t.provider;return r=n("Product Hunt"===a||"Youtube"===a?"description":"Reddit"===a?"the_new_excerpt":"excerpt",o,r,e)}},5302:function(t,e,n){"use strict";n.d(e,{UE:function(){return s},ql:function(){return l.q}});n(6752),n(7294);var r=n(2122),o=n(9756),a=n(5444),i=n(3346),l=n(6410),u=n(3431),c=["to","language"],s=function(t){var e=t.to,n=t.language,s=(0,o.Z)(t,c),f=(0,l.q)(),p=f.defaultLang,d=f.prefixDefault,h=f.locale,g=n||h;return(0,u.tZ)(a.Link,(0,r.Z)({},s,{to:(0,i.localizedPath)({defaultLang:p,prefixDefault:d,locale:g,path:e})}))};n(9499)},7391:function(t,e,n){"use strict";n.d(e,{Z:function(){return O}});var r=n(9756),o=(n(7294),n(2877)),a=n(9935),i=n(7825),l=n(3401),u=n(5444),c=n(5302),s=n(977),f=n(1679),p=n(413),d=n(6473),h=function(t){t.children;var e=t.basePath,n=t.pageContext.locale,r=t.siteMetadata;return(0,s.tZ)(f.Ge.h3,{sx:{mb:2,mt:2,mr:[3,4]}},(0,s.tZ)(p.rU,{sx:{color:"text"},as:c.UE,to:(0,u.withPrefix)(e)},(0,d.t)("title",r.localize,r.title,n)))},g=n(2122),v=function(t){var e=t.pageContext.locale,n=t.siteMetadata,r=(0,d.t)("menuLinks",n.localize,n.menuLinks,e);return r?(0,s.tZ)(p.kC,{as:"nav"},r.map((function(t){var e={},n=!1,r=t.url;return t.external&&(e.target="_blank",e.rel="noopener noreferrer",n=!0),!1!==t.prefetch||t.external||(n=!0),(0,s.tZ)(p.OL,(0,g.Z)({as:n?p.OL:c.UE,to:n?void 0:r,href:n?r:void 0,key:r},e),t.name)}))):null},m=n(4070),y=function(t){var e=t.pageContext,n=(0,c.ql)(),r=n.locale,o=n.config,a=n.defaultLang;return(0,s.tZ)(p.kC,null,(0,s.tZ)(p.Ph,{sx:{minWidth:"6.5rem"},value:r,onChange:function(t){var n=t.target.value,r=(0,u.withPrefix)((0,m.join)((n===a?"":"/"+n)+e.originalPath));(0,u.navigate)(r)}},o.map((function(t){return(0,s.tZ)("option",{key:t.code,value:t.code},t.localName)}))))},b=function(t){var e=t.title,n=t.pageType;return(0,l.tZ)("header",{sx:{px:[3,4],mb:4,maxWidth:"6xl",mx:"auto"}},(0,l.tZ)(o.Ge.div,{sx:{pt:3,pb:"detail"===n?2:3,borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:"muted"}},(0,l.tZ)(o.Ge.div,{sx:{display:"flex",alignItems:"baseline",flexWrap:"wrap",justifyContent:"space-between"}},(0,l.tZ)(a.kC,{sx:{alignItems:"baseline",flexWrap:"wrap",flexGrow:1}},(0,l.tZ)(h,t,e),(0,l.tZ)(v,t)),(0,l.tZ)(y,t))))},x=n(5414),Z=n(3431),w=["children"],O=function(t){var e=t.children,n=(0,r.Z)(t,w),l=n.siteMetadata.webfontURL;return(0,Z.tZ)(o.Ge.root,null,(0,Z.tZ)(x.Z,null,(0,Z.tZ)("link",{rel:"stylesheet",href:l})),(0,Z.tZ)(b,n),(0,Z.tZ)(a.xu,{css:(0,i.iv)({maxWidth:["full","6xl"],mx:"auto",px:[3,4],pb:4})},e))}},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},2663:function(t){t.exports=function(t,e,n,r){var o=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}},9029:function(t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},4239:function(t,e,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},8674:function(t){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},531:function(t,e,n){var r=n(2705),o=n(9932),a=n(4332),i=n(3448),l=r?r.prototype:void 0,u=l?l.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},5393:function(t,e,n){var r=n(2663),o=n(3816),a=n(8748),i=RegExp("['’]","g");t.exports=function(t){return function(e){return r(a(o(e).replace(i,"")),t,"")}}},9389:function(t,e,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,l=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(u){}var o=i.call(t);return r&&(e?t[l]=n:delete t[l]),o}},3157:function(t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},2757:function(t){var e="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+o+"]",i="\\d+",l="[\\u2700-\\u27bf]",u="["+n+"]",c="[^\\ud800-\\udfff"+o+i+e+n+r+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+r+"]",d="(?:"+u+"|"+c+")",h="(?:"+p+"|"+c+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",b=y+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",s,f].join("|")+")"+y+m+")*"),x="(?:"+[l,s,f].join("|")+")"+b,Z=RegExp([p+"?"+u+"+"+g+"(?="+[a,p,"$"].join("|")+")",h+"+"+v+"(?="+[a,p+d,"$"].join("|")+")",p+"?"+d+"+"+g,p+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,x].join("|"),"g");t.exports=function(t){return t.match(Z)||[]}},3816:function(t,e,n){var r=n(9389),o=n(9833),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(a,r).replace(i,"")}},4332:function(t){var e=Array.isArray;t.exports=e},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},1804:function(t,e,n){var r=n(5393)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}},8748:function(t,e,n){var r=n(9029),o=n(3157),a=n(9833),i=n(2757);t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?o(t)?i(t):r(t):t.match(e)||[]}}}]);
//# sourceMappingURL=c69ff4a4d8ce558241cbe6074b42ac62a3228bfd-8f503ae50aace78c8eeb.js.map