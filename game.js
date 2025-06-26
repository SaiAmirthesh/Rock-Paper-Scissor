console.log("Game script loaded");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log("Computer choice:", getComputerChoice());

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
    if (choices.includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice! Please try again.");
        return getHumanChoice();
    }
}

console.log("Human choice:", getHumanChoice());

let humanscore = 0;
let computerscore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Human choice: ${humanChoice}, Computer choice: ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanscore++;
        console.log("Human wins this round!");
    } else {
        computerscore++;
        console.log("Computer wins this round!");
    }   
    console.log(`Scores - Human: ${humanscore}, Computer: ${computerscore}`);
    if (humanscore === 3) {
        console.log("Human wins the game!");
    } else if (computerscore === 3) {
        console.log("Computer wins the game!");
    }   
    return { humanscore, computerscore };
}   

function playGame(){
    console.log("Starting the game...");
    humanscore = 0;
    computerscore = 0;
    while (humanscore < 3 && computerscore < 3) {
        console.log("Next round...");   
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

    }
     console.log("Game over! Final scores - Human: " + humanscore + ", Computer: " + computerscore);
   
} 

console.log(playGame());