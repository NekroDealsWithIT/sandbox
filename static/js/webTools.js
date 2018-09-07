/*
window.onbeforeunload = function(){
	document.body.removeChild(document.querySelector('canvas'));
}
// OR
window.addEventListener("beforeunload", function(e){
	document.body.removeChild(document.querySelector('canvas'));
}, false);
*/
function onunload(e){
	canvas = document.querySelector('canvas');
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	document.body.removeChild(document.querySelector('canvas'));
}
document.body.addEventListener('close',e=>{onunload(e);})

var fetchedTools=[];
var defaultToolsArr=[
	 {'check':'true','autor':'nekro','id':'0','lenguajes':['json'],'title':'jsonviewer','url':'http://jsonviewer.stack.hu','desc':'Json parser','type':'JSON','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'1','lenguajes':[],'title':'utf8icons','url':'https://www.utf8icons.com','desc':'Utf 8 icons','type':'Icons','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'2','lenguajes':['http'],'title':'htaccessredirect','url':'https://www.htaccessredirect.net','desc':'Htta generator','type':'Htta','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'3','lenguajes':[],'title':'mxtoolbox','url':'https://mxtoolbox.com/NetworkTools.aspx','desc':'Ip toolbox','type':'Ip Analisis','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'4','lenguajes':['json'],'title':'ip-tracker','url':'https://www.ip-tracker.org/locator/ip-lookup.php','desc':'Ip toolbox','type':'Ip Analisis','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'5','lenguajes':['json'],'title':'ipinfo.io','url':'http://ipinfo.io','desc':'Ip information','type':'Ip Analisis','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'6','lenguajes':['json'],'title':'Google geocode','url':'http://maps.googleapis.com/maps/api/geocode/json?latlng=[lat],[lon]&sensor=true','desc':'Reverse GEO','type':'GEO Location','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'7','lenguajes':[],'title':'histats','url':'http://www.histats.com','desc':'Counters','type':'Counter','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'8','lenguajes':['javascript','css','html'],'title':'jsfiddle','url':'https://jsfiddle.net','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'9','lenguajes':['javascript','css','html'],'title':'cssdeck','url':'http://cssdeck.com','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'A','lenguajes':['javascript','css','html'],'title':'Plunker','url':'http://next.plnkr.co','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'B','lenguajes':['javascript','css','html'],'title':'liveweave','url':'https://liveweave.com','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'C','lenguajes':['regex'],'title':'debuggex','url':'https://www.debuggex.com','desc':'Graficador de REGEX','type':'REGEX','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'D','lenguajes':[],'title':'bitly','url':'https://app.bitly.com','desc':'Acortador de links','type':'Links','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'E','lenguajes':[],'title':'browserling','url':'https://www.browserling.com','desc':'Pruebas crossBrowser','type':'QA','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'F','lenguajes':['javascript','css','html'],'title':'cleancss','url':'https://www.cleancss.com','desc':'Caja de herramientas','type':'Toolbox','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'G','lenguajes':['javascript','css','html'],'title':'codebeautify','url':'https://codebeautify.org','desc':'Caja de herramientas','type':'Toolbox','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'H','lenguajes':[],'title':'subtlepatterns','url':'https://www.toptal.com/designers/subtlepatterns','desc':'Fondos sutiles','type':'Fondos','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'I','lenguajes':[],'title':'youmightnotneedjquery','url':'http://youmightnotneedjquery.com','desc':'Ayuda a entender si necesitamos o no jquery','type':'QA','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'J','lenguajes':['javascript','css','html'],'title':'caniuse','url':'https://caniuse.com','desc':'Testing de funcionalidades y soporte','type':'QA','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'K','lenguajes':[],'title':'es6-features','url':'http://es6-features.org','desc':'Testing de funcionalidades y soporte de ECMA6','type':'QA','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'L','lenguajes':[],'title':'kangax','url':'http://kangax.github.io/compat-table/es5','desc':'Testing de funcionalidades y soporte de ECMA','type':'QA','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'M','lenguajes':['css'],'title':'css3test','url':'http://css3test.com','desc':'Testing de funcionalidades y soporte de CSS3','type':'QA','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'N','lenguajes':['css'],'title':'css3please','url':'http://css3please.com','desc':'Prueba de codigo rapida y aislada de CSS3','type':'Code playground','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'O','lenguajes':['javascript'],'title':'30 dias de javascript','url':'https://javascript30.com','desc':'Tutoriales para javascript','type':'Tutoriales','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'P','lenguajes':['javascript'],'title':'Javascript for cats','url':'http://jsforcats.com','desc':'Tutoriales para javascript','type':'Tutoriales','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'Q','lenguajes':[],'title':'Freepngimg','url':'https://www.freepngimg.com','desc':'Imagenes para favicons e iconos','type':'Icons','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'R','lenguajes':[],'title':'PicResize','url':'http://picresize.com','desc':'Editor online de Imagenes','type':'Icons','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'S','lenguajes':['javascript','css','html'],'title':'StackOverflow','url':'https://stackoverflow.com','desc':'Foro de programacion','type':'Foro','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'T','lenguajes':['javascript','css','html'],'title':'NetLify','url':'https://www.netlify.com','desc':'Hosting con hooks contra git','type':'Hosting','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'U','lenguajes':['javascript','css','html','php','MySql'],'title':'000WebHost','url':'https://www.000webhost.com','desc':'Hosting con PHP y MySql','type':'Hosting','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'V','lenguajes':[],'title':'GitHub','url':'https://github.com','desc':'Cliente sencillo GIT','type':'GIT','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'W','lenguajes':[],'title':'BitBucket','url':'https://bitbucket.org','desc':'Cliente GIT','type':'GIT','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'X','lenguajes':[],'title':'DomainTools','url':'http://whois.domaintools.com','desc':'Analisis de ip','type':'Ip Analisis','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'Y','lenguajes':['css'],'title':'CSS Tricks','url':'https://css-tricks.com','desc':'Foro de CSS','type':'Foro','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'Z','lenguajes':['javascript','css','html'],'title':'W3C Validator','url':'https://validator.w3.org','desc':'Validador de HTML5','type':'Validador','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'a','lenguajes':['kanban'],'title':'Trello','url':'https://trello.com','desc':'Seguimiento de incidencias','type':'Kanban','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'a','lenguajes':['CSS'],'title':'Cubic bezier','url':'http://cubic-bezier.com','desc':'Calculo de cubic bezier para animaciones de CSS','type':'Animaciones CSS','added':'06-09-2018'}
]

let formInputs=document.querySelectorAll('.formulario input[type="text"],.formulario textarea');
formInputs.forEach(t=>{
	if(t.name!=''){
		t.addEventListener('change',e=>{updatePreview(e);})
	}
});
formInputs=document.querySelectorAll('.formulario input[type="checkBox"]');
formInputs.forEach(c=>{
	if(c.name!=''){
		c.addEventListener('change',e=>{updatePreview(e);})
	}
});
updatePreview('bodyLoad');

updateFormTitle.addEventListener('click',e=>{
	toggleHide(e);
});
function toggleHide(e){
	let el=document.getElementById(e.target.dataset.child);
	el.classList.toggle('hidden');
}
function generateData(e=null){
	let data=[];
	let aux={};
	data=document.querySelectorAll('.formulario input[type="text"],.formulario textarea');
	data.forEach(t=>{
		if(t.name!=''){
			aux[t.name]=[];
			t.name!='lenguajes'?aux[t.name]=t.value:aux[t.name].push(t.value);
		}
	});
	data=document.querySelectorAll('.formulario input[type="checkBox"]');
	data.forEach(c=>{
		if(c.name!=''&&c.checked==true){
			aux[c.name]==undefined?aux[c.name]=[]:'';
			aux[c.name].push(c.value);
		}
	});

	aux['added']=new Date();
	aux['id']=aux['added'].getTime();

	data=[];
	data.push(aux);
	return data;
}

function updatePreview(e){
	draw(generateData(e),'updatePreview',false);
}
function draw(tools,container,hideChild=true){
	document.getElementById(container).innerHTML='';
	
	//console.log(tools);
	let organizedArr=[];
	tools.forEach(t=>{
		organizedArr[t.type]==undefined?organizedArr[t.type]=[]:'';
		organizedArr[t.type].push(t);
	});
	//console.log(organizedArr);

	const orderedArr = {};
	Object.keys(organizedArr).sort().forEach(function(key) {
	  orderedArr[key] = organizedArr[key];
	});
	//console.log(orderedArr);

	for (let k in orderedArr){
	    if (organizedArr.hasOwnProperty(k)) {
	        let div = document.createElement("section");
	        div.id='div_'+k;
	        let title = document.createElement("h3");
			title.innerText=k+' ['+organizedArr[k].length+']';
			title.classList='title';
			title.dataChild='ol_'+k;
			div.appendChild(title);	        
			let ol = document.createElement("ol");
			ol.id='ol_'+k;
			hideChild==true?ol.classList='hidden':'';
			organizedArr[k].forEach(t=>{
				let li = document.createElement("li");
				li.classList='listLink';

				let innerTitle = document.createElement("h4");
				innerTitle.innerHTML=t.title.toUpperCase()+' (<a href="'+t.url+'" target="blank">'+t.url+'</a>) [Uploader: '+t.autor.toUpperCase()+' | Fecha:'+t.added+']';
				innerTitle.classList='innerTitle';
				li.appendChild(innerTitle);

				let p=document.createElement("p");
				p.innerText='Descripcion: '+t.desc;
				p.classList='descripcion';
				li.appendChild(p);
				
				let lang=document.createElement("p");
				if (t.lenguajes!=undefined){
					t.lenguajes.forEach(l=>{
						lang.innerText==''?lang.innerText='Lenguajes: '+l.toUpperCase():lang.innerText+=' | '+l.toUpperCase();
					});
				};
				lang.classList='lenguajes';
				li.appendChild(lang);

				let preview=document.createElement("input");
				preview.type='checkbox';
				preview.id='checkbox_'+t.title+'_'+t.id;
				preview.name='iframe_'+t.title+'_'+t.id;
				preview.src=t.url;
			

				let labelPreview=document.createElement("label");
				labelPreview.appendChild(preview);
				labelPreview.innerHTML+=' Habilitar preview de '+t.title.toLowerCase();

				let pPreview=document.createElement("p");
				pPreview.appendChild(labelPreview);
				li.appendChild(pPreview);

				let iframe=document.createElement("iframe");
				//iframe.src=t.url;
				//iframe.style='display:none;';
				iframe.classList='hidden preview';
				iframe.id='iframe_'+t.title+'_'+t.id;
				li.appendChild(iframe);

				ol.appendChild(li);
			});
			div.appendChild(ol);
	        //console.log("Key is " + k + ", value is" , organizedArr[k]);

	        document.getElementById(container).appendChild(div);
	    }
	}
	let checks=document.querySelectorAll('#'+container+' input[type=checkbox]');
	checks.forEach(c=>{
		c.addEventListener('click',event=>{
			let el=document.getElementById(event.target.name);
			let t=event.target;
			el.classList.toggle('hidden');
			if(t.checked==true){
				var the_url_to_load = t.src;
				$.ajax({
					type: "GET",
					url: the_url_to_load,
					data: "",
					success: function(data){
					    // if can load inside iframe, load the URL
					    el.src=t.src;
					},
					statusCode: {
					    500: function() {
					        //alert( 'site has errors' ) ;
					        //event.target.click();
					    }
					},
					error:function (xhr, ajaxOptions, thrownError){
					    // if x-frame-options, site is down or web server is down
					    //event.target.click();
					    console.log(event,xhr, ajaxOptions,thrownError);
					} 
				});
				//getUrl(t.src);
				//getHeaders(t.src);
				//fetchHeaders(t.src);
				el.src=t.src;
			}else{
				el.src='';
			}
		});
	});
	let titles=document.querySelectorAll('#'+container+' .title');
	titles.forEach(t=>{
		t.addEventListener('click',event=>{
			let el=document.getElementById(event.target.dataChild);
			el.classList.toggle('hidden');
		});
	});
	let iframes=document.querySelectorAll('#'+container+' iframe');
	iframes.forEach(ifr=>{
		ifr.addEventListener('load',event=>{
			if(event.path[0].src!=''){
				//console.log(event);
				/*
				console.log(event.path[0].childElementCount);
				console.log(event.path[0].ownerDocument.childNodes);
				
				console.log(event.path[0]);
				let iframeDoc = event.path[0].contentDocument || event.path[0].contentWindow.document;
				console.log(iframeDoc);
				*/

				//var iframeBody = event.path[0].contentDocument;
				//console.log('iframe loaded, body is: ', iframeBody);
				//let el=document.getElementById(event.target.dataChild);
				//el.classList.toggle('hidden');
			}
		});
	});
}
function getUrl(url){
	var oReq = new XMLHttpRequest();
	oReq.onload = e=> {
	  var arraybuffer = oReq.response; // not responseText
	  /* ... */
	}

	oReq.addEventListener("progress", console.log);
	oReq.addEventListener("load", console.log);
	oReq.addEventListener("error", console.error);
	oReq.addEventListener("abort", console.error);
	
	oReq.open("GET", url);
	oReq.responseType = "arraybuffer";
	oReq.send();
}
function fetchHeaders(url){
	let myRequest = new Request(url);
	fetch(myRequest).then(function(response) {
	  console.log(response.headers); // returns a Headers{} object
	  response.blob().then(function(myBlob) {
	    //var objectURL = URL.createObjectURL(myBlob);
	    //myImage.src = objectURL;
	  });
	});
}
function getHeaders(url=document.location){
	var req = new XMLHttpRequest();
	req.open('GET', url, true);
	req.send();
	var headers = req.getAllResponseHeaders().toLowerCase();
	console.log(headers);
}
draw(defaultToolsArr,'toolsContainer');
