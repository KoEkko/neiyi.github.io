import{s as Ie,f as Se,i as Ce,b as Te,a as Ge,u as Ke,r as L,c as U,d as e,w as Q,o as we,e as Xe,g as qe,p as Je,h as Qe,j as je,k as ne,l as ke,m as H,n as D,q as u,t as de,v as m,x as te,y as W,z as Y,A as f,E as me,B as Ye,C as se,T as _e,D as ee,F as Ze,G as Ee,H as Oe,I as Ne,J as et,K as tt,_ as $e,L as st,M as nt,N as at,O as ot,P as rt,Q as it,R as E,S as lt,U as ct,V as ut}from"./index-8cbf9047.js";import{N as ft,S as dt,A as mt,a as _t,b as O,c as ve}from"./autoplay-81069beb.js";var vt=typeof global=="object"&&global&&global.Object===Object&&global;const gt=vt;var pt=typeof self=="object"&&self&&self.Object===Object&&self,ht=gt||pt||Function("return this")();const xe=ht;var bt=xe.Symbol;const ae=bt;var Me=Object.prototype,yt=Me.hasOwnProperty,It=Me.toString,Z=ae?ae.toStringTag:void 0;function St(t){var r=yt.call(t,Z),s=t[Z];try{t[Z]=void 0;var n=!0}catch{}var l=It.call(t);return n&&(r?t[Z]=s:delete t[Z]),l}var Ct=Object.prototype,Tt=Ct.toString;function wt(t){return Tt.call(t)}var jt="[object Null]",kt="[object Undefined]",ge=ae?ae.toStringTag:void 0;function Et(t){return t==null?t===void 0?kt:jt:ge&&ge in Object(t)?St(t):wt(t)}function Ot(t){return t!=null&&typeof t=="object"}var Nt="[object Symbol]";function $t(t){return typeof t=="symbol"||Ot(t)&&Et(t)==Nt}var xt=/\s/;function Mt(t){for(var r=t.length;r--&&xt.test(t.charAt(r)););return r}var Bt=/^\s+/;function Lt(t){return t&&t.slice(0,Mt(t)+1).replace(Bt,"")}function oe(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var pe=0/0,At=/^[-+]0x[0-9a-f]+$/i,Pt=/^0b[01]+$/i,Rt=/^0o[0-7]+$/i,Ht=parseInt;function he(t){if(typeof t=="number")return t;if($t(t))return pe;if(oe(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=oe(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=Lt(t);var s=Pt.test(t);return s||Rt.test(t)?Ht(t.slice(2),s?2:8):At.test(t)?pe:+t}var Vt=function(){return xe.Date.now()};const le=Vt;var Wt="Expected a function",zt=Math.max,Ut=Math.min;function Dt(t,r,s){var n,l,c,g,a,y,S=0,C=!1,j=!1,k=!0;if(typeof t!="function")throw new TypeError(Wt);r=he(r)||0,oe(s)&&(C=!!s.leading,j="maxWait"in s,c=j?zt(he(s.maxWait)||0,r):c,k="trailing"in s?!!s.trailing:k);function N(i){var p=n,h=l;return n=l=void 0,S=i,g=t.apply(h,p),g}function B(i){return S=i,a=setTimeout($,r),C?N(i):g}function A(i){var p=i-y,h=i-S,_=r-p;return j?Ut(_,c-h):_}function T(i){var p=i-y,h=i-S;return y===void 0||p>=r||p<0||j&&h>=c}function $(){var i=le();if(T(i))return V(i);a=setTimeout($,A(i))}function V(i){return a=void 0,k&&n?N(i):(n=l=void 0,g)}function F(){a!==void 0&&clearTimeout(a),S=0,n=y=l=a=void 0}function v(){return a===void 0?g:V(le())}function d(){var i=le(),p=T(i);if(n=arguments,l=this,y=i,p){if(a===void 0)return B(y);if(j)return clearTimeout(a),a=setTimeout($,r),N(y)}return a===void 0&&(a=setTimeout($,r)),g}return d.cancel=F,d.flush=v,d}var Ft="Expected a function";function be(t,r,s){var n=!0,l=!0;if(typeof t!="function")throw new TypeError(Ft);return oe(s)&&(n="leading"in s?!!s.leading:n,l="trailing"in s?!!s.trailing:l),Dt(t,r,{leading:n,maxWait:r,trailing:l})}const Gt=(t,r,s)=>Se(t.subTree).filter(c=>{var g;return Ce(c)&&((g=c.type)==null?void 0:g.name)===r&&!!c.component}).map(c=>c.component.uid).map(c=>s[c]).filter(c=>!!c),Kt=(t,r)=>{const s={},n=Ie([]);return{children:n,addChild:g=>{s[g.uid]=g,n.value=Gt(t,r,s)},removeChild:g=>{delete s[g],n.value=n.value.filter(a=>a.uid!==g)}}},Xt=Te({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),qt={change:(t,r)=>[t,r].every(Ge)},Be=Symbol("carouselContextKey"),ye=300,Jt=(t,r,s)=>{const{children:n,addChild:l,removeChild:c}=Kt(je(),"ElCarouselItem"),g=Ke(),a=L(-1),y=L(null),S=L(!1),C=L(),j=L(0),k=L(!0),N=U(()=>t.arrow!=="never"&&!e(T)),B=U(()=>n.value.some(o=>o.props.label.toString().length>0)),A=U(()=>t.type==="card"),T=U(()=>t.direction==="vertical"),$=U(()=>t.height!=="auto"?{height:t.height}:{height:`${j.value}px`,overflow:"hidden"}),V=be(o=>{h(o)},ye,{trailing:!0}),F=be(o=>{re(o)},ye),v=o=>k.value?a.value<=1?o<=1:o>1:!0;function d(){y.value&&(clearInterval(y.value),y.value=null)}function i(){t.interval<=0||!t.autoplay||y.value||(y.value=setInterval(()=>p(),t.interval))}const p=()=>{a.value<n.value.length-1?a.value=a.value+1:t.loop&&(a.value=0)};function h(o){if(Qe(o)){const K=n.value.filter(z=>z.props.name===o);K.length>0&&(o=n.value.indexOf(K[0]))}if(o=Number(o),Number.isNaN(o)||o!==Math.floor(o))return;const I=n.value.length,R=a.value;o<0?a.value=t.loop?I-1:0:o>=I?a.value=t.loop?0:I-1:a.value=o,R===a.value&&_(R),ce()}function _(o){n.value.forEach((I,R)=>{I.translateItem(R,a.value,o)})}function P(o,I){var R,K,z,q;const J=e(n),ue=J.length;if(ue===0||!o.states.inStage)return!1;const Ve=I+1,We=I-1,fe=ue-1,ze=J[fe].states.active,Ue=J[0].states.active,De=(K=(R=J[Ve])==null?void 0:R.states)==null?void 0:K.active,Fe=(q=(z=J[We])==null?void 0:z.states)==null?void 0:q.active;return I===fe&&Ue||De?"left":I===0&&ze||Fe?"right":!1}function X(){S.value=!0,t.pauseOnHover&&d()}function x(){S.value=!1,i()}function w(o){e(T)||n.value.forEach((I,R)=>{o===P(I,R)&&(I.states.hover=!0)})}function M(){e(T)||n.value.forEach(o=>{o.states.hover=!1})}function G(o){a.value=o}function re(o){t.trigger==="hover"&&o!==a.value&&(a.value=o)}function Ae(){h(a.value-1)}function Pe(){h(a.value+1)}function ce(){d(),t.pauseOnHover||i()}function Re(o){t.height==="auto"&&(j.value=o)}function He(){var o;const I=(o=g.default)==null?void 0:o.call(g);if(!I)return null;const R=Se(I),K="ElCarouselItem",z=R.filter(q=>Ce(q)&&q.type.name===K);return(z==null?void 0:z.length)===2&&t.loop&&!A.value?(k.value=!0,z):(k.value=!1,null)}Q(()=>a.value,(o,I)=>{_(I),k.value&&(o=o%2,I=I%2),I>-1&&r("change",o,I)}),Q(()=>t.autoplay,o=>{o?i():d()}),Q(()=>t.loop,()=>{h(a.value)}),Q(()=>t.interval,()=>{ce()});const ie=Ie();return we(()=>{Q(()=>n.value,()=>{n.value.length>0&&h(t.initialIndex)},{immediate:!0}),ie.value=Xe(C.value,()=>{_()}),i()}),qe(()=>{d(),C.value&&ie.value&&ie.value.stop()}),Je(Be,{root:C,isCardType:A,isVertical:T,items:n,loop:t.loop,addItem:l,removeItem:c,setActiveItem:h,setContainerHeight:Re}),{root:C,activeIndex:a,arrowDisplay:N,hasLabel:B,hover:S,isCardType:A,items:n,isVertical:T,containerStyle:$,isItemsTwoLength:k,handleButtonEnter:w,handleButtonLeave:M,handleIndicatorClick:G,handleMouseEnter:X,handleMouseLeave:x,setActiveItem:h,prev:Ae,next:Pe,PlaceholderItem:He,isTwoLengthShow:v,throttledArrowClick:V,throttledIndicatorHover:F}},Qt=["onMouseenter","onClick"],Yt={key:0},Zt="ElCarousel",es=ne({name:Zt}),ts=ne({...es,props:Xt,emits:qt,setup(t,{expose:r,emit:s}){const n=t,{root:l,activeIndex:c,arrowDisplay:g,hasLabel:a,hover:y,isCardType:S,items:C,isVertical:j,containerStyle:k,handleButtonEnter:N,handleButtonLeave:B,handleIndicatorClick:A,handleMouseEnter:T,handleMouseLeave:$,setActiveItem:V,prev:F,next:v,PlaceholderItem:d,isTwoLengthShow:i,throttledArrowClick:p,throttledIndicatorHover:h}=Jt(n,s),_=ke("carousel"),P=U(()=>{const x=[_.b(),_.m(n.direction)];return e(S)&&x.push(_.m("card")),x}),X=U(()=>{const x=[_.e("indicators"),_.em("indicators",n.direction)];return e(a)&&x.push(_.em("indicators","labels")),n.indicatorPosition==="outside"&&x.push(_.em("indicators","outside")),e(j)&&x.push(_.em("indicators","right")),x});return r({setActiveItem:V,prev:F,next:v}),(x,w)=>(H(),D("div",{ref_key:"root",ref:l,class:W(e(P)),onMouseenter:w[6]||(w[6]=Y((...M)=>e(T)&&e(T)(...M),["stop"])),onMouseleave:w[7]||(w[7]=Y((...M)=>e($)&&e($)(...M),["stop"]))},[u("div",{class:W(e(_).e("container")),style:Oe(e(k))},[e(g)?(H(),de(_e,{key:0,name:"carousel-arrow-left",persisted:""},{default:m(()=>[te(u("button",{type:"button",class:W([e(_).e("arrow"),e(_).em("arrow","left")]),onMouseenter:w[0]||(w[0]=M=>e(N)("left")),onMouseleave:w[1]||(w[1]=(...M)=>e(B)&&e(B)(...M)),onClick:w[2]||(w[2]=Y(M=>e(p)(e(c)-1),["stop"]))},[f(e(me),null,{default:m(()=>[f(e(Ye))]),_:1})],34),[[se,(x.arrow==="always"||e(y))&&(n.loop||e(c)>0)]])]),_:1})):ee("v-if",!0),e(g)?(H(),de(_e,{key:1,name:"carousel-arrow-right",persisted:""},{default:m(()=>[te(u("button",{type:"button",class:W([e(_).e("arrow"),e(_).em("arrow","right")]),onMouseenter:w[3]||(w[3]=M=>e(N)("right")),onMouseleave:w[4]||(w[4]=(...M)=>e(B)&&e(B)(...M)),onClick:w[5]||(w[5]=Y(M=>e(p)(e(c)+1),["stop"]))},[f(e(me),null,{default:m(()=>[f(e(Ze))]),_:1})],34),[[se,(x.arrow==="always"||e(y))&&(n.loop||e(c)<e(C).length-1)]])]),_:1})):ee("v-if",!0),f(e(d)),Ee(x.$slots,"default")],6),x.indicatorPosition!=="none"?(H(),D("ul",{key:0,class:W(e(X))},[(H(!0),D(Ne,null,et(e(C),(M,G)=>te((H(),D("li",{key:G,class:W([e(_).e("indicator"),e(_).em("indicator",x.direction),e(_).is("active",G===e(c))]),onMouseenter:re=>e(h)(G),onClick:Y(re=>e(A)(G),["stop"])},[u("button",{class:W(e(_).e("button"))},[e(a)?(H(),D("span",Yt,tt(M.props.label),1)):ee("v-if",!0)],2)],42,Qt)),[[se,e(i)(G)]])),128))],2)):ee("v-if",!0)],34))}});var ss=$e(ts,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const ns=Te({name:{type:String,default:""},label:{type:[String,Number],default:""}}),as=(t,r)=>{const s=st(Be),n=je(),l=.83,c=L(),g=L(!1),a=L(0),y=L(1),S=L(!1),C=L(!1),j=L(!1),k=L(!1),{isCardType:N,isVertical:B}=s;function A(v,d,i){const p=i-1,h=d-1,_=d+1,P=i/2;return d===0&&v===p?-1:d===p&&v===0?i:v<h&&d-v>=P?i+1:v>_&&v-d>=P?-2:v}function T(v,d){var i,p;const h=e(B)?((i=s.root.value)==null?void 0:i.offsetHeight)||0:((p=s.root.value)==null?void 0:p.offsetWidth)||0;return j.value?h*((2-l)*(v-d)+1)/4:v<d?-(1+l)*h/4:(3+l)*h/4}function $(v,d,i){const p=s.root.value;return p?((i?p.offsetHeight:p.offsetWidth)||0)*(v-d):0}const V=(v,d,i)=>{var p;const h=e(N),_=(p=s.items.value.length)!=null?p:Number.NaN,P=v===d;!h&&!ot(i)&&(k.value=P||v===i),!P&&_>2&&s.loop&&(v=A(v,d,_));const X=e(B);S.value=P,h?(j.value=Math.round(Math.abs(v-d))<=1,a.value=T(v,d),y.value=e(S)?1:l):a.value=$(v,d,X),C.value=!0,P&&c.value&&s.setContainerHeight(c.value.offsetHeight)};function F(){if(s&&e(N)){const v=s.items.value.findIndex(({uid:d})=>d===n.uid);s.setActiveItem(v)}}return we(()=>{s.addItem({props:t,states:nt({hover:g,translate:a,scale:y,active:S,ready:C,inStage:j,animating:k}),uid:n.uid,translateItem:V})}),at(()=>{s.removeItem(n.uid)}),{carouselItemRef:c,active:S,animating:k,hover:g,inStage:j,isVertical:B,translate:a,isCardType:N,scale:y,ready:C,handleItemClick:F}},os=ne({name:"ElCarouselItem"}),rs=ne({...os,props:ns,setup(t){const r=t,s=ke("carousel"),{carouselItemRef:n,active:l,animating:c,hover:g,inStage:a,isVertical:y,translate:S,isCardType:C,scale:j,ready:k,handleItemClick:N}=as(r),B=U(()=>{const T=`${`translate${e(y)?"Y":"X"}`}(${e(S)}px)`,$=`scale(${e(j)})`;return{transform:[T,$].join(" ")}});return(A,T)=>te((H(),D("div",{ref_key:"carouselItemRef",ref:n,class:W([e(s).e("item"),e(s).is("active",e(l)),e(s).is("in-stage",e(a)),e(s).is("hover",e(g)),e(s).is("animating",e(c)),{[e(s).em("item","card")]:e(C),[e(s).em("item","card-vertical")]:e(C)&&e(y)}]),style:Oe(e(B)),onClick:T[0]||(T[0]=(...$)=>e(N)&&e(N)(...$))},[e(C)?te((H(),D("div",{key:0,class:W(e(s).e("mask"))},null,2)),[[se,!e(l)]]):ee("v-if",!0),Ee(A.$slots,"default")],6)),[[se,e(k)]])}});var Le=$e(rs,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const is=rt(ss,{CarouselItem:Le}),ls=it(Le);const cs="/static/1-945cf336.jpg",us="/static/2-314647d9.jpg",fs="/static/3-d2f1be32.jpg",ds="/static/4-88a48d57.jpg",ms="/static/5-c4891935.jpg",_s="/static/6-8ad9bbb9.jpg",vs="/static/7-18319444.jpg",gs="/static/1-初階系列-Level-1-Basic-150x150-ef094b35.jpg",ps="/static/2-進階系列-Level-2-Support-150x150-4d627733.jpg",hs="/static/3-高階系列-Level-3-Unify-150x150-43b30b5d.jpg",bs="/static/4-T-Shirt-Bra-150x150-cea42c12.jpg",ys="/static/5-全罩杯系列-Extended-Bra-150x150-a61e9a4f.jpg",Is="/static/6-香港製造系列-Made-in-Hong-Kong-150x150-6f641ee3.jpg",Ss="/static/7-記憶鋼圈系列-Memory-Wire-Bra-150x150-7277aee8.jpg",Cs="/static/8-無鋼圈系列-Wireless-Bra-150x150-a9c49733.jpg",Ts="/static/9-美背系列-Butterfly-Collection-150x150-446491bc.jpg",ws="/static/10-塑形背心-Vest-150x150-8a798025.jpg",js="/static/11-塑形束衣-BodiShape-150x150-f8d1bbb5.jpg",ks="/static/12-塑形束褲-BodiShape-Pants-150x150-932dfb8d.jpg",Es="/static/13-腰封-Girdle-150x150-df632ad8.jpg",Os="/static/14-配件-Others-150x150-66bfc16c.jpg",Ns="/static/14-配件-Others_2-150x150-645152d8.jpg",$s="/static/15-內褲-Pants-150x150-4c322bf1.jpg",b=t=>(lt("data-v-cf138536"),t=t(),ct(),t),xs={class:"block text-center"},Ms=b(()=>u("img",{src:cs,alt:""},null,-1)),Bs=b(()=>u("img",{src:us,alt:""},null,-1)),Ls=b(()=>u("img",{src:fs,alt:""},null,-1)),As=b(()=>u("img",{src:ds,alt:""},null,-1)),Ps=b(()=>u("img",{src:ms,alt:""},null,-1)),Rs=b(()=>u("img",{src:_s,alt:""},null,-1)),Hs=b(()=>u("img",{src:vs,alt:""},null,-1)),Vs={class:"swiper-one"},Ws=b(()=>u("div",{class:"title animate__animated animate__fadeInLeft"},"系列",-1)),zs=b(()=>u("img",{src:gs,alt:""},null,-1)),Us=b(()=>u("img",{src:ps,alt:""},null,-1)),Ds=b(()=>u("img",{src:hs,alt:""},null,-1)),Fs=b(()=>u("img",{src:bs,alt:""},null,-1)),Gs=b(()=>u("img",{src:ys,alt:""},null,-1)),Ks=b(()=>u("img",{src:Is,alt:""},null,-1)),Xs=b(()=>u("img",{src:Ss,alt:""},null,-1)),qs=b(()=>u("img",{src:Cs,alt:""},null,-1)),Js=b(()=>u("img",{src:Ts,alt:""},null,-1)),Qs={class:"swiper-two"},Ys=b(()=>u("div",{class:"title animate__animated animate__fadeInLeft"}," 塑形系列及其他 ",-1)),Zs=b(()=>u("img",{src:ws,alt:""},null,-1)),en=b(()=>u("img",{src:js,alt:""},null,-1)),tn=b(()=>u("img",{src:ks,alt:""},null,-1)),sn=b(()=>u("img",{src:Es,alt:""},null,-1)),nn=b(()=>u("img",{src:Os,alt:""},null,-1)),an=b(()=>u("img",{src:Ns,alt:""},null,-1)),on=b(()=>u("img",{src:$s,alt:""},null,-1)),rn=ne({__name:"home",setup(t){const r=[ft,dt,mt,_t];return(s,n)=>{const l=ls,c=is;return H(),D(Ne,null,[u("div",xs,[f(c,{height:"900px",class:"fa"},{default:m(()=>[f(l,{class:"img-box"},{default:m(()=>[Ms]),_:1}),f(l,{class:"img-box"},{default:m(()=>[Bs]),_:1}),f(l,{class:"img-box"},{default:m(()=>[Ls]),_:1}),f(l,{class:"img-box"},{default:m(()=>[As]),_:1}),f(l,{class:"img-box"},{default:m(()=>[Ps]),_:1}),f(l,{class:"img-box"},{default:m(()=>[Rs]),_:1}),f(l,{class:"img-box"},{default:m(()=>[Hs]),_:1})]),_:1})]),u("div",Vs,[Ws,f(e(ve),{modules:r,"slides-per-view":6,"space-between":30,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{},class:"animate__animated animate__fadeInRight"},{default:m(()=>[f(e(O),{class:"item"},{default:m(()=>[zs,E("初阶系列 ")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[Us,E("进阶系列")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[Ds,E("高阶系列")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[Fs,E("T-Shirt-Bra")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[Gs,E("全罩杯系列")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[Ks,E("香港制造系列")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[Xs,E("记忆钢圈系列")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[qs,E("无钢圈系列")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[Js,E("美背系列")]),_:1})]),_:1})]),u("div",Qs,[Ys,f(e(ve),{modules:r,"slides-per-view":6,"space-between":30,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{},class:"animate__animated animate__fadeInRight"},{default:m(()=>[f(e(O),{class:"item"},{default:m(()=>[Zs,E("塑形背心 ")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[en,E("塑形束衣")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[tn,E("塑形束褲")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[sn,E("腰封")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[nn,E("配件")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[an,E("配件")]),_:1}),f(e(O),{class:"item"},{default:m(()=>[on,E("內褲")]),_:1})]),_:1})])],64)}}});const un=ut(rn,[["__scopeId","data-v-cf138536"]]);export{un as default};