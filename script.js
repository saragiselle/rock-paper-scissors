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

//Make your function’s playerSelection parameter case-insensitive

let getPlayerSelection = function () {

    let choice = prompt("Please enter your Choice: ");

    let upper = choice.toUpperCase();

    return upper

}

/*let game = function() {


    for (let i = 0; i < 5 ; i++){
        
        const PlayerSelection = getPlayerSelection();
        console.log("You chose " + PlayerSelection);
        const ComputerSelection = getComputerChoice();
        console.log("The computer choses " + ComputerSelection);
        console.log(playOneRound(PlayerSelection,ComputerSelection));

    }

    if (playerScore > computerScore ) {
        console.log("Congratulation, you win");
    } else {
        console.log("Sorry, you lose :(");
    }
}
*/

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener('click', playOneRound);
btnPaper.addEventListener('click', playOneRound);
btnScissors.addEventListener('click', playOneRound);



game();


