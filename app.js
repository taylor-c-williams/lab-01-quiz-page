// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const button = document.getElementById('quiz');
let correctAnswers = 0;
// initialize state

// set event listeners 
button.addEventListener('click', ()=> {
    let correctAnswers = 0;
    const firstName = prompt ('Hi there! What is your first name?');
    const lastName = prompt ('What is your last name?');
    const wantsToContinue = confirm(`Okay ${firstName} ${lastName}, are you ready to take the quiz?`);


    if (!wantsToContinue) return; 

    const answer1 = prompt('question 1');
    if (countsAsAYes) correctAnswers++;
    console.log(correctAnswers);
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
