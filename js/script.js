// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quote;
var author;
var randomNum = Math.round(Math.random() * 4 +1);

function getRandomQuote(randomNumber) {
    var selectedRandomQuote = quotes[randomNumber];
    quote = selectedRandomQuote.quote;
    author = selectedRandomQuote.author;
    
    return selectedRandomQuote;
}


function printQuote () {
    var pickedQuote = getRandomQuote(randomNum);
    quote = pickedQuote.quote;
    author = pickedQuote.author;
    
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('source').innerHTML = author;
    
}

