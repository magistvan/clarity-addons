(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{J6jG:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){this.nodeImports='\n"styles": [\n      "node_modules/@porscheinformatik/clr-addons/styles/clr-addons-phs.min.css",\n      ... any other styles\n]\n',this.htmlImports='\n<link rel="stylesheet" href="path/to/node_modules/@porscheinformatik/clr-addons/styles/clr-addons-phs.min.css">\n',this.ngModuleExample='\nimport { NgModule } from "@angular/core";\nimport { ClrAddonsModule } from \'@porscheinformatik/clr-addons\';\nimport { AppComponent } from "./app.component";\n\n@NgModule({\n    imports: [\n        ClrAddonsModule,\n        ...\n     ],\n     declarations: [ AppComponent ],\n     bootstrap: [ AppComponent ]\n})\nexport class AppModule { }\n'}}(),o={browserTitle:"Get Started"},s=function(){return function(){}}(),a=u("zl1X"),b=u("pMnS"),i=u("QkwE"),d=u("vAyd"),r=e.qb({encapsulation:2,styles:[],data:{}});function c(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,72,"section",[["class","dox-content"]],null,null,null,null,null)),(l()(),e.sb(1,0,null,null,1,"h1",[["id","introduction"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Clarity-Addons"])),(l()(),e.sb(3,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Project Clarity-Addons is an addon to "])),(l()(),e.sb(5,0,null,null,1,"a",[["href","https://clarity.design/"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Clarity"])),(l()(),e.sb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["It contains additional components and patterns which are not in scope of Clarity and also provides customized themes. "])),(l()(),e.sb(9,0,null,null,1,"h2",[["id","howToUse"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["How to Use Clarity-Addons"])),(l()(),e.sb(11,0,null,null,1,"h4",[["id","installclarity"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Step 0: Install Clarity"])),(l()(),e.sb(13,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Prerequisite ist an installed clarity package. See "])),(l()(),e.sb(15,0,null,null,1,"a",[["href","https://clarity.design/documentation/get-started"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Clarity Get Started"])),(l()(),e.sb(17,0,null,null,1,"h4",[["id","installing"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Step 1: Install Clarity-Addons package"])),(l()(),e.sb(19,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.sb(20,0,null,null,1,"clr-code-snippet",[],null,null,null,i.b,i.a)),e.rb(21,4243456,null,0,d.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.sb(22,0,null,null,1,"h5",[["id","styles"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Step 2: Adding customized styles"])),(l()(),e.sb(24,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["You can find all compiled styles in "])),(l()(),e.sb(26,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["node_modules/@porscheinformatik/clr-addons/styles/"])),(l()(),e.Kb(-1,null,[". These styles already contain the clarity styles, so if you imported them, you can remove the clarity styles now. "])),(l()(),e.sb(29,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["If you are using the Angular CLI, you need to add the "])),(l()(),e.sb(31,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[".angular.json"])),(l()(),e.Kb(-1,null,[" file."])),(l()(),e.sb(34,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Find the "])),(l()(),e.sb(36,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["styles"])),(l()(),e.Kb(-1,null,[" arrays and add the following: "])),(l()(),e.sb(39,0,null,null,1,"clr-code-snippet",[],null,null,null,i.b,i.a)),e.rb(40,4243456,null,0,d.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.sb(41,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.sb(42,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["If you are not using the CLI, you'll need to add the files listed above to your build tooling or you could also put them in the head of the index.html file like: "])),(l()(),e.sb(44,0,null,null,1,"clr-code-snippet",[],null,null,null,i.b,i.a)),e.rb(45,4243456,null,0,d.a,[],{code:[0,"code"],disablePrism:[1,"disablePrism"]},null),(l()(),e.sb(46,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),e.sb(47,0,null,null,1,"h5",[["id","angular"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Step 3: Add Clarity-Addons to Angular application"])),(l()(),e.sb(49,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Import the ClarityAddonsModule into your Angular application's module. Your application's main module might look like this: "])),(l()(),e.sb(51,0,null,null,1,"clr-code-snippet",[],null,null,null,i.b,i.a)),e.rb(52,4243456,null,0,d.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.sb(53,0,null,null,1,"h4",[["id","run-your-app"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Step 4: Run Your App"])),(l()(),e.sb(55,0,null,null,1,"clr-code-snippet",[["clrLanguage","bash"]],null,null,null,i.b,i.a)),e.rb(56,4243456,null,0,d.a,[],{code:[0,"code"],language:[1,"language"],disablePrism:[2,"disablePrism"]},null),(l()(),e.sb(57,0,null,null,1,"h4",[["id","update"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Step 5: Update Clarity-Addons"])),(l()(),e.sb(59,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["In order to keep up with Clarity-Addons, you can use ng update to automatically update Clarity-Addons to the latest version in your Angular project."])),(l()(),e.sb(61,0,null,null,1,"clr-code-snippet",[["clrLanguage","bash"]],null,null,null,i.b,i.a)),e.rb(62,4243456,null,0,d.a,[],{code:[0,"code"],language:[1,"language"],disablePrism:[2,"disablePrism"]},null),(l()(),e.sb(63,0,null,null,1,"h2",[["id","contribute_guidelines"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Contributing to Clarity-Addons"])),(l()(),e.sb(65,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["The Clarity-Addons team welcomes contributions from the community. Same rules apply as for Clarity Contributions. "])),(l()(),e.sb(67,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Internal Porscheinformatik Guidelines can be found here: "])),(l()(),e.sb(69,0,null,null,1,"a",[["href","https://confluence.porscheinformatik.com/confluence/display/PSACNG/Contribution+to+Clarity-Addons"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Porscheinformatik Guidelines"])),(l()(),e.sb(71,0,null,null,1,"div",[["style","visibility: hidden; height: 80vh;"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["This is a spacer to force sidenav highlighting on scroll"]))],function(l,n){var u=n.component;l(n,21,0,"npm install @porscheinformatik/clr-addons --save",!0),l(n,40,0,u.nodeImports,!0),l(n,45,0,u.htmlImports,!0),l(n,52,0,u.ngModuleExample,"typescript"),l(n,56,0,"npm start","bash",!0),l(n,62,0,"ng update @porscheinformatik/clr-addons","bash",!0)},null)}function p(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"get-started",[],[[2,"content-area",null]],null,null,c,r)),e.rb(1,49152,null,0,t,[],null,null)],null,function(l,n){l(n,0,0,!0)})}var A=e.ob("get-started",t,p,{},{},[]),h=u("Ip0R"),m=u("gIcY"),y=u("xLE1"),g=u("XPsC"),f=u("ZYCi");u.d(n,"GetStartedModuleNgFactory",function(){return C});var C=e.pb(s,[],function(l){return e.zb([e.Ab(512,e.j,e.db,[[8,[a.ab,a.a,a.b,a.d,a.e,a.f,a.g,a.h,a.c,a.bb,a.cb,a.db,a.eb,b.a,A]],[3,e.j],e.z]),e.Ab(4608,h.s,h.r,[e.w,[2,h.K]]),e.Ab(4608,m.D,m.D,[]),e.Ab(1073742336,h.c,h.c,[]),e.Ab(1073742336,y.gb,y.gb,[]),e.Ab(1073742336,y.Hc,y.Hc,[]),e.Ab(1073742336,y.Fe,y.Fe,[]),e.Ab(1073742336,y.Y,y.Y,[]),e.Ab(1073742336,y.i,y.i,[]),e.Ab(1073742336,y.ab,y.ab,[]),e.Ab(1073742336,y.u,y.u,[]),e.Ab(1073742336,y.Qc,y.Qc,[]),e.Ab(1073742336,y.s,y.s,[]),e.Ab(1073742336,y.Tc,y.Tc,[]),e.Ab(1073742336,y.O,y.O,[]),e.Ab(1073742336,m.C,m.C,[]),e.Ab(1073742336,m.k,m.k,[]),e.Ab(1073742336,y.lb,y.lb,[]),e.Ab(1073742336,y.Bb,y.Bb,[]),e.Ab(1073742336,y.Fb,y.Fb,[]),e.Ab(1073742336,y.Jb,y.Jb,[]),e.Ab(1073742336,y.dc,y.dc,[]),e.Ab(1073742336,y.db,y.db,[]),e.Ab(1073742336,y.rb,y.rb,[]),e.Ab(1073742336,y.dd,y.dd,[]),e.Ab(1073742336,y.gd,y.gd,[]),e.Ab(1073742336,y.S,y.S,[]),e.Ab(1073742336,y.H,y.H,[]),e.Ab(1073742336,y.Tb,y.Tb,[]),e.Ab(1073742336,y.jc,y.jc,[]),e.Ab(1073742336,y.y,y.y,[]),e.Ab(1073742336,y.vb,y.vb,[]),e.Ab(1073742336,y.qb,y.qb,[]),e.Ab(1073742336,y.n,y.n,[]),e.Ab(1073742336,y.o,y.o,[]),e.Ab(1073742336,y.tb,y.tb,[]),e.Ab(1073742336,y.yb,y.yb,[]),e.Ab(1073742336,y.de,y.de,[]),e.Ab(1073742336,y.ac,y.ac,[]),e.Ab(1073742336,y.oc,y.oc,[]),e.Ab(1073742336,y.ob,y.ob,[]),e.Ab(1073742336,y.Mb,y.Mb,[]),e.Ab(1073742336,y.gc,y.gc,[]),e.Ab(1073742336,y.Cb,y.Cb,[]),e.Ab(1073742336,y.sc,y.sc,[]),e.Ab(1073742336,y.se,y.se,[]),e.Ab(1073742336,y.re,y.re,[]),e.Ab(1073742336,y.a,y.a,[]),e.Ab(1073742336,g.a,g.a,[]),e.Ab(1073742336,f.p,f.p,[[2,f.u],[2,f.l]]),e.Ab(1073742336,s,s,[]),e.Ab(1024,f.j,function(){return[[{path:"",component:t,data:o}]]},[])])})}}]);