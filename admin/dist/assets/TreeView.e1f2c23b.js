import{x as s,o as m,y as V,d as y,r as P,c as g,b as r,f as e,w as a,j as p,_ as A,M as k,Y as $,a2 as N,F as T,u as D,t as f,g as x}from"./index.712643e1.js";const B={__name:"TreeViewBasicPreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=[1];return(o,n)=>{const d=s("va-tree-view");return m(),V(d,{expanded:l,"onUpdate:expanded":n[0]||(n[0]=i=>l=i),nodes:t})}}},M={__name:"TreeViewIconsPreview",setup(h){let t=0;const l=()=>t++,o=[{id:l(),label:"Images",icon:"images",children:[{id:l(),label:"sick_cats_cuddling.jpg",icon:"image"},{id:l(),label:"pins-and-needles.jpg",icon:"image"},{id:l(),label:"avatar_50x50.jpg",icon:"image"}]},{id:l(),label:"Music",icon:"star_outline",children:[{id:l(),label:"Taylor_swift_hello.mp3",icon:"musical_notes"},{id:l(),label:"straight_to_the_bank.wav",icon:"musical_notes"},{id:l(),label:"imagine_dragons_promo.mp3",icon:"musical_notes"}]},{id:l(),label:"Miscellaneous",icon:"list",children:[{id:l(),label:"Tdump.sql",icon:"grid"},{id:l(),label:"unknown-file",icon:"help"},{id:l(),label:"secure.key",icon:"key"}]}];return(n,d)=>{const i=s("va-tree-view");return m(),V(i,{nodes:o})}}},K=y({__name:"TreeViewSelectablePreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=P([]);return(o,n)=>{const d=s("va-tree-view");return m(),V(d,{checked:l.value,"onUpdate:checked":n[0]||(n[0]=i=>l.value=i),nodes:t,selectable:""},null,8,["checked"])}}});const I={class:"tree-view-advanced-preview"},L={class:"tree-view-advanced-preview__buttons"},S=p("EXPAND ALL"),U=p("COLLAPSE ALL"),j={class:"tree-view-advanced-preview__icon-square"},H={__name:"TreeViewAdvancedPreview",setup(h){const t=[{id:1,label:"Electronics",children:[{id:2,label:"Cellphones"},{id:3,label:"Camera Body Kits"},{id:6,label:"External HDDs"}]},{id:7,label:"Products",children:[{id:8,label:"Cables",children:[{id:9,label:"Audio"},{id:10,label:"Video"},{id:11,label:"Optical"}]},{id:12,label:"Monitors"},{id:13,label:"Keyboards"}]},{id:14,label:"Apparel",children:[{id:15,label:"Jackets"},{id:16,label:"Pants"},{id:17,label:"Skirts"}]}],l=P([1]),o=i=>{const u=[],c=v=>!!v.children,w=v=>{for(const _ of v)c(_)&&(u.push(_.id),w(_.children))};return w(i),u},n=()=>{l.value=o(t)},d=()=>{l.value=[]};return(i,u)=>{const c=s("va-button"),w=s("va-icon"),v=s("va-tree-view");return m(),g("div",I,[r("div",L,[e(c,{class:"mr-2",onClick:n},{default:a(()=>[S]),_:1}),e(c,{onClick:d},{default:a(()=>[U]),_:1})]),e(v,{ref:"treeView",expanded:l.value,"onUpdate:expanded":u[0]||(u[0]=_=>l.value=_),nodes:t},{"icon-toggle":a(({expanded:_})=>[r("div",j,[e(w,{color:"white",name:_?"remove":"add"},null,8,["name"])])]),_:1},8,["expanded"])])}}};const O={key:0,class:"tree-node-editable flex row align-center"},q=p(" Add new product "),J=y({__name:"TreeViewEditablePreview",setup(h){const t=k([1,2]),l=k([{id:3,label:"Cellphones"},{id:4,label:"Camera Body Kits"},{id:5,label:"External HDDs"}]);let o=k([{id:6,label:"Cables"},{id:7,label:"Monitors"},{id:8,label:"Keyboards"}]);const n=[{label:"Electronics",id:1,children:l},{label:"Products",id:2,children:o}];function d(){o.push({id:Math.floor(Math.random()*1e5),label:"New product"})}function i(u){o.splice(o.findIndex(c=>c.id===u.id),1)}return(u,c)=>{const w=s("va-input"),v=s("va-icon"),_=s("va-tree-view"),E=s("va-button");return m(),g(T,null,[e(_,{expanded:t,"onUpdate:expanded":c[0]||(c[0]=b=>N(t)?t.value=b:null),nodes:n},{content:a(b=>[b.hasChildren?$("",!0):(m(),g("div",O,[e(w,{modelValue:b.label,"onUpdate:modelValue":C=>b.label=C,class:"mb-0"},null,8,["modelValue","onUpdate:modelValue"]),e(v,{name:"md_close",color:"info",class:"ml-2 shrink",style:{cursor:"pointer"},onClick:C=>i(b)},null,8,["onClick"])]))]),_:1},8,["expanded"]),e(E,{class:"mb-2",onClick:c[1]||(c[1]=b=>d())},{default:a(()=>[q]),_:1})],64)}}});var F=A(J,[["__scopeId","data-v-67e2505c"]]);const R={class:"tree-view sets-list row"},X={class:"flex md12 xs12"},Y={class:"row"},z={class:"small-set flex lg6 xs12"},G={class:"small-set flex lg6 xs12"},Q={class:"row"},W={class:"small-set flex lg6 xs12"},Z={class:"small-set flex lg6 xs12"},ee={class:"row"},le={class:"small-set flex lg6 xs12"},te=y({__name:"TreeView",setup(h){const{t}=D();return(l,o)=>{const n=s("va-card-title"),d=s("va-card-content"),i=s("va-card");return m(),g("div",R,[r("div",X,[r("div",Y,[r("div",z,[e(i,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.basic")),1)]),_:1}),e(d,null,{default:a(()=>[e(B)]),_:1})]),_:1})]),r("div",G,[e(i,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.icons")),1)]),_:1}),e(d,null,{default:a(()=>[e(M)]),_:1})]),_:1})])]),r("div",Q,[r("div",W,[e(i,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.advanced")),1)]),_:1}),e(d,null,{default:a(()=>[e(H)]),_:1})]),_:1})]),r("div",Z,[e(i,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.editable")),1)]),_:1}),e(d,null,{default:a(()=>[e(F)]),_:1})]),_:1})])]),r("div",ee,[r("div",le,[e(i,null,{default:a(()=>[e(n,null,{default:a(()=>[p(f(x(t)("treeView.selectable")),1)]),_:1}),e(d,null,{default:a(()=>[e(K)]),_:1})]),_:1})])])])])}}});export{te as default};
