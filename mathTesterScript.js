var difficulty = 0;
var score = 0;
var highestValue = 0;
var time = 0;

function toReady(n) {
    difficulty = n
    highestValue = 0
}

function Test() {
    if (difficulty === 1) {
        highestValue = 10
    }
    else if (difficulty === 2) {
        highestValue = 11
    }
    else if (difficulty === 3) {
        highestValue = 12
    }
}