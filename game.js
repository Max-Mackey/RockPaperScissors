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

let i = 0;
let x = 0;

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
    i = i+1;
    alert(result);
    document.querySelector('div.playerScore').textContent = `${i}`;
    
  } else {
    result = (`You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`);
    x = x+1;
    alert(result);
    document.querySelector('div.computerScore').textContent = `${x}`;
  }

  //check if either player or computer has reached a score of 5
  if (i === 5 || x === 5) {
    let winner = i === 5 ? "Player" : "The Computer";
    alert(`${winner} wins!`);

    i = 0;
    x = 0;
    document.querySelector('div.playerScore').textContent = '0';
    document.querySelector('div.computerScore').textContent = '0';
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

const myButton = document.querySelector('.reset');
const myDiv = document.querySelector('.playerScore');
const myDiv2 = document.querySelector('.computerScore');

myButton.addEventListener('click', () => {
  i = 0;
  x = 0;
  myDiv.textContent = '0';
  myDiv2.textContent = '0';
});