import{n as s$2,t as r$2}from"./chunk-DeqPHXjz.js";import{$ as Le$1,$n as gw,$t as Xh,A as Gl,Ar as nc,At as Rt$1,Bn as dw,Ci as z$1,Cr as lv,Dt as RT,E as Fr,En as bv,Er as me,Fn as de$1,Gn as ey,Gr as rg,Gt as Um,H as K$2,Hn as ee$2,Ht as Tg,Ir as pe,It as Sg,Jn as fe,Jt as Vg,Kt as Uv,L as Ia,Ln as dm,Lt as T$2,M as H1,Mn as cv,Mt as S$1,O as Gg,Oi as zs,On as cT,Pt as ST,Qr as to,Rn as dr,S as Ey,Sn as as,Tn as bg,Tr as mb,Un as eh,Ur as qu,V as Jm,Vn as dy,Vr as ql,Vt as Te$1,W as Ke$2,Wn as eo,Xr as st$3,Xt as WT,Y as Ku,Z as L1,Zt as Wl,_ as Dg,_n as _T,_t as Og,a as Au,an as Yr,ar as ig,at as Mn,ci as vy,ct as N1,dn as Zl,er as gy,et as Lg,fi as wg,fr as kT,ft as Ni$1,gt as Ob,hr as kg,ht as OT,ii as uy,ir as ie$2,it as Mg,j as Gn,jn as co,jt as Ru,k as Gi,kr as nb,kt as Rg,lt as NT,m as Cn,mi as x1,mt as O1,ni as ut$4,nr as ht$4,oi as ve,on as Yu,or as j1,p as Cm,pi as wy,pn as Zr,pt as Nn,q as Km,qt as V1,r as AT,ri as uv,s as B,sr as jE,st as N$4,tn as Xn,tt as Lm,u as Bs,v as Dy,vt as Ou,w as F1,x as Es,xr as le$1,xt as Pc,yr as lT,z as Iy}from"./chunk-CVMDIrxF.js";import{a as Ns,h as ei$1,r as Mn$1,s as Sr,x as ro}from"./chunk-DNTnUPeI.js";import{n as Ce}from"./chunk-D4zflo1i.js";import{F as $u,Gn as Kt$1,Hn as $t$2,Kn as Qi,Q as Pg,Qn as i$1,Un as Gi$1,X as Ng,Xn as Zi,Yn as Yi,_t as _u,et as Sb,nt as Su,qn as Rs,st as Va,tt as Sg$1,vt as au,z as Bu,zt as xb}from"./main-SE2HUMFK.js";import{t as P$1}from"./chunk-D7eK15DH.js";var r$1=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}};var h$3=class extends r$1{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,n,o,d,j){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.projectableNodes=o,this.bindings=d||null,this.directives=j||null}};var l$2=class extends r$1{templateRef;viewContainerRef;context;injector;constructor(t,e,n,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}};var u=class extends r$1{element;constructor(t){super(),this.element=t instanceof to?t.nativeElement:t}};var s$1=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof h$3)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof l$2)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof u)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var N$3=class extends s$1{outletElement;_appRef;_defaultInjector;constructor(t,e,n){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let n=t.injector||t.viewContainerRef.injector,o=n.get(Xn,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,o=t.injector||this._defaultInjector||fe.NULL,d=o.get(ve,n.injector);e=H1(t.component,{elementInjector:o,environmentInjector:d,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(n);o!==-1&&e.remove(o)}),this._attachedPortal=t,n}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var I$1=(()=>{class i extends s$1{_moduleRef=T$2(Xn,{optional:!0});_document=T$2(Fr);_viewContainerRef=T$2(Es);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new st$3;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let o=this._document.createComment(`dom-portal`);e.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(n,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(o){return(e||(e=Uv(i)))(o||i)}})();static ɵdir=gw({type:i,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[rg]})}return i})();var k$2=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=Xh({type:i});static ɵinj=Ia({})}return i})();var l$1;try{l$1=typeof Intl<`u`&&Intl.v8BreakIterator}catch{l$1=!1}var N$2=(()=>{class t{_platformId=T$2(cv);isBrowser=this._platformId?Ns(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||l$1)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(i){return new(i||t)};static ɵprov=eo({token:t,factory:t.ɵfac})}return t})();function f(t){return Array.isArray(t)?t:[t]}var L$2=new Set;var d$1;var h$2=(()=>{class t{_platform=T$2(N$2);_nonce=T$2(uv,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):F$2}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&P(e,this._nonce),this._matchMedia(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=eo({token:t,factory:t.ɵfac})}return t})();function P(t,n){if(!L$2.has(t))try{d$1||(d$1=document.createElement(`style`),n&&d$1.setAttribute(`nonce`,n),d$1.setAttribute(`type`,`text/css`),document.head.appendChild(d$1)),d$1.sheet&&(d$1.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),L$2.add(t))}catch(e){console.error(e)}}function F$2(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var W$2=(()=>{class t{_mediaMatcher=T$2(h$2);_zone=T$2(ie$2);_queries=new Map;_destroySubject=new ee$2;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return O$3(f(e)).some(m=>this._registerQuery(m).mql.matches)}observe(e){let a=ey(O$3(f(e)).map(o=>this._registerQuery(o).observable));return a=Cn(a.pipe(Nn(1)),a.pipe(Ey(1),Au(0))),a.pipe(Te$1(o=>{let s={matches:!1,breakpoints:{}};return o.forEach(({matches:p,query:j})=>{s.matches=s.matches||p,s.breakpoints[j]=p}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),a={observable:new N$4(o=>{let s=p=>this._zone.run(()=>o.next(p));return i.addListener(s),()=>{i.removeListener(s)}}).pipe(Dy(i),Te$1(({matches:o})=>({query:e,matches:o})),Yu(this._destroySubject)),mql:i};return this._queries.set(e,a),a}static ɵfac=function(i){return new(i||t)};static ɵprov=eo({token:t,factory:t.ɵfac})}return t})();function O$3(t){return t.map(n=>n.split(`,`)).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}var tt$4={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var K$1=new S$1(`MATERIAL_ANIMATIONS`);var k$1=null;function Q(){return T$2(K$1,{optional:!0})?.animationsDisabled||T$2(lv,{optional:!0})===`NoopAnimations`?`di-disabled`:(k$1??=T$2(h$2).matchMedia(`(prefers-reduced-motion)`).matches,k$1?`reduced-motion`:`enabled`)}function at$4(){return Q()!==`enabled`}var i=new WeakMap;var h$1=(()=>{class e{_appRef;_injector=T$2(fe);_environmentInjector=T$2(ve);load(t){let n=this._appRef=this._appRef||this._injector.get(co),o=i.get(n);o||(o={loaders:new Set,refs:[]},i.set(n,o),n.onDestroy(()=>{i.get(n)?.refs.forEach(y=>y.destroy()),i.delete(n)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(H1(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(n){return new(n||e)};static ɵprov=eo({token:e,factory:e.ɵfac})}return e})();var j$2=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=dw({type:e,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return e})();var a$3;function g(){if(a$3===void 0&&(a$3=null,typeof window<`u`)){let e=window;if(e.trustedTypes!==void 0)try{a$3=e.trustedTypes.createPolicy(`angular#components`,{createHTML:r=>r})}catch(r){console.error(r)}}return a$3}function w$2(e){return g()?.createHTML(e)||e}function k(e,r,t){e.innerHTML=w$2(t.sanitize(z$1.HTML,r)||``)}var ee$1;function Pe$1(){if(ee$1==null){let s=typeof document<`u`?document.head:null;ee$1=!!(s&&(s.createShadowRoot||s.attachShadow))}return ee$1}function te$1(s){if(Pe$1()){let i=s.getRootNode?s.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function ie$1(){let s=typeof document<`u`&&document?document.activeElement:null;for(;s&&s.shadowRoot;){let i=s.shadowRoot.activeElement;if(i===s)break;s=i}return s}function b(s){if(s.composedPath)try{return s.composedPath()[0]}catch{}return s.target}function ft$3(s,i=0){return Ue(s)?Number(s):arguments.length===2?i:0}function Ue(s){return!isNaN(parseFloat(s))&&!isNaN(Number(s))}function E$2(s){return s instanceof to?s.nativeElement:s}var Be$1=new Map;var se$1=class s{_appId=T$2(nc);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){this._appId!==`ng`&&(i+=this._appId);let t=Be$1.get(i);return t===void 0?t=0:t++,Be$1.set(i,t),`${i}${e?s._infix+`-`:``}${t}`}static ɵfac=function(e){return new(e||s)};static ɵprov=eo({token:s,factory:s.ɵfac})};function Ke$1(s,...i){return i.length?i.some(e=>s[e]):s.altKey||s.shiftKey||s.ctrlKey||s.metaKey}function F$1(s){return s.buttons===0||s.detail===0}function S(s){let i=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var L$1;function He$1(){if(L$1==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>L$1=!0}))}finally{L$1=L$1||!1}return L$1}function C$1(s){return He$1()?s:!!s.capture}var Ve=new S$1(`cdk-input-modality-detector-options`);var je={ignoreKeys:[18,17,224,91,16]};var We=650;var ne$1={passive:!0,capture:!0};var Ge=(()=>{class s{_platform=T$2(N$2);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new dr(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=b(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<We||(this._modality.next(F$1(e)?`keyboard`:`mouse`),this._mostRecentTarget=b(e))};_onTouchstart=e=>{if(S(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=b(e)};constructor(){let e=T$2(ie$2),t=T$2(Fr),n=T$2(Ve,{optional:!0});if(this._options=r$2(r$2({},je),n),this.modalityDetected=this._modality.pipe(Ey(1)),this.modalityChanged=this.modalityDetected.pipe(Ou()),this._platform.isBrowser){let r=T$2(Yr).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,`keydown`,this._onKeydown,ne$1),r.listen(t,`mousedown`,this._onMousedown,ne$1),r.listen(t,`touchstart`,this._onTouchstart,ne$1)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();var R=(function(s){return s[s.IMMEDIATE=0]=`IMMEDIATE`,s[s.EVENTUAL=1]=`EVENTUAL`,s})(R||{});var Ze=new S$1(`cdk-focus-monitor-default-options`);var V$1=C$1({passive:!0,capture:!0});var $e$1=(()=>{class s{_ngZone=T$2(ie$2);_platform=T$2(N$2);_inputModalityDetector=T$2(Ge);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=T$2(Fr);_stopInputModalityDetector=new ee$2;constructor(){let e=T$2(Ze,{optional:!0});this._detectionMode=e?.detectionMode||R.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=b(e);for(let n=t;n;n=n.parentElement)e.type===`focus`?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=E$2(e);if(!this._platform.isBrowser||n.nodeType!==1)return Lm();let r=te$1(n)||this._document,a=this._elementInfo.get(n);if(a)return t&&(a.checkChildren=!0),a.subject;let _={checkChildren:t,subject:new ee$2,rootNode:r};return this._elementInfo.set(n,_),this._registerGlobalListeners(_),_.subject}stopMonitoring(e){let t=E$2(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=E$2(e);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([_,$])=>this._originChanged(_,t,$)):(this._setOrigin(t),typeof r.focus==`function`&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===R.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle(`cdk-focused`,!!t),e.classList.toggle(`cdk-touch-focused`,t===`touch`),e.classList.toggle(`cdk-keyboard-focused`,t===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,t===`mouse`),e.classList.toggle(`cdk-program-focused`,t===`program`)}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&t,this._detectionMode===R.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?We:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=b(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,V$1),t.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,V$1)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Yu(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,V$1),t.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,V$1),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!==`mouse`||!t||t===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0}return!1}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();var mt$3=(()=>{class s{_elementRef=T$2(to);_focusMonitor=T$2($e$1);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new st$3;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute(`cdkMonitorSubtreeFocus`)).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static ɵfac=function(t){return new(t||s)};static ɵdir=gw({type:s,selectors:[[``,`cdkMonitorElementFocus`,``],[``,`cdkMonitorSubtreeFocus`,``]],outputs:{cdkFocusChange:`cdkFocusChange`},exportAs:[`cdkMonitorFocus`]})}return s})();var pt$3=(()=>{class s{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();var ze$1=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵmod=Xh({type:s});static ɵinj=Ia({providers:[pt$3]})}return s})();var qe$1=(()=>{class s{_platform=T$2(N$2);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return bt$2(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=gt$3(Dt(e));if(t&&(Ye$1(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=Ye$1(e);return e.hasAttribute(`contenteditable`)?r!==-1:n===`iframe`||n===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Tt$1(e)?!1:n===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:n===`video`?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,t){return Mt(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();function gt$3(s){try{return s.frameElement}catch{return null}}function bt$2(s){return!!(s.offsetWidth||s.offsetHeight||typeof s.getClientRects==`function`&&s.getClientRects().length)}function vt$2(s){let i=s.nodeName.toLowerCase();return i===`input`||i===`select`||i===`button`||i===`textarea`}function Et(s){return At$1(s)&&s.type==`hidden`}function yt$2(s){return It$1(s)&&s.hasAttribute(`href`)}function At$1(s){return s.nodeName.toLowerCase()==`input`}function It$1(s){return s.nodeName.toLowerCase()==`a`}function Je$1(s){if(!s.hasAttribute(`tabindex`)||s.tabIndex===void 0)return!1;let i=s.getAttribute(`tabindex`);return!!(i&&!isNaN(parseInt(i,10)))}function Ye$1(s){if(!Je$1(s))return null;let i=parseInt(s.getAttribute(`tabindex`)||``,10);return isNaN(i)?-1:i}function Tt$1(s){let i=s.nodeName.toLowerCase(),e=i===`input`&&s.type;return e===`text`||e===`password`||i===`select`||i===`textarea`}function Mt(s){return Et(s)?!1:vt$2(s)||yt$2(s)||s.hasAttribute(`contenteditable`)||Je$1(s)}function Dt(s){return s.ownerDocument&&s.ownerDocument.defaultView||window}var j$1=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,n,r=!1,a){this._element=i,this._checker=e,this._ngZone=t,this._document=n,this._injector=a,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener(`focus`,this.startAnchorListener),i.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary(`start`);return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary(`end`);return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){let i=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add(`cdk-visually-hidden`),i.classList.add(`cdk-focus-trap-anchor`),i.setAttribute(`aria-hidden`,`true`),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){eh(i,{injector:this._injector})}};var et$3=(()=>{class s{_checker=T$2(qe$1);_ngZone=T$2(ie$2);_document=T$2(Fr);_injector=T$2(fe);constructor(){T$2(h$1).load(j$2)}create(e,t=!1){return new j$1(e,this._checker,this._ngZone,this._document,t,this._injector)}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();var Ct$1=(()=>{class s{_elementRef=T$2(to);_focusTrapFactory=T$2(et$3);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){T$2(N$2).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=ie$1(),this.focusTrap?.focusInitialElementWhenReady()}static ɵfac=function(t){return new(t||s)};static ɵdir=gw({type:s,selectors:[[``,`cdkTrapFocus`,``]],inputs:{enabled:[2,`cdkTrapFocus`,`enabled`,F1],autoCapture:[2,`cdkTrapFocusAutoCapture`,`autoCapture`,F1]},exportAs:[`cdkTrapFocus`],features:[bv]})}return s})();var tt$3=new S$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var it$1=new S$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Nt$2=0;var Ot=(()=>{class s{_ngZone=T$2(ie$2);_defaultOptions=T$2(it$1,{optional:!0});_liveElement;_document=T$2(Fr);_sanitizer=T$2(ro);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=T$2(tt$3,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,r,a;return t.length===1&&typeof t[0]==`number`?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=n&&n.politeness?n.politeness:`polite`),a==null&&n&&(a=n.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(_=>this._currentResolve=_)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:k(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,t=this._document.getElementsByClassName(e),n=this._document.createElement(`div`);for(let r=0;r<t.length;r++)t[r].remove();return n.classList.add(e),n.classList.add(`cdk-visually-hidden`),n.setAttribute(`aria-atomic`,`true`),n.setAttribute(`aria-live`,`polite`),n.id=`cdk-live-announcer-${Nt$2++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let n=0;n<t.length;n++){let r=t[n],a=r.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&r.setAttribute(`aria-owns`,a+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();var y$2=(function(s){return s[s.NONE=0]=`NONE`,s[s.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,s[s.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,s})(y$2||{});var Xe$1=`cdk-high-contrast-black-on-white`;var Qe$2=`cdk-high-contrast-white-on-black`;var re$1=`cdk-high-contrast-active`;var st$2=(()=>{class s{_platform=T$2(N$2);_hasCheckedHighContrastMode=!1;_document=T$2(Fr);_breakpointSubscription;constructor(){this._breakpointSubscription=T$2(W$2).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return y$2.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||``).replace(/ /g,``);switch(e.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return y$2.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return y$2.BLACK_ON_WHITE}return y$2.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(re$1,Xe$1,Qe$2),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===y$2.BLACK_ON_WHITE?e.add(re$1,Xe$1):t===y$2.WHITE_ON_BLACK&&e.add(re$1,Qe$2)}}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();var wt$1=(()=>{class s{constructor(){T$2(st$2)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(t){return new(t||s)};static ɵmod=Xh({type:s});static ɵinj=Ia({imports:[ze$1]})}return s})();function Di(s){return s==null?``:typeof s==`string`?s:`${s}px`}function Ni(s){return s!=null&&`${s}`!=`false`}function Oi(s,i=/\s+/){let e=[];if(s!=null){let t=Array.isArray(s)?s:`${s}`.split(i);for(let n of t){let r=`${n}`.trim();r&&e.push(r)}}return e}var Ft$2=200;var W$1=class{_letterKeyStream=new ee$2;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new ee$2;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval==`number`?e.debounceInterval:Ft$2;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Ku(e=>this._pressedLetters.push(e)),Au(i),Mn(()=>this._pressedLetters.length>0),Te$1(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let n=(this._selectedItemIndex+t)%this._items.length,r=this._items[n];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};var N$1=class{_items;_activeItemIndex=Ke$2(-1);_activeItem=Ke$2(null);_wrap=!1;_typeaheadSubscription=B.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Gi?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Gn(i)&&(this._effectRef=Ni$1(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new ee$2;change=new ee$2;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new W$1(e,{debounceInterval:typeof i==`number`?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,n=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!i[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}else return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&n){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&n){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&n){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(n||Ke$1(i,`shiftKey`))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i==`number`?i:e.indexOf(i),n=e[t];this._activeItem.set(n??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let n=(this._activeItemIndex()+i*t+e.length)%e.length,r=e[n];if(!this._skipPredicateFn(r)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Gn(this._items)?this._items():this._items instanceof Gi?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var oe$1=class extends N$1{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var ae=class extends N$1{_origin=`program`;setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var rt$3=` `;function St$1(s,i,e){let t=Z$2(s,i);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),s.setAttribute(i,t.join(rt$3)))}function Lt$1(s,i,e){let t=Z$2(s,i);e=e.trim();let n=t.filter(r=>r!==e);n.length?s.setAttribute(i,n.join(rt$3)):s.removeAttribute(i)}function Z$2(s,i){return s.getAttribute(i)?.match(/\S+/g)??[]}var ot$3=`cdk-describedby-message`;var G$3=`cdk-describedby-host`;var de=0;var ls=(()=>{class s{_platform=T$2(N$2);_document=T$2(Fr);_messageRegistry=new Map;_messagesContainer=null;_id=`${de++}`;constructor(){T$2(h$1).load(j$2),this._id=T$2(nc)+`-`+de++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let r=ce(t,n);typeof t!=`string`?(nt$3(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let r=ce(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t==`string`){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${G$3}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(G$3);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement(`div`);nt$3(n,this._id),n.textContent=e,t&&n.setAttribute(`role`,t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(ce(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let n=this._document.createElement(`div`);n.style.visibility=`hidden`,n.classList.add(e),n.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=Z$2(e,`aria-describedby`).filter(n=>n.indexOf(ot$3)!=0);e.setAttribute(`aria-describedby`,t.join(` `))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);St$1(e,`aria-describedby`,n.messageElement.id),e.setAttribute(G$3,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,Lt$1(e,`aria-describedby`,n.messageElement.id),e.removeAttribute(G$3)}_isElementDescribedByMessage(e,t){let n=Z$2(e,`aria-describedby`),r=this._messageRegistry.get(t),a=r&&r.messageElement.id;return!!a&&n.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t==`object`)return!0;let n=t==null?``:`${t}`.trim(),r=e.getAttribute(`aria-label`);return n?!r||r.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(t){return new(t||s)};static ɵprov=eo({token:s,factory:s.ɵfac})}return s})();function ce(s,i){return typeof s==`string`?`${i||``}/${s}`:s}function nt$3(s,i){s.id||(s.id=`${ot$3}-${i}-${de++}`)}var T$1;function vs(){if(T$1==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return T$1=!1,T$1;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)T$1=!0;else{let s=Element.prototype.scrollTo;s?T$1=!/\{\s*\[native code\]\s*\}/.test(s.toString()):T$1=!1}}return T$1}function ys(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var O$2;var at$3=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Is(){if(O$2)return O$2;if(typeof document!=`object`||!document)return O$2=new Set(at$3),O$2;let s=document.createElement(`input`);return O$2=new Set(at$3.filter(i=>(s.setAttribute(`type`,i),s.type===i))),O$2}var h=(function(s){return s[s.FADING_IN=0]=`FADING_IN`,s[s.VISIBLE=1]=`VISIBLE`,s[s.FADING_OUT=2]=`FADING_OUT`,s[s.HIDDEN=3]=`HIDDEN`,s})(h||{});var ue=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=h.HIDDEN;constructor(i,e,t,n=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}};var ct$3=C$1({passive:!0,capture:!0});var le=class{_events=new Map;addHandler(i,e,t,n){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(n):r.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ct$3)})}removeHandler(i,e,t){let n=this._events.get(i);if(!n)return;let r=n.get(e);r&&(r.delete(t),r.size===0&&n.delete(e),n.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,ct$3)))}_delegateEventHandler=i=>{let e=b(i);e&&this._events.get(i.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(r=>r.handleEvent(i))})}};var dt$3={enterDuration:225,exitDuration:150};var Rt=800;var ut$3=C$1({passive:!0,capture:!0});var lt$3=[`mousedown`,`touchstart`];var ht$3=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var kt=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵcmp=dw({type:s,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return s})();var he=class s{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new le;constructor(i,e,t,n,r){this._target=i,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=E$2(t)),r&&r.get(h$1).load(kt)}fadeInRipple(i,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=r$2(r$2({},dt$3),t.animation);t.centered&&(i=n.left+n.width/2,e=n.top+n.height/2);let a=t.radius||xt$1(i,e,n),_=i-n.left,$=e-n.top,k=r.enterDuration,u=document.createElement(`div`);u.classList.add(`mat-ripple-element`),u.style.left=`${_-a}px`,u.style.top=`${$-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${k}ms`,this._containerElement.appendChild(u);let _e=window.getComputedStyle(u),_t=_e.transitionProperty,fe=_e.transitionDuration,z=_t===`none`||fe===`0s`||fe===`0s, 0s`||n.width===0&&n.height===0,A=new ue(this,u,t,z);u.style.transform=`scale3d(1, 1, 1)`,A.state=h.FADING_IN,t.persistent||(this._mostRecentTransientRipple=A);let x=null;return!z&&(k||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let me=()=>{x&&(x.fallbackTimer=null),clearTimeout(pe),this._finishRippleTransition(A)},Y=()=>this._destroyRipple(A),pe=setTimeout(Y,k+100);u.addEventListener(`transitionend`,me),u.addEventListener(`transitioncancel`,Y),x={onTransitionEnd:me,onTransitionCancel:Y,fallbackTimer:pe}}),this._activeRipples.set(A,x),(z||!k)&&this._finishRippleTransition(A),A}fadeOutRipple(i){if(i.state===h.FADING_OUT||i.state===h.HIDDEN)return;let e=i.element,t=r$2(r$2({},dt$3),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity=`0`,i.state=h.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=E$2(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,lt$3.forEach(t=>{s._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type===`mousedown`?this._onMousedown(i):i.type===`touchstart`?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ht$3.forEach(e=>{this._triggerElement.addEventListener(e,this,ut$3)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===h.FADING_IN?this._startFadeOutTransition(i):i.state===h.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=h.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=h.HIDDEN,e!==null&&(i.element.removeEventListener(`transitionend`,e.onTransitionEnd),i.element.removeEventListener(`transitioncancel`,e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=F$1(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Rt;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!S(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===h.VISIBLE||i.config.terminateOnPointerUp&&i.state===h.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(lt$3.forEach(e=>s._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(ht$3.forEach(e=>i.removeEventListener(e,this,ut$3)),this._pointerUpEventsRegistered=!1))}};function xt$1(s,i,e){let t=Math.max(Math.abs(s-e.left),Math.abs(s-e.right)),n=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+n*n)}var Pt=new S$1(`mat-ripple-global-options`);var Us=(()=>{class s{_elementRef=T$2(to);_animationsDisabled=at$4();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=T$2(ie$2),t=T$2(N$2),n=T$2(Pt,{optional:!0}),r=T$2(fe);this._globalOptions=n||{},this._rippleRenderer=new he(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r$2(r$2(r$2({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e==`number`?this._rippleRenderer.fadeInRipple(e,t,r$2(r$2({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,r$2(r$2({},this.rippleConfig),e))}static ɵfac=function(t){return new(t||s)};static ɵdir=gw({type:s,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(t,n){t&2&&Vg(`mat-ripple-unbounded`,n.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return s})();var Hs=(()=>{class s{static ɵfac=function(t){return new(t||s)};static ɵcmp=dw({type:s,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return s})();var y$1=new S$1(`cdk-dir-doc`,{providedIn:`root`,factory:()=>T$2(Fr)});var M$1=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function s(e){let l=e?.toLowerCase()||``;return l===`auto`&&typeof navigator<`u`&&navigator?.language?M$1.test(navigator.language)?`rtl`:`ltr`:l===`rtl`?`rtl`:`ltr`}var m=(()=>{class e{get value(){return this.valueSignal()}valueSignal=Ke$2(`ltr`);change=new st$3;constructor(){let t=T$2(y$1,{optional:!0});if(t){let i=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(s(i||o||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(i){return new(i||e)};static ɵprov=eo({token:e,factory:e.ɵfac})}return e})();var O$1=(()=>{class e{_isInitialized=!1;_rawDir=``;change=new st$3;get dir(){return this.valueSignal()}set dir(t){let i=this.valueSignal();this.valueSignal.set(s(t)),this._rawDir=t,i!==this.valueSignal()&&this._isInitialized&&this.change.emit(this.valueSignal())}get value(){return this.dir}valueSignal=Ke$2(`ltr`);ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static ɵfac=function(i){return new(i||e)};static ɵdir=gw({type:e,selectors:[[``,`dir`,``]],hostVars:1,hostBindings:function(i,o){i&2&&Dg(`dir`,o._rawDir)},inputs:{dir:`dir`},outputs:{change:`dirChange`},exportAs:[`dir`],features:[mb([{provide:m,useExisting:e}])]})}return e})();var A$2=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=Xh({type:e});static ɵinj=Ia({})}return e})();var Jt=20;var Y$1=(()=>{class n{_ngZone=T$2(ie$2);_platform=T$2(N$2);_renderer=T$2(Yr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee$2;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Jt){return this._platform.isBrowser?new N$4(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let s=e>0?this._scrolled.pipe(dy(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{s.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Lm()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let s=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Mn(o=>!o||s.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((s,o)=>{this._targetContainsElement(o,e)&&i.push(o)}),i}_targetContainsElement(e,i){let s=E$2(i),o=e.getElementRef().nativeElement;do if(s==o)return!0;while(s=s.parentElement);return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var te=20;var M=(()=>{class n{_platform=T$2(N$2);_listeners;_viewportSize=null;_change=new ee$2;_document=T$2(Fr);constructor(){let e=T$2(ie$2),i=T$2(Yr).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let s=o=>this._change.next(o);this._listeners=[i.listen(`window`,`resize`,s),i.listen(`window`,`orientationchange`,s)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:s}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+s,right:e.left+i,height:s,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),s=e.documentElement,o=s.getBoundingClientRect();return{top:-o.top||e.body?.scrollTop||i.scrollY||s.scrollTop||0,left:-o.left||e.body?.scrollLeft||i.scrollX||s.scrollLeft||0}}change(e=te){return e>0?this._change.pipe(dy(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var Qe$1=new S$1(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var lt$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Xh({type:n});static ɵinj=Ia({})}return n})();var at$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Xh({type:n});static ɵinj=Ia({imports:[A$2,lt$2,A$2,lt$2]})}return n})();var Bt=vs();function Nt$1(n){return new X$2(n.get(M),n.get(Fr))}var X$2=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||``,this._previousHTMLStyles.top=t.style.top||``,t.style.left=Di(-this._previousScrollPosition.left),t.style.top=Di(-this._previousScrollPosition.top),t.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,s=e.style,o=i.scrollBehavior||``,r=s.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove(`cdk-global-scrollblock`),Bt&&(i.scrollBehavior=s.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Bt&&(i.scrollBehavior=o,s.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function Wt(n,t){return new H(n.get(Y$1),n.get(ie$2),n.get(M),t)}var H=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,s){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Mn(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var A$1=class{enable(){}disable(){}attach(){}};function ct$2(n,t){return t.some(e=>{let i=n.bottom<e.top,s=n.top>e.bottom,o=n.right<e.left,r=n.left>e.right;return i||s||o||r})}function Tt(n,t){return t.some(e=>{let i=n.top<e.top,s=n.bottom>e.bottom,o=n.left<e.left,r=n.right>e.right;return i||s||o||r})}function ut$2(n,t){return new j(n.get(Y$1),n.get(M),n.get(ie$2),t)}var j=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=s}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:s}=this._viewportRuler.getViewportSize();ct$2(e,[{width:i,height:s,bottom:s,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Yt=(()=>{class n{_injector=T$2(fe);noop=()=>new A$1;close=e=>Wt(this._injector,e);block=()=>Nt$1(this._injector);reposition=e=>ut$2(this._injector,e);static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var F=class{positionStrategy;scrollStrategy=new A$1;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var Z$1=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var Xt=(()=>{class n{_attachedOverlays=[];_document=T$2(Fr);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,s){return s.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var Ht$1=(()=>{class n extends Xt{_ngZone=T$2(ie$2);_renderer=T$2(Yr).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let s=i.length-1;s>-1;s--){let o=i[s];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var jt=(()=>{class n extends Xt{_platform=T$2(N$2);_ngZone=T$2(ie$2);_renderer=T$2(Yr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,s={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,`pointerdown`,this._pointerDownListener,s),o.listen(i,`click`,this._clickListener,s),o.listen(i,`auxclick`,this._clickListener,s),o.listen(i,`contextmenu`,this._clickListener,s)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=b(e)};_clickListener=e=>{let i=b(e),s=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let l=o[r],h=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,h))){if(At(l.overlayElement,i)||At(l.overlayElement,s))break;this._ngZone?this._ngZone.run(()=>h.next(e)):h.next(e)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();function At(n,t){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Zt=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=dw({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,s){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var Ut=(()=>{class n{_platform=T$2(N$2);_containerElement;_document=T$2(Fr);_styleLoader=T$2(h$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||ys()){let s=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<s.length;o++)s[o].remove()}let i=this._document.createElement(`div`);i.classList.add(e),ys()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Zt)}static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var dt$2=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,s){this._renderer=e,this._ngZone=i,this.element=t.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,s)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents=`none`,t.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function pt$2(n){return n&&n.nodeType===1}var ht$2=new Set;var U$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee$2;_attachments=new ee$2;_detachments=new ee$2;_positionStrategy;_scrollStrategy;_locationChanges=B.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee$2;_outsidePointerEvents=new ee$2;_afterNextRenderRef;constructor(t,e,i,s,o,r,l,h,f,a=!1,d,p){this._portalOutlet=t,this._host=e,this._pane=i,this._config=s,this._ngZone=o,this._keyboardDispatcher=r,this._document=l,this._location=h,this._outsideClickDispatcher=f,this._animationsDisabled=a,this._injector=d,this._renderer=p,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),ht$2.add(this),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=eh(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),ht$2.delete(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,ht$2.delete(this)}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=r$2(r$2({},this._config),t),this._updateElementSize()}setDirection(t){this._config=s$2(r$2({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t==`string`?t:t.value:`ltr`}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=Di(this._config.width),t.height=Di(this._config.height),t.minWidth=Di(this._config.minWidth),t.minHeight=Di(this._config.minHeight),t.maxWidth=Di(this._config.maxWidth),t.maxHeight=Di(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?``:`none`}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;pt$2(t)?t.after(this._host):t?.type===`parent`?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new dt$2(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let s=f(e||[]).filter(o=>!!o);s.length&&(i?t.classList.add(...s):t.classList.remove(...s))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=eh(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var Ft$1=`cdk-overlay-connected-position-bounding-box`;var ee=/([A-Za-z%]+)$/;function _t$1(n,t){return new G$2(t,n.get(M),n.get(Fr),n.get(N$2),n.get(Ut))}var G$2=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee$2;_resizeSubscription=B.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,s,o){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=o,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Ft$1),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,s=this._containerRect,o=[],r;for(let l of this._preferredPositions){let h=this._getOriginPoint(t,s,l),f=this._getOverlayPoint(h,e,l),a=this._getOverlayFit(f,e,i,l);if(a.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,h);return}if(this._canFitWithFlexibleDimensions(a,f,i)){o.push({position:l,origin:h,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(h,l)});continue}(!r||r.overlayFit.visibleArea<a.visibleArea)&&(r={overlayFit:a,overlayPoint:f,originPoint:h,position:l,overlayRect:e})}if(o.length){let l=null,h=-1;for(let f of o){let a=f.boundingBoxRect.width*f.boundingBoxRect.height*(f.position.weight||1);a>h&&(h=a,l=f)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&E$1(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Ft$1),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof to?this._origin.nativeElement:pt$2(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let s;if(i.originX==`center`)s=t.left+t.width/2;else{let r=this._isRtl()?t.right:t.left,l=this._isRtl()?t.left:t.right;s=i.originX==`start`?r:l}e.left<0&&(s-=e.left);let o;return i.originY==`center`?o=t.top+t.height/2:o=i.originY==`top`?t.top:t.bottom,e.top<0&&(o-=e.top),{x:s,y:o}}_getOverlayPoint(t,e,i){let s;i.overlayX==`center`?s=-e.width/2:i.overlayX===`start`?s=this._isRtl()?-e.width:0:s=this._isRtl()?0:-e.width;let o;return i.overlayY==`center`?o=-e.height/2:o=i.overlayY==`top`?0:-e.height,{x:t.x+s,y:t.y+o}}_getOverlayFit(t,e,i,s){let o=zt(e),{x:r,y:l}=t,h=this._getOffset(s,`x`),f=this._getOffset(s,`y`);h&&(r+=h),f&&(l+=f);let a=0-r,d=r+o.width-i.width,p=0-l,g=l+o.height-i.height,_=this._subtractOverflows(o.width,a,d),v=this._subtractOverflows(o.height,p,g),vt=_*v;return{visibleArea:vt,isCompletelyWithinViewport:o.width*o.height===vt,fitsInViewportVertically:v===o.height,fitsInViewportHorizontally:_==o.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let s=i.bottom-e.y,o=i.right-e.x,r=Lt(this._overlayRef.getConfig().minHeight),l=Lt(this._overlayRef.getConfig().minWidth),h=t.fitsInViewportVertically||r!=null&&r<=s,f=t.fitsInViewportHorizontally||l!=null&&l<=o;return h&&f}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let s=zt(e),o=this._viewportRect,r=Math.max(t.x+s.width-o.width,0),l=Math.max(t.y+s.height-o.height,0),h=Math.max(o.top-i.top-t.y,0),f=Math.max(o.left-i.left-t.x,0),a=0,d=0;return s.width<=o.width?a=f||-r:a=t.x<this._getViewportMarginStart()?o.left-i.left-t.x:0,s.height<=o.height?d=h||-l:d=t.y<this._getViewportMarginTop()?o.top-i.top-t.y:0,this._previousPushAmount={x:a,y:d},{x:t.x+a,y:t.y+d}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!ie(this._lastScrollVisibility,i)){let s=new Z$1(t,i);this._positionChanges.next(s)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,s=t.overlayY;t.overlayX===`center`?i=`center`:this._isRtl()?i=t.overlayX===`start`?`right`:`left`:i=t.overlayX===`start`?`left`:`right`;for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${s}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,s=this._isRtl(),o,r,l;if(e.overlayY===`top`)r=t.y,o=i.height-r+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)l=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-l+this._getViewportMarginTop();else{let g=Math.min(i.bottom-t.y+i.top,t.y),_=this._lastBoundingBoxSize.height;o=g*2,r=t.y-g,o>_&&!this._isInitialRender&&!this._growAfterOpen&&(r=t.y-_/2)}let h=e.overlayX===`start`&&!s||e.overlayX===`end`&&s,f=e.overlayX===`end`&&!s||e.overlayX===`start`&&s,a,d,p;if(f)p=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),a=t.x-this._getViewportMarginStart();else if(h)d=t.x,a=i.right-t.x-this._getViewportMarginEnd();else{let g=Math.min(i.right-t.x+i.left,t.x),_=this._lastBoundingBoxSize.width;a=g*2,d=t.x-g,a>_&&!this._isInitialRender&&!this._growAfterOpen&&(d=t.x-_/2)}return{top:r,left:d,bottom:l,right:p,width:a,height:o}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let s={};if(this._hasExactPosition())s.top=s.left=`0`,s.bottom=s.right=`auto`,s.maxHeight=s.maxWidth=``,s.width=s.height=`100%`;else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;s.width=Di(i.width),s.height=Di(i.height),s.top=Di(i.top)||`auto`,s.bottom=Di(i.bottom)||`auto`,s.left=Di(i.left)||`auto`,s.right=Di(i.right)||`auto`,e.overlayX===`center`?s.alignItems=`center`:s.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?s.justifyContent=`center`:s.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,o&&(s.maxHeight=Di(o)),r&&(s.maxWidth=Di(r))}this._lastBoundingBoxSize=i,E$1(this._boundingBox.style,s)}_resetBoundingBoxStyles(){E$1(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){E$1(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(t,e){let i={},s=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(s){let a=this._viewportRuler.getViewportScrollPosition();E$1(i,this._getExactOverlayY(e,t,a)),E$1(i,this._getExactOverlayX(e,t,a))}else i.position=`static`;let l=``,h=this._getOffset(e,`x`),f=this._getOffset(e,`y`);h&&(l+=`translateX(${h}px) `),f&&(l+=`translateY(${f}px)`),i.transform=l.trim(),r.maxHeight&&(s?i.maxHeight=Di(r.maxHeight):o&&(i.maxHeight=``)),r.maxWidth&&(s?i.maxWidth=Di(r.maxWidth):o&&(i.maxWidth=``)),E$1(this._pane.style,i)}_getExactOverlayY(t,e,i){let s={top:``,bottom:``},o=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),t.overlayY===`bottom`)s.bottom=`${this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)}px`;else s.top=Di(o.y);return s}_getExactOverlayX(t,e,i){let s={left:``,right:``},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let r;if(this._isRtl()?r=t.overlayX===`end`?`left`:`right`:r=t.overlayX===`end`?`right`:`left`,r===`right`)s.right=`${this._document.documentElement.clientWidth-(o.x+this._overlayRect.width)}px`;else s.left=Di(o.x);return s}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(s=>s.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Tt(t,i),isOriginOutsideView:ct$2(t,i),isOverlayClipped:Tt(e,i),isOverlayOutsideView:ct$2(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,s)=>i-Math.max(s,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e===`x`?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&f(t).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof to)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();t&&(e.style.display=`block`);let i=e.getBoundingClientRect();return t&&(e.style.display=``),i}};function E$1(n,t){for(let e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}function Lt(n){if(typeof n!=`number`&&n!=null){let[t,e]=n.split(ee);return!e||e===`px`?parseFloat(t):null}return n||null}function zt(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ie(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var It=`cdk-global-overlay-wrapper`;function Gt(n){return new $}var $=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(It),this._isDisposed=!1}top(t=``){return this._bottomOffset=``,this._topOffset=t,this._alignItems=`flex-start`,this}left(t=``){return this._xOffset=t,this._xPosition=`left`,this}bottom(t=``){return this._topOffset=``,this._bottomOffset=t,this._alignItems=`flex-end`,this}right(t=``){return this._xOffset=t,this._xPosition=`right`,this}start(t=``){return this._xOffset=t,this._xPosition=`start`,this}end(t=``){return this._xOffset=t,this._xPosition=`end`,this}width(t=``){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=``){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=``){return this.left(t),this._xPosition=`center`,this}centerVertically(t=``){return this.top(t),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:s,height:o,maxWidth:r,maxHeight:l}=this._overlayRef.getConfig(),h=(s===`100%`||s===`100vw`)&&(!r||r===`100%`||r===`100vw`),f=(o===`100%`||o===`100vh`)&&(!l||l===`100%`||l===`100vh`),a=this._xPosition,d=this._xOffset,p=this._overlayRef.getConfig().direction===`rtl`,g=``,_=``,v=``;h?v=`flex-start`:a===`center`?(v=`center`,p?_=d:g=d):p?a===`left`||a===`end`?(v=`flex-end`,g=d):(a===`right`||a===`start`)&&(v=`flex-start`,_=d):a===`left`||a===`start`?(v=`flex-start`,g=d):(a===`right`||a===`end`)&&(v=`flex-end`,_=d),t.position=this._cssPosition,t.marginLeft=h?`0`:g,t.marginTop=f?`0`:this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=h?`0`:_,e.justifyContent=v,e.alignItems=f?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(It),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position=``,this._overlayRef=null,this._isDisposed=!0}};var $t$1=(()=>{class n{_injector=T$2(fe);global(){return Gt()}flexibleConnectedTo(e){return _t$1(this._injector,e)}static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var gt$2=new S$1(`OVERLAY_DEFAULT_CONFIG`);function mt$2(n,t){n.get(h$1).load(Zt);let e=n.get(Ut),i=n.get(Fr),s=n.get(se$1),o=n.get(co),r=n.get(m),l=n.get(Pc,null,{optional:!0})||n.get(Yr).createRenderer(null,null),h=new F(t),f=n.get(gt$2,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||r.value,!i.body||!(`showPopover`in i.body)?h.usePopover=!1:h.usePopover=t?.usePopover??f;let a=i.createElement(`div`),d=i.createElement(`div`);a.id=s.getId(`cdk-overlay-`),a.classList.add(`cdk-overlay-pane`),d.appendChild(a),h.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let p=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return pt$2(p)?p.after(d):p?.type===`parent`?p.element.appendChild(d):e.getContainerElement().appendChild(d),new U$1(new N$3(a,o,n),d,a,h,n.get(ie$2),n.get(Ht$1),i,n.get(Mn$1),n.get(jt),t?.disableAnimations??n.get(lv,null,{optional:!0})===`NoopAnimations`,n.get(ve),l)}var Kt=(()=>{class n{scrollStrategies=T$2(Yt);_positionBuilder=T$2($t$1);_injector=T$2(fe);create(e){return mt$2(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=eo({token:n,factory:n.ɵfac})}return n})();var ne=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var se=new S$1(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=T$2(fe);return()=>ut$2(n)}});var ft$2=(()=>{class n{elementRef=T$2(to);static ɵfac=function(i){return new(i||n)};static ɵdir=gw({type:n,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return n})();var qt$1=new S$1(`cdk-connected-overlay-default-config`);var oe=(()=>{class n{_dir=T$2(m,{optional:!0});_injector=T$2(fe);_overlayRef;_templatePortal;_backdropSubscription=B.EMPTY;_attachSubscription=B.EMPTY;_detachSubscription=B.EMPTY;_positionSubscription=B.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=T$2(se);_ngZone=T$2(ie$2);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new st$3;positionChange=new st$3;attach=new st$3;detach=new st$3;overlayKeydown=new st$3;overlayOutsideClick=new st$3;constructor(){let e=T$2(Zr),i=T$2(Es),s=T$2(qt$1,{optional:!0}),o=T$2(gt$2,{optional:!0});this.usePopover=o?.usePopover===!1?null:`global`,this._templatePortal=new l$2(e,i),this.scrollStrategy=this._scrollStrategyFactory(),s&&this._assignConfig(s)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ne);let e=this._overlayRef=mt$2(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Ke$1(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let s=this._getOriginElement(),o=b(i);(!s||s!==o&&!s.contains(o))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new F({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(s=>({originX:s.originX,originY:s.originY,overlayX:s.overlayX,overlayY:s.overlayY,offsetX:s.offsetX||this.offsetX,offsetY:s.offsetY||this.offsetY,panelClass:s.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=_t$1(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ft$2?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ft$2?this.origin.elementRef.nativeElement:this.origin instanceof to?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(wy(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(i){return new(i||n)};static ɵdir=gw({type:n,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,F1],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,F1],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,F1],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,F1],push:[2,`cdkConnectedOverlayPush`,`push`,F1],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,F1],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,F1],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[bv]})}return n})();var re=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=Xh({type:n});static ɵinj=Ia({providers:[Kt],imports:[A$2,k$2,at$2,at$2]})}return n})();var mt$1={capture:!0};var st$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var A=`mat-ripple-loader-uninitialized`;var E=`mat-ripple-loader-class-name`;var X$1=`mat-ripple-loader-centered`;var _$1=`mat-ripple-loader-disabled`;var tt$2=(()=>{class a{_document=T$2(Fr);_animationsDisabled=at$4();_globalRippleOptions=T$2(Pt,{optional:!0});_platform=T$2(N$2);_ngZone=T$2(ie$2);_injector=T$2(fe);_eventCleanups;_hosts=new Map;constructor(){let t=T$2(Yr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>st$1.map(n=>t.listen(this._document,n,this._onInteraction,mt$1)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(A,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(E))&&t.setAttribute(E,n.className||``),n.centered&&t.setAttribute(X$1,``),n.disabled&&t.setAttribute(_$1,``)}setDisabled(t,n){let e=this._hosts.get(t);e?(e.target.rippleDisabled=n,!n&&!e.hasSetUpEvents&&(e.hasSetUpEvents=!0,e.renderer.setupTriggerEvents(t))):n?t.setAttribute(_$1,``):t.removeAttribute(_$1)}_onInteraction=t=>{let n=b(t);if(n instanceof HTMLElement){let e=n.closest(`[${A}="${this._globalRippleOptions?.namespace??``}"]`);e&&this._createRipple(e)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(E)),t.append(n);let e=this._globalRippleOptions,k=this._animationsDisabled?0:e?.animation?.enterDuration??dt$3.enterDuration,it=this._animationsDisabled?0:e?.animation?.exitDuration??dt$3.exitDuration,z={rippleDisabled:this._animationsDisabled||e?.disabled||t.hasAttribute(_$1),rippleConfig:{centered:t.hasAttribute(X$1),terminateOnPointerUp:e?.terminateOnPointerUp,animation:{enterDuration:k,exitDuration:it}}},B=new he(z,this._ngZone,n,this._platform,this._injector),C=!z.rippleDisabled;C&&B.setupTriggerEvents(t),this._hosts.set(t,{target:z,renderer:B,hasSetUpEvents:C}),t.removeAttribute(A)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=eo({token:a,factory:a.ɵfac})}return a})();var ct$1=[`*`,[[``,`progressIndicator`,``]]];var dt$1=[`*`,`[progressIndicator]`];function lt$1(a,R){a&1&&(Wl(0,`div`,1),ST(1,1),Gl())}var bt$1=new S$1(`MAT_BUTTON_CONFIG`);function nt$2(a){return a==null?void 0:j1(a)}var w$1=(()=>{class a{_elementRef=T$2(to);_ngZone=T$2(ie$2);_animationsDisabled=at$4();_config=T$2(bt$1,{optional:!0});_focusMonitor=T$2($e$1);_cleanupClick;_renderer=T$2(Pc);_rippleLoader=T$2(tt$2);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=N1(!1,{transform:F1});constructor(){T$2(h$1).load(Hs);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||a)};static ɵdir=gw({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,e){n&2&&(Dg(`disabled`,e._getDisabledAttribute())(`aria-disabled`,e._getAriaDisabled())(`tabindex`,e._getTabIndex()),WT(e.color?`mat-`+e.color:``),Vg(`mat-mdc-button-progress-indicator-shown`,e.showProgress())(`mat-mdc-button-disabled`,e.disabled)(`mat-mdc-button-disabled-interactive`,e.disabledInteractive)(`mat-unthemed`,!e.color)(`_mat-animation-noopable`,e._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,F1],disabled:[2,`disabled`,`disabled`,F1],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,F1],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,F1],tabIndex:[2,`tabIndex`,`tabIndex`,nt$2],_tabindex:[2,`tabindex`,`_tabindex`,nt$2],showProgress:[1,`showProgress`]}})}return a})();var ut$1=(()=>{class a extends w$1{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||a)};static ɵcmp=dw({type:a,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[rg],ngContentSelectors:dt$1,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,e){n&1&&(NT(ct$1),bg(0,`span`,0),ST(1),cT(2,lt$1,2,0,`div`,1),bg(3,`span`,2)(4,`span`,3)),n&2&&(jE(2),lT(e.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();var at$1=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=Xh({type:a});static ɵinj=Ia({imports:[A$2]})}return a})();var ot$2=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``]],[[``,`progressIndicator`,``]]];var rt$2=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]`,`[progressIndicator]`];function pt$1(a,R){a&1&&(Wl(0,`div`,2),ST(1,3),Gl())}function ft$1(a,R){a&1&&(Wl(0,`div`,2),ST(1,3),Gl())}var vt$1=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
  border-radius: calc(var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--%NS%mat-fab-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-container-shape, var(--%NS%mat-sys-corner-large));
  color: var(--%NS%mat-fab-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--%NS%mat-fab-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--%NS%mat-fab-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-touch-target-size, 48px);
  display: var(--%NS%mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--%NS%mat-fab-small-container-color, var(--%NS%mat-sys-primary-container));
  border-radius: var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium));
  color: var(--%NS%mat-fab-small-foreground-color, var(--%NS%mat-sys-on-primary-container, inherit));
  box-shadow: var(--%NS%mat-fab-small-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--%NS%mat-fab-small-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--%NS%mat-fab-small-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-small-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-mini-fab .mat-focus-indicator::before {
  border-radius: calc(var(--%NS%mat-fab-small-container-shape, var(--%NS%mat-sys-corner-medium)) + calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-fab-small-touch-target-size, 48px);
  display: var(--%NS%mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--%NS%mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--%NS%mat-fab-small-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-state-layer-color, var(--%NS%mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-fab-small-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--%NS%mat-fab-extended-container-elevation-shadow, var(--%NS%mat-sys-level3));
  height: var(--%NS%mat-fab-extended-container-height, 56px);
  border-radius: var(--%NS%mat-fab-extended-container-shape, var(--%NS%mat-sys-corner-large));
  font-family: var(--%NS%mat-fab-extended-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-fab-extended-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-fab-extended-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-fab-extended-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--%NS%mat-fab-extended-hover-container-elevation-shadow, var(--%NS%mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--%NS%mat-fab-extended-focus-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--%NS%mat-fab-extended-pressed-container-elevation-shadow, var(--%NS%mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  margin-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`;var et$2=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Ht=(()=>{class a extends w$1{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=ht$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,e=this._appearance?et$2.get(this._appearance):null,k=et$2.get(t);e&&n.remove(...e),n.add(...k),this._appearance=t}static ɵfac=function(n){return new(n||a)};static ɵcmp=dw({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[rg],ngContentSelectors:rt$2,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,e){n&1&&(NT(ot$2),bg(0,`span`,0),ST(1),Wl(2,`span`,1),ST(3,1),Gl(),ST(4,2),cT(5,pt$1,2,0,`div`,2),bg(6,`span`,3)(7,`span`,4)),n&2&&(Vg(`mdc-button__ripple`,!e._isFab)(`mdc-fab__ripple`,e._isFab),jE(5),lT(e.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})}return a})();function ht$1(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var gt$1=new S$1(`mat-mdc-fab-default-options`,{providedIn:`root`,factory:()=>I});var I={color:`accent`};var $t=(()=>{class a extends w$1{_options=T$2(gt$1,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||I,this.color=this._options.color||I.color}static ɵfac=function(n){return new(n||a)};static ɵcmp=dw({type:a,selectors:[[`button`,`mat-mini-fab`,``],[`a`,`mat-mini-fab`,``],[`button`,`matMiniFab`,``],[`a`,`matMiniFab`,``]],hostAttrs:[1,`mdc-fab`,`mat-mdc-fab-base`,`mdc-fab--mini`,`mat-mdc-mini-fab`],exportAs:[`matButton`,`matAnchor`],features:[rg],ngContentSelectors:rt$2,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(n,e){n&1&&(NT(ot$2),bg(0,`span`,0),ST(1),Wl(2,`span`,1),ST(3,1),Gl(),ST(4,2),cT(5,ft$1,2,0,`div`,2),bg(6,`span`,3)(7,`span`,4)),n&2&&(Vg(`mdc-button__ripple`,!e._isFab)(`mdc-fab__ripple`,e._isFab),jE(5),lT(e.showProgress()?5:-1))},styles:[vt$1],encapsulation:2})}return a})();var qt=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=Xh({type:a});static ɵinj=Ia({imports:[at$1,A$2]})}return a})();var d=class{};function w(s){return s&&typeof s.connect==`function`&&!(s instanceof Bs)}var o=(function(s){return s[s.REPLACED=0]=`REPLACED`,s[s.INSERTED=1]=`INSERTED`,s[s.MOVED=2]=`MOVED`,s[s.REMOVED=3]=`REMOVED`,s})(o||{});var _=class{viewCacheSize=20;_viewCache=[];applyChanges(c,i,t,n,h){c.forEachOperation((e,f,E)=>{let a,l;if(e.previousIndex==null){let C=()=>t(e,f,E);a=this._insertView(C,E,i,n(e)),l=a?o.INSERTED:o.REPLACED}else E==null?(this._detachAndCacheView(f,i),l=o.REMOVED):(a=this._moveView(f,E,i,n(e)),l=o.MOVED);h&&h({context:a?.context,operation:l,record:e})})}detach(){for(let c of this._viewCache)c.destroy();this._viewCache=[]}_insertView(c,i,t,n){let h=this._insertViewFromCache(i,t);if(h){h.context.$implicit=n;return}let e=c();return t.createEmbeddedView(e.templateRef,e.context,e.index)}_detachAndCacheView(c,i){let t=i.detach(c);this._maybeCacheView(t,i)}_moveView(c,i,t,n){let h=t.get(c);return t.move(h,i),h.context.$implicit=n,h}_maybeCacheView(c,i){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(c);else{let t=i.indexOf(c);t===-1?c.destroy():i.remove(t)}}_insertViewFromCache(c,i){let t=this._viewCache.pop();return t&&i.insert(t,c),t||null}};var W=class{_box;_destroyed=new ee$2;_resizeSubject=new ee$2;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new N$4(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),i.unsubscribe(),this._elementObservables.delete(r)}}).pipe(Mn(e=>e.some(i=>i.target===r)),Iy({bufferSize:1,refCount:!0}),Yu(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var we=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=T$2(ie$2);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let n=i?.box||`content-box`;return this._observers.has(n)||this._observers.set(n,new W(n)),this._observers.get(n).observe(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=eo({token:t,factory:t.ɵfac})}return t})();var $e=[`notch`];var Ye=[`*`];var Me=[`iconPrefixContainer`];var Ee=[`textPrefixContainer`];var ze=[`iconSuffixContainer`];var Le=[`textSuffixContainer`];var Xe=[`textField`];var Ke=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]];var Je=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function et$1(t,r){t&1&&Tg(0,`span`,21)}function tt$1(t,r){if(t&1&&(as(0,`label`,20),ST(1,1),cT(2,et$1,1,0,`span`,21),ql()),t&2){let e=_T(2);wg(`floating`,e._shouldLabelFloat())(`monitorResize`,e._hasOutline())(`id`,e._labelId),Dg(`for`,e._control.disableAutomaticLabeling?null:e._control.id),jE(2),lT(!e.hideRequiredMarker&&e._control.required?2:-1)}}function it(t,r){if(t&1&&cT(0,tt$1,3,5,`label`,20),t&2)lT(_T()._hasFloatingLabel()?0:-1)}function nt$1(t,r){t&1&&Tg(0,`div`,7)}function ot$1(t,r){}function rt$1(t,r){if(t&1&&ig(0,ot$1,0,0,`ng-template`,13),t&2){_T(2);wg(`ngTemplateOutlet`,kT(1))}}function lt(t,r){if(t&1&&(as(0,`div`,9),cT(1,rt$1,1,1,null,13),ql()),t&2){let e=_T();wg(`matFormFieldNotchedOutlineOpen`,e._shouldLabelFloat()),jE(),lT(e._forceDisplayInfixLabel()?-1:1)}}function at(t,r){t&1&&(as(0,`div`,10,2),ST(2,2),ql())}function dt(t,r){t&1&&(as(0,`div`,11,3),ST(2,3),ql())}function mt(t,r){}function ct(t,r){if(t&1&&ig(0,mt,0,0,`ng-template`,13),t&2){_T();wg(`ngTemplateOutlet`,kT(1))}}function st(t,r){t&1&&(as(0,`div`,14,4),ST(2,4),ql())}function ft(t,r){t&1&&(as(0,`div`,15,5),ST(2,5),ql())}function ut(t,r){t&1&&Tg(0,`div`,16)}function pt(t,r){t&1&&(as(0,`div`,18),ST(1,6),ql())}function ht(t,r){if(t&1&&(as(0,`mat-hint`,22),nb(1),ql()),t&2){let e=_T(2);wg(`id`,e._hintLabelId),jE(),Gg(e.hintLabel)}}function bt(t,r){if(t&1&&(as(0,`div`,19),cT(1,ht,2,2,`mat-hint`,22),ST(2,7),Tg(3,`div`,23),ST(4,8),ql()),t&2){let e=_T();jE(),lT(e.hintLabel?1:-1)}}var G$1=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t,selectors:[[`mat-label`]]})}return t})();var Ae=new S$1(`MatError`);var xt=(()=>{class t{id=T$2(se$1).getId(`mat-mdc-error-`);static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(i,n){i&2&&Mg(`id`,n.id)},inputs:{id:`id`},features:[mb([{provide:Ae,useExisting:t}])]})}return t})();var U=(()=>{class t{align=`start`;id=T$2(se$1).getId(`mat-mdc-hint-`);static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(i,n){i&2&&(Mg(`id`,n.id),Dg(`align`,null),Vg(`mat-mdc-form-field-hint-end`,n.align===`end`))},inputs:{align:`align`,id:`id`}})}return t})();var Ie=new S$1(`MatPrefix`);var _t=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[mb([{provide:Ie,useExisting:t}])]})}return t})();var Be=new S$1(`MatSuffix`);var gt=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[mb([{provide:Be,useExisting:t}])]})}return t})();var qe=new S$1(`FloatingLabelParent`);var Re=(()=>{class t{_elementRef=T$2(to);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=T$2(we);_ngZone=T$2(ie$2);_parent=T$2(qe);_resizeSubscription=new B;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return vt(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(i,n){i&2&&Vg(`mdc-floating-label--float-above`,n.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return t})();function vt(t){let r=t;if(r.offsetParent!==null)return r.scrollWidth;let e=r.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var De=`mdc-line-ripple--active`;var O=`mdc-line-ripple--deactivating`;var Te=(()=>{class t{_elementRef=T$2(to);_cleanupTransitionEnd;constructor(){let e=T$2(ie$2),i=T$2(Pc);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(O),e.add(De)}deactivate(){this._elementRef.nativeElement.classList.add(O)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,n=i.contains(O);e.propertyName===`opacity`&&n&&i.remove(De,O)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return t})();var Oe=(()=>{class t{_elementRef=T$2(to);_ngZone=T$2(ie$2);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(`.mdc-floating-label`);i?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(i.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width=``:i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(i){return new(i||t)};static ɵcmp=dw({type:t,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(i,n){if(i&1&&Rg($e,5),i&2){let o;AT(o=OT())&&(n._notch=o.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(i,n){i&2&&Vg(`mdc-notched-outline--notched`,n.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:Ye,decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(i,n){i&1&&(NT(),bg(0,`div`,1),Wl(1,`div`,2,0),ST(3),Gl(),bg(4,`div`,3))},encapsulation:2})}return t})();var St=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(i){return new(i||t)};static ɵdir=gw({type:t})}return t})();var yt$1=new S$1(`MatFormField`);var Nt=new S$1(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ke=`fill`;var Ft=`auto`;var Pe=`fixed`;var Ct=`translateY(-50%)`;var He=(()=>{class t{_elementRef=T$2(to);_changeDetectorRef=T$2(L1);_platform=T$2(N$2);_idGenerator=T$2(se$1);_ngZone=T$2(ie$2);_defaults=T$2(Nt,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=x1(`iconPrefixContainer`);_textPrefixContainerSignal=x1(`textPrefixContainer`);_iconSuffixContainerSignal=x1(`iconSuffixContainer`);_textSuffixContainerSignal=x1(`textSuffixContainer`);_prefixSuffixContainers=me(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=O1(G$1);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Ni(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ft}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||ke;this._appearanceSignal.set(i)}_appearanceSignal=Ke$2(ke);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Pe}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Pe}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new ee$2;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=at$4();constructor(){let e=this._defaults,i=T$2(m);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ni$1(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=me(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let i=this._control,n=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(n+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(Dy([void 0,void 0]),Te$1(()=>[i.errorState,i.userAriaDescribedBy]),vy(),Mn(([[o,l],[x,k]])=>o!==x||l!==k)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(Yu(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),uy(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){V1({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=me(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let o=this._hintChildren?this._hintChildren.find(x=>x.align===`start`):null,l=this._hintChildren?this._hintChildren.find(x=>x.align===`end`):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),l&&e.push(l.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,n;if(i){let o=this._describedByIds||e;n=e.concat(i.filter(l=>l&&!o.includes(l)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,l=e?.getBoundingClientRect().width??0,x=i?.getBoundingClientRect().width??0,k=n?.getBoundingClientRect().width??0,je=o?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Ct} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${l+x}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,l+x+k+je]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static ɵfac=function(i){return new(i||t)};static ɵcmp=dw({type:t,selectors:[[`mat-form-field`]],contentQueries:function(i,n,o){if(i&1&&(kg(o,n._labelChild,G$1,5),Og(o,St,5)(o,Ie,5)(o,Be,5)(o,Ae,5)(o,U,5)),i&2){RT();let l;AT(l=OT())&&(n._formFieldControl=l.first),AT(l=OT())&&(n._prefixChildren=l),AT(l=OT())&&(n._suffixChildren=l),AT(l=OT())&&(n._errorChildren=l),AT(l=OT())&&(n._hintChildren=l)}},viewQuery:function(i,n){if(i&1&&(Lg(n._iconPrefixContainerSignal,Me,5)(n._textPrefixContainerSignal,Ee,5)(n._iconSuffixContainerSignal,ze,5)(n._textSuffixContainerSignal,Le,5),Rg(Xe,5)(Me,5)(Ee,5)(ze,5)(Le,5)(Re,5)(Oe,5)(Te,5)),i&2){RT(4);let o;AT(o=OT())&&(n._textField=o.first),AT(o=OT())&&(n._iconPrefixContainer=o.first),AT(o=OT())&&(n._textPrefixContainer=o.first),AT(o=OT())&&(n._iconSuffixContainer=o.first),AT(o=OT())&&(n._textSuffixContainer=o.first),AT(o=OT())&&(n._floatingLabel=o.first),AT(o=OT())&&(n._notchedOutline=o.first),AT(o=OT())&&(n._lineRipple=o.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(i,n){i&2&&Vg(`mat-mdc-form-field-label-always-float`,n._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,n._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,n._hasIconSuffix)(`mat-form-field-invalid`,n._control.errorState)(`mat-form-field-disabled`,n._control.disabled)(`mat-form-field-autofilled`,n._control.autofilled)(`mat-form-field-appearance-fill`,n.appearance==`fill`)(`mat-form-field-appearance-outline`,n.appearance==`outline`)(`mat-form-field-hide-placeholder`,n._hasFloatingLabel()&&!n._shouldLabelFloat())(`mat-primary`,n.color!==`accent`&&n.color!==`warn`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`ng-untouched`,n._shouldForward(`untouched`))(`ng-touched`,n._shouldForward(`touched`))(`ng-pristine`,n._shouldForward(`pristine`))(`ng-dirty`,n._shouldForward(`dirty`))(`ng-valid`,n._shouldForward(`valid`))(`ng-invalid`,n._shouldForward(`invalid`))(`ng-pending`,n._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[mb([{provide:yt$1,useExisting:t},{provide:qe,useExisting:t}])],ngContentSelectors:Je,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(i,n){if(i&1&&(NT(Ke),ig(0,it,1,1,`ng-template`,null,0,Ob),as(2,`div`,6,1),Sg(`click`,function(l){return n._control.onContainerClick(l)}),cT(4,nt$1,1,0,`div`,7),as(5,`div`,8),cT(6,lt,2,2,`div`,9),cT(7,at,3,0,`div`,10),cT(8,dt,3,0,`div`,11),as(9,`div`,12),cT(10,ct,1,1,null,13),ST(11),ql(),cT(12,st,3,0,`div`,14),cT(13,ft,3,0,`div`,15),ql(),cT(14,ut,1,0,`div`,16),ql(),as(15,`div`,17),cT(16,pt,2,0,`div`,18)(17,bt,5,1,`div`,19),ql()),i&2){let o;jE(2),Vg(`mdc-text-field--filled`,!n._hasOutline())(`mdc-text-field--outlined`,n._hasOutline())(`mdc-text-field--no-label`,!n._hasFloatingLabel())(`mdc-text-field--disabled`,n._control.disabled)(`mdc-text-field--invalid`,n._control.errorState),jE(2),lT(!n._hasOutline()&&!n._control.disabled?4:-1),jE(2),lT(n._hasOutline()?6:-1),jE(),lT(n._hasIconPrefix?7:-1),jE(),lT(n._hasTextPrefix?8:-1),jE(2),lT(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),jE(2),lT(n._hasTextSuffix?12:-1),jE(),lT(n._hasIconSuffix?13:-1),jE(),lT(n._hasOutline()?-1:14),jE(),Vg(`mat-mdc-form-field-subscript-dynamic-size`,n.subscriptSizing===`dynamic`);let l=n._getSubscriptMessageType();jE(),lT((o=l)===`error`?16:o===`hint`?17:-1)}},dependencies:[Re,Oe,ei$1,Te,U],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})}return t})();var ei=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=Xh({type:t});static ɵinj=Ia({imports:[ze$1,He,A$2]})}return t})();var ii=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}isSignalErrorState(e){if(!e)return!1;let i=e().invalid(),n=e().touched();return i&&n}static ɵfac=function(i){return new(i||t)};static ɵprov=eo({token:t,factory:t.ɵfac})}return t})();var Qe=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(r,e,i,n,o){this._defaultMatcher=r,this._parentFormGroup=i,this._parentForm=n,this._stateChanges=o,e?Gn(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let r=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==r&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(r){if(this.formField&&r?.isSignalErrorState)return r.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,i=this.ngControl?this.ngControl.control:null;return r?.isErrorState(i,e)??!1}};function V(i){return Error(`Unable to find icon with the name "${i}"`)}function X(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function q$1(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Y(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var a$2=class{url;svgText;options;svgElement=null;constructor(l,t,e){this.url=l,this.svgText=t,this.options=e}};var K=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=[`material-icons`,`mat-ligature-font`];constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new a$2(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(z$1.HTML,n);if(!r)throw Y(n);let s=w$2(r);return this._addSvgIconConfig(t,e,new a$2(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new a$2(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(z$1.HTML,e);if(!o)throw Y(e);let r=w$2(o);return this._addSvgIconSetConfig(t,new a$2(``,r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(z$1.RESOURCE_URL,t);if(!e)throw q$1(t);let n=this._cachedIconsByUrl.get(e);return n?Lm(C(n)):this._loadSvgIconFromConfig(new a$2(t,null)).pipe(Ku(o=>this._cachedIconsByUrl.set(e,o)),Te$1(o=>C(o)))}getNamedSvgIcon(t,e=``){let n=J(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):Km(V(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Lm(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Te$1(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return Lm(n);return Um(e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(qu(s=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(z$1.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(f)),Lm(null)})))).pipe(Te$1(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw V(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Ku(e=>t.svgText=e),Te$1(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Lm(null):this._fetchIcon(t).pipe(Ku(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(w$2(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(w$2(`<svg></svg>`)),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o];r!==`id`&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw X();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(z$1.RESOURCE_URL,e);if(!r)throw q$1(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let h=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(Te$1(f=>w$2(f)),gy(()=>this._inProgressUrlFetches.delete(r)),zs());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(J(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return Z(o)?new a$2(o.url,null,o.options):new a$2(o,null)}}static ɵfac=function(e){return new(e||i)(de$1(Sr,8),de$1(ro),de$1(Fr,8),de$1(ut$4))};static ɵprov=K$2({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function C(i){return i.cloneNode(!0)}function J(i,l){return i+`:`+l}function Z(i){return!!(i.url&&i.options)}var tt=[`*`];var et=new S$1(`MAT_ICON_DEFAULT_OPTIONS`);var nt=new S$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let i=T$2(Fr),l=i?i.location:null;return{getPathname:()=>l?l.pathname+l.search:``}}});var G=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var ot=G.map(i=>`[${i}]`).join(`, `);var rt=/^url\(['"]?#(.*?)['"]?\)$/;var wt=(()=>{class i{_elementRef=T$2(to);_iconRegistry=T$2(K);_location=T$2(nt);_errorHandler=T$2(ut$4);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=B.EMPTY;constructor(){let t=T$2(new dm(`aria-hidden`),{optional:!0}),e=T$2(et,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ot),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)G.forEach(r=>{let s=e[o],h=s.getAttribute(r),f=h?h.match(rt):null;if(f){let p=n.get(s);p||(p=[],n.set(s,p)),p.push({name:r,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(Nn(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=dw({type:i,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(e,n){e&2&&(Dg(`data-mat-icon-type`,n._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,n._svgName||n.fontIcon)(`data-mat-icon-namespace`,n._svgNamespace||n.fontSet)(`fontIcon`,n._usingFontIcon()?n.fontIcon:null),WT(n.color?`mat-`+n.color:``),Vg(`mat-icon-inline`,n.inline)(`mat-icon-no-color`,n.color!==`primary`&&n.color!==`accent`&&n.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,F1],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:tt,decls:1,vars:0,template:function(e,n){e&1&&(NT(),ST(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})}return i})();var yt=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=Xh({type:i});static ɵinj=Ia({imports:[A$2]})}return i})();function L(e){return c=>c.pipe(Ku({next:e.next,complete:e.complete}),qu(n=>(e.error(n),Rt$1)),e.finalize?gy(e.finalize):n=>n)}function T(e,c){let n=c?.injector??T$2(fe),o=new ee$2,t=e(o).subscribe();n.get(pe).onDestroy(()=>t.unsubscribe());let l=(r,M)=>{if(v(r))return o.next(r),{destroy:ht$4};let w=z(),s=M?.injector??w??n;if(typeof r==`function`){let i=Ni$1(()=>{let D=r();le$1(()=>o.next(D))},{injector:s});return t.add({unsubscribe:()=>i.destroy()}),i}let a=r.subscribe(i=>o.next(i));return t.add(a),s!==n&&s.get(pe).onDestroy(()=>a.unsubscribe()),{destroy:()=>a.unsubscribe()}};return l.destroy=t.unsubscribe.bind(t),l}function v(e){return typeof e!=`function`&&!Jm(e)}function z(){try{return T$2(fe)}catch{return}}var t=null;function a$1(p){return t||(t=p.call.get(`si6_app_bootstrap`).then(o=>o?.message??o)),t}function l(){t=null,i$1()}var e=null;function r(t){return e||(e=t.call.get(`si6_reference_data`).then(n=>n?.message??n)),e}function a(){e=null}var q=Kt$1({providedIn:`root`},Yi({notifier:!0,usersLoading:!0,users:[],userFields:[`name`,`email`,`first_name`,`full_name`,`username`,`mobile_no`,`location`,`user_image`,`user_type`],userLoading:!0,user:void 0,erpNextRolesLoading:!0,erpNextRoles:[],erpNextRoleFields:[`role_name`],selected_user:void 0,si6RolesLoading:!0,si6Roles:[],si6RoleFields:[`name`,`role`,`systems`,`operations`,`views`],si6Role:void 0}),Qi(s=>({currentUserRole:me(()=>{let i=s.user()?.location??`guest`;return s.si6Roles().find(g=>g.role===i)}),authorized:me(()=>[`a@a.com`,`abees81@gmail.com`,`firdaus.ali.nita@gmail.com`,`md.alifnita@gmail.com`,`firdaus.ali.barkati@gmail.com`,`salrashdi@gmail.com`].includes(s.user()?.email))})),Qi(s=>({systems:me(()=>(s.currentUserRole()?.systems??[]).map(i=>i.system)),operations:me(()=>(s.currentUserRole()?.operations??[]).map(i=>i.operation)),views:me(()=>(s.currentUserRole()?.views??[]).map(i=>i.page))})),$t$2((s,i=T$2(Rs),a$4=T$2(P$1),g=T$2(Ce))=>({login:async(e,o)=>{let p={username:e,password:o,device:`mobile`};a$4.resetReadCaches(),a(),l();try{await i.auth.loginWithUsernamePassword(p)}finally{l()}a$4.resetReadCaches(),Gi$1(s,L=>({notifier:!L.notifier}))},logout:async()=>{Gi$1(s,{user:void 0}),a$4.resetReadCaches(),a(),l();try{await i.auth.logout()}catch{}finally{l()}g.navigateByUrl(`/home`),Gi$1(s,e=>({user:void 0}))},fetchUsers:async()=>i.db.getDocList(`User`,{fields:s.userFields(),orderBy:{field:`modified`,order:`desc`},limit:1e4,asDict:!0}),fetchUser:async()=>{try{let e=await i.auth.getLoggedInUser();return await i.db.getDoc(`User`,e)}catch{return}},createUser:async e=>{let o=await i.db.createDoc(`User`,e);return Gi$1(s,{users:[o,...s.users()]}),o},updateUser:async e=>{let o=await i.db.updateDoc(`User`,e.name,e);return Gi$1(s,{users:[o,...s.users().filter(L=>L.name!==o.name)]}),o},list_permissions:async()=>i.db.getDocList(`User Permission`,{fields:[`name`],limit:1e4,asDict:!0}),delete_user_permissions:async()=>{let e=await i.db.getDocList(`User Permission`,{fields:[`name`],limit:1e4,asDict:!0});for(let o=0;o<e.length;o++)await a$4.delete(`User Permission`,e[o].name)},setUser:e=>{Gi$1(s,{user:e})},setSelectedUser:e=>{Gi$1(s,{selected_user:e})},setSi6Role:e=>{Gi$1(s,{si6Role:e})},reload:()=>{l(),Gi$1(s,e=>({notifier:!e.notifier}))},loadBootstrap:T(Cm(Ku(()=>Gi$1(s,{usersLoading:!0,userLoading:!0,erpNextRolesLoading:!0,si6RolesLoading:!0})),Ru(()=>Le$1(a$1(i))),L({next:e=>Gi$1(s,{usersLoading:!1,users:e?.users??[],userLoading:!1,user:e?.current_user,erpNextRolesLoading:!1,erpNextRoles:e?.erpnext_roles??[],si6RolesLoading:!1,si6Roles:e?.si6_roles??[]}),error:()=>Gi$1(s,{usersLoading:!1,userLoading:!1,erpNextRolesLoading:!1,si6RolesLoading:!1}),finalize:()=>{}}))),loadUsers:T(Cm(Ku(()=>Gi$1(s,{usersLoading:!0})),Ru(()=>Le$1(i.db.getDocList(`User`,{fields:s.userFields(),orderBy:{field:`full_name`,order:`asc`},limit:1e4,asDict:!0}))),L({next:e=>Gi$1(s,{usersLoading:!1,users:e}),error:e=>{Gi$1(s,{usersLoading:!1,users:[]})},finalize:()=>Gi$1(s,{usersLoading:!1,users:[]})}))),loadUser:T(Cm(Ku(()=>Gi$1(s,{userLoading:!0})),Ru(()=>Le$1(i.auth.getLoggedInUser()).pipe(Ru(e=>Le$1(i.db.getDoc(`User`,e))),qu(e=>Lm(void 0)))),L({next:e=>Gi$1(s,{userLoading:!1,user:e}),error:e=>{Gi$1(s,{userLoading:!1,user:void 0})},finalize:()=>Gi$1(s,{userLoading:!1,user:void 0})}))),loadRoles:T(Cm(Ku(()=>Gi$1(s,{erpNextRolesLoading:!0})),Ru(()=>Le$1(i.db.getDocList(`Role`,{fields:s.erpNextRoleFields(),orderBy:{field:`modified`,order:`desc`},limit:1e4,asDict:!0}))),L({next:e=>Gi$1(s,{erpNextRolesLoading:!1,erpNextRoles:e}),error:e=>{Gi$1(s,{erpNextRolesLoading:!1,erpNextRoles:[]})},finalize:()=>Gi$1(s,{erpNextRolesLoading:!1,erpNextRoles:[]})}))),loadcurrentUserRoles:T(Cm(Mn(()=>s.si6Roles().length===0),Mn(e=>!!e),Ku(()=>Gi$1(s,{si6RolesLoading:!0})),Ru(()=>Le$1(i.db.getDocList(`Permissions`,{fields:[`name`],orderBy:{field:`name`,order:`asc`},limit:1e4,asDict:!0}))),Ru(e=>e.length>0?Um(e.map(o=>Le$1(a$4.fetch(`Permissions`,o.name)))):Lm([])),L({next:e=>Gi$1(s,{si6RolesLoading:!1,si6Roles:e}),error:e=>{Gi$1(s,{si6RolesLoading:!1,si6Roles:[]})},finalize:()=>Gi$1(s,{si6RolesLoading:!1,si6Roles:[]})})))})),Zi({onInit({loadBootstrap:s,loadcurrentUserRoles:i,notifier:a,user:g}){s(a),i(g)},onDestroy(s){console.log(`On destroy`)}}));var y=Kt$1({providedIn:`root`},Yi({title:`Idarah`,version:`1.0.21`}));var N=(()=>{class i{constructor(){this.versionStore=T$2(y),this.modalCtrl=T$2(Va),this.version=this.versionStore.version,this.title=this.versionStore.title}async cancelModal(){await this.modalCtrl.dismiss(null,`cancel`)}static{this.ɵfac=function(o){return new(o||i)}}static{this.ɵcmp=dw({type:i,selectors:[[`app-about`]],decls:43,vars:1,consts:[[`color`,`light`,1,`ion-padding-horizontal`],[`slot`,`end`],[`color`,`danger`,3,`click`],[2,`--background`,`linear-gradient(0deg, rgb(233, 232, 222) 0%, #faf9f5 100%)`],[1,`px-12`,`text-xs`],[1,`flex`,`justify-center`],[`src`,`assets/imgs/sic.svg`,`alt`,`Strategic Innovation Center`,1,`w-96`,`motion-preset-confetti`],[`size`,`8`],[1,`text-xs`,`first-letter:text-2xl`,`first-letter:font-extrabold`],[`size`,`4`,1,`flex`,`justify-end`,`items-center`],[`src`,`assets/imgs/idarah.svg`,`alt`,`Idarah`,1,`w-20`],[1,`p-0`,`px-4`,`m-0`,`mt-2`,`text-xs`,`text-center`,`font-poppins`],[`size`,`6`,1,`pt-12`]],template:function(o,l){o&1&&(as(0,`ion-header`)(1,`ion-toolbar`,0)(2,`ion-buttons`,1)(3,`ion-button`,2),Sg(`click`,function(){return l.cancelModal()}),as(4,`ion-label`),nb(5,`Cancel`),ql()()(),as(6,`ion-title`),nb(7,`About The App`),ql()()(),as(8,`ion-content`,3)(9,`ion-grid`,4)(10,`ion-row`)(11,`ion-col`)(12,`div`,5),Tg(13,`img`,6),ql()()(),as(14,`ion-row`)(15,`ion-col`,7)(16,`p`,8),nb(17,` Idarah is a software product developed by Strategic Innovation Center (SIC), an Omani center specialized in strategic innovation, established in early 2022 and based in Muscat Governorate. `),ql()(),as(18,`ion-col`,9),Tg(19,`img`,10),as(20,`p`,11),nb(21),ql()(),as(22,`ion-col`,12)(23,`p`),nb(24,`Strategic Innovation Center`),ql(),as(25,`p`),nb(26,`P.O BOX 1609`),ql(),as(27,`p`),nb(28,`POSTAL CODE 123`),ql(),as(29,`p`),nb(30,`Building No: 1/94`),ql(),as(31,`p`),nb(32,`Floor No: 6`),ql(),as(33,`p`),nb(34,`Office No: 2`),ql(),as(35,`p`),nb(36,`Way No: 319`),ql(),as(37,`p`),nb(38,`Sultan Qaboos Grand Mosque Road`),ql(),as(39,`p`),nb(40,`Ghala Hights`),ql(),as(41,`p`),nb(42,`Muscat, Sultanate of Oman`),ql()()()()()),o&2&&(jE(21),Zl(` `,l.version(),` `))},dependencies:[Ng,Sb,Sg$1,au,Bu,xb,Pg,_u,$u,Su],encapsulation:2})}}return i})();export{m as $,tt$2 as A,W$2 as At,Ut as B,u as Bt,d as C,se$1 as Ct,Ht as D,j$2 as Dt,$t as E,h$1 as Et,Kt as F,I$1 as Ft,gt$2 as G,_t$1 as H,M as I,h$3 as It,oe as J,lt$2 as K,Nt$1 as L,k$2 as Lt,F as M,f as Mt,G$2 as N,h$2 as Nt,at$1 as O,N$2 as Ot,Gt as P,tt$4 as Pt,O$1 as Q,Qe$1 as R,l$2 as Rt,_ as S,qe$1 as St,w as T,wt$1 as Tt,at$2 as U,Y$1 as V,ft$2 as W,ut$2 as X,re as Y,A$2 as Z,ei as _,ft$3 as _t,r as a,Is as at,xt as b,mt$3 as bt,T as c,Oi as ct,G$1 as d,S as dt,$e$1 as et,He as f,Ue as ft,_t as g,et$3 as gt,U as h,b as ht,a as i,Hs as it,ut$1 as j,at$4 as jt,qt as k,Q as kt,wt as l,Ot as lt,St as m,ae as mt,y as n,E$2 as nt,a$1 as o,Ke$1 as ot,Qe as p,Us as pt,mt$2 as q,q as r,F$1 as rt,L as s,Ni as st,N as t,Ct$1 as tt,yt as u,Pt as ut,gt as v,ie$1 as vt,o as w,te$1 as wt,yt$1 as x,oe$1 as xt,ii as y,ls as yt,U$1 as z,s$1 as zt};