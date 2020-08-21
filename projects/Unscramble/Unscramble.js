function toTitlePage() {
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("gameplay").classList.add("hide")
    document.getElementById("quit").classList.add("hide")
    document.getElementById("difficultySelect").classList.add("hide")
    document.getElementById("gameTitle").classList.remove("hide")
    document.getElementById("titlePage").classList.remove("hide")
}

function toHelp() {
    document.getElementById("gameTitle").classList.add("hide");
    document.getElementById("difficultySelect").classList.add("hide");
    document.getElementById("helpMenu").classList.remove("hide")
}


function toDifficulty() {
    document.getElementById("titlePage").classList.add("hide")
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("gameplay").classList.add("hide")
    document.getElementById("quit").classList.remove("hide");
    document.getElementById("gameTitle").classList.remove("hide");
    document.getElementById("difficultySelect").classList.remove("hide")
}

function toGameplay() {
    document.getElementById("difficultySelect").classList.add("hide")
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("gameTitle").classList.remove("hide")
    document.getElementById("gameplay").classList.remove("hide")
    document.getElementById("quit").classList.remove("hide")
}

function checkGuess(word, score) {

    if (document.getElementById("guess").value === word) {
        document.getElementById("mark").textContent = " ✓"
        score = score + 10
        document.getElementById("scoreTotal").textContent = score
    } else {
        document.getElementById("s_word").textContent = word
        document.getElementById("mark").textContent = " ✗"

    }
    document.getElementById("nextRound").classList.remove("hide")
    document.getElementById("mark").classList.remove("hide")
    if (words_1.includes(word)) {
        document.getElementById("submit_1").classList.add("hide")
    }
    else if (words_2.includes(word)) {
        document.getElementById("submit_2").classList.add("hide")
    }
    else if (words_3.includes(word)) {
        document.getElementById("submit_3").classList.add("hide")
    }
}

function generateWord(difficulty, index) {
    let newWord;
    let shuffledWord;
    if (difficulty === "L1") {
        newWord = words_1[index]
        shuffledWord = shuffleWord(newWord)
        return shuffledWord }
    else if (difficulty === "L2") {
        newWord = words_2[index]
        shuffledWord = shuffleWord(newWord)
        return shuffledWord}
    else if (difficulty === "L3"){
        newWord = words_3[index]
        shuffledWord = shuffleWord(newWord)
        return shuffledWord
    }
}

function shuffleWord(originalWord) {
    let shuffled = originalWord.split("").sort(function(){return 0.5-Math.random()}).join("");
    while (shuffled === originalWord) {
        shuffled = originalWord.split("").sort(function(){return 0.5-Math.random()}).join("");
    }
    return shuffled;
}

words_1 = ["bug", "fix", "ice", "spy", "pie", "sky", "sun", "toy", "oil", "shy"]
words_2 = ["eggs", "exit", "edge", "have", "then", "when", "here", "word", "area", "find"]
words_3 = ["catch", "hedge", "light", "heavy", "where", "block", "guess", "lunch", "month", "round"]


let rounds = 10;
let wordIndex = 0;
let score = 0
// Main Program
//    function startGame(difficulty) {
//        score = 0o00
//    }

function resetOnQuit() {
    rounds = 10;
    wordIndex = 0;
    score = 0;
    document.getElementById("scoreTotal").textContent = "00"
}

function getNextWord(difficulty) {
    if (rounds > 0) {
        document.getElementById("nextRound").classList.add("hide")
        document.getElementById("mark").classList.add("hide")
        if (difficulty === "L1") {
            document.getElementById("submit_1").classList.remove("hide")
        }
        else if (difficulty === "L2") {
            document.getElementById("submit_2").classList.remove("hide")
        }
        else if (difficulty === "L3") {
            document.getElementById("submit_3").classList.remove("hide")
        }
        document.getElementById("s_word").textContent = generateWord(difficulty, wordIndex)
        wordIndex = wordIndex + 1
        rounds = rounds - 1
    }
    else {
        document.getElementById("gameplay").classList.add("hide")
        document.getElementById("nextRound").classList.add("hide")
        }
}


