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
        


// Quiz Questions - JS or part of HTML?
// Commonly used data types DO NOT include:
// 1. Strings
// 2. Booleans
// 3. Alerts - correct answer
// 4. Numbers

// The condition in an if / else statement is enclosed within ______.
// 1. Quotes
// 2. Curly Brackets
// 3. Parentheses - correct answer
// 4. Square Brackets

// Arrays in JavaScript can be used to store ______.
// 1. Numbers & Strings
// 2. Other Arrays
// 3. Booleans
// 4. All of the above - correct answer

// String values must be enclosed within _______ when being assigned to variables.
// 1. Commas
// 2. Curly Brackets
// 3. Quotes - correct answer
// 4. Parentheses

// A very useful tool used during development and debugging for printing content to the debugger is:
// 1. JavaScript
// 2. Terminal / Bash
// 3. For Loops
// 4. Console Log - correct answer


// All done!
// Your final score is: _________  [return score]
// Enter Initials: [text box] with [submit button]




// Countdown Timer
var counter = 60;
var interval = setInterval(function() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     	clearInterval(interval);
      	$("#timer").html("Times up!");  
        return;
    } else {
    	$("#time").text(counter);
    }
}, 1000);


function startQuiz() {



}