// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quote;
var author;
var yearWrote;



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
    
    
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('source').innerHTML = author;
    document.getElementById('year').innerHTML = yearWrote;
}
    
    /*if(year !== "0") {
        
    }
    else {
        document.getElementById('year').innerHTML = "year not known";
    }*/
    


