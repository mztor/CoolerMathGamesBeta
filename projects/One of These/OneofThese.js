let incorrectAnswerOne, incorrectAnswerTwo, incorrectAnswerThree, correctAnswer
let questionsLeft= 5
let score = 0

function nameGrabber(name) {
    document.getElementById('nameScreen').style = 'display:none;';
    document.getElementById('nameDisplay').innerText = "Hi there " + name + ", Welcome to One of These!";
    document.getElementById('difficultyScreen').style = 'display:block';
 }


function generateQuestion(difficulty){
    if (questionsLeft > 0){
        document.getElementById('questionScreen').style = 'display:block;';
        switch(difficulty){
            case 'easy':
                document.getElementById('difficultyScreen').style = 'display:none';
                // The line above removes the difficulty screen upon generating your first question, signalling the start of the game
                incorrectAnswerOne = Math.floor(Math.random() * 10) + 1;
                incorrectAnswerTwo = incorrectAnswerOne + 1;
                incorrectAnswerThree = incorrectAnswerTwo + 1;
                correctAnswer = incorrectAnswerOne * Math.floor(Math.random() * 123421) + 1;
                document.getElementById("incAns1").innerHTML = incorrectAnswerOne;
                document.getElementById("incAns2").innerHTML = incorrectAnswerTwo;
                document.getElementById("incAns3").innerHTML = incorrectAnswerThree;
                document.getElementById("corAns").innerHTML = correctAnswer;

                break;
            case 'medium':
                incorrectAnswerOne = Math.floor(Math.random() * 100) + 1;
                incorrectAnswerTwo = incorrectAnswerOne * 2;
                incorrectAnswerThree = incorrectAnswerOne * 3;
                correctAnswer = (incorrectAnswerOne + 1)*2;
                document.getElementById("incAns1").innerHTML = incorrectAnswerOne;
                document.getElementById("incAns2").innerHTML = incorrectAnswerTwo;
                document.getElementById("incAns3").innerHTML = incorrectAnswerThree;
                document.getElementById("corAns").innerHTML = correctAnswer;
                break;
            case 'hard':
                incorrectAnswerOne = Math.floor(Math.random() * 10000) + 1;
                incorrectAnswerTwo = incorrectAnswerOne * 10;
                incorrectAnswerThree = incorrectAnswerOne * 100;
                correctAnswer = Math.floor(incorrectAnswerOne * 2.3456);
                document.getElementById("incAns1").innerHTML = incorrectAnswerOne;
                document.getElementById("incAns2").innerHTML = incorrectAnswerTwo;
                document.getElementById("incAns3").innerHTML = incorrectAnswerThree;
                document.getElementById("corAns").innerHTML = correctAnswer;
                break;
            case 'challenging':
                alert("Challenging mode selected");
                break;
        }

    }
    else{
        displayEndScreen()
    }

}


function displayAnswerScreen(answer){
    if (answer === "correct") {
        score += 1
        document.getElementById('correctAnswerScreen').style = 'display:block;';
        document.getElementById('questionScreen').style = 'display:none;';
        questionsLeft -= 1
    }
    if (answer === "incorrect"){
        document.getElementById('incorrectAnswerScreen').style = 'display:block;';
        document.getElementById('questionScreen').style = 'display:none;';
        questionsLeft -= 1
    }
}

function quit(){
    questionsLeft = 5

}


function displayEndScreen(){

}