import{$r as wh,Ar as qw,Bn as hl,Br as ts,Bt as Wg,D as Fr,Dn as et$1,Et as Rw,Fn as gh,G as Iw,It as Uh,Jt as YD,Kt as Xw,Ln as hT,Lt as V,Nn as gc,O as Fy,On as eu,Pr as sT,Q as KD,Qt as Zh,R as Ih,Rn as he$1,Rt as Vh,Sn as de$1,St as Rh,Un as hw,Vr as tw,Wt as XD,Y as Js,Yt as YI,_r as od,_t as Pr,a as Ah,ai as xD,ci as xj,ct as N,f as D$1,fr as mw,ft as Oh,gi as yw,gr as oT,gt as Ph,h as Dj,hr as nv,jr as rd,k as Ge,kn as ew,m as Dh,n as $i,o as Aj,pn as aw,pr as ng,qt as Y,ri as ww,rn as _i,t as $h,tn as _D,tr as km,ui as xr,ut as Nj,vt as Qh,w as Ew,wt as Rm,xt as Re,yn as cT}from"./chunk-XMMDyd3T.js";import{h as ei}from"./chunk-DjQzzoZv.js";import{ct as St$1}from"./main-ADO3GQQL.js";import{Ct as re,F as I,It as m,L as k,Lt as h,Mt as wt$1,Nt as yt$1,Ot as at$1,Pt as A,R as l,Rt as j,Tt as N$1,Y as at$2,bt as ne,dt as Ve,ft as Ws,ht as ce$1,pt as Ye$1,rt as Hs,u as ii}from"./chunk-D_XLG1di.js";var it=[`*`];function at(t,r){t&1&&yw(0)}var de=(()=>{class t{_elementRef=D$1(Fr);focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(n){return new(n||t)};static ɵdir=xD({type:t,selectors:[[``,`cdkStepHeader`,``]],hostAttrs:[`role`,`tab`]})}return t})();var ce=(()=>{class t{template=D$1(xr);static ɵfac=function(n){return new(n||t)};static ɵdir=xD({type:t,selectors:[[``,`cdkStepLabel`,``]]})}return t})();var D={NUMBER:`number`,EDIT:`edit`,DONE:`done`,ERROR:`error`};var rt=new N(`STEPPER_GLOBAL_OPTIONS`);var J=(()=>{class t{_stepperOptions;_stepper=D$1(X);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=Ge(!1);interactedStream=new et$1;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=Ge(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=Ge(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||ot(this.stepControl)))}set completed(e){this._completedOverride.set(e)}_completedOverride=Ge(null);index=Ge(-1);isSelected=de$1(()=>this._stepper.selectedIndex===this.index());indicatorType=de$1(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??D.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!e?D.ERROR:this._displayDefaultIndicatorType?!n||e?D.NUMBER:a?D.EDIT:D.DONE:n&&!e?D.DONE:n&&e?i:a&&e?D.EDIT:i});isNavigable=de$1(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){return this._customError()??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=Ge(null);_getDefaultError(){return this.interacted&&!!this.stepControl&&Ze(this.stepControl)}constructor(){let e=D$1(rt,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),lt(this.stepControl))}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static ɵfac=function(n){return new(n||t)};static ɵcmp=_D({type:t,selectors:[[`cdk-step`]],contentQueries:function(n,i,a){if(n&1&&$h(a,ce,5)(a,St$1,5),n&2){let s;Iw(s=Ew())&&(i.stepLabel=s.first),Iw(s=Ew())&&(i._childForms=s)}},viewQuery:function(n,i){if(n&1&&Uh(xr,7),n&2){let a;Iw(a=Ew())&&(i.content=a.first)}},inputs:{stepControl:`stepControl`,label:`label`,errorMessage:`errorMessage`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],state:`state`,editable:[2,`editable`,`editable`,xj],optional:[2,`optional`,`optional`,xj],completed:[2,`completed`,`completed`,xj],hasError:[2,`hasError`,`hasError`,xj]},outputs:{interactedStream:`interacted`},exportAs:[`cdkStep`],features:[Fy],ngContentSelectors:it,decls:1,vars:0,template:function(n,i){n&1&&(mw(),wh(0,at,1,0,`ng-template`))},encapsulation:2})}return t})();var X=(()=>{class t{_dir=D$1(m,{optional:!0});_changeDetectorRef=D$1(Nj);_elementRef=D$1(Fr);_destroyed=new Y;_keyManager;_steps;steps=new _i;_stepHeader;_sortedHeaders=new _i;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=Ge(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=Ge(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new et$1;selectedIndexChange=new et$1;_groupId=D$1(re).getId(`cdk-stepper-`);get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e===`vertical`)}_orientation=`horizontal`;ngAfterContentInit(){this._steps.changes.pipe(Rm(this._steps),km(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(Rm(this._stepHeader),km(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new ce$1(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation===`vertical`),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:Wg()).pipe(Rm(this._layoutDirection()),km(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()===`rtl`?`next`:`previous`:n>0?this._layoutDirection()===`rtl`?`previous`:`next`:`current`}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=Ve(e),i=e.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a?.setFocusOrigin(`keyboard`).onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?Ze(i)||st(i)||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_containsFocus(){let e=this._elementRef.nativeElement,n=ne();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static ɵfac=function(n){return new(n||t)};static ɵdir=xD({type:t,selectors:[[``,`cdkStepper`,``]],contentQueries:function(n,i,a){if(n&1&&$h(a,J,5)(a,de,5),n&2){let s;Iw(s=Ew())&&(i._steps=s),Iw(s=Ew())&&(i._stepHeader=s)}},inputs:{linear:[2,`linear`,`linear`,xj],selectedIndex:[2,`selectedIndex`,`selectedIndex`,Aj],selected:`selected`,orientation:`orientation`},outputs:{selectionChange:`selectionChange`,selectedIndexChange:`selectedIndexChange`},exportAs:[`cdkStepper`]})}return t})();function ee(t){return typeof t==`function`}function ot(t){return ee(t)?t().valid():t.valid}function Ze(t){return ee(t)?t().invalid():t.invalid}function st(t){return ee(t)?t().pending():t.pending}function lt(t){ee(t)?t().reset():t.reset()}var Ye=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=gh({type:t});static ɵinj=Js({imports:[A]})}return t})();var pt=(t,r,e)=>({index:t,active:r,optional:e});function dt(t,r){if(t&1&&Ph(0,2),t&2){let e=hw();Oh(`ngTemplateOutlet`,e.iconOverrides[e.state])(`ngTemplateOutletContext`,cT(2,pt,e.index,e.active,e.optional))}}function ct(t,r){if(t&1&&($i(0,`span`,7),qw(1),hl()),t&2){let e=hw(2);YI(),ng(e._getDefaultTextForState(e.state))}}function mt(t,r){if(t&1&&($i(0,`span`,8),qw(1),hl()),t&2){let e=hw(3);YI(),ng(e._intl.completedLabel)}}function ht(t,r){if(t&1&&($i(0,`span`,8),qw(1),hl()),t&2){let e=hw(3);YI(),ng(e._intl.editableLabel)}}function ut(t,r){if(t&1&&(YD(0,mt,2,1,`span`,8)(1,ht,2,1,`span`,8),$i(2,`mat-icon`,7),qw(3),hl()),t&2){let e=hw(2);KD(e.state===`done`?0:e.state===`edit`?1:-1),YI(3),ng(e._getDefaultTextForState(e.state))}}function ft(t,r){if(t&1&&YD(0,ct,2,1,`span`,7)(1,ut,4,2),t&2)KD(hw().state===`number`?0:1)}function _t(t,r){t&1&&($i(0,`div`,4),Ph(1,9),hl()),t&2&&(YI(),Oh(`ngTemplateOutlet`,r.template))}function vt(t,r){if(t&1&&($i(0,`div`,4),qw(1),hl()),t&2){let e=hw();YI(),ng(e.label)}}function gt(t,r){if(t&1&&($i(0,`div`,5),qw(1),hl()),t&2){let e=hw();YI(),ng(e._intl.optionalLabel)}}function bt(t,r){if(t&1&&($i(0,`div`,6),qw(1),hl()),t&2){let e=hw();YI(),ng(e.errorMessage)}}var Je=[`*`];function yt(t,r){}function xt(t,r){if(t&1&&(yw(0),Dh(1,yt,0,0,`ng-template`,0)),t&2){let e=hw();YI(),Oh(`cdkPortalOutlet`,e._portal)}}var St=[`animatedContainer`];var Xe=t=>({steps:t});var et=t=>({step:t});function Ct(t,r){t&1&&yw(0)}function Mt(t,r){if(t&1&&($i(0,`div`,5),Ph(1,9)(2,6),hl()),t&2){let e=hw(2),n=ww(6);YI(),Oh(`ngTemplateOutlet`,e.headerPrefix()),YI(),Oh(`ngTemplateOutlet`,n)(`ngTemplateOutletContext`,sT(3,Xe,e.steps))}}function Dt(t,r){if(t&1&&Ph(0,6),t&2){let e=hw(2);Oh(`ngTemplateOutlet`,ww(6))(`ngTemplateOutletContext`,sT(2,Xe,e.steps))}}function It(t,r){if(t&1&&($i(0,`div`,10,2),Ph(2,9),hl()),t&2){let e=r.$implicit,n=r.$index,i=hw(2);Rw(`mat-horizontal-stepper-content-`+i._getAnimationDirection(n)),Oh(`id`,i._getStepContentId(n)),Ah(`aria-labelledby`,i._getStepLabelId(n))(`inert`,i.selectedIndex===n?null:``),YI(2),Oh(`ngTemplateOutlet`,e.content)}}function Nt(t,r){if(t&1&&($i(0,`div`,3),YD(1,Mt,3,5,`div`,5)(2,Dt,1,4,`ng-container`,6),$i(3,`div`,7),ew(4,It,3,6,`div`,8,XD),hl()()),t&2){let e=hw();YI(),KD(e.headerPrefix()?1:2),YI(3),tw(e.steps)}}function Et(t,r){if(t&1&&Ph(0,9),t&2)Oh(`ngTemplateOutlet`,hw(2).headerPrefix())}function kt(t,r){if(t&1&&($i(0,`div`,11),Ph(1,6),$i(2,`div`,12,2)(4,`div`,13)(5,`div`,14),Ph(6,9),hl()()()()),t&2){let e=r.$implicit,n=r.$index,i=r.$index,a=r.$count,s=hw(2),te=ww(4);YI(),Oh(`ngTemplateOutlet`,te)(`ngTemplateOutletContext`,sT(11,et,e)),YI(),Zh(`mat-stepper-vertical-line`,i!==a-1)(`mat-vertical-content-container-active`,s.selectedIndex===n),Ah(`inert`,s.selectedIndex===n?null:``)(`aria-label`,s.ariaLabel),YI(2),Oh(`id`,s._getStepContentId(n)),Ah(`aria-labelledby`,s._getStepLabelId(n)),YI(2),Oh(`ngTemplateOutlet`,e.content)}}function wt(t,r){if(t&1&&($i(0,`div`,4),YD(1,Et,1,1,`ng-container`,9),ew(2,kt,7,13,`div`,11,XD),hl()),t&2){let e=hw();YI(),KD(e.headerPrefix()?1:-1),YI(),tw(e.steps)}}function Tt(t,r){if(t&1){let e=aw();$i(0,`mat-step-header`,15),Vh(`click`,function(){let i=rd(e).step;return od(i.select())})(`keydown`,function(i){rd(e);return od(hw()._onKeydown(i))}),hl()}if(t&2){let e=r.step,n=hw();Zh(`mat-horizontal-stepper-header`,n.orientation===`horizontal`)(`mat-vertical-stepper-header`,n.orientation===`vertical`),Oh(`tabIndex`,n._getFocusIndex()===e.index()?0:-1)(`id`,n._getStepLabelId(e.index()))(`index`,e.index())(`state`,e.indicatorType())(`label`,e.stepLabel||e.label)(`selected`,e.isSelected())(`active`,e.isNavigable())(`optional`,e.optional)(`errorMessage`,e.errorMessage)(`iconOverrides`,n._iconOverrides)(`disableRipple`,n.disableRipple||!e.isNavigable())(`color`,e.color||n.color),Ah(`role`,n.orientation===`horizontal`?`tab`:`button`)(`aria-posinset`,n.orientation===`horizontal`?e.index()+1:null)(`aria-setsize`,n.orientation===`horizontal`?n.steps.length:null)(`aria-selected`,n.orientation===`horizontal`?e.isSelected():null)(`aria-current`,n.orientation===`vertical`&&e.isSelected()?`step`:null)(`aria-disabled`,n.orientation===`vertical`&&e.isSelected()?`true`:null)(`aria-expanded`,n.orientation===`vertical`?e.isSelected():null)(`aria-controls`,n._getStepContentId(e.index()))(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)(`aria-disabled`,e.isNavigable()?null:!0)}}function zt(t,r){t&1&&Rh(0,`div`,17)}function Ot(t,r){if(t&1&&(Ph(0,6),YD(1,zt,1,0,`div`,17)),t&2){let e=r.$implicit,n=r.$index,i=r.$count;hw(2);Oh(`ngTemplateOutlet`,ww(4))(`ngTemplateOutletContext`,sT(3,et,e)),YI(),KD(n!==i-1?1:-1)}}function Rt(t,r){if(t&1&&($i(0,`div`,16),ew(1,Ot,2,5,null,null,XD),hl()),t&2){let e=r.steps;Ah(`aria-label`,hw().ariaLabel),YI(),tw(e)}}var me=(()=>{class t extends ce{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(t)))(i||t)}})();static ɵdir=xD({type:t,selectors:[[``,`matStepLabel`,``]],features:[Ih]})}return t})();var Lt=(()=>{class t{changes=new Y;optionalLabel=`Optional`;completedLabel=`Completed`;editableLabel=`Editable`;static ɵfac=function(n){return new(n||t)};static ɵprov=Pr({token:t,factory:t.ɵfac})}return t})();var he=(()=>{class t extends de{_intl=D$1(Lt);_focusMonitor=D$1(Ye$1);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=D$1(h);e.load(Ws),e.load(j);let n=D$1(Nj);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof me?null:this.label}_templateLabel(){return this.label instanceof me?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e==`number`?`${this.index+1}`:e==`edit`?`create`:e==`error`?`warning`:e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!==`error`}_hasErrorLabel(){return this.state===`error`}static ɵfac=function(n){return new(n||t)};static ɵcmp=_D({type:t,selectors:[[`mat-step-header`]],hostAttrs:[`role`,``,1,`mat-step-header`],hostVars:4,hostBindings:function(n,i){n&2&&(Rw(`mat-`+(i.color||`primary`)),Zh(`mat-step-header-empty-label`,i._hasEmptyLabel()))},inputs:{state:`state`,label:`label`,errorMessage:`errorMessage`,iconOverrides:`iconOverrides`,index:`index`,selected:`selected`,active:`active`,optional:`optional`,disableRipple:`disableRipple`,color:`color`},features:[Ih],decls:10,vars:17,consts:[[`matRipple`,``,1,`mat-step-header-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mat-step-icon-content`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-step-label`],[1,`mat-step-text-label`],[1,`mat-step-optional`],[1,`mat-step-sub-label-error`],[`aria-hidden`,`true`],[1,`cdk-visually-hidden`],[3,`ngTemplateOutlet`]],template:function(n,i){if(n&1&&(Rh(0,`div`,0),$i(1,`div`)(2,`div`,1),YD(3,dt,1,6,`ng-container`,2)(4,ft,2,1),hl()(),$i(5,`div`,3),YD(6,_t,2,1,`div`,4)(7,vt,2,1,`div`,4),YD(8,gt,2,1,`div`,5),YD(9,bt,2,1,`div`,6),hl()),n&2){let a;Oh(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disableRipple),YI(),Rw(Xw(`mat-step-icon-state-`,i.state,` mat-step-icon`)),Zh(`mat-step-icon-selected`,i.selected),YI(2),KD(i.iconOverrides&&i.iconOverrides[i.state]?3:4),YI(2),Zh(`mat-step-label-active`,i.active)(`mat-step-label-selected`,i.selected)(`mat-step-label-error`,i.state==`error`),YI(),KD((a=i._templateLabel())?6:i._stringLabel()?7:-1,a),YI(2),KD(i._hasOptionalLabel()?8:-1),YI(),KD(i._hasErrorLabel()?9:-1)}},dependencies:[Hs,ei,wt$1],styles:[`.mat-step-header {
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
`],encapsulation:2})}return t})();var Ft=(()=>{class t{templateRef=D$1(xr);name;static ɵfac=function(n){return new(n||t)};static ɵdir=xD({type:t,selectors:[[`ng-template`,`matStepperIcon`,``]],inputs:{name:[0,`matStepperIcon`,`name`]}})}return t})();var Pt=(()=>{class t{_template=D$1(xr);static ɵfac=function(n){return new(n||t)};static ɵdir=xD({type:t,selectors:[[`ng-template`,`matStepContent`,``]]})}return t})();var At=(()=>{class t extends J{_errorStateMatcher=D$1(ii,{skipSelf:!0});_viewContainerRef=D$1(ts);_isSelected=V.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(eu(()=>this._stepper.selectionChange.pipe(Re(e=>e.selectedStep===this),Rm(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new l(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),a=!!(e&&e.invalid&&this.interacted);return i||a}isSignalErrorState(e){let n=this._errorStateMatcher.isSignalErrorState?.(e)??!1,i=!!(e&&e().invalid()&&this.interacted);return n||i}static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(t)))(i||t)}})();static ɵcmp=_D({type:t,selectors:[[`mat-step`]],contentQueries:function(n,i,a){if(n&1&&$h(a,me,5)(a,Pt,5),n&2){let s;Iw(s=Ew())&&(i.stepLabel=s.first),Iw(s=Ew())&&(i._lazyContent=s.first)}},hostAttrs:[`hidden`,``],inputs:{color:`color`},exportAs:[`matStep`],features:[oT([{provide:ii,useExisting:t},{provide:J,useExisting:t}]),Ih],ngContentSelectors:Je,decls:1,vars:0,consts:[[3,`cdkPortalOutlet`]],template:function(n,i){n&1&&(mw(),Dh(0,xt,2,1,`ng-template`))},dependencies:[I],encapsulation:2})}return t})();var Ht=(()=>{class t extends X{_ngZone=D$1(he$1);_renderer=D$1(gc);_animationsDisabled=at$1();_cleanupTransition;_isAnimating=Ge(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new _i;_icons;animationDone=new et$1;disableRipple=!1;color;labelPosition=`end`;headerPosition=`top`;ariaLabel=null;headerPrefix=Dj(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){/^[0-9]+(?:\.[0-9]+)?$/.test(e)?this._animationDuration=e+`ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(e)?this._animationDuration=e:this._animationDuration=``}_animationDuration=``;_isServer=!D$1(N$1).isBrowser;constructor(){super();let n=D$1(Fr).nativeElement.nodeName.toLowerCase();this.orientation=n===`mat-vertical-stepper`?`vertical`:`horizontal`}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(km(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(km(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e===`0ms`||e===`0s`?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-stepper-animations-enabled`),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask==`function`){let e=!1;this._animatedContainers.changes.pipe(Rm(null),km(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?`0ms`:this.animationDuration?this.animationDuration:this.orientation===`horizontal`?`500ms`:`225ms`}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation===`horizontal`&&e.propertyName===`transform`&&n.classList.contains(`mat-horizontal-stepper-content-current`),a=this.orientation===`vertical`&&e.propertyName===`grid-template-rows`&&n.classList.contains(`mat-vertical-content-container-active`);(i||a)&&this._animatedContainers.find(te=>te.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static ɵfac=function(n){return new(n||t)};static ɵcmp=_D({type:t,selectors:[[`mat-stepper`],[`mat-vertical-stepper`],[`mat-horizontal-stepper`],[``,`matStepper`,``]],contentQueries:function(n,i,a){if(n&1&&$h(a,At,5)(a,Ft,5),n&2){let s;Iw(s=Ew())&&(i._steps=s),Iw(s=Ew())&&(i._icons=s)}},viewQuery:function(n,i){if(n&1&&Uh(he,5)(St,5),n&2){let a;Iw(a=Ew())&&(i._stepHeader=a),Iw(a=Ew())&&(i._animatedContainers=a)}},hostVars:14,hostBindings:function(n,i){n&2&&(Qh(`--%NS%mat-stepper-animation-duration`,i._getAnimationDuration()),Zh(`mat-stepper-horizontal`,i.orientation===`horizontal`)(`mat-stepper-vertical`,i.orientation===`vertical`)(`mat-stepper-label-position-end`,i.orientation===`horizontal`&&i.labelPosition==`end`)(`mat-stepper-label-position-bottom`,i.orientation===`horizontal`&&i.labelPosition==`bottom`)(`mat-stepper-header-position-bottom`,i.headerPosition===`bottom`)(`mat-stepper-animating`,i._isAnimating()))},inputs:{disableRipple:`disableRipple`,color:`color`,labelPosition:`labelPosition`,headerPosition:`headerPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],headerPrefix:[1,`headerPrefix`],animationDuration:`animationDuration`},outputs:{animationDone:`animationDone`},exportAs:[`matStepper`,`matVerticalStepper`,`matHorizontalStepper`],features:[oT([{provide:X,useExisting:t}]),Ih],ngContentSelectors:Je,decls:7,vars:2,consts:[[`stepTemplate`,``],[`horizontalStepsTemplate`,``],[`animatedContainer`,``],[1,`mat-horizontal-stepper-wrapper`],[1,`mat-vertical-stepper-wrapper`],[1,`mat-horizontal-stepper-header-wrapper`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[1,`mat-horizontal-content-container`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`,`class`],[3,`ngTemplateOutlet`],[`role`,`tabpanel`,1,`mat-horizontal-stepper-content`,3,`id`],[1,`mat-step`],[1,`mat-vertical-content-container`],[`role`,`region`,1,`mat-vertical-stepper-content`,3,`id`],[1,`mat-vertical-content`],[3,`click`,`keydown`,`tabIndex`,`id`,`index`,`state`,`label`,`selected`,`active`,`optional`,`errorMessage`,`iconOverrides`,`disableRipple`,`color`],[`aria-orientation`,`horizontal`,`role`,`tablist`,1,`mat-horizontal-stepper-header-container`],[1,`mat-stepper-horizontal-line`]],template:function(n,i){if(n&1&&(mw(),YD(0,Ct,1,0),YD(1,Nt,6,1,`div`,3)(2,wt,4,1,`div`,4),Dh(3,Tt,1,27,`ng-template`,null,0,hT)(5,Rt,3,1,`ng-template`,null,1,hT)),n&2){let a;KD(i._isServer?0:-1),YI(),KD((a=i.orientation)===`horizontal`?1:a===`vertical`?2:-1)}},dependencies:[ei,he],styles:[`.mat-stepper-vertical,
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
`],encapsulation:2})}return t})();var Pn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=gh({type:t});static ɵinj=Js({providers:[ii],imports:[k,Ye,yt$1,at$2,Ht,he,A]})}return t})();export{me as a,Pt as i,Ht as n,Pn as r,At as t};