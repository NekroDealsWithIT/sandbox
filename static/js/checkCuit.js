// checkCuit.js
var result="";
var resultQuery="";
var urlAFIP='https://soa.afip.gob.ar/sr-padron/v1/constancia/';
var urlAFIP2='https://soa.afip.gob.ar/av/v1/vencimientos/';
var arrTipos=[
				{id:"CUIT",cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"Cuit directo"},
				{id:20,cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"20 (Hombre)"},
				{id:27,cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"27 (Mujer)"},
				{id:24,cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"24 (Repetido)"},
				{id:30,cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"30 (Empresa)"},
				{id:34,cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"34 (Repetida)"},
				{id:23,cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"23 (Nuevo Persona)"},
				{id:33,cuit:"",valido:false,response:"",url:"",url2:"",mensaje:"",mensaje2:"",estado:"",descripcion:"33 (Nuevo empresa)"}
			];
function checkDni(dni){
	arrTipos.forEach(function(tipo){
		var msg="<h5>"+tipo.descripcion+"</h5>";
		if(tipo.id!="CUIT"){
			if(dni.length!=8){
				tipo.response="";
				tipo.cuit="";
				tipo.url="";
				tipo.url2="";
				tipo.mensaje="El dni debe de tener 8 digitos para calcular";
				tipo.mensaje2="";
				tipo.valido=false;
				tipo.estado=false;
				labelDni.classList.remove("invalidDNI","validDNI");
				labelDni.classList.add("invalidDNI");
			}else{
				tipo.cuit=getDigitoVerif(tipo.id+dni);
				tipo.valido=true;
				tipo.response='fetching';
				tipo.url=urlAFIP+tipo.cuit;
				tipo.url2="";
				tipo.mensaje="";
				tipo.mensaje2="";

				msg+=tipo.cuit+'<br><a href="'+tipo.url+'">'+tipo.url+'</a>';
				labelDni.classList.remove("invalidDNI","validDNI");
				labelDni.classList.add("validDNI");
				getResponseArr(urlAFIP+tipo.cuit,tipo.id);
			}
			var div=document.getElementById("div"+tipo.id);
			div.innerHTML=msg;
		}
	});
	reCalcular();
}

function checkCuit(dni){
	var cuit;
	var msg="";
	switch (dni.length){
		case 11:
			cuit=dni;
			console.log("buscando para cuit: "+cuit);
			arrTipos[0].cuit=cuit;
			arrTipos[0].url=urlAFIP+cuit;
			arrTipos[0].url2="";
			arrTipos[0].response="fetching";
			arrTipos[0].mensaje="el cuit debe de tener 11 digitos";
			arrTipos[0].mensaje2="";
			break;
		default:
			msg+="<h5>"+arrTipos[0].descripcion+"</h5>"+"el cuit debe de tener 11 digitos";
			divCUIT.innerHTML=msg;
			arrTipos[0].cuit="";
			arrTipos[0].response="";
			arrTipos[0].url="";
			arrTipos[0].url2="";
			arrTipos[0].valido=false;
			arrTipos[0].mensaje="el cuit debe de tener 11 digitos";
			arrTipos[0].mensaje2="";
			labelCuit.classList.remove("invalidDNI","validDNI");
			labelCuit.classList.add("invalidDNI");
			reCalcular();
			return false;
	}
	msg="<h3>"+arrTipos[0].descripcion+"</h3>"+cuit;
	labelCuit.classList.remove("invalidDNI","validDNI");
	console.log(cuit+" "+validarCuit(cuit));
	if(validarCuit(cuit)){
		labelCuit.classList.add("validDNI");
		resultQuery=getResponseArr(urlAFIP+cuit,"CUIT");
	}else{
		msg+="<br>CUIT INVALIDO";
		arrTipos[0].mensaje=msg;
		arrTipos[0].estado=false;
		labelCuit.classList.add("invalidDNI");
	}
	reCalcular();
	divCUIT.innerHTML=msg;
}

function validarCuit(cuit) {
	cuit=cuit+"";
	if(cuit.length != 11) {return "Cuit debe de tener 11 digitos:" + cuit+" ("+cuit.length+")";}
	var acumulado 	= 0;
	var digitos 	= cuit.split("");
	var digito	= digitos.pop();
	for(var i = 0; i < digitos.length; i++) {
		acumulado += digitos[9 - i] * (2 + (i % 6));
	}
	var verif = 11 - (acumulado % 11);
	if(verif == 11) {
		verif = 0;
	}
	return digito == verif;
}

function getDigitoVerif(parametro) {
  var cuit=parametro+"0";
    if(cuit.length != 11) {
     return "Cuit debe de tener 11 digitos: "+cuit.length;
	}
	var acumulado 	= 0;
	var digitos 	= cuit.split("");
	var digito	= digitos.pop();
	for(var i = 0; i < digitos.length; i++) {
		acumulado += digitos[9 - i] * (2 + (i % 6));
	}
 
	var verif = 11 - (acumulado % 11);
  	if(verif == 11) {
		verif = 0;
	}
	return parametro+""+verif;
}
function getResponseArr(url='',id,segundaValidacion=false){
	console.log("buscando "+url+" id:"+id);
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
	  result = request.response;
	  console.log(id+" Loaded "+(segundaValidacion?"segunda validacion":""));
	  console.log(result);
	  arrTipos.forEach(function(tipo){
		if(tipo.id===id){
			if(segundaValidacion){
				if(result!=null){
					if(result.success){
						tipo.estado=true;
						tipo.mensaje2="SUCESS (Segunda validacion)";
					}else{
						tipo.estado=undefined;	
						tipo.mensaje2="ERROR (segunda validacion) "+result.error.mensaje;
					}
				}
			}else{
				tipo.response=result;
				if(result==null){
					tipo.estado=undefined;
					tipo.mensaje="WS INTENTO DESCARGAR FORMULARIO (POSIBLE FALSO POSITIVO), GENERO UNA SEGUNDA VALIDACION";
					//genero segunda validacion
					getResponseArr(urlAFIP2+tipo.cuit,id,true);
					tipo.url2=urlAFIP2+tipo.cuit;
				}else{
					if (result.success){
						tipo.estado=true;
						tipo.mensaje="SUCESS";
					}else{
						if(result.error.mensaje=="Error interno del sistema: The document has no pages."){
							tipo.estado=true;	
							tipo.mensaje=result.error.mensaje;
							//genero segunda validacion
							getResponseArr(urlAFIP2+tipo.cuit,id,true);
							tipo.url2=urlAFIP2+tipo.cuit;

						}else{
							if(result.error.mensaje=="Error interno del sistema: CLAVE inexistente"){
								tipo.estado=false;
								tipo.mensaje=result.error.mensaje;
							}else{
								tipo.estado=undefined;	
								tipo.mensaje=result.error.mensaje;
								//genero segunda validacion
								getResponseArr(urlAFIP2+tipo.cuit,id,true);
								tipo.url2=urlAFIP2+tipo.cuit;
							}
						}
					}
				}
			}
			reCalcular();
		}	  	
	  });
	  return request.response;
	}
}
function reCalcular(){
	arrTipos.forEach(function(tipo){
		var div=document.getElementById("div"+tipo.id);
		var resultado=tipo.response;
		div.classList.remove("cuitOK","cuitNoOK","cuitFetching","indefinido");
		
		if(resultado=="cuitFetching"){
			div.classList.add("cuitFetching");
		}else{
			if(tipo.estado==undefined){
				div.classList.add("indefinido");
			}else{
				if(tipo.estado){
					div.classList.add("cuitOK");
				}else{
					div.classList.add("cuitNoOK");
				}
			}
		}
		
		var msg="<h3>"+tipo.descripcion+"</h3>";
		msg+=(tipo.url!=""?tipo.cuit+'<br><a href="'+tipo.url+'" target="blank">URL: '+tipo.url+'</a>':"");
		msg+=(tipo.mensaje!=""?"<br><strong>Mensaje: '"+tipo.mensaje+"'</strong>":"");
		msg+=(tipo.url2!=""?'<br><a href="'+tipo.url2+'" target="blank">URL: '+tipo.url2+'</a>':"");
		msg+=(tipo.mensaje2!=""?"<br><strong>Mensaje: '"+tipo.mensaje2+"'</strong>":"");

		div.innerHTML=msg;
	});
}




function fetchCuit(url){
fetch(url)
	.then(function(response) {
	  // When the page is loaded convert it to text
	  return response.text();
	})
	.then(function(html) {
	  // Initialize the DOM parser
	  var parser = new DOMParser();
	  // Parse the text
	  var doc = parser.parseFromString(html, "text/html");
	  
	  // You can now even select part of that html as you would in the regular DOM 
	  // Example:
	  // var docArticle = doc.querySelector('article').innerHTML;
	  console.log(html);
	  //console.log(doc);
	})
}