console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardInPlay = [];

function checkForMatch() {
if(cardInPlay[0] === cardInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
	}
};

function flipCard(cardID) {	
console.log("User flipped " + cards[cardID]);
cardInPlay.push(cards[cardID]);

if(cardInPlay.length === 2) {
	checkForMatch();
}
};

flipCard(0);
flipCard(2);




