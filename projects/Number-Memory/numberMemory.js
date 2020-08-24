var lives = 3;
var i = 0;
var Answer;
var difficulty;

Answer = ( GenerateNumber(level));
document.getElementById("GuessNumber").innerHTML = Answer;


function GenerateNumber(digits){
    var i;
    var txtReturn;
    txtReturn = '';
    for (i = 0; i < digits; i++) {
        txtReturn += String(Math.floor(Math.random() * 9 + 1));
    }
    return txtReturn;
}

function HideDiv(div){
    var x = document.getElementById(div)
    x.style.display = none;
}

function ShowDiv(div){
    var x = document.getElementById(div)
    x.style.display = block;
}

function RunTimer(){
    var mil = 10 * (current_level + 2) * difficulty;
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, mil);
    function frame() {
        if (width === 100) {
            clearInterval(id);
            elem.style.width = '10px';
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

function SetDifficulty(){
    difficulty = diff;
    GenerateNumber();
    HideDiv("difficulty_select");
    ShowDiv()
}

function EnableGuess(){

}