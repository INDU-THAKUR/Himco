"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[984],{5984:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var l=s(2791),n=s(184);const a=function(t){let[e,s]=(0,l.useState)([]);return(0,l.useEffect)((()=>{(async()=>{let t=await fetch("".concat("http://localhost:1337","/api/schemes?populate=*")),e=await t.json(),l=await e.data;s([...l])})()}),[]),e.reverse(),(0,n.jsx)(n.Fragment,{children:0!==e.length?(0,n.jsx)("div",{style:{margin:"90px 10px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsxs)("table",{className:"schemes-table",children:[(0,n.jsx)("thead",{style:{backgroundColor:"#B80000"},children:(0,n.jsxs)("tr",{style:{color:"white"},children:[(0,n.jsx)("th",{style:{padding:"0px 10px"},children:"Description"}),(0,n.jsx)("th",{style:{padding:"0px 10px"},children:"Download"})]})}),(0,n.jsx)("tbody",{children:e.map((t=>(0,n.jsxs)("tr",{style:{borderBottom:"1px solid black"},children:[t.attributes.Description?(0,n.jsx)("td",{style:{padding:"0px 10px"},children:t.attributes.Description}):(0,n.jsx)("td",{style:{padding:"0px 10px"},children:"..."}),t.attributes.Download.data?(0,n.jsx)("td",{style:{padding:"0px 10px"},children:(0,n.jsx)("a",{href:"".concat("http://localhost:1337").concat(t.attributes.Download.data[0].attributes.url),children:"Download"})}):(0,n.jsx)("td",{style:{padding:"0px 10px"},children:"..."})]},t.id)))})]})}):(0,n.jsx)("div",{style:{margin:"90px 10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)("div",{className:"Error",style:{textAlign:"center",fontFamily:"Domine",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",color:"black",fontSize:"30px"},children:"Server Side Error"})})})}}}]);
//# sourceMappingURL=984.1b95b027.chunk.js.map