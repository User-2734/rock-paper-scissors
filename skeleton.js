//Global variables; first set is for rand num choice to translate to options, other set to keep track of user score
let computerScore = 0
let playerScore = 0

// function to convert a user input to either rock, paper, or scissors.
function parsePlayerChoice(choice) {
    if (choice == "r" || choice == "rock") {
        return "rock";
    } else if (choice == "p" || choice == "paper") {
        return "paper";
    } else if (choice == "s" || choice == "scissors") {
        return "scissors";
    } else {
        throw new Error(`User made invalid choice "${choice}"`);
    }
}

//Function for user choice
function getPlayerChoice() {
    let playerChoice = prompt("Let's Play! Type rock, paper, or scissors.");
    return parsePlayerChoice(playerChoice);
}

//Computer choice generated via random numbers
function getComputerChoice() {
    let rand = Math.random() * 2
    let rand2 = Math.round(rand)

    if (rand2 == 0) {
        return "rock";
    } else if (rand2 == 1) {
        return "paper";
    } else if (rand2 == 2) {
        return "scissors";
    } else {
        throw new Error("Computer failed to make a choice");
    }
}

// converts a choice to an integer in the range [0, 2]
function choiceToNum(choice) {
    let num = ["scissors", "paper", "rock"].indexOf(choice);
    // catch an invalid choice
    if (num == -1) {
        throw new Error(`Invalid choice: "${choice}"`)
    }
    return num;
}

function wrap(n) {
    if (n < 0) {
        n += 3;
    } else if (n > 2) {
        n %= 3;
    }
    return n;
}

function numToResult(num) {
    if (num < 0 || num > 2) {
        throw new Error(`Invalid num for result ${num}`)
    }
    return ["tie", "computer", "player"][num];
}

// Decides who won/lost
function scoreRound(playerChoice, computerChoice) {
    playerChoice = choiceToNum(playerChoice);
    computerChoice = choiceToNum(computerChoice);

    let result = wrap(playerChoice - computerChoice);
    return numToResult(result);
}

// increments score based of who won
function incrementScore(winner) {
    if (winner == "tie") {
        // do nothing
    } else if (winner == "player") {
        playerScore += 1;
    } else if (winner == "computer") {
        computerScore += 1;
    }
}

// plays a round
function playRound() {
    let playerChoice = getPlayerChoice();
    alert(`You chose ${playerChoice}`);
    let computerChoice = getComputerChoice();
    alert(`Computer chose ${computerChoice}`);
    let winner = scoreRound(playerChoice, computerChoice);
    if (winner == "tie") {
        alert("You tied!");
    } else {
        alert(`${winner} won!`)
    }
    incrementScore(winner);
}

//For-loop to ensure that game has an end
for (let i = 0; i < 3; i++) {
    //Displays all this info for the user's need
    playRound()
}

//Confirms who won the game in the console
if (playerScore > computerScore) {
    alert("Congrats! You won the game");
} else {
    alert("Computer won the game!");
} 