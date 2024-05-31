import{_ as M,a as n,r,o as p,i as U,w as u,e as a,b as m,c as _,j as B,t as f,F as O,f as g}from"./index.dccdd8c0.js";import{d as w}from"./debounce.87e5ba27.js";import{q as S}from"./index.3046ca4e.js";const L={name:"ProductAll",components:{},data(){const e=[],t="",s=[{key:"price",sortable:!0},{key:"name",sortable:!0},{key:"count_learn",sortable:!0,width:20},{key:"actions",width:80},{key:"isFavorite",width:50,sortable:!0}],i=[{text:"asc",value:"asc"},{text:"desc",value:"desc"},{text:"no sorting",value:null}];return{value:[2e4,8e4],min:2e4,max:1e5,items:e,columns:s,input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!0,filteredCount:e.length,listPrice:Array,sortBy:"isFavorite",sortingOrder:"desc",sortingOrderOptions:i,serverParams:{priceMin:"",priceMax:""}}},methods:{updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},sliderChange(){console.log(this.value),this.updateParams({priceMin:this.value[0],priceMax:this.value[1]}),this.getProduct()},processTrackLabel(e,t){return t===0?`min ${e} \u0440\u0443\u0431`:`max ${e} \u0440\u0443\u0431`},filterExact(e,t){var s;return this.filter===""?!0:(console.log(t),((s=e==null?void 0:e.toString)==null?void 0:s.call(e))===this.filter)},updateFilter(e){this.filter=e},debouncedUpdateFilter:w(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,console.log(e)},setLearn(e){let t=this;t.loading=!0,t.idProduct=e,console.log(e),n.get("/sanctum/csrf-cookie").then(s=>{n.post("/api/product/set-learn",{id_product:t.idProduct}).then(i=>{i.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(i.status),this.loading=!1)}).catch(function(i){console.log(s),console.error(i),this.loading=!1})})},getProduct(){let e=this;n.get("/sanctum/csrf-cookie").then(t=>{n.request({method:"post",url:"/api/product/laptop",params:e.serverParams,paramsSerializer:s=>S.stringify(s)}).then(s=>{e.items=s.data.products,e.listPrice=s.data.price;let i=[];Object.keys(e.listPrice).forEach(function(o,c,h){console.log(o),i.push(parseInt(o))}),e.min=Math.min(...i),e.max=Math.max(...i),console.log(e.value)}).catch(s=>{console.error(s)})})},setFavorite(e,t){this.loading=!0,this.idProduct=e,this.isFavor=t,console.log(e);let s=this;n.get("/sanctum/csrf-cookie").then(i=>{n.post("/api/product/set-favorite",{id_product:s.idProduct,is_favorite:s.isFavor}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),this.loading=!1)}).catch(function(o){console.log(i),console.error(o),this.loading=!1})})},setFavorite(e,t){this.loading=!0,this.idProduct=e,this.isFavor=t,console.log(e);let s=this;n.get("/sanctum/csrf-cookie").then(i=>{n.post("/api/product/set-favorite",{id_product:s.idProduct,is_favorite:s.isFavor}).then(o=>{o.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(o.status),this.loading=!1)}).catch(function(o){console.log(i),console.error(o),this.loading=!1})})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let e=this;n.get("/sanctum/csrf-cookie").then(t=>{n.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:e.idGroup}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status))}).catch(function(s){console.log(t),console.error(s)})})},sortByOptions(){return this.columns.map(({name:e,key:t,sortable:s})=>s&&(e||t)).filter(Boolean)}},computed:{customFilteringFn(e,t){return console.log(e),this.isCustomFilteringFn?this.filterExact(e,t):void 0}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):this.updateFilter(e)}},mounted:function(){this.updateParams({priceMin:this.value[0],priceMax:this.value[1]}),this.getProduct()}},E={class:"grid md:grid-cols-2 gap-6 mb-6"},I={class:"flex flex-wrap gap-6 mb-6"},N=["onClick"],j={class:"flex flex-wrap gap-6 mb-6"},q=g("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),T=g(" Number of filtered items: ");function A(e,t,s,i,o,c){const h=r("va-input"),v=r("VaCounter"),b=r("VaSlider"),F=r("va-button"),k=r("va-switch"),P=r("va-data-table"),x=r("va-chip"),C=r("va-alert"),V=r("va-card-content"),y=r("va-card");return p(),U(y,null,{default:u(()=>[a(V,null,{default:u(()=>[m("div",E,[a(h,{modelValue:o.input,"onUpdate:modelValue":t[0]||(t[0]=l=>o.input=l),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),m("div",I,[(p(!0),_(O,null,B(o.listPrice,(l,d)=>(p(),_("span",{key:d},[m("a",{href:"#",onClick:G=>c.filterPrice(d)},f(d)+"("+f(l)+") ",9,N)]))),128))]),m("div",j,[a(b,{onChange:t[5]||(t[5]=l=>c.sliderChange()),modelValue:o.value,"onUpdate:modelValue":t[6]||(t[6]=l=>o.value=l),step:1e3,min:5e3,max:1e5,class:"mb-6",range:"","track-label-visible":"","track-label":c.processTrackLabel},{prepend:u(()=>[a(v,{"manual-input":"",onChange:t[1]||(t[1]=l=>c.sliderChange()),step:1e3,modelValue:o.value[0],"onUpdate:modelValue":t[2]||(t[2]=l=>o.value[0]=l),min:5e3,max:1e5},null,8,["modelValue"])]),append:u(()=>[a(v,{"manual-input":"",onChange:t[3]||(t[3]=l=>c.sliderChange()),step:1e3,modelValue:o.value[1],"onUpdate:modelValue":t[4]||(t[4]=l=>o.value[1]=l),min:5e3,max:1e5},null,8,["modelValue"])]),_:1},8,["modelValue","track-label"])]),a(P,{items:o.items,columns:o.columns,filter:o.filter,"filter-method":c.customFilteringFn,"sort-by":o.sortBy,"onUpdate:sort-by":t[7]||(t[7]=l=>o.sortBy=l),"sorting-order":o.sortingOrder,"onUpdate:sorting-order":t[8]||(t[8]=l=>o.sortingOrder=l),onFiltered:t[9]||(t[9]=l=>o.filteredCount=l.items.length)},{"cell(actions)":u(({rowData:l})=>[a(F,{onClick:d=>c.setLearn(l.id)},{default:u(()=>[q]),_:2},1032,["onClick"])]),"cell(isFavorite)":u(({rowData:l})=>[a(k,{modelValue:l.isFavorite,"onUpdate:modelValue":d=>l.isFavorite=d,onClick:d=>c.setFavorite(l.id,l.isFavorite)},null,8,["modelValue","onUpdate:modelValue","onClick"])]),_:1},8,["items","columns","filter","filter-method","sort-by","sorting-order"]),a(C,{class:"!mt-6",color:"info",outline:""},{default:u(()=>[T,a(x,null,{default:u(()=>[g(f(o.filteredCount),1)]),_:1})]),_:1})]),_:1})]),_:1})}var J=M(L,[["render",A]]);export{J as default};
