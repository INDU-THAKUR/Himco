"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[936],{650:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(2791),n=(a(8040),a(197)),s=a(184);const c=function(e){let[t,a]=(0,l.useState)([]),c=async e=>{console.log("".concat("http://localhost:1337","/api/").concat(e,"?populate=*"));let t=await fetch("".concat("http://localhost:1337","/api/").concat(e,"?populate=*")),l=await t.json(),n=await l.data;a([...n])};return(0,l.useEffect)((()=>{c("gallery-category1s")}),[]),(0,s.jsx)(s.Fragment,{children:0!==t.length?(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[(0,s.jsx)(n.lr,{children:t.map((e=>(0,s.jsx)("div",{className:"caro-img",children:(0,s.jsx)("img",{src:"".concat("http://localhost:1337").concat(e.attributes.Image.data[0].attributes.url),alt:"",className:"pic"},e.id)})))}),(0,s.jsx)("div",{className:"key",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:(0,s.jsx)("button",{onClick:()=>c("gallery-category1s"),style:{backgroundColor:"#B80000",color:"white",margin:"2px 10px",fontSize:"14px",height:"55px"},children:"Education and Training"},1)})]}):(0,s.jsx)("div",{style:{margin:"90px 10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,s.jsx)("div",{className:"Error",style:{textAlign:"center",fontFamily:"Domine",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",color:"black",fontSize:"30px"},children:"Server Side Error"})})})};const i=function(){return(0,s.jsxs)("div",{className:"Gallery",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"gallery-heading",children:"Gallery"}),(0,s.jsx)("div",{className:"gallery-text"})]}),(0,s.jsx)("div",{className:"carousel-gallery",children:(0,s.jsx)(c,{})})]})}}}]);
//# sourceMappingURL=936.efb0f65e.chunk.js.map