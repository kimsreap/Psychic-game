var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var Wins = 0;
var Losses = 0;
var numGuesses = 9;
var guessChoice = [];

document.onkeyup = function(event) {
    var userGuess = event.key;
    var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    var options = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if (options.indexOf(userGuess) > - 1 ) {
            if (userGuess === computerGuess) {
                Wins++;
                numGuesses = 9;
                guessChoice = [];
            }
            
            if(userGuess != computerGuess) {
                numGuesses--;
                guessChoice.push(userGuess);
            }

            if (userGuess === 0) {
                Losses++;
                numGuesses = 9;
                guessChoice = [];
            }

        var html =
        
            "<h1>The Psychic Game</h1>" +
            "<p>Guess What Letter I Am Thinking Of</p>" +
            "<p>Wins: " + Wins + "</p>" +
            "<p>Losses: " + Losses +"</p>" +
            "<p>Guess Left:" + numGuesses + "</p>" +
            "<p>Your Guesses So Far: " + guessChoice.join(", ") + "</p>";

            document.querySelector("#game").innerHTML = html;

    }
};
    
