(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(5),r=n.n(o),l=(n(17),n(9)),s=n(6),c=n(7),d=n(2),u=n(11),m=n(10),h=(n(18),n(8)),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(s.a)(this,n),a=t.call(this);var i=JSON.parse(localStorage.getItem("toDoList"))||[];return a.state={toDoList:i,title:"",description:"",deadline:null,sortBy:"c-asc",filter:"none",edit:0},a.handleAddItem=a.handleAddItem.bind(Object(d.a)(a)),a.editItem=a.editItem.bind(Object(d.a)(a)),a.exportFile=a.exportFile.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.toDoList;switch(this.state.filter){case"active":t=t.filter((function(e){return"active"===e.status}));break;case"done":t=t.filter((function(e){return"done"===e.status}))}switch(this.state.sortBy){case"c-asc":t.sort((function(e,t){return e.creation-t.creation}));break;case"c-desc":t.sort((function(e,t){return t.creation-e.creation}));break;case"d-asc":t.sort((function(e,t){return e.deadline-t.deadline}));break;case"d-desc":t.sort((function(e,t){return t.deadline-e.deadline}))}var n=t.map((function(t,n,a){return i.a.createElement("div",{key:n},n,": Title: ",t.title,i.a.createElement("br",null),"Status: ",t.status," ",i.a.createElement("br",null),"Description: ",t.description,i.a.createElement("br",null),"Creation: ",new Date(t.creation).toLocaleString(),i.a.createElement("br",null),"Deadline: ",new Date(t.deadline).toLocaleString(),i.a.createElement("br",null),i.a.createElement("button",{name:"done",value:t.creation,onClick:e.editItem},"Done")," \xa0",i.a.createElement("button",{name:"edit",value:t.creation,onClick:e.editItem},"Edit"),"\xa0",i.a.createElement("button",{name:"delete",value:t.creation,onClick:e.editItem},"Delete"),i.a.createElement("hr",null))}));return i.a.createElement("div",{className:"App"}," ",i.a.createElement("hr",null),this.state.edit?"Edit {this.state.edit}":"Add new toDo Item",i.a.createElement("hr",null),"Title: \xa0",i.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,required:!0,onChange:function(t){return e.setState({title:t.target.value})}}),i.a.createElement("br",null),"Description: ",i.a.createElement("br",null),i.a.createElement("textarea",{name:"description",value:this.state.description,placeholder:"description",cols:"50",onChange:function(t){return e.setState({description:t.target.value})}}),i.a.createElement("br",null),i.a.createElement(h.a,{calendarType:"US",value:this.state.deadline,onChange:function(t){return e.setState({deadline:t})}}),i.a.createElement("button",{name:"add",value:this.state.edit,onClick:this.handleAddItem},this.state.edit?"Modify":"Add")," \xa0",i.a.createElement("button",{name:"cancel",onClick:function(t){return e.setState({title:"",description:"",deadline:null,edit:0})}},"Cancel")," \xa0",i.a.createElement("hr",null),"Filter ",i.a.createElement("select",{name:"filter",value:this.state.filter,onChange:function(t){return e.setState({filter:t.target.value})}},i.a.createElement("option",{value:"none"},"showall"),i.a.createElement("option",{value:"active"},"active"),i.a.createElement("option",{value:"done"},"done"))," \xa0 | \xa0 Sort by ",i.a.createElement("select",{name:"sort",value:this.state.sortBy,onChange:function(t){return e.setState({sortBy:t.target.value})}},i.a.createElement("option",{value:"c-asc"},"creation(asc)"),i.a.createElement("option",{value:"c-desc"},"creation(desc)"),i.a.createElement("option",{value:"d-asc"},"deadline(asc)"),i.a.createElement("option",{value:"d-desc"},"deadline(desc)")),i.a.createElement("br",null),i.a.createElement("button",{name:"save",onClick:this.exportFile},"Save"),i.a.createElement("hr",null),n)}},{key:"handleAddItem",value:function(e){if(""!==this.state.title){var t,n;t=null!==this.state.deadline?this.state.deadline.getTime():Date.now()+6048e5;var a=[];if(0===parseInt(e.target.value))n={title:this.state.title,description:this.state.description,creation:Date.now(),deadline:t,status:"active"},a=[].concat(Object(l.a)(this.state.toDoList),[n]);else{a=this.state.toDoList;var i=parseInt(e.target.value),o=a.findIndex((function(e){return e.creation===i}));if(o>=0){var r=a[o];r.title=this.state.title,r.description=this.state.description,r.deadline=this.state.deadline.getTime()}}this.setState({title:"",description:"",deadline:null,edit:0}),this.setState({toDoList:a}),localStorage.setItem("toDoList",JSON.stringify(a))}else alert("Title is empty")}},{key:"editItem",value:function(e){var t=parseInt(e.target.value),n=this.state.toDoList,a=n.findIndex((function(e){return e.creation===t}));if(!(a<0)){if("delete"===e.target.name)n.splice(a,1);else if("done"===e.target.name)n[a].status="done";else if("edit"===e.target.name){var i=n[a];return void this.setState({title:i.title,creation:i.creation,description:i.description,deadline:new Date(i.deadline),edit:i.creation})}this.setState({toDoList:n}),localStorage.setItem("toDoList",JSON.stringify(n))}}},{key:"exportFile",value:function(e){}}]),n}(i.a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/classExamples/toDoList/step4",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/classExamples/toDoList/step4","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.fef2fee4.chunk.js.map