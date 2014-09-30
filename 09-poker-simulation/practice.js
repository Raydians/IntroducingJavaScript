var suits = ["clubs", "diamonds", "hearts", "spades"];
var ranks = ["two", "three", "four", "five", "six", "seven", "eight",
             "nine", "ten", "jack", "queen", "king", "ace"];

var isSuit = function (suit) {
	return suits.indexOf(suit) > -1;
};

var isRank = function (rank) {
	return ranks.indexOf(rank) > -1;
};

var isCard = function (card) {
	return isSuit(card.suit) && isRank(card.rank);
};

var isDeck = function (deck) {
	var newDeck = [];
	for (var i = 0; i < 52; i++) {
		//is current card a duplicate?
		if (newDeck.indexOf(deck[i]) > -1) {
			return false;
		} else {
			//no, add to newDeck
			newDeck.push(deck[i]);
		}
	}
	//52 unique cards
	return true;
};

var createDeck = function () {
	var deck = [];
	for (var i = 0; i < suits.length; i++) {
		for (var j = 0; j < ranks.length; j++) {
			var card = { "suit":suits[i], "rank":ranks[j]};
			deck.push(card);
		}
	}
	return deck;
};

var shuffle = function () {
};

var isHand = function () {
};

var dealHand = function () {
	var hand = [];
	var deck = createDeck();
	var randoms = [];
	//generate 5 distinct numbers of range 0-51
	while (randoms.length < 5) {
		var random = Math.random() * Number.MAX_VALUE % 52;
		if (randoms.indexOf(random) > -1) {
			continue;
		} else {
			randoms.push(random);
		}
	}
	//use the 5 random indices to select cards from deck
	for (var i = 0; i < 5; i++) {
		hand.push(deck[randoms[i]]);
	}
	return hand;
};

var isHigherThan = function (card1, card2) {
	if (isCard(card1) && isCard(card2)) {
		//rank is higher
		if (ranks.indexOf(card1.rank) > ranks.indexOf(card2.rank)) {
			return true;
		}
		else if (ranks.indexOf(card1.rank) === ranks.indexOf(card2.rank)) {
			//rank is equal but suit is higher
			if (suits.indexOf(card1.suit) > suits.indexOf(card2.suit)) {
				return true;
			}
		}
	}
	return false;
};

var isLowerThan = function (card1, card2) {
	if (isCard(card1) && isCard(card2)) {
		//rank is lower
		if (ranks.indexOf(card1.rank) < ranks.indexOf(card2.rank)) {
			return true;
		}
		else if (ranks.indexOf(card1.rank) === ranks.indexOf(card2.rank)) {
			//rank is equal but suit is lower
			if (suits.indexOf(card1.suit) < suits.indexOf(card2.suit)) {
				return true;
			}
		}
	}
	return false;
};

var highCard = function (hand) {
	//set first card to be highCard
	var highCard = hand[0];
	for (var i = 1; i < hand.length; i++) {
		//if current card is higher than highCard, set to be highCard
		if (isHigherThan(hand[i], highCard)) {
			highCard = hand[i];
		} 
	}
	return highCard;
};

var lowCard = function (hand) {
	//set first card to be lowCard
	var lowCard = hand[0];
	for (var i = 1; i < hand.length; i++) {
		//if current card is lower than lowCard, set to be lowCard
		if (isLowerThan(hand[i], lowCard)) {
			lowCard = hand[i];
		} 
	}
	return lowCard;
};

var containsPair = function () {
};

var containsTwoPair = function () {
};

var containsThreeOfAKind = function () {
};

var containsFullHouse = function () {
};

var containsStraight = function () {
};

var containsFlush = function () {
};

var containsStraightFlush = function () {
};

var containsRoyalFlush = function () {
};

