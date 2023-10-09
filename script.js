// Begin with a function called getComputerChoice that will 
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

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

    const playerSelection = getplayerSelection();
    const computerSelection = getComputerChoice();

    return "You Lose! Paper beats Rock"
}

//Make your function’s playerSelection parameter case-insensitive

let getplayerSelection = function () {

    let selection = parseInt(prompt("Please enter your Selection: "));

    let upper = selection.toUpperCase();

    return upper

}


