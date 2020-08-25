let value = "x";
let alternativeValue = "o";
let extra = "";
let target = 1;
let score1 = 0;
let score2 = 0;
let player = "";
let draw = false


function clicked (textBoxNumber) {
    let textBox = "textBox" + textBoxNumber.toString()
    document.getElementById(textBox).value = value
    document.getElementById(textBox).disabled = true
    extra = value;
    value = alternativeValue;
    alternativeValue = extra;
    player = value === "x" ? "Player 1" : "Player 2";
    document.getElementsByTagName("h2")[0].innerText = "It's " + player + "'s turn";
    winCondition();
}

function isFilled () {
    for (let i = 1; i < 10; i++) {
        let textBox = "textBox" + i.toString();
        if (document.getElementById(textBox).value === "Click") return false;
    }
    target--;

    return true;
}

function winCondition() {
    let data = [];
    for (var rows = 0; rows < 3; rows++) {
        data.push([]);
        for (var cols = 0; cols < 3; cols++) {
            let textBox = "textBox" + (rows * 3 + cols + 1).toString();
            data[rows].push(document.getElementById(textBox).value);
        }
    }


    if (data[0][0] === data[0][1] && data[0][1] === data[0][2] ||
        data[1][0] === data[1][1] && data[1][1] === data[1][2] ||
        data[2][0] === data[2][1] && data[2][1] === data[2][2]) {
        if (data[0][0] === "x" && data[0][1] === "x" && data[0][2] === "x" ||
            data[1][0] === "x" && data[1][1] === "x" && data[1][2] === "x" ||
            data[2][0] === "x" && data[2][1] === "x" && data[2][2] === "x" ||
            data[0][0] === "o" && data[0][1] === "o" && data[0][2] === "o" ||
            data[1][0] === "o" && data[1][1] === "o" && data[1][2] === "o" ||
            data[2][0] === "o" && data[2][1] === "o" && data[2][2] === "o") {
            target--;
            if (target === 0){
                winScreen()
            }
            resetBoard()
            return;
        }
    }



    else if (data[0][0] === data[0][1] && data[0][1] === data[0][2] ||
        data[1][0] === data[1][1] && data[1][1] === data[1][2] ||
        data[2][0] === data[2][1] && data[2][1] === data[2][2]) {
        if (data[0][0] === "x" && data[0][1] === "x" && data[0][2] === "x" ||
            data[1][0] === "x" && data[1][1] === "x" && data[1][2] === "x" ||
            data[2][0] === "x" && data[2][1] === "x" && data[2][2] === "x" ||
            data[0][0] === "o" && data[0][1] === "o" && data[0][2] === "o" ||
            data[1][0] === "o" && data[1][1] === "o" && data[1][2] === "o" ||
            data[2][0] === "o" && data[2][1] === "o" && data[2][2] === "o"){
            target--;
            if (target === 0){
                winScreen()
            }
            resetBoard()
            return;
        }
    }


    else if (data[0][0] === data[1][1] && data[1][1] === data[2][2]) {
        if (data[0][0] === "x" && data[1][1] === "x" && data[2][2] === "x" || data[0][0] === "o" && data[1][1] === "o" && data[2][2] === "o" ) {
            target--
            if (target === 0){
                winScreen()
            }
            resetBoard()
            return;
        }
    }
    else if (data[0][2] === data[1][1] && data[1][1] === data[2][0]) {
        if (data[0][2] === "x" && data[1][1] === "x" && data[2][0] === "x" || data[0][2] === "o" && data[1][1] === "o" && data[2][0] === "o" ){
            target--
            if (target === 0){
                score1 = 0;
                score2 = 0;
                winScreen();
            }
            resetBoard()
            return;
        }
    }
    else{
        if (isFilled()){
            if (target === 0) {

                resetBoard();
                drawscreen();
            }
            else{
                target--;
                draw = true;
                resetBoard();
            }
        }
    }
}

function resetBoard() {
    if (draw === true){
        isFilled();
    }
    else{
        score1 += value === "x" ? 1 : 0;
        score2 += value === "o" ? 1 : 0;
    }
    document.getElementsByTagName("h3")[0].innerText = "Score: " + score2 + " : " + score1;
    for (let i = 1; i < 10; i++) {
        let textBox = "textBox" + i.toString()
        document.getElementById(textBox).value = "Click";
        document.getElementById(textBox).disabled = false;

    }
}
function drawscreen(){
    document.getElementById("gameTTT").classList.remove("showTTT");
    document.getElementById("gameTTT").classList.add("hideTTT");
    document.getElementById("DrawscreenTTT").classList.remove("hideTTT");
    document.getElementById("DrawscreenTTT").classList.add("showTTT");
}
function winScreen() {
    document.getElementById("gameTTT").classList.remove("showTTT");
    document.getElementById("gameTTT").classList.add("hideTTT");
    document.getElementById("WinscreenTTT").classList.remove("hideTTT");
    document.getElementById("WinscreenTTT").classList.add("showTTT");
    player = value === "o" ? "Player 1" : "Player 2";
    document.getElementsByTagName("p")[0].innerText = "The winner is " + player;
}

function Play() {
    document.getElementById("SelectionTTT").classList.remove("hideTTT");
    document.getElementById("SelectionTTT").classList.add("showTTT");
    document.getElementById("MenuTTT").classList.remove("showTTT");
    document.getElementById("MenuTTT").classList.remove("buttonTTT");
    document.getElementById("MenuTTT").classList.add("hideTTT");
}
function Play1() {
    score1 = score2 = 0;
    document.getElementsByTagName("h3")[0].innerText = "Score: " + score2 + " : " + score1;
    document.getElementById("gameTTT").classList.remove("hideTTT");
    document.getElementById("gameTTT").classList.add("showTTT");
    document.getElementById("SelectionTTT").classList.remove("showTTT");
    document.getElementById("SelectionTTT").classList.remove("buttonTTT");
    document.getElementById("SelectionTTT").classList.add("hideTTT");
    target = 1;

}
function Play3() {
    score1 = score2 = 0;
    document.getElementsByTagName("h3")[0].innerText = "Score: " + score2 + " : " + score1;
    document.getElementById("gameTTT").classList.remove("hideTTT");
    document.getElementById("gameTTT").classList.add("showTTT");
    document.getElementById("SelectionTTT").classList.remove("showTTT");
    document.getElementById("SelectionTTT").classList.remove("buttonTTT");
    document.getElementById("SelectionTTT").classList.add("hideTTT");
    target = 3;
}
function Play5() {
    score1 = score2 = 0;
    document.getElementsByTagName("h3")[0].innerText = "Score: " + score2 + " : " + score1;
    document.getElementById("gameTTT").classList.remove("hideTTT");
    document.getElementById("gameTTT").classList.add("showTTT");
    document.getElementById("SelectionTTT").classList.remove("showTTT");
    document.getElementById("SelectionTTT").classList.remove("buttonTTT");
    document.getElementById("SelectionTTT").classList.add("hideTTT");
    target = 5;
}
function Help() {
    document.getElementById("MenuTTT").classList.remove("showTTT");
    document.getElementById("MenuTTT").classList.add("hideTTT");
    document.getElementById("helpTTT").classList.remove("hideTTT");
    document.getElementById("helpTTT").classList.add("showTTT");
}
function QuitGame(){
    document.getElementById("gameTTT").classList.remove("showTTT");
    document.getElementById("gameTTT").classList.add("hideTTT");
    document.getElementById("MenuTTT").classList.remove("hideTTT");
    document.getElementById("MenuTTT").classList.add("showTTT");
    resetBoard()
}
function QuitHelp(){
    document.getElementById("helpTTT").classList.remove("showTTT");
    document.getElementById("helpTTT").classList.add("hideTTT");
    document.getElementById("MenuTTT").classList.remove("hideTTT");
    document.getElementById("MenuTTT").classList.add("showTTT");
}
function replay(){
    document.getElementById("SelectionTTT").classList.remove("hideTTT");
    document.getElementById("SelectionTTT").classList.add("showTTT");
    document.getElementById("WinscreenTTT").classList.remove("showTTT");
    document.getElementById("WinscreenTTT").classList.remove("buttonTTT");
    document.getElementById("WinscreenTTT").classList.add("hideTTT");
}
function QuitFinal(){
    document.getElementById("WinscreenTTT").classList.remove("showTTT");
    document.getElementById("WinscreenTTT").classList.remove("buttonTTT");
    document.getElementById("WinscreenTTT").classList.add("hideTTT");
    document.getElementById("MenuTTT").classList.remove("hideTTT");
    document.getElementById("MenuTTT").classList.add("showTTT");
}
function QuitDraw(){
    document.getElementById("DrawscreenTTT").classList.remove("showTTT");
    document.getElementById("DrawscreenTTT").classList.remove("buttonTTT");
    document.getElementById("DrawscreenTTT").classList.add("hideTTT");
    document.getElementById("MenuTTT").classList.remove("hideTTT");
    document.getElementById("MenuTTT").classList.add("showTTT");
}
function replayDraw(){
    document.getElementById("SelectionTTT").classList.remove("hideTTT");
    document.getElementById("SelectionTTT").classList.add("showTTT");
    document.getElementById("DrawscreenTTT").classList.remove("showTTT");
    document.getElementById("DrawscreenTTT").classList.remove("buttonTTT");
    document.getElementById("DrawscreenTTT").classList.add("hideTTT");
}
function QuitSelection(){
    document.getElementById("MenuTTT").classList.remove("hideTTT");
    document.getElementById("MenuTTT").classList.add("showTTT");
    document.getElementById("SelectionTTT").classList.remove("showTTT");
    document.getElementById("SelectionTTT").classList.remove("buttonTTT");
    document.getElementById("SelectionTTT").classList.add("hideTTT");
}

