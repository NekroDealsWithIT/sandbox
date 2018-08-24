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

function proxyCheck(){var proxyHeader = 'via';var req = new XMLHttpRequest();req.open('GET', document.location, false);req.send();var header = req.getResponseHeader(proxyHeader);if (header) {return true;}return false;}
function myIP(url){if(window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");xmlhttp.open("GET",url,false);xmlhttp.send();console.log('data recibida: ',xmlhttp.responseText);return false;}
$(document).ready(function(){$.getJSON("http://jsonip.com/?callback=?", function (data){/*document.getElementById("ipPublicaID").innerHTML = '<p>Ip Publica: <b>'+data.ip+'</b>';*/ipExtraData(data.ip);});});
function ipExtraData(dd){$.get("http://ipinfo.io",function(d){document.getElementById("ipInfo").innerHTML="<table border='1' align='center'><tr><td>Ip Privada</td><td id='ipPrivada'></td></tr><tr><td>Ip Publica</td><td>"+dd+"</td></tr><tr><td>Pais</td><td>"+d.country+"</td></tr><tr><td>Region</td><td>"+d.region+"</td></tr><tr><td>Ciudad</td><td>"+d.city+' ('+d.postal+")</td></tr><tr><td>Host</td><td>"+d.hostname+"</td></tr><tr><td>Empresa</td><td>"+d.org+"</td></tr><tr><td>Proxy</td><td id='proxyData'></td></tr></table>";getLocalIp();document.getElementById("proxyData").innerHTML=proxyCheck();proxyCheck2(dd);},"jsonp");}
function getLocalIp(){getUserIP(function(ip){document.getElementById("ipPrivada").innerHTML=ip;});}
function proxyCheck2(d){function ipExtraData2(dd){$.get('https://ipstack.com/ipstack_api.php?ip='+d,function(ddd){console.log(ddd)},"jsonp");}};
