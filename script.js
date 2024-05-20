// Game constants
const BOARD_SIZE = 10;
const PLAYER_1 = 1;
const PLAYER_2 = 2;

// Game variables
let currentPlayer = PLAYER_1;
let player1Score = 0;
let player2Score = 0;
let player1Lives = 3;
let player2Lives = 3;
let highestScore = localStorage.getItem('highestScore') || 0;
let highestScorer = localStorage.getItem('highestScorer') || '';
let gameEnded = false;

// DOM elements
const gameBoardElement = document.getElementById('game-board');
const player1ScoreElement = document.getElementById('player1-score');
const player2ScoreElement = document.getElementById('player2-score');
const player1LivesElement = document.getElementById('player1-lives');
const player2LivesElement = document.getElementById('player2-lives');
const restartButton = document.getElementById('restart-btn');
const leaderboard = document.getElementById('leaderboard');
const highestScoreElement = document.getElementById('highest-score');

// Generate random fielder positions
function generateRandomFielders() {
  const fielders = [];

  while (fielders.length < 11) {
    const row = Math.floor(Math.random() * BOARD_SIZE);
    const col = Math.floor(Math.random() * BOARD_SIZE);
    const fielder = { row, col };

    if (!fielders.some(f => f.row === row && f.col === col)) {
      fielders.push(fielder);
    }
  }

  return fielders;
}

// Render game board
function renderBoard() {
  gameBoardElement.innerHTML = '';

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.dataset.row = row;
      block.dataset.col = col;
      gameBoardElement.appendChild(block);
    }
  }

  const fielders = generateRandomFielders();
  for (let fielder of fielders) {
    const block = gameBoardElement.querySelector(`[data-row="${fielder.row}"][data-col="${fielder.col}"]`);
    block.classList.add('fielder');
  }
}

// Handle block click event
function handleBlockClick(event) {
  if (gameEnded) {
    return;
  }

  let block = event.target;

  if (!block.classList.contains('block-clicked')) {
    if (block.classList.contains('fielder')) {
      if (currentPlayer === PLAYER_1) {
        if (player1Lives > 0) {
          block.classList.add('block-clicked', 'fielder-selected');
          decrementLives(currentPlayer);
          player1LivesElement.textContent = `Lives: ${player1Lives}`;
        }
      } else {
        if (player2Lives > 0) {
          block.classList.add('block-clicked', 'fielder-selected');
          decrementLives(currentPlayer);
          player2LivesElement.textContent = `Lives: ${player2Lives}`;
        }
      }
    } else {
      if (currentPlayer === PLAYER_1 && player1Lives > 0) {
        block.classList.add('block-clicked', `player${currentPlayer}-selected`);
        let run = getRandomRun();
        block.classList.add(`run${run}`);
        incrementScore(currentPlayer, run);
      } else if (currentPlayer === PLAYER_2 && player2Lives > 0) {
        block.classList.add('block-clicked', `player${currentPlayer}-selected`);
        let run = getRandomRun();
        block.classList.add(`run${run}`);
        incrementScore(currentPlayer, run);
      }
    }

    checkGameEnd();
    switchPlayer();
  }
}
// Increment player score
function incrementScore(player, run) {
  if (player === PLAYER_1) {
    player1Score += run;
    player1ScoreElement.textContent = `Player 1 Score: ${player1Score}`;
    if (player1Score > highestScore) {
      highestScore = player1Score;
      highestScorer = 'Player 1';
      highestScoreElement.textContent = `Highest Score: ${highestScore} by ${highestScorer}`;
      localStorage.setItem('highestScore', highestScore);
      localStorage.setItem('highestScorer', highestScorer);
    }
  } else {
    player2Score += run;
    player2ScoreElement.textContent = `Player 2 Score: ${player2Score}`;
    if (player2Score > highestScore) {
      highestScore = player2Score;
      highestScorer = 'Player 2';
      highestScoreElement.textContent = `Highest Score: ${highestScore} by ${highestScorer}`;
      localStorage.setItem('highestScore', highestScore);
      localStorage.setItem('highestScorer', highestScorer);
    }
  }
}

// Decrement player lives
function decrementLives(player) {
  if (player === PLAYER_1) {
    player1Lives--;
  } else {
    player2Lives--;
  }
}

// Switch player turn
function switchPlayer() {
  currentPlayer = currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1;
}

// Check game end conditions
function checkGameEnd() {
  if (player1Lives === 0 && player2Lives === 0) {
    endGame();
  }
}

// End the game
function endGame() {
  gameEnded = true;

  for (let block of gameBoardElement.querySelectorAll('.block')) {
    block.removeEventListener('click', handleBlockClick);
  }

  if (player1Score > player2Score) {
    leaderboard.textContent = 'Player 1 Wins!';
  } else if (player2Score > player1Score) {
    leaderboard.textContent = 'Player 2 Wins!';
  } else {
    leaderboard.textContent = 'It\'s a Tie!';
  }
}

// Restart the game
function restartGame() {
  gameEnded = false;
  currentPlayer = PLAYER_1;
  player1Score = 0;
  player2Score = 0;
  player1Lives = 3;
  player2Lives = 3;
  player1ScoreElement.textContent = 'Player 1 Score: 0';
  player2ScoreElement.textContent = 'Player 2 Score: 0';
  player1LivesElement.textContent = 'Lives: 3';
  player2LivesElement.textContent = 'Lives: 3';
  leaderboard.textContent = '';
  renderBoard();
}

// Utility function to get random run (1, 4, or 6)
function getRandomRun() {
  const runs = [1, 4, 6];
  return runs[Math.floor(Math.random() * runs.length)];
}

// Initialize the game
function init() {
  renderBoard();
  player1ScoreElement.textContent = `Player 1 Score: ${player1Score}`;
  player2ScoreElement.textContent = `Player 2 Score: ${player2Score}`;
  player1LivesElement.textContent = `Lives: ${player1Lives}`;
  player2LivesElement.textContent = `Lives: ${player2Lives}`;
  highestScoreElement.textContent = `Highest Score: ${highestScore} by ${highestScorer}`;
  gameBoardElement.addEventListener('click', handleBlockClick);
  restartButton.addEventListener('click', restartGame);
}

// Start the game
init();
