(this.webpackJsonpweatherr=this.webpackJsonpweatherr||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/spinner.b101b486.svg"},19:function(e,t,a){e.exports=a(49)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),o=(a(24),a(3)),i=a.n(o),u=a(4),l=a(2),h=(a(26),a(27),a(16)),m=a.n(h),g=a(5),f=m.a.create({baseURL:g.BASE_URL,headers:{"API-KEY":g.API_KEY}}),p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return f.get("weather?q=".concat(e,"&units=metric&appid=").concat(g.API_KEY,"&lang=").concat(t)).then((function(e){return e.data}))},d=function(e){var t=e.setWeather,a=e.setIsFetching,c=e.language,s=Object(n.useState)(""),o=Object(l.a)(s,2),h=o[0],m=o[1],g="en"===c?"Search weather":"\u0418\u0441\u043a\u0430\u0442\u044c \u043f\u043e\u0433\u043e\u0434\u0443",f=function(){var e=Object(u.a)(i.a.mark((function e(n){var r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==n.key){e.next=11;break}if(r=h.trim()){e.next=4;break}return e.abrupt("return");case 4:return a(!0),e.next=7,p(r,c);case 7:s=e.sent,a(!1),t(s),m("");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",className:"search__bar",placeholder:g,value:h,onChange:function(e){return m(e.target.value)},onKeyPress:f}))},v=a(18),w=Object(v.a)(r.a,{weather:{},isFetching:!1,language:"en",error:{}},{setWeather:function(e,t){e.setState({weather:t})},setError:function(e,t){e.setState({error:t})},setIsFetching:function(e,t){e.setState({isFetching:t})},toggleLang:function(e,t){e.setState({language:t})}}),E=(a(45),a(17)),b=a.n(E);var _=function(e){var t=e.size;return r.a.createElement("div",{className:"spinner"},r.a.createElement("img",{className:"spinner__image",src:b.a,width:t,alt:"loading progress spinner"}))},y=(a(46),function(e){var t=e.city,a=e.country;return r.a.createElement("div",{className:"location"},r.a.createElement("span",{className:"location__name"},"".concat(t,", ").concat(a)))}),N=(a(47),function(e){var t=e.temperature,a=e.weather,n=Math.round(t),c=function(e){var t="";return e>0?t="+":e<0&&(t="-"),t}(n);return r.a.createElement("div",{className:"weather"},r.a.createElement("div",{className:"weather__temperature"},"".concat(c).concat(n,"\xb0C")),r.a.createElement("div",{className:"weather__description"},a))}),k=function(e){var t=e.store,a=e.isWeatherDefined;return r.a.createElement("div",{className:"content"},a()?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{city:t.name,country:t.sys.country}),r.a.createElement(N,{temperature:t.main.temp,weather:t.weather[0].description})):"")},x=(a(48),function(e){var t=e.language,a=e.toggleLang;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__container"},r.a.createElement("span",{className:"header__logo"},"Weatherr"),r.a.createElement("button",{type:"button",className:"header__toggle","aria-label":"change language",onClick:function(){a("en"===t?"ru":"en")}},"en"===t?"ru":"en")))});var I=function(){var e=w(),t=Object(l.a)(e,2),a=t[0],c=t[1],s=function(){return 0!==Object.keys(a.weather).length},o=function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.weather.name){e.next=7;break}return c.setIsFetching(!0),e.next=4,p(a.weather.name,a.language);case 4:t=e.sent,c.setWeather(t),c.setIsFetching(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[a.language]),r.a.createElement("div",{className:"App ".concat(function(){if(!s())return"";var e="",t=a.weather.weather[0].main.toLowerCase(),n=Math.round(a.weather.main.temp);return"rain"===t&&(e=t),n>=28&&(e="hot"),n<=5&&(e="cold"),e}())},r.a.createElement(x,{language:a.language,toggleLang:c.toggleLang}),r.a.createElement("div",{className:"App__wrapper"},r.a.createElement(d,{setWeather:c.setWeather,setIsFetching:c.setIsFetching,language:a.language}),a.isFetching?r.a.createElement(_,{size:100}):r.a.createElement(k,{store:a.weather,isWeatherDefined:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t){e.exports={API_KEY:"cb10a7cb11e6b08e1f61144ad85f7af3",BASE_URL:"https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/"}}},[[19,1,2]]]);
//# sourceMappingURL=main.8e6e07b0.chunk.js.map