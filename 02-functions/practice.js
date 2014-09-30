var add = function (a, b) {
	return a + b;
};

var totalCost = function (qty, price) {
	return qty * price;
};

var cardString = function (rank, suit) {
	return rank + " of " + suit;
};

var openTag = function (tag) {
	return "<" + tag + ">";
};

var closeTag = function (tag) {
	return "</" + tag + ">";
};

var toTagString = function (tag, content) {
	return openTag(tag) + content + closeTag(tag);
};


