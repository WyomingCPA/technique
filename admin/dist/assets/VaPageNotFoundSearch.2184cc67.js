import{_ as v}from"./VaPageNotFound.2f6af687.js";import{b,r,e as y,l,o as a,f as x,m as d,n as u,p,q as n,s as c,t as _,F as N,v as w,g as C}from"./index.36edbacb.js";var M=[{categoryName:"Dashboard",items:[{itemName:"Dashboard",itemLink:"/admin/dashboard"}]},{categoryName:"Statistics",items:[{itemName:"Charts",itemLink:"/admin/statistics/charts"},{itemName:"Progress bars",itemLink:"/admin/statistics/progress-bars"}]},{categoryName:"Forms",items:[{itemName:"Form Elements",itemLink:"/admin/forms/form-elements"},{itemName:"Medium Editor",itemLink:"/admin/forms/medium-editor"}]},{categoryName:"Tables",items:[{itemName:"Markup Tables",itemLink:"/admin/tables/markup"}]},{categoryName:"UI Elements",items:[{itemName:"Typography",itemLink:"/admin/ui/typography"},{itemName:"Buttons",itemLink:"/admin/ui/buttons"},{itemName:"Cards",itemLink:"/admin/ui/cards"},{itemName:"Chat",itemLink:"/admin/ui/chat"},{itemName:"Chips",itemLink:"/admin/ui/chips"},{itemName:"Collapses",itemLink:"/admin/ui/collapses"},{itemName:"Colors",itemLink:"/admin/ui/colors"},{itemName:"Icons",itemLink:"/admin/ui/icons"},{itemName:"Lists",itemLink:"/admin/ui/lists"},{itemName:"Modals",itemLink:"/admin/ui/modals"},{itemName:"Notifications",itemLink:"/admin/ui/notifications"},{itemName:"Popovers",itemLink:"/admin/ui/popovers"},{itemName:"Rating",itemLink:"/admin/ui/rating"},{itemName:"Tabs",itemLink:"/admin/ui/tabs"},{itemName:"Tree View",itemLink:"/admin/ui/tree-view"}]},{categoryName:"Maps",items:[{itemName:"MapLibre Maps",itemLink:"/admin/maps/maplibre-maps"},{itemName:"Yandex Maps",itemLink:"/admin/maps/yandex-maps"},{itemName:"Leaflet Maps",itemLink:"/admin/maps/leaflet-maps"},{itemName:"Bubble Maps",itemLink:"/admin/maps/bubble-maps"},{itemName:"Line Maps",itemLink:"/admin/maps/line-maps"}]}];const V={class:"row va-page-not-found-search__links"},B={class:"mb-2"},E=b({__name:"VaPageNotFoundSearch",setup(F){const s=r(M),i=r(""),f=y(()=>i.value.length>=1?s.value.map(e=>({categoryName:e.categoryName,items:e.items.filter(t=>t.itemName.toUpperCase().search(i.value.toUpperCase())!==-1)})).filter(e=>e.items.length>=1):s.value);return(e,t)=>{const g=l("va-input"),h=l("router-link");return a(),x(v,{"without-button":"",class:"va-page-not-found-search"},{default:d(()=>[u(g,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=m=>i.value=m),placeholder:"Search on the menu",style:{"align-items":"flex-start"},class:"va-page-not-found-search__input mb-4",clearable:""},null,8,["modelValue"]),p("div",V,[(a(!0),n(N,null,c(C(f),(m,k)=>(a(),n("ul",{key:k,class:"va-page-not-found-search__list flex xs6 md3 lg1 mb-2"},[p("li",B,_(m.categoryName),1),(a(!0),n(N,null,c(m.items,(o,L)=>(a(),n("li",{key:L,class:"va-page-not-found-search__list-element"},[u(h,{to:{path:o.itemLink},class:"va-link"},{default:d(()=>[w(_(o.itemName),1)]),_:2},1032,["to"])]))),128))]))),128))])]),_:1})}}});export{E as default};
