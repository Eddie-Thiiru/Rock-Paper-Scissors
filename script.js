const buttons = document.querySelectorAll("button");
const gameStatus = document.querySelector(".game-status");
const choices = document.querySelector(".choices");
const pointsContainer = document.querySelector(".game-points");

const playerPoints = document.createElement("div");
const computerPoints = document.createElement("div");

playerPoints.classList.toggle("player-results");
playerPoints.textContent = "Player Score: 0";
computerPoints.classList.toggle("computer-results");
computerPoints.textContent = "Computer Score: 0";

pointsContainer.appendChild(playerPoints);
pointsContainer.appendChild(computerPoints);
gameStatus.textContent = "5 Points To Win! Click To start";
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function showChoices(player, computer) {
  choices.textContent = "";

  const playerChoice = document.createElement("div");
  const computerChoice = document.createElement("div");
  const roundWinner = document.createElement("div");

  playerChoice.setAttribute("style", "white-space: pre-wrap");
  computerChoice.setAttribute("style", "white-space: pre-wrap");
  playerChoice.textContent = `Player:  ${player}`;
  computerChoice.textContent = `Computer:  ${computer}`;
  roundWinner.setAttribute("id", "round-winner");

  choices.appendChild(playerChoice);
  choices.appendChild(computerChoice);
  choices.appendChild(roundWinner);
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

function playRound(player, computer) {
  const playerSelection = player;
  const computerSelection = computer;
  const roundWinner = document.getElementById("round-winner");

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    roundWinner.textContent = "Paper Beats Rock!";
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    roundWinner.textContent = "Rock Beats Scissors!";
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    roundWinner.textContent = "Paper Beats Rock!";
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    roundWinner.textContent = "Scissors Beats Paper!";
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    roundWinner.textContent = "Rock Beats Scissors!";
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    roundWinner.textContent = "Scissors Beats Paper!";
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  } else {
    playerScore += 0;
    computerScore += 0;
    roundWinner.textContent = "Draw!";
    playerPoints.textContent = `Player Score: ${playerScore}`;
    computerPoints.textContent = `Computer Score: ${computerScore}`;
  }

  function checkWinner() {
    if (playerScore === 5) {
      gameStatus.textContent = "Player Wins!";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      gameStatus.textContent = "Computer Wins!";
      playerScore = 0;
      computerScore = 0;
    }
  }
  checkWinner();
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const player = button.dataset.value;
    const computer = getComputerChoice();

    if (
      gameStatus.textContent === "Player Wins!" ||
      gameStatus.textContent === "Computer Wins!"
    ) {
      roundNumber = 1;
    } else {
      roundNumber += 1;
    }

    gameStatus.textContent = `Round ${roundNumber}`;

    showChoices(player, computer);
    playRound(player, computer);
  })
);
