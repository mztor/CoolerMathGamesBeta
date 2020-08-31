var max = 0, difficulty = 0, L33 = 0, L32 = 0, L31 = 0, L21 = 0, L22 = 0, L11 = 0, score = 0,answer = 0;
var QsHidden = 0;
var QsNumber = 0;

//hiding the menu, help and result page,displaying the game and starting it
function toGame(n){
    score = 0
    difficulty = n
    QsNumber = 0
    if (difficulty === 1){
        max = 20
    } else if(difficulty === 2){
        max = 100
    }else {
        max = 500
    }
    document.getElementById("menuMP").classList.remove("gameMain")
    document.getElementById("menuMP").classList.add("hidden")
    document.getElementById("gameMP").classList.remove("hidden")
    document.getElementById("gameMP").classList.add("gameMain");
    document.getElementById("helpMP").classList.remove("gameMain");
    document.getElementById("helpMP").classList.add("hidden");
    document.getElementById("ResultMP").classList.remove("gameMain");
    document.getElementById("ResultMP").classList.add("hidden");
    game()
}

//hiding the game, menu and result page,displaying the help
function toHelp(){
    document.getElementById("menuMP").classList.remove("gameMain")
    document.getElementById("menuMP").classList.add("hidden")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("hidden");
    document.getElementById("helpMP").classList.add("gameMain");
    document.getElementById("ResultMP").classList.remove("gameMain");
    document.getElementById("ResultMP").classList.add("hidden")
}

//hiding the game, help and result page,displaying the menu
function toMenu(){
    document.getElementById("menuMP").classList.remove("hidden")
    document.getElementById("menuMP").classList.add("gameMain")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("gameMain");
    document.getElementById("helpMP").classList.add("hidden");
    document.getElementById("ResultMP").classList.remove("gameMain");
    document.getElementById("ResultMP").classList.add("hidden")
}

function game(){
    if (QsNumber === 10){ //Hide the game and display the result
        document.getElementById("gameMP").classList.remove("gameMain")
        document.getElementById("gameMP").classList.add("hidden");
        document.getElementById("ResultMP").classList.remove("hidden");
        document.getElementById("ResultMP").classList.add("gameMain");
        document.getElementById("TScore").innerHTML = score;
    } else { //start the game
        QsNumber = QsNumber + 1;
        document.getElementById("questionNum").innerHTML = "Question:" + QsNumber;
        document.getElementById("check").classList.remove("hidden");
        document.getElementById("check").classList.add("buttonMain");
        document.getElementById("result").innerHTML = "&nbsp";
        L11 = Math.floor((Math.random()*(max-4))+5);
        L32 = Math.floor((Math.random()*(L11/2-2))+1);
        L31 = Math.floor((Math.random()*(L11-L32*2-1))+1);
        L33 = L11 - L31 - L32 * 2;
        L21 = L31 + L32;
        L22 = L32 + L33;
        document.getElementById("L11").innerHTML = L11;
        document.getElementById("L21").innerHTML = L21;
        document.getElementById("L22").innerHTML = L22;
        document.getElementById("L31").innerHTML = L31;
        document.getElementById("L32").innerHTML = L32;
        document.getElementById("L33").innerHTML = L33;
        QsHidden = Math.floor(Math.random()*6)+1
        if (QsHidden === 1){
            document.getElementById("L11").innerHTML = "&nbsp";
            answer = L11;
        } else if(QsHidden===2){
            document.getElementById("L21").innerHTML = "&nbsp";
            answer = L21;
        } else if(QsHidden===3){
            document.getElementById("L22").innerHTML = "&nbsp";
            answer = L22;
        } else if(QsHidden===4){
            document.getElementById("L31").innerHTML = "&nbsp";
            answer = L31;
        } else if(QsHidden===5){
            document.getElementById("L32").innerHTML = "&nbsp";
            answer = L32;
        } else if(QsHidden===6){
            document.getElementById("L33").innerHTML = "&nbsp";
            answer = L33;
        }
        document.getElementById("userInput").innerHTML = "";
        document.getElementById("next").classList.remove("buttonMain");
        document.getElementById("next").classList.add("hidden");
    }

}

//Checking the correctness of input
function checkAnswer() {
    document.getElementById("check").classList.remove("buttonMain");
    document.getElementById("check").classList.add("hidden");
    document.getElementById("next").classList.remove("hidden");
    document.getElementById("next").classList.add("buttonMain");
    var input = Number(document.getElementById("userInput").value);
    if (input === answer){
        document.getElementById("result").innerHTML = "Correct!"
        score = score + 1;
        document.getElementById("score").innerHTML = "Score:" + score;
    } else {
        document.getElementById("result").innerHTML = "Incorrect! The answer is " + answer;
    }

}
