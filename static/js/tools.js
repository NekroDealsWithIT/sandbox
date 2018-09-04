function updateById(id,value,type){
	var el = document.getElementById(id);
	switch (type){
		case 'html':
			el.innerHTML=value;
			break;
		case 'text':
		default:
			el.innerText=value;
	}	
}

function strReplaceAll(texto,reemplazar,por){
	if (texto!=undefined&&texto.length>0){
		return texto.split(reemplazar).join(por);	
	}else{
		return texto;
	}
}

function validateIP(str){
    var response={};
    try{
	    response.all=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str);
	    response.IPv4=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str);
	    response.IPv6=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str);
	 	if(response.all==false){response.str='invalid IP';}
	 	else{
	 		if (response.IPv4==true){response.str='IPv4';}
	 		if (response.IPv6==true){response.str='IPv6';}
	 	}
	 }catch(err){
	 	response.error=err;
	 	console.error(err);
	 }
 	return response;   
}

/*
function validateIPv6(str){
    return /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(str);
}
*/
//var idParameter=parse_query_string(window.location.search.substring(1));
var idParameter=window.location.search.substring(1);
if(idParameter.indexOf('id=')>-1){
  idParameter=idParameter.split('id=')[1];
}else{
  idParameter='';
}

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

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

function getWindDirection(data){
	if(data>=315){return "NO"};
	if(data>=270){return "O"};
	if(data>=225){return "SO"};
	if(data>=180){return "S"};
	if(data>=135){return "SE"};
	if(data>=90) {return "E"};
	if(data>=45) {return "NO"};
	if(data>=0)  {return "N"};
	return false;
}

function jsonResponse(data){
    console.log(data);
    var lat='';
    var lon='';
    var p={};
	p['timeGMTTD']='GMT '+(((new Date().getTimezoneOffset())/60)*-1)+'|text'; 
    p['timeActualTD']=datetime+'|text'; 

    try{
        if (data.dbIp!=null&&data.dbIp!=undefined&&!(data.dbIp.error!=undefined&&data.dbIp.error=="ratelimit_exceeded")){    
            var ipType=validateIP(data.dbIp.ipAddress);if(ipType!=undefined&&ipType.error==undefined){ipType=' ('+ipType.str+')';}else{ipType=''};

            p['geoPaisTD']=data.dbIp.countryName+'|text';
            p['geoContinentTD']=data.dbIp.continentName+'|text';
            p['geoCiudadTD']=data.dbIp.city+'|text';
            p['geoRegionTD']=data.dbIp.stateProv+'|text';
            
            p['ipPublicaTD']=data.dbIp.ipAddress+ipType+'|text';

            /*
            updateById('geoPaisTD',data.dbIp.countryName,'text');
            updateById('geoContinentTD',data.dbIp.continentName,'text');
            updateById('geoCiudadTD',data.dbIp.city,'text');
            updateById('ipPublicaTD',data.dbIp.ipAddress+ipType,'text');
            updateById('geoRegionTD',data.dbIp.stateProv,'text');
            */

        }
    }catch(e){
        console.log(e,data.dbIp);
    }
    
    try{
        if (data.ipInfo!=null&&data.ipInfo!=undefined&&!(data.ipInfo.error!=undefined&&data.ipInfo.error=="ratelimit_exceeded")){    
            var ipType=validateIP(data.ipInfo.ip);if(ipType!=undefined&&ipType.error==undefined){ipType=' ('+ipType.str+')';}else{ipType=''};
            ipData.locLat=data.ipInfo.loc.split(",")[0];
            ipData.locLon=data.ipInfo.loc.split(",")[1];

            p['geoLocTD']=data.ipInfo.loc+'|text';
            p['geoPaisTD']=data.ipInfo.country+'|text';
            p['geoCiudadTD']=data.ipInfo.city +' ('+data.ipInfo.postal+')'+'|text';
            p['geoRegionTD']=data.ipInfo.region+'|text';
            
            p['ipHostTD']=data.ipInfo.hostname+'|text';
            p['ipPublicaTD']=data.ipInfo.ip+ipType+'|text';
            p['ipEmpresaTD']=data.ipInfo.org+'|text';

            /*
            updateById('geoLocTD',data.ipInfo.loc,'text');
            updateById('geoPaisTD',data.ipInfo.country,'text');
            updateById('geoCiudadTD',data.ipInfo.city +' ('+data.ipInfo.postal+')','text');
            updateById('ipHostTD',data.ipInfo.hostname,'text');
            updateById('ipPublicaTD',data.ipInfo.ip+ipType,'text');
            updateById('geoLocTD',data.ipInfo.loc,'text');
            updateById('ipEmpresaTD',data.ipInfo.org,'text');
            updateById('geoRegionTD',data.ipInfo.region,'text');
            */
        }
    }catch(e){
        console.log(e,data.ipInfo);
    }

    try{
        if (data.cPub!=null&&data.cPub!=undefined&&!(data.cPub.error!=undefined&&data.cPub.error=="ratelimit_exceeded")){    
            var ipType=validateIP(data.cPub.traits.ipAddress);if(ipType!=undefined&&ipType.error==undefined){ipType=' ('+ipType.str+')';}else{ipType=''};
			ipData.locLat=data.cPub.location.latitude;
			ipData.locLon=data.cPub.location.longitude;

            p['geoCiudadTD']=data.cPub.city.names['en']+'|text';
            p['geoContinentTD']=data.cPub.continent.names['en']+'|text';
            p['geoLocTD']=data.cPub.location.latitude+','+data.cPub.location.longitude+' ('+data.cPub.location.accuracyRadius+')|text';
            p['geoRegionTD']=data.cPub.subdivisions[0].names['en']+'|text';
            p['geoPaisTD']=data.cPub.country.names['en']+'|text';
			
			//p['timeGMTTD']=data.cPub.location.timeZone+'|text';
            
            p['ipPublicaTD']=data.cPub.traits.ipAddress+ipType+'|text';

            p['secProxyTD']=data.cPub.traits.isAnonymousProxy+'|text';
            p['secTorTD']=data.cPub.traits.isAnonymousProxy+'|text';
            p['secTipoProxyTD']=data.cPub.traits.isSatelliteProvider+'|text';

            var proxyData='';
            var clase='';
            if(data.cPub.traits.isLegitimateProxy==true){clase="valid"}else{clase="invalid"};
            proxyData+='<p class="'+clase+'">Proxy legitimo</p>';
            if(data.cPub.traits.isAnonymousProxy==true){clase="valid"}else{clase="invalid"};
            proxyData+='<p class="'+clase+'">Proxy anonimo</p>';
            if(data.cPub.traits.isSatelliteProvider==true){clase="valid"}else{clase="invalid"};
            proxyData+='<p class="'+clase+'">Proxy satelital</p>';

            p['ipProxyTD']=proxyData+'|html';
        }
    }catch(e){
        console.log(e,data.cPub);
    }

    try{
        if (data.ipStack!=null&&data.ipStack!=undefined&&!(data.ipStack.error!=undefined&&data.ipStack.error=="ratelimit_exceeded")){
            var flag='<img src="'+data.ipStack.location.country_flag+'" height="12px">';
            p['geoContinentTD']=data.ipStack.continent_name+'|text';
            p['geoPaisTD']=flag+' '+document.getElementById("geoPaisTD").innerText+'|html';
            
            p['ipTipoTD']=data.ipStack.type+'|text';
            p['ipISPTD']=data.ipStack.connection.isp+'|text';
            p['ipProxyTD']=data.ipStack.security.is_proxy+'|text';
            
            p['secProxyTD']=data.ipStack.security.is_proxy+'|text';
            p['secTorTD']=data.ipStack.security.is_tor+'|text';
            p['secTipoProxyTD']=data.ipStack.security.proxy_type+'|text';
            
            p['timeActualTD']=data.ipStack.time_zone.current_time+'|text';
            p['timeGMTTD']='GMT '+data.ipStack.time_zone.code+'|text';

            /*
            updateById('geoContinentTD',data.ipStack.continent_name,'text');
            updateById('geoPaisTD',flag+' '+document.getElementById("geoPaisTD").innerText,'html');
            updateById('ipTipoTD',data.ipStack.type,'text');
            updateById('ipISPTD',data.ipStack.connection.isp,'text');
            updateById('ipProxyTD',data.ipStack.security.is_proxy,'text');
            updateById('secProxyTD',data.ipStack.security.is_proxy,'text');
            updateById('secTorTD',data.ipStack.security.is_tor,'text');
            updateById('secTipoProxyTD',data.ipStack.security.proxy_type,'text');
            updateById('timeActualTD',data.ipStack.time_zone.current_time,'text');
            updateById('timeGMTTD','GMT '+data.ipStack.time_zone.code,'text');
            */
        }
    }catch(e){
        console.log(e,data.ipStack);
    }

    try{
        if (data.weather!=null&&data.weather!=undefined&&!(data.weather.cod!=undefined&&data.weather.cod!=200)){
            var lat='';
            var lon='';
            if(ipData.locLat!=undefined&&ipData.locLon!=undefined){lat=ipData.locLat;lon=ipData.locLon;}
            if(ipData.rLocLat!=undefined&&ipData.rLocLon!=undefined){lat=ipData.rLocLat;lon=ipData.rLocLon;}

            var urlLink='<a href="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat='+lat+'&lon='+lon+'&zoom=10" target="blank"> 🔗Link </a>';
            var clima='<table>'+'<tr><th colspan="2">Clima Local '+urlLink+'</th></tr><tr><td>Zona</td><td>'+data.weather.name+'</td></tr>'+'<tr><td>Clima</td><td><img src="http://openweathermap.org/img/w/'+data.weather.weather[0].icon+'.png" class="imgOW">'+data.weather.weather[0].main+'</td></tr>'+'<tr><td>Descripcion</td><td>'+data.weather.weather[0].description+'</td></tr>'+'<tr><td>Temp</td><td>'+data.weather.main.temp+' °C (min:'+data.weather.main.temp_max+' °C - MAX:'+data.weather.main.temp_min+' °C)</td></tr>'+'<tr><td>Humedad</td><td>'+data.weather.main.humidity+'%</td></tr>'+'<tr><td>Presion</td><td>'+data.weather.main.pressure+' hpa</td></tr>'+'<tr><td>Viento</td><td>'+data.weather.wind.speed+'kn ['+(data.weather.wind.speed*1.852)+' km/h] ('+getWindDirection(data.weather.wind.deg)+')</td></tr>'+'<table>';
            p['geoClimaTD']=clima+'|html';
            //updateById('geoClimaTD',clima,'html');
        }
    }catch(e){
        console.log(e,data.ipStack);
    }
    
    var geoLocRealTD='---';
    var geoLocDeltaTD='---';
	if(ipData.rLocLat!=undefined&&ipData.rLocLat!=''&&ipData.rLocLon!=undefined&&ipData.rLocLon!=''){
		geoLocRealTD=ipData.rLocLat+','+ipData.rLocLon;
		if(ipData.locLat!=undefined&&ipData.locLon!=undefined){
			geoLocDeltaTD=haversineDistance([ipData.rLocLat,ipData.rLocLon],[ipData.locLat,ipData.locLon],false)+' KM';
		}
	}else{
		if(ipData.rLocErrCodeDesc!=undefined){
			geoLocRealTD=ipData.rLocErrCodeDesc;
		}    		
	}

    p['geoLocRealTD']=geoLocRealTD+'|text';
    p['geoLocDeltaTD']=geoLocDeltaTD+'|text';

    clearWaiting(p);
    if (navigator!=undefined&&navigator.vibrate!=undefined){
        //navigator.vibrate([500,200,1000,200,1000]);
        try{
            navigator.vibrate(1000);
        }catch(e){

        }
    }
}

function clearWaiting(p){
    for (var i = 0; i < fieldsTD.length; i++) {
        var f=p[fieldsTD[i]];
        if(f==undefined){
          if(document.getElementById(fieldsTD[i]).innerHTML==imgLoading){
            document.getElementById(fieldsTD[i]).innerText='No disponible temporalmente';
            document.getElementById(fieldsTD[i]).innerText='---';
          }
        }else{
            f=f.split('|');
            updateById(fieldsTD[i],f[0],f[1]);
        }
    }
}


/* 
Agregar a favoritos
*/
function bookmark()
{
    var bookmarkurl = "http://www.infodolar.com/";
    var bookmarktitle = "Dólar - InfoDolar.com";
    if (document.all) // IE
        window.external.AddFavorite(bookmarkurl, bookmarktitle);
    else if (window.sidebar) // firefox
        window.sidebar.addPanel(bookmarktitle, bookmarkurl, "");
}

/* 
Buscar todas las funciones de una pagina [usar getAllMethods(window) y buscar los ultimos]
*/

function getAllMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof object[property] == 'function';
    });
}

/*
	GeoLocacion
*/
/*
function getLocation(callback) {
    var data={};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.gotPosition, this.showError);
    } else {
        data.error="Geolocation no soportada."
        return data;
    }

	function showError(error) {
	    switch(error.code) {
	        case error.PERMISSION_DENIED:
	            data.error="Geolocation denegada."
	            break;
	        case error.POSITION_UNAVAILABLE:
	            data.error="Location no disponible."
	            break;
	        case error.TIMEOUT:
	            data.error="Location timed out."
	            break;
	        case error.UNKNOWN_ERROR:
	            data.error="Error desconocido."
	            break;
	    }
	    return data;
	}
	function gotPosition(position,divHolderMap) {
	    data.lat=position.coords.latitude;
	    data.lon=position.coords.longitude;

	    var latlon = position.coords.latitude + "," + position.coords.longitude;
	    console.log(data);
	    return data;
	}
	return data;
}
*/
var callbackCurrentLocation='';
var errCallbackCurrentLocation='';
function getBrowserCurrentLocation(callback,errCallback,timeout){
	callbackCurrentLocation=callback;
	errCallbackCurrentLocation=errCallback;
	
	var geoLocationData={};
	var location= function x(){
		if (timeout==undefined||timeout==''){timeout=5000}
		var options = {
		  enableHighAccuracy: true,
		  timeout: timeout,
		  maximumAge: 0
		};
		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(
	        	function pos(position){
	        		geoLocationData={};
	        		geoLocationData.lat=position.coords.latitude;
    				geoLocationData.lon=position.coords.longitude;
    				if(callbackCurrentLocation!=''&&typeof callbackCurrentLocation=='function'){
	    				callbackCurrentLocation(geoLocationData);
    				}else{
    					console.log(geoLocationData)
    				}
	        	},
	        	function error(error){
	        		 geoLocationData={};
	        		 switch(error.code) {
				        case error.PERMISSION_DENIED:
				            geoLocationData.errorDesc="Geolocation denegada";
				            break;
				        case error.POSITION_UNAVAILABLE:
				            geoLocationData.errorDesc="Geolocation no disponible";
				            break;
				        case error.TIMEOUT:
				            geoLocationData.errorDesc="Geolocation timed out";
				            break;
				        case error.UNKNOWN_ERROR:
				            geoLocationData.errorDesc="Error desconocido";
				            break;
				    }
					geoLocationData.errCode=error.code;
				    if(errCallbackCurrentLocation!=''&&typeof errCallbackCurrentLocation=='function'){
	    				errCallbackCurrentLocation(geoLocationData);
    				}else{
    					console.info(geoLocationData);
    				}
	        	}
	        	,options);
	    } else {
	        geoLocationData={};
	        geoLocationData.errCode='OLD_BROWSER'
	        geoLocationData.errorDesc="Geolocation no soportada";
			if(errCallbackCurrentLocation!=''&&typeof errCallbackCurrentLocation=='function'){
				errCallbackCurrentLocation(geoLocationData);
			}else{
				console.info(geoLocationData);
			}
	    }
	}
	location.apply(timeout);
	location();
}
/*
Geoloc distancia entre dos puntos
coords como array ([lat,lon])
*/
function haversineDistance(coords1, coords2, isMiles) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var lon1 = coords1[0];
  var lat1 = coords1[1];

  var lon2 = coords2[0];
  var lat2 = coords2[1];

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  if(isMiles) d /= 1.60934;

  return d;
}

function showPositionInMap(position,divHolderMap) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    document.getElementById(divHolderMap).innerHTML = "<img src='"+img_url+"'>";
}