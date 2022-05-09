function generarTablas(tablaInicio, tablaFin, printInto) {
   console.log(tablaInicio, tablaFin, printInto)
   let resultadoHtml = ""
   for (let x = tablaInicio; x > (tablaFin - 1); x--) {

      resultadoHtml += "<h3>La tabla del " + x + ":</h3>"

      for (let i = 1; i < 11; i++) {
         resultadoHtml += "<p>" + x + " x " + i + ": " + x * i + "</p>"
      }
   }

   document.getElementById(printInto).innerHTML = resultadoHtml
}

generarTablas(11, 9,"resultado")

function generarTablaOnDemand(){
	const resultadoOnDemand = "tablaOnDemand"
	let tablaInicio=prompt("Ingresar un numero", "11");
	if(isNaN(tablaInicio)){
		alert(`${tablaInicio} no es un numero`)
		return
	}

	let tablaFin=prompt("Ingresar un numero menor al anterior", "9");
	if(isNaN(tablaFin)){
		alert(`${tablaFin} no es un numero`)
		return
	}

	tablaInicio=parseInt(tablaInicio)
	tablaFin=parseInt(tablaFin)

	if(tablaInicio<tablaFin){
		let aux = tablaInicio
		tablaInicio = tablaFin
		tablaFin=aux
	}

	generarTablas(tablaInicio, tablaFin, resultadoOnDemand)
}