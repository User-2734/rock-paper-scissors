console.log("Linking Test!")

function getComputerChoice (a, b, c) {
    let z = Math.random()*3

    if (z == 0) {
        return a;
    } else if (z == 1) {
        return b;
    } else if (z == 2) {
        return c;
    }
}

console.log()