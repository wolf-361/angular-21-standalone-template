import{b as it,d as De,e as nt,f as at,g as H,h as G,i as ne,k as ot,l as rt,m as st,o as ae,p as lt,q as oe}from"./chunk-Z53M56QU.js";import{a as dt,b as ct,c as mt}from"./chunk-H62A2X62.js";import{$ as Pe,$a as ze,Aa as Z,D as $,Fb as qe,Ga as F,Ha as Ne,Ia as je,J as Q,Ja as K,Jb as X,K as M,Ka as N,La as j,Lb as $e,M as x,Ma as g,Mb as ve,Na as s,O as l,Oa as o,Ob as Qe,Pa as p,S as Me,Sb as Ue,T as ke,Ta as Ve,Tb as Ye,Ua as fe,Ub as Ze,Va as w,Vb as J,W as b,X as Ie,Xa as _e,Xb as z,_ as U,a as y,ab as He,b as Oe,bb as Ge,ca as k,cc as ye,da as C,ea as Y,eb as V,ec as be,f as D,ga as f,gb as r,h as ge,hb as S,hc as Ke,ib as L,ic as Ce,jc as ee,ka as m,la as Fe,lc as te,ma as Le,mc as Xe,nc as Je,oa as Re,oc as ie,pc as et,qc as tt,rb as E,sb as We,t as q,u as Te,v as B,va as _,wa as I,xa as h,ya as Be,z as T,za as P}from"./chunk-RNJH33MZ.js";function Et(i,a){}var A=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var we=(()=>{class i extends at{_elementRef=l(f);_focusTrapFactory=l(Ye);_config;_interactivityChecker=l(Ue);_ngZone=l(Pe);_focusMonitor=l(Qe);_renderer=l(Re);_changeDetectorRef=l(We);_injector=l(b);_platform=l($e);_document=l(Ie);_portalOutlet;_focusTrapped=new D;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=l(A,{optional:!0})||new A,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{d(),u(),e.removeAttribute("tabindex")},d=this._renderer.listen(e,"blur",n),u=this._renderer.listen(e,"mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Fe(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let n=X(),d=this._elementRef.nativeElement;(!n||n===this._document.body||n===d||d.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=X();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=X()))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(t&1&&ze(H,7),t&2){let d;He(d=Ge())&&(n._portalOutlet=d.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){t&2&&F("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[P],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){t&1&&Z(0,Et,0,0,"ng-template",0)},dependencies:[H],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return i})(),W=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new D;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(a,e){this.overlayRef=a,this.config=e,this.disableClose=e.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!J(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=a.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(a,e){if(this._canClose(a)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(a),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",e=""){return this.overlayRef.updateSize({width:a,height:e}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}_canClose(a){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(a,e,this.componentInstance))}},At=new x("DialogScrollStrategy",{providedIn:"root",factory:()=>{let i=l(b);return()=>ne(i)}}),Ot=new x("DialogData"),Tt=new x("DefaultDialogConfig");function Mt(i){let a=k(i),e=new U;return{valueSignal:a,get value(){return a()},change:e,ngOnDestroy(){e.complete()}}}var Se=(()=>{class i{_injector=l(b);_defaultOptions=l(Tt,{optional:!0});_parentDialog=l(i,{optional:!0,skipSelf:!0});_overlayContainer=l(rt);_idGenerator=l(z);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;_ariaHiddenElements=new Map;_scrollStrategy=l(At);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=q(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe($(void 0)));constructor(){}open(e,t){let n=this._defaultOptions||new A;t=y(y({},n),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let d=this._getOverlayConfig(t),u=lt(this._injector,d),c=new W(u,t),v=this._attachContainer(u,c,t);if(c.containerInstance=v,!this.openDialogs.length){let he=this._overlayContainer.getContainerElement();v._focusTrapped?v._focusTrapped.pipe(T(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(he)}):this._hideNonDialogContentFromAssistiveTechnology(he)}return this._attachDialogContent(e,c,v,t),this.openDialogs.push(c),c.closed.subscribe(()=>this._removeOpenDialog(c,!0)),this.afterOpened.next(c),c}closeAll(){xe(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){xe(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),xe(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new ot({positionStrategy:e.positionStrategy||ae().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let d=n.injector||n.viewContainerRef?.injector,u=[{provide:A,useValue:n},{provide:W,useValue:t},{provide:st,useValue:e}],c;n.container?typeof n.container=="function"?c=n.container:(c=n.container.type,u.push(...n.container.providers(n))):c=we;let v=new De(c,n.viewContainerRef,b.create({parent:d||this._injector,providers:u}));return e.attach(v).instance}_attachDialogContent(e,t,n,d){if(e instanceof Le){let u=this._createInjector(d,t,n,void 0),c={$implicit:d.data,dialogRef:t};d.templateContext&&(c=y(y({},c),typeof d.templateContext=="function"?d.templateContext():d.templateContext)),n.attachTemplatePortal(new nt(e,null,c,u))}else{let u=this._createInjector(d,t,n,this._injector),c=n.attachComponentPortal(new De(e,d.viewContainerRef,u));t.componentRef=c,t.componentInstance=c.instance}}_createInjector(e,t,n,d){let u=e.injector||e.viewContainerRef?.injector,c=[{provide:Ot,useValue:e.data},{provide:W,useValue:t}];return e.providers&&(typeof e.providers=="function"?c.push(...e.providers(t,e,n)):c.push(...e.providers)),e.direction&&(!u||!u.get(Ce,null,{optional:!0}))&&c.push({provide:Ce,useValue:Mt(e.direction)}),b.create({parent:u||d,providers:c})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((d,u)=>{d?u.setAttribute("aria-hidden",d):u.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let d=t[n];d!==e&&d.nodeName!=="SCRIPT"&&d.nodeName!=="STYLE"&&!d.hasAttribute("aria-live")&&!d.hasAttribute("popover")&&(this._ariaHiddenElements.set(d,d.getAttribute("aria-hidden")),d.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function xe(i,a){let e=i.length;for(;e--;)a(i[e])}var pt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=M({providers:[Se],imports:[oe,G,Ze,G]})}return i})();function kt(i,a){}var se=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},Ee="mdc-dialog--open",ht="mdc-dialog--opening",gt="mdc-dialog--closing",It=150,Pt=75,Ft=(()=>{class i extends we{_animationStateChanged=new U;_animationsEnabled=!ye();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?_t(this._config.enterAnimationDuration)??It:0;_exitAnimationDuration=this._animationsEnabled?_t(this._config.exitAnimationDuration)??Pt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ft,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ht,Ee)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Ee),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Ee),this._animationsEnabled?(this._hostElement.style.setProperty(ft,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(gt)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ht,gt)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(i)))(n||i)}})();static \u0275cmp=_({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,n){t&2&&(fe("id",n._config.id),F("aria-modal",n._config.ariaModal)("role",n._config.role)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledByQueue[0])("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null),V("_mat-animation-noopable",!n._animationsEnabled)("mat-mdc-dialog-container-with-actions",n._actionSectionCount>0))},features:[P],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,n){t&1&&(s(0,"div",0)(1,"div",1),Z(2,kt,0,0,"ng-template",2),o()())},dependencies:[H],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return i})(),ft="--mat-dialog-transition-duration";function _t(i){return i==null?null:typeof i=="number"?i:i.endsWith("ms")?ve(i.substring(0,i.length-2)):i.endsWith("s")?ve(i.substring(0,i.length-1))*1e3:i==="0"?0:null}var re=(function(i){return i[i.OPEN=0]="OPEN",i[i.CLOSING=1]="CLOSING",i[i.CLOSED=2]="CLOSED",i})(re||{}),R=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new ge(1);_beforeClosed=new ge(1);_result;_closeFallbackTimeout;_state=re.OPEN;_closeInteractionType;constructor(a,e,t){this._ref=a,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(B(n=>n.state==="opened"),T(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(B(n=>n.state==="closed"),T(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),Te(this.backdropClick(),this.keydownEvents().pipe(B(n=>n.keyCode===27&&!this.disableClose&&!J(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),Lt(this,n.type==="keydown"?"keyboard":"mouse"))})}close(a){let e=this._config.closePredicate;e&&!e(a,this._config,this.componentInstance)||(this._result=a,this._containerInstance._animationStateChanged.pipe(B(t=>t.state==="closing"),T(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=re.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let e=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?e.left(a.left):e.right(a.right):e.centerHorizontally(),a&&(a.top||a.bottom)?a.top?e.top(a.top):e.bottom(a.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",e=""){return this._ref.updateSize(a,e),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=re.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function Lt(i,a,e){return i._closeInteractionType=a,i.close(e)}var Ae=new x("MatMdcDialogData"),Rt=new x("mat-mdc-dialog-default-options"),Bt=new x("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let i=l(b);return()=>ne(i)}}),le=(()=>{class i{_defaultOptions=l(Rt,{optional:!0});_scrollStrategy=l(Bt);_parentDialog=l(i,{optional:!0,skipSelf:!0});_idGenerator=l(z);_injector=l(b);_dialog=l(Se);_animationsDisabled=ye();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new D;_afterOpenedAtThisLevel=new D;dialogConfigClass=se;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=q(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe($(void 0)));constructor(){this._dialogRefConstructor=R,this._dialogContainerType=Ft,this._dialogDataToken=Ae}open(e,t){let n;t=y(y({},this._defaultOptions||new se),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let d=this._dialog.open(e,Oe(y({},t),{positionStrategy:ae(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:A,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(u,c,v)=>(n=new this._dialogRefConstructor(u,t,v),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:v},{provide:this._dialogDataToken,useValue:c.data},{provide:this._dialogRefConstructor,useValue:n}])}));return n.componentRef=d.componentRef,n.componentInstance=d.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let u=this.openDialogs.indexOf(n);u>-1&&(this.openDialogs.splice(u,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=Q({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vt=(()=>{class i{_dialogRef=l(R,{optional:!0});_elementRef=l(f);_dialog=l(le);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=Nt(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=h({type:i})}return i})(),yt=(()=>{class i extends vt{id=l(z).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(i)))(n||i)}})();static \u0275dir=h({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(t,n){t&2&&fe("id",n.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[P]})}return i})(),bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=h({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[Be([it])]})}return i})(),Ct=(()=>{class i extends vt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(i)))(n||i)}})();static \u0275dir=h({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(t,n){t&2&&V("mat-mdc-dialog-actions-align-start",n.align==="start")("mat-mdc-dialog-actions-align-center",n.align==="center")("mat-mdc-dialog-actions-align-end",n.align==="end")},inputs:{align:"align"},features:[P]})}return i})();function Nt(i,a){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?a.find(t=>t.id===e.id):null}var Dt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=M({providers:[le],imports:[pt,oe,G,ee]})}return i})();var xt=(()=>{class i{get vertical(){return this._vertical}set vertical(e){this._vertical=be(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=be(e)}_inset=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=_({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,n){t&2&&(F("aria-orientation",n.vertical?"vertical":"horizontal"),V("mat-divider-vertical",n.vertical)("mat-divider-horizontal",!n.vertical)("mat-divider-inset",n.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0})}return i})(),wt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=I({type:i});static \u0275inj=M({imports:[ee]})}return i})();var de=class i{el=l(f);textColor=E.required();ngOnChanges(){this.el.nativeElement.style.color=`var(--mat-sys-${this.textColor()})`}static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i,selectors:[["","textColor",""]],inputs:{textColor:[1,"textColor"]},features:[C]})};var zt={surface:"--mat-sys-on-surface","surface-variant":"--mat-sys-on-surface-variant","surface-container-lowest":"--mat-sys-on-surface","surface-container-low":"--mat-sys-on-surface","surface-container":"--mat-sys-on-surface","surface-container-high":"--mat-sys-on-surface","surface-container-highest":"--mat-sys-on-surface","primary-container":"--mat-sys-on-primary-container","secondary-container":"--mat-sys-on-secondary-container","tertiary-container":"--mat-sys-on-tertiary-container","error-container":"--mat-sys-on-error-container"},ce=class i{el=l(f);surface=E.required();ngOnChanges(){let a=this.surface(),e=this.el.nativeElement;e.style.backgroundColor=`var(--mat-sys-${a})`,e.style.color=`var(${zt[a]})`}static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i,selectors:[["","surface",""]],inputs:{surface:[1,"surface"]},features:[C]})};var me=class i{el=l(f);elevation=E.required();ngOnChanges(){this.el.nativeElement.style.boxShadow=`var(--mat-sys-level${this.elevation()})`}static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i,selectors:[["","elevation",""]],inputs:{elevation:[1,"elevation"]},features:[C]})};var ue=class i{el=l(f);loading=E.required();ngOnChanges(){this.el.nativeElement.disabled=this.loading(),this.el.nativeElement.style.position="relative"}static \u0275fac=function(e){return new(e||i)};static \u0275dir=h({type:i,selectors:[["button","loading",""]],inputs:{loading:[1,"loading"]},features:[C]})};var pe=class i{ref=l(R);data=l(Ae);static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["ui-confirm-dialog"]],decls:9,vars:5,consts:[["mat-dialog-title",""],["align","end"],["mat-button","",3,"click"],["mat-flat-button","",3,"click","color"]],template:function(e,t){e&1&&(s(0,"h2",0),r(1),o(),s(2,"mat-dialog-content"),r(3),o(),s(4,"mat-dialog-actions",1)(5,"button",2),w("click",function(){return t.ref.close(!1)}),r(6),o(),s(7,"button",3),w("click",function(){return t.ref.close(!0)}),r(8),o()()),e&2&&(m(),S(t.data.title),m(2),S(t.data.message),m(3),L(" ",t.data.cancelLabel??"Cancel"," "),m(),g("color",t.data.destructive?"warn":"primary"),m(),L(" ",t.data.confirmLabel??"Confirm"," "))},dependencies:[Dt,yt,Ct,bt,ie,te],encapsulation:2})};var Wt=(i,a)=>a.id;function qt(i,a){if(i&1&&(s(0,"span",19),r(1),o()),i&2){let e=a.$implicit;g("textColor",e),m(),S(e)}}function $t(i,a){if(i&1&&(s(0,"div",20)(1,"span",26),r(2),o()()),i&2){let e=a.$implicit;g("surface",e)("elevation",1),m(2),S(e)}}function Qt(i,a){if(i&1&&(s(0,"div",21),r(1),o()),i&2){let e=a.$implicit;g("elevation",e),m(),L("Level ",e)}}function Ut(i,a){i&1&&p(0,"ui-spinner")}function Yt(i,a){if(i&1){let e=Ve();s(0,"ui-error",27),w("retry",function(){Me(e);let n=_e();return ke(n.posts.reload())}),o()}}function Zt(i,a){if(i&1&&(s(0,"div",28)(1,"p",29),r(2),o(),s(3,"p",30),r(4),o()()),i&2){let e=a.$implicit;g("surface","surface-container")("elevation",1),m(),g("textColor","primary"),m(),S(e.title),m(2),S(e.body)}}function Kt(i,a){if(i&1&&(s(0,"div",12),N(1,Zt,5,5,"div",28,Wt),o()),i&2){let e=_e();m(),j(e.posts.value())}}var St=class i{dialog=l(le);isSubmitting=k(!1);showEmpty=k(!1);showError=k(!1);posts=qe(()=>"https://jsonplaceholder.typicode.com/posts?_limit=3");elevationLevels=[0,1,2,3,4,5];textRoles=["primary","secondary","tertiary","error","on-surface","on-surface-variant"];surfaceRoles=["surface","surface-container-low","surface-container","surface-container-high","surface-container-highest","primary-container","secondary-container","tertiary-container","error-container"];simulateSubmit(){this.isSubmitting.set(!0),setTimeout(()=>this.isSubmitting.set(!1),2e3)}openConfirm(){this.dialog.open(pe,{data:{title:"Delete item",message:"This action cannot be undone. Are you sure?",confirmLabel:"Delete",destructive:!0}})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["app-showcase-page"]],decls:158,vars:7,consts:[[1,"page"],[1,"section-title"],[1,"hint",2,"margin-bottom","1rem"],[1,"button-group-label"],[1,"row","wrap",2,"margin-bottom","0.5rem"],["mat-flat-button",""],["mat-raised-button",""],["mat-stroked-button",""],["mat-button",""],["mat-button","","disabled",""],[1,"hint",2,"margin-bottom","1.25rem"],[1,"row","wrap",2,"margin-bottom","1.25rem"],[1,"row","wrap"],["mat-icon-button",""],["mat-mini-fab",""],["mat-fab",""],[1,"row"],["mat-flat-button","",3,"click","loading"],[1,"hint"],[1,"color-pill",3,"textColor"],[1,"surface-swatch",3,"surface","elevation"],[1,"elevation-swatch",3,"elevation"],[3,"diameter"],["title","No results found","description","Try adjusting your search or filters."],["message","Could not load data.",3,"retryable"],["mat-flat-button","",3,"click"],[1,"swatch-label"],[3,"retry"],[1,"post-card",3,"surface","elevation"],[1,"post-title",3,"textColor"],[1,"post-body"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"section")(2,"h2",1),r(3,"Buttons"),o(),s(4,"p",2),r(5," M3 uses variants for emphasis \u2014 not a "),s(6,"code"),r(7,"color"),o(),r(8," attribute. "),o(),s(9,"div",3),r(10,"Variants \u2014 high \u2192 low emphasis"),o(),s(11,"div",4)(12,"button",5),r(13,"Filled"),o(),s(14,"button",6),r(15,"Elevated"),o(),s(16,"button",7),r(17,"Outlined"),o(),s(18,"button",8),r(19,"Text"),o(),s(20,"button",9),r(21,"Disabled"),o()(),s(22,"p",10)(23,"strong"),r(24,"Elevated"),o(),r(25," adds a shadow to lift the button off a colored or image surface \u2014 use it when a filled button would blend into the background. Avoid using it as the sole primary action. "),o(),s(26,"div",3),r(27,"With icon"),o(),s(28,"div",11)(29,"button",5)(30,"mat-icon"),r(31,"save"),o(),r(32," Save"),o(),s(33,"button",7)(34,"mat-icon"),r(35,"edit"),o(),r(36," Edit"),o(),s(37,"button",8)(38,"mat-icon"),r(39,"delete"),o(),r(40," Delete"),o()(),s(41,"div",3),r(42,"Icon & FAB"),o(),s(43,"div",12)(44,"button",13)(45,"mat-icon"),r(46,"favorite"),o()(),s(47,"button",13)(48,"mat-icon"),r(49,"share"),o()(),s(50,"button",14)(51,"mat-icon"),r(52,"add"),o()(),s(53,"button",15)(54,"mat-icon"),r(55,"edit"),o()()()(),p(56,"mat-divider"),s(57,"section")(58,"h2",1),r(59,"Semantic actions"),o(),s(60,"p",2),r(61," M3 expresses emphasis through "),s(62,"strong"),r(63,"variant"),o(),r(64,", not color. Primary = filled, cancel/secondary = outlined or text, destructive = error role. "),o(),s(65,"div",3),r(66,"Primary action \u2014 filled"),o(),s(67,"div",11)(68,"button",5)(69,"mat-icon"),r(70,"check_circle"),o(),r(71," Confirm"),o()(),s(72,"div",3),r(73,"Secondary / cancel \u2014 outlined or text"),o(),s(74,"div",11)(75,"button",7),r(76,"Cancel"),o(),s(77,"button",8),r(78,"Dismiss"),o()(),s(79,"div",3),r(80,"Destructive \u2014 text or outlined, label carries the meaning"),o(),s(81,"div",12)(82,"button",7)(83,"mat-icon"),r(84,"delete"),o(),r(85," Delete"),o(),s(86,"button",8)(87,"mat-icon"),r(88,"delete"),o(),r(89," Delete"),o()()(),p(90,"mat-divider"),s(91,"section")(92,"h2",1),r(93,"Loading button"),o(),s(94,"div",16)(95,"button",17),w("click",function(){return t.simulateSubmit()}),r(96),o(),s(97,"span",18),r(98,"Click to simulate a 2 s submit"),o()()(),p(99,"mat-divider"),s(100,"section")(101,"h2",1),r(102,"Text color directive"),o(),s(103,"div",12),N(104,qt,2,2,"span",19,K),o()(),p(106,"mat-divider"),s(107,"section")(108,"h2",1),r(109,"Surface directive"),o(),s(110,"div",12),N(111,$t,3,3,"div",20,K),o()(),p(113,"mat-divider"),s(114,"section")(115,"h2",1),r(116,"Elevation directive"),o(),s(117,"div",12),N(118,Qt,2,2,"div",21,K),o()(),p(120,"mat-divider"),s(121,"section")(122,"h2",1),r(123,"Spinner"),o(),s(124,"div",16),p(125,"ui-spinner",22)(126,"ui-spinner",22)(127,"ui-spinner",22),o()(),p(128,"mat-divider"),s(129,"section")(130,"h2",1),r(131,"Empty state"),o(),s(132,"ui-empty",23)(133,"button",7),r(134,"Clear filters"),o()()(),p(135,"mat-divider"),s(136,"section")(137,"h2",1),r(138,"Error state"),o(),p(139,"ui-error",24),o(),p(140,"mat-divider"),s(141,"section")(142,"h2",1),r(143,"Confirm dialog"),o(),s(144,"div",16)(145,"button",25),w("click",function(){return t.openConfirm()}),s(146,"mat-icon"),r(147,"delete"),o(),r(148," Delete item "),o(),s(149,"span",18),r(150,"Opens a confirmation dialog"),o()()(),p(151,"mat-divider"),s(152,"section")(153,"h2",1),r(154,"httpResource"),o(),Ne(155,Ut,1,0,"ui-spinner")(156,Yt,1,0,"ui-error")(157,Kt,3,0,"div",12),o()()),e&2&&(m(95),g("loading",t.isSubmitting()),m(),L(" ",t.isSubmitting()?"Saving\u2026":"Save"," "),m(8),j(t.textRoles),m(7),j(t.surfaceRoles),m(7),j(t.elevationLevels),m(7),g("diameter",32),m(),g("diameter",48),m(),g("diameter",64),m(12),g("retryable",!0),m(16),je(t.posts.isLoading()?155:t.posts.error()?156:157))},dependencies:[ie,te,Je,Ke,Xe,tt,et,wt,xt,de,ce,me,ue,dt,ct,mt],styles:["[_nghost-%COMP%]{display:block}.page[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:2rem 1.5rem;display:flex;flex-direction:column;gap:2rem}@media(max-width:599px){.page[_ngcontent-%COMP%]{padding:1.25rem 1rem;gap:1.5rem}}.section-title[_ngcontent-%COMP%]{margin:0 0 1.25rem;font:var(--mat-sys-title-large);color:var(--mat-sys-on-surface-variant)}.row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.row.wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.button-group-label[_ngcontent-%COMP%]{font:var(--mat-sys-label-small);color:var(--mat-sys-on-surface-variant);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem}code[_ngcontent-%COMP%]{font-family:monospace;font-size:.85em;background:var(--mat-sys-surface-container);padding:.1em .35em;border-radius:var(--mat-sys-corner-extra-small)}.hint[_ngcontent-%COMP%]{font:var(--mat-sys-body-small);color:var(--mat-sys-on-surface-variant)}.color-pill[_ngcontent-%COMP%]{font:var(--mat-sys-label-large);padding:.375rem .875rem;border-radius:var(--mat-sys-corner-full);border:1px solid var(--mat-sys-outline-variant)}.surface-swatch[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:var(--mat-sys-corner-medium);padding:1rem 1.25rem;min-width:140px;flex:1}.swatch-label[_ngcontent-%COMP%]{font:var(--mat-sys-label-medium)}.elevation-swatch[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;border-radius:var(--mat-sys-corner-medium);background:var(--mat-sys-surface-container);color:var(--mat-sys-on-surface);padding:1rem 1.25rem;font:var(--mat-sys-label-medium);min-width:80px;transition:box-shadow .2s ease}.post-card[_ngcontent-%COMP%]{border-radius:var(--mat-sys-corner-medium);padding:1rem 1.25rem;flex:1;min-width:200px;max-width:260px}.post-title[_ngcontent-%COMP%]{margin:0 0 .5rem;font:var(--mat-sys-label-large);text-transform:capitalize}.post-body[_ngcontent-%COMP%]{margin:0;font:var(--mat-sys-body-small);color:var(--mat-sys-on-surface-variant);display:-webkit-box;line-clamp:3;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}"]})};export{St as ShowcasePageComponent};
