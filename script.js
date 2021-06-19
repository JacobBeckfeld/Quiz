// create timmer
var time = document.querySelector(".time");
var answersArea = document.querySelector(".answers");
var secondsLeft = 120;
var points = 0;
var gameIndex=0
var gameQuestions=[
    {question:"What is my favorite color?",
    choices:["red", "blue", "green", "yellow"],
    correctAnswer: "blue"
    },
    {
        question:"What is my pet's name?",
        choices:["Gary", "Mona", "Goku", "Larry"],
        correctAnswer: "Goku"
    },
    {
        question:"What is my favorite anime?",
        choices:["Dragon Ball Z", "Demon Slayer", "Bleach", "Modoka Magika"],
        correctAnswer: "Dragon Ball Z"
    },
    {
        question:"Where was I born?",
        choices:["Miami", "Toronto", "Minneapolis", "Mars"],
        correctAnswer: "Minneapolis"
    },
    {
        question:"What is my favorite anime?",
        choices:["Dragon Ball Z", "Demon Slayer", "Bleach", "Modoka Magika"],
        correctAnswer: "Dragon Ball Z"
    }
];


//Start to the quiz.

function score() {

    var Scoring =document.querySelector(".highscore");
    Scoring.textContent= "Score " + points


}

function start() {

    var header = document.querySelector(".start-quiz");
    var body = document.querySelector(".start-body");
    var startButton = document.querySelector(".start-button");
    var startMenu = document.querySelector(".start");

    header.textContent = "Welcome to the quiz!";
    body.textContent = "This is a quiz about me! Have fun trying to answer questions about someone you dont even know!";
    startButton.textContent ="START!";
    startButton.addEventListener("click", function() {
        startMenu.setAttribute("hidden", true);
        score();
        timeLeft();
        questionAll();
    }
    
    );
}

// Displays whatever the current question is
// gameIndex is the index of the current question in the array
function questionAll(){
    var currQuestion = gameQuestions[gameIndex];
    
    // display the question by referencing currQuestion.question
    var questionTag = document.querySelector(".h1");
    questionTag.textContent = currQuestion.question;

    // currQuestion.choices is all the possible answers
    // loop through that array, create a button for each item
    
    printBtn(currQuestion.choices, currQuestion.correctAnswer);
    
}




//makes choices into a button
function printBtn(choices, correctAnswer){


    for(var i=0; i<choices.length;i++){
        var btn = document.createElement("button");
        btn.textContent = choices[i];
        var isCorrect = "no"
        if( choices[i] === correctAnswer ){
            isCorrect = "yes"
        }
        btn.setAttribute("data-correct", isCorrect);
        document.body.appendChild(btn);
        answersArea.appendChild(btn);
    }
    answersArea.addEventListener("click", function(event){
        if( event.target.matches("button")){
            if(event.target.getAttribute("data-correct") === "yes"){
            points++
            }
            else{
                secondsLeft = secondsLeft-10
            }
            gameIndex++
            if(gameIndex < gameQuestions.length){
                answersArea.innerHTML = "";
                questionAll()
                secondsLeft.setAttribute("hidden", true)
            }
            else{
                return;
            }
                
            

        }
        console.log(points)
        console.log(gameIndex)
    })

}

    console.log(gameQuestions)

// Create an event listener on the parent element of all the answer buttons (answersArea)
// isnide of that callback function, check to see if a button was clicked
// if a buttoin was clicked, check the custom attribute (data-correct)
// if YES, question is correct; if no, answer is incorrect; updatte score
// incrtease game index by 1
// question()

function timeLeft() {

    var timerInterval = setInterval(function() {
    console.log(timerInterval);

        secondsLeft --;
        time.textContent = secondsLeft + " Seconds until end of quiz!";
    
        //check to see if game is over
        if(gameIndex > gameQuestions.length){
            clearInterval(timerInterval)
        }

        if(secondsLeft === 0){
            clearInterval(timerInterval)
        }
        
    }, 1000);
    
}

start();



console.log(timeLeft)

// create highscore
// Highscore value will be how many questions that have been answered correctly

    //user clicks start button (eventlistener)
    //timer starts countdown backword from value ----- need a variable
    //display question
        //are there any questions left
        //get the current question from a list of all questions 
        //display all possible answers

//user clicks on one of the possible answers --- eventlistener
    //determine if its right or wrong --- how do i determine if its right or wrong (google this)

    //if correct 
        //points increase
        //go to next question
    //if not 
        //correct timer goes down
        // go to next question
    
    