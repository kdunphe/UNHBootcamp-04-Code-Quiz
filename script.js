// Pseudo Code

// When the user clicks “Start Quiz” button
// Show “View High Scores” link in upper left hand corner
// Start countdown timer in upper right hand corner
// Show first question with multiple choice answers
// When user selects correct answer (1 out of 4), return “Correct!”
// When user selects wrong answer (3 out of 4), return “Wrong!”
// When user selects wrong answer, deduct 10 seconds from time
// After returning answer notification, show next question
// Repeat steps with the remaining questions
// When all questions are answered or the timer reaches zero
// Return “All done!”
// Return “Your final score is:____”
// Return “Enter Initials: [text box] with [submit button]
// When user hits [submit button]
// Return “High Scores” with [initials] + [score]
// Buttons [go back] & [clear scores]
// When [clear scores] selected, clear scores from page
// When [go back] selected, return to main page (coding quiz challenge)
// Array of quiz questions
// All done!
// Your final score is: _________  [return score]
// Enter Initials: [text box] with [submit button]



// Array of Questions
// Source: https://stackoverflow.com/questions/40835372/targeting-multiple-choice-questions
let questions = [

    {
        question: "Commonly used data types DO NOT include:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        correct: "3"
    },

    {
        question: "The condition in an if / else statement is enclosed within ______.",
        choice1: "Quotes",
        choice2: "Curly Brackets",
        choice3: "Parentheses",
        choice4: "Square Brackets",
        correct: "3"
    },

    {
        question: "Arrays in JavaScript can be used to store ______.",
        choice1: "Numbers & Strings",
        choice2: "Other Arrays",
        choice3: "Booleans",
        choice4: "All of the above",
        correct: "4"
    },

    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choice1: "Commas",
        choice2: "Curly Brackets",
        choice3: "Quotes",
        choice4: "Parentheses",
        correct: "3"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "Terminal / Bash",
        choice3: "For Loops",
        choice4: "Console Log",
        correct: "4"
    },

];

let start = document.querySelector("#start");
let counter = 60;
let timerDisplay = document.querySelector("#timer");
let question = document.querySelector("#startquiz");
let questionCount = 0;
let quizQuestion = document.querySelector("#quiz");
let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");
let choice4 = document.querySelector("#choice4");



// Start Timer when Start Quiz is Clicked
function countDown() {

        // Countdown Timer
        timer = setInterval(function () {
            counter--;
            timerDisplay.textContent = counter;
            // $("#time").text(counter);
            if (counter <= 0) {
                clearInterval(timer);
                $("#timer").html("Times up!");
                return;
            } 
        }, 1000);
        startQuiz();
        displayQuestions();
}

// Hide Intro and Show Quiz when Start Quiz is Clicked
function startQuiz() {
    // $("#intro").style.display = "none";
    document.querySelector("#intro").style.display = "none";
    document.querySelector("#startquiz").style.display = "block";
    // displayQuestions(questionCount);
}


// Show Questions once Quiz is Started
function displayQuestions() {
    let currentQuestion = questions[questionCount];
    quizQuestion.textContent = currentQuestion.question;
    choice1.textContent = currentQuestion.choice1; 
    choice2.textContent = currentQuestion.choice2; 
    choice3.textContent = currentQuestion.choice3; 
    choice4.textContent = currentQuestion.choice4; 

}




    // Event Listeners
start.addEventListener("click", countDown);
question.addEventListener("click", startQuiz);

