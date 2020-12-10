// Memory heap is where the memory allocation happens - storing information 
// Call stack is where the engine keeps track of where your code is in its execution 

// call stack + memory heap 
const numb = 610; // allocate memory for a number 
const str = 'some text' // allocate memory for a string 
const human = { // allocate memory for an object... and it's values 
  firstName: 'Joe',
  lastName: "Lynn"
}

function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

// every time we run a function - we are adding to the call stack
calculate();
