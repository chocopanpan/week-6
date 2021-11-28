const cardValues = {
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
  
  class Player {
  constructor(name, deck, points) {
      this.name = name;
      this.deck = deck;
      this.points = points;
  }
  
}

class Deck {
  constructor() {
    this.deck = [];

    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
   
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

const deck1 = new Deck();
const deck2 = new Deck();
deck1.shuffle()
deck1.deal()
let player1 = new Player('Charlie', deck1.deck.slice(0, 26), 0);
console.log(player1);
deck2.shuffle()
deck2.deal()
let player2 = new Player('Jasmine', deck2.deck.slice(26, 53), 0);
console.log(player2);

//   console.log(deck1.deck.slice(0, 26));
//   console.log(deck2.deck.slice(26, 53));

const player1Card = player1.deck.pop();
const player2Card = player2.deck.pop();

function startingRounds() {
  for (let i = 0; i < deck1.deck; i++) {
      for (let j = 0; j < deck2.deck; j++) {
      if (deck1.deck[i] > deck2.deck[j]) {
      player1.points = player1.points + 1;
      player2.points = player2.points + 0;
  }   else if (deck2.deck[j] > deck1.deck[i]) {
      player2.points = player2.points + 1;
      player1.points = player1.points + 0;
  }   else {
      player1.points = player1.points + 0;
      player2.points = player2.points + 0;
  }
      }
  }
  
}

startingRounds()

function compareCards(cardOne, cardTwo) {
  return cardValues[cardOne.values] > cardValues[cardTwo.values];
}