/* JS comes here */
window.onload = function () {

    var seconds = 0; 
    var tens = 0; 
    // get the HTML elements reference for using
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    var Interval;  

    buttonStart.onclick = function() {
        clearInterval(Interval);
        // class timerEngine every 10 milliseconds
        Interval = setInterval(timerEngine, 10);
    }

    buttonStop.onclick = function() {
        // clear the inteval function to stop timer
        clearInterval(Interval);
    }


    // COMPLETE THE CODE
    buttonReset.onclick = function() {
        clearInterval(Interval); 
        tens = 0; 
        seconds = 0; 
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00"; 

    }


    function timerEngine () {
        tens++; 

        if(tens <= 9){
            // to show double digit for single digit value like 01, 02, etc.
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9){
                appendTens.innerHTML = tens;
        } 

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }

        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }

}  // window.onload ends