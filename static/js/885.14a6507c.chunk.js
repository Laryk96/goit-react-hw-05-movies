/*! For license information please see 885.14a6507c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[885],{6195:function(e,n,t){t.d(n,{Z:function(){return d}});var r,i=t(9135),o=t(168),a=t(4934),c=t(1087),l=(0,a.Z)(c.rU)(r||(r=(0,o.Z)(["\n  position: absolute;\n  display: inline-flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: center;\n\n  top: 100px;\n  padding: 8px;\n\n  font-size: 20px;\n  line-height: 1.666;\n  background-color: #212121;\n  color: white;\n  border-radius: 5px;\n  text-decoration: none;\n\n  transition: background-color 100ms ease-in, transform 100ms ease-in,\n    color 100ms ease-in;\n\n  &:hover {\n    background-color: orange;\n    color: #212121;\n    transform: scale(1.05);\n  }\n"]))),s=t(184),d=function(e){var n=e.to,t=e.children;return(0,s.jsxs)(l,{to:n,children:[(0,s.jsx)(i.x_l,{}),(0,s.jsx)("p",{children:t})]})}},6885:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r,i,o,a,c,l,s,d,u,h,g,x=t(9439),f=t(6195),p=t(2791),m=t(7689),y=t(6109),b=t(273),v=t(759),j=t(168),w=t(4934),Z=t(1087),k=w.Z.div(r||(r=(0,j.Z)(["\n  padding-top: 20px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n\n  background-color: #212121;\n  border-radius: 10px;\n"]))),E=w.Z.h2(i||(i=(0,j.Z)(["\n  margin-bottom: 20px;\n\n  color: white;\n  font-size: 24px;\n  line-height: 1.7;\n  text-align: center;\n"]))),O=w.Z.ul(o||(o=(0,j.Z)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: 35px;\n"]))),_=(0,w.Z)(Z.rU)(a||(a=(0,j.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background-color: orange;\n  width: 150px;\n  height: 40px;\n\n  color: black;\n  border-radius: 6px;\n"]))),C=w.Z.li(c||(c=(0,j.Z)(["\n  transition: transform 100ms ease-in;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),U=t(184),P=v.Z.cast,S=v.Z.reviews,M=function(){return(0,U.jsxs)(k,{children:[(0,U.jsx)(E,{children:"Additional information"}),(0,U.jsxs)(O,{children:[(0,U.jsx)(C,{children:(0,U.jsx)(_,{to:P,replace:!0,children:"Cast"})}),(0,U.jsx)(C,{children:(0,U.jsx)(_,{to:S,replace:!0,children:"Reviews"})})]})]})},z=function(e){return e.reduce((function(e,n){var t=n.name;return"".concat(e,", ").concat(t)}),"").slice(1).split(" ").slice(1)},R=w.Z.article(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  gap: 40px;\n  margin-bottom: 30px;\n  background-image: linear-gradient(to right, #434343 0%, black 120%);\n  border-radius: 10px;\n"]))),B=w.Z.div(s||(s=(0,j.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n"]))),T=w.Z.div(d||(d=(0,j.Z)(["\n  width: 600px;\n  padding: 20px;\n  border-radius: 5px;\n"]))),q=w.Z.h2(u||(u=(0,j.Z)(["\n  font-size: 38px;\n  line-height: 1.666;\n  margin-bottom: 10px;\n  color: orange;\n"]))),D=w.Z.h3(h||(h=(0,j.Z)(["\n  font-size: 30px;\n  line-height: 1.7;\n  margin-bottom: 10px;\n  color: orange;\n"]))),G=w.Z.p(g||(g=(0,j.Z)(["\n  color: white;\n  font-size: 16px;\n  line-height: 1.7;\n  margin-bottom: 40px;\n"]))),I=function(e){var n=e.movie,t=n.title,r=n.poster_path,i=n.release_date,o=n.overview,a=n.genres,c=n.vote_average,l=z(a);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(R,{children:[(0,U.jsx)(B,{children:(0,U.jsx)("img",{alt:t,src:"https://image.tmdb.org/t/p/w500".concat(r)})}),(0,U.jsxs)(T,{children:[(0,U.jsxs)(q,{children:[t," (",i.slice(0,4),")"]}),(0,U.jsxs)(G,{children:["User Score: ",Math.round(10*c),"%"]}),(0,U.jsx)(D,{children:"Overview"}),(0,U.jsx)(G,{children:o}),(0,U.jsx)(D,{children:"Genres"}),(0,U.jsx)(G,{children:l.map((function(e){return e+" "}))})]})]}),(0,U.jsx)(M,{})]})},N=function(){var e=(0,p.useState)({}),n=(0,x.Z)(e,2),t=n[0],r=n[1],i=(0,p.useState)("idle"),o=(0,x.Z)(i,2),a=o[0],c=o[1],l=(0,m.UO)().id;return(0,p.useEffect)((function(){l&&(c("loading"),(0,b.hw)(l).then((function(e){var n=e.data;return r(n)})).catch((function(e){console.log(e.message),c("not found")})).finally((function(){return c("fulfilled")})))}),[l]),"loading"===a?(0,y.h)():"fulfilled"===a?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(f.Z,{to:"/",children:"Go to back"}),(0,U.jsx)(I,{movie:t}),(0,U.jsx)(m.j3,{})]}):void 0}},6109:function(e,n,t){t.d(n,{h:function(){return a},m:function(){return o}});var r=t(8175),i=t(184),o=function(){var e=270,n=Array(20).fill(1);return(0,i.jsxs)(r.ZP,{speed:1,width:1350,height:1320,backgroundColor:"#212121",children:[(0,i.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",width:1320,height:"20"}),n.map((function(n,t){var r=330*Math.floor(t/5)+35,o=t*e%1350;return(0,i.jsx)("rect",{x:o,y:r,rx:"0",ry:"0",width:240,height:300},t)}))]})},a=function(){return(0,i.jsxs)(r.ZP,{width:1300,height:700,viewBox:"0 0 700 300",backgroundColor:"#212121",foregroundColor:"#dbdbdb",children:[(0,i.jsx)("rect",{x:"4",y:"8",rx:"3",ry:"3",width:"7",height:"288"}),(0,i.jsx)("rect",{x:"6",y:"289",rx:"3",ry:"3",width:"669",height:"8"}),(0,i.jsx)("rect",{x:"670",y:"9",rx:"3",ry:"3",width:"6",height:"285"}),(0,i.jsx)("rect",{x:"55",y:"42",rx:"16",ry:"16",width:"274",height:"216"}),(0,i.jsx)("rect",{x:"412",y:"113",rx:"3",ry:"3",width:"102",height:"7"}),(0,i.jsx)("rect",{x:"402",y:"91",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)("rect",{x:"405",y:"139",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)("rect",{x:"416",y:"162",rx:"3",ry:"3",width:"102",height:"7"}),(0,i.jsx)("rect",{x:"405",y:"189",rx:"3",ry:"3",width:"178",height:"6"}),(0,i.jsx)("rect",{x:"5",y:"8",rx:"3",ry:"3",width:"669",height:"7"}),(0,i.jsx)("rect",{x:"406",y:"223",rx:"14",ry:"14",width:"72",height:"32"}),(0,i.jsx)("rect",{x:"505",y:"224",rx:"14",ry:"14",width:"72",height:"32"}),(0,i.jsx)("rect",{x:"376",y:"41",rx:"3",ry:"3",width:"231",height:"29"})]})}},273:function(e,n,t){t.d(n,{IQ:function(){return s},IR:function(){return c},_L:function(){return a},hw:function(){return l},tx:function(){return d}});var r=t(1243),i="b1cb6bb9f0fb8b16da0ef0bac91fc5ae",o="https://api.themoviedb.org/",a=function(){return r.Z.get("".concat(o,"3/trending/all/day?api_key=").concat(i))},c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"3/search/movie?api_key=").concat(i,"&language=en-US&page=").concat(n,"&include_adult=false&query=").concat(e))},l=function(e){return r.Z.get("".concat(o,"3/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"))},s=function(e){return r.Z.get("".concat(o,"3/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"))},d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.Z.get("".concat(o,"3/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=").concat(n))}},8175:function(e,n,t){var r=t(2791),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e},i.apply(this,arguments)};var o=function(e){var n=e.animate,t=e.animateBegin,o=e.backgroundColor,a=e.backgroundOpacity,c=e.baseUrl,l=e.children,s=e.foregroundColor,d=e.foregroundOpacity,u=e.gradientRatio,h=e.gradientDirection,g=e.uniqueKey,x=e.interval,f=e.rtl,p=e.speed,m=e.style,y=e.title,b=e.beforeMask,v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]])}return t}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),j=g||Math.random().toString(36).substring(6),w=j+"-diff",Z=j+"-animated-diff",k=j+"-aria",E=f?{transform:"scaleX(-1)"}:null,O="0; "+x+"; 1",_=p+"s",C="top-bottom"===h?"rotate(90)":void 0;return(0,r.createElement)("svg",i({"aria-labelledby":k,role:"img",style:i(i({},m),E)},v),y?(0,r.createElement)("title",{id:k},y):null,b&&(0,r.isValidElement)(b)?b:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+c+"#"+w+")",style:{fill:"url("+c+"#"+Z+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:w},l),(0,r.createElement)("linearGradient",{id:Z,gradientTransform:C},(0,r.createElement)("stop",{offset:"0%",stopColor:o,stopOpacity:a},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:O,dur:_,repeatCount:"indefinite",begin:t})),(0,r.createElement)("stop",{offset:"50%",stopColor:s,stopOpacity:d},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:O,dur:_,repeatCount:"indefinite",begin:t})),(0,r.createElement)("stop",{offset:"100%",stopColor:o,stopOpacity:a},n&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:O,dur:_,repeatCount:"indefinite",begin:t})))))};o.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var a=function(e){return e.children?(0,r.createElement)(o,i({},e)):(0,r.createElement)(c,i({},e))},c=function(e){return(0,r.createElement)(a,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};n.ZP=a}}]);
//# sourceMappingURL=885.14a6507c.chunk.js.map