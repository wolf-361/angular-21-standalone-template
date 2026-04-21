import{b as G}from"./chunk-N3XDRZBT.js";import{a as B,b as H,c as R}from"./chunk-H62A2X62.js";import{Fb as h,Ha as A,Ia as S,J as M,K as D,Ka as T,La as F,M as _,Ma as f,Na as d,O as c,Oa as o,Pa as s,Qa as j,Ra as k,S as w,T as I,Ta as P,Va as z,Xa as v,Ya as y,Za as l,eb as N,gb as x,hb as C,jc as V,ka as m,rb as L,va as i,wa as E,xa as g}from"./chunk-RNJH33MZ.js";var Q=["*"];var U=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],W=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Y=new _("MAT_CARD_CONFIG"),O=(()=>{class t{appearance;constructor(){let e=c(Y,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(a){return new(a||t)};static \u0275cmp=i({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(a,r){a&2&&N("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Q,decls:1,vars:0,template:function(a,r){a&1&&(y(),l(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return t})(),X=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=g({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return t})();var $=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275dir=g({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return t})();var q=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275cmp=i({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:W,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(a,r){a&1&&(y(U),l(0),j(1,"div",0),l(2,1),k(),l(3,2))},encapsulation:2,changeDetection:0})}return t})();var J=(()=>{class t{static \u0275fac=function(a){return new(a||t)};static \u0275mod=E({type:t});static \u0275inj=D({imports:[V]})}return t})();var p=class t{item=L.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=i({type:t,selectors:[["app-example-card"]],inputs:{item:[1,"item"]},decls:7,vars:2,template:function(e,a){e&1&&(d(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),x(3),o()(),d(4,"mat-card-content")(5,"p"),x(6),o()()()),e&2&&(m(3),C(a.item().title),m(3),C(a.item().body))},dependencies:[J,O,$,q,X],encapsulation:2})};var u=class t{api=c(G);items=h(()=>this.api.url("/posts"));itemById(n){return h(()=>this.api.url(`/posts/${n()}`))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})};var et=(t,n)=>n.id;function at(t,n){t&1&&s(0,"ui-spinner")}function nt(t,n){if(t&1){let e=P();d(0,"ui-error",4),z("retry",function(){w(e);let r=v();return I(r.items.reload())}),o()}t&2&&f("retryable",!0)}function rt(t,n){t&1&&s(0,"ui-empty",2)}function it(t,n){if(t&1&&s(0,"app-example-card",5),t&2){let e=n.$implicit;f("item",e)}}function dt(t,n){if(t&1&&(d(0,"div",3),T(1,it,1,1,"app-example-card",5,et),o()),t&2){let e=v();m(),F(e.items.value())}}var K=class t{items=c(u).items;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=i({type:t,selectors:[["app-example-page"]],decls:5,vars:1,consts:[[1,"page"],["message","Could not load items.",3,"retryable"],["title","No items found","description","There are no items to display."],[1,"grid"],["message","Could not load items.",3,"retry","retryable"],[3,"item"]],template:function(e,a){if(e&1&&(d(0,"div",0),A(1,at,1,0,"ui-spinner")(2,nt,1,1,"ui-error",1)(3,rt,1,0,"ui-empty",2)(4,dt,3,0,"div",3),o()),e&2){let r;m(),S(a.items.isLoading()?1:a.items.error()?2:(r=a.items.value())!=null&&r.length?4:3)}},dependencies:[p,B,H,R],styles:[".page[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:2rem 1.5rem}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem}"]})};export{K as ExamplePageComponent};
