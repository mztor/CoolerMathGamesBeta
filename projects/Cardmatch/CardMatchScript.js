
class matchingCard { //Class called matching card
    constructor(totalTime, cards) { // A constructor, basically a blueprint for the whole code. Contains a whole bunch of functions
        this.cardsArray = cards; //the cards are put into an array
        this.totalTime = totalTime; //the time taken
        this.timeRemaining = totalTime; //the time taken
        this.timer = document.getElementById('timeRemaining') //To be displayed onto
        this.score = document.getElementById('Score')
        this.overlayScore = document.getElementById('scoreAfter')
        this.chances = document.getElementById('lives')
    }

    startGame() {
        this.cardToCheck = null; //The card that has been flipped.
        this.totalScore = 0; //Score
        this.totalLives = 5;
        this.timeRemaining = this.totalTime;
        this.matchedCards = []; //list for matched cards
        this.busy = true;
        setTimeout(() => {
            this.shuffleCard(this.cardsArray);
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500)
        setTimeout(() =>{
            this.showCards()
        },1000)
        setTimeout(()=>{
            this.hideCards()
        }, 6000)
        this.timer.innerText = this.timeRemaining;
        this.score.innerText = this.totalScore;
        this.chances.innerText = this.totalLives;
    }

    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    showCards() {
        this.cardsArray.forEach(card => {
            card.classList.add('visible');
        });
    }
    victory() {
        this.hideCards();
        this.shuffleCard();
        this.cardToCheck = null;
        this.matchedCards = [];
        this.totalScore = this.totalScore + 10;
        this.score.innerText = this.totalScore;
        this.overlayScore.innerText = this.totalScore;
        setTimeout(() => {
            this.shuffleCard(this.cardsArray);
            this.busy = false;
        }, 500)
        setTimeout(() =>{
            this.showCards()
        },1000)
        setTimeout(()=>{
            this.hideCards()
        }, 6000)
    }
    gameOver() {
        clearInterval(this.countDown)

        document.getElementById("gameOverText").classList.add('visible')

    }
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }

    flipCard(card) {
        if (this.canFlipCard(card)) {
            card.classList.add('visible');
            if (this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }

    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMismatch(card, this.cardToCheck);
        this.cardToCheck = null;
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('visible');
        card2.classList.add('visible');
        this.totalScore ++;
        this.score.innerText = this.totalScore;
        this.overlayScore.innerText = this.totalScore;
        if(this.matchedCards.length === this.cardsArray.length)
            this.victory();



    }
    cardMismatch(card1, card2) {
        this.busy = true;
        this.totalLives --;
        this.chances.innerText = this.totalLives;
        if(this.totalLives === 0)
            this.gameOver()
        setTimeout(() =>{
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000)

    }

    getCardType(card) {
        return card.getElementsByClassName('cardValue')[0].src;
    }

    shuffleCard() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) { //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;

        }

    }
    canFlipCard(card) { //Code for whether the card is flippable or not (e.g. already flipped cards)
        if(!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
            return true

        //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
        //if this.busy is false and if the cards variable is not in the matched cards list and the card is not the current flipped card it should return as true, allowing the person to flip the card.
    }

}

function ready() { //This is for when the game is ready to start
    let overlays = Array.from(document.getElementsByClassName('overlayText'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new matchingCard(100, cards)

    overlays.forEach(overlay => {
        overlay.addEventListener('click',() => {
            overlay.classList.remove('visible');
            game.startGame();
        })
    })
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card)
        })
    })
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

function testing() {
    let x = document.getElementById("flipping");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function flipping() {
    let element = document.querySelector('.cardText');
    element.style.setProperty('display', 'block');
}
