let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * 9)
};

function compareGuesses(userGuess, computerGuess, secretTarget) {
 return Math.abs(userGuess - secretTarget);
 return Math.abs(computerGuess - secretTarget);
 computerGuess > userGuess ? true : false;
};

function updateScore(winner) {
  if (winner === 'human') {
    humanScore += 1
  } else if (winner === 'computer') {
    computerScore += 1
  }
};

function advanceRound() {
  currentRoundNumber += 1;
};