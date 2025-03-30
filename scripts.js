// Asynchronous Programming
// Promises

// The easiest way to create a promise is by calling Promise.resolve. This function ensures that the value you give it is wrapped in a promise. If it’s already a promise, it is simply returned. 
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));