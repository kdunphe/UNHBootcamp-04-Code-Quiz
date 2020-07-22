// Array of Questions
// Source: https://stackoverflow.com/questions/40835372/targeting-multiple-choice-questions
// Source; Questions taken from UNH Coding Bootcamp Homework Preview
let questions = [

    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        correct: "3",
    },

    {
        question: "The condition in an if / else statement is enclosed within ______.",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        correct: "3",
    },

    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["Numbers & Strings", "Other Arrays", "Booleans", "All of the above"],
        correct: "4",
    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        correct: "3",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal / Bash", "For Loops", "Console Log"],
        correct: "4",
    },

];

// Quiz Variables
let start = document.querySelector("#start");
let counter = 60;
let timerDisplay = document.querySelector("#timer");
let questionCount = 0;
let correct = [];
let quizQuestion = document.querySelector("#quiz");
let finalscore = document.querySelector("#finalscore");
let currentQuestion = questions[questionCount];
let choicesArray = document.querySelector("#choices");
let answer = document.querySelector("#answer");
let end = document.querySelector("#endquiz");
let finalScore = document.querySelectorAll("#finalscore");




// Hide Intro and Show Quiz when Start Quiz is Clicked
function startQuiz() {
    document.querySelector("#intro").style.display = "none";
    document.querySelector("#startquiz").style.display = "block";
}


// Start Timer when Start Quiz is Clicked
function countDown() {
    timer = setInterval(function () {
        counter--;
        timerDisplay.textContent = counter;
        if (counter <= 0) {
            clearInterval(timer);
            $("#timer").html("Times up!");
            return;
        }
    }, 1000);
    startQuiz();
    displayQuestions();
}


// Show Questions once Quiz is Started
function displayQuestions() {
    let currentQuestion = questions[questionCount];
    quizQuestion.textContent = currentQuestion.question;
    choicesArray.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i) {
        const choices = document.createElement("button");
        choices.setAttribute("class", "choice");
        choices.setAttribute("value", choice);
        choices.textContent = choice;
        choicesArray.appendChild(choices);
        choices.onclick = validateAnswer;
    });
}


// Validate Selected Answer
function validateAnswer() {
    if (this.value === questions[questionCount].correct) {
        counter += 10;

    } else {
        counter -= 10;
    }


    // Move to Next Question or End Quiz
    questionCount++;
    if (questionCount === questions.length) {
        endQuiz();
    } else {
        displayQuestions();
    }
}


// End Quiz
function endQuiz() {
    document.querySelector("#endquiz").style.display = "block";
    document.querySelector("#startquiz").style.display = "none";

    clearInterval(timer);
    timerDisplay.textContent = 0;
    if (counter < 0) {
        counter = 0;
    }
}


// Event Listeners
start.addEventListener("click", countDown);
