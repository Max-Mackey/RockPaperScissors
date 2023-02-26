// function that creates choice using math.random
function getComputerChoice(cpuChoice){
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

const playerSelection = prompt("Please choose Rock, Paper, or scissors.").toLowerCase();
const computerSelection = (getComputerChoice)

// tests for above variable and functions comment out when finished
console.log(computerSelection());
console.log(playerSelection);
//

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection)
  return ("It's a tie!")
  else if
  (playerSelection === "rock" & computerSelection ==="scissors");
  return ("You win!")
}
 
console.log(playRound(playerSelection, computerSelection));
