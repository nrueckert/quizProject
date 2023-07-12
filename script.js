var timer = document.querySelector("#timer");
var highscoreClick = document.querySelector("#viewHighscore")
var nameForHighscore = document.querySelector("#nameForScore")
var highscoreScreen = document.querySelector("#viewHighscore")
var closeHighscoreScreen = document.querySelector("#closeHighscoreScreen")
var highscoreNameScore = document.querySelector("#highscoreNameScore")
var firstButton = document.querySelector("#firstButton");
var questionOne = document.querySelector("#questionOne");
var questionTwo = document.querySelector("#questionTwo");
var firstScreen = document.querySelector("#firstScreen");
var correctQ1 = document.querySelector("#correctQuestionOne");
var submitQuestionOne = document.querySelector("#questionOneSubmit")
var sumbitQuestionTwo = document.querySelector("#questionTwoSubmit")
var correctQ2 = document.querySelector("#twoCorrectQuestionTwo")
var consumerName = document.querySelector("#highscoreName")
var submitName = document.querySelector("#submitName")
var count = 70
var highscore = 0
var score = 0
var endScreen

function openHighscoreScreen(){
    highscoreScreen.style.display = "contents";
}
function closeHighscoreScreen(){
    highscoreScreen.style.display = "none";
}
function setTimer(){
    count = 70
    var timerInterval = setInterval(function(){
        count--;
        timer.textContent = count
        if(count === 0){
            clearInterval(timerInterval);
            
        }
        if (endScreen){
            clearInterval(timerInterval);
        }
    }, 1000)
    
}

function transitionSecondScreen(){
    score = 0
    firstScreen.style.display = "none";
    questionOne.style.display = "flex";
    return score
}
function isCorrectQ1(){
    if(correctQ1){
        score++
        return score
    } else {
        count = count - 5
        return count
    }
}
function isCorrectQ2(){
    if (correctQ2){
        score++
        return score
    } else {
        count = count - 5
        return count
    }
}
function transitionThirdScreen(){
    questionOne.style.display = "none";
    questionTwo.style.display = "flex";
}
function transitionFourthScreen(){
    nameForHighscore.style.display = "flex";
    questionTwo.style.display = "none";
}
function isNewHighScore(){
    highscore = localStorage.getItem("Highscore")
    if (score >= highscore){
        localStorage.setItem("consumerName", consumerName.value)
        highscore = score
        localStorage.setItem("Highscore", highscore)
    } else {
        console.log("You aren't the most gifted coder")
    }
    nameForHighscore.style.display = "none";
    console.log(consumerName.value + " has a score of " + highscore)
    count = 1
    return count 

}


firstButton.addEventListener("click", setTimer)
firstButton.addEventListener("click", transitionSecondScreen)
submitQuestionOne.addEventListener("click", isCorrectQ1)
submitQuestionOne.addEventListener("click", transitionThirdScreen)
highscoreClick.addEventListener("click", openHighscoreScreen)
sumbitQuestionTwo.addEventListener("click", transitionFourthScreen)
sumbitQuestionTwo.addEventListener("click", isCorrectQ2)
submitName.addEventListener("click", isNewHighScore)