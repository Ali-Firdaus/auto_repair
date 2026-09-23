import{Ar as qw,B as Il,Bn as hl,Br as ts,Bt as Wg,Cr as pe$1,D as Fr,Dn as et,Et as Rw,Fn as gh,G as Iw,H as Ir,Hn as hp,Ht as Wn$1,It as Uh,Jt as YD,Nn as gc,Nr as rm,O as Fy,On as eu,Pn as gd,Q as KD,Qt as Zh,R as Ih,Rt as Vh,S as Em,St as Rh,Un as hw,V as Im,Vr as tw,Wt as XD,Y as Js,Yt as YI,_i as zn,_r as od,_t as Pr,a as Ah,ai as xD,bt as RT,ci as xj,cr as md,ct as N,f as D,fn as am,fr as mw,ft as Oh,gi as yw,gr as oT,gt as Ph,hr as nv,ir as lm,jr as rd,k as Ge$1,kn as ew,m as Dh,n as $i$1,o as Aj,p as Dg,pi as yn,pn as aw,pr as ng,qn as im,qt as Y,ri as ww,si as xh,t as $h,tn as _D,tr as km,ui as xr,ur as mn,ut as Nj,w as Ew,wn as dm,wt as Rm,xt as Re}from"./chunk-XMMDyd3T.js";import{St as bu,Wt as pr,b as _t,tn as wu,ut as Tt}from"./main-ADO3GQQL.js";import{Ct as re,G as et$1,It as m,K as ye,M as qt,Ot as at,P as tt,Pt as A,Q as ut,T as Jt,Tt as N$1,U as _e,W as be,X as qt$1,a as St,d as qe$1,dt as Ve,f as vt,g as w,gt as de,h as o,i as He,it as Ke$1,j as ot,k as et$2,l as ei$1,m as d,mt as b,nt as Ft,p as _,u as ii$1,ut as St$1}from"./chunk-D_XLG1di.js";import{t as Ct}from"./chunk-CXYCYbp72.js";import{a as kt,i as at$1,n as Nt,o as rt,r as Vt,t as J}from"./chunk-6CEEBP0X.js";import{n as g,t as d$1}from"./chunk-0csZrDdj.js";var vi=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var wi=[`caption`,`colgroup, col`,`*`];function bi(n,r){n&1&&yw(0,2)}function Ci(n,r){n&1&&($i$1(0,`thead`,0),Ph(1,1),hl(),$i$1(2,`tbody`,0),Ph(3,2)(4,3),hl(),$i$1(5,`tfoot`,0),Ph(6,4),hl())}function Si(n,r){n&1&&Ph(0,1)(1,2)(2,3)(3,4)}var z=new N(`CDK_TABLE`);var Ne=(()=>{class n{template=D(xr);static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`cdkCellDef`,``]]})}return n})();var Fe=(()=>{class n{template=D(xr);static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`cdkHeaderCellDef`,``]]})}return n})();var ni=(()=>{class n{template=D(xr);static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`cdkFooterCellDef`,``]]})}return n})();var he=(()=>{class n{_table=D(z,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,`-`),this._updateColumnCssClassName())}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`cdkColumnDef`,``]],contentQueries:function(t,i,a){if(t&1&&$h(a,Ne,5)(a,Fe,5)(a,ni,5),t&2){let o;Iw(o=Ew())&&(i.cell=o.first),Iw(o=Ew())&&(i.headerCell=o.first),Iw(o=Ew())&&(i.footerCell=o.first)}},inputs:{name:[0,`cdkColumnDef`,`name`],sticky:[2,`sticky`,`sticky`,xj],stickyEnd:[2,`stickyEnd`,`stickyEnd`,xj]}})}return n})();var Te=class{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName)}};var ai=(()=>{class n extends Te{constructor(){super(D(he),D(Fr))}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[`cdk-header-cell`],[`th`,`cdk-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`cdk-header-cell`],features:[Ih]})}return n})();var oi=(()=>{class n extends Te{constructor(){let e=D(he),t=D(Fr);super(e,t);let i=e._table?._getCellRole();i&&t.nativeElement.setAttribute(`role`,i)}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[`cdk-cell`],[`td`,`cdk-cell`,``]],hostAttrs:[1,`cdk-cell`],features:[Ih]})}return n})();var Ue=(()=>{class n{template=D(xr);_differs=D(RT);columns;_columnsDiffer;ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof ge?e.headerCell.template:this instanceof Qe?e.footerCell.template:e.cell.template}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,features:[Fy]})}return n})();var ge=(()=>{class n extends Ue{_table=D(z,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`cdkHeaderRowDef`,``]],inputs:{columns:[0,`cdkHeaderRowDef`,`columns`],sticky:[2,`cdkHeaderRowDefSticky`,`sticky`,xj]},features:[Ih,Fy]})}return n})();var Qe=(()=>{class n extends Ue{_table=D(z,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`cdkFooterRowDef`,``]],inputs:{columns:[0,`cdkFooterRowDef`,`columns`],sticky:[2,`cdkFooterRowDefSticky`,`sticky`,xj]},features:[Ih,Fy]})}return n})();var Ee=(()=>{class n extends Ue{_table=D(z,{optional:!0});when;static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`cdkRowDef`,``]],inputs:{columns:[0,`cdkRowDefColumns`,`columns`],when:[0,`cdkRowDefWhen`,`when`]},features:[Ih]})}return n})();var ee=(()=>{class n{_viewContainer=D(ts);cells;context;static mostRecentCellOutlet=null;constructor(){n.mostRecentCellOutlet=this}ngOnDestroy(){n.mostRecentCellOutlet===this&&(n.mostRecentCellOutlet=null)}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`cdkCellOutlet`,``]]})}return n})();var Ke=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=_D({type:n,selectors:[[`cdk-header-row`],[`tr`,`cdk-header-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-header-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Ph(0,0)},dependencies:[ee],encapsulation:2,changeDetection:1})}return n})();var qe=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=_D({type:n,selectors:[[`cdk-row`],[`tr`,`cdk-row`,``]],hostAttrs:[`role`,`row`,1,`cdk-row`],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Ph(0,0)},dependencies:[ee],encapsulation:2,changeDetection:1})}return n})();var ri=(()=>{class n{templateRef=D(xr);_contentClassNames=[`cdk-no-data-row`,`cdk-row`];_cellClassNames=[`cdk-cell`,`cdk-no-data-cell`];_cellSelector=`td, cdk-cell, [cdk-cell], .cdk-cell`;static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[`ng-template`,`cdkNoDataRow`,``]]})}return n})();var ei=[`top`,`bottom`,`left`,`right`];var We=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(r=>this._updateCachedSizes(r)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(r,e,t=!0,i=!0,a,o,s){this._isNativeHtmlTable=r,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=i,this.direction=a,this._positionListener=o,this._tableInjector=s,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(r,e){(e.includes(`left`)||e.includes(`right`))&&this._removeFromStickyColumnReplayQueue(r);let t=[];for(let i of r)i.nodeType===i.ELEMENT_NODE&&t.push(i,...Array.from(i.children));hp({write:()=>{for(let i of t)this._removeStickyStyle(i,e)}},{injector:this._tableInjector})}updateStickyColumns(r,e,t,i=!0,a=!0){if(!r.length||!this._isBrowser||!(e.some(E=>E)||t.some(E=>E))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let o=r[0],s=o.children.length,c=this.direction===`rtl`,h=c?`right`:`left`,p=c?`left`:`right`,_=e.lastIndexOf(!0),y=t.indexOf(!0),v,et,tt;a&&this._updateStickyColumnReplayQueue({rows:[...r],stickyStartStates:[...e],stickyEndStates:[...t]}),hp({earlyRead:()=>{v=this._getCellWidths(o,i),et=this._getStickyStartColumnPositions(v,e),tt=this._getStickyEndColumnPositions(v,t)},write:()=>{for(let E of r)for(let O=0;O<s;O++){let it=E.children[O];e[O]&&this._addStickyStyle(it,h,et[O],O===_),t[O]&&this._addStickyStyle(it,p,tt[O],O===y)}this._positionListener&&v.some(E=>!!E)&&(this._positionListener.stickyColumnsUpdated({sizes:_===-1?[]:v.slice(0,_+1).map((E,O)=>e[O]?E:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:y===-1?[]:v.slice(y).map((E,O)=>t[O+y]?E:null).reverse()}))}},{injector:this._tableInjector})}stickRows(r,e,t){if(!this._isBrowser)return;let i=t===`bottom`?r.slice().reverse():r,a=t===`bottom`?e.slice().reverse():e,o=[],s=[],c=[];hp({earlyRead:()=>{for(let h=0,p=0;h<i.length;h++){if(!a[h])continue;o[h]=p;let _=i[h];c[h]=this._isNativeHtmlTable?Array.from(_.children):[_];let y=this._retrieveElementSize(_).height;p+=y,s[h]=y}},write:()=>{let h=a.lastIndexOf(!0);for(let p=0;p<i.length;p++){if(!a[p])continue;let _=o[p],y=p===h;for(let v of c[p])this._addStickyStyle(v,t,_,y)}t===`top`?this._positionListener?.stickyHeaderRowsUpdated({sizes:s,offsets:o,elements:c}):this._positionListener?.stickyFooterRowsUpdated({sizes:s,offsets:o,elements:c})}},{injector:this._tableInjector})}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&hp({write:()=>{let t=r.querySelector(`tfoot`);t&&(e.some(i=>!i)?this._removeStickyStyle(t,[`bottom`]):this._addStickyStyle(t,`bottom`,0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(r,e){if(!r.classList.contains(this._stickCellCss))return;for(let i of e)r.style[i]=``,r.classList.remove(this._borderCellCss[i]);ei.some(i=>e.indexOf(i)===-1&&r.style[i])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex=``,this._needsPositionStickyOnElement&&(r.style.position=``),r.classList.remove(this._stickCellCss))}_addStickyStyle(r,e,t,i){r.classList.add(this._stickCellCss),i&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+=`position: -webkit-sticky; position: sticky; `)}_getCalculatedZIndex(r){let e={top:100,bottom:10,left:1,right:1},t=0;for(let i of ei)r.style[i]&&(t+=e[i]);return t?`${t}`:``}_getCellWidths(r,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],i=r.children;for(let a=0;a<i.length;a++){let o=i[a];t.push(this._retrieveElementSize(o).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){let t=[],i=0;for(let a=0;a<r.length;a++)e[a]&&(t[a]=i,i+=r[a]);return t}_getStickyEndColumnPositions(r,e){let t=[],i=0;for(let a=r.length;a>0;a--)e[a]&&(t[a]=i,i+=r[a]);return t}_retrieveElementSize(r){let e=this._elemSizeCache.get(r);if(e)return e;let t=r.getBoundingClientRect(),i={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(r,i),this._resizeObserver.observe(r,{box:`border-box`})),i}_updateStickyColumnReplayQueue(r){this._removeFromStickyColumnReplayQueue(r.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(r)}_removeFromStickyColumnReplayQueue(r){let e=new Set(r);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(i=>!e.has(i));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(r){let e=!1;for(let t of r){let i=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};i.width!==this._elemSizeCache.get(t.target)?.width&&Di(t.target)&&(e=!0),this._elemSizeCache.set(t.target,i)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Di(n){return[`cdk-cell`,`cdk-header-cell`,`cdk-footer-cell`].some(r=>n.classList.contains(r))}function ti(n){return Error(`Could not find column with id "${n}".`)}var pe=new N(`STICKY_POSITIONING_LISTENER`);var Ge=(()=>{class n{viewContainer=D(ts);elementRef=D(Fr);constructor(){let e=D(z);e._rowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`rowOutlet`,``]]})}return n})();var $e=(()=>{class n{viewContainer=D(ts);elementRef=D(Fr);constructor(){let e=D(z);e._headerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`headerRowOutlet`,``]]})}return n})();var Ye=(()=>{class n{viewContainer=D(ts);elementRef=D(Fr);constructor(){let e=D(z);e._footerRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`footerRowOutlet`,``]]})}return n})();var Xe=(()=>{class n{viewContainer=D(ts);elementRef=D(Fr);constructor(){let e=D(z);e._noDataRowOutlet=this,e._outletAssigned()}static ɵfac=function(t){return new(t||n)};static ɵdir=xD({type:n,selectors:[[``,`noDataRowOutlet`,``]]})}return n})();var Ze=(()=>{class n{_differs=D(RT);_changeDetectorRef=D(Nj);_elementRef=D(Fr);_dir=D(m,{optional:!0});_platform=D(N$1);_viewRepeater;_viewportRuler=D(ye);_injector=D(pe$1);_virtualScrollViewport=D(be,{optional:!0,host:!0});_positionListener=D(pe,{optional:!0})||D(pe,{optional:!0,skipSelf:!0});_document=D(Ir);_data;_renderedRange;_onDestroy=new Y;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_rowDefsByView=new WeakMap;_isNativeHtmlTable;_stickyStyler;stickyCssClass=`cdk-table-sticky`;needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new Y;_footerRowStickyUpdates=new Y;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute(`role`);return e===`grid`||e===`treegrid`?`gridcell`:`cell`}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new Y;_dataStream=new Y;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new et;viewChange=new Wn$1({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;get renderedRows(){return this._renderRows}constructor(){D(new Dg(`role`),{optional:!0})||this._elementRef.nativeElement.setAttribute(`role`,`table`),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName===`TABLE`,this._dataDiffer=this._differs.find([]).create((t,i)=>this.trackBy?this.trackBy(i.dataIndex,i.data):i)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe(km(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new _:new g,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),w(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(i,a,o)=>this._getEmbeddedViewArgs(i.item,o),i=>i.item.data,i=>{if(i.operation===o.INSERTED&&i.context){this._renderCellTemplateForItem(i.record.item.rowDef,i.context);let a=t.get(i.record.currentIndex);this._rowDefsByView.set(a,i.record.item.rowDef)}}),e.forEachIdentityChange(i=>{let a=i.currentIndex,o=t.get(a);if(this._rowDefsByView.get(o)!==i.item.rowDef){t.remove(a);let s=this._renderRow(this._rowOutlet,i.item.rowDef,a,{$implicit:i.item.data});this._rowDefsByView.set(s,i.item.rowDef)}else o.context.$implicit=i.item.data}),this._updateRowIndexContext(),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let i=ii(this._headerRowOutlet,`thead`);i&&(i.style.display=e.length?``:`none`)}let t=this._headerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`top`]),this._stickyStyler.stickRows(e,t,`top`),this._headerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let i=ii(this._footerRowOutlet,`tfoot`);i&&(i.style.display=e.length?``:`none`)}let t=this._footerRowDefs.map(i=>i.sticky);this._stickyStyler.clearStickyPositioning(e,[`bottom`]),this._stickyStyler.stickRows(e,t,`bottom`),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(i=>i.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...i],[`left`,`right`]),this._stickyColumnStylesNeedReset=!1),e.forEach((a,o)=>{this._addStickyColumnStyles([a],this._headerRowDefs[o])}),this._rowDefs.forEach(a=>{let o=[];for(let s=0;s<t.length;s++)this._renderRows[s].rowDef===a&&o.push(t[s]);this._addStickyColumnStyles(o,a)}),i.forEach((a,o)=>{this._addStickyColumnStyles([a],this._footerRowDefs[o])}),Array.from(this._columnDefsByName.values()).forEach(a=>a.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),i=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let a=this._renderedRange.start;a<t;a++){let o=this._data[a],s=this._getRenderRowsForData(o,a,i.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let c=0;c<s.length;c++){let h=s[c],p=this._cachedRenderRowsMap.get(h.data);p.has(h.rowDef)?p.get(h.rowDef).push(h):p.set(h.rowDef,[h]),e.push(h)}}return e}_getRenderRowsForData(e,t,i){return this._getRowDefs(e,t).map(o=>{let s=i&&i.has(o)?i.get(o):[];if(s.length){let c=s.shift();return c.dataIndex=t,c}else return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Oe(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Oe(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Oe(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Oe(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(o,s)=>{let c=!!s.getColumnsDiff();return o||c},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();let a=this._footerRowDefs.reduce(e,!1);return a&&this._forceRenderFooterRows(),t||i||a}_switchDataSource(e){this._data=[],w(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;w(this.dataSource)?e=this.dataSource.connect(this):am(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Wg(this.dataSource)),this._renderChangeSubscription=lm([e,this.viewChange]).pipe(km(this._onDestroy)).subscribe(([t,i])=>{this._data=t||[],this._renderedRange=i,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let i=Array.from(t?.columns||[]).map(s=>{let c=this._columnDefsByName.get(s);if(!c)throw ti(s);return c}),a=i.map(s=>s.sticky),o=i.map(s=>s.stickyEnd);this._stickyStyler.updateStickyColumns(e,a,o,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let i=0;i<e.viewContainer.length;i++){let a=e.viewContainer.get(i);t.push(a.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(a=>!a.when||a.when(t,e));else{let a=this._rowDefs.find(o=>o.when&&o.when(t,e))||this._defaultRowDef;a&&i.push(a)}return i.length,i}_getEmbeddedViewArgs(e,t){let i=e.rowDef,a={$implicit:e.data};return{templateRef:i.template,context:a,index:t}}_renderRow(e,t,i,a={}){let o=e.viewContainer.createEmbeddedView(t.template,a,i);return this._renderCellTemplateForItem(t,a),o}_renderCellTemplateForItem(e,t){for(let i of this._getCellTemplates(e))ee.mostRecentCellOutlet&&ee.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,i=e.length;t<i;t++){let o=e.get(t).context;o.count=i,o.first=t===0,o.last=t===i-1,o.even=t%2===0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let i=this._columnDefsByName.get(t);if(!i)throw ti(t);return e.extractCellTemplate(i)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,i)=>t||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:`ltr`,t=this._injector;this._stickyStyler=new We(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:Wg()).pipe(km(this._onDestroy)).subscribe(i=>{this._stickyStyler.direction=i,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<`u`?im:rm;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Em(0,t),km(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(i,a)=>this._measureRangeSize(i,a)}),lm([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe(km(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let s=a.elements[o];if(s){let c=a.offsets[o],h=i!==0?Math.max(i-c,c):-c;for(let p of s)p.style.top=`${-h}px`}}}),lm([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe(km(this._onDestroy)).subscribe(([i,a])=>{if(!(!a.sizes||!a.offsets||!a.elements))for(let o=0;o<a.elements.length;o++){let s=a.elements[o];if(s)for(let c of s)c.style.bottom=`${i+a.offsets[o]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let i=this._noDataRowOutlet.viewContainer;if(t){let a=i.createEmbeddedView(e.templateRef),o=a.rootNodes[0];if(a.rootNodes.length===1&&o?.nodeType===this._document.ELEMENT_NODE){o.setAttribute(`role`,`row`),o.classList.add(...e._contentClassNames);let s=o.querySelectorAll(e._cellSelector);for(let c=0;c<s.length;c++)s[c].classList.add(...e._cellClassNames)}}else i.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!==`vertical`)return 0;let i=this.viewChange.value,a=this._rowOutlet.viewContainer;e.start<i.start||(e.end,i.end);let o=e.start-i.start,s=e.end-e.start,c,h;for(let y=0;y<s;y++){let v=a.get(y+o);if(v&&v.rootNodes.length){c=h=v.rootNodes[0];break}}for(let y=s-1;y>-1;y--){let v=a.get(y+o);if(v&&v.rootNodes.length){h=v.rootNodes[v.rootNodes.length-1];break}}let p=c?.getBoundingClientRect?.(),_=h?.getBoundingClientRect?.();return p&&_?_.bottom-p.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static ɵfac=function(t){return new(t||n)};static ɵcmp=_D({type:n,selectors:[[`cdk-table`],[`table`,`cdk-table`,``]],contentQueries:function(t,i,a){if(t&1&&$h(a,ri,5)(a,he,5)(a,Ee,5)(a,ge,5)(a,Qe,5),t&2){let o;Iw(o=Ew())&&(i._noDataRow=o.first),Iw(o=Ew())&&(i._contentColumnDefs=o),Iw(o=Ew())&&(i._contentRowDefs=o),Iw(o=Ew())&&(i._contentHeaderRowDefs=o),Iw(o=Ew())&&(i._contentFooterRowDefs=o)}},hostAttrs:[1,`cdk-table`],hostVars:2,hostBindings:function(t,i){t&2&&Zh(`cdk-table-fixed-layout`,i.fixedLayout)},inputs:{trackBy:`trackBy`,dataSource:`dataSource`,multiTemplateDataRows:[2,`multiTemplateDataRows`,`multiTemplateDataRows`,xj],fixedLayout:[2,`fixedLayout`,`fixedLayout`,xj],recycleRows:[2,`recycleRows`,`recycleRows`,xj]},outputs:{contentChanged:`contentChanged`},exportAs:[`cdkTable`],features:[oT([{provide:z,useExisting:n},{provide:pe,useValue:null}])],ngContentSelectors:wi,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(mw(vi),yw(0),yw(1,1),YD(2,bi,1,0),YD(3,Ci,7,0)(4,Si,4,0)),t&2&&(YI(2),KD(i._isServer?2:-1),YI(),KD(i._isNativeHtmlTable?3:4))},dependencies:[$e,Ge,Xe,Ye],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2,changeDetection:1})}return n})();function Oe(n,r){return n.concat(Array.from(r))}function ii(n,r){let e=r.toUpperCase(),t=n.viewContainer.element.nativeElement;for(;t;){let i=t.nodeType===1?t.nodeName:null;if(i===e)return t;if(i===`TABLE`)break;t=t.parentNode}return null}var si=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gh({type:n});static ɵinj=Js({imports:[et$1]})}return n})();var Ri=[[[`caption`]],[[`colgroup`],[`col`]],`*`];var ki=[`caption`,`colgroup, col`,`*`];function xi(n,r){n&1&&yw(0,2)}function Mi(n,r){n&1&&($i$1(0,`thead`,0),Ph(1,1),hl(),$i$1(2,`tbody`,2),Ph(3,3)(4,4),hl(),$i$1(5,`tfoot`,0),Ph(6,5),hl())}function Oi(n,r){n&1&&Ph(0,1)(1,3)(2,4)(3,5)}var Vn=(()=>{class n extends Ze{stickyCssClass=`mat-mdc-table-sticky`;needsPositionStickyOnElement=!1;static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵcmp=_D({type:n,selectors:[[`mat-table`],[`table`,`mat-table`,``]],hostAttrs:[1,`mat-mdc-table`,`mdc-data-table__table`],hostVars:2,hostBindings:function(t,i){t&2&&Zh(`mat-table-fixed-layout`,i.fixedLayout)},exportAs:[`matTable`],features:[oT([{provide:Ze,useExisting:n},{provide:z,useExisting:n},{provide:pe,useValue:null}]),Ih],ngContentSelectors:ki,decls:5,vars:2,consts:[[`role`,`rowgroup`],[`headerRowOutlet`,``],[`role`,`rowgroup`,1,`mdc-data-table__content`],[`rowOutlet`,``],[`noDataRowOutlet`,``],[`footerRowOutlet`,``]],template:function(t,i){t&1&&(mw(Ri),yw(0),yw(1,1),YD(2,xi,1,0),YD(3,Mi,7,0)(4,Oi,4,0)),t&2&&(YI(2),KD(i._isServer?2:-1),YI(),KD(i._isNativeHtmlTable?3:4))},dependencies:[$e,Ge,Xe,Ye],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--%NS%mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--%NS%mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--%NS%mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--%NS%mat-table-background-color, var(--%NS%mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-header-container-height, 56px);
  color: var(--%NS%mat-table-header-headline-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-header-headline-font, var(--%NS%mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-header-headline-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-size: var(--%NS%mat-table-header-headline-size, var(--%NS%mat-sys-title-small-size, 14px));
  font-weight: var(--%NS%mat-table-header-headline-weight, var(--%NS%mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--%NS%mat-table-row-item-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-table-row-item-label-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-row-item-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-row-item-label-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-row-item-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--%NS%mat-table-footer-container-height, 52px);
  color: var(--%NS%mat-table-row-item-label-text-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-table-footer-supporting-text-font, var(--%NS%mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--%NS%mat-table-footer-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-table-footer-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 14px));
  font-weight: var(--%NS%mat-table-footer-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-table-footer-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-header-headline-tracking, var(--%NS%mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--%NS%mat-table-row-item-outline-color, var(--%NS%mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--%NS%mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--%NS%mat-table-row-item-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2,changeDetection:1})}return n})();var Hn=(()=>{class n extends Ne{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`matCellDef`,``]],features:[oT([{provide:Ne,useExisting:n}]),Ih]})}return n})();var jn=(()=>{class n extends Fe{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`matHeaderCellDef`,``]],features:[oT([{provide:Fe,useExisting:n}]),Ih]})}return n})();var Wn=(()=>{class n extends he{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`matColumnDef`,``]],inputs:{name:[0,`matColumnDef`,`name`]},features:[oT([{provide:he,useExisting:n}]),Ih]})}return n})();var Un=(()=>{class n extends ai{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[`mat-header-cell`],[`th`,`mat-header-cell`,``]],hostAttrs:[`role`,`columnheader`,1,`mat-mdc-header-cell`,`mdc-data-table__header-cell`],features:[Ih]})}return n})();var Qn=(()=>{class n extends oi{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[`mat-cell`],[`td`,`mat-cell`,``]],hostAttrs:[1,`mat-mdc-cell`,`mdc-data-table__cell`],features:[Ih]})}return n})();var Kn=(()=>{class n extends ge{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`matHeaderRowDef`,``]],inputs:{columns:[0,`matHeaderRowDef`,`columns`],sticky:[2,`matHeaderRowDefSticky`,`sticky`,xj]},features:[oT([{provide:ge,useExisting:n}]),Ih]})}return n})();var qn=(()=>{class n extends Ee{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵdir=xD({type:n,selectors:[[``,`matRowDef`,``]],inputs:{columns:[0,`matRowDefColumns`,`columns`],when:[0,`matRowDefWhen`,`when`]},features:[oT([{provide:Ee,useExisting:n}]),Ih]})}return n})();var Gn=(()=>{class n extends Ke{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵcmp=_D({type:n,selectors:[[`mat-header-row`],[`tr`,`mat-header-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-header-row`,`mdc-data-table__header-row`],exportAs:[`matHeaderRow`],features:[oT([{provide:Ke,useExisting:n}]),Ih],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Ph(0,0)},dependencies:[ee],encapsulation:2,changeDetection:1})}return n})();var $n=(()=>{class n extends qe{static ɵfac=(()=>{let e;return function(i){return(e||(e=nv(n)))(i||n)}})();static ɵcmp=_D({type:n,selectors:[[`mat-row`],[`tr`,`mat-row`,``]],hostAttrs:[`role`,`row`,1,`mat-mdc-row`,`mdc-data-table__row`],exportAs:[`matRow`],features:[oT([{provide:qe,useExisting:n}]),Ih],decls:1,vars:0,consts:[[`cdkCellOutlet`,``]],template:function(t,i){t&1&&Ph(0,0)},dependencies:[ee],encapsulation:2,changeDetection:1})}return n})();var Yn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gh({type:n});static ɵinj=Js({imports:[si,A]})}return n})();var Ti=9007199254740991;var li=class extends d{_data;_renderData=new Wn$1([]);_filter=new Wn$1(``);_internalPageChanges=new Y;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(r){r=Array.isArray(r)?r:[],this._data.next(r),this._renderChangesSubscription||this._filterData(r)}get filter(){return this._filter.value}set filter(r){this._filter.next(r),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(r){this._sort=r,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(r){this._paginator=r,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(r,e)=>{let t=r[e];if(Ke$1(t)){let i=Number(t);return i<Ti?i:t}return t};sortData=(r,e)=>{let t=e.active,i=e.direction;return!t||i==``?r:r.sort((a,o)=>{let s=this.sortingDataAccessor(a,t),c=this.sortingDataAccessor(o,t),h=typeof s,p=typeof c;h!==p&&(h===`number`&&(s+=``),p===`number`&&(c+=``));let _=0;return s!=null&&c!=null?s>c?_=1:s<c&&(_=-1):s!=null?_=1:c!=null&&(_=-1),_*(i==`asc`?1:-1)})};filterPredicate=(r,e)=>{let t=e.trim().toLowerCase();return Object.values(r).some(i=>`${i}`.toLowerCase().includes(t))};constructor(r=[]){super(),this._data=new Wn$1(r),this._updateChangeSubscription()}_updateChangeSubscription(){let r=this._sort?Im(this._sort.sortChange,this._sort.initialized):Wg(null),e=this._paginator?Im(this._paginator.page,this._internalPageChanges,this._paginator.initialized):Wg(null),t=this._data,o=lm([lm([lm([t,this._filter]).pipe(Re(([s])=>this._filterData(s))),r]).pipe(Re(([s])=>this._orderData(s))),e]).pipe(Re(([s])=>this._pageData(s)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=o.subscribe(s=>this._renderData.next(s))}_filterData(r){return this.filteredData=this.filter==null||this.filter===``?r:r.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(r){return this.sort?this.sortData(r.slice(),this.sort):r}_pageData(r){if(!this.paginator)return r;let e=this.paginator.pageIndex*this.paginator.pageSize;return r.slice(e,e+this.paginator.pageSize)}_updatePaginator(r){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=r,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,t);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};var Pi=[`trigger`];var Ai=[`panel`];var zi=[[[`mat-select-trigger`]],`*`];var Li=[`mat-select-trigger`,`*`];function Bi(n,r){if(n&1&&($i$1(0,`span`,4),qw(1),hl()),n&2){let e=hw();YI(),ng(e.placeholder)}}function Vi(n,r){n&1&&yw(0)}function Hi(n,r){if(n&1&&($i$1(0,`span`,11),qw(1),hl()),n&2){let e=hw(2);YI(),ng(e.triggerValue)}}function ji(n,r){if(n&1&&($i$1(0,`span`,5),YD(1,Vi,1,0)(2,Hi,2,1,`span`,11),hl()),n&2){let e=hw();YI(),KD(e.customTrigger?1:2)}}function Wi(n,r){if(n&1){let e=aw();$i$1(0,`div`,12,1),Vh(`keydown`,function(i){rd(e);return od(hw()._handleKeydown(i))}),yw(2,1),hl()}if(n&2){let e=hw();Rw(e.panelClass),Zh(`mat-select-panel-animations-enabled`,!e._animationsDisabled)(`mat-primary`,e._parentFormField?.color===`primary`)(`mat-accent`,e._parentFormField?.color===`accent`)(`mat-warn`,e._parentFormField?.color===`warn`)(`mat-undefined`,!e._parentFormField?.color),Ah(`id`,e.id+`-panel`)(`aria-multiselectable`,e.multiple)(`aria-label`,e.ariaLabel||null)(`aria-labelledby`,e._getPanelAriaLabelledby())}}var Ui=new N(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=D(pe$1);return()=>et$2(n)}});var Qi=new N(`MAT_SELECT_CONFIG`);var Ki=new N(`MatSelectTrigger`);var Je=class{source;value;constructor(r,e){this.source=r,this.value=e}};var ui=(()=>{class n{_viewportRuler=D(ye);_changeDetectorRef=D(Nj);_elementRef=D(Fr);_dir=D(m,{optional:!0});_idGenerator=D(re);_renderer=D(gc);_parentFormField=D(St,{optional:!0});ngControl=D(Tt,{self:!0,optional:!0});_liveAnnouncer=D(Ft);_defaultOptions=D(Qi,{optional:!0});_animationsDisabled=at();_popoverLocation;_initialized=new Y;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let i=this.panel.nativeElement,a=kt(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&a===1?i.scrollTop=0:i.scrollTop=Nt(o.offsetTop,o.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Je(this,e)}_scrollStrategyFactory=D(Ui);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Y;_errorStateTracker;stateChanges=new Y;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=Ge$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(pr.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=dm(()=>{let e=this.options;return e?e.changes.pipe(Rm(e),eu(()=>Im(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(eu(()=>this.optionSelectionChanges))});openedChange=new et;_openedStream=this.openedChange.pipe(mn(e=>e),Re(()=>{}));_closedStream=this.openedChange.pipe(mn(e=>!e),Re(()=>{}));selectionChange=new et;valueChange=new et;constructor(){let e=D(ii$1),t=D(bu,{optional:!0}),i=D(wu,{optional:!0}),a=D(new Dg(`tabindex`),{optional:!0}),o=D(ot,{optional:!0}),s=D(_t,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new He(e,s||this.ngControl,i,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=o?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new d$1(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(km(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(km(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Rm(null),km(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?i.setAttribute(`aria-labelledby`,e):i.removeAttribute(`aria-labelledby`)}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(yn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(i),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,`animationend`,a=>{a.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,i=t===40||t===38||t===37||t===39,a=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&a&&!Ve(e)||(this.multiple||e.altKey)&&i)e.preventDefault(),this.open();else if(!this.multiple){let s=this.selected;o.onKeydown(e);let c=this.selected;c&&s!==c&&this._liveAnnouncer.announce(c.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,i=e.keyCode,a=i===40||i===38,o=t.isTyping();if(a&&e.altKey)e.preventDefault(),this.close();else if(!o&&(i===13||i===32)&&t.activeItem&&!Ve(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&i===65&&e.ctrlKey){e.preventDefault();let s=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(s?c.select():c.deselect())})}else{let s=t.activeItemIndex;t.onKeydown(e),this._multiple&&a&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==s&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ve(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof tt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new de(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Im(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(km(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Im(...this.options.map(t=>t._stateChanges)).pipe(km(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let i=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(i!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),i!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,i)=>this.sortComparator?this.sortComparator(t,i,e):e.indexOf(t)-e.indexOf(i)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(i=>i.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+` `:``;return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(e){let t=b(e);t&&(t.tagName===`MAT-OPTION`||t.classList.contains(`cdk-overlay-backdrop`)||t.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(t){return new(t||n)};static ɵcmp=_D({type:n,selectors:[[`mat-select`]],contentQueries:function(t,i,a){if(t&1&&$h(a,Ki,5)(a,J,5)(a,rt,5),t&2){let o;Iw(o=Ew())&&(i.customTrigger=o.first),Iw(o=Ew())&&(i.options=o),Iw(o=Ew())&&(i.optionGroups=o)}},viewQuery:function(t,i){if(t&1&&Uh(Pi,5)(Ai,5)(qt,5),t&2){let a;Iw(a=Ew())&&(i.trigger=a.first),Iw(a=Ew())&&(i.panel=a.first),Iw(a=Ew())&&(i._overlayDir=a.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(t,i){t&1&&Vh(`keydown`,function(o){return i._handleKeydown(o)})(`focus`,function(){return i._onFocus()})(`blur`,function(){return i._onBlur()}),t&2&&(Ah(`id`,i.id)(`tabindex`,i.disabled?-1:i.tabIndex)(`aria-controls`,i.panelOpen?i.id+`-panel`:null)(`aria-expanded`,i.panelOpen)(`aria-label`,i.ariaLabel||null)(`aria-required`,i.required.toString())(`aria-disabled`,i.disabled.toString())(`aria-invalid`,i.errorState)(`aria-activedescendant`,i._getAriaActiveDescendant()),Zh(`mat-mdc-select-disabled`,i.disabled)(`mat-mdc-select-invalid`,i.errorState)(`mat-mdc-select-required`,i.required)(`mat-mdc-select-empty`,i.empty)(`mat-mdc-select-multiple`,i.multiple)(`mat-select-open`,i.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,xj],disableRipple:[2,`disableRipple`,`disableRipple`,xj],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Aj(e)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,xj],placeholder:`placeholder`,required:[2,`required`,`required`,xj],multiple:[2,`multiple`,`multiple`,xj],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,xj],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,Aj],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,xj]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[oT([{provide:vt,useExisting:n},{provide:at$1,useExisting:n}]),Fy],ngContentSelectors:Li,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(t,i){if(t&1&&(mw(zi),$i$1(0,`div`,2,0),Vh(`click`,function(){return i.open()}),$i$1(3,`div`,3),YD(4,Bi,2,1,`span`,4)(5,ji,3,1,`span`,5),hl(),$i$1(6,`div`,6)(7,`div`,7),gd(),$i$1(8,`svg`,8),Rh(9,`path`,9),hl()()()(),Dh(10,Wi,3,16,`ng-template`,10),Vh(`detach`,function(){return i.close()})(`backdropClick`,function(){return i.close()})(`overlayKeydown`,function(o){return i._handleOverlayKeydown(o)})),t&2){let a=ww(1);YI(3),Ah(`id`,i._valueId),YI(),KD(i.empty?4:5),YI(6),Oh(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,i._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,i._scrollStrategy)(`cdkConnectedOverlayOrigin`,i._preferredOverlayOrigin||a)(`cdkConnectedOverlayPositions`,i._positions)(`cdkConnectedOverlayWidth`,i._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,i._popoverLocation)}},dependencies:[tt,qt],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})}return n})();var fi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gh({type:n});static ɵinj=Js({imports:[Jt,Vt,A,_e,ei$1,Vt]})}return n})();var pi=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gh({type:n});static ɵinj=Js({imports:[St$1,Jt,A,_e]})}return n})();function qi(n,r){if(n&1&&($i$1(0,`mat-option`,17),qw(1),hl()),n&2){let e=r.$implicit;Oh(`value`,e),YI(),Il(` `,e,` `)}}function Gi(n,r){if(n&1){let e=aw();$i$1(0,`mat-form-field`,14)(1,`mat-select`,16,0),Vh(`selectionChange`,function(i){rd(e);return od(hw(2)._changePageSize(i.value))}),ew(3,qi,2,2,`mat-option`,17,XD),hl(),$i$1(5,`div`,18),Vh(`click`,function(){rd(e);return od(ww(2).open())}),hl()()}if(n&2){let e=hw(2);Oh(`appearance`,e._formFieldAppearance)(`color`,e.color),YI(),Oh(`value`,e.pageSize)(`disabled`,e.disabled),xh(`aria-labelledby`,e._pageSizeLabelId),Oh(`panelClass`,e.selectConfig.panelClass||``)(`disableOptionCentering`,e.selectConfig.disableOptionCentering),YI(2),tw(e._displayedPageSizeOptions)}}function $i(n,r){if(n&1&&($i$1(0,`div`,15),qw(1),hl()),n&2){let e=hw(2);YI(),ng(e.pageSize)}}function Yi(n,r){if(n&1&&($i$1(0,`div`,3)(1,`div`,13),qw(2),hl(),YD(3,Gi,6,7,`mat-form-field`,14),YD(4,$i,2,1,`div`,15),hl()),n&2){let e=hw();YI(),Ah(`id`,e._pageSizeLabelId),YI(),Il(` `,e._intl.itemsPerPageLabel,` `),YI(),KD(e._displayedPageSizeOptions.length>1?3:-1),YI(),KD(e._displayedPageSizeOptions.length<=1?4:-1)}}function Xi(n,r){if(n&1){let e=aw();$i$1(0,`button`,19),Vh(`click`,function(){rd(e);let i=hw();return od(i._buttonClicked(0,i._previousButtonsDisabled()))}),gd(),$i$1(1,`svg`,8),Rh(2,`path`,20),hl()()}if(n&2){let e=hw();Oh(`matTooltip`,e._intl.firstPageLabel)(`matTooltipDisabled`,e._previousButtonsDisabled())(`disabled`,e._previousButtonsDisabled())(`tabindex`,e._previousButtonsDisabled()?-1:null),Ah(`aria-label`,e._intl.firstPageLabel)}}function Zi(n,r){if(n&1){let e=aw();$i$1(0,`button`,21),Vh(`click`,function(){rd(e);let i=hw();return od(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),gd(),$i$1(1,`svg`,8),Rh(2,`path`,22),hl()()}if(n&2){let e=hw();Oh(`matTooltip`,e._intl.lastPageLabel)(`matTooltipDisabled`,e._nextButtonsDisabled())(`disabled`,e._nextButtonsDisabled())(`tabindex`,e._nextButtonsDisabled()?-1:null),Ah(`aria-label`,e._intl.lastPageLabel)}}var Ji=(()=>{class n{changes=new Y;itemsPerPageLabel=`Items per page:`;nextPageLabel=`Next page`;previousPageLabel=`Previous page`;firstPageLabel=`First page`;lastPageLabel=`Last page`;getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let a=e*t,o=a<i?Math.min(a+t,i):a+t;return`${a+1} \u2013 ${o} of ${i}`};static ɵfac=function(t){return new(t||n)};static ɵprov=Pr({token:n,factory:n.ɵfac})}return n})();var en=50;var tn=new N(`MAT_PAGINATOR_DEFAULT_OPTIONS`);var nn=(()=>{class n{_intl=D(Ji);_changeDetectorRef=D(Nj);_formFieldAppearance;_pageSizeLabelId=D(re).getId(`mat-paginator-page-size-label-`);_intlChanges;_isInitialized=!1;_initializedStream=new zn(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Aj(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new et;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=D(tn,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:a,hidePageSize:o,showFirstLastButtons:s}=t;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),o!=null&&(this.hidePageSize=o),s!=null&&(this.showFirstLastButtons=s)}this._formFieldAppearance=t?.formFieldAppearance||`outline`}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:en),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=_D({type:n,selectors:[[`mat-paginator`]],hostAttrs:[`role`,`group`,1,`mat-mdc-paginator`],inputs:{color:`color`,pageIndex:[2,`pageIndex`,`pageIndex`,Aj],length:[2,`length`,`length`,Aj],pageSize:[2,`pageSize`,`pageSize`,Aj],pageSizeOptions:`pageSizeOptions`,hidePageSize:[2,`hidePageSize`,`hidePageSize`,xj],showFirstLastButtons:[2,`showFirstLastButtons`,`showFirstLastButtons`,xj],selectConfig:`selectConfig`,disabled:[2,`disabled`,`disabled`,xj]},outputs:{page:`page`},exportAs:[`matPaginator`],decls:14,vars:14,consts:[[`selectRef`,``],[1,`mat-mdc-paginator-outer-container`],[1,`mat-mdc-paginator-container`],[1,`mat-mdc-paginator-page-size`],[1,`mat-mdc-paginator-range-actions`],[`aria-atomic`,`true`,`aria-live`,`polite`,`role`,`status`,1,`mat-mdc-paginator-range-label`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-previous`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`viewBox`,`0 0 24 24`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-paginator-icon`],[`d`,`M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-next`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`aria-hidden`,`true`,1,`mat-mdc-paginator-page-size-label`],[1,`mat-mdc-paginator-page-size-select`,3,`appearance`,`color`],[1,`mat-mdc-paginator-page-size-value`],[`hideSingleSelectionIndicator`,``,3,`selectionChange`,`value`,`disabled`,`aria-labelledby`,`panelClass`,`disableOptionCentering`],[3,`value`],[1,`mat-mdc-paginator-touch-target`,3,`click`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-first`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z`],[`matIconButton`,``,`type`,`button`,`matTooltipPosition`,`above`,`disabledInteractive`,``,1,`mat-mdc-paginator-navigation-last`,3,`click`,`matTooltip`,`matTooltipDisabled`,`disabled`,`tabindex`],[`d`,`M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z`]],template:function(t,i){t&1&&($i$1(0,`div`,1)(1,`div`,2),YD(2,Yi,5,4,`div`,3),$i$1(3,`div`,4)(4,`div`,5),qw(5),hl(),YD(6,Xi,3,5,`button`,6),$i$1(7,`button`,7),Vh(`click`,function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),gd(),$i$1(8,`svg`,8),Rh(9,`path`,9),hl()(),md(),$i$1(10,`button`,10),Vh(`click`,function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),gd(),$i$1(11,`svg`,8),Rh(12,`path`,11),hl()(),YD(13,Zi,3,5,`button`,12),hl()()()),t&2&&(YI(2),KD(i.hidePageSize?-1:2),YI(3),Il(` `,i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length),` `),YI(),KD(i.showFirstLastButtons?6:-1),YI(),Oh(`matTooltip`,i._intl.previousPageLabel)(`matTooltipDisabled`,i._previousButtonsDisabled())(`disabled`,i._previousButtonsDisabled())(`tabindex`,i._previousButtonsDisabled()?-1:null),Ah(`aria-label`,i._intl.previousPageLabel),YI(3),Oh(`matTooltip`,i._intl.nextPageLabel)(`matTooltipDisabled`,i._nextButtonsDisabled())(`disabled`,i._nextButtonsDisabled())(`tabindex`,i._nextButtonsDisabled()?-1:null),Ah(`aria-label`,i._intl.nextPageLabel),YI(3),KD(i.showFirstLastButtons?13:-1))},dependencies:[qe$1,ui,J,ut,Ct],styles:[`.mat-mdc-paginator {
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
`],encapsulation:2})}return n})();var Ga=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=gh({type:n});static ɵinj=Js({imports:[qt$1,fi,pi,nn]})}return n})();export{Kn as a,Vn as c,jn as d,li as f,Hn as i,Wn as l,qn as m,Ga as n,Qn as o,nn as p,Gn as r,Un as s,$n as t,Yn as u};