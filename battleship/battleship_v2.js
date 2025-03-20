console.log ("Battleship");

//Declaring
var randomLoc = Math.floor(Math.random() * 5);

var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

var isSunk = false;

//Game Logic
    
while (isSunk == false) {
    guess = prompt("Ready? Aim FIRE! 🔥 (Enter number 0 to 6): ");

        if (guess == null) {
            alert("Thank you for playing!");
            break;
        }

         if (guess < 0 || guess > 6 ) {
         alert ("Please enter a valid number")

    } else { 
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Hit!')
            hits++;

            if (hits == 3) {
                isSunk = true;
                alert ("You sank all the Battleship!! 😭 ")
            }
        } else {
            alert ('Miss!')
        }
    }
}

var accuracy = (guesses > 0 ?(hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took " + guesses + " gueses to sink the battleship!" + "\n" + "Accuracy:" + accuracy + "%";

alert(stats);