const buttons = document.querySelectorAll("button");
const gameStatus = document.querySelector(".game-status");
const pointsContainer = document.querySelector(".game-points");

const playerPoints = document.createElement("div");
const computerPoints = document.createElement("div");

playerPoints.classList.toggle("player-results");
playerPoints.textContent = "Player: 0";
computerPoints.classList.toggle("computer-results");
computerPoints.textContent = "Computer: 0";

pointsContainer.appendChild(playerPoints);
pointsContainer.appendChild(computerPoints);
gameStatus.textContent = "Click To Start";
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(e) {
  console.log(e.dataset.value);
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
  const playerSelection = getPlayerChoice(e);
  const computerSelection = getComputerChoice();

  gameStatus.textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  } else {
    playerScore += 0;
    computerScore += 0;
    playerPoints.textContent = `Player: ${playerScore}`;
    computerPoints.textContent = `Computer: ${computerScore}`;
  }

  function checkWinner() {
    if (playerScore === 5) {
      gameStatus.textContent = "You Win!";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      gameStatus.textContent = "You Loose!";
      playerScore = 0;
      computerScore = 0;
    }
  }
  checkWinner();
}

buttons.forEach((button) => button.addEventListener("click", playRound));
