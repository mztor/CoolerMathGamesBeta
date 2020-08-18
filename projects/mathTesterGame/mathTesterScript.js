var difficulty = 0; //making the difficulty variable global for use in different functions
var scores = 0; //setting the score to 0
var highestValue = 0; //making highest value to be generated a global variable
var timeMax = 60; //setting the max time
var ran1 = 0; //making the first random number variable global so it can be used in all question types
var ran2 = 0; //making the second random number variable global so it can be used in all question types
var questionMax = 0; //making the type of question a global variable
var questionType = 0; //setting the types of question available for each difficulty
var questionDis = ""; //setting the question display variable to nothing
var answer = 0; //making answer variable global for checking
var seconds; //global seconds variable
var stopTimer = true; //making the stop-timer variable true to make the timer not run when it isn't supposed too
var testing = false; //making the testing mode automatically false

function toReady(n) {
    stopTimer = true; //setting timer to not start
    scores = 0; //Reset the scores back to 0
    difficulty = n; //Set the difficulty of the game
    highestValue = 0; //reset the highest value
    var menu = document.getElementById("menu"); //setting the variables and hiding, showing the elements
    var readyMenu = document.getElementById("readyMenu");
    var playAgain = document.getElementById("playAgain");
    var help = document.getElementById("helpMenu")
    var back = document.getElementById("back");
    var score = document.getElementById("score")
    menu.style.display = "none";
    playAgain.style.display = "none";
    readyMenu.style.display = "inline-block";
    help.style.display = "none";
    back.style.display = "inline-block";
    score.style.display = "none"
}

function Test() {
    stopTimer = false; //allowing the timer to start
    timer(); //start the timer
    document.getElementById("time").innerHTML = "Time: " + timeMax; //displaying the timer
    document.getElementById("score").innerHTML = "Score: " + scores; //displaying the score
    questions(); //start generating question
    document.getElementById("question").innerHTML = questionDis + " = ?"; //displaying the question
    var score = document.getElementById("score"); //setting the variables and hiding, showing the elements
    var time = document.getElementById("time");
    var question = document.getElementById("question");
    var input = document.getElementById("input");
    var readyMenu = document.getElementById("readyMenu")
    var answer = document.getElementById("answer")
    var output = document.getElementById("output")
    readyMenu.style.display = "none";
    score.style.display = "block";
    time.style.display = "block";
    question.style.display = "block";
    input.style.display = "inline-block";
    answer.style.display = "inline-block";
    output.style.display = "inline-block";
    document.getElementById("output").innerHTML = ""; //resetting the output text
}

function random1() {
    ran1 =  Math.floor((Math.random() * highestValue) + 1); //generating the first random number with the highest value
}

function random2() {
    ran2 = Math.floor((Math.random() * highestValue) + 1); //generating the second random number with the highest value
}

function generateQuestion() {
    questionType = Math.floor((Math.random() * questionMax) + 1); //generating a random question type for each type of difficulty
}

function addition() { //addition question function
    random1(); //starts the random 1 function
    random2(); //starts the random 2 function
    questionDis = ran1 + " + " + ran2; //combining the random numbers to make it displayable
    answer = ran1 + ran2; //making the answer with the random numbers
    if (testing === true) { //check if testing mode is on
        console.log(answer) //log the answer to the question
    }
    document.getElementById("question").innerHTML = questionDis + " = ?"; //display the question
}

function subtraction() { //subtraction question function
    random1(); //starts the random 1 function
    random2(); //starts the random 2 function
    questionDis = ran1 + " - " + ran2; //combining the random numbers to make it displayable
    answer = ran1 - ran2; //making the answer with the random numbers
    if (testing === true) { //check if testing mode is on
        console.log(answer) //log the answer to the question
    }
    document.getElementById("question").innerHTML = questionDis + " = ?"; //display the question
}

function multiply() { //multiplication question function
    random1(); //starts the random 1 function
    random2(); //starts the random 2 function
    questionDis = ran1 + " X " + ran2; //combining the random numbers to make it displayable
    answer = ran1 * ran2;  //making the answer with the random numbers
    if (testing === true) { //check if testing mode is on
        console.log(answer) //log the answer to the question
    }
    document.getElementById("question").innerHTML = questionDis + " = ?"; //display the question
}

function check() { //checking if the user input is the same as the answer of the question
    var input = Number(document.getElementById("input").value); //making a variable for the user input
    if (input === answer) { //checking if the input is the same as answer of the question
        scores = scores + 1; //adding a point to the score
        document.getElementById("output").innerHTML = "Correct!"; //making output display correct when the input is correct
        document.getElementById("output").style.color = "green"; //making the correct text green
    }
    else {
        document.getElementById("output").innerHTML = "Incorrect!"; //making output display incorrect because the input doesn't match the answer
        document.getElementById("output").style.color = "red"; //making the incorrect text red
    }
    questions() //generate another question
    document.getElementById("question").innerHTML = questionDis + " = ?"; //displaying the question again
    document.getElementById("score").innerHTML = "Score: " + scores; //displaying the new score
}

function timer() { //start the timer countdown function
    if (stopTimer === true) { //checks if the stop timer variable is true and making this function not start is the variable is true
        return;
    }
    seconds = timeMax; //assigning the maximum time variable to the seconds
    let time = setInterval(function () { //make a time variable with a set delay between each repeat
        seconds--; //reduce seconds by 1
        if (seconds <= -1) { //check if the seconds is less than or equal to -1
            clearInterval(time); //clearing the time
            toEndScreen(); //end-screen menu because the timer has reached zero
        } else if (stopTimer) { //checks if stop timer is true
            clearInterval(time); //clear the timer without going to end-screen because the click on the back button before the game has finished
        }
        document.getElementById("time").innerHTML = "Time: " + seconds;}, 1000); //making the function timout for 1 second before it repeats again
}

function questions() { //generates a question types per difficulty and sets values per difficulty type
    if (difficulty === 1) { //checks if the difficulty variable is easy (1)
        highestValue = 10; //setting the highest value able to be randomly generated
        questionMax = 1; //making the easy mode only generate addition questions
        generateQuestion(); //generating question type
        if (questionType === 1) { //checking if the question type is 1
            addition();  //generate the addition question
        }
    }
    else if (difficulty === 2) { //checking if difficulty is medium
        highestValue = 11; //setting the highest value able to be randomly generated
        questionMax = 2;  //making the medium mode only generate addition and subtraction questions
        generateQuestion(); //generating a random type of question
        if (questionType === 1) { //checking if the question type is 1
            addition(); //generate the addition question
        }
        else {
            subtraction(); //generating a subtraction question because the question type isn't 1
        }
    }
    else { //the difficulty is hard because the difficulty variable is 3
        highestValue = 12; //setting the highest value able to be randomly generated
        questionMax = 3; //making the hard mode generate addition, subtraction and multiplication questions
        generateQuestion(); //generating a random type of question
        if (questionType === 1) { //checking if the question type is 1
            addition(); //generate the addition question
        } else if (questionType === 2) { //checking if the question type is 2
            subtraction(); //generating a subtraction question
        } else { //will generate a question because the question-type is 3
            multiply(); //generating a multiplication question
        }
    }
}

function toEndScreen() {  //making the endscreen function
    var score = document.getElementById("score"); //setting the variables and hiding, showing the elements
    var playAgain = document.getElementById("playAgain");
    var time = document.getElementById("time");
    var question = document.getElementById("question");
    var input = document.getElementById("input");
    var readyMenu = document.getElementById("readyMenu");
    var answer = document.getElementById("answer");
    var back = document.getElementById("back");
    var output = document.getElementById("output")
    readyMenu.style.display = "none";
    score.style.display = "block";
    time.style.display = "none";
    question.style.display = "none";
    input.style.display = "none";
    answer.style.display = "none";
    playAgain.style.display = "inline-block";
    back.style.display = "none";
    output.style.display = "none";
    testing = false; //resetting the testing mode
}

function toMenu() {
    stopTimer = true; //setting the stop-timer true
    var score = document.getElementById("score"); //setting the variables and hiding, showing the elements
    var playAgain = document.getElementById("playAgain");
    var time = document.getElementById("time");
    var question = document.getElementById("question");
    var input = document.getElementById("input");
    var readyMenu = document.getElementById("readyMenu");
    var answer = document.getElementById("answer");
    var menu = document.getElementById("menu");
    var help = document.getElementById("helpMenu");
    var back = document.getElementById("back");
    var output = document.getElementById("output")
    readyMenu.style.display = "none";
    score.style.display = "none";
    time.style.display = "none";
    question.style.display = "none";
    input.style.display = "none";
    answer.style.display = "none";
    playAgain.style.display = "none";
    menu.style.display = "block";
    help.style.display = "none";
    back.style.display = "none";
    output.style.display = "none";
    testing = false; //resetting the testing mode
}

function toHelp() {
    var help = document.getElementById("helpMenu"); //setting the variables and hiding, showing the elements
    var menu = document.getElementById("menu");
    var back = document.getElementById("back");
    help.style.display = "inline-block";
    menu.style.display = "none";
    back.style.display = "inline-block";
}

function testingMode() { //testing mode, will display the answer to the question and a message for the user on instructions to activate tester mode again
    console.log("Testing mode activated, press testing mode again on the difficulty screen if you want to go into the mode again")
    testing = true;
}