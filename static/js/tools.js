function fetchStatus(address) {
  var client = new XMLHttpRequest();
  client.onreadystatechange = function() {
    // in case of network errors this might not give reliable results
    if(this.readyState == this.DONE)
      returnStatus(this.status);
  }
  client.open("HEAD", address);
  client.send();
}

const copyToClipboard = str => {
	const el = document.createElement('textarea');  	// Create a <textarea> element
	el.value = str;                                 	// Set its value to the string that you want copied
	el.setAttribute('readonly', '');                	// Make it readonly to be tamper-proof
	el.style.position = 'absolute';                 
	el.style.left = '-9999px';                      	// Move outside the screen to make it invisible
	document.body.appendChild(el);                  	// Append the <textarea> element to the HTML document
	const selected =            
	document.getSelection().rangeCount > 0        		// Check if there is any content selected previously
	? document.getSelection().getRangeAt(0)     		// Store selection if found
	: false;                                    		// Mark as false to know no selection existed before
	el.select();                                    	// Select the <textarea> content
		document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
		//console.log(str);
		document.body.removeChild(el);                  // Remove the <textarea> element
	if (selected) {                                 	// If a selection existed before copying
		document.getSelection().removeAllRanges();    	// Unselect everything on the HTML document
		document.getSelection().addRange(selected);   	// Restore the original selection
	}
};

function stringToSlug(str) {
	str = str.replace(/^\s+|\s+$/g, ""); // trim
	str = str.toLowerCase();

	// remove accents, swap ñ for n, etc
	var from = 	"åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
	var to = 	"aaaaaaeeeeiiiioooouuuunc------";

	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
	}

	str = str
	.replace(/[^a-z0-9 -]/g, "") // remove invalid chars
	.replace(/\s+/g, "-") // collapse whitespace and replace by -
	.replace(/-+/g, "-"); // collapse dashes

	return str;
}

//requiere esto en el HTML
// <script type="text/javascript" charset="utf-8" src="http://bit.ly/javascript-api.js?version=latest&amp;login=emlo&amp;apiKey=R_6b2f33956923c76b2a206af41e4bab0c"></script>
// o
// <script type="text/javascript" charset="utf-8" src="http://bit.ly/javascript-api.js?version=latest&amp;login=delzon&amp;apiKey=R_0438e51fc6cc3e2f3a66179db9a5a0af"></script>
function shortenUrl(url,into){
	BitlyCB.myShortenCallback = function(data) {
	// this is how to get a result of shortening a single url
	var result;
	for (var r in data.results) {
		result = data.results[r];
		result['longUrl'] = r;
		break;
	}
		return document.getElementById(into).innerHTML=result['shortUrl'];
	}
	BitlyClient.shorten(url, 'BitlyCB.myShortenCallback');
}

function generateTable(arrayTable,arrayTH='',claseTable='',idTable='',atribsTable='',headTable=false,bodyTable=false){
	var table='<table'+
				((claseTable!=''&&claseTable!=undefined)?' class="'+claseTable+'"':'')+
				((idTable!=''&&idTable!=undefined)?' id="'+idTable+'"':'')+
				((atribsTable!=''&&atribsTable!=undefined)?' '+atribsTable:'')+
				'>\n';
	
	if(arrayTH!=''&&arrayTH!=undefined){
		if(headTable){
			table+='<THEAD>\n<TR>\n';
		}else{
			table+='<TR>\n';
		}
		arrayTH.forEach(function(arrayTHvalues) {
			arrayTHvalues.forEach(function(TH) {
				if (TH!=undefined){
					var valueTH=TH[0],classTH=TH[1],idTH=TH[2],attribTH=TH[3];
					table+='<TH'+ 
						((classTH!=undefined&&classTH!='')?' class="'+classTH+'"':'') +
						((idTH!=undefined&&idTH!='')?' id="'+idTH+'"':'') +
						((attribTH!=undefined&&attribTH!='')?' '+attribTH:'') +
						'>\n'+valueTH+'\n</TH>\n';
						'</TH>\n';
				}
			});
		});
		if(headTable){
			table+='</TR>\n</THEAD>\n';
		}else{
			table+='</TR>\n';
		}
	}
	if(bodyTable){
		table+=((arrayTable!=''&&arrayTable!=undefined)?'<TBODY>\n':'');
	}
	arrayTable.forEach(function(arrayTD) {
		table+='<TR>\n'
		arrayTD.forEach(function(TD){
			if (TD!=undefined){
				var valueTD=TD[0],classTD=TD[1],idTD=TD[2],atribTD=TD[3];
				table+='<TD'+ 
					((classTD!=undefined&&classTD!='')?' class="'+classTD+'"':'') +
					((idTD!=undefined&&idTD!='')?' id="'+idTD+'"':'') +
					((atribTD!=undefined&&atribTD!='')?' '+atribTD:'') +
					'>\n'+valueTD+'\n</TD>\n';
			}
		});
		table+='</TR>\n'
	});
	if(bodyTable){
		table+=((arrayTable!=''&&arrayTable!=undefined)?'</TBODY>\n':'');
	}

	table+='</table>'
	return table
}
