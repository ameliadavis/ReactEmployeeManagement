(this.webpackJsonpreacthomework=this.webpackJsonpreacthomework||[]).push([[0],{24:function(e,t,a){e.exports=a(50)},50:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(19),c=a.n(r),o=a(23),s=a(22),m=function(e){return l.a.createElement("tbody",null,l.a.createElement("tr",{key:e.email},l.a.createElement("td",null,e.first),l.a.createElement("td",null,e.last),l.a.createElement("td",null,e.email),l.a.createElement("td",null,e.dob),l.a.createElement("td",null,e.cell),l.a.createElement("td",null,e.state)))},u=a(51),i=a(52),d=a(53);var f=function(e){return l.a.createElement("nav",{class:"navbar navbar-light bg-light justify-content-between"},l.a.createElement("h1",{class:"navbar-brand"},"Employee Information"),l.a.createElement(u.a,{class:"form-inline"},l.a.createElement(i.a,{class:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:e.search,onChange:e.handleInputChange}),l.a.createElement(d.a,{class:"btn btn-outline-success my-2 my-sm-0",type:"submit",onClick:e.handleFormSubmit},"Search")))},h=(a(31),a(20)),E=a.n(h),b=function(){return E.a.get("https://randomuser.me/api/?results=35&nat=US")},p=a(21),v=a.n(p),g=a(54),S=function(){var e=Object(n.useState)({users:[],filteredState:[],searchTerm:""}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=a.users,u=a.filteredState,i=a.searchTerm;Object(n.useEffect)((function(){b().then((function(e){console.log(e.data.results),r({users:e.data.results,filteredState:e.data.results})})).catch((function(e){return console.log(e)}))}),[]);return l.a.createElement("wrapper",null,l.a.createElement(f,{searchTerm:i,handleInputChange:function(e){return r(Object(o.a)({},a,{searchTerm:e.target.value}))},handleFormSubmit:function(e){e.preventDefault(),function(e){console.log(e);var t=c.filter((function(t){var a=Object.values(t).join("").toLowerCase();return console.log(a),console.log(a.indexOf(e)),-1!==a.indexOf(e.toLowerCase())}));r({filteredState:t})}(i)}}),l.a.createElement("div",{class:"jumbotron jumbotron-fluid"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card-body"},l.a.createElement(g.a,{bordered:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"First Name"),l.a.createElement("th",{scope:"col"},"Last Name"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col"},"DOB"),l.a.createElement("th",{scope:"col"},"Cell"),l.a.createElement("th",{scope:"col"},"State",l.a.createElement("button",{style:{float:"right"},onClick:function(e){console.log(u);var t=u.sort((function(e,t){if(e.location.state<t.location.state)return-1}));console.log(t),r({filteredState:t})}}," Sort")," "))),u.map((function(e){return l.a.createElement(m,{key:e.email,first:e.name.first,last:e.name.last,email:e.email,dob:v()(e.dob.date,"YYYY-MM-DDT").format("MM-DD-YYYY"),cell:e.cell,state:e.location.state})}))))))))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.61df457f.chunk.js.map