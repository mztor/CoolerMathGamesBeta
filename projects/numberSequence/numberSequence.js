var points;
var question;
var base;

function helptoggle() {
	document.getElementById("difficulty_screen").classList.add("invisibleStuff");
	document.getElementById("difficulty_screen").classList.remove("buttonHolder");
	document.getElementById("helpScreen").classList.remove("invisibleStuff");
}

function initialise() {
    points = 0;
    question = 1;
    document.getElementById("questionNumber").textContent = question;
    document.getElementById("difficulty_screen").classList.remove("buttonHolder");
    document.getElementById("difficulty_screen").classList.add('invisibleStuff');
    document.getElementById("questionScreen").classList.remove('invisibleStuff');
    load()
}

function again() {
    document.getElementById("finalScreen").classList.add("invisibleStuff");
	initialise()
}

function load() {
    base = Math.floor((Math.random() * 10) + 1);
    var number = Math.floor((Math.random() * 10) + 1);
    document.getElementById("FirstPlaceholder").textContent = number;
    number = number + base;
    document.getElementById("SecondPlaceholder").textContent = number;
    number = number + base;
    document.getElementById("ThirdPlaceholder").textContent = number;
	base = number + base;
}

function answer() {
    var guess = Number(document.getElementById("answerField").value);
    if (guess === base) {
        points = points + 1;
        document.getElementById("score").innerHTML = points;
        question = question + 1;
		document.getElementById("questionNumber").innerHTML = question;
		if (question == 6) {
			finalscreen()
		} else {
			load()
		}
	} 
	else {
		document.getElementById("score").innerHTML = points;
		question = question + 1;
		document.getElementById("questionNumber").innerHTML = question;
		if (question == 6) {
			finalscreen()
		} else {
			load()
		}
	}
}

function finalscreen() {
    document.getElementById("difficulty_screen").classList.add("invisibleStuff");
    document.getElementById("questionScreen").classList.add("invisibleStuff");
    document.getElementById("finalScreen").classList.remove("invisibleStuff");
	document.getElementById("loseMessage").classList.add('invisibleStuff');
	document.getElementById("winMessage").classList.add('invisibleStuff');
	document.getElementById("perfectMessage").classList.add('invisibleStuff');
	if (points < 3) {
		document.getElementById("loseMessage").classList.toggle("invisibleStuff");
		document.getElementById("loseScore").innerHTML = points;
	} else if (points > 3 && points < 5) {
		document.getElementById("winMessage").classList.toggle("invisibleStuff");
		document.getElementById("finalScore").innerHTML = points;
	} else if (points === 5) {
		document.getElementById("perfectMessage").classList.toggle("invisibleStuff");
	}
}

function menu() {
	document.getElementById('helpScreen').classList.add("invisibleStuff");
	document.getElementById('questionScreen').classList.add("invisibleStuff");
	document.getElementById('finalScreen').classList.add('invisibleStuff');
	document.getElementById('difficulty_screen').classList.remove('invisibleStuff');
	document.getElementById('difficulty_screen').classList.add("buttonHolder");
}