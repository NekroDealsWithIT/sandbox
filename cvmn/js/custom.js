/* Lang Toast */
const localInfo={
  "en": {
    "avoid": "Evitar este mensaje",
    "toastTitle": "Espa&ntilde;ol disponible",
    "toastDesc":"Ir a Espa&ntilde;ol",
    "link":"es.html"
  },
  "es": {
    "avoid": "Avoid this message",
    "toastTitle": "English available",
    "toastDesc":"Go to English",
    "link":"index.html"
  }
}

let lang=(window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage).substr(0, 2);
let pos=window.location.pathname.split("/").pop();

if (pos=='index.html'||pos==''){pos='en';}else if(pos=="es.html"){pos='es';}

function checkLang(){
	if(getCookie("avoidLangCheck")==''&&lang!=pos){
		if(lang=='es'||lang=='en'){
			addToast('<div style="text-align:center;"><u>'+localInfo[pos]['toastTitle']+'</u></div>','<br><div style="display:flex;justify-content:space-between;"><p><a href="'+localInfo[pos]['link']+'" style="color:white;">'+localInfo[pos]['toastDesc']+'</a></p><p><a onclick="avoidToastMSG();"  style="color:wheat;">'+localInfo[pos]['avoid']+'</a></div>',8000);
		}
	}
}

function addToast(title,desc,timeout){
    $.Toast(title, desc, "success", {
        has_icon:false,
        has_close_btn:true,
		stack: true,
        fullscreen:true,
        timeout:timeout,
        sticky:false,
        has_progress:true,
        rtl:false,
    });
}

function avoidToastMSG(){
	setCookie('avoidLangCheck','true',7);
	document.querySelector(".toast-item-wrapper").style.opacity=0;
}
/* End Lang Toast */

/* Cookie */
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
/* End Cookie */

/* Share */

const file = new File([], "img/mn.jpg", { type: "image/jpg" });
const shareData = {
	title: document.getElementsByTagName("title")[0].text,
	text: document.querySelector('meta[name="description"]').content,
	url: window.location.href,
	'og:url': window.location.href,
    'og:title': document.getElementsByTagName("title")[0].text,
    'og:image': "img/mn.jpg",
    img:"img/mn.jpg"
    //,files: file
}

if (navigator.canShare==undefined||!navigator.canShare(shareData)){
	document.querySelector(".shareContainer").style.display='none';
}

shareButton.addEventListener('click', async () => {
	try {
		await navigator.share(shareData)
		console.log ('Shared successfully');
	} catch(err) {
		console.error(err)
	}
});
/* End Share */


$(document).ready(function() {
	//Mozzilla detection
	try{
		//$.browser.mozilla
		if ((('netscape' in window) && / rv:/.test(navigator.userAgent))||navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			//document.getElementById("print").remove();
			$('#print').remove();
			addCustomSS('firefox.css');
		}
	}catch (e){
		console.log(e);
	}
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'scrollingSpeed': 600,
		'autoScrolling': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
	});
    $('#send').click(function(){
        var url = "datos_login.php";
        $.ajax({                        
           type: "POST",                 
           url: url,                     
           data: $("#contactForm").serialize(), 
           success: function(data)             
           {
             //$('#resp').html(data);               
             console.log(html(data));
           }
       });
    });
    $('a').click(function(){
    	this.blur();
    });
	//Lang check
	checkLang();
	//Update OG
	og();
});

//Meta CFG
function og(){
	document.querySelector('meta[property="og:url"]').setAttribute("content", window.location.href);
	document.querySelector('meta[property="og:description"]').setAttribute("content", document.querySelector('meta[name="description"]').content);
	document.querySelector('link[rel="canonical"]').href=window.location.href;
}

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

function addCustomSS(customSS){
	let ss = document.createElement("link");
	ss.type="text/css";
	ss.rel="stylesheet";
	ss.href="css/"+customSS;
	document.head.appendChild(ss);
}