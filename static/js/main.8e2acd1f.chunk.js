(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(7),s=c.n(r),l=(c(12),c(13),c(5)),i=c(6),o=c(0);var d=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)([]),s=Object(i.a)(r,2),d=s[0],u=s[1];function b(e){return c.map((function(t,c){if(e===t.firstName[0])return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("h4",{id:t.lastName,children:[t.firstName,"\xa0",t.lastName]}),Object(o.jsx)("input",{type:"radio",name:t.id,id:t.id+1,value:"false",onChange:function(e){!function(e,t){t.select=!1,localStorage.removeItem(t.id),console.log(d);var c=d.findIndex((function(e){return JSON.parse(e).id===t.id}));console.log(c);var a=Object(l.a)(d);a.splice(c,1),u(a);var n=document.getElementById(t.lastName);document.getElementById(t.id+1).checked="checked",n.style.color="black"}(0,t)},defaultChecked:!0}),Object(o.jsx)("label",{htmlFor:t.id+1,children:"No Active"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"radio",name:t.id,id:t.id,value:"true",onChange:function(e){!function(e,t){t.select=!0;var c=document.getElementById(t.lastName);document.getElementById(t.id).checked="checked",c.style.color="blue",u((function(e){return[].concat(Object(l.a)(e),[JSON.stringify(t)])})),localStorage.setItem(t.id,JSON.stringify(t))}(0,t)}}),Object(o.jsx)("label",{htmlFor:t.id,children:"Active"})]})},c)}))}function j(e){(e=new Date(e)).toISOString().substring(0,10);var t=e.getFullYear(),c=e.getMonth()+1,a=e.getDate();switch(a<10&&(a="0"+a),c){case 1:c="January";break;case 2:c="February";break;case 3:c="March";break;case 4:c="April";break;case 5:c="May";break;case 6:c="June";break;case 7:c="July";break;case 8:c="August";break;case 9:c="September";break;case 10:c="October";break;case 11:c="November";break;case 12:c="December";break;default:console.error("eror")}return Object(o.jsx)(o.Fragment,{children:t+"-"+c+"-"+a})}return Object(a.useEffect)((function(){fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(a.useEffect)((function(){if(localStorage.length)for(var e=0;e<localStorage.length;e++){var t=document.getElementById(localStorage.key(e));if(t){t.checked="checked";var c=JSON.parse(localStorage[localStorage.key(e)]);document.getElementById("".concat(c.lastName)).style.color="blue"}}})),Object(a.useEffect)((function(){for(var e=[],t=0;t<localStorage.length;t++)e.push(localStorage[localStorage.key(t)]);u(e)}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"colum-left",children:[Object(o.jsx)("h2",{children:"Employees"}),Object(o.jsx)("div",{className:"item",children:c.length?"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((function(e){return Object(o.jsxs)("div",{className:"item_list",children:[Object(o.jsx)("h2",{children:e}),b(e).every((function(e){return void 0===e}))?Object(o.jsx)("p",{children:"----"}):b(e)]})})):null})]}),Object(o.jsxs)("div",{className:"colum-right",children:[Object(o.jsx)("h2",{children:"Employees birthday"}),Object(o.jsx)("div",{className:"savedData",children:function(){var e=[];if(0!==d.length){for(var t=0;t<d.length;t++){var c=JSON.parse(d[t]);e.push(Object(o.jsx)("div",{children:Object(o.jsxs)("h4",{className:"selectedData",children:[c.firstName," ",c.lastName," --- ",j(c.dob)]})}))}return e}return Object(o.jsx)("h4",{className:"selectedData",children:"Employees List is empty"})}()})]})]})};var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.8e2acd1f.chunk.js.map