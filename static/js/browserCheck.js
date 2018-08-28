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

document.getElementById("datosBrowser").innerHTML='<ul><li>Browser  = '+browserName+' '+ie+'</li><li>Version Completa = '+fullVersion+'</li><li>Version Mayor = '+majorVersion+'</li><li>navigator.appName = '+navigator.appName+'</li><li>navigator.userAgent = '+navigator.userAgent+'</li><li>Cookies  = '+cookiesHabilitados+'</li></ul><hr>';
document.getElementById("brBrowserTD").innerText=browserName+' '+ie;
document.getElementById("brVersionTD").innerText=fullVersion;
document.getElementById("brAppnameTD").innerText=navigator.appName;
document.getElementById("brUserAgentTD").innerText='userAgent: '+navigator.userAgent
document.getElementById("brCookiesTD").innerText=cookiesHabilitados;

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Browser desconocido";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "version desconocida";
        this.OS = this.searchString(this.dataOS) || "un SO desconocido";
        this.bit = this.searchString(this.dataBit) || " x32"; 
        this.OsVersion = this.searchString(this.dataOsVersion) || "una version desconocida de de SO";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++)    {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {string: navigator.userAgent,subString: "Chrome",identity: "Chrome"},
        {string: navigator.userAgent,subString: "OmniWeb",versionSearch: "OmniWeb/",identity: "OmniWeb"},
        {string: navigator.vendor,subString: "Apple",identity: "Safari",versionSearch: "Version"},
        {prop: window.opera,identity: "Opera",versionSearch: "Version"},
        {string: navigator.vendor,subString: "iCab",identity: "iCab"},
        {string: navigator.vendor,subString: "KDE",identity: "Konqueror"},
        {string: navigator.userAgent,subString: "Firefox",identity: "Firefox"},
        {string: navigator.vendor,subString: "Camino",identity: "Camino"},
        {string: navigator.userAgent,subString: "Netscape",identity: "Netscape"}, // for newer Netscapes (6+)
        {string: navigator.userAgent,subString: "MSIE",identity: "Explorer",versionSearch: "MSIE"},
        {string: navigator.userAgent,subString: "Gecko",identity: "Mozilla",versionSearch: "rv"},
        {string: navigator.userAgent,subString: "Mozilla",identity: "Netscape",versionSearch: "Mozilla"}// for older Netscapes (4-)
    ],
    dataOS : [
        {string: navigator.platform,subString: "Win",identity: "Windows"},
        {string: navigator.platform,subString: "Mac",identity: "Mac"},
        {string: navigator.userAgent,subString: "iPhone",identity: "iPhone/iPod"},
        {string: navigator.platform,subString: "Linux",identity: "Linux"}
    ],
    dataBit : [
        {string: navigator.userAgent,subString: "Win64",identity: "x64"},
        {string: navigator.userAgent,subString: "WOW64",identity: "x64"}
    ],
    dataOsVersion : [
        {string: navigator.userAgent,subString: "NT 5.1",identity: "XP"},
        {string: navigator.userAgent,subString: "NT 6.0",identity: "Vista"},
        {string: navigator.userAgent,subString: "NT 6.1",identity: "7"},
        {string: navigator.userAgent,subString: "NT 6.2",identity: "8"}
    ]
};
BrowserDetect.init();
document.getElementById("resumen").innerText=BrowserDetect.browser+'|'+BrowserDetect.version+'|'+BrowserDetect.OS+'|'+BrowserDetect.OsVersion+'|'+BrowserDetect.bit
console.log(BrowserDetect.browser,BrowserDetect.version,BrowserDetect.OS,BrowserDetect.OsVersion,BrowserDetect.bit);
document.getElementById("osOSTD").innerText=BrowserDetect.OS+' '+BrowserDetect.OsVersion;
document.getElementById("osTipoOSTD").innerText='('+BrowserDetect.bit+')';

var L = navigator.plugins.length;
var plugins=L.toString().bold() + " Plugin(s)".bold();
plugins+="<br>";
plugins+="Name | Filename | description".bold();
plugins+="<br>";
for(var i=0; i<L; i++) {
 plugins+=navigator.plugins[i].name;
 plugins+=" | ";
 plugins+=navigator.plugins[i].filename;
 plugins+=" | ";
 plugins+=navigator.plugins[i].description;
 plugins+=" | ";
 plugins+=navigator.plugins[i].version;
 plugins+="<br>";
}
document.getElementById("divPlugins").innerHTML=plugins;