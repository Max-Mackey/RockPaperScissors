/* 
playerChoice starting value = null (must be string)
Create a text prompt asking for playerChoice
Make the player hoice all UpperCase()
Assign that choice to playerChoice
*/
let playerChoice = prompt("Type you choice of Rock, Paper, or Scissors.")
playerChoice = playerChoice.toUpperCase()
/*
Needs to create validation check that player chose 1 of the 3 options.This would be a for loop? 
cpuChoice starting value = null
Roll a random number, or pick a random value from a string of text?
*/

/*Creates an array for var to populate from based on random number
*/
var words = ["ROCK", "PAPER", "SCISSORS"];
var cpuChoice = words[Math.floor(Math.random() * words.length)];
    if (playerChoice === cpuChoice)
    {console.log("Player chose " +playerChoice+" and CPU chose "+cpuChoice+". Draw!");}
        else if (
            (cpuChoice == "ROCK" && playerChoice == "SCISSORS") ||
            (cpuChoice == "SCISSORS" && playerChoice == "PAPER")||
            (cpuChoice == "PAPER" && playerChoice == "ROCK")
        ) 
        {console.log("Player chose " +playerChoice+" and CPU chose "+cpuChoice+". YOU LOSE :(");}
            else if (
                (playerChoice == "ROCK" && cpuChoice == "SCISSORS") ||
                (playerChoice == "SCISSORS" && cpuChoice == "PAPER")||
                (playerChoice == "PAPER" && cpuChoice == "ROCK")
            )
            {console.log("Player chose " +playerChoice+" and CPU chose "+cpuChoice+". !!!!YOU WIN!!!!");}

