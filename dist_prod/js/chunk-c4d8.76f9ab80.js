(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c4d8"],{"6fc1":function(t,e,r){},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=b;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={},g={};g[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(F([])));y&&y!==n&&o.call(y,a)&&(g=y);var w=I.prototype=L.prototype=Object.create(g);_.prototype=w.constructor=I,I.constructor=_,I[l]=_.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,I):(t.__proto__=I,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},k(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,r,n){var o=new E(b(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},k(w),w[l]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=F,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:F(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=C(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function L(){}function _(){}function I(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,i,a){var s=x(t[r],t,n);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){l.value=t,i(l)},a)}a(s.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function C(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return $()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=x(t,e,r);if("normal"===l.type){if(n=r.done?m:h,l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function F(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},a86a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"fade"}},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:t.formChange,expression:"formChange"}],ref:"loginInfo",staticClass:"login-form form-common",attrs:{model:t.loginInfo,"status-icon":"",rules:t.loginRules,"label-width":"50px"}},[r("div",{staticClass:"form-title"},[t._v("登陆")]),r("el-form-item",{staticClass:"login-form-item",attrs:{prop:"username"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:t.loginPlaceholder.user},model:{value:t.loginInfo.email,callback:function(e){t.$set(t.loginInfo,"email",e)},expression:"loginInfo.email"}})],1),r("el-form-item",{staticClass:"login-form-item",attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:t.loginPlaceholder.pass},model:{value:t.loginInfo.password,callback:function(e){t.$set(t.loginInfo,"password",e)},expression:"loginInfo.password"}})],1),r("el-form-item",{staticClass:"login-form-item"},[r("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"login-form-button",attrs:{type:"primary",disabled:t.loading},on:{click:function(e){t.submitForm("loginInfo")}}},[t._v("登陆")])],1),r("div",[t._v("\n                没有账号?"),r("span",{staticClass:"href-span",on:{click:t.change_form}},[t._v("来交易")])])],1)],1),r("transition",{attrs:{name:"fade"}},[r("el-form",{directives:[{name:"show",rawName:"v-show",value:!t.formChange,expression:"!formChange"}],ref:"loginInfo",staticClass:"register-form form-common",attrs:{model:t.loginInfo,"status-icon":"",rules:t.loginRules,"label-width":"50px"}},[r("div",{staticClass:"form-title"},[t._v("注册")]),r("el-form-item",{staticClass:"login-form-item",attrs:{prop:"username"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:t.loginPlaceholder.user},model:{value:t.loginInfo.email,callback:function(e){t.$set(t.loginInfo,"email",e)},expression:"loginInfo.email"}})],1),r("el-form-item",{staticClass:"login-form-item",attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:t.loginPlaceholder.pass},model:{value:t.loginInfo.password,callback:function(e){t.$set(t.loginInfo,"password",e)},expression:"loginInfo.password"}})],1),r("el-form-item",{staticClass:"login-form-item",attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:t.loginPlaceholder.pass},model:{value:t.loginInfo.password,callback:function(e){t.$set(t.loginInfo,"password",e)},expression:"loginInfo.password"}})],1),r("el-form-item",{staticClass:"login-form-item"},[r("el-button",{staticClass:"login-form-button",attrs:{type:"primary"},on:{click:function(e){t.submitForm("loginInfo")}}},[t._v("注册")])],1),r("div",[r("span",{staticClass:"href-span",on:{click:t.change_form}},[t._v("返回登录")])])],1)],1)],1)},o=[];r("96cf");function i(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t,e){try{var r=i[t](e),a=r.value}catch(t){return void o(t)}r.done?n(a):Promise.resolve(a).then(s,l)}function s(t){a("next",t)}function l(t){a("throw",t)}s()})}}r("cadf"),r("551c"),r("365c");var a={data:function(){var t=function(t,e,r){if(!e)return r(new Error("账号不能为空"));r()},e=function(t,e,r){if(!e)return r(new Error("密码不能为空"));r()};return{loading:!1,loginInfo:{email:"",password:""},loginRules:{email:[{validator:t,trigger:"blur"}],password:[{validator:e,trigger:"blur"}]},loginPlaceholder:{user:"请输入手机号或者邮箱",pass:"请输入密码"},formChange:!0}},computed:{},methods:{submitForm:function(t){var e=this;this.loading=!0,this.$refs[t].validate(function(){var t=i(regeneratorRuntime.mark(function t(r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}sessionStorage.setItem("loginInfo",JSON.stringify({access_token:"ok"})),e.$router.push({path:"/doc"}),t.next=7;break;case 5:return e.$notify.error({title:"错误",message:"大锅你不要搞事"}),t.abrupt("return",!1);case 7:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},change_form:function(){this.formChange=!this.formChange}}},s=a,l=(r("b43c"),r("2877")),c=Object(l["a"])(s,n,o,!1,null,"2c27c0f4",null);e["default"]=c.exports},b43c:function(t,e,r){"use strict";var n=r("6fc1"),o=r.n(n);o.a}}]);