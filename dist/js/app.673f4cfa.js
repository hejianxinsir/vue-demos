(function(t){function n(n){for(var o,i,a=n[0],u=n[1],s=n[2],d=0,m=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&m.push(c[i][0]),c[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(n);while(m.length)m.shift()();return r.push.apply(r,s||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,a=1;a<e.length;a++){var u=e[a];0!==c[u]&&(o=!1)}o&&(r.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},c={app:0},r=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("85ec"),c=e.n(o);c.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("List"),e("router-view",{attrs:{name:"main"}})],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"list"},[e("h1",[t._v("List")]),e("router-link",{attrs:{to:{name:"helloworld",params:{data:"天山雪莲"}}}},[t._v(" helloworld 链接 ")]),e("br"),e("HelloWorld",{attrs:{msg:t.toSon},on:{handle:t.receive}}),t._v(" "+t._s(t.fromSon)+" ")],1)},a=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1",[t._v("HelloWorld")]),t._v(" 父子组件的传递： "),e("button",{on:{click:t.sendToF}},[t._v("sendToFather")]),e("hr"),t._v(" 接受 router 的参数是："+t._s(this.$route.params.data)),e("br"),t._v(" store 的数字是："+t._s(t.getNum)),e("br"),t._v(" store 的地址是："+t._s(t.getLocation)),e("br"),e("button",{on:{click:t.plus}},[t._v("plus")]),e("button",{on:{click:t.minus}},[t._v("minus")]),e("button",{on:{click:t.changeLocation}},[t._v("changeLocation")]),e("button",{on:{click:t.incA}},[t._v("incAction")]),e("button",{on:{click:t.decA}},[t._v("decAction")]),e("hr"),t._v(" 用 map... 函数来操作："),e("br"),e("button",{on:{click:t.inc}},[t._v("inc")]),e("button",{on:{click:t.dec}},[t._v("dec")]),e("button",{on:{click:t.incAction}},[t._v("incAction")]),e("button",{on:{click:t.decAction}},[t._v("decAction")]),e("br"),t._v(" mapState 获取的数据是："),e("br"),t._v(" "+t._s(t.num)+"__"+t._s(t.location)+" "),e("hr"),t._v(" mapGetters 获取的数据是： "),e("br"),t._v(" "+t._s(t.getNum)+"__"+t._s(t.getLocation)+" "),e("hr"),t._v(" store 里的天气是："),e("br"),t._v(" moduleA: "+t._s(this.$store.state.moduleA.today)),e("br"),t._v(" moduleB: "+t._s(this.$store.state.moduleB.today)),e("br"),e("hr"),t._v(" 来自父组件： "+t._s(t.msg)+" ")])},s=[],l=e("5530"),d=e("2f62"),m={name:"HelloWorld",props:["msg"],data:function(){return{money:"8877$"}},computed:Object(l["a"])(Object(l["a"])({getNum:function(){return this.$store.getters.getNum},getLocation:function(){return this.$store.getters.getLocation}},Object(d["c"])(["getNum","getLocation"])),Object(d["e"])(["num","location"])),methods:Object(l["a"])(Object(l["a"])({sendToF:function(){this.$emit("handle",this.money)},plus:function(){this.$store.commit("inc")},minus:function(){this.$store.commit("dec")},changeLocation:function(){this.$store.commit("CHANGE")},incA:function(){this.$store.dispatch("incAction")},decA:function(){this.$store.dispatch("decAction")}},Object(d["d"])(["inc","dec","CHANGE"])),Object(d["b"])(["incAction","decAction"]))},f=m,p=e("2877"),h=Object(p["a"])(f,u,s,!1,null,"a5158fb8",null),v=h.exports,b={name:"list",data:function(){return{fromSon:"",toSon:"888888888$"}},components:{HelloWorld:v},methods:{receive:function(t){this.fromSon=t}}},_=b,g=Object(p["a"])(_,i,a,!1,null,null,null),y=g.exports,A={name:"App",components:{List:y}},O=A,j=(e("034f"),Object(p["a"])(O,c,r,!1,null,null,null)),w=j.exports,$=e("8c4f");o["a"].use($["a"]);var k=new $["a"]({routes:[{name:"list",path:"/",components:{List:y}},{name:"helloworld",path:"/helloworld/:data",components:{main:v}}]}),L=e("ade3"),S="CHANGE";o["a"].use(d["a"]);var x=new d["a"].Store({state:{num:99,location:"加拿大"},modules:{moduleA:{namespaced:!0,state:{today:"Sunny"}},moduleB:{namespaced:!0,state:{today:"Rain"}}},mutations:Object(L["a"])({inc:function(t){t.num+=1},dec:function(t){t.num-=1}},S,(function(t){t.location="中国"})),actions:{incAction:function(t){t.commit("inc")},decAction:function(t){t.commit("dec")}},getters:{getNum:function(t){return t.num},getLocation:function(t){return t.location}}});o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(w)},router:k,store:x}).$mount("#app")},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.673f4cfa.js.map