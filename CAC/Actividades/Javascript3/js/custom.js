document.getElementById("ingresar").addEventListener("click", function(event){
  event.preventDefault()

  	let loginUsuario = document.querySelector("#loginUsuario").value
	let loginClave = document.querySelector("#loginClave").value

	console.log(loginUsuario,loginClave)

	if(loginUsuario.trim().length==0){
		reportarFalla("El usuario no puede estar en blanco");return false
	}

	if(loginUsuario.indexOf("@")==-1){
		reportarFalla("El usuario debe de contener un @");return false
	}

	if(loginClave.trim().length==0){
		reportarFalla("La clave no puede estar en blanco");return false
	}

	alert(`Bienvenido ${loginUsuario}!`)
});

function reportarFalla(msg){
	document.getElementById("ayudaLogin").innerText=msg
	alert(msg)
}