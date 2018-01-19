console.log('adhocs.js is loaded')
// Create a function called wrapInBlockquote that will take in a single value and return a string that wrap the text in an HTML blockquote type

function wrapInBlockquote(text){
     return '<blockquote>' + text + '</blockquote>'; 
}

// Write the javascript code get the element with the id of "leadQuote" and, using function in step1, wrap the contents of that element in blockquote. 

var tag = document.getElementById('leadQuote')
//var tag = document.querySelector('#leadQuote')
tag.innerHTML = wrapInBlockquote(tag.innerHTML)
