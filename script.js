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

    if (playerSelection==computerSelection) {
        return "It's a tie!"
    } else if (playerSelection == "ROCK") {
            switch(computerSelection){
                case "PAPER": 
                    return "You Lose! Paper beats Rock"
                case "SCISSORS":
                    return "You Win! Rock beats Scissors"
            }   
    } else if (playerSelection == "PAPER") {
            switch(computerSelection){
                case "ROCK": 
                    return "You Win! Paper beats Rock"
                case "SCISSORS":
                    return "You Lose! Scissors beats Paper"
            }   
    } else {
            switch(computerSelection){
                case "ROCK": 
                    return "You Lose! Rock beats Scissors"
                case "PAPER":
                    return "You Lose! Scissors beats Paper"
        }   
    }

}

//Make your function’s playerSelection parameter case-insensitive

let getPlayerSelection = function () {

    let choice = prompt("Please enter your Choice: ");

    let upper = choice.toUpperCase();

    console

    return upper

}


    const PlayerSelection = getPlayerSelection();
    console.log("Elegiste " + PlayerSelection);
    const ComputerSelection = getComputerChoice();
    console.log("La computadora eligió" + PlayerSelection);
    console.log(playOneRound(PlayerSelection,ComputerSelection))