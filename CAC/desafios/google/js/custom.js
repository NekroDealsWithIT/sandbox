searchInput.focus();
function generatePrediction(){
	let options;
	thesaurusSpanish.forEach(t=>{
		let option = document.createElement('option');
		option.innerText=t;
		option.value=t;
		listChoices.appendChild(option);
	})
}

document.querySelector(".micSVG").addEventListener('click',function handler(event) {
	alert('Tampoco la NASA.');
});

function realizarBusqueda(){
	let texto=searchInput.value;
	if (texto.length>0){
		alert('Ya te direcciono para buscar: '+texto);
		window.location.href='https://www.google.com/search?q='+texto;
	}else{
		document.querySelector('.JAJAJJAJAJAJAJAJA').classList.add('hidden');
		document.querySelector('.facepalm').classList.remove('hidden');
		searchInput.focus();
	}
}

function mostrarPalabras(){
	divPalabras.classList.toggle('hidden');
	let words;
	if(document.querySelector('#predictorWords').innerHTML==''){
		thesaurusSpanish.forEach(t=>{
			words+=t+' ,';
		})
		document.querySelector('#predictorWords').innerHTML="<h1>Puedo predecir "+thesaurusSpanish.length+1+" palabras en espa&ntilde;ol</h1>";
		document.querySelector('#predictorWords').innerHTML+=words;
	}
}