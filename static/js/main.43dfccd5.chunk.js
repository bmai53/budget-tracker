(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{109:function(e,t,a){e.exports=a(138)},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(7),u=a(13),i=a(15),m=a.n(i),s=a(49),d=a(142),E=a(181),g=a(182),b=a(183),p=a(174),h=a(180),f=Object(n.createContext)(null),v=a(198),y=a(173),j=a(175),k=a(196),O=a(179),C=a(24),S=a.n(C),w=function(e){var t=e.open,a=e.onClose,l=Object(n.useContext)(f).setUser,c=Object(n.useState)(""),u=Object(o.a)(c,2),i=u[0],s=u[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),b=g[0],h=g[1],C=Object(n.useCallback)((function(){m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/login",{email:i,password:b}).then((function(e){a(),console.log(e.data),localStorage.setItem("token",e.data.token),l(e.data.auth)}))}),[i,b,a,l]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||C()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,C]),r.a.createElement(v.a,{open:t||!1,onClose:a},r.a.createElement(y.a,null,"Login",r.a.createElement(p.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(S.a,null))),r.a.createElement(j.a,null,r.a.createElement(k.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:i,onChange:function(e){s(e.target.value)}}),r.a.createElement(k.a,{label:"Password",type:"password",fullWidth:!0,value:b,onChange:function(e){h(e.target.value)}}),r.a.createElement(O.a,null,r.a.createElement(d.a,{onClick:C,color:"primary"},"Login"))))},F=function(e){var t=e.open,a=e.onClose,l=Object(n.useState)(""),c=Object(o.a)(l,2),u=c[0],i=c[1],s=Object(n.useState)(""),E=Object(o.a)(s,2),g=E[0],b=E[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),C=f[0],w=f[1],F=Object(n.useCallback)((function(){g===C?m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/register",{email:u,password:g}).then((function(e){a(),i(""),b(""),w("")})):alert("Password does not match")}),[u,g,C,a]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||F()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,F]),r.a.createElement(v.a,{open:t||!1,onClose:a},r.a.createElement(y.a,null,"Register",r.a.createElement(p.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(S.a,null))),r.a.createElement(j.a,null,r.a.createElement(k.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:u,onChange:function(e){i(e.target.value)}}),r.a.createElement(k.a,{label:"Password",type:"password",fullWidth:!0,value:g,onChange:function(e){b(e.target.value)}}),r.a.createElement(k.a,{label:"Password",type:"password",fullWidth:!0,value:C,onChange:function(e){w(e.target.value)}}),r.a.createElement(O.a,null,r.a.createElement(d.a,{onClick:F,color:"primary"},"Register"))))},W=function(){var e=Object(n.useContext)(f),t=e.user,a=e.setUser;return Object(n.useEffect)((function(){var e=localStorage.getItem("token");!t&&e&&m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/auth/findUser",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){a(e.data.auth)}))}),[t,a]),r.a.createElement(r.a.Fragment,null)},A=a(90),L=a.n(A),x=Object(h.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(5)}}})),N=function(){var e=Object(n.useContext)(f),t=e.user,a=e.setUser,l=Object(n.useState)(!1),c=Object(o.a)(l,2),u=c[0],i=c[1],m=Object(n.useState)(!1),h=Object(o.a)(m,2),v=h[0],y=h[1],j=x(),k=t?[r.a.createElement(d.a,{color:"inherit",component:s.b,to:"/dashboard"},"Dashboard"),r.a.createElement(d.a,{color:"inherit",onClick:function(){a(null),localStorage.removeItem("token"),window.location.href="/"}},"Logout")]:[r.a.createElement(d.a,{color:"inherit",onClick:function(){i(!0)},key:"login"},"Login"),r.a.createElement(d.a,{color:"inherit",onClick:function(){y(!0)},key:"register"},"Register")];return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(E.a,{position:"static",className:j.root},r.a.createElement(g.a,null,r.a.createElement(b.a,{container:!0,spacing:1,justify:"space-between",alignItems:"center"},r.a.createElement(b.a,{item:!0,xs:8},r.a.createElement(p.a,{onClick:function(){return window.open("https://github.com/bmai53/budget-tracker","_blank")}},r.a.createElement(L.a,{fontSize:"large",color:"secondary"}))),r.a.createElement(b.a,{item:!0,xs:4,style:{textAlign:"right"}},k)))),r.a.createElement(w,{open:u,onClose:function(){return i(!1)}}),r.a.createElement(F,{open:v,onClose:function(){return y(!1)}}))},I=a(184),P=a(185),T=a(202),z=a(139),D=a(186),J=a(187),B=a(188),U=a(189),Y=a(190),H=a(197),M=a(92),R=a.n(M),_=a(65),G=a.n(_),q=a(201),K=Object(h.a)((function(e){return{deleteButton:{color:"red"}}})),Q=function(e){var t=e.open,a=e.onClose,l=e.data,c=e.categoriesList;console.log(l);var u=Object(n.useState)(l.name),i=Object(o.a)(u,2),s=i[0],E=i[1],g=Object(n.useState)(l.amount),b=Object(o.a)(g,2),h=b[0],f=b[1],C=Object(n.useState)(G()(l.date).format("YYYY-MM-DD")),w=Object(o.a)(C,2),F=w[0],W=w[1],A=Object(n.useState)(l.category_id),L=Object(o.a)(A,2),x=L[0],N=L[1],I=Object(n.useState)(l.type),P=Object(o.a)(I,2),T=P[0],z=P[1];console.log("data",l.date),console.log(F);var D=localStorage.getItem("token"),J=Object(n.useCallback)((function(){console.log(D),m.a.put("https://bmai53-budget-tracker-server.herokuapp.com/activity/updateActivity",{id:l.id,updateData:{name:s,amount:h,date:F,category_id:x,type:T}},{headers:{Authorization:"JWT ".concat(D)}}).then((function(){a(),window.location.reload()}))}),[s,h,F,x,T,D,l.id,a]);Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||J()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[J,t]);var B=K();return r.a.createElement(v.a,{open:t||!1,onClose:a},r.a.createElement(y.a,null,"Edit Activities",r.a.createElement(p.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(S.a,null))),r.a.createElement(j.a,null,r.a.createElement(k.a,{autoFocus:!0,label:"Name",type:"text",fullWidth:!0,value:s,onChange:function(e){E(e.target.value)}}),r.a.createElement(k.a,{label:"Amount",type:"number",fullWidth:!0,value:h,onChange:function(e){f(e.target.value)}}),r.a.createElement(k.a,{label:"Date",type:"date",fullWidth:!0,value:F,InputLabelProps:{shrink:!0},onChange:function(e){return W(e.target.value)}}),r.a.createElement(k.a,{label:"Category",type:"number",fullWidth:!0,value:x,select:!0,onChange:function(e){return N(e.target.value)}},c.map((function(e){return r.a.createElement(q.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(k.a,{label:"Type",fullWidth:!0,value:T,select:!0,onChange:function(e){return z(e.target.value)}},r.a.createElement(q.a,{value:"expense"},"Expense"),r.a.createElement(q.a,{value:"income"},"Income")),r.a.createElement(O.a,null,r.a.createElement(d.a,{onClick:function(){m.a.delete("https://bmai53-budget-tracker-server.herokuapp.com/activity/deleteActivity",{data:{id:l.id},headers:{Authorization:"JWT ".concat(D)}}).then((function(){a(),window.location.reload()}))},className:B.deleteButton},"Delete"),r.a.createElement(d.a,{onClick:J,color:"primary"},"Update"))))},V=Object(h.a)((function(e){return{table:{maxWidth:1e3},tableHeader:{backgroundColor:e.palette.primary.main,color:e.palette.common.white}}})),X=function(e){var t=e.categoriesList,a=Object(n.useState)([]),l=Object(o.a)(a,2),c=l[0],u=l[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),d=s[0],E=s[1],g=Object(n.useState)(0),b=Object(o.a)(g,2),h=b[0],f=b[1],v=Object(n.useState)(5),y=Object(o.a)(v,2),j=y[0],k=y[1],O=Object(n.useState)(!1),C=Object(o.a)(O,2),S=C[0],w=C[1],F=Object(n.useState)(),W=Object(o.a)(F,2),A=W[0],L=W[1];Object(n.useEffect)((function(){var e=localStorage.getItem("token");m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/activity/getActivities",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){u(e.data),E(!1)}))}),[]);var x=c.map((function(e){return r.a.createElement(I.a,{key:e.id},r.a.createElement(P.a,null,e.name),r.a.createElement(P.a,{align:"right"},G()(e.date).format("MMMM D, YYYY")),r.a.createElement(P.a,{align:"right"},e.amount),r.a.createElement(P.a,{align:"right"},e.category_name),r.a.createElement(P.a,{align:"right"},e.type),r.a.createElement(P.a,null,r.a.createElement(T.a,{title:"Edit"},r.a.createElement(p.a,{onClick:function(){w(!0),L(e)}},r.a.createElement(R.a,null)))))})),N=j-Math.min(j,x.length-h*j),M=V();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{className:M.table},r.a.createElement(D.a,null,r.a.createElement(J.a,null,r.a.createElement(B.a,null,r.a.createElement(I.a,null,r.a.createElement(P.a,{className:M.tableHeader},"Name"),r.a.createElement(P.a,{className:M.tableHeader,align:"right"},"Date"),r.a.createElement(P.a,{className:M.tableHeader,align:"right"},"Amount"),r.a.createElement(P.a,{className:M.tableHeader,align:"right"},"Category"),r.a.createElement(P.a,{className:M.tableHeader,align:"right"},"Type"),r.a.createElement(P.a,{className:M.tableHeader,padding:"checkbox"}))),r.a.createElement(U.a,null,d?r.a.createElement(I.a,null,r.a.createElement(P.a,{colSpan:6,align:"center"},r.a.createElement(Y.a,{size:100,color:"primary"}))):x.slice(h*j,h*j+j),!d&&N>0&&r.a.createElement(I.a,{key:"empty rows",style:{height:53*N}},r.a.createElement(P.a,{colSpan:6}))))),r.a.createElement(H.a,{rowsPerPageOptions:[5,10,25],component:"div",count:c.length,rowsPerPage:j,page:h,onChangePage:function(e,t){f(t)},onChangeRowsPerPage:function(e){k(parseInt(e.target.value,10)),f(0)}})),A&&S?r.a.createElement(Q,{categoriesList:t,data:A,open:S,onClose:function(){w(!1),L({})}}):r.a.createElement(r.a.Fragment,null))},Z=a(141),$=a(193),ee=a(191),te=function(e){var t=e.open,a=e.onClose,l=e.categoriesList,c=Object(n.useState)(""),u=Object(o.a)(c,2),i=u[0],s=u[1],E=Object(n.useState)(0),g=Object(o.a)(E,2),b=g[0],h=g[1],f=Object(n.useState)(""),C=Object(o.a)(f,2),w=C[0],F=C[1],W=Object(n.useState)(""),A=Object(o.a)(W,2),L=A[0],x=A[1],N=Object(n.useState)(""),I=Object(o.a)(N,2),P=I[0],T=I[1],z=Object(n.useCallback)((function(){var e=localStorage.getItem("token");m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/activity/addActivity",{name:i,amount:b,date:w,category_id:L,type:P},{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){a(),window.location.reload()}))}),[a,b,L,w,i,P]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||z()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,z]),r.a.createElement(v.a,{open:t||!1,onClose:a},r.a.createElement(y.a,null,"Add Activity",r.a.createElement(p.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(S.a,null))),r.a.createElement(j.a,null,r.a.createElement(k.a,{autoFocus:!0,label:"Name",type:"text",fullWidth:!0,value:i,onChange:function(e){s(e.target.value)}}),r.a.createElement(k.a,{label:"Amount",type:"number",fullWidth:!0,value:b,onChange:function(e){h(e.target.value)}}),r.a.createElement(k.a,{label:"Date",type:"date",fullWidth:!0,value:w,InputLabelProps:{shrink:!0},onChange:function(e){return F(e.target.value)}}),r.a.createElement(k.a,{label:"Category",fullWidth:!0,value:L,select:!0,onChange:function(e){return x(e.target.value)}},l.map((function(e){return r.a.createElement(q.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(k.a,{label:"Type",fullWidth:!0,value:P,select:!0,onChange:function(e){return T(e.target.value)}},r.a.createElement(q.a,{value:"expense"},"Expense"),r.a.createElement(q.a,{value:"income"},"Income")),r.a.createElement(O.a,null,r.a.createElement(d.a,{onClick:z,color:"primary"},"Submit"))))},ae=Object(h.a)((function(e){return{deleteButton:{color:"red"}}})),ne=function(e){var t=e.open,a=e.onClose,l=e.categoriesList,c=Object(n.useState)(""),u=Object(o.a)(c,2),i=u[0],s=u[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),b=g[0],h=g[1],f=localStorage.getItem("token"),C=Object(n.useCallback)((function(){m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/category/addCategory",{name:i},{headers:{Authorization:"JWT ".concat(f)}}).then((function(){a(),window.location.reload()}))}),[i,a,f]);Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||C()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,C]);var w=ae();return r.a.createElement(v.a,{open:t||!1,onClose:a},r.a.createElement(y.a,null,"Edit Categories",r.a.createElement(p.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(S.a,null))),r.a.createElement(j.a,null,r.a.createElement(k.a,{autoFocus:!0,label:"Name",type:"text",fullWidth:!0,value:i,onChange:function(e){s(e.target.value)}}),r.a.createElement(O.a,null,r.a.createElement(d.a,{onClick:C,color:"primary"},"Add")),r.a.createElement(k.a,{label:"Category",fullWidth:!0,value:b,select:!0,onChange:function(e){return h(e.target.value)}},l.map((function(e){return r.a.createElement(q.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(O.a,null,r.a.createElement(d.a,{onClick:function(){m.a.delete("https://bmai53-budget-tracker-server.herokuapp.com/category/deleteCategory",{data:{id:b},headers:{Authorization:"JWT ".concat(f)}}).then((function(){a(),window.location.reload()}))},className:w.deleteButton},"Delete"))))},re=function(){var e=Object(n.useContext)(f).user,t=Object(n.useState)([]),a=Object(o.a)(t,2),l=a[0],c=a[1],u=Object(n.useState)(!1),i=Object(o.a)(u,2),s=i[0],E=i[1],g=Object(n.useState)(!1),b=Object(o.a)(g,2),p=b[0],h=b[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/category/getCategories",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){c(e.data)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{variant:"h3",align:"center"},"Activities"),r.a.createElement("br",null),r.a.createElement($.a,{align:"center"},r.a.createElement(X,{categoriesList:l})),r.a.createElement("br",null),r.a.createElement($.a,{align:"center"},r.a.createElement(ee.a,{variant:"contained",size:"large",color:"primary"},r.a.createElement(d.a,{onClick:function(){E(!0)},key:"addActivity"},"Add Activity"),r.a.createElement(d.a,{onClick:function(){h(!0)},key:"editCategory"},"Edit Categories"))),r.a.createElement(te,{categoriesList:l,open:s,onClose:function(){return E(!1)}}),r.a.createElement(ne,{categoriesList:l,open:p,onClose:function(){return h(!1)}})):r.a.createElement(Z.a,null,"You must be logged in to access this page."))},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(Z.a,{variant:"h1",align:"center"},"Welcome to Budget Tracker"),r.a.createElement(Z.a,{variant:"h3",align:"center"},"Log in or register to get started!"))},ce=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(f.Provider,{value:{user:a,setUser:l}},r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},a?r.a.createElement(u.a,{to:"/dashboard"}):r.a.createElement(le,null)),r.a.createElement(u.b,{path:"/home",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(u.b,{path:"/dashboard",render:function(){return r.a.createElement(re,null)}}),a?r.a.createElement(u.b,{render:function(){return r.a.createElement(u.a,{to:"/dashboard"})}}):r.a.createElement(u.b,{render:function(){return r.a.createElement(u.a,{to:"/"})}})))},oe=a(192),ue=a(93),ie=(a(137),Object(ue.a)({palette:{primary:{main:"#35B234",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF"},positive:{main:"#4caf50"},negative:{main:"#f44336"},background:{default:"#FFFFFF"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}));c.a.render(r.a.createElement(s.a,null,r.a.createElement(oe.a,{theme:ie},r.a.createElement(ce,null))),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.43dfccd5.chunk.js.map