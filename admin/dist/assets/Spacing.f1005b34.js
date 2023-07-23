import{d as P,u as w,r as i,L as h,x as _,o as f,c as y,b as e,f as o,g as n,t as C,Y as k,R as b,w as x,j as S}from"./index.712643e1.js";import{_ as V}from"./ColorPresentation.4e066b8c.js";import"./useToast-28d879a9.f8f4ab41.js";const z={class:"spacing-playground"},N={class:"row"},U={class:"flex xs12 sm6 md4"},B={class:"flex xs12 sm6 md2"},D={class:"flex xs12 sm6 md4"},L={class:"flex xs12 sm6 md2"},M={key:0,class:"row"},j={class:"flex xs12 content"},E={class:"code"},I={class:"row"},R={class:"flex xs12"},T={class:"playground-component"},Y=e("div",{class:"playground-component__inner"},null,-1),q=[Y],A={class:"row"},F={class:"flex xs12 sm6"},G={class:"flex xs12 sm6"},H=P({__name:"SpacingPlayground",setup($){const{t:a}=w(),p=i(["a","y","x","t","r","b","l"]),m=i(["1","2","3","4","5","auto"]),t=i("y"),d=i("x"),c=i("3"),r=i("3"),g=h(()=>t.value&&c.value?`m${t.value}-${c.value}`:""),v=h(()=>d.value&&r.value?`p${d.value}-${r.value}`:"");return(K,l)=>{const u=_("va-select");return f(),y("div",z,[e("div",N,[e("div",U,[o(u,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),options:p.value,label:n(a)("spacingPlayground.margin"),"max-height":null,"no-clear":""},null,8,["modelValue","options","label"])]),e("div",B,[o(u,{modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=s=>c.value=s),options:m.value,label:n(a)("spacingPlayground.value"),"max-height":null,"no-clear":""},null,8,["modelValue","options","label"])]),e("div",D,[o(u,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=s=>d.value=s),options:p.value,label:n(a)("spacingPlayground.padding"),"max-height":null,"no-clear":""},null,8,["modelValue","options","label"])]),e("div",L,[o(u,{modelValue:r.value,"onUpdate:modelValue":l[3]||(l[3]=s=>r.value=s),options:m.value,label:n(a)("spacingPlayground.value"),"max-height":null,"no-clear":""},null,8,["modelValue","options","label"])])]),n(g)||n(v)?(f(),y("div",M,[e("div",j,[e("pre",E,'class="'+C((n(g)+" "+n(v)).trim())+'"',1)])])):k("",!0),e("div",I,[e("div",R,[e("div",T,[e("div",{class:b(["playground-component__margin",n(g)])},[e("div",{class:b(["playground-component__padding",n(v)])},q,2)],2)])])]),e("div",A,[e("div",F,[o(V,{color:"#ffd093",name:n(a)("spacingPlayground.margin"),width:40},null,8,["name"])]),e("div",G,[o(V,{color:"#c9f7db",name:n(a)("spacingPlayground.padding"),width:40},null,8,["name"])])])])}}}),J={class:"spacing flex xs12 md12"},X=P({__name:"Spacing",setup($){const{t:a}=w();return(p,m)=>{const t=_("va-card-title"),d=_("va-card-content"),c=_("va-card");return f(),y("div",J,[o(c,null,{default:x(()=>[o(t,null,{default:x(()=>[S(C(n(a)("spacing.title")),1)]),_:1}),o(d,null,{default:x(()=>[o(H,{title:""})]),_:1})]),_:1})])}}});export{X as default};
