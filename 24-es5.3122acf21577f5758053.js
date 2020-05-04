function _inherits(l,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(n&&n.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),n&&_setPrototypeOf(l,n)}function _setPrototypeOf(l,n){return(_setPrototypeOf=Object.setPrototypeOf||function(l,n){return l.__proto__=n,l})(l,n)}function _createSuper(l){var n=_isNativeReflectConstruct();return function(){var u,e=_getPrototypeOf(l);if(n){var t=_getPrototypeOf(this).constructor;u=Reflect.construct(e,arguments,t)}else u=e.apply(this,arguments);return _possibleConstructorReturn(this,u)}}function _possibleConstructorReturn(l,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(l):n}function _assertThisInitialized(l){if(void 0===l)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(l){return!1}}function _getPrototypeOf(l){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)})(l)}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{bUUu:function(l,n,u){"use strict";u.r(n),u.d(n,"PageLayoutsDemoModuleNgFactory",(function(){return U}));var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},o=u("zl1X"),a=u("pMnS"),i=u("+Xo0"),r=u("0G9f"),c=u("X69f"),s=u("iInd"),b=u("SVse"),d=u("QkwE"),p=u("vAyd"),v=function(l){_inherits(u,l);var n=_createSuper(u);function u(){var l;return _classCallCheck(this,u),(l=n.call(this,"page-layouts")).basePageCodeExample='\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n\n    <div class="content-header">\n        <clr-back-button></clr-back-button>\n        <h2>Base Pagelayout</h2>\n        <clr-button-group class="command-bar" [clrMenuPosition]="\'bottom-right\'">\n            <clr-button>Command1</clr-button>\n            <clr-button>Command2</clr-button>\n            <clr-button [clrInMenu]="true">Command3</clr-button>\n        </clr-button-group>\n    </div>\n    <div class="content-container">\n        <div class="content-area">\n            This is the page content\n        </div>\n    </div>\n</clr-main-container>\n',l.basePageRoutingCodeExample="\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n\n    <router-outlet></router-outlet>\n</clr-main-container>\n",l.basePageRoutingPageCodeExample='\n<div class="content-header">\n    <clr-back-button></clr-back-button>\n    <h2>Base Pagelayout</h2>\n    <clr-button-group class="command-bar" [clrMenuPosition]="\'bottom-right\'">\n        <clr-button>Command1</clr-button>\n        <clr-button>Command2</clr-button>\n        <clr-button [clrInMenu]="true">Command3</clr-button>\n    </clr-button-group>\n</div>\n<div class="content-container">\n    <div class="content-area">\n        This is the page content\n    </div>\n</div>\n',l.basePageRoutingPageTSCodeExample="\n@HostBinding('class.u-main-container') bindMainContainer = true;\n",l.flowbarCodeExample='\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n    <div class="content-header">\n        <h2>Flow Bar Layout with sticky footer</h2>\n        <clr-button-group class="command-bar" [clrMenuPosition]="\'bottom-right\'">\n            <clr-button (click)="contentPanel.toggle()">Show/Hide Right</clr-button>\n            <clr-button [clrInMenu]="true">Command1</clr-button>\n        </clr-button-group>\n    </div>\n    <clr-flow-bar #flowBar [clrSteps]="flowBarSteps" [clrActiveStep]="activeStep"\n                  (clrActiveStepChange)="setActiveStep($event)"></clr-flow-bar>\n    <clr-content-panel-container>\n        <clr-content-panel-container-content>\n            <h3 *ngIf="!activeStep?.subSteps || activeStep?.subSteps?.length === 0">{{activeStep?.title}}\n                {{flowBarSteps.indexOf(activeStep) + 1}}</h3>\n            <h3 *ngIf="activeStep?.subSteps && activeStep?.subSteps?.length > 0">\n                {{activeStep?.title}} {{flowBarSteps.indexOf(activeStep) + 1}} - {{activeStep.activeSubStep?.title}}\n            </h3>\n            <p *ngFor="let a of [1, 2, 3, 4, 5, 6, 7, 8]">\n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n                ea rebum.\n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n                aliquyam\n                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n                gubergren,\n                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n                sadipscing\n                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n                takimata sanctus\n                est\n                Lorem ipsum dolor sit amet.\n            </p>\n        </clr-content-panel-container-content>\n        <clr-content-panel-container-footer>\n            <div class="clr-row clr-flex-fill clr-justify-content-between clr-align-items-center">\n                <div class="clr-col">\n                    Current Step Info\n                </div>\n                <div class="clr-col-auto">\n                    <button type="button" class="btn btn-link" (click)="flowBar.previous()"\n                            *ngIf="flowBar.isPreviousAvailable()">Previous\n                    </button>\n                    <clr-dropdown *ngIf="activeStep?.subSteps?.length > 0">\n                        <button type="button" class="btn btn-outline-primary" clrDropdownTrigger>\n                            {{activeStep.activeSubStep?.title}}\n                            <clr-icon shape="caret down"></clr-icon>\n                        </button>\n                        <clr-dropdown-menu clrPosition="top-left" *clrIfOpen>\n                            <button class="btn" clrDropdownItem *ngFor="let subStep of activeStep?.subSteps"\n                                    (click)="setActiveSubStep(subStep)">\n                                {{subStep.title}}\n                            </button>\n                        </clr-dropdown-menu>\n                    </clr-dropdown>\n                    <button type="button" class="btn btn-primary" (click)="flowBar.next()"\n                            [disabled]="!flowBar.isNextAvailable()" *ngIf="!flowBar.isLastStep()">Next\n                    </button>\n                    <button type="button" class="btn btn-success" *ngIf="flowBar.isLastStep()">Finish</button>\n                </div>\n            </div>\n        </clr-content-panel-container-footer>\n        <clr-content-panel #contentPanel>\n            <ng-container clr-content-panel-title>Right Content Panel</ng-container>\n            <ng-container clr-content-panel-content>Content</ng-container>\n        </clr-content-panel>\n    </clr-content-panel-container>\n</clr-main-container>\n',l.flowbarHtmlExampleSubmitEnter='\n<form ... (submit)="flowBar.next()">\n    ...\n    <input type="submit" style="display: none"> \x3c!-- Not needed, if you already have a submit button--\x3e\n</form>\n',l.stickyFooterCodeExample='\n<clr-main-container>\n    <clr-demo-menu></clr-demo-menu>\n    <div class="content-header">\n        <h2>Sticky Footer Layout</h2>\n    </div>\n    <div class="content-container clr-flex-column">\n        <div class="content-area">\n            <h3>Content Area</h3>\n            <p *ngFor="let a of [1, 2, 3, 4, 5, 6, 7, 8]">\n                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et\n                ea rebum.\n                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit\n                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna\n                aliquyam\n                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd\n                gubergren,\n                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n                sadipscing\n                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea\n                takimata sanctus\n                est\n                Lorem ipsum dolor sit amet.\n            </p>\n        </div>\n        <div class="content-area-footer">\n            Sticky Footer\n        </div>\n    </div>\n</clr-main-container>\n',l.fullScreenDialogHtmlExample='\n\x3c!-- This is the router outlet for full screen dialogs --\x3e\n<router-outlet name="overlay" (activate)="overlayActive = true" (deactivate)="overlayActive = false"></router-outlet>\n\n\x3c!-- This is the default router outlet for all of your default pages --\x3e\n<div [hidden]="overlayActive">\n    <router-outlet></router-outlet>\n</div>\n',l}return u}(u("N+3j").a),m=e.tb({encapsulation:2,styles:[],data:{}});function h(l){return e.Xb(0,[(l()(),e.vb(0,0,null,null,340,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,i.b,i.a)),e.ub(1,49152,null,0,r.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.vb(2,0,null,0,338,"article",[],null,null,null,null,null)),(l()(),e.vb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Base Pagelayout"])),(l()(),e.vb(5,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Base Pagelayout provides the most fundamental navigation and content elements."])),(l()(),e.vb(7,0,null,null,54,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.vb(8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Design Guidelines"])),(l()(),e.vb(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["All pages in an application should follow a common layout structure to ensure a consistent user experience across applications."])),(l()(),e.vb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Base Pagelayout includes the following components:"])),(l()(),e.vb(14,0,null,null,6,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.vb(15,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Main Navigation"])),(l()(),e.vb(17,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Pagetitle"])),(l()(),e.vb(19,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Content Area"])),(l()(),e.vb(21,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.vb(22,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["ATTENTION!"])),(l()(),e.Ub(-1,null,[" Following DOM structure is vital for a correctly working page layout. They MUST be DIRECT children of each other!"])),(l()(),e.vb(25,0,null,null,16,"ul",[],null,null,null,null,null)),(l()(),e.vb(26,0,null,null,15,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[".main-container or .u-main-container "])),(l()(),e.vb(28,0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),e.vb(29,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[".content-header"])),(l()(),e.vb(31,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["flowbar (optional)"])),(l()(),e.vb(33,0,null,null,8,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[".content-container "])),(l()(),e.vb(35,0,null,null,6,"ul",[],null,null,null,null,null)),(l()(),e.vb(36,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[".content-area"])),(l()(),e.vb(38,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["sidenav (optional)"])),(l()(),e.vb(40,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[".content-area-footer (optional)"])),(l()(),e.vb(42,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Further components may complete the pagelayout as needed:"])),(l()(),e.vb(44,0,null,null,8,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.vb(45,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Back Button"])),(l()(),e.vb(47,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Command bar"])),(l()(),e.vb(49,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Sidebar"])),(l()(),e.vb(51,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Content-Panel"])),(l()(),e.vb(53,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Command Bar"])),(l()(),e.vb(55,0,null,null,6,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.vb(56,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Command Bar comprises the most common users tasks."])),(l()(),e.vb(58,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The most important ones are shown, additional ones are accessible in an overflow-menu."])),(l()(),e.vb(60,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Other commands, either less common ones or where the proximity to an ui element is crucial, are provided within the content area."])),(l()(),e.vb(62,0,null,null,41,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.vb(63,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Code & Examples"])),(l()(),e.vb(65,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Demo"])),(l()(),e.vb(67,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e.vb(68,0,null,null,1,"clr-icon",[["shape","display"]],null,null,null,null,null)),e.ub(69,16384,null,0,c.wb,[],null,null),(l()(),e.Ub(-1,null,["\xa0 "])),(l()(),e.vb(71,0,null,null,6,"a",[["class","nav-link"],["routerLink","/full-page-layouts/basepage-layout"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Kb(l,72).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ub(72,671744,[[2,4]],0,s.o,[s.l,s.a,b.n],{routerLink:[0,"routerLink"]},null),e.ub(73,1720320,null,2,s.n,[s.l,e.l,e.D,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Qb(603979776,1,{links:1}),e.Qb(603979776,2,{linksWithHrefs:1}),(l()(),e.vb(76,0,null,null,1,"span",[["class","nav-text"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Base Pagelayout"])),(l()(),e.vb(78,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),e.vb(79,0,null,null,1,"clr-icon",[["shape","display"]],null,null,null,null,null)),e.ub(80,16384,null,0,c.wb,[],null,null),(l()(),e.Ub(-1,null,["\xa0 "])),(l()(),e.vb(82,0,null,null,6,"a",[["class","nav-link"],["routerLink","/full-page-layouts/basepage-layout-command"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Kb(l,83).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ub(83,671744,[[4,4]],0,s.o,[s.l,s.a,b.n],{routerLink:[0,"routerLink"]},null),e.ub(84,1720320,null,2,s.n,[s.l,e.l,e.D,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Qb(603979776,3,{links:1}),e.Qb(603979776,4,{linksWithHrefs:1}),(l()(),e.vb(87,0,null,null,1,"span",[["class","nav-text"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Command bar"])),(l()(),e.vb(89,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Following example shows a base page layout without multiple pages. If you have different pages (different header, ...) with routing see next example."])),(l()(),e.vb(91,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.ub(92,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.vb(93,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["To ensure a correct pagelayout when whole pages are inside a route you need to put .u-main-container on those pages which contain the layout"])),(l()(),e.Ub(-1,null,[" app.component.html "])),(l()(),e.vb(96,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.ub(97,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.Ub(-1,null,[" page.component.html "])),(l()(),e.vb(99,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.ub(100,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.Ub(-1,null,[" page.component.ts "])),(l()(),e.vb(102,0,null,null,1,"clr-code-snippet",[["clrLanguage","typescript"]],null,null,null,d.b,d.a)),e.ub(103,4243456,null,0,p.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.vb(104,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Flow Bar Layout"])),(l()(),e.vb(106,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Flow Bar Layout extends the Base Page Layout by adding a wizard-like navigation control."])),(l()(),e.vb(108,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" This layout that can be used to highlight the current progress a user is making throughout multiple steps. The Flow Bar allows the user to navigate between steps, by either clicking on a specific step or using the previous or next button. "])),(l()(),e.vb(110,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Flow Bar Layout requires the "])),(l()(),e.vb(112,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["ClrFlowBar"])),(l()(),e.Ub(-1,null,[" and can optionally also contain the Sticky Footer Layout."])),(l()(),e.vb(115,0,null,null,52,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.vb(116,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Usage"])),(l()(),e.vb(118,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Use this layout if you want to guide the user through a sequence of multiple steps. Each step requires the user to perform a complex task like filling out a form. Don't use this layout if the user's steps are mutually exclusive; in this case use Tabs instead. "])),(l()(),e.vb(120,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" When implementing a flow bar on your page, you will need to insert a "])),(l()(),e.vb(122,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["clr-flow-bar"])),(l()(),e.Ub(-1,null,[" right below your content-header but above your content-container. "])),(l()(),e.vb(125,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" Following inputs & outputs are available: "])),(l()(),e.vb(127,0,null,null,11,"ul",[],null,null,null,null,null)),(l()(),e.vb(128,0,null,null,6,"li",[],null,null,null,null,null)),(l()(),e.vb(129,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["[clrSteps]"])),(l()(),e.Ub(-1,null,[" - an array of "])),(l()(),e.vb(132,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["FlowBarStep"])),(l()(),e.Ub(-1,null,[". You can extend/implement this interface to save even more information in your steps. "])),(l()(),e.vb(135,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.vb(136,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["[(clrActiveStep)]"])),(l()(),e.Ub(-1,null,[" two way binding of the active step. "])),(l()(),e.vb(139,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" You can use the "])),(l()(),e.vb(141,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["@ViewChild()"])),(l()(),e.Ub(-1,null,[" annotation to get a reference of your "])),(l()(),e.vb(144,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["ClrFlowBar"])),(l()(),e.Ub(-1,null,[", which will allow you to call its methods: "])),(l()(),e.vb(147,0,null,null,20,"ul",[],null,null,null,null,null)),(l()(),e.vb(148,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.vb(149,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["previous()"])),(l()(),e.Ub(-1,null,[" - open the previous step."])),(l()(),e.vb(152,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.vb(153,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["next()"])),(l()(),e.Ub(-1,null,[" - opens the next step."])),(l()(),e.vb(156,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.vb(157,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["isPreviousAvailable()"])),(l()(),e.Ub(-1,null,[" - returns true if the previous step can be opened. "])),(l()(),e.vb(160,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.vb(161,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["isNextAvailable()"])),(l()(),e.Ub(-1,null,[" - returns true if the next step can be opened."])),(l()(),e.vb(164,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),e.vb(165,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["isLastStep()"])),(l()(),e.Ub(-1,null,[" - returns true if the current step is the last."])),(l()(),e.vb(168,0,null,null,27,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.vb(169,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Code & Examples"])),(l()(),e.vb(171,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Demo"])),(l()(),e.vb(173,0,null,null,9,"a",[["routerLink","/full-page-layouts/flow-bar"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Kb(l,174).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ub(174,671744,[[6,4]],0,s.o,[s.l,s.a,b.n],{routerLink:[0,"routerLink"]},null),e.ub(175,1720320,null,2,s.n,[s.l,e.l,e.D,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Qb(603979776,5,{links:1}),e.Qb(603979776,6,{linksWithHrefs:1}),(l()(),e.vb(178,0,null,null,1,"clr-icon",[["shape","display"]],null,null,null,null,null)),e.ub(179,16384,null,0,c.wb,[],null,null),(l()(),e.Ub(-1,null,["\xa0 "])),(l()(),e.vb(181,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Base Page Layout with a Flow Bar"])),(l()(),e.vb(183,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.ub(184,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.vb(185,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Submit form on enter and go to next page"])),(l()(),e.vb(187,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["As the next button is outside your form, following steps need to be done to go to next page after submitting the form with 'enter'"])),(l()(),e.vb(189,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),e.vb(190,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Add hidden submit button to your form to activate 'enter' key handling in browser (only needed if you not already have one)"])),(l()(),e.vb(192,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["React to submit of form and call next() on the flowbar"])),(l()(),e.vb(194,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.ub(195,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.vb(196,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Sidebar Pagelayout"])),(l()(),e.vb(198,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Sidebar Pagelayout enhances the Base Pagelayout with a vertical navigation sidebar."])),(l()(),e.vb(200,0,null,null,29,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.vb(201,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Design Guidelines"])),(l()(),e.vb(203,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["All pages in an application should follow a common layout structure to ensure a consistent user experience across applications."])),(l()(),e.vb(205,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Sidebar Pagelayout includes the following components:"])),(l()(),e.vb(207,0,null,null,8,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.vb(208,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Main Navigation"])),(l()(),e.vb(210,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Pagetitle"])),(l()(),e.vb(212,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Content Area"])),(l()(),e.vb(214,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Vertical Nav (Sidebar)"])),(l()(),e.vb(216,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Futher components may complete the pagelayout as needed:"])),(l()(),e.vb(218,0,null,null,2,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.vb(219,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Command Bar"])),(l()(),e.vb(221,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Use when"])),(l()(),e.vb(223,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Use the Sidebar Pagelayout when you have:"])),(l()(),e.vb(225,0,null,null,4,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.vb(226,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Lots of content on one page, that can be junked in logical separated pages "])),(l()(),e.vb(228,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["If you need a summary or overview-page, this should be the first element in the sidebar "])),(l()(),e.vb(230,0,null,null,14,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.vb(231,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Code & Examples"])),(l()(),e.vb(233,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Demo"])),(l()(),e.vb(235,0,null,null,1,"clr-icon",[["shape","display"]],null,null,null,null,null)),e.ub(236,16384,null,0,c.wb,[],null,null),(l()(),e.Ub(-1,null,["\xa0"])),(l()(),e.vb(238,0,null,null,6,"a",[["class","nav-link"],["routerLink","/full-page-layouts/sidebarpage-layout"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Kb(l,239).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ub(239,671744,[[8,4]],0,s.o,[s.l,s.a,b.n],{routerLink:[0,"routerLink"]},null),e.ub(240,1720320,null,2,s.n,[s.l,e.l,e.D,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Qb(603979776,7,{links:1}),e.Qb(603979776,8,{linksWithHrefs:1}),(l()(),e.vb(243,0,null,null,1,"span",[["class","nav-text"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Sidebar Page Layout"])),(l()(),e.vb(245,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Sticky Footer Layout"])),(l()(),e.vb(247,0,null,null,1,"h5",[["class","component-summary"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Sticky footer represents a bar at the bottom of your page which is always visible - scrollable content is hidden behind the sticky footer."])),(l()(),e.vb(249,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Sticky footer can be used for e.g. providing navigational buttons for a wizard (See also Flow Bar Layout). "])),(l()(),e.vb(251,0,null,null,33,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.vb(252,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Usage"])),(l()(),e.vb(254,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Use this component when you want to display permanently visible elements on the bottom of a page. It works particularly well in combination with the Flow Bar Layout to provide navigational controls. When the Sticky Footer contains buttons for navigation, keep in mind to place them on the right hand side to follow a logical Z Pattern. "])),(l()(),e.vb(256,0,null,null,20,"div",[["class","clr-row"]],null,null,null,null,null)),(l()(),e.vb(257,0,null,null,9,"div",[["class","clr-col-md-12 clr-col-lg-6"]],null,null,null,null,null)),(l()(),e.vb(258,0,null,null,8,"div",[["class","clrweb-DoxMedia is-do-block"]],null,null,null,null,null)),(l()(),e.vb(259,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.vb(260,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.vb(261,0,null,null,0,"img",[["alt","do"],["src","assets/images/documentation/do.png"]],null,null,null,null,null)),(l()(),e.vb(262,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.vb(263,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Do"])),(l()(),e.vb(265,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" Place buttons leading to next step on the right. Optional information about the user's actions are placed on the left side. "])),(l()(),e.vb(267,0,null,null,9,"div",[["class","clr-col-md-12 clr-col-lg-6"]],null,null,null,null,null)),(l()(),e.vb(268,0,null,null,8,"div",[["class","clrweb-DoxMedia is-dont-block"]],null,null,null,null,null)),(l()(),e.vb(269,0,null,null,2,"div",[["class","clrweb-DoxMedia-block"]],null,null,null,null,null)),(l()(),e.vb(270,0,null,null,1,"div",[["class","clrweb-DoxMedia-img"]],null,null,null,null,null)),(l()(),e.vb(271,0,null,null,0,"img",[["alt","dont"],["src","assets/images/documentation/dont.png"]],null,null,null,null,null)),(l()(),e.vb(272,0,null,null,4,"div",[["class","clrweb-DoxMedia-text"]],null,null,null,null,null)),(l()(),e.vb(273,0,null,null,1,"h6",[["class","clrweb-DoxMedia-do-dont"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Don't"])),(l()(),e.vb(275,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" Don't put navigational buttons on the left side. "])),(l()(),e.vb(277,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,[" When implementing a sticky footer on your page, you will want to insert a div with class "])),(l()(),e.vb(279,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["content-area-footer"])),(l()(),e.Ub(-1,null,[" right below your "])),(l()(),e.vb(282,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["content-area"])),(l()(),e.Ub(-1,null,[" div. This can be combined with a content panel layout, see the code example of the flow bar layout for more information. "])),(l()(),e.vb(285,0,null,null,16,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.vb(286,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Code & Examples"])),(l()(),e.vb(288,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Demo"])),(l()(),e.vb(290,0,null,null,9,"a",[["routerLink","/full-page-layouts/sticky-footer"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Kb(l,291).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t),t}),null,null)),e.ub(291,671744,[[10,4]],0,s.o,[s.l,s.a,b.n],{routerLink:[0,"routerLink"]},null),e.ub(292,1720320,null,2,s.n,[s.l,e.l,e.D,[2,s.m],[2,s.o]],{routerLinkActive:[0,"routerLinkActive"]},null),e.Qb(603979776,9,{links:1}),e.Qb(603979776,10,{linksWithHrefs:1}),(l()(),e.vb(295,0,null,null,1,"clr-icon",[["shape","display"]],null,null,null,null,null)),e.ub(296,16384,null,0,c.wb,[],null,null),(l()(),e.Ub(-1,null,["\xa0 "])),(l()(),e.vb(298,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Base Page Layout with a Sticky Footer"])),(l()(),e.vb(300,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.ub(301,4243456,null,0,p.a,[],{code:[0,"code"]},null),(l()(),e.vb(302,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Full Screen Dialog"])),(l()(),e.vb(304,0,null,null,1,"h5",[["class","component-summary"],["id","generic-pager-header"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Full Screen Dialog is an alternative to the default modal dialog."])),(l()(),e.vb(306,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The Full Screen Dialog looks and feels like any other page though it is conceptually a modal dialog. This means that a full screen dialog can have any page layout. From a technical point of view, full screen dialogs are shown in a router outlet above the current page. This eliminates the loading time which usually occurs while navigating from page to page."])),(l()(),e.vb(308,0,null,null,27,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.vb(309,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Design Guidelines"])),(l()(),e.vb(311,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["A Full Screen Dialog usually contains mutliple input elements and "])),(l()(),e.vb(313,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Save"])),(l()(),e.Ub(-1,null,[" and "])),(l()(),e.vb(316,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Cancel"])),(l()(),e.Ub(-1,null,[" options. Place these call to action buttons on the left side of the bottom of the page. Just like you would in a regular form. Optionally the dialog can also have a Back-button. Provide a confirmation prompt if the user has already entered data and Back was selected. Note that this prompt is not required for the Cancel-button, since the user deliberately choose Cancel to discard the input."])),(l()(),e.vb(319,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Use when"])),(l()(),e.vb(321,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Use the Full Screen Dialog if:"])),(l()(),e.vb(323,0,null,null,12,"ul",[["class","list"]],null,null,null,null,null)),(l()(),e.vb(324,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["You want to display a complex input form that requires "])),(l()(),e.vb(326,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Save"])),(l()(),e.Ub(-1,null,[" and "])),(l()(),e.vb(329,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Cancel"])),(l()(),e.Ub(-1,null,[" options"])),(l()(),e.vb(332,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["You need to show additional modal dialogs. In general you should not show another modal over a modal, but you can open a modal over a Full Screen Dialog."])),(l()(),e.vb(334,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),e.Ub(-1,null,["The dialog's content would require too much scrolling in a modal dialog. Try to avoid scrolling in modal dialogs."])),(l()(),e.vb(336,0,null,null,4,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.vb(337,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.Ub(-1,null,["Code"])),(l()(),e.vb(339,0,null,null,1,"clr-code-snippet",[],null,null,null,d.b,d.a)),e.ub(340,4243456,null,0,p.a,[],{code:[0,"code"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,72,0,"/full-page-layouts/basepage-layout"),l(n,73,0,"active"),l(n,83,0,"/full-page-layouts/basepage-layout-command"),l(n,84,0,"active"),l(n,92,0,u.basePageCodeExample),l(n,97,0,u.basePageRoutingCodeExample),l(n,100,0,u.basePageRoutingPageCodeExample),l(n,103,0,u.basePageRoutingPageTSCodeExample,"typescript"),l(n,174,0,"/full-page-layouts/flow-bar"),l(n,175,0,"active"),l(n,184,0,u.flowbarCodeExample),l(n,195,0,u.flowbarHtmlExampleSubmitEnter),l(n,239,0,"/full-page-layouts/sidebarpage-layout"),l(n,240,0,"active"),l(n,291,0,"/full-page-layouts/sticky-footer"),l(n,292,0,"active"),l(n,301,0,u.stickyFooterCodeExample),l(n,340,0,u.fullScreenDialogHtmlExample)}),(function(l,n){l(n,0,0,!0),l(n,71,0,e.Kb(n,72).target,e.Kb(n,72).href),l(n,82,0,e.Kb(n,83).target,e.Kb(n,83).href),l(n,173,0,e.Kb(n,174).target,e.Kb(n,174).href),l(n,238,0,e.Kb(n,239).target,e.Kb(n,239).href),l(n,290,0,e.Kb(n,291).target,e.Kb(n,291).href)}))}var g=e.rb("clr-page-layouts-demo-docu",v,(function(l){return e.Xb(0,[(l()(),e.vb(0,0,null,null,1,"clr-page-layouts-demo-docu",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,h,m)),e.ub(1,49152,null,0,v,[],null,null)],null,(function(l,n){l(n,0,0,!0,!0)}))}),{},{},[]),f=u("s7LF"),y=u("XPsC"),w=u("JsA7"),U=e.sb(t,[],(function(l){return e.Hb([e.Ib(512,e.j,e.X,[[8,[o.b,o.cb,o.a,o.c,o.e,o.f,o.g,o.i,o.j,o.h,o.d,o.db,o.eb,o.fb,o.gb,a.a,g]],[3,e.j],e.x]),e.Ib(4608,b.s,b.r,[e.u]),e.Ib(4608,f.D,f.D,[]),e.Ib(1073742336,b.c,b.c,[]),e.Ib(1073742336,c.xb,c.xb,[]),e.Ib(1073742336,c.z,c.z,[]),e.Ib(1073742336,c.nb,c.nb,[]),e.Ib(1073742336,c.j,c.j,[]),e.Ib(1073742336,c.pb,c.pb,[]),e.Ib(1073742336,c.x,c.x,[]),e.Ib(1073742336,c.yd,c.yd,[]),e.Ib(1073742336,c.v,c.v,[]),e.Ib(1073742336,c.Ad,c.Ad,[]),e.Ib(1073742336,c.Dd,c.Dd,[]),e.Ib(1073742336,c.db,c.db,[]),e.Ib(1073742336,f.C,f.C,[]),e.Ib(1073742336,f.k,f.k,[]),e.Ib(1073742336,c.Cb,c.Cb,[]),e.Ib(1073742336,c.Tb,c.Tb,[]),e.Ib(1073742336,c.ec,c.ec,[]),e.Ib(1073742336,c.kc,c.kc,[]),e.Ib(1073742336,c.Hc,c.Hc,[]),e.Ib(1073742336,c.hc,c.hc,[]),e.Ib(1073742336,c.ab,c.ab,[]),e.Ib(1073742336,c.ub,c.ub,[]),e.Ib(1073742336,c.Ib,c.Ib,[]),e.Ib(1073742336,c.Od,c.Od,[]),e.Ib(1073742336,c.Pd,c.Pd,[]),e.Ib(1073742336,c.hb,c.hb,[]),e.Ib(1073742336,c.qc,c.qc,[]),e.Ib(1073742336,c.sb,c.sb,[]),e.Ib(1073742336,c.T,c.T,[]),e.Ib(1073742336,c.wc,c.wc,[]),e.Ib(1073742336,c.Tc,c.Tc,[]),e.Ib(1073742336,c.D,c.D,[]),e.Ib(1073742336,c.Nb,c.Nb,[]),e.Ib(1073742336,c.Hb,c.Hb,[]),e.Ib(1073742336,c.q,c.q,[]),e.Ib(1073742336,c.r,c.r,[]),e.Ib(1073742336,c.Kb,c.Kb,[]),e.Ib(1073742336,c.Qb,c.Qb,[]),e.Ib(1073742336,c.Le,c.Le,[]),e.Ib(1073742336,c.Ne,c.Ne,[]),e.Ib(1073742336,c.Ec,c.Ec,[]),e.Ib(1073742336,c.Yc,c.Yc,[]),e.Ib(1073742336,c.Fb,c.Fb,[]),e.Ib(1073742336,c.nc,c.nc,[]),e.Ib(1073742336,c.Qc,c.Qc,[]),e.Ib(1073742336,c.Xb,c.Xb,[]),e.Ib(1073742336,c.cd,c.cd,[]),e.Ib(1073742336,c.e,c.e,[]),e.Ib(1073742336,c.yc,c.yc,[]),e.Ib(1073742336,c.bc,c.bc,[]),e.Ib(1073742336,c.Jc,c.Jc,[]),e.Ib(1073742336,c.a,c.a,[]),e.Ib(1073742336,y.a,y.a,[]),e.Ib(1073742336,s.p,s.p,[[2,s.u],[2,s.l]]),e.Ib(1073742336,w.a,w.a,[]),e.Ib(1073742336,t,t,[]),e.Ib(256,c.jd,!0,[]),e.Ib(1024,s.j,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);