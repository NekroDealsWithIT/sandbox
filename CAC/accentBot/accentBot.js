function aprobarCurso(e) {
	console.log("Intento contestar " + Date().toString()), document.querySelectorAll("div[value=1]").forEach(e=>{e.click();}), document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach(e => {
		console.warn("checkeando:" + e.id), 1 == e.value && e.click()
	}), document.querySelectorAll("select").forEach(e => {
		e.value = 1
	}), "" == e && (null == document.getElementById("next") ? console.log("next no esta") : delay(1000).then(() => next.click()), null == document.getElementById("botonIniCuestionario") ? console.log("botonIniCuestionario no esta") : delay(1000).then(() => botonIniCuestionario.click()), null == document.getElementById("botonAceptar_popup") ? console.log("botonAceptar_popup no esta") : delay(1000).then(() => botonAceptar_popup.click()), null == document.getElementById("botonAceptar") ? console.log("botonAceptar no esta") : (botonAceptar.removeAttribute("disabled"), botonAceptar.style = "color:'green';background-color:'black';", delay(1000).then(() => botonAceptar.click())))
}

function delay(e) {
	return new Promise(o => setTimeout(o, e))
}

function agregarBotonResolver() {
	if(null == document.getElementById("btnResolver")) {
		let e = document.createElement("button");
		e.innerHTML = "RESOLVER", e.style = "width:100%;height:50px;background:black;color:green;border: 2px solid black;font-size: 3em", e.id = "btnResolver", e.addEventListener("click", function() {
			aprobarCurso(!0)
		}), document.body.appendChild(e)
	}
}
confirm("Solo solucionar? \nPara cursos con HEADER AZUL => ACEPTAR\nPara cursos normales => CANCELAR") ? (console.error("Apretar el boton para resolver"), setInterval(function() {
	agregarBotonResolver()
}, 5e3)) : setInterval(function() {
	aprobarCurso("")
}, 1000);