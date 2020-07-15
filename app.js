var minutes = 0;
var seconds = 0;
var mseconds = 0;
var minheader = document.getElementById("min");
var secheader = document.getElementById("sec");
var millisecheader = document.getElementById("msec");
var interval;


function Counter(){
    mseconds++;
    millisecheader.innerHTML = mseconds;
    if(mseconds >= 100){
        seconds++;
        secheader.innerHTML = seconds;
        mseconds = 0;
    }
    else if(seconds >= 60){
        minutes++;
        minheader.innerHTML = minutes;
        seconds = 0;
    }
}




function start(){
interval = setInterval(Counter , 10)
}
function pause(){
    clearInterval(interval)
}
function reset(){
    minutes = 0;
    seconds = 0;
    mseconds = 0;
    millisecheader.innerHTML = mseconds;
    secheader.innerHTML = seconds;
    minheader.innerHTML = minutes;
    clearInterval(interval)
}
function startBtnEnable(){
    document.getElementById("start").disabled = false;
}