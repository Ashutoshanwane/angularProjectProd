import{a as d}from"./chunk-37MYFC5I.js";import"./chunk-X6XCF74G.js";import{a as u}from"./chunk-H7WJSIKO.js";import"./chunk-UMR7KID5.js";import{$a as l,Fa as f,O as s,P as n,Z as a,ea as o,gb as m,ma as p,ua as c}from"./chunk-SZXAI6IQ.js";import"./chunk-X37UMAR5.js";var j=(()=>{let e=class e{constructor(i,t){this.route=i,this.profileService=t,this.destroyRef=s(a)}ngOnInit(){this.profileService.get(this.route.snapshot.params.username).pipe(m(this.destroyRef)).subscribe({next:i=>{this.profile=i,this.articlesConfig={type:"all",filters:{author:this.profile.username}}}})}};e.\u0275fac=function(t){return new(t||e)(o(l),o(u))},e.\u0275cmp=n({type:e,selectors:[["app-profile-articles"]],standalone:!0,features:[f],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(t,h){t&1&&c(0,"app-article-list",0),t&2&&p("limit",10)("config",h.articlesConfig)},dependencies:[d],encapsulation:2});let r=e;return r})();export{j as default};
