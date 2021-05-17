(()=>{"use strict";function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,a=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){a=!0,l=e},f:function(){try{s||null==o.return||o.return()}finally{if(a)throw l}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}!function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(t);function r(e){var t=e.keyCode,o=n,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,s=o.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||r.charAt(l):e}));-1!==(l=s.indexOf("_"))&&(s=s.slice(0,l));var a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}var i,l=e(o);try{for(l.s();!(i=l.n()).done;){var s=i.value;s.addEventListener("input",r),s.addEventListener("focus",r),s.addEventListener("blur",r)}}catch(e){l.e(e)}finally{l.f()}}('input[name="phone"]',"+7 (___) ___-__-__");function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var l,s,a,c,d,u,f,p,h,v,y,m,g,b,S,w=new(function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,l=t.infinity,s=void 0!==l&&l,a=t.position,c=void 0===a?0:a,d=t.slidesToShow,u=void 0===d?5:d,f=t.responsive,p=void 0===f?[]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&o||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,infinity:s,widthSlide:Math.floor(100/this.slidesToShow)},this.responsive=p}var t,i;return t=e,(i=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responseInit()}},{key:"responseInit",value:function(){var e,t=this,r=this.slidesToShow,i=this.responsive.map((function(e){return e.breakpoint})),l=Math.max.apply(Math,function(e){if(Array.isArray(e))return o(e)}(e=i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=function(){var e=document.documentElement.clientWidth;if(e<l)for(var n=0;n<i.length;n++)e<i[n]&&(t.slidesToShow=t.responsive[n].slidesShow,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle());else t.slidesToShow=r,t.options.widthSlide=Math.floor(100/t.slidesToShow),t.addStyle()};s(),window.addEventListener("resize",s)}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,t=function(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=n(e))){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,a=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return s=e.done,e},e:function(e){a=!0,l=e},f:function(){try{s||null==o.return||o.return()}finally{if(a)throw l}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.id="sliderCarousel-style",e.textContent="\n            #services{\n            position: relative !important;\n            }\n            .glo-slider{\n            overflow: hidden !important;\n            padding-left: 0 !important;\n            padding-right: 0 !important;\n            }\n            .glo-slider__wrap{\n            transition: transform 0.5s !important;\n            will-change: transform;\n            padding-left: 0 !important;\n            padding-right: 0 !important;\n            position: relative !important;\n            }\n            .glo-slider__item{\n            flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n            margin-left: 0 !important;\n            margin-right: 0 !important;\n            }"),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.prev.innerHTML='<i class="fa fa-chevron-left"></i>',this.next.innerHTML='<i class="fa fa-chevron-right"></i>',this.main.append(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .glo-slider__prev,\n            .glo-slider__next {\n                margin: 0 10px;\n                border: 20px solid transparent;\n                background: transparent;\n            }\n            .glo-slider__next {\n                position: absolute;\n                top: 185px;\n                right: 40px;\n                border-radius: 50%;\n                background-color: #efd308;\n                width: 20px;\n                height: 20px;\n                margin: 0;\n                padding: 0;\n                line-height: 0;\n            }\n            .glo-slider__prev {\n                position: absolute;\n                top: 185px;\n                left: 40px;\n                border-radius: 50%;\n                background-color: #efd308;\n                width: 20px;\n                height: 20px;\n                margin: 0;\n                padding: 0;\n                line-height: 0;\n            }\n        ",document.head.append(e)}}])&&r(t.prototype,i),e}())({main:".services-wrapper",wrap:".services-slider",responsive:[{breakpoint:1280,slidesShow:4},{breakpoint:1024,slidesShow:3},{breakpoint:768,slidesShow:2},{breakpoint:576,slidesShow:1}]});v=document.querySelector(".clubs-list"),y=document.documentElement.clientWidth,m=document.querySelector(".hidden-large"),g=document.querySelector(".hidden-small"),b=document.querySelector(".top-menu"),S=document.querySelector(".popup-menu"),document.getElementById("totop"),totop.style.display="none",document.addEventListener("click",(function(e){e.target.closest(".club-select")?v.querySelector("ul").classList.toggle("show-club-list"):v.querySelector("ul").classList.remove("show-club-list")})),window.addEventListener("resize",(function(){y<768&&(m.style.display="block",g.style.display="none")})),window.addEventListener("scroll",(function(){pageYOffset>700?(b.style.cssText="position: fixed; ",document.body.style.cssText="margin-top: 60px",totop.style.display="block"):totop.style.display="none"})),m.addEventListener("click",(function(){S.style.display="flex",S.addEventListener("click",(function(e){var t=e.target;(t.closest(".close-menu-btn")||t.closest(".scroll"))&&(S.style.display="none")}))})),u=document.getElementById("free_visit_form"),f=document.getElementById("callback_form"),p=document.querySelector(".fixed-gift"),h=document.getElementById("gift"),document.addEventListener("click",(function(e){var t=e.target;if(t.closest(".open-popup")?u.style.display="block":t.closest(".form-content")||(u.style.display="none"),t.closest("header .callback-btn")?f.style.display="block":t.closest(".form-content")||(f.style.display="none"),h)if(t.closest(".fixed-gift"))h.style.display="block",p.style.display="none";else{if(!t.closest(".close-form")&&!t.closest(".close-btn")&&t.closest(".form-content"))return;h.style.display="none"}})),c=document.querySelectorAll("form"),d=document.createElement("div"),c.forEach((function(e){var t=e.querySelectorAll("input"),n=0;e.addEventListener("submit",(function(o){var r=e.innerHTML,i=new FormData(e),l={},s=e.querySelectorAll('input[type="radio"]'),a=e.querySelectorAll('input[type="checkbox"]'),c=document.createElement("span");o.preventDefault(),c.classList.add("span-allert"),c.textContent="Обязательное поле";var u=function(t){var n=document.getElementById("thanks");n.querySelector(".form-content").innerHTML=t,n.style.display="block",d.textContent="",n.addEventListener("click",(function(t){var o=t.target;o.closest(".form-content")&&!o.closest(".close-btn")||(n.style.display="none",e.innerHTML=r)}))},f=function(){t.forEach((function(e){e.value="","checkbox"===e.type&&(e.checked=!1)}))},p=function(){e.textContent="","card_order"===e.id?d.style.cssText+="color: #000;":d.style.cssText+="color: #fff;",e.append(d),d.innerHTML='<div class="sk-flow sk-center">\n            <div class="sk-flow-dot"></div>\n            <div class="sk-flow-dot"></div>\n            <div class="sk-flow-dot"></div>\n        </div>',i.forEach((function(e,t){l[t]=e})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(l).then((function(e){if(200!==e.status)throw new Error("status network not 200");u('<h4>Спасибо!</h4>\n            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p><button class="btn close-btn">OK</button>')})).catch((function(e){return function(e){u('<h4>Извините</h4>\n            <p>Что-то пошло не так...</p><button class="btn close-btn">OK</button>'),console.error(e)}(e)})).finally(f)},h=function(e){e.nextSibling.appendChild(c),c.style.display="block",setTimeout((function(){c.style.display="none"}),2e3)},v=function(e){e.addEventListener("change",(function(){c.style.display="none"}))};s.forEach((function(e){e.checked||n++})),2===n?(s.forEach((function(e){c.textContent="Выберите клуб",h(e),v(e)})),n=0):1===n&&(p(),n=0),a.forEach((function(e){e.checked?p():(h(e),v(e))}))}))})),document.querySelectorAll("input").forEach((function(e){e.addEventListener("input",(function(){var t=e.closest("form").querySelector(".form-btn");"name"===e.getAttribute("name")&&(e.value.length<2&&(t.disabled=!0),e.value.length<51?e.value=e.value.replace(/[^а-яА-Я-\s]/gi,""):e.value=e.value.substring(0,50),e.value=e.value.replace(/(|\s+)\S/g,(function(e){return e.toLowerCase()})),e.value=e.value.replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()}))),"promo"===e.getAttribute("name")&&(e.value=e.value.replace(/[^а-яА-Я\d]/gi,"")),"phone"===e.getAttribute("name")&&e.value.length<18&&(t.disabled=!0)}))})),l=document.querySelector(".main-slider").querySelectorAll(".slide"),s=0,a=function(){l[s].style.display="none",++s>=l.length&&(s=0),l[s].style.display="flex"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(a,e)}(2e3),w.init(),function(){var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),o=document.querySelector(".slider-dots"),r=0;n.forEach((function(){var e=document.createElement("li"),t=document.createElement("button");e.classList.add("dot"),e.append(t),o.append(e),o.firstChild.classList.add("slick-active")}));var i=document.querySelectorAll(".dot"),l=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},a=function(){l(n,r,"active"),l(i,r,"slick-active"),++r>=n.length&&(r=0),s(n,r,"active"),s(i,r,"slick-active")},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(a,t)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".gallery-arrow, .dot, .dot button")&&(l(n,r,"active"),l(i,r,"slick-active"),t.matches(".gallery-next")?r++:t.matches(".gallery-prev")?r--:t.closest(".dot")&&i.forEach((function(e,n){e===t.closest(".dot")&&(r=n)})),r>=n.length&&(r=0),r<0&&(r=n.length-1),s(n,r,"active"),s(i,r,"slick-active"))})),t.addEventListener("mouseover",(function(t){(t.target.matches(".gallery-arrow")||t.target.matches(".dot"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".gallery-arrow")||e.target.matches(".dot"))&&c()})),window.addEventListener("resize",(function(){document.documentElement.offsetWidth,document.querySelector(".slider-arrow prev"),document.querySelector(".slider-arrow next")})),c(1500)}(),function(){var e=document.querySelector('input[name="promo"]'),t=document.getElementById("price-total"),n=document.getElementById("card_order"),o=n.querySelector(".time"),r=n.querySelectorAll("input"),i="mozaika";if(t)for(var l=function(n){var l=r[n],s=o.querySelectorAll("input");l.addEventListener("input",(function(){"mozaika"===l.value?i="mozaika":"schelkovo"===l.value&&(i="schelkovo"),s.forEach((function(e){e.checked&&("mozaika"===i?"1"===e.value?t.textContent=1999:"6"===e.value?t.textContent=9900:"9"===e.value?t.textContent=13900:t.textContent=19900:"1"===e.value?t.textContent=2999:"6"===e.value?t.textContent=14990:"9"===e.value?t.textContent=21990:t.textContent=24990)})),e.value.toUpperCase()==="ТЕЛО2019".toUpperCase()&&(t.textContent=Math.ceil(.7*Number(t.textContent)))}))},s=0;s<7;s++)l(s)}(),function(){var e,t=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,l=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw l}}}}(document.querySelectorAll(".scroll"));try{var n=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var n=t.children[0].getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}}()})();