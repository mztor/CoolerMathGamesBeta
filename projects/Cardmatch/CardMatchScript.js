
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
        this.totalLives = 5; //number of lives
        this.timeRemaining = this.totalTime; //This determines what will be displayed; it is the timer
        this.matchedCards = []; //list for matched cards
        this.busy = true; //Determines when the player is able to click something
        setTimeout(() => { // A timeout to ensure that the player is unable to do anything whilst the cards are being shuffled
            this.shuffleCard(this.cardsArray); //Uses this function to shuffle the cards
            this.countDown = this.startCountDown(); //Starts the countdown or timer
            this.busy = false;
        }, 500) // Goes on for 0.5 seconds
        setTimeout(() =>{ // Displays the cards at the start
            this.showCards()
        },1000) // displays after 1 second
        setTimeout(()=>{
            this.hideCards()
        }, 6000) //hides the cards after 6 seconds from the start of the code
        this.timer.innerText = this.timeRemaining; //Text is updated onto the screen (timer)
        this.score.innerText = this.totalScore; //Updated Score
        this.chances.innerText = this.totalLives; //updated lives
    }

    hideCards() { //a function to hide the cards
        this.cardsArray.forEach(card => {
            card.classList.remove('visible'); // Removes the visible class which allows the cards to be revealed
            card.classList.remove('matched'); //Removes the matched class which allows the cards to stay in place after they have been paired
        });
    }
    showCards() { //shows the cards
        this.cardsArray.forEach(card => {
            card.classList.add('visible'); //adds the visible class
        });
    }
    victory() { //the function for after a whole set has been completed
        this.hideCards();
        this.shuffleCard();
        this.cardToCheck = null;
        this.matchedCards = [];
        this.totalScore = this.totalScore + 10; //adds 10 to the score
        this.score.innerText = this.totalScore; //updates the score into the UI
        this.overlayScore.innerText = this.totalScore; //This is for the game over text/screen
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
    gameOver() { //the game over function for when lives are at 0 or the timer is at 0
        clearInterval(this.countDown) //Resets the timer
        document.getElementById("gameOverText").classList.add('visible') //Gives the visible class to the game over screen; displays the screen to the player

    }
    startCountDown() { //the countdown function
        return setInterval(() => {
            this.timeRemaining--; //subtracts 1 from the timer
            this.timer.innerText = this.timeRemaining; //updates the new tim onto the screen
            if (this.timeRemaining === 0) //if the timer reaches 0
                this.gameOver();  // game over function
        }, 1000); //Occurs every 1 second
    }

    flipCard(card) { //function that allows the card to be flipped
        if (this.canFlipCard(card)) { //If you are able to flip the card (determined by the canFlipCard() function)
            card.classList.add('visible'); //gives the card the visible class
            if (this.cardToCheck) //if it is the flipped card (as stated above)
                this.checkForCardMatch(card); //uses the function to check for a card match
            else
                this.cardToCheck = card; //Keeps it as a card
        }
    }

    checkForCardMatch(card) { //the function that checks for a match
        if (this.getCardType(card) === this.getCardType(this.cardToCheck)) //if the first card is equal to the second
            this.cardMatch(card, this.cardToCheck); //apply the card matched function
        else
            this.cardMismatch(card, this.cardToCheck); //apply the mismatch function
        this.cardToCheck = null; //The card is not flipped anymore
    }
    cardMatch(card1, card2) { //function for when the cards are matched
        this.matchedCards.push(card1); //puts the first card onto the array
        this.matchedCards.push(card2); //puts the second onto the array
        card1.classList.add('visible'); //adds the visible class
        card2.classList.add('visible');
        this.totalScore ++; //adds one to the score
        this.score.innerText = this.totalScore; //displays the updated score
        this.overlayScore.innerText = this.totalScore; //the game over text
        if(this.matchedCards.length === this.cardsArray.length) //if the number of matched cards are equal to the number of cards in the cards array
            this.victory(); //use the victory function



    }
    cardMismatch(card1, card2) { //function for when they player does not match
        this.busy = true; //ensures the player is unable to click anything
        this.totalLives --; //Subtracts one life
        this.chances.innerText = this.totalLives; //updates the lives
        if(this.totalLives === 0) //if lives reach 0
            this.gameOver() //game over function
        setTimeout(() =>{
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000) //allows the user to view the cards for one second (without being able to touch anything)

    }

    getCardType(card) { //gets the class of the flipped card
        return card.getElementsByClassName('cardValue')[0].src;
    }

    shuffleCard() { //shuffles the cards
        for(let i = this.cardsArray.length - 1; i > 0; i--) { //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        } //From the wikipedia link, it is the fisher-yates shuffle

    }
    canFlipCard(card) { //Code for whether the card is flippable or not (e.g. already flipped cards)
        if(!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
            return true

        //return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
        //if this.busy is false and if the cards variable is not in the matched cards list and the card is not the current flipped card it should return as true, allowing the person to flip the card.
    }

}

function ready() { //This is for when the game is ready to start
    let overlays = Array.from(document.getElementsByClassName('overlayText')); //the screen at the start
    let cards = Array.from(document.getElementsByClassName('card')); //the cards are put into an array
    let game = new matchingCard(100, cards) //The parameters for when the game is to start

    overlays.forEach(overlay => {
        overlay.addEventListener('click',() => { //when clicked
            overlay.classList.remove('visible'); //the start game screen is hidden
            game.startGame(); //the game is started
        })
    })
    cards.forEach(card => {
        card.addEventListener('click', () => { // for when the card is clicked
            game.flipCard(card) //the card will flip
        })
    })
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready); //loads the game
}
else {
    ready();
}

function testing() { //displays the flipping button for the tester
    let x = document.getElementById("flipping");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function flipping() { //the flipping function should display the cards
    let element = document.querySelector('.cardText');
    element.style.setProperty('display', 'block');
}
