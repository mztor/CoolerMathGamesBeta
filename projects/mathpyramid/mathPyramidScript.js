var max = 0, difficulty = 0, L33 = 0, L32 = 0, L31 = 0, L21 = 0, L22 = 0, L11 = 0, score = 0;

var help = document.getElementById("helpMP");
var menu = document.getElementById("menuMP");
var game = document.getElementById("gameMP");

function gameReady(n) {
    score = 0
    difficulty = n
    if (difficulty = 1){
        max = 20
    } else if(difficulty = 2){
        max = 100
    }else {
        max = 500
    }
    L31 = math.floor(math.random()*max)-1
    L32 = math.floor(math.random()*(max-L31))+1
    L33 = math.floor(math.random()*(max-L31-L32))+1
    L21 = L31 + L32;
    L22 = L32 +L33;
    L11 = L21 + L22;
}

function toMenu(){
    document.getElementById("menuMP").style.display = "";
    document.getElementById("gameMP").style.display = "none";
    document.getElementById("helpMP").style.display = "none";
}

function toGame(n){
    document.getElementById("menuMP").style.display = "none";
    document.getElementById("gameMP").style.display = "";
    document.getElementById("helpMP").style.display = "none";
}

function toHelp(){
    document.getElementById("menuMP").style.display = "none";
    document.getElementById("gameMP").style.display = "none";
    document.getElementById("helpMP").style.display = "";
}

function nextGame(){
    menu.style.display = "none";
    help.style.display = "none";
    game.style.display = "block";
}

function reasult(){
    menu.style.display = "none";
    help.style.display = "none";
    game.style.display = "block";
}

