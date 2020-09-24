let ppInput = process.argv.slice(2);
let scheisetorial = parseInt(ppInput);
let dongtorial = scheisetorial;
let scheise;

function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

let strtorial = dongtorial;
tentoString(lobotorial);
let added = scheisetorial;

while (added !== 0) {
    if (added === 1) {
        console.log(lobotorial);
    }
    else {
        console.log(lobotorial + "!");
    }
    added--;
    lobotorial += "*";
    lobotorial += added;
}

console.log("Faktoriál " + "je: " + factorial(scheisetorial));