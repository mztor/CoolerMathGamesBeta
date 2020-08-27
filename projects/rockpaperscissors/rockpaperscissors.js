let playerboard = 0;
let computerboard = 0;
let winstreak = 0;
let IMplayerboard = 0;
let IMcomputerboard = 0;
let IMwinstreak = 0;


var ability = ['Rock','Paper', 'Scissors'];
function rockchoice() {
    response2.textContent = "Rock";
}
rock.onclick = rockchoice;

function paperchoice() {
    response2.textContent = "Paper";
}
paper.onclick = paperchoice;

function scissorschoice() {
    response2.textContent = "Scissors";
}
scissors.onclick = scissorschoice;

function Check() {
    var random = ability[Math.floor(Math.random()*ability.length)];
    response.textContent = random;
    if (response2.textContent === random) {
        changethis.textContent = "You Tie";
    }
    if (response2.textContent === "Rock") {
        if (response.textContent === "Paper") {
            changethis.textContent = "You Lose";
            computerboard++;
        }
    }
    if (response2.textContent === "Rock") {
        if (response.textContent === "Scissors") {
            changethis.textContent = "You win";
            playerboard++;
        }
    }
    if (response2.textContent === "Paper") {
        if (response.textContent === "Scissors") {
            changethis.textContent = "You Lose";
            computerboard++;
        }
    }
    if (response2.textContent === "Paper") {
        if (response.textContent === "Rock") {
            changethis.textContent = "You win";
            playerboard++;
        }
    }
    if (response2.textContent === "Scissors") {
        if (response.textContent === "Paper") {
            changethis.textContent = "You Win";
            playerboard++;
        }
    }
    if (response2.textContent === "Scissors") {
        if (response.textContent === "Rock") {
            changethis.textContent = "You Lose";
            computerboard++;
        }
    }
    document.getElementById("computerscorechange").textContent = computerboard;
    document.getElementById("playerscorechange").textContent = playerboard;
    if (computerboard === 3) {
        document.getElementById("StartStandard").style.display = "none";
        document.getElementById("LoserEndScreen").style.display = "block";
        winstreak = 0;
    }
    if (playerboard === 3) {
        document.getElementById("StartStandard").style.display = "none";
        document.getElementById("WinnerEndScreen").style.display = "block";
        winstreak++;
    }
    document.getElementById("responses").style.display = "none";
    document.getElementById("button2").style.display = "block";
    document.getElementById("changethis").style.display = "block";
    document.getElementById("playerscore").style.display = "block";
    document.getElementById("computerscore").style.display = "block";
    document.getElementById("ScoreTally").style.display = "block";
    document.getElementById("winstreakchange").textContent = winstreak;
}
responses.onclick = Check;
function startbutton() {
    document.getElementById("Startbutton").style.display = "none";
    document.getElementById("standardbutton").style.display = "block";
    document.getElementById("hardbutton").style.display = "block";
    document.getElementById("Quit").style.display = "block";
    document.getElementById("GameSelector").style.display = "none";
    document.getElementById("HowToPlay").style.display = "none";
    document.getElementById("IMlossscreen").style.display = "none";
    document.getElementById("IMwinscreen").style.display = "none";
}
Startbutton.onclick = startbutton;

function standardmode2() {
    document.getElementById("standardbutton").style.display = "none";
    document.getElementById("hardbutton").style.display = "none";
    document.getElementById("responses").style.display = "block";
    document.getElementById("response").style.display = "block";
    document.getElementById("response2").style.display = "block";
    document.getElementById("StartStandard").style.display = "block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("changethis").style.display = "none";
    document.getElementById("TitleScreen").style.display = "none";
    document.getElementById("ScoreTally").style.display = "none";
    computerboard = 0;
    playerboard = 0;
    document.getElementById("computerscorechange").textContent = computerboard;
    document.getElementById("playerscorechange").textContent = playerboard;
    response.textContent = "Computer";
    response2.textContent = "You";
}
standardbutton.onclick = standardmode2;

function reset() {
    document.getElementById("responses").style.display = "block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("changethis").style.display = "none";
    response2.textContent = "You";
    response.textContent = "Computer";
}
button2.onclick = reset;
function restartgamefromloss() {
    document.getElementById("LoserEndScreen").style.display = "none";
    document.getElementById("standardbutton").style.display = "none";
    document.getElementById("hardbutton").style.display = "none";
    document.getElementById("responses").style.display = "block";
    document.getElementById("response").style.display = "block";
    document.getElementById("response2").style.display = "block";
    document.getElementById("StartStandard").style.display = "block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("changethis").style.display = "none";
    computerboard = 0;
    playerboard = 0;
    document.getElementById("computerscorechange").textContent = computerboard;
    document.getElementById("playerscorechange").textContent = playerboard;
    response.textContent = "Computer";
    response2.textContent = "You";
}
restartLoss.onclick = restartgamefromloss;

function restartgamefromwin() {
    document.getElementById("WinnerEndScreen").style.display = "none";
    document.getElementById("standardbutton").style.display = "none";
    document.getElementById("hardbutton").style.display = "none";
    document.getElementById("responses").style.display = "block";
    document.getElementById("response").style.display = "block";
    document.getElementById("response2").style.display = "block";
    document.getElementById("button2").style.display = "none";
    document.getElementById("StartStandard").style.display = "block";
    document.getElementById("changethis").style.display = "none";
    computerboard = 0;
    playerboard = 0;
    document.getElementById("computerscorechange").textContent = computerboard;
    document.getElementById("playerscorechange").textContent = playerboard;
    response.textContent = "Computer";
    response2.textContent = "You";

}
restartWin.onclick = restartgamefromwin;

function StartHardGame() {
    document.getElementById("TitleScreen").style.display = "none";
    document.getElementById("impossibleResponses").style.display = "block";
    document.getElementById("ComputerResponse").style.display = "block";
    document.getElementById("yourResponse").style.display = "block";
    document.getElementById("HardGame").style.display = "block";
    document.getElementById("Quit").style.display = "block";
    document.getElementById("IMcomputerscore").style.display = "block";
    document.getElementById("IMplayerscore").style.display = "block";
}
hardbutton.onclick = StartHardGame;
function Irockchoice() {
    yourResponse.textContent = "Rock";
}
Irock.onclick = Irockchoice;

function Ipaperchoice() {
    yourResponse.textContent = "Paper";
}
Ipaper.onclick = Ipaperchoice;

function Iscissorschoice() {
    yourResponse.textContent = "Scissors";
}
Iscissors.onclick = Iscissorschoice;

function ImpossibleResponses() {
    var IMrock = ['Rock','Rock','Paper','Scissors'];
    var IMpaper = ['Rock','Paper','Paper','Scissors'];
    var IMscissors = ['Rock','Paper','Scissors','Scissors'];
    var higherRock = IMrock[Math.floor(Math.random()*IMrock.length)];
    var higherPaper = IMpaper[Math.floor(Math.random()*IMpaper.length)];
    var higherScissors = IMscissors[Math.floor(Math.random()*IMscissors.length)];
    document.getElementById("computerscorechange").textContent = computerboard;
    document.getElementById("playerscorechange").textContent = playerboard;
    if (yourResponse.textContent === "Scissors") {
        ComputerResponse.textContent = higherRock;
        console.log(yourResponse.textContent, ComputerResponse.textContent);
        if (ComputerResponse.textContent === "Rock") {
            Ichangethis.textContent = "You Lose";
            IMcomputerboard++;
        }
        if (ComputerResponse.textContent === "Paper"){
            Ichangethis.textContent = "You Win";
            IMplayerboard++;
        }
        if (ComputerResponse.textContent === "Scissors") {
            Ichangethis.textContent = "Tie";
        }
    }
    if (yourResponse.textContent === "Paper") {
        ComputerResponse.textContent = higherScissors;
        console.log(yourResponse.textContent, ComputerResponse.textContent);
        if (ComputerResponse.textContent === "Rock") {
            Ichangethis.textContent = "You Win";
            IMplayerboard++;
        }
        if (ComputerResponse.textContent === "Paper"){
            Ichangethis.textContent = "Tie";
        }
        if (ComputerResponse.textContent === "Scissors") {
            Ichangethis.textContent = "You Lose";
            IMcomputerboard++;
        }
    }
    if (yourResponse.textContent === "Rock") {
        ComputerResponse.textContent = higherPaper;
        console.log(yourResponse.textContent, ComputerResponse.textContent);
        if (ComputerResponse.textContent === "Rock") {
            Ichangethis.textContent = "Tie";
        }
        if (ComputerResponse.textContent === "Paper"){
            Ichangethis.textContent = "You Lose";
            IMcomputerboard++;
        }
        if (ComputerResponse.textContent === "Scissors") {
            Ichangethis.textContent = "You Win";
            IMplayerboard++;
        }
    }
    document.getElementById("Ichangethis").style.display = "block";
    document.getElementById("IMplayerscorechange").textContent = IMplayerboard;
    document.getElementById("IMcomputerscorechange").textContent = IMcomputerboard;
    if (IMcomputerboard === 3) {
        document.getElementById("HardGame").style.display = "none";
        document.getElementById("IMlossscreen").style.display = "block";
        document.getElementById("IMwinstreak").style.display = "block";
        IMwinstreak = 0;
        document.getElementById("IMwinstreakchange").textContent = IMwinstreak;
        document.getElementById("IMwinstreak").style.display = "block";
        document.getElementById("IMrestartwin").style.display = "block";
    }
    if (IMplayerboard === 3) {
        document.getElementById("HardGame").style.display = "none";
        document.getElementById("IMwinscreen").style.display = "block";
        document.getElementById("IMwinstreak").style.display = "block";
        IMwinstreak++;
        document.getElementById("IMwinstreakchange").textContent = IMwinstreak;
        document.getElementById("IMrestartwin").style.display = "block";
    }
}
impossibleResponses.onclick = ImpossibleResponses;

function quit() {
    document.getElementById("StartStandard").style.display = "none";
    document.getElementById("standardbutton").style.display = "none";
    document.getElementById("hardbutton").style.display = "none";
    document.getElementById("WinnerEndScreen").style.display = "none";
    document.getElementById("LoserEndScreen").style.display = "none";
    document.getElementById("HardGame").style.display = "none";
    document.getElementById("TitleScreen").style.display = "block";
    document.getElementById("Startbutton").style.display = "block";
    document.getElementById("playagain").style.display = "block";
    document.getElementById("Quit").style.display = "none";
    document.getElementById("GameSelector").style.display = "block"
    document.getElementById("HowToPlay").style.display = "block"
    document.getElementById("IMwinscreen").style.display = "none"
    document.getElementById("IMlossscreen").style.display = "none"
}
Quit.onclick = quit;

function GameSelectorPage() {
    document.getElementById("TitleScreen").style.display = "none";
    document.getElementById("GameSelector").style.display = "none";
    document.getElementById("HowToPlay").style.display = "none"
}
GameSelector.onclick = GameSelectorPage;

function Walkthrough() {
    document.getElementById("TitleScreen").style.display = "none";
    document.getElementById("GameSelector").style.display = "none";
    document.getElementById("HowToPlay").style.display = "none"
}
HowToPlay.onclick = Walkthrough;