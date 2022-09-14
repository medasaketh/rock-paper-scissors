const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');

let playerSelects;
let computerSelects;
let result;

const buttons = document.querySelectorAll('.option');

buttons.forEach((option) => {
    option.addEventListener("click", () => {
        playerSelects =option.textContent;
        computerSelects = getComputerChoice();

        playerText.textContent = `Player : ${playerSelects}`;
        computerText.textContent = `Computer : ${computerSelects}`;
        resultText.textContent = playRound(playerSelects,computerSelects);
    })
})


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return 'ROCK';
    }
    else if(choice === 1){
        return 'PAPER'; 
    }
    else{
        return 'SCISSORS';
    }
}

function playRound(playerSelects,computerSelects){

    if(playerSelects === computerSelects){
        return 'Draw!';
    }

    if (playerSelects === "ROCK") {
        if (computerSelects === "SCISSORS") {
            return 'player wins';
        } else {
          return 'Computer Wins';
        }
    }

    else if (playerSelects === "PAPER") {
        if (computerSelects === "ROCK") {
            return 'player wins';
        } else {
          return 'Computer Wins';
        }
    }
    
    else if (playerSelects === "SCISSORS") {
        if (computerSelects === "PAPER") {
            return 'player wins';
        } else {
          return 'Computer Wins';
        }
    }
    
}