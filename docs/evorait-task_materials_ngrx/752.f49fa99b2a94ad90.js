"use strict";(self.webpackChunkevora_task=self.webpackChunkevora_task||[]).push([[752],{2752:(g,u,a)=>{a.r(u),a.d(u,{MaterialRowComponent:()=>d});var _=a(4093),n=a(95),m=a(3063),t=a(9212),p=a(5655);const c=i=>[i];let d=(()=>{class i{constructor(l){this.store=l}book(){this.inputQuantity>this.material.Available?alert("Not enough items available"):this.store.dispatch((0,_.iY)({materialId:this.material.id,amount:this.inputQuantity}))}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(p.yh))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-material-row"]],inputs:{material:"material"},standalone:!0,features:[t.jDz],decls:15,vars:11,consts:[[1,"row","no-gutters","w-100",3,"routerLink"],[1,"col","p-3","text-center"],[1,"col","p-3","text-center","highlight"],[1,"col","p-3","text-center","d-flex"],["type","number","min","0",1,"w-50","mr-1",3,"max","ngModel","ngModelChange","click"],[1,"w-50",3,"disabled","click"]],template:function(r,e){1&r&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"div",1),t._uU(4),t.qZA(),t.TgZ(5,"div",1),t._uU(6),t.qZA(),t.TgZ(7,"div",2),t._uU(8),t.qZA(),t.TgZ(9,"div",2),t._uU(10),t.qZA(),t.TgZ(11,"div",3)(12,"input",4),t.NdJ("ngModelChange",function(o){return e.inputQuantity=o})("click",function(o){return o.stopPropagation()}),t.qZA(),t.TgZ(13,"button",5),t.NdJ("click",function(o){return e.book(),o.stopPropagation()}),t._uU(14,"Book"),t.qZA()()()),2&r&&(t.Q6J("routerLink",t.VKq(9,c,"/material-details/"+e.material.id)),t.xp6(2),t.Oqu(e.material.DescTxt),t.xp6(2),t.Oqu(e.material.CustomerPrice),t.xp6(2),t.Oqu(e.material.CustomerCurrency),t.xp6(2),t.Oqu(e.material.Quantity),t.xp6(2),t.Oqu(e.material.Available),t.xp6(2),t.Q6J("max",e.material.Available)("ngModel",e.inputQuantity),t.xp6(),t.Q6J("disabled",!e.inputQuantity))},dependencies:[m.rH,n.u5,n.Fj,n.wV,n.JJ,n.qQ,n.Fd,n.On],styles:[".row[_ngcontent-%COMP%]{cursor:pointer;border-radius:1rem}.row[_ngcontent-%COMP%]:hover{background-color:#cff}.highlight[_ngcontent-%COMP%]{color:#48f}"]})}return i})()}}]);