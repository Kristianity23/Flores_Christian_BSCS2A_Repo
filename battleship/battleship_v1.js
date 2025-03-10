console.log ("Battleship");
//Declaring
var location1 = 4;
var location2 = 5;
var location3 = 6;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false

//Game Logic
    
while (isSunk == false) {
    guess = Number(prompt ("Ready? and FIRE! 🔥 (Enter number 0 to 6)"));

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

var stats = "You sunk my Battleship at" + guesses + "gueses" + "and you accuracy is" + (3/guesses);

alert(stats);