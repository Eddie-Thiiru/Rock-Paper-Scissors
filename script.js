const one = "rock";
const two = "paper";
const three = "scissors";

let playerValue = 0;
let computerValue = 0;

const buttons = document.querySelectorAll("button");

function getPlayerChoice(e){
    if(e.target.value === "rock") {
        return one;
    }else if(e.target.value === "paper") {
        return two;
    }else {
        return three;
    }
}

    function getComputerChoice() {
        
        if (randomNumber >= 1 && randomNumber <= 33) {
            return one;
        } else if (randomNumber >= 34 && randomNumber <= 67) {
            return two;
        } else {
            return three;
        } 
    } 
    let randomNumber =  Math.floor(Math.random() * 100) + 1;


    function playRound(e) {
        const playerSelection = getPlayerChoice(e);
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection)

        if (playerSelection === one && computerSelection === two) {
            return "You Loose This Round!";
        } else if (playerSelection === one && computerSelection === three) {
            return "You Win This Round!";
        } else if (playerSelection === two && computerSelection === one) {
            return "You Win This Round!";
        } else if (playerSelection === two && computerSelection === three) {
            return "You Loose This Round!";
        } else if (playerSelection === three && computerSelection === one) {
            return "You Loose This Round!";
        } else if (playerSelection === three && computerSelection === two) {
            return "You Win This Round!";
        }else {
            return "You Draw This Round!";
        }  
    }


buttons.forEach(button => button.addEventListener('click', playRound));

 