/* 
playerChoice starting value = null (must be string)
Create a text prompt asking for playerChoice
Make the player hoice all UpperCase()
Assign that choice to playerChoice
*/
let playerChoice = prompt("Type you choice of Rock, Paper, or Scissors.")
playerChoice = playerChoice.toUpperCase()
console.log(playerChoice)

/*
Needs to create validation check that player chose 1 of the 3 options.This would be a for loop? 
cpuChoice starting value = null
Roll a random number, or pick a random value from a string of text?
*/

var words = ["ROCK", "PAPER", "SCISSORS"];
var cpuChoice = words[Math.floor(Math.random() * words.length)];
console.log(cpuChoice); 
    if (playerChoice === cpuChoice)
    {console.log("Player chose " +playerChoice+" and CPU chose "+cpuChoice+". Draw!");}
    else {console.log("IDK")}


/*
Compare values
Create variable for gameResult

if cpuChoice == playerChoice gameResult = tie

if playerChoice = Rock and cpuChoice == Paper, gameResult = lose
if playerChoice = Rock and cpuChoice == Scissors, gameResult = win

if playerChoice = Scissors and cpuChoice = Rock, gameResult = lose
if playerChoice = Scissors and cpuChoice == Paper, gameResult = win

if playerChoice = Paper and cpuChoice = Rock, gameResult = win
if playerChoice = Paper and cpuChoice == Scissors, gameResult = lose

declaration = null
if gameResult = Win, declaration = beats
if gameResult = Lose, declaration = loses to
if gameResult = Tie, declaration = ties with

print("You " & gameResult & playerChoice & declaration & cpuChoice)
*/

