function loadEasy() {
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
    var question = 1;
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
