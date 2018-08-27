urlFormMini.innerText='http://bit.ly/2LtI8cv';
urlForm.innerText='http://nekro-sandbox.netlify.com/browsercheck';

function validateURL(e){
	let url='http://nekro-sandbox.netlify.com/browsercheck';
	let minifiedUrl='http://bit.ly/2LtI8cv';

	let mail=email.value.trim();
	let op=idOperations.value.trim();
	tituloDatosRelevados.innerText='Datos Relevados';

	urlForm.innerText=url;
	urlFormMini.innerText=minifiedUrl;

	if(op==''){
		return false
	}else{
		op=stringToSlug(op);
		idOperations.value=op;
		let parameters='op='+op;
		parameters+=';m='+mail;
		parameters=encodeURI(btoa(parameters));

		url=url+'?id='+parameters;
		urlForm.innerText=url;
		urlFormMini.innerText='';
		shortenUrl(url,'urlFormMini');
		checkRelevamientos(op,mail);
	}
}

function checkRelevamientos(op,mail){
	tituloDatosRelevados.innerText+=(op!=''?' para id: '+op:'')+(mail!=''?' y mail: '+mail:'');
}

email.addEventListener('blur',validateURL);
idOperations.addEventListener('blur',validateURL);

urlButton.addEventListener('click',copyClip);

urlButtonMini.addEventListener('click',copyClip);

function copyClip(data){
	switch (data.target.id){
		case 'urlButton':
			copyToClipboard(urlForm.innerText);
			generateToast('Datos copiados',urlForm.innerText,"",duration="10000",'success',"nfc-bottom-right",true,true);
			break;
		case 'urlButtonMini':
			copyToClipboard(urlFormMini.innerText);
			generateToast('Datos copiados',urlFormMini.innerText,"",duration="10000",'success',"nfc-bottom-right",true,true);
			break;
	}
}

function generateToast(title="titulo",message="mensaje",iconUrl="",duration="3000",theme='success',position="nfc-bottom-right",displayClose=true,closeOnClick=true){
	if(typeof notificationToastStyle != 'undefined'){document.head.removeChild(notificationToastStyle);}
	var notifIconSucess='urL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==")';
	var notifIconInfo='urL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=")';
	var notifIconWarning='urL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=")';
	var notifIconError='urL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=")';
	
	var notifIcon='url("'+iconUrl+'");background-size: 35px 50px;';

	// Ejemplo con soporte HTML! '<img src="https://raw.githubusercontent.com/Warframe-Community-Developers/warframe-worldstate-parser/master/resources/weapon_skin_thumb.png" height="40px" style="float: left">prueba'
	if(iconUrl!=''){
		switch(theme){
			case "success":
				notifIconSucess=notifIcon;
				break;		
			case "info":
				notifIconInfo=notifIcon;
				break;
			case "warning":
				notifIconWarning=notifIcon;
				break;
			case "error":
				notifIconError=notifIcon;
				break;
			default:
		}
	}
	var styleData='.ncf-container{font-size:14px;box-sizing:border-box;position:fixed;z-index:999}.ncf-container.nfc-top-left{top:12px;left:12px}.ncf-container.nfc-top-right{top:12px;right:12px}.ncf-container.nfc-bottom-right{bottom:12px;right:12px}.ncf-container.nfc-bottom-left{bottom:12px;left:12px}@media (max-width:767px){.ncf-container{left:0;right:0}}.ncf-container .ncf{background:#fff;transition:.3s ease;position:relative;pointer-events:auto;overflow:hidden;margin:0 0 6px;padding:30px;width:300px;border-radius:3px 3px 3px 3px;box-shadow:0 0 12px #999;color:#000;opacity:.9;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=90);filter:alpha(opacity=90);background-position:15px!important;background-repeat:no-repeat!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ncf-container .ncf:hover{box-shadow:0 0 12px #000;opacity:1;cursor:pointer}.ncf-container .ncf .ncf-title{font-weight:700;font-size:16px;text-align:left;margin-top:0;margin-bottom:6px;word-wrap:break-word}.ncf-container .ncf .nfc-message{margin:0;text-align:left;word-wrap:break-word}.ncf-container .success{background:#51a351;color:#fff;padding:15px 15px 15px 50px;background-image:'+notifIconSucess+'}.ncf-container .info{background:#2f96b4;color:#fff;padding:15px 15px 15px 50px;background-image:'+notifIconInfo+'}.ncf-container .warning{background:#f87400;color:#fff;padding:15px 15px 15px 50px;background-image:'+notifIconWarning+'}.ncf-container .error{background:#bd362f;color:#fff;padding:15px 15px 15px 50px;background-image:'+notifIconError+'!important}.ncf-container button{position:relative;right:-.3em;top:-.3em;float:right;font-weight:700;color:#fff;text-shadow:0 1px 0 #fff;opacity:.8;line-height:1;font-size:16px;padding:0;cursor:pointer;background:transparent;border:0}.ncf-container button:hover{opacity:1}';
	var styleNode = document.createElement('style');
	styleNode.type = 'text/css';
	styleNode.id = "notificationToastStyle";
	styleNode.innerText = styleData;
	document.head.appendChild(styleNode);
	window.createNotificationToast({
		closeOnClick: closeOnClick,
		displayCloseButton: displayClose,
		positionClass: position,
		showDuration: duration,
		theme: theme
	})({
		title: title,
		message: message
	});
}
!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n,e){e(1),t.exports=e(4)},function(t,n,e){"use strict";var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};e(2);var o=e(3);!function(t){function n(t){return t=i({},c,t),function(t){return["nfc-top-left","nfc-top-right","nfc-bottom-left","nfc-bottom-right"].indexOf(t)>-1}(t.positionClass)||(console.warn("An invalid notification position class has been specified."),t.positionClass=c.positionClass),t.onclick&&"function"!=typeof t.onclick&&(console.warn("Notification on click must be a function."),t.onclick=c.onclick),"number"!=typeof t.showDuration&&(t.showDuration=c.showDuration),(0,o.isString)(t.theme)&&0!==t.theme.length||(console.warn("Notification theme must be a string with length"),t.theme=c.theme),t}function e(t){return t=n(t),function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.title,i=n.message,c=r(t.positionClass);if(!e&&!i)return console.warn("Notification must contain a title or a message!");var a=(0,o.createElement)("div","ncf",t.theme);if(!0===t.closeOnClick&&a.addEventListener("click",function(){return c.removeChild(a)}),t.onclick&&a.addEventListener("click",function(n){return t.onclick(n)}),t.displayCloseButton){var s=(0,o.createElement)("button");s.innerText="X",!1===t.closeOnClick&&s.addEventListener("click",function(){return c.removeChild(a)}),(0,o.append)(a,s)}if((0,o.isString)(e)&&e.length&&(0,o.append)(a,(0,o.createParagraph)("ncf-title")(e)),(0,o.isString)(i)&&i.length&&(0,o.append)(a,(0,o.createParagraph)("nfc-message")(i)),(0,o.append)(c,a),t.showDuration&&t.showDuration>0){var l=setTimeout(function(){c.removeChild(a),0===c.querySelectorAll(".ncf").length&&document.body.removeChild(c)},t.showDuration);(t.closeOnClick||t.displayCloseButton)&&a.addEventListener("click",function(){return clearTimeout(l)})}}}function r(t){var n=document.querySelector("."+t);return n||(n=(0,o.createElement)("div","ncf-container",t),(0,o.append)(document.body,n)),n}var c={closeOnClick:!0,displayCloseButton:!1,positionClass:"nfc-top-right",onclick:!1,showDuration:3500,theme:"success"};t.createNotificationToast?console.warn("Window already contains a create notification Toast function. Have you included the script twice?"):t.createNotificationToast=e}(window)},function(t,n,e){"use strict";!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}if(!(void 0===window.Element||"classList"in document.documentElement)){var n=Array.prototype,e=n.push,i=n.splice,o=n.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);i.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,function(t,n,e){Object.defineProperty?Object.defineProperty(t,n,{get:e}):t.__defineGetter__(n,e)}(Element.prototype,"classList",function(){return new t(this)})}}()},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=n.partial=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];return t.apply(void 0,e.concat(i))}},o=(n.append=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];return e.forEach(function(n){return t.appendChild(n)})},n.isString=function(t){return"string"==typeof t},n.createElement=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),i=1;i<n;i++)e[i-1]=arguments[i];var o=document.createElement(t);return e.length&&e.forEach(function(t){return o.classList.add(t)}),o}),r=function(t,n){return t.innerHTML=n,t},c=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),c=1;c<n;c++)e[c-1]=arguments[c];return i(r,o.apply(void 0,[t].concat(e)))};n.createParagraph=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return c.apply(void 0,["p"].concat(n))}},function(t,n){}]);