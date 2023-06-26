import{d as x,u as k,r,a as c,b as y,i as w,g as s,f as o,w as t,k as l,t as p,h as u}from"./index.1d225ae6.js";const P={class:"tooltips"},T={class:"row"},B={class:"flex xs12 md6"},U={class:"popover-example mt-5"},C={class:"flex xs12 md6"},N={class:"my-2 mx-2"},D=l(" Any text can be used for "),S={class:"va-link"},j=l(" tooltip showcase. Just anything you can possibly imagine to test "),z={class:"va-link"},A=l(" tooltip. But it can appear on the "),E={class:"va-link"},H=l(" . Or just "),I={class:"va-link"},J=l(" the item. "),R=x({__name:"Popovers",setup(L){const{t:n}=k(),h=r([{icon:"print",text:"print"},{icon:"star",text:"star"}]),b=r(["success","info","danger","warning","gray","dark"]),e=r({title:"Hey folks!",message:"This tooltip is amazing :D",icon:{icon:"print",text:"print"},color:"warning"});return(M,a)=>{const _=c("va-card-title"),m=c("va-select"),v=c("va-input"),V=c("va-button"),d=c("va-popover"),f=c("va-card-content"),g=c("va-card");return y(),w("div",P,[s("div",T,[s("div",B,[o(g,null,{default:t(()=>[o(_,null,{default:t(()=>[l(p(u(n)("popovers.popoverStyle")),1)]),_:1}),o(f,null,{default:t(()=>[o(m,{modelValue:e.value.color,"onUpdate:modelValue":a[0]||(a[0]=i=>e.value.color=i),class:"mb-4",label:"color scheme",options:b.value},null,8,["modelValue","options"]),o(m,{modelValue:e.value.icon,"onUpdate:modelValue":a[1]||(a[1]=i=>e.value.icon=i),class:"mb-4",label:"icon (font-awesome)",options:h.value,"track-by":"icon"},null,8,["modelValue","options"]),o(v,{modelValue:e.value.title,"onUpdate:modelValue":a[2]||(a[2]=i=>e.value.title=i),class:"mb-4",label:"Title"},null,8,["modelValue"]),o(v,{modelValue:e.value.message,"onUpdate:modelValue":a[3]||(a[3]=i=>e.value.message=i),class:"mb-4",label:"Message"},null,8,["modelValue"]),s("div",U,[o(d,{icon:e.value.icon.icon,color:e.value.color,title:e.value.title,message:e.value.message,placement:"right",open:""},{default:t(()=>[o(V,null,{default:t(()=>[l(p(u(n)("notificationsPage.popovers.showPopover")),1)]),_:1})]),_:1},8,["icon","color","title","message"])])]),_:1})]),_:1})]),s("div",C,[o(g,null,{default:t(()=>[o(_,null,{default:t(()=>[l(p(u(n)("popovers.popoverPlacement")),1)]),_:1}),o(f,null,{default:t(()=>[s("p",N,[D,o(d,{placement:"bottom",message:"Bottom tooltip"},{default:t(()=>[s("a",S,p(u(n)("notificationsPage.popovers.bottomTooltip")),1)]),_:1}),j,o(d,{placement:"right",message:"Right tooltip"},{default:t(()=>[s("a",z,p(u(n)("notificationsPage.popovers.rightTooltip")),1)]),_:1}),A,o(d,{placement:"left",message:"Left tooltip"},{default:t(()=>[s("a",E,p(u(n)("notificationsPage.popovers.leftTooltip")),1)]),_:1}),H,o(d,{placement:"top",message:"Top tooltip"},{default:t(()=>[s("a",I,p(u(n)("notificationsPage.popovers.topTooltip")),1)]),_:1}),J])]),_:1})]),_:1})])])])}}});export{R as default};
