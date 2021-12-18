  // The deck will consist of cards and the cards will make an array.  Also need to make it so that the deck can deal and shuffle out to the players. //
class Card {
    constructor(suits, face, value) {
        this.suits = suits;
        this.face = face;
        this.value = value;
    }

    
}

  class Deck {
    constructor() {
    this.deck = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    const cvalues = {
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '10' : 10,
    'Jack' : 11,
    'Queen' : 12,
    'King' : 13,
    'Ace' : 14
    }

    for (let suit of suits) {
        for (let value of values) {
                this.deck.push(new Card(suit, value, cvalues[value]));
            }
        }
    }

    shuffle(){
        const { deck } = this;
        let m = deck.length, i;
    
        while(m){
          i = Math.floor(Math.random() * m--);
    
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
    
        return this;
    }
    
      deal(){
        return this.deck;
    }
    
}

// test out class
const mainDeck = new Deck();
mainDeck.shuffle();
const deckOne = mainDeck.deck.slice(0, 26);
const deckTwo = mainDeck.deck.slice(26, 53);

// Create a player class.  The player will have: a name, a deck, and points to start out at the beginning of each round (the beginning count would be 0 for both of them) //
class Player {
    constructor(name, deck, points) {
        this.name = name;
        this.deck = deck;
        this.points = points;
    }
}

let playerOne = new Player('Player One', deckOne, 0);
let playerTwo = new Player('Player Two', deckTwo, 0);

// Create system.  Compare the cards and collect the points //
function playingGame() {
    for (let i=0; i < 26; i++) {
        const playerOneCard = playerOne.deck.pop();
        const playerTwoCard = playerTwo.deck.pop();
        console.log(`Round: ${i+1}`)
        console.log(`Player One played ${playerOneCard.face} of ${playerOneCard.suits} Player Two played ${playerTwoCard.face} of ${playerTwoCard.suits}.`);
        if (playerOneCard.value > playerTwoCard.value) {
            playerOne.points++;
            console.log('Player One wins the round!');
        } else if (playerTwoCard.value > playerOneCard.value) {
            playerTwo.points++;
            console.log('Player Two wins the round!');
        } else {
            console.log("No one wins the round.  It's a tie!");
        }
        console.log(`${playerOne.name} has ${playerOne.points} points and ${playerTwo.name} has ${playerTwo.points} points!`)
    }
    if (playerOne.points > playerTwo.points) {
        console.log('Player One wins the game!');
    } else if (playerTwo.points > playerOne.points) {
        console.log('Player Two wins the game!');
    } else {
        console.log('No one wins the game. Ya both losers!');
    }
}

playingGame();