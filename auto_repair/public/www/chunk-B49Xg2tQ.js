import{$n as gw,$t as Xh,A as Gl,At as Rt,Bn as dw,D as Gd,E as Fr,En as bv,Gr as rg,Hn as ee,It as Sg,Jt as Vg,Kt as Uv,L as Ia,Ln as dm,Lt as T,Mt as S,On as cT,Pt as ST,Qr as to,Sn as as,Tn as bg,Tr as mb,Vr as ql,W as Ke,Xr as st,Z as L1,Zt as Wl,_ as Dg,_t as Og,ar as ig,at as Mn,fi as wg,ht as OT,ii as uy,ir as ie,k as Gi,kt as Rg,lt as NT,or as j1,pn as Zr,pt as Nn,r as AT,s as B,sr as jE,ur as jg,v as Dy,w as F1,x as Es,xt as Pc,yr as lT}from"./chunk-CVMDIrxF.js";import{Ct as se,Et as h,Ft as I,Lt as k,Rt as l,Z as A,et as $e,it as Hs,jt as at,mt as ae,ot as Ke$1}from"./chunk-NoyHzOXr.js";import{r as p}from"./chunk-BEZ2lWwz.js";var R=new S(`CdkAccordion`);var fe=(()=>{class t{_stateChanges=new ee;_openCloseAllActions=new ee;id=T(se).getId(`cdk-accordion-`);multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static ɵfac=function(n){return new(n||t)};static ɵdir=gw({type:t,selectors:[[`cdk-accordion`],[``,`cdkAccordion`,``]],inputs:{multi:[2,`multi`,`multi`,F1]},exportAs:[`cdkAccordion`],features:[mb([{provide:R,useExisting:t}]),bv]})}return t})();var be=(()=>{class t{accordion=T(R,{optional:!0,skipSelf:!0});_changeDetectorRef=T(L1);_expansionDispatcher=T(p);_openCloseAllSubscription=B.EMPTY;closed=new st;opened=new st;destroyed=new st;expandedChange=new st;id=T(se).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let n=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,n)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=Ke(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,n)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===n&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(n){return new(n||t)};static ɵdir=gw({type:t,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,F1],disabled:[2,`disabled`,`disabled`,F1]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[mb([{provide:R,useValue:void 0}])]})}return t})();var _e=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Xh({type:t});static ɵinj=Ia({})}return t})();var Ne=[`body`];var Me=[`bodyWrapper`];var Ae=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]];var De=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function Pe(t,we){}var ke=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`];var Te=[`mat-panel-title`,`mat-panel-description`,`*`];function Ie(t,we){t&1&&(Wl(0,`span`,1),Gd(),Wl(1,`svg`,2),bg(2,`path`,3),Gl()())}var j=new S(`MAT_ACCORDION`);var ye=new S(`MAT_EXPANSION_PANEL`);var He=(()=>{class t{_template=T(Zr);_expansionPanel=T(ye,{optional:!0});static ɵfac=function(n){return new(n||t)};static ɵdir=gw({type:t,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return t})();var ve=new S(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var Oe=(()=>{class t extends be{_viewContainerRef=T(Es);_animationsDisabled=at();_document=T(Fr);_ngZone=T(ie);_elementRef=T(to);_renderer=T(Pc);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new st;afterCollapse=new st;_inputChanges=new ee;accordion=T(j,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=T(se).getId(`mat-expansion-panel-header-`);constructor(){super();let e=T(ve,{optional:!0});this._expansionDispatcher=T(p),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Dy(null),Mn(()=>this.expanded&&!this._portal),Nn(1)).subscribe(()=>{this._portal=new l(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,n=this._body.nativeElement;return e===n||n.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:n})=>{e===this._bodyWrapper?.nativeElement&&n===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(n){return new(n||t)};static ɵcmp=dw({type:t,selectors:[[`mat-expansion-panel`]],contentQueries:function(n,a,r){if(n&1&&Og(r,He,5),n&2){let o;AT(o=OT())&&(a._lazyContent=o.first)}},viewQuery:function(n,a){if(n&1&&Rg(Ne,5)(Me,5),n&2){let r;AT(r=OT())&&(a._body=r.first),AT(r=OT())&&(a._bodyWrapper=r.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(n,a){n&2&&Vg(`mat-expanded`,a.expanded)(`mat-expansion-panel-spacing`,a._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,F1],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[mb([{provide:j,useValue:void 0},{provide:ye,useExisting:t}]),rg,bv],ngContentSelectors:De,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(n,a){n&1&&(NT(Ae),ST(0),as(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),ST(6,1),ig(7,Pe,0,0,`ng-template`,5),ql(),ST(8,2),ql()()),n&2&&(jE(),Dg(`inert`,a.expanded?null:``),jE(2),wg(`id`,a.id),Dg(`aria-labelledby`,a._headerId),jE(4),wg(`cdkPortalOutlet`,a._portal))},dependencies:[I],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return t})();var Fe=(()=>{class t{panel=T(Oe,{host:!0});_element=T(to);_focusMonitor=T($e);_changeDetectorRef=T(L1);_parentChangeSubscription=B.EMPTY;constructor(){T(h).load(Hs);let e=this.panel,n=T(ve,{optional:!0}),a=T(new dm(`tabindex`),{optional:!0}),r=e.accordion?e.accordion._stateChanges.pipe(Mn(o=>!!(o.hideToggle||o.togglePosition))):Rt;this.tabIndex=parseInt(a||``)||0,this._parentChangeSubscription=uy(e.opened,e.closed,r,e._inputChanges.pipe(Mn(o=>!!(o.hideToggle||o.disabled||o.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(Mn(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),n&&(this.expandedHeight=n.expandedHeight,this.collapsedHeight=n.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Ke$1(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,n){e?this._focusMonitor.focusVia(this._element,e,n):this._element.nativeElement.focus(n)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(n){return new(n||t)};static ɵcmp=dw({type:t,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(n,a){n&1&&Sg(`click`,function(){return a._toggle()})(`keydown`,function(o){return a._keydown(o)}),n&2&&(Dg(`id`,a.panel._headerId)(`tabindex`,a.disabled?-1:a.tabIndex)(`aria-controls`,a._getPanelId())(`aria-expanded`,a._isExpanded())(`aria-disabled`,a.panel.disabled),jg(`height`,a._getHeaderHeight()),Vg(`mat-expanded`,a._isExpanded())(`mat-expansion-toggle-indicator-after`,a._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,a._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:j1(e)]},ngContentSelectors:Te,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(n,a){n&1&&(NT(ke),Wl(0,`span`,0),ST(1),ST(2,1),ST(3,2),Gl(),cT(4,Ie,3,0,`span`,1)),n&2&&(Vg(`mat-content-hide-toggle`,!a._showToggle()),jE(4),lT(a._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return t})();var gn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=gw({type:t,selectors:[[`mat-panel-description`]],hostAttrs:[1,`mat-expansion-panel-header-description`]})}return t})();var un=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵdir=gw({type:t,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return t})();var xn=(()=>{class t extends fe{_keyManager;_ownHeaders=new Gi;_headers;hideToggle=!1;displayMode=`default`;togglePosition=`after`;ngAfterContentInit(){this._headers.changes.pipe(Dy(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(n=>n.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new ae(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static ɵfac=(()=>{let e;return function(a){return(e||(e=Uv(t)))(a||t)}})();static ɵdir=gw({type:t,selectors:[[`mat-accordion`]],contentQueries:function(n,a,r){if(n&1&&Og(r,Fe,5),n&2){let o;AT(o=OT())&&(a._headers=o)}},hostAttrs:[1,`mat-accordion`],hostVars:2,hostBindings:function(n,a){n&2&&Vg(`mat-accordion-multi`,a.multi)},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,F1],displayMode:`displayMode`,togglePosition:`togglePosition`},exportAs:[`matAccordion`],features:[mb([{provide:j,useExisting:t}]),rg]})}return t})();var fn=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Xh({type:t});static ɵinj=Ia({imports:[_e,k,A]})}return t})();export{un as a,gn as i,Oe as n,xn as o,fn as r,Fe as t};