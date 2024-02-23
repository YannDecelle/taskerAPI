"use strict";(self.webpackChunktask_master=self.webpackChunktask_master||[]).push([[6068],{86068:(p,P,s)=>{s.d(P,{ProtectedListPage:()=>ts});var _=s(19968),D=s(62552),e=s(76512),a=s(9752),i=s(63358),C=s(48936),T=s(5e3),h=s(23264),r=s(48112),E=s(28464),R=s(35676),m=s(52051),W=s(42816),U=s(42848),S=s(89616),I=s(20464),K=s(35480),H=s(48744),n=s(50648),N=s(48636),X=s(32680),Y=s(89940),Z=s(71324),J=s(78164),Q=s(29088),$=s(14632),b=s(49008),F=s(66942),k=s(33531),z=s(31964),rs=s(54320),Os=s(5240),Ms=s(91892),Ps=s(36196),Cs=s(20880),Ts=s(21424),hs=s(70516),Rs=s(31812),ms=s(18424),Ls=s(52540),cs=s(21968),As=s(12132),gs=s(48632),vs=s(85676),Bs=s(35184),Ws=s(99568),Us=s(96556),Is=s(13192),Ks=s(30840),xs=s(77784),js=s(79371),fs=s(67888),us=s(52600),ys=s(95752),ps=s(37388),Ss=s(61840),Ns=s(49108),$s=s(44632),Fs=s(50840),zs=s(20252),Gs=s(86432),Vs=s(22612),Hs=s(24808),Xs=s(24024),Ys=s(40960),Zs=s(33656),Js=s(43280),Qs=s(79804),bs=s(19632),ks=s(29576),ws=s(61152),qs=s(9589),s_=s(45488),__=s(75516),t_=s(17892),o_=s(31212);const w=({id:t,name:M,description:l,usersCount:c,icons:A,rowIndex:x,canUpdate:g})=>{const{formatMessage:v}=(0,$.c)(),[,L]=A,j=v({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:c});return(0,_.jsxs)(e.Tr,{"aria-rowindex":x,...g?(0,n.on)({fn:L.onClick}):{},children:[(0,_.jsx)(a.Td,{maxWidth:(0,n.W8)(130),children:(0,_.jsx)(i.O,{ellipsis:!0,textColor:"neutral800",children:M})}),(0,_.jsx)(a.Td,{maxWidth:(0,n.W8)(250),children:(0,_.jsx)(i.O,{ellipsis:!0,textColor:"neutral800",children:l})}),(0,_.jsx)(a.Td,{children:(0,_.jsx)(i.O,{textColor:"neutral800",children:j})}),(0,_.jsx)(a.Td,{children:(0,_.jsx)(C.C,{justifyContent:"flex-end",...n.Ii,children:A.map((d,B)=>d?(0,_.jsx)(T.k,{paddingLeft:B===0?0:1,children:(0,_.jsx)(h.w,{onClick:d.onClick,label:d.label,borderWidth:0,icon:d.icon})},d.label):null)})})]},t)},q=()=>{const{formatMessage:t}=(0,$.c)();(0,n.G0)();const M=(0,F.j)(z.s),{formatAPIError:l}=(0,n.An)(),c=(0,n.eo)(),[A,x]=D.useState(!1),[{query:g}]=(0,n.WK)(),{isLoading:v,allowedActions:{canCreate:L,canDelete:j,canRead:d,canUpdate:B}}=(0,n.aU)(M.settings?.roles),{roles:G,refetch:os}=(0,k.u)({filters:g?._q?{name:{$containsi:g._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:v||!d}),{push:f}=(0,b.Uz)(),[{showModalConfirmButtonLoading:ns,roleToDelete:as},u]=D.useReducer(_s,ss),{post:Es}=(0,n.YF)(),ls=async()=>{try{u({type:"ON_REMOVE_ROLES"}),await Es("/admin/roles/batch-delete",{ids:[as]}),await os(),u({type:"RESET_DATA_TO_DELETE"})}catch(o){o instanceof J.Uh&&c({type:"warning",message:l(o)})}y()},V=()=>f("/settings/roles/new"),y=()=>x(o=>!o),is=o=>O=>{O.preventDefault(),O.stopPropagation(),o.usersCount?c({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):(u({type:"SET_ROLE_TO_DELETE",id:o.id}),y())},ds=o=>O=>{O.preventDefault(),O.stopPropagation(),f(`/settings/roles/duplicate/${o.id}`)},es=G.length+1,Ds=6;return v?(0,_.jsx)(r.G,{children:(0,_.jsx)(n.Wm,{})}):(0,_.jsxs)(r.G,{children:[(0,_.jsx)(n.K8,{name:"Roles"}),(0,_.jsx)(E.a,{primaryAction:L?(0,_.jsx)(R.Z,{onClick:V,startIcon:(0,_.jsx)(N.c,{}),size:"S",children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:t({id:"global.roles",defaultMessage:"roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),d&&(0,_.jsx)(m.U,{startActions:(0,_.jsx)(n.w9,{label:t({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:t({id:"global.roles",defaultMessage:"roles"})})})}),d&&(0,_.jsx)(W.S,{children:(0,_.jsxs)(U.o,{colCount:Ds,rowCount:es,footer:L?(0,_.jsx)(S.U,{onClick:V,icon:(0,_.jsx)(N.c,{}),children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,_.jsx)(I.o,{children:(0,_.jsxs)(e.Tr,{"aria-rowindex":1,children:[(0,_.jsx)(a.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),(0,_.jsx)(a.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),(0,_.jsx)(a.Th,{children:(0,_.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),(0,_.jsx)(a.Th,{children:(0,_.jsx)(K.K,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,_.jsx)(H.K,{children:G?.map((o,O)=>(0,_.jsx)(w,{id:o.id,name:o.name,description:o.description,usersCount:o.usersCount,icons:[L&&{onClick:ds(o),label:t({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,_.jsx)(X.c,{})},B&&{onClick:()=>f(`/settings/roles/${o.id}`),label:t({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,_.jsx)(Y.c,{})},j&&{onClick:is(o),label:t({id:"global.delete",defaultMessage:"Delete"}),icon:(0,_.jsx)(Z.c,{})}].filter(Boolean),rowIndex:O+2,canUpdate:B},o.id))})]})}),(0,_.jsx)(n.cz,{isOpen:A,onConfirm:ls,isConfirmButtonLoading:ns,onToggleDialog:y})]})},ss={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(t,M)=>(0,Q.cp)(t,l=>{switch(M.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=M.id;break}default:return l}}),ts=()=>{const t=(0,F.j)(z.s);return(0,_.jsx)(n.rF,{permissions:t.settings?.roles.main,children:(0,_.jsx)(q,{})})}},33531:(p,P,s)=>{s.d(P,{u:()=>i});var _=s(62552),D=s(50648),e=s(14632),a=s(66942);const i=(C={},T)=>{const{locale:h}=(0,e.c)(),r=(0,D.In)(h,{sensitivity:"base"}),{data:E,error:R,isError:m,isLoading:W,refetch:U}=(0,a.z)(C,T);return{roles:_.useMemo(()=>[...E??[]].sort((I,K)=>r.compare(I.name,K.name)),[E,r]),error:R,isError:m,isLoading:W,refetch:U}}},89616:(p,P,s)=>{s.d(P,{U:()=>r});var _=s(19968),D=s(69372),e=s(5e3),a=s(6912),i=s(48936),C=s(63358);const T=(0,D.cp)(e.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:E})=>E.colors.primary600};
  }
`,h=(0,D.cp)(e.k)`
  border-radius: 0 0 ${({theme:E})=>E.borderRadius} ${({theme:E})=>E.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:E,icon:R,...m})=>(0,_.jsxs)("div",{children:[(0,_.jsx)(a.c,{}),(0,_.jsx)(h,{as:"button",background:"primary100",padding:5,...m,children:(0,_.jsxs)(i.C,{children:[(0,_.jsx)(T,{"aria-hidden":!0,background:"primary200",children:R}),(0,_.jsx)(e.k,{paddingLeft:3,children:(0,_.jsx)(C.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:E})})]})})]})}}]);
