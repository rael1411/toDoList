!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function d(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],c=n[l]||0,s="".concat(l," ").concat(c);n[l]=c+1;var p=d(s),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:s,updater:g(u,t),references:1}),o.push(s)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,p=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function g(e,t){var n,o,r;if(t.singleton){var i=h++;n=f||(f=c(t)),o=u.bind(null,n,i,!1),r=u.bind(null,n,i,!0)}else n=c(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=d(n[o]);a[r].references--}for(var i=l(e,t),c=0;c<n.length;c++){var s=d(n[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,"#creator{\n    margin-top: 40px;\n    width:20%;\n    height: 400px;\n    background-color: rgb(253, 243, 242);\n    border-radius: 25px;\n    padding: 15px;\n    display: inline-block;\n    text-align: center;\n    position: relative;\n}\n#description{\n    margin-top: 20px;\n    width: 90%;\n    height: 150px;\n    text-align: left;\n    resize: none;\n}\n.formElement{\n    margin: 5px;\n    position: relative;\n    width: 90%;\n}\n#dateDesc{\n    margin-bottom: 3px;\n    font-size: 12px;\n}\n#submitButton{\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    width: 30%;\n    height: 5%;\n}\n#tasksContainer{\n    margin-top: 40px;\n    float: right;\n    position: relative;\n    width: 70%;\n    border-radius: 25px;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-row-gap: 10px;\n    grid-column-gap: 7px;\n    right: 5px;\n}\n#content{\n    padding: 20px;\n    width: 100%;\n    height: 100%;\n}\n#dueDate{\n    width: 80%;\n}\n#priority{\n    width: 30%;\n}\n.task{\n    position: relative;\n    height: 170px;\n    border-radius: 15px;\n}\n.name{\n    width: 80%;\n    text-align: center;\n}\n.dueDate{\n    position: absolute;\n    font-size: 12px;\n    left: 5px;\n    bottom: 5px;\n}\n.description {\n    height: 40%;\n    font-size: 11px;\n    overflow: hidden;\n}\n.deleteButton {\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    color: red;\n    font-weight: bold;\n}\n.completed {\n    position: absolute;\n    right: 10px;\n    bottom: 3px;\n    height: 20px;\n    width: 20px;\n    background-color: whitesmoke;\n    color: green;\n    text-align: center;\n    font-size: 18px;\n}\n#projectContainer{\n    top: 10px;\n    left: 10px;\n    color: black;\n    display: inline;\n}\n#container{\n    display: inline;\n}\n.dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n.dropdown {\n    position: relative;\n    display: inline-block;\n    float: right;\n  }\n  .dropdownContent {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  .dropdownContent p {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  .dropdownContent p:hover {background-color: #ddd;}\n\n  .dropdown:hover .dropdownContent {display: block;}\n  \n  .dropdown:hover .dropbtn {background-color: #3e8e41;}",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var a,d,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";n.r(t);const o=function(e){e.preventDefault();let t=((e,t,n,o,r="no")=>(""===e&&(e="Untitled"),{name:e,description:t,dueDate:n,priority:o,completed:r}))(taskName.value,description.value,dueDate.value,priority.value),n=document.getElementById("projectName").textContent,o=l.find(e=>e.name===n);o.tasks.push(t),localStorage.setItem("projects",JSON.stringify(l)),p(),s(l,o),u(),document.getElementById("tasksContainer").innerHTML="",o.tasks.forEach((e,t)=>{u(e,t)})},r=function(e){let t=document.getElementById("projectName").textContent,n=l.find(e=>e.name===t);n.tasks.splice(e.target.parentElement.id,1),localStorage.setItem("projects",JSON.stringify(l)),document.getElementById("tasksContainer").innerHTML="",n.tasks.forEach((e,t)=>{u(e,t)})},i=function(e){document.getElementById("tasksContainer").innerHTML="";let t=document.getElementById("projectName").textContent,n=l.find(e=>e.name===t);"no"===n.tasks[e.target.parentElement.id].completed?n.tasks[e.target.parentElement.id].completed="yes":n.tasks[e.target.parentElement.id].completed="no",localStorage.setItem("projects",JSON.stringify(l)),n.tasks.forEach((e,t)=>{u(e,t)})},a=(e,t=[])=>({name:e,tasks:t}),d=function(){let e=prompt("What do you want to call your project?");l.push(a(e)),localStorage.setItem("projects",JSON.stringify(l)),s(l,l[l.length-1]),document.getElementById("tasksContainer").innerHTML="",l[s.length-1].forEach((e,t)=>{u(e,t)})};if(localStorage.getItem("projects")){console.log("storage found");l=JSON.parse(window.localStorage.getItem("projects"))}else{console.log("storage not found");var l;(l=[]).push(a("Default",[]))}const c=function(e){let t=l.find(t=>t.name===e.target.textContent);p(),s(l,t),document.getElementById("tasksContainer").innerHTML="",t.tasks.forEach((e,t)=>{u(e,t)})},s=function(e,t){let n=document.getElementById("projectContainer");n.innerHTML="";let o=document.createElement("span");o.textContent="Current project: ";let r=document.createElement("span");r.textContent=t.name,r.id="projectName",r.style.color="green",n.appendChild(o),n.appendChild(r);let i=document.createElement("button");i.textContent="NEW",i.addEventListener("click",d),n.appendChild(i);let a=document.createElement("div");a.classList.add("dropdown");let l=document.createElement("button");l.classList.add("dropbtn");let s=document.createElement("div");s.classList.add("dropdownContent"),n.appendChild(a),a.appendChild(l),l.textContent="Choose",a.appendChild(s);for(let t in e){let n=document.createElement("p");n.textContent=e[t].name,n.addEventListener("click",c),s.append(n)}},p=function(){let e=document.getElementById("container");e.innerHTML="";let t=document.createElement("br");e.appendChild(t);let n=document.createElement("form");n.id="creator";let r=document.createElement("h4");r.classList.add("formElement"),r.textContent="Create a new task",e.appendChild(n),n.appendChild(r);let i=document.createElement("input");i.setAttribute("placeholder","Name of the task"),i.id="taskName",i.classList.add("formElement"),n.appendChild(i);let a=document.createElement("textarea");a.setAttribute("placeholder","Short description here..."),a.id="description",a.classList.add("formElement"),n.appendChild(a);let d=document.createElement("input");d.setAttribute("type","date"),d.id="dueDate",d.classList.add("formElement"),n.appendChild(d);let l=document.createElement("select");l.id="priority",l.classList.add("formElement");let c=document.createElement("label");c.setAttribute("for","priority"),c.textContent="Priority";let s=document.createElement("option");s.textContent="Medium",s.setAttribute("value","medium");let p=document.createElement("option");p.textContent="High",p.setAttribute("value","high");let u=document.createElement("option");u.textContent="Low",u.setAttribute("value","low"),n.appendChild(c),n.appendChild(l),l.appendChild(p),l.appendChild(s),l.appendChild(u);let m=document.createElement("button");m.textContent="Add",m.id="submitButton",m.classList.add("formElement"),n.appendChild(m),m.addEventListener("click",o)},u=function(e,t){const n=document.getElementById("tasksContainer"),o=document.createElement("div");o.id=t,o.classList.add("task"),n.appendChild(o);for(let t in e){let n=document.createElement("p");if("dueDate"===t&&""!==e[t]?n.textContent="Due "+e[t]:n.textContent=e[t],"priority"===t)switch(n.textContent="",e[t]){case"high":o.style.backgroundColor="FireBrick";break;case"medium":o.style.backgroundColor="orange";break;case"low":o.style.backgroundColor="lightgreen"}"completed"===t&&(n.textContent="","no"!==e[t]&&(n.innerHTML="&#10004;"),n.addEventListener("click",i)),n.classList.add(t),o.appendChild(n)}let a=document.createElement("button");a.classList.add("deleteButton"),a.addEventListener("click",r),a.textContent="X",o.appendChild(a)};n(0);s(l,l[0]),p()}]);