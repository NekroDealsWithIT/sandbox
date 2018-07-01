// checkCuit.js
var result="";
var resultQuery="";
var urlAFIP='https://soa.afip.gob.ar/sr-padron/v1/constancia/';
var arrTipos=[
				{id:"CUIT",cuit:"",valido:false,response:"",descripcion:"Cuit directo"},
				{id:20,cuit:"",valido:false,response:"",descripcion:"20 (Hombre)"},
				{id:27,cuit:"",valido:false,response:"",descripcion:"27 (Mujer)"},
				{id:24,cuit:"",valido:false,response:"",descripcion:"24 (Repetido)"},
				{id:30,cuit:"",valido:false,response:"",descripcion:"30 (Empresa)"},
				{id:34,cuit:"",valido:false,response:"",descripcion:"34 (Repetida)"},
				{id:23,cuit:"",valido:false,response:"",descripcion:"23 (Nuevo Persona)"},
				{id:33,cuit:"",valido:false,response:"",descripcion:"33 (Nuevo empresa)"}
			];
function checkDni(dni){
	arrTipos.forEach(function(tipo){
		var msg="<h5>"+tipo.descripcion+"</h5>";
		if(tipo.id!="CUIT"){
			if(dni.length!=8){
				msg+="El dni debe de tener 8 digitos para calcular";
				tipo.valido=false;
			}else{
				tipo.cuit=getDigitoVerif(tipo.id+dni);
				msg+=tipo.cuit;
				tipo.valido=true;
				getResponseArr(urlAFIP+tipo.cuit,tipo.id);
			}
		}
		var div=document.getElementById("div"+tipo.id);

		div.innerHTML=msg;
	});
}

function validarCuit(cuit) {

	if(cuit.len != 11) {
      return "Cuit debe de tener 11 digitos:" + cuit+" ("+cuit.length+")";
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

	return digito == verif;
}

function getDigitoVerif(parametro) {
  var cuit=parametro+"0";
    if(cuit.length != 11) {
     return "cuit: "+cuit.length;
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
function getResponse(url=''){
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
	  result = request.response;
	  console.log("request done: " + url)
	  console.log(result);
	  return request.response;
	}
}
function getResponseArr(url='',id){
	console.log("buscando "+url+" id:"+id);
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
	  result = request.response;
	  console.log(id+" Loaded ");
	  console.log(result);
	  console.log(arrTipos);
	  arrTipos.forEach(function(tipo){
		if(tipo.id===id){
			tipo.response=result;
		}	  	
		reCalcular();
	  });
	  console.log(arrTipos);
	  return request.response;
	}
}
function reCalcular(){
	console.log("entro a recalcular");
	arrTipos.forEach(function(tipo){
		var div=document.getElementById("div"+tipo.id);
		var resultado=tipo.response;
		if (resultado==null||resultado.success){
			div.classList.add="cuitOK";
		}else{
			div.classList.add="cuitNoOK";
		}
	});
}

function checkCuit(dni){
	var cuit;
	console.log("buscando para dni: "+dni+" digitos:"+dni.length);
	switch (dni.length){
		case 11:
			cuit=dni;
			console.log("buscando para cuit: "+cuit);

			break;
		default:
			return false;
	}
	arrTipos.forEach(function(tipo){
		if(tipo.id==="CUIT"){
			tipo.cuit=cuit;
		}
	});
	resultQuery=getResponseArr(urlAFIP+cuit,"CUIT");
}



function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}