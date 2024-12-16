import{a as N,b as C,c as w,d as F,e as E,g as l,h as x,j as _,k as D,m as R,n as U}from"./chunk-L5AKXTBM.js";import{Aa as m,Fa as h,O as f,P as g,Z as b,bb as S,da as a,ea as d,fb as v,gb as y,ma as u,sa as e,ta as t,ua as i,wa as c}from"./chunk-SZXAI6IQ.js";import"./chunk-X37UMAR5.js";var A=(()=>{let o=class o{constructor(r,n){this.router=r,this.userService=n,this.settingsForm=new E({image:new l("",{nonNullable:!0}),username:new l("",{nonNullable:!0}),bio:new l("",{nonNullable:!0}),email:new l("",{nonNullable:!0}),password:new l("",{validators:[C.required],nonNullable:!0})}),this.errors=null,this.isSubmitting=!1,this.destroyRef=f(b)}ngOnInit(){this.settingsForm.patchValue(this.userService.getCurrentUser())}logout(){this.userService.logout()}submitForm(){this.isSubmitting=!0,this.userService.update(this.settingsForm.value).pipe(y(this.destroyRef)).subscribe({next:({user:r})=>void this.router.navigate(["/profile/",r.username]),error:r=>{this.errors=r,this.isSubmitting=!1}})}};o.\u0275fac=function(n){return new(n||o)(d(S),d(v))},o.\u0275cmp=g({type:o,selectors:[["app-settings-page"]],standalone:!0,features:[h],decls:25,vars:3,consts:[[1,"settings-page"],[1,"container","page"],[1,"row"],[1,"col-md-6","offset-md-3","col-xs-12"],[1,"text-xs-center"],[3,"errors"],[3,"ngSubmit","formGroup"],[3,"disabled"],[1,"form-group"],["type","text","placeholder","URL of profile picture","formControlName","image",1,"form-control"],["type","text","placeholder","Username","formControlName","username",1,"form-control","form-control-lg"],["rows","8","placeholder","Short bio about you","formControlName","bio",1,"form-control","form-control-lg"],["type","email","placeholder","Email","formControlName","email",1,"form-control","form-control-lg"],["type","password","placeholder","New Password","formControlName","password",1,"form-control","form-control-lg"],["type","submit",1,"btn","btn-lg","btn-primary","pull-xs-right"],[1,"btn","btn-outline-danger",3,"click"]],template:function(n,s){n&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),m(5,"Your Settings"),t(),i(6,"app-list-errors",5),e(7,"form",6),c("ngSubmit",function(){return s.submitForm()}),e(8,"fieldset",7)(9,"fieldset",8),i(10,"input",9),t(),e(11,"fieldset",8),i(12,"input",10),t(),e(13,"fieldset",8)(14,"textarea",11),m(15,"              "),t()(),e(16,"fieldset",8),i(17,"input",12),t(),e(18,"fieldset",8),i(19,"input",13),t(),e(20,"button",14),m(21," Update Settings "),t()()(),i(22,"hr"),e(23,"button",15),c("click",function(){return s.logout()}),m(24," Or click here to logout. "),t()()()()()),n&2&&(a(6),u("errors",s.errors),a(),u("formGroup",s.settingsForm),a(),u("disabled",s.isSubmitting))},dependencies:[U,R,x,N,w,F,_,D],encapsulation:2});let p=o;return p})();export{A as default};
