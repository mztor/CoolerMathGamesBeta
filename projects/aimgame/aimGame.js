const canvas = document.getElementById("tester-canvas")
const ctx = canvas.getContext('2d');

function difficultySelection() {
    document.getElementById("startDifficulty").classList.add("hide");
    document.getElementById("buttons").style.display = "block";
    document.getElementById("helpButton").classList.remove('hide');
    document.getElementById("helpButton").classList.add('show');
    document.getElementById("helpText").style.display = "none";
}

function hideDifficulty() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("aimTitle").classList.add("hide");
    document.getElementById("tester-canvas").classList.add('show')
    document.getElementById('tester-canvas').classList.remove('hide');
    document.getElementById("targetHit").classList.remove('hide');
    document.getElementById("backDifficulty").style.display = "none";




}
function testHide() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("helpText").style.display = "block";
    document.getElementById('backDifficulty').style.display = "block";
}

var targetHits = 0;
var targetAmountHard = 30;

document.getElementById("targetLeft").textContent = "Targets Left: " + targetAmountHard.toString();
document.getElementById("targetHit").textContent = "Targets Hit: "  + targetHits.toString();


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
        targetHits = targetHits + 1;
        targetAmountHard -= 1;
        console.log(targetAmountHard);
    }
    else {
        console.log("you're cringe.");
        targetAmountHard -= 1;
        console.log(targetAmountHard);
    }
    hardBoundary();
    document.getElementById("targetLeft").textContent = "Targets Left: " + targetAmountHard.toString();
    document.getElementById("targetHit").textContent = "Targets Hit: "  + targetHits.toString();


}

function hardBoundary(){
    player.x = 1600 * Math.random();
    player.y = 800 * Math.random();
}

function run () { // function that runs the target game.
    var loop = function () {
        /*updateHard();*/
        render();
        window.requestAnimationFrame(loop);

    }
    window.requestAnimationFrame(loop);

}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cornflowerblue";
    ctx.beginPath();
    ctx.arc(player.x, player.y, 50, 0, 2 * Math.PI)
    ctx.fill();
}
