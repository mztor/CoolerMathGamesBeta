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

function checkGuess(word1, word2, word3, score) {

    if (document.getElementById("guess").value === word1.textContent) {
        document.getElementById("mark").textContent = "✓"
        document.getElementById("score").textContent = score + 10
    } else {
        document.getElementById("s_word").textContent = word1

    }
    document.getElementById("nextRound").classList.remove("hide")
    document.getElementById("submit").classList.add("hide")
}

function generateWord(difficulty, index) {
    let newWord;
    let shuffledWord;
    if (difficulty === "L1") {
        newWord = words_1[index]
        shuffledWord = shuffleWord(newWord)
        return [newWord, shuffledWord] }
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
let score = 0o00
// Main Program
//    function startGame(difficulty) {
//        score = 0o00
//    }

function resetOnQuit() {
    rounds = 10;
    wordIndex = 0;
    score = 0o00
}

function getNextWord(difficulty) {
    if (rounds > 0) {
        document.getElementById("nextRound").classList.add("hide")
        document.getElementById("submit").classList.remove("hide")
        document.getElementById("s_word").textContent = generateWord(difficulty, wordIndex)
        // document.getElementById("submit").onclick = function() {checkGuess(words_1[wordIndex], score)}
        wordIndex = wordIndex + 1
        rounds = rounds - 1
    }
    else {
        document.getElementById("gameplay").classList.add("hide")
        document.getElementById("nextRound").classList.add("hide")

        }
}


