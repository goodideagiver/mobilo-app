import{r as b,a as c,j as t,F as _,b as we,B as xe}from"./vendor.2eb4e70c.js";import{c as oe}from"./zustand.d9e8c8dc.js";import{E as Te,H as Re,D as Ee,V as Ae,m as se,n as Ie,p as ke,A as Be,q as ze}from"./@chakra-ui/icons.ea23b253.js";import{V as D,K as Oe,F as E,b as A,I as W,c as ae,R as De,H as R,d as J,u as ce,e as $,f as j,A as je,M as U,g as He,h as G,i as q,j as le,B as F,T,S as Pe,k as ue,l as de,m as P,n as pe,C as _e,o as I,p as he,q as We,r as fe,s as me,t as X,P as Ne,v as Me,w as Fe,x as Le,y as Ke,z as Ve,D as $e,E as ve,G as Ue,J as Ge,L as qe,N as Qe,O as ge,Q as Je,U as Xe,W as Ye}from"./@chakra-ui/react.0a2a1b54.js";import{Q as Ze,a as et}from"./react-query.27f51779.js";import"./@emotion/react.25f65135.js";import"./@emotion/styled.a9120842.js";import"./framer-motion.105f128b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const S=e=>new Intl.NumberFormat("pl-PL",{style:"currency",currency:"PLN"}).format(e),N={["below 3.5t"]:600,["3.5t-5.5t"]:800},H={["below 3.5t"]:4.9,["3.5t-5.5t"]:12.5},Se=.5,V=(e,r,n)=>e*r+n*2*Se,Y=(e,r)=>e*H[r]+N[r],tt=(e,r,n)=>e.map(i=>i.id===n?{...i,textSummary:r}:i),rt=e=>({driveToPlace:{rate:0,hours:0,setRate:r=>e(n=>({...n,services:n.services.map(i=>i.id==="3"?{...i,price:V(r,n.driveToPlace.hours,n.settings.distanceBeforeRepair)}:i),driveToPlace:{...n.driveToPlace,rate:r}})),setHours:r=>e(n=>({...n,services:n.services.map(i=>i.id==="3"?{...i,price:V(n.driveToPlace.rate,r,n.settings.distanceBeforeRepair)}:i),driveToPlace:{...n.driveToPlace,hours:r}}))}}),nt=e=>({euroCourse:{rate:0,timestamp:0},setEuroCourse:(r,n)=>e(i=>({...i,euroCourse:{rate:r,timestamp:n}}))}),it={TOW_TO_BREAKDOWN:"H",TOW_BACK:"J",DRIVE_TO_CLIENT:"K",RENT_CAR:"L",DOCUMENTATION:"B",BONUS:"N"},ot={DISTANCE_TO_BREAKDOWN:"Q",DISTANCE_TOW_BACK:"W",VEHICLE_MASS:"E"},C={VIEW_SERVICES:"V",RESET:"R",SHOW_DRAWER:"D",FOCUS:ot,REMOVE_SERVICE:it},O={distanceAfterRepair:0,distanceBeforeRepair:0,vehicleWeight:"below 3.5t"},st=e=>({settings:O,setVehicleWeight:r=>e(n=>({...n,settings:{...n.settings,vehicleWeight:r},services:n.services.map(i=>i.id==="1"?{...i,price:Y(n.settings.distanceBeforeRepair,r)}:i)})),setDistanceBeforeRepair:r=>e(n=>({...n,services:n.services.map(i=>i.id==="1"?{...i,price:Y(r,n.settings.vehicleWeight)}:i.id==="3"?{...i,price:V(n.driveToPlace.rate,n.driveToPlace.hours,r)}:i),settings:{...n.settings,distanceBeforeRepair:r}})),setDistanceAfterRepair:r=>e(n=>({...n,services:n.services.map(i=>i.id==="5"?{...i,price:r<50?300:r*1.41*4+60.03*4}:i),settings:{...n.settings,distanceAfterRepair:r}}))}),Z=[{title:"Holowanie z miejsca awarii",id:"1",mixGroup:1,price:N[O.vehicleWeight]+H[O.vehicleWeight]*O.distanceBeforeRepair,textSummary:"",active:!1,beforeRepair:!0,deleteServiceShortcut:C.REMOVE_SERVICE.TOW_TO_BREAKDOWN},{title:"Auto zast\u0119pcze",id:"2",mixGroup:2,price:0,textSummary:"",active:!1,beforeRepair:!0,deleteServiceShortcut:C.REMOVE_SERVICE.RENT_CAR},{title:"Dojazd do miejsca awarii",id:"3",mixGroup:1,price:0,textSummary:"",active:!1,beforeRepair:!0,deleteServiceShortcut:C.REMOVE_SERVICE.DRIVE_TO_CLIENT},{title:"Bonus za napraw\u0119 na miejscu",id:"4",mixGroup:1,price:100,textSummary:"Bonus za napraw\u0119 na miejscu 100 z\u0142",active:!1,deleteServiceShortcut:C.REMOVE_SERVICE.BONUS},{title:"Odwiezienie auta",id:"5",mixGroup:1,price:O.distanceAfterRepair<50?300:O.distanceAfterRepair*1.41*4+60.03*4,textSummary:"",active:!1,deleteServiceShortcut:C.REMOVE_SERVICE.TOW_BACK},{title:"Dokumentacja",id:"6",mixGroup:1,price:100,textSummary:"Rycza\u0142t 100 z\u0142 za wykonanie dokumentacji",active:!1,deleteServiceShortcut:C.REMOVE_SERVICE.DOCUMENTATION}],at=e=>({services:Z,toggleService:r=>e(n=>({...n,services:n.services.map(i=>i.id===r?{...i,active:!i.active}:i)})),resetServices:()=>e(r=>({...r,services:Z})),setServicePrice:(r,n)=>e(i=>({...i,services:i.services.map(s=>s.id===r?{...s,price:n}:s)})),setServiceTextSummary:(r,n)=>e(i=>({...i,services:tt(i.services,r,n)}))}),d=oe()((...e)=>({...st(...e),...at(...e),...rt(...e),...nt(...e)})),M=e=>r=>{try{const n=e(r);return n instanceof Promise?n:{then(i){return M(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return M(i)(n)}}}},ct=(e,r)=>(n,i,s)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:h=>h,version:0,merge:(h,w)=>({...w,...h}),...r},a=!1;const l=new Set,p=new Set;let u;try{u=o.getStorage()}catch{}if(!u)return e((...h)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...h)},i,s);const m=M(o.serialize),y=()=>{const h=o.partialize({...i()});let w;const v=m({state:h,version:o.version}).then(z=>u.setItem(o.name,z)).catch(z=>{w=z});if(w)throw w;return v},f=s.setState;s.setState=(h,w)=>{f(h,w),y()};const g=e((...h)=>{n(...h),y()},i,s);let x;const Q=()=>{var h;if(!u)return;a=!1,l.forEach(v=>v(i()));const w=((h=o.onRehydrateStorage)==null?void 0:h.call(o,i()))||void 0;return M(u.getItem.bind(u))(o.name).then(v=>{if(v)return o.deserialize(v)}).then(v=>{if(v)if(typeof v.version=="number"&&v.version!==o.version){if(o.migrate)return o.migrate(v.state,v.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return v.state}).then(v=>{var z;return x=o.merge(v,(z=i())!=null?z:g),n(x,!0),y()}).then(()=>{w?.(x,void 0),a=!0,p.forEach(v=>v(x))}).catch(v=>{w?.(void 0,v)})};return s.persist={setOptions:h=>{o={...o,...h},h.getStorage&&(u=h.getStorage())},clearStorage:()=>{u?.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>Q(),hasHydrated:()=>a,onHydrate:h=>(l.add(h),()=>{l.delete(h)}),onFinishHydration:h=>(p.add(h),()=>{p.delete(h)})},Q(),x||g},lt=ct,L=oe()(lt(e=>({extendedInfo:!0,show:()=>e({extendedInfo:!0}),hide:()=>e({extendedInfo:!1})}))),ut=(e,r)=>{const[n,i]=b.exports.useState(!1),s=b.exports.useCallback(a=>{a.shiftKey&&i(!0),a.key===e&&n&&r()},[n,e]),o=b.exports.useCallback(a=>{a.shiftKey||i(!1)},[n,e]);return b.exports.useEffect(()=>(window.addEventListener("keydown",s),window.addEventListener("keyup",o),()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",o)}),[s,o]),{modifierPressed:n}},dt="_wrapper_pg9d5_1",pt="_keyWrapper_pg9d5_9",ht="_scaleIn_pg9d5_1",ft="_left_pg9d5_41",mt="_scaleInLeft_pg9d5_1",K={wrapper:dt,keyWrapper:pt,scaleIn:ht,left:ft,scaleInLeft:mt},k=({children:e,keyboardKey:r,condition:n=!0,callback:i,direction:s})=>{const o=()=>{n&&i()},{modifierPressed:a}=ut(r,o);return c(D,{className:K.wrapper,children:[e,n&&a&&t("span",{className:`${K.keyWrapper} ${s==="left"?K.left:""}`,children:t(Oe,{children:r.toString().toUpperCase()})})]})},vt=({inputHelperText:e,inputTitle:r,value:n,onChange:i,focusShortcut:s})=>{const o=b.exports.useRef(null),a=L(l=>l.extendedInfo);return c(E,{h:"100%",display:"flex",flexDir:"column",justifyContent:"space-between",children:[t(A,{children:r}),t(k,{callback:()=>{o.current?.focus()},keyboardKey:s,children:t(W,{ref:o,type:"number",min:"0",value:n,onChange:i})}),a&&t(ae,{children:e})]})},gt=()=>{const e=d(n=>n.setVehicleWeight);return{vehicleWeightInputHandler:n=>{(n==="3.5t-5.5t"||n==="below 3.5t")&&e(n)}}},St=()=>{const{vehicleWeightInputHandler:e}=gt(),r=b.exports.useRef(null),n=()=>{const s=r.current?.querySelectorAll("input");s&&[...s].find(o=>o.checked)?.focus()},i=L(s=>s.extendedInfo);return c(E,{h:"100%",display:"flex",flexDir:"column",justifyContent:"space-between",children:[t(A,{as:"legend",children:"Masa pojazdu"}),t(k,{keyboardKey:C.FOCUS.VEHICLE_MASS,callback:n,children:t(De,{ref:r,onChange:e,defaultValue:"below 3.5t",children:c(R,{spacing:"24px",children:[t(J,{value:"below 3.5t",children:"Poni\u017Cej 3.5t"}),t(J,{value:"3.5t-5.5t",children:"3.5t - 5.5t"})]})})}),i&&t(ae,{children:"Do rozliczania holowania"})]})},yt=()=>{const{setDistanceAfterRepair:e,setDistanceBeforeRepair:r,settings:n}=d(o=>o);return{distanceInputHandler:o=>{r(Number(o.target.value))},distanceAfterRepairInputHandler:o=>{e(Number(o.target.value))},distanceBeforeRepair:n.distanceBeforeRepair,distanceAfterRepair:n.distanceAfterRepair}},Ct=()=>{const{distanceAfterRepair:e,distanceAfterRepairInputHandler:r,distanceBeforeRepair:n,distanceInputHandler:i}=yt(),{isOpen:s,onOpen:o,onClose:a}=ce(),l=b.exports.useRef(null),[p]=$("(min-width: 800px)"),u=[{inputHelperText:"Odleg\u0142o\u015B\u0107 w jedn\u0105 stron\u0119 (km)",inputTitle:"Odleg\u0142o\u015B\u0107",value:n,onChange:i,focusShortcut:C.FOCUS.DISTANCE_TO_BREAKDOWN},{inputHelperText:"Odleg\u0142o\u015B\u0107 w jedn\u0105 stron\u0119 (km)",inputTitle:"Odleg\u0142o\u015B\u0107 odwiezienia",value:e,onChange:r,focusShortcut:C.FOCUS.DISTANCE_TOW_BACK}].map(y=>t(vt,{...y},y.inputTitle)),m=c(_,{children:[u," ",t(St,{})]});return p?t(R,{h:"100%",rounded:"2xl",p:"4",shadow:"lg",border:"4px",borderColor:"gray.700",align:"baseline",children:m}):c(_,{children:[t(j,{colorScheme:"blue",size:"lg",rounded:"full",onClick:o,"aria-label":"Edytuj us\u0142ugi",icon:t(Te,{fontSize:"3xl",m:"2"})}),t(je,{isOpen:s,leastDestructiveRef:l,onClose:a,children:t(U,{children:c(He,{maxWidth:"95%",alignSelf:"center",children:[t(G,{fontSize:"lg",fontWeight:"bold",children:"Edytuj us\u0142ugi"}),c(q,{children:[" ",t(D,{gap:8,h:"100%",borderColor:"gray.700",align:"baseline",children:m})]}),t(le,{mt:"8",children:t(F,{ref:l,onClick:a,children:"Zamknij"})})]})})})]})},bt=({drawerOpenHandler:e})=>t(k,{keyboardKey:C.SHOW_DRAWER,callback:e,children:t(T,{hasArrow:!0,label:"Menu z us\u0142ugami",children:t(j,{"aria-label":"Poka\u017C us\u0142ugi",onClick:e,children:t(Re,{})})})}),wt=()=>{const r=d(i=>i.services).filter(i=>i.active),n=r.filter(i=>i.price>0).length>0;return{servicesCount:r.length,hasServices:r.length>0,hasServicesWithValue:n}},xt=({summaryOpenHandler:e})=>{const{resetServices:r}=d(p=>p),{hasServices:n,hasServicesWithValue:i}=wt(),{extendedInfo:s,hide:o,show:a}=L(p=>p),l=p=>{p.target.checked?a():o()};return c(D,{children:[c(R,{children:[t(k,{condition:n,keyboardKey:C.RESET,callback:r,children:t(T,{hasArrow:!0,label:"Resetuj wszystko",children:t(j,{disabled:!n,onClick:r,"aria-label":"Resetuj wszystko",children:t(Ee,{})})})}),t(k,{condition:i,keyboardKey:C.VIEW_SERVICES,callback:e,children:t(T,{hasArrow:!0,label:"Podsumowanie us\u0142ug",children:t(j,{disabled:!i,onClick:e,"aria-label":"Podsumowanie us\u0142ug",children:t(Ae,{})})})})]}),t(T,{hasArrow:!0,label:`Wy\u015Bwietl ${s?"mniej":"wi\u0119cej"} informacji`,placement:"left",children:t(E,{display:"flex",alignItems:"center",children:c(D,{children:[t(A,{htmlFor:"extended-info",mb:"0",children:"Informacje"}),t(Pe,{isChecked:s,onChange:l,id:"extended-info"})]})})})]})},Tt=({activeServiceSummary:e,activeServices:r})=>{const n=r.length,i=n>0,s=S(e),o=L(a=>a.extendedInfo);return t(ue,{h:"100%",rounded:"2xl",p:"4",shadow:"2xl",border:"4px",borderColor:"green.700",children:t(de,{h:"100%",children:c(P,{children:[t(pe,{children:c(R,{children:[i&&t(_e,{size:"30px",bg:"green.700",children:n}),t(I,{children:"Razem"})]})}),t(he,{children:s}),o&&t(We,{children:"Ca\u0142kowita warto\u015B\u0107 us\u0142ug"})]})})})},ee=({drawerOpenHandler:e,summaryOpenHandler:r})=>{const i=d(u=>u.services).filter(u=>u.active),s=i.reduce((u,m)=>u+m.price,0),o=d(u=>u.euroCourse),a=Boolean(o.rate&&o.rate>0),[l]=$("(min-width: 800px)");return c(fe,{padding:l?"0":"8",w:"100%",align:"center",justify:"space-between",gap:"2",children:[t(bt,{drawerOpenHandler:e}),t(Ct,{}),a&&t(ue,{padding:"2",rounded:"2xl",border:"4px",borderColor:"blue.800",h:"100%",children:t(me,{h:"100%",children:c(D,{children:[t(I,{fontWeight:"bold",children:"Kurs EUR:"}),t(I,{children:S(o.rate)})]})})}),t(Tt,{activeServices:i,activeServiceSummary:s}),t(xt,{summaryOpenHandler:r})]})},Rt=({badges:e,hasIncompatibleServices:r})=>{const n=e.map(o=>t(X,{colorScheme:"green",children:o}));return t(D,{flexBasis:"10%",children:r?t(X,{colorScheme:"purple",variant:"outline",children:"Niekompatybilna"}):n})},Et="_button_1wpqb_1",te={button:Et},At=({children:e,text:r,onCopy:n})=>c(Ne,{children:[t(Me,{children:t("button",{className:te.button,children:t(T,{hasArrow:!0,label:"Poka\u017C ca\u0142o\u015B\u0107",children:e})})}),c(Fe,{shadow:"2xl",children:[t(Le,{}),t(Ke,{}),t(Ve,{children:"Informacje o us\u0142udze"}),t($e,{children:t(T,{hasArrow:!0,label:"Skopiuj tekst",children:t("button",{className:te.button,onClick:n,children:r.split("|").map(i=>t("p",{children:i}))})})})]})]}),ye=({children:e,hasCopied:r})=>t(T,{closeOnClick:!1,bg:r?"green.500":"gray.500",hasArrow:!0,label:r?"Skopiowano":"Skopiuj",children:e}),It=({hasCopied:e,onCopy:r})=>t(ye,{hasCopied:e,children:t(j,{onClick:r,"aria-label":"Skopiuj do schowka",children:e?t(se,{}):t(Ie,{})})}),kt={justifyContent:"space-between",flex:"0 0 350px",bg:"chakra-body-bg",rounded:"md",shadow:"md",p:"2"},Bt={fontSize:"xs",fontFamily:"mono",maxH:"4em",overflow:"auto"},zt={fontStyle:"italic"},Ot={border:"2px",borderColor:"red.700"},Dt=e=>{const r={\u0105:"a",\u0107:"c",\u0119:"e",\u0142:"l",\u0144:"n",\u00F3:"o",\u015B:"s",\u017A:"z",\u017C:"z"};return e.toLowerCase().replace(/[ąćęłńóśźż]/g,n=>r[n]).toUpperCase()},jt=(e="",r)=>{const n=Dt(e).split("|").map(p=>p.trim()).join(`
`).trim(),{onCopy:i,hasCopied:s}=ve(n);return{onCopy:()=>{i(),navigator.clipboard.writeText(n)},hasCopied:s,errorStyle:r?Ot:{},textStyle:r?zt:{}}},Ht=({textToCopy:e,hasError:r})=>{const{errorStyle:n,hasCopied:i,textStyle:s,onCopy:o}=jt(e,r);return e?c(R,{...kt,...n,children:[t(At,{onCopy:o,text:e,children:t(I,{...s,...Bt,children:e.split("|").map(a=>t("p",{children:a}))})}),t(It,{hasCopied:i,onCopy:o})]}):null},Pt=({onDelete:e})=>t(T,{hasArrow:!0,label:"Usu\u0144 us\u0142ug\u0119",children:t(j,{onClick:e,"aria-label":"Usu\u0144 us\u0142ug\u0119",children:t(ke,{})})}),_t=({price:e})=>{const r=new Intl.NumberFormat("pl-PL",{style:"currency",currency:"PLN"}).format(e),{onCopy:n,hasCopied:i}=ve(e.toFixed(2));return t(de,{display:"flex",justifyContent:"center",w:"fit-content",flex:"0 0 120px",children:t(ye,{hasCopied:i,children:c("button",{onClick:()=>{n(),navigator.clipboard.writeText(e.toString())},children:[t(pe,{children:"Op\u0142ata"}),t(he,{whiteSpace:"nowrap",children:i?t(se,{}):r})]})})})},Wt=({children:e,shortcutKey:r,serviceDeleteHandler:n})=>r?t(k,{direction:"left",callback:n,keyboardKey:r,children:e}):t(_,{children:e}),Nt=e=>{if(!e)return{hasErrors:!1};const i=d(s=>s.services).filter(s=>s.active).filter(s=>e.includes(s.id));return{hasErrors:i.length>0,conflictingServices:i}},Mt=(e,r)=>{const n=d(m=>m.services.find(y=>y.id===e)),i=n?.active,s=d(m=>m.toggleService),o=()=>{s(e)},{hasErrors:a,conflictingServices:l}=Nt(r),p=a?"red.900":"transparent",u=`Ta us\u0142uga nie mo\u017Ce by\u0107 \u0142\u0105czona z: ${l?.map(m=>m.title).join(", ")}`;return{conflictingServices:l,hasErrors:a,bgColor:p,isActive:i,deleteServiceButtonHandler:o,conflictingServicesText:u,shortcutKey:n?.deleteServiceShortcut}},Ft={gap:"4",borderBottom:"2px",borderColor:"gray.600",p:"2",px:"4",align:"center",justify:"space-between",w:"100%"},B=({service:e,textToCopy:r,children:n,serviceId:i,hasError:s,cantBeMixedWith:o})=>{const{title:a,price:l,badges:p}=e,{bgColor:u,conflictingServicesText:m,deleteServiceButtonHandler:y,hasErrors:f,isActive:g,shortcutKey:x}=Mt(i,o);return g?c(fe,{...Ft,bg:u,children:[t(I,{fontWeight:"bold",flex:"1 0 100px",children:a}),n,t(Rt,{hasIncompatibleServices:f,badges:p}),t(Ht,{hasError:s||f,textToCopy:f?m:r}),t(_t,{price:l}),t(Wt,{shortcutKey:x,serviceDeleteHandler:y,children:t(Pt,{onDelete:y})})]}):null},Lt=()=>d(i=>i.services.find(s=>s.id==="6"))?.active?t(B,{serviceId:"6",service:{title:"Dokumentacja",price:100,badges:["rycza\u0142t","po naprawie"],active:!0,serviceType:"after repair",serviceSummaryText:"Dokumentacja",preventCombineGroup:null},textToCopy:"Rycza\u0142t 100 z\u0142 za sporz\u0105dzenie dokumentacji"}):null,Kt=()=>{const e=d(f=>f.services.find(g=>g.id==="3")),{hours:r,rate:n,setHours:i,setRate:s}=d(f=>f.driveToPlace),o=d(f=>f.settings.distanceBeforeRepair),a=f=>{i(+f.target.value)},l=f=>{s(+f.target.value)};if(!e?.active)return null;const u=!r||!n||!o||r<0||n<0||o<0||r===0,m=`
      Dojazd i powrot z miejsca awarii:
      CZAS PRACY MECHANIKA ${r} h X STAWKA ${S(n)}/h + ${o*2} KM X ${S(Se)} = ${S(e.price)}
`.toUpperCase(),y=u?"Podaj: odleg\u0142o\u015B\u0107, stawk\u0119 oraz roboczogodziny \u017Ceby obliczy\u0107 warto\u015B\u0107":m;return t(B,{cantBeMixedWith:["2","1","5"],hasError:u,serviceId:"3",service:{active:!0,badges:["przed napraw\u0105"],price:e.price,title:"Dojazd do miejsca awarii",preventCombineGroup:null,serviceType:"before repair"},textToCopy:y,children:c(R,{children:[c(E,{children:[t(A,{children:"Roboczogodziny"}),t(W,{onChange:a,value:r,min:"0",placeholder:"RBH",type:"number"})]}),c(E,{children:[t(A,{children:"Stawka"}),t(W,{onChange:l,value:n,min:"0",placeholder:"stawka",type:"number"})]})]})})},Ce=[{name:"Audi A4",price:100,id:"1"},{name:"Audi A6",price:200,id:"2"},{name:"Audi A8",price:300,id:"3"}],Vt=(e,r,n)=>{const i=`Auto zast\u0119pcze: ${n}`,s=`Wynajem na ${r} dni, stawka ${S(e)} za dzie\u0144`,o=`Razem: ${S(e*r)}`;return[i,s,o].join(" | ")},$t=()=>{const[e,r]=b.exports.useState(0),[n,i]=b.exports.useState(0),[s,o]=b.exports.useState(""),a=d(f=>f.services.find(g=>g.id==="2")),l=d(f=>f.setServicePrice),p=f=>{const g=f.target.valueAsNumber;r(g),isFinite(g)&&isFinite(n)&&l("2",g*n)},u=f=>{const g=Ce.find(x=>x.name===f.target.value)?.price;o(f.target.value),g&&i(g),isFinite(e)&&g&&isFinite(g)?l("2",e*g):l("2",0)},m=e>0&&s!==""&&n>0,y=m?Vt(n,e,s):"Nie wybrano modelu auta lub dni";return{days:e,daysInputHandler:p,carSelectHandler:u,shouldDisplayText:m,priceFromStore:a.price,textToCopy:y}},Ut=({name:e,price:r,model:n})=>t("option",{style:{fontSize:"12px",textAlign:"center"},value:n,children:`${e} - ${S(r)} / doba`},e),Gt=()=>{const{days:e,carSelectHandler:r,daysInputHandler:n,shouldDisplayText:i,priceFromStore:s,textToCopy:o}=$t();return c(B,{hasError:!i,serviceId:"2",service:{active:!0,badges:["przed napraw\u0105"],price:s,title:"Auto zast\u0119pcze",preventCombineGroup:null,serviceType:"before repair"},textToCopy:o,children:[c(E,{flex:"0 0 200px",children:[t(A,{children:"Model"}),t(Ue,{flex:"0 0 200px",onChange:r,placeholder:"Wybierz model",children:Ce.map(a=>t(Ut,{name:a.name,price:a.price,model:a.name},a.name))})]}),c(E,{flex:"0 0 200px",children:[t(A,{children:"Dni"}),t(W,{step:0,onChange:n,value:e,min:"0",placeholder:"days",type:"number"})]})]})},qt=()=>d(n=>n.services.find(i=>i.id==="4"))?.active?t(B,{cantBeMixedWith:["5","1","2"],serviceId:"4",service:{active:!0,badges:["po naprawie","rycza\u0142t"],price:100,title:"Bonus za napraw\u0119 na miejscu",preventCombineGroup:null,serviceType:"after repair"},textToCopy:"Bonus 100 z\u0142 za napraw\u0119 na miejscu"}):null,Qt="https://api.nbp.pl/api/exchangerates/rates/A/EUR/?format=json",Jt=async()=>{const r=await(await fetch(Qt)).json();return{rate:r.rates[0].mid,date:r.rates[0].effectiveDate}},Xt=(e,r)=>{const n=60.03*e,i=r*1.41*e;return`OP\u0141ATA MANIPULACYJNA = 60,03 EURO NETTO  x KURS ${e}
   = ${S(n)}
  OP\u0141ATA ZA ODLEG\u0141O\u015A\u0106 1,41 EUR/km NETTO X ${r} km x KURS ${e} 
  = ${S(i)}
  RAZEM = ${S(n+i)}
  `},Yt=()=>{const e=d(o=>o.services.find(a=>a.id==="5")),r=d(o=>o.settings.distanceAfterRepair),n=d(o=>o.setEuroCourse),i=d(o=>o.euroCourse),s=e?.active;return b.exports.useEffect(()=>{if(!s||r<50||(Date.now()-i.timestamp)/1e3/60<60)return;(async()=>{const l=await Jt();n(l.rate,Date.now())})()},[i,s,r]),s?r<50?t(B,{serviceId:"5",service:{active:!0,badges:["po naprawie","rycza\u0142t"],price:e.price,title:"Odwiezienie pojazdu do 50 km",preventCombineGroup:null,serviceType:"after repair"},textToCopy:`Odwiezienie pojazdu klienta do 50 km 300 z\u0142 netto\r
`}):t(B,{serviceId:"5",service:{active:!0,badges:["po naprawie"],price:e.price,title:"Odwiezienie pojazdu od 50 km",preventCombineGroup:null,serviceType:"after repair"},textToCopy:Xt(i.rate,r)}):null},Zt=(e,r)=>{const n=`Masa pojazdu: ${e==="below 3.5t"?"poni\u017Cej 3.5t":"3.5t-5.5t"}`,s=`Op\u0142ata manipulacyjna: ${S(N[e])}`,o=S(r*H[e]),a=`Op\u0142ata za odleg\u0142o\u015B\u0107: ${r} km X ${S(H[e])} = ${o}`,p=`Razem: ${S(r*H[e]+N[e])}`;return[n,s,a,p].join(" | ")},er=({serviceId:e})=>{const{distanceBeforeRepair:r,vehicleWeight:n}=d(l=>l.settings),i=d(l=>l.services.find(p=>p.id===e));if(!i?.active)return null;const o=Zt(n,r),a={title:"Holowanie",price:i.price,badges:["przed napraw\u0105"],active:!0,serviceType:"after repair",serviceSummaryText:"Dokumentacja",preventCombineGroup:null};return t(B,{cantBeMixedWith:["3","4"],serviceId:e,service:a,textToCopy:o})},tr=({drawerOpenHandler:e})=>{const r=d(s=>s.services).filter(s=>s.active).length>0,n=c(_,{children:[t(Lt,{}),t(er,{serviceId:"1"}),t(Gt,{}),t(Kt,{}),t(qt,{}),t(Yt,{})]}),i=t(me,{h:"100%",children:t(R,{children:t(Ge,{in:!0,children:t(k,{callback:e,keyboardKey:C.SHOW_DRAWER,children:c(F,{display:"flex",gap:".4rem",rounded:"3xl",onClick:e,children:[t(Be,{}),t(I,{children:"Dodaj us\u0142ug\u0119"})]})})})})});return t(P,{border:"2px",borderColor:"gray.600",overflowY:"auto",shadow:"dark-lg",rounded:"xl",transition:"opacity 0.3s ease-in-out",flex:"1",h:"100%",bg:"chakra-subtle-bg",children:r?n:i})},re=({children:e,text:r})=>c(P,{bg:"gray.800",shadow:"lg",w:"100%",p:"2",rounded:"md",children:[t(I,{children:r}),e]}),ne=({active:e,children:r,onClick:n})=>t(F,{border:"4px",borderColor:e?"green.500":"transparent",onClick:n,width:"100%",children:r}),rr=({isOpen:e,drawerCloseHandler:r})=>{const n=d(a=>a.services),i=d(a=>a.toggleService),[s,o]=n.reduce((a,l)=>(l.beforeRepair?a[0].push(l):a[1].push(l),a),[[],[]]);return c(qe,{isOpen:e,placement:"left",onClose:r,children:[t(U,{}),c(Qe,{children:[t(ge,{}),t(G,{children:"Wybierz us\u0142ug\u0119 mobilno\u015Bci"}),t(q,{p:"2",children:c(P,{gap:"4",align:"center",h:"100%",children:[t(re,{text:"Przed napraw\u0105",children:s.map(a=>t(ne,{active:a.active,onClick:()=>i(a.id),children:a.title},a.id))}),t(re,{text:"Po naprawie",children:o.map(a=>t(ne,{active:a.active,onClick:()=>i(a.id),children:a.title},a.id))})]})})]})]})},nr=({service:e})=>{const r=S(e.price);return c(R,{w:"100%",justifyContent:"space-between",gap:"8px",children:[t("span",{children:e.title}),t("span",{children:r})]})},ir=({isOpen:e,onClose:r})=>{const n=d(i=>i.services).filter(i=>i.active&&i.price>0);return c(Je,{isCentered:!0,motionPreset:"slideInBottom",size:"xl",isOpen:e,onClose:r,children:[t(U,{}),c(Xe,{children:[t(G,{children:"Podsumowanie us\u0142ug"}),t(ge,{}),t(q,{children:n.map(i=>t(nr,{service:i},i.id))}),t(le,{children:t(F,{children:"Drukuj"})})]})]})},or=()=>{const[e,r]=b.exports.useState(!1),{isOpen:n,onOpen:i,onClose:s}=ce(),[o]=$("(min-width: 800px)");return c(P,{overflow:"hidden",padding:o?"8":"0",gap:"16px",h:"100vh",children:[o&&t(ee,{summaryOpenHandler:i,drawerOpenHandler:()=>r(!0)}),t(tr,{drawerOpenHandler:()=>r(!0)}),!o&&t(ee,{summaryOpenHandler:i,drawerOpenHandler:()=>r(!0)}),t(rr,{isOpen:e,drawerCloseHandler:()=>r(!1)}),t(ir,{isOpen:n,onClose:s})]})};var be,ie=we.exports;be=ie.createRoot,ie.hydrateRoot;const sr={initialColorMode:"dark",useSystemColorMode:!0},ar=ze({config:sr}),cr=new Ze,lr=document.getElementById("root"),ur=be(lr),dr=t(b.exports.StrictMode,{children:t(et,{client:cr,children:t(Ye,{theme:ar,children:t(xe,{children:t(or,{})})})})});ur.render(dr);
//# sourceMappingURL=index.7ffca0dd.js.map
