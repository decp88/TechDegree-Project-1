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
    var randomNum = Math.round(Math.random() * 4 +1);
    var selectedRandomQuote = quotes[randomNum];
    
    return selectedRandomQuote;
}


// Print quote to screen and change background colour 

function printQuote () {
    var pickedQuote = getRandomQuote();
    quote = pickedQuote.quote;
    author = pickedQuote.author;
    yearWrote = pickedQuote.year;
    citation = pickedQuote.citation;
    tag = pickedQuote.tag;
    
    
    
    var constructCiting = author;
    
    if(citation !== 1) {
        constructCiting = author;
        constructCiting += "<span class='citation'>" + citation + "</span>";
    }
    
    if (yearWrote !== 1) {
        constructCiting;
        constructCiting += "<span id='year'>" + yearWrote + "</span>";
    }
    
    if (tag !== 1) {
        document.getElementById("tag").innerHTML = tag;
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




    


