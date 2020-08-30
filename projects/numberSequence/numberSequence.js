var points = 0;
var question = 1;

function loadEasy() {
    document.getElementById("difficulty_screen").classList.remove('buttonHolder');
    document.getElementById("difficulty_screen").classList.add('invisibleStuff');
    document.getElementById("questionScreen").classList.remove("invisibleStuff");
	easyAddition()
}

function easyAddition() {
    var base = Math.floor((Math.random() * 10) + 1);
    var number = Math.floor((Math.random() * 10) + 1);
    document.getElementById("FirstPlaceholder").textContent = number;
    number = number + base;
    document.getElementById("SecondPlaceholder").textContent = number;
    number = number + base;
    document.getElementById("ThirdPlaceholder").textContent = number;
}

function answerCheck() {
    var first = document.getElementById("FirstPlaceholder").textContent;
    var second = document.getElementById("SecondPlaceholder").textContent;
    var guess = document.getElementById("answerField").textContent;
    var base = second - first;
    var answer = parseInt(document.getElementById("ThirdPlaceholder").value, 10) + base;
    if (guess === answer) {
        points = points + 10;
        document.getElementById("score").textContent = points;
		question = question + 1;
        loadEasy()
        }
    }
    if (question <= 5) {
        question += 1;
		document.getElementById("questionNumber").innerHTML = question;
        loadEasy();
    } else {
        final();
    }
}

function final() {
    document.getElementById("difficulty_screen").classList.add("invisibleStuff");
    document.getElementById("questionScreen").classList.add("invisibleStuff");
    document.getElementById("finalScreen").classList.remove("invisibleStuff");
	if (score < 3) {
		document.getElementById("loseMessage").classList.remove("invisibleStuff");
		document.getElementById("loseMessage").innerHTML = points;
	} else if (score >3 && score < 5) {
		document.getElementById("winMessage").classList.remove("invisibleStuff");
		document.getElementById("finalScore").innerHTML = points;
	} else if (score === 5) {
		document.getElementById("perfectMessage").classList.remove("invisibleStuff");
	}
}