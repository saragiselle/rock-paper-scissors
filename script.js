// Begin with a function called getComputerChoice that will 
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let getComputerChoice = function () {
 
    const randomNumber = Math.floor(Math.random()*3)


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