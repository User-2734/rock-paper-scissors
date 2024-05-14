//Global variables; first set is for rand num choice to translate to options, other set to keep track of user score
var compChoice = ""
var userChoice = ""
let compScore = 0
let userScore = 0


//Outputs for getComputerChoice to return
var a = "rock"
var b = "paper"
var c = "scissors"

//For-loop to ensure that game has an end
for (let i = 0; i < 4; i++) {

//Function for user choice
function getHumanChoice () {
    let q = prompt("Let's Play!")

    if (q == "r") {
        userChoice = "rock"
        return "You chose rock!"
    } else if (q == "p") {
        userChoice = "paper"
        return "You chose paper!"
    } else if (q == "s") {
        userChoice = "scissors"
        return "You chose scissors!"
    }
}

//Computer choice generated via random numbers
function getComputerChoice (a, b, c) {
    let rand = Math.random()*2
    let rand2 = Math.round(rand)

    if (rand2 == 0) {
        compChoice = "rock"
        return "Computer chose: " + a;
    } else if (rand2 == 1) {
        compChoice = "paper"
        return "Computer chose: " + b;
    } else if (rand2 == 2) {
        compChoice = "scissors"
        return "Computer chose: " + c;
    }
}

//Decides who won/lost and increments score based of that info
function playRound () {
    if ((userChoice == "rock" && compChoice == "rock") || (userChoice == "paper" && compChoice == "paper") || (userChoice == "scissors" && compChoice == "scissors")) {
        return "you tied"
    }

    if ((userChoice == "rock" && compChoice == "scissors") || (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissors" && compChoice == "paper")) {
        userScore++
        return "you won"
    }

    if ((userChoice == "rock" && compChoice == "paper") || (userChoice == "paper" && compChoice == "scissors") || (userChoice == "scissors" && compChoice == "rock")) {
        compScore++
        return "comp won"
    }
}

//Displays all this info for the user's need
console.log(getHumanChoice())
console.log(getComputerChoice(a, b, c))
console.log(playRound())
console.log("comp score: " + compScore)
console.log("user score: " + userScore)
}

//Confirms who won the game in the console
if (userScore > compScore) {
    console.log("Congrats! You won the game")
} else if (userScore < compScore) {
    console.log("Computer won the game!")
}