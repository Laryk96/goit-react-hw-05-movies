"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var c,r,a,o,i=e(9439),u=e(2791),l=e(7689),d=e(273),f=e(168),g=e(4934),p=g.Z.ul(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #212121;\n"]))),s=g.Z.li(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 200px;\n\n  background-color: orange;\n  padding-bottom: 10px;\n  border-radius: 5px;\n"]))),h=g.Z.img(a||(a=(0,f.Z)(["\n  margin-bottom: 20px;\n  border-radius: 5px;\n"]))),m=g.Z.p(o||(o=(0,f.Z)(["\n  text-align: center;\n  color: #212121;\n"]))),x=e(184),b=function(){var n=(0,l.UO)().id,t=(0,u.useState)(null),e=(0,i.Z)(t,2),c=e[0],r=e[1];return(0,u.useEffect)((function(){c||(0,d.IQ)(n).then((function(n){return r(n.data.cast)})).catch(console.log).finally()}),[c,n]),c?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p,{children:c.map((function(n){var t=n.id,e=n.name,c=n.profile_path;return(0,x.jsxs)(s,{children:[(0,x.jsx)(h,{src:c?"https://image.tmdb.org/t/p/w200".concat(c):"https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg",alt:e}),(0,x.jsx)(m,{children:e})]},t)}))})}):(0,x.jsx)("h2",{children:"Loading..."})}},273:function(n,t,e){e.d(t,{IQ:function(){return l},IR:function(){return i},_L:function(){return o},hw:function(){return u},tx:function(){return d}});var c=e(1243),r="b1cb6bb9f0fb8b16da0ef0bac91fc5ae",a="https://api.themoviedb.org/",o=function(){return c.Z.get("".concat(a,"3/trending/all/day?api_key=").concat(r))},i=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.Z.get("".concat(a,"3/search/movie?api_key=").concat(r,"&language=en-US&page=").concat(t,"&include_adult=false&query=").concat(n))},u=function(n){return c.Z.get("".concat(a,"3/movie/").concat(n,"?api_key=").concat(r,"&language=en-US"))},l=function(n){return c.Z.get("".concat(a,"3/movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US"))},d=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.Z.get("".concat(a,"3/movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=").concat(t))}}}]);
//# sourceMappingURL=736.57373259.chunk.js.map