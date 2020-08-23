var points = 0;
function loadEasy() {
	var question = 1;
    document.getElementById("difficulty_screen").classList.remove('buttonHolder');
    document.getElementById("difficulty_screen").classList.add('invisibleStuff');
    document.getElementById("questionScreen").classList.toggle("invisibleStuff");
    var operation = Math.floor((Math.random() * 10) + 1);
    if (operation > 5) {
        easyAddition()
    } else {
        easySubtraction()
    }
}
function easyAddition() {
    while (question < 6) {
        var base = Math.floor((Math.random() * 10) + 1);
        var number = Math.floor((Math.random() * 10) + 1);
        document.getElementById("FirstPlaceholder").textContent = number;
        number = number + base;
        document.getElementById("SecondPlaceholder").textContent = number;
        number = number + base;
        document.getElementById("ThirdPlaceholder").textContent = number;
    }
}

function easySubtraction() {
	while (question < 6) {
		var base = Math.floor((Math.random() * 10) + 1);
        var number = Math.floor((Math.random() * 10) + 1);
        document.getElementById("FirstPlaceholder").textContent = number;
        number = number - base;
        document.getElementById("SecondPlaceholder").textContent = number;
        number = number - base;
        document.getElementById("ThirdPlaceholder").textContent = number;
	}
}

function answerCheck() {
	if (int(document.getElementById("SecondPlaceholder").textContent()) > int(document.getElementById("FirstPlaceholder").textcontent())) {
		if (document.getElementById("operation").value = "addition") {
			if (int(document.getElementById("answerField").value) == (int(document.getElementById("SecondPlaceholder").textContent()) - int(document.getElementById("FirstPlaceholder").textcontent())) {
				points = points + 10;
				document.getElementById("score").textContent = score;
			}
		}
	} else if (int(document.getElementById("SecondPlaceholder").textContent()) < int(document.getElementById("FirstPlaceholder").textcontent())) {
		if (document.getElementById("operation").value = "subtraction") {
			if (int(document.getElementById("SecondPlaceholder")) + int(document.getElementById("answerField").value) == int(document.getElementById("FirstPlaceholder").textContent)){
				points = points + 10;
				document.getElementById("score").textContent = score;
			}
		}
	}
}

function load_game2() {
    document.getElementById("difficulty_screen").classList.remove('buttonHolder');
    document.getElementById("difficulty_screen").classList.add('invisibleStuff');
    document.getElementById("questionScreen").classList.toggle("invisibleStuff");
}

function load_game3() {
    document.getElementById("difficulty_screen").classList.remove('buttonHolder');
    document.getElementById("difficulty_screen").classList.add('invisibleStuff');
    document.getElementById("questionScreen").classList.toggle("invisibleStuff");
}
