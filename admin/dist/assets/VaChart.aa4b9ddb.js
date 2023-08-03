import{M as v,m as A,r as p,c as f,K as D,B as i,C as l,d as E,H as _,b as L,e as M,h as b,D as P}from"./index.5283066a.js";const w={labels:["North America","South America","Australia"],datasets:[{label:"Population (millions)",backgroundColor:["danger","info","primary"],data:[2478,5267,734]}]},V=["January","February","March","April","May","June","July","August","September","October","November","December"],k=(t=5)=>Math.max(t,new Date().getMonth()),d=k(),O=()=>Math.floor(Math.random()*100),g=t=>Array.from(Array(t),O),S=()=>!!Math.floor(Math.random()*2)?["Debit","Credit"]:["Credit","Debit"],C=S(),z={labels:V.slice(0,d),datasets:[{label:C[0],backgroundColor:"primary",data:g(d)},{label:C[1],backgroundColor:"secondary",data:g(d)}]};function T(t=[],a=.6){const{getGlobalConfig:c}=v(),{setHSLAColor:r,getColor:e}=A(),n=o=>typeof o=="string"?r(e(o),{a}):o.map(u=>r(e(u),{a})),s=o=>typeof o=="string"?e(o):o.map(u=>e(u)),h=p(n(t)),m=p(s(t)),y=f(()=>c().colors);return D(y,()=>{h.value=n(t),m.value=s(t)}),{generateHSLAColors:n,generateColors:s,generatedColors:m,generatedHSLAColors:h}}function H(t,a){const r=t.datasets.map(e=>e.backgroundColor).map(e=>T(e,a)[a?"generatedHSLAColors":"generatedColors"]);return f(()=>{const e=t.datasets.map((n,s)=>({...n,backgroundColor:r[s].value}));return{...t,datasets:e}})}const x={plugins:{legend:{position:"bottom",labels:{font:{color:"#34495e",family:"sans-serif",size:14},usePointStyle:!0}},tooltip:{bodyFont:{size:14,family:"sans-serif"},boxPadding:4}},datasets:{line:{fill:"origin",tension:.3,borderColor:"transparent"},bubble:{borderColor:"transparent"},bar:{borderColor:"transparent"}},maintainAspectRatio:!1,animation:!0},R={pie:i(()=>l(()=>import("./PieChart.dfcadabf.js"),["assets/PieChart.dfcadabf.js","assets/index.5522ffc7.js","assets/index.5283066a.js","assets/index.b4b648bb.css"])),doughnut:i(()=>l(()=>import("./DoughnutChart.450e7ac6.js"),["assets/DoughnutChart.450e7ac6.js","assets/index.5522ffc7.js","assets/index.5283066a.js","assets/index.b4b648bb.css"])),bubble:i(()=>l(()=>import("./BubbleChart.e3be2b10.js"),["assets/BubbleChart.e3be2b10.js","assets/index.5522ffc7.js","assets/index.5283066a.js","assets/index.b4b648bb.css"])),line:i(()=>l(()=>import("./LineChart.41238ba2.js"),["assets/LineChart.41238ba2.js","assets/index.5522ffc7.js","assets/index.5283066a.js","assets/index.b4b648bb.css"])),bar:i(()=>l(()=>import("./BarChart.1f324c9e.js"),["assets/BarChart.1f324c9e.js","assets/index.5522ffc7.js","assets/index.5283066a.js","assets/index.b4b648bb.css"])),"horizontal-bar":i(()=>l(()=>import("./HorizontalBarChart.04a18098.js"),["assets/HorizontalBarChart.04a18098.js","assets/index.5522ffc7.js","assets/index.5283066a.js","assets/index.b4b648bb.css"]))};const B=E({__name:"VaChart",props:{data:null,options:null,type:null},setup(t){const a=t,c=p(),r=_(()=>R[a.type]),e=_(()=>({...x,...a.options}));return(n,s)=>(L(),M(P(b(r)),{ref_key:"chart",ref:c,class:"va-chart","chart-options":b(e),"chart-data":t.data},null,8,["chart-options","chart-data"]))}});export{B as _,w as d,z as l,H as u};
