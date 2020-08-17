let incorrectAnswerOne, incorrectAnswerTwo, incorrectAnswerThree, correctAnswer

function x (name) {
    document.getElementById('nameScreen').style = 'display:none;';
    document.getElementById('nameDisplay').innerText = "Hi there " + name + ", Welcome to One of These!";
    document.getElementById('difficultyScreen').style = 'display:block';
}


function generateQuestion(difficulty){
    switch(difficulty){
        case 'easy':
            alert("easy mode selected");
            incorrectAnswerOne = Math.floor(Math.random() * 10) + 1;
            incorrectAnswerTwo = incorrectAnswerOne + 1;
            incorrectAnswerThree = incorrectAnswerTwo + 1;
            correctAnswer = incorrectAnswerOne + 1234567890;
            alert(incorrectAnswerOne + "" + incorrectAnswerTwo + "" + incorrectAnswerThree + " " + correctAnswer);
            break;
        case 'medium':
            alert("Medium mode selected");
            incorrectAnswerOne = Math.floor(Math.random() * 100) + 1;
            incorrectAnswerTwo = incorrectAnswerOne * 2;
            incorrectAnswerThree = incorrectAnswerOne * 3;
            correctAnswer = 15/incorrectAnswerOne;
            break;
        case 'hard':
            alert("Hard mode selected");
            incorrectAnswerOne = Math.floor(Math.random() * 10000) + 1;
            break;
        case 'challenging':
            alert("Challenging mode selected");
            break;

    }
}
