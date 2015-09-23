
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
    // if move has a value, input value on line below
    //move='rock';
    return move||getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move||randomPlay();
}

var winner;
var playerMove;
var computerMove;
function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove){
winner= 'tie';
console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
 return winner;
}
else if (playerMove === "scissors" && computerMove === "paper"){
    winner='player';
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   return winner;
}
else if (playerMove === "paper" && computerMove === "rock"){
    winner='player';
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   return winner;
}
else if (playerMove === "rock" && computerMove === "scissors"){
  winner='player';
   console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   return winner;
}
else if (computerMove === "scissors" && playerMove === "paper"){
    winner='computer';
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   return winner;
}
else if (computerMove === "paper" && playerMove === "rock"){
    winner='computer';
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   return winner;
}
else if (computerMove === "rock" && playerMove === "scissors"){
  winner='computer';
  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
   return winner;
}
else 
winner = 'invalid entry';
alert ("Invalid entry, please enter rock, paper or scissors");
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    //console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  while (playerWins <=5 || computerWins <=5){
      getWinner(getPlayerMove(),getComputerMove());
  if (winner === 'player'){
      playerWins++;
    console.log('The score is currently' + ' ' + playerWins + ' to ' + computerWins + '\n');
  }
  else if (winner === 'computer'){
      computerWins++;
    console.log('The score is currently' + ' ' + playerWins + ' to ' + computerWins + '\n');
  }
  else if (winner === 'tie'){
      playerWins+=0;
      computerWins+=0;
    console.log('The score is currently' + ' ' + playerWins + ' to ' + computerWins + '\n');
  }
  else {
      playerWins+=0;
      computerWins+=0;
  }
    if (playerWins === 5){
        console.log('Player Wins!');
    return [playerWins, computerWins];
}
else if (computerWins === 5){
        console.log('Computer Wins!');
        return [playerWins, computerWins];
}
}
}

playToFive();






















