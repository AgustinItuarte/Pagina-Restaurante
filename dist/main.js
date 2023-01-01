(()=>{"use strict";var e,n,r,t,a,o,i,c,d,s,l,u,p,m,h,f={426:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(81),a=r.n(t),o=r(645),i=r.n(o),c=r(667),d=r.n(c),s=new URL(r(914),r.b),l=i()(a()),u=d()(s);l.push([e.id,"html,\r\nbody {\r\n    max-width: 100%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\n\r\n.pagina-principal {\r\n    display: grid;\r\n    grid-template-rows: 4% 92% 4%;\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #6b7280;\r\n}\r\n\r\n.main-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-image: url("+u+");\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: 40px;\r\n}\r\n\r\n.cont-main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 1800px;\r\n    width: 50%;\r\n    padding: 50px;\r\n    background-color: #6b7280;\r\n    border-radius: 20px;\r\n    gap: 30px;\r\n}\r\n\r\n.cuadros-contenido {\r\n    height: fit-content;\r\n    width: 500px;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    border: 15px solid #1e293b;\r\n    background-color: #475569;\r\n}\r\n\r\n.footer {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #6b7280;\r\n}\r\n\r\nbutton {\r\n    width: 150px;\r\n    height: 100%;\r\n}",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);t&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=t.base?d[0]+t.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=r(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=a(m,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=r(o[i]);n[c].references--}for(var d=t(e,a),s=0;s<o.length;s++){var l=r(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},914:(e,n,r)=>{e.exports=r.p+"db6ac7de30b5c9c30d89.jpg"}},b={};function v(e){var n=b[e];if(void 0!==n)return n.exports;var r=b[e]={id:e,exports:{}};return f[e](r,r.exports,v),r.exports}v.m=f,v.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return v.d(n,{a:n}),n},v.d=(e,n)=>{for(var r in n)v.o(n,r)&&!v.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var n=v.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(914),n=v(379),r=v.n(n),t=v(795),a=v.n(t),o=v(569),i=v.n(o),c=v(565),d=v.n(c),s=v(216),l=v.n(s),u=v(589),p=v.n(u),m=v(426),(h={}).styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),r()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals,function(){const n=document.querySelector("#contenido"),r=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("button"),c=document.createElement("button"),d=document.createElement("button"),s=document.createElement("div"),l=document.createElement("h1"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div");n.appendChild(r),r.appendChild(t),r.appendChild(a),r.appendChild(o),t.appendChild(i),t.appendChild(c),t.appendChild(d),a.appendChild(s),s.appendChild(l),s.appendChild(u),s.appendChild(p),s.appendChild(m),r.classList.add("pagina-principal"),t.classList.add("header"),a.classList.add("main-content"),s.classList.add("cont-main"),u.classList.add("cuadros-contenido"),p.classList.add("cuadros-contenido"),m.classList.add("cuadros-contenido"),o.classList.add("footer"),i.classList.add("btn-inicio"),c.classList.add("btn-menu"),d.classList.add("btn-contacto"),i.textContent="Inicio",c.textContent="Menu",d.textContent="Contacto",l.textContent="Bienvenidos",u.innerHTML="<h2>El Vino</h2> <br> El Restaurante La Perdiz nace a principios del año 2000 como un desafío de su propietario. Luego de haber estudiado y trabajado diez años fuera del país, aprendió que se puede lograr un buen servicio y mejor calidad sin tener que dañar el bolsillo del cliente.",p.innerHTML="<h2>Horarios</h2> <br> Domingo: 8am - 8pm <br> Lunes: 6am - 6pm <br> Lunes: 6am - 6pm <br> Martes: 6am - 6pm <br> Miercoles: 6am - 10pm <br> Jueves: 6am - 10pm <br> Viernes: 6am - 10pm <br> Viernes: 6am - 10pm",m.innerHTML="<h2>Localizacion</h2> <br> Guipúzcoa 350, Montevideo 11300 Uruguay",a.style.backgroundImage=`url(${e})`}()})();