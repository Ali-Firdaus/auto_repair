import{$n as gw,$t as Xh,A as Gl,Bn as dw,D as Gd,Di as zl,En as bv,Er as me,Fr as pT,Hn as ee,Ht as Tg,I as IT,It as Sg,Jt as Vg,Kn as fT,L as Ia,Lt as T,Mt as S,O as Gg,On as cT,Pt as ST,Q as Ld,Qr as to,Sn as as,Tn as bg,Vr as ql,W as Ke$1,Xn as fr,Xr as st$1,Xt as WT,Yr as so,Z as L1,Zt as Wl,_ as Dg,_n as _T,ai as vb,ar as ig,ct as N1,dn as Zl,fi as wg,ii as uy,ir as ie,kr as nb,lt as NT,mr as kd,or as j1,rt as M1,sr as jE,ur as jg,vn as _g,w as F1,wt as Ql,xt as Pc,yi as yb,yr as lT}from"./chunk-CVMDIrxF.js";import{h as ei}from"./chunk-DNTnUPeI.js";import{D as Ht,Et as h,Z as A,et as $e$1,it as Hs,jt as at$1,k as qt,kt as Q,yt as ls}from"./chunk-NoyHzOXr.js";import{a as ci,c as li,d as ri,f as si,i as ai,l as ni,n as V,o as ei$1,p as ti,s as ii,t as Jt,u as oi}from"./chunk-BsEVpCN4.js";import{n as kt,t as gt$1}from"./chunk-BbchY5Dg.js";function Xe(t,a){t&1&&bg(0,`div`,2)}var Ve=new S(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var ze=(()=>{class t{_elementRef=T(to);_ngZone=T(ie);_changeDetectorRef=T(L1);_renderer=T(Pc);_cleanupTransitionEnd;constructor(){let e=Q(),n=T(Ve,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),n&&(n.color&&(this.color=this._defaultColor=n.color),this.mode=n.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=Ae(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Ae(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new st$1;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(n){return new(n||t)};static ɵcmp=dw({type:t,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(n,r){n&2&&(Dg(`aria-valuenow`,r._isIndeterminate()?null:r.value)(`mode`,r.mode),WT(`mat-`+r.color),Vg(`_mat-animation-noopable`,r._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!r._isNoopAnimation)(`mdc-linear-progress--indeterminate`,r._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,j1],bufferValue:[2,`bufferValue`,`bufferValue`,j1],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(n,r){n&1&&(Wl(0,`div`,0),bg(1,`div`,1),cT(2,Xe,1,0,`div`,2),Gl(),Wl(3,`div`,3),bg(4,`span`,4),Gl(),Wl(5,`div`,5),bg(6,`span`,4),Gl()),n&2&&(jE(),jg(`flex-basis`,r._getBufferBarFlexBasis()),jE(),lT(r.mode===`buffer`?2:-1),jE(),jg(`transform`,r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return t})();function Ae(t,a=0,e=100){return Math.max(a,Math.min(e,t))}var Re=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Xh({type:t});static ɵinj=Ia({imports:[A]})}return t})();var Le=[`*`,[[``,`matSortHeaderIcon`,``]]];var $e=[`*`,`[matSortHeaderIcon]`];function Ke(t,a){t&1&&(Gd(),Wl(0,`svg`,3),bg(1,`path`,4),Gl())}function Ze(t,a){t&1&&(Wl(0,`div`,2),ST(1,1,null,Ke,2,0),Gl())}var Be=new S(`MAT_SORT_DEFAULT_OPTIONS`);var K=(()=>{class t{_defaultOptions;_initializedStream=new fr(1);sortables=new Map;_stateChanges=new ee;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new st$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let n=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,r=qe(e.start||this.start,n),f=r.indexOf(this.direction)+1;return f>=r.length&&(f=0),r[f]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(n){return new(n||t)(so(Be,8))};static ɵdir=gw({type:t,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,F1],disabled:[2,`matSortDisabled`,`disabled`,F1]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[bv]})}return t})();function qe(t,a){let e=[`asc`,`desc`];return t==`desc`&&e.reverse(),a||e.push(``),e}var He=(()=>{class t{_sort=T(K,{optional:!0});_columnDef=T(V,{optional:!0});_changeDetectorRef=T(L1);_focusMonitor=T($e$1);_elementRef=T(to);_ariaDescriber=T(ls,{optional:!0});_renderChanges;_animationsDisabled=at$1();_recentlyCleared=Ke$1(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){T(h).load(Hs);let e=T(Be,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=uy(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),n=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?n:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(n){return new(n||t)};static ɵcmp=dw({type:t,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(n,r){n&1&&Sg(`click`,function(){return r._toggleOnInteraction()})(`keydown`,function(B){return r._handleKeydown(B)})(`mouseleave`,function(){return r._recentlyCleared.set(null)}),n&2&&(Dg(`aria-sort`,r._getAriaSortAttribute()),Vg(`mat-sort-header-disabled`,r._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,F1],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,F1]},exportAs:[`matSortHeader`],ngContentSelectors:$e,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(n,r){n&1&&(NT(Le),Wl(0,`div`,0)(1,`div`,1),ST(2),Gl(),cT(3,Ze,3,0,`div`,2),Gl()),n&2&&(Vg(`mat-sort-header-sorted`,r._isSorted())(`mat-sort-header-position-before`,r.arrowPosition===`before`)(`mat-sort-header-descending`,r._sort.direction===`desc`)(`mat-sort-header-ascending`,r._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,r._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,r._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,r._animationsDisabled),Dg(`tabindex`,r._isDisabled()?null:0)(`role`,r._isDisabled()?null:`button`),jE(3),lT(r._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return t})();var Fe=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Xh({type:t});static ɵinj=Ia({imports:[A]})}return t})();var Ye=[[[``,`tableToolbar`,``]]];var Ge=[`[tableToolbar]`];var We=()=>[];var Je=t=>({$implicit:t});var Qe=(t,a)=>a.key;function et(t,a){t&1&&(as(0,`p`,1),nb(1,` Could not update these results. Showing previously loaded data. `),ql())}function tt(t,a){if(t&1&&Tg(0,`mat-progress-bar`,3),t&2)Dg(`aria-label`,`Loading `+_T().label())}function rt(t,a){if(t&1&&(as(0,`span`,15),nb(1),ql()),t&2){let e=_T(2).$implicit;wg(`mat-sort-header`,e.key)(`arrowPosition`,e.align===`end`?`before`:`after`),jE(),Gg(e.label)}}function nt(t,a){t&1&&_g(0,16),t&2&&wg(`ngTemplateOutlet`,a)}function at(t,a){if(t&1&&nb(0),t&2){let e=_T(2).$implicit;Zl(` `,e.label,` `)}}function it(t,a){if(t&1&&(as(0,`th`,14),cT(1,rt,2,3,`span`,15)(2,nt,1,1,`ng-container`,16)(3,at,1,1),ql()),t&2){let e,n=_T().$implicit;Vg(`numeric`,n.align===`end`),jE(),lT(n.sortable?1:(e=n.header)?2:3,e)}}function ot(t,a){if(t&1&&_g(0,18),t&2){let e=_T().$implicit;wg(`ngTemplateOutlet`,a)(`ngTemplateOutletContext`,vb(2,Je,e))}}function st(t,a){if(t&1&&nb(0),t&2){let e=_T().$implicit,n=_T().$implicit;Zl(` `,n.value?.(e)??`—`,` `)}}function dt(t,a){if(t&1&&(as(0,`td`,17),cT(1,ot,1,4,`ng-container`,18)(2,st,1,1),ql()),t&2){let e,n=_T().$implicit;Vg(`numeric`,n.align===`end`),jE(),lT((e=n.cell)?1:2,e)}}function lt(t,a){if(t&1&&(zl(0,6),ig(1,it,4,3,`th`,12)(2,dt,3,3,`td`,13),Ql()),t&2){let e=a.$implicit;wg(`matColumnDef`,e.key)}}function mt(t,a){t&1&&Tg(0,`tr`,19)}function ct(t,a){t&1&&Tg(0,`tr`,20)}function pt(t,a){if(t&1&&(as(0,`div`,9),nb(1),ql()),t&2){let e=_T();jE(),Zl(`Loading `,e.label(),`…`)}}function gt(t,a){if(t&1){let e=IT();as(0,`div`,10)(1,`p`,21),nb(2),ql(),as(3,`p`,22),nb(4,`Please try again.`),ql(),as(5,`button`,23),Sg(`click`,function(){kd(e);return Ld(_T().retry.emit())}),nb(6,`Retry`),ql()()}if(t&2){let e=_T();jE(2),Zl(`Unable to load `,e.label())}}function ut(t,a){if(t&1&&(as(0,`div`,9)(1,`p`,21),nb(2),ql(),as(3,`p`,24),nb(4),ql()()),t&2){let e=_T();jE(2),Gg(e.emptyTitle()),jE(2),Gg(e.emptyDescription())}}function ft(t,a){if(t&1){let e=IT();as(0,`mat-paginator`,25),Sg(`page`,function(r){kd(e);return Ld(_T().pageChange.emit(r))}),ql()}if(t&2){let e=_T();wg(`length`,e.total())(`pageIndex`,e.pageIndex())(`pageSize`,e.pageSize())(`pageSizeOptions`,e.pageSizeOptions())(`disabled`,e.loading()||e.error()),Dg(`aria-label`,e.label()+` pagination`)}}var rr=(()=>{class t{constructor(){this.rows=N1.required(),this.columns=N1.required(),this.label=N1(`Data table`),this.loading=N1(!1),this.refreshing=N1(!1),this.refreshError=N1(!1),this.error=N1(!1),this.emptyTitle=N1(`No results found`),this.emptyDescription=N1(`Try adjusting your search or filters.`),this.showPaginator=N1(!0),this.total=N1(0),this.pageIndex=N1(0),this.pageSize=N1(10),this.pageSizeOptions=N1([10,25,50]),this.sortActive=N1(``),this.sortDirection=N1(`desc`),this.rowKey=N1(e=>e),this.pageChange=M1(),this.sortChange=M1(),this.retry=M1(),this.displayedColumns=me(()=>this.columns().map(e=>e.key)),this.trackRow=(e,n)=>this.rowKey()(n)}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=dw({type:t,selectors:[[`app-data-table`]],inputs:{rows:[1,`rows`],columns:[1,`columns`],label:[1,`label`],loading:[1,`loading`],refreshing:[1,`refreshing`],refreshError:[1,`refreshError`],error:[1,`error`],emptyTitle:[1,`emptyTitle`],emptyDescription:[1,`emptyDescription`],showPaginator:[1,`showPaginator`],total:[1,`total`],pageIndex:[1,`pageIndex`],pageSize:[1,`pageSize`],pageSizeOptions:[1,`pageSizeOptions`],sortActive:[1,`sortActive`],sortDirection:[1,`sortDirection`],rowKey:[1,`rowKey`]},outputs:{pageChange:`pageChange`,sortChange:`sortChange`,retry:`retry`},ngContentSelectors:Ge,decls:15,vars:17,consts:[[1,`table-surface`],[`role`,`alert`,1,`m-0`,`px-5`,`py-3`,`text-sm`],[1,`progress-slot`],[`mode`,`indeterminate`],[`tabindex`,`0`,`role`,`region`,1,`table-scroll`],[`mat-table`,``,`matSort`,``,3,`matSortChange`,`dataSource`,`trackBy`,`matSortActive`,`matSortDirection`,`matSortDisableClear`,`matSortDisabled`],[3,`matColumnDef`],[`mat-header-row`,``,4,`matHeaderRowDef`,`matHeaderRowDefSticky`],[`mat-row`,``,4,`matRowDef`,`matRowDefColumns`],[`role`,`status`,1,`table-message`],[`role`,`alert`,1,`table-message`],[`showFirstLastButtons`,``,3,`length`,`pageIndex`,`pageSize`,`pageSizeOptions`,`disabled`],[`mat-header-cell`,``,3,`numeric`,4,`matHeaderCellDef`],[`mat-cell`,``,3,`numeric`,4,`matCellDef`],[`mat-header-cell`,``],[3,`mat-sort-header`,`arrowPosition`],[3,`ngTemplateOutlet`],[`mat-cell`,``],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`mat-header-row`,``],[`mat-row`,``],[1,`font-medium`],[1,`mt-1`,`mb-4`],[`mat-stroked-button`,``,3,`click`],[1,`mt-1`],[`showFirstLastButtons`,``,3,`page`,`length`,`pageIndex`,`pageSize`,`pageSizeOptions`,`disabled`]],template:function(n,r){n&1&&(NT(Ye),as(0,`div`,0),ST(1),cT(2,et,2,0,`p`,1),as(3,`div`,2),cT(4,tt,1,1,`mat-progress-bar`,3),ql(),as(5,`div`,4)(6,`table`,5),Sg(`matSortChange`,function(B){return r.sortChange.emit(B)}),fT(7,lt,3,1,`ng-container`,6,Qe),ig(9,mt,1,0,`tr`,7)(10,ct,1,0,`tr`,8),ql()(),cT(11,pt,2,1,`div`,9)(12,gt,7,1,`div`,10)(13,ut,5,2,`div`,9),cT(14,ft,1,6,`mat-paginator`,11),ql()),n&2&&(Dg(`aria-busy`,r.loading()||r.refreshing()),jE(2),lT(r.refreshError()?2:-1),jE(2),lT(r.loading()||r.refreshing()?4:-1),jE(),Dg(`aria-label`,r.label()),jE(),wg(`dataSource`,r.loading()||r.error()?yb(16,We):r.rows())(`trackBy`,r.trackRow)(`matSortActive`,r.sortActive())(`matSortDirection`,r.sortDirection())(`matSortDisableClear`,!0)(`matSortDisabled`,r.loading()),Dg(`aria-label`,r.label()),jE(),pT(r.columns()),jE(2),wg(`matHeaderRowDef`,r.displayedColumns())(`matHeaderRowDefSticky`,!0),jE(),wg(`matRowDefColumns`,r.displayedColumns()),jE(),lT(r.loading()?11:r.error()?12:r.rows().length?-1:13),jE(3),lT(r.showPaginator()?14:-1))},dependencies:[ei,ci,Jt,ti,ri,ii,ei$1,si,oi,ni,ai,li,Fe,K,He,kt,gt$1,Re,ze,qt,Ht],styles:[`[_nghost-%COMP%]{display:block;min-width:0;--%NS%table-surface: var(--%NS%mat-sys-surface, #fff);--%NS%table-divider: color-mix( in srgb, var(--%NS%mat-sys-outline-variant, #e0e3e8) 60%, var(--%NS%table-surface) )}.table-surface[_ngcontent-%COMP%]{overflow:hidden;background:var(--%NS%table-surface);color:var(--%NS%mat-sys-on-surface, #191c1e);border:1px solid var(--%NS%table-divider);border-radius:16px;box-shadow:0 4px 20px #00000008}.progress-slot[_ngcontent-%COMP%]{height:4px}.table-scroll[_ngcontent-%COMP%]{overflow-x:auto}.table-scroll[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--%NS%mat-sys-primary, #2e5cab);outline-offset:-2px}table[_ngcontent-%COMP%]{width:100%;background:transparent}.mat-mdc-header-row[_ngcontent-%COMP%]{height:48px;background:color-mix(in srgb,var(--%NS%mat-sys-on-surface, #191c1e) 3%,var(--%NS%table-surface))}.mat-mdc-header-cell[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-surface-variant, #44474a);font-size:12px;font-weight:600;white-space:nowrap}.mat-mdc-cell[_ngcontent-%COMP%], .mat-mdc-header-cell[_ngcontent-%COMP%]{padding:10px 20px;border-bottom-color:var(--%NS%table-divider)}.mat-mdc-cell[_ngcontent-%COMP%]{font-size:13px}.mat-mdc-row[_ngcontent-%COMP%]{height:68px;transition:background-color .2s ease}.mat-mdc-row[_ngcontent-%COMP%]:hover, .mat-mdc-row[_ngcontent-%COMP%]:focus-within{background:color-mix(in srgb,var(--%NS%mat-sys-on-surface, #191c1e) 3%,var(--%NS%table-surface))}.numeric[_ngcontent-%COMP%]{text-align:end;font-variant-numeric:tabular-nums;white-space:nowrap}.numeric[_ngcontent-%COMP%]   [mat-sort-header][_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.table-message[_ngcontent-%COMP%]{padding:56px 24px;text-align:center;color:var(--%NS%mat-sys-on-surface-variant, #44474a)}mat-paginator[_ngcontent-%COMP%]{background:transparent;border-top:1px solid var(--%NS%table-divider)}@media(prefers-reduced-motion:reduce){.mat-mdc-row[_ngcontent-%COMP%]{transition:none}}`]})}}return t})();export{rr as t};