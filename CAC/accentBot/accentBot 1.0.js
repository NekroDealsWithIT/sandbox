/*resolverautomagicamente */
//setInterval(function(){aprobarCurso("");}, 5000);
/* soloResolver    */
aprobarCurso(true);

function aprobarCurso(soloResolver) {
	console.log("Intento contestar " + Date().toString());
	/* Checkbox y radios */
	document.querySelectorAll("input[type='radio'], input[type='checkbox']").forEach(e => {
		console.warn("checkeando:" + e.id);
		if(e.value == 1) {
			e.click();
		}
	});
	/* Selects */
	document.querySelectorAll("select").forEach(e => {
		e.value = 1
	});
	/* Autoclick */
	if(soloResolver == "") {
		document.getElementById("next") == null ? console.log('next no esta') : delay(1000).then(() => next.click());
		document.getElementById("botonIniCuestionario") == null ? console.log('botonIniCuestionario no esta') : delay(1000).then(() => botonIniCuestionario.click());
		document.getElementById("botonAceptar_popup") == null ? console.log('botonAceptar_popup no esta') : delay(1000).then(() => botonAceptar_popup.click());
		if(document.getElementById("botonAceptar") == null) {
			console.log('botonAceptar no esta')
		} else {
			botonAceptar.removeAttribute('disabled');
			botonAceptar.style = "color:'green';background-color:'black';";
			delay(1000).then(() => botonAceptar.click());
		}
	}
}

function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}