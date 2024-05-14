console.log("Linking Test!")

var compChoice = ""
var userChoice = ""

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

//Outputs for getComputerChoice to return
var a = "rock"
var b = "paper"
var c = "scissors"

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

function testr () {
    if ((userChoice == "rock" && compChoice == "rock") || (userChoice == "paper" && compChoice == "paper") || (userChoice == "scissors" && compChoice == "scissors")) {
        return "you tied"
    }

    if ((userChoice == "rock" && compChoice == "scissors") || (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissors" && compChoice == "paper")) {
        return "you won"
    }

    if ((userChoice == "rock" && compChoice == "paper") || (userChoice == "paper" && compChoice == "scissors") || (userChoice == "scissors" && compChoice == "rock")) {
        return "comp won"
    }
}

console.log(getComputerChoice(a, b, c))
console.log(getHumanChoice())
console.log(testr())

