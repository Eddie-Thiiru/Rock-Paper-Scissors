let randomNumber =  Math.floor(Math.random() * 100) + 1;

const one = "rock";
const two = "paper";
const three = "scissors";

function getComputerChoice() {

    if (randomNumber >= 1 && randomNumber <= 33) {
        return one;
    } else if (randomNumber >= 34 && randomNumber <= 67) {
        return two;
    } else {
        return three;
    } 
} 

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === one && computerSelection === two) {
        return "You Loose! Paper beats Rock";
    } else if (playerSelection === one && computerSelection === three) {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === two && computerSelection === one) {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === two && computerSelection === three) {
        return "You Loose! Scissors beats Paper";
    } else if (playerSelection === three && computerSelection === one) {
        return "You Loose! Rock beats Scissors";
    } else if (playerSelection === three && computerSelection === two) {
        return "You Win! Scissors beats Paper";
    } else {
        return "It's a Draw!";
    }
}
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));










