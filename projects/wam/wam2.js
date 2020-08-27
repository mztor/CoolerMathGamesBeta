const easyButton = document.querySelector("#easyButton")
const hardButton = document.querySelector("#hardButton")
const testButton = document.querySelector("#testButton")
const startButton = document.querySelector("#startButton")
const difficultyText = document.querySelector("#difficulty")
const scoreText = document.querySelector("#score")
const remainingText = document.querySelector("#remaining")
const highScoreText = document.querySelector("#highScore")
const finalScore = document.querySelector("#finalScore")
const moles = document.querySelectorAll(".mole")

let difficulty = null
let highScore = 0
let score = 0
let counter = 10
let prevNum = null
let number = null
let easyTimer = 1000
let hardTimer = createHardTimer(750, 1000)
let waitEasyTimer = null
let waitHardTimer = null

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

function createHardTimer(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function clickSetUp() {
    for (let i = 0; i < moles.length; i++) {
        moles[i].addEventListener("click", function () {
            if (i === number) {
                score++
                scoreText.innerText = score.toString()
                moles[number].style.visibility = "hidden"
            }
        })
    }
}

function selectCell() {
    let cell = Math.floor(Math.random() * 6)
    if (cell === prevNum) {
        return selectCell()
    } else {
        return cell
    }
}

function playGame() {
    if (prevNum !== null) {
        moles[prevNum].style.visibility="hidden"
    }
    if (counter < 1) {
        loadFinish()
        return
    }
    number = selectCell()
    prevNum = number
    moles[number].style.visibility="visible"
    counter--
    remainingText.innerText = counter.toString()
    if (difficulty === "easy") {
        waitEasyTimer = setTimeout(playGame, easyTimer)
    } else if (difficulty === "hard") {
        waitHardTimer = setTimeout(playGame, hardTimer)
    }
}

function playTest() {
    if (prevNum !== null) {
        moles[prevNum].style.visibility="hidden"
    }
    if (counter < 1) {
        moles[number].style.visibility = "hidden"
        loadFinish()
    }
    number = selectCell()
    prevNum = number
    moles[number].style.visibility="visible"
    counter -= 1
    remainingText.innerText = counter.toString()
    for (let i = 0; i < moles.length; i++) {
        moles[i].onclick = function() {
            if (i === number && score !== 10) {
                score++
                console.log(score)
                scoreText.innerText = score.toString()
                moles[number].style.visibility = "hidden"
                playTest()
            }
        }
    }
}

function loadGame() {
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

function resetGame() {
    for (let i = 0; i < moles.length; i++) {
        moles[i].style.visibility = "hidden"
    }
    counter = 10
    score = 0
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
        playGame()
    } else if (difficulty === "test") {
        playTest()
    }
}
clickSetUp()