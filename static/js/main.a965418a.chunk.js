(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{62:function(e,t,a){e.exports=a(75)},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c);a(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);var l=a(27),o=a(116),u=a(106),s=a(107),d=i.a.memo((function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],d=Object(n.useState)(null),m=Object(l.a)(d,2),f=m[0],T=m[1],b=function(){""!==c.trim()?(e.addItem(c),r("")):T("Title is required")};return i.a.createElement("div",null,i.a.createElement(o.a,{value:c,variant:"outlined",onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){null!==f&&T(null),13===e.charCode&&b()},error:!!f,label:"Title",color:"primary",helperText:f}),i.a.createElement(u.a,{color:"primary",onClick:b},i.a.createElement(s.a,null)))})),m=i.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!0),a=Object(l.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(e.title),s=Object(l.a)(u,2),d=s[0],m=s[1];return c?i.a.createElement("span",{onDoubleClick:function(){r(!c)}},d):i.a.createElement(o.a,{value:d,autoFocus:!0,onBlur:function(){r(!c),e.omChange(e.title)},onChange:function(e){var t=e.currentTarget.value;m(t)}})})),f=a(108),T=a(109),b=a(117),O=i.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.taskId,e.id)}),[e.removeTask,e.taskId,e.id]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.taskId,a,e.id)}),[e.changeTaskStatus,e.taskId,e.id]);return i.a.createElement("div",{key:e.taskId,className:e.isDone?"is-done":""},i.a.createElement(b.a,{onChange:a,checked:e.isDone,color:"primary"}),i.a.createElement(m,{title:e.title,omChange:function(t){e.changeTask(t,e.taskId,e.id)}}),i.a.createElement(u.a,{onClick:t},i.a.createElement(f.a,null)))})),k=i.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.changeFilter("all",e.id)}),[]),a=Object(n.useCallback)((function(){return e.changeFilter("active",e.id)}),[]),c=Object(n.useCallback)((function(){return e.changeFilter("completed",e.id)}),[]),r=e.tasks;"active"===e.filter&&(r=r.filter((function(e){return!e.isDone}))),"completed"===e.filter&&(r=r.filter((function(e){return e.isDone})));var l=Object(n.useCallback)((function(t){e.addTask(t,e.id)}),[e.addTask,e.id]),o=Object(n.useCallback)((function(t){e.changeTodolistValue(e.title,e.id)}),[e.changeTodolistValue,e.id]);return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(m,{title:e.title,omChange:o}),i.a.createElement(u.a,{onClick:function(){return e.removeTodolist(e.id)}},i.a.createElement(f.a,null))),i.a.createElement(d,{addItem:l}),i.a.createElement("ul",null,r.map((function(t){return i.a.createElement(O,{key:t.id,id:e.id,taskId:t.id,isDone:t.isDone,title:t.title,changeTaskStatus:e.changeTaskStatus,changeTask:e.changeTask,removeTask:e.removeTask})}))),i.a.createElement("div",null,i.a.createElement(T.a,{color:"default",variant:"all"===e.filter?"contained":"text",onClick:t},"All"),i.a.createElement(T.a,{color:"primary",variant:"active"===e.filter?"contained":"text",onClick:a},"Active"),i.a.createElement(T.a,{color:"secondary",variant:"completed"===e.filter?"contained":"text",onClick:c},"Completed")))})),E=a(110),v=a(111),I=a(113),h=a(114),j=a(115),g=a(76),p=a(112),C=a(28),S=a(118),D=[],A=a(16),y={},L=a(26);var w=function(){var e=Object(L.c)((function(e){return e.todolists})),t=Object(L.c)((function(e){return e.tasks})),a=Object(L.b)(),c=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"REMOVE-TASK",taskId:e,todolistId:t}}(e,t);a(n)}),[a]),r=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"ADD-TASK",title:e,todolistId:t}}(e,t);a(n)}),[a]),l=Object(n.useCallback)((function(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-STATUS",taskId:e,isDone:t,todolistId:a}}(e,t,n);a(i)}),[a]),o=Object(n.useCallback)((function(e,t,n){var i=function(e,t,a){return{type:"CHANGE-TASK-TITLE",taskId:e,title:t,todolistId:a}}(e,t,n);a(i)}),[a]),s=Object(n.useCallback)((function(e,t){var n={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};a(n)}),[a]),m=Object(n.useCallback)((function(e){var t={type:"REMOVE-TODOLIST",id:e};a(t)}),[a]),f=Object(n.useCallback)((function(e){var t={type:"ADD-TODOLIST",title:e,todolistId:Object(S.a)()};a(t)}),[a]),b=Object(n.useCallback)((function(e,t){var n=function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t);a(n)}),[a]);return i.a.createElement("div",{className:"App"},i.a.createElement(E.a,{position:"static"},i.a.createElement(v.a,null,i.a.createElement(u.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(p.a,null)),i.a.createElement(I.a,{variant:"h6"},"News"),i.a.createElement(T.a,{color:"inherit"},"Login"))),i.a.createElement(h.a,{fixed:!0},i.a.createElement(j.a,{spacing:10},i.a.createElement(d,{addItem:f})),i.a.createElement(j.a,{container:!0,spacing:3},e.map((function(e){return i.a.createElement(j.a,{style:{padding:"20px"}},i.a.createElement(g.a,{elevation:5},i.a.createElement(k,{key:e.id,id:e.id,title:e.title,tasks:t[e.id],removeTask:c,changeFilter:s,addTask:r,changeTaskStatus:l,filter:e.filter,removeTodolist:m,changeTask:o,changeTodolistValue:b})))})))))},N=a(43),K=Object(N.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":var a=Object(A.a)({},e),n=e[t.todolistId];return a[t.todolistId]=n.filter((function(e){return e.id!=t.taskId})),a;case"ADD-TASK":var i=Object(A.a)({},e),c={id:Object(S.a)(),title:t.title,isDone:!1},r=e[t.todolistId];return i[t.todolistId]=[c].concat(Object(C.a)(r)),i;case"CHANGE-TASK-STATUS":var l=Object(A.a)({},e),o=e[t.todolistId],u=o.map((function(e){return e.id===t.taskId?Object(A.a)({},e,{isDone:t.isDone}):e}));return l[t.todolistId]=u,l;case"CHANGE-TASK-TITLE":var s=Object(A.a)({},e),d=e[t.todolistId],m=d.map((function(e){return e.id===t.taskId?Object(A.a)({},e,{title:t.title}):e}));return s[t.todolistId]=m,s;case"ADD-TODOLIST":var f=Object(A.a)({},e);return f[t.todolistId]=[],f;case"REMOVE-TODOLIST":var T=Object(A.a)({},e);return delete T[t.id],T;default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[].concat(Object(C.a)(e),[{id:t.todolistId,title:t.title,filter:"all"}]);case"CHANGE-TODOLIST-TITLE":var a=e.find((function(e){return e.id===t.id}));return a&&(a.title=t.title),Object(C.a)(e);case"CHANGE-TODOLIST-FILTER":var n=e.find((function(e){return e.id===t.id}));return n&&(n.filter=t.filter),Object(C.a)(e);default:return e}}}),G=Object(N.b)(K);window.store=G,r.a.render(i.a.createElement(L.a,{store:G},i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.a965418a.chunk.js.map