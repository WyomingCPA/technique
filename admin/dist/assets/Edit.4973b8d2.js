import{l as w,d as I,m as L,g as U,n as R,q as T,s as N,u as K,v as D,x as V,_ as z,a as E,r as h,o as F,h as $,w as b,e as C,j as G}from"./index.bbbc36d1.js";var H=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],q=function(n){return H.map(function(e){return e.toLowerCase()}).indexOf(n.toLowerCase())!==-1},W=function(n,e,t){Object.keys(e).filter(q).forEach(function(a){var o=e[a];typeof o=="function"&&(a==="onInit"?o(n,t):t.on(a.substring(2),function(r){return o(r,t)}))})},J=function(n,e,t,a){var o=n.modelEvents?n.modelEvents:null,r=Array.isArray(o)?o.join(" "):o;w(a,function(d,l){t&&typeof d=="string"&&d!==l&&d!==t.getContent({format:n.outputFormat})&&t.setContent(d)}),t.on(r||"change input undo redo",function(){e.emit("update:modelValue",t.getContent({format:n.outputFormat}))})},Q=function(n,e,t,a,o,r){a.setContent(r()),t.attrs["onUpdate:modelValue"]&&J(e,t,a,o),W(n,t.attrs,a)},P=0,k=function(n){var e=Date.now(),t=Math.floor(Math.random()*1e9);return P++,n+"_"+t+P+String(e)},X=function(n){return n!==null&&n.tagName.toLowerCase()==="textarea"},x=function(n){return typeof n=="undefined"||n===""?[]:Array.isArray(n)?n:n.split(" ")},Y=function(n,e){return x(n).concat(x(e))},Z=function(n){return n==null},j=function(){return{listeners:[],scriptId:k("tiny-script"),scriptLoaded:!1}},nn=function(){var n=j(),e=function(o,r,d,l){var i=r.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=o,i.src=d;var s=function(){i.removeEventListener("load",s),l()};i.addEventListener("load",s),r.head&&r.head.appendChild(i)},t=function(o,r,d){n.scriptLoaded?d():(n.listeners.push(d),o.getElementById(n.scriptId)||e(n.scriptId,o,r,function(){n.listeners.forEach(function(l){return l()}),n.scriptLoaded=!0}))},a=function(){n=j()};return{load:t,reinitialize:a}},en=nn(),tn=function(){return typeof window!="undefined"?window:global},f=function(){var n=tn();return n&&n.tinymce?n.tinymce:null},on={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(n){return n==="html"||n==="text"}}},v=globalThis&&globalThis.__assign||function(){return v=Object.assign||function(n){for(var e,t=1,a=arguments.length;t<a;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},v.apply(this,arguments)},an=function(n,e,t,a){return n(a||"div",{id:e,ref:t})},rn=function(n,e,t){return n("textarea",{id:e,visibility:"hidden",ref:t})},ln=I({props:on,setup:function(n,e){var t=n.init?v({},n.init):{},a=L(n),o=a.disabled,r=a.modelValue,d=a.tagName,l=U(null),i=null,s=n.id||k("tiny-vue"),p=n.init&&n.init.inline||n.inline,m=!!e.attrs["onUpdate:modelValue"],S=!0,A=n.initialValue?n.initialValue:"",_="",B=function(u){return m?function(){return r!=null&&r.value?r.value:""}:function(){return u?A:_}},y=function(){var u=B(S),c=v(v({},t),{readonly:n.disabled,selector:"#"+s,plugins:Y(t.plugins,n.plugins),toolbar:n.toolbar||t.toolbar,inline:p,setup:function(g){i=g,g.on("init",function(O){return Q(O,n,e,g,r,u)}),typeof t.setup=="function"&&t.setup(g)}});X(l.value)&&(l.value.style.visibility=""),f().init(c),S=!1};w(o,function(u){var c;i!==null&&(typeof((c=i.mode)===null||c===void 0?void 0:c.set)=="function"?i.mode.set(u?"readonly":"design"):i.setMode(u?"readonly":"design"))}),w(d,function(u){var c;m||(_=i.getContent()),(c=f())===null||c===void 0||c.remove(i),V(function(){return y()})}),R(function(){if(f()!==null)y();else if(l.value&&l.value.ownerDocument){var u=n.cloudChannel?n.cloudChannel:"5",c=n.apiKey?n.apiKey:"no-api-key",g=Z(n.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/"+c+"/tinymce/"+u+"/tinymce.min.js":n.tinymceScriptSrc;en.load(l.value.ownerDocument,g,y)}}),T(function(){f()!==null&&f().remove(i)}),p||(N(function(){S||y()}),K(function(){var u;m||(_=i.getContent()),(u=f())===null||u===void 0||u.remove(i)}));var M=function(u){var c;_=i.getContent(),(c=f())===null||c===void 0||c.remove(i),t=v(v({},t),u),V(function(){return y()})};return e.expose({rerender:M}),function(){return p?an(D,s,l,n.tagName):rn(D,s,l)}}});const un={name:"group-create",components:{editor:ln},data(){return{loading:!1,description:""}},methods:{getProductData(){let n=this;E.get("/api/product/edit/"+this.$route.params.id).then(function(e){n.description=e.data.product.description,console.log(e.data.product.updated_at)}).catch(function(e){console.error(e)})},async update(){let n=this;this.loading=!0,E.get("/sanctum/csrf-cookie").then(e=>{E.post("/api/product/update",{id:this.$route.params.id,description:n.description}).then(t=>{t.status?(this.$vaToast.init({message:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E",color:"success"}),n.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(t.status))}).catch(function(t){console.log(e),console.error(t)})})}},mounted:function(){this.getProductData()}},cn=G(" \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ");function dn(n,e,t,a,o,r){const d=h("editor"),l=h("va-button"),i=h("va-form"),s=h("va-card-content"),p=h("va-card");return F(),$(p,null,{default:b(()=>[C(s,null,{default:b(()=>[C(i,{class:"flex flex-col gap-6",ref:"formRef"},{default:b(()=>[C(d,{id:"description-idea","api-key":"no-api-key",modelValue:o.description,"onUpdate:modelValue":e[0]||(e[0]=m=>o.description=m),value:"descriptionIdea",init:{height:700,menubar:!0,plugins:["advlist link autolink lists image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount","codesample toc autosave"],toolbar:"undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image                           formatselect | bold italic backcolor |            alignleft aligncenter alignright alignjustify |            bullist numlist outdent indent | removeformat | help | link |"}},null,8,["modelValue"]),C(l,{onClick:e[1]||(e[1]=m=>r.update())},{default:b(()=>[cn]),_:1})]),_:1},512)]),_:1})]),_:1})}var fn=z(un,[["render",dn]]);export{fn as default};
