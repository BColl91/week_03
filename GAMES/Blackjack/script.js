document.addEventListener("DOMContentLoaded", () => {
    const deck = [];
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    let playerHand = [];
    let dealerHand = [];
    let playerScore = 0;
    let dealerScore = 0;
    let gameOver = false;

    const playerHandElement = document.getElementById("playerCards");
    const dealerHandElement = document.getElementById("dealerCards");
    const playerScoreElement = document.getElementById("playerScore");
    const dealerScoreElement = document.getElementById("dealerScore");
    const messageElement = document.getElementById("message");
    const hitButton = document.getElementById("hitButton");
    const standButton = document.getElementById("standButton");
    const restartButton = document.getElementById("restartButton");

    function createDeck() {
        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push({ suit, rank });
            }
        }
    }

    function shuffleDeck() {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }

    function dealCard(hand) {
        const card = deck.pop();
        hand.push(card);
        return card;
    }

    function getCardValue(card) {
        if (["jack", "queen", "king"].includes(card.rank)) {
            return 10;
        } else if (card.rank === "ace") {
            return 11; // Handle ace as 11 initially
        } else {
            return parseInt(card.rank);
        }
    }

    function calculateScore(hand) {
        let score = 0;
        let aces = 0;

        for (let card of hand) {
            score += getCardValue(card);
            if (card.rank === "ace") aces += 1;
        }

        while (score > 21 && aces > 0) {
            score -= 10;
            aces -= 1;
        }

        return score;
    }

    function updateScores() {
        playerScore = calculateScore(playerHand);
        dealerScore = calculateScore(dealerHand);
        playerScoreElement.textContent = `Score: ${playerScore}`;
        dealerScoreElement.textContent = `Score: ${dealerScore}`;
    }

    function updateHands() {
        playerHandElement.innerHTML = "";
        dealerHandElement.innerHTML = "";
        
        playerHand.forEach(card => {
            const cardImage = document.createElement("img");
            cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
            cardImage.alt = `${card.rank} of ${card.suit}`;
            playerHandElement.appendChild(cardImage);
        });

        dealerHand.forEach(card => {
            const cardImage = document.createElement("img");
            cardImage.src = `./images/${card.rank}_of_${card.suit}.png`;
            cardImage.alt = `${card.rank} of ${card.suit}`;
            dealerHandElement.appendChild(cardImage);
        });
    }

    function checkForEndOfGame() {
        if (playerScore === 21) {
            messageElement.textContent = "Blackjack! Player wins!";
            gameOver = true;
        } else if (playerScore > 21) {
            messageElement.textContent = "Player busts! Dealer wins!";
            gameOver = true;
        } else if (dealerScore > 21) {
            messageElement.textContent = "Dealer busts! Player wins!";
            gameOver = true;
        } else if (dealerScore >= 17) {
            if (dealerScore > playerScore) {
                messageElement.textContent = "Dealer wins!";
            } else if (dealerScore < playerScore) {
                messageElement.textContent = "Player wins!";
            } else {
                messageElement.textContent = "It's a tie!";
            }
            gameOver = true;
        }

        if (gameOver) {
            hitButton.disabled = true;
            standButton.disabled = true;
        }
    }

    function dealerPlay() {
        while (dealerScore < 17) {
            dealCard(dealerHand);
            updateHands();
            updateScores();
            checkForEndOfGame();
        }
    }

    hitButton.addEventListener("click", () => {
        if (!gameOver) {
            dealCard(playerHand);
            updateHands();
            updateScores();
            checkForEndOfGame();
        }
    });

    standButton.addEventListener("click", () => {
        if (!gameOver) {
            dealerPlay();
            updateScores();
            checkForEndOfGame();
        }
    });

    restartButton.addEventListener("click", () => {
        deck.length = 0;
        playerHand.length = 0;
        dealerHand.length = 0;
        playerScore = 0;
        dealerScore = 0;
        gameOver = false;
        messageElement.textContent = "";
        hitButton.disabled = false;
        standButton.disabled = false;
        createDeck();
        shuffleDeck();
        dealCard(playerHand);
        dealCard(playerHand);
        dealCard(dealerHand);
        dealCard(dealerHand);
        updateHands();
        updateScores();
        checkForEndOfGame();
    });

    createDeck();
    shuffleDeck();
    dealCard(playerHand);
    dealCard(playerHand);
    dealCard(dealerHand);
    dealCard(dealerHand);
    updateHands();
    updateScores();
});
