"use strict";(()=>{var L=Object.defineProperty;var I=(a,e,t)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var v=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var c=(a,e,t)=>(I(a,typeof e!="symbol"?e+"":e,t),t);var y=v((k,x)=>{"use strict";var m=class{constructor(){c(this,"alreadyInCodeSegement",!1);c(this,"braceList",[]);c(this,"currSegment",null)}createTopLevelCodeSegment(e,t){let r=e.lastIndexOf(`
`,t),i=e.substring(r,t).replace(/^\s+|\s+$/g,""),n={children:[],name:i,code:""};this.braceList.push(n),this.currSegment=n,this.alreadyInCodeSegement=!0}clipLastSegmentsCode(e){this.currSegment.code=this.currSegment.code.substring(0,this.currSegment.code.length-e.length-1)}createNestedCodeSegement(e,t){let r=e.lastIndexOf(`
`,t),i=e.substring(r,t).replace(/^\s+|\s+$/g,""),n=" ";i[0]==="&"&&(i=i.substring(1,i.length),n=""),this.clipLastSegmentsCode(i);let l={children:[],name:this.currSegment.name+n+i,code:"",parent:this.currSegment};this.currSegment.children.push(l),this.currSegment=l}endCodeSegment(e){this.currSegment.indexStop=e,this.currSegment.parent?this.currSegment=this.currSegment.parent:this.alreadyInCodeSegement=!1}AddLetterToExistingSegment(e,t){this.currSegment&&(this.currSegment.code+=e[t])}parseSWScript(e,t){for(let r=0;r<e.length;r++){let i=e[r];i==="{"?this.alreadyInCodeSegement?this.createNestedCodeSegement(e,r):this.createTopLevelCodeSegment(e,r):i==="}"?this.endCodeSegment():this.AddLetterToExistingSegment(e,r)}this.renderItems(this.braceList,t)}renderItems(e,t){e.forEach(r=>{r.children&&this.renderItems(r.children,t),t(r.name,r.code)})}},f=class{static getColors(e,t){return e==="white"?"#ffffff":e==="black"?"#000":{blue:["","#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a"],green:["","#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d"],gray:["","#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280","#4b5563","#374151","#1f2937","#111827"],red:["","#fef2f2","#fee2e2","#fecaca","#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d"]}[e][t]}};c(f,"mpSwap",{m:"margin",mt:"margin-top",mb:"margin-bottom",mr:"margin-right",ml:"margin-left",p:"padding",pl:"padding-left",pr:"padding-right",pt:"padding-top",pb:"padding-bottom"}),c(f,"borderSwap",{b:"border",bl:"border-left",br:"border-right",bt:"border-top",bb:"border-bottom"}),c(f,"singleWord",{inline:"display: inline-block;",block:"display: block;",flex:"display: flex;",hidden:"display: none",pointer:"cursor: pointer;",tac:"text-align: center;",tal:"text-align: left;",dashed:"border-style: dashed !important;",fixed:"position: fixed;",relative:"position: relative;","justify-between":"justify-content: space-between;","flex-wrap":"flex-wrap: wrap;","mx-auto":"margin: auto;"}),c(f,"shadows",{1:"4px 4px 4px rgb(0 0 0 / 8%);",2:"4px 4px 4px rgb(0 0 0 / 16%);",3:"4px 4px 4px rgb(0 0 0 / 25%);",4:"4px 4px 4px rgb(0 0 0 / 32%);",5:"4px 4px 4px rgb(0 0 0 / 40%);"});var g=class{static background(e,t,r){return`background-color: ${f.getColors(e[1],e[2])}${t};`}static top(e){return`top: ${parseInt(e[1])*.125}rem;`}static fontColor(e,t,r){return`color: ${f.getColors(e[1],e[2])}${t};`}static fontWeight(e,t){return`font-weight: ${parseInt(e[1])*100}${t};`}static lineHeight(e,t){return`line-height: ${.25+parseInt(e[1])*.125}rem${t};`}static shadow(e,t,r){return`box-shadow: ${f.shadows[e[1]]}${t};`}static width(e,t){let r=e[1].split("/");return r.length>1?`width: ${parseInt(r[0])/parseInt(r[1])*100}%${t};`:`width: ${parseInt(r[0])*.125}rem${t};`}static height(e,t){return`height: ${parseInt(e[1])*.125}rem${t};`}static fontSize(e,t,r){return`font-size: ${.25+parseInt(e[1])*.125}rem${t};`}static handleMarginAndPadding(e,t,r,i){let n=f.mpSwap[e[0]];if(n)return`${n}: ${r}${parseInt(e[1])*.125}rem${t};`}static borders(e,t,r){let i=f.borderSwap[e[0]];if(e[1]==="rad")return`border-radius: ${parseInt(e[2]||1)*1}px${t};`;if(e[1]==="col")return`border-color: ${f.getColors(e[2],e[3])}${t};`;if(i)return`${i}-width: ${parseInt(e[1]||1)*1}px${t}; ${i}-style: solid${t};`}static flexGrow(e,t,r){return`flex-grow: ${e[1]}${t};`}static flexBasis(e,t,r){return`flex-basis: ${e[1]}${t};`}static oneWorders(e,t){return f.singleWord[e]||""}static process(e){let t={default:"",hover:"",sm:"",md:"",lg:""};e=e.replace(/\n/g,"");let r=e.split(" "),i={bg:"background",top:"top",fc:"fontColor",fw:"fontWeight",fs:"fontSize",lh:"lineHeight",shadow:"shadow",w:"width",basis:"flexBasis",grow:"flexGrow",b:"borders",h:"height"},n="";return r.forEach(l=>{if(l.length===0)return;let d="";l[0]==="-"&&(d="-",l=l.substring(1,l.length));let s=l.split(":"),o="default";s.length>1&&(o=s[0],l=s[1]);let u="";l[0]==="_"&&(l=l.substring(1,l.length),u=" !important");let $=null;if($=this.oneWorders(l,this))return t[o]+=$;let b=l.split("-"),S=b[0];if(s=i[S]){let w=g[s](b,u,this)||"";if(w)return t[o]+=w}t[o]+=this.handleMarginAndPadding(b,u,d,this)||""}),t}},p=class{static processSWClassString(e){return g.process(e)}static processSWScript(e,t){return t=t||"",new m().parseSWScript(e,(i,n)=>{n=this.processSWClassString(n),n.default.length>0&&(t+=`
            ${i} {
            ${n.default}
            }
        `),n.hover.length>0&&(t+=`
            ${i}:hover {
            ${n.hover}
            }
        `),n.sm.length&&(t+=`
            @media (min-width: 628px) {
            ${i} {
                ${n.sm}
            }
            }
        `),n.md.length&&(t+=`
            @media (min-width: 800px) {
            ${i} {
                ${n.md}
            }
            }
        `),n.lg.length&&(t+=`
            @media (min-width: 1000px) {
            ${i} {
                ${n.lg}
            }
            }
        `)}),t}};c(p,"classesAlreadyAdded",{});typeof window!="undefined"&&(window.SWCSS=p);x.exports=p});var h=y();function C(){document.querySelector("body").style.display="none";let a=!1;function e(){if(a)return;a=!0;let t="",r=document.createElement("style");r.innerHTML=t,document.querySelector("body").appendChild(r);let i={};Array.from(document.querySelectorAll("*")).map(d=>{d.className.toString().split(/\s+/).forEach(s=>{i[s]=1})}),Object.keys(i).map(d=>{let s=h.processSWClassString(d);s&&s.default.length>1&&(t+=`
            .${d.split("/").join("\\/")} { ${s.default}  }`)}),r.innerHTML+=t,t="",document.querySelectorAll('[rel="ext"]').forEach(d=>{t=h.processSWScript(d.innerHTML,t),r.innerHTML+=t,console.log("GOT HERE---------")}),console.log("FINISHED"),document.querySelector("body").style.display="block";function n(d){if(t="",d.getAttribute("rel")==="ext"){let s=d.innerHTML;t+=h.processSWScript(s),d.dataset.processed=!0}else d.classList.forEach(s=>{let o=h.processSWClassString(s);o&&o.default.length>1&&(t+=`
            .${s.split("/").join("\\/")} { ${o.default}  }`)});r.innerHTML+=t,d.children.length>0&&Array.prototype.slice.call(d.children).map(s=>{n(s)})}new MutationObserver(function(d){d[0].addedNodes[0]&&d[0].addedNodes[0].nodeName==="#text"||d.forEach(function(s){for(var o=0;o<s.addedNodes.length;o++)s.addedNodes[o].classList&&n(s.addedNodes[o])})}).observe(document,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]})}typeof window!="undefined"&&(window.onload=e),typeof window!="undefined"&&window.onload()}typeof window!="undefined"&&C();})();