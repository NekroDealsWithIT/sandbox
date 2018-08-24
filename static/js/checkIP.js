var ipPublica='';

$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
        console.log(data);
        document.getElementById("ipPublicaID").innerHTML = '<p>Ip Publica: <b>'+data.ip+'</b>';
        ipPublica=data.ip;
    });
});
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

// Usage

getUserIP(function(ip){
		document.getElementById("ip").innerHTML = '<p>IP: '  + ip + " | <a href='http://www.whatismypublicip.com/' target='blank'>verificar en http://www.whatismypublicip.com/</a></p>";
});

function imBehindProxy() {
    var proxyHeader = 'via';
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send();
    var header = req.getResponseHeader(proxyHeader);
    if (header) {
        // we are on a proxy
        return true;
    }
    return false;
}

function myIP(url) {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    
    xmlhttp.open("GET",url,false);
    xmlhttp.send();

    console.log('data recibida: ',xmlhttp.responseText);
    
    /*
    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }
    */
    return false;
}