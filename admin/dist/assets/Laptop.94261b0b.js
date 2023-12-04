import{_ as V,a as n,r,o as h,i as U,w as u,e as c,b as f,c as _,j as B,t as p,F as w,f as g}from"./index.01562bd8.js";import{d as O}from"./debounce.940dfcaa.js";const I={name:"ProductAll",components:{},data(){const e=[],t="",i=[{key:"price",sortable:!0},{key:"name",sortable:!0},{key:"count_learn",sortable:!0,width:20},{key:"actions",width:80},{key:"isFavorite",width:50,sortable:!0}],l=[{text:"asc",value:"asc"},{text:"desc",value:"desc"},{text:"no sorting",value:null}];return{items:e,columns:i,input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:e.length,listPrice:Array,sortBy:"isFavorite",sortingOrder:"desc",sortingOrderOptions:l}},methods:{filterExact(e){var t;return this.filter===""?!0:((t=e==null?void 0:e.toString)==null?void 0:t.call(e))===this.filter},updateFilter(e){this.filter=e},debouncedUpdateFilter:O(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,this.input=e},setLearn(e){let t=this;t.loading=!0,t.idProduct=e,console.log(e),n.get("/sanctum/csrf-cookie").then(i=>{n.post("/api/product/set-learn",{id_product:t.idProduct}).then(l=>{l.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(l.status),this.loading=!1)}).catch(function(l){console.log(i),console.error(l),this.loading=!1})})},getWashProduct(){let e=this;n.get("/api/product/laptop").then(function(t){e.items=t.data.products,e.listPrice=t.data.price,console.log(t.data.groups)}).catch(function(t){console.error(t)})},setFavorite(e,t){this.loading=!0,this.idProduct=e,this.isFavor=t,console.log(e);let i=this;n.get("/sanctum/csrf-cookie").then(l=>{n.post("/api/product/set-favorite",{id_product:i.idProduct,is_favorite:i.isFavor}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),this.loading=!1)}).catch(function(o){console.log(l),console.error(o),this.loading=!1})})},setFavorite(e,t){this.loading=!0,this.idProduct=e,this.isFavor=t,console.log(e);let i=this;n.get("/sanctum/csrf-cookie").then(l=>{n.post("/api/product/set-favorite",{id_product:i.idProduct,is_favorite:i.isFavor}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),this.loading=!1)}).catch(function(o){console.log(l),console.error(o),this.loading=!1})})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let e=this;n.get("/sanctum/csrf-cookie").then(t=>{n.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:e.idGroup}).then(i=>{i.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(i.status))}).catch(function(i){console.log(t),console.error(i)})})},sortByOptions(){return this.columns.map(({name:e,key:t,sortable:i})=>i&&(e||t)).filter(Boolean)}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):this.updateFilter(e)}},mounted:function(){this.getWashProduct()}},W={class:"grid md:grid-cols-2 gap-6 mb-6"},L={class:"flex flex-col gap-6"},N={class:"flex flex-wrap gap-6 mb-6"},S=["onClick"],D=g("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),E=g(" Number of filtered items: ");function M(e,t,i,l,o,d){const v=r("va-input"),m=r("va-checkbox"),b=r("va-button"),F=r("va-switch"),k=r("va-data-table"),y=r("va-chip"),P=r("va-alert"),x=r("va-card-content"),C=r("va-card");return h(),U(C,null,{default:u(()=>[c(x,null,{default:u(()=>[f("div",W,[c(v,{modelValue:o.input,"onUpdate:modelValue":t[0]||(t[0]=s=>o.input=s),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"]),f("div",L,[c(m,{modelValue:o.isCustomFilteringFn,"onUpdate:modelValue":t[1]||(t[1]=s=>o.isCustomFilteringFn=s),label:"Use custom filtering function (looks for an exact match)"},null,8,["modelValue"]),c(m,{modelValue:o.isDebounceInput,"onUpdate:modelValue":t[2]||(t[2]=s=>o.isDebounceInput=s),label:"Debounce input"},null,8,["modelValue"])])]),f("div",N,[(h(!0),_(w,null,B(o.listPrice,(s,a)=>(h(),_("span",{key:a},[f("a",{href:"#",onClick:A=>d.filterPrice(a)},p(a)+"("+p(s)+") ",9,S)]))),128))]),c(k,{items:o.items,columns:o.columns,filter:o.filter,"filter-method":d.customFilteringFn,"sort-by":o.sortBy,"onUpdate:sort-by":t[3]||(t[3]=s=>o.sortBy=s),"sorting-order":o.sortingOrder,"onUpdate:sorting-order":t[4]||(t[4]=s=>o.sortingOrder=s),onFiltered:t[5]||(t[5]=s=>o.filteredCount=s.items.length)},{"cell(actions)":u(({rowData:s})=>[c(b,{onClick:a=>d.setLearn(s.id)},{default:u(()=>[D]),_:2},1032,["onClick"])]),"cell(isFavorite)":u(({rowData:s})=>[c(F,{modelValue:s.isFavorite,"onUpdate:modelValue":a=>s.isFavorite=a,onClick:a=>d.setFavorite(s.id,s.isFavorite)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["items","columns","filter","filter-method","sort-by","sorting-order"]),c(P,{class:"!mt-6",color:"info",outline:""},{default:u(()=>[E,c(y,null,{default:u(()=>[g(p(o.filteredCount),1)]),_:1})]),_:1})]),_:1})]),_:1})}var T=V(I,[["render",M]]);export{T as default};