var expect = chai.expect;

describe('MyFunctions', function() {
    describe('deal', function() {
        it('should return a deck of cards', function() {
            var deck = new Deck();
            expect(deck.deck.length).to.equal(52);
        });
    });
});