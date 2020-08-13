var difficulty = 0;
var score = 0;
var highestValue = 0;
var timeMax = 60;
var ran1 = 0;
var ran2 = 0;
var questionMax = 0;
var questionType = 0;
var question = "";
var answer = 0;

function toReady(n) {
    difficulty = n;
    highestValue = 0;
    var menu = document.getElementById("menu");
    var readyMenu = document.getElementById("readyMenu");
    var playAgain = document.getElementById("playAgain");
    menu.style.display = "none";
    playAgain.style.display = "none";
    readyMenu.style.display = "inline-block";
}

function Test() {
    var score = document.getElementById("score");
    var time = document.getElementById("time");
    var question = document.getElementById("question");
    var input = document.getElementById("input");
    var readyMenu = document.getElementById("readyMenu")
    readyMenu.style.display = "none";
    score.style.display = "inline-block";
    time.style.display = "inline-block";
    question.style.display = "inline-block";
    input.style.display = "inline-block";
    timer()
    console.log(timeMax)
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
    random1()
    random2()
    question = ran1 + "+ " + ran2;
    answer = ran1 + ran2;
}

function subtraction() {
    random1()
    random2()
    question = ran1 + "- " + ran2;
    answer = ran1 - ran2;
}

function multiply() {
    random1()
    random2()
    question = ran1 + "X " + ran2;
    answer = ran1 * ran2;
}

function timer() {
    let seconds = timeMax;
    let time = setInterval(function () {
        seconds--;
        console.log(seconds);
        if (seconds <= 0) { clearInterval(time) }
        }, 1000);
}
