let compScore = 0;
let playerScore = 0; 
let rockButton = document.querySelector('.rock')
let paperButton = document.querySelector('.paper')
let scissorsButton = document.querySelector('.scissors')
let outcomeDiv = document.querySelector('.outcome')
let roundOutcome = document.querySelector('.round-outcome')
let playerScoreSpan = document.querySelector('.player-score');
let computerScoreSpan = document.querySelector('.computer-score');
let gameWinner = document.querySelector('.game-winner');
let resetGame = document.querySelector('.reset')
let container = document.querySelector('.container')

function refresh(){
  window.location.reload()
}



function getComputerChoice(){
let choices = ['rock','paper','scissors'];
    let random = choices[Math.floor((Math.random()*choices.length))]
               
  return random; 

}
const computerSelection = getComputerChoice()


const playRound = (playerSelection,computerSelection) =>{
if(playerSelection == computerSelection){
  // const p = document.createElement('p');
  roundOutcome.innerText = `You tied! You both picked ${playerSelection}`;
  // outcomeDiv.appendChild(p);
}  
  else if (((playerSelection === 'rock') && (computerSelection === 'scissors')) || 
((playerSelection ==='paper') && (computerSelection === 'rock')) ||
((playerSelection === 'scissors') && (computerSelection === 'paper'))){
    // const p = document.createElement('p');
    playerScore++
    roundOutcome.innerText = `You win! the round ${playerSelection} beats ${computerSelection}`
    // outcomeDiv.appendChild(p);
  } 
    else if(((computerSelection === 'rock') && (playerSelection === 'scissors')) || 
    ((computerSelection ==='paper') && (playerSelection === 'rock')) ||
    ((computerSelection === 'scissors') && (playerSelection === 'paper'))){
    // const p = document.createElement('p');
    compScore++
    roundOutcome.innerText = `You lose! ${computerSelection} beats ${playerSelection}`
    // outcomeDiv.appendChild(p);
  }


}

document.getElementById('btn').style.display ='none'
const checkForWinner = (playerScore,compScore) => {

  if (playerScore === 5 ) {
  
     gameWinner.innerText = `You won great job on beating the computer`
     document.getElementById('btn').style.display ='flex'
     document.querySelector('.container').style.display ='none'
     roundOutcome.style.display='none'
     document.querySelector('.running-score').style.display='none'
  } 
  else if (compScore === 5){
 
    gameWinner.innerText = `Sorry you lost please try again!`;
    document.getElementById('btn').style.display ='flex'
    document.querySelector('.container').style.display ='none'
    roundOutcome.style.display='none'
    document.querySelector('.running-score').style.display='none'
  }
 

}


const updateScores = (playerScore,compScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${compScore}`
}


rockButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'rock';
  playRound(playerSelection,computerSelection);
  updateScores(playerScore,compScore)

checkForWinner(playerScore,compScore)

});

paperButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'paper';
  playRound(playerSelection,computerSelection)

  updateScores(playerScore,compScore)
  checkForWinner(playerScore,compScore)
  
});


scissorsButton.addEventListener('click', () => {
  const computerSelection = getComputerChoice();
  const playerSelection = 'scissors';
  playRound(playerSelection,computerSelection)
  updateScores(playerScore,compScore)

  checkForWinner(playerScore,compScore)
});
