import{_ as P,v as a,x as l,o as m,y as U,w as u,f as r,b as f,c as _,e as B,t as p,F as w,j as h}from"./index.0efe29ab.js";import{d as O}from"./debounce.3f00d56f.js";const I={name:"ProductAll",components:{},data(){const t=[],e="",i=[{key:"name",sortable:!0},{key:"price",sortable:!0},{key:"count_learn",sortable:!0,width:20},{key:"actions",width:80},{key:"isFavorite",width:50,sortable:!0}],n=[{text:"asc",value:"asc"},{text:"desc",value:"desc"},{text:"no sorting",value:null}];return{items:t,columns:i,input:e,filter:e,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:t.length,listPrice:Array,sortBy:"isFavorite",sortingOrder:"desc",sortingOrderOptions:n}},methods:{filterExact(t){var e;return this.filter===""?!0:((e=t==null?void 0:t.toString)==null?void 0:e.call(t))===this.filter},updateFilter(t){this.filter=t},debouncedUpdateFilter:O(function(t){this.updateFilter(t)},600),filterPrice:function(t){this.filter=t,this.input=t},setLearn(t){this.loading=!0,this.idProduct=t,console.log(t);let e=this;a.get("/sanctum/csrf-cookie").then(i=>{a.post("/api/product/set-learn",{id_product:e.idProduct}).then(n=>{n.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(n.status),this.loading=!1)}).catch(function(n){console.log(i),console.error(n),this.loading=!1})})},getWashProduct(){let t=this;a.get("/api/product/refrigerator").then(function(e){t.items=e.data.products,t.listPrice=e.data.price,console.log(e.data.groups)}).catch(function(e){console.error(e)})},setFavorite(t,e){this.loading=!0,this.idProduct=t,this.isFavor=e,console.log(t);let i=this;a.get("/sanctum/csrf-cookie").then(n=>{a.post("/api/product/set-favorite",{id_product:i.idProduct,is_favorite:i.isFavor}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),this.loading=!1)}).catch(function(o){console.log(n),console.error(o),this.loading=!1})})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let t=this;a.get("/sanctum/csrf-cookie").then(e=>{a.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:t.idGroup}).then(i=>{i.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(i.status))}).catch(function(i){console.log(e),console.error(i)})})},sortByOptions(){return this.columns.map(({name:t,key:e,sortable:i})=>i&&(t||e)).filter(Boolean)}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0}},watch:{input(t){this.isDebounceInput?this.debouncedUpdateFilter(t):this.updateFilter(t)}},mounted:function(){this.getWashProduct()}},N={class:"grid md:grid-cols-2 gap-6 mb-6"},S={class:"flex flex-col gap-6"},W={class:"flex flex-wrap gap-6 mb-6"},D=["onClick"],E=h("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),L=h(" Number of filtered items: ");function M(t,e,i,n,o,d){const v=l("va-input"),g=l("va-checkbox"),b=l("va-button"),F=l("va-switch"),k=l("va-data-table"),y=l("va-chip"),x=l("va-alert"),C=l("va-card-content"),V=l("va-card");return m(),U(V,null,{default:u(()=>[r(C,null,{default:u(()=>[f("div",N,[r(v,{modelValue:o.input,"onUpdate:modelValue":e[0]||(e[0]=s=>o.input=s),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"]),f("div",S,[r(g,{modelValue:o.isCustomFilteringFn,"onUpdate:modelValue":e[1]||(e[1]=s=>o.isCustomFilteringFn=s),label:"Use custom filtering function (looks for an exact match)"},null,8,["modelValue"]),r(g,{modelValue:o.isDebounceInput,"onUpdate:modelValue":e[2]||(e[2]=s=>o.isDebounceInput=s),label:"Debounce input"},null,8,["modelValue"])])]),f("div",W,[(m(!0),_(w,null,B(o.listPrice,(s,c)=>(m(),_("span",{key:c},[f("a",{href:"#",onClick:A=>d.filterPrice(c)},p(c)+"("+p(s)+") ",9,D)]))),128))]),r(k,{items:o.items,columns:o.columns,filter:o.filter,"filter-method":d.customFilteringFn,"sort-by":o.sortBy,"onUpdate:sort-by":e[3]||(e[3]=s=>o.sortBy=s),"sorting-order":o.sortingOrder,"onUpdate:sorting-order":e[4]||(e[4]=s=>o.sortingOrder=s),onFiltered:e[5]||(e[5]=s=>o.filteredCount=s.items.length)},{"cell(actions)":u(({rowData:s})=>[r(b,{onClick:c=>d.setLearn(s.id)},{default:u(()=>[E]),_:2},1032,["onClick"])]),"cell(isFavorite)":u(({rowData:s})=>[r(F,{modelValue:s.isFavorite,"onUpdate:modelValue":c=>s.isFavorite=c,onClick:c=>d.setFavorite(s.id,s.isFavorite)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["items","columns","filter","filter-method","sort-by","sorting-order"]),r(x,{class:"!mt-6",color:"info",outline:""},{default:u(()=>[L,r(y,null,{default:u(()=>[h(p(o.filteredCount),1)]),_:1})]),_:1})]),_:1})]),_:1})}var R=P(I,[["render",M]]);export{R as default};
