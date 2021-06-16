// create timmer
var time = document.querySelector(".time");
var secondsLeft = 120

//Start to the quiz.

function start() {

    var header = document.querySelector(".start-quiz");
    var body = document.querySelector(".start-body");
    var startButton = document.querySelector(".start-button");
    var startMenu = document.querySelector(".start");

    header.textContent = "Welcome to the quiz!";
    body.textContent = "This is a quiz about me! have fun trying to answer questions about someone you dont even know!";
    startButton.textContent ="START!";
    startButton.addEventListener("click", function() {
        startMenu.setAttribute("hidden", true);
        timeLeft();
    }
    
    );
}

var questions = 

questions[i]


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
start();


console.log(timeLeft)


// Create a start button

// Create two question
// second question comes up after the first is answered

// create highscore
// Highscore value will be how many questions that have been answered correctly

    