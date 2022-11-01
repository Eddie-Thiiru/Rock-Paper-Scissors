let randomNumber =  Math.floor(Math.random() * 100) + 1;

const one = "Rock";
const two = "Paper";
const three = "Scissors";

function getComputerChoice() {

    if (randomNumber >= 1 && randomNumber <= 33) {
        return one;
    } else if (randomNumber >= 34 && randomNumber <= 67) {
        return two;
    } else {
        return three;
    } 
}



