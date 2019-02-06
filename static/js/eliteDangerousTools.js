//https://stackoverflow.com/questions/14885231/getting-value-of-a-cell-from-google-docs-spreadsheet-into-javascript

/*
window.onbeforeunload = function(){
	document.body.removeChild(document.querySelector('canvas'));
}
// OR
window.addEventListener("beforeunload", function(e){
	document.body.removeChild(document.querySelector('canvas'));
}, false);
*/
const URLJson="https://docs.google.com/spreadsheet/pub?key=1bMpMZnxUIcG7fgBcmzP8Np5v7fKT2VafDQy5Nv06_gs&single=true&gid=0&range=d3&output=csv";
let sheetJson="";
function getJson(){
	try{
		$.ajax(URLJson).done(function(result){
	    	sheetJson=result;
			console.log(sheetJson);
			sheetJson=strReplaceAll(result,"'",'"')
			console.log(sheetJson);
			sheetJson=JSON.parse(sheetJson);
			console.log(sheetJson);
	    	alert(result);
		});
	}catch (e){
		console.error(e);
	}	
}
getJson();
//getUrl(URLJson);

function onunload(e){
	testIframe!=undefined?testIframe.close():'';
	canvas = document.querySelector('canvas');
	ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	document.body.removeChild(document.querySelector('canvas'));
}
window.addEventListener('close',e=>{onunload(e);})
window.addEventListener('unload',e=>{onunload(e);})
window.addEventListener('beforeunload',e=>{onunload(e);})

const p_r={
	'MiArIDE=':'3',
	'MiArIDg=':'10',
	'MiB5IDI=':'4',
	'NCAmIDI=':'6',
	'NiArIDI=':'8',
	'OCArIDg=':'16'
};
const uri="aHR0cHM6Ly9uZWtyby1zYW5kYm94LjAwMHdlYmhvc3RhcHAuY29tL2xpbmtzLnBocA==";

var filters={};

function generateTypeFilters(){
	let types=[];
	defaultToolsArr.forEach(t=>{
		t.lenguajes.forEach(l=>{
			types.push(l.toUpperCase());
		})
	})
	types=arrayUnique(types);
	let table="<table border='3px solid white'><tr><th>Tag</th><th>Ignore</th><th>Has</th><th>Hasnt</th></tr>";
	types.forEach(t=>{
		checkboxFilters.innerHTML+='<label><input type="checkBox" onclick="updateFilters(this);" name="lenguajes" value="'+t+'">'+t+'</label>';
		table+='<tr><td>'+t+'</td>	<td class="radioYellow" align="center" onclick="updateRadioButtons();"><input type="radio" name="'+t+'" value="-1" checked></label></td> <td class="radioGreen" align="center" onclick="updateRadioButtons();"><input type="radio" name="'+t+'" value="1"></label></td>	<td class="radioRed" align="center" onclick="updateRadioButtons();"><input type="radio" name="'+t+'" value="0"></label></td>	</tr>';
	})
	table+='</table>';

	checkboxFilters.innerHTML+=table;
}

function updateRadioButtons(){
	let checks=document.querySelectorAll("#checkboxFilters table input");
	let radioFilters={'show':[],'hide':[]};
	checks.forEach(c=>{
		if(c.checked){
			c.value==0?radioFilters.hide.push(c.name):'';
			c.value==1?radioFilters.show.push(c.name):'';
		}
	});
	/*
	filters.active=false;
	document.querySelectorAll("#filtros input[type=checkbox]").forEach(c=>{
		filters[c.value.toUpperCase()]=c.checked;
		c.checked==true?filters.active=true:'';
	});

	if(fetchedTools.length==0){
		draw(defaultToolsArr,'toolsContainer');
	}else{
		draw(fetchedTools.checked,'toolsContainer');
		draw(fetchedTools.sugested,'toolsSugestedContainer');
	}
	*/
}
var fetchedTools=[];
var defaultToolsArr=[
	/*
	 {'iframe':true,	'check':'true','autor':'nekro','id':'0','lenguajes':['JSON']									,'title':'jsonviewer','url':'http://jsonviewer.stack.hu','desc':'Json parser','type':'JSON','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'1','lenguajes':[]											,'title':'utf8icons','url':'https://www.utf8icons.com','desc':'Utf 8 icons','type':'Icons','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'2','lenguajes':['HTTP']									,'title':'htaccessredirect','url':'https://www.htaccessredirect.net','desc':'Htta generator','type':'Htta','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'3','lenguajes':[]											,'title':'mxtoolbox','url':'https://mxtoolbox.com/NetworkTools.aspx','desc':'Ip toolbox','type':'Ip Analisis','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'4','lenguajes':['JSON']									,'title':'ip-tracker','url':'https://www.ip-tracker.org/locator/ip-lookup.php','desc':'Ip toolbox','type':'Ip Analisis','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'5','lenguajes':['JSON']									,'title':'ipinfo.io','url':'http://ipinfo.io','desc':'Ip information','type':'Ip Analisis','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'6','lenguajes':['JSON']									,'title':'Google geocode','url':'http://maps.googleapis.com/maps/api/geocode/json?latlng=[lat],[lon]&sensor=true','desc':'Reverse GEO','type':'GEO Location','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'7','lenguajes':[]											,'title':'histats','url':'http://www.histats.com','desc':'Counters','type':'Counter','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'8','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'jsfiddle','url':'https://jsfiddle.net','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'9','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'cssdeck','url':'http://cssdeck.com','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'A','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'Plunker','url':'http://next.plnkr.co','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'B','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'liveweave','url':'https://liveweave.com','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'C','lenguajes':['REGEX']									,'title':'debuggex','url':'https://www.debuggex.com','desc':'Graficador de REGEX','type':'REGEX','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'D','lenguajes':[]											,'title':'bitly','url':'https://app.bitly.com','desc':'Acortador de links','type':'Links','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'E','lenguajes':[]											,'title':'browserling','url':'https://www.browserling.com','desc':'Pruebas crossBrowser','type':'QA','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'F','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'cleancss','url':'https://www.cleancss.com','desc':'Caja de herramientas','type':'Toolbox','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'G','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'codebeautify','url':'https://codebeautify.org','desc':'Caja de herramientas','type':'Toolbox','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'H','lenguajes':[]											,'title':'subtlepatterns','url':'https://www.toptal.com/designers/subtlepatterns','desc':'Fondos sutiles','type':'Fondos','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'I','lenguajes':[]											,'title':'youmightnotneedjquery','url':'http://youmightnotneedjquery.com','desc':'Ayuda a entender si necesitamos o no jquery','type':'QA','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'J','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'caniuse','url':'https://caniuse.com','desc':'Testing de funcionalidades y soporte','type':'QA','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'K','lenguajes':[]											,'title':'es6-features','url':'http://es6-features.org','desc':'Testing de funcionalidades y soporte de ECMA6','type':'QA','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'L','lenguajes':[]											,'title':'kangax','url':'http://kangax.github.io/compat-table/es5','desc':'Testing de funcionalidades y soporte de ECMA','type':'QA','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'M','lenguajes':['CSS']										,'title':'css3test','url':'http://css3test.com','desc':'Testing de funcionalidades y soporte de CSS3','type':'QA','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'N','lenguajes':['CSS']										,'title':'css3please','url':'http://css3please.com','desc':'Prueba de codigo rapida y aislada de CSS3','type':'Code playground','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'O','lenguajes':['JAVASCRIPT']								,'title':'30 dias de javascript','url':'https://javascript30.com','desc':'Tutoriales para javascript','type':'Tutoriales','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'P','lenguajes':['JAVASCRIPT']								,'title':'Javascript for cats','url':'http://jsforcats.com','desc':'Tutoriales para javascript','type':'Tutoriales','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'Q','lenguajes':[]											,'title':'Freepngimg','url':'https://www.freepngimg.com','desc':'Imagenes para favicons e iconos','type':'Icons','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'R','lenguajes':[]											,'title':'PicResize','url':'http://picresize.com','desc':'Editor online de Imagenes','type':'Icons','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'S','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'StackOverflow','url':'https://stackoverflow.com','desc':'Foro de programacion','type':'Foro','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'T','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'NetLify','url':'https://www.netlify.com','desc':'Hosting con hooks contra git','type':'Hosting','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'U','lenguajes':['JAVASCRIPT','CSS','HTML','PHP','MYSQL']	,'title':'000WebHost','url':'https://www.000webhost.com','desc':'Hosting con PHP y MySql','type':'Hosting','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'V','lenguajes':[]											,'title':'GitHub','url':'https://github.com','desc':'Cliente sencillo GIT','type':'GIT','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'W','lenguajes':[]											,'title':'BitBucket','url':'https://bitbucket.org','desc':'Cliente GIT','type':'GIT','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'X','lenguajes':[]											,'title':'DomainTools','url':'http://whois.domaintools.com','desc':'Analisis de ip','type':'Ip Analisis','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'Y','lenguajes':['CSS']										,'title':'CSS Tricks','url':'https://css-tricks.com','desc':'Foro de CSS','type':'Foro','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'Z','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'W3C Validator','url':'https://validator.w3.org','desc':'Validador de HTML5','type':'Validador','added':'06-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'a','lenguajes':['KANBAN']									,'title':'Trello','url':'https://trello.com','desc':'Seguimiento de incidencias','type':'Kanban','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'b','lenguajes':['CSS']										,'title':'Cubic bezier','url':'http://cubic-bezier.com','desc':'Calculo de cubic bezier para animaciones de CSS','type':'Animaciones CSS','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'c','lenguajes':['JAVASCRIPT','CSS','HTML']					,'title':'codepen','url':'https://codepen.io','desc':'Prueba de codigo rapida y aislada','type':'Code playground','added':'06-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'d','lenguajes':['JAVASCRIPT','CSS','HTML','OTROS']			,'title':'Wappalyzer','url':'https://www.wappalyzer.com/','desc':'Relevamiento tecnologias usadas en el sitio','type':'QA','added':'13-09-2018'}
	,{'iframe':true,	'check':'true','autor':'nekro','id':'e','lenguajes':[]											,'title':'freepik','url':'https://www.freepik.com','desc':'Imagenes gratuitas','type':'Icons','added':'13-09-2018'}
	,{'iframe':false,	'check':'true','autor':'nekro','id':'f','lenguajes':['JAVASCRIPT','CSS','OTROS']				,'title':'Google cloud CDN','url':'https://cloud.google.com/cdn','desc':'Content delivery network de google','type':'CDN','added':'13-09-2018'}
	*/
{'id':'1','title':'Elite Dangerous Companion','type':'Resources','desc':'Elite Dangerous Companion','url':'https://inara.cz','iframe':0,'check':'TRUE','autor':'Nekro','lenguajes':['COMMUNITY GOALS','COMMODITIES','SHIPYARD','OUTFITTING','ENGINEERING','POWERS','MINOR FACTIONS','SYSTEMS','STATIONS','TRADING','EXPLORATION','MINING','BOUNTY','POWER PLAY','CORE URL'],'added':'02-05-2019'},
{'id':'2','title':'EDDB - Elite: Dangerous Database','type':'Resources','desc':'EDDB - Elite: Dangerous Database','url':'https://eddb.io','iframe':0,'check':'TRUE','autor':'Nekro','lenguajes':['SYSTEMS','STATIONS','FACTIONS','COMMODITIES','BODIES','TRADING','EXPLORATION','MINING','BOUNTY','POWER PLAY','CORE URL'],'added':'02-05-2019'},
{'id':'3','title':'Elite Dangerous Star Map','type':'Resources','desc':'Elite Dangerous Star Map','url':'https://www.edsm.net/en/','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['SYSTEMS','STATIONS','BODIES','MINOR FACTIONS','TRADING','EXPLORATION','MINING','BOUNTY','POWER PLAY'],'added':'02-05-2019'},
{'id':'4','title':'Pristine Metallics Distances Calculator','type':'Resources','desc':'Pristine Metallics Distances Calculator','url':'http://edtools.ddns.net/','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MINING'],'added':'02-05-2019'},
{'id':'5','title':'Elite: Dangerous Board','type':'Resources','desc':'Elite: Dangerous Board','url':'https://ed-board.net/en/','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['ENGINERING','BUILD','EXPLORATION','POWER PLAY','CONFLICTS','ELEMENTS'],'added':'02-05-2019'},
{'id':'6','title':'EDEngineer (layout)','type':'Installers','desc':'','url':'https://github.com/msarilar/EDEngineer','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['ENGINERING'],'added':'02-05-2019'},
{'id':'7','title':'EDDiscovery (layout)','type':'Installers','desc':'','url':'https://github.com/EDDiscovery/EDDiscovery/wiki','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['EXPLORATION'],'added':'02-05-2019'},
{'id':'8','title':'RES Searching','type':'Bounty','desc':'','url':'http://edtools.ddns.net/res.php','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BOUNTY'],'added':'02-05-2019'},
{'id':'9','title':'Road To Riches','type':'Resources','desc':'','url':'https://www.spansh.co.uk/riches','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['EXPLORATION','CORE URL'],'added':'02-05-2019'},
{'id':'10','title':'WaveScanner','type':'Exploration','desc':'','url':'http://wavescanner.net/','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['EXPLORATION','PROSPECTING'],'added':'02-05-2019'},
{'id':'11','title':'Coriolis.io','type':'FIT Ships','desc':'','url':'https://coriolis.io/','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','CORE URL'],'added':'02-05-2019'},
{'id':'12','title':'Cannon','type':'MegaShips','desc':'','url':'https://canonn.science/codex/megaships/','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['EXPLORATION','ENGINEERING','CORE URL'],'added':'02-05-2019'},
{'id':'13','title':'Color HUD','type':'UI','desc':'Color de hud Rainoa','url':'http://arkku.com/elite/hud_editor/#theme_0.31_0_1_0_1_0_1_0_0','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MISCELANEOUS'],'added':'02-05-2019'},
{'id':'14','title':'Voice activation','type':'UI','desc':'Voice Commands','url':'http://voiceattack.com/','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MISCELANEOUS'],'added':'02-05-2019'},
{'id':'15','title':'EDDI: The Elite Dangerous Data Interface','type':'Installers','desc':'','url':'https://github.com/EDCD/EDDI','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MISCELANEOUS'],'added':'02-05-2019'},
{'id':'16','title':'Elite: Dangerous Market Connector (EDMC)','type':'Installers','desc':'','url':'https://github.com/Marginal/EDMarketConnector/wiki','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['TRADING','MISCELANEOUS'],'added':'02-05-2019'},
{'id':'17','title':'FuelRats','type':'Exploration','desc':'FuelRats','url':'https://fuelrats.com/i-need-fuel','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['EXPLORATION'],'added':'02-05-2019'},
{'id':'18','title':'HOW TO MAKE EASY CREDITS [Elite Dangerous]','type':'Miscelaneous','desc':'','url':'https://youtu.be/J7NDeUpR5y8','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['CREDITS','YOUTUBE'],'added':'02-05-2019'},
{'id':'19','title':'5 beginner SHIP tips [Elite Dangerous]','type':'Miscelaneous','desc':'','url':'https://youtu.be/B1vDlVpxgIE','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','YOUTUBE'],'added':'02-05-2019'},
{'id':'20','title':'Top Tips No One Ever Follows | Elite Dangerous','type':'Miscelaneous','desc':'','url':'https://youtu.be/FXl8cLqcXqU','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MISCELANEOUS','YOUTUBE'],'added':'02-05-2019'},
{'id':'21','title':'Elite Dangerous Port Forwarding','type':'Miscelaneous','desc':'','url':'https://support.frontier.co.uk/kb/faq.php?id=344','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MISCELANEOUS','GUIDE'],'added':'02-05-2019'},
{'id':'22','title':'Make Elite look even better! | Graphic settings guide','type':'Miscelaneous','desc':'','url':'https://youtu.be/0hF7BzSjYAE','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MISCELANEOUS','YOUTUBE'],'added':'02-05-2019'},
{'id':'23','title':'MoneyMaking (STARTER)','type':'Miscelaneous Guide','desc':'','url':'https://youtu.be/FhGXtAZ8kKQ','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['CREDITS','YOUTUBE'],'added':'02-05-2019'},
{'id':'24','title':'Rags to Riches: An Elite Dangerous Beginner&#39;s Guide to Making Credits in Version 3.3','type':'Miscelaneous Guide','desc':'','url':'https://www.youtube.com/watch?v=FhGXtAZ8kKQ','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['CREDITS','MINING','BOUNTY','EXPLORATION','YOUTUBE'],'added':'02-05-2019'},
{'id':'25','title':'Elite Dangerous Beginner&#39;s Guide - Making Money','type':'Miscelaneous Guide','desc':'','url':'https://youtu.be/zdOMBo_xen8','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['CREDITS','YOUTUBE','YOUTUBE'],'added':'02-05-2019'},
{'id':'26','title':'The Complete Pirate Guide','type':'Piracy','desc':'','url':'http://remlok-industries.fr/1647/the-complete-pirate-guide/?lang=en','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['PIRACY','GUIDE'],'added':'02-05-2019'},
{'id':'27','title':'Elite Dangerous: Piracy - Improved Strategies','type':'Piracy','desc':'','url':'https://www.youtube.com/watch?v=nHKBhttDJ_0','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['PIRACY','BUILD','YOUTUBE','YOUTUBE'],'added':'02-05-2019'},
{'id':'28','title':'Money Making META : Piracy (up to) 300mil/h [Elite Dangerous]','type':'Piracy','desc':'','url':'https://youtu.be/irPvio6knYg','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['PIRACY','BUILD','YOUTUBE','YOUTUBE'],'added':'02-05-2019'},
{'id':'29','title':'THE ULTIMATE GUIDE TO ELITE DANGEROUS EXPLORATION','type':'Exploration','desc':'','url':'https://www.alpha-orbital.com/news/the-ultimate-guide-to-elite-dangerous-exploration','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['EXPLORATION','GUIDE'],'added':'02-05-2019'},
{'id':'30','title':'The Complete Explorer Guide','type':'Exploration','desc':'','url':'http://remlok-industries.fr/1245/the-complete-explorer-guide/?lang=en','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['EXPLORATION','GUIDE'],'added':'02-05-2019'},
{'id':'31','title':'Elite: Dangerous - Ultimate Exploration Tutorial','type':'Exploration','desc':'','url':'https://www.youtube.com/watch?v=7bUXHhMjX0c&t=0s','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'32','title':'DISTANT WORLDS TUTORIAL: How to prospect safely in extreme conditions','type':'Exploration','desc':'','url':'https://youtu.be/Q55du1Ewqc0','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'33','title':'SRV CONTROLS GUIDE','type':'Exploration','desc':'','url':'https://forums.frontier.co.uk/showthread.php/269544-How-To-SRV-controls-(gamepad)','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['PROSPECTING','ENGINERING','GUIDE'],'added':'02-05-2019'},
{'id':'34','title':'ENGINEER GUIDE: From Fresh Start to Max-Engineered PvP Ship in Less Than Two Weeks','type':'Engineering','desc':'','url':'https://forums.frontier.co.uk/showthread.php/369330-ENGINEER-GUIDE-From-Fresh-Start-to-Max-Engineered-PvP-Ship-in-Less-Than-Two-Weeks','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['PROSPECTING','ENGINERING','GUIDE'],'added':'02-05-2019'},
{'id':'35','title':'Top 10 resource gattering','type':'Engineering','desc':'','url':'https://www.youtube.com/watch?v=VHWXKM_UHGA&feature=youtu.be','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'36','title':'A Prospectors Guide to the Galaxy (collating data on prospecting in Horizons)','type':'Engineering','desc':'','url':'https://forums.frontier.co.uk/showthread.php?t=207098','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['PROSPECTING','ENGINERING','GUIDE'],'added':'02-05-2019'},
{'id':'37','title':'Engineering Explained: Complete Process','type':'Engineering','desc':'','url':'https://www.youtube.com/watch?v=UWVRZd1lNE0','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'38','title':'Maxing out Grade 5 Manufactured Materials','type':'Engineering','desc':'','url':'https://youtu.be/7eZntrFNvaQ','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'39','title':'Ultimate Guide to finding Grade 5 Engineering Data after 3.0','type':'Engineering','desc':'','url':'https://youtu.be/aCYSBo3nf3M','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'40','title':'Tutorial: Material Gathering Made Easy(er)','type':'Engineering','desc':'','url':'https://youtu.be/lvty7VY4pMw','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'41','title':'Elite Dangerous - The Engineers - FSD Upgrades [Wake Echoes, Arsenic, Chemical Processors]','type':'Engineering','desc':'','url':'https://youtu.be/DUeAsVzys7Y','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'42','title':'Elite Dangerous - Collecting Surface Material (Driving the SRV) - PS4','type':'Engineering','desc':'','url':'https://youtu.be/1b0JnfphpLc','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'43','title':'Elite: Dangerous - Meeting your First Engineer - FSD Upgrades from the Fish Lady','type':'Engineering','desc':'','url':'https://youtu.be/j37sikMNuXU','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'44','title':'✔ Elite: Dangerous - Engineer Tutorial - Unlocking & Ranking Up.','type':'Engineering','desc':'','url':'https://youtu.be/5W7U4Ne4zU8','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'45','title':'Empire rank','type':'Power Play','desc':'','url':'https://www.youtube.com/watch?v=JhA0hRX7FZA','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'46','title':'Easy Merits','type':'Power Play','desc':'','url':'https://www.youtube.com/watch?v=pn8X1L3R3NI','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'47','title':'How to get special modules from Power Play in Elite dangerous','type':'Power Play','desc':'','url':'https://www.youtube.com/watch?v=pzR2M9qxB94','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'48','title':'Elite Dangerous - COMPLETE Guardian Modules Tutorial - EP 1','type':'Guardian Modules','desc':'','url':'https://youtu.be/uNNcXkdP7z0','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'49','title':'The complete trading guide','type':'Trading','desc':'','url':'http://remlok-industries.fr/822/the-complete-trader-guide/?lang=en','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['TRADING','GUIDE'],'added':'02-05-2019'},
{'id':'50','title':'How to complete Black Box Missions! Elite Dangerous Tip (2017)','type':'Trading','desc':'','url':'https://www.youtube.com/watch?v=eCFOElFF-eM','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['YOUTUBE'],'added':'02-05-2019'},
{'id':'51','title':'The Complete Miner Guide','type':'Mining','desc':'','url':'http://remlok-industries.fr/534/the-complete-miner-guide/?lang=en','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MINING','GUIDE'],'added':'02-05-2019'},
{'id':'52','title':'CMDR MadProphet&#39;s guide to Core Mining','type':'Mining','desc':'','url':'https://www.reddit.com/r/EliteMiners/comments/a6ls9t/cmdr_madprophets_guide_to_core_mining/?utm_source=reddit-android','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MINING','GUIDE'],'added':'02-05-2019'},
{'id':'53','title':'Ast&#39; Cracks: A visual guide for deep core mining','type':'Mining','desc':'','url':'https://steamcommunity.com/sharedfiles/filedetails/?id=1593415736','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MINING','GUIDE'],'added':'02-05-2019'},
{'id':'54','title':'Advanced Miners Guide : The Perfect Mining Spot','type':'Mining','desc':'','url':'https://www.youtube.com/watch?v=htdpct-6Mg8&feature=youtu.be','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MINING','YOUTUBE'],'added':'02-05-2019'},
{'id':'55','title':'Mining Python - No Engineering test #1 Down To Earth Astronomy','type':'Mining','desc':'','url':'https://youtu.be/Fj1RuYNnqU8','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MINING','YOUTUBE'],'added':'02-05-2019'},
{'id':'56','title':'Elite Dangerous - COMPLETE Void Opal Mining Tutorial - From A-Z','type':'Mining','desc':'','url':'https://youtu.be/yz3muxSfsfg','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['MINING','YOUTUBE'],'added':'02-05-2019'},
{'id':'57','title':'The Complete Fighter Guide','type':'Bounty','desc':'','url':'http://remlok-industries.fr/5576/the-complete-fighter-guide/?lang=en','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['GUIDE','BOUNTY'],'added':'02-05-2019'},
{'id':'58','title':'Haz Res','type':'Bounty','desc':'','url':'https://www.youtube.com/watch?v=qoQgRV1f4WU','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BOUNTY','YOUTUBE'],'added':'02-05-2019'},
{'id':'59','title':'God res site','type':'Bounty','desc':'','url':'https://www.youtube.com/watch?v=5hfLABFhxA8','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BOUNTY','YOUTUBE'],'added':'02-05-2019'},
{'id':'60','title':'The Complete Passengers Carrier Guide','type':'Passenger','desc':'','url':'http://remlok-industries.fr/6685/the-complete-passengers-carrier-guide/?lang=en','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['PASSENGER','GUIDE'],'added':'02-05-2019'},
{'id':'61','title':'Elite Dangerous: DBS Hull Tank - Hard as Rails','type':'Bounty','desc':'','url':'https://www.youtube.com/watch?time_continue=1&v=X11swEUxtCI','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','BOUNTY','YOUTUBE'],'added':'02-05-2019'},
{'id':'62','title':'Elite Dangerous: Vulture Hull Tank in the Haz RES','type':'Bounty','desc':'','url':'https://youtu.be/KdYB3la4374','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','BOUNTY','YOUTUBE'],'added':'02-05-2019'},
{'id':'63','title':'My mining clipper Build | Core Hunting build | Elite: Dangerous','type':'Mining','desc':'','url':'https://www.youtube.com/watch?v=--wLRYGqg7Y','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','BOUNTY','YOUTUBE'],'added':'02-05-2019'},
{'id':'64','title':'Mining Phyton','type':'Mining','desc':'','url':'https://coriolis.io/outfit/python?code=A0pptkFflfdussf5papa2b3M3R2x0404040505054a37C0P91q2i.Iw18eQ%3D%3D.EwBjEYxceOoccwDMIg%3D%3D.H4sIAAAAAAAAA32RvUrDYBSG36Q%2FtklsmpK0qSCojT8gFNdOjrq4Kbi6ODgVF5cMegvi6OAlODr0IhwdRDp6AQ4i9RzfE2noohkeDnkfcr68H2QJwHeNmN0S%2FsQFlq8DIDrl1HnygezDAdSRfTMdM3OiYW%2FDQFS7j1XmrnQtr1h%2BSYT5TDWeEsmOB6RrTAYPIc2KrJQ7r8zMvlSLTXGe0HxlojUZldIN0bRN3l0ErNu0YdOmTVs2aV3O5ts74x4w3PtU7RdRQ07KL1mO9jZQNRRm%2BswGVt%2BZaHPBDP41PTkuzXOiNx0CfTN3DYOisZYczhvz71U1MmRWsIZ%2FR205KKOi4jF%2FMrIpNfxeRixH5f4Lwk3Zc93uwR%2FxfNEbkby0qE94ZlUsPj%2BRz1zS9AEAAA%3D%3D.EweloBhBmUA5QFMCGBzANokICMF8hRFA&bn=Python%20Prospector','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','MINING'],'added':'02-05-2019'},
{'id':'65','title':'FER DE LANCE','type':'Bounty','desc':'','url':'https://www.reddit.com/r/EliteDangerous/comments/5u8ylc/ferdelance_best_respve_build/?utm_source=reddit-android','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','BOUNTY'],'added':'02-05-2019'},
{'id':'66','title':'FER DE LANCE PVE MULTICANNON','type':'Bounty','desc':'','url':'https://coriolis.io/outfit/fer_de_lance?code=A4pktfFalidpsff37n262626260404040402005jp35e2725.Iw18aQ%3D%3D.CwBhGYzAmXYRkU%2BIUiA%3D.H4sIAAAAAAAAA42SPU7DQBCFx4mT2LHxXxzHQkgEcIhER4mEBA1%2FEkIpKCjhBhyCIgfgAJS5AS0FB0hBSYGiFJQUafib4U0ku8JKmtFbf%2FPeemeX2CKi3xqKM%2FwSCQffItmDTyQGHyiqoFgzg8h3WSSxGkAVTnKX360SxYralw5RqsutffVXebVo0tRoDGs8bKHp3AQ3eVe5qfz6A3w0FZEa7%2BUu%2BxapzcAj2lC1qaqnaluVWHyVd5pPn3Deh0T1ZxvILkfNcuSUI7ccrfBJMcEJDuO%2F%2FWCMqtLDOlGmSjw%2BKmbxihqNbsB1IOuDY3B%2FmZBgQUjIPeW4ACIdcxT0idZUScTuP%2Bgda2nxWY4M%2FdBIsXX%2FDqp7OsOFxHxR7KrvItRfy%2Bap7QXWhHeKUz2iei8d%2BFXN30KmSjrLNMkfJsSzoKgCAAA%3D&bn=Winter%27s%20Lance%20(f)','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','BOUNTY'],'added':'02-05-2019'},
{'id':'67','title':'FER DE LANCE RES BUILD','type':'Bounty','desc':'','url':'https://coriolis.io/outfit/fer_de_lance?code=A1pktfFalhdpsff37s7i7i27270204040404044a5d5d2o24.Iw18aQ%3D%3D.EwBjEYU8diYsYQ%3D%3D.H4sIAAAAAAAAA4WQMW7CQBBFJ3FswJa82AZkpSFgJxVFWirSJGkQssQFoEifQ6TwMVLmCDkGB0gRUaV0OkRgfmYkbNFtM3raN7t%2Fdi54RkRHV0p70yIy9ztg8BkQ4ZIHtTI3DlHvlYG%2BquzdEKXaDoevm6biD4j1tFcm4udX4l2e1r6j9%2F1uSDRSGivdKt0poc3LutN9kziv%2BgXSVQVkkx8AHYv3LT7kx2bSL6nxx%2Fr0iWHxJPmGn2sfvMjoptwDkVJa%2BUS5ErqWRyKLj89CthryfZAQpfTBkxAlJLxoHtFNR9qU606Bf%2BvlT4%2BwAQAA&bn=FDL','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','BOUNTY'],'added':'02-05-2019'},
{'id':'68','title':'PVE Corvette - Advanced build guide | Elite dangerous 3.0 Beyond','type':'Bounty','desc':'','url':'https://youtu.be/jbEa_Eqijyw','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','BOUNTY','YOUTUBE'],'added':'02-05-2019'},
{'id':'69','title':'ASP Explorer data colector','type':'Exploration','desc':'Mi build actual ASPX','url':'https://coriolis.io/outfit/asp?code=A0patdFfliddsnf5------02010e-05v4C02t432i0d.Iw18WQ%3D%3D.IwBjrSpAmFhhEBmIA%3D%3D%3D.H4sIAAAAAAAAA2P%2BJ8XAwPCXFUj8KQcS%2FCq%2F%2Fv8X2sHNwCAyRZCBQeIOUOb%2FfwYA9JiWzCcAAAA%3D.EweloBhBmUBYoEsC2AHApgJ0QQwDYD6AxnoqhpiCAIwR0hSNA%3D%3D%3D','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','EXPLORATION'],'added':'02-05-2019'},
{'id':'70','title':'Elite Dangerous: How To Fit The Federal Corvette','type':'Miscelaneous','desc':'','url':'https://youtu.be/6yL5F_yZ8Ko','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','MISCELANEOUS','YOUTUBE'],'added':'02-05-2019'},
{'id':'71','title':'Elite Dangerous: How To Fit The Anaconda','type':'Miscelaneous','desc':'','url':'https://youtu.be/sWqwRAcSDKw','iframe':1,'check':'TRUE','autor':'Nekro','lenguajes':['BUILD','MISCELANEOUS','YOUTUBE'],'added':'02-05-2019'}
]

let formInputs=document.querySelectorAll('.formulario input[type="text"],.formulario textarea');
formInputs.forEach(t=>{
	if(t.name!=''){
		if(t.name=='url'){
			t.addEventListener('change',e=>{console.log(checkUrl(e.target.value));openChildIframe(e.target.value);updatePreview(e);})	
		}else{
			t.addEventListener('change',e=>{updatePreview(e);})	
		}
	}
});
formInputs=document.querySelectorAll('.formulario input[type="checkBox"]');
formInputs.forEach(c=>{
	if(c.name!=''){
		c.addEventListener('change',e=>{updatePreview(e);})
	}
});
updatePreview('bodyLoad');

updateFormTitle.addEventListener('click',e=>{
	toggleHide(e);
});
function toggleHide(e){
	let el=document.getElementById(e.target.dataset.child);
	el.classList.toggle('hidden');
}
function generateData(e=null){
	let data=[];
	let aux={};
	data=document.querySelectorAll('.formulario input[type="text"],.formulario textarea');
	data.forEach(t=>{
		if(t.name!=''){
			aux[t.name]=[];
			t.name!='lenguajes'?aux[t.name]=t.value:aux[t.name].push(t.value);
		}
	});
	data=document.querySelectorAll('.formulario input[type="checkBox"]');
	data.forEach(c=>{
		if(c.name!=''&&c.checked==true){
			aux[c.name]==undefined?aux[c.name]=[]:'';
			aux[c.name].push(c.value);
		}
	});

	aux['added']=new Date();
	aux['id']=aux['added'].getTime();

	data=[];
	data.push(aux);
	return data;
}

function updatePreview(e){
	draw(generateData(e),'updatePreview',false);
}
function draw(tools,container,hideChild=true){
	const defaultIframeHeight=70;
	document.getElementById(container).innerHTML='';
	
	let counter=0;

	//console.log(tools);
	let organizedArr=[];
	let keys=[];
	document.querySelectorAll("#filtros input[type=checkbox]:checked").forEach(c=>{
		keys.push(c.value.toUpperCase());
	});
	tools.forEach(t=>{
		//aplico los filtros
		let add=false;
		let addIframe=false;
		if(filters.active==true){
			keys.forEach(k=>{
				if(k!='IFRAME'){
					filters[k]==true&&t.lenguajes.includes(k)?add=true:'';
				}else{
					if(filters[k]==true){
						t.iframe==true?addIframe=true:'';
					}else{
						addIframe=true;
					}
				}
			});
		}else{
			add=true;
			addIframe=true;
		}

		if(!keys.includes('IFRAME')){
			addIframe=true;
		}else{
			keys.length==1?add=true:'';
		}

		if(add==true&&addIframe==true){
			organizedArr[t.type]==undefined?organizedArr[t.type]=[]:'';
			organizedArr[t.type].push(t);
			counter++;
		}
	});
	//console.log(organizedArr);
	document.getElementById(container+'Info').innerText='['+counter+']'+(filters.active==true?'['+keys.length+' active filter(s)]':'')

	const orderedArr = {};
	Object.keys(organizedArr).sort().forEach(function(key) {
	  orderedArr[key] = organizedArr[key];
	});
	//console.log(orderedArr);

	for (let k in orderedArr){
	    if (organizedArr.hasOwnProperty(k)) {
	        let div = document.createElement("section");
	        div.id='div_'+k;
	        let title = document.createElement("h3");
			title.innerText=k+' ['+organizedArr[k].length+']';
			title.classList='title';
			title.dataChild='ol_'+k;
			div.appendChild(title);	        
			let ol = document.createElement("ol");
			ol.id='ol_'+k;

			hideChild==true?ol.classList='hidden':'';
			organizedArr[k].forEach(t=>{
				let li=document.createElement("li");
				li.classList='listLink';
				li.id='li_'+t.id;

				let innerTitle = document.createElement("h4");
				innerTitle.innerHTML=t.title.toUpperCase()+' (<a href="'+t.url+'" target="blank">'+t.url+'</a>) [Uploader: '+t.autor.toUpperCase()+' | Fecha:'+t.added+']';
				innerTitle.classList='innerTitle';
				li.appendChild(innerTitle);

				let p=document.createElement("p");
				p.innerText='Descripcion: '+t.desc;
				p.classList='descripcion';
				li.appendChild(p);
				
				let lang=document.createElement("p");
				if (t.lenguajes!=undefined&&t.lenguajes!=''){
					t.lenguajes.forEach(l=>{
						if(l!=''){
							lang.innerText==''?lang.innerText='Tipos: '+l.toUpperCase():lang.innerText+=' | '+l.toUpperCase();
						}
					});
				};
				lang.classList='lenguajes';
				li.appendChild(lang);
				if(t.iframe==true){
					let preview=document.createElement("input");
					preview.type='checkbox';
					preview.id='checkbox_'+t.title+'_'+t.id;
					preview.name='iframe_'+t.title+'_'+t.id;
					preview.src=t.url;
				

					let labelPreview=document.createElement("label");
					labelPreview.appendChild(preview);
					labelPreview.innerHTML+=' Habilitar preview de '+t.title.toLowerCase();
					let pPreview=document.createElement("p");
					pPreview.classList='floatingLabel';
					pPreview.appendChild(labelPreview);
					li.appendChild(pPreview);

					let pModifPreview=document.createElement("p");
					pModifPreview.classList='modifPreview';
					
					let spanInstancias=document.createElement("span");
					spanInstancias.innerHTML+='Cantidad de instancias del preview: ';
					let inputInstancias=document.createElement("input");
					inputInstancias.type='number';
					inputInstancias.min=1;
					inputInstancias.max=99;
					inputInstancias.value=1;
					inputInstancias.name='instancesPreview';
					spanInstancias.appendChild(inputInstancias);
					pModifPreview.appendChild(spanInstancias);
					
					let spanResize=document.createElement("span");
					spanResize.innerHTML+='  Altura del preview (vh): '
					let inputResize=document.createElement("input");
					inputResize.type='number';
					inputResize.value=defaultIframeHeight;
					inputResize.min=1;
					inputResize.max=99;
					inputResize.name='resizePreview';
					spanResize.appendChild(inputResize);
					pModifPreview.appendChild(spanResize);
					li.appendChild(pModifPreview);

					
					let iframe=document.createElement("iframe");
					iframe.classList='hidden preview';
					//	iframe.id='iframe_'+t.title+'_'+t.id;
					iframe.style='height:'+defaultIframeHeight+'vh;';
					li.appendChild(iframe);
				}else{
					let iframe=document.createElement("h4");
					iframe.innerText='Esta web no soporta embeeding.';
					li.appendChild(iframe);
				}
				ol.appendChild(li);
			});
			div.appendChild(ol);
	        //console.log("Key is " + k + ", value is" , organizedArr[k]);

	        document.getElementById(container).appendChild(div);
	    }
	}
	let checks=document.querySelectorAll('#'+container+' input[type=checkbox]');
	checks.forEach(c=>{
		c.addEventListener('click',e=>{
			console.log(e)
			let previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
			previews.forEach(p=>{
				p.classList.toggle('hidden');
				c.checked==true?p.src=c.src:'';
			});
			/*
			let el=document.getElementById(event.target.name);
			let t=event.target;
			el.classList.toggle('hidden');
			if(t.checked==true){
				el.src=t.src;
			}else{
				//el.src='';
			}
			*/
		});
	});
	let titles=document.querySelectorAll('#'+container+' .title');
	titles.forEach(t=>{
		t.addEventListener('click',event=>{
			let el=document.getElementById(event.target.dataChild);
			el.classList.toggle('hidden');
		});
	});
	let iframes=document.querySelectorAll('#'+container+' iframe');
	iframes.forEach(ifr=>{
		ifr.addEventListener('load',event=>{
			if(event.path[0].src!=''){
				//console.log(event);
				/*
				console.log(event.path[0].childElementCount);
				console.log(event.path[0].ownerDocument.childNodes);
				
				console.log(event.path[0]);
				let iframeDoc = event.path[0].contentDocument || event.path[0].contentWindow.document;
				console.log(iframeDoc);
				*/

				//var iframeBody = event.path[0].contentDocument;
				//console.log('iframe loaded, body is: ', iframeBody);
				//let el=document.getElementById(event.target.dataChild);
				//el.classList.toggle('hidden');
			}
		});
	});
	let numberArr=document.querySelectorAll('#'+container+' input[type=number]');
	numberArr.forEach(inp=>{
		switch(inp.name){
			case 'instancesPreview':
				inp.addEventListener('change',e=>{
					addPreview(e);
				});	
				break;
			case 'resizePreview':
				inp.addEventListener('change',e=>{
					resizePreview(e);
				});	
				break
			default:
				inp.addEventListener('change',e=>{

				});	
		}
	});
}

function updateFilters(e){
	filters.active=false;
	document.querySelectorAll("#filtros input[type=checkbox]").forEach(c=>{
		filters[c.value.toUpperCase()]=c.checked;
		c.checked==true?filters.active=true:'';
	});

	if(fetchedTools.length==0){
		draw(defaultToolsArr,'toolsContainer');
	}else{
		draw(fetchedTools.checked,'toolsContainer');
		draw(fetchedTools.sugested,'toolsSugestedContainer');
	}
	
}
function resizePreview(e){
	let to=e.target.value*1;
	to>99?to=99:'';
	to<1?to=1:'';
	e.target.value=to;
	let previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
	previews.forEach(p=>{
		p.style='height:'+to+'vh;';
	});
}
function addPreview(e){
	//console.log(e);
	let to=e.target.value*1;
	to>99?to=99:'';
	to<1?to=1:'';
	e.target.value=to;

	let previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
	let delta=e.target.value-previews.length;
	
	if (delta<1){		
		// for (var i=delta;i>0;i--){
		for (var i=delta*-1;i>0;i--) {
			//console.log(i);
			previews=document.querySelectorAll('#'+e.path[3].id+' iframe');
			e.path[3].removeChild(previews[previews.length-1]);
		}
	}else{
		//console.log(previews.length-1,e.target.value,previews[0])
		let altura=document.querySelector('#'+e.path[3].id+' input[name="resizePreview"]');
		//for (var i=previews.length;i==e.target.value;i++){
		for (var i=delta;i>0;i--) {
			//console.log(i);
			let iframe=document.createElement("iframe");
			iframe.classList=previews[0].classList;
			iframe.style='height:'+altura.value+'vh;';
			iframe.src=previews[0].src;
			e.path[3].appendChild(iframe);
		}
	}
}

function getUrl(url){
	var oReq = new XMLHttpRequest();
	oReq.onload = e=> {
	  var arraybuffer = oReq.response; // not responseText
	  /* ... */
	}

	oReq.addEventListener("progress", console.log);
	oReq.addEventListener("load", console.log);
	oReq.addEventListener("error", console.error);
	oReq.addEventListener("abort", console.error);
	
	oReq.open("GET", url);
	oReq.responseType = "arraybuffer";
	oReq.send();
}
function fetchHeaders(url){
	let myRequest = new Request(url);
	fetch(myRequest).then(function(response) {
	  console.log(response.headers); // returns a Headers{} object
	  response.blob().then(function(myBlob) {
	    //var objectURL = URL.createObjectURL(myBlob);
	    //myImage.src = objectURL;
	  });
	});
}
function getHeaders(url=document.location){
	var req = new XMLHttpRequest();
	req.open('GET', url, true);
	req.send();
	var headers = req.getAllResponseHeaders().toLowerCase();
	console.log(headers);
}

/*
-----------------------------------------------------
	Forms
-----------------------------------------------------
*/
function checkUrl(url){
  	let a=document.createElement('a');
    a.href=url;
  	let host=a.hostname;

	containerArr=[{'cont':'toolsContainer','desc':'Herramientas chequeadas'},{'cont':'toolsSugestedContainer','desc':'Herramientas sugeridas (no chequeadas)'}];
	let found=false;
	containerArr.forEach(c=>{
		let arrEl=document.querySelectorAll('#'+c.cont+' a');
		if (arrEl!=undefined){
			arrEl.forEach(el=>{
				if(el.hostname==host){
					found=c.desc;
				}
			});
		}
	});
	
	found!=false?found="Dominio ya existente en "+found:'';
	
	openChildIframe(url)

	return found;
}

let testIframe;
function openChildIframe(url=false){
    try{
    	testIframe!=undefined?testIframe.close():'';
    }catch (e){
    	console.log(e);
    }
    if(url!=false){
	    testIframe = window.open("", "testIframe", "width=700,height=250");
	    testIframe.document.write("<style>body{background:#000;color:#0F0;}li{font-size:.55rem;}iframe{border:3px solid blue;margin:auto;width:90vw;height:60vh;}</style><p>Testeo de Iframe</p><ol><li>Si se ve este texto, y la herramienta se carga en el recuadro azul, la herramienta soporta iframes!</li><li><input type='checkbox' onchange='opener.CallParent(event);'>Se ve la herramienta en el recuadro azul?</li></ol><iframe id='iframeTester' />");
	    iframeSupport.checked=false;
	    setTimeout(function() {testIframe.iframeTester.src=url}, 3000);
    }
}

function CallParent(e) {
  iframeSupportText.innerText=e.target.checked==false?"(Iframe no soportado)":"(Iframe soportado)";
  iframeSupport.checked=e.target.checked;

}

function connect(data=null){
	$.ajax({
        url: atob(uri),
        cache: false,
        data: data,
        type: 'POST',
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function(json) {
			console.log(json);
			fetchedTools=json;
        },
        error:function(json){
            console.log(json);
            alert (json.responseText);
            return;
        },
        complete: function (status){
            console.log(status);
            return;
        }
    });
}

function massiveUpdate(){
	var request = new XMLHttpRequest();
	request.open("POST", atob(uri));
    request.onreadystatechange = function() {
        console.log(this.readyState,this.status,this.responseText);
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let style=document.createElement('style');
            style.innerText='.debug b{color:red}.debug{background:#000!important}comment{color:yellow}';
            document.body.append(style);

            let div=document.createElement('div');
            div.classList='debug';
            div.style='border:3px solid red';
            div.innerHTML=this.responseText;
            document.body.append(div);

            document.querySelector(".content").classList.add('hidden');
       }
    };
	var formData = new FormData();
	formData.append("data", defaultToolsArr);
	request.send(formData);
}

function mAq(p='',r=''){if(r==''){q=Object.keys(p_r);return atob(q[randBetween(1,q.length,1)-1]);}else{return (p_r[btoa(p)]==r?1:0)}};
function submitMe(fromForm=false){
	let data=[generateData()];
	let formValid=true;
	let formInputs=document.querySelectorAll('.formulario input[type="text"],.formulario textarea');
	formInputs.forEach(t=>{
		if(t.name!=''){
			t.checkValidity()==false?formValid=false:'';
		}
	});
	if((mAq(calculoQ.innerText,calculoR.value)==1)&&formValid==true){
			var formData = new FormData();

			fromForm==true?formData.append("data", (data)):formData.append("null", null);

			var request = new XMLHttpRequest();
			request.open("POST", atob(uri));
			
			request.send(formData);
			//connect(data)
	}else{
		errorPQ.innerText=mAq(calculoQ.innerText,calculoR.value)!=1?'Captcha incorrecto (srsly?)':'Revisa los campos con marco rojo';
	}
	
}
/*
-----------------------------------------------------
	Funciones numericas
-----------------------------------------------------
*/
function validateRandomizer(parentFunction, min, max, esInt, tipo, cantPos, arrayVerif){
	var msg='';
	//console.log(parentFunction+' '+min+' '+max+' '+esInt+' '+tipo+' '+cantPos+' '+arrayVerif);

	if(tipo==0||tipo==1){
		if(min>max){
			msg='[validateRandomizer:'+parentFunction+'] El min: '+min+' no puede ser mayor al maximo: '+max+'\n'
		}
	}
	if(tipo==0||tipo==1){
		if(min==max){
			msg='[validateRandomizer:'+parentFunction+'] El min: '+min+' no puede ser igual al maximo: '+max+'\n'
		}
	}
	if(tipo==1){
		if((max-min)<cantPos&&esInt){
			msg='[validateRandomizer:'+parentFunction+'] No hay suficientes posiciones('+cantPos+') si usamos INT para usar un minimo: '+min+' y un maximo: '+max+'\n'
		}
	}
	if (tipo==2){
		if(arrayVerif.length==0){
			msg='[validateRandomizer:'+parentFunction+'] La lista no puede estar vacia\n'
		}
	}
	if (msg===''){
		return true
	}else{
		console.log(msg);
		return false
	}
}

function randBetween(min, max, esInt){
	var tipo = 0, parentFunction = 'randBetween';
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+')');
	
	if(esInt){
		return Math.floor(Math.random()*(max-min+1)+min);
	}else{
		return Math.random()*(max-min)+min;
	}
}

function randBetweenUniqueArray(min, max, esInt, posiciones){
	var tipo = 1, parentFunction = 'randBetweenUniqueArray';
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo, posiciones)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+','+posiciones+')');

	var arrayUnique=[];
		
	while (posiciones > arrayUnique.length){
		var nro = randBetween(min,max,esInt);
		var existe = false;
		arrayUnique.forEach(function(nroArray) {
			if(nro==nroArray){
				existe=true;
			}
		});
		if(!existe){
			arrayUnique.push(nro);
		}
	}
	return arrayUnique;
}

function randLista(arrayLista){
	var tipo = 2, parentFunction = 'randLista';
	var max = arrayLista.length-1, min=0,esInt=true,posiciones=1;
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo, posiciones,arrayLista)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+','+posiciones+')');
	
	var id = randBetween(min,max,esInt);
	return arrayLista[id];
}

function randListaArray(arrayLista){
	var tipo = 2, parentFunction = 'randListaArray';
	var max = arrayLista.length-1, min=0,esInt=true,posiciones=1;
	if(!validateRandomizer(parentFunction,min, max, esInt, tipo, posiciones,arrayLista)){return false};
	//console.log('validateRandomizer('+"'"+parentFunction+"'"+','+min+','+max+','+esInt+','+tipo+','+posiciones+','+arrayLista+')');
		
	var arrayUnique=[];
	var existe = false;
	while (arrayLista.length > arrayUnique.length){
		var nro = randBetween(min,max,esInt);
		var existe = false;
		arrayUnique.forEach(
			function(nroArray) {
				if(nro==nroArray){
					existe=true;
				}
			}
		);
		if(!existe){
			arrayUnique.push(nro);
		}
	}	
	var arrayFinal=[];
	arrayUnique.forEach(
		function(idArray) {
			arrayFinal.push(arrayLista[idArray]);
		}
	);
	return arrayFinal;
}

updateFilters();
