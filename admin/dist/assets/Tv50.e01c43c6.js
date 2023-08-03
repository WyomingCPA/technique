import{_ as C,N as r,a as s,b as m,i as p,g as u,f as i,F as b,j as P,w as d,t as h,k as _}from"./index.5283066a.js";import{d as V}from"./debounce.3f2f11c5.js";const w={name:"ProductAll",components:{},data(){const t=[],e="";return{items:t,columns:[{key:"name",sortable:!0},{key:"price",sortable:!0},{key:"count_learn",sortable:!0},{key:"actions",width:80}],input:e,filter:e,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:t.length,listPrice:Array}},methods:{filterExact(t){var e;return this.filter===""?!0:((e=t==null?void 0:t.toString)==null?void 0:e.call(t))===this.filter},updateFilter(t){this.filter=t},debouncedUpdateFilter:V(function(t){this.updateFilter(t)},600),filterPrice:function(t){this.filter=t,this.input=t},setLearn(t){this.loading=!0,this.idProduct=t,console.log(t);let e=this;r.get("/sanctum/csrf-cookie").then(n=>{r.post("/api/product/set-learn",{id_product:e.idProduct}).then(a=>{a.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getWashProduct(),this.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(a.status),this.loading=!1)}).catch(function(a){console.log(n),console.error(a),this.loading=!1})})},getWashProduct(){let t=this;r.get("/api/product/tv50").then(function(e){t.items=e.data.products,t.listPrice=e.data.price,console.log(e.data.groups)}).catch(function(e){console.error(e)})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},async handleSubmit(){let t=this;r.get("/sanctum/csrf-cookie").then(e=>{r.post("/api/group/set-subscriber",{count_subscriber:this.countSubscriber,id_group:t.idGroup}).then(n=>{n.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.getGroups(),this.$refs["my-modal"].hide()):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(n.status))}).catch(function(n){console.log(e),console.error(n)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0}},watch:{input(t){this.isDebounceInput?this.debouncedUpdateFilter(t):this.updateFilter(t)}},mounted:function(){this.getWashProduct()}},D={class:"grid md:grid-cols-2 gap-6 mb-6"},I={class:"flex flex-col gap-6"},U={class:"flex flex-wrap gap-6 mb-6"},N=["onClick"],S=_("\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u043B"),B=_(" Number of filtered items: ");function E(t,e,n,a,o,f){const v=s("va-input"),g=s("va-checkbox"),F=s("va-button"),k=s("va-data-table"),x=s("va-chip"),y=s("va-alert");return m(),p(b,null,[u("div",D,[i(v,{modelValue:o.input,"onUpdate:modelValue":e[0]||(e[0]=l=>o.input=l),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"]),u("div",I,[i(g,{modelValue:o.isCustomFilteringFn,"onUpdate:modelValue":e[1]||(e[1]=l=>o.isCustomFilteringFn=l),label:"Use custom filtering function (looks for an exact match)"},null,8,["modelValue"]),i(g,{modelValue:o.isDebounceInput,"onUpdate:modelValue":e[2]||(e[2]=l=>o.isDebounceInput=l),label:"Debounce input"},null,8,["modelValue"])])]),u("div",U,[(m(!0),p(b,null,P(o.listPrice,(l,c)=>(m(),p("span",{key:c},[u("a",{href:"#",onClick:L=>f.filterPrice(c)},h(c)+"("+h(l)+") ",9,N)]))),128))]),i(k,{items:o.items,columns:o.columns,filter:o.filter,"filter-method":f.customFilteringFn,onFiltered:e[3]||(e[3]=l=>o.filteredCount=l.items.length)},{"cell(actions)":d(({rowData:l})=>[i(F,{onClick:c=>f.setLearn(l.id)},{default:d(()=>[S]),_:2},1032,["onClick"])]),_:1},8,["items","columns","filter","filter-method"]),i(y,{class:"!mt-6",color:"info",outline:""},{default:d(()=>[B,i(x,null,{default:d(()=>[_(h(o.filteredCount),1)]),_:1})]),_:1})],64)}var W=C(w,[["render",E],["__scopeId","data-v-13ee12fe"]]);export{W as default};
