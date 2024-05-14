console.log("Linking Test!")

//Computer choice generated via random numbers
function getComputerChoice (a, b, c) {
    let rand = Math.random()*2
    let rand2 = Math.round(rand)

    if (rand2 == 0) {
        return a;
    } else if (rand2 == 1) {
        return b;
    } else if (rand2 == 2) {
        return c;
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
        return "You chose rock!"
    } else if (q == "p") {
        return "You chose paper!"
    } else if (q == "s") {
        return "You chose scissors!"
    }
}

humanScore = 0
computerScore = 0

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "r" && computerChoice == 0) || (humanChoice == "p" && computerChoice == 1) || (humanChoice == "s" && computerChoice == 2)) {
        return "You both tied!"
    }

    
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice(a, b, c)

playRound(humanSelection, computerSelection)

