//IIFE Used to trigger the functionalities
(function (){
    
let hour=0;
let minute=0;
let seconds=00;
let isStarted=false;
const timerText = document.getElementById("timer-text");

// Function to start the timer from last recorded HMS (Hrs,Mins,Secs)
function start(){
    isStarted = true;
    var myId=setInterval(()=>{
        if(!isStarted){
            clearInterval(myId)
        }else{
            
            seconds+=1;
            // text variable will have the ongoing time
            let text=`${hour<10 ? "0"+hour : hour}:${minute<10 ? "0"+minute : minute}:${seconds<10 ? "0"+seconds : seconds}`;
            timerText.innerHTML=text;
            if(minute==59 && seconds==59){
                seconds=0;
                minute=0;
                hour=hour+1;
            }
            else if(seconds==59)
            {
                seconds=0;
                minute=minute+1;
            }

        }       

    },1000)
}

// Function will stop the timer
function stop(){
    isStarted = false;
}
// function shows alerts once
function showNotification(message){
    window.alert(message);
}

// function resets HMS (Hrs, Mins, Secs) and gives alert
function reset(){
    stop();
    minute=0;
    seconds=0;
    hour=0;
    timerText.innerHTML="00:00:00";
    showNotification("Stop-Watch has been reset !");
}

// Function used to handle inputs-> Start, Stop & Reset click events
function handleClicks(){
    document.addEventListener('click',(event)=>{
        if(event.target.id === "Start" && !isStarted){
            start();
        }else if(event.target.id==="Stop"){
            stop();
            showNotification('Timer Stopped !');
        }else if(event.target.id==="Reset"){
            reset();
        }
    })
}

handleClicks();
})()





