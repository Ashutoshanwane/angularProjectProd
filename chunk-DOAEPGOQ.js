import{a as B}from"./chunk-UGL5ENVE.js";import{a as z}from"./chunk-H7WJSIKO.js";import{$a as A,Aa as p,Ba as g,C as k,Fa as U,Ga as v,Ha as h,O as w,P as L,U as b,V as E,Z as F,ab as T,bb as j,ca as P,cb as O,da as a,db as D,ea as m,fb as M,gb as V,h as x,i as C,l as y,la as _,ma as s,oa as u,sa as l,t as S,ta as r,ua as f,va as I,wa as R,xa as d}from"./chunk-SZXAI6IQ.js";import"./chunk-X37UMAR5.js";var N=()=>({exact:!0}),H=e=>["/profile",e],J=e=>["/profile",e,"favorites"],K=()=>["/settings"];function Q(e,n){if(e&1){let i=I();l(0,"app-follow-button",12),R("toggle",function(o){b(i);let c=d(2);return E(c.onToggleFollowing(o))}),r()}if(e&2){let i=d(2);s("profile",i.profile)}}function W(e,n){e&1&&(l(0,"a",7),f(1,"i",13),p(2," Edit Profile Settings "),r()),e&2&&s("routerLink",v(1,K))}function X(e,n){if(e&1&&(l(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),f(5,"img",5),l(6,"h4"),p(7),r(),l(8,"p"),p(9),r(),_(10,Q,1,1,"app-follow-button",6)(11,W,3,2,"a",7),r()()()(),l(12,"div",2)(13,"div",3)(14,"div",4)(15,"div",8)(16,"ul",9)(17,"li",10)(18,"a",11),p(19," My Posts "),r()(),l(20,"li",10)(21,"a",11),p(22," Favorited Posts "),r()()()(),f(23,"router-outlet"),r()()()()),e&2){let i=d();a(5),s("src",i.profile.image,P),a(2),g(i.profile.username),a(2),g(i.profile.bio),a(),u(i.isUser?-1:10),a(),u(i.isUser?11:-1),a(7),s("routerLinkActiveOptions",v(9,N))("routerLink",h(10,H,i.profile.username)),a(3),s("routerLinkActiveOptions",v(12,N))("routerLink",h(13,J,i.profile.username))}}var q=(()=>{let n=class n{constructor(t,o,c,G){this.route=t,this.router=o,this.userService=c,this.profileService=G,this.isUser=!1,this.destroyRef=w(F)}ngOnInit(){this.profileService.get(this.route.snapshot.params.username).pipe(S(t=>(this.router.navigate(["/"]),C(()=>t))),k(t=>y([x(t),this.userService.currentUser])),V(this.destroyRef)).subscribe(([t,o])=>{this.profile=t,this.isUser=t.username===o?.username})}onToggleFollowing(t){this.profile=t}};n.\u0275fac=function(o){return new(o||n)(m(A),m(j),m(M),m(z))},n.\u0275cmp=L({type:n,selectors:[["app-profile-page"]],standalone:!0,features:[U],decls:1,vars:1,consts:[[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],[3,"profile"],[1,"btn","btn-sm","btn-outline-secondary","action-btn",3,"routerLink"],[1,"articles-toggle"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLinkActiveOptions","routerLink"],[3,"toggle","profile"],[1,"ion-gear-a"]],template:function(o,c){o&1&&_(0,X,24,15,"div",0),o&2&&u(c.profile?0:-1)},dependencies:[B,O,D,T],encapsulation:2});let e=n;return e})();var Y=[{path:"",children:[{path:":username",component:q,children:[{path:"",loadComponent:()=>import("./chunk-QSTSNHAW.js")},{path:"favorites",loadComponent:()=>import("./chunk-PG74K4ZN.js")}]}]}],me=Y;export{me as default};
