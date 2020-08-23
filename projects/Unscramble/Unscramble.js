let rounds = 10;
let wordIndex = 0;
let score = 0;
let highScore = 0;

// hides all possible screens from quit from then shows the Title page
// Used by quit and play again buttons
function toTitlePage() {
    // Pages hidden
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("gameplay").classList.add("hide")
    document.getElementById("difficultySelect").classList.add("hide");
    document.getElementById("winScreen").classList.add("hide");
    document.getElementById("quit").classList.add("hide");

    // hide Submit and Next Round buttons in case they haven't been hidden yet (during gameplay)
    document.getElementById("submit_1").classList.add("hide")
    document.getElementById("nextRound_1").classList.add("hide")
    document.getElementById("submit_2").classList.add("hide")
    document.getElementById("nextRound_2").classList.add("hide")
    document.getElementById("submit_3").classList.add("hide")
    document.getElementById("nextRound_3").classList.add("hide")

    // UNSCRAMBLE title and Title page shown
    document.getElementById("gameTitle").classList.remove("hide")
    document.getElementById("titlePage").classList.remove("hide")
}

// function directing to help page from difficulty selection page
function toHelp() {
    document.getElementById("gameTitle").classList.add("hide");
    document.getElementById("difficultySelect").classList.add("hide");

    document.getElementById("helpMenu").classList.remove("hide")
}

// function directing to difficulty selection page
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

function checkGuess(word) {
    if (document.getElementById("guess").value === word) {
        document.getElementById("mark").textContent = " ✓"
        score = score + 10
        document.getElementById("scoreTotal").textContent = score.toString()
    } else {
        document.getElementById("mark").textContent = " ✗"

    }
    document.getElementById("s_word").textContent = word
    document.getElementById("mark").classList.remove("hide")
    if (words_1.includes(word)) {
        document.getElementById("submit_1").classList.add("hide")
        document.getElementById("nextRound_1").classList.remove("hide")
    }
    else if (words_2.includes(word)) {
        document.getElementById("submit_2").classList.add("hide")
        document.getElementById("nextRound_2").classList.remove("hide")
    }
    else if (words_3.includes(word)) {
        document.getElementById("submit_3").classList.add("hide")
        document.getElementById("nextRound_3").classList.remove("hide")
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

// Arrays are the original words used for each of the levels.
// words_1 for level 1, each word 3 letters long
// words_2 for level 2, each word 4 letters long
// words_3 for level 3, each word 5 letters long
words_1 = ["bug", "fix", "ice", "spy", "pie", "new", "sun", "toy", "oil", "shy"]
words_2 = ["eggs", "exit", "edge", "have", "then", "when", "here", "word", "area", "find"]
words_3 = ["catch", "hedge", "light", "heavy", "where", "block", "guess", "lunch", "month", "round"]

// Resets values when user quits or decides to play again
function resetOnQuit() {
    rounds = 10; // resets the number of rounds left in gameplay to 10
    wordIndex = 0;
    score = 0; // resets the gameplay score to 0, without affecting the high score
    document.getElementById("scoreTotal").textContent = "00" // Sets the displayed score to 00 in gameplay
    document.getElementById('guess').value = '' // clears the input box for the guesses
}

function getNextWord(difficulty) {
    if (rounds > 0) {
        document.getElementById("mark").classList.add("hide")
        if (difficulty === "L1") {
            document.getElementById("submit_1").classList.remove("hide")
            document.getElementById("nextRound_1").classList.add("hide")
        }
        else if (difficulty === "L2") {
            document.getElementById("submit_2").classList.remove("hide")
            document.getElementById("nextRound_2").classList.add("hide")
        }
        else if (difficulty === "L3") {
            document.getElementById("submit_3").classList.remove("hide")
            document.getElementById("nextRound_3").classList.add("hide")
        }
        document.getElementById("s_word").textContent = generateWord(difficulty, wordIndex)
        wordIndex = wordIndex + 1
        rounds = rounds - 1
    }
    else {
        document.getElementById("gameplay").classList.add("hide")
        document.getElementById("winScreen").classList.remove("hide")
        if (score > highScore) {
            document.getElementById("wellDone").textContent = "High Score!"
            highScore = score
        }
        else {
            document.getElementById("wellDone").textContent = "Well Done!"
        }
        document.getElementById("finalScore").textContent = score.toString()
        }
}


