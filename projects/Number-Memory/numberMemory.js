var Difficulty;
var Answer;
var Lives = 2;
var Level = 1;

// hides div that is passed to the function //
function HideDiv(div){
    var x = document.getElementById(div);
    x.style.display = "none";
}

// shows div that is passed to the function //
function ShowDiv(div) {
    var x = document.getElementById(div);
    x.style.display = "block";
}

// sets difficulty //
function SetDifficulty(diff){
    Difficulty = diff;
    // calls generate number function with the value of the level //
    GenerateNumber(Level);
    HideDiv("difficulty_select");
    ShowDiv("show_number");
}

// generating random number //
function GenerateNumber(Level){
    var i;
    var txtReturn = '';
    // loop the string for the amount of times that is passed through the loop //
    for (i = 0; i < Level; i++) {
        txtReturn += String(Math.floor(Math.random() * 9 + 1));
    }
    Answer = txtReturn;
    // updates the answer //
    var y = document.getElementById("display_number");
    y.innerHTML = txtReturn;
    // calls new function //
    RunTimer();
    console.log(Answer);
}

// updates the lives left label //
function UpdateLives(){
    var x = document.getElementById("lives_left_label")
    // updating the text in the lives left label //
    x.innerHTML = "Lives left: " + (Lives + 1);
    // shows div "incorrect" //
    ShowDiv("incorrect");
}

// sets a timer with a bar that represents the timer //
function RunTimer(){
    var mil = 10 * (Level + 2) * Difficulty;
    var elem = document.getElementById("myBar");
    var width = 100;
    var id = setInterval(frame, mil);
    function frame() {
        if (width === 0) {
            clearInterval(id);
            elem.style.width = '10px';
            // when the width of the bar reaches 0, call EnableGuess function //
            EnableGuess();
        } else {
            width--;
            elem.style.width = width + '%';
        }
    }
}

// seing if the user pressed enter //
function isEnterPressed (event) {
    if (event.keyCode === 13) {
        // if the user pressed enter, remove the event listener //
        document.removeEventListener("keydown", isEnterPressed);
        // loads function //
        SubmitGuess();
    }
}

// shows the guess screen //
function EnableGuess(){
    // adding event listener to see if the user presses enter //
    document.addEventListener("keydown", isEnterPressed);
    HideDiv("show_number");
    ShowDiv("guess_number");
    // auto highlights the input box so the user can type without pressing the box //
    document.getElementById("guess").focus();
}

// submits guess //
function SubmitGuess(){
    document.removeEventListener("keydown", isEnterPressed);
    HideDiv("guess_number");
    // gets the user's guess //
    var x = document.getElementById("guess");
    // checks if the user's guess is correct //
    if (x.value === Answer){
        // if the user's guess is correct add one to the level and load "correct" screen //
        Level = Level + 1;
        ShowDiv("correct");
    } else {
        if (Lives > 0){
            // if user's guess is incorrect, and they have more than one life, take away one life //
            Lives = Lives - 1;
            UpdateLives();
        } else {
            // if the user has no lives left - end the game //
            GameOver()
        }
    }
    x.value = "";
}

// loads new level //
function NextLevel(){
    HideDiv("correct")
    SetDifficulty(Difficulty)
}

// restarts level //
function RetryLevel(){
    HideDiv("incorrect")
    SetDifficulty(Difficulty)
}

// shows game over screen //
function GameOver(){
    var x = document.getElementById("final_score")
    score = Level - 1
    // displays the user's score that they got //
    x.innerHTML = "Final score: " + score;
    ShowDiv("gameOver")
}

// loads the instruction page //
function LoadInstructions(){
    HideDiv("difficulty_select")
    ShowDiv("instructions")
}

// loads the difficulty selection page //
function LoadDifficulty(){
    HideDiv("instructions")
    ShowDiv("difficulty_select")
}

// restarts the game, resetting all of the variables //
function RestartGame(){
    Lives = 2
    Level = 1
    HideDiv("gameOver")
    ShowDiv("difficulty_select")
}