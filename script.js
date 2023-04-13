const buttons = document.querySelectorAll("button");
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.toggle("results");

const winner = document.createElement("div");
content.classList.toggle("winner");

let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(e) {
  if (e.target.value === "rock") {
    return "rock";
  }
  if (e.target.value === "paper") {
    return "paper";
  }
  return "scissors";
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  if (randomNumber >= 1 && randomNumber <= 33) {
    return "rock";
  }
  if (randomNumber >= 34 && randomNumber <= 67) {
    return "paper";
  }
  return "scissors";
}

function playRound(e) {
  winner.textContent = "";
  const playerSelection = getPlayerChoice(e);
  console.log(playerSelection);
  const computerSelection = getComputerChoice();
  console.log(computerSelection);

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    content.textContent = `Player:${playerScore} Computer:${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    content.textContent = `Player:${playerScore} Computer:${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    content.textContent = `Player:${playerScore} Computer:${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    content.textContent = `Player:${playerScore} Computer:${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    content.textContent = `Player:${playerScore} Computer:${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    content.textContent = `Player:${playerScore} Computer:${computerScore}`;
  } else {
    playerScore += 0;
    computerScore += 0;
    content.textContent = `Player:${playerScore} Computer:${computerScore}`;
  }

  if (playerScore === 5) {
    winner.textContent = "Hurray! five points for the Win!";
    playerScore *= 0;
    computerScore *= 0;
  } else if (computerScore === 5) {
    winner.textContent = "You Lost! Better luck next time";
    playerScore *= 0;
    computerScore *= 0;
  }
  console.log(playerScore);
  console.log(computerScore);
}

container.appendChild(content);
container.appendChild(winner);
buttons.forEach((button) => button.addEventListener("click", playRound));
