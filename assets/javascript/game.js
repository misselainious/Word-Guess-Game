// Creating variabless to hold stats
var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessesRemaining = 5;
var wins = 0;
var losses = 0;
var pastGuesses = "";
var computerWord = ["eiffel tower", "taj mahal", "leaning tower of pisa", "trevi fountain", "grand canyon"];
var answerArray = [];
var guessBank = [];

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var computerWordText = document.getElementById("computerword-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessesRemainingText = document.getElementById("guessesRemaining-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var pastGuessesText = document.getElementById("pastGuesses-text");
var chosenWordText = document.getElementById("chosenWord-text");
var hiddenWordText = document.getElementById("hiddenWord-text");
var displayWordText = document.getElementById("displayWord-text");
var test2Text = document.getElementById("test2-text");

// Randomly chooses a choice from the options array. This is the Computer's word.
var chosenWord = computerWord[Math.floor(Math.random() * computerWord.length)];

//breaks chosen word up into guessable letters
var answerArray = chosenWord.split("");
console.log(answerArray);

// This function is run whenever the user presses a key.
document.onkeyup = event => {
    // user guesses by hitting key
    var userGuess = event.key;

    if (userChoices.includes(userGuess)) {
        if (guessBank.includes(!userGuess)) {
            pastGuesses = pastGuesses + event.key + ", ";
        }
        // if(guessBank.includes(userGuess)){
        //     pastGuesses=pastGuesses;
        // }

        //if the user Guess is not in the word, guesses go down by 1
        if ((!chosenWord.includes(userGuess)) && (!guessBank.includes(userGuess))) {
            guessesRemaining--;
        }

        if (guessesRemaining === 0) {
            losses++;
            alert("Awww...that one was hard...you lose.")
            guessBank = [];
            guessesRemaining = 5;
            chosenWord = computerWord[Math.floor(Math.random() * computerWord.length)];
        }


        //Loop for finding correct characters
        for (i = 0; i < chosenWord.length; i++) {

            if (((chosenWord.charAt(i)) === userGuess) || (guessBank.includes(chosenWord.charAt(i)))) {
                guessBank.push(userGuess);
                answerArray[i] = chosenWord[i];
            } else if ((chosenWord.charAt(i)) !== userGuess) {
                guessBank.push(userGuess);
                answerArray[i] = "_"
            }
            if ((chosenWord.charAt(i)) === " ") {
                answerArray[i] = " "
            }

        }

        //choosenWordArray[i] = userGuess

        var filteredArray = guessBank.filter(function (item, pos) {
            return guessBank.indexOf(item) == pos;
        })

        console.log("filtered array" + filteredArray);



        console.log("chosen word: " + chosenWord);
        console.log("user guess: " + userGuess);



        if (!answerArray.includes("_")) {
            wins++;
            alert("Wow! You're super smart! You win!");
            guessesRemaining = 5;
            guessBank = [];
            chosenWord = computerWord[Math.floor(Math.random() * computerWord.length)];

        }


        // Display the user stats.

        userChoiceText.textContent = "You chose: " + userGuess;
        // chosenWordText.textContent = "The computer chose: " + chosenWord;
        pastGuessesText.textContent = "Your previous guesses: " + filteredArray;
        // displayWordText.textContent = "Answer: " + answerArray;
        guessesRemainingText.textContent = "Your guesses remaining: " + guessesRemaining;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        // hiddenWordText.textContent = (spaces);
        // splitWordText.textContent = "split word: " + splitWord;
        test2Text.innerHTML = "Word You're guessing: " + answerArray;


    }
};