// Memory leaks

// Global variables 
var a = 1;
// A memory leak occurs when a declared variable is automatically available to the inner nested function and resides in a memory despite it is not referenced in the inner nested function.

// Event listeners 
var element = document.querySelector('button');
element.addEventListener('click', onClick)
// need to remove event listeners when you no longer need them  

// setinterval 
setInterval(() => {
  // referencing objects 
})

// A reference - https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/
