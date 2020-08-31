var Difficulty;
var Answer;
var Lives = 2;
var Level = 1;

function HideDiv(div){
    var x = document.getElementById(div);
    x.style.display = "none";
}

function ShowDiv(div) {
    var x = document.getElementById(div);
    x.style.display = "block";
}


function SetDifficulty(diff){
    Difficulty = diff;
    GenerateNumber(Level);
    HideDiv("difficulty_select");
    ShowDiv("show_number");
}

function GenerateNumber(Level){
    var i;
    var txtReturn = '';
    for (i = 0; i < Level; i++) {
        txtReturn += String(Math.floor(Math.random() * 9 + 1));
    }
    Answer = txtReturn;
    var y = document.getElementById("display_number");
    y.innerHTML = txtReturn;
    RunTimer();
    console.log(Answer);
}

function UpdateLives(){
    var x = document.getElementById("lives_left_label")
    x.innerHTML = "Lives left: " + (Lives + 1);
    ShowDiv("incorrect");
}

function RunTimer(){
    var mil = 10 * (Level + 2) * Difficulty;
    var elem = document.getElementById("myBar");
    var width = 100;
    var id = setInterval(frame, mil);
    function frame() {
        if (width === 0) {
            clearInterval(id);
            elem.style.width = '10px';
            EnableGuess();
        } else {
            width--;
            elem.style.width = width + '%';
        }
    }
}

function isSpacePressed (event) {
    if (event.keyCode === 13) {
        document.removeEventListener("keydown", isSpacePressed);
        SubmitGuess();
    }
}

function EnableGuess(){
    document.addEventListener("keydown", isSpacePressed);

    HideDiv("show_number");
    ShowDiv("guess_number");
    document.getElementById("guess").focus();
}

function SubmitGuess(){
    HideDiv("guess_number");
    var x = document.getElementById("guess");
    if (x.value === Answer){
        Level = Level + 1;
        ShowDiv("correct");
    } else {
        if (Lives > 0){
            Lives = Lives - 1;
            UpdateLives();
        } else {
            GameOver()
        }
    }
    x.value = "";
}


function NextLevel(){
    HideDiv("correct")
    SetDifficulty(Difficulty)
}

function RetryLevel(){
    HideDiv("incorrect")
    SetDifficulty(Difficulty)
}

function GameOver(){
    var x = document.getElementById("final_score")
    score = Level - 1
    x.innerHTML = "Final score: " + score;
    ShowDiv("gameOver")
}

function LoadInstructions(){
    HideDiv("difficulty_select")
    ShowDiv("instructions")
}

function LoadDifficulty(){
    HideDiv("instructions")
    ShowDiv("difficulty_select")
}

function RestartGame(){
    Lives = 2
    Level = 1
    HideDiv("gameOver")
    ShowDiv("difficulty_select")
}