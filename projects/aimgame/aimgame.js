const canvas = document.getElementById("tester-canvas")
const ctx = canvas.getContext('2d');

const player = {
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
    }
}

function run () {
    var loop = function () {
        update();
        render();
        window.requestAnimationFrame(loop);

    }
    window.requestAnimationFrame(loop);
}
function update() {
    /*frames++;
    if (frames % 120 === 0) { */
    if (keys[32])  {
        player.x = 1600 * Math.random();
        player.y = 950 * Math.random();

        /*}*/
    }
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cornflowerblue";
    ctx.beginPath();
    ctx.arc(player.x, player.y, 50, 0, 2 * Math.PI)
    ctx.fill();
}

run();
