var startBtn = document.getElementById("startBtn");
var aBtn = document.getElementById("aBtn");
var bBtn = document.getElementById("bBtn");
var cBtn = document.getElementById("cBtn");
var dBtn = document.getElementById("dBtn");
var quizBtns = document.getElementById("quizBtns");
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var question = document.getElementById("question");
var desc = document.getElementById("desc");
var questionNum = 0;
var aBtnClicked = 0;

quizBtns.style.display = "none";
timer.style.display = "none";
score.style.display = "none";


function quizStart() {
    desc.style.display = "none";
    question.style.display = "block";
    console.log("quiz started");
    startBtn.style.display = "none";
    quizBtns.style.display = "block";
    var t = 6;
    questionNum += 1;
    if (questionNum == 1) {
        console.log(questionNum)
        question.innerHTML = "1. Which of the following ways of making a variable is correct?";
        aBtn.innerHTML = "var x = example;";
        bBtn.innerHTML = "variable x = example;";
        cBtn.innerHTML = "vrb x = example";
        dBtn.innerHTML = "function example()";
    }
    if (questionNum == 1) {
        var timerFunc = setInterval(myTimer, 1000);
    }
    function myTimer() {
        t -= 1;
        timer.innerHTML = t;
        timer.style.display = "inline";
        if (t == 0) {
            clearInterval(timerFunc);
            quizBtns.style.display = "none";
            startBtn.innerHTML = "Start Over"
            startBtn.style.display = "block";
            timer.style.display = "none";
            question.style.display = "none";
            desc.innerHTML = "You have failed!"
            desc.style.color = "red";
            desc.style.display = "block"
            questionNum = 0;
        }
    }
}

function aBtnFunc() {
    aBtnClicked += 1;
    if (aBtnClicked == 1 && questionNum == 1) {
        console.group("next question");
        questionNum += 1;
        question.innerHTML = "2. Is JavaScript the same as Java?";
        aBtn.innerHTML = "Yes";
        bBtn.innerHTML = "No";
        cBtn.style.display = "none";
        dBtn.style.display = "none";
    } else {
        // 
    }
}

startBtn.addEventListener("click", quizStart);
aBtn.addEventListener("click", aBtnFunc);