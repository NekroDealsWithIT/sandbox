var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+6);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}

var ie = (function (){
    if (window.ActiveXObject === undefined) return '';
    if (!document.querySelector) return '(Internet Explorer 7)';
    if (!document.addEventListener) return '(Internet Explorer 8)';
    if (!window.atob) return '(Internet Explorer 9)';
    if (!document.__proto__) return '(Internet Explorer 10)';
    return '(Internet Explorer 11)';
})();
var cookiesHabilitados=( function (){
  if(navigator.cookieEnabled===true)return 'HABILITADOS';
  return 'NO HABILITADOS';
})();

datosBrowser.innerHTML='<ul><li>Browser  = '+browserName+' '+ie+'</li><li>Version Completa = '+fullVersion+'</li><li>Version Mayor = '+majorVersion+'</li><li>navigator.appName = '+navigator.appName+'</li><li>navigator.userAgent = '+navigator.userAgent+'</li><li>Cookies  = '+cookiesHabilitados+'</li></ul><hr>';


//var idParameter=parse_query_string(window.location.search.substring(1));
var idParameter=(window.location.search.substring(1);
if(idParameter.indexOf('id=')>-1){
  idParameter=idParameter.split('id=')
}else{
  idParameter='';
}