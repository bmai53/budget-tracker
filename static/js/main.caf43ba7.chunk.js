(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{169:function(e,t,a){e.exports=a(220)},198:function(e,t){},200:function(e,t){},220:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(6),i=a(13),u=a(16),m=a.n(u),s=a(63),d=a(222),E=a(270),g=a(271),p=a(272),b=a(259),f=a(72),v=a(269),h=a(147),y=(a(190),Object(h.a)({palette:{primary:{main:"#35B234",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF"},positive:{main:"#4caf50"},negative:{main:"#f44336"},background:{default:"#FFFFFF"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}})),O=Object(n.createContext)(null),j=a(290),C=a(258),k=a(260),S=a(288),x=a(266),w=a(267),A=a(26),F=a.n(A),N=a(293),W=a(286),D=function(e){var t=e.open,a=e.onClose,l=Object(n.useContext)(O).setUser,c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],s=i[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),p=g[0],f=g[1],v=Object(n.useState)(!1),h=Object(o.a)(v,2),A=h[0],D=h[1],L=Object(n.useState)(!1),I=Object(o.a)(L,2),T=I[0],H=I[1],z=Object(n.useState)(!1),P=Object(o.a)(z,2),U=P[0],Y=P[1],J=Object(n.useCallback)((function(){D(!0),m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/login",{email:u,password:p}).then((function(e){localStorage.setItem("token",e.data.token),l(e.data.auth),H(!0),D(!1),a()})).catch((function(e){Y(!0),D(!1)}))}),[u,p,a,l]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||J()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,J]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{open:t||!1,onClose:a},r.a.createElement(C.a,{style:{backgroundColor:y.palette.primary.main,color:"white"}},"Login",r.a.createElement(b.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(k.a,null,r.a.createElement(S.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:u,onChange:function(e){s(e.target.value)}}),r.a.createElement(S.a,{label:"Password",type:"password",fullWidth:!0,value:p,onChange:function(e){f(e.target.value)}}),r.a.createElement(x.a,null,r.a.createElement(d.a,{onClick:J,color:"primary"},A?r.a.createElement(w.a,{size:25,color:"primary"}):"Login")))),r.a.createElement(N.a,{open:T,autoHideDuration:3e3,onClose:function(){H(!1)}},r.a.createElement(W.a,{onClose:function(){H(!1)},severity:"success"},"Login Success!")),r.a.createElement(N.a,{open:U,autoHideDuration:3e3,onClose:function(){Y(!1)}},r.a.createElement(W.a,{onClose:function(){Y(!1)},severity:"error"},"Invalid Credentials")))},L=function(e){var t=e.open,a=e.onClose,l=Object(n.useState)(""),c=Object(o.a)(l,2),i=c[0],u=c[1],s=Object(n.useState)(""),E=Object(o.a)(s,2),g=E[0],p=E[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),h=v[0],O=v[1],A=Object(n.useState)(!1),D=Object(o.a)(A,2),L=D[0],I=D[1],T=Object(n.useState)(!1),H=Object(o.a)(T,2),z=H[0],P=H[1],U=Object(n.useState)(!1),Y=Object(o.a)(U,2),J=Y[0],B=Y[1],M=Object(n.useState)(!1),R=Object(o.a)(M,2),V=R[0],_=R[1],G=Object(n.useState)(!1),$=Object(o.a)(G,2),q=$[0],K=$[1],Q=Object(n.useCallback)((function(){I(!0),g===h?m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/register",{email:i,password:g}).then((function(e){u(""),p(""),O(""),P(!0),a(),I(!1)})).catch((function(e){e.response&&(409===e.response.status?_(!0):B(!0)),I(!1)})):K(!0)}),[i,g,h,a]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||Q()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,Q]),r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{open:t||!1,onClose:a},r.a.createElement(C.a,{style:{backgroundColor:y.palette.primary.main,color:"white"}},"Register",r.a.createElement(b.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(k.a,null,r.a.createElement(S.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:i,onChange:function(e){u(e.target.value)}}),r.a.createElement(S.a,{label:"Password",type:"password",fullWidth:!0,value:g,onChange:function(e){p(e.target.value)}}),r.a.createElement(S.a,{label:"Password",type:"password",fullWidth:!0,value:h,onChange:function(e){O(e.target.value)}}),r.a.createElement(x.a,null,r.a.createElement(d.a,{onClick:Q,color:"primary"},L?r.a.createElement(w.a,{size:25,color:"primary"}):"Register")))),r.a.createElement(N.a,{open:z,autoHideDuration:3e3,onClose:function(){P(!1)}},r.a.createElement(W.a,{onClose:function(){P(!1)},severity:"success"},"Account created!")),r.a.createElement(N.a,{open:J,autoHideDuration:3e3,onClose:function(){B(!1)}},r.a.createElement(W.a,{onClose:function(){B(!1)},severity:"error"},"Registration error")),r.a.createElement(N.a,{open:V,autoHideDuration:3e3,onClose:function(){_(!1)}},r.a.createElement(W.a,{onClose:function(){_(!1)},severity:"info"},"Email already registered")),r.a.createElement(N.a,{open:q,autoHideDuration:3e3,onClose:function(){K(!1)}},r.a.createElement(W.a,{onClose:function(){K(!1)},severity:"info"},"Password does not match")))},I=a(135),T=a.n(I),H=a(294),z=Object(v.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(5)}}})),P=function(){var e=Object(n.useContext)(O),t=e.user,a=e.setUser,l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)(!1),v=Object(o.a)(m,2),h=v[0],y=v[1],j=z(),C=t?[r.a.createElement(d.a,{color:"inherit",component:s.b,to:"/dashboard",key:"dashboard"},"Dashboard"),r.a.createElement(d.a,{color:"inherit",onClick:function(){a(null),localStorage.removeItem("token"),window.location.reload()},key:"logout"},"Logout")]:[r.a.createElement(d.a,{color:"inherit",onClick:function(){u(!0)},key:"login"},"Login"),r.a.createElement(d.a,{color:"inherit",onClick:function(){y(!0)},key:"register"},"Register")];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{position:"static",className:j.root},r.a.createElement(g.a,null,r.a.createElement(p.a,{container:!0,spacing:1,justify:"space-between",alignItems:"center"},r.a.createElement(p.a,{item:!0,xs:8},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center"}},r.a.createElement(H.a,{title:"Github Repo"},r.a.createElement(b.a,{onClick:function(){return window.open("https://github.com/bmai53/budget-tracker","_blank")}},r.a.createElement(T.a,{fontSize:"large",color:"secondary"}))),r.a.createElement(f.a,{variant:"h4"},"Budget Tracker"))),r.a.createElement(p.a,{item:!0,xs:4,style:{textAlign:"right"}},C)))),r.a.createElement(D,{open:i,onClose:function(){return u(!1)}}),r.a.createElement(L,{open:h,onClose:function(){return y(!1)}}))},U=a(274),Y=a(275),J=a(151),B=a(276),M=a(277),R=a(278),V=a(273),_=a(279),G=a(289),$=a(136),q=a.n($),K=a(88),Q=a.n(K),X=Object(v.a)((function(e){return{deleteButton:{color:"red"}}})),Z=function(e){var t=e.open,a=e.onClose,l=e.data,c=e.categoriesList,i=e.getActivities,u=Object(n.useState)(l.name),s=Object(o.a)(u,2),E=s[0],g=s[1],p=Object(n.useState)(l.amount),f=Object(o.a)(p,2),v=f[0],h=f[1],O=Object(n.useState)(Q()(l.date).format("YYYY-MM-DD")),w=Object(o.a)(O,2),A=w[0],N=w[1],W=Object(n.useState)(l.category_id),D=Object(o.a)(W,2),L=D[0],I=D[1],T=Object(n.useState)(l.type),H=Object(o.a)(T,2),z=H[0],P=H[1],U=localStorage.getItem("token"),Y=Object(n.useCallback)((function(){m.a.put("https://bmai53-budget-tracker-server.herokuapp.com/activity/updateActivity",{id:l.id,updateData:{name:E,amount:v,date:A,category_id:L,type:z}},{headers:{Authorization:"JWT ".concat(U)}}).then((function(){i(),a()}))}),[i,E,v,A,L,z,U,l.id,a]);Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||Y()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[Y,t]);var J=X();return r.a.createElement(j.a,{open:t||!1,onClose:a,fullWidth:!0},r.a.createElement(C.a,{style:{backgroundColor:y.palette.primary.main,color:"white"}},"Edit Activity",r.a.createElement(b.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(k.a,null,r.a.createElement(S.a,{autoFocus:!0,label:"Name",type:"text",fullWidth:!0,value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement(S.a,{label:"Amount",type:"number",fullWidth:!0,value:v,onChange:function(e){h(e.target.value)}}),r.a.createElement(S.a,{label:"Date",type:"date",fullWidth:!0,value:A,InputLabelProps:{shrink:!0},onChange:function(e){return N(e.target.value)}}),r.a.createElement(S.a,{label:"Category",type:"number",fullWidth:!0,value:L,select:!0,onChange:function(e){return I(e.target.value)}},c.map((function(e){return r.a.createElement(V.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(S.a,{label:"Type",fullWidth:!0,value:z,select:!0,onChange:function(e){return P(e.target.value)}},r.a.createElement(V.a,{value:"expense"},"Expense"),r.a.createElement(V.a,{value:"income"},"Income")),r.a.createElement(x.a,null,r.a.createElement(d.a,{onClick:function(){m.a.delete("https://bmai53-budget-tracker-server.herokuapp.com/activity/deleteActivity",{data:{id:l.id},headers:{Authorization:"JWT ".concat(U)}}).then((function(){i(),a()}))},className:J.deleteButton},"Delete"),r.a.createElement(d.a,{onClick:Y,color:"primary"},"Update"))))},ee=Object(v.a)((function(e){return{positive:{color:e.palette.positive.main},negative:{color:e.palette.negative.main}}})),te=function(e){var t=e.data,a=0;t.forEach((function(e){"income"===e.type?a+=parseFloat(e.amount):a-=parseFloat(e.amount)}));var n=ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{variant:"h3",display:"inline"},"Activities Total:\xa0"),r.a.createElement(f.a,{variant:"h3",display:"inline",className:a>=0?n.positive:n.negative},"$",a.toFixed(2)))},ae=Object(v.a)((function(e){return{table:{maxWidth:1e3},tableHeader:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},income:{color:e.palette.positive.main},expense:{color:e.palette.negative.main}}})),ne=function(e){var t=e.activitiesList,a=e.categoriesList,l=e.getActivities,c=e.loading,i=Object(n.useState)([]),u=Object(o.a)(i,2),m=u[0],s=u[1],d=Object(n.useState)(0),E=Object(o.a)(d,2),g=E[0],p=E[1],v=Object(n.useState)(5),h=Object(o.a)(v,2),y=h[0],O=h[1],j=Object(n.useState)("None"),C=Object(o.a)(j,2),k=C[0],x=C[1],A=Object(n.useState)(!1),F=Object(o.a)(A,2),N=F[0],W=F[1],D=Object(n.useState)(),L=Object(o.a)(D,2),I=L[0],T=L[1];Object(n.useEffect)((function(){var e=t.filter((function(e){return e.category_name===k}));s("None"===k?t:e)}),[t,a,k]);var z=ae(),P=m.map((function(e){return r.a.createElement(U.a,{key:e.id},r.a.createElement(Y.a,null,e.name),r.a.createElement(Y.a,{align:"right"},Q()(e.date).format("MMMM D, YYYY")),r.a.createElement(Y.a,{align:"right"},e.amount),r.a.createElement(Y.a,{align:"right"},e.category_name),r.a.createElement(Y.a,{align:"right",className:"income"===e.type?z.income:z.expense},e.type.charAt(0).toUpperCase()+e.type.slice(1)),r.a.createElement(Y.a,null,r.a.createElement(H.a,{title:"Edit"},r.a.createElement(b.a,{onClick:function(){W(!0),T(e)}},r.a.createElement(q.a,null)))))})),$=y-Math.min(y,P.length-g*y);return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:z.table},r.a.createElement(B.a,null,r.a.createElement(M.a,null,r.a.createElement(R.a,null,r.a.createElement(U.a,null,r.a.createElement(Y.a,{colSpan:4},r.a.createElement(te,{data:m})),r.a.createElement(Y.a,{colSpan:2,align:"right"},r.a.createElement(S.a,{label:"Category Filter",type:"text",fullWidth:!0,value:k,select:!0,onChange:function(e){return x(e.target.value)}},r.a.createElement(V.a,{value:"None",key:"None"},"None"),a.map((function(e){return r.a.createElement(V.a,{value:e.name,key:e.name},e.name)}))))),r.a.createElement(U.a,null,r.a.createElement(Y.a,{className:z.tableHeader},"Name"),r.a.createElement(Y.a,{className:z.tableHeader,align:"right"},"Date"),r.a.createElement(Y.a,{className:z.tableHeader,align:"right"},"Amount"),r.a.createElement(Y.a,{className:z.tableHeader,align:"right"},"Category"),r.a.createElement(Y.a,{className:z.tableHeader,align:"right"},"Type"),r.a.createElement(Y.a,{className:z.tableHeader,padding:"checkbox"}))),r.a.createElement(_.a,null,c?r.a.createElement(U.a,null,r.a.createElement(Y.a,{colSpan:6,align:"center"},r.a.createElement(w.a,{size:100,color:"primary"}))):P.slice(g*y,g*y+y),0===P.length?r.a.createElement(U.a,null,r.a.createElement(Y.a,{colSpan:6,align:"center"},r.a.createElement(f.a,null,"No activities found"))):$>0&&r.a.createElement(U.a,{key:"empty rows",style:{height:53*$}},r.a.createElement(Y.a,{colSpan:6}))))),r.a.createElement(G.a,{rowsPerPageOptions:[5,10,25],component:"div",count:m.length,rowsPerPage:y,page:g,onChangePage:function(e,t){p(t)},onChangeRowsPerPage:function(e){O(parseInt(e.target.value,10)),p(0)}})),I&&N?r.a.createElement(Z,{categoriesList:a,getActivities:l,data:I,open:N,onClose:function(){W(!1),T({})}}):r.a.createElement(r.a.Fragment,null))},re=a(284),le=a(282),ce=function(e){var t=e.open,a=e.onClose,l=e.categoriesList,c=e.getActivities,i=e.setShowEditCategory,u=Object(n.useState)(""),s=Object(o.a)(u,2),E=s[0],g=s[1],p=Object(n.useState)(0),f=Object(o.a)(p,2),v=f[0],h=f[1],O=Object(n.useState)(""),w=Object(o.a)(O,2),A=w[0],N=w[1],W=Object(n.useState)(""),D=Object(o.a)(W,2),L=D[0],I=D[1],T=Object(n.useState)(""),H=Object(o.a)(T,2),z=H[0],P=H[1],U=Object(n.useCallback)((function(){var e=localStorage.getItem("token");m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/activity/addActivity",{name:E,amount:v,date:A,category_id:L,type:z},{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){c(),a()}))}),[c,a,v,L,A,E,z]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||U()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,U]),r.a.createElement(j.a,{open:t||!1,onClose:a},r.a.createElement(C.a,{style:{backgroundColor:y.palette.primary.main,color:"white"}},"Add Activity",r.a.createElement(b.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(k.a,null,r.a.createElement(S.a,{autoFocus:!0,label:"Name",type:"text",fullWidth:!0,value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement(S.a,{label:"Amount",type:"number",fullWidth:!0,value:v,onChange:function(e){h(e.target.value)}}),r.a.createElement(S.a,{label:"Date",type:"date",fullWidth:!0,value:A,InputLabelProps:{shrink:!0},onChange:function(e){return N(e.target.value)}}),r.a.createElement(re.a,{width:"100%",style:{display:"inline-flex"}},r.a.createElement(S.a,{label:"Category",fullWidth:!0,value:L,select:!0,onChange:function(e){return I(e.target.value)}},l.map((function(e){return r.a.createElement(V.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(x.a,{style:{position:"relative",top:"10px"}},r.a.createElement(d.a,{color:"primary",onClick:function(){a(),i(!0)}},"Add New Category"))),r.a.createElement(S.a,{label:"Type",fullWidth:!0,value:z,select:!0,onChange:function(e){return P(e.target.value)}},r.a.createElement(V.a,{value:"expense"},"Expense"),r.a.createElement(V.a,{value:"income"},"Income")),r.a.createElement(x.a,null,r.a.createElement(d.a,{onClick:U,color:"primary"},"Submit"))))},oe=Object(v.a)((function(e){return{deleteButton:{color:"red"}}})),ie=function(e){var t=e.open,a=e.onClose,l=e.categoriesList,c=e.getCategories,i=e.getActivities,u=Object(n.useState)(""),s=Object(o.a)(u,2),E=s[0],g=s[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),v=f[0],h=f[1],O=localStorage.getItem("token"),w=Object(n.useCallback)((function(){m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/category/addCategory",{name:E},{headers:{Authorization:"JWT ".concat(O)}}).then((function(){g(""),c(),a()}))}),[E,a,O,c]);Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||w()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,w]);var A=oe();return r.a.createElement(j.a,{open:t||!1,onClose:a,fullWidth:!0},r.a.createElement(C.a,{style:{backgroundColor:y.palette.primary.main,color:"white"}},"Edit Categories",r.a.createElement(b.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(k.a,null,r.a.createElement(S.a,{autoFocus:!0,label:"Add New Category",type:"text",fullWidth:!0,value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement(x.a,null,r.a.createElement(d.a,{onClick:w,color:"primary"},"Add")),r.a.createElement(S.a,{label:"Delete Existing Category",fullWidth:!0,value:v,select:!0,onChange:function(e){return h(e.target.value)}},l.map((function(e){return r.a.createElement(V.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(x.a,null,r.a.createElement(d.a,{onClick:function(){m.a.delete("https://bmai53-budget-tracker-server.herokuapp.com/category/deleteCategory",{data:{id:v},headers:{Authorization:"JWT ".concat(O)}}).then((function(){c(),i(),a()}))},className:A.deleteButton},"Delete"))))},ue=a(137),me=a(263),se=a(285),de=function(e){var t=e.submitHandler,a=e.headers,n=e.date,l=e.name,c=e.categoryName,o=e.amount,i=e.type,u=e.setDate,m=e.setName,s=e.setCategoryName,E=e.setAmount,g=e.setType;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:3}),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(f.a,{variant:"h5",align:"center",color:"primary"},"Columns found in CSV file")),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(f.a,{variant:"h6",align:"left",color:"primary"},"Date:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(me.a,{variant:"outlined",fullWidth:!0},r.a.createElement(se.a,{onChange:function(e){return u(e.target.value)},value:n},a.map((function(e,t){return r.a.createElement(V.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(f.a,{variant:"h6",align:"left",color:"primary"},"Name:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(me.a,{variant:"outlined",fullWidth:!0},r.a.createElement(se.a,{onChange:function(e){return m(e.target.value)},value:l},a.map((function(e,t){return r.a.createElement(V.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(f.a,{variant:"h6",align:"left",color:"primary"},"Category:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(me.a,{variant:"outlined",fullWidth:!0},r.a.createElement(se.a,{onChange:function(e){return s(e.target.value)},value:c},a.map((function(e,t){return r.a.createElement(V.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(f.a,{variant:"h6",align:"left",color:"primary"},"Amount:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(me.a,{variant:"outlined",fullWidth:!0},r.a.createElement(se.a,{onChange:function(e){return E(e.target.value)},value:o},a.map((function(e,t){return r.a.createElement(V.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(f.a,{variant:"h6",align:"left",color:"primary"},"Type:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(me.a,{variant:"outlined",fullWidth:!0},r.a.createElement(se.a,{onChange:function(e){return g(e.target.value)},value:i},a.map((function(e,t){return r.a.createElement(V.a,{key:t,value:e},e)})))))),r.a.createElement(x.a,null,r.a.createElement(d.a,{onClick:t,size:"large",color:"primary"},"Submit")))},Ee=a(265),ge=a(223),pe=a(281),be=a(280),fe=a(148),ve=a(58),he=a.n(ve),ye=function(e){var t=e.uploadHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{acceptedFiles:[".csv"],filesLimit:1,clearOnUnmount:!0,useChipsForPreview:!0,previewGridProps:{container:{justify:"center",spacing:3,direction:"row"}},showAlerts:["error","info"],alertSnackbarProps:{anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:3e3},dropzoneText:r.a.createElement("div",{style:{padding:"0 25px 0 25px"}},r.a.createElement(f.a,{variant:"h6",align:"center",color:"primary"},"Drag and drop or click to upload a CSV file."),r.a.createElement("br",null),r.a.createElement(f.a,{align:"justify"},"Please ensure the CSV file has the following columns:"),r.a.createElement(Ee.a,{dense:!0,disablePadding:!0},r.a.createElement(ge.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null)),r.a.createElement(pe.a,{primary:"Date (YYYY-MM-DD)"})),r.a.createElement(ge.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null)),r.a.createElement(pe.a,{primary:"Name"})),r.a.createElement(ge.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null)),r.a.createElement(pe.a,{primary:"Amount"})),r.a.createElement(ge.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null)),r.a.createElement(pe.a,{primary:"Category"})),r.a.createElement(ge.a,null,r.a.createElement(be.a,null,r.a.createElement(he.a,null)),r.a.createElement(pe.a,{primary:"Type (income or expense)"})))),onChange:function(e){t(e)}}),r.a.createElement("br",null))},Oe=function(e){var t=e.open,a=e.onClose,n=e.message,l=e.severity;return r.a.createElement(N.a,{open:t,autoHideDuration:3e3,onClose:a},r.a.createElement(W.a,{onClose:a,severity:l},n))},je=function(e){var t=e.open,a=e.onClose,l=e.getActivities,c=e.getCategories,i=Object(n.useState)([]),u=Object(o.a)(i,2),s=u[0],d=u[1],E=Object(n.useState)([]),g=Object(o.a)(E,2),p=g[0],f=g[1],v=Object(n.useState)(!1),h=Object(o.a)(v,2),O=h[0],S=h[1],x=Object(n.useState)(""),w=Object(o.a)(x,2),A=w[0],N=w[1],W=Object(n.useState)(""),D=Object(o.a)(W,2),L=D[0],I=D[1],T=Object(n.useState)(""),H=Object(o.a)(T,2),z=H[0],P=H[1],U=Object(n.useState)(""),Y=Object(o.a)(U,2),J=Y[0],B=Y[1],M=Object(n.useState)(""),R=Object(o.a)(M,2),V=R[0],_=R[1],G=Object(n.useState)(!1),$=Object(o.a)(G,2),q=$[0],K=$[1],Q=Object(n.useState)(!1),X=Object(o.a)(Q,2),Z=X[0],ee=X[1],te=Object(n.useState)(!1),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(!1),ce=Object(o.a)(le,2),oe=ce[0],ie=ce[1],me=Object(n.useState)(!1),se=Object(o.a)(me,2),Ee=se[0],ge=se[1],pe=Object(n.useState)(!1),be=Object(o.a)(pe,2),fe=be[0],ve=be[1],he=Object(n.useState)(!1),je=Object(o.a)(he,2),Ce=je[0],ke=je[1],Se=Object(n.useState)(!1),xe=Object(o.a)(Se,2),we=xe[0],Ae=xe[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{open:t||!1,onClose:function(){S(!1),a()}},r.a.createElement(C.a,{style:{backgroundColor:y.palette.primary.main,color:"white"}},O?"Please match the following":"Upload CSV",r.a.createElement(b.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(F.a,null))),r.a.createElement(k.a,null,O?r.a.createElement(de,{headers:p,date:A,name:L,categoryName:z,amount:J,type:V,setDate:N,setName:I,setCategoryName:P,setAmount:B,setType:_,submitHandler:function(e){if(e.preventDefault(),0===s.length)ie(!0);else if(A&&L&&z&&J&&V)if(5!==new Set([A,L,z,J,V]).size)ve(!0);else{var t={date:p.indexOf(A),name:p.indexOf(L),categoryName:p.indexOf(z),amount:p.indexOf(J),type:p.indexOf(V)},n={data:s,map:t},r=localStorage.getItem("token");m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/activity/uploadCSV",n,{headers:{Authorization:"JWT ".concat(r)}}).then((function(e){console.log(e.data.message),Ae(!0),l(),c(),a()})).catch((function(e){ke(!0),l(),c(),a()}))}else ge(!0)}}):r.a.createElement(ye,{uploadHandler:function(e){if(e.length>0){var t=new FileReader;t.readAsText(e[0]),t.onload=function(e){var t=e.target.result,a=Object(ue.a)(t),n=!0;""===a.data[a.data.length-1][0]&&a.data.pop(),a.data.forEach((function(e){-1!==e.indexOf("")&&(K(!0),n=!1)})),new Set(a.data[0]).size!==a.data[0].length&&(ee(!0),n=!1),n&&(f(a.data[0]),N(a.data[0][0]?a.data[0][0]:""),I(a.data[0][1]?a.data[0][1]:""),P(a.data[0][2]?a.data[0][2]:""),B(a.data[0][3]?a.data[0][3]:""),_(a.data[0][4]?a.data[0][4]:""),d(a.data),S(!0))},t.onerror=function(e){re(!0)}}}}))),r.a.createElement(Oe,{open:q,onClose:function(){K(!1)},severity:"error",message:"Empty cells detected."}),r.a.createElement(Oe,{open:Z,onClose:function(){ee(!1)},severity:"error",message:"Duplicate columns detected."}),r.a.createElement(Oe,{open:ne,onClose:function(){re(!1)},severity:"error",message:"Failed to read file."}),r.a.createElement(Oe,{open:oe,onClose:function(){ie(!1)},severity:"error",message:"No file found."}),r.a.createElement(Oe,{open:Ee,onClose:function(){ge(!1)},severity:"error",message:"Headers are not all matched."}),r.a.createElement(Oe,{open:fe,onClose:function(){ve(!1)},severity:"error",message:"Duplicate header match detected."}),r.a.createElement(Oe,{open:Ce,onClose:function(){ke(!1)},severity:"error",message:"Upload error."}),r.a.createElement(Oe,{open:we,onClose:function(){Ae(!1)},severity:"success",message:"CSV file uploaded successfully!"}))},Ce=function(){var e=Object(n.useContext)(O).user,t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),s=u[0],E=u[1],g=Object(n.useState)([]),p=Object(o.a)(g,2),b=p[0],v=p[1],h=Object(n.useState)(!1),y=Object(o.a)(h,2),j=y[0],C=y[1],k=Object(n.useState)(!1),S=Object(o.a)(k,2),x=S[0],A=S[1],F=Object(n.useState)(!1),N=Object(o.a)(F,2),W=N[0],D=N[1],L=function(){c(!0);var e=localStorage.getItem("token");m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/activity/getActivities",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){E(e.data),c(!1)}))},I=function(){c(!0);var e=localStorage.getItem("token");m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/category/getCategories",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){v(e.data),c(!1)}))};return Object(n.useEffect)((function(){L(),I()}),[e]),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(re.a,{align:"center"},r.a.createElement(ne,{activitiesList:s,categoriesList:b,getActivities:L,loading:l})),r.a.createElement("br",null),r.a.createElement(re.a,{align:"center"},r.a.createElement("div",{style:{maxWidth:1e3}},r.a.createElement(le.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0},r.a.createElement(d.a,{onClick:function(){A(!0)},key:"editCategory"},"Edit Categories"),r.a.createElement(d.a,{onClick:function(){C(!0)},key:"addActivity"},"Add Activity"),r.a.createElement(d.a,{onClick:function(){D(!0)},key:"uploadCSV"},"Upload from CSV")))),r.a.createElement(ce,{categoriesList:b,open:j,setShowEditCategory:A,getActivities:L,onClose:function(){return C(!1)}}),r.a.createElement(ie,{categoriesList:b,open:x,getCategories:I,getActivities:L,onClose:function(){return A(!1)}}),r.a.createElement(je,{open:W,onClose:function(){D(!1)},getActivities:L,getCategories:I})):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),localStorage.getItem("token")?r.a.createElement(re.a,{align:"center"},r.a.createElement(w.a,{size:100,color:"primary"})):r.a.createElement(f.a,null,"You must be logged in to access this page."))},ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(f.a,{variant:"h1",align:"center"},"Welcome to Budget Tracker"),r.a.createElement(f.a,{variant:"h3",align:"center"},"Log in or register to get started!"))},Se=function(){var e=Object(n.useContext)(O),t=e.user,a=e.setUser;return Object(n.useEffect)((function(){var e=localStorage.getItem("token");!t&&e&&m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/auth/findUser",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){a(e.data.auth)}))}),[t,a]),r.a.createElement(r.a.Fragment,null)},xe=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement(O.Provider,{value:{user:a,setUser:l}},r.a.createElement(Se,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},a?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement(ke,null)),r.a.createElement(i.b,{path:"/home",render:function(){return r.a.createElement(ke,null)}}),r.a.createElement(i.b,{path:"/dashboard",render:function(){return r.a.createElement(Ce,null)}}),a?r.a.createElement(i.b,{render:function(){return r.a.createElement(i.a,{to:"/dashboard"})}}):r.a.createElement(i.b,{render:function(){return r.a.createElement(i.a,{to:"/"})}})))},we=a(283);c.a.render(r.a.createElement(s.a,null,r.a.createElement(we.a,{theme:y},r.a.createElement(xe,null))),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.caf43ba7.chunk.js.map