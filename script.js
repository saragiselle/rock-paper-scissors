// Begin with a function called getComputerChoice that will 
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
//global variables

let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

let getComputerChoice = function () {
 
    const randomNumber = Math.floor(Math.random()*3);

    switch(randomNumber) {
        case 0:
            return "ROCK"
            break
        case 1:
            return "PAPER"
            break
        default:
            return "SCISSORS"
          
    }
}

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters 

let playOneRound = function (playerSelection,computerSelection) {

    if (playerSelection==computerSelection) {
        roundWinner = "tie"
    } else if (playerSelection == "ROCK") {
            switch(computerSelection){
                case "PAPER": 
                    computerScore ++;
                    roundWinner = "computer"
                case "SCISSORS":
                    playerScore ++;
                    roundWinner = "player"
            }   
    } else if (playerSelection == "PAPER") {
            switch(computerSelection){
                case "ROCK":
                    computerScore ++; 
                    roundWinner = "player"
                case "SCISSORS":
                    playerScore ++;
                    roundWinner = "computer"
            }   
    } else {
            switch(computerSelection){
                case "ROCK":
                    computerScore ++; 
                    roundWinner = "computer"
                case "PAPER":
                    playerScore ++;
                    roundWinner = "player"
        }   
    }

    updateMessageDOM(roundWinner, playerScore, computerSelection)

}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}



const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const playerScorePara = document.querySelector('#playerScore');
const computerScorePara = document.querySelector('#computerScore');
const scoreInfo = document.querySelector('#scoreInfo');
const scoreMessage = document.querySelector('#scoreMessage');




btnRock.addEventListener('click',()=> handleClick('ROCK'));
btnPaper.addEventListener('click',()=> handleClick('PAPER'));
btnScissors.addEventListener('click',()=> handleClick('SCISSORS'));

function handleClick(playerSelection) {
  
    if (isGameOver()) {
        return
    }

    const computerSelection = getComputerChoice();
    playOneRound(playerSelection, computerSelection);
    updateScore();

    if (isGameOver()) {
        return
    }

}



function updateScore() {

        if (roundWinner === 'tie') {
          scoreInfo.textContent = "It's a tie!"
        } else if (roundWinner === 'player') {
          scoreInfo.textContent = 'You won!'
        } else if (roundWinner === 'computer') {
          scoreInfo.textContent = 'You lost!'
        }
      
        playerScorePara.textContent = `Player: ${playerScore}`
        computerScorePara.textContent = `Computer: ${computerScore}`
    }

    
function updateMessageDOM(roundWinner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = 
        `${capitalizeFirstLetter(playerSelection)}
        beats 
        ${computerSelection.toLowerCase()}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = 
        `${capitalizeFirstLetter(playerSelection)}
        is beaten by 
        ${computerSelection.toLowerCase()}`
        return
    }
    scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
    )} ties with ${computerSelection.toLowerCase()}`

}


game();


