console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardInPlay = [];

let cardOne = cards[0];
cardInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[1];
cardInPlay.push(cardTwo);
console.log("user flipped "+ cardTwo);

if (cardInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
} else {
	(cardInPlay.length === 2 && cardOne !== cardTwo)
	alert("Sorry, try again.");
};
