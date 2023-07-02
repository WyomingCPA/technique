import{_ as V,v as a,x as s,o as m,y,w as c,f as i,b as d,c as g,e as w,t as p,F as D,j as h}from"./index.df261148.js";import{d as U}from"./debounce.7545c7a4.js";const I={name:"ProductAll",components:{},data(){const t=[],e="";return{items:t,columns:[{key:"name",sortable:!0},{key:"price",sortable:!0},{key:"count_learn",sortable:!0},{key:"actions",width:80}],input:e,filter:e,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:t.length,listPrice:Array}},methods:{filterExact(t){var e;return this.filter===""?!0:((e=t==null?void 0:t.toString)==null?void 0:e.call(t))===this.filter},updateFilter(t){this.filter=t},debouncedUpdateFilter:U(function(t){this.updateFilter(t)},600),filterPrice:function(t){this.filter=t,this.input=t},setLearn(t){this.loading=!0,this.idProduct=t,console.log(t);let e=this;a.get("/sanctum/csrf-cookie").then(l=>{a.post("/api/product/set-learn",{id_product:e.idProduct}).then(r=>{r.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(r.status),this.loading=!1)}).catch(function(r){console.log(l),console.error(r),this.loading=!1})})},getWashProduct(){let t=this;a.get("/api/product/washmashine").then(function(e){t.items=e.data.products,t.listPrice=e.data.price,console.log(e.data.groups)}).catch(function(e){console.error(e)})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let t=this;a.get("/sanctum/csrf-cookie").then(e=>{a.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:t.idGroup}).then(l=>{l.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(l.status))}).catch(function(l){console.log(e),console.error(l)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0}},watch:{input(t){this.isDebounceInput?this.debouncedUpdateFilter(t):this.updateFilter(t)}},mounted:function(){this.getWashProduct()}},B={class:"grid md:grid-cols-2 gap-6 mb-6"},N={class:"flex flex-col gap-6"},S={class:"flex flex-wrap gap-6 mb-6"},W=["onClick"],E=h("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),L=h(" Number of filtered items: ");function M(t,e,l,r,o,f){const b=s("va-input"),_=s("va-checkbox"),v=s("va-button"),F=s("va-data-table"),k=s("va-chip"),x=s("va-alert"),C=s("va-card-content"),P=s("va-card");return m(),y(P,null,{default:c(()=>[i(C,null,{default:c(()=>[d("div",B,[i(b,{modelValue:o.input,"onUpdate:modelValue":e[0]||(e[0]=n=>o.input=n),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"]),d("div",N,[i(_,{modelValue:o.isCustomFilteringFn,"onUpdate:modelValue":e[1]||(e[1]=n=>o.isCustomFilteringFn=n),label:"Use custom filtering function (looks for an exact match)"},null,8,["modelValue"]),i(_,{modelValue:o.isDebounceInput,"onUpdate:modelValue":e[2]||(e[2]=n=>o.isDebounceInput=n),label:"Debounce input"},null,8,["modelValue"])])]),d("div",S,[(m(!0),g(D,null,w(o.listPrice,(n,u)=>(m(),g("span",{key:u},[d("a",{href:"#",onClick:A=>f.filterPrice(u)},p(u)+"("+p(n)+") ",9,W)]))),128))]),i(F,{items:o.items,columns:o.columns,filter:o.filter,"filter-method":f.customFilteringFn,onFiltered:e[3]||(e[3]=n=>o.filteredCount=n.items.length)},{"cell(actions)":c(({rowData:n})=>[i(v,{onClick:u=>f.setLearn(n.id)},{default:c(()=>[E]),_:2},1032,["onClick"])]),_:1},8,["items","columns","filter","filter-method"]),i(x,{class:"!mt-6",color:"info",outline:""},{default:c(()=>[L,i(k,null,{default:c(()=>[h(p(o.filteredCount),1)]),_:1})]),_:1})]),_:1})]),_:1})}var T=V(I,[["render",M]]);export{T as default};
