let rockChoice = document.querySelector("#rock");
let paperChoice = document.querySelector("#paper");
let scissorsChoice = document.querySelector("#scissors");
let playerChoice = document.querySelector(".user-choice");
let playerChoiceValue = "";
let computerChoice = document.querySelector(".computer-choice");
let computerChoiceValue = "";
let playerScore = 0;
let computerScore = 0;
let disabled = false;

rockChoice.addEventListener("click", () => {
  if (!disabled) {
    console.log("Rock chosen");
    playerChoiceValue = "rock";
    disabled = true;
    setChoices();
  }
});

paperChoice.addEventListener("click", () => {
  if (!disabled) {
    console.log("Paper chosen");
    playerChoiceValue = "paper";
    disabled = true;
    setChoices();
  }
});

scissorsChoice.addEventListener("click", () => {
  if (!disabled) {
    console.log("Scissors chosen");
    playerChoiceValue = "scissors";
    disabled = true;
    setChoices();
  }
});

function setChoices() {
  setPlayerChoice();
  cycle();
}

function setPlayerChoice() {
  playerChoice.innerHTML = `<div class="${playerChoiceValue}">${getEmojiForChoice(
    playerChoiceValue
  )}</div>`;
}

function getEmojiForChoice(choice) {
  switch (choice) {
    case "rock":
      return "👊";
    case "paper":
      return "🖐️";
    case "scissors":
      return "✌️";
    default:
      return "";
  }
}

let cycleCount = 0;
let delay = 40;

function cycle() {
  let choices = ["rock", "paper", "scissors"];
  computerChoiceValue = choices[Math.floor(Math.random() * choices.length)];
  setComputerChoice();
  cycleCount++;
  delay += 10;
  if (cycleCount < 20) {
    setTimeout(cycle, delay);
  } else {
    if (playerChoiceValue === "rock") {
      choices = ["rock", "paper", "paper"];
    } else if (playerChoiceValue === "paper") {
      choices = ["paper", "scissors", "scissors"];
    } else if (playerChoiceValue === "scissors") {
      choices = ["scissors", "rock", "rock"];
    }
    computerChoiceValue = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice();
    startBattle();
    cycleCount = 0;
    delay = 50;
  }
}

function setComputerChoice() {
  computerChoice.innerHTML = `<div class="${computerChoiceValue}">${getEmojiForChoice(
    computerChoiceValue
  )}</div>`;
}

function startBattle() {
  let result = determineWinner(playerChoiceValue, computerChoiceValue);
  displayResult(result);
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore++;
    return `You win! ${player} beats ${computer}.`;
  } else {
    computerScore++;
    return `Computer wins! ${computer} beats ${player}.`;
  }
}

let resultDisplay = document.querySelector(".result");
let playerScoreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");

function displayResult(result) {
  resultDisplay.innerHTML = result;
  disabled = false;
  updateScores();
}

function updateScores() {
  playerScoreDisplay.innerHTML = playerScore;
  computerScoreDisplay.innerHTML = computerScore;
}
