

let choices = ['rock','paper','scissors'];

function getComputerChoice(){
    let random = choices[Math.floor((Math.random()*choices.length))]
                 console.log(random)
  return random; 

}




function checkWinner(playerSelection,computerSelection){
if(playerSelection == 'rock' && computerSelection === 'paper'){
  return 'computer'
} else if(playerSelection == 'paper' && computerSelection === 'rock'){
  return 'player'
}else if(playerSelection == 'scissors' && computerSelection === 'paper'){
  return 'player'
}else if(playerSelection =='paper' && computerSelection === 'scissors'){
  return 'computer'
}else if(playerSelection == 'scissors' && computerSelection === 'rock'){
  return 'computer'
}else if(playerSelection == 'rock' && computerSelection === 'scissors'){
  return 'player'
} else {
  return 'draw'
}

}

function playRound(playerSelection,computerSelection){

const result = checkWinner(playerSelection,computerSelection);
if(result == 'draw'){
  return "It's a Tie!"
} 
  else if(result == 'player'){
    return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
  } else {
    return 'You Lose! ' + computerSelection + ' beats ' + playerSelection; 
  }

}

function playerChoice(){
let validatedInput = false;
while(validatedInput == false){
  const choice = prompt("Rock Paper Scissors");
  if(choice == null){
    continue;
  }
  const choiceInLower = choice.toLocaleLowerCase();
if(choices.includes(choiceInLower)){
  validatedInput = true;
  return choiceInLower;
}
 }

}




function game(){
  let playerScore = 0;
  let computerScore = 0; 
  console.log('Hello Human')
  for(let i = 0 ; i < 5; i++){
 const playerSelection = playerChoice();

const computerSelection = getComputerChoice()
 console.log(playRound(playerSelection,computerSelection));
      if(checkWinner(playerSelection,computerSelection)=='player'){
        playerScore++;
      } else if(checkWinner(playerSelection,computerSelection)=='computer'){
        computerScore++
      }
  }
  console.log("Game Over");
  if(playerScore > computerScore){
    console.log('Player is the winner');

  } else if (playerScore < computerScore){
    console.log('Computer is the winner!')
  } else {
     console.log("We have a tie!")
  }
}






game()









