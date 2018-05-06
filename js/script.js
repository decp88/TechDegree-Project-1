// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Variables
var quote;
var source;
var yearWrote;
var citation;
var tag;

// Set interval for quote 12 seconds

setInterval(printQuote, 12000);

//Select random quote

function getRandomQuote() {
    var randomNum = Math.floor(Math.random() * 5) + 1;
    var selectedRandomQuote = quotes[randomNum];
    
    return selectedRandomQuote;
}


// Print quote to screen and change background colour 

function printQuote () {
    var pickedQuote = getRandomQuote();

    
//Construct string beneath quote
    var constructEverything = '';
    
    constructEverything += '<p class="quote">' + pickedQuote.quote + '</p>';
    constructEverything += '<p class="source">' + pickedQuote.source;
    
    
    if(pickedQuote.citation) {
        constructEverything += '<span class="citation">' + pickedQuote.citation + '</span>';
    }
    
    if (pickedQuote.year) {
        constructEverything += '<span class="year">' + pickedQuote.year + '</span>';
    }
    
    if (pickedQuote.tag) {
        constructEverything += '<span class="tag">' + pickedQuote.tag + '</span>';
    }
    
    constructEverything += '</p>'
 
    document.getElementById('quote-box').innerHTML = constructEverything;
    document.body.style.backgroundColor = randomRGB();

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
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}




    


