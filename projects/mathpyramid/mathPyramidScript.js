var max = 0, difficulty = 0, L33 = 0, L32 = 0, L31 = 0, L21 = 0, L22 = 0, L11 = 0, score = 0;

function gameReady(n) {
    score = 0
    difficulty = n

}

function toMenu(){
    var help = document.getElementById("helpMP");
    var menu = document.getElementById("menuMP");
    var game = document.getElementById("gameMP");
    menu.style.display = "block";
    help.style.display = "none";
    game.style.display = "none";
}

function toGame(){
    var help = document.getElementById("helpMP");
    var menu = document.getElementById("menuMP");
    var game = document.getElementById("gameMP");
    menu.style.display = "none";
    help.style.display = "none";
    game.style.display = "block";
}

function toHelp(){
    var help = document.getElementById("helpMP");
    var menu = document.getElementById("menuMP");
    var game = document.getElementById("gameMP");
    menu.style.display = "none";
    help.style.display = "inline-block";
    game.style.display = "none";
}