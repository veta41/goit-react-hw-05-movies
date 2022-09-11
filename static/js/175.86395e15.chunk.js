"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[175],{9468:function(n,e,t){t.d(e,{h:function(){return c}});var i,o=t(168),r=t(6444).ZP.h1(i||(i=(0,o.Z)(["\n  width: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  color: #000000;\n  text-align: center;\n"]))),a=t(184);function c(n){var e=n.text;return(0,a.jsx)(r,{children:e})}},7335:function(n,e,t){t.d(e,{O:function(){return f}});var i,o,r,a=t(501),c=t(6871),d=t(168),p=t(6444),l=p.ZP.ul(i||(i=(0,d.Z)(["\n  display: grid;\n  flex-basis: calc((100% - 120px) / 3);\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  margin: 20px auto 0px;\n  padding: 0px;\n  list-style: none;\n"]))),s=p.ZP.p(o||(o=(0,d.Z)(["\n  display: flex;\n  padding: 5px;\n  font-weight: bold;\n  font-weight: 700;\n  color: #7bd4eb;\n  justify-content: center;\n"]))),x=p.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 5px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px #7bd4eb;\n"]))),u=t(184),f=function(n){var e=n.moviesList,t=(0,c.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l,{children:e.map((function(n){var e=n.title,i=n.id,o=n.name,r=n.poster_path;return(0,u.jsx)(x,{children:(0,u.jsx)("li",{children:(0,u.jsxs)(a.rU,{to:"/goit-react-hw-05-movies/movies/".concat(i),state:{from:t},children:[(0,u.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif",alt:e||o,width:"300",height:"450"}),(0,u.jsx)(s,{children:e||o})]})},i)})}))})})}},9175:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var i,o,r,a,c,d,p,l=t(885),s=t(2791),x=t(168),u=t(6444),f=t(501),h=t(7322),g=u.ZP.div(i||(i=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  flex-direction: column;\n  background-color: transparent;\n"]))),m=u.ZP.form(o||(o=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  &:hover {\n    box-shadow: 0 0 13px 3px #7bd4eb;\n  }\n"]))),b=u.ZP.button(r||(r=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n\n  background-size: 70%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Z=u.ZP.input(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),v=u.ZP.p(c||(c=(0,x.Z)(["\n  font-size: 30px;\n  text-align: center;\n"]))),y=(0,u.ZP)(f.OL)(d||(d=(0,x.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  color: #7bd4eb;\n  font-size: 25px;\n  font-weight: 500;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px #7bd4eb;\n"]))),j=(0,u.ZP)(h.NZx)(p||(p=(0,x.Z)(["\n  width: 35px;\n  height: 35px;\n  fill: #7bd4eb;\n"]))),w=t(1840),k=t(7335),P=t(9468),_=t(184);function z(){var n=(0,f.lr)(),e=(0,l.Z)(n,2),t=e[0],i=e[1],o=(0,s.useState)(""),r=(0,l.Z)(o,2),a=r[0],c=r[1],d=(0,s.useState)([]),p=(0,l.Z)(d,2),x=p[0],u=p[1];(0,s.useEffect)((function(){t.get("query")&&(0,w.V0)(t.get("query")).then((function(n){u(n.results)}))}),[t,a]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(g,{children:[(0,_.jsx)(P.h,{text:"SEARCH MOVIES"}),(0,_.jsxs)(m,{onSubmit:function(n){n.preventDefault(),a.trim()&&i({query:a})},children:[(0,_.jsx)(b,{type:"submit",children:(0,_.jsx)(j,{})}),(0,_.jsx)(Z,{type:"text",name:"query",value:a,autoComplete:"off",onChange:function(n){c(n.target.value)},autoFocus:!0,placeholder:"Search movie"})]})]}),null!==x&&void 0!==x&&x.length?(0,_.jsx)(k.O,{moviesList:x}):(0,_.jsxs)(v,{children:["Oooops, page not found",(0,_.jsx)(y,{to:"/goit-react-hw-05-movies/",children:"to Home"})]})]})}}}]);
//# sourceMappingURL=175.86395e15.chunk.js.map