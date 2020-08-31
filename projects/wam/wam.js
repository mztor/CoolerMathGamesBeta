const easyButton = document.querySelector("#easyButton")
const hardButton = document.querySelector("#hardButton")
const testButton = document.querySelector("#testButton")
const startButton = document.querySelector("#startButton")
const difficultyText = document.querySelector("#difficulty")
const scoreText = document.querySelector("#score")
const remainingText = document.querySelector("#remaining")
const highScoreText = document.querySelector("#highScore")
const finalScore = document.querySelector("#finalScore")
const moles = document.querySelectorAll(".mole") //create array of moles

let difficulty = null
let highScore = 0
let score = 0
let counter = 10
let prevNum = null
let number = null
let waitEasyTimer = null
let waitHardTimer = null
//define initial variables
let easyTimer = 1000
let hardTimer = Math.floor(Math.random() * (250) + 750)
//set timer lengths randomised hard and fixed easy

easyButton.addEventListener("click", function() {
    difficultyText.innerHTML="Difficulty: <strong>Easy</strong>"
    difficulty = "easy"
})
hardButton.addEventListener("click", function() {
    difficultyText.innerHTML="Difficulty: <strong>Hard</strong>"
    difficulty = "hard"
})
testButton.addEventListener("click", function() {
    difficultyText.innerHTML="Difficulty: <strong>Test Mode</strong>"
    difficulty = "test"
})
//display selected difficulty

function clickSetUp() {
    for (let i = 0; i < moles.length; i++) {
        moles[i].onclick = function () {
            if (i === number) {
                score++
                scoreText.innerText = score.toString() //increment score and display if mole is clicked when visible
                moles[number].style.visibility = "hidden"
            }
        }
    }
}

function selectCell() {
    let cell = Math.floor(Math.random() * 6)
    if (cell === prevNum) {
        return selectCell() //ensure mole is not same twice in succession
    } else {
        return cell
    }
}

function playGame() {
    if (prevNum !== null) {
        moles[prevNum].style.visibility="hidden"
    }
    if (counter < 1) { //game finish (counter reaches zero)
        loadFinish()
        return
    }
    number = selectCell() //select a random mole to become visible
    prevNum = number
    moles[number].style.visibility="visible"
    counter--
    remainingText.innerText = counter.toString()
    if (difficulty === "easy") { //timer based on difficulty
        waitEasyTimer = setTimeout(playGame, easyTimer)
    } else if (difficulty === "hard") {
        waitHardTimer = setTimeout(playGame, hardTimer)
    }
}

function playTest() {
    if (prevNum !== null) {
        moles[prevNum].style.visibility = "hidden"
    }
    if (counter < 1) {
        moles[number].style.visibility = "hidden"
        loadFinish()
    }
    number = selectCell()
    prevNum = number
    moles[number].style.visibility = "visible"
    counter -= 1
    remainingText.innerText = counter.toString()
    for (let i = 0; i < moles.length; i++) {
        moles[i].onclick = function() {
            if (i === number) {
                score++
                console.log(score)
                scoreText.innerText = score.toString()
                moles[number].style.visibility = "hidden"
                playTest()
            }
        }
    }
}


function loadGame() { //screen transitioning functions
    resetGame()
    document.getElementById("game").classList.remove("hide")
    document.getElementById("game").classList.add("show")
    document.getElementById("start").classList.remove("show")
    document.getElementById("start").classList.add("hide")
    document.getElementById("finish").classList.remove("show")
    document.getElementById("finish").classList.add("hide")

}
function loadInstructions() {
    document.getElementById("instructions").classList.remove("hide")
    document.getElementById("instructions").classList.add("show")
    document.getElementById("start").classList.remove("show")
    document.getElementById("start").classList.add("hide")
}
function loadStart() {
    resetGame()
    document.getElementById("start").classList.remove("hide")
    document.getElementById("start").classList.add("show")
    document.getElementById("instructions").classList.remove("show")
    document.getElementById("instructions").classList.add("hide")
    document.getElementById("game").classList.remove("show")
    document.getElementById("game").classList.add("hide")
    document.getElementById("finish").classList.remove("show")
    document.getElementById("finish").classList.add("hide")
}
function loadFinish() {
    document.getElementById("finish").classList.remove("hide")
    document.getElementById("finish").classList.add("show")
    document.getElementById("game").classList.remove("show")
    document.getElementById("game").classList.add("hide")
    finalScore.innerHTML = score.toString()
    if (score >= highScore) {
        highScore = score
        highScoreText.innerText = "High Score!"
    } else {
        highScoreText.innerHTML = "Try to beat your high score of " + highScore.toString()
    }
}

function resetGame() { //set variables to default value
    for (let i = 0; i < moles.length; i++) {
        moles[i].style.visibility = "hidden"
    }
    counter = 10
    score = 0
    prevNum = null
    scoreText.innerText = score.toString()
    remainingText.innerText = counter.toString()
    startButton.disabled = false
    if (difficulty === "easy") {
        clearTimeout(waitEasyTimer)
    } else if (difficulty === "hard") {
        clearTimeout(waitHardTimer)
    }
}

function startGame() {
    startButton.disabled = true
    if (difficulty === "easy" || difficulty === "hard") {
        clickSetUp()
        playGame()
    } else if (difficulty === "test") {
        playTest()
    }
}