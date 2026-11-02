import{n as s,t as r}from"./chunk-DeqPHXjz.js";import{$n as gw,$t as Xh,Bn as dw,En as bv,Er as me,Fr as pT,Gr as rg,Hn as ee,Ht as Tg,I as IT,It as Sg,Jt as Vg,Kn as fT,Kt as Uv,L as Ia,Lt as T,Mt as S,Nn as dT,O as Gg,On as cT,Pn as db,Pt as ST,Q as Ld,Qr as to,Sn as as,Tr as mb,Vr as ql,Vt as Te,W as Ke,Wn as eo,Xr as st,Xt as WT,Z as L1,_ as Dg,_n as _T,_t as Og,ai as vb,ar as ig,ct as N1,dn as Zl,dt as Nb,fi as wg,fr as kT,gt as Ob,ht as OT,i as Ab,ir as ie,jt as Ru,k as Gi,kr as nb,kt as Rg,lt as NT,mr as kd,on as Yu,or as j1,pn as Zr,qr as sg,r as AT,s as B,sr as jE,tt as Lm,ur as jg,v as Dy,vn as _g,w as F1,x as Es,xt as Pc,y as Eb,yr as lT}from"./chunk-CVMDIrxF.js";import{T as ui$1,h as ei$1}from"./chunk-DNTnUPeI.js";import{$ as Ru$1,Lt as ui$2,Q as Pg,R as At$1,Rt as wu,Vt as yf,X as Ng,er as $s,et as Sb,wt as eg}from"./main-SE2HUMFK.js";import{$ as m,Ct as se,Dt as j,Et as h,Ft as I,Lt as k,O as at$1,Ot as N,Rt as l,Z as A$1,et as $e,it as Hs,jt as at,l as wt,mt as ae,ot as Ke$1,pt as Us,u as yt,vt as ie$1,y as ii$1}from"./chunk-NoyHzOXr.js";import{t as b}from"./chunk-oS7HFKIu2.js";import{t as B$1}from"./chunk-dON0U-8-2.js";var Ot=[`*`];function zt(n,t){n&1&&ST(0)}var Ee=(()=>{class n{_elementRef=T(to);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(i){return new(i||n)};static ɵdir=gw({type:n,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return n})();var De=(()=>{class n{template=T(Zr);static ɵfac=function(i){return new(i||n)};static ɵdir=gw({type:n,selectors:[[``,`cdkStepLabel`,``]]})}return n})();var A={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var Lt=new S(`STEPPER_GLOBAL_OPTIONS`);var fe=(()=>{class n{_stepperOptions;_stepper=T(ve);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Ke(!1);interactedStream=new st;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Ke(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Ke(!0);optional=!1;get completed(){let e=this._completedOverride(),i=this._interacted();return e??(i&&(!this.stepControl||Ft(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=Ke(null);index=Ke(-1);isSelected=me(()=>this._stepper.selectedIndex===this.index());indicatorType=me(()=>{let e=this.isSelected(),i=this.completed,r=this._state()??A.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!e?A.ERROR:this._displayDefaultIndicatorType?!i||e?A.NUMBER:a?A.EDIT:A.DONE:i&&!e?A.DONE:i&&e?r:a&&e?A.EDIT:r});isNavigable=me(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Ke(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&Et(this.stepControl)}constructor(){let e=T(Lt,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),Rt(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(i){return new(i||n)};static ɵcmp=dw({type:n,selectors:[[`cdk-step`]],contentQueries:function(i,r,a){if(i&1&&Og(a,De,5)(a,At$1,5),i&2){let o;AT(o=OT())&&(r.stepLabel=o.first),AT(o=OT())&&(r._childForms=o)}},viewQuery:function(i,r){if(i&1&&Rg(Zr,7),i&2){let a;AT(a=OT())&&(r.content=a.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,F1],optional:[2,`optional`,`optional`,F1],completed:[2,`completed`,`completed`,F1],hasError:[2,`hasError`,`hasError`,F1]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[bv],ngContentSelectors:Ot,decls:1,vars:0,template:function(i,r){i&1&&(NT(),sg(0,zt,1,0,`ng-template`))},encapsulation:2})}return n})();var ve=(()=>{class n{_dir=T(m,{optional:!0});_changeDetectorRef=T(L1);_elementRef=T(to);_destroyed=new ee;_keyManager;_steps;steps=new Gi;_stepHeader;_sortedHeaders=new Gi;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Ke(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Ke(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new st;selectedIndexChange=new st;_groupId=T(se).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(Dy(this._steps),Yu(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(i=>i._stepper===this)),this.steps.forEach((i,r)=>i.index.set(r)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Dy(this._stepHeader),Yu(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((i,r)=>i._elementRef.nativeElement.compareDocumentPosition(r._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new ae(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Lm()).pipe(Dy(this._layoutDirection()),Yu(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let i of e)i._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let i=e-this._selectedIndex();return i<0?this._layoutDirection()===`rtl`?`next`:`previous`:i>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let i=this.steps.toArray(),r=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:r,selectedStep:i[e],previouslySelectedStep:i[r]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let i=Ke$1(e),r=e.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!i&&(r===32||r===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(i=>{let r=i.stepControl;return(r?Et(r)||At(r)||!i.interacted:!i.completed)&&!i.optional&&!i._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,i=ie$1();return e===i||e.contains(i)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(i){return new(i||n)};static ɵdir=gw({type:n,selectors:[[``,`cdkStepper`,``]],contentQueries:function(i,r,a){if(i&1&&Og(a,fe,5)(a,Ee,5),i&2){let o;AT(o=OT())&&(r._steps=o),AT(o=OT())&&(r._stepHeader=o)}},inputs:{linear:[2,`linear`,`linear`,F1],selectedIndex:[2,`selectedIndex`,`selectedIndex`,j1],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return n})();function ge(n){return typeof n==`function`}function Ft(n){return ge(n)?n().valid():n.valid}function Et(n){return ge(n)?n().invalid():n.invalid}function At(n){return ge(n)?n().pending():n.pending}function Rt(n){ge(n)?n().reset():n.reset()}var Dt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Xh({type:n});static ɵinj=Ia({imports:[A$1]})}return n})();var Ut=(n,t,e)=>({index:n,active:t,optional:e});function Wt(n,t){if(n&1&&_g(0,2),n&2){let e=_T();wg(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,Eb(2,Ut,e.index,e.active,e.optional))}}function Bt(n,t){if(n&1&&(as(0,`span`,7),nb(1),ql()),n&2){let e=_T(2);jE(),Gg(e._getDefaultTextForState(e.state))}}function Ht(n,t){if(n&1&&(as(0,`span`,8),nb(1),ql()),n&2){let e=_T(3);jE(),Gg(e._intl.completedLabel)}}function $t(n,t){if(n&1&&(as(0,`span`,8),nb(1),ql()),n&2){let e=_T(3);jE(),Gg(e._intl.editableLabel)}}function Vt(n,t){if(n&1&&(cT(0,Ht,2,1,`span`,8)(1,$t,2,1,`span`,8),as(2,`mat-icon`,7),nb(3),ql()),n&2){let e=_T(2);lT(e.state===`done`?0:e.state===`edit`?1:-1),jE(3),Gg(e._getDefaultTextForState(e.state))}}function Qt(n,t){if(n&1&&cT(0,Bt,2,1,`span`,7)(1,Vt,4,2),n&2)lT(_T().state===`number`?0:1)}function jt(n,t){n&1&&(as(0,`div`,4),_g(1,9),ql()),n&2&&(jE(),wg(`ngTemplateOutlet`,t.template))}function Gt(n,t){if(n&1&&(as(0,`div`,4),nb(1),ql()),n&2){let e=_T();jE(),Gg(e.label)}}function qt(n,t){if(n&1&&(as(0,`div`,5),nb(1),ql()),n&2){let e=_T();jE(),Gg(e._intl.optionalLabel)}}function Kt(n,t){if(n&1&&(as(0,`div`,6),nb(1),ql()),n&2){let e=_T();jE(),Gg(e.errorMessage)}}var kt=[`*`];function Yt(n,t){}function Xt(n,t){if(n&1&&(ST(0),ig(1,Yt,0,0,`ng-template`,0)),n&2){let e=_T();jE(),wg(`cdkPortalOutlet`,e._portal)}}var Zt=[`animatedContainer`];var It=n=>({steps:n});var Pt=n=>({step:n});function Jt(n,t){n&1&&ST(0)}function ei(n,t){if(n&1&&(as(0,`div`,5),_g(1,9)(2,6),ql()),n&2){let e=_T(2),i=kT(6);jE(),wg(`ngTemplateOutlet`,e.headerPrefix()),jE(),wg(`ngTemplateOutlet`,i)(`ngTemplateOutletContext`,vb(3,It,e.steps))}}function ti(n,t){if(n&1&&_g(0,6),n&2){let e=_T(2);wg(`ngTemplateOutlet`,kT(6))(`ngTemplateOutletContext`,vb(2,It,e.steps))}}function ii(n,t){if(n&1&&(as(0,`div`,10,2),_g(2,9),ql()),n&2){let e=t.$implicit,i=t.$index,r=_T(2);WT(`mat-horizontal-stepper-content-`+r._getAnimationDirection(i)),wg(`id`,r._getStepContentId(i)),Dg(`aria-labelledby`,r._getStepLabelId(i))(`inert`,r.selectedIndex===i?null:``),jE(2),wg(`ngTemplateOutlet`,e.content)}}function ni(n,t){if(n&1&&(as(0,`div`,3),cT(1,ei,3,5,`div`,5)(2,ti,1,4,`ng-container`,6),as(3,`div`,7),fT(4,ii,3,6,`div`,8,dT),ql()()),n&2){let e=_T();jE(),lT(e.headerPrefix()?1:2),jE(3),pT(e.steps)}}function ri(n,t){if(n&1&&_g(0,9),n&2)wg(`ngTemplateOutlet`,_T(2).headerPrefix())}function ai(n,t){if(n&1&&(as(0,`div`,11),_g(1,6),as(2,`div`,12,2)(4,`div`,13)(5,`div`,14),_g(6,9),ql()()()()),n&2){let e=t.$implicit,i=t.$index,r=t.$index,a=t.$count,o=_T(2),c=kT(4);jE(),wg(`ngTemplateOutlet`,c)(`ngTemplateOutletContext`,vb(11,Pt,e)),jE(),Vg(`mat-stepper-vertical-line`,r!==a-1)(`mat-vertical-content-container-active`,o.selectedIndex===i),Dg(`inert`,o.selectedIndex===i?null:``)(`aria-label`,o.ariaLabel),jE(2),wg(`id`,o._getStepContentId(i)),Dg(`aria-labelledby`,o._getStepLabelId(i)),jE(2),wg(`ngTemplateOutlet`,e.content)}}function oi(n,t){if(n&1&&(as(0,`div`,4),cT(1,ri,1,1,`ng-container`,9),fT(2,ai,7,13,`div`,11,dT),ql()),n&2){let e=_T();jE(),lT(e.headerPrefix()?1:-1),jE(),pT(e.steps)}}function si(n,t){if(n&1){let e=IT();as(0,`mat-step-header`,15),Sg(`click`,function(){let r=kd(e).step;return Ld(r.select())})(`keydown`,function(r){kd(e);return Ld(_T()._onKeydown(r))}),ql()}if(n&2){let e=t.step,i=_T();Vg(`mat-horizontal-stepper-header`,i.orientation===`horizontal`)(`mat-vertical-stepper-header`,i.orientation===`vertical`),wg(`tabIndex`,i._getFocusIndex()===e.index()?0:-1)(`id`,i._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,i._iconOverrides)(`disableRipple`,i.disableRipple||!e.isNavigable())(`color`,e.color||i.color),Dg(`role`,i.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,i.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,i.orientation===`horizontal`?i.steps.length:null)(`aria-selected`,i.orientation===`horizontal`?e.isSelected():null)(`aria-current`,i.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,i.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,i.orientation===`vertical`?e.isSelected():null)(`aria-controls`,i._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function li(n,t){n&1&&Tg(0,`div`,17)}function di(n,t){if(n&1&&(_g(0,6),cT(1,li,1,0,`div`,17)),n&2){let e=t.$implicit,i=t.$index,r=t.$count;_T(2);wg(`ngTemplateOutlet`,kT(4))(`ngTemplateOutletContext`,vb(3,Pt,e)),jE(),lT(i!==r-1?1:-1)}}function ci(n,t){if(n&1&&(as(0,`div`,16),fT(1,di,2,5,null,null,dT),ql()),n&2){let e=t.steps;Dg(`aria-label`,_T().ariaLabel),jE(),pT(e)}}var ke=(()=>{class n extends De{static ɵfac=(()=>{let e;return function(r){return(e||(e=Uv(n)))(r||n)}})();static ɵdir=gw({type:n,selectors:[[``,`matStepLabel`,``]],features:[rg]})}return n})();var pi=(()=>{class n{changes=new ee;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var Ie=(()=>{class n extends Ee{_intl=T(pi);_focusMonitor=T($e);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=T(h);e.load(Hs),e.load(j);let i=T(L1);this._intlSubscription=this._intl.changes.subscribe(()=>i.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,i){e?this._focusMonitor.focusVia(this._elementRef,e,i):this._elementRef.nativeElement.focus(i)}_stringLabel(){return this.label instanceof ke?null:this.label}_templateLabel(){return this.label instanceof ke?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(i){return new(i||n)};static ɵcmp=dw({type:n,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(i,r){i&2&&(WT(`mat-`+(r.color||`primary`)),Vg(`mat-step-header-empty-label`,r._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[rg],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(i,r){if(i&1&&(Tg(0,`div`,0),as(1,`div`)(2,`div`,1),cT(3,Wt,1,6,`ng-container`,2)(4,Qt,2,1),ql()(),as(5,`div`,3),cT(6,jt,2,1,`div`,4)(7,Gt,2,1,`div`,4),cT(8,qt,2,1,`div`,5),cT(9,Kt,2,1,`div`,6),ql()),i&2){let a;wg(`matRippleTrigger`,r._getHostElement())(`matRippleDisabled`,r.disableRipple),jE(),WT(db(`mat-step-icon-state-`,r.state,` mat-step-icon`)),Vg(`mat-step-icon-selected`,r.selected),jE(2),lT(r.iconOverrides&&r.iconOverrides[r.state]?3:4),jE(2),Vg(`mat-step-label-active`,r.active)(`mat-step-label-selected`,r.selected)(`mat-step-label-error`,r.state==`error`),jE(),lT((a=r._templateLabel())?6:r._stringLabel()?7:-1,a),jE(2),lT(r._hasOptionalLabel()?8:-1),jE(),lT(r._hasErrorLabel()?9:-1)}},dependencies:[Us,ei$1,wt],styles:[`.mat-step-header {
  overflow: hidden;
  outline: none;
  cursor: pointer;
  position: relative;
  box-sizing: content-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-step-header:focus-visible .mat-focus-indicator::before {
  content: "";
}
.mat-step-header:hover[aria-disabled=true] {
  cursor: default;
}
.mat-step-header:hover:not([aria-disabled]), .mat-step-header:hover[aria-disabled=false] {
  background-color: var(--%NS%mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header:hover:not([aria-disabled]) .mat-step-header-ripple::before, .mat-step-header:hover[aria-disabled=false] .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-hover-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--%NS%mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused .mat-step-header-ripple::before, .mat-step-header.cdk-program-focused .mat-step-header-ripple::before {
  border-radius: var(--%NS%mat-stepper-header-focus-state-layer-shape, var(--%NS%mat-sys-corner-medium));
}
@media (hover: none) {
  .mat-step-header:hover {
    background: none;
  }
}
@media (forced-colors: active) {
  .mat-step-header {
    outline: solid 1px;
  }
  .mat-step-header[aria-selected=true] .mat-step-label {
    text-decoration: underline;
  }
  .mat-step-header[aria-disabled=true] {
    outline-color: GrayText;
  }
  .mat-step-header[aria-disabled=true] .mat-step-label,
  .mat-step-header[aria-disabled=true] .mat-step-icon,
  .mat-step-header[aria-disabled=true] .mat-step-optional {
    color: GrayText;
  }
}

.mat-step-optional {
  font-size: 12px;
  color: var(--%NS%mat-stepper-header-optional-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-sub-label-error {
  font-size: 12px;
  font-weight: normal;
}

.mat-step-icon {
  border-radius: 50%;
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  position: relative;
  color: var(--%NS%mat-stepper-header-icon-foreground-color, var(--%NS%mat-sys-surface));
  background-color: var(--%NS%mat-stepper-header-icon-background-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-step-icon-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
}

.mat-step-icon .mat-icon {
  font-size: 16px;
  height: 16px;
  width: 16px;
}

.mat-step-icon-state-error {
  background-color: var(--%NS%mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--%NS%mat-stepper-header-error-state-icon-foreground-color, var(--%NS%mat-sys-error));
}
.mat-step-icon-state-error .mat-icon {
  font-size: 24px;
  height: 24px;
  width: 24px;
}

.mat-step-label {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 50px;
  vertical-align: middle;
  font-family: var(--%NS%mat-stepper-header-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-stepper-header-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-label-text-weight, var(--%NS%mat-sys-title-small-weight));
  color: var(--%NS%mat-stepper-header-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--%NS%mat-stepper-header-selected-state-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--%NS%mat-stepper-header-error-state-label-text-color, var(--%NS%mat-sys-error));
  font-size: var(--%NS%mat-stepper-header-error-state-label-text-size, var(--%NS%mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--%NS%mat-stepper-header-selected-state-label-text-size, var(--%NS%mat-sys-title-small-size));
  font-weight: var(--%NS%mat-stepper-header-selected-state-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-step-header-empty-label .mat-step-label {
  min-width: 0;
}

.mat-step-text-label {
  text-overflow: ellipsis;
  overflow: hidden;
}

.mat-step-header .mat-step-header-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-step-icon-selected {
  background-color: var(--%NS%mat-stepper-header-selected-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-selected-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--%NS%mat-stepper-header-done-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-done-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--%NS%mat-stepper-header-edit-state-icon-background-color, var(--%NS%mat-sys-primary));
  color: var(--%NS%mat-stepper-header-edit-state-icon-foreground-color, var(--%NS%mat-sys-on-primary));
}
`],encapsulation:2})}return n})();var hi=(()=>{class n{templateRef=T(Zr);name;static ɵfac=function(i){return new(i||n)};static ɵdir=gw({type:n,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return n})();var mi=(()=>{class n{_template=T(Zr);static ɵfac=function(i){return new(i||n)};static ɵdir=gw({type:n,selectors:[[`ng-template`,`matStepContent`,``]]})}return n})();var ui=(()=>{class n extends fe{_errorStateMatcher=T(ii$1,{skipSelf:!0});_viewContainerRef=T(Es);_isSelected=B.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(Ru(()=>this._stepper.selectionChange.pipe(Te(e=>e.selectedStep===this),Dy(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new l(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,i){let r=this._errorStateMatcher.isErrorState(e,i),a=!!(e&&e.invalid&&this.interacted);return r||a}isSignalErrorState(e){let i=this._errorStateMatcher.isSignalErrorState?.(e)??!1,r=!!(e&&e().invalid()&&this.interacted);return i||r}static ɵfac=(()=>{let e;return function(r){return(e||(e=Uv(n)))(r||n)}})();static ɵcmp=dw({type:n,selectors:[[`mat-step`]],contentQueries:function(i,r,a){if(i&1&&Og(a,ke,5)(a,mi,5),i&2){let o;AT(o=OT())&&(r.stepLabel=o.first),AT(o=OT())&&(r._lazyContent=o.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[mb([{provide:ii$1,useExisting:n},{provide:fe,useExisting:n}]),rg],ngContentSelectors:kt,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(i,r){i&1&&(NT(),ig(0,Xt,2,1,`ng-template`))},dependencies:[I],encapsulation:2})}return n})();var _i=(()=>{class n extends ve{_ngZone=T(ie);_renderer=T(Pc);_animationsDisabled=at();_cleanupTransition;_isAnimating=Ke(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new Gi;_icons;animationDone=new st;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=N1(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!T(N).isBrowser;constructor(){super();let i=T(to).nativeElement.nodeName.toLowerCase();this.orientation=i===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:i})=>this._iconOverrides[e]=i),this.steps.changes.pipe(Yu(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(Yu(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(Dy(null),Yu(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let i=e.target;if(!i)return;let r=this.orientation===`horizontal`&&e.propertyName===`transform`&&i.classList.contains(`mat-horizontal-stepper-content-current`),a=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&i.classList.contains(`mat-vertical-content-container-active`);(r||a)&&this._animatedContainers.find(c=>c.nativeElement===i)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(i){return new(i||n)};static ɵcmp=dw({type:n,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(i,r,a){if(i&1&&Og(a,ui,5)(a,hi,5),i&2){let o;AT(o=OT())&&(r._steps=o),AT(o=OT())&&(r._icons=o)}},viewQuery:function(i,r){if(i&1&&Rg(Ie,5)(Zt,5),i&2){let a;AT(a=OT())&&(r._stepHeader=a),AT(a=OT())&&(r._animatedContainers=a)}},hostVars:14,hostBindings:function(i,r){i&2&&(jg(`--%NS%mat-stepper-animation-duration`,r._getAnimationDuration()),Vg(`mat-stepper-horizontal`,r.orientation===`horizontal`)(`mat-stepper-vertical`,r.orientation===`vertical`)(`mat-stepper-label-position-end`,r.orientation===`horizontal`&&r.labelPosition==`end`)(`mat-stepper-label-position-bottom`,r.orientation===`horizontal`&&r.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,r.headerPosition===`bottom`)(`mat-stepper-animating`,r._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[mb([{provide:ve,useExisting:n}]),rg],ngContentSelectors:kt,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(i,r){if(i&1&&(NT(),cT(0,Jt,1,0),cT(1,ni,6,1,`div`,3)(2,oi,4,1,`div`,4),ig(3,si,1,27,`ng-template`,null,0,Ob)(5,ci,3,1,`ng-template`,null,1,Ob)),i&2){let a;lT(r._isServer?0:-1),jE(),lT((a=r.orientation)===`horizontal`?1:a===`vertical`?2:-1)}},dependencies:[ei$1,Ie],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--%NS%mat-stepper-container-text-font, var(--%NS%mat-sys-body-medium-font));
  background: var(--%NS%mat-stepper-container-color, var(--%NS%mat-sys-surface));
}

.mat-horizontal-stepper-header-wrapper {
  align-items: center;
  display: flex;
}

.mat-horizontal-stepper-header-container {
  white-space: nowrap;
  display: flex;
  align-items: center;
  flex-grow: 1;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header-container {
  align-items: flex-start;
}
.mat-stepper-header-position-bottom .mat-horizontal-stepper-header-container {
  order: 1;
}

.mat-stepper-horizontal-line {
  border-top-width: 1px;
  border-top-style: solid;
  flex: auto;
  height: 0;
  margin: 0 -16px;
  min-width: 32px;
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}

.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  border-top-width: 1px;
  border-top-style: solid;
  content: "";
  display: inline-block;
  height: 0;
  position: absolute;
  width: calc(50% - 20px);
}

.mat-horizontal-stepper-header {
  display: flex;
  overflow: hidden;
  align-items: center;
  padding: 0 24px;
  height: var(--%NS%mat-stepper-header-height, 72px);
}
.mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 8px;
  flex: none;
}
[dir=rtl] .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 8px;
}
.mat-horizontal-stepper-header.mat-step-header-empty-label .mat-step-icon {
  margin: 0;
}
.mat-horizontal-stepper-header::before, .mat-horizontal-stepper-header::after {
  border-top-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  box-sizing: border-box;
  flex-direction: column;
  height: auto;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::after, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::after {
  right: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:first-child)::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:not(:last-child)::before {
  left: 0;
}
[dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:last-child::before, [dir=rtl] .mat-stepper-label-position-bottom .mat-horizontal-stepper-header:first-child::after {
  display: none;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 0;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header .mat-step-label {
  padding: 16px 0 0 0;
  text-align: center;
  width: 100%;
}

.mat-vertical-stepper-header {
  display: flex;
  align-items: center;
  height: 24px;
  padding: calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-vertical-stepper-header .mat-step-icon {
  margin-right: 12px;
}
[dir=rtl] .mat-vertical-stepper-header .mat-step-icon {
  margin-right: 0;
  margin-left: 12px;
}

.mat-horizontal-stepper-wrapper {
  display: flex;
  flex-direction: column;
}

.mat-horizontal-stepper-content {
  visibility: hidden;
  overflow: hidden;
  outline: 0;
  height: 0;
}
.mat-stepper-animations-enabled .mat-horizontal-stepper-content {
  transition: transform var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-previous {
  transform: translate3d(-100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-next {
  transform: translate3d(100%, 0, 0);
}
.mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  visibility: visible;
  transform: none;
  height: auto;
}
.mat-stepper-horizontal:not(.mat-stepper-animating) .mat-horizontal-stepper-content.mat-horizontal-stepper-content-current {
  overflow: visible;
}

.mat-horizontal-content-container {
  overflow: hidden;
  padding: 0 24px 24px 24px;
}
@media (forced-colors: active) {
  .mat-horizontal-content-container {
    outline: solid 1px;
  }
}
.mat-stepper-header-position-bottom .mat-horizontal-content-container {
  padding: 24px 24px 0 24px;
}

.mat-vertical-content-container {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
  margin-left: 36px;
  border: 0;
  position: relative;
}
.mat-stepper-animations-enabled .mat-vertical-content-container {
  transition: grid-template-rows var(--%NS%mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-vertical-content-container.mat-vertical-content-container-active {
  grid-template-rows: 1fr;
}
.mat-step:last-child .mat-vertical-content-container {
  border: none;
}
@media (forced-colors: active) {
  .mat-vertical-content-container {
    outline: solid 1px;
  }
}
[dir=rtl] .mat-vertical-content-container {
  margin-left: 0;
  margin-right: 36px;
}
@supports not (grid-template-rows: 0fr) {
  .mat-vertical-content-container {
    height: 0;
  }
  .mat-vertical-content-container.mat-vertical-content-container-active {
    height: auto;
  }
}

.mat-stepper-vertical-line::before {
  content: "";
  position: absolute;
  left: 0;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: var(--%NS%mat-stepper-line-color, var(--%NS%mat-sys-outline));
  top: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--%NS%mat-stepper-header-height, 72px) - 24px) / 2));
}
[dir=rtl] .mat-stepper-vertical-line::before {
  left: auto;
  right: 0;
}

.mat-vertical-stepper-content {
  overflow: hidden;
  outline: 0;
  visibility: hidden;
}
.mat-stepper-animations-enabled .mat-vertical-stepper-content {
  transition: visibility var(--%NS%mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2})}return n})();var gn=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Xh({type:n});static ɵinj=Ia({providers:[ii$1],imports:[k,Dt,yt,at$1,_i,Ie,A$1]})}return n})();function fi(n,t){if(n&1){let e=IT();as(0,`div`,5),Sg(`click`,function(){let r=kd(e).$implicit;return Ld(_T().onSelect(r))}),as(1,`div`,6)(2,`span`,7),nb(3),ql(),Tg(4,`br`),as(5,`span`),nb(6),ql(),Tg(7,`br`),ql(),as(8,`div`,8)(9,`span`,7),nb(10),ql(),Tg(11,`br`),as(12,`span`),nb(13,`Service`),ql()(),as(14,`div`,8)(15,`span`),nb(16),Nb(17,`number`),ql(),Tg(18,`br`),as(19,`span`),nb(20,`per Service`),ql()(),as(21,`div`,9)(22,`ion-chip`,10)(23,`mat-icon`,11),nb(24,`inventory`),ql(),as(25,`ion-text`,12),nb(26),ql()()()()}if(n&2){let e=t.$implicit,i=t.$index,r=_T();jE(3),Gg(e.item_name),jE(3),Gg(e.item_code),jE(4),Gg(e.item_group),jE(6),Zl(`OMR `,Ab(17,6,e.standard_rate,`1.2-2`),` `),jE(6),wg(`color`,r.raw_material()[i].length?`success`:`danger`),jE(4),Zl(`x`,r.raw_material()[i].length,` `)}}function vi(n,t){n&1&&(as(0,`div`,4),Tg(1,`app-warning`,13),ql())}var In=(()=>{class n{constructor(){this.itemsListStore=T(B$1),this.popoverCtrl=T(ui$2),this.excluded=N1([]),this.search=Ke(``),this.services=this.itemsListStore.services,this.filtered_services=me(()=>this.services().filter(e=>!this.excluded().includes(e.name)).filter(e=>e.item_name.trim().toLowerCase().includes(this.search()?.trim()?.toLowerCase())||e.item_code.trim().toLowerCase().includes(this.search()?.trim()?.toLowerCase()))),this.standard_rate=me(()=>this.filtered_services().map(e=>{let i=e?.sales_uom,a=(e?.uoms??[]).find(o=>o.uom===i)?.conversion_factor??1;return(e.standard_rate??0)*a})),this.raw_material=me(()=>this.filtered_services().map(e=>$s(e.description)?.raw_material??[]))}searchServices(e){this.search.set(e.detail.value)}async onSelect(e){this.popoverCtrl.dismiss(e,`destructive`)}static{this.ɵfac=function(i){return new(i||n)}}static{this.ɵcmp=dw({type:n,selectors:[[`app-search-item-popover`]],inputs:{excluded:[1,`excluded`]},decls:8,vars:1,consts:[[`color`,`light`,1,`ion-padding-horizontal`],[1,`mt-4`,3,`ionInput`],[`lines`,`none`],[1,`px-4`,`grid`,`grid-cols-12`,`gap-x-1`,`cursor-pointer`],[1,`py-12`,`flex`,`justify-center`,`items-center`],[1,`px-4`,`grid`,`grid-cols-12`,`gap-x-1`,`cursor-pointer`,3,`click`],[1,`col-span-7`,`text-xs`,`flex`,`flex-col`,`justify-center`],[1,`font-bold`],[1,`col-span-2`,`text-xs`,`flex`,`flex-col`,`justify-center`],[1,`col-span-1`,`text-xs`,`flex`,`flex-col`,`justify-center`],[3,`color`],[1,`text-[1rem]`,`relative`,`top-1`],[1,`text-xs`,`ml-2`],[`subtitle`,`No Services`,`instructions`,`Please choose different search phrase`]],template:function(i,r){i&1&&(as(0,`ion-header`)(1,`ion-toolbar`,0)(2,`ion-searchbar`,1),Sg(`ionInput`,function(o){return r.searchServices(o)}),ql()()(),as(3,`ion-content`)(4,`ion-list`,2),fT(5,fi,27,9,`div`,3,dT,!1,vi,2,0,`div`,4),ql()()),i&2&&(jE(5),pT(r.filtered_services()))},dependencies:[Ng,Pg,eg,Sb,Ru$1,yf,wu,b,yt,wt,ui$1],encapsulation:2})}}return n})();var be=class{x;y;pressure;time;constructor(n,t,e,i){if(isNaN(n)||isNaN(t))throw new Error(`Point is invalid: (${n}, ${t})`);this.x=+n,this.y=+t,this.pressure=e||0,this.time=i||Date.now()}distanceTo(n){return Math.sqrt(Math.pow(this.x-n.x,2)+Math.pow(this.y-n.y,2))}equals(n){return this.x===n.x&&this.y===n.y&&this.pressure===n.pressure&&this.time===n.time}velocityFrom(n){return this.time!==n.time?this.distanceTo(n)/(this.time-n.time):0}};var gi=class Tt{constructor(t,e,i,r,a,o){this.startPoint=t,this.control2=e,this.control1=i,this.endPoint=r,this.startWidth=a,this.endWidth=o}static fromPoints(t,e){let i=this.calculateControlPoints(t[0],t[1],t[2]).c2,r=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new Tt(t[1],i,r,t[2],e.start,e.end)}static calculateControlPoints(t,e,i){let r=t.x-e.x,a=t.y-e.y,o=e.x-i.x,c=e.y-i.y,m={x:(t.x+e.x)/2,y:(t.y+e.y)/2},h={x:(e.x+i.x)/2,y:(e.y+i.y)/2},s=Math.sqrt(r*r+a*a),f=Math.sqrt(o*o+c*c),x=m.x-h.x,w=m.y-h.y,k=s+f==0?0:f/(s+f),v={x:h.x+x*k,y:h.y+w*k},ie=e.x-v.x,Te=e.y-v.y;return{c1:new be(m.x+ie,m.y+Te),c2:new be(h.x+ie,h.y+Te)}}length(){let e=0,i,r;for(let a=0;a<=10;a+=1){let o=a/10,c=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),m=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(a>0){let h=c-i,s=m-r;e+=Math.sqrt(h*h+s*s)}i=c,r=m}return e}point(t,e,i,r,a){return e*(1-t)*(1-t)*(1-t)+3*i*(1-t)*(1-t)*t+3*r*(1-t)*t*t+a*t*t*t}};var bi=class{_et;constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(n,t,e){this._et.addEventListener(n,t,e)}dispatchEvent(n){return this._et.dispatchEvent(n)}removeEventListener(n,t,e){this._et.removeEventListener(n,t,e)}};function xi(n,t=250){let e=0,i=null,r,a,o,c=()=>{e=Date.now(),i=null,r=n.apply(a,o),i||(a=null,o=[])};return function(...h){let s=Date.now(),f=t-(s-e);return a=this,o=h,f<=0||f>t?(i&&(clearTimeout(i),i=null),e=s,r=n.apply(a,o),i||(a=null,o=[])):i||(i=window.setTimeout(c,f)),r}}var Tn=class Pe extends bi{constructor(t,e={}){super(),this.canvas=t,this.velocityFilterWeight=e.velocityFilterWeight||.7,this.minWidth=e.minWidth||.5,this.maxWidth=e.maxWidth||2.5,this.throttle=e.throttle??16,this.minDistance=e.minDistance??5,this.dotSize=e.dotSize||0,this.penColor=e.penColor||`black`,this.backgroundColor=e.backgroundColor||`rgba(0,0,0,0)`,this.compositeOperation=e.compositeOperation||`source-over`,this.canvasContextOptions=e.canvasContextOptions??{},this._strokeMoveUpdate=this.throttle?xi(Pe.prototype._strokeUpdate,this.throttle):Pe.prototype._strokeUpdate,this._handleMouseDown=this._handleMouseDown.bind(this),this._handleMouseMove=this._handleMouseMove.bind(this),this._handleMouseUp=this._handleMouseUp.bind(this),this._handleTouchStart=this._handleTouchStart.bind(this),this._handleTouchMove=this._handleTouchMove.bind(this),this._handleTouchEnd=this._handleTouchEnd.bind(this),this._handlePointerDown=this._handlePointerDown.bind(this),this._handlePointerMove=this._handlePointerMove.bind(this),this._handlePointerUp=this._handlePointerUp.bind(this),this._handlePointerCancel=this._handlePointerCancel.bind(this),this._handleTouchCancel=this._handleTouchCancel.bind(this),this._ctx=t.getContext(`2d`,this.canvasContextOptions),this.clear(),this.on()}dotSize;minWidth;maxWidth;penColor;minDistance;velocityFilterWeight;compositeOperation;backgroundColor;throttle;canvasContextOptions;_ctx;_drawingStroke=!1;_isEmpty=!0;_dataUrl;_dataUrlOptions;_lastPoints=[];_data=[];_lastVelocity=0;_lastWidth=0;_strokeMoveUpdate;_strokePointerId;clear(){let{_ctx:t,canvas:e}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0,this._dataUrl=void 0,this._dataUrlOptions=void 0,this._strokePointerId=void 0}redraw(){let t=this._data,e=this._dataUrl,i=this._dataUrlOptions;this.clear(),e&&this.fromDataURL(e,i),this.fromData(t,{clear:!1})}fromDataURL(t,e={}){return new Promise((i,r$1)=>{let a=new Image,o=e.ratio||window.devicePixelRatio||1,c=e.width||this.canvas.width/o,m=e.height||this.canvas.height/o,h=e.xOffset||0,s=e.yOffset||0;this._reset(this._getPointGroupOptions()),a.onload=()=>{this._ctx.drawImage(a,h,s,c,m),i()},a.onerror=f=>{r$1(f)},a.crossOrigin=`anonymous`,a.src=t,this._isEmpty=!1,this._dataUrl=t,this._dataUrlOptions=r({},e)})}toDataURL(t=`image/png`,e){return t===`image/svg+xml`?(typeof e!=`object`&&(e=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(e))}`):(typeof e!=`number`&&(e=void 0),this.canvas.toDataURL(t,e))}on(){this.canvas.style.touchAction=`none`,this.canvas.style.msTouchAction=`none`,this.canvas.style.userSelect=`none`,this.canvas.style.webkitUserSelect=`none`;let t=/Macintosh/.test(navigator.userAgent)&&`ontouchstart`in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),`ontouchstart`in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction=`auto`,this.canvas.style.msTouchAction=`auto`,this.canvas.style.userSelect=`auto`,this.canvas.style.webkitUserSelect=`auto`,this.canvas.removeEventListener(`pointerdown`,this._handlePointerDown),this.canvas.removeEventListener(`mousedown`,this._handleMouseDown),this.canvas.removeEventListener(`touchstart`,this._handleTouchStart),this._removeMoveUpEventListeners()}_getListenerFunctions(){let t=window.document===this.canvas.ownerDocument?window:this.canvas.ownerDocument.defaultView??this.canvas.ownerDocument;return{addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}_removeMoveUpEventListeners(){let{removeEventListener:t}=this._getListenerFunctions();t(`pointermove`,this._handlePointerMove),t(`pointerup`,this._handlePointerUp),t(`pointercancel`,this._handlePointerCancel),t(`mousemove`,this._handleMouseMove),t(`mouseup`,this._handleMouseUp),t(`touchmove`,this._handleTouchMove),t(`touchend`,this._handleTouchEnd),t(`touchcancel`,this._handleTouchCancel)}isEmpty(){return this._isEmpty}fromData(t,{clear:e=!0}={}){e&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_isLeftButtonPressed(t,e){return e?t.buttons===1:(t.buttons&1)===1}_pointerEventToSignatureEvent(t){return{event:t,type:t.type,x:t.clientX,y:t.clientY,pressure:`pressure`in t?t.pressure:0}}_touchEventToSignatureEvent(t){let e=t.changedTouches[0];return{event:t,type:t.type,x:e.clientX,y:e.clientY,pressure:e.force}}_handleMouseDown(t){!this._isLeftButtonPressed(t,!0)||this._drawingStroke||this._strokeBegin(this._pointerEventToSignatureEvent(t))}_handleMouseMove(t){if(!this._isLeftButtonPressed(t,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(t),!1);return}this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t))}_handleMouseUp(t){this._isLeftButtonPressed(t)||this._strokeEnd(this._pointerEventToSignatureEvent(t))}_handleTouchStart(t){t.targetTouches.length!==1||this._drawingStroke||(t.cancelable&&t.preventDefault(),this._strokeBegin(this._touchEventToSignatureEvent(t)))}_handleTouchMove(t){if(t.targetTouches.length===1){if(t.cancelable&&t.preventDefault(),!this._drawingStroke){this._strokeEnd(this._touchEventToSignatureEvent(t),!1);return}this._strokeMoveUpdate(this._touchEventToSignatureEvent(t))}}_handleTouchEnd(t){t.targetTouches.length===0&&(t.cancelable&&t.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(t)))}_handlePointerCancel(t){this._allowPointerId(t)&&(t.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(t),!1))}_handleTouchCancel(t){t.cancelable&&t.preventDefault(),this._strokeEnd(this._touchEventToSignatureEvent(t),!1)}_getPointerId(t){return t.persistentDeviceId||t.pointerId}_allowPointerId(t,e=!1){return typeof this._strokePointerId>`u`?e:this._getPointerId(t)===this._strokePointerId}_handlePointerDown(t){this._drawingStroke||!this._isLeftButtonPressed(t)||!this._allowPointerId(t,!0)||(this._strokePointerId=this._getPointerId(t),t.preventDefault(),this._strokeBegin(this._pointerEventToSignatureEvent(t)))}_handlePointerMove(t){if(this._allowPointerId(t)){if(!this._isLeftButtonPressed(t,!0)||!this._drawingStroke){this._strokeEnd(this._pointerEventToSignatureEvent(t),!1);return}t.preventDefault(),this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t))}}_handlePointerUp(t){this._isLeftButtonPressed(t)||!this._allowPointerId(t)||(t.preventDefault(),this._strokeEnd(this._pointerEventToSignatureEvent(t)))}_getPointGroupOptions(t){return{penColor:t&&`penColor`in t?t.penColor:this.penColor,dotSize:t&&`dotSize`in t?t.dotSize:this.dotSize,minWidth:t&&`minWidth`in t?t.minWidth:this.minWidth,maxWidth:t&&`maxWidth`in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&`velocityFilterWeight`in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&`compositeOperation`in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){if(!this.dispatchEvent(new CustomEvent(`beginStroke`,{detail:t,cancelable:!0})))return;let{addEventListener:i}=this._getListenerFunctions();switch(t.event.type){case`mousedown`:i(`mousemove`,this._handleMouseMove,{passive:!1}),i(`mouseup`,this._handleMouseUp,{passive:!1});break;case`touchstart`:i(`touchmove`,this._handleTouchMove,{passive:!1}),i(`touchend`,this._handleTouchEnd,{passive:!1}),i(`touchcancel`,this._handleTouchCancel,{passive:!1});break;case`pointerdown`:i(`pointermove`,this._handlePointerMove,{passive:!1}),i(`pointerup`,this._handlePointerUp,{passive:!1}),i(`pointercancel`,this._handlePointerCancel,{passive:!1});break;default:}this._drawingStroke=!0;let r$2=this._getPointGroupOptions(),a=s(r({},r$2),{points:[]});this._data.push(a),this._reset(r$2),this._strokeUpdate(t)}_strokeUpdate(t){if(!this._drawingStroke)return;if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent(`beforeUpdateStroke`,{detail:t}));let e=this._createPoint(t.x,t.y,t.pressure),i=this._data[this._data.length-1],r=i.points,a=r.length>0&&r[r.length-1],o=a?e.distanceTo(a)<=this.minDistance:!1,c=this._getPointGroupOptions(i);if(!a||!(a&&o)){let m=this._addPoint(e,c);a?m&&this._drawCurve(m,c):this._drawDot(e,c),r.push({time:e.time,x:e.x,y:e.y,pressure:e.pressure})}this.dispatchEvent(new CustomEvent(`afterUpdateStroke`,{detail:t}))}_strokeEnd(t,e=!0){this._removeMoveUpEventListeners(),this._drawingStroke&&(e&&this._strokeUpdate(t),this._drawingStroke=!1,this._strokePointerId=void 0,this.dispatchEvent(new CustomEvent(`endStroke`,{detail:t})))}_handlePointerEvents(){this._drawingStroke=!1,this.canvas.addEventListener(`pointerdown`,this._handlePointerDown,{passive:!1})}_handleMouseEvents(){this._drawingStroke=!1,this.canvas.addEventListener(`mousedown`,this._handleMouseDown,{passive:!1})}_handleTouchEvents(){this.canvas.addEventListener(`touchstart`,this._handleTouchStart,{passive:!1})}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,e,i){let r=this.canvas.getBoundingClientRect();return new be(t-r.left,e-r.top,i,new Date().getTime())}_addPoint(t,e){let{_lastPoints:i}=this;if(i.push(t),i.length>2){i.length===3&&i.unshift(i[0]);let r=this._calculateCurveWidths(i[1],i[2],e),a=gi.fromPoints(i,r);return i.shift(),a}return null}_calculateCurveWidths(t,e,i){let r=i.velocityFilterWeight*e.velocityFrom(t)+(1-i.velocityFilterWeight)*this._lastVelocity,a=this._strokeWidth(r,i),o={end:a,start:this._lastWidth};return this._lastVelocity=r,this._lastWidth=a,o}_strokeWidth(t,e){return Math.max(e.maxWidth/(t+1),e.minWidth)}_drawCurveSegment(t,e,i){let r=this._ctx;r.moveTo(t,e),r.arc(t,e,i,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,e){let i=this._ctx,r=t.endWidth-t.startWidth,a=Math.ceil(t.length())*2;i.beginPath(),i.fillStyle=e.penColor;for(let o=0;o<a;o+=1){let c=o/a,m=c*c,h=m*c,s=1-c,f=s*s,x=f*s,w=x*t.startPoint.x;w+=3*f*c*t.control1.x,w+=3*s*m*t.control2.x,w+=h*t.endPoint.x;let k=x*t.startPoint.y;k+=3*f*c*t.control1.y,k+=3*s*m*t.control2.y,k+=h*t.endPoint.y;let v=Math.min(t.startWidth+h*r,e.maxWidth);this._drawCurveSegment(w,k,v)}i.closePath(),i.fill()}_drawDot(t,e){let i=this._ctx,r=e.dotSize>0?e.dotSize:(e.minWidth+e.maxWidth)/2;i.beginPath(),this._drawCurveSegment(t.x,t.y,r),i.closePath(),i.fillStyle=e.penColor,i.fill()}_fromData(t,e,i){for(let r of t){let{points:a}=r,o=this._getPointGroupOptions(r);if(a.length>1)for(let c=0;c<a.length;c+=1){let m=a[c],h=new be(m.x,m.y,m.pressure,m.time);c===0&&this._reset(o);let s=this._addPoint(h,o);s&&e(s,o)}else this._reset(o),i(a[0],o)}}toSVG({includeBackgroundColor:t=!1,includeDataUrl:e=!1}={}){let i=this._data,r=Math.max(window.devicePixelRatio||1,1),a=0,o=0,c=this.canvas.width/r,m=this.canvas.height/r,h=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);if(h.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),h.setAttribute(`xmlns:xlink`,`http://www.w3.org/1999/xlink`),h.setAttribute(`viewBox`,`${a} ${o} ${c} ${m}`),h.setAttribute(`width`,c.toString()),h.setAttribute(`height`,m.toString()),t&&this.backgroundColor){let s=document.createElement(`rect`);s.setAttribute(`width`,`100%`),s.setAttribute(`height`,`100%`),s.setAttribute(`fill`,this.backgroundColor),h.appendChild(s)}if(e&&this._dataUrl){let s=this._dataUrlOptions?.ratio||window.devicePixelRatio||1,f=this._dataUrlOptions?.width||this.canvas.width/s,x=this._dataUrlOptions?.height||this.canvas.height/s,w=this._dataUrlOptions?.xOffset||0,k=this._dataUrlOptions?.yOffset||0,v=document.createElement(`image`);v.setAttribute(`x`,w.toString()),v.setAttribute(`y`,k.toString()),v.setAttribute(`width`,f.toString()),v.setAttribute(`height`,x.toString()),v.setAttribute(`preserveAspectRatio`,`none`),v.setAttribute(`href`,this._dataUrl),h.appendChild(v)}return this._fromData(i,(s,{penColor:f})=>{let x=document.createElement(`path`);if(!isNaN(s.control1.x)&&!isNaN(s.control1.y)&&!isNaN(s.control2.x)&&!isNaN(s.control2.y)){let w=`M ${s.startPoint.x.toFixed(3)},${s.startPoint.y.toFixed(3)} C ${s.control1.x.toFixed(3)},${s.control1.y.toFixed(3)} ${s.control2.x.toFixed(3)},${s.control2.y.toFixed(3)} ${s.endPoint.x.toFixed(3)},${s.endPoint.y.toFixed(3)}`;x.setAttribute(`d`,w),x.setAttribute(`stroke-width`,(s.endWidth*2.25).toFixed(3)),x.setAttribute(`stroke`,f),x.setAttribute(`fill`,`none`),x.setAttribute(`stroke-linecap`,`round`),h.appendChild(x)}},(s,{penColor:f,dotSize:x,minWidth:w,maxWidth:k})=>{let v=document.createElement(`circle`),ie=x>0?x:(w+k)/2;v.setAttribute(`r`,ie.toString()),v.setAttribute(`cx`,s.x.toString()),v.setAttribute(`cy`,s.y.toString()),v.setAttribute(`fill`,f),h.appendChild(v)}),h.outerHTML}};export{ke as a,gn as i,Tn as n,mi as o,_i as r,ui as s,In as t};