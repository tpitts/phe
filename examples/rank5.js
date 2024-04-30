'use strict';

const { evaluateCards, rankBoard, rankCategoryDescription } = require('../');
const rankDescription = require('../lib/rank-descriptions-table'); // Path to your rankDescription module

// Define the board as an array of cards
const boardArray = ['As', 'Ks', '4h', 'Ad', 'Kd'];

// Convert the array of cards to a space-separated string for functions requiring string input
const boardString = boardArray.join(' ');

// Use the string to evaluate the board rank
const rank = rankBoard(boardString);

// Use the array to evaluate and get detailed rank descriptions
const category = rankCategoryDescription[rank];

console.log(evaluateCards(boardArray));
const detailedDescription = rankDescription[evaluateCards(boardArray)]; // Pass the array directly

console.log('%s is a %s', boardString, category);
if (detailedDescription) {
    console.log('Detailed Description: %s, Hand: %s', detailedDescription.description, detailedDescription.hand);
} else {
    console.log('No detailed description available.');
}