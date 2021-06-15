// create timmer
var time = document.querySelector(".time");
var secondsLeft = 120


function timeLeft() {

    var timerInterval = setInterval(function() {
    console.log(timerInterval);

        secondsLeft --;
        time.textContent = secondsLeft + " Seconds until end of quiz!";
        console.log(time)
    
        if(secondsLeft === 0){
            clearInterval(timerInterval)

        
    
        }

    }, 1000);

}

function highscore(){

    
}

highscore();
timeLeft();

console.log(timeLeft)


// Create a start button

// Create two question
// second question comes up after the first is answered

// create highscore
// Highscore value will be how many questions that have been answered correctly

    