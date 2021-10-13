const original = 'https://www.google.com/complete/search?q=a&cp=1&client=gws-wiz&xssi=t&hl=en-AR&authuser=0&psi=XUNnYbemCeq85OUPmfKjqAE.1634157405266&dpr=1';

const url="https://www.google.com/complete/search?q=txt&cp=qty&client=gws-wiz&xssi=t&hl=en-AR&authuser=0&psi=XUNnYbemCeq85OUPmfKjqAE&dpr=1";
function searchRecommendation(text){
	let urlFinal = url.replace(/txt/g, text);
	urlFinal = urlFinal.replace(/qty/g, text.length);

	let recommendations=fetchUrl(urlFinal);
}

function fetchUrl(url){
	console.log(url);
	postData(url, '')
	  .then(data => {
	    console.log(data); // JSON data parsed by `data.json()` call
	  });
	
/*
	fetch(url)
	  .then(response => response.json())
	  .then(data => console.log(data));
	  .error(console.error())
*/

}

	async function postData(url = '', data = {}) {
	  // Default options are marked with *
	  const response = await fetch(url, {
	    method: 'GET', // *GET, POST, PUT, DELETE, etc.
	    mode: 'no-cors', // no-cors, *cors, same-origin
	    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	    credentials: 'same-origin', // include, *same-origin, omit
	    headers: {
	      'Content-Type': 'application/json'
	      // 'Content-Type': 'application/x-www-form-urlencoded',
	    },
	    redirect: 'follow', // manual, *follow, error
	    referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	    //body: JSON.stringify(data) // body data type must match "Content-Type" header
	  });
	  return response; // parses JSON response into native JavaScript objects
	}
