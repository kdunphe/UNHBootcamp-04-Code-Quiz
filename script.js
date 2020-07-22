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
        choices: ["Numbers & Strings", "Other Arrays","Booleans", "All of the above"],
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

let start = document.querySelector("#start");
let counter = 60;
let timerDisplay = document.querySelector("#timer");
// let question = document.querySelector("#startquiz");
let questionCount = 0;
let correct = [];
let quizQuestion = document.querySelector("#quiz");
// let ansBtn = document.querySelectorAll("buttons.choice");
// let choice1 = document.querySelector("#choice1");
// let choice2 = document.querySelector("#choice2");
// let choice3 = document.querySelector("#choice3");
// let choice4 = document.querySelector("#choice4");
// let answerBtn = document.querySelector("#buttons");
// let answer = document.querySelector("#answer");
let finalscore = document.querySelector("#finalscore");
let currentQuestion = questions[questionCount];
// let lastQuestion = questions.length - 1;
let choicesArray = document.querySelector("#choices");
let answer = document.querySelector("#answer");
let end = document.querySelector("#endquiz");
let finalScore = document.querySelectorAll("#finalscore");




// Hide Intro and Show Quiz when Start Quiz is Clicked
function startQuiz() {
    // $("#intro").style.display = "none";
    document.querySelector("#intro").style.display = "none";
    document.querySelector("#startquiz").style.display = "block";
}


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

// Show Questions once Quiz is Started
// function displayQuestions() {
//     let currentQuestion = questions[questionCount];
//     quizQuestion.textContent = currentQuestion.question;
//     choice1.textContent = currentQuestion.choice1; 
//     choice2.textContent = currentQuestion.choice2; 
//     choice3.textContent = currentQuestion.choice3; 
//     choice4.textContent = currentQuestion.choice4; 
// }

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
    //   answer.setAttribute("class", "right");
    //   answer.setAttribute("style", "visibility: visible;");
    //   answer.textContent = "Right!";
      counter += 10;
  
    } else {
    //   answer.setAttribute("class", "wrong");
    //   answer.setAttribute("style", "visibility: visible;");
    //   answer.textContent = "Wrong";
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
// question.addEventListener("click", startQuiz);
// answerBtn.addEventListener("click", validateAnswer);
// choice1.addEventListener("click", selectedAnswer);
// choice2.addEventListener("click", selectedAnswer);
// choice3.addEventListener("click", selectedAnswer);
// choice4.addEventListener("click", selectedAnswer);
// ansBtn.forEach(item => {
//     item.addEventListener('click', checkAnswer);






// function checkAnswer(event) {
//     event.preventDefault();

//     if (questions[questionCount].correct === event.target.value) {
//         p.textContent = "Correct!";
//     } else if (questions[questionCount].correct !== event.target.value) {
//         counter = counter - 10;
//         p.textContent = "Wrong!";
//     }

//     if (questionCount < questions.length) {
//         questionCount++;
//     }
//     setQuestion(questionCount);
// }

// Validate Correct Answer
// Source: https://stackoverflow.com/questions/40835372/targeting-multiple-choice-questions
// function validateAnswer(answer) {
//     if (questions[questionCount].correct == answer) {
//         alert("Correct!");
//     }
// }

// function selectedAnswer (button) {
//     if (button.target.id === "1") {
//       clickedAnswer = 1;
//     } else if (button.target.id === "2") {
//       clickedAnswer = 2;
//     } else if (button.target.id === "3") {
//       clickedAnswer = 3;
//     } else {
//       clickedAnswer = 4;
//     }
//     validateAnswer();
//   }

// function validateAnswer() {
//     if (counter > 0) {
//       if (clickedAnswer == currentQuestion.answer) {
//         returnAnswer.setAttribute("class", "correct");
//         returnAnswer.textContent = "CORRECT!";
//         finalAnswer.setAttribute("class", "correct");
//         finalAnswer.textContent = "CORRECT!";
//         nextQuestion();
//       } else {
//         returnAnswer.setAttribute("class", "wrong");
//         returnAnswer.textContent = "WRONG!";
//         finalAnswer.setAttribute("class", "wrong");
//         finalAnswer.textContent = "WRONG!";
//         counter -= 10;
//         nextQuestion();
//       }
//     } else endQuiz();
//   }

//   function nextQuestion() {
//     if (questionCount < lastQuestion) {
//       questionCount++;
//       displayQuestion();
//     } else endQuiz();
//   }


