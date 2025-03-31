// Asynchronous Programming
// Promises

// The easiest way to create a promise is by calling Promise.resolve. This function ensures that the value you give it is wrapped in a promise. If it’s already a promise, it is simply returned. 
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
// Failure

// Handlers that don’t match the type of outcome (success or failure) are ignored. Handlers that do match are called, and their outcome determines what kind of value comes next—success when they return a non-promise value, rejection when they throw an exception, and the outcome of the promise when they return a promise.

new Promise((_, reject) => reject(new Error("Fail"))) 
    .then(value => console.log("Handler 1:", value)) 
    .catch(
    reason => {
        console.log("Caught failure " + reason);
        return "nothing";
    })
    .then(value => console.log("Handler 2:", value));
    
    
    // Generators
    // When you define a function with function* (placing an asterisk after the word function), it becomes a generator. When you call a generator, it returns an iterator
    function* powers(n) {
        for (let current = n;; current *= n) {
            yield current;
        }
    }
    
    for (let power of powers(3)) {
        if (power > 50) break;
        console.log(power);
    }