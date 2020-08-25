var points = 0;

function loadEasy() {
    document.getElementById("difficulty_screen").classList.remove('buttonHolder');
    document.getElementById("difficulty_screen").classList.add('invisibleStuff');
    document.getElementById("questionScreen").classList.toggle("invisibleStuff");
    const operation = Math.floor((Math.random() * 10) + 1);
    if (operation > 5) {
        easyAddition()
    } else {
        easySubtraction()
    }
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

function easySubtraction() {
		var base = Math.floor((Math.random() * 10) + 1);
        var number = Math.floor((Math.random() * 10) + 1);
        document.getElementById("FirstPlaceholder").textContent = number;
        number = number - base;
        document.getElementById("SecondPlaceholder").textContent = number;
        number = number - base;
        document.getElementById("ThirdPlaceholder").textContent = number;
}

function answerCheck() {
    question = question + 1;
	if (Number(document.getElementById("SecondPlaceholder").value) > Number(document.getElementById("FirstPlaceholder").value)) {
		if (document.getElementById("operation").value === "addition") {
			if (Number(document.getElementById("answerField").value) === (Number(document.getElementById("SecondPlaceholder").value) - Number(document.getElementById("FirstPlaceholder").value))) {
				points = points + 10;
				document.getElementById("score").textContent = points;
			}
		}
	} else if (Number(document.getElementById("SecondPlaceholder").value) < Number(document.getElementById("FirstPlaceholder").value)) {
		if (document.getElementById("operation").value === "subtraction") {
			if (Number(document.getElementById("SecondPlaceholder").value) + Number(document.getElementById("answerField").value) === Number(document.getElementById("FirstPlaceholder").value)){
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
