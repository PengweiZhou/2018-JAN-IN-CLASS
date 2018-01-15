

// Demo of calling function - console is the Javascript editor envirment in the brower
//console.log(message)
console.log('main.js is loaded')

// The updateInnerHTML function has two parmenters; 
// - selector - is a string that identifies which DOM element to get/start
// - newValue - is a string that will be the new value foe the selector's .innerHTML
function updateInnerHTML(selector, newValue){
    document.querySelector(selector).innerHTML = newValue; 
}

function strong(value){
    // Combining strings to produce a new string is called concation
    return '<strong>' + value + '</strong>'; 
}