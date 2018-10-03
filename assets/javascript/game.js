// Creating variabless to hold stats
var guessesRemaining = 12;
var wins = 0;
var losses = 0;
var pastGuesses = "";
var computerWord = ["Eiffel Tower", "Taj Mahal", "Leaning tower of Piza", "Trevi Fountain", "Grand Canyon"];


// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerWordText = document.getElementById("computerword-text");
var guessesRemainingText  = document.getElementById("guessesRemaining-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var pastGuessesText = document.getElementById("pastGuesses-text");
var chosenWordText = document.getElementById("chosenWord-text");
var hiddenWordText = document.getElementById("hiddenWord-text");



// This function is run whenever the user presses a key.
document.onkeyup = event => {

var userGuess = event.key;
pastGuesses=pastGuesses + event.key + ", ";

// Randomly chooses a choice from the options array. This is the Computer's word.
var chosenWord = computerWord[Math.floor(Math.random() * computerWord.length)];
console.log(chosenWord);
var splitWord = chosenWord.split("");
console.log(splitWord);
const spaces = [];
var blanks = chosenWord.length;

for (i=0; i<blanks; i++){
   spaces.push("_ "); 
}
console.log(spaces);




// function splitItUp() {
//     var wordSplit = chosenWord.split("");
// }

// console.log(wordSplit);
// let slicePlate = []
// chosenWord.forEach(function(letter){
// for(i=0; i<chosenWord.length; i++){
//     const letterBlank = letter.slice(i, i+1);
//     slicePlate.push(letter);
// }
// });

// console.log(slicePlate);

if (chosenWord.includes(userGuess)) {
    wins++;
    pastGuesses="";
    blanks--;
    console.log("blanks" + blanks);
  } else {
    guessesRemaining--;
  }
if (guessesRemaining < 1){
losses++;
guessesRemaining=12;
pastGuesses="";

// function inArray(pastGuesses)
// {
//     var count=userGuess.length;
//     for(var i=0;i<count;i++)
//     {
//         if(userGuess[i]===userGuess){return true;}
//     }
//     return false;
// }

}

 /* /document.onkeyup() */


// Display the user and computer guesses, and wins/losses/ties.

userChoiceText.textContent = "You chose: " + userGuess;
chosenWordText.textContent = "The computer chose: " + chosenWord;
pastGuessesText.textContent = "Your previous guesses: " + pastGuesses;
guessesRemainingText.textContent = "Your guesses remaining: " + guessesRemaining;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
hiddenWordText.textContent = (spaces);
};
