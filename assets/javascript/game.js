var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var Wins = 0;
var Losses = 0;
var numGuesses = 9;
var guessChoice = [];
let computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
document.onkeyup = function(event) {
    if(computerGuess == ''){
       return computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    } 
    var userGuess = event.key;
   
    var options = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    if (options.indexOf(userGuess) > - 1 ) {
        console.log(computerGuess)
        if(numGuesses != 0){

            if (userGuess === computerGuess) {
                Wins++;
                numGuesses = 9;
                guessChoice = [];
            } else {
                numGuesses--;
                guessChoice.push(userGuess);
            }
        } else if (numGuesses == 0 && userGuess === computerGuess){
            
                Wins++;
                numGuesses = 9;
                guessChoice = [];
                computerGuess = ''
        }else {
            Losses++;
            numGuesses = 9;
            guessChoice = [];
            computerGuess = ''
        }
            
            
                
            }

        var html =
        
            "<h1>The Psychic Game</h1>" +
            "<p>Guess What Letter I Am Thinking Of</p>" +
            "<p>Wins: " + Wins + "</p>" +
            "<p>Losses: " + Losses +"</p>" +
            "<p>Guess Left:" + numGuesses + "</p>" +
            "<p>Your Guesses So Far: " + guessChoice.join(", ") + "</p>";

            document.querySelector("#game").innerHTML = html;

    
};
    
