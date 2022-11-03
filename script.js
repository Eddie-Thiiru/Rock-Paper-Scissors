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
    let check = playerSelection === one || playerSelection === two || playerSelection === three;
   
    if (!check) {
        alert("Wrong Input!");
    }else if (playerSelection === one && computerSelection === two) {
        return "You Loose!";
    } else if (playerSelection === one && computerSelection === three) {
        return "You Win!";
    } else if (playerSelection === two && computerSelection === one) {
        return "You Win!";
    } else if (playerSelection === two && computerSelection === three) {
        return "You Loose!";
    } else if (playerSelection === three && computerSelection === one) {
        return "You Loose!";
    } else if (playerSelection === three && computerSelection === two) {
        return "You Win!";
    }else {
        return "It's a Draw!";
    }
    
}
let playerSelection = prompt("Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);














