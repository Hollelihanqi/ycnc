(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5438ea4c"],{"0a12":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-news"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-image",{attrs:{src:t.imgUrl}})],1)],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:23,sm:23,md:20}},[n("div",{staticClass:"c-line-m"},[n("p",[n("span",[t._v("新闻中心")]),n("span",[t._v("/ NEWS CENTER")])])])])],1),n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{xs:22,sm:22,md:19}},t._l(t.dynamicList,(function(e){return n("div",{key:e.id,staticClass:"dynamic"},[n("p",{staticClass:"time-box"},[n("span",[t._v(t._s(e.time2))]),n("span",[t._v(t._s(e.time))])]),n("p",{staticClass:"titlec-box"},[n("span",{staticClass:"t1",on:{click:function(n){return t.handleItemClick(e)}}},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.subTitle))])])])})),0)],1)],1)},i=[],c=(n("4160"),n("fb6a"),n("ac1f"),n("1276"),n("159b"),n("0418")),a=n("fd2d"),o=n("365c"),s={name:"News",data:function(){return{fit:"cover",imgUrl:n("99b8"),newsList:[],dynamicList:[{id:"1",time2:"01",time:"2020-06",title:"【实录】第十二届中国•陕西（洛川）国际苹果博览会新闻发布会",subTitle:"信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，"},{id:"2",time2:"01",time:"2020-06",title:"【实录】第十二届中国•陕西（洛川）国际苹果博览会新闻发布会",subTitle:"信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，"},{id:"3",time2:"29",time:"2020-06",title:"【实录】第十二届中国•陕西（洛川）国际苹果博览会新闻发布会",subTitle:"信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，"},{id:"4",time2:"17",time:"2020-06",title:"【陕西新闻联播】省政府新闻办举行“大力实施乡村振兴战略”系,【实录】第十二届中国•陕西（洛川）国际苹果博览会新闻发布会",subTitle:"信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，信息来源：厅果业处 时间：2019-09-27 15:18:479月27日上午10时30分，"}]}},created:function(){var t=this;Object(o["b"])().then((function(e){if(console.log(e),200===e.data.code){var n=e.data.blogs;n.forEach((function(t){t.source="厅果业处"})),t.newsList=n}}))},components:{Header:c["a"],Footer:a["a"]},methods:{onTab:function(t){this.tabAct=t["key"]},getTime:function(t){var e=t.split(" ")[0];return e.slice(0,7)},getDay:function(t){var e=t.split(" ")[0];return e.slice(e.length-2)},handleItemClick:function(t){this.$router.push({name:"newsDetail",params:{id:t.id}})}}},l=s,u=(n("e9a7"),n("2877")),f=Object(u["a"])(l,r,i,!1,null,"a59c284c",null);e["default"]=f.exports},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),c=n("825a"),a=n("1d80"),o=n("4840"),s=n("8aa5"),l=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),p=[].push,v=Math.min,h=4294967295,g=!d((function(){return!RegExp(h,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),c=void 0===n?h:n>>>0;if(0===c)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,c);var o,s,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,d+"g");while(o=f.call(g,r)){if(s=g.lastIndex,s>v&&(u.push(r.slice(v,o.index)),o.length>1&&o.index<r.length&&p.apply(u,o.slice(1)),l=o[0].length,v=s,u.length>=c))break;g.lastIndex===o.index&&g.lastIndex++}return v===r.length?!l&&g.test("")||u.push(""):u.push(r.slice(v)),u.length>c?u.slice(0,c):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),c=void 0==e?void 0:e[t];return void 0!==c?c.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var f=c(t),d=String(this),p=o(f,RegExp),x=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),m=new p(g?f:"^(?:"+f.source+")",b),y=void 0===i?h:i>>>0;if(0===y)return[];if(0===d.length)return null===u(m,d)?[d]:[];var E=0,S=0,L=[];while(S<d.length){m.lastIndex=g?S:0;var C,R=u(m,g?d:d.slice(S));if(null===R||(C=v(l(m.lastIndex+(g?0:S)),d.length))===E)S=s(d,S,x);else{if(L.push(d.slice(E,S)),L.length===y)return L;for(var T=1;T<=R.length-1;T++)if(L.push(R[T]),L.length===y)return L;S=E=C}}return L.push(d.slice(E)),L}]}),!g)},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"159b":function(t,e,n){var r=n("da84"),i=n("fdbc"),c=n("17c2"),a=n("9112");for(var o in i){var s=r[o],l=s&&s.prototype;if(l&&l.forEach!==c)try{a(l,"forEach",c)}catch(u){l.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,i=n("a640"),c=n("ae40"),a=i("forEach"),o=c("forEach");t.exports=a&&o?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var r=n("d039"),i=n("b622"),c=n("2d00"),a=i("species");t.exports=function(t){return c>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2627:function(t,e,n){},4160:function(t,e,n){"use strict";var r=n("23e7"),i=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),a=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),c=function(t){return function(e,n){var c,a,o=String(i(e)),s=r(n),l=o.length;return s<0||s>=l?t?"":void 0:(c=o.charCodeAt(s),c<55296||c>56319||s+1===l||(a=o.charCodeAt(s+1))<56320||a>57343?t?o.charAt(s):c:t?o.slice(s,s+2):a-56320+(c-55296<<10)+65536)}};t.exports={codeAt:c(!1),charAt:c(!0)}},"65f0":function(t,e,n){var r=n("861d"),i=n("e8b5"),c=n("b622"),a=c("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),c=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?i.f(t,a,c(0,n)):t[a]=n}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),c=RegExp.prototype.exec,a=String.prototype.replace,o=c,s=function(){var t=/a/,e=/b*/g;return c.call(t,"a"),c.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=s||u||l;f&&(o=function(t){var e,n,i,o,f=this,d=l&&f.sticky,p=r.call(f),v=f.source,h=0,g=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,h++),n=new RegExp("^(?:"+v+")",p)),u&&(n=new RegExp("^"+v+"$(?!\\s)",p)),s&&(e=f.lastIndex),i=c.call(d?n:f,g),d?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:s&&i&&(f.lastIndex=f.global?i.index+i[0].length:e),u&&i&&i.length>1&&a.call(i[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i}),t.exports=o},"99b8":function(t,e,n){t.exports=n.p+"img/new.1d6fdd22.jpg"},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae40:function(t,e,n){var r=n("83ab"),i=n("d039"),c=n("5135"),a=Object.defineProperty,o={},s=function(t){throw t};t.exports=function(t,e){if(c(o,t))return o[t];e||(e={});var n=[][t],l=!!c(e,"ACCESSORS")&&e.ACCESSORS,u=c(e,0)?e[0]:s,f=c(e,1)?e[1]:void 0;return o[t]=!!n&&!i((function(){if(l&&!r)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:s}):t[1]=1,n.call(t,u,f)}))}},b727:function(t,e,n){var r=n("0366"),i=n("44ad"),c=n("7b0b"),a=n("50c4"),o=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f;return function(p,v,h,g){for(var x,b,m=c(p),y=i(m),E=r(v,h,3),S=a(y.length),L=0,C=g||o,R=e?C(p,S):n?C(p,0):void 0;S>L;L++)if((d||L in y)&&(x=y[L],b=E(x,L,m),t))if(e)R[L]=b;else if(b)switch(t){case 3:return!0;case 5:return x;case 6:return L;case 2:s.call(R,x)}else if(u)return!1;return f?-1:l||u?u:R}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),c=n("b622"),a=n("9263"),o=n("9112"),s=c("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=c("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var v=c(t),h=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=h&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!g||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var x=/./[v],b=n(v,""[t],(function(t,e,n,r,i){return e.exec===a?h&&!i?{done:!0,value:x.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),m=b[0],y=b[1];r(String.prototype,t,m),r(RegExp.prototype,v,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}f&&o(RegExp.prototype[v],"sham",!0)}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},e9a7:function(t,e,n){"use strict";var r=n("2627"),i=n.n(r);i.a},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),c=n("e8b5"),a=n("23cb"),o=n("50c4"),s=n("fc6a"),l=n("8418"),u=n("b622"),f=n("1dde"),d=n("ae40"),p=f("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),g=[].slice,x=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,e){var n,r,u,f=s(this),d=o(f.length),p=a(t,d),v=a(void 0===e?d:e,d);if(c(f)&&(n=f.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?i(n)&&(n=n[h],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(f,p,v);for(r=new(void 0===n?Array:n)(x(v-p,0)),u=0;p<v;p++,u++)p in f&&l(r,u,f[p]);return r.length=u,r}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-5438ea4c.1827d8a5.js.map