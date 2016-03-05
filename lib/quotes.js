var quotes = [
  "Life is short, isn't it?",
  "If you love something, be prepared to lose it.",
  "Less is more",
  "Icecream is icear in ice wheather.",
  "Deadman's Dream"
];

exports.getQuote = function(){
  var randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};
