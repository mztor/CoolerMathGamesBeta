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

function Loadkindy(kindy){
// alert(kindy)
    document.getElementById('DifficultySelectionScreen').style = 'display:none;'
    document.getElementById('Kindypage').style = 'display:block';
    for (var i = 0; i < boldStuffs.length; i += 1) {
        var word = getRandomItem(kindywordsarray);
        [i].innerHTML = word.name + '<img src="'+fruit.image+'">';
    }


}

function LoadYear1 (Year1) {
    alert(Year1)
}

function LoadYear2 (Year2) {
    alert(Year2)
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
