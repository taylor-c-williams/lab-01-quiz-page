// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const button = document.getElementById('quiz');
const complete = document.getElementById('complete');

let correctAnswers = 0;
// initialize state

// set event listeners
button.addEventListener('click', () => {
    const firstName = prompt('Hi there! What is your name?');
    if (!firstName) return;
    const wantsToContinue = confirm(
        `Okay ${firstName}, are you ready to take the quiz?`
    );

    if (!wantsToContinue) return;

    const answer1 = prompt(
        "Is the Elephant's Foot comprised of a material called Corium?"
    );
    if (countsAsAYes(answer1)) correctAnswers++;

    const answer2 = prompt("Is the Elephant's Foot radioactive?");
    if (countsAsAYes(answer2)) correctAnswers++;

    const answer3 = prompt(
        "Is the Elephant's foot the only known instance of Corium on the earth?"
    );
    if (!countsAsAYes(answer3)) correctAnswers++;

    alert(`Well done ${firstName}.
  Tabulating results...`);


    complete.textContent = `Congratulations, ${firstName} you got ${correctAnswers} out of 3 questions!`;
});

// get user input
// use user input to update state
// update DOM to reflect the new state
