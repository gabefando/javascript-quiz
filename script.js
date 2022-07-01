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
var bBtnClicked = 0;
var dBtnClicked = 0;
var points = 0;
var t = 0;

quizBtns.style.display = "none";
timer.style.display = "none";
score.style.display = "none";

function quizStart() {
    desc.style.display = "none";
    question.style.display = "block";
    startBtn.style.display = "none";
    quizBtns.style.display = "block";
    score.style.display = "inline";
    aBtn.classList.remove("hiddenBtn");
    bBtn.classList.remove("hiddenBtn");
    cBtn.classList.remove("hiddenBtn");
    dBtn.classList.remove("hiddenBtn");
    aBtnClicked = 0;
    bBtnClicked = 0;
    dBtnClicked = 0;
    t = 31;
    questionNum += 1;
    if (questionNum == 1) {
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
        points += 100;
        score.innerHTML = points;
        t = 31;
        questionNum += 1;
        question.innerHTML = "2. Is JavaScript the same as Java?";
        aBtn.innerHTML = "Yes";
        bBtn.innerHTML = "No";
        cBtn.classList.add("hiddenBtn");
        dBtn.classList.add("hiddenBtn");
    } else {
        points -= 20;
        score.innerHTML = points;
    }
}

function bBtnFunc() {
    bBtnClicked += 1;
    if (bBtnClicked == 1 && questionNum == 2) {
        points += 100;
        score.innerHTML = points;
        t = 31;
        questionNum += 1;
        question.innerHTML = "3. JavaScript has the file extension of";
        aBtn.innerHTML = ".javscript";
        bBtn.innerHTML = ".xml";
        cBtn.innerHTML = ".java";
        dBtn.innerHTML = ".js";
        cBtn.classList.remove("hiddenBtn");
        dBtn.classList.remove("hiddenBtn");
    } else {
        points -= 20;
        score.innerHTML = points;
    }
}

function cBtnFunc () {
    points -= 20;
    score.innerHTML = points;
}

function dBtnFunc() {
    dBtnClicked += 1;
    if (dBtnClicked == 1 && questionNum == 3) {
        points += 100;
        score.innerHTML = points;
        t = 31;
        questionNum += 1;
        window.location.href = "./leaderboard.html";
        recordScore();
    }
}

function recordScore() {
    var nameput = document.getElementById("name");
    var scoreput = document.getElementById("score")
    var ask = confirm("Do you want to save your score to the leaderboard?");
    if (ask == true) {
        var nameInput = prompt("Write your initials to record your score");
        
    }
}

startBtn.addEventListener("click", quizStart);
aBtn.addEventListener("click", aBtnFunc);
bBtn.addEventListener("click", bBtnFunc);
cBtn.addEventListener("click", cBtnFunc);
dBtn.addEventListener("click", dBtnFunc);
