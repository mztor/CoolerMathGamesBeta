class pageTitle {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('timeRemaining')
        this.score = document.getElementById
    }
    startGame() {
        this.cardToCheck = null;
    }
}


function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlayText'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay =>{
        overlay.addEventListener('click',() => {
            overlay.classList.remove('visible');
            // game.startgame();
        })
    })
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipCard(card)
        })
    })
}

if(document.readyState === 'loading') {
    document.addEventListener('DomContentLoaded', ready());
} else {
    ready();
}



