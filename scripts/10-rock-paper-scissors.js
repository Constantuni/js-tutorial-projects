let score = JSON.parse(localStorage.getItem('score')) ||{
  wins: 0,
  losses: 0,
  ties: 0
}

document.querySelector('.js-score-p').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

/* default value
if(!score){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}*/

/*console.log(JSON.parse(localStorage.getItem('score')));*/
function updateScoreParagraph(){
  document.querySelector('.js-score-p').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function pickComputerMove(){
  const randomNumber = (Math.random())*3;
  let computerMoveTemp = '';
  if(randomNumber >= 0 && randomNumber < 1){
    computerMoveTemp = 'Rock';
  } else if(randomNumber >= 1 && randomNumber < 2){
    computerMoveTemp = 'Paper';
  } else{
    computerMoveTemp = 'Scissors';
  }
  return computerMoveTemp;
}

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'Scissors'){
    if(computerMove === 'Paper'){
      result = 'You win';
    } else if(computerMove === 'Rock'){
      result = 'You lose';
    } else{
      result = 'Tie';
    }

  } else if(playerMove === 'Paper'){
      if(computerMove === 'Rock'){
        result = 'You win';
      } else if(computerMove === 'Scissors'){
        result = 'You lose';
      } else{
        result = 'Tie';
      }

  } else if(playerMove === 'Rock'){
      if(computerMove === 'Rock'){
        result = 'Tie';
      } else if (computerMove === 'Paper'){
        result = 'You lose';
      } else{
        result = 'You win';
      }        
  }

  if(result === 'You win'){score.wins++;}
  else if(result === 'You lose'){score.losses++;}
  else{score.ties++}
  const winRate = Math.floor((score.wins/(score.wins + score.losses + score.ties))*100);

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreParagraph();
  document.querySelector('.js-moves-p').innerHTML = `${result}! You <img class="move-icon" src="images/${playerMove}-emoji.png"> vs <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;

  console.log(`${result}: You--> ${playerMove}! vs ${computerMove}! <--Computer\nWinRate: ${winRate}% Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`);
}