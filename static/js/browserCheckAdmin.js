
urlForm.innerText='https://nekro-sandbox.netlify.com/browsercheck';
urlFormMini.innerText='https://bit.ly/2LtI8cv';

function validateURL(e){
	let url='https://nekro-sandbox.netlify.com/browsercheck';
	let minifiedUrl='https://bit.ly/2LtI8cv';

	let mail=email.value.trim();
	let op=idOperations.value.trim();
	tituloDatosRelevados.innerText='Datos Relevados';

	urlForm.innerText=url;
	urlFormMini.innerText=minifiedUrl;

	if(op==''){
		return false
	}else{
		op=stringToSlug(op);
		idOperations.value=op;
		let parameters='op='+op;
		parameters+=';m='+mail;
		parameters=encodeURI(btoa(parameters));

		url=url+'?id='+parameters;
		urlForm.innerText=url;
		urlFormMini.innerText='';
		checkRelevamientos(op,mail);
	}
}

function checkRelevamientos(op,mail){
	tituloDatosRelevados.innerText+=(op!=''?' para id: '+op:'')+(mail!=''?' y mail: '+mail:'');
}


email.addEventListener('blur',validateURL);
idOperations.addEventListener('blur',validateURL);
labelUrl.addEventListener('click',copyClip);

function copyClip(data){
	copyToClipboard(urlForm.innerText);
}