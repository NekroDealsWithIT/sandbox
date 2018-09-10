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

const p_r={
	'MiArIDE=':'3',
	'MiArIDg=':'10',
	'MiB5IDI=':'4',
	'NCAmIDI=':'6',
	'NiArIDI=':'8',
	'OCArIDg=':'16'
};
const uri="aHR0cHM6Ly9uZWtyby1zYW5kYm94LjAwMHdlYmhvc3RhcHAuY29tL2xpbmtzLnBocA==";

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
	,{'check':'true','autor':'nekro','id':'b','lenguajes':['CSS'],'title':'Cubic bezier','url':'http://cubic-bezier.com','desc':'Calculo de cubic bezier para animaciones de CSS','type':'Animaciones CSS','added':'06-09-2018'}
	,{'check':'true','autor':'nekro','id':'c','lenguajes':['javascript','css','html'],'title':'codepen','url':'https://codepen.io','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
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
	const defaultIframeHeight=70;
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
				let li=document.createElement("li");
				li.classList='listLink';
				li.id='li_'+t.id;

				let innerTitle = document.createElement("h4");
				innerTitle.innerHTML=t.title.toUpperCase()+' (<a href="'+t.url+'" target="blank">'+t.url+'</a>) [Uploader: '+t.autor.toUpperCase()+' | Fecha:'+t.added+']';
				innerTitle.classList='innerTitle';
				li.appendChild(innerTitle);

				let p=document.createElement("p");
				p.innerText='Descripcion: '+t.desc;
				p.classList='descripcion';
				li.appendChild(p);
				
				let lang=document.createElement("p");
				if (t.lenguajes!=undefined&&t.lenguajes!=''){
					t.lenguajes.forEach(l=>{
						if(l!=''){
							lang.innerText==''?lang.innerText='Lenguajes: '+l.toUpperCase():lang.innerText+=' | '+l.toUpperCase();
						}
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
				pPreview.classList='floatingLabel';
				pPreview.appendChild(labelPreview);
				li.appendChild(pPreview);

				let pModifPreview=document.createElement("p");
				pModifPreview.classList='modifPreview';
				
				let spanInstancias=document.createElement("span");
				spanInstancias.innerHTML+='Cantidad de instancias del preview: ';
				let inputInstancias=document.createElement("input");
				inputInstancias.type='number';
				inputInstancias.min=1;
				inputInstancias.max=99;
				inputInstancias.value=1;
				inputInstancias.name='instancesPreview';
				spanInstancias.appendChild(inputInstancias);
				pModifPreview.appendChild(spanInstancias);
				
				let spanResize=document.createElement("span");
				spanResize.innerHTML+='  Altura del preview (vh): '
				let inputResize=document.createElement("input");
				inputResize.type='number';
				inputResize.value=defaultIframeHeight;
				inputResize.min=1;
				inputResize.max=99;
				inputResize.name='resizePreview';
				spanResize.appendChild(inputResize);
				pModifPreview.appendChild(spanResize);
				li.appendChild(pModifPreview);

				
				let iframe=document.createElement("iframe");
				iframe.classList='hidden preview';
				//	iframe.id='iframe_'+t.title+'_'+t.id;
				iframe.style='height:'+defaultIframeHeight+'vh;';
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
		c.addEventListener('click',e=>{
			console.log(e)
			let previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
			previews.forEach(p=>{
				p.classList.toggle('hidden');
				c.checked==true?p.src=c.src:'';
			});
			/*
			let el=document.getElementById(event.target.name);
			let t=event.target;
			el.classList.toggle('hidden');
			if(t.checked==true){
				el.src=t.src;
			}else{
				//el.src='';
			}
			*/
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
	let numberArr=document.querySelectorAll('#'+container+' input[type=number]');
	numberArr.forEach(inp=>{
		switch(inp.name){
			case 'instancesPreview':
				inp.addEventListener('change',e=>{
					addPreview(e);
				});	
				break;
			case 'resizePreview':
				inp.addEventListener('change',e=>{
					resizePreview(e);
				});	
				break
			default:
				inp.addEventListener('change',e=>{

				});	
		}
	});
}
function resizePreview(e){
	let to=e.target.value*1;
	to>99?to=99:'';
	to<1?to=1:'';
	e.target.value=to;
	let previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
	previews.forEach(p=>{
		p.style='height:'+to+'vh;';
	});
}
function addPreview(e){
	//console.log(e);
	let to=e.target.value*1;
	to>99?to=99:'';
	to<1?to=1:'';
	e.target.value=to;

	let previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
	let delta=e.target.value-previews.length;
	
	if (delta<1){		
		// for (var i=delta;i>0;i--){
		for (var i=delta*-1;i>0;i--) {
			//console.log(i);
			previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
			e.path[3].removeChild(previews[previews.length-1]);
		}
	}else{
		//console.log(previews.length-1,e.target.value,previews[0])
		let altura=document.querySelector('#'+e.path[3].id+' input[name="resizePreview"]');
		//for (var i=previews.length;i==e.target.value;i++){
		for (var i=delta;i>0;i--) {
			//console.log(i);
			let iframe=document.createElement("iframe");
			iframe.classList=previews[0].classList;
			iframe.style='height:'+altura.value+'vh;';
			iframe.src=previews[0].src;
			e.path[3].appendChild(iframe);
		}
	}
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

/*
-----------------------------------------------------
	Forms
-----------------------------------------------------
*/
function checkUrl(url){
	containerArr=[{'cont':'toolsContainer','desc':'Herramientas chequeadas'},{'cont':'toolsSugestedContainer','desc':'Herramientas sugeridas (no chequeadas)'}];
	let found=false;
	containerArr.forEach(c=>{
		if (this.analizeUrl(c.cont)==true){
			found=true;
			return c;
		}
	});
	
	function analizeUrl(container){
		let arrEl=document.querySelectorAll('#'+container+' a');
		let found=false;
		if (arrEl!=undefined){
			arrEl.forEach(el=>{
				if(el.href==url){
					"http://cubic-bezier.com/"
				}
			});
		}
		return found;
	}
}


function mAq(p='',r=''){if(r==''){q=Object.keys(p_r);return atob(q[randBetween(1,q.length,1)-1]);}else{return (p_r[btoa(p)]==r?1:0)}};
function submitMe(){
	let data=[generateData()];
	let formValid=true;
	let formInputs=document.querySelectorAll('.formulario input[type="text"],.formulario textarea');
	formInputs.forEach(t=>{
		if(t.name!=''){
			t.checkValidity()==false?formValid=false:'';
		}
	});
	if((mAq(calculoQ.innerText,calculoR.value)==1)&&formValid==true){
			var formData = new FormData();

			formData.append("data", (data));

			var request = new XMLHttpRequest();
			request.open("POST", atob(uri));
			//request.send(formData);
	}else{
		errorPQ.innerText=mAq(calculoQ.innerText,calculoR.value)!=1?'Captcha incorrecto (srsly?)':'Revisa los campos con marco rojo';
	}
	
}
/*
-----------------------------------------------------
	Funciones numericas
-----------------------------------------------------
*/
function validateRandomizer(parentFunction, min, max, esInt, tipo, cantPos, arrayVerif){
	var msg='';
	//console.log(parentFunction+' '+min+' '+max+' '+esInt+' '+tipo+' '+cantPos+' '+arrayVerif);

	if(tipo==0||tipo==1){
		if(min>max){
			msg='[validateRandomizer:'+parentFunction+'] El min: '+min+' no puede ser mayor al maximo: '+max+'\n'
		}
	}
	if(tipo==0||tipo==1){
		if(min==max){
			msg='[validateRandomizer:'+parentFunction+'] El min: '+min+' no puede ser igual al maximo: '+max+'\n'
		}
	}
	if(tipo==1){
		if((max-min)<cantPos&&esInt){
			msg='[validateRandomizer:'+parentFunction+'] No hay suficientes posiciones('+cantPos+') si usamos INT para usar un minimo: '+min+' y un maximo: '+max+'\n'
		}
	}
	if (tipo==2){
		if(arrayVerif.length==0){
			msg='[validateRandomizer:'+parentFunction+'] La lista no puede estar vacia\n'
		}
	}
	if (msg===''){
		return true
	}else{
		console.log(msg);
		return false
	}
}

function randBetween(min, max, esInt){
	var tipo = 0, parentFunction = 'randBetween';
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+')');
	
	if(esInt){
		return Math.floor(Math.random()*(max-min+1)+min);
	}else{
		return Math.random()*(max-min)+min;
	}
}

function randBetweenUniqueArray(min, max, esInt, posiciones){
	var tipo = 1, parentFunction = 'randBetweenUniqueArray';
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo, posiciones)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+','+posiciones+')');

	var arrayUnique=[];
		
	while (posiciones > arrayUnique.length){
		var nro = randBetween(min,max,esInt);
		var existe = false;
		arrayUnique.forEach(function(nroArray) {
			if(nro==nroArray){
				existe=true;
			}
		});
		if(!existe){
			arrayUnique.push(nro);
		}
	}
	return arrayUnique;
}

function randLista(arrayLista){
	var tipo = 2, parentFunction = 'randLista';
	var max = arrayLista.length-1, min=0,esInt=true,posiciones=1;
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo, posiciones,arrayLista)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+','+posiciones+')');
	
	var id = randBetween(min,max,esInt);
	return arrayLista[id];
}

function randListaArray(arrayLista){
	var tipo = 2, parentFunction = 'randListaArray';
	var max = arrayLista.length-1, min=0,esInt=true,posiciones=1;
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo, posiciones,arrayLista)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+','+posiciones+','+arrayLista+')');
		
	var arrayUnique=[];
	var existe = false;
	while (arrayLista.length > arrayUnique.length){
		var nro = randBetween(min,max,esInt);
		var existe = false;
		arrayUnique.forEach(
			function(nroArray) {
				if(nro==nroArray){
					existe=true;
				}
			}
		);
		if(!existe){
			arrayUnique.push(nro);
		}
	}	
	var arrayFinal=[];
	arrayUnique.forEach(
		function(idArray) {
			arrayFinal.push(arrayLista[idArray]);
		}
	);
	return arrayFinal;
}

draw(defaultToolsArr,'toolsContainer');
