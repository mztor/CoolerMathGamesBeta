let playarray
var kindywordsarray = [
    { name: 'Bat', image: 'Bat.png' },
    { name: 'Cat', image: 'Cat.png' },
    { name: 'Hat', image: 'Hat.jpg' },
    { name: 'Sea', image: 'Sea.jpg' },
    { name: 'Sun', image: 'Sun.png' }
];
var Year1wordsarray = [
    { name: 'Plum', image: 'plum.png' },
    { name: 'Tiger', image: 'Tiger.png' },
    { name: 'Helmet', image: 'Helmet.jpg' },
    { name: 'Ocean', image: 'Ocean.jpg' },
    { name: 'Venus', image: 'Venus.png' }
];
var Year2wordsarray = [
    { name: 'Possum', image: 'possum.png' },
    { name: 'Leopard', image: 'Leopard.png' },
    { name: 'Cowboy', image: 'Cowboy.jpg' },
    { name: 'Estuary', image: 'Sea.jpg' },
    { name: 'Jupiter', image: 'Jupiter.png' }
];
function ClearUser(){
    // alert("cs")
    document.getElementById('UserScreen').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block';
}
function LoadArray(difficulty) {
    switch(difficulty){
        case 'Kindy':
            playarray=kindywordsarray
        case 'Year1':
            playarray=Year1wordsarray
        case 'Year2':
            playarray=Year2wordsarray
    }}
function Loadkindy(kindy){
// alert(kindy)
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('Kindypage').style = 'display:block';
    LoadArray()

}

function LoadYear1 (Year1) {
    // alert(Year1)
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('Year1page').style = 'display:block';
}

function LoadYear2 (Year2) {
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('Year2page').style = 'display:block';
}

function LoadHelp (Help) {
    // alert(Help)
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('HelpScreen').style = 'display:block';

}

function LoadDifficulty (difficulty) {
    document.getElementById('HelpScreen').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block';

}

function ReturnDifficulty (difficulty) {
    document.getElementById('Kindypage').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block';

}

function ReturnDifficultyY1 (difficulty){
    document.getElementById('Year1page').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block';
}

function ReturnDifficultyY2(difficulty) {
    document.getElementById('Year2page').style = 'display:none;'
    document.getElementById('DifficultySelectionScreen').style = 'display:block';
    }
