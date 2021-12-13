// Start by creating constant variables that won't have value changes that help set up the cards and decks //

  // The deck will consist of cards and the cards will make an array.  Also need to make it so that the deck can deal and shuffle out to the players. //
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

    for (let suit in suits) {
        for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
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
const deckTwo = mainDeck.deck.slice(27, 53);

// Create a player class.  The player will have: a name, a deck, and points to start out at the beginning of each round (the beginning count would be 0 for both of them) //
class Player {
    constructor(name, deck, points) {
        this.name = name;
        this.deck = deck;
        this.points = points;
    }
}

let playerOne = console.log(new Player('One', deckOne, 0));
let playerTwo = console.log(new Player('Two', deckTwo, 0));
console.log(`${this.playerOne} played ${deckOne[0]}`);
console.log(deckTwo[0]);

// Create turning system.  The taking of turns for each player as they draw a card //
function takingTurns() {
    playerTwo = !playerTwo;
}

// Determine which player gets the point between the cards played //
function winningCard(deckOne, deckTwo) {
    
    for (i = 0; i < deckOne[cvalue]; i++) {
        for (j = 0; j < deckOne[cvalue]; j++) {
    if (deckOne[cvalue] > deckTwo[cvalue]) {
        `${playerOne} wins the round.`
    } else if (deckTwo[cvalue] > deckOne[cvalue]) {
        `${playerTwo} wins the round.`
    } else {
        "No player wins the round.  It's a tie."
            }
        }
    }
}

console.log(winningCard());

// Creating a function to gather the points per player //


// Create the code for the game in one place //

function startWar() {
    takingTurns()
}
