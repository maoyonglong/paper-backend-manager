webpackJsonp([1],{"1tHo":function(e,t){},"3mGu":function(e,t){},"9mO3":function(e,t){},DS6Y:function(e,t){},KP03:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("uMhA"),n("XRwP");var a=n("7+uW"),i=n("zL8q"),s=n.n(i);n("tvR6"),n("3mGu");a.default.use(s.a);var r=n("HSQo"),o=n.n(r),l=n("Gu7T"),c=n.n(l),u=n("Icdr"),d=n.n(u),p=n("O4Lo"),h=n.n(p),m=n("472O"),f=["legendselectchanged","legendselected","legendunselected","legendscroll","datazoom","datarangeselected","timelinechanged","timelineplaychanged","restore","dataviewchanged","magictypechanged","geoselectchanged","geoselected","geounselected","pieselectchanged","pieselected","pieunselected","mapselectchanged","mapselected","mapunselected","axisareaselected","focusnodeadjacency","unfocusnodeadjacency","brush","brushselected","rendered","finished","click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"],v={props:{options:Object,theme:[String,Object],initOptions:Object,group:String,autoresize:Boolean,watchShallow:Boolean,manualUpdate:Boolean},data:function(){return{lastArea:0}},watch:{group:function(e){this.chart.group=e}},methods:{mergeOptions:function(e,t,n){this.manualUpdate&&(this.manualOptions=e),this.chart?this.delegateMethod("setOption",e,t,n):this.init()},appendData:function(e){this.delegateMethod("appendData",e)},resize:function(e){this.delegateMethod("resize",e)},dispatchAction:function(e){this.delegateMethod("dispatchAction",e)},convertToPixel:function(e,t){return this.delegateMethod("convertToPixel",e,t)},convertFromPixel:function(e,t){return this.delegateMethod("convertFromPixel",e,t)},containPixel:function(e,t){return this.delegateMethod("containPixel",e,t)},showLoading:function(e,t){this.delegateMethod("showLoading",e,t)},hideLoading:function(){this.delegateMethod("hideLoading")},getDataURL:function(e){return this.delegateMethod("getDataURL",e)},getConnectedDataURL:function(e){return this.delegateMethod("getConnectedDataURL",e)},clear:function(){this.delegateMethod("clear")},dispose:function(){this.delegateMethod("dispose")},delegateMethod:function(e){var t;this.chart||this.init();for(var n=arguments.length,a=Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];return(t=this.chart)[e].apply(t,c()(a))},delegateGet:function(e,t){return this.chart||this.init(),this.chart[t]()},getArea:function(){return this.$el.offsetWidth*this.$el.offsetHeight},init:function(){var e=this;if(!this.chart){var t=d.a.init(this.$el,this.theme,this.initOptions);this.group&&(t.group=this.group),t.setOption(this.manualOptions||this.options||{},!0),f.forEach(function(n){t.on(n,function(t){e.$emit(n,t)})}),this.autoresize&&(this.lastArea=this.getArea(),this.__resizeHandler=h()(function(){0===e.lastArea?(e.mergeOptions({},!0),e.resize(),e.mergeOptions(e.options||e.manualOptions||{},!0)):e.resize(),e.lastArea=e.getArea()},100,{leading:!0}),Object(m.a)(this.$el,this.__resizeHandler)),o()(this,{width:{configurable:!0,get:function(){return e.delegateGet("width","getWidth")}},height:{configurable:!0,get:function(){return e.delegateGet("height","getHeight")}},isDisposed:{configurable:!0,get:function(){return!!e.delegateGet("isDisposed","isDisposed")}},computedOptions:{configurable:!0,get:function(){return e.delegateGet("computedOptions","getOption")}}}),this.chart=t}},destroy:function(){this.autoresize&&Object(m.b)(this.$el,this.__resizeHandler),this.dispose(),this.chart=null},refresh:function(){this.chart&&(this.destroy(),this.init())}},created:function(){var e=this;this.manualUpdate||this.$watch("options",function(t,n){!e.chart&&t?e.init():e.chart.setOption(t,t!==n)},{deep:!this.watchShallow});["theme","initOptions","autoresize","manualUpdate","watchShallow"].forEach(function(t){e.$watch(t,function(){e.refresh()},{deep:!0})})},mounted:function(){this.options&&this.init()},activated:function(){this.autoresize&&this.chart&&this.chart.resize()},beforeDestroy:function(){this.chart&&this.destroy()},connect:function(e){"string"!=typeof e&&(e=e.map(function(e){return e.chart})),d.a.connect(e)},disconnect:function(e){d.a.disConnect(e)},registerMap:function(e,t,n){d.a.registerMap(e,t,n)},registerTheme:function(e,t){d.a.registerTheme(e,t)},graphic:d.a.graphic},g={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"echarts"})},staticRenderFns:[]};var b=n("VU/8")(v,g,!1,function(e){n("v/gJ")},null,null).exports;n("4UDB"),n("Oq2I"),n("80cc");a.default.component("v-chart",b);var _=a.default.prototype.store,y=_=void 0!==_?_:{debug:!0,state:{isMainLoading:!0,username:"root",isLogin:!0,userType:"super"},setState:function(e,t){var n=this.state[e];if(void 0!==n)this.state[e]=t,this.debug&&console.log("state "+e+" has been changed from "+n+" to "+t);else if("[object Object]"===e.toString()){var a=e;for(var i in a){var s=a[i];this.setState(i,s)}}}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var k=n("VU/8")({name:"App"},x,!1,function(e){n("Nm7G")},null,null).exports,w=n("/ocq"),$=n("//Fk"),D=n.n($),M=n("mtWM"),A=n.n(M).a.create();A.interceptors.request.use(function(e){return y.setState({isMainLoading:!0}),e},function(e){return D.a.reject(e)}),A.interceptors.response.use(function(e){return 200===e.status&&y.setState({isMainLoading:!1}),e},function(e){return D.a.reject(e)});var C=A,U={name:"Login",data:function(){return{form:{username:"",pwd:""}}},methods:{handleLogin:function(){var e=this,t=this.form.username,n=this.form.pwd;C.post("/api/backend/login",{username:t,pwd:n}).then(function(n){var a=n.data;if(!0===a.status){var i=a.result;console.log(i.type),y.setState({isLogin:!0,userType:i.type,username:t}),e.$alert("成功登录，即将跳转到系统主页面！","提示",{confirmButtonText:"确定",callback:function(t){e.$router.push({path:"/backend"})}})}else e.$message({type:"error",message:"用户名或者密码错误！"})}).catch(function(){e.$message({type:"error",message:"网络错误或者请求接口不存在！"})})}}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"login-wrap"},[n("el-header",[n("h2",[e._v("欢迎使用后台管理系统")])]),e._v(" "),n("el-main",[n("el-form",{attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码"}},[n("el-input",{attrs:{type:"password",required:""},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),e._v(" "),n("el-form-item",{attrs:{align:"right"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleLogin()}}},[e._v("登录")])],1)],1)],1)],1)},staticRenderFns:[]};var O=n("VU/8")(U,E,!1,function(e){n("U5Na")},null,null).exports,L={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{id:"aside"}},[n("el-col",{attrs:{span:24}},[n("el-menu",{attrs:{"default-active":"2"},on:{select:e.handleSelect,open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("a",{staticClass:"router-link"},[n("i",{staticClass:"el-icon-menu"}),e._v(" "),n("span",[e._v("数据库管理")])])]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"2-1"}},[n("router-link",{staticClass:"router-link",attrs:{to:"/backend/adminManager"}},[n("span",[e._v("管理员管理")])])],1),e._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[n("router-link",{staticClass:"router-link",attrs:{to:"/backend/userManager"}},[n("span",[e._v("用户管理")])])],1),e._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[n("router-link",{staticClass:"router-link",attrs:{to:"/backend/paperManager"}},[n("span",[e._v("试卷管理")])])],1)],1)],2)],1)],1)],1)},staticRenderFns:[]};var S={data:function(){return{username:y.state.username}},methods:{handleSignOut:function(){var e=this;y.setState("username",""),y.setState("userType",null),y.setState("isLogin",!1),this.$alert("您已成功退出登录！","提示",{confirmButtonText:"确定",callback:function(t){e.$router.push({path:"/"})}})}}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"header"}},[n("h1",{staticClass:"title"},[e._v("\n    后台管理系统\n    "),n("a",{staticClass:"signout",on:{click:function(t){return e.handleSignOut()}}},[e._v("退出")]),e._v(" "),n("span",{staticClass:"curaccount"},[e._v("当前管理员： "+e._s(e.username))])])])},staticRenderFns:[]};var P={name:"BackendManager",data:function(){return{state:y.state}},components:{Aside:n("VU/8")({methods:{handleSelect:function(e){},handleOpen:function(e,t){},handleClose:function(e,t){}}},L,!1,function(e){n("DS6Y")},null,null).exports,Header:n("VU/8")(S,I,!1,function(e){n("1tHo")},null,null).exports},mounted:function(){var e=this;this.state.isLogin||this.$alert("请先登录！","提示",{confirmButtonText:"确定",callback:function(t){e.$router.push({path:"/"})}})}},T={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",{staticClass:"page-wrap"},[t("el-header",[t("Header")],1),this._v(" "),t("el-container",{staticClass:"content-wrap"},[t("el-aside",[t("Aside")],1),this._v(" "),t("el-main",{directives:[{name:"loading",rawName:"v-loading",value:this.state.isMainLoading,expression:"state.isMainLoading"}],staticClass:"main",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[t("router-view")],1)],1)],1)},staticRenderFns:[]};var H=n("VU/8")(P,T,!1,function(e){n("9mO3")},null,null).exports,z=n("d7EF"),R=n.n(z),j=n("pFYg"),F=n.n(j),q=[{label:"用户名",prop:"username"},{label:"密码",prop:"pwd"},{label:"邮箱",prop:"email",width:160},{label:"性别",prop:"sex"},{label:"注册时间",prop:"time"}],B={name:"TableManager",props:{title:String,columnConfig:Array,isAddDefault:{type:Boolean,default:function(){return!0}},operation:{type:Object,default:function(){return{width:180,btns:[]}}},data:Array},data:function(){return{editIdx:-1,tableHeight:0,isEdit:!0,selection:[]}},mounted:function(){this.certainHeight()},methods:{deleteDialog:function(e){var t=this;this.$confirm("删除所选内容，将导致其无法恢复，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e(),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},certainHeight:function(){this.tableHeight=this.$refs.tableManager.offsetHeight-106},handleSelectionChange:function(e){this.selection=e},toggleEdit:function(e){var t=e.$index;this.editIdx===t?(this.$emit(this.isEdit?"edit":"add",this.data[this.editIdx]),this.isEdit=!0,this.editIdx=-1):this.editIdx=t},handleAdd:function(){if(this.isAddDefault){this.editIdx=this.data.push({})-1;var e=document.querySelector(".el-table__body-wrapper");setTimeout(function(){e.scrollTop=e.scrollHeight,e.scrollLeft=0},30),this.isEdit=!1}else this.$emit("add",this.data)},handleDelete:function(e){var t=this,n=e.$index;this.deleteDialog(function(){t.$emit("delete",t.data.splice(n,1))})},handleMutiDelete:function(){var e=this;this.deleteDialog(function(){for(var t=e.data,n=e.selection,a=0;a<t.length;a++)n.includes(t[a])&&(t.splice(a,1),a--);e.$emit("delete",n)})}}},N={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"tableManager",staticClass:"table-manager"},[n("h4",{staticClass:"main-title"},[e._v(e._s(e.title))]),e._v(" "),0!==e.tableHeight?n("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{stripe:"",height:e.tableHeight,data:e.data,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),e._l(e.columnConfig,function(t){return n("el-table-column",{key:t.label,attrs:{label:t.label,prop:t.prop,width:t.width||140},scopedSlots:e._u([{key:"default",fn:function(t){return[t.$index===e.editIdx?n("el-input",{attrs:{type:"text"},model:{value:t.row[t.column.property],callback:function(n){e.$set(t.row,t.column.property,n)},expression:"scope.row[scope.column.property]"}}):n("span",[e._v(e._s(t.row[t.column.property]))])]}}],null,!0)})}),e._v(" "),n("el-table-column",{attrs:{fixed:"right",prop:"",label:"操作",width:e.operation.width},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(e.operation.btns,function(a,i){return n("el-button",{key:a+i,attrs:{type:a.type,icon:a.icon,size:a.size||"mini"},on:{click:function(n){return a.click(e.data[t.$index])}}},[e._v("\n          "+e._s(a.text)+"\n        ")])}),e._v(" "),n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(n){return e.toggleEdit(t)}}},[e._v(e._s(t.$index===e.editIdx?"确认":"编辑"))]),e._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(n){return e.handleDelete(t)}}},[e._v("删除")])]}}],null,!1,1731266043)})],2):e._e(),e._v(" "),n("div",{staticClass:"muti-opeartion"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline",size:"mini"},on:{click:e.handleAdd}},[e._v("添加")]),e._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.handleMutiDelete()}}},[e._v("删除选中项")])],1)],1)},staticRenderFns:[]};var G=n("VU/8")(B,N,!1,function(e){n("S8D1")},null,null).exports,V={name:"UserManager",components:{TableManager:G},data:function(){return{props:{title:"用户管理",columnConfig:q,data:[]}}},mounted:function(){var e=this;"super"===y.state.userType?this.loadUserData():this.$alert("你无权访问该页面内容！","提示",{confirmButtonText:"确定",callback:function(t){e.$router.push({path:"/"})}})},methods:{handleEdit:function(e){this.handleInputPass(e,"rewriteUser",{exclude:["time"]},["修改用户成功！","服务器错误！"],[void 0,this.loadUserData])},judgeInput:function(e,t){var n=this.props.data;return function(t){for(var a=t.exclude,i=t.unique,s=function(t,s){var r=q[t],o=r.label,l=r.prop;if(a&&a.indexOf(l)<0){if(!e[l])return{v:{status:!1,msg:o+"不能为空"}};if(i&&i.indexOf(l)>=0){var c=!1;if(n.forEach(function(t,a){t[l]===e[l]&&a!==n.length-1&&(c=!0)}),c)return{v:{status:!1,msg:o+"已经存在！"}}}}},r=0,o=q.length;r<o;r++){var l=s(r);if("object"===(void 0===l?"undefined":F()(l)))return l.v}return{status:!0}}(t)},handleInputPass:function(e,t,n,a,i){var s=this,r=R()(a,2),o=r[0],l=r[1],c=R()(i,2),u=c[0],d=c[1],p=this.judgeInput(e,n);p.status?(C.post("/api/backend/"+t,e).then(function(e){var t=e.data;s.resloveMsg(t.result,[o,l],[s.loadUserData])}),u&&u()):(this.$message({type:"error",message:p.msg}),d&&d())},resloveMsg:function(e,t,n){var a=R()(t,2),i=a[0],s=a[1],r=R()(n,2),o=r[0],l=r[1];e?(this.$message({type:"success",message:i}),o&&o()):(this.$message({type:"error",message:s}),l&&l())},handleAdd:function(e){this.handleInputPass(e,"addUser",{unique:["username"],exclude:["time"]},["添加用户成功！","服务器错误！"],[void 0,this.loadUserData])},handleDelete:function(e){var t=this;e.forEach(function(e){C.post("/api/backend/deleteUser",{username:e.username}).then(function(e){var n=e.data;t.resloveMsg(n.result,["删除用户成功！","服务器错误！"],[void 0,t.loadUserData])})})},loadUserData:function(){var e=this;C.get("/api/backend/userList").then(function(t){var n=t.data;e.props.data=n.result})}}},W={render:function(){var e=this.$createElement;return(this._self._c||e)("table-manager",this._b({on:{edit:this.handleEdit,add:this.handleAdd,delete:this.handleDelete}},"table-manager",this.props,!1))},staticRenderFns:[]};var J=n("VU/8")(V,W,!1,function(e){n("mRHl")},null,null).exports,X={data:function(){return{selects:[],bases:[],synthesis:{}}},mounted:function(){for(var e=0;e<40;e++)this.selects.push({content:"",options:["","","",""],correct_answer:""});for(var t=0;t<5;t++)this.bases.push({content:"",attention:"",example:[],units:[],correct_answer:""});this.synthesis={content:"",attention:"",example:[],units:[],correct_answer:""}},methods:{handleExampleDelete:function(e,t){e.splice(t,1)},handleExampleAdd:function(e){e.push({input:"",output:""})},handleUnitsDelete:function(e,t){e.splice(t,1)},handleUnitsAdd:function(e){e.push({input:"",output:""})},handleCommit:function(){var e=this;function t(e){var t=e.map(function(e,t){var n=[];return e.input.split("").forEach(function(e){var t=JSON.parse(e.split("=")[1]);n.push(t)}),console.log(n),{input:n,output:e.output}});return console.log(t),t}var n=[];this.selects.forEach(function(e,t){e.type="select",e.index=t}),this.bases.forEach(function(e,a,i){e.type="base",e.index=a+40,n.push(t(e.units)),delete i[a].units}),this.synthesis.type="synthesis",this.synthesis.index=45,n.push(t(this.synthesis.units)),delete this.synthesis.units,C.post("/api/backend/addPaper",{selects:this.selects,bases:this.bases,synthesis:this.synthesis,units:n}).then(function(t){e.$message("试卷提交成功")}).catch(function(){e.$message("试卷提交失败")})}}},Y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"paper-container"},[n("el-form",[n("el-form-item",{attrs:{label:"试卷名称"}},[n("el-col",{attrs:{span:8}},[n("el-input")],1)],1)],1),e._v(" "),n("h2",[e._v("一、选择题")]),e._v(" "),e._l(e.selects,function(t,a){return n("div",{key:a},[n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"题目"+(a+1)}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"select.content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"选项"}},e._l(["A","B","C","D"],function(a,i){return n("el-col",{key:a,attrs:{span:6}},[n("el-form-item",{attrs:{label:a}},[n("el-input",{model:{value:t.options[i],callback:function(n){e.$set(t.options,i,n)},expression:"select.options[optIdx]"}})],1)],1)}),1),e._v(" "),n("el-form-item",{attrs:{label:"正确答案"}},[n("el-col",{attrs:{span:6}},[n("el-input",{model:{value:t.correct_answer,callback:function(n){e.$set(t,"correct_answer",n)},expression:"select.correct_answer"}})],1)],1)],1)],1)}),e._v(" "),n("h2",[e._v("二、基本编程题")]),e._v(" "),n("el-form",e._l(e.bases,function(t,a){return n("div",{key:a+41},[n("el-form-item",{attrs:{label:"题目"+(a+40)}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.content,callback:function(n){e.$set(t,"content",n)},expression:"base.content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"注意事项"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.attention,callback:function(n){e.$set(t,"attention",n)},expression:"base.attention"}})],1),e._v(" "),e._l(t.example,function(a){return n("el-form-item",{key:a},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"输入"}},[n("el-input",{attrs:{placeholder:"param1=1;param2=2"},model:{value:a.input,callback:function(t){e.$set(a,"input",t)},expression:"exam.input"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"输出"}},[n("el-input",{model:{value:a.output,callback:function(t){e.$set(a,"output",t)},expression:"exam.output"}})],1),e._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return e.handleExampleDelete(t.example,e.examIdx)}}},[e._v("删除")])],1)],1)}),e._v(" "),n("div",{staticClass:"btn-wrap"},[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.handleExampleAdd(t.example)}}},[e._v("添加示例")])],1),e._v(" "),e._l(t.units,function(a,i){return n("el-form-item",{key:i+(new Date).getTime()},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"输入"}},[n("el-input",{attrs:{placeholder:"param1=1;param2=2"},model:{value:a.input,callback:function(t){e.$set(a,"input",t)},expression:"unit.input"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"输出"}},[n("el-input",{model:{value:a.output,callback:function(t){e.$set(a,"output",t)},expression:"unit.output"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"danger"},on:{click:function(n){return e.handleUnitsDelete(t.units,i)}}},[e._v("删除")])],1)],1)],1)}),e._v(" "),n("div",{staticClass:"btn-wrap"},[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.handleUnitsAdd(t.units)}}},[e._v("添加测试数据")])],1),e._v(" "),n("el-form-item",{attrs:{label:"参考答案"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.correct_answer,callback:function(n){e.$set(t,"correct_answer",n)},expression:"base.correct_answer"}})],1)],2)}),0),e._v(" "),n("h2",[e._v("三、综合编程题")]),e._v(" "),n("el-form",[n("el-form-item",{attrs:{label:"题目45"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.synthesis.content,callback:function(t){e.$set(e.synthesis,"content",t)},expression:"synthesis.content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"注意事项"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.synthesis.attention,callback:function(t){e.$set(e.synthesis,"attention",t)},expression:"synthesis.attention"}})],1),e._v(" "),e._l(e.synthesis.example,function(t,a){return n("el-form-item",{key:a+46},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"输入"}},[n("el-input",{attrs:{placeholder:"param1=1;param2=2"},model:{value:t.input,callback:function(n){e.$set(t,"input",n)},expression:"exam.input"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"输出"}},[n("el-input",{model:{value:t.output,callback:function(n){e.$set(t,"output",n)},expression:"exam.output"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.handleExampleDelete(e.synthesis.example,a)}}},[e._v("删除")])],1)],1)],1)}),e._v(" "),n("div",{staticClass:"btn-wrap"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleExampleAdd(e.synthesis.example)}}},[e._v("添加示例")])],1),e._v(" "),e._l(e.synthesis.units,function(t,a){return n("el-form-item",{key:a+(new Date).getTime()},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"输入"}},[n("el-input",{attrs:{placeholder:"param1=1;param2=2"},model:{value:t.input,callback:function(n){e.$set(t,"input",n)},expression:"unit.input"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"输出"}},[n("el-input",{model:{value:t.output,callback:function(n){e.$set(t,"output",n)},expression:"unit.output"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.handleUnitsDelete(e.synthesis.units,a)}}},[e._v("删除")])],1)],1)],1)}),e._v(" "),n("div",{staticClass:"btn-wrap"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleUnitsAdd(e.synthesis.units)}}},[e._v("添加测试数据")])],1),e._v(" "),n("el-form-item",{attrs:{label:"参考答案"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.synthesis.correct_answer,callback:function(t){e.$set(e.synthesis,"correct_answer",t)},expression:"synthesis.correct_answer"}})],1)],2),e._v(" "),n("div",{staticClass:"btn-wrap"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleCommit()}}},[e._v("提交")])],1)],2)},staticRenderFns:[]};var K=n("VU/8")(X,Y,!1,function(e){n("tbxW")},null,null).exports,Q={name:"WatchPaper",props:{paperId:{type:String,default:function(){return""}}},data:function(){return{paperData:[],optionLabels:["A","B","C","D"],typeLabels:{selects:"选择题",bases:"基本编程题",synthesis:"综合编程题"}}},mounted:function(){this.loadPaperData()},methods:{convert:function(e){var t=e.questions,n=t.filter(function(e){return"select"===e.type}),a=t.filter(function(e){return"base"===e.type}),i=t.filter(function(e){return"synthesis"===e.type});return{name:e.name,questions:{selects:n,bases:a,synthesis:i}}},loadPaperData:function(){var e=this;C.get("/api/paperDetail",{params:{paperId:this.paperId}}).then(function(t){var n=t.data;e.paperData=e.convert(n)}).catch(function(e){console.log(e)})}}},Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"watch-paper-container"},[n("h1",{staticClass:"title"},[e._v(e._s(e.paperData.name))]),e._v(" "),e._l(e.paperData.questions,function(t,a){return n("div",{key:a,staticClass:"watch-paper-question-wrap"},[n("h2",{staticClass:"title"},[e._v(e._s(e.typeLabels[a]))]),e._v(" "),e._l(t,function(t){return n("div",{key:t,staticClass:"ques-wrap"},[n("div","selects"===a?[n("div",[n("span",[e._v("题目：")]),n("div",{domProps:{innerHTML:e._s(t.content)}})]),e._v(" "),n("p",[n("span",[e._v("选项：")]),e._v(" "),e._l(t.options,function(t,a){return n("a",{key:t,staticClass:"option"},[n("span",{staticClass:"option-label"},[e._v(e._s(e.optionLabels[a]))]),e._v("\n            "+e._s(t)+"\n          ")])})],2),e._v(" "),n("p",[n("span",[e._v("答案：")]),e._v(e._s(t.correct_answer))])]:[n("div",[n("span",[e._v("题目：")]),n("div",{domProps:{innerHTML:e._s(t.content)}})]),e._v(" "),n("div",[n("span",[e._v("答案：")]),n("div",{domProps:{innerHTML:e._s(t.correct_answer)}})])])])})],2)})],2)},staticRenderFns:[]};var ee=[{label:"id",prop:"_id",width:180},{label:"试卷名字",prop:"name",width:200},{label:"录入时间",prop:"time"}],te={name:"PaperManager",components:{TableManager:G,Paper:K,WatchPaper:n("VU/8")(Q,Z,!1,function(e){n("o33r")},null,null).exports},data:function(){return{pageName:"paperList",paperId:"",props:{columnConfig:ee,title:"试卷管理",isAddDefault:!1,data:[],operation:{width:300,btns:[{type:"primary",icon:"el-icon-search",size:"mini",text:"查看",click:this.handleWatch}]}}}},mounted:function(){this.loadPaperData()},methods:{handleEdit:function(e){var t=this;C.post("/api/backend/rewritePaper",{paper:e}).then(function(e){e.data.result?t.$message({message:"修改成功！",type:"success"}):t.$message({message:"修改失败！",type:"error"})})},handleWatch:function(e){this.pageName="paperWatch",this.paperId=e._id},handleAdd:function(e){this.pageName="paperImport",console.log(e)},loadPaperData:function(){var e=this;C.get("/api/backend/paperList").then(function(t){var n=t.data;e.props.data=n.result})}}},ne={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return"paperList"===e.pageName?n("table-manager",e._b({staticClass:"paper-manager",on:{add:e.handleAdd,edit:e.handleEdit}},"table-manager",e.props,!1)):"paperImport"===e.pageName?n("paper"):"paperWatch"===e.paperName?n("watch-paper",{attrs:{paperId:e.paperId}}):e._e()},staticRenderFns:[]};var ae=n("VU/8")(te,ne,!1,function(e){n("KP03")},null,null).exports,ie=[{label:"用户名",prop:"username"},{label:"密码",prop:"pwd"},{label:"管理员类型",prop:"type"},{label:"注册时间",prop:"time"}],se={name:"AdminManager",components:{TableManager:G},data:function(){return{props:{title:"管理员管理",columnConfig:ie,data:[]}}},mounted:function(){var e=this;"super"===y.state.userType?this.loadAdminData():this.$alert("你无权访问该页面内容！","提示",{confirmButtonText:"确定",callback:function(t){e.$router.push({path:"/"})}})},methods:{handleEdit:function(e){this.handleInputPass(e,"rewriteAdmin",{exclude:["time"]},["修改用户成功！","服务器错误！"],[void 0,this.loadAdminData])},judgeInput:function(e,t){var n=this.props.data;return function(t){for(var a=t.exclude,i=t.unique,s=function(t,s){var r=ie[t],o=r.label,l=r.prop;if(a&&a.indexOf(l)<0){if(!e[l])return{v:{status:!1,msg:o+"不能为空"}};if(i&&i.indexOf(l)>=0&&n.some(function(t){return t[l]===e[l]}))return{v:{status:!1,msg:o+"已经存在！"}}}},r=0,o=ie.length;r<o;r++){var l=s(r);if("object"===(void 0===l?"undefined":F()(l)))return l.v}return{status:!0}}(t)},handleInputPass:function(e,t,n,a,i){var s=this,r=R()(a,2),o=r[0],l=r[1],c=R()(i,2),u=c[0],d=c[1],p=this.judgeInput(e,n);p.status?(C.post("/api/backend/"+t,e).then(function(e){var t=e.data;s.resloveMsg(t.result,[o,l],[s.loadAdminData])}),u&&u()):(this.$message({type:"error",message:p.msg}),d&&d())},resloveMsg:function(e,t,n){var a=R()(t,2),i=a[0],s=a[1],r=R()(n,2),o=r[0],l=r[1];e?(this.$message({type:"success",message:i}),o&&o()):(this.$message({type:"error",message:s}),l&&l())},handleAdd:function(e){this.handleInputPass(e,"addAdmin",{unique:["username"],exclude:["time"]},["添加用户成功！","服务器错误！"],[void 0,this.loadAdminData])},handleDelete:function(e){var t=this;e.forEach(function(e){C.post("/api/backend/deleteAdmin",{username:e.username}).then(function(e){var n=e.data;t.resloveMsg(n.result,["删除用户成功！","服务器错误！"],[void 0,t.loadAdminData])})})},loadAdminData:function(){var e=this;C.get("/api/backend/adminList").then(function(t){var n=t.data;e.props.data=n.result})}}},re={render:function(){var e=this.$createElement;return(this._self._c||e)("TableManager",this._b({on:{edit:this.handleEdit,add:this.handleAdd,delete:this.handleDelete}},"TableManager",this.props,!1))},staticRenderFns:[]};var oe=n("VU/8")(se,re,!1,function(e){n("XGf8")},null,null).exports;a.default.use(w.a);var le=new w.a({routes:[{path:"/login",name:"Login",component:O,alias:"/"},{path:"/backend",name:"BackendManager",component:H,children:[{path:"userManager",name:"UserManager",component:J},{path:"paperManager",name:"PaperManager",component:ae,alias:"/"},{path:"adminManager",name:"AdminManager",component:oe}]}]});a.default.config.productionTip=!1,new a.default({el:"#app",router:le,components:{App:k},template:"<App/>"})},Nm7G:function(e,t){},S8D1:function(e,t){},U5Na:function(e,t){},XGf8:function(e,t){},XRwP:function(e,t){},mRHl:function(e,t){},o33r:function(e,t){},tbxW:function(e,t){},tvR6:function(e,t){},uMhA:function(e,t){},"v/gJ":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.9e43f3f31fe22dc9db60.js.map