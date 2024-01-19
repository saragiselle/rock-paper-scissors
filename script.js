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
        roundWinner = "tie!"
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


let updateDOM = function(){
    document.querySelector('#computerScore').textContent = computerScore;
    document.querySelector('#playerScore').textContent = playerScore;
}



const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const playerScorePara = document.querySelector('#playerScore');
const computerScorePara = document.querySelector('#computerScore');
const scoreInfo = document.querySelector('#scoreInfo');
const scoreMessage = document.querySelector('#scoreMessage');


let game = function() {

    const PlayerSelection = getPlayerSelection();
    console.log("You chose " + PlayerSelection);
    const ComputerSelection = getComputerChoice();
    console.log("The computer choses " + ComputerSelection);
    console.log(playOneRound(PlayerSelection,ComputerSelection));
  

    if (playerScore > computerScore ) {
        console.log("Congratulation, you win");
    } else {
        console.log("Sorry, you lose :(");
    }
}



btnRock.addEventListener('click',()=> handleClick('ROCK'));
btnPaper.addEventListener('click',()=> handleClick('PAPER'));
btnScissors.addEventListener('click',()=> handleClick('SCISSORS'));

function handleClick(playerSelection) {
    if (isGameOver()) {
        return
    }
}


game();


