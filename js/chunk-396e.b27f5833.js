(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-396e"],{"008e":function(t,n,e){},"025e":function(t,n,e){"use strict";var c=e("590d"),s=e.n(c);n["default"]=s.a},"0bfb":function(t,n,e){"use strict";var c=e("cb7c");t.exports=function(){var t=c(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"214f":function(t,n,e){"use strict";var c=e("32e9"),s=e("2aba"),o=e("79e5"),i=e("be13"),r=e("2b4c");t.exports=function(t,n,e){var a=r(t),l=e(i,a,""[t]),u=l[0],f=l[1];o(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(s(String.prototype,t,u),c(RegExp.prototype,a,2==n?function(t,n){return f.call(t,this,n)}:function(t){return f.call(t,this)}))}},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},4917:function(t,n,e){e("214f")("match",1,function(t,n,e){return[function(e){"use strict";var c=t(this),s=void 0==e?void 0:e[n];return void 0!==s?s.call(e,c):new RegExp(e)[n](String(c))},e]})},"590d":function(t,n,e){t.exports={content:"doc_content_1YLd6",place:"doc_place_39k15",testImg:"doc_testImg_3Vsz3"}},"6b54":function(t,n,e){"use strict";e("3846");var c=e("cb7c"),s=e("0bfb"),o=e("9e1e"),i="toString",r=/./[i],a=function(t){e("2aba")(RegExp.prototype,i,t,!0)};e("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?a(function(){var t=c(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):r.name!=i&&a(function(){return r.call(this)})},"712f":function(t,n,e){"use strict";var c=e("008e"),s=e.n(c);n["default"]=s.a},"84b4":function(t,n,e){var c=e("5ca1");c(c.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},9913:function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{class:t.$style.content},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.load,expression:"load"}],class:t.$style.place},[e("luck-ten",{attrs:{title:"抽奖"}}),e("el-button",{attrs:{size:"mini"}},[t._v("点")]),e("div",{staticStyle:{height:"3000px",width:"500px"}}),e("el-button",{attrs:{size:"mini"},on:{click:t.top}},[t._v("点我")])],1)])},s=[],o=(e("4917"),e("cadf"),e("551c"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{on:{click:t.cons}},[t._v(t._s(t.title))]),e("el-button",{staticStyle:{margin:"15px"},attrs:{size:"mini"},on:{click:function(n){t.luckDraw(1)}}},[t._v("单抽")]),e("el-button",{staticStyle:{margin:"15px"},attrs:{size:"mini"},on:{click:function(n){t.luckDraw(10)}}},[t._v("十连抽")]),e("br"),e("span",[t._v("抽奖次数: "+t._s(t.frequency))]),e("br"),e("span",[t._v("SSR: "+t._s(t.ssr))]),e("br"),e("span",[t._v("保底SSR: "+t._s(t.bgSsr))]),e("br"),e("span",[t._v("剩余"+t._s(t.BG)+"发保底")])],1)}),i=[],r=(e("84b4"),e("6b54"),{name:"luckTen",props:{title:String},data:function(){return{ssrFlag:!1,srFlag:!1,rFlag:!1,num:"",frequency:0,ssr:0,sr:0,r:0,bgSsr:0,bgSr:0,BG:100}},computed:{},watch:{},mounted:function(){console.log(this.title)},methods:{cons:function(){console.log(this.title)},luckDraw:function(t){try{this.BG<=10&&(this.ssrFlag=!0);var n=parseInt(t);if("number"===typeof n&&"NaN"!==n.toString()){for(var e=[Math.trunc(100*Math.random()),[]],c=e[0],s=e[1],o=0;o<n;o++)if(this.BG--,this.BG>0){var i=Math.trunc(100*Math.random());i===c?(s.push("SSR"),this.ssr++,this.BG=100):s.push("辣鸡卡")}else s.push("SSR"),this.BG=100,this.ssr++,this.bgSsr++;return console.log(this.BG,s),1===t?this.frequency+=1:10===t&&(this.frequency+=10),s[s.length-1]||"啥都没中"}console.log("抽奖失败")}catch(t){}finally{this.ssrFlag=!1,this.srFlag=!1}}}}),a=r,l=e("712f"),u=e("2877");function f(t){this["$style"]=l["default"].locals||l["default"]}var p=Object(u["a"])(a,o,i,!1,f,null,null),g=p.exports,h=e("365c"),d=(e("2f62"),{name:"doc",components:{LuckTen:g},data(){return{load:!1}},computed:{},watch:{},created(){},mounted(){},methods:{async login(){let t={email:"88888881@qq.com",password:"123456"};const[n,e]=await Object(h["b"])(Object(h["a"])(t));console.log(n,e)},top(t){document.body.scrolltop=0,t.pageY=0,console.log(t.pageY)}}}),b=d,v=e("025e");function m(t){this["$style"]=v["default"].locals||v["default"]}var _=Object(u["a"])(b,c,s,!1,m,null,null);n["default"]=_.exports}}]);