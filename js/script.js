// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quote;
var author;
var yearWrote;
var citation;


function getRandomQuote() {
    var randomNum = Math.round(Math.random() * 4 +1);
    var selectedRandomQuote = quotes[randomNum];
    
    return selectedRandomQuote;
}


function printQuote () {
    var pickedQuote = getRandomQuote();
    quote = pickedQuote.quote;
    author = pickedQuote.author;
    yearWrote = pickedQuote.year;
    citation = pickedQuote.citation
    
    
    var constructCiting = author;
    
    if(citation != 1) {
        constructCiting = author;
        constructCiting += "<span class='citation'>" + citation + "</span>";
    }
    
    if (yearWrote === 1) {
        constructCiting;
    }
    else {
        constructCiting;
        constructCiting += "<span id='year'>" + yearWrote + "</span>";
    }
    
    
    document.getElementById('source').innerHTML = constructCiting;
    document.getElementById('quote').innerHTML = quote;

}


    


