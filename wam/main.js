const easyButton = document.querySelector("#easyButton")
const hardButton = document.querySelector("#hardButton")
const difficulty = document.querySelector("#difficulty")
const startButton = document.querySelector("#startButton")
const moles = document.querySelectorAll(".mole")

let score = 0
let counter = 10
let prevNum = -1
let

easyButton.addEventListener("click", function() {
    difficulty.innerHTML="Difficulty: <strong>Easy</strong>"
})
hardButton.addEventListener("click", function() {
    difficulty.innerHTML="Difficulty: <strong>Hard</strong>"
})
startButton.addEventListener("click", function() {
    playGame()
})
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
    console.log(number)
    moles[number].style.visibility="visible"
    setTimeout(playGame, 2000)
}


