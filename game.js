// function that creates choice using math.random
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

function game() {
  let matchCount = 0;

  while (matchCount < 5) {
    const playerSelection = prompt("Please choose Rock, Paper, or scissors.").toLowerCase();
    const computerSelection = getComputerChoice();
    
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    
    matchCount++;
  }
}

game();
