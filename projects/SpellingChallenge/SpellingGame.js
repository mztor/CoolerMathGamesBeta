var counter= 0
var score = 0


var kindywordsarray = [
    { name: 'Bat', image: 'Bat.png' },
    { name: 'Cat', image: 'Cat.png' },
    { name: 'Cap', image: 'Cap.jpg' },
    { name: 'Sea', image: 'Sea.jpg' },
    { name: 'Sun', image: 'Sun.png' }
];
var Year1wordsarray = [
    { name: 'Plum', image: 'Plum.png' },
    { name: 'Tiger', image: 'Tiger.png' },
    { name: 'Helmet', image: 'Helmet.jpg' },
    { name: 'Ocean', image: 'Ocean.jpg' },
    { name: 'Venus', image: 'Venus.png' }
];
var Year2wordsarray = [
    { name: 'Possum', image: 'Possum.png' },
    { name: 'Leopard', image: 'Leopard.png' },
    { name: 'Cowboy', image: 'Cowboy.jpg' },
    { name: 'Estuary', image: 'Estuary.jpg' },
    { name: 'Jupiter', image: 'Jupiter.png' }
];
function ClearUser(){
    // alert("cs")
    document.getElementById('UserScreen').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block';
}

function Loadkindy(Kindy) {
    //   alert("top of Loadkindy"+counter)
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('Kindypage').style = 'display:block';
    document.getElementById('GameLayoutKindy').style = 'display:block';
    var word = kindywordsarray[counter]
    document.getElementById('Kindypage').innerHTML = '<img src="Images/' + word.image + '"width=""450" height="250">'

}

function LoadYear1 (Year1) {

}

function LoadYear2 (Year2) {
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('Year2page').style = 'display:block;'
}

function LoadHelp (Help) {
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('HelpScreen').style = 'display:block;'
}

function LoadDifficultyAfterHelp (difficulty) {
    document.getElementById('HelpScreen').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block;'

}

function ReturnDifficulty (difficulty) {
    document.getElementById('Kindypage').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block;'
    document.getElementById('GameLayoutKindy').style = 'display:none;'
    document.getElementById('Kindypage').style = 'display:none;'

}

function ReturnDifficultyY1 (difficulty){
    document.getElementById('Year1page').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block;'
}

function ReturnDifficultyY2(difficulty) {
    document.getElementById('Year2page').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block;'
}
function ReturnToMain(difficulty){
    document.getElementById('finalscorescreen').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block;'
    counter=0
}

function CheckAnswer() {

    if (kindywordsarray[counter].name == document.getElementById('Spelling').value) {
        document.getElementById('GameLayoutKindy').style = 'display:block;'
        document.getElementById('correctscreen').style = 'display:block;'
        document.getElementById('incorrectscreen').style = 'display:none;'
        score++;
    } else {
        document.getElementById('GameLayoutKindy').style = 'display:block;'
        document.getElementById('incorrectscreen').style = 'display:block;'
        document.getElementById('correctscreen').style = 'display:none;'
    }

}

function Next() {
    counter += 1;
    if (counter < 5) {
        Loadkindy()
    } else {
        DispUsername(document.getElementById('xUser').value)
        document.getElementById('finalscorescreen').style = 'display:block;'
        document.getElementById('GameLayoutKindy').style = 'display:none;'
        document.getElementById('scorescreen').style = 'display:none;'
        document.getElementById('Kindypage').style = 'display:none;'




    }
    document.getElementById('correctscreen').style = 'display:none;'
    document.getElementById('incorrectscreen').style = 'display:none;'
    document.getElementById('scorescreen').innerText = 'Score = '+score

}
function DispUsername(xUsername){
    document.getElementById('Username').innerText = 'Congratulations ' + xUsername
    document.getElementById('finalscore').innerText = 'Your score was ' + score + "/5"
}


