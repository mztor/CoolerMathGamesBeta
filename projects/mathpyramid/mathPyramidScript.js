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
    document.getElementById("menuMP").classList.remove("hidden")
    document.getElementById("menuMP").classList.add("gameMain")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("gameMain");
    document.getElementById("helpMP").classList.add("hidden");
}

function toGame(n){
    document.getElementById("menuMP").classList.remove("hidden")
    document.getElementById("menuMP").classList.add("gameMain")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("gameMain");
    document.getElementById("helpMP").classList.add("hidden");
}

function toHelp(){
    document.getElementById("menuMP").classList.remove("gameMain")
    document.getElementById("menuMP").classList.add("hidden")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("hidden");
    document.getElementById("helpMP").classList.add("gameMain");
}

function nextGame(){
    document.getElementById("menuMP").classList.remove("hidden")
    document.getElementById("menuMP").classList.add("gameMain")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("gameMain");
    document.getElementById("helpMP").classList.add("hidden");
}

function reasult(){
    document.getElementById("menuMP").classList.remove("hidden")
    document.getElementById("menuMP").classList.add("gameMain")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("gameMain");
    document.getElementById("helpMP").classList.add("hidden");
}

