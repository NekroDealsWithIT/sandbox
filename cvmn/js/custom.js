/* Lang Toast */
const localInfo={
  "en": {
    "avoid": "Evitar este mensaje",
    "toastTitle": "Espa&ntilde;ol disponible",
    "toastDesc":"Ir a espa&ntilde;ol",
    "link":"es.html"
  },
  "es": {
    "avoid": "Avoid this message",
    "toastTitle": "English available",
    "toastDesc":"Go to english",
    "link":"index.html"
  }
}

let lang=(window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage).substr(0, 2);
let pos=window.location.pathname.split("/").pop();

if (pos=='index.html'){pos='en';}else{pos='es';}

function checkLang(){
	if(lang!=pos&&getCookie("avoidLangCheck")==''){
		addToast('<div style="text-align:center;"><u>'+localInfo[pos]['toastTitle']+'</u></div>','<br><div style="display:flex;justify-content:space-between;"><p><a href="'+localInfo[pos]['link']+'" style="color:white;">'+localInfo[pos]['toastDesc']+'</a></p><p><a onclick="avoidToastMSG();"  style="color:wheat;">'+localInfo[pos]['avoid']+'</a></div>',8000);
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
	document.querySelector(".toast-item-wrapper").style='hidden';
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
const shareData = {
	title: document.getElementsByTagName("title")[0].text,
	text: document.querySelector('meta[name="description"]').content,
	url: window.location.href
}

if (!navigator.canShare()){
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
		    checkLang();
		});


// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
