
// WORKING CODE GET ON GITHUB AND FINISH

import { quizQuestions } from './questions.js';

var startDivEL = document.getElementById('start-screen');
var startScreenButtonEL = document.getElementById('start');
var questionsDivEL = document.getElementById('questions');
var questionTitleEL = document.getElementById('question-title');
var choicesEL = document.getElementById('choices');




// New countdown timer function
function startTimer() {
  let seconds = 60; // Initial time in seconds
  const timerSpan = document.getElementById('time');

  const timerInterval = setInterval(function() {
    seconds--;

    timerSpan.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(timerInterval);
      alert('Time\'s up!');
      // Additional logic after the timer reaches 0 can be added here
      questionsDivEL.style.display = 'none';
      document.getElementById('end-screen').style.display = 'block';
    }
  }, 1000); // 1000 milliseconds = 1 second
}











function startTheGame(event) {
    event.preventDefault();
    console.log("starting game");
    //prevent page from reloading

    startDivEL.style.display = 'none';
    questionsDivEL.style.display = 'none';
    // Hide the start screen
    choicesEL.style.display = 'block';
    questionsDivEL.style.display = 'block';
    // Show the questions
    showQuestions();
};

var currentQuestionIndex = 0;//set to 0 so we can start at the first question

function showQuestions() {
   // Get the current question from the quizQuestions array using the currentQuestionIndex
    var currentQuestion = quizQuestions[currentQuestionIndex];

    // Update the questionTitleEL to show the current question
    questionTitleEL.textContent = currentQuestion.question;

    // Clear out any old question choices by clearing the innerHTML of the choicesEL
    choicesEL.innerHTML = '';

    // Create a list element to hold the buttons
    var choicesList = document.createElement("ul");

    // Loop over the current question's choices
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        // Create a list item for each choice
        var listItem = document.createElement("li");

        // Create a button for each choice
        var buttonEL = document.createElement("button");
        buttonEL.textContent = currentQuestion.choices[i];
        buttonEL.setAttribute("data-choice-id", i);
        buttonEL.addEventListener("click", handleChoiceSelection);

        // Append the button to the list item
        listItem.appendChild(buttonEL);

        // Append the list item to the choices list
        choicesList.appendChild(listItem);
    }

    // Append the choices list to the choicesEL element
    choicesEL.appendChild(choicesList);
}


var scoreElement = document.getElementById
('actualscore'); //1. Get the element by ID

var score = 0; //2. Set the initial score to 0

function updateScore() {
    score++; //3 Increment the score
    scoreElement.innerHTML = 'Score: ' + score; // Update 
    // console.log(score);
    // console.log(scoreElement);
}



function handleChoiceSelection(event) 
{
    var selectedChoiceId = event.target.getAttribute("data-choice-id");
    var currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedChoiceId == currentQuestion.correctAnswer) {
        currentQuestionIndex++;
    
        updateScore();
        // event.preventDefault();
        
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestions();
        } else {
            // Quiz completed
            // TODO: Handle end of quiz logic
            document.getElementById('end-screen').style.display = 'block';
            document.getElementById('final-score').innerHTML = score;
            // Hide the last question and buttons
        questionTitleEL.style.display = 'none';
        choicesEL.style.display = 'none';
        }
    } else {
        // Incorrect answer
        // TODO: Handle incorrect answer logic
    }
}


document.getElementById('start').addEventListener('click', startTheGame);
document.getElementById('start').addEventListener('click', startTimer);
// yes getting blagged by syntax errors for hours is fun. 



