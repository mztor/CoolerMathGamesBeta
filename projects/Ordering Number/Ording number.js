
let highScore =0;

var lastclickednumber=0;
//hide the helpmenu and game page
function difficulty() {
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("game").classList.add("hide")
}
//hide the difficulty page and shows the instruction
function helpMenu() {
    document.getElementById("helpMenu").classList.remove("hide")
    document.getElementById("difficulty").classList.add("hide")
}
//back to difficulty page, hide everythings and shows difficulty page
function toDifficulty() {
    document.getElementById("helpMenu").classList.add("hide")
    document.getElementById("difficulty").classList.remove("hide");
    document.getElementById("highscorediv").classList.add("hide");
    document.getElementById("playAgain").classList.add("hide");
    document.getElementById("winscreen").classList.add("hide");
    document.getElementById("failscreen").classList.add("hide");
}
//level 1 page
function toGame1() {
    document.getElementById("difficulty").classList.add("hide")
    document.getElementById("game1").classList.remove("hide")

}

function myFunction() {
    lastclickednumber=0;
    document.getElementById("score").innerText=3;
//number shows on the button
    var counter = 0;
    var array=[1,2,3,4,5,6,7,8,9,10];
    var permarray=shuffleArray(array);
    for (i = 0; i <10; i++) {
//function to create 10 button at a time
        counter = permarray[i];
        var x = document.createElement("BUTTON");
        var t = document.createTextNode(counter);

        x.appendChild(t);
        x.setAttribute("name","level1button")
        x.setAttribute("value",counter);
        document.body.appendChild(x);
        x.addEventListener("click", function(clickevent){ clickedMe(clickevent); });
    }
}
//check the button being click is the right number or not
function clickedMe(clickevent) {

    var clickecbuttonnumber = clickevent.target.getAttribute("value");
    if(Number(clickecbuttonnumber) == lastclickednumber+1){
        lastclickednumber++;
        clickevent.target.setAttribute("class","hide");

        if(clickecbuttonnumber ==10){
            score = Number(document.getElementById("score").textContent);
//check the score is the highest or not
            if(score>=highScore) {
                highScore = score;

                document.getElementById("game1").classList.add("hide");
                document.getElementById("highscorediv").classList.remove("hide");
                document.getElementById("highscore").innerText = highScore;
                document.getElementById("playAgain").classList.remove("hide");
            }
            else{
                document.getElementById("winscreen").classList.remove("hide");
                document.getElementById("game1").classList.add("hide");
                document.getElementById("playAgain").classList.remove("hide");


            }
        }
   }
    //if press the wrong button the score -1
    else{
       var scorenumber= Number(document.getElementById("score").textContent);
       scorenumber--;
        document.getElementById("score").textContent=scorenumber;

        if (scorenumber==0){
            document.getElementById("failscreen").classList.remove("hide");
            document.getElementById("game1").classList.add("hide");
            document.getElementById("playAgain").classList.remove("hide");
            level1buttons = document.getElementsByName("level1button");

            for(i=0;i<level1buttons.length;i++){
                level1buttons[i].setAttribute("class","hide");
            }
        }

    }
}
//function to shuffle the number on the button
function shuffleArray(array) {
    for (var i = array.length-1; i >=0; i--) {
        var j = Math.floor(Math.random() * Math.floor(array.length));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

