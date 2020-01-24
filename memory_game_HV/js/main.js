console.log("Up and running!");

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

const cardsInPlay = [];

function checkForMatch() {
	// if statements for checking card X [0] and card Y [1] 
if(cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	console.log("You gained 10 points!");
	alert("You found a match!");

} else {
	console.log("Sorry, try again.");
	console.log("You gained 0 points.");
	alert("Sorry, try again.");
	}
};

function flipCard() {
	// selecting the element and setting it to cardId
let cardId = this.getAttribute('data-id');	
this.setAttribute('src', cards[cardId].cardImage);
console.log("User flipped " + cards[cardId].rank + " of " + cards [cardId].suit);
	// adding the selected card to the array cardsInPlay
cardsInPlay.push(cards[cardId].rank);
	
if(cardsInPlay.length === 2) {
	checkForMatch();
	}
};

function createBoard() {
	// for loop that creates a game board (deck of 4 face down cards)
	for(let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

// Event listener for the reset button
function resetGame() {
 const resetButton = document.getElementById('reset');
 resetButton.addEventListener('click', createBoard);
};

resetGame();

// Scoring points
let totalScore = 0;
function addScore () {
	// if there's a match, add 10 points
	if(cardsInPlay[0] === cardsInPlay[1]) {
		totalScore += 10;
		const totalScore = document.createElement('span');
		document.getElementById('totalPoints').appendChild(totalScore);	
	
	} else {
		return;
	}
};

addScore();
