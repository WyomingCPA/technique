import{d as w,r as l,m as b,H as d,a as k,b as p,i as u,f as C,w as B,g as r,p as N,h as m,t as v,l as S}from"./index.1d225ae6.js";import{u as T}from"./useToast.615c8757.js";const V={class:"color-presentation"},z={key:0,class:"color-presentation__description"},I={class:"color-presentation__name"},P={class:"color-presentation__text"},$=["value"],G=w({__name:"ColorPresentation",props:{color:{default:""},variant:{default:()=>[]},width:{default:0},name:{default:""},description:{default:""}},setup(t){const o=t,i=l({content:"Click to copy the color to clipboard",placement:"right"}),{getColor:a,getGradientBackground:_}=b(),s=d(()=>{const e=a(o.color);return o.variant.includes("gradient")?_(e):e}),h=d(()=>{const e=()=>{if(o.variant.includes("hovered"))return"brightness(115%)";if(o.variant.includes("pressed"))return"brightness(85%)"};return{background:s.value,filter:e(),width:o.width?`${o.width}px`:""}}),c=l();function f(){var e,n;(n=(e=navigator.clipboard)==null?void 0:e.writeText)==null||n.call(e,c.value.value).then(x)}const{init:g}=T();function x(){g({message:"The color's copied to your clipboard",position:"bottom-right",color:a(o.color)})}return(e,n)=>{const y=k("va-popover");return p(),u("div",V,[C(y,{color:"info",placement:i.value.placement,message:i.value.content},{default:B(()=>[r("div",{class:"color-presentation__color",style:N(m(h)),onClick:n[0]||(n[0]=D=>f())},null,4)]),_:1},8,["placement","message"]),t.name||t.description?(p(),u("div",z,[r("div",I,v(t.name),1),r("div",P,v(t.description),1)])):S("",!0),r("input",{ref_key:"hiddenInput",ref:c,value:m(s),class:"hidden-input"},null,8,$)])}}});export{G as _};
