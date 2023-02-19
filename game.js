/* 
playerChoice starting value = null (must be string)
*/
let playerChoice = prompt("Type you choice of Rock, Paper, or Scissors.")
console.log(playerChoice)
/*

Create a text prompt asking for playerChoice
Make the player hoice all UpperCase()
Assign that choice to playerChoice
cpuChoice starting value = null
*/
var words = ["ROCK", "PAPER", "SCISSORS"];
var word = words[Math.floor(Math.random() * words.length)];
console.log(word); 
/*
Roll a random number, or pick a random value from a string of text?
Make the computer choice upper case, assign to cpuChoice
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

