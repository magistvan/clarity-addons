function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var r=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{cpmM:function(e,t,n){"use strict";n.r(t),n.d(t,"SearchFieldDemoModule",(function(){return y}));var r,c,o=n("SVse"),i=n("s7LF"),a=n("iInd"),l=n("X69f"),s=n("QgOn"),u=n("XPsC"),f=n("JsA7"),p=n("N+3j"),b=n("8Y7J"),h=n("0G9f"),d=n("vAyd"),m=((c=function(e){_inherits(n,e);var t=_createSuper(n);function n(){var e;return _classCallCheck(this,n),(e=t.call(this,"search-field")).htmlExample='\n<form clrForm>\n    <clr-input-container>\n        <label>Search for any value:</label>\n        <input class="clr-col-md-4" clrInput clrSearch placeholder="Seach for Name, Address, Email, ..."  type="text" name="search" [(ngModel)]="value"/>\n    </clr-input-container>\n</form>\n',e}return n}(p.a)).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=b.Gb({type:c,selectors:[["clr-search-field-demo"]],hostVars:4,hostBindings:function(e,t){2&e&&b.Db("content-area",!0)("dox-content-panel",!0)},features:[b.xb],decls:42,vars:6,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],[1,"list"],["id","code-examples"],["id","examples"],[1,"clr-code"],["clrForm",""],["clrInput","","clrSearch","","placeholder","Seach for Name, Address, Email, ...","type","text","name","search",1,"clr-col-md-4",3,"ngModel","ngModelChange"],[3,"clrCode"]],template:function(e,t){1&e&&(b.Sb(0,"clr-doc-wrapper",0),b.Sb(1,"article"),b.Sb(2,"h5",1),b.Ec(3,"The Seach Field is used to input a value to search for it. "),b.Nb(4,"br"),b.Ec(5," Hitting the delete icon will remove the current value from the input field "),b.Rb(),b.Nb(6,"p"),b.Sb(7,"h3"),b.Ec(8,"Best Practices"),b.Rb(),b.Sb(9,"ul",2),b.Sb(10,"li"),b.Sb(11,"strong"),b.Ec(12,"Placeholder:"),b.Rb(),b.Ec(13," Use a Placeholder displaying common search terms."),b.Nb(14,"br"),b.Ec(15," Limit your hint to just a few words, otherwise you actually increase the cognitive load. "),b.Rb(),b.Sb(16,"li"),b.Sb(17,"strong"),b.Ec(18,"Results: "),b.Rb(),b.Ec(19," Display a message containing the searchterm, when no search results have been found. "),b.Rb(),b.Rb(),b.Sb(20,"div",3),b.Sb(21,"h3",4),b.Ec(22,"Code & Examples"),b.Rb(),b.Sb(23,"p"),b.Ec(24," Because the search field is a directive, it can be applied on any "),b.Sb(25,"code",5),b.Ec(26,"input"),b.Rb(),b.Ec(27," element. The name of the directive is "),b.Sb(28,"code",5),b.Ec(29,"clrSearch"),b.Rb(),b.Ec(30,". This makes the search field compatible with the existing "),b.Sb(31,"code",5),b.Ec(32,"ClrInputContainer"),b.Rb(),b.Ec(33," and forms. "),b.Rb(),b.Sb(34,"h3"),b.Ec(35,"Angular Directive"),b.Rb(),b.Sb(36,"form",6),b.Sb(37,"clr-input-container"),b.Sb(38,"label"),b.Ec(39,"Search label (optional)"),b.Rb(),b.Sb(40,"input",7),b.ac("ngModelChange",(function(e){return t.value=e})),b.Rb(),b.Rb(),b.Rb(),b.Nb(41,"clr-code-snippet",8),b.Rb(),b.Rb(),b.Rb()),2&e&&(b.kc("ng",t.ng)("ui",t.ui)("title",t.title)("newLayout",t.newLayout),b.Ab(40),b.kc("ngModel",t.value),b.Ab(1),b.kc("clrCode",t.htmlExample))},directives:[h.a,i.A,i.n,i.o,l.u,l.C,l.D,i.b,l.B,s.H,i.m,i.p,d.a],encapsulation:2}),c),y=((r=function e(){_classCallCheck(this,e)}).\u0275mod=b.Kb({type:r}),r.\u0275inj=b.Jb({factory:function(e){return new(e||r)},imports:[[o.c,i.h,i.u,l.a,l.v,u.a,f.a,a.g.forChild([{path:"",component:m}]),s.a]]}),r)}}]);