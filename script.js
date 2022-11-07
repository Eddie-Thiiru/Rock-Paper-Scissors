const one = "rock";
const two = "paper";
const three = "scissors";

let playerValue = 0;
let computerValue = 0;

for (let i = 0; i < 5; i++) {

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

    function funcPrompt() {
        let answer = prompt("Rock, Paper or Scissors?");
        if (answer === null || answer === "") {
            alert('Please enter an answer.');
            funcPrompt();
            return;
        }
        answer = answer.toLowerCase();
        if (answer === one || answer === two || answer === three) {
            return answer;
        } else {
            alert("Please enter correct answer")
            funcPrompt();
        }
    }

    function playRound(playerSelection, computerSelection) {

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
    const playerSelection = funcPrompt();
    const computerSelection = getComputerChoice();

    function game() {
        let valueCount = playRound(playerSelection, computerSelection);

        if (valueCount === "You Win This Round!") {
            console.log("You Win This Round!");
            return ++playerValue;
        } else if (valueCount === "You Loose This Round!") {
            console.log("You Loose This Round!");
            return ++computerValue;
        }else {
            console.log("You Draw This Round");
            return playerValue,
                    computerValue;
        }    
    }game();
}
console.log(playerValue, "player");
console.log(computerValue, "computer");