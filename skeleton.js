console.log("Linking Test!")

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

var a = "rock"
var b = "paper"
var c = "scissors"

function getHumanChoice () {
    
}

console.log(getComputerChoice(a, b, c))

