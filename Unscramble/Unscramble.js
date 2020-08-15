function toHelp() {
    document.getElementById("gameTitle").classList.add("hide");
    document.getElementById("gameplay").classList.add("hide");
    document.getElementById("helpMenu").classList.remove("hide")
}


function toDifficulty() {
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("gameplay").classList.add("hide")
    document.getElementById("quit").classList.add("hide")
    document.getElementById("gameTitle").classList.remove("hide");
    document.getElementById("difficultySelect").classList.remove("hide")
}

function toGameplay() {
    document.getElementById("difficultySelect").classList.add("hide")
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("gameTitle").classList.remove("hide")
    document.getElementById("gameplay").classList.remove("hide")
    document.getElementById("quit").classList.remove("hide")
}