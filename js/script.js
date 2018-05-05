// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Variables
var quote;
var author;
var yearWrote;
var citation;
var tag;

// Set interval for quote 12 seconds

setInterval(printQuote, 12000);

//Select random quote

function getRandomQuote() {
    var randomNum = Math.round(Math.random() * quotes.length);
    var selectedRandomQuote = quotes[randomNum];
    
    return selectedRandomQuote;
}


// Print quote to screen and change background colour 

function printQuote () {
    var pickedQuote = getRandomQuote();
    quote = pickedQuote.quote;
    author = pickedQuote.author;

    
//Construct string beneath quote
    var constructCiting = author;
    
    if(pickedQuote.citation) {
        constructCiting = author;
        constructCiting += "<span class='citation'>" + pickedQuote.citation + "</span>";
    }
    
    if (pickedQuote.year) {
        constructCiting;
        constructCiting += "<span id='year'>" + pickedQuote.year + "</span>";
    }
    
    if (pickedQuote.tag) {
        document.getElementById("tag").innerHTML = pickedQuote.tag;
    }
 
    
    document.getElementById('source').innerHTML = constructCiting;
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('quote-box').style.background = randomRGB();

}

// Generate Random colour for background for each quote

function randomRGB() {
  var col =
    "rgb(" +
    randomColor(255) +
    "," +
    randomColor(255) +
    "," +
    randomColor(255) +
    ")";
  return col;
}

function randomColor(num) {
  var randomNumber = Math.round(Math.random() * num);
  return randomNumber;
}




    


