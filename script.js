const buttons = document.querySelectorAll("button");

const content = document.createElement("div");
content.classList.toggle("results");

let playerScore = 0;
let computerScore = 0;


function getPlayerChoice(e){
    if(e.target.value === "rock") {
        return "rock";
    }else if(e.target.value === "paper") {
        return "paper";
    }else {
        return "scissors";
    }
}

function getComputerChoice() {
    const randomNumber =  Math.floor(Math.random() * 100) + 1;

    if (randomNumber >= 1 && randomNumber <= 33) {
        return "rock";
    } else if (randomNumber >= 34 && randomNumber <= 67) {
        return "paper";
    } else {
        return "scissors";
    } 
} 
    


    function playRound(e) {
        const playerSelection = getPlayerChoice(e);
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection)
        if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            content.textContent = "Player:" + playerScore + " Computer:" + computerScore;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            content.textContent = "Player:" + playerScore + " Computer:" + computerScore;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            content.textContent = "Player:" + playerScore + " Computer:" + computerScore;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1;
            content.textContent = "Player:" + playerScore + " Computer:" + computerScore;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            content.textContent = "Player:" + playerScore + " Computer:" + computerScore;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            content.textContent = "Player:" + playerScore + " Computer:" + computerScore;
        }else {
            playerScore += 0;
            computerScore += 0;
            content.textContent = "Player:" + playerScore + " Computer:" + computerScore;
        }
    }

    container.appendChild(content);

buttons.forEach(button => button.addEventListener('click', playRound));

 