const canvas = document.getElementById("tester-canvas")
const ctx = canvas.getContext('2d');

function difficultySelection() {
    document.getElementById("startDifficulty").classList.add("hide");
    document.getElementById("buttons").style.display = "block";
    document.getElementById("helpButton").classList.remove('hide');
    document.getElementById("helpButton").classList.add('show');
    document.getElementById("helpText").style.display = "none";
}

// this function is called so that when the start button is pressed, the difficulties show up and the start button
// disappears.

function hideDifficulty() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("aimTitle").classList.add("hide");
    document.getElementById("tester-canvas").classList.add('show')
    document.getElementById('tester-canvas').classList.remove('hide');
    document.getElementById("targetHit").classList.remove('hide');
    document.getElementById("backDifficulty").style.display = "none";

// this function makes that when a difficulty is selected, the difficulty and difficulty help buttons disappear.


}
function showText() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("helpText").style.display = "block";
    document.getElementById('backDifficulty').style.display = "block";
}

// function that displays the difficulty help text and hides the difficulty selection.

var targetHits = 0;
var targetAmountHard = 30;

document.getElementById("targetLeft").textContent = "Targets Left: " + targetAmountHard.toString();
document.getElementById("targetHit").textContent = "Targets Hit: "  + targetHits.toString();

// assigning the targetHit variable value to the textContent of the targetHit id.


const player = { // making sure the the 1st target will always appear in the middle of the screen.
    x: 950,
    y: 490,
    colour: "cornflowerblue"
}
canvas.addEventListener("mousedown", onclick);

function onclick (e) { // function that checks whether or not the target was clicked.
    let el = e.target;
    let px = e.clientX - el.offsetLeft;
    let py = e.clientY - el.offsetTop;
    if ((player.x -px)**2 + (player.y - py)**2 < 50**2) {
        console.log("hit");
        targetHits = targetHits + 1; //adding 1 to the targetHits if the user has clicked the target.
        targetAmountHard -= 1;
        console.log(targetAmountHard);
    }
    else {
        console.log("you're cringe.");
        targetAmountHard -= 1;
        console.log(targetAmountHard);
    }
    hardBoundary(); // updates the target coordinates on the canvas.
    document.getElementById("targetLeft").textContent = "Targets Left: " + targetAmountHard.toString();
    document.getElementById("targetHit").textContent = "Targets Hit: "  + targetHits.toString();
    // updating the text value of the targetLeft and targetHit.

}

function hardBoundary(){ // the range that the target can spawn within the canvas, this range is for the expert difficulty.
    player.x = 1600 * Math.random();
    player.y = 800 * Math.random();
}



function run () { // function that runs the target game.
    var loop = function () {
        render(); //looping the render function.
        window.requestAnimationFrame(loop);

    }
    window.requestAnimationFrame(loop);

}

function render() { // drawing the target on the canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clears the canvas area.
    ctx.fillStyle = "cornflowerblue";
    ctx.beginPath();
    ctx.arc(player.x, player.y, 50, 0, 2 * Math.PI) // drawing the circle target.
    ctx.fill();
}
