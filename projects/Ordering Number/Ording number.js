let score =0;
let highScore =0;

function myFunction() {
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    x.appendChild(t);
    document.body.appendChild(x);

    x.addEventListener("click", function(){ clickedMe(x); });
}

function toTitlePage() {
    // Pages hidden
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("game").classList.add("hide")
    document.getElementById("difficulty").classList.add("hide");
    document.getElementById("winScreen").classList.add("hide");
    document.getElementById("quit").classList.add("hide");

function toHelp() {
    document.getElementById("difficulty").classList.add("hide");
    document.getElementById("helpMenu").classList.remove("hide")