var Difficulty;
var Answer;
var Lives;
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
    var x = document.getElementById("lives_left")
    x.innerHTML = Lives + "lives left";
}

function factorial (n) {
    if (n > 0) {
        return factorial(n - 1) * n;
    } else {
        return 1;
    }
}

console.log(factorial(5));

function RunTimer(){
    var mil = 10 * (Level + 2) * Difficulty;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, mil);
    function frame() {
        if (width === 100) {
            clearInterval(id);
            elem.style.width = '10px';
            EnableGuess();
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function EnableGuess(){
    HideDiv("show_number");
    ShowDiv("guess_number");
}

function SubmitGuess(){
    HideDiv("guess_number");
    var x = document.getElementById("guess");
    if (x.value === Answer){
        Level = Level + 1;
        ShowDiv("correct");
    } else {
        if (Lives > 1){
            Lives = Lives - 1;
            var y = document.getElementById("your_guess");
            y.innerHTML = "Your guess: " + x.value;
            var z = document.getElementById("correct_answer");
            z.innerHTML = "Correct answer: " + Answer;
            ShowDiv("incorrect");

        } else {
            Lives = Lives - 1;

        }
    }
    x.value = "";
}

function NextLevel(){
    HideDiv("correct")
    SetDifficulty(Difficulty)
}
