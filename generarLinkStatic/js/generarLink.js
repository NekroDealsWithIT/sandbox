const look4 = [".html", ".css", ".js"];
function start(){
	document.querySelector(".nombre").value=getCookie('nombre');
	document.querySelector(".carpeta").value=getCookie('carpeta');
	comision.value=(getCookie('comision')==''?2159:getCookie('comision'));		
	generarLink();		

}

function generarLink() {
	let url;
	let carpetaPropia = document.querySelector(".carpeta").value;
	let nombre = document.querySelector(".nombre").value;
	let resultado = document.querySelector("#idResultado");
	let resultadoTxt = 'Ingresar archivo';
	let ok = false;
	preview.setAttribute("style", "display:none;");

	look4.forEach(i => {
		if (carpetaPropia.toLowerCase().indexOf(i) > -1) {
			ok = true;
		}else{
			resultadoTxt+=" "+i;
		}
	});
	if (nombre == '' || carpetaPropia == '') {
		resultadoTxt = '<h2>Completar nombre y carpeta para generar el link.</h2>';
	} else {
		if (ok == false) {
			resultadoTxt = '<h2>'+resultadoTxt+' para generar link.</h2>';
		} else {
			url = "http://cursophp.foxit.com.ar/comision"+comision.value+"/" + encodeURIComponent(nombre) + "/" + carpetaPropia;
			resultadoTxt = '<span class="important">URL: '+ url + '</span><br><h1><a href=' + url + ' target="_blank">Link</a></h1>';
			embeed.src = url;

			preview.setAttribute("style", "display:block;");
			console.log("Imprimo: " + resultadoTxt);
			setCookie('nombre', nombre,30);
			setCookie('carpeta', carpetaPropia,30);
			setCookie('comision', comision.value,30);
		}
	}
	if(comision.value==""){
		resultadoTxt="<h2>Ingresar comisi&oacute;n</h2>";
	}
	resultado.innerHTML = resultadoTxt;
}

function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(';');
	for(let i = 0; i < ca.length; i++) {
	let c = ca[i];
	while (c.charAt(0) == ' ') {
		c = c.substring(1);
	}
	if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	}
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	let expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
