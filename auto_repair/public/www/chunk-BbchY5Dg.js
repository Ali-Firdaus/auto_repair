import{$t as Xh,Bn as dw,D as Gd,Fr as pT,Hn as ee,Ht as Tg,I as IT,It as Sg,Kn as fT,L as Ia,Lt as T,Mt as S,Nn as dT,O as Gg,On as cT,Q as Ld,Sn as as,Vr as ql,Wn as eo,Xn as fr,Xr as st$1,Z as L1,_ as Dg,_n as _T,b as Eg,dn as Zl,fi as wg,fr as kT,kr as nb,mr as kd,or as j1,sr as jE,w as F1,wi as zd,yr as lT}from"./chunk-CVMDIrxF.js";import{Ct as se,K as lt$1,Tt as wt,Y as re,Z as A,f as He,j as ut,k as qt}from"./chunk-NoyHzOXr.js";import{t as J}from"./chunk-CEjUlNC_.js";import{n as Nt,t as Lt}from"./chunk-Cc0eLywt.js";import{t as Ct}from"./chunk-DO295wrs.js";var et=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=Xh({type:i});static ɵinj=Ia({imports:[wt,re,A,lt$1]})}return i})();function at(i,m){if(i&1&&(as(0,`mat-option`,17),nb(1),ql()),i&2){let t=m.$implicit;wg(`value`,t),jE(),Zl(` `,t,` `)}}function nt(i,m){if(i&1){let t=IT();as(0,`mat-form-field`,14)(1,`mat-select`,16,0),Sg(`selectionChange`,function(e){kd(t);return Ld(_T(2)._changePageSize(e.value))}),fT(3,at,2,2,`mat-option`,17,dT),ql(),as(5,`div`,18),Sg(`click`,function(){kd(t);return Ld(kT(2).open())}),ql()()}if(i&2){let t=_T(2);wg(`appearance`,t._formFieldAppearance)(`color`,t.color),jE(),wg(`value`,t.pageSize)(`disabled`,t.disabled),Eg(`aria-labelledby`,t._pageSizeLabelId),wg(`panelClass`,t.selectConfig.panelClass||``)(`disableOptionCentering`,t.selectConfig.disableOptionCentering),jE(2),pT(t._displayedPageSizeOptions)}}function ot(i,m){if(i&1&&(as(0,`div`,15),nb(1),ql()),i&2){let t=_T(2);jE(),Gg(t.pageSize)}}function rt(i,m){if(i&1&&(as(0,`div`,3)(1,`div`,13),nb(2),ql(),cT(3,nt,6,7,`mat-form-field`,14),cT(4,ot,2,1,`div`,15),ql()),i&2){let t=_T();jE(),Dg(`id`,t._pageSizeLabelId),jE(),Zl(` `,t._intl.itemsPerPageLabel,` `),jE(),lT(t._displayedPageSizeOptions.length>1?3:-1),jE(),lT(t._displayedPageSizeOptions.length<=1?4:-1)}}function st(i,m){if(i&1){let t=IT();as(0,`button`,19),Sg(`click`,function(){kd(t);let e=_T();return Ld(e._buttonClicked(0,e._previousButtonsDisabled()))}),Gd(),as(1,`svg`,8),Tg(2,`path`,20),ql()()}if(i&2){let t=_T();wg(`matTooltip`,t._intl.firstPageLabel)(`matTooltipDisabled`,t._previousButtonsDisabled())(`disabled`,t._previousButtonsDisabled())(`tabindex`,t._previousButtonsDisabled()?-1:null),Dg(`aria-label`,t._intl.firstPageLabel)}}function lt(i,m){if(i&1){let t=IT();as(0,`button`,21),Sg(`click`,function(){kd(t);let e=_T();return Ld(e._buttonClicked(e.getNumberOfPages()-1,e._nextButtonsDisabled()))}),Gd(),as(1,`svg`,8),Tg(2,`path`,22),ql()()}if(i&2){let t=_T();wg(`matTooltip`,t._intl.lastPageLabel)(`matTooltipDisabled`,t._nextButtonsDisabled())(`disabled`,t._nextButtonsDisabled())(`tabindex`,t._nextButtonsDisabled()?-1:null),Dg(`aria-label`,t._intl.lastPageLabel)}}var pt=(()=>{class i{changes=new ee;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(t,a,e)=>{if(e==0||a==0)return`0 of ${e}`;e=Math.max(e,0);let s=t*a,P=s<e?Math.min(s+a,e):s+a;return`${s+1} \u2013 ${P} of ${e}`};static ɵfac=function(a){return new(a||i)};static ɵprov=eo({token:i,factory:i.ɵfac})}return i})();var dt=50;var mt=new S(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var gt=(()=>{class i{_intl=T(pt);_changeDetectorRef=T(L1);_formFieldAppearance;_pageSizeLabelId=T(se).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new fr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(a=>j1(a,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new st$1;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let t=this._intl,a=T(mt,{optional:!0});if(this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),a){let{pageSize:e,pageSizeOptions:s,hidePageSize:P,showFirstLastButtons:M}=a;e!=null&&(this._pageSize=e),s!=null&&(this._pageSizeOptions=s),P!=null&&(this.hidePageSize=P),M!=null&&(this.showFirstLastButtons=M)}this._formFieldAppearance=a?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let a=this.pageIndex*this.pageSize,e=this.pageIndex;this.pageIndex=Math.floor(a/t)||0,this.pageSize=t,this._emitPageEvent(e)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:dt),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,a)=>t-a),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(t){let a=this.pageIndex;t!==a&&(this.pageIndex=t,this._emitPageEvent(a))}_buttonClicked(t,a){a||this._navigate(t)}static ɵfac=function(a){return new(a||i)};static ɵcmp=dw({type:i,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,j1],length:[2,`length`,`length`,j1],pageSize:[2,`pageSize`,`pageSize`,j1],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,F1],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,F1],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,F1]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(a,e){a&1&&(as(0,`div`,1)(1,`div`,2),cT(2,rt,5,4,`div`,3),as(3,`div`,4)(4,`div`,5),nb(5),ql(),cT(6,st,3,5,`button`,6),as(7,`button`,7),Sg(`click`,function(){return e._buttonClicked(e.pageIndex-1,e._previousButtonsDisabled())}),Gd(),as(8,`svg`,8),Tg(9,`path`,9),ql()(),zd(),as(10,`button`,10),Sg(`click`,function(){return e._buttonClicked(e.pageIndex+1,e._nextButtonsDisabled())}),Gd(),as(11,`svg`,8),Tg(12,`path`,11),ql()(),cT(13,lt,3,5,`button`,12),ql()()()),a&2&&(jE(2),lT(e.hidePageSize?-1:2),jE(3),Zl(` `,e._intl.getRangeLabel(e.pageIndex,e.pageSize,e.length),` `),jE(),lT(e.showFirstLastButtons?6:-1),jE(),wg(`matTooltip`,e._intl.previousPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),Dg(`aria-label`,e._intl.previousPageLabel),jE(3),wg(`matTooltip`,e._intl.nextPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),Dg(`aria-label`,e._intl.nextPageLabel),jE(3),lT(e.showFirstLastButtons?13:-1))},dependencies:[He,Nt,J,ut,Ct],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-paginator-container-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-paginator-container-background-color, var(--%NS%mat-sys-surface));
  font-family: var(--%NS%mat-paginator-container-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-paginator-container-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-paginator-container-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-paginator-container-text-weight, var(--%NS%mat-sys-body-small-weight));
  letter-spacing: var(--%NS%mat-paginator-container-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  --%NS%mat-form-field-container-height: var(--%NS%mat-paginator-form-field-container-height, 40px);
  --%NS%mat-form-field-container-vertical-padding: var(--%NS%mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--%NS%mat-paginator-select-trigger-text-size, var(--%NS%mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--%NS%mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--%NS%mat-paginator-enabled-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--%NS%mat-paginator-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--%NS%mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--%NS%mat-paginator-page-size-select-width, 84px);
  height: var(--%NS%mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2})}return i})();var kt=(()=>{class i{static ɵfac=function(a){return new(a||i)};static ɵmod=Xh({type:i});static ɵinj=Ia({imports:[qt,Lt,et,gt]})}return i})();export{kt as n,gt as t};