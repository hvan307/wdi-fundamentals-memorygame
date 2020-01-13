console.log("Up and running!");

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardInPlay = [];

function checkForMatch() {
if(cardInPlay[0] === cardInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
	}
};

function flipCard(cardID) {	
console.log("User flipped " + cards[cardID].rank);
console.log(cards[cardID].cardImage);
console.log(cards[cardID].suit);
cardInPlay.push(cards[cardID].rank);

if(cardInPlay.length === 2) {
	checkForMatch();
}
};

flipCard(0);
flipCard(2);




