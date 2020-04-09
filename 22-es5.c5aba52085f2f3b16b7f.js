function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _createSuper(e){return function(){var r,l=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var c=_getPrototypeOf(this).constructor;r=Reflect.construct(l,arguments,c)}else r=l.apply(this,arguments);return _possibleConstructorReturn(this,r)}}function _possibleConstructorReturn(e,r){return!r||"object"!=typeof r&&"function"!=typeof r?_assertThisInitialized(e):r}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&_setPrototypeOf(e,r)}function _setPrototypeOf(e,r){return(_setPrototypeOf=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{vVo6:function(e,r,l){"use strict";l.r(r),l.d(r,"NumericFieldDemoModule",(function(){return f}));var c,t,n=l("SVse"),o=l("s7LF"),i=l("iInd"),a=l("X69f"),b=l("QgOn"),u=l("XPsC"),m=l("JsA7"),s=l("N+3j"),d=l("8Y7J"),p=l("0G9f"),R=l("vAyd"),S=((t=function(e){_inherits(l,e);var r=_createSuper(l);function l(){var e;return _classCallCheck(this,l),(e=r.call(this,"numericfield")).htmlExample='\n<form clrForm clrLayout="vertical" [formGroup]="exampleForm">\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="money"\n               [clrUnit]="\'\u20ac\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               type="text"\n               formControlName="percentage"\n               [clrUnit]="\'%\'"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',e.htmlExample2='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [(ngModel)]="money"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Percentage</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'%\'"\n               [(ngModel)]="percentage"\n               [clrDecimalPlaces]="0"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',e.htmlExample3='\n<form clrForm>\n    <clr-input-container>\n        <label>Money</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               [clrUnit]="\'\u20ac\'"\n               [clrUnitPosition]="\'left\'"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 10.000</clr-control-error>\n    </clr-input-container>\n</form>\n',e.htmlExample4='\n<form clrForm [formGroup]="exampleForm2">\n    <clr-input-container>\n        <label>Rounded Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money1"\n               [clrUnit]="\'\u20ac\'"\n               [clrRoundDisplayValue]="true"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n    <clr-input-container>\n        <label>Original Value</label>\n        <input clrInput clrNumeric\n               class="clr-col-xl-2 clr-col-md-3 clr-col-sm-12"\n               type="text"\n               formControlName="money2"\n               [clrUnit]="\'\u20ac\'"\n               [clrDecimalPlaces]="5"\n               [clrAutofillDecimals]="true"/>\n        <clr-control-error>Please enter a value between 0 and 100</clr-control-error>\n    </clr-input-container>\n</form>\n',e.tsExample='\nimport { FormControl, FormGroup, Validators } from "@angular/forms";\nimport { ClrNumericFieldValidators } from "@porscheinformatik/clr-addons";\n\nexampleForm = new FormGroup({\n    money: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(10000, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n    percentage: new FormControl(undefined, {\n        validators: [ClrNumericFieldValidators.min(0, ".", ","), ClrNumericFieldValidators.max(100, ".", ","), Validators.required],\n        updateOn: "blur",\n    }),\n});\n',e.exampleForm=new o.e({money:new o.c(void 0,{validators:[b.z.min(0,".",","),b.z.max(1e4,".",","),o.y.required],updateOn:"blur"}),percentage:new o.c(void 0,{validators:[b.z.min(0,".",","),b.z.max(100,".",","),o.y.required],updateOn:"blur"})}),e.exampleForm2=new o.e({money1:new o.c(89.99999,{validators:[b.z.min(0,".",","),b.z.max(100,".",","),o.y.required],updateOn:"blur"}),money2:new o.c(89.99999,{validators:[b.z.min(0,".",","),b.z.max(100,".",","),o.y.required],updateOn:"blur"})}),e.usageForm=new o.e({money:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),weight:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),emission:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),kilometres:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),cubic:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),millimetres:new o.c(void 0,{validators:[o.y.required],updateOn:"blur"}),kilowatt:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),timeunit:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),horsepower:new o.c(void 0,{validators:[b.z.min(0,".",","),o.y.required],updateOn:"blur"}),percentage:new o.c(void 0,{validators:[b.z.min(0,".",","),b.z.max(100,".",","),o.y.required],updateOn:"blur"})}),e}return l}(s.a)).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Gb({type:t,selectors:[["clr-numericfield-demo"]],hostVars:4,hostBindings:function(e,r){2&e&&d.Db("content-area",!0)("dox-content-panel",!0)},features:[d.xb],decls:364,vars:42,consts:[[3,"ng","ui","title","newLayout"],[1,"component-summary"],["id","usage"],[1,"list"],["clrForm","","clrLayout","horizontal",3,"formGroup"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac","formControlName","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","clrUnit","kg","formControlName","weight",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","g/km","formControlName","emission",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","km","formControlName","kilometres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","cc","formControlName","cubic",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","mm","formControlName","millimetres",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","kW","formControlName","kilowatt",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","TU","formControlName","timeunit",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12"],["clrInput","","clrNumeric","","type","text","clrUnit","hp","formControlName","horsepower",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],["clrInput","","clrNumeric","","type","text","clrUnit","%","formControlName","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrDecimalPlaces"],[1,"clr-row"],[1,"clr-col-md-12","clr-col-lg-6"],[1,"clrweb-DoxMedia","is-do-block"],[1,"clrweb-DoxMedia-block"],["clrForm","","clrLayout","horizontal"],[1,"clr-col-4"],["clrInput","","clrNumeric","","type","text","clrUnit","\u20ac",1,"clr-col-md-5","clr-col-sm-12",3,"clrAutofillDecimals"],[1,"clrweb-DoxMedia-text"],[1,"clrweb-DoxMedia-do-dont"],[1,"clrweb-DoxMedia","is-dont-block"],["clrInput","","type","text",1,"clr-col-md-5","clr-col-sm-12"],["id","code-examples"],["id","examples"],[1,"clr-code"],[1,"table"],[1,"left"],[1,"left","clr-hidden-xs-down"],[1,"clr-hidden-xs-down"],[1,"clr-hidden-sm-up"],["clrForm","","clrLayout","vertical",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money",3,"clrUnit","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","percentage",3,"clrUnit","clrDecimalPlaces"],[3,"clrCode"],["clrLanguage","typescript",3,"clrCode"],["clrForm",""],["clrInput","","clrNumeric","","type","text","name","money",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrAutofillDecimals","ngModelChange"],["clrInput","","clrNumeric","","type","text","name","percentage",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","ngModel","clrDecimalPlaces","ngModelChange"],["clrInput","","clrNumeric","","type","text",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrUnitPosition","clrAutofillDecimals"],["clrForm","",3,"formGroup"],["clrInput","","clrNumeric","","type","text","formControlName","money1",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrRoundDisplayValue","clrAutofillDecimals"],["clrInput","","clrNumeric","","type","text","formControlName","money2",1,"clr-col-xl-2","clr-col-md-3","clr-col-sm-12",3,"clrUnit","clrDecimalPlaces","clrAutofillDecimals"]],template:function(e,r){1&e&&(d.Sb(0,"clr-doc-wrapper",0),d.Sb(1,"article"),d.Sb(2,"h5",1),d.Ec(3,"The Numeric Field is used to enter numeric values of a certain type."),d.Rb(),d.Sb(4,"h3",2),d.Ec(5,"Usage"),d.Rb(),d.Sb(6,"ul"),d.Sb(7,"li"),d.Ec(8,"Invalid characters are ignored during input."),d.Rb(),d.Sb(9,"li"),d.Ec(10,"Amount of decimal places should be defined according to the input type and usecase. "),d.Rb(),d.Sb(11,"li"),d.Ec(12,"Decimal separator and grouping separator should be set according to locale."),d.Rb(),d.Rb(),d.Sb(13,"h3"),d.Ec(14,"Use when"),d.Rb(),d.Sb(15,"ul",3),d.Sb(16,"li"),d.Ec(17,"One of the following inputs is required from the user:"),d.Rb(),d.Rb(),d.Sb(18,"form",4),d.Sb(19,"clr-input-container"),d.Sb(20,"label"),d.Ec(21,"Money Amount"),d.Rb(),d.Nb(22,"input",5),d.Sb(23,"clr-control-error"),d.Ec(24,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(25,"clr-input-container"),d.Sb(26,"label"),d.Ec(27,"Weight"),d.Rb(),d.Nb(28,"input",6),d.Sb(29,"clr-control-error"),d.Ec(30,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(31,"clr-input-container"),d.Sb(32,"label"),d.Ec(33,"Emission"),d.Rb(),d.Nb(34,"input",7),d.Sb(35,"clr-control-error"),d.Ec(36,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(37,"clr-input-container"),d.Sb(38,"label"),d.Ec(39,"Kilometer Reading"),d.Rb(),d.Nb(40,"input",8),d.Sb(41,"clr-control-error"),d.Ec(42,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(43,"clr-input-container"),d.Sb(44,"label"),d.Ec(45,"Cubic Capacity"),d.Rb(),d.Nb(46,"input",9),d.Sb(47,"clr-control-error"),d.Ec(48,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(49,"clr-input-container"),d.Sb(50,"label"),d.Ec(51,"Millimeter"),d.Rb(),d.Nb(52,"input",10),d.Sb(53,"clr-control-error"),d.Ec(54,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(55,"clr-input-container"),d.Sb(56,"label"),d.Ec(57,"Kilowatt"),d.Rb(),d.Nb(58,"input",11),d.Sb(59,"clr-control-error"),d.Ec(60,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(61,"clr-input-container"),d.Sb(62,"label"),d.Ec(63,"Timeunit"),d.Rb(),d.Nb(64,"input",12),d.Sb(65,"clr-control-error"),d.Ec(66,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(67,"clr-input-container"),d.Sb(68,"label"),d.Ec(69,"Horsepower"),d.Rb(),d.Nb(70,"input",13),d.Sb(71,"clr-control-error"),d.Ec(72,"Please enter a value greater than or equal to 0"),d.Rb(),d.Rb(),d.Sb(73,"clr-input-container"),d.Sb(74,"label"),d.Ec(75,"Percentage"),d.Rb(),d.Nb(76,"input",14),d.Sb(77,"clr-control-error"),d.Ec(78,"Please enter a value between 0 and 100 (including)."),d.Rb(),d.Rb(),d.Rb(),d.Sb(79,"div",15),d.Sb(80,"div",16),d.Sb(81,"div",17),d.Sb(82,"div",18),d.Sb(83,"form",19),d.Sb(84,"clr-input-container"),d.Sb(85,"label",20),d.Ec(86,"Price (gross)"),d.Rb(),d.Nb(87,"input",21),d.Sb(88,"clr-control-error"),d.Ec(89,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Sb(90,"clr-input-container"),d.Sb(91,"label",20),d.Ec(92,"Price (net)"),d.Rb(),d.Nb(93,"input",21),d.Sb(94,"clr-control-error"),d.Ec(95,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(96,"div",22),d.Sb(97,"h6",23),d.Ec(98,"Do"),d.Rb(),d.Sb(99,"p"),d.Ec(100," Use the numeric field consistently for the listed input types. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(101,"div",16),d.Sb(102,"div",24),d.Sb(103,"div",18),d.Sb(104,"form",19),d.Sb(105,"clr-input-container"),d.Sb(106,"label",20),d.Ec(107,"Price (gross)"),d.Rb(),d.Nb(108,"input",25),d.Sb(109,"clr-control-error"),d.Ec(110,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Sb(111,"clr-input-container"),d.Sb(112,"label",20),d.Ec(113,"Price (net)"),d.Rb(),d.Nb(114,"input",21),d.Sb(115,"clr-control-error"),d.Ec(116,"Please enter a value greater than 0"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(117,"div",22),d.Sb(118,"h6",23),d.Ec(119,"Don't"),d.Rb(),d.Sb(120,"p"),d.Ec(121," Don't use normal input and numeric fields inconsistently. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(122,"div",26),d.Sb(123,"h3",27),d.Ec(124,"Code & Examples"),d.Rb(),d.Sb(125,"p"),d.Ec(126," Because the numeric field is a directive, it can be applied on any "),d.Sb(127,"code",28),d.Ec(128,"input"),d.Rb(),d.Ec(129," element. This makes the numeric field compatible with the existing "),d.Sb(130,"code",28),d.Ec(131,"ClrInputContainer"),d.Rb(),d.Ec(132," and forms. See code examples below which include "),d.Sb(133,"code",28),d.Ec(134,"clr-control-error"),d.Rb(),d.Ec(135," and "),d.Sb(136,"code",28),d.Ec(137,"clr-control-helper"),d.Rb(),d.Ec(138," elements. "),d.Rb(),d.Sb(139,"p"),d.Ec(140," The numeric field supports template driven as well as reactive forms, see the form demos below. "),d.Rb(),d.Sb(141,"p"),d.Ec(142," The numeric field requires you to use custom validators, namely "),d.Sb(143,"code",28),d.Ec(144,"ClrNumericFieldValidators"),d.Rb(),d.Ec(145," to validate min and max values. "),d.Rb(),d.Sb(146,"h2"),d.Ec(147,"Angular Directive"),d.Rb(),d.Sb(148,"h3"),d.Ec(149,"Summary of Options"),d.Rb(),d.Sb(150,"table",29),d.Sb(151,"thead"),d.Sb(152,"tr"),d.Sb(153,"th",30),d.Ec(154,"Input"),d.Rb(),d.Sb(155,"th",31),d.Ec(156,"Values"),d.Rb(),d.Sb(157,"th",32),d.Ec(158,"Default"),d.Rb(),d.Sb(159,"th",30),d.Ec(160,"Effect"),d.Rb(),d.Rb(),d.Rb(),d.Sb(161,"tbody"),d.Sb(162,"tr"),d.Sb(163,"td",30),d.Sb(164,"b"),d.Ec(165,"[clrTextAlign]"),d.Rb(),d.Sb(166,"div",33),d.Ec(167,"Type: String"),d.Rb(),d.Sb(168,"div",33),d.Ec(169,'Default: "right"'),d.Rb(),d.Rb(),d.Sb(170,"td",31),d.Ec(171,"left, right"),d.Rb(),d.Sb(172,"td",32),d.Ec(173,'"right"'),d.Rb(),d.Sb(174,"td",30),d.Ec(175,"Defines the alignment of the text inside input field."),d.Rb(),d.Rb(),d.Sb(176,"tr"),d.Sb(177,"td",30),d.Sb(178,"b"),d.Ec(179,"[clrDecimalSep]"),d.Rb(),d.Sb(180,"div",33),d.Ec(181,"Type: String"),d.Rb(),d.Sb(182,"div",33),d.Ec(183,'Default: ","'),d.Rb(),d.Rb(),d.Sb(184,"td",31),d.Ec(185,"Javascript String"),d.Rb(),d.Sb(186,"td",32),d.Ec(187,'","'),d.Rb(),d.Sb(188,"td",30),d.Ec(189,"Defines the decimal separator."),d.Rb(),d.Rb(),d.Sb(190,"tr"),d.Sb(191,"td",30),d.Sb(192,"b"),d.Ec(193,"[clrGroupingSep]"),d.Rb(),d.Sb(194,"div",33),d.Ec(195,"Type: String"),d.Rb(),d.Sb(196,"div",33),d.Ec(197,'Default: "."'),d.Rb(),d.Rb(),d.Sb(198,"td",31),d.Ec(199,"Javascript String"),d.Rb(),d.Sb(200,"td",32),d.Ec(201,'"."'),d.Rb(),d.Sb(202,"td",30),d.Ec(203,"Defines the grouping separator."),d.Rb(),d.Rb(),d.Sb(204,"tr"),d.Sb(205,"td",30),d.Sb(206,"b"),d.Ec(207,"[clrDecimalPlaces]"),d.Rb(),d.Sb(208,"div",33),d.Ec(209,"Type: Number"),d.Rb(),d.Sb(210,"div",33),d.Ec(211,"Default: 2"),d.Rb(),d.Rb(),d.Sb(212,"td",31),d.Ec(213,"Javascript Number"),d.Rb(),d.Sb(214,"td",32),d.Ec(215,"2"),d.Rb(),d.Sb(216,"td",30),d.Ec(217,"Defines the number of allowed decimal places."),d.Rb(),d.Rb(),d.Sb(218,"tr"),d.Sb(219,"td",30),d.Sb(220,"b"),d.Ec(221,"[clrAutofillDecimals]"),d.Rb(),d.Sb(222,"div",33),d.Ec(223,"Type: Boolean"),d.Rb(),d.Sb(224,"div",33),d.Ec(225,"Default: false"),d.Rb(),d.Rb(),d.Sb(226,"td",31),d.Ec(227,"true, false"),d.Rb(),d.Sb(228,"td",32),d.Ec(229,"false"),d.Rb(),d.Sb(230,"td",30),d.Ec(231,"Defines whether decimal places should automatically be filled with zeroes until clrDecimalPlaces is reached. Useful for money fields. "),d.Rb(),d.Rb(),d.Sb(232,"tr"),d.Sb(233,"td",30),d.Sb(234,"b"),d.Ec(235,"[(clrNumericValue)]"),d.Rb(),d.Sb(236,"div",33),d.Ec(237,"Type: Number"),d.Rb(),d.Sb(238,"div",33),d.Ec(239,'Default: ""'),d.Rb(),d.Rb(),d.Sb(240,"td",31),d.Ec(241,"Javascript Number"),d.Rb(),d.Sb(242,"td",32),d.Ec(243,'""'),d.Rb(),d.Sb(244,"td",30),d.Ec(245,"Two-way bound parameter for the value of the input component."),d.Rb(),d.Rb(),d.Sb(246,"tr"),d.Sb(247,"td",30),d.Sb(248,"b"),d.Ec(249,"[clrUnit]"),d.Rb(),d.Sb(250,"div",33),d.Ec(251,"Type: string"),d.Rb(),d.Sb(252,"div",33),d.Ec(253,'Default: ""'),d.Rb(),d.Rb(),d.Sb(254,"td",31),d.Ec(255,"Javascript String"),d.Rb(),d.Sb(256,"td",32),d.Ec(257,'""'),d.Rb(),d.Sb(258,"td",30),d.Ec(259,"The unit to be displayed on top of the input field."),d.Rb(),d.Rb(),d.Sb(260,"tr"),d.Sb(261,"td",30),d.Sb(262,"b"),d.Ec(263,"[clrUnitPosition]"),d.Rb(),d.Sb(264,"div",33),d.Ec(265,"Type: string"),d.Rb(),d.Sb(266,"div",33),d.Ec(267,'Default: "right"'),d.Rb(),d.Rb(),d.Sb(268,"td",31),d.Ec(269,'"left", "right"'),d.Rb(),d.Sb(270,"td",32),d.Ec(271,'"right"'),d.Rb(),d.Sb(272,"td",30),d.Ec(273,"Determines whether the unit is shown on the right or left side of the value. "),d.Rb(),d.Rb(),d.Sb(274,"tr"),d.Sb(275,"td",30),d.Sb(276,"b"),d.Ec(277,"[clrRoundDisplayValue]"),d.Rb(),d.Sb(278,"div",33),d.Ec(279,"Type: Boolean"),d.Rb(),d.Sb(280,"div",33),d.Ec(281,"Default: false"),d.Rb(),d.Rb(),d.Sb(282,"td",31),d.Ec(283,"true, false"),d.Rb(),d.Sb(284,"td",32),d.Ec(285,"false"),d.Rb(),d.Sb(286,"td",30),d.Ec(287,"Defines whether the value should be rounded or not. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(288,"h4"),d.Ec(289,"Vertical Form (Reactive)"),d.Rb(),d.Sb(290,"p"),d.Ec(291,"In the following section you can find some examples with validation."),d.Rb(),d.Sb(292,"form",34),d.Sb(293,"clr-input-container"),d.Sb(294,"label"),d.Ec(295,"Money"),d.Rb(),d.Nb(296,"input",35),d.Sb(297,"clr-control-error"),d.Ec(298,"Please enter a value between 0 and 10.000"),d.Rb(),d.Rb(),d.Sb(299,"clr-input-container"),d.Sb(300,"label"),d.Ec(301,"Percentage"),d.Rb(),d.Nb(302,"input",36),d.Sb(303,"clr-control-error"),d.Ec(304,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Rb(),d.Nb(305,"clr-code-snippet",37),d.Nb(306,"clr-code-snippet",38),d.Sb(307,"h4"),d.Ec(308,"Horizontal Form (Template Driven)"),d.Rb(),d.Sb(309,"form",39),d.Sb(310,"clr-input-container"),d.Sb(311,"label"),d.Ec(312,"Money"),d.Rb(),d.Sb(313,"input",40),d.ac("ngModelChange",(function(e){return r.moneyTemplate=e})),d.Rb(),d.Sb(314,"clr-control-error"),d.Ec(315,"Please enter a value between 0 and 10.000"),d.Rb(),d.Rb(),d.Sb(316,"clr-input-container"),d.Sb(317,"label"),d.Ec(318,"Percentage"),d.Rb(),d.Sb(319,"input",41),d.ac("ngModelChange",(function(e){return r.percentageTemplate=e})),d.Rb(),d.Sb(320,"clr-control-error"),d.Ec(321,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Rb(),d.Nb(322,"clr-code-snippet",37),d.Sb(323,"h4"),d.Ec(324,"Alignment"),d.Rb(),d.Sb(325,"p"),d.Ec(326,"For special usecases, if necessary the Unit and Value alignment can be defined independently."),d.Rb(),d.Sb(327,"form",39),d.Sb(328,"clr-input-container"),d.Sb(329,"label"),d.Ec(330,"Money"),d.Rb(),d.Nb(331,"input",42),d.Sb(332,"clr-control-error"),d.Ec(333,"Please enter a value between 0 and 10.000"),d.Rb(),d.Rb(),d.Rb(),d.Nb(334,"clr-code-snippet",37),d.Sb(335,"h4"),d.Ec(336,"Rounding"),d.Rb(),d.Sb(337,"p"),d.Ec(338," If "),d.Sb(339,"code"),d.Ec(340,"[clrRoundDisplayValue]"),d.Rb(),d.Ec(341," is "),d.Sb(342,"code"),d.Ec(343,"true"),d.Rb(),d.Ec(344,", the value bound via "),d.Sb(345,"code"),d.Ec(346,"[(clrNumericValue)]"),d.Rb(),d.Ec(347," is displayed rounded."),d.Nb(348,"br"),d.Ec(349," A change event is only fired, after the user modifies the input field. "),d.Rb(),d.Sb(350,"form",43),d.Sb(351,"clr-input-container"),d.Sb(352,"label"),d.Ec(353,"Rounded Value"),d.Rb(),d.Nb(354,"input",44),d.Sb(355,"clr-control-error"),d.Ec(356,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Sb(357,"clr-input-container"),d.Sb(358,"label"),d.Ec(359,"Original Value"),d.Rb(),d.Nb(360,"input",45),d.Sb(361,"clr-control-error"),d.Ec(362,"Please enter a value between 0 and 100"),d.Rb(),d.Rb(),d.Rb(),d.Nb(363,"clr-code-snippet",37),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.kc("ng",r.ng)("ui",r.ui)("title",r.title)("newLayout",r.newLayout),d.Ab(18),d.kc("formGroup",r.usageForm),d.Ab(4),d.kc("clrAutofillDecimals",!0),d.Ab(12),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(12),d.kc("clrDecimalPlaces",0),d.Ab(6),d.kc("clrDecimalPlaces",0),d.Ab(11),d.kc("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrAutofillDecimals",!0),d.Ab(21),d.kc("clrAutofillDecimals",!0),d.Ab(178),d.kc("formGroup",r.exampleForm),d.Ab(4),d.kc("clrUnit","\u20ac")("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrUnit","%")("clrDecimalPlaces",0),d.Ab(3),d.kc("clrCode",r.htmlExample),d.Ab(1),d.kc("clrCode",r.tsExample),d.Ab(7),d.kc("clrUnit","\u20ac")("ngModel",r.moneyTemplate)("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrUnit","%")("ngModel",r.percentageTemplate)("clrDecimalPlaces",0),d.Ab(3),d.kc("clrCode",r.htmlExample2),d.Ab(9),d.kc("clrUnit","\u20ac")("clrUnitPosition","left")("clrAutofillDecimals",!0),d.Ab(3),d.kc("clrCode",r.htmlExample3),d.Ab(16),d.kc("formGroup",r.exampleForm2),d.Ab(4),d.kc("clrUnit","\u20ac")("clrRoundDisplayValue",!0)("clrAutofillDecimals",!0),d.Ab(6),d.kc("clrUnit","\u20ac")("clrDecimalPlaces",5)("clrAutofillDecimals",!0),d.Ab(3),d.kc("clrCode",r.htmlExample4))},directives:[p.a,o.A,o.n,a.u,a.E,o.f,a.C,a.D,o.b,a.B,b.x,o.m,o.d,a.i,o.o,R.a,o.p],encapsulation:2}),t),f=((c=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:c}),c.\u0275inj=d.Jb({factory:function(e){return new(e||c)},imports:[[n.c,o.h,o.u,a.a,a.v,u.a,m.a,i.g.forChild([{path:"",component:S}]),b.a]]}),c)}}]);