(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73a744c2"],{"1dde":function(t,e,r){var n=r("d039"),s=r("b622"),i=r("60ae"),a=s("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,r){"use strict";var n=r("23e7"),s=r("b727").filter,i=r("d039"),a=r("1dde"),o=a("filter"),c=o&&!i((function(){[].filter.call({length:-1,0:1},(function(t){throw t}))}));n({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},6066:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"tables"},[t._m(0),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"}),r("b-row",[r("div",{staticClass:"col-sm-7"},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Filter","label-for":"filter-input","label-cols-sm":"3","label-align-sm":"right","label-size":"sm"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),r("b-input-group-append",[r("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1)]),r("b-row",[r("div",{staticClass:"col-sm-12"},t._l(t.listPrice,(function(e,n){return r("span",{key:n},[r("a",{attrs:{href:"#"},on:{click:function(e){return t.filterPrice(n)}}},[t._v(" "+t._s(n)+"("+t._s(e)+") ")])])})),0)]),r("b-row",[r("div",{staticClass:"col-sm-12"},t._l(t.listParams,(function(e,n){return r("span",{key:n},[r("a",{attrs:{href:"#"},on:{click:function(e){return t.filterParams(n)}}},[t._v(" "+t._s(n)+"("+t._s(e)+") ")])])})),0)]),r("b-table",{attrs:{responsive:"",busy:t.loading,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc,filter:t.filter,"filter-included-fields":t.filterOn,"show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[r("div",{staticClass:"text-center text-danger my-2"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"cell(actions)",fn:function(e){return[r("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(r){return t.setLearn(e.item,e.index,r.target)}}},[t._v(" Повторил ")])]}},{key:"cell(thumbnail)",fn:function(t){return[r("a",{attrs:{href:"https://www.techprom.ru"+t.item.link,target:"_blank"}},[r("img",{staticClass:"img-thumbnail rounded-0",attrs:{src:"https://www.techprom.ru"+t}})])]}}])})],1)])])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-header"},[r("h3",{staticClass:"page-title"},[t._v("Продукты")]),r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("a",{attrs:{href:"javascript:void(0);"}},[t._v("Table")])]),r("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Все группы")])])])])}],i=(r("4de4"),r("c975"),r("b0c0"),r("d3b7"),r("96cf"),r("bc3a")),a=r.n(i),o={name:"product-all",components:{},data:function(){return{filter:null,filterOn:[],listPrice:Array,listParams:Array,loading:!1,sortBy:"count_learn",sortDesc:!1,countSubscriber:0,idGroup:"",idProduct:"",items:Array,infoModal:{id:"info-modal",title:"",content:""},fields:[{key:"thumbnail",label:"img"},{key:"name",label:"Название",sortable:!0},{key:"count_learn",label:"Количество повторений",sortable:!0},{key:"price",label:"Цена",sortable:!0},{key:"updated_at",label:"Последнее обновление",sortable:!0},{key:"actions",label:"Actions"}]}},methods:{filterPrice:function(t){this.filter=t},filterParams:function(t){this.filter=t},setLearn:function(t,e,r){var n=this;this.loading=!0,this.idProduct=t.id,console.log(t.id);var s=this;a.a.get("/sanctum/csrf-cookie").then((function(t){a.a.post("/api/product/set-learn",{id_product:s.idProduct}).then((function(t){t.status?(console.log("Вызвали алерт"),n.getProduct(),n.loading=!1):(console.log("Не работает"),console.log(t.status),n.loading=!1)})).catch((function(e){console.log(t),console.error(e),this.loading=!1}))}))},getProduct:function(){var t=this;a.a.get("/api/product/laptop").then((function(e){t.items=e.data.products,t.listPrice=e.data.price,t.listParams=e.data.params})).catch((function(t){console.error(t)}))},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},handleSubmit:function(){var t,e=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:t=this,a.a.get("/sanctum/csrf-cookie").then((function(r){a.a.post("/api/group/set-subscriber",{count_subscriber:e.countSubscriber,id_group:t.idGroup}).then((function(t){t.status?(console.log("Вызвали алерт"),e.getGroups(),e.$refs["my-modal"].hide()):(console.log("Не работает"),console.log(t.status))})).catch((function(t){console.log(r),console.error(t)}))}));case 2:case"end":return r.stop()}}),null,this)},myFilter:function(t){if(-1===arr.indexOf(t.name))return arr.push(t.name),t.name}},mounted:function(){this.getProduct()},computed:{}},c=o,l=r("2877"),u=Object(l["a"])(c,n,s,!1,null,null,null);e["default"]=u.exports},b0c0:function(t,e,r){var n=r("83ab"),s=r("9bf2").f,i=Function.prototype,a=i.toString,o=/^\s*function ([^ (]*)/,c="name";!n||c in i||s(i,c,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-73a744c2.694c5c06.js.map