(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{211:function(e,t,a){e.exports=a.p+"static/media/landing.ac7640ec.jpg"},231:function(e,t,a){e.exports=a(385)},259:function(e,t){},261:function(e,t){},384:function(e,t,a){e.exports=a.p+"static/media/budget-tracker.a7be8ac8.png"},385:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(6),i=a(13),u=a(17),m=a.n(u),s=a(67),d=a(388),E=a(435),g=a(436),p=a(437),b=a(73),f=a(458),h=a(423),y=a(438),v=a(439),O=a(429),j=a(389),C=a(433),k=a(14),S=a(434),x=a(212),F=(a(252),Object(x.a)({palette:{primary:{main:"#35B234",contrastText:"#FFFFFF"},secondary:{main:"#FFFFFF"},positive:{main:"#4caf50"},negative:{main:"#f44336"},background:{default:"#FFFFFF"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}})),w=Object(n.createContext)(null),D=a(459),A=a(422),N=a(424),W=a(456),L=a(430),T=a(431),I=a(31),H=a.n(I),P=a(464),z=a(454),_=function(e){var t=e.open,a=e.onClose,l=Object(n.useContext)(w).setUser,c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],s=i[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),p=g[0],b=g[1],f=Object(n.useState)(!1),y=Object(o.a)(f,2),v=y[0],O=y[1],j=Object(n.useState)(!1),C=Object(o.a)(j,2),k=C[0],S=C[1],x=Object(n.useState)(!1),I=Object(o.a)(x,2),_=I[0],B=I[1],U=Object(n.useCallback)((function(){O(!0),m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/login",{email:u,password:p}).then((function(e){localStorage.setItem("token",e.data.token),l(e.data.auth),S(!0),O(!1),a()})).catch((function(e){B(!0),O(!1)}))}),[u,p,a,l]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||U()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,U]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{open:t||!1,onClose:a},r.a.createElement(A.a,{style:{backgroundColor:F.palette.primary.main,color:"white"}},"Login",r.a.createElement(h.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(H.a,null))),r.a.createElement(N.a,null,r.a.createElement(W.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:u,onChange:function(e){s(e.target.value)}}),r.a.createElement(W.a,{label:"Password",type:"password",fullWidth:!0,value:p,onChange:function(e){b(e.target.value)}}),r.a.createElement(L.a,null,r.a.createElement(d.a,{onClick:U,color:"primary"},v?r.a.createElement(T.a,{size:25,color:"primary"}):"Login")))),r.a.createElement(P.a,{open:k,autoHideDuration:3e3,onClose:function(){S(!1)}},r.a.createElement(z.a,{onClose:function(){S(!1)},severity:"success"},"Login Success!")),r.a.createElement(P.a,{open:_,autoHideDuration:3e3,onClose:function(){B(!1)}},r.a.createElement(z.a,{onClose:function(){B(!1)},severity:"error"},"Invalid Credentials")))},B=function(e){var t=e.open,a=e.onClose,l=Object(n.useState)(""),c=Object(o.a)(l,2),i=c[0],u=c[1],s=Object(n.useState)(""),E=Object(o.a)(s,2),g=E[0],p=E[1],b=Object(n.useState)(""),f=Object(o.a)(b,2),y=f[0],v=f[1],O=Object(n.useState)(!1),j=Object(o.a)(O,2),C=j[0],k=j[1],S=Object(n.useState)(!1),x=Object(o.a)(S,2),w=x[0],I=x[1],_=Object(n.useState)(!1),B=Object(o.a)(_,2),U=B[0],Y=B[1],M=Object(n.useState)(!1),R=Object(o.a)(M,2),J=R[0],V=R[1],G=Object(n.useState)(!1),K=Object(o.a)(G,2),Z=K[0],$=K[1],q=Object(n.useCallback)((function(){k(!0),g===y?m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/auth/register",{email:i,password:g}).then((function(e){u(""),p(""),v(""),I(!0),a(),k(!1)})).catch((function(e){e.response&&(409===e.response.status?V(!0):Y(!0)),k(!1)})):$(!0)}),[i,g,y,a]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||q()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,q]),r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{open:t||!1,onClose:a},r.a.createElement(A.a,{style:{backgroundColor:F.palette.primary.main,color:"white"}},"Register",r.a.createElement(h.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(H.a,null))),r.a.createElement(N.a,null,r.a.createElement(W.a,{autoFocus:!0,label:"Email",type:"email",fullWidth:!0,value:i,onChange:function(e){u(e.target.value)}}),r.a.createElement(W.a,{label:"Password",type:"password",fullWidth:!0,value:g,onChange:function(e){p(e.target.value)}}),r.a.createElement(W.a,{label:"Confirm Password",type:"password",fullWidth:!0,value:y,onChange:function(e){v(e.target.value)}}),r.a.createElement(L.a,null,r.a.createElement(d.a,{onClick:q,color:"primary"},C?r.a.createElement(T.a,{size:25,color:"primary"}):"Register")))),r.a.createElement(P.a,{open:w,autoHideDuration:3e3,onClose:function(){I(!1)}},r.a.createElement(z.a,{onClose:function(){I(!1)},severity:"success"},"Account created!")),r.a.createElement(P.a,{open:U,autoHideDuration:3e3,onClose:function(){Y(!1)}},r.a.createElement(z.a,{onClose:function(){Y(!1)},severity:"error"},"Registration error")),r.a.createElement(P.a,{open:J,autoHideDuration:3e3,onClose:function(){V(!1)}},r.a.createElement(z.a,{onClose:function(){V(!1)},severity:"info"},"Email already registered")),r.a.createElement(P.a,{open:Z,autoHideDuration:3e3,onClose:function(){$(!1)}},r.a.createElement(z.a,{onClose:function(){$(!1)},severity:"info"},"Password does not match")))},U=a(68),Y=a.n(U),M=a(196),R=a.n(M),J=Object(C.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(5)},menu:{marginTop:-e.spacing(6),backgroundColor:e.palette.primary.main},menuCard:{backgroundColor:e.palette.primary.main},menuList:{float:"right"},menuListButton:{color:"white"}}})),V=function(){var e=Object(n.useContext)(w),t=e.user,a=e.setUser,l=Object(n.useState)(!1),c=Object(o.a)(l,2),i=c[0],u=c[1],m=Object(n.useState)(!1),C=Object(o.a)(m,2),x=C[0],F=C[1],D=Object(n.useState)(!1),A=Object(o.a)(D,2),N=A[0],W=A[1],L=J(),T=Object(k.a)(),I=Object(S.a)(T.breakpoints.down("xs")),H=t?[r.a.createElement(d.a,{color:"inherit",onClick:function(){return window.open("https://github.com/bmai53/budget-tracker","_blank")},key:"github"},"GitHub Repo"),r.a.createElement(d.a,{color:"inherit",component:s.b,to:"/dashboard",key:"dashboard"},"Dashboard"),r.a.createElement(d.a,{color:"inherit",onClick:function(){a(null),localStorage.removeItem("token"),window.location.href="DEV"===Object({NODE_ENV:"production",PUBLIC_URL:"/budget-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://bmai53-budget-tracker-server.herokuapp.com/"}).ENV?"/home":"/budget-tracker/"},key:"logout"},"Logout")]:[r.a.createElement(d.a,{color:"inherit",onClick:function(){return window.open("https://github.com/bmai53/budget-tracker","_blank")},key:"github"},"GitHub Repo"),r.a.createElement(d.a,{color:"inherit",onClick:function(){u(!0)},key:"login"},"Login"),r.a.createElement(d.a,{color:"inherit",onClick:function(){F(!0)},key:"register"},"Register")];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{position:"static",className:L.root},r.a.createElement(g.a,null,r.a.createElement(p.a,{container:!0,spacing:1,justify:"space-between",alignItems:"center"},r.a.createElement(p.a,{item:!0,xs:8,sm:6},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center"}},r.a.createElement(d.a,{style:{textTransform:"none"},color:"inherit",component:s.b,to:"/home"},r.a.createElement(b.a,{variant:I?"h6":"h4"},"Budget Tracker",r.a.createElement(Y.a,{fontSize:"inherit",color:"secondary"}))))),r.a.createElement(f.a,{xsDown:!0},r.a.createElement(p.a,{item:!0,xs:4,sm:6,style:{textAlign:"right"}},H)),r.a.createElement(f.a,{smUp:!0},r.a.createElement(p.a,{item:!0,xs:4,sm:6,style:{textAlign:"right"}},r.a.createElement(h.a,{onClick:function(){return W(!N)}},r.a.createElement(R.a,{fontSize:"large",color:"secondary"}))))))),N&&r.a.createElement(y.a,{in:N,className:L.menu},r.a.createElement(v.a,{className:L.menuCard},r.a.createElement(O.a,{className:L.menuList},H.map((function(e){return r.a.createElement(j.a,{className:L.menuListButton},e)}))))),r.a.createElement(_,{open:i,onClose:function(){return u(!1)}}),r.a.createElement(B,{open:x,onClose:function(){return F(!1)}}))},G=a(441),K=a(442),Z=a(461),$=a(443),q=a(444),Q=a(445),X=a(446),ee=a(462),te=a(447),ae=a(457),ne=a(198),re=a.n(ne),le=a(57),ce=a.n(le),oe=a(440),ie=Object(C.a)((function(e){return{deleteButton:{color:"red"}}})),ue=function(e){var t=e.open,a=e.onClose,l=e.data,c=e.categoriesList,i=e.getActivities,u=Object(n.useState)(l.name),s=Object(o.a)(u,2),E=s[0],g=s[1],p=Object(n.useState)(l.amount),b=Object(o.a)(p,2),f=b[0],y=b[1],v=Object(n.useState)(ce()(l.date).format("YYYY-MM-DD")),O=Object(o.a)(v,2),j=O[0],C=O[1],k=Object(n.useState)(l.category_id),S=Object(o.a)(k,2),x=S[0],w=S[1],T=Object(n.useState)(l.type),I=Object(o.a)(T,2),P=I[0],z=I[1],_=localStorage.getItem("token"),B=Object(n.useCallback)((function(){m.a.put("https://bmai53-budget-tracker-server.herokuapp.com/activity/updateActivity",{id:l.id,updateData:{name:E,amount:f,date:j,category_id:x,type:P}},{headers:{Authorization:"JWT ".concat(_)}}).then((function(){i(),a()}))}),[i,E,f,j,x,P,_,l.id,a]);Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||B()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[B,t]);var U=ie();return r.a.createElement(D.a,{open:t||!1,onClose:a,fullWidth:!0},r.a.createElement(A.a,{style:{backgroundColor:F.palette.primary.main,color:"white"}},"Edit Activity",r.a.createElement(h.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(H.a,null))),r.a.createElement(N.a,null,r.a.createElement(W.a,{autoFocus:!0,label:"Name",type:"text",fullWidth:!0,value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement(W.a,{label:"Amount",type:"number",fullWidth:!0,value:f,onChange:function(e){y(e.target.value)}}),r.a.createElement(W.a,{label:"Date",type:"date",fullWidth:!0,value:j,InputLabelProps:{shrink:!0},onChange:function(e){return C(e.target.value)}}),r.a.createElement(W.a,{label:"Category",type:"number",fullWidth:!0,value:x,select:!0,onChange:function(e){return w(e.target.value)}},c.map((function(e){return r.a.createElement(oe.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(W.a,{label:"Type",fullWidth:!0,value:P,select:!0,onChange:function(e){return z(e.target.value)}},r.a.createElement(oe.a,{value:"expense"},"Expense"),r.a.createElement(oe.a,{value:"income"},"Income")),r.a.createElement(L.a,null,r.a.createElement(d.a,{onClick:function(){m.a.delete("https://bmai53-budget-tracker-server.herokuapp.com/activity/deleteActivity",{data:{id:l.id},headers:{Authorization:"JWT ".concat(_)}}).then((function(){i(),a()}))},className:U.deleteButton},"Delete"),r.a.createElement(d.a,{onClick:B,color:"primary"},"Update"))))},me=Object(C.a)((function(e){return{positive:{color:e.palette.positive.main},negative:{color:e.palette.negative.main}}})),se=function(e){var t=e.data,a=0;t.forEach((function(e){"income"===e.type?a+=parseFloat(e.amount):a-=parseFloat(e.amount)}));var n=me();return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{variant:"h3",display:"inline"},"Activities Total:\xa0"),r.a.createElement(b.a,{variant:"h3",display:"inline",className:a>=0?n.positive:n.negative},"$",a.toFixed(2)))},de=Object(C.a)((function(e){return{inputField:{marginBottom:"24px"},filterFooter:{textAlign:"center"}}})),Ee=function(e){var t=e.categoriesList,a=e.categoryFilter,n=e.typeFilter,l=e.dateFilter,c=e.setCategoryFilter,o=e.setTypeFilter,i=e.setDateFilter,u=de();return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{className:u.inputField,label:"Category Filter",type:"text",fullWidth:!0,select:!0,value:a,onChange:function(e){return c(e.target.value)}},r.a.createElement(oe.a,{value:"all",key:"all"},"All"),t.map((function(e){return r.a.createElement(oe.a,{value:e.name,key:e.name},e.name)}))),r.a.createElement(W.a,{className:u.inputField,label:"Type Filter",type:"text",fullWidth:!0,select:!0,value:n,onChange:function(e){return o(e.target.value)}},r.a.createElement(oe.a,{value:"all"},"All"),r.a.createElement(oe.a,{value:"income"},"Income"),r.a.createElement(oe.a,{value:"expense"},"Expense")),r.a.createElement(W.a,{className:u.inputField,label:"Date Filter",type:"text",fullWidth:!0,select:!0,value:l,onChange:function(e){return i(e.target.value)}},r.a.createElement(oe.a,{value:0},"All"),r.a.createElement(oe.a,{value:30},"30 Days"),r.a.createElement(oe.a,{value:60},"60 Days"),r.a.createElement(oe.a,{value:180},"180 Days"),r.a.createElement(oe.a,{value:362},"1 Year")),r.a.createElement("div",{className:u.filterFooter},r.a.createElement(d.a,{color:"primary",onClick:function(){c("all"),o("all"),i(0)}},"Clear Filters")))},ge=Object(C.a)((function(e){return{table:{maxWidth:1e3},tableHeader:{backgroundColor:e.palette.primary.main,color:e.palette.common.white},income:{color:e.palette.positive.main},expense:{color:e.palette.negative.main}}})),pe=function(e){var t=e.activitiesList,a=e.categoriesList,l=e.getActivities,c=e.categoryFilter,i=e.setCategoryFilter,u=e.typeFilter,m=e.setTypeFilter,s=e.dateFilter,d=e.setDateFilter,E=e.showFilters,g=e.setShowFilters,f=e.getfilteredList,O=e.loading,j=Object(n.useState)([]),C=Object(o.a)(j,2),k=C[0],S=C[1],x=Object(n.useState)(0),F=Object(o.a)(x,2),w=F[0],D=F[1],A=Object(n.useState)(5),N=Object(o.a)(A,2),W=N[0],L=N[1],I=Object(n.useState)(!1),H=Object(o.a)(I,2),P=H[0],z=H[1],_=Object(n.useState)(),B=Object(o.a)(_,2),U=B[0],Y=B[1];Object(n.useEffect)((function(){S(f(t))}),[t,a,c,u,s]);var M=ge(),R=k.map((function(e){return r.a.createElement(G.a,{key:e.id},r.a.createElement(K.a,null,e.name),r.a.createElement(K.a,{align:"right"},ce()(e.date).format("MMMM D, YYYY")),r.a.createElement(K.a,{align:"right"},e.amount),r.a.createElement(K.a,{align:"right"},e.category_name),r.a.createElement(K.a,{align:"right",className:"income"===e.type?M.income:M.expense},e.type.charAt(0).toUpperCase()+e.type.slice(1)),r.a.createElement(K.a,null,r.a.createElement(Z.a,{title:"Edit"},r.a.createElement(h.a,{onClick:function(){z(!0),Y(e)}},r.a.createElement(re.a,null)))))})),J=W-Math.min(W,R.length-w*W);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{raised:!0,className:M.table},r.a.createElement($.a,null,r.a.createElement(q.a,null,r.a.createElement(Q.a,null,r.a.createElement(G.a,null,r.a.createElement(K.a,{colSpan:4,style:{verticalAlign:"top"}},r.a.createElement(se,{data:k})),r.a.createElement(K.a,{colSpan:2,align:"right"},r.a.createElement(X.a,{control:r.a.createElement(ee.a,{color:"primary",checked:E,onChange:function(){g(!E)}}),label:"Show Filters"}))),r.a.createElement(G.a,null,r.a.createElement(K.a,{colSpan:6},r.a.createElement(p.a,{container:!0,justify:"flex-end"},r.a.createElement(p.a,{item:!0,xs:12,sm:6},r.a.createElement(y.a,{in:E},r.a.createElement(Ee,{categoriesList:a,categoryFilter:c,typeFilter:u,dateFilter:s,setCategoryFilter:i,setTypeFilter:m,setDateFilter:d})))))),r.a.createElement(G.a,null,r.a.createElement(K.a,{className:M.tableHeader},"Name"),r.a.createElement(K.a,{className:M.tableHeader,align:"right"},"Date"),r.a.createElement(K.a,{className:M.tableHeader,align:"right"},"Amount"),r.a.createElement(K.a,{className:M.tableHeader,align:"right"},"Category"),r.a.createElement(K.a,{className:M.tableHeader,align:"right"},"Type"),r.a.createElement(K.a,{className:M.tableHeader,padding:"checkbox"}))),r.a.createElement(te.a,null,O?r.a.createElement(G.a,null,r.a.createElement(K.a,{colSpan:6,align:"center"},r.a.createElement(T.a,{size:100,color:"primary"}))):R.slice(w*W,w*W+W),0===R.length?r.a.createElement(G.a,null,r.a.createElement(K.a,{colSpan:6,align:"center"},r.a.createElement(b.a,null,"No activities found"))):J>0&&r.a.createElement(G.a,{key:"empty rows",style:{height:53*J}},r.a.createElement(K.a,{colSpan:6}))))),r.a.createElement(ae.a,{rowsPerPageOptions:[5,10,25],component:"div",count:k.length,rowsPerPage:W,page:w,onChangePage:function(e,t){D(t)},onChangeRowsPerPage:function(e){L(parseInt(e.target.value,10)),D(0)}})),U&&P?r.a.createElement(ue,{categoriesList:a,getActivities:l,data:U,open:P,onClose:function(){z(!1),Y({})}}):r.a.createElement(r.a.Fragment,null))},be=a(452),fe=a(450),he=function(e){var t=e.open,a=e.onClose,l=e.categoriesList,c=e.getActivities,i=e.setShowEditCategory,u=Object(n.useState)(""),s=Object(o.a)(u,2),E=s[0],g=s[1],p=Object(n.useState)(0),b=Object(o.a)(p,2),f=b[0],y=b[1],v=Object(n.useState)(""),O=Object(o.a)(v,2),j=O[0],C=O[1],k=Object(n.useState)(""),S=Object(o.a)(k,2),x=S[0],w=S[1],T=Object(n.useState)(""),I=Object(o.a)(T,2),P=I[0],z=I[1],_=Object(n.useCallback)((function(){var e=localStorage.getItem("token");m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/activity/addActivity",{name:E,amount:f,date:j,category_id:x,type:P},{headers:{Authorization:"JWT ".concat(e)}}).then((function(){g(""),y(0),C(""),w(""),z(""),c(),a()}))}),[c,a,f,x,j,E,P]);return Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||_()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,_]),r.a.createElement(D.a,{open:t||!1,onClose:a},r.a.createElement(A.a,{style:{backgroundColor:F.palette.primary.main,color:"white"}},"Add Activity",r.a.createElement(h.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(H.a,null))),r.a.createElement(N.a,null,r.a.createElement(W.a,{autoFocus:!0,label:"Name",type:"text",fullWidth:!0,value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement(W.a,{label:"Amount",type:"number",InputProps:{inputProps:{min:0}},fullWidth:!0,value:f,onChange:function(e){y(e.target.value)}}),r.a.createElement(W.a,{label:"Date",type:"date",fullWidth:!0,value:j,InputLabelProps:{shrink:!0},onChange:function(e){return C(e.target.value)}}),r.a.createElement(be.a,{width:"100%",style:{display:"inline-flex"}},r.a.createElement(W.a,{label:"Category",fullWidth:!0,value:x,select:!0,onChange:function(e){return w(e.target.value)}},l.map((function(e){return r.a.createElement(oe.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(L.a,{style:{position:"relative",top:"10px"}},r.a.createElement(d.a,{color:"primary",onClick:function(){a(),i(!0)}},"Add New Category"))),r.a.createElement(W.a,{label:"Type",fullWidth:!0,value:P,select:!0,onChange:function(e){return z(e.target.value)}},r.a.createElement(oe.a,{value:"expense"},"Expense"),r.a.createElement(oe.a,{value:"income"},"Income")),r.a.createElement(L.a,null,r.a.createElement(d.a,{onClick:_,color:"primary"},"Submit"))))},ye=Object(C.a)((function(e){return{deleteButton:{color:"red"}}})),ve=function(e){var t=e.open,a=e.onClose,l=e.categoriesList,c=e.getCategories,i=e.getActivities,u=Object(n.useState)(""),s=Object(o.a)(u,2),E=s[0],g=s[1],p=Object(n.useState)(""),b=Object(o.a)(p,2),f=b[0],y=b[1],v=localStorage.getItem("token"),O=Object(n.useCallback)((function(){m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/category/addCategory",{name:E},{headers:{Authorization:"JWT ".concat(v)}}).then((function(){g(""),c(),a()}))}),[E,a,v,c]);Object(n.useEffect)((function(){var e=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||!t||O()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[t,O]);var j=ye();return r.a.createElement(D.a,{open:t||!1,onClose:a,fullWidth:!0},r.a.createElement(A.a,{style:{backgroundColor:F.palette.primary.main,color:"white"}},"Edit Categories",r.a.createElement(h.a,{color:"secondary",onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(H.a,null))),r.a.createElement(N.a,null,r.a.createElement(W.a,{autoFocus:!0,label:"Add New Category",type:"text",fullWidth:!0,value:E,onChange:function(e){g(e.target.value)}}),r.a.createElement(L.a,null,r.a.createElement(d.a,{onClick:O,color:"primary"},"Add")),r.a.createElement(W.a,{label:"Delete Existing Category",fullWidth:!0,value:f,select:!0,onChange:function(e){return y(e.target.value)}},l.map((function(e){return r.a.createElement(oe.a,{value:e.id,key:e.id},e.name)}))),r.a.createElement(L.a,null,r.a.createElement(d.a,{onClick:function(){m.a.delete("https://bmai53-budget-tracker-server.herokuapp.com/category/deleteCategory",{data:{id:f},headers:{Authorization:"JWT ".concat(v)}}).then((function(){c(),i(),a()}))},className:j.deleteButton},"Delete"))))},Oe=a(199),je=a(427),Ce=a(453),ke=function(e){var t=e.submitHandler,a=e.headers,n=e.date,l=e.name,c=e.categoryName,o=e.amount,i=e.type,u=e.setDate,m=e.setName,s=e.setCategoryName,E=e.setAmount,g=e.setType;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{container:!0,spacing:3},r.a.createElement(p.a,{item:!0,xs:3}),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(b.a,{variant:"h5",align:"center",color:"primary"},"Columns found in CSV file")),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(b.a,{variant:"h6",align:"left",color:"primary"},"Date:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(je.a,{variant:"outlined",fullWidth:!0},r.a.createElement(Ce.a,{onChange:function(e){return u(e.target.value)},value:n},a.map((function(e,t){return r.a.createElement(oe.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(b.a,{variant:"h6",align:"left",color:"primary"},"Name:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(je.a,{variant:"outlined",fullWidth:!0},r.a.createElement(Ce.a,{onChange:function(e){return m(e.target.value)},value:l},a.map((function(e,t){return r.a.createElement(oe.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(b.a,{variant:"h6",align:"left",color:"primary"},"Category:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(je.a,{variant:"outlined",fullWidth:!0},r.a.createElement(Ce.a,{onChange:function(e){return s(e.target.value)},value:c},a.map((function(e,t){return r.a.createElement(oe.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(b.a,{variant:"h6",align:"left",color:"primary"},"Amount:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(je.a,{variant:"outlined",fullWidth:!0},r.a.createElement(Ce.a,{onChange:function(e){return E(e.target.value)},value:o},a.map((function(e,t){return r.a.createElement(oe.a,{key:t,value:e},e)}))))),r.a.createElement(p.a,{item:!0,xs:3},r.a.createElement(b.a,{variant:"h6",align:"left",color:"primary"},"Type:")),r.a.createElement(p.a,{item:!0,xs:9},r.a.createElement(je.a,{variant:"outlined",fullWidth:!0},r.a.createElement(Ce.a,{onChange:function(e){return g(e.target.value)},value:i},a.map((function(e,t){return r.a.createElement(oe.a,{key:t,value:e},e)})))))),r.a.createElement(L.a,null,r.a.createElement(d.a,{onClick:t,size:"large",color:"primary"},"Submit")))},Se=a(449),xe=a(448),Fe=a(213),we=a(72),De=a.n(we),Ae=function(e){var t=e.uploadHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe.a,{acceptedFiles:[".csv"],filesLimit:1,clearOnUnmount:!0,useChipsForPreview:!0,previewGridProps:{container:{justify:"center",spacing:3,direction:"row"}},showAlerts:["error","info"],alertSnackbarProps:{anchorOrigin:{vertical:"bottom",horizontal:"center"},autoHideDuration:3e3},dropzoneText:r.a.createElement("div",{style:{padding:"0 25px 0 25px"}},r.a.createElement(b.a,{variant:"h6",align:"center",color:"primary"},"Drag and drop or click to upload a CSV file."),r.a.createElement("br",null),r.a.createElement(b.a,{align:"justify"},"Please ensure the CSV file has the following columns:"),r.a.createElement(O.a,{dense:!0,disablePadding:!0},r.a.createElement(j.a,null,r.a.createElement(xe.a,null,r.a.createElement(De.a,null)),r.a.createElement(Se.a,{primary:"Date (YYYY-MM-DD)"})),r.a.createElement(j.a,null,r.a.createElement(xe.a,null,r.a.createElement(De.a,null)),r.a.createElement(Se.a,{primary:"Name"})),r.a.createElement(j.a,null,r.a.createElement(xe.a,null,r.a.createElement(De.a,null)),r.a.createElement(Se.a,{primary:"Amount"})),r.a.createElement(j.a,null,r.a.createElement(xe.a,null,r.a.createElement(De.a,null)),r.a.createElement(Se.a,{primary:"Category"})),r.a.createElement(j.a,null,r.a.createElement(xe.a,null,r.a.createElement(De.a,null)),r.a.createElement(Se.a,{primary:"Type (income or expense)"})))),onChange:function(e){t(e)}}),r.a.createElement("br",null))},Ne=function(e){var t=e.open,a=e.onClose,n=e.message,l=e.severity;return r.a.createElement(P.a,{open:t,autoHideDuration:3e3,onClose:a},r.a.createElement(z.a,{onClose:a,severity:l},n))},We=function(e){var t=e.open,a=e.onClose,l=e.getActivities,c=e.getCategories,i=Object(n.useState)([]),u=Object(o.a)(i,2),s=u[0],d=u[1],E=Object(n.useState)([]),g=Object(o.a)(E,2),p=g[0],b=g[1],f=Object(n.useState)(!1),y=Object(o.a)(f,2),v=y[0],O=y[1],j=Object(n.useState)(""),C=Object(o.a)(j,2),k=C[0],S=C[1],x=Object(n.useState)(""),w=Object(o.a)(x,2),W=w[0],L=w[1],T=Object(n.useState)(""),I=Object(o.a)(T,2),P=I[0],z=I[1],_=Object(n.useState)(""),B=Object(o.a)(_,2),U=B[0],Y=B[1],M=Object(n.useState)(""),R=Object(o.a)(M,2),J=R[0],V=R[1],G=Object(n.useState)(!1),K=Object(o.a)(G,2),Z=K[0],$=K[1],q=Object(n.useState)(!1),Q=Object(o.a)(q,2),X=Q[0],ee=Q[1],te=Object(n.useState)(!1),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useState)(!1),ce=Object(o.a)(le,2),oe=ce[0],ie=ce[1],ue=Object(n.useState)(!1),me=Object(o.a)(ue,2),se=me[0],de=me[1],Ee=Object(n.useState)(!1),ge=Object(o.a)(Ee,2),pe=ge[0],be=ge[1],fe=Object(n.useState)(!1),he=Object(o.a)(fe,2),ye=he[0],ve=he[1],je=Object(n.useState)(!1),Ce=Object(o.a)(je,2),Se=Ce[0],xe=Ce[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{open:t||!1,onClose:function(){O(!1),a()}},r.a.createElement(A.a,{style:{backgroundColor:F.palette.primary.main,color:"white"}},v?"Please match the following":"Upload CSV",r.a.createElement(h.a,{onClick:a,style:{position:"absolute",top:0,right:0}},r.a.createElement(H.a,null))),r.a.createElement(N.a,null,v?r.a.createElement(ke,{headers:p,date:k,name:W,categoryName:P,amount:U,type:J,setDate:S,setName:L,setCategoryName:z,setAmount:Y,setType:V,submitHandler:function(e){if(e.preventDefault(),0===s.length)ie(!0);else if(k&&W&&P&&U&&J)if(5!==new Set([k,W,P,U,J]).size)be(!0);else{var t={date:p.indexOf(k),name:p.indexOf(W),categoryName:p.indexOf(P),amount:p.indexOf(U),type:p.indexOf(J)},n={data:s,map:t},r=localStorage.getItem("token");m.a.post("https://bmai53-budget-tracker-server.herokuapp.com/activity/uploadCSV",n,{headers:{Authorization:"JWT ".concat(r)}}).then((function(e){console.log(e.data.message),xe(!0),l(),c(),a()})).catch((function(e){ve(!0),l(),c(),a()}))}else de(!0)}}):r.a.createElement(Ae,{uploadHandler:function(e){if(e.length>0){var t=new FileReader;t.readAsText(e[0]),t.onload=function(e){var t=e.target.result,a=Object(Oe.a)(t),n=!0;""===a.data[a.data.length-1][0]&&a.data.pop(),a.data.forEach((function(e){-1!==e.indexOf("")&&($(!0),n=!1)})),new Set(a.data[0]).size!==a.data[0].length&&(ee(!0),n=!1),n&&(b(a.data[0]),S(a.data[0][0]?a.data[0][0]:""),L(a.data[0][1]?a.data[0][1]:""),z(a.data[0][2]?a.data[0][2]:""),Y(a.data[0][3]?a.data[0][3]:""),V(a.data[0][4]?a.data[0][4]:""),d(a.data),O(!0))},t.onerror=function(e){re(!0)}}}}))),r.a.createElement(Ne,{open:Z,onClose:function(){$(!1)},severity:"error",message:"Empty cells detected."}),r.a.createElement(Ne,{open:X,onClose:function(){ee(!1)},severity:"error",message:"Duplicate columns detected."}),r.a.createElement(Ne,{open:ne,onClose:function(){re(!1)},severity:"error",message:"Failed to read file."}),r.a.createElement(Ne,{open:oe,onClose:function(){ie(!1)},severity:"error",message:"No file found."}),r.a.createElement(Ne,{open:se,onClose:function(){de(!1)},severity:"error",message:"Headers are not all matched."}),r.a.createElement(Ne,{open:pe,onClose:function(){be(!1)},severity:"error",message:"Duplicate header match detected."}),r.a.createElement(Ne,{open:ye,onClose:function(){ve(!1)},severity:"error",message:"Upload error."}),r.a.createElement(Ne,{open:Se,onClose:function(){xe(!1)},severity:"success",message:"CSV file uploaded successfully!"}))},Le=a(114),Te=function(e){var t=e.data;return r.a.createElement(Le.a,{data:t})},Ie=function(e){var t=e.data,a=e.options;return r.a.createElement(Le.b,{data:t,options:a})},He=a(82),Pe=function(e,t){var a=e.filter((function(e){return e.type===t})),n=new Map,r=[],l=[];return a.forEach((function(e){n.has(e.category_name)?n.set(e.category_name,(Number(n.get(e.category_name))+Number(e.amount)).toFixed(2)):n.set(e.category_name,e.amount)})),n.forEach((function(e,t){r.push({category_name:t,amount:e})})),r.forEach((function(e,a){l.push("rgb(".concat("income"===t?100:255-a*(150/r.length),", ").concat("income"===t?255-a*(150/r.length):100,", 100)"))})),{data:r,color:l}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.map((function(e){return"income"===e.type?{type:"expense",amount:null,date:e.date}:{type:"income",amount:null,date:e.date}})),n=[].concat(Object(He.a)(e),Object(He.a)(a)).sort((function(e,t){return e.date>t.date?1:-1})),r=[],l=[];return n.forEach((function(e){return"income"===e.type?l.push(e):r.push(e)})),t&&(Be(r),Be(l)),_e(r),_e(l),{expenseData:r,incomeData:l}},_e=function(e){for(var t=0,a=[],n=0;n<e.length;n++)e[n].amount?(a.length>0&&function(){var r=Math.abs(e[n].amount-t)/a.length;a.forEach((function(a,n){e[a].amount=Math.max(0,t-(n+1)*r)}))}(),t=e[n].amount,a.length=0):(a.push(n),n===e.length-1&&(e[n].amount=t))},Be=function(e){},Ue=function(e){var t=e.activitiesList,a=Object(n.useState)({}),l=Object(o.a)(a,2),c=l[0],i=l[1],u=Object(n.useState)({}),m=Object(o.a)(u,2),s=m[0],d=m[1],E=Object(n.useState)({}),g=Object(o.a)(E,2),f=g[0],h=g[1];ze(t),Object(n.useEffect)((function(){var e=Pe(t,"expense"),a=Pe(t,"income");i({length:e.data.length,labels:e.data.map((function(e){return e.category_name})),datasets:[{data:e.data.map((function(e){return e.amount})),backgroundColor:e.color,borderWidth:1}]}),d({length:a.data.length,labels:a.data.map((function(e){return e.category_name})),datasets:[{data:a.data.map((function(e){return e.amount})),backgroundColor:a.color,borderWidth:1}]}),h(ze(t))}),[t]);var y={sm:6,xs:12,style:{textAlign:"center"}},O={sm:2,xs:0},j={sm:8,xs:12,style:{textAlign:"center",paddingTop:"50px"}},C=Object(k.a)(),x=Object(S.a)(C.breakpoints.down("xs"));return r.a.createElement(v.a,{raised:!0,style:x?{width:"100%"}:{width:"75%",padding:"25px",margin:"50px auto"}},r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,Object.assign({item:!0},y),r.a.createElement(b.a,{variant:"h4",gutterBottom:!0},"Expenses"),c.length>0?r.a.createElement(Te,{data:c}):r.a.createElement(b.a,{variant:"h5"},"No Data")),r.a.createElement(p.a,Object.assign({item:!0},y),r.a.createElement(b.a,{variant:"h4",gutterBottom:!0},"Income"),s.length>0?r.a.createElement(Te,{data:s}):r.a.createElement(b.a,{variant:"h5"},"No Data")),r.a.createElement(p.a,Object.assign({item:!0},O)),r.a.createElement(p.a,Object.assign({item:!0},j),f.expenseData&&f.incomeData&&r.a.createElement(Ie,{data:{labels:f.expenseData.map((function(e){return ce()(e.date).format("MM/DD/YY")})),datasets:[{label:"Expense",data:f.expenseData.map((function(e){return e.amount})),fill:!1,backgroundColor:"rgb(255, 20, 20)",borderColor:"rgba(255, 20, 20, 0.5)"},{label:"Income",data:f.incomeData.map((function(e){return e.amount})),fill:!1,backgroundColor:"rgb(20, 255, 20)",borderColor:"rgba(20, 255, 75, 0.5)"}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})),r.a.createElement(p.a,Object.assign({item:!0},O))))},Ye=function(){var e=Object(n.useContext)(w).user,t=Object(n.useState)(!0),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),s=u[0],E=u[1],g=Object(n.useState)([]),p=Object(o.a)(g,2),f=p[0],h=p[1],y=Object(n.useState)(!1),v=Object(o.a)(y,2),O=v[0],j=v[1],C=Object(n.useState)(!1),k=Object(o.a)(C,2),S=k[0],x=k[1],F=Object(n.useState)(!1),D=Object(o.a)(F,2),A=D[0],N=D[1],W=Object(n.useState)(!1),L=Object(o.a)(W,2),I=L[0],H=L[1],P=Object(n.useState)("all"),z=Object(o.a)(P,2),_=z[0],B=z[1],U=Object(n.useState)("all"),Y=Object(o.a)(U,2),M=Y[0],R=Y[1],J=Object(n.useState)(0),G=Object(o.a)(J,2),K=G[0],Z=G[1],$=function(e){var t=e;if("all"!==_&&(t=t.filter((function(e){return e.category_name===_}))),"all"!==M&&(t=t.filter((function(e){return e.type===M}))),0!==K){var a=new Date,n=new Date((new Date).setDate(a.getDate()-K));t=t.filter((function(e){return new Date(e.date)>=n}))}return t},q=function(){c(!0);var e=localStorage.getItem("token");m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/activity/getActivities",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){E(e.data),c(!1)}))},Q=function(){c(!0);var e=localStorage.getItem("token");m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/category/getCategories",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){h(e.data),c(!1)}))};return Object(n.useEffect)((function(){q(),Q()}),[e]),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(be.a,{align:"center"},r.a.createElement(pe,{activitiesList:s,categoriesList:f,getActivities:q,categoryFilter:_,setCategoryFilter:B,typeFilter:M,setTypeFilter:R,dateFilter:K,setDateFilter:Z,showFilters:O,setShowFilters:j,getfilteredList:$,loading:l})),r.a.createElement("br",null),r.a.createElement(be.a,{align:"center"},r.a.createElement("div",{style:{maxWidth:1e3}},r.a.createElement(fe.a,{variant:"contained",size:"large",color:"primary",fullWidth:!0},r.a.createElement(d.a,{onClick:function(){N(!0)},key:"editCategory"},"Edit Categories"),r.a.createElement(d.a,{onClick:function(){x(!0)},key:"addActivity"},"Add Activity"),r.a.createElement(d.a,{onClick:function(){H(!0)},key:"uploadCSV"},"Upload from CSV")))),r.a.createElement(he,{categoriesList:f,open:S,setShowEditCategory:N,getActivities:q,onClose:function(){return x(!1)}}),r.a.createElement(ve,{categoriesList:f,open:A,getCategories:Q,getActivities:q,onClose:function(){return N(!1)}}),r.a.createElement(Ue,{activitiesList:$(s)}),r.a.createElement(We,{open:I,onClose:function(){H(!1)},getActivities:q,getCategories:Q})):r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),localStorage.getItem("token")?r.a.createElement(be.a,{align:"center"},r.a.createElement(T.a,{size:100,color:"primary"})):r.a.createElement(b.a,null,"You must be logged in to access this page."))},Me=a(87),Re=a(211),Je=a.n(Re),Ve=(a(384),{box:{width:"100%",backgroundImage:"url(".concat(Je.a,")"),backgroundSize:"cover"},flexBox:{display:"flex",flexDirection:"column",justifyContent:"center"},card:{padding:"16px 5px",marginBottom:"100px"}}),Ge=function(){var e=Object(k.a)(),t=Object(S.a)(e.breakpoints.down("xs"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(be.a,{style:Object(Me.a)(Object(Me.a)({},Ve.box),{},{height:t?"75vh":"500px"})},r.a.createElement("div",{style:Object(Me.a)(Object(Me.a)({},Ve.flexBox),{},{height:t?"250px":"500px"})},r.a.createElement(b.a,{variant:t?"h5":"h1",align:"center",color:"secondary",gutterBottom:!0},"Welcome to Budget Tracker",r.a.createElement(Y.a,{fontSize:"inherit",color:"secondary"})),r.a.createElement(b.a,{variant:t?"subtitle1":"h3",align:"center",color:"secondary"},"Login or sign up to get started!"))))},Ke=a(115),Ze=Object(C.a)((function(e){return{splash:Object(Ke.a)({paddingTop:"40%",width:"100wh",height:"60%",lineHeight:"25vh"},e.breakpoints.down("sm"),{lineHeight:"250px"})}})),$e=function(){var e=Ze(),t=Object(k.a)(),a=Object(S.a)(t.breakpoints.down("xs"));return r.a.createElement(be.a,{align:"center",className:e.splash},r.a.createElement(b.a,{variant:a?"h4":"h1",color:"primary"},"Budget Tracker",r.a.createElement(Y.a,{fontSize:"inherit",color:"primary"})),r.a.createElement(T.a,{size:a?100:200,color:"primary"}))},qe=function(){var e=Object(n.useContext)(w),t=e.user,a=e.setUser;return Object(n.useEffect)((function(){var e=localStorage.getItem("token");!t&&e&&m.a.get("https://bmai53-budget-tracker-server.herokuapp.com/auth/findUser",{headers:{Authorization:"JWT ".concat(e)}}).then((function(e){a(e.data.auth)}))}),[t,a]),r.a.createElement($e,null)},Qe=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1],c=localStorage.getItem("token");return r.a.createElement(w.Provider,{value:{user:a,setUser:l}},!a&&c?r.a.createElement(qe,null):r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},a?r.a.createElement(i.a,{to:"/dashboard"}):r.a.createElement(Ge,null)),r.a.createElement(i.b,{path:"/home",render:function(){return r.a.createElement(Ge,null)}}),r.a.createElement(i.b,{path:"/dashboard",render:function(){return r.a.createElement(Ye,null)}}),a?r.a.createElement(i.b,{render:function(){return r.a.createElement(i.a,{to:"/dashboard"})}}):r.a.createElement(i.b,{render:function(){return r.a.createElement(i.a,{to:"/home"})}})))},Xe=a(451);c.a.render(r.a.createElement(s.a,null,r.a.createElement(Xe.a,{theme:F},r.a.createElement(Qe,null))),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.f88a793d.chunk.js.map