const easyButton = document.querySelector("#easyButton")
const hardButton = document.querySelector("#hardButton")
const testButton = document.querySelector("#testButton")
const difficultyText = document.querySelector("#difficulty")
const startButton = document.querySelector("#startButton")
const moles = document.querySelectorAll(".mole")
const scoreText = document.querySelector("#score")
const remainingText = document.querySelector("#remaining")

let score = 0
let counter = 10
let prevNum = null
let easyTimer = 1000
let hardTimer = createHardTimer(750, 1000)
let difficulty = null
let number = null
let remaining = 10

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
startButton.addEventListener("click", function() {
    startButton.disabled = true
    if (difficulty === "easy" || difficulty ==="hard") {
        clickSetUp()
        playGame()
    } else if (difficulty ==="test") {
        playTest()
    }
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
        return
    }
    number = selectCell()
    prevNum = number
    moles[number].style.visibility="visible"
    remaining--
    remainingText.innerText=remaining.toString()
    counter -= 1
    if (difficulty === "easy") {
        setTimeout(playGame, easyTimer)
    } else if (difficulty === "hard") {
        setTimeout(playGame, hardTimer)
    }
}

function playTest() {
    if (prevNum !== null) {
        moles[prevNum].style.visibility="hidden"
    }
    if (counter <= 0 ) {
        return
    }
    number = selectCell()
    prevNum = number
    moles[number].style.visibility="visible"
    remaining--
    remainingText.innerText=remaining.toString()
    counter -= 1
    for (let i = 0; i < moles.length; i++) {
        moles[i].addEventListener("click", function() {
            if (i === number && score !== 10) {
                score++
                scoreText.innerText = score.toString()
                moles[number].style.visibility = "hidden"
                console.log(counter, score, number)
                playTest()
            }
        })
    }
}



function loadInstructions() {
    document.getElementById("instructions").classList.remove("hide")
    document.getElementById("instructions").classList.add("show")
}
