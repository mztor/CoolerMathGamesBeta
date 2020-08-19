const canvas = document.getElementById("tester-canvas")
const ctx = canvas.getContext('2d');

let targethit = 0;
document.getElementById("targetHit").textContent = targethit;


const player = { // making sure the the 1st target will always appear in the middle of the screen.
    x: 950,
    y: 490,
    colour: "cornflowerblue"
}
window.addEventListener("mousedown", onclick);
var keys = []


window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;

}, false);


window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];

}, false);


function onclick (e) {
    let el = e.target;
    let px = e.clientX - el.offsetLeft;
    let py = e.clientY - el.offsetTop;
    if ((player.x -px)**2 + (player.y - py)**2 < 50**2) {
        console.log("hit");
        targethit = targethit + 1;
        /*document.getElementById("targetHit").textContent = targethit;*/
        player.x = 1600 * Math.random();
        player.y = 950 * Math.random();
    }
    else {
        console.log("you're cringe.");
        player.x = 1600 * Math.random();
        player.y = 800 * Math.random();
    }


} // function that checks whether or not the user clicks is within the target; hits the target.



function runHard () { // function that runs the target game.
    var loop = function () {
        updateHard();
        render();
        window.requestAnimationFrame(loop);

    }
    window.requestAnimationFrame(loop);
}
function updateHard() {
        if (keys[32]) {
            player.x = 1600 * Math.random();
            player.y = 950 * Math.random();

        }
}
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cornflowerblue";
    ctx.beginPath();
    ctx.arc(player.x, player.y, 50, 0, 2 * Math.PI)
    ctx.fill();
}
runHard();
