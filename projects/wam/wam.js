const easyButton = document.querySelector("#easyButton")
const hardButton = document.querySelector("#hardButton")
const difficultyText = document.querySelector("#difficulty")
const startButton = document.querySelector("#startButton")
const moles = document.querySelectorAll(".mole")

let score = 0
let counter = 10
let prevNum = -1
let easyTimer = 1000
let hardTimer = createHardTimer(750, 1000)
let difficulty = null

easyButton.addEventListener("click", function() {
    difficultyText.innerHTML="Difficulty: <strong>Easy</strong>"
    difficulty = "easy"
})
hardButton.addEventListener("click", function() {
    difficultyText.innerHTML="Difficulty: <strong>Hard</strong>"
    difficulty = "hard"
})
startButton.addEventListener("click", function() {
    playGame()
})

function createHardTimer(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
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
    if (prevNum !== -1) {
        moles[prevNum].style.visibility="hidden"
    }
    if (counter < 1) {
        return
    }
    counter -= 1
    let number = selectCell()
    prevNum = number
    moles[number].style.visibility="visible"
    if (difficulty === "easy") {
        setTimeout(playGame, easyTimer)
    } else {
        setTimeout(playGame, hardTimer)
    }
}
