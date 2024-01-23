// const { start } = require("@popperjs/core");

var hr = document.querySelector("#hour");
var min = document.querySelector("#min");
var sec = document.querySelector("#sec")
var mm = document.querySelector("#mm")
var intervalId;

hr.innerHTML="00";
min.innerHTML="00";
sec.innerHTML="00";
mm.innerHTML="00";
var secc = 0;
var minn = 0;
var hour = 0;
var mmm = 0 ;

function starttimer(){
    secc ++;
    sec.innerHTML=secc;
    mmm =0;
    if(secc === 60){
        minn ++;
        min.innerHTML=minn;
        secc =0;
      
            if(minn === 60){
                 hour++;
                 hr.innerHTML=hour;
                 min = 0;
    }
}
}

function start(){
     intervalId = setInterval(starttimer,1000);
}
function stop(){
    clearInterval(intervalId);
}
function reset(){

    hr.innerHTML="00";
min.innerHTML="00";
sec.innerHTML="00";
mm.innerHTML="00";

}






















// window.onload = function () {
        
//     var ms = document.querySelector("#milliseconds");
//     var sec = document.querySelector("#seconds");
//     var min = document.querySelector("#minutes");
//     var hr = document.querySelector("#hour");

//     var btnStart = document.querySelector("#start")
//     var btnStop = document.querySelector("#stop")
//     var btnReset = document.querySelector("#reset")

//     var interval;
//     var seconds = 0;
//     var milliseconds = 0;
//     var minutes = 0
//     var hour = 0;

//     ms.innerHTML = "00";
//     sec.innerHTML = ":00";
//     min.innerHTML =":00";
//     hr.innerHTML = "00";

//     btnStart.onclick = function() {
//         clearInterval(interval);
//         interval = setInterval(start, 10);
//      } 

//      btnStop.onclick = function() {
//         clearInterval(interval);
//      }

//      btnReset.onclick = function() {
//         clearInterval(interval);
//         milliseconds = 0;
//         seconds = 0;
//         minutes= 0;
//         hour= 0;
//         ms.innerHTML = milliseconds + "0";
//         sec.innerHTML = ":" + seconds + "0";
//         min.innerHTML = ":" + minutes + "0";
//         hr.innerHTML = hour + "0";
//      } 
    
//      function start() {
//         milliseconds++; 
        
//         if(milliseconds < 9){
//           ms.innerHTML = "0" + milliseconds;
//         }
  
//         if (milliseconds > 9){
//             ms.innerHTML = milliseconds;
            
//           } 
        
//         if (milliseconds > 99) {

//           seconds++;
//           sec.innerHTML = ":0" + seconds;
//           milliseconds = 0;
//           ms.innerHTML = "0" + 0;
//         }

//         if (seconds > 9){
//             sec.innerHTML = ":" + seconds;
//           } 

//         if (seconds > 58) {
//             minutes++;
//             min.innerHTML = ":0" + minutes;
//             seconds = 0;
//             sec.innerHTML = ":0" + seconds;
//         }
//         if (minutes > 9){
//             min.innerHTML = ":" + minutes;
//           } 

//         if (minutes > 58) {
//             hour++;
//             hr.innerHTML = "0" + hour;
//             minutes = 0;
//             min .innerHTML = ":0" + minutes;
//       }
//       if (hour > 9) {
//         hr.innerHTML = hour;
//       }

//     }
// }