document.addEventListener("DOMContentLoaded", () => {
    const words = ["javascript", "hangman", "programming", "code"];
    let chosenWord, wordDisplay, wrongGuesses, maxWrongGuesses;

    const wordDisplayElement = document.getElementById("wordDisplay");
    const messageElement = document.getElementById("message");
    const guessInput = document.getElementById("guessInput");
    const guessButton = document.getElementById("guessButton");
    const wrongGuessesElement = document.getElementById("wrongGuesses");
    const hangmanImageElement = document.getElementById("hangmanImage");
    const resetButton = document.getElementById("resetButton");

    function initializeGame() {
        chosenWord = words[Math.floor(Math.random() * words.length)];
        wordDisplay = "_".repeat(chosenWord.length).split("");
        wrongGuesses = [];
        maxWrongGuesses = 7;

        wordDisplayElement.textContent = wordDisplay.join(" ");
        messageElement.textContent = "";
        wrongGuessesElement.textContent = `Wrong guesses: ${wrongGuesses.join(", ")}`;
        hangmanImageElement.src = `./images/Hangman01.png`;

        guessInput.value = "";
        guessInput.focus();
    }

    function updateGame(guess) {
        if (chosenWord.includes(guess)) {
            chosenWord.split("").forEach((letter, index) => {
                if (letter === guess) {
                    wordDisplay[index] = guess;
                }
            });
        } else {
            if (!wrongGuesses.includes(guess)) {
                wrongGuesses.push(guess);
                maxWrongGuesses--;
                updateHangmanImage();
            }
        }

        wordDisplayElement.textContent = wordDisplay.join(" ");
        wrongGuessesElement.textContent = `Wrong guesses: ${wrongGuesses.join(", ")}`;
        hangmanImageElement.textContent = `Guesses left: ${maxWrongGuesses}`;

        checkGameStatus();
    }

    function updateHangmanImage() {
        hangmanImageElement.src = `./images/Hangman0${7 - maxWrongGuesses}.png`;
    }

    function checkGameStatus() {
        if (!wordDisplay.includes("_")) {
            messageElement.textContent = "Congratulations! You won!";
            guessButton.disabled = true;
        } else if (maxWrongGuesses === 0) {
            messageElement.textContent = `Game Over! The word was "${chosenWord}".`;
            guessButton.disabled = true;
        }
    }

    guessButton.addEventListener("click", () => {
        const guess = guessInput.value.toLowerCase();
        if (guess && guess.length === 1 && /^[a-z]$/.test(guess)) {
            updateGame(guess);
            guessInput.value = "";
            guessInput.focus();
        } else {
            messageElement.textContent = "Please enter a valid single letter.";
        }
    });

    resetButton.addEventListener("click", () => {
        guessButton.disabled = false;
        initializeGame();
    });

    initializeGame();
});
