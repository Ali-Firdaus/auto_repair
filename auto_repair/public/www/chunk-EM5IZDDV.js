import{a as te}from"./chunk-Y43YA62M.js";import{a as _}from"./chunk-YACOWXZI.js";import"./chunk-3HFTHT54.js";import"./chunk-VDQ57SIX.js";import{a as ee,b as h}from"./chunk-2LMNYCU2.js";import{a as Z}from"./chunk-COWHRKMW.js";import{d as X}from"./chunk-XS6RNVN7.js";import{e as Y}from"./chunk-KJYZR53T.js";import"./chunk-M6X2SD2S.js";import"./chunk-JQQIOLSY.js";import"./chunk-BXXAS6LD.js";import"./chunk-PZOEXQA6.js";import"./chunk-NORL4WRD.js";import{b as W}from"./chunk-VZVV52TZ.js";import"./chunk-VMAANO2P.js";import"./chunk-6VFHCGLY.js";import{a as U}from"./chunk-EQ42IBSI.js";import"./chunk-PCP5D4Z7.js";import"./chunk-BE2YH2NE.js";import"./chunk-QUJFQN2Y.js";import"./chunk-3J4O3BJU.js";import"./chunk-K2BXXROP.js";import"./chunk-VYXDLD6Y.js";import"./chunk-PKG65ASR.js";import"./chunk-2F7YH7LB.js";import"./chunk-K5OGNUY6.js";import"./chunk-VUOWVREQ.js";import"./chunk-2SXRMKEE.js";import"./chunk-UN65PZGM.js";import"./chunk-CKP3SGE2.js";import"./chunk-NO3R2OMK.js";import"./chunk-J2JSUD32.js";import"./chunk-ZS3WZPFR.js";import"./chunk-MTHZ7MWU.js";import"./chunk-WI5MSH4N.js";import{c as V}from"./chunk-ZS3THY5D.js";import{s as H,z as J}from"./chunk-7ZACCMER.js";import"./chunk-6XS3LWDO.js";import"./chunk-XB77Q4ZK.js";import{$ as O,M as R,U as j,X as $,ea as Q,qa as q,ra as K,va as G}from"./chunk-AF2COOOT.js";import"./chunk-TJYG3Q5B.js";import"./chunk-LPOYRDVN.js";import{$b as E,Hb as L,Ib as F,Jb as x,Jc as g,Kc as u,Lb as v,Mb as y,Nb as c,Ob as n,Pb as a,Qb as s,Rc as d,Yc as z,Za as r,_c as A,bc as S,ea as m,jc as N,kc as P,nb as f,o as M,p as D,pc as p,qc as B,rc as b,u as I,wa as T,z as k}from"./chunk-42UVW3AB.js";import"./chunk-XY4JVPMI.js";import"./chunk-3A2TMJPV.js";import"./chunk-FK6H3RFT.js";import"./chunk-4LAIL3YS.js";import"./chunk-3VUJARFJ.js";import"./chunk-U4S3RQJB.js";import"./chunk-TFAIVKUR.js";import"./chunk-YUNOCBLG.js";import"./chunk-YJ5TA4PT.js";import"./chunk-2NIBOUWM.js";import"./chunk-I547WOKC.js";import"./chunk-NRC4DAUY.js";import"./chunk-OWRIGUTI.js";import"./chunk-NMFL75IO.js";import"./chunk-FIRXXYNY.js";var ie=(()=>{class i{constructor(){this.itemsListStore=m(_),this.item_name=d(()=>this.itemsListStore.items().find(t=>t.item_code===this.barcode()?.parent)?.item_name),this.barcode=z.required()}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=f({type:i,selectors:[["app-barcode"]],inputs:{barcode:[1,"barcode"]},decls:4,vars:7,consts:[[2,"text-align","center"],[1,"text-xs","text-black","font-bold","block","mb-1"],[3,"bc-format","bc-width","bc-height","bc-font-size","bc-value","bc-display-value"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"span",1),p(2),a(),s(3,"ngx-barcode6",2),a()),e&2&&(r(2),b(" ",o.item_name()," "),r(),c("bc-format","EAN13")("bc-width",2)("bc-height",35)("bc-font-size",14)("bc-value",o.barcode().barcode)("bc-display-value",!0))},dependencies:[Z,h],encapsulation:2,changeDetection:0})}}return i})();var ne=["page"];function ae(i,l){i&1&&(n(0,"ion-row")(1,"ion-col",9),s(2,"mat-spinner"),a()())}function re(i,l){if(i&1&&s(0,"app-barcode",12),i&2){let t=l.$implicit;c("barcode",t)}}function se(i,l){if(i&1&&(n(0,"div",10,0),v(2,re,1,1,"app-barcode",12,x),a()),i&2){let t=l.$index,e=S(2);r(2),y(e.paged_items()[t])}}function me(i,l){i&1&&(s(0,"app-info",11),g(1,"translate")),i&2&&c("instructions",u(1,1,"support.inventory-and-stores-management.no-barcodes-available"))}function de(i,l){if(i&1&&(n(0,"ion-row")(1,"ion-col"),v(2,se,4,0,"div",10,x,!1,me,2,3,"app-info",11),a()()),i&2){let t=S();r(2),y(t.pages())}}var Ne=(()=>{class i{constructor(){this.crudStore=m(U),this.itemsListStore=m(_),this.loadingCtrl=m(K),this.alertCtrl=m(q),this.items_per_page=T(22),this.items=this.itemsListStore.items,this.pagesElementsRefs=A("page"),this.pagesElements=d(()=>this.pagesElementsRefs().map(t=>t)),this.barcodes=X({defaultValue:[],params:this.items,stream:({params:t})=>k(t.map(e=>e?M(this.crudStore.fetch("Item",e.item_code)):D(void 0))).pipe(I(e=>e.filter(o=>(o?.barcodes??[]).length>0).map(o=>o?.barcodes??[]).flat()))}),this.pages=d(()=>{let t=Math.ceil(this.barcodes.value().length/(this.items_per_page()||1));return Array.from(Array(t).keys())}),this.paged_items=d(()=>J([...this.barcodes.value()],this.items_per_page())),this.loading=d(()=>this.barcodes.isLoading()||this.itemsListStore.itemsLoading())}async print(){let t=await this.loadingCtrl.create({message:"Preparing print..."});await t.present();try{let e=this.pagesElements(),o=window.open("","_blank","width=800,height=600");if(!o)throw new Error("Could not open print window");let w=e.map(C=>C.nativeElement.outerHTML).join("");o.document.open(),o.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Barcodes</title>

          <style>
            @page {
              margin: 0;
            }

            * {
              box-sizing: border-box;
            }

            html,
            body {
              margin: 0;
              padding: 0;
            }

            .print-page {
              padding: 4mm;

              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 2mm;
              align-content: start;

              break-after: page;
              page-break-after: always;
            }

            .print-page:last-child {
              break-after: auto;
              page-break-after: auto;
            }

            @media print {
              body {
                margin: 0;
              }
            }
          </style>
        </head>

        <body>
          ${w}
        </body>
      </html>
    `),o.document.close(),await new Promise(C=>setTimeout(C,500)),o.focus(),o.print(),o.onafterprint=()=>{o.close()},await t.dismiss()}catch(e){console.error(e),await t.dismiss(),await(await this.alertCtrl.create({header:"Action Failed",buttons:["OK"],message:"Could not print barcodes!"})).present()}}async download(){let t=await this.loadingCtrl.create({message:"Loading"});await t.present();try{let e=`barcodes-${new Date().toISOString()}`;await H(this.pagesElements(),e),await t.dismiss()}catch(e){console.log(e),await(await this.alertCtrl.create({header:"Action Failed",buttons:["OK"],message:"Could not download PDF!"})).present(),await t.dismiss()}}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=f({type:i,selectors:[["app-barcodes"]],viewQuery:function(e,o){e&1&&N(o.pagesElementsRefs,ne,5),e&2&&P()},decls:20,vars:10,consts:[["page",""],[1,"mt-6","w-full","max-w-3xl","mx-auto"],["size","6"],[1,"p-0","pb-2","text-3xl","font-bold","text-black"],["size","6",1,"flex","justify-end"],["color","success","shape","round",1,"text-xs",3,"click"],["slot","start","name","document-attach","size","small"],[1,"text-xs"],["slot","start","name","document-text-outline","size","small"],[1,"flex","justify-center","items-center"],[1,"w-full","max-h-[297mm]","min-h-[130mm]","p-4","my-6","grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-3","gap-2","content-start","border-2","border-dotted","border-gray-400"],[3,"instructions"],[3,"barcode"]],template:function(e,o){e&1&&(n(0,"div",1)(1,"ion-grid")(2,"ion-row")(3,"ion-col",2)(4,"p",3),p(5),g(6,"translate"),a()(),n(7,"ion-col",4)(8,"ion-button",5),E("click",function(){return o.download()}),s(9,"ion-icon",6),n(10,"ion-label",7),p(11),g(12,"translate"),a()(),n(13,"ion-button",5),E("click",function(){return o.print()}),s(14,"ion-icon",8),n(15,"ion-label",7),p(16),g(17,"translate"),a()()()(),L(18,ae,3,0,"ion-row")(19,de,5,1,"ion-row"),a()()),e&2&&(r(5),b(" ",u(6,4,"support.inventory-and-stores-management.barcodes")," "),r(6),B(u(12,6,"support.common.download")),r(5),B(u(17,8,"print")),r(2),F(o.loading()?18:19))},dependencies:[R,G,O,$,Q,j,te,ie,W,h,ee,Y,V],encapsulation:2,changeDetection:0})}}return i})();export{Ne as BarcodesComponent};
