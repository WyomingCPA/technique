import{d as L,G as A,y as D,g as x,B as C,r as l,o as i,c as _,e as s,w as t,F as I,i as S,D as n,b as a,t as d,I as y,j,h as G,R}from"./index.bbbc36d1.js";const T={class:"icon-set"},q={class:"flex md4 xs12 justify-center"},H={class:"flex md4 xs12 justify-center"},J={class:"flex md4 xs12 justify-center content icon-set__header__size"},K={key:0},M={class:"vuestic-icon mb-3 pt-3"},O={class:"icon-text"},Q=L({__name:"IconSet",props:{name:null,sets:null},setup(w){const b=w,{colors:f}=A(),{t:v}=D(),u=x(""),m=x(30),g=x({formatter:e=>`${e}px`,min:20,max:40}),p=C(()=>{for(const e of b.sets)if(e.href===b.name)return e;return{name:"",href:"",prefix:"",lists:[],filteredLists:[]}}),B=C(()=>{if(!u.value)return p.value.lists;const e=[];return p.value.lists.forEach(c=>{c.icons.forEach(r=>{!r.toUpperCase().includes(u.value.toUpperCase())||e.includes(r)||e.push(r)})}),[{name:"Found Icons",icons:e}]}),N=e=>`${p.value.prefix}-${e}`;return(e,c)=>{const r=l("va-card-title"),U=l("va-button"),z=l("va-icon"),$=l("va-input"),E=l("va-slider"),k=l("va-card-content"),V=l("va-card");return i(),_("div",T,[s(V,{class:"icon-set__header mb-4 pb-3"},{default:t(()=>[s(r,null,{default:t(()=>[a("h2",{class:"my-0 ml-2",style:y({color:n(f).dark})},d(n(p).name),5)]),_:1}),s(k,{class:"row"},{default:t(()=>[a("div",q,[s(U,{preset:"outline","border-color":"primary",color:"primary",to:{name:"icon-sets"}},{default:t(()=>[j(d(n(v)("icons.back")),1)]),_:1})]),a("div",H,[s($,{modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=o=>u.value=o),label:n(v)("icons.search"),clearable:""},{prependInner:t(()=>[s(z,{class:"icon-left input-icon",name:"search"})]),_:1},8,["modelValue","label"])]),a("div",J,[a("span",{class:"ma-2 pr-2 shrink icon-set__header__size--smaller",style:y({color:n(f).dark})},"A",4),s(E,{modelValue:m.value,"onUpdate:modelValue":c[1]||(c[1]=o=>m.value=o),"value-visible":"",style:{flex:"1"},"label-value":`${m.value}px`,min:g.value.min,max:g.value.max},null,8,["modelValue","label-value","min","max"]),a("span",{class:"ma-2 pl-2 shrink icon-set__header__size--bigger",style:y({color:n(f).dark})},"A",4)])]),_:1})]),_:1}),(i(!0),_(I,null,S(n(B),(o,F)=>(i(),G(V,{key:F,class:"flex md12"},{default:t(()=>[s(r,null,{default:t(()=>[j(d(o.name),1)]),_:2},1024),s(k,{class:"row"},{default:t(()=>[o.icons.length===0?(i(),_("span",K,d(n(v)("icons.none")),1)):R("",!0),(i(!0),_(I,null,S(o.icons,h=>(i(),_("div",{key:h,class:"flex justify-center xs3 md1 mb-2 icon-grid-container",style:{"flex-direction":"column"}},[a("div",M,[s(z,{name:N(h),size:m.value},null,8,["name","size"])]),a("div",O,d(h),1)]))),128))]),_:2},1024)]),_:2},1024))),128))])}}});export{Q as default};
