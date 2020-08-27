var points = 0;
var question = 0;

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
    var first = parseInt(document.getElementById("FirstPlaceholder").value);
    var second = parseInt(document.getElementById("SecondPlaceholder").value);
    var operation = document.getElementById("operation").value;
    var guess = parseInt(document.getElementById("answerField").value);

	if (second > first) {
	    var answer = second - first;
        if (operation === "addition" && guess === answer) {
            points = points + 10;
            document.getElementById("score").textContent = points;
        }
    }

	if (question <= 5) {
        question += 1;
        loadEasy();
    } else {
	    final();
    }
}

function final() {
    document.getElementById("difficulty_screen").classList.add("invisibleStuff");
    document.getElementById("questionScreen").classList.add("invisibleStuff");
    document.getElementById("finalScreen").classList.remove("invisibleStuff");
}