var max = 0, difficulty = 0, L33 = 0, L32 = 0, L31 = 0, L21 = 0, L22 = 0, L11 = 0, score = 0,answer = 0;
var QsHidden = 0;
var QsNumber = 0;

function toGame(n){
    score = 0
    difficulty = n
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
}

function toHelp(){
    document.getElementById("menuMP").classList.remove("gameMain")
    document.getElementById("menuMP").classList.add("hidden")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("hidden");
    document.getElementById("helpMP").classList.add("gameMain");
}


function toMenu(){
    document.getElementById("menuMP").classList.remove("hidden")
    document.getElementById("menuMP").classList.add("gameMain")
    document.getElementById("gameMP").classList.remove("gameMain")
    document.getElementById("gameMP").classList.add("hidden");
    document.getElementById("helpMP").classList.remove("gameMain");
    document.getElementById("helpMP").classList.add("hidden");
}

function game(n){
    toGame(n)
    document.getElementById("questionNum").innerHTML = "Question:" + QsNumber;
    document.getElementById("check").classList.remove("hidden");
    document.getElementById("check").classList.add("buttonMain");
    document.getElementById("result").innerHTML = "&nbsp"
    L11 = Math.floor((Math.random()*max)+1);
    L21 = Math.floor((Math.random()*(L11 - 2))+1);
    L22 = L11 - L21;
    L31 = Math.floor((Math.random()*(L21-1))+1);
    L32 = L21 - L31;
    L33 = L22 - L32;
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
}

function checkAnswer() {
    document.getElementById("check").classList.remove("buttonMain");
    document.getElementById("check").classList.add("hidden");
    Qsnumber = QsNumber + 1;
    var input = Number(document.getElementById("userInput").value);
    if (input === answer){
        document.getElementById("result").innerHTML = "Correct!"
    } else {
        document.getElementById("result").innerHTML = "Incorrect! The answer is " + answer;
    }
}
