let playerboard = 0;
let computerboard = 0;
//
function startbutton() {
    document.getElementById("Startbutton").style.display = "none";
    document.getElementById("standardbutton").style.display = "block";
    document.getElementById("hardbutton").style.display = "block";
}
Startbutton.onclick = startbutton;
//
function standardmode2() {
    document.getElementById("standardbutton").style.display = "none";
    document.getElementById("hardbutton").style.display = "none";
    document.getElementById("responses").style.display = "block";
    document.getElementById("response").style.display = "block"
    document.getElementById("response2").style.display = "block"
}
standardbutton.onclick = standardmode2;
//
var ability = ['Rock', 'Paper', 'Scissors'];
function rockchoice() {
    response2.textContent = "Rock";
}
rock.onclick = rockchoice;
//
function paperchoice() {
    response2.textContent = "Paper";
}
paper.onclick = paperchoice;
//
function scissorschoice() {
    response2.textContent = "Scissors";
}
scissors.onclick = scissorschoice;
//
function Check() {
    var random = ability[Math.floor(Math.random()*ability.length)];
    response.textContent = random;
    console.log(response2.textContent, random);
    if (response2.textContent === random) {
        changethis.textContent = "You Tie";
    }
    if (response2.textContent === "Rock") {
        if (response.textContent === "Paper") {
            changethis.textContent = "You Lose";
            computerboard = (computerboard + 1);
        }
    }
    if (response2.textContent === "Rock") {
        if (response.textContent === "Scissors") {
            changethis.textContent = "You win";
            playerboard = (playerboard + 1);
        }
    }
    if (response2.textContent === "Paper") {
        if (response.textContent === "Scissors") {
            changethis.textContent = "You Lose";
            computerboard = (computerboard + 1);
        }
    }
    if (response2.textContent === "Paper") {
        if (response.textContent === "Rock") {
            changethis.textContent = "You win";
            playerboard = (playerboard + 1);
        }
    }
    if (response2.textContent === "Scissors") {
        if (response.textContent === "Paper") {
            changethis.textContent = "You Win";
            playerboard = (playerboard + 1);
        }
    }
    if (response2.textContent === "Scissors") {
        if (response.textContent === "Rock") {
            changethis.textContent = "You Lose";
            computerboard = (computerboard + 1);
        }
    }
    document.getElementById("computerscorechange").textContent = computerboard;
    document.getElementById("playerscorechange").textContent = playerboard;
    document.getElementById("responses").style.display = "none";
    document.getElementById("button2").style.display = "block";
    document.getElementById("changethis").style.display = "block";
    document.getElementById("playerscore").style.display = "block";
    document.getElementById("computerscore").style.display = "block";

}
responses.onclick = Check;

function reset() {
    document.getElementById("responses").style.display = "block"
    document.getElementById("button2").style.display = "none"
    document.getElementById("changethis").style.display = "none"
    response2.textContent = "You";
    response.textContent = "Computer";
}
button2.onclick = reset;