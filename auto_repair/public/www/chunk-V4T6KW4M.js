import{a as Y}from"./chunk-VRFSCYSY.js";import{b as Pe,e as Ae,f as Ne}from"./chunk-3AS2PUBU.js";import{c as Ke}from"./chunk-F74V3KV4.js";import{A as $e,I as Ge,J as Ue,b as Oe,l as Fe,m as He,p as Qe}from"./chunk-JQQIOLSY.js";import{b as Ve}from"./chunk-BXXAS6LD.js";import{a as ze}from"./chunk-PZOEXQA6.js";import{a as je,b as qe}from"./chunk-VZVV52TZ.js";import{a as Re,b as Be}from"./chunk-VMAANO2P.js";import{a as Le,c as Z}from"./chunk-6VFHCGLY.js";import{e as Te}from"./chunk-AF2COOOT.js";import{i as le}from"./chunk-LPOYRDVN.js";import{$ as ge,$b as re,Aa as ie,Ca as O,Cc as Ie,Da as R,Ec as oe,Fb as k,Gc as N,Hb as f,Ib as _,Ic as Ee,Kb as $,Lb as j,Mb as q,Mc as se,Nb as m,Ob as d,Pb as c,Qb as ae,Rc as K,S,T as _e,U as b,Wb as v,Xb as Me,Yc as we,Za as o,aa as Q,b as he,bc as p,bd as W,ca as ve,cb as E,cc as F,dc as P,ea as l,eb as xe,ec as T,fc as G,fd as z,g as H,gc as h,gd as ke,hc as u,jb as Ce,ka as te,la as ne,lc as A,mc as De,nb as w,nc as M,ob as B,oc as U,p as ue,pb as y,pc as x,qc as C,sa as I,sb as L,ta as be,tb as V,u as fe,ub as Se,wa as g,za as ye}from"./chunk-42UVW3AB.js";var tt=["*"];function nt(t,r){t&1&&P(0)}var pe=(()=>{class t{_elementRef=l(O);constructor(){}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["","cdkStepHeader",""]],hostAttrs:["role","tab"]})}return t})(),de=(()=>{class t{template=l(E);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["","cdkStepLabel",""]]})}return t})();var D={NUMBER:"number",EDIT:"edit",DONE:"done",ERROR:"error"},it=new ve("STEPPER_GLOBAL_OPTIONS"),J=(()=>{class t{_stepperOptions;_stepper=l(X);_displayDefaultIndicatorType;stepLabel;_childForms;content;stepControl;get interacted(){return this._interacted()}set interacted(e){this._interacted.set(e)}_interacted=g(!1);interactedStream=new I;label;errorMessage;ariaLabel;ariaLabelledby;get state(){return this._state()}set state(e){this._state.set(e)}_state=g(void 0);get editable(){return this._editable()}set editable(e){this._editable.set(e)}_editable=g(!0);optional=!1;get completed(){let e=this._completedOverride(),n=this._interacted();return e??(n&&(!this.stepControl||this.stepControl.valid))}set completed(e){this._completedOverride.set(e)}_completedOverride=g(null);index=g(-1);isSelected=K(()=>this._stepper.selectedIndex===this.index());indicatorType=K(()=>{let e=this.isSelected(),n=this.completed,i=this._state()??D.NUMBER,a=this._editable();return this._showError()&&this.hasError&&!e?D.ERROR:this._displayDefaultIndicatorType?!n||e?D.NUMBER:a?D.EDIT:D.DONE:n&&!e?D.DONE:n&&e?i:a&&e?D.EDIT:i});isNavigable=K(()=>{let e=this.isSelected();return this.completed||e||!this._stepper.linear});get hasError(){let e=this._customError();return e??this._getDefaultError()}set hasError(e){this._customError.set(e)}_customError=g(null);_getDefaultError(){return this.interacted&&!!this.stepControl?.invalid}constructor(){let e=l(it,{optional:!0});this._stepperOptions=e||{},this._displayDefaultIndicatorType=this._stepperOptions.displayDefaultIndicatorType!==!1}select(){this._stepper.selected=this}reset(){this._interacted.set(!1),this._completedOverride()!=null&&this._completedOverride.set(!1),this._customError()!=null&&this._customError.set(!1),this.stepControl&&(this._childForms?.forEach(e=>e.resetForm?.()),this.stepControl.reset())}ngOnChanges(){this._stepper._stateChanged()}_markAsInteracted(){this._interacted()||(this._interacted.set(!0),this.interactedStream.emit(this))}_showError(){return this._stepperOptions.showError??this._customError()!=null}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["cdk-step"]],contentQueries:function(n,i,a){if(n&1&&T(a,de,5)(a,Te,5),n&2){let s;h(s=u())&&(i.stepLabel=s.first),h(s=u())&&(i._childForms=s)}},viewQuery:function(n,i){if(n&1&&G(E,7),n&2){let a;h(a=u())&&(i.content=a.first)}},inputs:{stepControl:"stepControl",label:"label",errorMessage:"errorMessage",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],state:"state",editable:[2,"editable","editable",z],optional:[2,"optional","optional",z],completed:[2,"completed","completed",z],hasError:[2,"hasError","hasError",z]},outputs:{interactedStream:"interacted"},exportAs:["cdkStep"],features:[ye],ngContentSelectors:tt,decls:1,vars:0,template:function(n,i){n&1&&(F(),Se(0,nt,1,0,"ng-template"))},encapsulation:2,changeDetection:0})}return t})(),X=(()=>{class t{_dir=l(Le,{optional:!0});_changeDetectorRef=l(W);_elementRef=l(O);_destroyed=new H;_keyManager;_steps;steps=new R;_stepHeader;_sortedHeaders=new R;get linear(){return this._linear()}set linear(e){this._linear.set(e)}_linear=g(!1);get selectedIndex(){return this._selectedIndex()}set selectedIndex(e){this._steps?(this._isValidIndex(e),this.selectedIndex!==e&&(this.selected?._markAsInteracted(),!this._anyControlsInvalidOrPending(e)&&(e>=this.selectedIndex||this.steps.toArray()[e].editable)&&this._updateSelectedItemIndex(e))):this._selectedIndex.set(e)}_selectedIndex=g(0);get selected(){return this.steps?this.steps.toArray()[this.selectedIndex]:void 0}set selected(e){this.selectedIndex=e&&this.steps?this.steps.toArray().indexOf(e):-1}selectionChange=new I;selectedIndexChange=new I;_groupId=l(Fe).getId("cdk-stepper-");get orientation(){return this._orientation}set orientation(e){this._orientation=e,this._keyManager&&this._keyManager.withVerticalOrientation(e==="vertical")}_orientation="horizontal";constructor(){}ngAfterContentInit(){this._steps.changes.pipe(S(this._steps),b(this._destroyed)).subscribe(e=>{this.steps.reset(e.filter(n=>n._stepper===this)),this.steps.forEach((n,i)=>n.index.set(i)),this.steps.notifyOnChanges()})}ngAfterViewInit(){if(this._stepHeader.changes.pipe(S(this._stepHeader),b(this._destroyed)).subscribe(e=>{this._sortedHeaders.reset(e.toArray().sort((n,i)=>n._elementRef.nativeElement.compareDocumentPosition(i._elementRef.nativeElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)),this._sortedHeaders.notifyOnChanges()}),this._keyManager=new $e(this._sortedHeaders).withWrap().withHomeAndEnd().withVerticalOrientation(this._orientation==="vertical"),this._keyManager.updateActiveItem(this.selectedIndex),(this._dir?this._dir.change:ue()).pipe(S(this._layoutDirection()),b(this._destroyed)).subscribe(e=>this._keyManager?.withHorizontalOrientation(e)),this._keyManager.updateActiveItem(this.selectedIndex),this.steps.changes.subscribe(()=>{this.selected||this._selectedIndex.set(Math.max(this.selectedIndex-1,0))}),this._isValidIndex(this.selectedIndex)||this._selectedIndex.set(0),this.linear&&this.selectedIndex>0){let e=this.steps.toArray().slice(0,this._selectedIndex());for(let n of e)n._markAsInteracted()}}ngOnDestroy(){this._keyManager?.destroy(),this.steps.destroy(),this._sortedHeaders.destroy(),this._destroyed.next(),this._destroyed.complete()}next(){this.selectedIndex=Math.min(this._selectedIndex()+1,this.steps.length-1)}previous(){this.selectedIndex=Math.max(this._selectedIndex()-1,0)}reset(){this._updateSelectedItemIndex(0),this.steps.forEach(e=>e.reset()),this._stateChanged()}_getStepLabelId(e){return`${this._groupId}-label-${e}`}_getStepContentId(e){return`${this._groupId}-content-${e}`}_stateChanged(){this._changeDetectorRef.markForCheck()}_getAnimationDirection(e){let n=e-this._selectedIndex();return n<0?this._layoutDirection()==="rtl"?"next":"previous":n>0?this._layoutDirection()==="rtl"?"previous":"next":"current"}_getFocusIndex(){return this._keyManager?this._keyManager.activeItemIndex:this._selectedIndex()}_updateSelectedItemIndex(e){let n=this.steps.toArray(),i=this._selectedIndex();this.selectionChange.emit({selectedIndex:e,previouslySelectedIndex:i,selectedStep:n[e],previouslySelectedStep:n[i]}),this._keyManager&&(this._containsFocus()?this._keyManager.setActiveItem(e):this._keyManager.updateActiveItem(e)),this._selectedIndex.set(e),this.selectedIndexChange.emit(e),this._stateChanged()}_onKeydown(e){let n=He(e),i=e.keyCode,a=this._keyManager;a?.activeItemIndex!=null&&!n&&(i===32||i===13)?(this.selectedIndex=a.activeItemIndex,e.preventDefault()):a?.setFocusOrigin("keyboard").onKeydown(e)}_anyControlsInvalidOrPending(e){return this.linear&&e>=0?this.steps.toArray().slice(0,e).some(n=>{let i=n.stepControl;return(i?i.invalid||i.pending||!n.interacted:!n.completed)&&!n.optional&&!n._completedOverride()}):!1}_layoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_containsFocus(){let e=this._elementRef.nativeElement,n=Oe();return e===n||e.contains(n)}_isValidIndex(e){return e>-1&&(!this.steps||e<this.steps.length)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["","cdkStepper",""]],contentQueries:function(n,i,a){if(n&1&&T(a,J,5)(a,pe,5),n&2){let s;h(s=u())&&(i._steps=s),h(s=u())&&(i._stepHeader=s)}},inputs:{linear:[2,"linear","linear",z],selectedIndex:[2,"selectedIndex","selectedIndex",ke],selected:"selected",orientation:"orientation"},outputs:{selectionChange:"selectionChange",selectedIndexChange:"selectedIndexChange"},exportAs:["cdkStepper"]})}return t})();var We=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=Q({imports:[Z]})}return t})();var at=(t,r,e)=>({index:t,active:r,optional:e});function rt(t,r){if(t&1&&v(0,2),t&2){let e=p();m("ngTemplateOutlet",e.iconOverrides[e.state])("ngTemplateOutletContext",Ee(2,at,e.index,e.active,e.optional))}}function ot(t,r){if(t&1&&(d(0,"span",7),x(1),c()),t&2){let e=p(2);o(),C(e._getDefaultTextForState(e.state))}}function st(t,r){if(t&1&&(d(0,"span",8),x(1),c()),t&2){let e=p(3);o(),C(e._intl.completedLabel)}}function lt(t,r){if(t&1&&(d(0,"span",8),x(1),c()),t&2){let e=p(3);o(),C(e._intl.editableLabel)}}function pt(t,r){if(t&1&&(f(0,st,2,1,"span",8)(1,lt,2,1,"span",8),d(2,"mat-icon",7),x(3),c()),t&2){let e=p(2);_(e.state==="done"?0:e.state==="edit"?1:-1),o(3),C(e._getDefaultTextForState(e.state))}}function dt(t,r){if(t&1&&f(0,ot,2,1,"span",7)(1,pt,4,2),t&2){let e,n=p();_((e=n.state)==="number"?0:1)}}function ct(t,r){t&1&&(d(0,"div",4),v(1,9),c()),t&2&&(o(),m("ngTemplateOutlet",r.template))}function mt(t,r){if(t&1&&(d(0,"div",4),x(1),c()),t&2){let e=p();o(),C(e.label)}}function ht(t,r){if(t&1&&(d(0,"div",5),x(1),c()),t&2){let e=p();o(),C(e._intl.optionalLabel)}}function ut(t,r){if(t&1&&(d(0,"div",6),x(1),c()),t&2){let e=p();o(),C(e.errorMessage)}}var Ze=["*"];function ft(t,r){}function _t(t,r){if(t&1&&(P(0),V(1,ft,0,0,"ng-template",0)),t&2){let e=p();o(),m("cdkPortalOutlet",e._portal)}}var gt=["animatedContainer"],Ye=t=>({steps:t}),Je=t=>({step:t});function vt(t,r){t&1&&P(0)}function bt(t,r){if(t&1&&(d(0,"div",5),v(1,9)(2,6),c()),t&2){let e=p(2),n=A(6);o(),m("ngTemplateOutlet",e.headerPrefix()),o(),m("ngTemplateOutlet",n)("ngTemplateOutletContext",N(3,Ye,e.steps))}}function yt(t,r){if(t&1&&v(0,6),t&2){let e=p(2),n=A(6);m("ngTemplateOutlet",n)("ngTemplateOutletContext",N(2,Ye,e.steps))}}function xt(t,r){if(t&1&&(d(0,"div",10,2),v(2,9),c()),t&2){let e=r.$implicit,n=r.$index,i=p(2);U("mat-horizontal-stepper-content-"+i._getAnimationDirection(n)),m("id",i._getStepContentId(n)),k("aria-labelledby",i._getStepLabelId(n))("inert",i.selectedIndex===n?null:""),o(2),m("ngTemplateOutlet",e.content)}}function Ct(t,r){if(t&1&&(d(0,"div",3),f(1,bt,3,5,"div",5)(2,yt,1,4,"ng-container",6),d(3,"div",7),j(4,xt,3,6,"div",8,$),c()()),t&2){let e=p();o(),_(e.headerPrefix()?1:2),o(3),q(e.steps)}}function St(t,r){if(t&1&&v(0,9),t&2){let e=p(2);m("ngTemplateOutlet",e.headerPrefix())}}function Mt(t,r){if(t&1&&(d(0,"div",11),v(1,6),d(2,"div",12,2)(4,"div",13)(5,"div",14),v(6,9),c()()()()),t&2){let e=r.$implicit,n=r.$index,i=r.$index,a=r.$count,s=p(2),ee=A(4);o(),m("ngTemplateOutlet",ee)("ngTemplateOutletContext",N(11,Je,e)),o(),M("mat-stepper-vertical-line",i!==a-1)("mat-vertical-content-container-active",s.selectedIndex===n),k("inert",s.selectedIndex===n?null:"")("aria-label",s.ariaLabel),o(2),m("id",s._getStepContentId(n)),k("aria-labelledby",s._getStepLabelId(n)),o(2),m("ngTemplateOutlet",e.content)}}function Dt(t,r){if(t&1&&(d(0,"div",4),f(1,St,1,1,"ng-container",9),j(2,Mt,7,13,"div",11,$),c()),t&2){let e=p();o(),_(e.headerPrefix()?1:-1),o(),q(e.steps)}}function It(t,r){if(t&1){let e=Me();d(0,"mat-step-header",15),re("click",function(){let i=te(e).step;return ne(i.select())})("keydown",function(i){te(e);let a=p();return ne(a._onKeydown(i))}),c()}if(t&2){let e=r.step,n=p();M("mat-horizontal-stepper-header",n.orientation==="horizontal")("mat-vertical-stepper-header",n.orientation==="vertical"),m("tabIndex",n._getFocusIndex()===e.index()?0:-1)("id",n._getStepLabelId(e.index()))("index",e.index())("state",e.indicatorType())("label",e.stepLabel||e.label)("selected",e.isSelected())("active",e.isNavigable())("optional",e.optional)("errorMessage",e.errorMessage)("iconOverrides",n._iconOverrides)("disableRipple",n.disableRipple||!e.isNavigable())("color",e.color||n.color),k("role",n.orientation==="horizontal"?"tab":"button")("aria-posinset",n.orientation==="horizontal"?e.index()+1:null)("aria-setsize",n.orientation==="horizontal"?n.steps.length:null)("aria-selected",n.orientation==="horizontal"?e.isSelected():null)("aria-current",n.orientation==="vertical"&&e.isSelected()?"step":null)("aria-disabled",n.orientation==="vertical"&&e.isSelected()?"true":null)("aria-expanded",n.orientation==="vertical"?e.isSelected():null)("aria-controls",n._getStepContentId(e.index()))("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null)("aria-disabled",e.isNavigable()?null:!0)}}function Et(t,r){t&1&&ae(0,"div",17)}function wt(t,r){if(t&1&&(v(0,6),f(1,Et,1,0,"div",17)),t&2){let e=r.$implicit,n=r.$index,i=r.$count;p(2);let a=A(4);m("ngTemplateOutlet",a)("ngTemplateOutletContext",N(3,Je,e)),o(),_(n!==i-1?1:-1)}}function kt(t,r){if(t&1&&(d(0,"div",16),j(1,wt,2,5,null,null,$),c()),t&2){let e=r.steps,n=p();k("aria-label",n.ariaLabel),o(),q(e)}}var ce=(()=>{class t extends de{static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(t)))(i||t)}})();static \u0275dir=y({type:t,selectors:[["","matStepLabel",""]],features:[L]})}return t})(),Tt=(()=>{class t{changes=new H;optionalLabel="Optional";completedLabel="Completed";editableLabel="Editable";static \u0275fac=function(n){return new(n||t)};static \u0275prov=ge({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),me=(()=>{class t extends pe{_intl=l(Tt);_focusMonitor=l(Qe);_intlSubscription;state;label;errorMessage;iconOverrides;index;selected=!1;active=!1;optional=!1;disableRipple=!1;color;constructor(){super();let e=l(Re);e.load(Ue),e.load(Be);let n=l(W);this._intlSubscription=this._intl.changes.subscribe(()=>n.markForCheck())}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._intlSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._elementRef)}focus(e,n){e?this._focusMonitor.focusVia(this._elementRef,e,n):this._elementRef.nativeElement.focus(n)}_stringLabel(){return this.label instanceof ce?null:this.label}_templateLabel(){return this.label instanceof ce?this.label:null}_getHostElement(){return this._elementRef.nativeElement}_getDefaultTextForState(e){return e=="number"?`${this.index+1}`:e=="edit"?"create":e=="error"?"warning":e}_hasEmptyLabel(){return!this._stringLabel()&&!this._templateLabel()&&!this._hasOptionalLabel()&&!this._hasErrorLabel()}_hasOptionalLabel(){return this.optional&&this.state!=="error"}_hasErrorLabel(){return this.state==="error"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-step-header"]],hostAttrs:["role","",1,"mat-step-header"],hostVars:4,hostBindings:function(n,i){n&2&&(U("mat-"+(i.color||"primary")),M("mat-step-header-empty-label",i._hasEmptyLabel()))},inputs:{state:"state",label:"label",errorMessage:"errorMessage",iconOverrides:"iconOverrides",index:"index",selected:"selected",active:"active",optional:"optional",disableRipple:"disableRipple",color:"color"},features:[L],decls:10,vars:17,consts:[["matRipple","",1,"mat-step-header-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"],[1,"mat-step-icon-content"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-step-label"],[1,"mat-step-text-label"],[1,"mat-step-optional"],[1,"mat-step-sub-label-error"],["aria-hidden","true"],[1,"cdk-visually-hidden"],[3,"ngTemplateOutlet"]],template:function(n,i){if(n&1&&(ae(0,"div",0),d(1,"div")(2,"div",1),f(3,rt,1,6,"ng-container",2)(4,dt,2,1),c()(),d(5,"div",3),f(6,ct,2,1,"div",4)(7,mt,2,1,"div",4),f(8,ht,2,1,"div",5),f(9,ut,2,1,"div",6),c()),n&2){let a;m("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disableRipple),o(),U(Ie("mat-step-icon-state-",i.state," mat-step-icon")),M("mat-step-icon-selected",i.selected),o(2),_(i.iconOverrides&&i.iconOverrides[i.state]?3:4),o(2),M("mat-step-label-active",i.active)("mat-step-label-selected",i.selected)("mat-step-label-error",i.state=="error"),o(),_((a=i._templateLabel())?6:i._stringLabel()?7:-1,a),o(2),_(i._hasOptionalLabel()?8:-1),o(),_(i._hasErrorLabel()?9:-1)}},dependencies:[Ge,le,je],styles:[`.mat-step-header {
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
  background-color: var(--mat-stepper-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-hover-state-layer-shape, var(--mat-sys-corner-medium));
}
.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused {
  background-color: var(--mat-stepper-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  border-radius: var(--mat-stepper-header-focus-state-layer-shape, var(--mat-sys-corner-medium));
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
  color: var(--mat-stepper-header-optional-label-text-color, var(--mat-sys-on-surface-variant));
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
  color: var(--mat-stepper-header-icon-foreground-color, var(--mat-sys-surface));
  background-color: var(--mat-stepper-header-icon-background-color, var(--mat-sys-on-surface-variant));
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
  background-color: var(--mat-stepper-header-error-state-icon-background-color, transparent);
  color: var(--mat-stepper-header-error-state-icon-foreground-color, var(--mat-sys-error));
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
  font-family: var(--mat-stepper-header-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-stepper-header-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-stepper-header-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-active {
  color: var(--mat-stepper-header-selected-state-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-step-label.mat-step-label-error {
  color: var(--mat-stepper-header-error-state-label-text-color, var(--mat-sys-error));
  font-size: var(--mat-stepper-header-error-state-label-text-size, var(--mat-sys-title-small-size));
}
.mat-step-label.mat-step-label-selected {
  font-size: var(--mat-stepper-header-selected-state-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-stepper-header-selected-state-label-text-weight, var(--mat-sys-title-small-weight));
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
  background-color: var(--mat-stepper-header-selected-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-selected-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-done {
  background-color: var(--mat-stepper-header-done-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-done-state-icon-foreground-color, var(--mat-sys-on-primary));
}

.mat-step-icon-state-edit {
  background-color: var(--mat-stepper-header-edit-state-icon-background-color, var(--mat-sys-primary));
  color: var(--mat-stepper-header-edit-state-icon-foreground-color, var(--mat-sys-on-primary));
}
`],encapsulation:2,changeDetection:0})}return t})(),zt=(()=>{class t{templateRef=l(E);name;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["ng-template","matStepperIcon",""]],inputs:{name:[0,"matStepperIcon","name"]}})}return t})(),Ot=(()=>{class t{_template=l(E);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=y({type:t,selectors:[["ng-template","matStepContent",""]]})}return t})(),Rt=(()=>{class t extends J{_errorStateMatcher=l(Y,{skipSelf:!0});_viewContainerRef=l(Ce);_isSelected=he.EMPTY;stepLabel=void 0;color;_lazyContent;_portal;ngAfterContentInit(){this._isSelected=this._stepper.steps.changes.pipe(_e(()=>this._stepper.selectionChange.pipe(fe(e=>e.selectedStep===this),S(this._stepper.selected===this)))).subscribe(e=>{e&&this._lazyContent&&!this._portal&&(this._portal=new Pe(this._lazyContent._template,this._viewContainerRef))})}ngOnDestroy(){this._isSelected.unsubscribe()}isErrorState(e,n){let i=this._errorStateMatcher.isErrorState(e,n),a=!!(e&&e.invalid&&this.interacted);return i||a}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ie(t)))(i||t)}})();static \u0275cmp=w({type:t,selectors:[["mat-step"]],contentQueries:function(n,i,a){if(n&1&&T(a,ce,5)(a,Ot,5),n&2){let s;h(s=u())&&(i.stepLabel=s.first),h(s=u())&&(i._lazyContent=s.first)}},hostAttrs:["hidden",""],inputs:{color:"color"},exportAs:["matStep"],features:[oe([{provide:Y,useExisting:t},{provide:J,useExisting:t}]),L],ngContentSelectors:Ze,decls:1,vars:0,consts:[[3,"cdkPortalOutlet"]],template:function(n,i){n&1&&(F(),V(0,_t,2,1,"ng-template"))},dependencies:[Ae],encapsulation:2,changeDetection:0})}return t})(),Lt=(()=>{class t extends X{_ngZone=l(be);_renderer=l(xe);_animationsDisabled=Ve();_cleanupTransition;_isAnimating=g(!1);_stepHeader=void 0;_animatedContainers;_steps=void 0;steps=new R;_icons;animationDone=new I;disableRipple=!1;color;labelPosition="end";headerPosition="top";ariaLabel=null;headerPrefix=we(null);_iconOverrides={};get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}_animationDuration="";_isServer=!l(ze).isBrowser;constructor(){super();let n=l(O).nativeElement.nodeName.toLowerCase();this.orientation=n==="mat-vertical-stepper"?"vertical":"horizontal"}ngAfterContentInit(){super.ngAfterContentInit(),this._icons.forEach(({name:e,templateRef:n})=>this._iconOverrides[e]=n),this.steps.changes.pipe(b(this._destroyed)).subscribe(()=>this._stateChanged()),this.selectedIndexChange.pipe(b(this._destroyed)).subscribe(()=>{let e=this._getAnimationDuration();e==="0ms"||e==="0s"?this._onAnimationDone():this._isAnimating.set(!0)}),this._ngZone.runOutsideAngular(()=>{this._animationsDisabled||setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-stepper-animations-enabled"),this._cleanupTransition=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionend)},200)})}ngAfterViewInit(){if(super.ngAfterViewInit(),typeof queueMicrotask=="function"){let e=!1;this._animatedContainers.changes.pipe(S(null),b(this._destroyed)).subscribe(()=>queueMicrotask(()=>{e||(e=!0,this.animationDone.emit()),this._stateChanged()}))}}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransition?.()}_getAnimationDuration(){return this._animationsDisabled?"0ms":this.animationDuration?this.animationDuration:this.orientation==="horizontal"?"500ms":"225ms"}_handleTransitionend=e=>{let n=e.target;if(!n)return;let i=this.orientation==="horizontal"&&e.propertyName==="transform"&&n.classList.contains("mat-horizontal-stepper-content-current"),a=this.orientation==="vertical"&&e.propertyName==="grid-template-rows"&&n.classList.contains("mat-vertical-content-container-active");(i||a)&&this._animatedContainers.find(ee=>ee.nativeElement===n)&&this._onAnimationDone()};_onAnimationDone(){this._isAnimating.set(!1),this.animationDone.emit()}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=w({type:t,selectors:[["mat-stepper"],["mat-vertical-stepper"],["mat-horizontal-stepper"],["","matStepper",""]],contentQueries:function(n,i,a){if(n&1&&T(a,Rt,5)(a,zt,5),n&2){let s;h(s=u())&&(i._steps=s),h(s=u())&&(i._icons=s)}},viewQuery:function(n,i){if(n&1&&G(me,5)(gt,5),n&2){let a;h(a=u())&&(i._stepHeader=a),h(a=u())&&(i._animatedContainers=a)}},hostVars:14,hostBindings:function(n,i){n&2&&(De("--mat-stepper-animation-duration",i._getAnimationDuration()),M("mat-stepper-horizontal",i.orientation==="horizontal")("mat-stepper-vertical",i.orientation==="vertical")("mat-stepper-label-position-end",i.orientation==="horizontal"&&i.labelPosition=="end")("mat-stepper-label-position-bottom",i.orientation==="horizontal"&&i.labelPosition=="bottom")("mat-stepper-header-position-bottom",i.headerPosition==="bottom")("mat-stepper-animating",i._isAnimating()))},inputs:{disableRipple:"disableRipple",color:"color",labelPosition:"labelPosition",headerPosition:"headerPosition",ariaLabel:[0,"aria-label","ariaLabel"],headerPrefix:[1,"headerPrefix"],animationDuration:"animationDuration"},outputs:{animationDone:"animationDone"},exportAs:["matStepper","matVerticalStepper","matHorizontalStepper"],features:[oe([{provide:X,useExisting:t}]),L],ngContentSelectors:Ze,decls:7,vars:2,consts:[["stepTemplate",""],["horizontalStepsTemplate",""],["animatedContainer",""],[1,"mat-horizontal-stepper-wrapper"],[1,"mat-vertical-stepper-wrapper"],[1,"mat-horizontal-stepper-header-wrapper"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"mat-horizontal-content-container"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id","class"],[3,"ngTemplateOutlet"],["role","tabpanel",1,"mat-horizontal-stepper-content",3,"id"],[1,"mat-step"],[1,"mat-vertical-content-container"],["role","region",1,"mat-vertical-stepper-content",3,"id"],[1,"mat-vertical-content"],[3,"click","keydown","tabIndex","id","index","state","label","selected","active","optional","errorMessage","iconOverrides","disableRipple","color"],["aria-orientation","horizontal","role","tablist",1,"mat-horizontal-stepper-header-container"],[1,"mat-stepper-horizontal-line"]],template:function(n,i){if(n&1&&(F(),f(0,vt,1,0),f(1,Ct,6,1,"div",3)(2,Dt,4,1,"div",4),V(3,It,1,27,"ng-template",null,0,se)(5,kt,3,1,"ng-template",null,1,se)),n&2){let a;_(i._isServer?0:-1),o(),_((a=i.orientation)==="horizontal"?1:a==="vertical"?2:-1)}},dependencies:[le,me],styles:[`.mat-stepper-vertical,
.mat-stepper-horizontal {
  display: block;
  font-family: var(--mat-stepper-container-text-font, var(--mat-sys-body-medium-font));
  background: var(--mat-stepper-container-color, var(--mat-sys-surface));
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
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-stepper-horizontal-line {
  margin: 0;
  min-width: 0;
  position: relative;
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
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
  height: var(--mat-stepper-header-height, 72px);
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
  border-top-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header {
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
}
.mat-stepper-label-position-bottom .mat-horizontal-stepper-header::before, .mat-stepper-label-position-bottom .mat-horizontal-stepper-header::after {
  top: calc(calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) + 12px);
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
  padding: calc((var(--mat-stepper-header-height, 72px) - 24px) / 2) 24px;
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
  transition: transform var(--mat-stepper-animation-duration, 0) cubic-bezier(0.35, 0, 0.25, 1);
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
  transition: grid-template-rows var(--mat-stepper-animation-duration, 0) cubic-bezier(0.4, 0, 0.2, 1);
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
  border-left-color: var(--mat-stepper-line-color, var(--mat-sys-outline));
  top: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
  bottom: calc(8px - calc((var(--mat-stepper-header-height, 72px) - 24px) / 2));
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
  transition: visibility var(--mat-stepper-animation-duration, 0) linear;
}
.mat-vertical-content-container-active > .mat-vertical-stepper-content {
  visibility: visible;
}

.mat-vertical-content {
  padding: 0 24px 24px 24px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ln=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=B({type:t});static \u0275inj=Q({providers:[Y],imports:[Ne,We,qe,Ke,Lt,me,Z]})}return t})();export{ce as a,Ot as b,Rt as c,Lt as d,Ln as e};
