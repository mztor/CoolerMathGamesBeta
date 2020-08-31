/*Setting of the three global variables. Points counts the user's
score. Question counts the question the user is up to. Base is the
randomly generated number, whose value is changed every question, it
is though used throughout functions, and thus needs to be global. */
var points;
var question;
var base;

function helptoggle() {
	/*The difficulty_screen's buttonHolder class controls the display 
	property in CSS, and thus needs to be removed to eliminate issues
	with it not working. This s done throughout the JS file */
	document.getElementById("difficulty_screen").classList.add("invisibleStuff");
	document.getElementById("difficulty_screen").classList.remove("buttonHolder");
	/*helpScreen is made visible, difficulty_screen is made completely
	invisible */
	document.getElementById("helpScreen").classList.remove("invisibleStuff");
}

function initialise() {
	/*Changes the value of global variables to suit the loading of a
	new game */
    points = 0;
    question = 1;
	/*The question number is displayed in the space available in the
	HTML file */
    document.getElementById("questionNumber").textContent = question;
	/*Difficulty screen made to be invisible, the questionScreen is then made
	visible */
    document.getElementById("difficulty_screen").classList.remove("buttonHolder");
    document.getElementById("difficulty_screen").classList.add('invisibleStuff');
    document.getElementById("questionScreen").classList.remove('invisibleStuff');
	/*A question is then loaded by calling the load function */
    load()
}

function again() {
	/*The final screen is made invisible, the initialise function is then called.
	This function is called by the play again button on the final screen. */
    document.getElementById("finalScreen").classList.add("invisibleStuff");
	initialise()
}

function load() {
	/*Base value is changed, which is the number which is added with
	each passing step */
    base = Math.floor((Math.random() * 10) + 1);
	/*Number is the initial number, to which base is continually added*/
    var number = Math.floor((Math.random() * 10) + 1);
	
	/*Over the following lines, the newly generated numbers are inserted
	into the HTML document in the span elements provided, the number is
	then added to*/
    document.getElementById("FirstPlaceholder").textContent = number;
    number = number + base;
    document.getElementById("SecondPlaceholder").textContent = number;
    number = number + base;
    document.getElementById("ThirdPlaceholder").textContent = number;
	
	/*The value of base is changed to what would be the next number
	in the sequence, as it is later used in the answer function to
	save on the amount of variables being used*/
	base = number + base;
}

function answer() {
	/*The user's guess is then pulled from the HTML file and saved*/
    var guess = Number(document.getElementById("answerField").value);
    if (guess === base) {
		/*Points are added to if the guess is equal to base, and the
		scorecounter span is then changed accordingly*/
        points = points + 1;
        document.getElementById("score").innerHTML = points;
		
		/*question counter is added to regardless, and the span
		changed accordingly*/
        question = question + 1;
		document.getElementById("questionNumber").innerHTML = question;
		
		/*If question is 6 (ie, the end of the game), the finalScreen
		is loaded, else a new question is loaded by calling the load
		function*/
		if (question == 6) {
			finalscreen()
		} else {
			load()
		}
	} 
	else {
		/*Score is changed to the value of points, to ensure
		it is the right number, and question is added to, and span
		changed accordingly*/
		document.getElementById("score").innerHTML = points;
		question = question + 1;
		document.getElementById("questionNumber").innerHTML = question;
		
		/*The same if/else statement as above, if question is 6, the
		game ends, else another question is loaded*/
		if (question == 6) {
			finalscreen()
		} else {
			load()
		}
	}
}

function finalscreen() {
	/*The following lines make all other screens invisible, and all messages
	(on the chance the user is replaying, and one of them would be visible), are
	also made invisible*/
    document.getElementById("difficulty_screen").classList.add("invisibleStuff");
    document.getElementById("questionScreen").classList.add("invisibleStuff");
    document.getElementById("finalScreen").classList.remove("invisibleStuff");
	document.getElementById("loseMessage").classList.add('invisibleStuff');
	document.getElementById("winMessage").classList.add('invisibleStuff');
	document.getElementById("perfectMessage").classList.add('invisibleStuff');
	
	/*The value of points is analysed, and the appropriate message
	is displayed, and the value of points is plugged into the 
	relevant span*/
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
	/*The menu button is present on all screens, and so all screens are
	made invisible, as CSS classes do not duplicate. The difficulty screen
	needs not only to be made visible, but for the buttonHolder class
	to be added amid the aforementioned display property dilemma*/
	document.getElementById('helpScreen').classList.add("invisibleStuff");
	document.getElementById('questionScreen').classList.add("invisibleStuff");
	document.getElementById('finalScreen').classList.add('invisibleStuff');
	document.getElementById('difficulty_screen').classList.remove('invisibleStuff');
	document.getElementById('difficulty_screen').classList.add("buttonHolder");
}