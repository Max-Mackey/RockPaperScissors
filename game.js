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
console.log(getComputerChoice())

const playerSelection = prompt("Please choose Rock, Paper, or scissors.").toLowerCase();
console.log(playerSelection)

function RockPaperScissors(playerSelection, getComputerChoice)
