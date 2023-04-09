import{r as x,a as l,j as n,F as ee,b as Ce,B as Se}from"./vendor.a566c96c.js";import{c as te}from"./zustand.30190f1e.js";import{V as D,K as be,F as A,b as E,R as xe,H as R,c as $,d as re,I as M,T,e as H,S as U,B as ne,f as oe,g as j,h as ie,C as we,i as I,j as se,k as Te,l as ae,m as ce,n as G,P as Re,o as Ae,p as Ee,q as Ie,r as ke,s as Be,t as ze,u as le,v as Oe,w as De,x as V,D as Pe,M as ue,y as He,z as de,A as pe,E as he,G as je,J as _e,L as Me,N as Ne,O as We}from"./@chakra-ui/react.50e5478e.js";import{H as Fe,m as Le,D as Ke,V as Ve,n as me,p as $e,q as Ue,A as Ge,r as qe}from"./@chakra-ui/icons.f328b309.js";import{Q as Je,a as Qe}from"./react-query.f4621ac8.js";import"./framer-motion.b2d452b6.js";import"./@emotion/react.1da6ad16.js";import"./@emotion/styled.8c19356b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const g=e=>new Intl.NumberFormat("pl-PL",{style:"currency",currency:"PLN"}).format(e),N={["below 3.5t"]:600,["3.5t-5.5t"]:800},P={["below 3.5t"]:4.9,["3.5t-5.5t"]:12.5},fe=.5,K=(e,r,t)=>e*r+t*2*fe,q=(e,r)=>e*P[r]+N[r],Xe=(e,r,t)=>e.map(o=>o.id===t?{...o,textSummary:r}:o),Ye=e=>({driveToPlace:{rate:0,hours:0,setRate:r=>e(t=>({...t,services:t.services.map(o=>o.id==="3"?{...o,price:K(r,t.driveToPlace.hours,t.settings.distanceBeforeRepair)}:o),driveToPlace:{...t.driveToPlace,rate:r}})),setHours:r=>e(t=>({...t,services:t.services.map(o=>o.id==="3"?{...o,price:K(t.driveToPlace.rate,r,t.settings.distanceBeforeRepair)}:o),driveToPlace:{...t.driveToPlace,hours:r}}))}}),Ze=e=>({euroCourse:{rate:0,timestamp:0},setEuroCourse:(r,t)=>e(o=>({...o,euroCourse:{rate:r,timestamp:t}}))}),et={TOW_TO_BREAKDOWN:"H",TOW_BACK:"J",DRIVE_TO_CLIENT:"K",RENT_CAR:"L",DOCUMENTATION:"B",BONUS:"N"},tt={DISTANCE_TO_BREAKDOWN:"Q",DISTANCE_TOW_BACK:"W",VEHICLE_MASS:"E"},C={VIEW_SERVICES:"V",RESET:"R",SHOW_DRAWER:"D",FOCUS:tt,REMOVE_SERVICE:et},O={distanceAfterRepair:0,distanceBeforeRepair:0,vehicleWeight:"below 3.5t"},rt=e=>({settings:O,setVehicleWeight:r=>e(t=>({...t,settings:{...t.settings,vehicleWeight:r},services:t.services.map(o=>o.id==="1"?{...o,price:q(t.settings.distanceBeforeRepair,r)}:o)})),setDistanceBeforeRepair:r=>e(t=>({...t,services:t.services.map(o=>o.id==="1"?{...o,price:q(r,t.settings.vehicleWeight)}:o.id==="3"?{...o,price:K(t.driveToPlace.rate,t.driveToPlace.hours,r)}:o),settings:{...t.settings,distanceBeforeRepair:r}})),setDistanceAfterRepair:r=>e(t=>({...t,services:t.services.map(o=>o.id==="5"?{...o,price:r<50?300:r*1.41*4+60.03*4}:o),settings:{...t.settings,distanceAfterRepair:r}}))}),J=[{title:"Holowanie z miejsca awarii",id:"1",mixGroup:1,price:N[O.vehicleWeight]+P[O.vehicleWeight]*O.distanceBeforeRepair,textSummary:"",active:!1,beforeRepair:!0,deleteServiceShortcut:C.REMOVE_SERVICE.TOW_TO_BREAKDOWN},{title:"Auto zast\u0119pcze",id:"2",mixGroup:2,price:0,textSummary:"",active:!1,beforeRepair:!0,deleteServiceShortcut:C.REMOVE_SERVICE.RENT_CAR},{title:"Dojazd do miejsca awarii",id:"3",mixGroup:1,price:0,textSummary:"",active:!1,beforeRepair:!0,deleteServiceShortcut:C.REMOVE_SERVICE.DRIVE_TO_CLIENT},{title:"Bonus za napraw\u0119 na miejscu",id:"4",mixGroup:1,price:100,textSummary:"Bonus za napraw\u0119 na miejscu 100 z\u0142",active:!1,deleteServiceShortcut:C.REMOVE_SERVICE.BONUS},{title:"Odwiezienie auta",id:"5",mixGroup:1,price:O.distanceAfterRepair<50?300:O.distanceAfterRepair*1.41*4+60.03*4,textSummary:"",active:!1,deleteServiceShortcut:C.REMOVE_SERVICE.TOW_BACK},{title:"Dokumentacja",id:"6",mixGroup:1,price:100,textSummary:"Rycza\u0142t 100 z\u0142 za wykonanie dokumentacji",active:!1,deleteServiceShortcut:C.REMOVE_SERVICE.DOCUMENTATION}],nt=e=>({services:J,toggleService:r=>e(t=>({...t,services:t.services.map(o=>o.id===r?{...o,active:!o.active}:o)})),resetServices:()=>e(r=>({...r,services:J})),setServicePrice:(r,t)=>e(o=>({...o,services:o.services.map(s=>s.id===r?{...s,price:t}:s)})),setServiceTextSummary:(r,t)=>e(o=>({...o,services:Xe(o.services,r,t)}))}),u=te()((...e)=>({...rt(...e),...nt(...e),...Ye(...e),...Ze(...e)})),W=e=>r=>{try{const t=e(r);return t instanceof Promise?t:{then(o){return W(o)(t)},catch(o){return this}}}catch(t){return{then(o){return this},catch(o){return W(o)(t)}}}},ot=(e,r)=>(t,o,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:d=>d,version:0,merge:(d,b)=>({...b,...d}),...r},a=!1;const c=new Set,h=new Set;let m;try{m=i.getStorage()}catch{}if(!m)return e((...d)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),t(...d)},o,s);const f=W(i.serialize),S=()=>{const d=i.partialize({...o()});let b;const v=f({state:d,version:i.version}).then(z=>m.setItem(i.name,z)).catch(z=>{b=z});if(b)throw b;return v},p=s.setState;s.setState=(d,b)=>{p(d,b),S()};const y=e((...d)=>{t(...d),S()},o,s);let w;const _=()=>{var d;if(!m)return;a=!1,c.forEach(v=>v(o()));const b=((d=i.onRehydrateStorage)==null?void 0:d.call(i,o()))||void 0;return W(m.getItem.bind(m))(i.name).then(v=>{if(v)return i.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==i.version){if(i.migrate)return i.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var z;return w=i.merge(v,(z=o())!=null?z:y),t(w,!0),S()}).then(()=>{b==null||b(w,void 0),a=!0,h.forEach(v=>v(w))}).catch(v=>{b==null||b(void 0,v)})};return s.persist={setOptions:d=>{i={...i,...d},d.getStorage&&(m=d.getStorage())},clearStorage:()=>{m==null||m.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:d=>(c.add(d),()=>{c.delete(d)}),onFinishHydration:d=>(h.add(d),()=>{h.delete(d)})},_(),w||y},it=ot,F=te()(it(e=>({extendedInfo:!0,show:()=>e({extendedInfo:!0}),hide:()=>e({extendedInfo:!1})}))),st=(e,r)=>{const[t,o]=x.exports.useState(!1),s=x.exports.useCallback(a=>{a.shiftKey&&o(!0),a.key===e&&t&&r()},[t,e]),i=x.exports.useCallback(a=>{a.shiftKey||o(!1)},[t,e]);return x.exports.useEffect(()=>(window.addEventListener("keydown",s),window.addEventListener("keyup",i),()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",i)}),[s,i]),{modifierPressed:t}},at="_wrapper_2z668_1",ct="_keyWrapper_2z668_5",lt="_scaleIn_2z668_1",ut="_left_2z668_21",dt="_scaleInLeft_2z668_1",L={wrapper:at,keyWrapper:ct,scaleIn:lt,left:ut,scaleInLeft:dt},k=({children:e,keyboardKey:r,condition:t=!0,callback:o,direction:s})=>{const i=()=>{t&&o()},{modifierPressed:a}=st(r,i);return l(D,{className:L.wrapper,children:[e,t&&a&&n("span",{className:`${L.keyWrapper} ${s==="left"?L.left:""}`,children:n(be,{children:r.toString().toUpperCase()})})]})},pt=()=>{const e=u(t=>t.setVehicleWeight);return{vehicleWeightInputHandler:t=>{(t==="3.5t-5.5t"||t==="below 3.5t")&&e(t)}}},ht=()=>{const{vehicleWeightInputHandler:e}=pt(),r=x.exports.useRef(null),t=()=>{var i,a;const s=(i=r.current)==null?void 0:i.querySelectorAll("input");s&&((a=[...s].find(c=>c.checked))==null||a.focus())},o=F(s=>s.extendedInfo);return l(A,{h:"100%",display:"flex",flexDir:"column",justifyContent:"space-between",children:[n(E,{as:"legend",children:"Masa pojazdu"}),n(k,{keyboardKey:C.FOCUS.VEHICLE_MASS,callback:t,children:n(xe,{ref:r,onChange:e,defaultValue:"below 3.5t",children:l(R,{spacing:"24px",children:[n($,{value:"below 3.5t",children:"Poni\u017Cej 3.5t"}),n($,{value:"3.5t-5.5t",children:"3.5t - 5.5t"})]})})}),o&&n(re,{children:"Do rozliczania holowania"})]})},mt=({inputHelperText:e,inputTitle:r,value:t,onChange:o,focusShortcut:s})=>{const i=x.exports.useRef(null),a=F(c=>c.extendedInfo);return l(A,{h:"100%",display:"flex",flexDir:"column",justifyContent:"space-between",children:[n(E,{children:r}),n(k,{callback:()=>{var c;(c=i.current)==null||c.focus()},keyboardKey:s,children:n(M,{ref:i,type:"number",min:"0",value:t,onChange:o})}),a&&n(re,{children:e})]})},ft=()=>{const{setDistanceAfterRepair:e,setDistanceBeforeRepair:r,settings:t}=u(i=>i);return{distanceInputHandler:i=>{r(Number(i.target.value))},distanceAfterRepairInputHandler:i=>{e(Number(i.target.value))},distanceBeforeRepair:t.distanceBeforeRepair,distanceAfterRepair:t.distanceAfterRepair}},vt=()=>{const{distanceAfterRepair:e,distanceAfterRepairInputHandler:r,distanceBeforeRepair:t,distanceInputHandler:o}=ft(),s=[{inputHelperText:"Odleg\u0142o\u015B\u0107 w jedn\u0105 stron\u0119 (km)",inputTitle:"Odleg\u0142o\u015B\u0107",value:t,onChange:o,focusShortcut:C.FOCUS.DISTANCE_TO_BREAKDOWN},{inputHelperText:"Odleg\u0142o\u015B\u0107 w jedn\u0105 stron\u0119 (km)",inputTitle:"Odleg\u0142o\u015B\u0107 odwiezienia",value:e,onChange:r,focusShortcut:C.FOCUS.DISTANCE_TOW_BACK}].map(i=>n(mt,{...i},i.inputTitle));return l(R,{h:"100%",rounded:"2xl",p:"4",shadow:"lg",border:"4px",borderColor:"gray.700",align:"baseline",children:[s," ",n(ht,{})]})},yt=({drawerOpenHandler:e})=>n(k,{keyboardKey:C.SHOW_DRAWER,callback:e,children:n(T,{hasArrow:!0,label:"Menu z us\u0142ugami",children:n(H,{"aria-label":"Poka\u017C us\u0142ugi",onClick:e,children:n(Fe,{})})})}),gt=()=>{const r=u(o=>o.services).filter(o=>o.active),t=r.filter(o=>o.price>0).length>0;return{servicesCount:r.length,hasServices:r.length>0,hasServicesWithValue:t}},Ct=({summaryOpenHandler:e})=>{const{resetServices:r}=u(f=>f),{hasServices:t,hasServicesWithValue:o}=gt(),{extendedInfo:s,hide:i,show:a}=F(f=>f),{colorMode:c,toggleColorMode:h}=Le(),m=f=>{f.target.checked?a():i()};return l(D,{children:[l(R,{children:[n(k,{condition:t,keyboardKey:C.RESET,callback:r,children:n(T,{hasArrow:!0,label:"Resetuj wszystko",children:n(H,{disabled:!t,onClick:r,"aria-label":"Resetuj wszystko",children:n(Ke,{})})})}),n(k,{condition:o,keyboardKey:C.VIEW_SERVICES,callback:e,children:n(T,{hasArrow:!0,label:"Podsumowanie us\u0142ug",children:n(H,{disabled:!o,onClick:e,"aria-label":"Podsumowanie us\u0142ug",children:n(Ve,{})})})})]}),l(R,{children:[n(T,{hasArrow:!0,label:`Wy\u015Bwietl ${s?"mniej":"wi\u0119cej"} informacji`,placement:"left",children:n(A,{display:"flex",alignItems:"center",children:l(D,{children:[n(E,{htmlFor:"extended-info",m:"0",children:"Informacje"}),n(U,{isChecked:s,onChange:m,id:"extended-info"})]})})}),n(T,{hasArrow:!0,label:"Zmie\u0144 motyw kolorystyczny",placement:"left",children:n(A,{display:"flex",alignItems:"center",children:l(D,{children:[n(E,{htmlFor:"color-mode",m:"0",children:"Motyw"}),n(U,{isChecked:c==="dark",onChange:h,id:"color-mode"})]})})})]})]})},St=({activeServiceSummary:e,activeServices:r})=>{const t=r.length,o=t>0,s=g(e),i=F(a=>a.extendedInfo);return n(ne,{h:"100%",rounded:"2xl",p:"4",shadow:"2xl",border:"4px",borderColor:"green.700",children:n(oe,{h:"100%",children:l(j,{children:[n(ie,{children:l(R,{children:[o&&n(we,{size:"30px",bg:"green.700",children:t}),n(I,{children:"Razem"})]})}),n(se,{children:s}),i&&n(Te,{children:"Ca\u0142kowita warto\u015B\u0107 us\u0142ug"})]})})})},bt=({drawerOpenHandler:e,summaryOpenHandler:r})=>{const o=u(c=>c.services).filter(c=>c.active),s=o.reduce((c,h)=>c+h.price,0),i=u(c=>c.euroCourse),a=Boolean(i.rate&&i.rate>0);return l(ae,{w:"100%",align:"center",justify:"space-between",gap:"2",children:[n(yt,{drawerOpenHandler:e}),n(vt,{}),a&&n(ne,{padding:"8",rounded:"2xl",border:"4px",borderColor:"blue.800",h:"100%",children:n(ce,{h:"100%",children:l(D,{children:[n(I,{fontWeight:"bold",children:"Kurs EUR:"}),n(I,{children:g(i.rate)})]})})}),n(St,{activeServices:o,activeServiceSummary:s}),n(Ct,{summaryOpenHandler:r})]})},xt=({badges:e,hasIncompatibleServices:r})=>{const t=e.map(i=>n(G,{colorScheme:"green",children:i}));return n(D,{flexBasis:"10%",children:r?n(G,{colorScheme:"purple",variant:"outline",children:"Niekompatybilna"}):t})},wt="_button_1wpqb_1",Q={button:wt},Tt=({children:e,text:r,onCopy:t})=>l(Re,{children:[n(Ae,{children:n("button",{className:Q.button,children:n(T,{hasArrow:!0,label:"Poka\u017C ca\u0142o\u015B\u0107",children:e})})}),l(Ee,{shadow:"2xl",children:[n(Ie,{}),n(ke,{}),n(Be,{children:"Informacje o us\u0142udze"}),n(ze,{children:n(T,{hasArrow:!0,label:"Skopiuj tekst",children:n("button",{className:Q.button,onClick:t,children:r.split("|").map(o=>n("p",{children:o}))})})})]})]}),ve=({children:e,hasCopied:r})=>n(T,{closeOnClick:!1,bg:r?"green.500":"gray.500",hasArrow:!0,label:r?"Skopiowano":"Skopiuj",children:e}),Rt=({hasCopied:e,onCopy:r})=>n(ve,{hasCopied:e,children:n(H,{onClick:r,"aria-label":"Skopiuj do schowka",children:e?n(me,{}):n($e,{})})}),At={justifyContent:"space-between",flex:"0 0 350px",bg:"chakra-body-bg",rounded:"md",shadow:"md",p:"2"},Et={fontSize:"xs",fontFamily:"mono",maxH:"4em",overflow:"auto"},It={fontStyle:"italic"},kt={border:"2px",borderColor:"red.700"},Bt=e=>{const r={\u0105:"a",\u0107:"c",\u0119:"e",\u0142:"l",\u0144:"n",\u00F3:"o",\u015B:"s",\u017A:"z",\u017C:"z"};return e.toLowerCase().replace(/[ąćęłńóśźż]/g,t=>r[t]).toUpperCase()},zt=(e="",r)=>{const t=Bt(e).split("|").map(h=>h.trim()).join(`
`).trim(),{onCopy:o,hasCopied:s}=le(t);return{onCopy:()=>{o(),navigator.clipboard.writeText(t)},hasCopied:s,errorStyle:r?kt:{},textStyle:r?It:{}}},Ot=({textToCopy:e,hasError:r})=>{const{errorStyle:t,hasCopied:o,textStyle:s,onCopy:i}=zt(e,r);return e?l(R,{...At,...t,children:[n(Tt,{onCopy:i,text:e,children:n(I,{...s,...Et,children:e.split("|").map(a=>n("p",{children:a}))})}),n(Rt,{hasCopied:o,onCopy:i})]}):null},Dt=({onDelete:e})=>n(T,{hasArrow:!0,label:"Usu\u0144 us\u0142ug\u0119",children:n(H,{onClick:e,"aria-label":"Usu\u0144 us\u0142ug\u0119",children:n(Ue,{})})}),Pt=({price:e})=>{const r=new Intl.NumberFormat("pl-PL",{style:"currency",currency:"PLN"}).format(e),{onCopy:t,hasCopied:o}=le(e.toFixed(2));return n(oe,{display:"flex",justifyContent:"center",w:"fit-content",flex:"0 0 120px",children:n(ve,{hasCopied:o,children:l("button",{onClick:()=>{t(),navigator.clipboard.writeText(e.toString())},children:[n(ie,{children:"Op\u0142ata"}),n(se,{whiteSpace:"nowrap",children:o?n(me,{}):r})]})})})},Ht=({children:e,shortcutKey:r,serviceDeleteHandler:t})=>r?n(k,{direction:"left",callback:t,keyboardKey:r,children:e}):n(ee,{children:e}),jt=e=>{if(!e)return{hasErrors:!1};const o=u(s=>s.services).filter(s=>s.active).filter(s=>e.includes(s.id));return{hasErrors:o.length>0,conflictingServices:o}},_t=(e,r)=>{const t=u(f=>f.services.find(S=>S.id===e)),o=t==null?void 0:t.active,s=u(f=>f.toggleService),i=()=>{s(e)},{hasErrors:a,conflictingServices:c}=jt(r),h=a?"red.900":"transparent",m=`Ta us\u0142uga nie mo\u017Ce by\u0107 \u0142\u0105czona z: ${c==null?void 0:c.map(f=>f.title).join(", ")}`;return{conflictingServices:c,hasErrors:a,bgColor:h,isActive:o,deleteServiceButtonHandler:i,conflictingServicesText:m,shortcutKey:t==null?void 0:t.deleteServiceShortcut}},Mt={gap:"4",borderBottom:"2px",borderColor:"gray.600",p:"2",px:"4",align:"center",justify:"space-between",w:"100%"},B=({service:e,textToCopy:r,children:t,serviceId:o,hasError:s,cantBeMixedWith:i})=>{const{title:a,price:c,badges:h}=e,{bgColor:m,conflictingServicesText:f,deleteServiceButtonHandler:S,hasErrors:p,isActive:y,shortcutKey:w}=_t(o,i);return y?l(ae,{...Mt,bg:m,children:[n(I,{fontWeight:"bold",flex:"1 0 100px",children:a}),t,n(xt,{hasIncompatibleServices:p,badges:h}),n(Ot,{hasError:s||p,textToCopy:p?f:r}),n(Pt,{price:c}),n(Ht,{shortcutKey:w,serviceDeleteHandler:S,children:n(Dt,{onDelete:S})})]}):null},Nt=()=>{const e=u(o=>o.services.find(s=>s.id==="6"));return(e==null?void 0:e.active)?n(B,{serviceId:"6",service:{title:"Dokumentacja",price:100,badges:["rycza\u0142t","po naprawie"],active:!0,serviceType:"after repair",serviceSummaryText:"Dokumentacja",preventCombineGroup:null},textToCopy:"Rycza\u0142t 100 z\u0142 za sporz\u0105dzenie dokumentacji"}):null},Wt=()=>{const e=u(p=>p.services.find(y=>y.id==="3")),{hours:r,rate:t,setHours:o,setRate:s}=u(p=>p.driveToPlace),i=u(p=>p.settings.distanceBeforeRepair),a=p=>{o(+p.target.value)},c=p=>{s(+p.target.value)};if(!(e==null?void 0:e.active))return null;const m=!r||!t||!i||r<0||t<0||i<0||r===0,f=`
      Dojazd i powrot z miejsca awarii:
      CZAS PRACY MECHANIKA ${r} h X STAWKA ${g(t)}/h + ${i*2} KM X ${g(fe)} = ${g(e.price)}
`.toUpperCase(),S=m?"Podaj: odleg\u0142o\u015B\u0107, stawk\u0119 oraz roboczogodziny \u017Ceby obliczy\u0107 warto\u015B\u0107":f;return n(B,{cantBeMixedWith:["2","1","5"],hasError:m,serviceId:"3",service:{active:!0,badges:["przed napraw\u0105"],price:e.price,title:"Dojazd do miejsca awarii",preventCombineGroup:null,serviceType:"before repair"},textToCopy:S,children:l(R,{children:[l(A,{children:[n(E,{children:"Roboczogodziny"}),n(M,{onChange:a,value:r,min:"0",placeholder:"RBH",type:"number"})]}),l(A,{children:[n(E,{children:"Stawka"}),n(M,{onChange:c,value:t,min:"0",placeholder:"stawka",type:"number"})]})]})})},ye=[{name:"Audi A4",price:100,id:"1"},{name:"Audi A6",price:200,id:"2"},{name:"Audi A8",price:300,id:"3"}],Ft=(e,r,t)=>{const o=`Auto zast\u0119pcze: ${t}`,s=`Wynajem na ${r} dni, stawka ${g(e)} za dzie\u0144`,i=`Razem: ${g(e*r)}`;return[o,s,i].join(" | ")},Lt=()=>{const[e,r]=x.exports.useState(0),[t,o]=x.exports.useState(0),[s,i]=x.exports.useState(""),a=u(p=>p.services.find(y=>y.id==="2")),c=u(p=>p.setServicePrice),h=p=>{const y=p.target.valueAsNumber;r(y),isFinite(y)&&isFinite(t)&&c("2",y*t)},m=p=>{var w;const y=(w=ye.find(_=>_.name===p.target.value))==null?void 0:w.price;i(p.target.value),y&&o(y),isFinite(e)&&y&&isFinite(y)?c("2",e*y):c("2",0)},f=e>0&&s!==""&&t>0,S=f?Ft(t,e,s):"Nie wybrano modelu auta lub dni";return{days:e,daysInputHandler:h,carSelectHandler:m,shouldDisplayText:f,priceFromStore:a.price,textToCopy:S}},Kt=({name:e,price:r,model:t})=>n("option",{style:{fontSize:"12px",textAlign:"center"},value:t,children:`${e} - ${g(r)} / doba`},e),Vt=()=>{const{days:e,carSelectHandler:r,daysInputHandler:t,shouldDisplayText:o,priceFromStore:s,textToCopy:i}=Lt();return l(B,{hasError:!o,serviceId:"2",service:{active:!0,badges:["przed napraw\u0105"],price:s,title:"Auto zast\u0119pcze",preventCombineGroup:null,serviceType:"before repair"},textToCopy:i,children:[l(A,{flex:"0 0 200px",children:[n(E,{children:"Model"}),n(Oe,{flex:"0 0 200px",onChange:r,placeholder:"Wybierz model",children:ye.map(a=>n(Kt,{name:a.name,price:a.price,model:a.name},a.name))})]}),l(A,{flex:"0 0 200px",children:[n(E,{children:"Dni"}),n(M,{step:0,onChange:t,value:e,min:"0",placeholder:"days",type:"number"})]})]})},$t=()=>{const e=u(t=>t.services.find(o=>o.id==="4"));return(e==null?void 0:e.active)?n(B,{cantBeMixedWith:["5","1","2"],serviceId:"4",service:{active:!0,badges:["po naprawie","rycza\u0142t"],price:100,title:"Bonus za napraw\u0119 na miejscu",preventCombineGroup:null,serviceType:"after repair"},textToCopy:"Bonus 100 z\u0142 za napraw\u0119 na miejscu"}):null},Ut="https://api.nbp.pl/api/exchangerates/rates/A/EUR/?format=json",Gt=async()=>{const r=await(await fetch(Ut)).json();return{rate:r.rates[0].mid,date:r.rates[0].effectiveDate}},qt=(e,r)=>{const t=60.03*e,o=r*1.41*e;return`OP\u0141ATA MANIPULACYJNA = 60,03 EURO NETTO  x KURS ${e}
   = ${g(t)}
  OP\u0141ATA ZA ODLEG\u0141O\u015A\u0106 1,41 EUR/km NETTO X ${r} km x KURS ${e} 
  = ${g(o)}
  RAZEM = ${g(t+o)}
  `},Jt=()=>{const e=u(i=>i.services.find(a=>a.id==="5")),r=u(i=>i.settings.distanceAfterRepair),t=u(i=>i.setEuroCourse),o=u(i=>i.euroCourse),s=e==null?void 0:e.active;return x.exports.useEffect(()=>{if(!s||r<50||(Date.now()-o.timestamp)/1e3/60<60)return;(async()=>{const c=await Gt();t(c.rate,Date.now())})()},[o,s,r]),s?r<50?n(B,{serviceId:"5",service:{active:!0,badges:["po naprawie","rycza\u0142t"],price:e.price,title:"Odwiezienie pojazdu do 50 km",preventCombineGroup:null,serviceType:"after repair"},textToCopy:`Odwiezienie pojazdu klienta do 50 km 300 z\u0142 netto
`}):n(B,{serviceId:"5",service:{active:!0,badges:["po naprawie"],price:e.price,title:"Odwiezienie pojazdu od 50 km",preventCombineGroup:null,serviceType:"after repair"},textToCopy:qt(o.rate,r)}):null},Qt=(e,r)=>{const t=`Masa pojazdu: ${e==="below 3.5t"?"poni\u017Cej 3.5t":"3.5t-5.5t"}`,s=`Op\u0142ata manipulacyjna: ${g(N[e])}`,i=g(r*P[e]),a=`Op\u0142ata za odleg\u0142o\u015B\u0107: ${r} km X ${g(P[e])} = ${i}`,h=`Razem: ${g(r*P[e]+N[e])}`;return[t,s,a,h].join(" | ")},Xt=({serviceId:e})=>{const{distanceBeforeRepair:r,vehicleWeight:t}=u(c=>c.settings),o=u(c=>c.services.find(h=>h.id===e));if(!(o==null?void 0:o.active))return null;const i=Qt(t,r),a={title:"Holowanie",price:o.price,badges:["przed napraw\u0105"],active:!0,serviceType:"after repair",serviceSummaryText:"Dokumentacja",preventCombineGroup:null};return n(B,{cantBeMixedWith:["3","4"],serviceId:e,service:a,textToCopy:i})},Yt=({drawerOpenHandler:e})=>{const r=u(s=>s.services).filter(s=>s.active).length>0,t=l(ee,{children:[n(Nt,{}),n(Xt,{serviceId:"1"}),n(Vt,{}),n(Wt,{}),n($t,{}),n(Jt,{})]}),o=n(ce,{h:"100%",children:n(R,{children:n(De,{in:!0,children:n(k,{callback:e,keyboardKey:C.SHOW_DRAWER,children:l(V,{display:"flex",gap:".4rem",rounded:"3xl",onClick:e,children:[n(Ge,{}),n(I,{children:"Dodaj us\u0142ug\u0119"})]})})})})});return n(j,{border:"2px",borderColor:"gray.600",overflowY:"auto",shadow:"dark-lg",rounded:"xl",transition:"opacity 0.3s ease-in-out",flex:"1",h:"100%",bg:"chakra-subtle-bg",children:r?t:o})},X=({children:e,text:r})=>l(j,{w:"100%",p:"2",rounded:"md",children:[n(I,{children:r}),e]}),Y=({active:e,children:r,onClick:t})=>n(V,{border:"4px",borderColor:e?"green.500":"transparent",onClick:t,width:"100%",children:r}),Zt=({isOpen:e,drawerCloseHandler:r})=>{const t=u(a=>a.services),o=u(a=>a.toggleService),[s,i]=t.reduce((a,c)=>(c.beforeRepair?a[0].push(c):a[1].push(c),a),[[],[]]);return l(Pe,{isOpen:e,placement:"left",onClose:r,children:[n(ue,{}),l(He,{children:[n(de,{}),n(pe,{children:"Wybierz us\u0142ug\u0119 mobilno\u015Bci"}),n(he,{p:"2",children:l(j,{gap:"4",align:"center",h:"100%",children:[n(X,{text:"Przed napraw\u0105",children:s.map(a=>n(Y,{active:a.active,onClick:()=>o(a.id),children:a.title},a.id))}),n(X,{text:"Po naprawie",children:i.map(a=>n(Y,{active:a.active,onClick:()=>o(a.id),children:a.title},a.id))})]})})]})]})},er=({service:e})=>{const r=g(e.price);return l(R,{w:"100%",justifyContent:"space-between",gap:"8px",children:[n("span",{children:e.title}),n("span",{children:r})]})},tr=({isOpen:e,onClose:r})=>{const t=u(o=>o.services).filter(o=>o.active&&o.price>0);return l(je,{isCentered:!0,motionPreset:"slideInBottom",size:"xl",isOpen:e,onClose:r,children:[n(ue,{}),l(_e,{children:[n(pe,{children:"Podsumowanie us\u0142ug"}),n(de,{}),n(he,{children:t.map(o=>n(er,{service:o},o.id))}),n(Me,{children:n(V,{children:"Drukuj"})})]})]})},rr=()=>{const[e,r]=x.exports.useState(!1),{isOpen:t,onOpen:o,onClose:s}=Ne();return l(j,{overflow:"hidden",padding:"4",gap:"16px",h:"100vh",children:[n(bt,{summaryOpenHandler:o,drawerOpenHandler:()=>r(!0)}),n(Yt,{drawerOpenHandler:()=>r(!0)}),n(Zt,{isOpen:e,drawerCloseHandler:()=>r(!1)}),n(tr,{isOpen:t,onClose:s})]})};var ge,Z=Ce.exports;ge=Z.createRoot,Z.hydrateRoot;const nr={initialColorMode:"dark",useSystemColorMode:!0},or=qe({config:nr}),ir=new Je,sr=document.getElementById("root"),ar=ge(sr),cr=n(x.exports.StrictMode,{children:n(Qe,{client:ir,children:n(We,{theme:or,children:n(Se,{children:n(rr,{})})})})});ar.render(cr);
