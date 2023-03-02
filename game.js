function getComputerSelection() {
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
    alert(result);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    result = (`You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`);
    alert(result);
  } else {
    result = (`You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`);
    alert(result);
  }
  return result;
}
const playerRock = document.querySelector('div.rock');
playerRock.addEventListener('click', () => {
  const playerSelection = "rock";
  const computerSelection = getComputerSelection();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
})
const playerPaper = document.querySelector('div.paper');
playerPaper.addEventListener('click', () => {
  const playerSelection = "paper";
  const computerSelection = getComputerSelection();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
})
const playerScissors = document.querySelector('div.scissors');
playerScissors.addEventListener('click', () => {
  const playerSelection = "scissors";
  const computerSelection = getComputerSelection();
  const result = playRound(playerSelection, computerSelection);
  console.log(result);
})