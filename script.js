// Begin with a function called getComputerChoice that will 
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
//global variables

let playerScore = 0;
let computerScore = 0;

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
        return "It's a tie!"
    } else if (playerSelection == "ROCK") {
            switch(computerSelection){
                case "PAPER": 
                    computerScore ++;
                    return "You Lose! Paper beats Rock"
                case "SCISSORS":
                    playerScore ++;
                    return "You Win! Rock beats Scissors"
            }   
    } else if (playerSelection == "PAPER") {
            switch(computerSelection){
                case "ROCK":
                    computerScore ++; 
                    return "You Win! Paper beats Rock"
                case "SCISSORS":
                    playerScore ++;
                    return "You Lose! Scissors beats Paper"
            }   
    } else {
            switch(computerSelection){
                case "ROCK":
                    computerScore ++; 
                    return "You Lose! Rock beats Scissors"
                case "PAPER":
                    playerScore ++;
                    return "You Win! Scissors beats Paper"
        }   
    }


}


const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');
const playerScorePara = document.querySelector('#playerScorePara');
const computerScorePara = document.querySelector('#computerScorePara');


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



btnRock.addEventListener('click', function(){
    playOneRound("ROCK",getComputerChoice())
    updateDOM();
});
btnPaper.addEventListener('click', function(){
    playOneRound("PAPER",getComputerChoice())
    updateDOM();
});
btnScissors.addEventListener('click', function(){
    playOneRound("SCISSOR",getComputerChoice())
    updateDOM();
});

let updateDOM = function(){
    document.querySelector('#computerScore').textContent = computerScore;
    document.querySelector('#playerScore').textContent = playerScore;
}


game();


