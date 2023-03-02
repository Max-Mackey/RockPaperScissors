// function that creates choice using math.random
const playerRock = document.querySelector('div.rock');
playerRock.addEventListener('click', () => {
  const playerChoice = "rock";
  console.log(playerChoice);
})
const playerPaper = document.querySelector('div.paper');
playerPaper.addEventListener('click', () => {
  const playerChoice = "paper";
  console.log(playerChoice);
})
const playerScissors = document.querySelector('div.scissors');
playerScissors.addEventListener('click', () => {
  const playerChoice = "scissors";
  console.log(playerChoice);
})

function getComputerChoice() {
  const cpuNum = Math.floor(Math.random() * 3);
  switch (cpuNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = (`Tie game, you both chose ${playerSelection}.`);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    result = (`You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`);
  } else {
    result = (`You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`);
  }
  return result;
}