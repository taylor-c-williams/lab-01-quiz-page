// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const button = document.getElementById('quiz');
let correctAnswers = 0;
// initialize state

// set event listeners 
button.addEventListener('click', ()=> {

    const firstName = prompt ('Hi there! What is your first name?');
    const wantsToContinue = confirm(`Okay ${firstName}, are you ready to take the quiz?`);


    if (!wantsToContinue) return; 

    const answer1 = prompt('question 1');
    if (countsAsAYes(answer1)) correctAnswers++;
      // if (answerOne.charAt(0).toLowerCase() === 'y') correctAnswers++;

    console.log(correctAnswers);

});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
