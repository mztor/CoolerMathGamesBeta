var difficulty = 0;
var scores = 0;
var highestValue = 0;
var timeMax = 10;
var ran1 = 0;
var ran2 = 0;
var questionMax = 0;
var questionType = 0;
var questionDis = "";
var answer = 0;
var seconds;
var stopTimer = true;

function toReady(n) {
    stopTimer = true;
    scores = 0;
    difficulty = n;
    highestValue = 0;
    var menu = document.getElementById("menu");
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
    stopTimer = false;
    timer();
    document.getElementById("time").innerHTML = "Time: " + timeMax;
    document.getElementById("score").innerHTML = "Score: " + scores;
    questions();
    document.getElementById("question").innerHTML = questionDis;
    var score = document.getElementById("score");
    var time = document.getElementById("time");
    var question = document.getElementById("question");
    var input = document.getElementById("input");
    var readyMenu = document.getElementById("readyMenu")
    var answer = document.getElementById("answer")
    readyMenu.style.display = "none";
    score.style.display = "block";
    time.style.display = "block";
    question.style.display = "block";
    input.style.display = "inline-block";
    answer.style.display = "inline-block";
}

function random1() {
    ran1 =  Math.floor((Math.random() * highestValue) + 1);
}

function random2() {
    ran2 = Math.floor((Math.random() * highestValue) + 1);
}

function generateQuestion() {
    questionType = Math.floor((Math.random() * questionMax) + 1);
}

function addition() {
    random1();
    random2();
    questionDis = ran1 + " + " + ran2;
    answer = ran1 + ran2;
    document.getElementById("question").innerHTML = questionDis;
}

function subtraction() {
    random1();
    random2();
    questionDis = ran1 + " - " + ran2;
    answer = ran1 - ran2;
    document.getElementById("question").innerHTML = questionDis;
}

function multiply() {
    random1();
    random2();
    questionDis = ran1 + " X " + ran2;
    answer = ran1 * ran2;
    document.getElementById("question").innerHTML = questionDis;
}

function check() {
    var input = Number(document.getElementById("input").value);
    console.log(answer);
    if (input === answer) {
        scores = scores + 1;
    }
    questions()
    document.getElementById("question").innerHTML = questionDis;
    document.getElementById("score").innerHTML = "Score: " + scores;
}

function timer() {
    if (stopTimer === true) {
        return;
    }
    seconds = timeMax;
    let time = setInterval(function () {
        console.log(seconds);
        seconds--;
        if (seconds <= -1) {
            clearInterval(time);
            toEndScreen();
        } else if (stopTimer) {
            clearInterval(time);
        }
        document.getElementById("time").innerHTML = "Time: " + seconds;}, 1000);
}

function questions() {
    if (difficulty === 1) {
        highestValue = 10;
        questionMax = 1;
        generateQuestion();
        if (questionType === 1) {
            addition();
        }
    }
    else if (difficulty === 2) {
        highestValue = 11;
        questionMax = 2;
        generateQuestion();
        if (questionType === 1) {
            addition();
        }
        else {
            subtraction();
        }
    }
    else {
        highestValue = 12;
        questionMax = 3;
        generateQuestion();
        if (questionType === 1) {
            addition();
        } else if (questionType === 2) {
            subtraction();
        } else {
            multiply();
        }
    }
}

function toEndScreen() {
    var score = document.getElementById("score");
    var playAgain = document.getElementById("playAgain");
    var time = document.getElementById("time");
    var question = document.getElementById("question");
    var input = document.getElementById("input");
    var readyMenu = document.getElementById("readyMenu");
    var answer = document.getElementById("answer");
    var back = document.getElementById("back");
    readyMenu.style.display = "none";
    score.style.display = "block";
    time.style.display = "none";
    question.style.display = "none";
    input.style.display = "none";
    answer.style.display = "none";
    playAgain.style.display = "inline-block";
    back.style.display = "none";
}

function toMenu() {
    stopTimer = true;
    var score = document.getElementById("score");
    var playAgain = document.getElementById("playAgain");
    var time = document.getElementById("time");
    var question = document.getElementById("question");
    var input = document.getElementById("input");
    var readyMenu = document.getElementById("readyMenu");
    var answer = document.getElementById("answer");
    var menu = document.getElementById("menu");
    var help = document.getElementById("helpMenu");
    var back = document.getElementById("back");
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
}

function toHelp() {
    var help = document.getElementById("helpMenu");
    var menu = document.getElementById("menu");
    var back = document.getElementById("back");
    help.style.display = "inline-block";
    menu.style.display = "none";
    back.style.display = "inline-block";
}