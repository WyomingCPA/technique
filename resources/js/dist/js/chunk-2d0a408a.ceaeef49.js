(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a408a"],{"055d":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"tables"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12 grid-margin stretch-card"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"}),s("b-table",{attrs:{responsive:"",busy:t.loading,items:t.items,fields:t.fields,"sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"update:sortBy":function(a){t.sortBy=a},"update:sort-by":function(a){t.sortBy=a},"update:sortDesc":function(a){t.sortDesc=a},"update:sort-desc":function(a){t.sortDesc=a}},scopedSlots:t._u([{key:"table-busy",fn:function(){return[s("div",{staticClass:"text-center text-danger my-2"},[s("b-spinner",{staticClass:"align-middle"}),s("strong",[t._v("Loading...")])],1)]},proxy:!0},{key:"cell(thumbnail)",fn:function(t){return[s("a",{attrs:{href:"https://www.techprom.ru"+t.item.link,target:"_blank"}},[s("img",{staticClass:"img-thumbnail rounded-0",attrs:{src:"https://www.techprom.ru"+t.value}})])]}}])})],1)])])])])},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page-header"},[s("h3",{staticClass:"page-title"},[t._v("Продукты")]),s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("a",{attrs:{href:"javascript:void(0);"}},[t._v("Table")])]),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}})])])])}],i=s("bc3a"),n=s.n(i),c={name:"product-all",components:{},data:function(){return{loading:!1,sortBy:"count_learn",sortDesc:!1,countSubscriber:0,idGroup:"",idProduct:"",items:Array,infoModal:{id:"info-modal",title:"",content:""},fields:[{key:"thumbnail",label:"img"},{key:"name",label:"Название",sortable:!0},{key:"price",label:"Цена",sortable:!0},{key:"updated_at",label:"Последнее обновление",sortable:!0}]}},methods:{getProduct:function(){var t=this;n.a.get("/api/washmasine").then((function(a){t.items=a.data.products,console.log(a.data.groups)})).catch((function(t){console.error(t)}))}},mounted:function(){this.getProduct()}},o=c,l=s("2877"),d=Object(l["a"])(o,e,r,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0a408a.ceaeef49.js.map