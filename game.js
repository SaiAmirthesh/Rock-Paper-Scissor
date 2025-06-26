const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
const choiceBtns = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset');

let playerScore = 0;
let computerScore = 0;
const winningScore = 5; 


choiceBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (playerScore === winningScore || computerScore === winningScore) {
            return;
        }
        
        const playerChoice = button.id;
        playRound(playerChoice);
    });
});

resetBtn.addEventListener('click', resetGame);


function playRound(playerChoice) {
    
    const selectedBtn = document.getElementById(playerChoice);
    selectedBtn.classList.add('choice-selected');
    setTimeout(() => {
        selectedBtn.classList.remove('choice-selected');
    }, 500);
    
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    
    updateScore(winner);
    displayResult(winner, playerChoice, computerChoice);
    
    if (playerScore === winningScore || computerScore === winningScore) {
        endGame();
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) return 'draw';
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreEl.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
    }
}

function displayResult(winner, playerChoice, computerChoice) {
    const choices = {
        rock: '✊ Rock',
        paper: '✋ Paper',
        scissors: '✌️ Scissors'
    };
    
    if (winner === 'draw') {
        resultEl.textContent = `It's a draw! Both chose ${choices[playerChoice]}`;
        resultEl.style.color = '#f39c12';
    } else if (winner === 'player') {
        resultEl.textContent = `You win! ${choices[playerChoice]} beats ${choices[computerChoice]}`;
        resultEl.style.color = '#27ae60';
    } else {
        resultEl.textContent = `You lose! ${choices[computerChoice]} beats ${choices[playerChoice]}`;
        resultEl.style.color = '#e74c3c';
    }
}

function endGame() {
    if (playerScore === winningScore) {
        resultEl.textContent = `You won the match ${playerScore}-${computerScore}! Game will reset.`;
        resultEl.style.color = '#27ae60';
    } else {
        resultEl.textContent = `You lost the match ${playerScore}-${computerScore}! Game will reset.`;
        resultEl.style.color = '#e74c3c';
    }
    
    
    choiceBtns.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.6';
    });
    
    setTimeout(resetGame, 3000);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    resultEl.textContent = 'Choose your weapon!';
    resultEl.style.color = '#333';
  
    choiceBtns.forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
    });
}