(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{109:function(e,t,a){e.exports=a(138)},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=a(7),i=a(13),u=a(15),s=a.n(u),m=a(49),d=a(142),b=a(181),E=a(182),p=a(183),g=a(174),f=a(180),h=Object(n.createContext)(null),v=a(198),k=a(173),j=a(175),O=a(196),y=a(179),C=a(24),F=a.n(C),w=function(e){var t=e.open,a=e.onClose,o=Object(n.useContext)(h).setUser,l=Object(n.useState)(""),i=Object(c.a)(l,2),u=i[0],m=i[1],b=Object(n.useState)(""),E=Object(c.a)(b,2),p=E[0],f=E[1],C=Object(n.useCallback)((function(){s.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/login",{email:u,password:p}).then((function(e){a(),localStorage.setItem("token",e.data.token),o(e.data.auth)})).catch((function(e){alert(e)}))}),[u,p,a,o]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||C()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,C]),r.a.createElement(v.a,{open:t||!1,onClose:a},r.a.createElement(k.a,null,"Login",r.a.createElement(g.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(j.a,null,r.a.createElement(O.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:u,onChange:function(e){m(e.target.value)}}),r.a.createElement(O.a,{label:"Password",type:"password",fullWidth:!0,value:p,onChange:function(e){f(e.target.value)}}),r.a.createElement(y.a,null,r.a.createElement(d.a,{onClick:C,color:"primary"},"Login"))))},S=function(e){var t=e.open,a=e.onClose,o=Object(n.useState)(""),l=Object(c.a)(o,2),i=l[0],u=l[1],m=Object(n.useState)(""),b=Object(c.a)(m,2),E=b[0],p=b[1],f=Object(n.useState)(""),h=Object(c.a)(f,2),C=h[0],w=h[1],S=Object(n.useCallback)((function(){E===C?s.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/register",{email:i,password:E}).then((function(e){a(),u(""),p(""),w("")})):alert("Password does not match")}),[i,E,C,a]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||S()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,S]),r.a.createElement(v.a,{open:t||!1,onClose:a},r.a.createElement(k.a,null,"Register",r.a.createElement(g.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(j.a,null,r.a.createElement(O.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:i,onChange:function(e){u(e.target.value)}}),r.a.createElement(O.a,{label:"Password",type:"password",fullWidth:!0,value:E,onChange:function(e){p(e.target.value)}}),r.a.createElement(O.a,{label:"Password",type:"password",fullWidth:!0,value:C,onChange:function(e){w(e.target.value)}}),r.a.createElement(y.a,null,r.a.createElement(d.a,{onClick:S,color:"primary"},"Register"))))},x=function(){var e=Object(n.useContext)(h),t=e.user,a=e.setUser;return Object(n.useEffect)((function(){var e=localStorage.getItem("token");!t&&e&&s.a.get("https://bmai53-budget-tracker-server.herokuapp.com/auth/findUser",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){a(e.data.auth)}))}),[t,a]),r.a.createElement(r.a.Fragment,null)},L=a(90),I=a.n(L),U=Object(f.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(5)}}})),W=function(){var e=Object(n.useContext)(h),t=e.user,a=e.setUser,o=Object(n.useState)(!1),l=Object(c.a)(o,2),i=l[0],u=l[1],s=Object(n.useState)(!1),f=Object(c.a)(s,2),v=f[0],k=f[1],j=U(),O=t?[r.a.createElement(d.a,{color:"inherit",component:m.b,to:"/dashboard",key:"dashboard"},"Dashboard"),r.a.createElement(d.a,{color:"inherit",onClick:function(){a(null),localStorage.removeItem("token"),window.location.reload()},key:"logout"},"Logout")]:[r.a.createElement(d.a,{color:"inherit",onClick:function(){u(!0)},key:"login"},"Login"),r.a.createElement(d.a,{color:"inherit",onClick:function(){k(!0)},key:"register"},"Register")];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(b.a,{position:"static",className:j.root},r.a.createElement(E.a,null,r.a.createElement(p.a,{container:!0,spacing:1,justify:"space-between",alignItems:"center"},r.a.createElement(p.a,{item:!0,xs:8},r.a.createElement(g.a,{onClick:function(){return window.open("https://github.com/bmai53/budget-tracker","_blank")}},r.a.createElement(I.a,{fontSize:"large",color:"secondary"}))),r.a.createElement(p.a,{item:!0,xs:4,style:{textAlign:"right"}},O)))),r.a.createElement(w,{open:i,onClose:function(){return u(!1)}}),r.a.createElement(S,{open:v,onClose:function(){return k(!1)}}))},B=(a(184),a(185),a(202),a(139),a(186),a(187),a(188),a(189),a(190),a(197),a(92),a(65),a(201),Object(f.a)((function(e){return{deleteButton:{color:"red"}}})),Object(f.a)((function(e){return{table:{maxWidth:1e3},tableHeader:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},income:{color:e.palette.positive.main},expense:{color:e.palette.negative.main}}})),a(141)),P=(a(193),a(191),Object(f.a)((function(e){return{deleteButton:{color:"red"}}})),Object(f.a)((function(e){return{positive:{color:e.palette.positive.main},negative:{color:e.palette.negative.main}}})),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(B.a,{variant:"h1",align:"center"},"Welcome to Budget Tracker"),r.a.createElement(B.a,{variant:"h3",align:"center"},"Log in or register to get started!"))}),A=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement(h.Provider,{value:{user:a,setUser:o}},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},a?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement(P,null)),r.a.createElement(i.b,{path:"/home",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(i.b,{path:"/dashboard"},a?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement(P,null)),a?r.a.createElement(i.b,{render:function(){return r.a.createElement(i.a,{to:"/dashboard"})}}):r.a.createElement(i.b,{render:function(){return r.a.createElement(i.a,{to:"/"})}})))},N=a(192),R=a(93),J=(a(137),Object(R.a)({palette:{primary:{main:"#35B234",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF"},positive:{main:"#4caf50"},negative:{main:"#f44336"},background:{default:"#FFFFFF"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}));l.a.render(r.a.createElement(m.a,null,r.a.createElement(N.a,{theme:J},r.a.createElement(A,null))),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.aac6aa6f.chunk.js.map