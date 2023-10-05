// Begin with a function called getComputerChoice that will 
//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

let getComputerChoice = function () {
 
    const randomNumber = Math.floor(Math.random()*3)
    let = option

    switch(randomNumber) {
        case 0:
            ComputerChoice = "ROCK"
            break
        case 1:
            ComputerChoice = "PAPER"
            break
        default:
            ComputerChoice = "SCISSORS"
          
    }

    console.log(ComputerChoice)

}