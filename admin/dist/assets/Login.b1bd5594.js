import{d as x,u as y,r as t,A as C,B,C as E,D as S,x as n,o as j,c as M,f as l,g as r,b as _,w as v,E as N,j as g,t as f}from"./index.e1144731.js";const U=["onSubmit"],A={class:"auth-layout__options d-flex align-center justify-space-between"},D={class:"d-flex justify-center mt-3"},F=x({__name:"Login",setup(I){const{t:o}=y();t(""),t("");const m=t(!1),u=t([]),i=t([]),b=C(),h=B();E(()=>!u.value.length&&!i.value.length);const a=S({email:null,password:null}),d=async()=>{try{await h.login(a)}catch(c){console.log(c)}await b.push("/")};return(c,e)=>{const p=n("va-input"),w=n("va-checkbox"),V=n("router-link"),k=n("va-button");return j(),M("form",{onSubmit:N(d,["prevent"])},[l(p,{modelValue:a.email,"onUpdate:modelValue":e[0]||(e[0]=s=>a.email=s),modelModifiers:{trim:!0},class:"mb-3",type:"email",label:r(o)("auth.email"),error:!!u.value.length,"error-messages":u.value},null,8,["modelValue","label","error","error-messages"]),l(p,{modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=s=>a.password=s),modelModifiers:{trim:!0},class:"mb-3",type:"password",label:r(o)("auth.password"),error:!!i.value.length,"error-messages":i.value},null,8,["modelValue","label","error","error-messages"]),_("div",A,[l(w,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),class:"mb-0",label:r(o)("auth.keep_logged_in")},null,8,["modelValue","label"]),l(V,{class:"ml-1 va-link",to:{name:"recover-password"}},{default:v(()=>[g(f(r(o)("auth.recover_password")),1)]),_:1})]),_("div",D,[l(k,{class:"my-0",onClick:d},{default:v(()=>[g(f(r(o)("auth.login")),1)]),_:1})])],40,U)}}});export{F as default};