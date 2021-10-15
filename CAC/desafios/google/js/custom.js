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

document.querySelector('.googleSearch').addEventListener("click", function(event){
  event.preventDefault();
  realizarBusqueda(this);
});

function realizarBusqueda(e){
	e.preventDefault;
	let texto=searchInput.value;
	if (texto.length>0){
		alert('Ya te direcciono para buscar: '+texto);
		window.location.href='https://www.google.com/search?q='+texto;
	}else{
		document.querySelector('.JAJAJJAJAJAJAJAJA').classList.add('hidden');
		document.querySelector('.facepalm').classList.remove('hidden');
		searchInput.value='google';
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

function serverView(){
	document.querySelector(".container-fluid").classList.toggle('serverView');
}

function checkFocus(){
	if(window.innerWidth<801){
		let footer=document.querySelector(".pais");
		if(document.getElementById('searchInput').matches(':focus')){
			footer.classList.add('hidden');
		}else{
			footer.classList.remove('hidden');
		}
	}
}