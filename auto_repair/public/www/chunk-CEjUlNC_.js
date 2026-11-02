import{$t as Xh,Bn as dw,Hn as ee,Ht as Tg,It as Sg,Jt as Vg,L as Ia,Lt as T,Mt as S,On as cT,Pt as ST,Qr as to,Sn as as,Vr as ql,W as Ke,Xr as st,Z as L1,_ as Dg,_n as _T,dn as Zl,fi as wg,ht as OT,it as Mg,j as Gn,kr as nb,kt as Rg,lt as NT,r as AT,sr as jE,w as F1,yr as lT}from"./chunk-CVMDIrxF.js";import{Ct as se,Dt as j,Et as h,O as at$1,Z as A,it as Hs,ot as Ke$1,pt as Us}from"./chunk-NoyHzOXr.js";import{t as i}from"./chunk-CyO9Aj8j.js";var $=[`text`];var tt=[[[`mat-icon`]],`*`];var et=[`mat-icon`,`*`];function it(e,o){if(e&1&&Tg(0,`mat-pseudo-checkbox`,1),e&2){let t=_T();wg(`disabled`,t.disabled)(`state`,t.selected?`checked`:`unchecked`)}}function nt(e,o){if(e&1&&Tg(0,`mat-pseudo-checkbox`,3),e&2)wg(`disabled`,_T().disabled)}function ot(e,o){if(e&1&&(as(0,`span`,4),nb(1),ql()),e&2){let t=_T();jE(),Zl(`(`,t.group.label,`)`)}}var at=new S(`MAT_OPTION_PARENT_COMPONENT`);var rt=new S(`MatOptgroup`);var x=class{source;isUserInput;constructor(o,t=!1){this.source=o,this.isUserInput=t}};var J=(()=>{class e{_element=T(to);_changeDetectorRef=T(L1);_parent=T(at,{optional:!0});group=T(rt,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=T(se).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=Ke(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new st;_text;_stateChanges=new ee;constructor(){let t=T(h);t.load(Hs),t.load(j),this._signalDisableRipple=!!this._parent&&Gn(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,n){let i=this._getHostElement();typeof i.focus==`function`&&i.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!Ke$1(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new x(this,t))}static ɵfac=function(n){return new(n||e)};static ɵcmp=dw({type:e,selectors:[[`mat-option`]],viewQuery:function(n,i){if(n&1&&Rg($,7),n&2){let a;AT(a=OT())&&(i._text=a.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(n,i){n&1&&Sg(`click`,function(){return i._selectViaInteraction()})(`keydown`,function(l){return i._handleKeydown(l)}),n&2&&(Mg(`id`,i.id),Dg(`aria-selected`,i.selected)(`aria-disabled`,i.disabled.toString()),Vg(`mdc-list-item--selected`,i.selected)(`mat-mdc-option-multiple`,i.multiple)(`mat-mdc-option-active`,i.active)(`mdc-list-item--disabled`,i.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,F1]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:et,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(n,i){n&1&&(NT(tt),cT(0,it,1,2,`mat-pseudo-checkbox`,1),ST(1),as(2,`span`,2,0),ST(4,1),ql(),cT(5,nt,1,1,`mat-pseudo-checkbox`,3),cT(6,ot,2,1,`span`,4),Tg(7,`div`,5)),n&2&&(lT(i.multiple?0:-1),jE(5),lT(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),jE(),lT(i.group&&i.group._inert?6:-1),jE(),wg(`matRippleTrigger`,i._getHostElement())(`matRippleDisabled`,i.disabled||i.disableRipple))},dependencies:[i,Us],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return e})();function kt(e,o,t){if(t.length){let n=o.toArray(),i=t.toArray(),a=0;for(let l=0;l<e+1;l++)n[l].group&&n[l].group===i[a]&&a++;return a}return 0}function Nt(e,o,t,n){return e<t?e:e+o>t+n?Math.max(0,e-n+o):t}var W=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Xh({type:e});static ɵinj=Ia({imports:[A]})}return e})();var Vt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=Xh({type:e});static ɵinj=Ia({imports:[at$1,W,J,A]})}return e})();export{kt as a,at as i,Nt as n,rt as o,Vt as r,J as t};