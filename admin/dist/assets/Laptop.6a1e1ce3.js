import{_ as V,a as r,r as n,o as m,i as M,w as d,e as a,b as p,c as v,j as B,t as f,F as O,f as h}from"./index.7aabad61.js";import{d as U}from"./debounce.7edbbe2b.js";import{q as w}from"./index.5149a7bf.js";const S={name:"ProductAll",components:{},data(){const t=[],e="",o=[{key:"price",sortable:!0},{key:"name",sortable:!0},{key:"count_learn",sortable:!0,width:20},{key:"actions",width:80},{key:"isFavorite",width:50,sortable:!0}],l=[{text:"asc",value:"asc"},{text:"desc",value:"desc"},{text:"no sorting",value:null}];return{value:[2e4,8e4],min:2e4,max:1e5,items:t,columns:o,input:e,filter:e,isDebounceInput:!1,isCustomFilteringFn:!0,filteredCount:t.length,listPrice:Array,sortBy:"isFavorite",sortingOrder:"desc",sortingOrderOptions:l,serverParams:{priceMin:"",priceMax:""}}},methods:{updateParams(t){this.serverParams=Object.assign({},this.serverParams,t)},sliderChange(){console.log(this.value),this.updateParams({priceMin:this.value[0],priceMax:this.value[1]}),this.getProduct()},processTrackLabel(t,e){return e===0?`min ${t} \u0440\u0443\u0431`:`max ${t} \u0440\u0443\u0431`},filterExact(t,e){var o;return this.filter===""?!0:(console.log(e),((o=t==null?void 0:t.toString)==null?void 0:o.call(t))===this.filter)},updateFilter(t){this.filter=t},debouncedUpdateFilter:U(function(t){this.updateFilter(t)},600),filterPrice:function(t){this.filter=t,console.log(t)},setLearn(t){let e=this;e.loading=!0,e.idProduct=t,console.log(t),r.get("/sanctum/csrf-cookie").then(o=>{r.post("/api/product/set-learn",{id_product:e.idProduct}).then(l=>{l.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(l.status),this.loading=!1)}).catch(function(l){console.log(o),console.error(l),this.loading=!1})})},getProduct(){let t=this;r.get("/sanctum/csrf-cookie").then(e=>{r.request({method:"post",url:"/api/product/laptop",params:t.serverParams,paramsSerializer:o=>w.stringify(o)}).then(o=>{t.items=o.data.products,t.listPrice=o.data.price;let l=[];Object.keys(t.listPrice).forEach(function(s,c,g){console.log(s),l.push(parseInt(s))}),t.min=Math.min(...l),t.max=Math.max(...l),console.log(t.value)}).catch(o=>{console.error(o)})})},setFavorite(t,e){this.loading=!0,this.idProduct=t,this.isFavor=e,console.log(t);let o=this;r.get("/sanctum/csrf-cookie").then(l=>{r.post("/api/product/set-favorite",{id_product:o.idProduct,is_favorite:o.isFavor}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),this.loading=!1)}).catch(function(s){console.log(l),console.error(s),this.loading=!1})})},setFavorite(t,e){this.loading=!0,this.idProduct=t,this.isFavor=e,console.log(t);let o=this;r.get("/sanctum/csrf-cookie").then(l=>{r.post("/api/product/set-favorite",{id_product:o.idProduct,is_favorite:o.isFavor}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),this.loading=!1)}).catch(function(s){console.log(l),console.error(s),this.loading=!1})})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let t=this;r.get("/sanctum/csrf-cookie").then(e=>{r.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:t.idGroup}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status))}).catch(function(o){console.log(e),console.error(o)})})},sortByOptions(){return this.columns.map(({name:t,key:e,sortable:o})=>o&&(t||e)).filter(Boolean)}},computed:{customFilteringFn(t,e){return console.log(t),this.isCustomFilteringFn?this.filterExact(t,e):void 0}},watch:{input(t){this.isDebounceInput?this.debouncedUpdateFilter(t):this.updateFilter(t)}},mounted:function(){this.updateParams({priceMin:this.value[0],priceMax:this.value[1]}),this.getProduct()}},L={class:"grid md:grid-cols-2 gap-6 mb-6"},E={class:"flex flex-wrap gap-6 mb-6"},I=["onClick"],N={class:"flex flex-wrap gap-6 mb-6"},j=h("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),q=h(" Number of filtered items: ");function T(t,e,o,l,s,c){const g=n("va-input"),_=n("VaSlider"),b=n("va-button"),F=n("va-switch"),k=n("va-data-table"),P=n("va-chip"),x=n("va-alert"),y=n("va-card-content"),C=n("va-card");return m(),M(C,null,{default:d(()=>[a(y,null,{default:d(()=>[p("div",L,[a(g,{modelValue:s.input,"onUpdate:modelValue":e[0]||(e[0]=i=>s.input=i),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),p("div",E,[(m(!0),v(O,null,B(s.listPrice,(i,u)=>(m(),v("span",{key:u},[p("a",{href:"#",onClick:A=>c.filterPrice(u)},f(u)+"("+f(i)+") ",9,I)]))),128))]),p("div",N,[a(_,{onChange:e[1]||(e[1]=i=>c.sliderChange()),modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=i=>s.value=i),step:1e3,min:2e4,max:1e5,class:"mb-6",range:"","track-label-visible":"","track-label":c.processTrackLabel},null,8,["modelValue","track-label"])]),a(k,{items:s.items,columns:s.columns,filter:s.filter,"filter-method":c.customFilteringFn,"sort-by":s.sortBy,"onUpdate:sort-by":e[3]||(e[3]=i=>s.sortBy=i),"sorting-order":s.sortingOrder,"onUpdate:sorting-order":e[4]||(e[4]=i=>s.sortingOrder=i),onFiltered:e[5]||(e[5]=i=>s.filteredCount=i.items.length)},{"cell(actions)":d(({rowData:i})=>[a(b,{onClick:u=>c.setLearn(i.id)},{default:d(()=>[j]),_:2},1032,["onClick"])]),"cell(isFavorite)":d(({rowData:i})=>[a(F,{modelValue:i.isFavorite,"onUpdate:modelValue":u=>i.isFavorite=u,onClick:u=>c.setFavorite(i.id,i.isFavorite)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["items","columns","filter","filter-method","sort-by","sorting-order"]),a(x,{class:"!mt-6",color:"info",outline:""},{default:d(()=>[q,a(P,null,{default:d(()=>[h(f(s.filteredCount),1)]),_:1})]),_:1})]),_:1})]),_:1})}var H=V(S,[["render",T]]);export{H as default};
