var startBtn = document.getElementById("startBtn");
var aBtn = document.getElementById("aBtn");
var bBtn = document.getElementById("bBtn");
var cBtn = document.getElementById("cBtn");
var dBtn = document.getElementById("dBtn");
var quizBtns = document.getElementById("quizBtns");
var question = document.getElementById("question");
var questionNum = 0;
var aBtnClicked = 0;

quizBtns.style.display = "none";

function quizStart() {
    console.log("quiz started");
    startBtn.style.display = "none";
    quizBtns.style.display = "block";
    questionNum += 1;
    if (questionNum == 1) {
        console.log(questionNum)
        question.innerHTML = "1. Which of the following ways of making a variable is correct?";
        aBtn.innerHTML = "var = example;";
        bBtn.innerHTML = "variable = example;";
        cBtn.innerHTML = "vrb = example";
        dBtn.innerHTML = "function example()";
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
    } 
}

startBtn.addEventListener("click", quizStart);
aBtn.addEventListener("click", aBtnFunc);